(function(e){if("function"==typeof bootstrap)bootstrap("jski",e);else if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeJski=e}else"undefined"!=typeof window?window.jski=e():global.jski=e()})(function(){var define,ses,bootstrap,module,exports;
return (function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0].call(u.exports,function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
var common = require('./lib/common.js');
var serialize = require('./lib/serialize.js');
var vs = require('./lib/validators.js');

//
// exports
//

module.exports = {
    
  boolean: function() { return new vs.Boolean(); },
  number:  function() { return new vs.Number(); },
  integer: function() { return new vs.Integer(); },
  string:  function() { return new vs.String(); },
  any:     function() { return new vs.Any(); },
  null:    function() { return new vs.Null(); },

  array:   function(varargs) {
    return new vs.Array(common.cloneArgs(arguments));
  },
  object:  function(properties) {
    return new vs.Object(properties);
  },
  'enum':    function(varargs) {
    return new vs.Enum(common.cloneArgs(arguments));
  },
  allOf:   function(varargs) {
    return new vs.AllOf(common.cloneArgs(arguments));
  },
  anyOf:   function(varargs) {
    return new vs.AnyOf(common.cloneArgs(arguments));
  },
  oneOf:   function(varargs) {
    return new vs.OneOf(common.cloneArgs(arguments));
  },
  ref:     function(name) {
    return new vs.Ref(name);
  },

  schema: serialize.fromJSON,
  createValue: serialize.createValue
};




},{"./lib/common.js":3,"./lib/serialize.js":10,"./lib/validators.js":12}],2:[function(require,module,exports){
var Validator = require('./validator.js');
var Constraint = require('./constraints.js').Constraint;
var VarArgsConstraint = require('./constraints.js').VarArgsConstraint;
var common = require('./common.js');
var serialize = require('./serialize.js');

//
// Array Validator
//

var ArrayValidator = module.exports = function(items) {

  Validator.call(this, 'array');

  this.addOption('additionalItems', true);
  
  this.addConstraint(new Constraint(
    'maxItems',
    function(value, m, options, path) {
      return value.length <= m ? [] : [
        this.makeError('Number of items is larger than maximum: ' + m, path)
      ];
    }
  ));

  this.addConstraint(new Constraint(                     
    'minItems',
    function(value, m, options, path) {
      return value.length >= m ? [] : [
        this.makeError('Number of items is less than minimum: ' + m, path)
      ];
    }
  ));

  this.addConstraint(new Constraint(                     
    'uniqueItems',
    function(value, u, options, path) {
      if (!u) return [];

      var errors = [];
      var cache = {};

      for (var i = 0; i < value.length; ++i) {
        var str = JSON.stringify(value[i]);
        if (cache[str]) {
          this.addError(errors, 'Array items are not unique', path);
          break;
        }
        cache[str] = true;
      };
      return errors;
    }
  ));

  this.addConstraint(new VarArgsConstraint(                     
    'items',
    function(values, items, options, path) {

      var errors = [];
      var self = this;

      if (items.length > 1) {
        // array tuple

        values.forEach(function(value, i) {
          if (i < items.length) {
            self.addErrors(errors, items[i].validate(value, options, path + '[' + i + ']'));
          }
          else if (!self.additionalItems()) {
            self.addError(errors, 'Array index outside tuple length: ' + i, path + '[' + i + ']');
          }
        });
      }
      else if (items.length === 1 && !this.additionalItems()) {
        // array
        
        values.forEach(function(value, i) {
          self.addErrors(errors, items[0].validate(value, options, path + '[' + i + ']'));
        });
      }

      return errors;
    },
    
    function(items) {
      if (items.length > 1) {
        // tuple
        return items.map(function(item) {
          return item.toJSON();
        });
      }
      else if (items.length === 1) {
        return items[0].toJSON();
      }
      else return 'null';
    },

    function(schema) {
      if (common.isArray(schema)) {
        // tuple
        return schema.map(function(item) {
          return serialize.fromJSON(item);
        });
      }
      else {
        return [serialize.fromJSON(schema)];
      }
    }
  ));

  this.addCheck(function(values, options, path) {
    return common.isArray(values) ? [] : [
      this.makeError('Value is not a array', path)
    ];
  });

  // set items constraint
  if (items && common.isArray(items) && items.length) {
    this.items.apply(this, items);
  }
};

common.extend(ArrayValidator.prototype, Validator.prototype);

},{"./common.js":3,"./constraints.js":4,"./serialize.js":10,"./validator.js":11}],3:[function(require,module,exports){

module.exports = {

  isUndefined: function(x) {
    return x === void 0;
  },
  isNull: function(x) {
    return x === null;
  },
  isBoolean: function(x) {
    return typeof x === 'boolean';
  },

  isNumber: function(x) {
    return typeof x === 'number';
  },

  isString: function(x) {
    return typeof x === 'string';
  },

  isArray: function(x) {
    if (Array.isArray) return Array.isArray(x);
    return toString.call(x) == '[object Array]';
  },

  isObject: function(x) {
    return x === Object(x);
  },

  extend: function(a, b) {
    for (var n in b) {
      a[n] = b[n];
    }
    return a;
  },

  clone: function(o) {
    return JSON.parse(JSON.stringify(o));
  },

  cloneArgs: function(args, begin, end) {
    return Array.prototype.slice.call(args, begin || 0, end || args.length);
  },

  isKeyword: function(key) {
    return ['type', 'enum', 'allOf', 'anyOf', 'oneOf', '$ref'].indexOf(key) !== -1;
  },
  
  
  formats: {
  // originally taken from https://github.com/flatiron/revalidator/
  'email': /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,
  'ip-address': /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/i,
  'ipv6': /^([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4}$/,
  'date-time': /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:.\d{1,3})?Z$/,
  'date': /^\d{4}-\d{2}-\d{2}$/,
  'time': /^\d{2}:\d{2}:\d{2}$/,
  'color': /^#[a-z0-9]{6}$|^#[a-z0-9]{3}$|^(?:rgba?\(\s*(?:[+-]?\d+%?)\s*,\s*(?:[+-]?\d+%?)\s*,\s*(?:[+-]?\d+%?)\s*(?:,\s*(?:[+-]?\d+%?)\s*)?\))$/i,
  //'style': (not supported)
  //'phone': (not supported)
  //'uri': (not supported)
  'host-name': /^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$/,
  'utc-millisec': /^\d+$/,
  'regex': {
    test: function (value) {
      try { var re = new RegExp(value); }
      catch (e) { return false }
      return true;
    }
  },
  // non standard
  url: /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?$/,
  slug: /^([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])*$/
  }
};

},{}],4:[function(require,module,exports){
var common = require('./common.js');

//
// Constraint
//

function Constraint(name, validate, toJSON, fromJSON) {

  this.name = name;
  this.enabled = false;

  this._value = null;
  this._validator = null;
  
  this._validate = validate;
  this._toJSON = toJSON;
  this._fromJSON = fromJSON;
};


Constraint.prototype.decorate = function(validator) {

  var self = this;

  this._validator = validator;

  // add a setter for the contraint on the validator
  validator[this.name] = function(value) {
    self._value = value;
    self.enabled = true;
    return validator;
  };
};


Constraint.prototype.validate = function(value, options, path) {

  path = path || '';
  if (this._validate) {
    return this._validate.call(this._validator, value, this._value, options, path);
  }
  return true;
};


Constraint.prototype.toJSON = function() {

  return this._toJSON ?
    this._toJSON.call(this._validator, this._value) :
    this._value;
};


Constraint.prototype.fromJSON = function(value) {

  this._value = this._fromJSON ? this._fromJSON.call(this._validator, value) : value;
  this.enabled = true;
};


//
// Variable argument/values constraint
//

function VarArgsConstraint(name, values, validate, toJSON, fromJSON) {

  Constraint.call(this, name, values, validate, toJSON, fromJSON);
};

common.extend(VarArgsConstraint.prototype, Constraint.prototype);


VarArgsConstraint.prototype.decorate = function(validator) {

  var self = this;

  this._validator = validator;

  validator[this.name] = function(varargs) {
    self._value = common.cloneArgs(arguments);
    self.enabled = true;
    return validator;
  };
};


//
// exports
//

module.exports = {
  Constraint: Constraint,
  VarArgsConstraint: VarArgsConstraint
};
},{"./common.js":3}],5:[function(require,module,exports){
var Validator = require('./validator.js');
var Constraint = require('./constraints.js').Constraint;
var common = require('./common.js');

//
// Enum Validator
//

var EnumValidator = module.exports = function(items) {

  this.items = items || [];
  Validator.call(this, 'enum');

  this.addCheck(function(value, options, path) {
    var errors = [];
    var valid = false;
    
    this.items.forEach(function(item) {
      if (!valid) {
        if (common.isObject(item) || common.isArray(item)) {
          valid = JSON.stringify(item) === JSON.stringify(value);
        }
        else {
          valid = item === value;
        }
      }
    });

    if (!valid) {
      this.addError(errors, 'Not a valid enumeration item: ' + value, path);
    }
    return errors;
  });
};


common.extend(EnumValidator.prototype, Validator.prototype);


EnumValidator.prototype.toJSON = function() {
  return Validator.prototype.toJSON.call(this, { 'enum': this.items });
};


EnumValidator.prototype.fromJSON = function(schema) {
  this.items = schema.enum;
  return Validator.prototype.fromJSON.call(this, schema);
};


},{"./common.js":3,"./constraints.js":4,"./validator.js":11}],6:[function(require,module,exports){
var Validator = require('./validator.js');
var Constraint = require('./constraints.js').Constraint;
var VarArgsConstraint = require('./constraints.js').VarArgsConstraint;
var common = require('./common.js');
var serialize = require('./serialize.js');

//
// Object Validator
//

var ObjectValidator = module.exports = function(properties) {

  Validator.call(this, 'object');
  
  this.addOption('additionalProperties', true);

  this.addConstraint(new Constraint(
    'maxProperties',
    function(value, m, options, path) {
      return Object.keys(value).length <= m ? [] : [
        this.makeError('Number of properties is larger than maximum: ' + m, path)
      ];
    }
  ));
  
  this.addConstraint(new Constraint(
    'minProperties',
    function(value, m, options, path) {
      return Object.keys(value).length >= m ? [] : [
        this.makeError('Number of properties is less than minimum: ' + m, path)
      ];
    }
  ));

  this.addConstraint(new VarArgsConstraint(  
    'required',
    function(value, reqs, options, path) {
      var errors = [];
      var self = this;
      
      reqs.forEach(function(name) {
        if (!value.hasOwnProperty(name)) {
          self.addError(errors, 'Required property is missing: ' + name, path);
        }
      });
      return errors;
    }
  ));
  
  this.addConstraint(new Constraint(
    'properties',

    function(value, properties, options, path) {
      var errors = [];
      
      for (var n in value) {
        if (properties[n]) {
          this.addErrors(errors, properties[n].validate(value[n], options, path + '.' + n));
        }
        else if (!this.additionalProperties()) {
          this.addError(errors, 'Object has no property with name: ' + n, path + '.' + n);
        }
      }
      return errors;
    },

    function(properties) {
      var schema = {};
      Object.keys(properties).forEach(function(key) {
        schema[key] = properties[key].toJSON();
      });
      return schema;
    },

    function(schema) {
      properties = {};
      Object.keys(schema).forEach(function(key) {
        properties[key] = serialize.fromJSON(schema[key]);
      });
      return properties;
    }
  ));

  this.addCheck(function(value, options, path) {
    return common.isObject(value) && !common.isArray(value) ? [] : [
      this.makeError('Value is not an object', path)
    ];
  });
  
  // shortcut to set constraint
  if (properties) this.properties(properties);
};

common.extend(ObjectValidator.prototype, Validator.prototype);

},{"./common.js":3,"./constraints.js":4,"./serialize.js":10,"./validator.js":11}],7:[function(require,module,exports){
var Validator = require('./validator.js');
var common = require('./common.js');
var serialize = require('./serialize.js');


//
// *Of Validator
//

function OfValidator(items, type) {

  this.items = items;
  Validator.call(this, type);
}

common.extend(OfValidator.prototype, Validator.prototype);


OfValidator.prototype.toJSON = function() {
  var schema = {};
  schema[this.type] = this.items.map(function(item) {
    return item.toJSON();
  });
  return Validator.prototype.toJSON.call(this, schema);
};


OfValidator.prototype.fromJSON = function(schema) {
  this.items = schema[this.type].map(function(item) {
    return serialize.fromJSON(item);
  });
  return Validator.prototype.fromJSON.call(this, schema);
};


//
// AllOf Validator
//

function AllOfValidator(items) {

  OfValidator.call(this, items, 'allOf');

  this.addCheck(function(value, options, path) {
    var errors = [];
    var self = this;
    
    this.items.forEach(function(item) {
      self.addErrors(errors, item.validate(value, options, path));
    });
    return errors;
  });
};

common.extend(AllOfValidator.prototype, OfValidator.prototype);


//
// AnyOf Validator
//

function AnyOfValidator(items) {

  OfValidator.call(this, items, 'anyOf');

  this.addCheck(function(value, options, path) {
    var errors = [];
    var valid = false;

    this.items.forEach(function(item) {
      valid = item.validate(value, options, path).length === 0 || valid;
    });
    if (!valid) {
      this.addError(errors, 'Value does not match any of the schemas', path);
    }
    return errors;
  });
};

common.extend(AnyOfValidator.prototype, AllOfValidator.prototype);


//
// OneOf Validator
//

function OneOfValidator(items) {

  OfValidator.call(this, items, 'oneOf');

  this.addCheck(function(value, options, path) {
    var errors = [];
    var valid = 0;

    this.items.forEach(function(item) {
      valid += (item.validate(value, options, path).length === 0) ? 1 : 0;
    });
    if (valid === 0) {
      this.addError(errors, 'Value does not validate against one of the schemas');
    }
    if (valid > 1) {
      this.addError(errors, 'Value does validate against more than one of the schemas');
    }
    return errors;
  });
};

common.extend(OneOfValidator.prototype, AllOfValidator.prototype);


//
// exports
//

module.exports = {
  AllOfValidator: AllOfValidator,
  AnyOfValidator: AnyOfValidator,
  OneOfValidator: OneOfValidator
};
},{"./common.js":3,"./serialize.js":10,"./validator.js":11}],8:[function(require,module,exports){
var Validator = require('./validator.js');
var Constraint = require('./constraints.js').Constraint;
var common = require('./common.js');


//
// Boolean Validator
//

function BooleanValidator() {

  Validator.call(this, 'boolean');

  this.addCheck(function(value, options, path) {
    return common.isBoolean(value) ? [] : [
      this.makeError('Value is not a boolean', path)
    ];
  });
};

common.extend(BooleanValidator.prototype, Validator.prototype);


//
// Number Validator
//

function NumberValidator() {

  Validator.call(this, 'number');

  this.addConstraint(new Constraint(
    'multipleOf',
    function(value, n, options, path) {
      return value % n === 0 ? [] : [
        this.makeError('Value is not a multiple of: ' + n, path)
      ];
    }
  ));
  
  this.addConstraint(new Constraint(
    'maximum',
    function(value, n, options, path) {
      return value <= n ? [] : [
        this.makeError('Value is greater than the maximum: ' + n, path)
      ];
    }
  ));
  
  this.addConstraint(new Constraint(
    'minimum',
    function(value, n, options, path) {
      return value >= n ? [] : [
        this.makeError('Value is less than minimum: ' + n, path)
      ];
    }
  ));

  this.addCheck(function(value, options, path) {
    return common.isNumber(value) ? [] : [
      this.makeError('value is not a number', path)
    ];
  });
};

common.extend(NumberValidator.prototype, Validator.prototype);


//
// Integer Validator
//

function IntegerValidator() {

  NumberValidator.call(this, arguments);
  this.type = 'integer';

  this.addCheck(function(value, options, path) {
    return Math.floor(value) === value ? [] : [
      this.makeError('Value is not an integer', path)
    ];
  });
};


common.extend(IntegerValidator.prototype, NumberValidator.prototype);


//
// StringValidator
//

function StringValidator() {

  Validator.call(this, 'string');

  this.addConstraint(new Constraint(
    'maxLength',
    function(value, n, options, path) {
      return value.length <= n ? [] : [
        this.makeError('Value is less than minimum: ' + n, path)
      ];
    }
  ));

  this.addConstraint(new Constraint(
    'minLength',
    function(value, n, options, path) {
      return value.length >= n ? [] : [
        this.makeError('Value is less than minimum: ' + n, path)
      ];
    }
  ));

  this.addConstraint(new Constraint(
    'pattern',
    function(value, p, options, path) {
      return new RegExp(p).test(value) ? [] : [
        this.makeError('Value does not match pattern: ' + p, path)
      ];
    }
  ));

  this.addConstraint(new Constraint(  
    'format',
    function(value, f, options, path) {
      if (!common.formats[f]) {
        return [this.makeError('Unkown format: ' + f, path)];
      }
      if (!common.formats[f].test(value)) {
        return [this.makeError('Value does not match format: ' + f, path)];
      }
      return [];
    }
  ));

  this.addCheck(function(value, options, path) {
    return common.isString(value) ? [] : [
      this.makeError('Value is not a string', path)
    ];
  });
};

common.extend(StringValidator.prototype, Validator.prototype);


//
// Any Validator
//

function AnyValidator() {

  Validator.call(this, 'any');
};

common.extend(AnyValidator.prototype, Validator.prototype);


//
// Null Validator
//

function NullValidator() {

  Validator.call(this, 'null');

  this.addCheck(function(value, options, path) {
    return common.isNull(value) ? [] : [
      this.makeError('Value is not null', path)
    ];
  });
};

common.extend(NullValidator.prototype, Validator.prototype);


//
// exports
//

module.exports = {
  BooleanValidator: BooleanValidator,
  NumberValidator: NumberValidator,
  IntegerValidator: IntegerValidator,
  StringValidator: StringValidator,
  AnyValidator: AnyValidator,
  NullValidator: NullValidator
};



},{"./common.js":3,"./constraints.js":4,"./validator.js":11}],9:[function(require,module,exports){
var Validator = require('./validator.js');
var common = require('./common.js');

//
// Ref Validator
//

var RefValidator = module.exports = function(refName) {

  this.ref = refName;
  Validator.call(this, '$ref');

  this.addCheck(function(value, options, path) {
    var errors = [];

    if (options.omitRefs) return errors;
    
    if (options && options.definitions && options.definitions[this.ref]) {
      this.addErrors(errors, options.definitions[this.ref].validate(value, options, path));
    }
    else {
      this.addError(errors, 'Definition of schema reference not found: ' + value, path);
    }
    return errors;
  });
};

common.extend(RefValidator.prototype, Validator.prototype);


RefValidator.prototype.toJSON = function() {
  return Validator.prototype.toJSON.call(this, { $ref: this.ref });
};


RefValidator.prototype.fromJSON = function(schema) {
  this.ref = schema.$ref;
  return Validator.prototype.fromJSON.call(this, schema);
};

},{"./common.js":3,"./validator.js":11}],10:[function(require,module,exports){
var common = require('./common.js');
var vs = require('./validators');


//
// Create Validator from schema
//

exports.fromJSON = function fromJSON(schema) {

  var validator;
  
  if (schema.type || schema.properties || schema.items) {

    var type = schema.type;
    // infer 'array' and 'object' type
    if (schema.properties) type = 'object';
    if (schema.items) type = 'array';
    
    validator = new ({
      'boolean': vs.Boolean,
      'number':  vs.Number,
      'integer': vs.Integer,
      'string':  vs.String,
      'any':     vs.Any,
      'null':    vs.Null,
      'array':   vs.Array,
      'object':  vs.Object
    })[type]();
  }
  else if (schema.enum) {
    validator = new vs.Enum();
  }
  else if (schema.allOf) {
    validator = new vs.AllOf();
  }
  else if (schema.anyOf) {
    validator = new vs.AnyOf();
  }
  else if (schema.oneOf) {
    validator = new vs.OneOf();
  }
  else if (schema.$ref) {
    validator = new vs.Ref();
  }

  if (!validator) {
    var err = new Error('Unkown schema');
    err.schema = schema;
    throw err;
  }
  
  return validator.fromJSON(schema);
};


//
// create a default value from schema
//

module.exports.createValue = function createValue(schema) {

  // convert jski object to schema
  if (common.isObject(schema) && schema.__jski__) {
    schema = schema.toJSON();
  }
  
  var hasDefaultValue = schema.hasOwnProperty('default');
  var type = schema.type;
  
  if (schema.enum) {
    return hasDefaultValue ? schema.default : schema.enum[0];
  }
  if (schema.$ref) {
    return hasDefaultValue ? schema.default : {};
  }
  // infer object and array
  if (!schema.type) {
    if (schema.properties) type = 'object';
    if (schema.items) type = 'array';
  }
  
  if (!type) throw new Error('Cannot create default value for schema without type');

  switch(type) {
  case 'boolean': return hasDefaultValue ? schema.default : true;
  case 'integer': return hasDefaultValue ? schema.default : 0;
  case 'number': return hasDefaultValue ? schema.default : 0;
  case 'string': return hasDefaultValue ? schema.default : '';
  case 'object': {
    if (hasDefaultValue) return schema.default;
    var obj = {};
    if (typeof schema.properties === 'object') {
      Object.keys(schema.properties).forEach(function(key) {
        obj[key] = createValue(schema.properties[key]);
      });
    }
    return obj;
  }
  case 'array': return hasDefaultValue ? schema.default : [];
  default: throw new Error('Cannot create default value for unknown type: ' + type);
  }
}



},{"./common.js":3,"./validators":12}],11:[function(require,module,exports){
var common = require('./common.js');


//
// Validator
//

var Validator = module.exports = function(type) {

  this.type = type;
  this._options = {};
  this._constraints = [];
  this._checks = [];
  this._customAttributes = [];

  // meta keywords
  this.addOption('title', '');
  this.addOption('description', '');
  this.addOption('default');
};


Validator.prototype.__jski__ = true;


Validator.prototype.toJSON = function(schema) {

  schema = schema || { type: this.type };
  var self = this;

  Object.keys(this._options).forEach(function(key) {
    if (self._options[key].enabled) {
      schema[key] = self._options[key].value;
    }
  });

  this._constraints.forEach(function(constraint) {
    if (constraint.enabled) {
      schema[constraint.name] = constraint.toJSON();
    }
  });

  Object.keys(this._customAttributes).forEach(function(key) {
    schema[key] = self._customAttributes[key];
  });
  
  return schema;
};


Validator.prototype.fromJSON = function(schema) {

  var self = this;

  Object.keys(schema).forEach(function(key) {

    if (common.isKeyword(key)) return;
    
    if (self._options.hasOwnProperty(key)) {
      self._options[key] = {
        enabled: true,
        value: schema[key]
      };
    }
    else {
      var isConstraint = false;
      
      self._constraints.forEach(function(constraint) {
        if (constraint.name === key) {
          constraint.fromJSON(schema[key]);
          isConstraint = true;
        }
      });

      if (!isConstraint) {
        self._customAttributes[key] = schema[key];
      }
    }
  });

  return this;
};


Validator.prototype.addOption = function(name, defaultValue) {

  this._options[name] = {
    enabled: false,
    value: defaultValue
  };

  this[name] = function(value) {

    // get value when not passed
    if (common.isUndefined(value)) {
      return this._options[name].value;
    }

    // set value
    var o = this._options[name];
    o.enabled = true;
    o.value = value;
    
    return this;
  };
};


Validator.prototype.addConstraint = function(constraint) {

  constraint.decorate(this);
  this._constraints.push(constraint);
};


Validator.prototype.addCheck = function(check) {

  this._checks.push(check);
};


Validator.prototype.definitions = function(defs) {

  if (common.isUndefined(defs)) {
    return this._definitions;
  }
  this._definitions = defs;
  return this;
}


Validator.prototype.custom = function(name, value) {

  this._customAttributes[name] = value;
  return this;
};


Validator.prototype.validate = function(value, options, path) {

  // validate jski validators
  if (common.isObject(value) && value.__jski__) {
    value = value.toJSON();
  }

  path = path || '';
  options = options || {};

  var errors = [];
  var self = this;

  // pass on local definitions
  var defs = this.definitions();
  if (defs) {
    options.definitions = options.definitions || {};
    common.extend(options.definitions, defs);
  }
  
  this._constraints.forEach(function(constraint) {
    if (constraint.enabled) {
      self.addErrors(errors, constraint.validate(value, options, path));
    }
  });

  this._checks.forEach(function(check) {
    self.addErrors(errors, check.call(self, value, options, path));
  });
  
  return errors;
};


Validator.prototype.makeError = function(message, path) {

  return { message: message, path: path };
};


Validator.prototype.addError = function(errors, message, path) {

  errors.push(this.makeError.apply(this, common.cloneArgs(arguments, 1)));
  return errors;
};


Validator.prototype.addErrors = function(errors, newErrors) {

  newErrors.forEach(function(err) {
    errors.push(err);
  });
  return errors;
};

},{"./common.js":3}],12:[function(require,module,exports){

var primitives = require('./primitives.js');
var ArrayValidator = require('./array.js');
var ObjectValidator = require('./object.js');
var EnumValidator = require('./enum.js');
var ofs = require('./ofs.js');
var RefValidator = require('./ref.js');

module.exports = {

  Boolean: primitives.BooleanValidator,
  Number: primitives.NumberValidator,
  Integer: primitives.IntegerValidator,
  String: primitives.StringValidator,
  Any: primitives.AnyValidator,
  Null: primitives.NullValidator,
  Array: ArrayValidator,
  Object: ObjectValidator,
  Enum: EnumValidator,
  AllOf: ofs.AllOfValidator,
  AnyOf: ofs.AnyOfValidator,
  OneOf: ofs.OneOfValidator,
  Ref: RefValidator
  
};
},{"./array.js":2,"./enum.js":5,"./object.js":6,"./ofs.js":7,"./primitives.js":8,"./ref.js":9}]},{},[1])(1)
});
;
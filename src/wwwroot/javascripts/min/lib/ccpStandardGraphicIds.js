define([], function() {
  "use strict";

  var graphicIds = {
    2731: {
      description: "ENV_Xenon",
      graphicFile: "res:/dx9/model/worldobject/enviroments/env_xenon.red"
    },
    10: {
      description: "Moon",
      graphicFile: "res:/dx9/model/worldobject/planet/moon.red"
    },
    12: {
      description: "Caldari Jumpgate (Standard Stargate)",
      graphicFile: "res:/dx9/model/JumpGate/Caldari/csg/csg.red",
      race: "Caldari"
    },
    16: {
      description: "CargoContainer",
      graphicFile: "res:/dx9/model/worldobject/cargo/cargocontainer.red"
    },
    17: {
      description: "Station: Caldari 4 - Station",
      graphicFile: "res:/dx9/model/station/caldari/cs4/cs4.red",
      race: "Caldari"
    },
    38: {
      description: "Caldari Frigate Bantam",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF1/CF1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    39: {
      description: "Caldari Frigate Condor",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF2/CF2_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    40: {
      description: "Caldari Frigate Griffin",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF4/CF4_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    41: {
      description: "Caldari Cruiser Osprey",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC1/CC1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    42: {
      description: "Caldari Cruiser Caracal",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC3/CC3_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    43: {
      description: "Caldari Battleship Raven",
      graphicFile: "res:/dx9/model/ship/caldari/BattleShip/CB1/CB1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    44: {
      description: "Minmatar Frigate Slasher",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF1/MF1_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    45: {
      description: "Minmatar Frigate Probe",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF2/MF2_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    46: {
      description: "Minmatar Frigate Rifter",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF4/MF4_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    47: {
      description: "Minmatar Cruiser Stabber",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Cruiser/MC1/MC1_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    48: {
      description: "Minmatar Battleship Tempest",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/BattleShip/MB2/MB2_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    49: {
      description: "Caldari Cruiser Moa",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC2/CC2_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    50: {
      description: "Caldari Battleship Scorpion",
      graphicFile: "res:/dx9/model/ship/caldari/BattleShip/CB2/CB2_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    51: {
      description: "Caldari Industrial Badger",
      graphicFile: "res:/dx9/model/ship/caldari/Industrial/CI1/CI1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    52: {
      description: "Caldari Industrial Tayra",
      graphicFile: "res:/dx9/model/ship/caldari/Industrial/CI2/CI2_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    53: {
      description: "Minmatar Frigate Reaper",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF3/MF3_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    54: {
      description: "Amarr Frigate Executioner",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF4/AF4_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    55: {
      description: "Amarr Frigate Inquisitor",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF5/AF5_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    56: {
      description: "Amarr Frigate Tormentor",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF6/AF6_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    57: {
      description: "Amarr Cruiser Maller",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC2/AC2_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    58: {
      description: "Amarr Cruiser Augoror",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC3/AC3_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    59: {
      description: "Gallente Frigate Navitas",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF2/GF2_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    60: {
      description: "Gallente Frigate Tristan",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF3/GF3_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    61: {
      description: "Gallente Frigate Incursus",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF4/GF4_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    62: {
      description: "Gallente Cruiser Vexor",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC3/GC3_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    63: {
      description: "Gallente Cruiser Thorax",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC4/GC4_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    64: {
      description: "Gallente Battleship Megathron",
      graphicFile: "res:/dx9/model/ship/gallente/Battleship/GB2/GB2_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    65: {
      description: "Gallente Industrial Nereus",
      graphicFile: "res:/dx9/model/ship/gallente/Industrial/GI1/GI1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    66: {
      description: "Gallente Frigate Police (Federation Navy Comet Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF8/Police/GF8_T1_Police.red",
      colorScheme: "TurretPreset_Gallente_Officer",
      race: "Gallente"
    },
    73: {
      description: "Jove Capsule (The Pod)",
      graphicFile: "res:/dx9/Model/Ship/Jove/Capsule/Capsule.red",
      colorScheme: "TurretPreset_Jove",
      race: "Jove"
    },
    2751: {
      description: "Battleplatform_Energy",
      graphicFile: "res:/dx9/model/deployables/mobilebattleplatform/battleplatform_energy.red"
    },
    2752: {
      description: "Battleplatform_Hybrid",
      graphicFile: "res:/dx9/model/deployables/mobilebattleplatform/battleplatform_hybrid.red"
    },
    2753: {
      description: "Battleplatform_Projectile",
      graphicFile: "res:/dx9/model/deployables/mobilebattleplatform/battleplatform_projectile.red"
    },
    2755: {
      description: "Minmatar Dreadnought Naglfar",
      graphicFile: "res:/dx9/model/ship/Minmatar/Dreadnought/MDn1/MDn1_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    2757: {
      description: "Unknown",
      graphicFile: "res:/dx9/model/outposts/amarr/factoryoutpost.red",
      race: "Amarr"
    },
    2758: {
      description: "Minmatar Service Outpost - Unknown",
      graphicFile: "res:/dx9/model/outposts/minmatar/serviceoutpost.red",
      race: "Minmatar"
    },
    168: {
      description: "MissileLauncherBasic",
      graphicFile: "res:/dx9/model/turret/Launcher/Test/test_launcher01.red"
    },
    170: {
      description: "MissileLauncherDeluxe",
      graphicFile: "res:/dx9/model/turret/Launcher/Torpedo/Torpedo_T1.red"
    },
    2764: {
      description: "Amarr Drone Sarum Light Acolyte II",
      graphicFile: "res:/dx9/model/Drone/Amarr/Light/ADL1/Sarum/ADL1_T2_Sarum.red",
      colorScheme: "TurretPreset_Sarum",
      race: "Amarr"
    },
    202: {
      description: "Shattered Planet Asset",
      graphicFile: "res:/dx9/model/WorldObject/planet/ShatteredPlanet.red"
    },
    2765: {
      description: "Minmatar Drone Brutor Heavy Berserker II",
      graphicFile: "res:/dx9/model/Drone/Minmatar/Heavy/MDH1/Brutor/MDH1_T2_Brutor.red",
      colorScheme: "TurretPreset_Minmatar_T2",
      race: "Minmatar"
    },
    11840: {
      graphicFile: "res:/dx9/scene/Universe/m04_cube.red"
    },
    235: {
      description: "Caldari Jumpgate (Standard Stargate)",
      graphicFile: "res:/dx9/model/JumpGate/Caldari/csg/csg.red",
      race: "Caldari"
    },
    236: {
      description: "Amarr Jumpgate ( Standard Stargate )",
      graphicFile: "res:/dx9/model/JumpGate/Amarr/asg/asg.red",
      race: "Amarr"
    },
    237: {
      description: "StationCaldari4",
      graphicFile: "res:/dx9/model/station/caldari/cs4/cs4.red",
      race: "Caldari"
    },
    239: {
      description: "StationGallente1",
      graphicFile: "res:/dx9/model/station/gallente/gs1/gs1.red",
      race: "Gallente"
    },
    240: {
      description: "StationGallente2",
      graphicFile: "res:/dx9/model/station/gallente/gs2/gs2.red",
      race: "Gallente"
    },
    2772: {
      description: "Minmatar Drone Brutor Medium Valkyrie II",
      graphicFile: "res:/dx9/model/Drone/Minmatar/Medium/MDM1/Brutor/MDM1_T2_Brutor.red",
      colorScheme: "TurretPreset_Minmatar_T2",
      race: "Minmatar"
    },
    2773: {
      description: "Amarr Drone  Medium Imperial Navy Infiltrator",
      graphicFile: "res:/dx9/model/Drone/Amarr/Medium/ADM1/Navy/ADM1_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    11131: {
      description: "Blast_Ion_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/XL/Blast_Ion_T1.red"
    },
    2774: {
      description: "Gallente Drone Medium Hammerhead I",
      graphicFile: "res:/dx9/model/Drone/Gallente/Medium/GDM1/GDM1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    2776: {
      description: "Caldari Drone Medium Vespa I",
      graphicFile: "res:/dx9/model/Drone/Caldari/Medium/CDM1/CDM1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    2784: {
      description: "Caldari Research Outpost - Unknown",
      graphicFile: "res:/dx9/model/outposts/caldari/co2_research.red",
      race: "Caldari"
    },
    2778: {
      description: "Amarr Drone Medium Infiltrator I",
      graphicFile: "res:/dx9/model/Drone/Amarr/Medium/ADM1/ADM1_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    296: {
      description: "Amarr Battleship Apocalypse",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB1/AB1_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    297: {
      description: "Amarr Battleship Armageddon",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB2/AB2_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    298: {
      description: "Amarr Cruiser Arbitrator",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC1/AC1_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    299: {
      description: "Amarr Frigate Impairor",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF1/AF1_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    300: {
      description: "Amarr Frigate Punisher",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF3/AF3_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    301: {
      description: "Minmatar Battleship Typhoon",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/BattleShip/MB1/MB1_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    302: {
      description: "Minmatar Cruiser Rupture",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Cruiser/MC2/MC2_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    303: {
      description: "Minmatar Cruiser Bellicose",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Cruiser/MC3/MC3_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    304: {
      description: "Minmatar Cruiser Scythe",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Cruiser/MC4/MC4_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    305: {
      description: "Minmatar Frigate Breacher",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF5/MF5_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    306: {
      description: "Minmatar Frigate Burst",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF6/MF6_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    307: {
      description: "Minmatar Frigate Peacekeeper",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF8/MF8_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    308: {
      description: "Minmatar Industrial Hoarder",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Industrial/MI1/MI1_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    309: {
      description: "Minmatar Industrial Mammoth",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Industrial/MI2/MI2_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    310: {
      description: "Minmatar Industrial Wreathe",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Industrial/MI3/MI3_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    311: {
      description: "Caldari Cruiser Blackbird",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC4/CC4_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    312: {
      description: "Caldari Frigate Ibis",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF5/CF5_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    313: {
      description: "Caldari Frigate Kestrel",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF6/CF6_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    314: {
      description: "Caldari Frigate Merlin",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF7/CF7_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    315: {
      description: "Caldari Frigate Hookbill",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF8/CF8_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    316: {
      description: "Caldari Frigate Heron",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF3/CF3_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    317: {
      description: "Caldari Shuttle",
      graphicFile: "res:/dx9/model/ship/caldari/Shuttle/CS1/CS1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    318: {
      description: "Gallente Battleship Dominix",
      graphicFile: "res:/dx9/model/ship/gallente/Battleship/GB1/GB1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    319: {
      description: "Gallente Cruiser Celestis",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC1/GC1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    320: {
      description: "Gallente Cruiser Exequror",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC2/GC2_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    321: {
      description: "Gallente Frigate Velator",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF1/GF1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    322: {
      description: "Gallente Frigate Imicus",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF5/GF5_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    323: {
      description: "Gallente Frigate Atron",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF6/GF6_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    324: {
      description: "Gallente Frigate Maulus",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF7/GF7_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    325: {
      description: "Gallente Industrial Kryos",
      graphicFile: "res:/dx9/model/ship/gallente/Industrial/GI2/GI2_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    326: {
      description: "Gallente Industrial Epithal",
      graphicFile: "res:/dx9/model/ship/gallente/Industrial/GI3/GI3_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    327: {
      description: "Gallente Industrial Miasmos",
      graphicFile: "res:/dx9/model/ship/gallente/Industrial/GI4/GI4_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    328: {
      description: "Gallente Industrial Iteron Mark V",
      graphicFile: "res:/dx9/model/ship/gallente/Industrial/GI5/GI5_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    330: {
      description: "Gallente Shuttle Opux Luxury Yacht",
      graphicFile: "res:/dx9/model/ship/gallente/Shuttle/GY1/GY1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    331: {
      description: "Jove Battleship Eidolon",
      graphicFile: "res:/dx9/Model/Ship/Jove/jb1/jb1.red",
      colorScheme: "TurretPreset_Jove",
      race: "Jove"
    },
    332: {
      description: "Jove Frigate Wraith",
      graphicFile: "res:/dx9/Model/Ship/Jove/jf2/jf2.red",
      colorScheme: "TurretPreset_Jove",
      race: "Jove"
    },
    333: {
      description: "Jove Frigate Specter",
      graphicFile: "res:/dx9/Model/Ship/Jove/jf3/jf3.red",
      colorScheme: "TurretPreset_Jove",
      race: "Jove"
    },
    334: {
      description: "Jove Industrial Visitant",
      graphicFile: "res:/dx9/Model/Ship/Jove/ji1/ji1.red",
      colorScheme: "TurretPreset_Jove",
      race: "Jove"
    },
    335: {
      description: "Angel Battleship Machariel",
      graphicFile: "res:/dx9/Model/Ship/Angel/Battleship/angb1/angb1_T1.red",
      colorScheme: "TurretPreset_Angel_T1",
      race: "Angel"
    },
    336: {
      description: "Angel Cruiser Ixion",
      graphicFile: "res:/dx9/Model/Ship/Angel/Cruiser/angc1/angc1_T1.red",
      colorScheme: "TurretPreset_Angel_T1",
      race: "Angel"
    },
    337: {
      description: "Angel Battlecruiser Cynabal",
      graphicFile: "res:/dx9/Model/Ship/Angel/Battlecruiser/angbc1/angbc1_T1.red",
      colorScheme: "TurretPreset_Angel_T1",
      race: "Angel"
    },
    338: {
      description: "Angel Frigate Dramiel",
      graphicFile: "res:/dx9/Model/Ship/Angel/Frigate/angf1/angf1_T1.red",
      colorScheme: "TurretPreset_Angel_T1",
      race: "Angel"
    },
    339: {
      description: "Angel Frigate Devourer (Daredevil Hull)",
      graphicFile: "res:/dx9/Model/Ship/Angel/Frigate/angf2/angf2_T1.red",
      colorScheme: "TurretPreset_Angel_T1",
      race: "Angel"
    },
    340: {
      description: "Angel Frigate Fury",
      graphicFile: "res:/dx9/Model/Ship/Angel/Frigate/angf3/angf3_T1.red",
      colorScheme: "TurretPreset_Angel_T1",
      race: "Angel"
    },
    341: {
      description: "Sansha Frigate Immolator",
      graphicFile: "res:/dx9/Model/Ship/Sansha/Frigate/SF3/SF3_T1.red",
      colorScheme: "TurretPreset_Sansha",
      race: "Sansha"
    },
    342: {
      description: "Angel Frigate Medusa",
      graphicFile: "res:/dx9/Model/Ship/Angel/Frigate/angf5/angf5_T1.red",
      colorScheme: "TurretPreset_Angel_T1",
      race: "Angel"
    },
    343: {
      description: "Angel Frigate Echo",
      graphicFile: "res:/dx9/Model/Ship/Angel/Frigate/angf6/angf6_T1.red",
      colorScheme: "TurretPreset_Angel_T1",
      race: "Angel"
    },
    344: {
      description: "Angel Frigate Lynx",
      graphicFile: "res:/dx9/Model/Ship/Angel/Frigate/angf7/angf7_T1.red",
      colorScheme: "TurretPreset_Angel_T1",
      race: "Angel"
    },
    345: {
      description: "Angel Frigate Swordspine",
      graphicFile: "res:/dx9/Model/Ship/Angel/Frigate/angf4/angf4_T1.red",
      colorScheme: "TurretPreset_Angel_T1",
      race: "Angel"
    },
    20317: {
      description: "Caldari Cruiser Guristas (Caracal Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC3/Guristas/CC3_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    2789: {
      description: "Blood_as6",
      graphicFile: "res:/dx9/model/station/bloodraider/blood_as6.red",
      race: "Amarr"
    },
    2790: {
      description: "GuristaWall_NetWorkNode",
      graphicFile: "res:/dx9/model/worldobject/defenses/guristas/guristawall_networknode.red",
      race: "Caldari"
    },
    2791: {
      description: "GuristaWall_StasisVault",
      graphicFile: "res:/dx9/model/worldobject/defenses/guristas/guristawall_stasisvault.red",
      race: "Caldari"
    },
    11839: {
      graphicFile: "res:/dx9/scene/Universe/m03_cube.red"
    },
    2792: {
      description: "AngelWall_NetWorkNode",
      graphicFile: "res:/dx9/model/worldobject/defenses/angel/angelwall_networknode.red",
      race: "Angel"
    },
    2793: {
      description: "AngelWall_StasisVault",
      graphicFile: "res:/dx9/model/worldobject/defenses/angel/angelwall_stasisvault.red",
      race: "Angel"
    },
    2794: {
      description: "Minmatar Battlecruiser Sebiestor Claymore (Cyclone Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/BattleCruiser/MBC1/Sebiestor/MBC1_T2c_Sebiestor.red",
      colorScheme: "TurretPreset_Sebiestor",
      race: "Minmatar"
    },
    2795: {
      description: "Amarr Battlecruiser BloodRaider (Prophecy Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battlecruiser/Abc1/BloodRaider/Abc1_T1_Bloodraider.red",
      colorScheme: "TurretPreset_Bloodraider",
      race: "Amarr"
    },
    2796: {
      description: "Amarr Destroyer BloodRaider (Coercer Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Destroyer/ADe1/BloodRaider/ADe1_T1_BloodRaider.red",
      colorScheme: "TurretPreset_Bloodraider",
      race: "Amarr"
    },
    398: {
      description: "Corpse floating in space (male?). - Corpse",
      graphicFile: "res:/dx9/model/face/fullbody_char/corpses/corpsemale123.red"
    },
    2798: {
      description: "Gallente BattleCruiser Duvolle Astarte (Brutix Hull)",
      graphicFile: "res:/dx9/model/ship/Gallente/Battlecruiser/GBC1/Duvolle/GBC1_T2a_Duvolle.red",
      colorScheme: "TurretPreset_Duvolle",
      race: "Gallente"
    },
    2800: {
      description: "Gallente Destroyer Duvolle (Catalyst Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Destroyer/GDe1/Duvolle/GDe1_T2_Duvolle.red",
      colorScheme: "TurretPreset_Duvolle",
      race: "Gallente"
    },
    2801: {
      description: "Caldari Battlecruiser Kaalakiota Nighthawk (Ferox Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/BattleCruiser/CBc1/Kaalakiota/CBc1_T2a_Kaalakiota.red",
      colorScheme: "TurretPreset_Kaalakiota",
      race: "Caldari"
    },
    2802: {
      description: "Caldari Destroyer Kaalakiota Flycatcher (Cormorant Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Destroyer/CDe1/Kaalakiota/CDe1_T2_Kaalakiota.red",
      colorScheme: "TurretPreset_Kaalakiota",
      race: "Caldari"
    },
    2804: {
      description: "Amarr Battlecruiser Khanid Damnation (Prophecy Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battlecruiser/ABc1/Khanid/ABc1_T2a_Khanid.red",
      colorScheme: "TurretPreset_Khanid",
      race: "Amarr"
    },
    2805: {
      description: "Amarr Destroyer Khanid Heretic (Coercer Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Destroyer/ADE1/Khanid/ADE1_T2_Khanid.red",
      colorScheme: "TurretPreset_Khanid",
      race: "Amarr"
    },
    2806: {
      description: "Caldari Battleship LaiDai (Scorpion Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/BattleShip/CB2/LaiDai/CB2_T1_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    2807: {
      description: "Caldari Battlecruiser Vulture (Ferox Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/BattleCruiser/CBc1/Ishukone/CBc1_T2b_Ishukone.red",
      colorScheme: "TurretPreset_Ishukone",
      race: "Caldari"
    },
    2808: {
      description: "Caldari Destroyer Mordus Elite Cormorant Mordus (Cormorant Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Destroyer/CDe1/Mordus/Cde1_T1_Mordus.red",
      colorScheme: "TurretPreset_Mordus",
      race: "Caldari"
    },
    2809: {
      description: "Gallente BattleCruiser Roden (Brutix Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/BattleCruiser/GBc1/Roden/GBc1_T1_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    2811: {
      description: "Gallente Destroyer Roden Eris (Catalyst Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Destroyer/GDe1/Roden/GDe1_T2_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    2814: {
      description: "Minmatar Destroyer Sebiestor Sabre (Thrasher Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Destroyer/MDE1/Sebiestor/MDE1_T2c_Sebiestor.red",
      colorScheme: "TurretPreset_Sebiestor",
      race: "Minmatar"
    },
    11861: {
      description: "Gallente Cruiser Serpentis Guardian-Vexor (Vexor Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC3/Serpentis/GC3_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    3018: {
      description: "Warp Disruptor Bubble",
      graphicFile: "res:/dx9/model/effect/warpdisruptorbubble.red"
    },
    2822: {
      description: "Caldari Drone Light Caldari Navy Hornet",
      graphicFile: "res:/dx9/model/Drone/Caldari/Light/CDL1/Navy/CDL1_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    11133: {
      description: "Rail_350mm_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/L/Rail_350mm_T1.red"
    },
    2824: {
      description: "Amarr Drone Heavy Imperial Navy Praetor",
      graphicFile: "res:/dx9/model/Drone/Amarr/Heavy/ADH1/Navy/ADH1_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    3020: {
      description: "Caldari Industrial LaiDai Bustard (Badger Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Industrial/CI3/LaiDai/CI3_T2_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    3294: {
      description: "Guristas_Tower_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/guristas_tower_final.red",
      race: "Caldari"
    },
    11479: {
      graphicFile: "res:/Graphics/Interior/Caldari/Modular_Wall/Wall_12_Cal_Base.red"
    },
    11843: {
      graphicFile: "res:/dx9/scene/Universe/m07_cube.red"
    },
    11579: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Wall/Wall_01_02_10_Ama_Combo.red"
    },
    11844: {
      graphicFile: "res:/dx9/scene/Universe/m08_cube.red"
    },
    2788: {
      description: "Blood_as5",
      graphicFile: "res:/dx9/model/station/bloodraider/blood_as5.red",
      race: "Amarr"
    },
    11845: {
      graphicFile: "res:/dx9/scene/Universe/m09_cube.red"
    },
    1006: {
      description: "Sentry Gun - SentryGun",
      graphicFile: "res:/dx9/Model/Sentry/Amarr/asg1.red",
      race: "Amarr"
    },
    1009: {
      description: "ORE Drone Heavy Mining Drone I",
      graphicFile: "res:/dx9/model/Drone/ORE/Heavy/OMDH1/OMDH1_T1.red",
      colorScheme: "TurretPreset_ORE_T1",
      race: "ORE"
    },
    1010: {
      description: "CONCORD Enigma CCP Enigma",
      graphicFile: "res:/dx9/Model/Ship/Concord/Frigate//ConF2/CCP/ConF2_T1_Enigma.red",
      colorScheme: "TurretPreset_Concord",
      race: "Concord"
    },
    1011: {
      description: "Sun",
      graphicFile: "res:/dx9/model/lensflare/blue.red"
    },
    1012: {
      description: "Sun",
      graphicFile: "res:/dx9/model/lensflare/orange.red"
    },
    1013: {
      description: "Sun",
      graphicFile: "res:/dx9/model/lensflare/red.red"
    },
    1014: {
      description: "Sun",
      graphicFile: "res:/dx9/model/lensflare/white.red"
    },
    1015: {
      description: "Sun",
      graphicFile: "res:/dx9/model/lensflare/yellow.red"
    },
    1017: {
      description: "Station: Caldari 3 - Station",
      graphicFile: "res:/dx9/model/station/caldari/cs3/cs3.red",
      race: "Caldari"
    },
    1018: {
      description: "Station: Caldari 2 - Station",
      graphicFile: "res:/dx9/model/station/caldari/cs2/cs2.red",
      race: "Caldari"
    },
    1019: {
      description: "Station: Caldari 1 - Station",
      graphicFile: "res:/dx9/model/station/caldari/cs1/cs1.red",
      race: "Caldari"
    },
    1021: {
      description: "Derelict ship - Derelict ship",
      graphicFile: "res:/dx9/model/worldobject/derelict/derelict1.red"
    },
    11863: {
      description: "Caldari Cruiser Ishukone Falcon (Blackbird Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC4/Ishukone/CC4_T2a_Ishukone.red",
      colorScheme: "TurretPreset_Ishukone",
      race: "Caldari"
    },
    1047: {
      description: "hybrid ammo  - Antimatter Charge S"
    },
    1049: {
      description: "CONCORD Frigate Police",
      graphicFile: "res:/dx9/Model/Ship/Concord/Frigate/ConF1/ConF1_T1.red",
      colorScheme: "TurretPreset_Concord",
      race: "Concord"
    },
    1050: {
      description: "CONCORD Cruiser Special Ops",
      graphicFile: "res:/dx9/Model/Ship/Concord/Cruiser/ConC1/SpecOps/ConC1_T1_SpecOps.red",
      colorScheme: "TurretPreset_Concord_SpecOps",
      race: "Concord"
    },
    1051: {
      description: "CONCORD Cruiser Police",
      graphicFile: "res:/dx9/Model/Ship/Concord/Cruiser/ConC1/ConC1_T1.red",
      colorScheme: "TurretPreset_Concord",
      race: "Concord"
    },
    1052: {
      description: "CONCORD Cruiser Army",
      graphicFile: "res:/dx9/Model/Ship/Concord/Cruiser/ConC1/Army/ConC1_T1_Army.red",
      colorScheme: "TurretPreset_Concord_Army",
      race: "Concord"
    },
    1053: {
      description: "CONCORD Frigate Special Ops",
      graphicFile: "res:/dx9/Model/Ship/Concord/Frigate/ConF1/SpecOps/ConF1_T1_SpecOps.red",
      colorScheme: "TurretPreset_Concord_SpecOps",
      race: "Concord"
    },
    1054: {
      description: "CONCORD Frigate SWAT",
      graphicFile: "res:/dx9/Model/Ship/Concord/Frigate/ConF1/SWAT/ConF1_T1_SWAT.red",
      colorScheme: "TurretPreset_Concord_SWAT",
      race: "Concord"
    },
    1055: {
      description: "CONCORD Frigate Army",
      graphicFile: "res:/dx9/Model/Ship/Concord/Frigate/ConF1/Army/ConF1_T1_Army.red",
      colorScheme: "TurretPreset_Concord_Army",
      race: "Concord"
    },
    1056: {
      description: "CONCORD Cruiser SWAT",
      graphicFile: "res:/dx9/Model/Ship/Concord/Cruiser/ConC1/SWAT/ConC1_T1_SWAT.red",
      colorScheme: "TurretPreset_Concord_SWAT",
      race: "Concord"
    },
    1057: {
      description: "CONCORD Battleship SWAT",
      graphicFile: "res:/dx9/Model/Ship/Concord/Battleship/ConB1/SWAT/ConB1_T1_SWAT.red",
      colorScheme: "TurretPreset_Concord_SWAT",
      race: "Concord"
    },
    1058: {
      description: "CONCORD Battleship Police",
      graphicFile: "res:/dx9/Model/Ship/Concord/Battleship/ConB1/ConB1_T1.red",
      colorScheme: "TurretPreset_Concord",
      race: "Concord"
    },
    1059: {
      description: "CONCORD Battleship Special Ops",
      graphicFile: "res:/dx9/Model/Ship/Concord/Battleship/ConB1/SpecOps/ConB1_T1_SpecOps.red",
      colorScheme: "TurretPreset_Concord_SpecOps",
      race: "Concord"
    },
    1060: {
      description: "CONCORD Battleship Army",
      graphicFile: "res:/dx9/Model/Ship/Concord/Battleship/ConB1/Army/ConB1_T1_Army.red",
      colorScheme: "TurretPreset_Concord_Army",
      race: "Concord"
    },
    1064: {
      description: "Amarr Industrial Bestower",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Industrial/AI1/AI1_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    1065: {
      description: "Amarr Cruiser Omen",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC4/AC4_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    1066: {
      description: "Amarr Frigate Crucifier",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF2/AF2_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    1067: {
      description: "Amarr Frigate Navy Issue Slicer",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF9/Navy/AF9_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    1068: {
      description: "Amarr Station Hub",
      graphicFile: "res:/dx9/model/station/amarr/as_hub.red",
      race: "Amarr"
    },
    1069: {
      description: "Amarr Station Military",
      graphicFile: "res:/dx9/model/station/amarr/as_millitary.red",
      race: "Amarr"
    },
    1070: {
      description: "Amarr Industrial Station ",
      graphicFile: "res:/dx9/model/station/amarr/as_industrial.red",
      race: "Amarr"
    },
    1071: {
      description: "Amarr standard station",
      graphicFile: "res:/dx9/model/station/amarr/as_standard.red",
      race: "Amarr"
    },
    1072: {
      description: "Amarr Mining Station",
      graphicFile: "res:/dx9/model/station/amarr/as_mining.red",
      race: "Amarr"
    },
    1073: {
      description: "Amarr Research Station",
      graphicFile: "res:/dx9/model/station/amarr/as_research.red",
      race: "Amarr"
    },
    1074: {
      description: "Amarr Trade Post",
      graphicFile: "res:/dx9/model/station/amarr/as_tradepost.red",
      race: "Amarr"
    },
    1079: {
      description: "Caldari Drone Heavy Wasp I",
      graphicFile: "res:/dx9/model/Drone/Caldari/Heavy/CDH1/CDH1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    1080: {
      description: "Caldari Drone Lai Dai Heavy Wasp II",
      graphicFile: "res:/dx9/model/Drone/Caldari/Heavy/CDH1/LaiDai/CDH1_T2_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    1084: {
      description: "Amarr Drone Light Acolyte I ",
      graphicFile: "res:/dx9/model/Drone/Amarr/Light/ADL1/ADL1_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    1089: {
      description: "Minmatar Drone Heavy Berserker I",
      graphicFile: "res:/dx9/model/Drone/Minmatar/Heavy/MDH1/MDH1_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    1095: {
      description: "Gallente Drone CreoDron Medium Hammerhead II",
      graphicFile: "res:/dx9/model/Drone/Gallente/Medium/GDM1/CreoDron/GDM1_T2_CreoDron.red",
      colorScheme: "TurretPreset_Gallente_T2",
      race: "Gallente"
    },
    1099: {
      description: "Gallente Drone Light Hobgoblin I",
      graphicFile: "res:/dx9/model/Drone/Gallente/Light/GDL1/GDL1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    1100: {
      description: "Gallente Drone CreoDron Light Hobgoblin II",
      graphicFile: "res:/dx9/model/Drone/Gallente/Light/GDL1/CreoDron/GDL1_T2_CreoDron.red",
      colorScheme: "TurretPreset_CreoDron",
      race: "Gallente"
    },
    1104: {
      description: "Caldari Drone Light Hornet I",
      graphicFile: "res:/dx9/model/Drone/Caldari/Light/CDL1/CDL1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    1105: {
      description: "Caldari Drone LaiDai Light Hornet II",
      graphicFile: "res:/dx9/model/Drone/Caldari/Light/CDL1/LaiDai/CDL1_T2_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    1109: {
      description: "Amarr Drone Sarum Medium Infiltrator II",
      graphicFile: "res:/dx9/model/Drone/Amarr/Medium/ADM1/Sarum/ADM1_T2_Sarum.red",
      colorScheme: "TurretPreset_Sarum",
      race: "Amarr"
    },
    1115: {
      description: "Gallente Drone CreoDron Heavy Ogre II",
      graphicFile: "res:/dx9/model/Drone/Gallente/Heavy/GDH1/CreoDron/GDH1_T2_CreoDron.red",
      colorScheme: "TurretPreset_Gallente_T2",
      race: "Gallente"
    },
    1119: {
      description: "Amarr Drone Heavy Praetor I",
      graphicFile: "res:/dx9/model/Drone/Amarr/Heavy/ADH1/ADH1_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    1120: {
      description: "Amarr Drone Sarum Heavy Praetor II",
      graphicFile: "res:/dx9/model/Drone/Amarr/Heavy/ADH1/Sarum/ADH1_T2_Sarum.red",
      colorScheme: "TurretPreset_Sarum",
      race: "Amarr"
    },
    1124: {
      description: "Minmatar Drone Light Warrior I",
      graphicFile: "res:/dx9/model/Drone/Minmatar/Light/MDL1/MDL1_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    1125: {
      description: "Minmatar Drone Brutor Light Warrior II",
      graphicFile: "res:/dx9/model/Drone/Minmatar/Light/MDL1/Brutor/MDL1_T2_Brutor.red",
      colorScheme: "TurretPreset_Minmatar_T2",
      race: "Minmatar"
    },
    1131: {
      description: "MultiFrequencyCrystalSmall - Unknown"
    },
    1132: {
      description: "MS_hub",
      graphicFile: "res:/dx9/Model/Station/Minmatar/MS_hub.red",
      race: "Minmatar"
    },
    1133: {
      description: "MS_industrial",
      graphicFile: "res:/dx9/model/station/minmatar/ms_industrial.red",
      race: "Minmatar"
    },
    1134: {
      description: "MS_millitary",
      graphicFile: "res:/dx9/model/station/minmatar/ms_millitary.red",
      race: "Minmatar"
    },
    1135: {
      description: "MS_mining",
      graphicFile: "res:/dx9/model/station/minmatar/ms_mining.red",
      race: "Minmatar"
    },
    1136: {
      description: "MS_research",
      graphicFile: "res:/dx9/model/station/minmatar/ms_research.red",
      race: "Minmatar"
    },
    1137: {
      description: "MS_standard",
      graphicFile: "res:/dx9/model/station/minmatar/ms_standard.red",
      race: "Minmatar"
    },
    1138: {
      description: "MS_Tradepost",
      graphicFile: "res:/dx9/model/station/minmatar/ms_tradepost.red",
      race: "Minmatar"
    },
    1139: {
      description: "FreqCrystal Gamma small - Unknown"
    },
    1140: {
      description: "FreqCrystal Roentgen small - Unknown"
    },
    1141: {
      description: "FreqCrystal UV small - Unknown"
    },
    1142: {
      description: "FreqCrystal Standard small - Unknown"
    },
    1143: {
      description: "FreqCrystal Microwave - Unknown"
    },
    1144: {
      description: "FreqCrystal Infrared small - Unknown"
    },
    1145: {
      description: "FreqCrystal Radio small - Unknown"
    },
    1146: {
      description: "Hollow Asteroid",
      graphicFile: "res:/dx9/model/worldobject/hollowasteroid/hollowasteroid.red"
    },
    1147: {
      description: "Red Cloud",
      graphicFile: "res:/dx9/model/worldobject/cloud/redcloud.red"
    },
    2922: {
      description: "Minmatar Destroyer Thukker (Thrasher Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Destroyer/MDE1/Thukker/MDE1_T1_Thukker.red",
      colorScheme: "TurretPreset_Thukker",
      race: "Minmatar"
    },
    1153: {
      description: "cargo_Hangar",
      graphicFile: "res:/dx9/model/worldobject/cargobox/cargo_hangar.red"
    },
    1154: {
      description: "BioM_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/biom_cargo.red"
    },
    1155: {
      description: "BioS_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/bios_cargo.red"
    },
    1156: {
      description: "cargo_Hangar",
      graphicFile: "res:/dx9/model/worldobject/cargobox/cargo_hangar.red"
    },
    1157: {
      description: "CryoL_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/cryol_cargo.red"
    },
    1158: {
      description: "CryoM_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/cryom_cargo.red"
    },
    1159: {
      description: "CryoS_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/cryos_cargo.red"
    },
    1160: {
      description: "HydroM_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/hydrom_cargo.red"
    },
    1161: {
      description: "HydroS_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/hydros_cargo.red"
    },
    1163: {
      description: "LifeM_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/lifem_cargo.red"
    },
    1164: {
      description: "LifeS_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/lifes_cargo.red"
    },
    1165: {
      description: "OreL_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/orel_cargo.red",
      race: "ORE"
    },
    1166: {
      description: "OreM_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/orem_cargo.red",
      race: "ORE"
    },
    1167: {
      description: "OreS_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/ores_cargo.red",
      race: "ORE"
    },
    1168: {
      description: "RadiationL_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/radiationl_cargo.red"
    },
    1169: {
      description: "RadiationM_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/radiationm_cargo.red"
    },
    1170: {
      description: "RadiationS_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/radiations_cargo.red"
    },
    1171: {
      description: "SecureL_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/securel_cargo.red"
    },
    1172: {
      description: "SecureM_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/securem_cargo.red"
    },
    1173: {
      description: "SecureS_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/secures_cargo.red"
    },
    1174: {
      description: "StandardL_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/standardl_cargo.red"
    },
    1175: {
      description: "StandardM_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/standardm_cargo.red"
    },
    1176: {
      description: "StandardS_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/standards_cargo.red"
    },
    2927: {
      description: "Ammatar Station 1 (intended as a battlestation) - Unknown",
      graphicFile: "res:/dx9/model/worldobject/ammatar_battlestation/ammbs1.red"
    },
    11496: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Door_Balcony_Open_01_Min/Door_Balcony_Open_01_Min.red"
    },
    2928: {
      description: "Caldari Carrier Wyvern",
      graphicFile: "res:/dx9/model/ship/caldari/Carrier/CCa2/CCa2_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    2929: {
      description: "Minmatar Carrier Nidhoggur",
      graphicFile: "res:/dx9/model/ship/Minmatar/Carrier/MCa2/MCa2_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    2930: {
      description: "Caldari Titan Leviathan",
      graphicFile: "res:/dx9/model/ship/caldari/Titan/CT1/CT1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    2931: {
      description: "Caldari Carrier Chimera",
      graphicFile: "res:/dx9/model/ship/caldari/Carrier/CCa1/CCa1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    1209: {
      description: "Plastic Wrap Icon",
      graphicFile: "res:/dx9/model/worldobject/cargo/cargocontainer.red"
    },
    1211: {
      description: "beacon",
      graphicFile: "res:/dx9/model/sentry/beacon/beacon.red"
    },
    1212: {
      description: "Caldari Sentry Gun",
      graphicFile: "res:/dx9/Model/Sentry/Caldari/csg2/csg2.red",
      race: "Caldari"
    },
    1213: {
      description: "Caldari Medium Railgun Battery",
      graphicFile: "res:/dx9/Model/Sentry/Caldari/csg3/csg3.red",
      race: "Caldari"
    },
    11360: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_02_Gal_Base.red"
    },
    1215: {
      description: "Gallente Sentry Gun",
      graphicFile: "res:/dx9/Model/Sentry/Gallente/gsg1/gsg1.red",
      race: "Gallente"
    },
    1216: {
      description: "Minmatar Sentry Gun",
      graphicFile: "res:/dx9/Model/Sentry/Minmatar/L1/sentry_L1.red",
      race: "Minmatar"
    },
    1217: {
      description: "Sensor Jammer",
      graphicFile: "res:/dx9/model/sentry/scanner/sensorjammer.red"
    },
    1219: {
      description: "Rogue Drone Light 01",
      graphicFile: "res:/dx9/model/Drone/Rogue/Light/RDL1/RDL1_T1.red",
      colorScheme: "TurretPreset_RogueDrone",
      race: "RogueDrone"
    },
    1220: {
      description: "Rogue Drone Medium 04",
      graphicFile: "res:/dx9/model/Drone/Rogue/Medium/RDM4/RDM4_T1.red",
      colorScheme: "TurretPreset_RogueDrone",
      race: "RogueDrone"
    },
    1221: {
      description: "Rogue Drone Heavy 02",
      graphicFile: "res:/dx9/model/Drone/Rogue/Heavy/RDH2/RDH2_T1.red",
      colorScheme: "TurretPreset_RogueDrone",
      race: "RogueDrone"
    },
    1222: {
      description: "Rogue Drone Medium 01",
      graphicFile: "res:/dx9/model/Drone/Rogue/Medium/RDM1/RDM1_T1.red",
      colorScheme: "TurretPreset_RogueDrone",
      race: "RogueDrone"
    },
    1223: {
      description: "Rogue Drone Medium 02",
      graphicFile: "res:/dx9/model/Drone/Rogue/Medium/RDM2/RDM2_T1.red",
      colorScheme: "TurretPreset_RogueDrone",
      race: "RogueDrone"
    },
    1224: {
      description: "Rogue Drone Light 02",
      graphicFile: "res:/dx9/model/Drone/Rogue/Light/RDL2/RDL2_T1.red",
      colorScheme: "TurretPreset_RogueDrone",
      race: "RogueDrone"
    },
    1225: {
      description: "Rogue Drone Light 03",
      graphicFile: "res:/dx9/model/Drone/Rogue/Light/RDL3/RDL3_T1.red",
      colorScheme: "TurretPreset_RogueDrone",
      race: "RogueDrone"
    },
    1226: {
      description: "Rogue Drone Light 04",
      graphicFile: "res:/dx9/model/Drone/Rogue/Light/RDL4/RDL4_T1.red",
      colorScheme: "TurretPreset_RogueDrone",
      race: "RogueDrone"
    },
    1227: {
      description: "Rogue Drone Medium 03",
      graphicFile: "res:/dx9/model/Drone/Rogue/Medium/RDM3/RDM3_T1.red",
      colorScheme: "TurretPreset_RogueDrone",
      race: "RogueDrone"
    },
    1228: {
      description: "Rogue Drone Light 05",
      graphicFile: "res:/dx9/model/Drone/Rogue/Light/RDL5/RDL5_T1.red",
      colorScheme: "TurretPreset_RogueDrone",
      race: "RogueDrone"
    },
    1229: {
      description: "Rogue Drone Heavy 01",
      graphicFile: "res:/dx9/model/Drone/Rogue/Heavy/RDH1/RDH1_T1.red",
      colorScheme: "TurretPreset_RogueDrone",
      race: "RogueDrone"
    },
    1230: {
      description: "Rogue Drone Light 06",
      graphicFile: "res:/dx9/model/Drone/Rogue/Light/RDL5/RDL5_T1.red",
      colorScheme: "TurretPreset_RogueDrone",
      race: "RogueDrone"
    },
    1231: {
      description: "SOCT Cruiser Gnosis",
      graphicFile: "res:/dx9/Model/Ship/Soct/Cruiser/Soctc1/Soctc1_T1.red",
      colorScheme: "TurretPreset_SOCT",
      race: "SOCT"
    },
    1232: {
      description: "SOCT Frigate SOCT2",
      graphicFile: "res:/dx9/Model/Ship/Soct/Frigate/Soctf1/Soctf1_T1.red",
      colorScheme: "TurretPreset_SOCT",
      race: "SOCT"
    },
    1233: {
      description: "SOCT Frigate Apotheosis",
      graphicFile: "res:/dx9/Model/Ship/Soct/Frigate/Soctf2/Soctf2_T1.red",
      colorScheme: "TurretPreset_SOCT",
      race: "SOCT"
    },
    1235: {
      description: "Amarr Frigate Khanid (Cruor Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF8/Khanid/AF8_T1_Khanid.red",
      colorScheme: "TurretPreset_Khanid",
      race: "Amarr"
    },
    1236: {
      description: "Sansha Cruiser Phantasm",
      graphicFile: "res:/dx9/Model/Ship/Sansha/Cruiser/SC1/SC1_T1.red",
      colorScheme: "TurretPreset_Sansha",
      race: "Sansha"
    },
    1237: {
      description: "Sansha Frigate Succubus",
      graphicFile: "res:/dx9/Model/Ship/Sansha/Frigate/SF1/SF1_T1.red",
      colorScheme: "TurretPreset_Sansha",
      race: "Sansha"
    },
    1238: {
      description: "Sansha Frigate 2",
      graphicFile: "res:/dx9/Model/Ship/Sansha/Frigate/SF2/SF2_T1.red",
      colorScheme: "TurretPreset_Sansha",
      race: "Sansha"
    },
    1240: {
      description: "Minmatar Frigate Vigil",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF7/MF7_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    1241: {
      description: "blueSun1",
      graphicFile: "res:/dx9/model/lensflare/bluesun1.red"
    },
    1242: {
      description: "hazypink",
      graphicFile: "res:/dx9/model/lensflare/hazypink.red"
    },
    1243: {
      description: "orangesun",
      graphicFile: "res:/dx9/model/lensflare/orangesun.red"
    },
    1244: {
      description: "pinksmallsun",
      graphicFile: "res:/dx9/model/lensflare/pinksmallsun.red"
    },
    1245: {
      description: "radiatingorange",
      graphicFile: "res:/dx9/model/lensflare/radiatingorange.red"
    },
    1246: {
      description: "smallblue",
      graphicFile: "res:/dx9/model/lensflare/smallblue.red"
    },
    1247: {
      description: "smallYellow",
      graphicFile: "res:/dx9/model/lensflare/smallyellow.red"
    },
    1248: {
      description: "tinywhite",
      graphicFile: "res:/dx9/model/lensflare/tinywhite.red"
    },
    1249: {
      description: "Amarr Citadel",
      graphicFile: "res:/dx9/model/station/amarr/as4/as4.red",
      race: "Amarr"
    },
    1250: {
      description: "c_m1",
      graphicFile: "res:/dx9/model/station/caldari/c_modular/c_m1.red",
      race: "Caldari"
    },
    1251: {
      description: "c_m2",
      graphicFile: "res:/dx9/model/station/caldari/c_modular/c_m2.red",
      race: "Caldari"
    },
    1252: {
      description: "gs3",
      graphicFile: "res:/dx9/model/station/gallente/gs3/gs3.red",
      race: "Gallente"
    },
    1253: {
      description: "gs4",
      graphicFile: "res:/dx9/model/station/gallente/gs4/gs4.red",
      race: "Gallente"
    },
    1254: {
      description: "gs5",
      graphicFile: "res:/dx9/model/station/gallente/gs5/gs5.red",
      race: "Gallente"
    },
    1255: {
      description: "gs6",
      graphicFile: "res:/dx9/model/station/gallente/gs6/gs6.red",
      race: "Gallente"
    },
    1256: {
      description: "gs7",
      graphicFile: "res:/dx9/model/station/gallente/gs7/gs7.red",
      race: "Gallente"
    },
    1257: {
      description: "gs8",
      graphicFile: "res:/dx9/model/station/gallente/gs8/gs8.red",
      race: "Gallente"
    },
    1258: {
      description: "Caldari Jumpgate (Small Stargate)",
      graphicFile: "res:/dx9/model/JumpGate/Caldari/csmg/csmg.red",
      race: "Caldari"
    },
    1259: {
      description: "Gallente Jumpgate (Standard Stargate)",
      graphicFile: "res:/dx9/model/JumpGate/Gallente/gsg/gsg.red",
      race: "Gallente"
    },
    1260: {
      description: "Gallente Jumpgate (Small Stargate)",
      graphicFile: "res:/dx9/model/JumpGate/Gallente/gsmg/gsmg.red",
      race: "Gallente"
    },
    1261: {
      description: "Gallente Jumpgate (Highway Stargate)",
      graphicFile: "res:/dx9/model/JumpGate/Gallente/ghg/ghg.red",
      race: "Gallente"
    },
    1262: {
      description: "Minmatar Jumpgate (Highway Stargate)",
      graphicFile: "res:/dx9/model/JumpGate/Minmatar/mhg/mhg.red",
      race: "Minmatar"
    },
    1263: {
      description: "Minmatar Jumpgate (Standard Stargate)",
      graphicFile: "res:/dx9/model/JumpGate/Minmatar/msg/msg.red",
      race: "Minmatar"
    },
    1264: {
      description: "Jove Cruiser Phantom",
      graphicFile: "res:/dx9/Model/Ship/Jove/jc5/jc5.red",
      colorScheme: "TurretPreset_Jove",
      race: "Jove"
    },
    1265: {
      description: "omnya",
      graphicFile: "res:/dx9/model/worldobject/omnya/omnya.red"
    },
    1266: {
      description: "relic",
      graphicFile: "res:/dx9/model/worldobject/relic/relic.red"
    },
    1267: {
      description: "Caldari Station 5",
      graphicFile: "res:/dx9/model/station/caldari/cs5/cs5.red",
      race: "Caldari"
    },
    2942: {
      description: "Gallente Titan Erebus",
      graphicFile: "res:/dx9/model/ship/gallente/Titan/GT1/GT1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    2770: {
      description: "Caldari Drone Medium Caldari Navy Vespa",
      graphicFile: "res:/dx9/model/Drone/Caldari/Medium/CDM1/Navy/CDM1_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    1285: {
      description: "Depleted Uranium S"
    },
    1286: {
      description: "EMP S"
    },
    1287: {
      description: "Fusion S"
    },
    1288: {
      description: "Nuclear S"
    },
    1289: {
      description: "Phased plasma S"
    },
    1290: {
      description: "Photon S"
    },
    1291: {
      description: "Titanium Sabot S"
    },
    1292: {
      description: "Carbonized Lead M"
    },
    1293: {
      description: "Depleted Uranium M"
    },
    1294: {
      description: "EMP M"
    },
    1295: {
      description: "Fusion M"
    },
    1296: {
      description: "Nuclear M"
    },
    1297: {
      description: "Phased plasma M"
    },
    1298: {
      description: "Photon M"
    },
    1299: {
      description: "Titanium Sabot M"
    },
    1300: {
      description: "Carbonized Lead L"
    },
    1301: {
      description: "Depleted Uranium L",
      graphicFile: "res:/dx9/Model/Turret/Ammo/p4.red"
    },
    1302: {
      description: "EMP L"
    },
    1303: {
      description: "Fusion L"
    },
    1304: {
      description: "Nuclear L"
    },
    1305: {
      description: "Phased Plasma L"
    },
    1306: {
      description: "Photon L"
    },
    1307: {
      description: "Titanium Sabot L"
    },
    1308: {
      description: "Carbonized Lead S"
    },
    1309: {
      description: "Caldari Modular station 3",
      graphicFile: "res:/dx9/model/station/caldari/c_modular/c_m3.red",
      race: "Caldari"
    },
    1310: {
      description: "Iridium Charge S"
    },
    1311: {
      description: "Iron Charge S"
    },
    1312: {
      description: "Lead Charge S"
    },
    1313: {
      description: "Plutonium Charge S"
    },
    1314: {
      description: "Thorium Charge S"
    },
    1315: {
      description: "Tungsten Charge S"
    },
    1316: {
      description: "Uranium Charge S"
    },
    1317: {
      description: "Antimatter Charge M"
    },
    1318: {
      description: "Iridium Charge M"
    },
    1319: {
      description: "Iron Charge M"
    },
    1320: {
      description: "Lead Charge M"
    },
    1321: {
      description: "Plutonium Charge M"
    },
    1322: {
      description: "Thorium Charge M"
    },
    1323: {
      description: "Tungsten Charge M"
    },
    1324: {
      description: "Uranium Charge M"
    },
    1325: {
      description: "Antimatter Charge L"
    },
    1326: {
      description: "Iridium Charge L"
    },
    1327: {
      description: "Iron Charge L"
    },
    1328: {
      description: "Lead Charge L"
    },
    1329: {
      description: "Plutonium Charge L"
    },
    1330: {
      description: "Thorium Charge L"
    },
    1331: {
      description: "Tungsten Charge L"
    },
    1332: {
      description: "Uranium Charge L"
    },
    1345: {
      description: "Assault missile launcher - Unknown",
      graphicFile: "res:/dx9/model/turret/Launcher/Assault/Assault_T1.red"
    },
    2955: {
      description: "Caldari Drone  Light Light Shield Maintenance Bot I",
      graphicFile: "res:/dx9/model/Drone/Caldari/Light/CDL1/CDL1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    3064: {
      description: "Boostercloud8",
      graphicFile: "res:/dx9/model/worldobject/cloud/booster/cloud8.red"
    },
    11633: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Walkway/Walkway_06_Ama.red"
    },
    1372: {
      description: "CONCORD Frigate Polaris Frigate",
      graphicFile: "res:/dx9/Model/ship/Concord/Frigate/ConF2/ISD/ConF2_T1_ISD.red",
      colorScheme: "TurretPreset_Concord",
      race: "Concord"
    },
    1373: {
      description: "Ammar Station 6",
      graphicFile: "res:/dx9/model/station/amarr/as6/as6.red",
      race: "Amarr"
    },
    1374: {
      description: "Ammar Station 5",
      graphicFile: "res:/dx9/model/station/amarr/as5/as5.red",
      race: "Amarr"
    },
    1375: {
      description: "CONCORD Frigate ISD Polaris Centurion",
      graphicFile: "res:/dx9/Model/ship/Concord/Frigate/ConF2/ISD/ConF2_T1_ISD.red",
      colorScheme: "TurretPreset_Concord_ISD",
      race: "Concord"
    },
    1376: {
      description: "CONCORD Frigate ISD Polaris Legatus",
      graphicFile: "res:/dx9/Model/ship/Concord/Frigate/ConF2/SWAT/ConF2_T1_SWAT.red",
      colorScheme: "TurretPreset_Concord_SWAT",
      race: "Concord"
    },
    1402: {
      description: "Concord Home Base",
      graphicFile: "res:/dx9/model/station/concord/con_hq.red",
      race: "Concord"
    },
    1404: {
      description: "Heaven Station",
      graphicFile: "res:/dx9/model/station/angel/angs2.red",
      race: "Angel"
    },
    1407: {
      description: "MS_Tradepost",
      graphicFile: "res:/dx9/model/worldobject/wrecks/ms_tradepost.red"
    },
    1408: {
      description: "as_Hub",
      graphicFile: "res:/dx9/model/worldobject/wrecks/as_hub.red"
    },
    1409: {
      description: "as_Millitary",
      graphicFile: "res:/dx9/model/worldobject/wrecks/as_millitary.red"
    },
    1410: {
      description: "AS_Mining",
      graphicFile: "res:/dx9/model/worldobject/wrecks/as_mining.red"
    },
    1411: {
      description: "AS_Research",
      graphicFile: "res:/dx9/model/worldobject/wrecks/as_research.red"
    },
    1412: {
      description: "as_Tradepost",
      graphicFile: "res:/dx9/model/worldobject/wrecks/as_tradepost.red"
    },
    1413: {
      description: "cs1",
      graphicFile: "res:/dx9/model/worldobject/wrecks/cs1.red"
    },
    1414: {
      description: "cs2",
      graphicFile: "res:/dx9/model/worldobject/wrecks/cs2.red"
    },
    1415: {
      description: "cs3",
      graphicFile: "res:/dx9/model/worldobject/wrecks/cs3.red"
    },
    1416: {
      description: "cs4",
      graphicFile: "res:/dx9/model/worldobject/wrecks/cs4.red"
    },
    1417: {
      description: "gs1",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gs1.red"
    },
    1418: {
      description: "gs2",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gs2.red"
    },
    1419: {
      description: "gs3",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gs3.red"
    },
    1420: {
      description: "gs4",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gs4.red"
    },
    1421: {
      description: "gs5",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gs5.red"
    },
    1422: {
      description: "gs6",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gs6.red"
    },
    1423: {
      description: "gs7",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gs7.red"
    },
    1424: {
      description: "gs8",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gs8.red"
    },
    1425: {
      description: "MS_Hub",
      graphicFile: "res:/dx9/model/worldobject/wrecks/ms_hub.red"
    },
    1426: {
      description: "MS_Industry",
      graphicFile: "res:/dx9/model/worldobject/wrecks/ms_industry.red"
    },
    1427: {
      description: "MS_Millitary",
      graphicFile: "res:/dx9/model/worldobject/wrecks/ms_millitary.red"
    },
    1428: {
      description: "MS_Mining",
      graphicFile: "res:/dx9/model/worldobject/wrecks/ms_mining.red"
    },
    1429: {
      description: "MS_Research",
      graphicFile: "res:/dx9/model/worldobject/wrecks/ms_research.red"
    },
    1430: {
      description: "MS_Standard",
      graphicFile: "res:/dx9/model/worldobject/wrecks/ms_standard.red"
    },
    1431: {
      description: "MS_Tradepost",
      graphicFile: "res:/dx9/model/worldobject/wrecks/ms_tradepost.red"
    },
    2972: {
      description: "Gallente Fighter Firbolg",
      graphicFile: "res:/dx9/Model/Ship/Gallente/Fighter/GFI1/GFI1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    2973: {
      description: "Minmatar Fighter Einherji",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Fighter/MFI1/MFI1_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    2780: {
      description: "Minmatar Drone Medium Valkyrie I",
      graphicFile: "res:/dx9/model/Drone/Minmatar/Medium/MDM1/MDM1_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    1637: {
      description: "Dark Amarr Station O",
      graphicFile: "res:/dx9/model/station/darkamaar/das_o.red"
    },
    11795: {
      graphicFile: "res:/dx9/scene/Universe/a09_cube.red"
    },
    2783: {
      description: "Gallente Administration Outpost - Unknown",
      graphicFile: "res:/dx9/model/outposts/go2_trade/go2_trade.red"
    },
    1669: {
      description: "DarkCloud",
      graphicFile: "res:/dx9/model/worldobject/cloud/darkcloud.red"
    },
    1670: {
      description: "DarkGreenCloud",
      graphicFile: "res:/dx9/model/worldobject/cloud/darkgreencloud.red"
    },
    1671: {
      description: "DustCloud",
      graphicFile: "res:/dx9/model/worldobject/cloud/dustcloud.red"
    },
    1672: {
      description: "Ionloud",
      graphicFile: "res:/dx9/model/worldobject/cloud/ionloud.red"
    },
    1673: {
      description: "SparkCloud",
      graphicFile: "res:/dx9/model/worldobject/cloud/sparkcloud.red"
    },
    1680: {
      description: "DamageDampener",
      graphicFile: "res:/dx9/model/sentry/damagedampener/damagedampener.red"
    },
    1681: {
      description: "DroneHive2",
      graphicFile: "res:/dx9/model/sentry/dronehive/dronehive2.red"
    },
    1682: {
      description: "Dronehive1",
      graphicFile: "res:/dx9/model/sentry/dronehive/dronehive1.red"
    },
    1683: {
      description: "MLPad",
      graphicFile: "res:/dx9/model/sentry/missilepad/mlpad.red"
    },
    1684: {
      description: "PowerGenerator",
      graphicFile: "res:/dx9/model/sentry/powergenerator/powergenerator.red"
    },
    1685: {
      description: "Shield Depo",
      graphicFile: "res:/dx9/model/sentry/shielddepo/shielddepo.red"
    },
    1686: {
      description: "DarkGreyCloudS",
      graphicFile: "res:/dx9/model/worldobject/cloud/darkgreyclouds.red"
    },
    1687: {
      description: "DarkGreyTurbulentCloudS",
      graphicFile: "res:/dx9/model/worldobject/cloud/darkgreyturbulentclouds.red"
    },
    1688: {
      description: "ElectricCloudS",
      graphicFile: "res:/dx9/model/worldobject/cloud/electricclouds.red"
    },
    1689: {
      description: "FireCloudS",
      graphicFile: "res:/dx9/model/worldobject/cloud/fireclouds.red"
    },
    1690: {
      description: "PlasmaCloudS",
      graphicFile: "res:/dx9/model/worldobject/cloud/plasmaclouds.red"
    },
    1691: {
      description: "battery Column",
      graphicFile: "res:/dx9/model/worldobject/batterycolumn/batterycolumn.red"
    },
    1692: {
      description: "Monolith",
      graphicFile: "res:/dx9/model/worldobject/monolith/monolith.red"
    },
    1693: {
      description: "Coral",
      graphicFile: "res:/dx9/model/worldobject/coral/coral.red"
    },
    1694: {
      description: "debris",
      graphicFile: "res:/dx9/model/worldobject/debris/debris.red"
    },
    1695: {
      description: "theRing",
      graphicFile: "res:/dx9/model/worldobject/debris/thering.red"
    },
    1696: {
      description: "debris1",
      graphicFile: "res:/dx9/model/worldobject/debris/debris1.red"
    },
    1697: {
      description: "debris2",
      graphicFile: "res:/dx9/model/worldobject/debris/debris2.red"
    },
    1698: {
      description: "debris3",
      graphicFile: "res:/dx9/model/worldobject/debris/debris3.red"
    },
    1699: {
      description: "debris4",
      graphicFile: "res:/dx9/model/worldobject/debris/debris4.red"
    },
    1701: {
      description: "Debrisstorm",
      graphicFile: "res:/dx9/model/worldobject/cloud/debrisstorm.red"
    },
    1702: {
      description: "Meteorstorm",
      graphicFile: "res:/dx9/model/worldobject/cloud/meteorstorm.red"
    },
    1703: {
      description: "AO_Refining",
      graphicFile: "res:/dx9/model/outposts/ao_refining.red"
    },
    1704: {
      description: "AO_repair",
      graphicFile: "res:/dx9/model/outposts/ao_repair.red"
    },
    1705: {
      description: "AO_Tactical",
      graphicFile: "res:/dx9/model/outposts/ao_tactical.red"
    },
    1706: {
      description: "CO_Refining",
      graphicFile: "res:/dx9/model/outposts/co_refining.red"
    },
    1707: {
      description: "CO_Repair",
      graphicFile: "res:/dx9/model/outposts/co_repair.red"
    },
    1708: {
      description: "CO_Tactical",
      graphicFile: "res:/dx9/model/outposts/co_tactical.red"
    },
    1709: {
      description: "MO_Refining",
      graphicFile: "res:/dx9/model/outposts/mo_refining.red"
    },
    1710: {
      description: "MO_Repair",
      graphicFile: "res:/dx9/model/outposts/mo_repair.red"
    },
    1711: {
      description: "MO_Tactical",
      graphicFile: "res:/dx9/model/outposts/mo_tactical.red"
    },
    1712: {
      description: "go1",
      graphicFile: "res:/dx9/model/station/gallente/go1/go1.red",
      race: "Gallente"
    },
    1713: {
      description: "Drydock_Gallente",
      graphicFile: "res:/dx9/model/drydock/drydock_gallente.red"
    },
    1714: {
      description: "Drydock_Amarr",
      graphicFile: "res:/dx9/model/drydock/drydock_amarr.red"
    },
    1715: {
      description: "Drydock_Minmatar",
      graphicFile: "res:/dx9/model/drydock/drydock_minmatar.red"
    },
    1716: {
      description: "Drydock_Caldari",
      graphicFile: "res:/dx9/model/drydock/drydock_caldari.red"
    },
    1717: {
      description: "miningpost",
      graphicFile: "res:/dx9/model/worldobject/miningpost/miningpost.red"
    },
    1718: {
      description: "gb1_infested",
      graphicFile: "res:/dx9/model/ship/gallente/gb1/gb1_infested.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    2785: {
      description: "Amarr Factory Outpost - Unknown",
      graphicFile: "res:/dx9/model/outposts/amarr/factoryoutpost.red",
      race: "Amarr"
    },
    1725: {
      description: "sail_charger",
      graphicFile: "res:/dx9/model/worldobject/sail_charger/sail_charger.red"
    },
    1726: {
      description: "mine",
      graphicFile: "res:/dx9/model/worldobject/mine/mine.red"
    },
    1727: {
      description: "ball_and_pillars",
      graphicFile: "res:/dx9/model/worldobject/ball_and_pillars/ball_and_pillars.red"
    },
    1728: {
      description: "Amarr Cruiser Navy Issue Arbitrator",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC1/Navy/AC1_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    1729: {
      description: "Amarr Cruiser Navy Issue Maller",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC2/Navy/AC2_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    1730: {
      description: "Amarr Cruiser Navy Issue Augoror",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC3/Navy/AC3_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    1731: {
      description: "Amarr Cruiser Navy Issue Omen",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC4/Navy/AC4_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    1732: {
      description: "Amarr Frigate Navy Issue Impairor",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF1/Navy/AF1_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    1733: {
      description: "Amarr Frigate Navy Issue Crucifier",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF2/Navy/AF2_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    1734: {
      description: "Amarr Frigate Navy Issue Punisher",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF3/Navy/AF3_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    1735: {
      description: "Amarr Frigate Navy Issue Executioner",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF4/Navy/AF4_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    1736: {
      description: "Amarr Frigate Navy Issue Inquisitor",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF5/Navy/AF5_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    1737: {
      description: "Amarr Frigate Navy Issue Tormentor",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF6/Navy/AF6_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    1738: {
      description: "Amarr Cruiser Ammatar (Arbitrator Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC1/Ammatar/AC1_T1_Ammatar.red",
      colorScheme: "TurretPreset_Ammatar",
      race: "Amarr"
    },
    1739: {
      description: "Amarr Cruiser Ammatar (Maller Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC2/Ammatar/AC2_T1_Ammatar.red",
      colorScheme: "TurretPreset_Ammatar",
      race: "Amarr"
    },
    1740: {
      description: "Amarr Cruiser Ammatar (Augoror Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC3/Ammatar/AC3_T1_Ammatar.red",
      colorScheme: "TurretPreset_Ammatar",
      race: "Amarr"
    },
    1741: {
      description: "Amarr Cruiser Ammatar (Omen Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC4/Ammatar/AC4_T1_Ammatar.red",
      colorScheme: "TurretPreset_Ammatar",
      race: "Amarr"
    },
    1743: {
      description: "Amarr Frigate Ammatar (Crucifier Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF2/Ammatar/AF2_T1_Ammatar.red",
      colorScheme: "TurretPreset_Ammatar",
      race: "Amarr"
    },
    1744: {
      description: "Amarr Frigate Ammatar (Punisher Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF3/Ammatar/AF3_T1_Ammatar.red",
      colorScheme: "TurretPreset_Ammatar",
      race: "Amarr"
    },
    1745: {
      description: "Amarr Frigate Ammatar (Executioner Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF4/Ammatar/AF4_T1_Ammatar.red",
      colorScheme: "TurretPreset_Ammatar",
      race: "Amarr"
    },
    1746: {
      description: "Amarr Frigate Ammatar Ammatar (Inquisitor Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF5/Ammatar/AF5_T1_Ammatar.red",
      colorScheme: "TurretPreset_Ammatar",
      race: "Amarr"
    },
    1748: {
      description: "Amarr Cruiser Ardishapur (Arbitrator Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC1/Ardishapur/AC1_T1_Ardishapur.red",
      colorScheme: "TurretPreset_Ardishapur",
      race: "Amarr"
    },
    1751: {
      description: "Amarr Cruiser Ardishapur Zealot (Omen Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC4/Ardishapur/AC4_T2_Ardishapur.red",
      colorScheme: "TurretPreset_Ardishapur",
      race: "Amarr"
    },
    2786: {
      description: "Caldari Dreadnought Phoenix",
      graphicFile: "res:/dx9/model/ship/caldari/Dreadnought/CDn1/CDn1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    1758: {
      description: "Amarr Cruiser BloodRaider (Arbitrator Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC1/Bloodraider/AC1_T1_Bloodraider.red",
      colorScheme: "TurretPreset_Bloodraider",
      race: "Amarr"
    },
    1759: {
      description: "Amarr Cruiser BloodRaider (Maller Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC2/BloodRaider/AC2_T1_BloodRaider.red",
      colorScheme: "TurretPreset_Bloodraider",
      race: "Amarr"
    },
    1760: {
      description: "Amarr Cruiser BloodRaider (Augoror Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC3/BloodRaider/AC3_T1_BloodRaider.red",
      colorScheme: "TurretPreset_Bloodraider",
      race: "Amarr"
    },
    1761: {
      description: "Amarr Cruiser BloodRaider (Omen Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC4/BloodRaider/AC4_T1_BloodRaider.red",
      colorScheme: "TurretPreset_Bloodraider",
      race: "Amarr"
    },
    1762: {
      description: "Amarr Frigate BloodRaider Hematos (Impairor Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF1/BloodRaider/AF1_T1_BloodRaider.red",
      colorScheme: "TurretPreset_Bloodraider",
      race: "Amarr"
    },
    1763: {
      description: "Amarr Frigate BloodRaider (Crucifier Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF2/BloodRaider/AF2_T1_BloodRaider.red",
      colorScheme: "TurretPreset_Bloodraider",
      race: "Amarr"
    },
    1764: {
      description: "Amarr Frigate BloodRaider (Punisher Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF3/BloodRaider/AF3_T1_BloodRaider.red",
      colorScheme: "TurretPreset_Bloodraider",
      race: "Amarr"
    },
    1765: {
      description: "Amarr Frigate BloodRaider (Executioner Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF4/BloodRaider/AF4_T1_BloodRaider.red",
      colorScheme: "TurretPreset_Bloodraider",
      race: "Amarr"
    },
    1766: {
      description: "Amarr Frigate BloodRaider (Inquisitor Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF5/BloodRaider/AF5_T1_BloodRaider.red",
      colorScheme: "TurretPreset_Bloodraider",
      race: "Amarr"
    },
    1767: {
      description: "Amarr Frigate BloodRaider (Tormentor Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF6/BloodRaider/AF6_T1_BloodRaider.red",
      colorScheme: "TurretPreset_Bloodraider",
      race: "Amarr"
    },
    1768: {
      description: "Gallente Frigate Roden (Velator Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF1/Roden/GF1_T1_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    1769: {
      description: "Gallente Frigate Roden (Navitas Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF2/Roden/GF2_T1_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    1770: {
      description: "Gallente Frigate Roden (Tristan Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF3/Roden/GF3_T1_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    1771: {
      description: "Gallente Frigate Roden Enyo (Incursus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF4/Roden/GF4_T2b_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    1772: {
      description: "Gallente Frigate Roden (Imicus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF5/Roden/GF5_T2_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    1773: {
      description: "Gallente Frigate Roden Ares (Atron Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF6/Roden/GF6_T2a_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    1774: {
      description: "Gallente Frigate Roden (Maulus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF7/Roden/GF7_T1_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    1776: {
      description: "Minmatar Cruiser Sebiestor Broadsword (Rupture Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Cruiser/MC2/Sebiestor/MC2_T2c_Sebiestor.red",
      colorScheme: "TurretPreset_Sebiestor",
      race: "Minmatar"
    },
    1777: {
      description: "Minmatar Cruiser Sebiestor Rapier (Bellicose Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Cruiser/MC3/Sebiestor/MC3_T2c_Sebiestor.red",
      colorScheme: "TurretPreset_Sebiestor",
      race: "Minmatar"
    },
    1778: {
      description: "Minmatar Cruiser Sebiestor Scimitar (Scythe Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Cruiser/MC4/Sebiestor/MC4_T2c_Sebiestor.red",
      colorScheme: "TurretPreset_Sebiestor",
      race: "Minmatar"
    },
    1779: {
      description: "Minmatar Frigate Sebiestor Stiletto (Slasher Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF1/Sebiestor/MF1_T2c_Sebiestor.red",
      colorScheme: "TurretPreset_Sebiestor",
      race: "Minmatar"
    },
    20245: {
      description: "Minmatar Destroyer Nefantar Thrasher (Thrasher Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Destroyer/MDE1/Nefantar/MDE1_T1_Nefantar.red",
      colorScheme: "TurretPreset_Nefantar",
      race: "Minmatar"
    },
    1782: {
      description: "Minmatar Frigate Sebiestor Blade (Rifter Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF4/Sebiestor/MF4_T2c_Sebiestor.red",
      colorScheme: "TurretPreset_Sebiestor",
      race: "Minmatar"
    },
    2787: {
      description: "Blood_as4",
      graphicFile: "res:/dx9/model/station/bloodraider/blood_as4.red",
      race: "Amarr"
    },
    1784: {
      description: "Caldari Cruiser Navy Osprey Navy Issue (Osprey Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC1/Navy/CC1_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    1785: {
      description: "Caldari Cruiser Navy Obsidian (Moa Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC2/Navy/CC2_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    1786: {
      description: "Caldari Cruiser Navy (Caracal Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC3/Navy/CC3_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    1787: {
      description: "Caldari Cruiser Navy (Blackbird Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC4/Navy/CC4_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    1788: {
      description: "Caldari Frigate Navy (Condor Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF2/Navy/CF2_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    1789: {
      description: "Caldari Frigate Navy (Griffin Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF4/Navy/CF4_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    1790: {
      description: "Caldari Frigate Navy (Ibis Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF5/Navy/CF5_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    1791: {
      description: "Caldari Frigate Navy (Kestrel Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF6/Navy/CF6_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    1792: {
      description: "Caldari Frigate Navy (Merlin Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF7/Navy/CF7_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    1793: {
      description: "Caldari Frigate Navy (Heron Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF3/Navy/CF3_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    1794: {
      description: "Gallente Frigate Quafe (Velator Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF1/Quafe/GF1_T1_Quafe.red",
      colorScheme: "TurretPreset_Quafe",
      race: "Gallente"
    },
    1795: {
      description: "Gallente Frigate Quafe (Navitas Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF2/Quafe/GF2_T1_Quafe.red",
      colorScheme: "TurretPreset_Quafe",
      race: "Gallente"
    },
    1796: {
      description: "Gallente Frigate Quafe (Tristan Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF3/Quafe/GF3_T1_Quafe.red",
      colorScheme: "TurretPreset_Quafe",
      race: "Gallente"
    },
    1797: {
      description: "Gallente Frigate Quafe (Incursus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF4/Quafe/GF4_T1_Quafe.red",
      colorScheme: "TurretPreset_Quafe",
      race: "Gallente"
    },
    1798: {
      description: "Gallente Frigate Quafe (Imicus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF5/Quafe/GF5_T1_Quafe.red",
      colorScheme: "TurretPreset_Quafe",
      race: "Gallente"
    },
    1799: {
      description: "Gallente Frigate Quafe (Atron Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF6/Quafe/GF6_T1_Quafe.red",
      colorScheme: "TurretPreset_Quafe",
      race: "Gallente"
    },
    1800: {
      description: "Gallente Frigate Quafe (Maulus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF7/Quafe/GF7_T1_Quafe.red",
      colorScheme: "TurretPreset_Quafe",
      race: "Gallente"
    },
    1801: {
      description: "Gallente Cruiser Navy (Celestis Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC1/Navy/GC1_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    1802: {
      description: "Gallente Gallente Navy (Exequror Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC2/Navy/GC2_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    1803: {
      description: "Gallente Cruiser Navy (Vexor Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC3/Navy/GC3_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    1804: {
      description: "Gallente Cruiser Navy (Thorax Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC4/Navy/GC4_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    1805: {
      description: "Gallente Frigate Navy (Velator Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF1/Navy/GF1_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    1806: {
      description: "Gallente Frigate Navy (Navitas Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF2/Navy/GF2_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    1807: {
      description: "Gallente Frigate Navy (Tristan Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF3/Navy/GF3_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    1808: {
      description: "Gallente Frigate Navy (Incursus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF4/Navy/GF4_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    1809: {
      description: "Gallente Frigate Navy (Imicus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF5/Navy/GF5_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    1810: {
      description: "Gallente Frigate Navy (Atron Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF6/Navy/GF6_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    1811: {
      description: "Gallente Frigate Navy (Maulus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF7/Navy/GF7_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    1812: {
      description: "Gallente Cruiser Serpentis (Celestis Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC1/Serpentis/GC1_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    1813: {
      description: "Gallente Cruiser Serpentis (Exequror Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC2/Serpentis/GC2_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    1814: {
      description: "Gallente Cruiser Serpentis (Vexor Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC3/Serpentis/GC3_T1_Serpentis.red",
      race: "Gallente"
    },
    1815: {
      description: "Gallente Cruiser Serpentis Vigilant (Thorax Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC4/Serpentis/GC4_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    1816: {
      description: "Gallente Frigate Serpentis Violator (Velator Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF1/Serpentis/GF1_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    1817: {
      description: "Gallente Frigate Serpentis (Navitas Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF2/Serpentis/GF2_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    1818: {
      description: "Gallente Frigate Serpentis (Tristan Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF3/Serpentis/GF3_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    1819: {
      description: "Gallente Frigate Serpentis (Incursus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF4/Serpentis/GF4_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    1820: {
      description: "Gallente Frigate Serpentis (Imicus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF5/Serpentis/GF5_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    1821: {
      description: "Gallente Frigate Serpentis (Atron Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF6/Serpentis/GF6_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    1822: {
      description: "Gallente Frigate Serpentis (Maulus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF7/Serpentis/GF7_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    1823: {
      description: "Caldari Cruiser Guristas (Osprey Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC1/Guristas/CC1_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    1824: {
      description: "Caldari Cruiser Guristas Gila (Moa Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC2/Guristas/CC2_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    1825: {
      description: "Caldari Cruiser LaiDai Cerberus (Caracal Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC3/LaiDai/CC3_T2_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    1826: {
      description: "Caldari Cruiser Guristas (Blackbird Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC4/Guristas/CC4_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    1827: {
      description: "Caldari Frigate Guristas (Condor Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF2/Guristas/CF2_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    1828: {
      description: "Caldari Frigate Guristas (Griffin Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF4/Guristas/CF4_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    1829: {
      description: "Caldari Frigate Guristas Taipan (Ibis Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF5/Guristas/CF5_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    1830: {
      description: "Caldari Frigate Guristas (Kestrel Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF6/Guristas/CF6_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    1831: {
      description: "Caldari Frigate Guristas Worm (Merlin Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF7/Guristas/CF7_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    1832: {
      description: "Caldari Frigate Guristas (Heron Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF3/Guristas/CF3_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    1833: {
      description: "Gallente Cruiser CreoDron (Celestis Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC1/CreoDron/GC1_T1_CreoDron.red",
      colorScheme: "TurretPreset_CreoDron",
      race: "Gallente"
    },
    1834: {
      description: "Battleship Cruiser CreoDron (Exequror Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC2/CreoDron/GC2_T1_CreoDron.red",
      colorScheme: "TurretPreset_CreoDron",
      race: "Gallente"
    },
    1835: {
      description: "Gallente Cruiser CreoDron Ishtar (Vexor Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC3/CreoDron/GC3_T2_CreoDron.red",
      colorScheme: "TurretPreset_CreoDron",
      race: "Gallente"
    },
    1836: {
      description: "Gallente Cruiser CreoDron (Thorax Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC4/CreoDron/GC4_T1_CreoDron.red",
      colorScheme: "TurretPreset_CreoDron",
      race: "Gallente"
    },
    1837: {
      description: "Gallente Frigate CreoDron (Velator Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF1/CreoDron/GF1_T1_CreoDron.red",
      colorScheme: "TurretPreset_CreoDron",
      race: "Gallente"
    },
    1838: {
      description: "Gallente Frigate CreoDron (Navitas Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF2/CreoDron/GF2_T1_CreoDron.red",
      colorScheme: "TurretPreset_CreoDron",
      race: "Gallente"
    },
    1839: {
      description: "Gallente Frigate CreoDron (Tristan Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF3/CreoDron/GF3_T1_CreoDron.red",
      colorScheme: "TurretPreset_CreoDron",
      race: "Gallente"
    },
    1840: {
      description: "Gallente Frigate CreoDron Ishkur (Tristan Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF4/CreoDron/GF4_T2a_CreoDron.red",
      colorScheme: "TurretPreset_CreoDron",
      race: "Gallente"
    },
    1841: {
      description: "Gallente Frigate CreoDron Helios (Imicus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF5/CreoDron/GF5_T2_CreoDron.red",
      colorScheme: "TurretPreset_CreoDron",
      race: "Gallente"
    },
    1842: {
      description: "Gallente Frigate CreoDron (Atron Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF6/CreoDron/GF6_T1_CreoDron.red",
      colorScheme: "TurretPreset_CreoDron",
      race: "Gallente"
    },
    1843: {
      description: "Gallente Frigate CreoDron (Maulus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF7/CreoDron/GF7_T1_CreoDron.red",
      colorScheme: "TurretPreset_CreoDron",
      race: "Gallente"
    },
    1844: {
      description: "Caldari Cruiser Kaalakiota Nocturne (Osprey Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC1/Kaalakiota/CC1_T1_Kaalakiota.red",
      colorScheme: "TurretPreset_Kaalakiota",
      race: "Caldari"
    },
    1845: {
      description: "Caldari Cruiser Kaalakiota (Moa Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC2/Kaalakiota/CC2_T1_Kaalakiota.red",
      colorScheme: "TurretPreset_Kaalakiota",
      race: "Caldari"
    },
    1846: {
      description: "Caldari Cruiser Kaalakiota (Caracal Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC3/Kaalakiota/CC3_T1_Kaalakiota.red",
      colorScheme: "TurretPreset_Kaalakiota",
      race: "Caldari"
    },
    1847: {
      description: "Caldari Cruiser Kaalakiota Rook (Blackbird Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC4/Kaalakiota/CC4_T2b_Kaalakiota.red",
      colorScheme: "TurretPreset_Kaalakiota",
      race: "Caldari"
    },
    1848: {
      description: "Caldari Frigate Kaalakiota Crow (Condor Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF2/Kaalakiota/CF2_T2a_Kaalakiota.red",
      colorScheme: "TurretPreset_Kaalakiota",
      race: "Caldari"
    },
    1849: {
      description: "Caldari Frigate Kaalakiota (Griffin Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF4/Kaalakiota/CF4_T1_Kaalakiota.red",
      colorScheme: "TurretPreset_Kaalakiota",
      race: "Caldari"
    },
    1850: {
      description: "Caldari Frigate Kaalakiota (Ibis Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF5/Kaalakiota/CF5_T1_Kaalakiota.red",
      colorScheme: "TurretPreset_Kaalakiota",
      race: "Caldari"
    },
    1851: {
      description: "Caldari Frigate Kaalakiota (Kestrel Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF6/Kaalakiota/CF6_T1_Kaalakiota.red",
      colorScheme: "TurretPreset_Kaalakiota",
      race: "Caldari"
    },
    1852: {
      description: "Caldari Frigate Kaalakiota (Merlin Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF7/Kaalakiota/CF7_T1_Kaalakiota.red",
      colorScheme: "TurretPreset_Kaalakiota",
      race: "Caldari"
    },
    1853: {
      description: "Caldari Frigate Kaalakiota (Heron Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF3/Kaalakiota/CF3_T1_Kaalakiota.red",
      colorScheme: "TurretPreset_Kaalakiota",
      race: "Caldari"
    },
    1854: {
      description: "Amarr Cruiser Khanid Curse (Arbitrator Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC1/Khanid/AC1_T2a_Khanid.red",
      colorScheme: "TurretPreset_Khanid",
      race: "Amarr"
    },
    1855: {
      description: "Amarr Cruiser Khanid Sacrilege (Maller Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC2/Khanid/AC2_T2a_Khanid.red",
      colorScheme: "TurretPreset_Khanid",
      race: "Amarr"
    },
    1856: {
      description: "Amarr Cruiser Khanid (Augoror Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC3/Khanid/AC3_T1_Khanid.red",
      colorScheme: "TurretPreset_Khanid",
      race: "Amarr"
    },
    1857: {
      description: "Amarr Cruiser Khanid (Omen Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC4/Khanid/AC4_T1_Khanid.red",
      colorScheme: "TurretPreset_Khanid",
      race: "Amarr"
    },
    1858: {
      description: "Amarr Frigate Khanid (Impairor Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF1/Khanid/AF1_T1_Khanid.red",
      colorScheme: "TurretPreset_Khanid",
      race: "Amarr"
    },
    1859: {
      description: "Amarr Frigate Khanid (Crucifier Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF2/Khanid/AF2_T1_Khanid.red",
      colorScheme: "TurretPreset_Khanid",
      race: "Amarr"
    },
    1860: {
      description: "Amarr Frigate Khanid Vengeance (Punisher Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF3/Khanid/AF3_T2a_Khanid.red",
      colorScheme: "TurretPreset_Khanid",
      race: "Amarr"
    },
    1861: {
      description: "Amarr Frigate Khanid Malediction (Executioner Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF4/Khanid/AF4_T2a_Khanid.red",
      colorScheme: "TurretPreset_Khanid",
      race: "Amarr"
    },
    1862: {
      description: "Amarr Frigate Khanid (Inquisitor Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF5/Khanid/AF5_T1_Khanid.red",
      colorScheme: "TurretPreset_Khanid",
      race: "Amarr"
    },
    1864: {
      description: "Amarr Cruiser Kor-Azor (Arbitrator Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC1/Kor-Azor/AC1_T1_Kor-Azor.red",
      colorScheme: "TurretPreset_KorAzor",
      race: "Amarr"
    },
    1868: {
      description: "Amarr Frigate Kor-Azor (Impairor Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF1/Kor-Azor/AF1_T1_Kor-Azor.red",
      colorScheme: "TurretPreset_KorAzor",
      race: "Amarr"
    },
    1872: {
      description: "Amarr Frigate Ardishapur Purifier (Inquisitor Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF5/Ardishapur/AF5_T2_Ardishapur.red",
      colorScheme: "TurretPreset_Ardishapur",
      race: "Amarr"
    },
    1874: {
      description: "Caldari Cruiser LaiDai (Osprey Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC1/LaiDai/CC1_T1_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    1875: {
      description: "Caldari Cruiser LaiDai (Moa Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC2/LaiDai/CC2_T1_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    1876: {
      description: "Caldari Cruiser LaiDai (Caracal Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC3/LaiDai/CC3_T1_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    1877: {
      description: "Caldari Cruiser LaiDai (Blackbird Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC4/LaiDai/CC4_T1_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    1878: {
      description: "Caldari Frigate LaiDai Raptor (Condor Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF2/Laidai/CF2_T2b_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    1879: {
      description: "Caldari Frigate Mordus (Griffin Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF4/Mordus/CF4_T1_Mordus.red",
      race: "Caldari"
    },
    1880: {
      description: "Caldari Frigate LaiDai (Ibis Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF5/LaiDai/CF5_T1_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    1881: {
      description: "Caldari Frigate LaiDai Manticore (Kestrel Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF6/LaiDai/CF6_T2_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    1882: {
      description: "Caldari Frigate LaiDai Hawk (Merlin Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF7/LaiDai/CF7_T2a_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    1883: {
      description: "Caldari Frigate LaiDai (Heron Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF3/LaiDai/CF3_T1_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    1884: {
      description: "Minmatar Cruiser Navy Stabber Fleet Issue (Stabber Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Cruiser/MC1/Navy/MC1_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    1885: {
      description: "Minmatar Cruiser Navy Republic Fleet Rupture (Rupture Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Cruiser/MC2/Navy/MC2_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    1886: {
      description: "Minmatar Cruiser Navy Republic Fleet (Bellicose Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Cruiser/MC3/Navy/MC3_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    1887: {
      description: "Minmatar Cruiser Navy Scythe Fleet Issue (Scythe Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Cruiser/MC4/Navy/MC4_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    1888: {
      description: "Minmatar Frigate Navy Republic Fleet Slasher (Slasher Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF1/Navy/MF1_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    1889: {
      description: "Minmatar Frigate Navy (Probe Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF2/Navy/MF2_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    1890: {
      description: "Minmatar Frigate Navy (Reaper Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF3/Navy/MF3_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    1891: {
      description: "Minmatar Frigate Navy (Rifter Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF4/Navy/MF4_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    1892: {
      description: "Minmatar Frigate Navy (Burst Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF6/Navy/MF6_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    1893: {
      description: "Caldari Cruiser Mordus (Osprey Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC1/Mordus/CC1_T1_Mordus.red",
      colorScheme: "TurretPreset_Mordus",
      race: "Caldari"
    },
    1894: {
      description: "Caldari Cruiser Ishukone Eagle (Moa Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC2/Ishukone/CC2_T2b_Ishukone.red",
      colorScheme: "TurretPreset_Ishukone",
      race: "Caldari"
    },
    1895: {
      description: "Caldari Cruiser Mordus (Caracal Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC3/Mordus/CC3_T1_Mordus.red",
      colorScheme: "TurretPreset_Mordus",
      race: "Caldari"
    },
    1896: {
      description: "Caldari Cruiser Mordus (Blackbird Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC4/Mordus/CC4_T1_Mordus.red",
      colorScheme: "TurretPreset_Mordus",
      race: "Caldari"
    },
    1897: {
      description: "Caldari Frigate Mordus (Condor Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF2/Mordus/CF2_T1_Mordus.red",
      colorScheme: "TurretPreset_Mordus",
      race: "Caldari"
    },
    1898: {
      description: "Caldari Frigate Mordus (Griffin Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF4/Mordus/CF4_T1_Mordus.red",
      colorScheme: "TurretPreset_Mordus",
      race: "Caldari"
    },
    1899: {
      description: "Caldari Frigate Mordus (Ibis Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF5/Mordus/CF5_T1_Mordus.red",
      colorScheme: "TurretPreset_Mordus",
      race: "Caldari"
    },
    1900: {
      description: "Caldari Frigate Mordus (Kestrel Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF6/Mordus/CF6_T1_Mordus.red",
      colorScheme: "TurretPreset_Mordus",
      race: "Caldari"
    },
    1901: {
      description: "Caldari Frigate Ishukone Harpy (Merlin Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF7/Ishukone/CF7_T2b_Ishukone.red",
      colorScheme: "TurretPreset_Ishukone",
      race: "Caldari"
    },
    1902: {
      description: "Caldari Frigate Isukone Buzzard (Heron Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF3/Ishukone/CF3_T2_Ishukone.red",
      colorScheme: "TurretPreset_Ishukone",
      race: "Caldari"
    },
    1903: {
      description: "Gallente Cruiser Duvolle Arazu (Celestis Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC1/Duvolle/GC1_T2a_Duvolle.red",
      colorScheme: "TurretPreset_Duvolle",
      race: "Gallente"
    },
    1904: {
      description: "Gallente Cruiser Duvolle (Exequror Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC2/Duvolle/GC2_T1_Duvolle.red",
      colorScheme: "TurretPreset_Duvolle",
      race: "Gallente"
    },
    1905: {
      description: "Gallente Cruiser Duvolle Atropos (Vexor Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC3/Duvolle/GC3_T1_Duvolle.red",
      colorScheme: "TurretPreset_Duvolle",
      race: "Gallente"
    },
    1906: {
      description: "Gallente Cruiser Duvolle (Thorax Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC4/Duvolle/GC4_T1_Duvolle.red",
      colorScheme: "TurretPreset_Duvolle",
      race: "Gallente"
    },
    1907: {
      description: "Gallente Frigate Duvolle (Velator Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF1/Duvolle/GF1_T1_Duvolle.red",
      colorScheme: "TurretPreset_Duvolle",
      race: "Gallente"
    },
    1908: {
      description: "Gallente Frigate Duvolle (Navitas Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF2/Duvolle/GF2_T1_Duvolle.red",
      colorScheme: "TurretPreset_Duvolle",
      race: "Gallente"
    },
    1909: {
      description: "Gallente Frigate Duvolle Nemesis (Tristan Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF3/Duvolle/GF3_T2_Duvolle.red",
      colorScheme: "TurretPreset_Duvolle",
      race: "Gallente"
    },
    1910: {
      description: "Gallente Frigate Duvolle Ishkur (Incursus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF4/Duvolle/GF4_T1_Duvolle.red",
      colorScheme: "TurretPreset_Duvolle",
      race: "Gallente"
    },
    1911: {
      description: "Gallente Frigate Duvolle (Imicus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF5/Duvolle/GF5_T1_Duvolle.red",
      colorScheme: "TurretPreset_Duvolle",
      race: "Gallente"
    },
    1912: {
      description: "Gallente Frigate Duvolle Taranis (Atron Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF6/Duvolle/GF6_T2b_Duvolle.red",
      colorScheme: "TurretPreset_Duvolle",
      race: "Gallente"
    },
    1913: {
      description: "Gallente Frigate Duvolle Keres (Maulus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF7/Duvolle/GF7_T2_Duvolle.red",
      colorScheme: "TurretPreset_Duvolle",
      race: "Gallente"
    },
    1914: {
      description: "Amarr Cruiser Sarum Pilgrim (Arbitrator Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC1/Sarum/AC1_T2b_Sarum.red",
      colorScheme: "TurretPreset_Sarum",
      race: "Amarr"
    },
    1915: {
      description: "Amarr Cruiser Sarum (Maller Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC2/Sarum/AC2_T1_Sarum.red",
      colorScheme: "TurretPreset_Sarum",
      race: "Amarr"
    },
    1916: {
      description: "Amarr Cruiser Sarum Guardian (Augoror Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC3/Sarum/AC3_T2_Sarum.red",
      colorScheme: "TurretPreset_Sarum",
      race: "Amarr"
    },
    1917: {
      description: "Amarr Cruiser Sarum (Omen Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC4/Sarum/AC4_T1_Sarum.red",
      colorScheme: "TurretPreset_Sarum",
      race: "Amarr"
    },
    1919: {
      description: "Amarr Frigate Sarum (Crucifier Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF2/Sarum/AF2_T1_Sarum.red",
      colorScheme: "TurretPreset_Sarum",
      race: "Amarr"
    },
    1920: {
      description: "Amarr Frigate Sarum Retribution (Punisher Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF3/Sarum/AF3_T2b_Sarum.red",
      colorScheme: "TurretPreset_Sarum",
      race: "Amarr"
    },
    1921: {
      description: "Amarr Frigate Sarum Crusader (Executioner Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF4/Sarum/AF4_T2b_Sarum.red",
      colorScheme: "TurretPreset_Sarum",
      race: "Amarr"
    },
    1922: {
      description: "Amarr Frigate Sarum (Inquisitor Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF5/Sarum/AF5_T1_Sarum.red",
      colorScheme: "TurretPreset_Sarum",
      race: "Amarr"
    },
    1925: {
      description: "Minmatar Cruiser Brutor Muninn (Rupture Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Cruiser/MC2/Brutor/MC2_T2a_Brutor.red",
      colorScheme: "TurretPreset_Brutor",
      race: "Minmatar"
    },
    1928: {
      description: "Minmatar Frigate Brutor Claw (Slasher Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF1/Brutor/MF1_T2a_Brutor.red",
      colorScheme: "TurretPreset_Brutor",
      race: "Minmatar"
    },
    1931: {
      description: "Minmatar Frigate Brutor Wolf (Rifter Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF4/Brutor/MF4_T2a_Brutor.red",
      colorScheme: "TurretPreset_Brutor",
      race: "Minmatar"
    },
    1934: {
      description: "Amarr Cruiser Tash-Murkon (Maller Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC2/TashMurkon/AC2_T1_TashMurkon.red",
      colorScheme: "TurretPreset_TashMurkon",
      race: "Amarr"
    },
    3065: {
      description: "Boostercloud1",
      graphicFile: "res:/dx9/model/worldobject/cloud/booster/cloud1.red"
    },
    1943: {
      description: "Minmatar Cruiser Thukker Vagabond (Stabber Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Cruiser/MC1/Thukker/MC1_T2b_Thukker.red",
      colorScheme: "TurretPreset_Thukker",
      race: "Minmatar"
    },
    1945: {
      description: "Minmatar Cruiser Brutor Huginn (Bellicose Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Cruiser/MC3/Brutor/MC3_T2a_Brutor.red",
      colorScheme: "TurretPreset_Brutor",
      race: "Minmatar"
    },
    1947: {
      description: "Minmatar Frigate Thukker Warrior (Slasher Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF1/Thukker/MF1_T1_Thukker.red",
      colorScheme: "TurretPreset_Thukker",
      race: "Minmatar"
    },
    1948: {
      description: "Minmatar Frigate Thukker Cheetah (Probe)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF2/Thukker/MF2_T2b_Thukker.red",
      colorScheme: "TurretPreset_Thukker",
      race: "Minmatar"
    },
    1949: {
      description: "Minmatar Frigate Thukker (Reaper Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF3/Thukker/MF3_T1_Thukker.red",
      colorScheme: "TurretPreset_Thukker",
      race: "Minmatar"
    },
    1950: {
      description: "Minmatar Frigate Thukker Jaguar (Rifter Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF4/Thukker/MF4_T2b_Thukker.red",
      colorScheme: "TurretPreset_Thukker",
      race: "Minmatar"
    },
    1951: {
      description: "Minmatar Frigate Thukker (Burst Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF6/Thukker/MF6_T1_Thukker.red",
      colorScheme: "TurretPreset_Thukker",
      race: "Minmatar"
    },
    1952: {
      description: "Caldari Cruiser Wiyrkomi (Osprey Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC1/Wiyrkomi/CC1_T1_Wiyrkomi.red",
      colorScheme: "TurretPreset_Wiyrkomi",
      race: "Caldari"
    },
    1953: {
      description: "Caldari Cruiser Wiyrkomi (Moa Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC2/Wiyrkomi/CC2_T1_Wiyrkomi.red",
      colorScheme: "TurretPreset_Wiyrkomi",
      race: "Caldari"
    },
    1954: {
      description: "Caldari Cruiser Wiyrkromi (Caracal Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC3/Wiyrkomi/CC3_T1_Wiyrkomi.red",
      colorScheme: "TurretPreset_Wiyrkomi",
      race: "Caldari"
    },
    1955: {
      description: "Caldari Cruiser Wiyrkomi (Blackbird Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC4/Wiyrkomi/CC4_T1_Wiyrkomi.red",
      colorScheme: "TurretPreset_Wiyrkomi",
      race: "Caldari"
    },
    1956: {
      description: "Caldari Frigate Wiyrkomi (Condor Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF2/Wiyrkomi/CF2_T1_Wiyrkomi.red",
      colorScheme: "TurretPreset_Wiyrkomi",
      race: "Caldari"
    },
    1957: {
      description: "Caldari Frigate Navy Wiyrkomi (Griffin Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF4/Wiyrkomi/CF4_T1_Wiyrkomi.red",
      colorScheme: "TurretPreset_Wiyrkomi",
      race: "Caldari"
    },
    1958: {
      description: "Caldari Frigate Wiyrkomi (Ibis Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF5/Wiyrkomi/CF5_T1_Wiyrkomi.red",
      colorScheme: "TurretPreset_Wiyrkomi",
      race: "Caldari"
    },
    1959: {
      description: "Caldari Frigate Wiyrkomi (Kestrel Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF6/Wiyrkomi/CF6_T1_Wiyrkomi.red",
      colorScheme: "TurretPreset_Wiyrkomi",
      race: "Caldari"
    },
    1960: {
      description: "Caldari Frigate Wiyrkomi (Merlin Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF7/Wiyrkomi/CF7_T1_Wiyrkomi.red",
      colorScheme: "TurretPreset_Wiyrkomi",
      race: "Caldari"
    },
    1961: {
      description: "Caldari Frigate Wiyrkomi (Heron Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF3/Wiyrkomi/CF3_T1_Wiyrkomi.red",
      colorScheme: "TurretPreset_Wiyrkomi",
      race: "Caldari"
    },
    11361: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_03_04_05_Gal_Combo_01.red"
    },
    1965: {
      description: "Minmatar Frigate Navy (Breacher Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF5/Navy/MF5_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    1966: {
      description: "Minmatar Frigate Hound (Breacher Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF5/Brutor/MF5_T2a_Brutor.red",
      colorScheme: "TurretPreset_Brutor",
      race: "Minmatar"
    },
    1967: {
      description: "Caldari Frigate Mordus (Bantam Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF1/Mordus/CF1_T1_Mordus.red",
      colorScheme: "TurretPreset_Mordus",
      race: "Caldari"
    },
    1968: {
      description: "Caldari Frigate Guristas (Bantam Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF1/Guristas/CF1_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    1969: {
      description: "Caldari Frigate Wiyrkomi (Bantam Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF1/Wiyrkomi/CF1_T1_Wiyrkomi.red",
      colorScheme: "TurretPreset_Wiyrkomi",
      race: "Caldari"
    },
    1970: {
      description: "Caldari Frigate LaiDai Sparrow (Bantam Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF1/LaiDai/CF1_T1_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    1971: {
      description: "Caldari Frigate Navy (Bantam Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF1/Navy/CF1_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    1972: {
      description: "Caldari Frigate Kaalakiota (Bantam Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF1/Kaalakiota/CF1_T1_Kaalakiota.red",
      colorScheme: "TurretPreset_Kaalakiota",
      race: "Caldari"
    },
    1973: {
      description: "Minmatar Frigate Sebiestor Hyena (Vigil Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF7/Sebiestor/MF7_T2c_Sebiestor.red",
      colorScheme: "TurretPreset_Sebiestor",
      race: "Minmatar"
    },
    1976: {
      description: "Minmatar Frigate Navy Republic Fleet Vigil (Vigil Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF7/Navy/MF7_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    1977: {
      description: "gaseousSuperlight",
      graphicFile: "res:/dx9/model/worldobject/cloud/gaseoussuperlight.red"
    },
    1978: {
      description: "longWispyOrange",
      graphicFile: "res:/dx9/model/worldobject/cloud/longwispyorange.red"
    },
    1979: {
      description: "yellowOval",
      graphicFile: "res:/dx9/model/worldobject/cloud/yellowoval.red"
    },
    1980: {
      description: "dustyBrownStreak",
      graphicFile: "res:/dx9/model/worldobject/cloud/dustybrownstreak.red"
    },
    1981: {
      description: "gaseouscloudLight",
      graphicFile: "res:/dx9/model/worldobject/cloud/gaseouscloudlight.red"
    },
    1982: {
      description: "wispyAqua",
      graphicFile: "res:/dx9/model/worldobject/cloud/wispyaqua.red"
    },
    1983: {
      description: "cloud1",
      graphicFile: "res:/dx9/model/worldobject/cloud/cloud1.red"
    },
    1984: {
      description: "greenDusty",
      graphicFile: "res:/dx9/model/worldobject/cloud/greendusty.red"
    },
    1985: {
      description: "cloud2",
      graphicFile: "res:/dx9/model/worldobject/cloud/cloud2.red"
    },
    1986: {
      description: "aquaPuff",
      graphicFile: "res:/dx9/model/worldobject/cloud/aquapuff.red"
    },
    1987: {
      description: "gaseuoscloud",
      graphicFile: "res:/dx9/model/worldobject/cloud/gaseuoscloud.red"
    },
    1988: {
      description: "dustybrown",
      graphicFile: "res:/dx9/model/worldobject/cloud/dustybrown.red"
    },
    1989: {
      description: "greenGasesCloud",
      graphicFile: "res:/dx9/model/worldobject/cloud/greengasescloud.red"
    },
    1990: {
      description: "asteroid_station1",
      graphicFile: "res:/dx9/model/worldobject/asteroid_station1/asteroid_station1.red"
    },
    1991: {
      description: "asteroid_station2",
      graphicFile: "res:/dx9/model/worldobject/asteroid_station2/asteroid_station2.red"
    },
    1992: {
      description: "asteroid_station3",
      graphicFile: "res:/dx9/model/worldobject/asteroid_station3/asteroid_station3.red"
    },
    1993: {
      description: "asteroid_station4",
      graphicFile: "res:/dx9/model/worldobject/asteroid_station4/asteroid_station4.red"
    },
    1994: {
      description: "asteroid_station5",
      graphicFile: "res:/dx9/model/worldobject/asteroid_station5/asteroid_station5.red"
    },
    1997: {
      description: "asteroid_station6",
      graphicFile: "res:/dx9/model/worldobject/asteroid_station6/asteroid_station6.red"
    },
    1998: {
      description: "asteroid_station7",
      graphicFile: "res:/dx9/model/worldobject/asteroid_station7/asteroid_station7.red"
    },
    1999: {
      description: "asteroid_station8",
      graphicFile: "res:/dx9/model/worldobject/asteroid_station8/asteroid_station8.red"
    },
    2000: {
      description: "asteroid_station9",
      graphicFile: "res:/dx9/model/worldobject/asteroid_station9/asteroid_station9.red"
    },
    2001: {
      description: "rocky_curved",
      graphicFile: "res:/dx9/model/worldobject/rocky/rocky_curved.red"
    },
    2002: {
      description: "rocky_small1",
      graphicFile: "res:/dx9/model/worldobject/rocky/rocky_small1.red"
    },
    2003: {
      description: "rocky_small2",
      graphicFile: "res:/dx9/model/worldobject/rocky/rocky_small2.red"
    },
    2004: {
      description: "rocky_small3",
      graphicFile: "res:/dx9/model/worldobject/rocky/rocky_small3.red"
    },
    2005: {
      description: "rocky_small4",
      graphicFile: "res:/dx9/model/worldobject/rocky/rocky_small4.red"
    },
    2006: {
      description: "rocky_straight",
      graphicFile: "res:/dx9/model/worldobject/rocky/rocky_straight.red"
    },
    2007: {
      description: "Tank",
      graphicFile: "res:/dx9/model/worldobject/tank/tank.red"
    },
    2008: {
      description: "Jove Station II",
      graphicFile: "res:/dx9/model/station/jove/js2/js2.red",
      race: "Jove"
    },
    3066: {
      description: "Boostercloud2",
      graphicFile: "res:/dx9/model/worldobject/cloud/booster/cloud2.red"
    },
    3067: {
      description: "Boostercloud3",
      graphicFile: "res:/dx9/model/worldobject/cloud/booster/cloud3.red"
    },
    2023: {
      description: "entityExplode_extralarge",
      graphicFile: "res:/model/effect3/explosion/entityexplode_extralarge.red"
    },
    2024: {
      description: "entityExplode_tiny",
      graphicFile: "res:/model/effect3/explosion/entityexplode_tiny.red"
    },
    2025: {
      description: "entityExplode_small",
      graphicFile: "res:/model/effect3/explosion/entityexplode_small.red"
    },
    2026: {
      description: "entityExplode_medium",
      graphicFile: "res:/model/effect3/explosion/entityexplode_medium.red"
    },
    2027: {
      description: "entityExplode_large",
      graphicFile: "res:/model/effect3/explosion/entityexplode_large.red"
    },
    3068: {
      description: "Boostercloud4",
      graphicFile: "res:/dx9/model/worldobject/cloud/booster/cloud4.red"
    },
    3069: {
      description: "Boostercloud 5",
      graphicFile: "res:/dx9/model/worldobject/cloud/booster/cloud5.red"
    },
    2032: {
      description: "Smartbomb_EMP",
      graphicFile: "res:/Model/effect3/Smartbomb/Smartbomb_EMP.red"
    },
    2033: {
      description: "Smartbomb_Graviton",
      graphicFile: "res:/Model/effect3/Smartbomb/Smartbomb_Graviton.red"
    },
    2034: {
      description: "Smartbomb_Photon",
      graphicFile: "res:/Model/effect3/Smartbomb/Smartbomb_Photon.red"
    },
    2035: {
      description: "Smartbomb_plasma",
      graphicFile: "res:/Model/effect3/Smartbomb/Smartbomb_plasma.red"
    },
    3070: {
      description: "Boostercloud6",
      graphicFile: "res:/dx9/model/worldobject/cloud/booster/cloud6.red"
    },
    2043: {
      description: "Gallente Shuttle",
      graphicFile: "res:/dx9/model/ship/gallente/Shuttle/GS1/GS1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    2044: {
      description: "Amarr Shuttle",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Shuttle/AS1/AS1_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    2045: {
      description: "Minmatar Shuttle",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Shuttle/MS1/MS1_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    2046: {
      description: "CONCORD Billboard",
      graphicFile: "res:/dx9/Model/WorldObject/Billboard/billboard.red"
    },
    2047: {
      description: "cathedral01",
      graphicFile: "res:/dx9/model/worldobject/cathedral/cathedral01.red"
    },
    2048: {
      description: "cathedral02",
      graphicFile: "res:/dx9/model/worldobject/cathedral/cathedral02.red"
    },
    2049: {
      description: "cathedral03",
      graphicFile: "res:/dx9/model/worldobject/cathedral/cathedral03.red"
    },
    2050: {
      description: "cathedral04",
      graphicFile: "res:/dx9/model/worldobject/cathedral/cathedral04.red"
    },
    2051: {
      description: "cathedral05",
      graphicFile: "res:/dx9/model/worldobject/cathedral/cathedral05.red"
    },
    2063: {
      description: "barrenasteroid",
      graphicFile: "res:/dx9/model/worldobject/barrenasteroid/barrenasteroid.red"
    },
    2064: {
      description: "turnip",
      graphicFile: "res:/dx9/model/worldobject/turniprock/turnip.red"
    },
    3075: {
      description: "Caldari Freighter Wreck 1 (Charon Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Freighter/CFr1/Wreck/CF1_T1_Wreck.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    2069: {
      description: "researchring",
      graphicFile: "res:/dx9/model/worldobject/particleresearchring/researchring.red"
    },
    2090: {
      description: "SecureG_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/secureg_cargo.red"
    },
    2091: {
      description: "SecureH_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/secureh_cargo.red"
    },
    2092: {
      description: "SecureC_Cargo",
      graphicFile: "res:/dx9/model/worldobject/cargobox/securec_cargo.red"
    },
    3071: {
      description: "Boostercloud7",
      graphicFile: "res:/dx9/model/worldobject/cloud/booster/cloud7.red"
    },
    2121: {
      description: "Amarr Battleship BloodRaider (Apocalypse Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB1/Bloodraider/AB1_T1_Bloodraider.red",
      colorScheme: "TurretPreset_Bloodraider",
      race: "Amarr"
    },
    2122: {
      description: "Amarr Battleship BloodRaider Bhaalgorn (Armageddon Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB2/Bloodraider/AB2_T1_Bloodraider.red",
      colorScheme: "TurretPreset_Bloodraider",
      race: "Amarr"
    },
    2123: {
      description: "Caldari Battleship Navy Raven",
      graphicFile: "res:/dx9/model/ship/caldari/BattleShip/CB1/Navy/CB1_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    2134: {
      description: "Caldari Frigate Navy (Merlin Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF7/Navy/CF7_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    2135: {
      description: "Caldari Frigate Navy (Heron Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF3/Navy/CF3_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    2136: {
      description: "Caldari Industrial Navy",
      graphicFile: "res:/dx9/model/ship/caldari/Industrial/CI1/Navy/CI1_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    2137: {
      description: "Caldari Industrial Navy",
      graphicFile: "res:/dx9/model/ship/caldari/Industrial/CI2/Navy/CI2_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    2138: {
      description: "Gallente Battleship Navy (Dominix Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Battleship/GB1/Navy/GB1_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    2139: {
      description: "Gallente Battleship Navy Issue (Megathron Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Battleship/GB2/Navy/GB2_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    2140: {
      description: "Gallente Cruiser Roden Lachesis (Celestis Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC1/Roden/GC1_T2b_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    2141: {
      description: "Gallente Cruiser Roden Oneiros (Exequror Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC2/Roden/GC2_T2_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    2142: {
      description: "Gallente Cruiser Navy (Vexor Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC3/Navy/GC3_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Gallente"
    },
    2143: {
      description: "Gallente Cruiser Navy (Thorax Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC4/Navy/GC4_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    2144: {
      description: "Gallente Frigate Navy (Velator Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF1/Navy/GF1_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    2145: {
      description: "Gallente Frigate Navy (Navitas Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF2/Navy/GF2_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    2146: {
      description: "Gallente Frigate Navy (Tristan Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF3/Navy/GF3_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    2147: {
      description: "Gallente Frigate Navy (Incursus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF4/Navy/GF4_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    2148: {
      description: "Gallente Frigate Navy (Imicus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF5/Navy/GF5_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    2151: {
      description: "Gallente Industrial Navy (Nereus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Industrial/GI1/Navy/GI1_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    2152: {
      description: "Gallente Industrial Navy (Kryos Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Industrial/GI2/Navy/GI2_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    2153: {
      description: "Gallente Industrial Navy (Epithal Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Industrial/GI3/Navy/GI3_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    2154: {
      description: "Gallente Industrial Navy (Miasmos Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Industrial/GI4/Navy/GI4_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    2155: {
      description: "Gallente Industrial Navy (Iteron Mark V Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Industrial/GI5/Navy/GI5_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    2156: {
      description: "Gallente Battleship Serpentis (Dominix Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Battleship/GB1/Serpentis/GB1_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    2157: {
      description: "Gallente Battleship Serpentis Vindicator (Megathron Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Battleship/GB2/Serpentis/GB2_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    2158: {
      description: "Caldari Battleship Guristas Raven",
      graphicFile: "res:/dx9/model/ship/caldari/BattleShip/CB1/Guristas/CB1_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    2159: {
      description: "Caldari Battleship Guristas Rattlesnake (Scorpion Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/BattleShip/CB2/Guristas/CB2_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    2160: {
      description: "Minmatar Battleship Republic Fleet Typhoon",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/BattleShip/MB1/Navy/MB1_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    11853: {
      graphicFile: "res:/dx9/scene/Universe/m17_cube.red"
    },
    11362: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_03_Gal_Base.red"
    },
    3096: {
      description: "Amarr Carrier Wreck 1 (Aeon Hull)",
      graphicFile: "res:/dx9/model/ship/amarr/Carrier/ACa1/Wreck/ACa1_T1_Wreck.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    3097: {
      description: "Amarr Carrier Wreck 2 (Archon Hull)",
      graphicFile: "res:/dx9/model/ship/amarr/Carrier/ACa2/Wreck/ACa2_T1_Wreck.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    3098: {
      description: "Amarr Dreadnought Wreck 1 (Revelation Hull)",
      graphicFile: "res:/dx9/model/ship/amarr/Dreadnought/ADn1/Wreck/ADn1_T1_Wreck.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    3099: {
      description: "Amarr Freighter Wreck 1 (Providence Hull)",
      graphicFile: "res:/dx9/model/ship/amarr/Freighter/AFr1/Wreck/AFr1_T1_Wreck.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    3100: {
      description: "Amarr Titan Wreck 1 (Avatar Hull)",
      graphicFile: "res:/dx9/model/ship/amarr/Titan/AT1/Wreck/AT1_T1_Wreck.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    3101: {
      description: "Caldari Carrier Wreck 1 (Chimera Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Carrier/CCa1/Wreck/CCa1_T1_Wreck.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    3102: {
      description: "Caldari Dreadnaught Wreck 1 (Phoenix Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Dreadnought/CDn1/Wreck/CDn1_T1_Wreck.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    3103: {
      description: "Caldari Carrier Wreck 2 (Wyvern Hull) ",
      graphicFile: "res:/dx9/model/ship/caldari/Carrier/CCa2/Wreck/CCa2_T1_Wreck.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    2239: {
      description: "Amarr Battleship Navy Issue Apocalypse",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB1/Navy/AB1_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    2240: {
      description: "Amarr Battleship Imperial Issue Armageddon",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB2/Imperial/AB2_T1_Imperial.red",
      colorScheme: "TurretPreset_Imperial",
      race: "Amarr"
    },
    2241: {
      description: "Amarr Frigate Tournament X Silver Magnate (Magnate Hull)",
      graphicFile: "res:/dx9/Model/Ship/Tournament/AF7_X/AF7_X_Silver.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    2242: {
      description: "Amarr Frigate Tournament X Gold Magnate (Magnate Hull)",
      graphicFile: "res:/dx9/Model/Ship/Tournament/AF7_X/AF7_X_Gold.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    3105: {
      description: "Gallente Carrier Wreck 2 (Thanatos Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Carrier/GCa2/Wreck/GCa2_T1_Wreck.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    3106: {
      description: "Gallente Dreadnaught Wreck 1 (Moros Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Dreadnought/GDn1/Wreck/GDn1_T1_Wreck.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    3108: {
      description: "Gallente Carrier Wreck 1 (Nyx Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Carrier/GCa1/Wreck/GCa1_T1_Wreck.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    3109: {
      description: "Gallente Titan Wreck 1 (Erebus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Titan/GT1/Wreck/GT1_T1_Wreck.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    3349: {
      description: "Caldari Battleship Kaalakiota Widow (Scorpion Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/BattleShip/CB2/Kaalakiota/CB2_T2_Kaalakiota.red",
      colorScheme: "TurretPreset_Kaalakiota",
      race: "Caldari"
    },
    3110: {
      description: "Minmatar Carrier Wreck 1 (Hel Hull)",
      graphicFile: "res:/dx9/model/ship/Minmatar/Carrier/MCa1/Wreck/MCa1_T1_Wreck.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    3111: {
      description: "Minmatar Carrier Wreck 2 (Nidhoggur Hull)",
      graphicFile: "res:/dx9/model/ship/Minmatar/Carrier/MCa2/Wreck/MCa2_T1_Wreck.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    3112: {
      description: "Minmatar Dreadnought Wreck 1 (Naglfar Hull)",
      graphicFile: "res:/dx9/model/ship/Minmatar/Dreadnought/MDn1/Wreck/MDn1_T1_Wreck.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    2295: {
      description: "Sansha Battleship Nightmare",
      graphicFile: "res:/dx9/Model/Ship/Sansha/Battleship/SB1/SB1_T1.red",
      colorScheme: "TurretPreset_Sansha",
      race: "Sansha"
    },
    2296: {
      description: "amct1",
      graphicFile: "res:/dx9/model/deployables/controltower/amarr/amct1.red",
      race: "Amarr"
    },
    2297: {
      description: "gmct1",
      graphicFile: "res:/dx9/model/deployables/controltower/gallente/gmct1.red",
      race: "Gallente"
    },
    2298: {
      description: "dmh1",
      graphicFile: "res:/dx9/model/deployables/mobilehangar/small/dmh1.red"
    },
    2299: {
      description: "dmr2",
      graphicFile: "res:/dx9/model/deployables/mobilerefinery/medium/dmr2.red"
    },
    2300: {
      description: "dmr1",
      graphicFile: "res:/dx9/model/deployables/mobilerefinery/small/refinery_s_online.red"
    },
    2301: {
      description: "dms2",
      graphicFile: "res:/dx9/model/deployables/mobilestorage/medium/dms2.red"
    },
    2306: {
      description: "CultS2",
      graphicFile: "res:/dx9/model/station/cult/cults2.red"
    },
    2307: {
      description: "CultS1",
      graphicFile: "res:/dx9/model/station/cult/cults1.red"
    },
    2308: {
      description: "CultS3",
      graphicFile: "res:/dx9/model/station/cult/cults3.red"
    },
    2309: {
      description: "Warp Disruptor",
      graphicFile: "res:/dx9/model/worldobject/warpdisruptor.red"
    },
    3116: {
      description: "Large_Wreck_Caldari",
      graphicFile: "res:/dx9/model/shipwrecks/large_wreck_caldari.red"
    },
    3117: {
      description: "Large_Wreck_gallente",
      graphicFile: "res:/dx9/model/shipwrecks/large_wreck_gallente.red"
    },
    20263: {
      description: "ORE Drone Heavy Mining Drone II",
      graphicFile: "res:/dx9/model/Drone/ORE/Heavy/OMDH1/OMDH1_T2.red",
      colorScheme: "TurretPreset_ORE_T2",
      race: "ORE"
    },
    3118: {
      description: "Large_Wreck_Minmatar",
      graphicFile: "res:/dx9/model/shipwrecks/large_wreck_minmatar.red"
    },
    3119: {
      description: "Medium_Wreck_Amarr",
      graphicFile: "res:/dx9/model/shipwrecks/medium_wreck_amarr.red"
    },
    3120: {
      description: "Medium_Wreck_Caldari",
      graphicFile: "res:/dx9/model/shipwrecks/medium_wreck_caldari.red"
    },
    2341: {
      description: "WarpGate",
      graphicFile: "res:/dx9/Model/WorldObject/Warpgate/wg1.red"
    },
    2342: {
      description: "ForceField_ThermalS",
      graphicFile: "res:/dx9/model/worldobject/forcefield/forcefield_thermals.red"
    },
    2343: {
      description: "ForceField_ThermalM",
      graphicFile: "res:/dx9/model/worldobject/forcefield/forcefield_thermalm.red"
    },
    2344: {
      description: "ForceField_ThermalL",
      graphicFile: "res:/dx9/model/worldobject/forcefield/forcefield_thermall.red"
    },
    2345: {
      description: "ForceField_KineticS",
      graphicFile: "res:/dx9/model/worldobject/forcefield/forcefield_kinetics.red"
    },
    2346: {
      description: "ForceField_KineticM",
      graphicFile: "res:/dx9/model/worldobject/forcefield/forcefield_kineticm.red"
    },
    2347: {
      description: "ForceField_KineticL",
      graphicFile: "res:/dx9/model/worldobject/forcefield/forcefield_kineticl.red"
    },
    2349: {
      description: "ForceField_ExplosiveM",
      graphicFile: "res:/dx9/model/worldobject/forcefield/forcefield_explosivem.red"
    },
    2350: {
      description: "ForceField_ExplosiveL",
      graphicFile: "res:/dx9/model/worldobject/forcefield/forcefield_explosivel.red"
    },
    2351: {
      description: "ForceField_EmS",
      graphicFile: "res:/dx9/model/worldobject/forcefield/forcefield_ems.red"
    },
    2352: {
      description: "ForceField_EmM",
      graphicFile: "res:/dx9/model/worldobject/forcefield/forcefield_emm.red"
    },
    2353: {
      description: "ForceField_EmL",
      graphicFile: "res:/dx9/model/worldobject/forcefield/forcefield_eml.red"
    },
    3123: {
      description: "Small_Wreck_Amarr",
      graphicFile: "res:/dx9/model/shipwrecks/small_wreck_amarr.red"
    },
    2356: {
      description: "GuardianL",
      graphicFile: "res:/dx9/model/battlestation/guardianl.red"
    },
    2357: {
      description: "AngelL2",
      graphicFile: "res:/dx9/model/battlestation/angell2.red",
      race: "Angel"
    },
    2358: {
      description: "AngelS",
      graphicFile: "res:/dx9/model/battlestation/angels.red",
      race: "Angel"
    },
    2359: {
      description: "BloodraiderL",
      graphicFile: "res:/dx9/model/battlestation/bloodraiderl.red",
      race: "Amarr"
    },
    2360: {
      description: "BloodraiderS",
      graphicFile: "res:/dx9/model/battlestation/bloodraiders.red",
      race: "Amarr"
    },
    2361: {
      description: "GuardianS",
      graphicFile: "res:/dx9/model/battlestation/guardians.red"
    },
    2362: {
      description: "GuristasS",
      graphicFile: "res:/dx9/model/battlestation/guristass.red",
      race: "Caldari"
    },
    2363: {
      description: "SanshaS",
      graphicFile: "res:/dx9/model/battlestation/sanshas.red",
      race: "Sansha"
    },
    2364: {
      description: "SanshaL",
      graphicFile: "res:/dx9/Model/station/Sansha/SS1/SS1.red",
      race: "Sansha"
    },
    2365: {
      description: "AngelL",
      graphicFile: "res:/dx9/model/battlestation/angell.red",
      race: "Angel"
    },
    2366: {
      description: "Large Assembly Array",
      graphicFile: "res:/dx9/model/deployables/assemblyarray/large/assemblyarray.red"
    },
    2367: {
      description: "Abandoned Drill",
      graphicFile: "res:/dx9/model/worldobject/drill/drill.red"
    },
    2368: {
      description: "Debris Walkway",
      graphicFile: "res:/dx9/model/worldobject/walkway/debriswalkway.red"
    },
    2369: {
      description: "Billboard_old",
      graphicFile: "res:/dx9/model/worldobject/billboard_old/billboard_old.red"
    },
    2370: {
      description: "cmct1",
      graphicFile: "res:/dx9/model/deployables/controltower/caldari/cmct1.red",
      race: "Caldari"
    },
    2371: {
      description: "Minmatar_Tower_Online",
      graphicFile: "res:/dx9/model/deployables/controltower/minmatar/minmatar_tower_online.red",
      race: "Minmatar"
    },
    2372: {
      description: "Small_Armory",
      graphicFile: "res:/dx9/model/deployables/mobilearmory/small_armory.red"
    },
    2373: {
      description: "Mobile Laboratory",
      graphicFile: "res:/dx9/model/deployables/mobilelaboratory/slab.red"
    },
    2374: {
      description: "Mobile Power Core",
      graphicFile: "res:/dx9/model/deployables/mobilepowercore/smpc.red"
    },
    2375: {
      description: "Mobile Sensor Dampener",
      graphicFile: "res:/dx9/model/deployables/mobilesensor/s_sensor_platform_online.red"
    },
    2377: {
      description: "Small Field Assembly Array",
      graphicFile: "res:/dx9/model/deployables/mobilefactory/smf.red"
    },
    2378: {
      description: "Mobile Moon Harvester",
      graphicFile: "res:/dx9/model/deployables/moonharvester/small/dmoonh1.red"
    },
    2379: {
      description: "Mobile Missile Sentry",
      graphicFile: "res:/dx9/model/deployables/sentry/mobilemissilesentry1.red"
    },
    2380: {
      description: "Mobile Shield Generator",
      graphicFile: "res:/dx9/model/deployables/shieldgenerator/small/dsg1.red"
    },
    2382: {
      description: "Caldari Battlecruiser Ferox",
      graphicFile: "res:/dx9/model/ship/Caldari/Battlecruiser/CBc1/CBc1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    2383: {
      description: "Gallente Battlecruiser Brutix",
      graphicFile: "res:/dx9/model/ship/gallente/BattleCruiser/GBc1/GBc1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    2384: {
      description: "Minmatar Battlecruiser Cyclone",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/BattleCruiser/MBC1/MBC1_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    2385: {
      description: "Amarr Battlecruiser Prophecy",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battlecruiser/ABC1/ABC1_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    2387: {
      description: "Amarr Destroyer Coercer",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Destroyer/ADE1/ADE1_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    2388: {
      description: "Caldari Destroyer Cormorant",
      graphicFile: "res:/dx9/model/ship/caldari/Destroyer/CDe1/CDe1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    2389: {
      description: "Gallente Destroyer Catalyst",
      graphicFile: "res:/dx9/Model/Ship/Gallente/Destroyer/GDe1/GDe1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    2390: {
      description: "Minmatar Destroyer Thrasher",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Destroyer/MDE1/MDE1_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    2393: {
      description: "POS Forcefield",
      graphicFile: "res:/dx9/model/deployables/forcefield/posforcefield.red"
    },
    2394: {
      description: "Ammo_Container",
      graphicFile: "res:/dx9/model/worldobject/spawn_containers/ammo_container/ammo_container.red"
    },
    2395: {
      description: "Armor_Container",
      graphicFile: "res:/dx9/model/worldobject/spawn_containers/armor_container/armor_container.red"
    },
    2396: {
      description: "Electronic_Container",
      graphicFile: "res:/dx9/model/worldobject/spawn_containers/electronic_container/electronic_container.red"
    },
    2397: {
      description: "Mineral_Container",
      graphicFile: "res:/dx9/model/worldobject/spawn_containers/mineral_container/mineral_container.red"
    },
    2398: {
      description: "rgd_Container",
      graphicFile: "res:/dx9/model/worldobject/spawn_containers/rgd_container/rgd_container.red"
    },
    2399: {
      description: "weapon_container",
      graphicFile: "res:/dx9/model/worldobject/spawn_containers/weapon_container/weapon_container.red"
    },
    2400: {
      description: "cathedral",
      graphicFile: "res:/dx9/model/worldobject/amarrcathedral/cathedral.red",
      race: "Amarr"
    },
    2401: {
      description: "cathedralBlood",
      graphicFile: "res:/dx9/model/worldobject/amarrcathedral/cathedralblood.red",
      race: "Amarr"
    },
    2402: {
      description: "asteroid_station12",
      graphicFile: "res:/dx9/model/worldobject/asteroid_station12/asteroid_station12.red"
    },
    2403: {
      description: "CargoRig",
      graphicFile: "res:/dx9/model/worldobject/cargorig/cargorig.red"
    },
    2404: {
      description: "chapel",
      graphicFile: "res:/dx9/model/worldobject/chapel/chapel.red"
    },
    2405: {
      description: "chapelBlood",
      graphicFile: "res:/dx9/model/worldobject/chapel/chapelblood.red"
    },
    2406: {
      description: "Drone_Structure2",
      graphicFile: "res:/dx9/model/worldobject/drone_superstructure2/drone_structure2.red"
    },
    2407: {
      description: "Drone_structure1",
      graphicFile: "res:/dx9/model/worldobject/drone_superstructures/drone_structure1.red"
    },
    2408: {
      description: "gb2construct",
      graphicFile: "res:/dx9/model/worldobject/gb2construct/gb2construct.red"
    },
    2409: {
      description: "helipad_01",
      graphicFile: "res:/dx9/model/worldobject/helipad/helipad_01.red"
    },
    2410: {
      description: "rd_station",
      graphicFile: "res:/dx9/model/worldobject/rdstation/rd_station.red"
    },
    2411: {
      description: "gj3ruined",
      graphicFile: "res:/dx9/model/worldobject/ruinedstargate/gj3ruined.red"
    },
    2412: {
      description: "SolarHarvester",
      graphicFile: "res:/dx9/model/worldobject/solarharvester/solarharvester.red"
    },
    2413: {
      description: "AmarrWall_Sentry",
      graphicFile: "res:/dx9/model/worldobject/defenses/amarr/amarrwall_sentry.red",
      race: "Amarr"
    },
    2414: {
      description: "AngelWall_Sentry",
      graphicFile: "res:/dx9/model/worldobject/defenses/angel/angelwall_sentry.red",
      race: "Angel"
    },
    2415: {
      description: "BloodraiderWall_Sentry",
      graphicFile: "res:/dx9/model/worldobject/defenses/bloodraider/bloodraiderwall_sentry.red",
      race: "Amarr"
    },
    2416: {
      description: "CaldariWall_Sentry",
      graphicFile: "res:/dx9/model/worldobject/defenses/caldari/caldariwall_sentry.red",
      race: "Caldari"
    },
    2417: {
      description: "GallenteWall_Sentry",
      graphicFile: "res:/dx9/model/worldobject/defenses/gallente/gallentewall_sentry.red",
      race: "Gallente"
    },
    2418: {
      description: "GuristaWall_Sentry",
      graphicFile: "res:/dx9/model/worldobject/defenses/guristas/guristawall_sentry.red",
      race: "Caldari"
    },
    2419: {
      description: "MimatarWall_Sentry",
      graphicFile: "res:/dx9/model/worldobject/defenses/minmatar/mimatarwall_sentry.red",
      race: "Minmatar"
    },
    2420: {
      description: "SanshaWall_Sentry",
      graphicFile: "res:/dx9/model/worldobject/defenses/sansha/sanshawall_sentry.red",
      race: "Sansha"
    },
    2421: {
      description: "SerpentisWall_Sentry",
      graphicFile: "res:/dx9/model/worldobject/defenses/serpentis/serpentiswall_sentry.red",
      race: "Gallente"
    },
    2422: {
      description: "AmarrWall_Bunker",
      graphicFile: "res:/dx9/model/worldobject/defenses/amarr/amarrwall_bunker.red",
      race: "Amarr"
    },
    2423: {
      description: "AmarrWall_Elevator",
      graphicFile: "res:/dx9/model/worldobject/defenses/amarr/amarrwall_elevator.red",
      race: "Amarr"
    },
    2424: {
      description: "AmarrWall_Junction",
      graphicFile: "res:/dx9/model/worldobject/defenses/amarr/amarrwall_junction.red",
      race: "Amarr"
    },
    2425: {
      description: "AmarrWall_Lookout",
      graphicFile: "res:/dx9/model/worldobject/defenses/amarr/amarrwall_lookout.red",
      race: "Amarr"
    },
    2426: {
      description: "AmarrWall_X",
      graphicFile: "res:/dx9/model/worldobject/defenses/amarr/amarrwall_x.red",
      race: "Amarr"
    },
    2427: {
      description: "AmarrWall_XZ",
      graphicFile: "res:/dx9/model/worldobject/defenses/amarr/amarrwall_xz.red",
      race: "Amarr"
    },
    2428: {
      description: "AmarrWall_Z",
      graphicFile: "res:/dx9/model/worldobject/defenses/amarr/amarrwall_z.red",
      race: "Amarr"
    },
    2429: {
      description: "AmarrWall_ZX",
      graphicFile: "res:/dx9/model/worldobject/defenses/amarr/amarrwall_zx.red",
      race: "Amarr"
    },
    2430: {
      description: "AmarrWalls_MBattery",
      graphicFile: "res:/dx9/model/worldobject/defenses/amarr/amarrwalls_mbattery.red",
      race: "Amarr"
    },
    2431: {
      description: "AngelWall_Bunker",
      graphicFile: "res:/dx9/model/worldobject/defenses/angel/angelwall_bunker.red",
      race: "Angel"
    },
    2432: {
      description: "AngelWall_Elevator",
      graphicFile: "res:/dx9/model/worldobject/defenses/angel/angelwall_elevator.red",
      race: "Angel"
    },
    2433: {
      description: "AngelWall_Junction",
      graphicFile: "res:/dx9/model/worldobject/defenses/angel/angelwall_junction.red",
      race: "Angel"
    },
    2434: {
      description: "AngelWall_Lookout",
      graphicFile: "res:/dx9/model/worldobject/defenses/angel/angelwall_lookout.red",
      race: "Angel"
    },
    2435: {
      description: "AngelWall_MBattery",
      graphicFile: "res:/dx9/model/worldobject/defenses/angel/angelwall_mbattery.red",
      race: "Angel"
    },
    2436: {
      description: "AngelWall_X",
      graphicFile: "res:/dx9/model/worldobject/defenses/angel/angelwall_x.red",
      race: "Angel"
    },
    2437: {
      description: "AngelWall_XZ",
      graphicFile: "res:/dx9/model/worldobject/defenses/angel/angelwall_xz.red",
      race: "Angel"
    },
    2438: {
      description: "AngelWall_Z",
      graphicFile: "res:/dx9/model/worldobject/defenses/angel/angelwall_z.red",
      race: "Angel"
    },
    2439: {
      description: "AngelWall_ZX",
      graphicFile: "res:/dx9/model/worldobject/defenses/angel/angelwall_zx.red",
      race: "Angel"
    },
    2440: {
      description: "BloodraiderWall_Bunker",
      graphicFile: "res:/dx9/model/worldobject/defenses/bloodraider/bloodraiderwall_bunker.red",
      race: "Amarr"
    },
    2441: {
      description: "BloodraiderWall_Elevator",
      graphicFile: "res:/dx9/model/worldobject/defenses/bloodraider/bloodraiderwall_elevator.red",
      race: "Amarr"
    },
    2442: {
      description: "BloodraiderWall_Junction",
      graphicFile: "res:/dx9/model/worldobject/defenses/bloodraider/bloodraiderwall_junction.red",
      race: "Amarr"
    },
    2443: {
      description: "BloodraiderWall_Lookout",
      graphicFile: "res:/dx9/model/worldobject/defenses/bloodraider/bloodraiderwall_lookout.red",
      race: "Amarr"
    },
    2444: {
      description: "BloodraiderWall_MBattery",
      graphicFile: "res:/dx9/model/worldobject/defenses/bloodraider/bloodraiderwall_mbattery.red",
      race: "Amarr"
    },
    2445: {
      description: "BloodraiderWall_X",
      graphicFile: "res:/dx9/model/worldobject/defenses/bloodraider/bloodraiderwall_x.red",
      race: "Amarr"
    },
    2446: {
      description: "BloodraiderWall_XZ",
      graphicFile: "res:/dx9/model/worldobject/defenses/bloodraider/bloodraiderwall_xz.red",
      race: "Amarr"
    },
    2447: {
      description: "BloodraiderWall_Z",
      graphicFile: "res:/dx9/model/worldobject/defenses/bloodraider/bloodraiderwall_z.red",
      race: "Amarr"
    },
    2448: {
      description: "BloodraiderWall_ZX",
      graphicFile: "res:/dx9/model/worldobject/defenses/bloodraider/bloodraiderwall_zx.red",
      race: "Amarr"
    },
    2449: {
      description: "CaldariWall_Elevator",
      graphicFile: "res:/dx9/model/worldobject/defenses/caldari/caldariwall_elevator.red",
      race: "Caldari"
    },
    2450: {
      description: "CaldariWall_Junction",
      graphicFile: "res:/dx9/model/worldobject/defenses/caldari/caldariwall_junction.red",
      race: "Caldari"
    },
    2451: {
      description: "CaldariWall_Lookout",
      graphicFile: "res:/dx9/model/worldobject/defenses/caldari/caldariwall_lookout.red",
      race: "Caldari"
    },
    2452: {
      description: "CaldariWall_MBattery",
      graphicFile: "res:/dx9/model/worldobject/defenses/caldari/caldariwall_mbattery.red",
      race: "Caldari"
    },
    2453: {
      description: "CaldariWall_X",
      graphicFile: "res:/dx9/model/worldobject/defenses/caldari/caldariwall_x.red",
      race: "Caldari"
    },
    2454: {
      description: "CaldariWall_XZ",
      graphicFile: "res:/dx9/model/worldobject/defenses/caldari/caldariwall_xz.red",
      race: "Caldari"
    },
    2455: {
      description: "CaldariWall_Z",
      graphicFile: "res:/dx9/model/worldobject/defenses/caldari/caldariwall_z.red",
      race: "Caldari"
    },
    2456: {
      description: "CaldariWall_ZX",
      graphicFile: "res:/dx9/model/worldobject/defenses/caldari/caldariwall_zx.red",
      race: "Caldari"
    },
    2457: {
      description: "GuristaWall_Bunker",
      graphicFile: "res:/dx9/model/worldobject/defenses/caldari/guristawall_bunker.red",
      race: "Caldari"
    },
    2458: {
      description: "GallenteWall_Bunker",
      graphicFile: "res:/dx9/model/worldobject/defenses/gallente/gallentewall_bunker.red",
      race: "Gallente"
    },
    2459: {
      description: "GallenteWall_Elevator",
      graphicFile: "res:/dx9/model/worldobject/defenses/gallente/gallentewall_elevator.red",
      race: "Gallente"
    },
    2460: {
      description: "GallenteWall_Junction",
      graphicFile: "res:/dx9/model/worldobject/defenses/gallente/gallentewall_junction.red",
      race: "Gallente"
    },
    2461: {
      description: "GallenteWall_Lookout",
      graphicFile: "res:/dx9/model/worldobject/defenses/gallente/gallentewall_lookout.red",
      race: "Gallente"
    },
    2462: {
      description: "GallenteWall_MBattery",
      graphicFile: "res:/dx9/model/worldobject/defenses/gallente/gallentewall_mbattery.red",
      race: "Gallente"
    },
    2463: {
      description: "GallenteWall_X",
      graphicFile: "res:/dx9/model/worldobject/defenses/gallente/gallentewall_x.red",
      race: "Gallente"
    },
    2464: {
      description: "GallenteWall_XZ",
      graphicFile: "res:/dx9/model/worldobject/defenses/gallente/gallentewall_xz.red",
      race: "Gallente"
    },
    2465: {
      description: "GallenteWall_Z",
      graphicFile: "res:/dx9/model/worldobject/defenses/gallente/gallentewall_z.red",
      race: "Gallente"
    },
    2466: {
      description: "GallenteWall_ZX",
      graphicFile: "res:/dx9/model/worldobject/defenses/gallente/gallentewall_zx.red",
      race: "Gallente"
    },
    2467: {
      description: "GuristasWall_GreatWall",
      graphicFile: "res:/dx9/model/worldobject/defenses/guristas/guristaswall_greatwall.red",
      race: "Caldari"
    },
    2468: {
      description: "GuristasWall_MBattery",
      graphicFile: "res:/dx9/model/worldobject/defenses/guristas/guristaswall_mbattery.red",
      race: "Caldari"
    },
    2469: {
      description: "GuristaWall_Bunker",
      graphicFile: "res:/dx9/model/worldobject/defenses/guristas/guristawall_bunker.red",
      race: "Caldari"
    },
    2470: {
      description: "GuristaWall_Bunker",
      graphicFile: "res:/dx9/model/worldobject/defenses/guristas/guristawall_bunker.red",
      race: "Caldari"
    },
    2471: {
      description: "GuristaWall_Elevator",
      graphicFile: "res:/dx9/model/worldobject/defenses/guristas/guristawall_elevator.red",
      race: "Caldari"
    },
    2472: {
      description: "GuristaWall_Junction",
      graphicFile: "res:/dx9/model/worldobject/defenses/guristas/guristawall_junction.red",
      race: "Caldari"
    },
    2473: {
      description: "GuristaWall_Lookout",
      graphicFile: "res:/dx9/model/worldobject/defenses/guristas/guristawall_lookout.red",
      race: "Caldari"
    },
    2474: {
      description: "GuristaWall_X",
      graphicFile: "res:/dx9/model/worldobject/defenses/guristas/guristawall_x.red",
      race: "Caldari"
    },
    2475: {
      description: "GuristaWall_XZ",
      graphicFile: "res:/dx9/model/worldobject/defenses/guristas/guristawall_xz.red",
      race: "Caldari"
    },
    2476: {
      description: "GuristaWall_Z",
      graphicFile: "res:/dx9/model/worldobject/defenses/guristas/guristawall_z.red",
      race: "Caldari"
    },
    2477: {
      description: "GuristaWall_ZX",
      graphicFile: "res:/dx9/model/worldobject/defenses/guristas/guristawall_zx.red",
      race: "Caldari"
    },
    2478: {
      description: "MinmatarlWall_ZX",
      graphicFile: "res:/dx9/model/worldobject/defenses/minmatar/minmatarlwall_zx.red",
      race: "Minmatar"
    },
    2479: {
      description: "MinmatarWall_Bunker",
      graphicFile: "res:/dx9/model/worldobject/defenses/minmatar/minmatarwall_bunker.red",
      race: "Minmatar"
    },
    2480: {
      description: "MinmatarWall_Elevator",
      graphicFile: "res:/dx9/model/worldobject/defenses/minmatar/minmatarwall_elevator.red",
      race: "Minmatar"
    },
    2481: {
      description: "MinmatarWall_Junction",
      graphicFile: "res:/dx9/model/worldobject/defenses/minmatar/minmatarwall_junction.red",
      race: "Minmatar"
    },
    2482: {
      description: "MinmatarWall_Lookout",
      graphicFile: "res:/dx9/model/worldobject/defenses/minmatar/minmatarwall_lookout.red",
      race: "Minmatar"
    },
    2483: {
      description: "MinmatarWall_MBattery",
      graphicFile: "res:/dx9/model/worldobject/defenses/minmatar/minmatarwall_mbattery.red",
      race: "Minmatar"
    },
    2484: {
      description: "MinmatarWall_X",
      graphicFile: "res:/dx9/model/worldobject/defenses/minmatar/minmatarwall_x.red",
      race: "Minmatar"
    },
    2485: {
      description: "MinmatarWall_XZ",
      graphicFile: "res:/dx9/model/worldobject/defenses/minmatar/minmatarwall_xz.red",
      race: "Minmatar"
    },
    2486: {
      description: "MinmatarWall_Z",
      graphicFile: "res:/dx9/model/worldobject/defenses/minmatar/minmatarwall_z.red",
      race: "Minmatar"
    },
    2487: {
      description: "SanshaiWall_Z",
      graphicFile: "res:/dx9/model/worldobject/defenses/sansha/sanshaiwall_z.red",
      race: "Sansha"
    },
    2488: {
      description: "SanshaWall_Bunker",
      graphicFile: "res:/dx9/model/worldobject/defenses/sansha/sanshawall_bunker.red",
      race: "Sansha"
    },
    2489: {
      description: "SanshaWall_Elevator",
      graphicFile: "res:/dx9/model/worldobject/defenses/sansha/sanshawall_elevator.red",
      race: "Sansha"
    },
    2490: {
      description: "SanshaWall_Junction",
      graphicFile: "res:/dx9/Model/WorldObject/Defenses/Sansha/SanshaWall_Junction.red",
      race: "Sansha"
    },
    2491: {
      description: "SanshaWall_Lookout",
      graphicFile: "res:/dx9/model/worldobject/defenses/sansha/sanshawall_lookout.red",
      race: "Sansha"
    },
    2492: {
      description: "SanshaWall_MBattery",
      graphicFile: "res:/dx9/model/worldobject/defenses/sansha/sanshawall_mbattery.red",
      race: "Sansha"
    },
    2493: {
      description: "SanshaWall_X",
      graphicFile: "res:/dx9/model/worldobject/defenses/sansha/sanshawall_x.red",
      race: "Sansha"
    },
    2494: {
      description: "SanshaWall_XZ",
      graphicFile: "res:/dx9/model/worldobject/defenses/sansha/sanshawall_xz.red",
      race: "Sansha"
    },
    2495: {
      description: "SanshaWall_ZX",
      graphicFile: "res:/dx9/model/worldobject/defenses/sansha/sanshawall_zx.red",
      race: "Sansha"
    },
    2496: {
      description: "SerpentisWall_Bunker",
      graphicFile: "res:/dx9/model/worldobject/defenses/serpentis/serpentiswall_bunker.red",
      race: "Gallente"
    },
    2497: {
      description: "SerpentisWall_Elevator",
      graphicFile: "res:/dx9/model/worldobject/defenses/serpentis/serpentiswall_elevator.red",
      race: "Gallente"
    },
    2498: {
      description: "SerpentisWall_Junction",
      graphicFile: "res:/dx9/model/worldobject/defenses/serpentis/serpentiswall_junction.red",
      race: "Gallente"
    },
    2499: {
      description: "SerpentisWall_Lookout",
      graphicFile: "res:/dx9/model/worldobject/defenses/serpentis/serpentiswall_lookout.red",
      race: "Gallente"
    },
    2500: {
      description: "SerpentisWall_MBattery",
      graphicFile: "res:/dx9/model/worldobject/defenses/serpentis/serpentiswall_mbattery.red",
      race: "Gallente"
    },
    2501: {
      description: "SerpentisWall_X",
      graphicFile: "res:/dx9/model/worldobject/defenses/serpentis/serpentiswall_x.red",
      race: "Gallente"
    },
    2502: {
      description: "SerpentisWall_XZ",
      graphicFile: "res:/dx9/model/worldobject/defenses/serpentis/serpentiswall_xz.red",
      race: "Gallente"
    },
    2503: {
      description: "SerpentisWall_Z",
      graphicFile: "res:/dx9/model/worldobject/defenses/serpentis/serpentiswall_z.red",
      race: "Gallente"
    },
    2504: {
      description: "SerpentisWall_ZX",
      graphicFile: "res:/dx9/model/worldobject/defenses/serpentis/serpentiswall_zx.red",
      race: "Gallente"
    },
    2505: {
      description: "RadioTelescope",
      graphicFile: "res:/dx9/model/worldobject/radiotelescope/radiotelescope.red"
    },
    2506: {
      description: "Amarr Frigate EoM (Punisher Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF3/EoM/AF3_T1_EoM.red",
      colorScheme: "TurretPreset_EoM",
      race: "Amarr"
    },
    2507: {
      description: "Amarr Frigate EoM (Tormentor Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF6/EoM/AF6_T1_EoM.red",
      colorScheme: "TurretPreset_EoM",
      race: "Amarr"
    },
    2508: {
      description: "Amarr Battleship EoM (Apocalypse Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB1/EoM/AB1_T1_EoM.red",
      colorScheme: "TurretPreset_EoM",
      race: "Amarr"
    },
    2509: {
      description: "Amarr Battleship EoM (Armageddon Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB2/EoM/AB2_T1_EoM.red",
      colorScheme: "TurretPreset_EoM",
      race: "Amarr"
    },
    2510: {
      description: "Amarr Cruiser EoM (Arbitrator Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC1/EoM/AC1_T1_EoM.red",
      colorScheme: "TurretPreset_EoM",
      race: "Amarr"
    },
    2511: {
      description: "Amarr Cruiser EoM (Maller Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC2/EoM/AC2_T1_EoM.red",
      colorScheme: "TurretPreset_EoM",
      race: "Amarr"
    },
    2513: {
      description: "BloodsportArena",
      graphicFile: "res:/dx9/model/worldobject/bloodsportarena/bloodsportarena.red"
    },
    2514: {
      description: "habitat_brothel",
      graphicFile: "res:/dx9/model/worldobject/habitatmodule/habitat_brothel.red"
    },
    2515: {
      description: "habitat_living",
      graphicFile: "res:/dx9/model/worldobject/habitatmodule/habitat_living.red"
    },
    2516: {
      description: "habitat_narcotics",
      graphicFile: "res:/dx9/model/worldobject/habitatmodule/habitat_narcotics.red"
    },
    2517: {
      description: "habitat_casino",
      graphicFile: "res:/dx9/model/worldobject/habitatmodule/habitat_casino.red"
    },
    2518: {
      description: "habitat_pleasure",
      graphicFile: "res:/dx9/model/worldobject/habitatmodule/habitat_pleasure.red"
    },
    2519: {
      description: "habitat_police",
      graphicFile: "res:/dx9/model/worldobject/habitatmodule/habitat_police.red"
    },
    2520: {
      description: "habitat_prison",
      graphicFile: "res:/dx9/model/worldobject/habitatmodule/habitat_prison.red"
    },
    2521: {
      description: "habitat_roadhouse",
      graphicFile: "res:/dx9/model/worldobject/habitatmodule/habitat_roadhouse.red"
    },
    2522: {
      description: "ORE Mining Barge Covetor",
      graphicFile: "res:/dx9/Model/Ship/Ore/OreL/OreL_T1.red",
      colorScheme: "TurretPreset_ORE_T1",
      race: "ORE"
    },
    2523: {
      description: "ORE Mining Barge Retriever",
      graphicFile: "res:/dx9/Model/Ship/Ore/OreM/OreM_T1.red",
      colorScheme: "TurretPreset_ORE_T1",
      race: "ORE"
    },
    2524: {
      description: "ORE Mining Barge Procurer",
      graphicFile: "res:/dx9/Model/Ship/Ore/OreS/OreS_T1.red",
      colorScheme: "TurretPreset_ORE_T1",
      race: "ORE"
    },
    20257: {
      description: "Amarr Drone Sarum Sentry Curator II",
      graphicFile: "res:/dx9/model/Drone/Amarr/Sentry/ASD1/Sarum/ASD1_T2_Sarum.red",
      colorScheme: "TurretPreset_Sarum",
      race: "Amarr"
    },
    10742: {
      description: "Top Front Rim Sides",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/TopFrontRimSides.red"
    },
    10743: {
      description: "Top Left Soft Right",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/TopLeftSoftRight.red"
    },
    10744: {
      description: "High Key Right",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/HighKeyRight.red"
    },
    10745: {
      description: "Top Right Rim Sides",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/TopRightRimSides.red"
    },
    10746: {
      description: "Soft Center Rim Sides",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/SoftCenterRimSides.red"
    },
    10747: {
      description: "Main Left Rim Sides",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/MainLeftRimRight.red"
    },
    10748: {
      description: "Color - Soft Blue Right",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/SoftBlueRight.red"
    },
    10749: {
      description: "Color - Soft Gold Right",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/SoftGoldRight.red"
    },
    10750: {
      description: "Color - Silver White",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/SilverWhite.red"
    },
    10751: {
      description: "Color - Blue Warm",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/BlueWarm.red"
    },
    10752: {
      description: "Color - Platinum",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/Platinum.red"
    },
    10753: {
      description: "Color - Warm White Gold",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/WarmWhiteGold.red"
    },
    2565: {
      description: "Hive1",
      graphicFile: "res:/dx9/model/station/drone/hive1.red"
    },
    2566: {
      description: "Hive2",
      graphicFile: "res:/dx9/model/station/drone/hive2.red"
    },
    2583: {
      description: "DroneWall_Bunker",
      graphicFile: "res:/dx9/model/worldobject/defenses/drone/dronewall_bunker.red"
    },
    2584: {
      description: "DroneWall_Elevator",
      graphicFile: "res:/dx9/model/worldobject/defenses/drone/dronewall_elevator.red"
    },
    2585: {
      description: "DroneWall_Junction",
      graphicFile: "res:/dx9/model/worldobject/defenses/drone/dronewall_junction.red"
    },
    2586: {
      description: "DroneWall_Lookout",
      graphicFile: "res:/dx9/model/worldobject/defenses/drone/dronewall_lookout.red"
    },
    2587: {
      description: "DroneWall_MBattery",
      graphicFile: "res:/dx9/model/worldobject/defenses/drone/dronewall_mbattery.red"
    },
    2588: {
      description: "DroneWall_X",
      graphicFile: "res:/dx9/model/worldobject/defenses/drone/dronewall_x.red"
    },
    2589: {
      description: "DroneWall_XZ",
      graphicFile: "res:/dx9/model/worldobject/defenses/drone/dronewall_xz.red"
    },
    2590: {
      description: "DroneWall_Z",
      graphicFile: "res:/dx9/model/worldobject/defenses/drone/dronewall_z.red"
    },
    2591: {
      description: "DroneWall_ZX",
      graphicFile: "res:/dx9/model/worldobject/defenses/drone/dronewall_zx.red"
    },
    2592: {
      description: "DroneWallSentry",
      graphicFile: "res:/dx9/model/worldobject/defenses/drone/dronewallsentry.red"
    },
    2593: {
      description: "Amarr_Tower_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/amarr_tower_final.red",
      race: "Amarr"
    },
    2594: {
      description: "Gallente_Tower_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/gallente_tower_final.red",
      race: "Gallente"
    },
    2595: {
      description: "Hangar_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/hangar_final.red"
    },
    2596: {
      description: "Refinery_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/refinery_final.red"
    },
    2597: {
      description: "Storage_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/storage_final.red"
    },
    2598: {
      description: "Silo_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/silo_final.red"
    },
    2599: {
      description: "Caldari_Tower_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/caldari_tower_final.red",
      race: "Caldari"
    },
    2600: {
      description: "Minmatar_Tower_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/minmatar_tower_final.red",
      race: "Minmatar"
    },
    2601: {
      description: "Storage_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/storage_final.red"
    },
    2602: {
      description: "Harvester_final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/harvester_final.red"
    },
    2603: {
      description: "MissileSentry_final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/missilesentry_final.red"
    },
    2604: {
      description: "MissileSentry_final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/missilesentry_final.red"
    },
    2605: {
      description: "DeltaReactor_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/deltareactor_final.red"
    },
    2606: {
      description: "Harvester_final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/harvester_final.red"
    },
    2607: {
      description: "Harvester_final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/harvester_final.red"
    },
    2608: {
      description: "LAB_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/smagnetometric_final.red"
    },
    2609: {
      description: "LAB_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/sladar_final.red"
    },
    2610: {
      description: "LAB_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/sgravimetric_final.red"
    },
    2611: {
      description: "LAB_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/sradar_final.red"
    },
    2612: {
      description: "SStasiweb_final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/sstasiweb_final.red"
    },
    2613: {
      description: "SDampener_final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/sdampener_final.red"
    },
    2614: {
      description: "SWarpScambler_final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/swarpscambler_final.red"
    },
    2615: {
      description: "SWarpScambler_final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/swarpscambler_final.red"
    },
    2616: {
      description: "ShieldHardener_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/shieldhardener_final.red"
    },
    2617: {
      description: "ShieldHardener_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/shieldhardener_final.red"
    },
    2618: {
      description: "ShieldHardener_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/shieldhardener_final.red"
    },
    2619: {
      description: "ShieldHardener_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/shieldhardener_final.red"
    },
    2620: {
      description: "Hangar_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/hangar_final.red"
    },
    2621: {
      description: "SLadar_final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/sladar_final.red"
    },
    2622: {
      description: "MissileSentry_final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/missilesentry_final.red"
    },
    2624: {
      description: "Silo_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/silo_final.red"
    },
    2625: {
      description: "Shipyard",
      graphicFile: "res:/dx9/model/deployables/shipyard/shipyard.red"
    },
    2626: {
      description: "Shipyard_Dark",
      graphicFile: "res:/dx9/model/deployables/shipyard/shipyard_dark.red"
    },
    2627: {
      description: "Shipyard_Dirty",
      graphicFile: "res:/dx9/model/deployables/shipyard/shipyard_dirty.red"
    },
    10820: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/ArchDouble_NoCeiling.red"
    },
    10821: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/ArchDouble_Pillar.red"
    },
    10822: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/CeilingHigh_Small.red"
    },
    10823: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallWindow_Long.red"
    },
    2632: {
      description: "Amarr Frigate BloodRaider Cruor",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF8/Bloodraider/AF8_T1_Bloodraider.red",
      colorScheme: "TurretPreset_Bloodraider",
      race: "Amarr"
    },
    2633: {
      description: "Caldari Frigate Navy Caldari Navy Hookbill (Hookbill Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF8/Navy/CF8_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    2634: {
      description: "Gallente Frigate Navy Federation Navy Comet",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF8/Navy/GF8_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    2635: {
      description: "Minmatar Frigate Republic Fleet Firetail (Peacekeeper Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF8/Navy/MF8_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    2636: {
      description: "Amarr Cruiser BloodRaider Ashimu",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC6/BloodRaider/AC6_T1_BloodRaider.red",
      colorScheme: "TurretPreset_Bloodraider",
      race: "Amarr"
    },
    2637: {
      description: "Caldari Cruiser Navy Caracal Navy Issue (Caracal Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC3/Navy/CC3_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    2638: {
      description: "Caldari Battleship Navy Raven Navy Issue (Raven Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/BattleShip/CB1/Navy/CB1_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    10831: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/FloorMain_Large01.red"
    },
    10832: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/FloorMain_Large02.red"
    },
    10833: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/FloorMain_Large03.red"
    },
    2642: {
      description: "Minmatar Battleship Navy Tempest Fleet Issue (Tempest Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/BattleShip/MB2/Navy/MB2_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    10835: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/FloorStairs_BasicFlipped.red"
    },
    10836: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/FloorStairs_Low.red"
    },
    10837: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/FloorStairs_LowFlipped.red"
    },
    10838: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/FloorStairs_Wide.red"
    },
    10839: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallCorner_Left.red"
    },
    10840: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallCorner_Right.red"
    },
    10841: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallCorner_Small.red"
    },
    10842: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallCorner_SmallFlipped.red"
    },
    10843: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallCorridor_Large.red"
    },
    10844: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallDoor_Large.red"
    },
    10845: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallFlat_Basic.red"
    },
    10846: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallFlat_FlatIndent.red"
    },
    10847: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallFlat_Indent.red"
    },
    10848: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallFlat_Long.red"
    },
    10849: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallFlat_Small.red"
    },
    10850: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallFlat_SmallLeft.red"
    },
    10851: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallFlat_SmallRight.red"
    },
    10852: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallWindow_Large.red"
    },
    10853: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/SlayPit_RailLeft.red"
    },
    10854: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/SlayPit_RailRight.red"
    },
    10855: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/ArchDouble_PillarWalls.red"
    },
    10856: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/PitRailing_Basic.red"
    },
    10857: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallFlat_Thin.red"
    },
    10858: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallFlat_Wide.red"
    },
    10859: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/ArchSingle_Left.red"
    },
    10860: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/ArchSingle_Right.red"
    },
    10861: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/CeilingMain_Center.red"
    },
    10862: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/PitRailing_Left.red"
    },
    10863: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/PitRailing_Right.red"
    },
    10866: {
      description: "The default light rig for the character customization",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/Normal.red"
    },
    10869: {
      graphicFile: "res:/Graphics/Interior/Establishments/Caldari/blockout.red"
    },
    10870: {
      graphicFile: "res:/Graphics/Interior/Establishments/Gallente/blockout.red"
    },
    10871: {
      graphicFile: "res:/Graphics/Interior/Establishments/Minmatar/Blockout.red"
    },
    10872: {
      graphicFile: "res:/Graphics/Interior/CaptainsQuarters/Amarr/blockout.red"
    },
    11546: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Walkway_Pipes_05_Min/Walkway_Pipes_05_Min.red"
    },
    10005: {
      description: "Gallente Frigate Tournament VIII Utu (Ishkur Hull)",
      graphicFile: "res:/dx9/Model/Ship/Tournament/GF4_VIII/GF4_VIII.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    10006: {
      description: "Gallente Cruiser Tournament VIII Adrestia (Deimos Hull)",
      graphicFile: "res:/dx9/Model/Ship/Tournament/GC4_VIII/GC4_VIII.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    10886: {
      description: "CONCORD Frigate Cockroach (Bug Hunter vessel)",
      graphicFile: "res:/dx9/Model/Ship/Concord/Frigate/ConF4/ConF4_T1.red",
      colorScheme: "TurretPreset_Concord_ISD",
      race: "Concord"
    },
    10888: {
      graphicFile: "res:/Graphics/Interior/Testscenes/Andre/CaldariWIP/CaldariWindow_01.red"
    },
    10889: {
      graphicFile: "res:/Graphics/Interior/Testscenes/TempPublish_01/Minmatar_CQ_Blockout_Tunnel.red"
    },
    10894: {
      graphicFile: "res:/Graphics/Placeable/TestAssets/CQTest/Couch/Couch.red"
    },
    10895: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/ArchSingle.red"
    },
    10896: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/PitRailing_Center.red"
    },
    10897: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/PitRailing_Side.red"
    },
    2706: {
      description: "AstroFarm",
      graphicFile: "res:/dx9/model/worldobject/astrofarm/astrofarm.red"
    },
    2707: {
      description: "HumanFarm",
      graphicFile: "res:/dx9/model/worldobject/astrofarm/humanfarm.red"
    },
    2708: {
      description: "Volcanic Enviroment",
      graphicFile: "res:/dx9/model/worldobject/enviroments/env_vulcan.red"
    },
    2709: {
      description: "Caldari Industrial Crane (Tayra Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Industrial/CI2/Kaalakiota/CI2_T2_Kaalakiota.red",
      colorScheme: "TurretPreset_Kaalakiota",
      race: "Caldari"
    },
    2710: {
      description: "Amarr Industrial Khanid Impel (Bestower Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Industrial/AI1/Khanid/AI1_T2_Khanid.red",
      colorScheme: "TurretPreset_Khanid",
      race: "Amarr"
    },
    2711: {
      description: "Gallente Industrial Roden Occator (Kryos Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Industrial/GI2/Roden/GI2_T2_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    2712: {
      description: "Gallente Industrial Duvolle Viator (Miasmos Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Industrial/GI4/Duvolle/GI4_T2_Duvolle.red",
      colorScheme: "TurretPreset_Duvolle",
      race: "Gallente"
    },
    2713: {
      description: "Minmatar Industrial Thukker Mastodon (Mammoth Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Industrial/MI2/Thukker/MI2_T2b_Thukker.red",
      colorScheme: "TurretPreset_Thukker",
      race: "Minmatar"
    },
    2714: {
      description: "Minmatar Industrial Sebiestor Prowler (Wreathe Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Industrial/MI3/Sebiestor/MI3_T2c_Sebiestor.red",
      colorScheme: "TurretPreset_Sebiestor",
      race: "Minmatar"
    },
    2715: {
      description: "Amarr Industrial Sigil",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Industrial/AI2/AI2_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    2716: {
      description: "Amarr Industrial Ardishapur Prorator (Sigil Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Industrial/Ai2/Ardishapur/AI2_T2_Ardishapur.red",
      colorScheme: "TurretPreset_Ardishapur",
      race: "Amarr"
    },
    2717: {
      description: "ENV_Argon",
      graphicFile: "res:/dx9/model/worldobject/enviroments/env_argon.red"
    },
    2718: {
      description: "ENV_Dust_Devil",
      graphicFile: "res:/dx9/model/worldobject/enviroments/env_dust_devil.red"
    },
    2719: {
      description: "ENV_ElectricStorm",
      graphicFile: "res:/dx9/model/worldobject/enviroments/env_electricstorm.red"
    },
    2720: {
      description: "ENV_GhostWorld",
      graphicFile: "res:/dx9/model/worldobject/enviroments/env_ghostworld.red"
    },
    2721: {
      description: "ENV_Heaven",
      graphicFile: "res:/dx9/model/worldobject/enviroments/env_heaven.red"
    },
    2722: {
      description: "ENV_Hell",
      graphicFile: "res:/dx9/model/worldobject/enviroments/env_hell.red"
    },
    2723: {
      description: "ENV_Icefield",
      graphicFile: "res:/dx9/model/worldobject/enviroments/env_icefield.red"
    },
    2724: {
      description: "ENV_Krypton",
      graphicFile: "res:/dx9/model/worldobject/enviroments/env_krypton.red"
    },
    2725: {
      description: "ENV_Noir",
      graphicFile: "res:/dx9/model/worldobject/enviroments/env_noir.red"
    },
    2726: {
      description: "ENV_Poison",
      graphicFile: "res:/dx9/model/worldobject/enviroments/env_poison.red"
    },
    2727: {
      description: "ENV_Radon",
      graphicFile: "res:/dx9/model/worldobject/enviroments/env_radon.red"
    },
    2728: {
      description: "ENV_RainyDay",
      graphicFile: "res:/dx9/model/worldobject/enviroments/env_rainyday.red"
    },
    2729: {
      description: "ENV_Storm",
      graphicFile: "res:/dx9/model/worldobject/enviroments/env_storm.red"
    },
    2730: {
      description: "ENV_Vulcan",
      graphicFile: "res:/dx9/model/worldobject/enviroments/env_vulcan.red"
    },
    10923: {
      graphicFile: "res:/Graphics/Placeable/Universal/U_Trashbag01/U_Trashbag01.red"
    },
    10924: {
      graphicFile: "res:/Graphics/Placeable/Universal/U_BottleCollection/U_BottleCollection01.red"
    },
    10925: {
      graphicFile: "res:/Graphics/Placeable/Universal/U_BottleCollection/U_BottleCollection02.red"
    },
    10926: {
      graphicFile: "res:/Graphics/Placeable/Universal/ProteinPack/ProteinPack.red"
    },
    10927: {
      graphicFile: "res:/Graphics/Placeable/Generic/Test_MediumScreen2/Test_MediumScreen2.red"
    },
    2737: {
      description: "Minmatar Freighter Fenrir",
      graphicFile: "res:/dx9/model/ship/Minmatar/Freighter/MFr1/MFr1_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    2738: {
      description: "Amarr Freighter Providence",
      graphicFile: "res:/dx9/model/ship/amarr/Freighter/AFr1/AFr1_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    2739: {
      description: "Gallente Freighter Obelisk",
      graphicFile: "res:/dx9/model/ship/gallente/Freighter/GFr1/GFr1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    2740: {
      description: "Caldari Freighter Charon",
      graphicFile: "res:/dx9/model/ship/caldari/Freighter/CFr1/CFr1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    2741: {
      description: "Corpse commodity - Unknown",
      graphicFile: "res:/dx9/model/face/fullbody_char/corpses/corpsemale123.red"
    },
    2742: {
      description: "Cynosural_Field",
      graphicFile: "res:/dx9/model/Deployables/CynoBeacon/JumpBeacon.red"
    },
    2743: {
      description: "Amarr Dreadnought Revelation",
      graphicFile: "res:/dx9/model/ship/amarr/Dreadnought/ADn1/ADn1_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    2744: {
      description: "Gallente Dreadnought Moros",
      graphicFile: "res:/dx9/model/ship/gallente/Dreadnought/GDn1/GDn1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    10937: {
      graphicFile: "res:/Graphics/Placeable/Universal/QuafeSodaCan_01/QuafeSodaCan_01.red"
    },
    10938: {
      graphicFile: "res:/Graphics/Placeable/Caldari/Furniture_Sofa_01_Cal/Furniture_Sofa_01_Cal.red"
    },
    10939: {
      graphicFile: "res:/Graphics/Placeable/Caldari/Furniture_Table_Sofa_01_Cal/Furniture_Table_Sofa_01_Cal.red"
    },
    10942: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Door_Balcony_01_Min/Door_Balcony_01_Min.red"
    },
    10943: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Furniture_Table_Sofa_01_Min/Furniture_Table_Sofa_01_Min.red"
    },
    10944: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Furniture_Sofa_01_Min/Furniture_Sofa_01_Min.red"
    },
    10945: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Railing_TypeA_01_Min/Railing_TypeA_01_Min.red"
    },
    10946: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Railing_TypeA_02_Min/Railing_TypeA_02_Min.red"
    },
    10947: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Railing_TypeA_03_Min/Railing_TypeA_03_Min.red"
    },
    10948: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Railing_TypeA_04_Min/Railing_TypeA_04_Min.red"
    },
    10949: {
      graphicFile: "res:/Graphics/Placeable/Caldari/Door_TypeA_Cal/Door_TypeA_Cal.red"
    },
    10950: {
      description: "Amarr Frigate Tournament IX Malice (Punisher Hull)",
      graphicFile: "res:/dx9/model/ship/Tournament/AF3_IX/AF3_IX.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    10951: {
      description: "Amarr Cruiser Tournament IX Vangel (Maller Hull)",
      graphicFile: "res:/dx9/model/ship/Tournament/AC2_IX/AC2_IX.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    10952: {
      graphicFile: "res:/Graphics/Placeable/Caldari/Button_Undock_01_Cal/Button_Undock_01_Cal.red"
    },
    10953: {
      graphicFile: "res:/Graphics/Placeable/Caldari/Mirror_01_Cal/Mirror_01_Cal.red"
    },
    10954: {
      graphicFile: "res:/Graphics/Placeable/Caldari/Projector_01_Cal/Projector_01_Cal.red"
    },
    10955: {
      graphicFile: "res:/Graphics/Placeable/Caldari/Screen_TypeA_Left_Cal/Screen_TypeA_Left_Cal.red"
    },
    10956: {
      graphicFile: "res:/Graphics/Placeable/Caldari/Screen_TypeA_Lower_Cal/Screen_TypeA_Lower_Cal.red"
    },
    10957: {
      graphicFile: "res:/Graphics/Placeable/Caldari/Screen_TypeA_Main_Cal/Screen_TypeA_Main_Cal.red"
    },
    10958: {
      graphicFile: "res:/Graphics/Placeable/Caldari/Screen_TypeA_Right_Cal/Screen_TypeA_Right_Cal.red"
    },
    10959: {
      graphicFile: "res:/Graphics/Placeable/Caldari/Screen_TypeA_Upper_Cal/Screen_TypeA_Upper_Cal.red"
    },
    10960: {
      graphicFile: "res:/Graphics/Placeable/Caldari/Tablet_01_Cal/Tablet_01_Cal.red"
    },
    10961: {
      description: "new light color",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/AmberLeftBlueRight.red"
    },
    10962: {
      description: "new light color",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/BlueFrontDimSides.red"
    },
    10963: {
      description: "new light color",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/BlueFrontWhiteSides.red"
    },
    10964: {
      description: "new light color",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/BlueLeftRedRight.red"
    },
    10965: {
      description: "new light color",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/BlueLeftWhiteRight.red"
    },
    10966: {
      description: "new light color",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/BlueSidesBlueFront.red"
    },
    2775: {
      description: "Caldari Drone Lai Dai Medium Vespa II",
      graphicFile: "res:/dx9/model/Drone/Caldari/Medium/CDM1/LaiDai/CDM1_T2_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    10968: {
      description: "new light color",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/CoolRightYellowLeft.red"
    },
    10969: {
      description: "new light color",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/GreenLeftCoolFront.red"
    },
    10970: {
      description: "new light color",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/GreenRightCoolFront.red"
    },
    10971: {
      description: "new light color",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/GreenRightWhiteLeft.red"
    },
    10972: {
      description: "new light color",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/RedFrontRedLeft.red"
    },
    2781: {
      description: "Station: Caldari 1, Small version to be used for complexes. - Station",
      graphicFile: "res:/dx9/model/station/caldari/cs1/cs1_small.red",
      race: "Caldari"
    },
    2782: {
      description: "Gallente station, small version to be used for complexes - gs4",
      graphicFile: "res:/dx9/model/station/gallente/gs4/gs4_small.red",
      race: "Gallente"
    },
    10975: {
      description: "new light rig",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/AmberLeftBlueRight.red"
    },
    10976: {
      description: "new light rig",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/BlueFrontDimSides.red"
    },
    10977: {
      description: "new light rig",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/BlueFrontWhiteSides.red"
    },
    10978: {
      description: "new light rig",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/BlueLeftRedRight.red"
    },
    10979: {
      description: "new light rig",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/BlueLeftWhiteRight.red"
    },
    10980: {
      description: "new light rig",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/BlueSidesBlueFront.red"
    },
    10981: {
      description: "new light rig",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/CoolRightYellowLeft.red"
    },
    10982: {
      description: "new light rig",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/GreenLeftCoolFront.red"
    },
    10983: {
      description: "new light rig",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/GreenRightCoolFront.red"
    },
    10984: {
      description: "new light rig",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/GreenRightWhiteLeft.red"
    },
    10985: {
      description: "new light rig",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/RedFrontRedLeft.red"
    },
    10986: {
      description: "new light rig",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/SalmonRightCoolLeft.red"
    },
    10987: {
      description: "new light rig",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightSettings/WarmFrontWhiteSides.red"
    },
    10988: {
      graphicFile: "res:/Graphics/Placeable/TestAssets/ClothTest/DrapesLong_01.red"
    },
    10989: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_01_Min_Base.red"
    },
    10990: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_01_Min_Combo_01.red"
    },
    10991: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_01_Min_Combo_02.red"
    },
    10992: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_02_03_04_Min_Combo_01.red"
    },
    10993: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_02_Min_Base.red"
    },
    10994: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_03_Min_Base.red"
    },
    10995: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_04_Min_Base.red"
    },
    10996: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_05_06_07_Min_Combo_01.red"
    },
    10997: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_05_Min_Base.red"
    },
    10998: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_06_Min_Base.red"
    },
    10999: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_07_Min_Base.red"
    },
    11000: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_08_12_Min_Combo_01.red"
    },
    11001: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_08_Min_Base.red"
    },
    11002: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_09_Min_Base.red"
    },
    11003: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_10_Min_Base.red"
    },
    11004: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_11_Min_Base.red"
    },
    11005: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_12_Min_Base.red"
    },
    11006: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_14_Min_Base.red"
    },
    11007: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_09_Min_Combo_01.red"
    },
    11008: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_13_Min_Base.red"
    },
    11009: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_13_Min_Combo_01.red"
    },
    11010: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_15_Min_Base.red"
    },
    11011: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_Pit_Min_Base.red"
    },
    11012: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Wall/Wall_10_Min_Base_Flipped.red"
    },
    11013: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Floor/Floor_01_Min_Base.red"
    },
    11014: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Floor/Floor_02_Min_Base.red"
    },
    11015: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Floor/Stair_01_Min_01.red"
    },
    11016: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Floor/Stair_01_Min_02.red"
    },
    11017: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Ceiling/Ceiling_01_Min.red"
    },
    11018: {
      graphicFile: "res:/Graphics/Placeable/TestAssets/WaterCube/WaterCube.red"
    },
    11019: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Appliance_Screen_TypeA_01_Min/Appliance_Screen_TypeA_01_Min.red"
    },
    11020: {
      graphicFile: "res:/Graphics/Placeable/TestAssets/TrailerDoor/TrailerDoor_int.red"
    },
    11026: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Appliance_Holo_Unit_01_Min/Appliance_Holo_Unit_01_Min.red"
    },
    11027: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Appliance_Screen_TypeB_01_Min/Appliance_Screen_TypeB_01_Min.red"
    },
    11030: {
      graphicFile: "res:/Graphics/Placeable/TestAssets/CarbonLogo/CarbonLogo.red"
    },
    11031: {
      graphicFile: "res:/Graphics/Placeable/TestAssets/PrototypeLight_Plane/PrototypeLight_Plane.red"
    },
    11032: {
      graphicFile: "res:/Graphics/Placeable/TestAssets/PrototypeLight_Cylinder/PrototypeLight_Cylinder.red"
    },
    11033: {
      graphicFile: "res:/Graphics/Placeable/Generic/StationText/StationText.red"
    },
    11035: {
      graphicFile: "res:/Graphics/Placeable/Amarr/Mirror_01_Ama/Mirror_01_Ama.red"
    },
    11036: {
      graphicFile: "res:/Graphics/Placeable/Gallente/Mirror_01_Gal/Mirror_01_Gal.red"
    },
    11038: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Mirror_01_Min/Mirror_01_Min.red"
    },
    3205: {
      description: "Minmatar Battleship Justice Tribal Issue (Tempest Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/BattleShip/MB2/Justice/MB2_T1_Justice.red",
      colorScheme: "TurretPreset_Justice",
      race: "Minmatar"
    },
    11040: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Ceiling/Ceiling_02_Min.red"
    },
    11041: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Ceiling/Ceiling_03_Min.red"
    },
    11042: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Ceiling/Ceiling_04_Min.red"
    },
    11043: {
      description: "Beam Heavy Dual Tech 1",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/L/Beam_HeavyDual_T1.red"
    },
    11044: {
      graphicFile: "res:/Graphics/Placeable/Amarr/Screen_TypeA_Left_Ama/Screen_TypeA_Left_Ama.red"
    },
    11045: {
      graphicFile: "res:/Graphics/Placeable/Amarr/Screen_TypeA_Main_Ama/Screen_TypeA_Main_Ama.red"
    },
    11046: {
      graphicFile: "res:/Graphics/Placeable/Amarr/Screen_TypeA_Right_Ama/Screen_TypeA_Right_Ama.red"
    },
    11047: {
      graphicFile: "res:/Graphics/Placeable/Gallente/Screen_TypeA_Left_Gal/Screen_TypeA_Left_Gal.red"
    },
    11048: {
      graphicFile: "res:/Graphics/Placeable/Gallente/Screen_TypeA_Main_Gal/Screen_TypeA_Main_Gal.red"
    },
    11049: {
      graphicFile: "res:/Graphics/Placeable/Gallente/Screen_TypeA_Right_Gal/Screen_TypeA_Right_Gal.red"
    },
    11053: {
      description: "Beam_Mega_T1",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/L/Beam_Mega_T1.red"
    },
    11558: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Pipes_04_Min/Pipes_04_Min.red"
    },
    11057: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Ceiling_04_Wires_01_Min/Ceiling_04_Wires_01_Min.red"
    },
    11058: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Ceiling_06_Grate_01_Min/Ceiling_06_Grate_01_Min.red"
    },
    11059: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Ceiling_06_Grate_02_Min/Ceiling_06_Grate_02_Min.red"
    },
    11060: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Ceiling_06_Grate_03_Min/Ceiling_06_Grate_03_Min.red"
    },
    10038: {
      description: "Sansha Carrier Revenant (NPC version: Nation)",
      graphicFile: "res:/dx9/Model/Ship/Sansha/Carrier/SCa1/SCa1_T1.red",
      colorScheme: "TurretPreset_Sansha",
      race: "Sansha"
    },
    10039: {
      description: "Sansha Bomber Shadow",
      graphicFile: "res:/dx9/Model/Ship/Sansha/Fighter/SFB1/SFB1.red",
      colorScheme: "TurretPreset_Sansha",
      race: "Sansha"
    },
    2894: {
      description: "Minmatar Carrier Hel",
      graphicFile: "res:/dx9/model/ship/Minmatar/Carrier/MCa1/MCa1_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    2895: {
      description: "Gallente Destroyer CreoDron (Catalyst Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Destroyer/GDe1/CreoDron/GDe1_T1_CreoDron.red",
      colorScheme: "TurretPreset_CreoDron",
      race: "Gallente"
    },
    2897: {
      description: "White and silvery turnip-shaped asteroid - Unknown",
      graphicFile: "res:/dx9/model/worldobject/turniprock/turnipwhite.red"
    },
    2898: {
      description: "Dark and spiky asteroid station - Unknown",
      graphicFile: "res:/dx9/model/worldobject/asteroid_station_dark/ast_station_dark.red"
    },
    2899: {
      description: "Amarr Fighter Templar",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Fighter/AFI1/AFI1_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    2900: {
      description: "A large grey cloven asteroid. - Unknown",
      graphicFile: "res:/dx9/model/worldobject/crystalasteroid/clovenasteroid.red"
    },
    2901: {
      description: "A large reddish-brown cloven asteroid. - Unknown",
      graphicFile: "res:/dx9/model/worldobject/crystalasteroid/clovenasteroid_red.red"
    },
    2902: {
      description: "Broken asteroid with blue crystals. - Unknown",
      graphicFile: "res:/dx9/model/worldobject/crystalasteroid/crystalasteroid_blue.red"
    },
    2903: {
      description: "Broken asteroid with metallic crystals. - Unknown",
      graphicFile: "res:/dx9/model/worldobject/crystalasteroid/crystalasteroid_clear.red"
    },
    2904: {
      description: "Broken asteroid with orange crystals - Unknown",
      graphicFile: "res:/dx9/model/worldobject/crystalasteroid/crystalasteroid_orange.red"
    },
    2905: {
      description: "Amarr Carrier Archon",
      graphicFile: "res:/dx9/model/ship/amarr/Carrier/ACa2/ACa2_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    2906: {
      description: "Minmatar Titan Ragnarok",
      graphicFile: "res:/dx9/model/ship/Minmatar/Titan/MT1/MT1_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    2907: {
      description: "A spatial rift effect which is used in dungeons.",
      graphicFile: "res:/dx9/Model/WorldObject/Wormhole/SpatialRift.red"
    },
    2909: {
      description: "Gallente Carrier Nyx",
      graphicFile: "res:/dx9/model/ship/gallente/Carrier/GCa1/GCa1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    2910: {
      description: "Amarr Titan Avatar",
      graphicFile: "res:/dx9/model/ship/amarr/Titan/AT1/AT1_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    2911: {
      description: "Amarr Carrier Aeon",
      graphicFile: "res:/dx9/model/ship/amarr/Carrier/ACa1/ACa1_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    2912: {
      description: "Minmatar Battlecruiser Brutor Sleipnir (Cyclone Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/BattleCruiser/MBC1/Brutor/MBC1_T2a_Brutor.red",
      colorScheme: "TurretPreset_Brutor",
      race: "Minmatar"
    },
    11105: {
      description: "Beam_Mega_T1",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/L/Beam_Mega_T1.red"
    },
    11106: {
      description: "Beam_Tachyon_T1",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/L/Beam_Tachyon_T1.red"
    },
    11107: {
      description: "Beam_Focused_T1",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/M/Beam_Focused_T1.red"
    },
    11108: {
      description: "Beam_Heavy_T1",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/M/Beam_Heavy_T1.red"
    },
    2917: {
      description: "Gallente BattleCruiser Serpentis (Brutix Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/BattleCruiser/GBc1/Serpentis/GBc1_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    2918: {
      description: "Gallente Destroyer Serpentis (Catalyst Hull)",
      graphicFile: "res:/dx9/Model/Ship/Gallente/Destroyer/GDe1/Serpentis/GDe1_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    2919: {
      description: "Caldari Battlecruiser Guristas (Ferox Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/BattleCruiser/CBc1/Guristas/CBc1_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    2920: {
      description: "Caldari Destroyer Guristas (Cormorant Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Destroyer/CDe1/Guristas/CDe1_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    2921: {
      description: "Minmatar Battlecruiser Thukker (Cyclone Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/BattleCruiser/MBC1/Thukker/MBC1_T1_Thukker.red",
      colorScheme: "TurretPreset_Thukker",
      race: "Minmatar"
    },
    11114: {
      description: "Pulse_Mega_T1",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/L/Pulse_Mega_T1.red"
    },
    11115: {
      description: "Pulse_Focused_T1",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/M/Pulse_Focused_T1.red"
    },
    11116: {
      description: "Pulse_Heavy_T1",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/M/Pulse_Heavy_T1.red"
    },
    2925: {
      description: "Gallente BattleCruiser CreoDron Eos (Brutix Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/BattleCruiser/GBc1/CreoDron/GBc1_T2b_CreoDron.red",
      colorScheme: "TurretPreset_CreoDron",
      race: "Gallente"
    },
    2926: {
      description: "Amarr Battlecruiser Sarum Absolution (Prophecy Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battlecruiser/ABc1/Sarum/ABc1_T2b_Sarum.red",
      colorScheme: "TurretPreset_Sarum",
      race: "Amarr"
    },
    11119: {
      description: "Pulse_Medium_T1",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/S/Pulse_Medium_T1.red"
    },
    11120: {
      description: "Pulse_GigaDuel_T1",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/XL/Pulse_GigaDual_T1.red"
    },
    11121: {
      description: "Blast_Electron_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/L/Blast_Electron_T1.red"
    },
    11122: {
      description: "Blast_Ion_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/L/Blast_Ion_T1.red"
    },
    11123: {
      description: "Blast_Neutron_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/L/Blast_Neutron_T1.red"
    },
    2932: {
      description: "Gallente Carrier Thanatos",
      graphicFile: "res:/dx9/model/ship/gallente/Carrier/GCa2/GCa2_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    2933: {
      description: "DebrisCloudFlat",
      graphicFile: "res:/dx9/model/worldobject/cloud/debrisstormflat.red"
    },
    11126: {
      description: "Blast_Neutron_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/M/Blast_Neutron_T1.red"
    },
    11127: {
      description: "Blast_Electron_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/S/Blast_Electron_T1.red"
    },
    11128: {
      description: "Blast_Ion_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/S/Blast_Ion_T1.red"
    },
    11129: {
      description: "Blast_Neutron_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/S/Blast_Neutron_T1.red"
    },
    2938: {
      description: "ORE Exhumer Hulk (Covetor Hull)",
      graphicFile: "res:/dx9/Model/Ship/Ore/OreL/OreL_T2.red",
      colorScheme: "TurretPreset_ORE_T1",
      race: "ORE"
    },
    2939: {
      description: "ORE Exhumer Mackinaw (Retriever Hull)",
      graphicFile: "res:/dx9/Model/Ship/Ore/OreM/OreM_T2.red",
      colorScheme: "TurretPreset_ORE_T1",
      race: "ORE"
    },
    2940: {
      description: "ORE Exhumer Skiff (Procurer Hull)",
      graphicFile: "res:/dx9/Model/Ship/Ore/OreS/OreS_T2.red",
      colorScheme: "TurretPreset_ORE_T2",
      race: "ORE"
    },
    2941: {
      description: "wsign - Unknown",
      graphicFile: "res:/dx9/model/worldobject/wsign/wsign.red"
    },
    11134: {
      description: "Rail_425mm_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/L/Rail_425mm_T1.red"
    },
    11135: {
      description: "Rail_150mmDual_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/M/Rail_150mmDual_T1.red"
    },
    11136: {
      description: "Rail_200mm_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/M/Rail_200mm_T1.red"
    },
    2945: {
      description: "Shipyard_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/shipyard_final.red"
    },
    2946: {
      description: "Small_Academy_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/small_academy_final.red"
    },
    2947: {
      description: "Amarr Drone Light Imperial Navy Acolyte",
      graphicFile: "res:/dx9/model/Drone/Amarr/Light/ADL1/Navy/ADL1_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    11140: {
      description: "Rail_75mm_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/S/Rail_75mm_T1.red"
    },
    2949: {
      description: "Minmatar Drone Minmatar Heavy Berserker SW-900",
      graphicFile: "res:/dx9/model/Drone/Minmatar/Heavy/MDH1/MDH1_T2.red",
      colorScheme: "TurretPreset_Minmatar_T2",
      race: "Minmatar"
    },
    11142: {
      description: "DeepCore_T1",
      graphicFile: "res:/dx9/model/Turret/Mining/Deep_Core/DeepCore_T1.red"
    },
    11143: {
      description: "Gas_T1",
      graphicFile: "res:/dx9/model/Turret/Mining/Gas/Gas_T1.red"
    },
    11144: {
      description: "Ice_T1",
      graphicFile: "res:/dx9/model/Turret/Mining/Ice/Ice_T1.red"
    },
    11145: {
      description: "Modulated_Strip_T1",
      graphicFile: "res:/dx9/model/Turret/Mining/Modulated_Strip/Modulated_Strip_T1.red"
    },
    11146: {
      description: "Standard_T1",
      graphicFile: "res:/dx9/model/Turret/Mining/Standard/Standard_T1.red"
    },
    11147: {
      description: "Strip_T1",
      graphicFile: "res:/dx9/model/Turret/Mining/Strip/Strip_T1.red"
    },
    11148: {
      description: "Artil_1200mmHeavy_T1",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/L/Artil_1200mmHeavy_T1.red"
    },
    11149: {
      description: "Artil_1400mm_T1",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/L/Artil_1400mm_T1.red"
    },
    11150: {
      description: "Artil_650mm_T1",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/M/Artil_650mm_T1.red"
    },
    11151: {
      description: "Artil_720mm_T1",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/M/Artil_720mm_T1.red"
    },
    11152: {
      description: "Artil_250mm_T1",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/S/Artil_250mm_T1.red"
    },
    11153: {
      description: "Artil_280mm_T1",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/S/Artil_280mm_T1.red"
    },
    11154: {
      description: "Artil_3500mmQuad_T1",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/XL/Artil_3500mmQuad_T1.red"
    },
    11155: {
      description: "Auto_425mmDual_T1",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/L/Auto_425mmDual_T1.red"
    },
    11156: {
      description: "Auto_650mmDual_T1",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/L/Auto_650mmDual_T1.red"
    },
    11157: {
      description: "Auto_800mmHeavy_T1",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/L/Auto_800mmHeavy_T1.red"
    },
    11158: {
      description: "Auto_180mmDual_T1",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/M/Auto_180mmDual_T1.red"
    },
    11159: {
      description: "Auto_220mm_T1",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/M/Auto_220mm_T1.red"
    },
    2968: {
      description: "Caldari Drone Heavy Caldari Navy Wasp ",
      graphicFile: "res:/dx9/model/Drone/Caldari/Heavy/CDH1/Navy/CDH1_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    11161: {
      description: "Auto_125mm_T1",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/S/Auto_125mm_T1.red"
    },
    11162: {
      description: "Auto_150mm_T1",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/S/Auto_150mm_T1.red"
    },
    11163: {
      description: "Auto_200mm_T1",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/S/Auto_200mm_T1.red"
    },
    11164: {
      description: "Auto_6x2500mm_T1",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/XL/Auto_6x2500mm_T1.red"
    },
    11165: {
      description: "Salvage_S_T1",
      graphicFile: "res:/dx9/model/Turret/Salvage/S/Salvage_S_T1.red"
    },
    11166: {
      description: "Salvage_S_T2",
      graphicFile: "res:/dx9/model/Turret/Salvage/S/Salvage_S_T2.red"
    },
    2975: {
      description: "Caldari Fighter Dragonfly",
      graphicFile: "res:/dx9/Model/Ship/Caldari/Fighter/CFI1/CFI1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    2976: {
      description: "Capitalship Construction Shipyard - Unknown",
      graphicFile: "res:/dx9/model/deployables/titanyard/titanyard.red"
    },
    2977: {
      description: "Builds big mother fuckers - Superconstructor",
      graphicFile: "res:/dx9/model/deployables/titanyard/titanyard.red"
    },
    2979: {
      description: "Minmatar Drone Sentry Bouncer I",
      graphicFile: "res:/dx9/model/Drone/Minmatar/Sentry/MSD1/MSD1_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    2980: {
      description: "Amarr Drone  Sentry Curator I ",
      graphicFile: "res:/dx9/model/Drone/Amarr/Sentry/ASD1/ASD1_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    2981: {
      description: "Caldari Drone Sentry Warden I ",
      graphicFile: "res:/dx9/model/Drone/Caldari/Sentry/CSD1/CSD1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    2982: {
      description: "Ammatar Holy Dome Ruins - Unknown",
      graphicFile: "res:/dx9/model/worldobject/amholydome/amholydome.red"
    },
    11181: {
      description: "Tractor_S_T1",
      graphicFile: "res:/dx9/model/Turret/Tractor/S/Tractor_S_T1.red"
    },
    11182: {
      description: "Tractor_XL_T1",
      graphicFile: "res:/dx9/model/Turret/Tractor/XL/Tractor_XL_T1.red"
    },
    11183: {
      description: "Utility_Amarr_S",
      graphicFile: "res:/dx9/model/Turret/Utility/Targeted/S/Utility_Amarr_S.red"
    },
    11184: {
      description: "Utility_Caldari_S",
      graphicFile: "res:/dx9/model/Turret/Utility/Targeted/S/Utility_Caldari_S.red"
    },
    11185: {
      description: "Utility_Minmatar_S",
      graphicFile: "res:/dx9/model/Turret/Utility/Targeted/S/Utility_Minmatar_S.red"
    },
    11187: {
      graphicFile: "res:/Graphics/Placeable/Generic/Tablet_01_Gen/Tablet_01_Gen.red"
    },
    11188: {
      description: "Beam_HeavyDual_F",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/L/beam_heavydual_F.red"
    },
    11189: {
      description: "Beam_HeavyDual_T2",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/L/beam_heavydual_T2.red"
    },
    11190: {
      description: "Beam_Mega_F",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/L/beam_mega_F.red"
    },
    11191: {
      description: "Beam_Mega_T2",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/L/beam_mega_T2.red"
    },
    11192: {
      description: "Beam_Tachyon_F",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/L/beam_tachyon_F.red"
    },
    11193: {
      description: "Beam_Tachyon_T2",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/L/beam_tachyon_T2.red"
    },
    11194: {
      description: "Beam_Focused_F",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/M/beam_focused_F.red"
    },
    11195: {
      description: "Beam_Focused_T2",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/M/beam_focused_T2.red"
    },
    11196: {
      description: "Beam_Heavy_F",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/M/beam_heavy_F.red"
    },
    11197: {
      description: "Beam_Heavy_T2",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/M/beam_heavy_T2.red"
    },
    11198: {
      description: "Beam_Quad_F",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/M/beam_quad_F.red"
    },
    11199: {
      description: "Beam_Quad_T2",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/M/beam_quad_T2.red"
    },
    11200: {
      description: "Beam_Dual_F",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/S/beam_dual_F.red"
    },
    11201: {
      description: "Beam_Dual_T2",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/S/beam_dual_T2.red"
    },
    11202: {
      description: "Beam_Medium_F",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/S/beam_medium_F.red"
    },
    11203: {
      description: "Beam_Medium_T2",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/S/beam_medium_T2.red"
    },
    11204: {
      description: "Beam_GigaDual_F",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/XL/beam_gigadual_F.red"
    },
    11205: {
      description: "Beam_GigaDual_T2",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/XL/beam_gigadual_T2.red"
    },
    11206: {
      description: "Pulse_HeavyDual_F",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/L/pulse_heavydual_F.red"
    },
    11207: {
      description: "Pulse_HeavyDual_T2",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/L/pulse_heavydual_T2.red"
    },
    11208: {
      description: "Pulse_Mega_F",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/L/pulse_mega_F.red"
    },
    11209: {
      description: "Pulse_Mega_T2",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/L/pulse_mega_T2.red"
    },
    11210: {
      description: "Pulse_Focused_F",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/M/pulse_focused_F.red"
    },
    11211: {
      description: "Pulse_Focused_T2",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/M/pulse_focused_T2.red"
    },
    11212: {
      description: "Pulse_Heavy_F",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/M/pulse_heavy_F.red"
    },
    11213: {
      description: "Pulse_Heavy_T2",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/M/pulse_heavy_T2.red"
    },
    11214: {
      description: "Pulse_Dual_F",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/S/pulse_dual_F.red"
    },
    11215: {
      description: "Pulse_Dual_T2",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/S/pulse_dual_T2.red"
    },
    11216: {
      description: "Pulse_Gatling_F",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/S/pulse_gatling_F.red"
    },
    11217: {
      description: "Pulse_Gatling_T2",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/S/pulse_gatling_T2.red"
    },
    11218: {
      description: "Pulse_Medium_F",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/S/pulse_medium_F.red"
    },
    11219: {
      description: "Pulse_Medium_T2",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/S/pulse_medium_T2.red"
    },
    11220: {
      description: "Pulse_GigaDuel_F",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/XL/pulse_gigadual_F.red"
    },
    11221: {
      description: "Pulse_GigaDuel_T2",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/XL/pulse_gigadual_T2.red"
    },
    11222: {
      description: "Blast_Electron_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/L/blast_electron_F.red"
    },
    11223: {
      description: "Blast_Electron_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/L/blast_electron_T2.red"
    },
    11224: {
      description: "Blast_Ion_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/L/blast_ion_F.red"
    },
    11225: {
      description: "Blast_Ion_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/L/blast_ion_T2.red"
    },
    11226: {
      description: "Blast_Neutron_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/L/blast_neutron_F.red"
    },
    11227: {
      description: "Blast_Neutron_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/L/blast_neutron_T2.red"
    },
    11228: {
      description: "Blast_Electron_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/M/blast_electron_F.red"
    },
    11229: {
      description: "Blast_Electron_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/M/blast_electron_T2.red"
    },
    11230: {
      description: "Blast_Ion_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/M/blast_ion_F.red"
    },
    11231: {
      description: "Blast_Ion_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/M/blast_ion_T2.red"
    },
    11232: {
      description: "Blast_Neutron_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/M/blast_neutron_F.red"
    },
    11233: {
      description: "Blast_Neutron_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/M/blast_neutron_T2.red"
    },
    11234: {
      description: "Blast_Electron_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/S/blast_electron_F.red"
    },
    11235: {
      description: "Blast_Electron_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/S/blast_electron_T2.red"
    },
    11236: {
      description: "Blast_Ion_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/S/blast_ion_F.red"
    },
    11237: {
      description: "Blast_Ion_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/S/blast_ion_T2.red"
    },
    11238: {
      description: "Blast_Neutron_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/S/blast_neutron_F.red"
    },
    11239: {
      description: "Blast_Neutron_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/S/blast_neutron_T2.red"
    },
    11240: {
      description: "Blast_Neutron_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/S/Model_Asset/Old/blast_neutron_F.red"
    },
    11241: {
      description: "Blast_Neutron_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/S/Model_Asset/Old/blast_neutron_T2.red"
    },
    11242: {
      description: "Blast_Ion_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/XL/blast_ion_F.red"
    },
    11243: {
      description: "Blast_Ion_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/XL/blast_ion_T2.red"
    },
    11244: {
      description: "Rail_250mmDual_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/L/rail_250mmdual_F.red"
    },
    11245: {
      description: "Rail_250mmDual_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/L/rail_250mmdual_T2.red"
    },
    11246: {
      description: "Rail_350mm_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/L/rail_350mm_F.red"
    },
    11247: {
      description: "Rail_350mm_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/L/rail_350mm_T2.red"
    },
    11248: {
      description: "Rail_425mm_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/L/rail_425mm_F.red"
    },
    11249: {
      description: "Rail_425mm_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/L/rail_425mm_T2.red"
    },
    11250: {
      description: "Rail_150mmDual_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/M/rail_150mmdual_F.red"
    },
    11251: {
      description: "Rail_150mmDual_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/M/rail_150mmdual_T2.red"
    },
    11252: {
      description: "Rail_200mm_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/M/rail_200mm_F.red"
    },
    11253: {
      description: "Rail_200mm_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/M/rail_200mm_T2.red"
    },
    11254: {
      description: "Rail_250mm_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/M/rail_250mm_F.red"
    },
    11255: {
      description: "Rail_250mm_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/M/rail_250mm_T2.red"
    },
    11256: {
      description: "Rail_125mm_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/S/rail_125mm_F.red"
    },
    11257: {
      description: "Rail_125mm_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/S/rail_125mm_T2.red"
    },
    11258: {
      description: "Rail_150mm_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/S/rail_150mm_F.red"
    },
    11259: {
      description: "Rail_150mm_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/S/rail_150mm_T2.red"
    },
    11260: {
      description: "Rail_75mm_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/S/rail_75mm_F.red"
    },
    11261: {
      description: "Rail_75mm_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/S/rail_75mm_T2.red"
    },
    11262: {
      description: "Rail_1000mmDual_F",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/XL/rail_1000mmdual_F.red"
    },
    11263: {
      description: "Rail_1000mmDual_T2",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/XL/rail_1000mmdual_T2.red"
    },
    11264: {
      description: "DeepCore_F",
      graphicFile: "res:/dx9/model/Turret/Mining/Deep_Core/deepcore_F.red"
    },
    11265: {
      description: "DeepCore_T2",
      graphicFile: "res:/dx9/model/Turret/Mining/Deep_Core/deepcore_T2.red"
    },
    11266: {
      description: "Gas_F",
      graphicFile: "res:/dx9/model/Turret/Mining/Gas/gas_F.red"
    },
    11267: {
      description: "Gas_T2",
      graphicFile: "res:/dx9/model/Turret/Mining/Gas/gas_T2.red"
    },
    11268: {
      description: "Ice_F",
      graphicFile: "res:/dx9/model/Turret/Mining/Ice/ice_F.red"
    },
    11269: {
      description: "Ice_T2",
      graphicFile: "res:/dx9/model/Turret/Mining/Ice/ice_T2.red"
    },
    11270: {
      description: "Modulated_Strip_F",
      graphicFile: "res:/dx9/model/Turret/Mining/Modulated_Strip/modulated_strip_F.red"
    },
    11271: {
      description: "Modulated_Strip_T2",
      graphicFile: "res:/dx9/model/Turret/Mining/Modulated_Strip/modulated_strip_T2.red"
    },
    11272: {
      description: "Standard_F",
      graphicFile: "res:/dx9/model/Turret/Mining/Standard/standard_F.red"
    },
    11273: {
      description: "Standard_T2",
      graphicFile: "res:/dx9/model/Turret/Mining/Standard/standard_T2.red"
    },
    11274: {
      description: "Strip_F",
      graphicFile: "res:/dx9/model/Turret/Mining/Strip/strip_F.red"
    },
    11275: {
      description: "Strip_T2",
      graphicFile: "res:/dx9/model/Turret/Mining/Strip/strip_T2.red"
    },
    11276: {
      description: "Artil_1200mmHeavy_F",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/L/artil_1200mmHeavy_F.red"
    },
    11277: {
      description: "Artil_1200mmHeavy_T2",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/L/artil_1200mmHeavy_T2.red"
    },
    11278: {
      description: "Artil_1400mm_F",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/L/artil_1400mm_F.red"
    },
    3087: {
      description: "Gallente Freighter Wreck 1 (Obelisk Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Freighter/GFr1/Wreck/GFr1_T1_Wreck.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    11280: {
      description: "Artil_650mm_F",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/M/artil_650mm_F.red"
    },
    11281: {
      description: "Artil_650mm_T2",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/M/artil_650mm_T2.red"
    },
    11282: {
      description: "Artil_720mm_F",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/M/artil_720mm_F.red"
    },
    11283: {
      description: "Artil_720mm_T2",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/M/artil_720mm_T2.red"
    },
    11284: {
      description: "Artil_250mm_F",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/S/artil_250mm_F.red"
    },
    11285: {
      description: "Artil_250mm_T2",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/S/artil_250mm_T2.red"
    },
    11286: {
      description: "Artil_280mm_F",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/S/artil_280mm_F.red"
    },
    11287: {
      description: "Artil_280mm_T2",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/S/artil_280mm_T2.red"
    },
    11288: {
      description: "Artil_3500mmQuad_F",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/XL/artil_3500mmquad_F.red"
    },
    11289: {
      description: "Artil_3500mmQuad_T2",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/XL/artil_3500mmquad_T2.red"
    },
    11290: {
      description: "Auto_425mmDual_F",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/L/auto_425mmdual_F.red"
    },
    11291: {
      description: "Auto_425mmDual_T2",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/L/auto_425mmdual_T2.red"
    },
    11292: {
      description: "Auto_650mmDual_F",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/L/auto_650mmdual_F.red"
    },
    11293: {
      description: "Auto_650mmDual_T2",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/L/auto_650mmdual_T2.red"
    },
    11294: {
      description: "Auto_800mmHeavy_F",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/L/auto_800mmheavy_F.red"
    },
    11295: {
      description: "Auto_800mmHeavy_T2",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/L/auto_800mmheavy_T2.red"
    },
    11296: {
      description: "Auto_180mmDual_F",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/M/auto_180mmdual_F.red"
    },
    11297: {
      description: "Auto_180mmDual_T2",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/M/auto_180mmdual_T2.red"
    },
    11298: {
      description: "Auto_220mm_F",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/M/auto_220mm_F.red"
    },
    11299: {
      description: "Auto_220mm_T2",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/M/auto_220mm_T2.red"
    },
    11300: {
      description: "Auto_425mm_F",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/M/auto_425mm_F.red"
    },
    11301: {
      description: "Auto_425mm_T2",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/M/auto_425mm_T2.red"
    },
    11302: {
      description: "Auto_125mm_F",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/S/auto_125mm_F.red"
    },
    11303: {
      description: "Auto_125mm_T2",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/S/auto_125mm_T2.red"
    },
    11304: {
      description: "Auto_150mm_F",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/S/auto_150mm_F.red"
    },
    11305: {
      description: "Auto_150mm_T2",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/S/auto_150mm_T2.red"
    },
    11306: {
      description: "Auto_200mm_F",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/S/auto_200mm_F.red"
    },
    11307: {
      description: "Auto_200mm_T2",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/S/auto_200mm_T2.red"
    },
    11308: {
      description: "Auto_6x2500mm_F",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/XL/auto_6x2500mm_F.red"
    },
    11309: {
      description: "Auto_6x2500mm_T2",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/XL/auto_6x2500mm_T2.red"
    },
    11310: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_AmarrNavy.red"
    },
    11311: {
      description: "half_overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Amarr_Officer.red"
    },
    11312: {
      description: "half_overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Amarr_Story.red"
    },
    3121: {
      description: "Medium_Wreck_Gallente",
      graphicFile: "res:/dx9/model/shipwrecks/medium_wreck_gallente.red"
    },
    3122: {
      description: "Medium_Wreck_Minmatar",
      graphicFile: "res:/dx9/model/shipwrecks/medium_wreck_minmatar.red"
    },
    11315: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Amarr_T3.red"
    },
    11316: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Amarr_Utility.red"
    },
    11317: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Ammatar.red"
    },
    3126: {
      description: "Small_Wreck_minmatar",
      graphicFile: "res:/dx9/model/shipwrecks/small_wreck_minmatar.red"
    },
    11319: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Ardishapur.red"
    },
    11320: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Bloodraider.red",
      race: "Amarr"
    },
    11321: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_CaldariNavy.red"
    },
    11322: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Caldari_Officer.red"
    },
    11323: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Caldari_Story.red"
    },
    3132: {
      description: "Amarr Battleship Abaddon",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB3/AB3_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    3133: {
      description: "Amarr Battlecruiser Harbinger",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battlecruiser/ABc2/ABc2_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    3134: {
      description: "Minmatar Battleship Maelstrom",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/BattleShip/MB3/MB3_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    3135: {
      description: "Minmatar Battlecruiser Hurricane",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/BattleCruiser/MBC2/MBC2_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    11328: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_GallenteNavy.red"
    },
    11329: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Gallente_Officer.red"
    },
    11330: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Gallente_Story.red"
    },
    11331: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Gallente_T1.red"
    },
    11332: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Gallente_T2.red"
    },
    11333: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Gallente_T3.red"
    },
    11334: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Gallente_Utility.red"
    },
    11335: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Guristas.red",
      race: "Caldari"
    },
    11336: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Kador.red"
    },
    11337: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Khanid.red"
    },
    11338: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_KorAzor.red"
    },
    11339: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_MinmatarNavy.red"
    },
    11340: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Minmatar_Officer.red"
    },
    11341: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Minmatar_Story.red"
    },
    11342: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Minmatar_T1.red"
    },
    11343: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Minmatar_T2.red"
    },
    11344: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Minmatar_T3.red"
    },
    11345: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Minmatar_Utility.red"
    },
    11346: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_ORE_T1.red"
    },
    11347: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_ORE_T2.red"
    },
    11348: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Republic.red"
    },
    11349: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Sansha.red"
    },
    11350: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Sarum.red",
      race: "Amarr"
    },
    11351: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Serpentis.red",
      race: "Gallente"
    },
    11352: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_SOCT.red"
    },
    11353: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Syndicate.red"
    },
    11354: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_TashMurkon.red"
    },
    11355: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Floor/Floor_01_Gal_Base.red"
    },
    11356: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Floor/Floor_02_Gal_Base.red"
    },
    11357: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Floor/Stair_01_Gal_01.red"
    },
    11358: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_01_02_17_Gal_Combo_01.red"
    },
    11359: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_01_Gal_Base.red"
    },
    3168: {
      description: "Gallente BattleCruiser Myrmidon",
      graphicFile: "res:/dx9/model/ship/gallente/BattleCruiser/GBc2/GBc2_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    3169: {
      description: "Caldari Battlecruiser Drake",
      graphicFile: "res:/dx9/model/ship/caldari/BattleCruiser/CBc2/CBc2_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    3170: {
      description: "Caldari Battleship Rokh",
      graphicFile: "res:/dx9/model/ship/caldari/BattleShip/CB3/CB3_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    3204: {
      description: "Caldari Battleship State Raven State Issue (Raven Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/BattleShip/CB1/State/CB1_T1_State.red",
      colorScheme: "TurretPreset_State",
      race: "Caldari"
    },
    3206: {
      description: "Tournament Bubble (Used as the centre point for the arena)"
    },
    3207: {
      description: "Gallente Battleship Hyperion",
      graphicFile: "res:/dx9/model/ship/gallente/Battleship/GB3/GB3_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    11400: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_07Mirror_Gal_Base.red"
    },
    11401: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Appliance_Screen_Center_01_Min/Appliance_Screen_Center_01_Min.red"
    },
    11402: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Appliance_Screen_Left_01_Min/Appliance_Screen_Left_01_Min.red"
    },
    11403: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Appliance_Screen_Right_01_Min/Appliance_Screen_Right_01_Min.red"
    },
    11404: {
      description: "not_overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Aliastra.red"
    },
    11405: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Brutor.red"
    },
    11406: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_CreoDron.red"
    },
    11407: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Duvolle.red"
    },
    11408: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_InnerZone.red"
    },
    11409: {
      description: "half_overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Ishukone.red"
    },
    3218: {
      description: "Red Harvestable Cloud - Unknown",
      graphicFile: "res:/dx9/model/worldobject/cloud/booster/cloud5.red"
    },
    3219: {
      description: "Purple Harvestable Cloud - Unknown",
      graphicFile: "res:/dx9/model/worldobject/cloud/booster/cloud8.red"
    },
    3220: {
      description: "Blue Harvestable Cloud - Unknown",
      graphicFile: "res:/dx9/model/worldobject/cloud/booster/cloud7.red"
    },
    3221: {
      description: "Aqua Harvestable Cloud - Unknown",
      graphicFile: "res:/dx9/model/worldobject/cloud/booster/cloud6.red"
    },
    3222: {
      description: "Lime Harvestable Cloud - Unknown",
      graphicFile: "res:/dx9/model/worldobject/cloud/booster/cloud3.red"
    },
    3223: {
      description: "Green Harvestable Cloud - Unknown",
      graphicFile: "res:/dx9/model/worldobject/cloud/booster/cloud4.red"
    },
    3224: {
      description: "Yellow Harvestable Cloud - Unknown",
      graphicFile: "res:/dx9/model/worldobject/cloud/booster/cloud2.red"
    },
    3225: {
      description: "Orange Harvestable Cloud - Unknown",
      graphicFile: "res:/dx9/model/worldobject/cloud/booster/cloud1.red"
    },
    11418: {
      description: "not_overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Roden.red"
    },
    11419: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Sebiestor.red",
      race: "Minmatar"
    },
    11420: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Starkmanir.red"
    },
    11421: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_State.red"
    },
    11422: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Justice.red"
    },
    11423: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Vherokior.red"
    },
    11424: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Wiyrkomi.red"
    },
    11425: {
      description: "not_overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Thukker.red",
      race: "Minmatar"
    },
    11460: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_RogueDrone.red"
    },
    11461: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Sleeper.red"
    },
    11462: {
      description: "half_overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Concord.red"
    },
    3284: {
      description: "as_4",
      graphicFile: "res:/dx9/model/worldobject/wrecks/as_4.red"
    },
    3287: {
      description: "gsM3",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gsm3.red"
    },
    3288: {
      description: "MS_Tradepost_larger.b",
      graphicFile: "res:/dx9/model/worldobject/wrecks/ms_tradepost_larger.red"
    },
    3289: {
      description: "Angel_Domination_Tower_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/angel_domination_tower_final.red",
      race: "Angel"
    },
    3290: {
      description: "Angel_Tower_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/angel_tower_final.red",
      race: "Angel"
    },
    3291: {
      description: "Bloodraider_Dark_Tower_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/bloodraider_dark_tower_final.red",
      race: "Amarr"
    },
    3292: {
      description: "Bloodraider_Tower_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/bloodraider_tower_final.red",
      race: "Amarr"
    },
    3293: {
      description: "Guristas_Dread_Tower__Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/guristas_dread_tower__final.red",
      race: "Caldari"
    },
    3297: {
      description: "Serpentis_Guardian_Tower_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/serpentis_guardian_tower_final.red",
      race: "Gallente"
    },
    3298: {
      description: "Serpentis_Tower_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/serpentis_tower_final.red",
      race: "Gallente"
    },
    11504: {
      description: "CombatDrone_Amarr_T1",
      graphicFile: "res:/dx9/model/turret/Drone/CombatDrone_Amarr_T1.red"
    },
    11505: {
      description: "CombatDrone_Caldari_T1",
      graphicFile: "res:/dx9/model/turret/Drone/CombatDrone_Caldari_T1.red"
    },
    11506: {
      description: "CombatDrone_Gallente_T1",
      graphicFile: "res:/dx9/model/turret/Drone/CombatDrone_Gallente_T1.red"
    },
    11507: {
      description: "CombatDrone_Generic_T1",
      graphicFile: "res:/dx9/model/turret/Drone/CombatDrone_Generic_T1.red"
    },
    11508: {
      description: "CombatDrone_Minmatar_T1",
      graphicFile: "res:/dx9/model/turret/Drone/CombatDrone_Minmatar_T1.red"
    },
    11509: {
      description: "CombatUtil_EnergyNeuralizer_T1",
      graphicFile: "res:/dx9/model/turret/Drone/CombatUtil_EnergyNeuralizer_T1.red"
    },
    11510: {
      description: "CombatUtil_Webifier_T1",
      graphicFile: "res:/dx9/model/turret/Drone/CombatUtil_Webifier_T1.red"
    },
    11511: {
      description: "EWarDrone_ECM_T1",
      graphicFile: "res:/dx9/model/turret/Drone/EWarDrone_ECM_T1.red"
    },
    11512: {
      description: "EWarDrone_SensorDampener_T1",
      graphicFile: "res:/dx9/model/turret/Drone/EWarDrone_SensorDampener_T1.red"
    },
    11514: {
      description: "EWarDrone_TrackingDisruptor_T1",
      graphicFile: "res:/dx9/model/turret/Drone/EWarDrone_TrackingDisruptor_T1.red"
    },
    11521: {
      description: "MinigDrone_T1",
      graphicFile: "res:/dx9/model/turret/Drone/MiningDrone_T1.red"
    },
    11536: {
      description: "Caldari Battleship Ishukone Scorpion Ishukone Watch (Scorpion Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/BattleShip/CB2/Ishukone/CB2_T1_Ishukone.red",
      colorScheme: "TurretPreset_Ishukone",
      race: "Caldari"
    },
    3350: {
      description: "Gallente Battleship CreoDron Sin (Dominix Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Battleship/GB1/CreoDron/GB1_T2_CreoDron.red",
      colorScheme: "TurretPreset_CreoDron",
      race: "Gallente"
    },
    3351: {
      description: "Amarr Battleship Sarum Paladin (Apocalypse Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB1/Sarum/AB1_T2_Sarum.red",
      colorScheme: "TurretPreset_Sarum",
      race: "Amarr"
    },
    3352: {
      description: "Caldari Battleship LaiDai Golem (Raven Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/BattleShip/CB1/LaiDai/CB1_T2_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    3353: {
      description: "Gallente Battleship Duvolle Kronos (Megathron Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Battleship/GB2/Duvolle/GB2_T2_Duvolle.red",
      colorScheme: "TurretPreset_Duvolle",
      race: "Gallente"
    },
    3354: {
      description: "Minmatar Battleship Brutor Vargur (Tempest Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/BattleShip/MB2/Brutor/MB2_T2_Brutor.red",
      colorScheme: "TurretPreset_Brutor",
      race: "Minmatar"
    },
    3355: {
      description: "Minmatar Battleship Thukker Panther (Typhoon Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/BattleShip/MB1/Thukker/MB1_T2b_Thukker.red",
      colorScheme: "TurretPreset_Thukker",
      race: "Minmatar"
    },
    3356: {
      description: "Amarr Battleship Ardishapur Redeemer (Armageddon Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB2/Ardishapur/AB2_T2_Ardishapur.red",
      colorScheme: "TurretPreset_Ardishapur",
      race: "Amarr"
    },
    3357: {
      description: "Amarr Jump Freighter Ark",
      graphicFile: "res:/dx9/model/ship/amarr/Freighter/aFr1/sarum/afr1_t2_sarum.red",
      colorScheme: "TurretPreset_Sarum",
      race: "Amarr"
    },
    3359: {
      description: "Gallente Jump Freighter CreoDron Anshar",
      graphicFile: "res:/dx9/model/ship/gallente/Freighter/GFr1/CreoDron/GFr1_T2_CreoDron.red",
      colorScheme: "TurretPreset_CreoDron",
      race: "Gallente"
    },
    3360: {
      description: "Minmatar Jump Freighter Thukker",
      graphicFile: "res:/dx9/model/ship/minmatar/Freighter/mFr1/thukker/mfr1_t2_thukker.red",
      colorScheme: "TurretPreset_Thukker",
      race: "Minmatar"
    },
    3362: {
      description: "Caldari Cruiser Kaalakiota Onyx (Moa Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC2/Kaalakiota/CC2_T2a_Kaalakiota.red",
      colorScheme: "TurretPreset_Kaalakiota",
      race: "Caldari"
    },
    3363: {
      description: "Amarr Cruiser Ardishapur Devoter (Maller Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Cruiser/AC2/Ardishapur/AC2_T2b_Ardishapur.red",
      colorScheme: "TurretPreset_Ardishapur",
      race: "Amarr"
    },
    3364: {
      description: "Caldari Frigate LaiDai Kitsune (Griffin Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF4/LaiDai/CF4_T2_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    3365: {
      description: "Amarr Frigate Ardishapur Sentinel (Crucifier Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF2/Ardishapur/AF2_T2_Ardishapur.red",
      colorScheme: "TurretPreset_Ardishapur",
      race: "Amarr"
    },
    3366: {
      description: "Corpse Female - Corpse Female",
      graphicFile: "res:/dx9/model/face/fullbody_char/corpses/corpse_female01.red"
    },
    3367: {
      description: "Amarr Frigate Magnate",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF7/AF7_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    3368: {
      description: "Station: Caldari 1 Wrecked - Wrecked Caldari Station 1",
      graphicFile: "res:/dx9/model/station/caldari/cs1_wrecked/cs1_wrecked.red",
      race: "Caldari"
    },
    3378: {
      description: "cb1_wreck_body",
      graphicFile: "res:/dx9/model/shipwrecks/caldari/cb1/cb1_wreck_body.red",
      race: "Caldari"
    },
    3379: {
      description: "cb1_wreck_wing",
      graphicFile: "res:/dx9/model/shipwrecks/caldari/cb1/cb1_wreck_wing.red",
      race: "Caldari"
    },
    3380: {
      description: "cb2_wreck_bottom",
      graphicFile: "res:/dx9/model/shipwrecks/caldari/cb2/cb2_wreck_bottom.red",
      race: "Caldari"
    },
    3113: {
      description: "Minmatar Freighter Wreck 1 (Fenrir Hull)",
      graphicFile: "res:/dx9/model/ship/Minmatar/Freighter/MFr1/Wreck/MFr1_T1_Wreck.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    3382: {
      description: "cb2_wreck_midsection",
      graphicFile: "res:/dx9/model/shipwrecks/caldari/cb2/cb2_wreck_midsection.red",
      race: "Caldari"
    },
    3383: {
      description: "gb2_wreck_front",
      graphicFile: "res:/dx9/model/shipwrecks/gallente/gb2/gb2_wreck_front.red",
      race: "Gallente"
    },
    3295: {
      description: "Sansha_Tower_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/sansha_tower_final.red",
      race: "Sansha"
    },
    3388: {
      description: "mb2_shipwreck_rear",
      graphicFile: "res:/dx9/model/shipwrecks/minmatar/mb2/mb2_shipwreck_rear.red",
      race: "Minmatar"
    },
    3389: {
      description: "mdr1_wreck_bottom",
      graphicFile: "res:/dx9/model/shipwrecks/minmatar/mdr1/mdr1_wreck_bottom.red",
      race: "Minmatar"
    },
    3390: {
      description: "mdr1_wreck_top",
      graphicFile: "res:/dx9/model/shipwrecks/minmatar/mdr1/mdr1_wreck_top.red",
      race: "Minmatar"
    },
    3391: {
      description: "as_hub_damaged",
      graphicFile: "res:/dx9/model/station/amarr/as_hub_damaged.red",
      race: "Amarr"
    },
    3392: {
      description: "as_millitary_damaged",
      graphicFile: "res:/dx9/model/station/amarr/as_millitary_damaged.red",
      race: "Amarr"
    },
    3296: {
      description: "Sansha_True_Tower_Final",
      graphicFile: "res:/dx9/model/deployables/finaldeployables/sansha_true_tower_final.red",
      race: "Sansha"
    },
    3394: {
      description: "cs1_construction",
      graphicFile: "res:/dx9/model/station/caldari/cs1_construction/cs1_construction.red",
      race: "Caldari"
    },
    3395: {
      description: "ConHQ_wrecked",
      graphicFile: "res:/dx9/model/station/concord/wrecked/conhq_wrecked.red",
      race: "Concord"
    },
    11588: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Wall/Wall_08_Ama_Base.red"
    },
    11589: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Wall/Wall_09_Ama_Base.red"
    },
    11590: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Wall/Wall_10_Ama_Base.red"
    },
    11489: {
      graphicFile: "res:/Graphics/Interior/Caldari/Modular_Floor/Stair_01_Cal_Base.red"
    },
    11592: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Wall/Wall_14_Ama_Base.red"
    },
    11593: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Wall/Wall_15_Ama_Base.red"
    },
    11594: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Ceiling/Ceiling_01_Ama_Base.red"
    },
    11595: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Ceiling/Ceiling_02_Ama_Base.red"
    },
    11596: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Ceiling/Ceiling_03_04_09_Ama_Combo.red"
    },
    11490: {
      graphicFile: "res:/Graphics/Interior/Caldari/Modular_Floor/Stair_02_Cal_Base.red"
    },
    11598: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Ceiling/Ceiling_08_10_Ama_Combo.red"
    },
    11599: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Ceiling/Ceiling_12_13_14_Ama_Combo.red"
    },
    11600: {
      graphicFile: "res:/Graphics/Placeable/Amarr/Door_02_Ama/Door_02_Ama.red"
    },
    11601: {
      graphicFile: "res:/Graphics/Placeable/Amarr/Door_01_Ama/Door_01_Ama.red"
    },
    11602: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Walkway/Walkway_06_Gal_Base.red"
    },
    3114: {
      description: "Minmatar Titan Wreck 1 (Ragnarok Hull)",
      graphicFile: "res:/dx9/model/ship/Minmatar/Titan/MT1/Wreck/MT1_T1_Wreck.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    11604: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Bar_Floor.red"
    },
    11605: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Bar_Walls.red"
    },
    11606: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Corridor_Ceiling.red"
    },
    11607: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Corridor_Floor.red"
    },
    11608: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Corridor_Walls.red"
    },
    11609: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Entrance_Ceiling.red"
    },
    11610: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Entrance_Floor.red"
    },
    11611: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Entrance_Walls.red"
    },
    11612: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/SlayRoom_Ceiling.red"
    },
    11613: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/SlayRoom_Floor.red"
    },
    11614: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/SlayRoom_Walls.red"
    },
    11615: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Bar_Ceiling_Small.red"
    },
    3424: {
      description: "Amarr Frigate Khanid Anathema (Magnate Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF7/Khanid/AF7_T2_Khanid.red",
      colorScheme: "TurretPreset_Khanid",
      race: "Amarr"
    },
    11617: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Bar_Walls_Small.red"
    },
    11618: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Corridor_Ceiling_Small.red"
    },
    11619: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Corridor_Floor_Small.red"
    },
    11620: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Corridor_Walls_Small.red"
    },
    11621: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Entrance_Ceiling_Small.red"
    },
    11622: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Entrance_Floor_Small.red"
    },
    11623: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Entrance_Walls_Small.red"
    },
    11624: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/SlayRoom_Ceiling_Small.red"
    },
    11625: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/SlayRoom_Floor_Small.red"
    },
    11626: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/SlayRoom_Walls_Small.red"
    },
    11628: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Walkway/Walkway_01_Ama.red"
    },
    11629: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Walkway/Walkway_02_Ama.red"
    },
    11630: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Walkway/Walkway_03_Ama.red"
    },
    11631: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Walkway/Walkway_04_Ama.red"
    },
    11632: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Walkway/Walkway_05_Ama.red"
    },
    3115: {
      description: "Large_Wreck_Amarr",
      graphicFile: "res:/dx9/model/shipwrecks/large_wreck_amarr.red"
    },
    11634: {
      graphicFile: "res:/Graphics/Placeable/TestAssets/Avatar7kTris_Standard.red"
    },
    11636: {
      graphicFile: "res:/Graphics/Placeable/TestAssets/Barcounter_Standard.red"
    },
    11638: {
      graphicFile: "res:/Graphics/Placeable/TestAssets/Chair_Standard.red"
    },
    11497: {
      graphicFile: "res:/Graphics/Interior/Caldari/Modular_Wall/Wall_01_Cal_Closed_Base.red"
    },
    11642: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Walkway/Walkway_PipesLeft.red"
    },
    11643: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Walkway/Walkway_PipesRight.red"
    },
    11498: {
      graphicFile: "res:/Graphics/Interior/Caldari/Modular_Wall/Wall_01_Cal_Open_Base.red"
    },
    3456: {
      description: "Caldari Jumpgate (Border Stargate)",
      graphicFile: "res:/dx9/model/jumpgate/caldari/cbg/cbg.red",
      race: "Caldari"
    },
    3457: {
      description: "Amarr Jumpgate ( Highway Stargate )",
      graphicFile: "res:/dx9/model/JumpGate/Amarr/ahg/ahg.red",
      race: "Amarr"
    },
    3458: {
      description: "Amarr Jumpgate ( Small Stargate )",
      graphicFile: "res:/dx9/model/JumpGate/Amarr/asmg/asmg.red",
      race: "Amarr"
    },
    3459: {
      description: "Caldari Jumpgate (Highway Stargate)",
      graphicFile: "res:/dx9/model/JumpGate/Caldari/chg/chg.red",
      race: "Caldari"
    },
    3460: {
      description: "Amarr Jumpgate ( Border Stargate )",
      graphicFile: "res:/dx9/model/JumpGate/Amarr/abg/abg.red",
      race: "Amarr"
    },
    3461: {
      description: "Gallente Jumpgate (Border Stargate)",
      graphicFile: "res:/dx9/model/JumpGate/Gallente/gbg/gbg.red",
      race: "Gallente"
    },
    3462: {
      description: "Minmatar Jumpgate (Highway Stargate)",
      graphicFile: "res:/dx9/model/JumpGate/Minmatar/mhg/mhg.red",
      race: "Minmatar"
    },
    3463: {
      description: "Minmatar Jumpgate (Small Stargate)",
      graphicFile: "res:/dx9/model/JumpGate/Minmatar/msmg/msmg.red",
      race: "Minmatar"
    },
    3464: {
      description: "Minmatar Jumpgate (Border Stargate)",
      graphicFile: "res:/dx9/model/JumpGate/Minmatar/mbg/mbg.red",
      race: "Minmatar"
    },
    3465: {
      description: "Smuggler Jumpgate (Standard Gate)",
      graphicFile: "res:/dx9/model/jumpgate/smuggler/ssg/ssg.red",
      race: "Generic"
    },
    3466: {
      description: "ORE Orca",
      graphicFile: "res:/dx9/model/ship/ore/orca/orca_T1.red",
      colorScheme: "TurretPreset_ORE_T1",
      race: "ORE"
    },
    11659: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Floor/Stairs_02_03_Gal_Combol_01.red"
    },
    3468: {
      description: "Warpgate2",
      graphicFile: "res:/dx9/model/worldobject/acceleration_gate/accelerationgate.red"
    },
    11661: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Floor/Stairs_02_Gal_Combo_01.red"
    },
    11662: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_01_02_05_39_Gal_Combo_01.red"
    },
    11663: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_02_03_15_16_Gal_Combo_01.red"
    },
    11664: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_07_10_11_32_Gal_Combo_01.red"
    },
    11665: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_07_10_11_55_Gal_Combo_01.red"
    },
    11666: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_07_11_12_32_Gal_Combo_01.red"
    },
    11667: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_07_21_22_23_Gal_Combo_01.red"
    },
    11668: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_07_55_56_Gal_Combo_01.red"
    },
    11669: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_08_09_12a_32_Gal_Combo_01.red"
    },
    11670: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_08_09_12a_32Mirror_Gal_Combo_01.red"
    },
    11671: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_10_11_55_56_Gal_Combo_01.red"
    },
    3480: {
      description: "ORE Wreck (Orca Hull)",
      graphicFile: "res:/dx9/model/ship/ore/orca/wreck/Orca_T1_wreck.red",
      colorScheme: "TurretPreset_ORE_T1",
      race: "ORE"
    },
    11673: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_11_12_32_39_55_Gal_Combo_01.red"
    },
    11674: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_11_32_39_55_Gal_Combo_01.red"
    },
    11675: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_15_39_55_Gal_Combo_01.red"
    },
    11676: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_27_28_29_Gal_Combo_01.red"
    },
    11677: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_31_39_57_Gal_Combo_01.red"
    },
    11678: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_33_34_37_38_50_52_Gal_Combo_01.red"
    },
    11679: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Wall_55_56_Gal_Combo_01.red"
    },
    11573: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Floor/Floor_01_Ama_Base.red"
    },
    11690: {
      graphicFile: "res:/Graphics/Placeable/Gallente/Slay_Table_01_Gal/Slay_Table_01_Gal.red"
    },
    11846: {
      graphicFile: "res:/dx9/scene/Universe/m10_cube.red"
    },
    11865: {
      description: "Caldari Cruiser LaiDai Basilisk (Osprey Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC1/LaiDai/CC1_T2_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    11701: {
      graphicFile: "res:/Graphics/Placeable/TestAssets/LightMesh/LightMesh.red"
    },
    11702: {
      graphicFile: "res:/Graphics/Placeable/Gallente/Slay_InformationUI_Gal/Slay_InformationUI_Gal.red"
    },
    11703: {
      graphicFile: "res:/Graphics/Placeable/Gallente/Slay_PlayerUI_Gal/Slay_PlayerUI_Gal.red"
    },
    11704: {
      graphicFile: "res:/Graphics/Placeable/Gallente/Slay_TableUI_Gal/Slay_TableUI_Gal.red"
    },
    3515: {
      description: "Unknown",
      graphicFile: "res:/dx9/model/worldobject/testmodel/amrra_arena.red"
    },
    3516: {
      description: "Sleeper Battleship 1",
      graphicFile: "res:/dx9/Model/Ship/Sleeper/Battleship/SLBS1/SLBS1_T1.red",
      colorScheme: "TurretPreset_Sleeper",
      race: "Sleeper"
    },
    3517: {
      description: "Sleeper Station 1 variation 1 - Sleeper Station 1 variation 1",
      graphicFile: "res:/dx9/model/station/sleeper/sl_station01/sl_station01_v1/sl_station01_v1.red",
      race: "Sleeper"
    },
    3518: {
      description: "Sleeper Station 1 variation 2 - Sleeper Station 1 variation 2",
      graphicFile: "res:/dx9/model/station/sleeper/sl_station01/sl_station01_v2/sl_station01_v2.red",
      race: "Sleeper"
    },
    3519: {
      description: "Sleeper Station 1 variation 3 - Sleeper Station 1 variation 3",
      graphicFile: "res:/dx9/model/station/sleeper/sl_station01/sl_station01_v3/sl_station01_v3.red",
      race: "Sleeper"
    },
    3520: {
      description: "Sleeper Station 1 variation 4 - Sleeper Station 1 variation 4",
      graphicFile: "res:/dx9/model/station/sleeper/sl_station01/sl_station01_v4/sl_station01_v4.red",
      race: "Sleeper"
    },
    3521: {
      description: "Sleeper Station 1 variation 5 - Sleeper Station 1 variation 5",
      graphicFile: "res:/dx9/model/station/sleeper/sl_station01/sl_station01_v5/sl_station01_v5.red",
      race: "Sleeper"
    },
    3522: {
      description: "Talocan Station 1 variation 1 - Talocan Station 1 variation 1",
      graphicFile: "res:/dx9/model/station/talocan/ta_station01/ta_station01_v1/ta_station01_v1.red",
      race: "Talocan"
    },
    3523: {
      description: "Talocan Station 1 variation 2 - Talocan Station 1 variation 2",
      graphicFile: "res:/dx9/model/station/talocan/ta_station01/ta_station01_v2/ta_station01_v2.red",
      race: "Talocan"
    },
    3524: {
      description: "Talocan Station 1 variation 3 - Talocan Station 1 variation 3",
      graphicFile: "res:/dx9/model/station/talocan/ta_station01/ta_station01_v3/ta_station01_v3.red",
      race: "Talocan"
    },
    3525: {
      description: "Talocan Station 1 variation 4 - Talocan Station 1 variation 4",
      graphicFile: "res:/dx9/model/station/talocan/ta_station01/ta_station01_v4/ta_station01_v4.red",
      race: "Talocan"
    },
    3526: {
      description: "Talocan Station 1 variation 5 - Talocan Station 1 variation 5",
      graphicFile: "res:/dx9/model/station/talocan/ta_station01/ta_station01_v5/ta_station01_v5.red",
      race: "Talocan"
    },
    3527: {
      description: "Sleeper Destroyer 1",
      graphicFile: "res:/dx9/Model/Ship/Sleeper/Destroyer/SLDE1/SLDE1_T1.red",
      colorScheme: "TurretPreset_Sleeper",
      race: "Sleeper"
    },
    3528: {
      description: "Sleeper Frigate 1",
      graphicFile: "res:/dx9/Model/Ship/Sleeper/Frigate/SLF1/SLF1_T1.red",
      colorScheme: "TurretPreset_Sleeper",
      race: "Sleeper"
    },
    3529: {
      description: "Talocan Battleship 1 L=1200m - Talocan Battleship 1",
      graphicFile: "res:/dx9/model/ship/talocan/battleship/ta_b1/ta_b1.red",
      race: "Talocan"
    },
    3530: {
      description: "Talocan Cruiser 1  L=505m - TalocanCruiser",
      graphicFile: "res:/dx9/model/ship/talocan/cruiser/ta_c1/ta_c1.red",
      race: "Talocan"
    },
    3531: {
      description: "Talocan Destroyer 1 L=320m - Talocan Destroyer 1",
      graphicFile: "res:/dx9/model/ship/talocan/destroyer/ta_d1/ta_d1.red",
      race: "Talocan"
    },
    3532: {
      description: "Talocan Frigate 1 L=120m - Talocan Frigate 1",
      graphicFile: "res:/dx9/model/ship/talocan/frigate/ta_f1/ta_f1.red",
      race: "Talocan"
    },
    3533: {
      description: "Sleeper Sentry gun 1 - Sleeper Sentry gun",
      graphicFile: "res:/dx9/model/sentry/sleeper/sl_sentry/sl_s1/sl_s1.red",
      race: "Sleeper"
    },
    3534: {
      description: "Defenses Talocan Generic Linkage Structure 1 - Talocan Generic Linkage Structure 1",
      graphicFile: "res:/dx9/model/worldobject/defenses/talocan/ta_linkagestructure/ta_ls1/ta_ls1.red",
      race: "Talocan"
    },
    3535: {
      description: "Sleeper generic linkage structure 1 - Sleeper generic linkage structure 1",
      graphicFile: "res:/dx9/model/worldobject/defenses/sleeper/sl_linkagestructure/sl_ls1/sl_ls1.red",
      race: "Sleeper"
    },
    3536: {
      description: "Sleeper Cruiser 1",
      graphicFile: "res:/dx9/Model/Ship/Sleeper/Cruiser/SLC1/SLC1_T1.red",
      colorScheme: "TurretPreset_Sleeper",
      race: "Sleeper"
    },
    3537: {
      description: "Arena_GA_MainStructure",
      graphicFile: "res:/dx9/model/worldobject/arena_ga_mainstructures/arena_ga_mainstructures.red"
    },
    3538: {
      description: "Arena_CA_MainStructure",
      graphicFile: "res:/dx9/model/worldobject/arena_ca_mainstructures/arena_ca_mainstructure.red"
    },
    11731: {
      graphicFile: "res:/Graphics/Interior/Testscenes/Lighttest/Test_Hard_02.red"
    },
    11732: {
      graphicFile: "res:/Graphics/Interior/Testscenes/Lighttest/Test_Soft_01.red"
    },
    11733: {
      graphicFile: "res:/Graphics/Interior/Testscenes/Lighttest/Test_Soft_02.red"
    },
    11734: {
      graphicFile: "res:/Graphics/Interior/Testscenes/Lighttest/Test_Split_01.red"
    },
    11513: {
      description: "EWarDrone_TargetPainter_T1",
      graphicFile: "res:/dx9/model/turret/Drone/EWarDrone_TargetPainter_T1.red"
    },
    11736: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Ceiling/Ceiling_05_Min_Base.red"
    },
    11737: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Ceiling/Ceiling_06_Min_Base.red"
    },
    11738: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Ceiling/Ceiling_07_Min_Base.red"
    },
    11739: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Ceiling/Ceiling_08_Min_Base.red"
    },
    11740: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Ceiling/Ceiling_09_Min_Base.red"
    },
    11741: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Ceiling/Ceiling_10_Min_Base.red"
    },
    11742: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Ceiling/Ceiling_11_Min_Base.red"
    },
    11743: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Ceiling/Ceiling_12_Min_Base.red"
    },
    11744: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Ceiling/Ceiling_13_Min_Base.red"
    },
    11745: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Ceiling/Ceiling_14_Min_Base.red"
    },
    11746: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Ceiling/Ceiling_15_Min_Base.red"
    },
    11747: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Floor/Floor_Grate_01_Base.red"
    },
    11748: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Floor/Floor_Grate_02_Base.red"
    },
    11749: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Floor/Floor_Grate_03_Base.red"
    },
    11750: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Floor/Floor_Grate_04_Base.red"
    },
    3559: {
      description: "Sleeper Battleship 2",
      graphicFile: "res:/dx9/Model/Ship/Sleeper/Battleship/SLBS2/SLBS2_T1.red",
      colorScheme: "TurretPreset_Sleeper",
      race: "Sleeper"
    },
    3560: {
      description: "Sleeper Frigate 2",
      graphicFile: "res:/dx9/Model/Ship/Sleeper/Frigate/SLF2/SLF2_T1.red",
      colorScheme: "TurretPreset_Sleeper",
      race: "Sleeper"
    },
    3561: {
      description: "Talocan Station 2 variation 1 - Talocan Station 2 variation 1",
      graphicFile: "res:/dx9/model/station/talocan/ta_station02/ta_station02_v1/ta_station02_v1.red",
      race: "Talocan"
    },
    11754: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Floor/Floor_Grate_08_Base.red"
    },
    11755: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Floor/Floor_Grate_09_Base.red"
    },
    11756: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Floor/Stair_01_Min_03.red"
    },
    11757: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Floor/Stair_01_Min_04.red"
    },
    11758: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Floor/Stair_01_Min_05.red"
    },
    3567: {
      description: "Sleeper Engineering Station 1 - Sleeper Engineering Station 1",
      graphicFile: "res:/dx9/model/outposts/sleeper/sl_engineeringstation/sl_es1/sl_es1.red",
      race: "Sleeper"
    },
    3568: {
      description: "Talocan Engineering Station 1 - Talocan Engineering Station 1",
      graphicFile: "res:/dx9/model/outposts/talocan/ta_engineeringstation/ta_es1/ta_es1.red",
      race: "Talocan"
    },
    3569: {
      description: "Talocan Tower Structure 1 - Talocan Tower Structure 1",
      graphicFile: "res:/dx9/model/outposts/talocan/ta_towerstructure/ta_ts1/ta_ts1.red",
      race: "Talocan"
    },
    3570: {
      description: "Talocan Station 2 variation 2 - Talocan Station 2 variation 2",
      graphicFile: "res:/dx9/model/station/talocan/ta_station02/ta_station02_v2/ta_station02_v2.red",
      race: "Talocan"
    },
    11763: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Walkway/Walkway_Gal_Base.red"
    },
    3572: {
      description: "Talocan Station 2 variation 3 - Talocan Station 2 variation 3",
      graphicFile: "res:/dx9/model/station/talocan/ta_station02/ta_station02_v3/ta_station02_v3.red",
      race: "Talocan"
    },
    3573: {
      description: "Talocan Station 2 variation 4 - Talocan Station 2 variation 4",
      graphicFile: "res:/dx9/model/station/talocan/ta_station02/ta_station02_v4/ta_station02_v4.red",
      race: "Talocan"
    },
    3574: {
      description: "Talocan Station 2 variation 5 - Talocan Station 2 variation 5",
      graphicFile: "res:/dx9/model/station/talocan/ta_station02/ta_station02_v5/ta_station02_v5.red",
      race: "Talocan"
    },
    3575: {
      description: "Talocan  Acceleration Gate 1 - Talocan  Acceleration Gate 1",
      graphicFile: "res:/dx9/model/worldobject/talocan/ta_accelerationgate/ta_ag1/ta_ag1.red",
      race: "Talocan"
    },
    3576: {
      description: "Universal objects under contrustion 1 - Universal objects under contrustion 1",
      graphicFile: "res:/dx9/model/worldobject/universal/u_objectsunderconstruction/u_ouc1/u_ouc1.red"
    },
    3577: {
      description: "Universal objects under contrustion 2 - Universal objects under contrustion 2",
      graphicFile: "res:/dx9/model/worldobject/universal/u_objectsunderconstruction/u_ouc2/u_ouc2.red"
    },
    3578: {
      description: "Universal objects under contrustion 3 - Universal objects under contrustion 3",
      graphicFile: "res:/dx9/model/worldobject/universal/u_objectsunderconstruction/u_ouc3/u_ouc3.red"
    },
    3579: {
      description: "Universal objects under contrustion 4 - Universal objects under contrustion 4",
      graphicFile: "res:/dx9/model/worldobject/universal/u_objectsunderconstruction/u_ouc4/u_ouc4.red"
    },
    3580: {
      description: "Universal objects under contrustion 5 - Universal objects under contrustion 5",
      graphicFile: "res:/dx9/model/worldobject/universal/u_objectsunderconstruction/u_ouc5/u_ouc5.red"
    },
    3581: {
      description: "Universal  Scaffold 1 - Universal  Scaffold 1",
      graphicFile: "res:/dx9/model/worldobject/universal/u_scaffold/u_s1/u_s1.red"
    },
    3582: {
      description: "Universal  Scaffold 2 - Universal  Scaffold 2",
      graphicFile: "res:/dx9/model/worldobject/universal/u_scaffold/u_s2/u_s2.red"
    },
    3583: {
      description: "Universal  Scaffold 3 - Universal  Scaffold 3",
      graphicFile: "res:/dx9/model/worldobject/universal/u_scaffold/u_s3/u_s3.red"
    },
    3584: {
      description: "Universal  Scaffold 4 - Universal  Scaffold 4",
      graphicFile: "res:/dx9/model/worldobject/universal/u_scaffold/u_s4/u_s4.red"
    },
    3585: {
      description: "Sleeper Drone Bunker 1 - Sleeper Drone Bunker 1",
      graphicFile: "res:/dx9/model/worldobject/defenses/sleeper/sl_dronebunker/sl_db1/sl_db1.red",
      race: "Sleeper"
    },
    3586: {
      description: "Arena_GA_SmallStructure",
      graphicFile: "res:/dx9/model/worldobject/arena_ga_mainstructures/arena_ga_smallstructures.red"
    },
    3587: {
      description: "Arena_CA_SmallStructures",
      graphicFile: "res:/dx9/model/worldobject/arena_ca_mainstructures/arena_ca_smallstructures.red"
    },
    3588: {
      description: "Arena_Glassfield",
      graphicFile: "res:/dx9/model/worldobject/arena_glassfield/arena_glassfield.red"
    },
    3589: {
      description: "Arena_Centereffect",
      graphicFile: "res:/dx9/model/worldobject/arena_centereffect/arena_centereffect.red"
    },
    3590: {
      description: "Arena_CA_CenterPiece",
      graphicFile: "res:/dx9/model/worldobject/arena_ca_centerpiece/arena_ca_centerpiece.red"
    },
    3591: {
      description: "Arena_Shiel",
      graphicFile: "res:/dx9/model/worldobject/arena_shiel/arena_shiel.red"
    },
    3592: {
      description: "Arena_GA_CenterPiece",
      graphicFile: "res:/dx9/model/worldobject/arena_ga_centerpiece/arena_ga_center.red"
    },
    11785: {
      graphicFile: "res:/dx9/Scene/Wormholes/wormhole_class_05.red"
    },
    3594: {
      description: "Arena minmatar center",
      graphicFile: "res:/dx9/model/worldobject/arena_minmatar_center/arena_minmatar_center.red"
    },
    3595: {
      description: "Arena Amarr Center",
      graphicFile: "res:/dx9/model/worldobject/arena_amarr_center/arena_amarr_center.red"
    },
    3596: {
      description: "Arena Amarr Mainstructure",
      graphicFile: "res:/dx9/model/worldobject/arena_amarr_mainstructure/armarr_main_structure_sm.red"
    },
    3597: {
      description: "Arena MI Mainstructure",
      graphicFile: "res:/dx9/model/worldobject/arena_mi_mainstructures/minmatar_mainstructures.red",
      race: "Minmatar"
    },
    3598: {
      description: "Arena centereffect ammar",
      graphicFile: "res:/dx9/model/worldobject/arena_centereffect/arena_centereffect_ammar.red"
    },
    3599: {
      description: "Arena Ammar small structure",
      graphicFile: "res:/dx9/model/worldobject/arena_amarr_mainstructure/armarr_small_structure_sm.red"
    },
    3600: {
      description: "Arena MI Small Structure",
      graphicFile: "res:/dx9/model/worldobject/arena_mi_mainstructures/minmatar_smallstructures.red",
      race: "Minmatar"
    },
    3601: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 1 Variation 1",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s1v1/csc1_t3_s1v1.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    3602: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 1 Variation 2",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s1v2/csc1_t3_s1v2.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    3331: {
      description: "ORE Rorqual",
      graphicFile: "res:/dx9/model/ship/ore/ocs/OCS_T1.red",
      colorScheme: "TurretPreset_ORE_T1",
      race: "ORE"
    },
    3604: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 1 Variation 4",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s1v4/csc1_t3_s1v4.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    11797: {
      graphicFile: "res:/dx9/scene/Universe/a11_cube.red"
    },
    3606: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 2 Variation 1",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s2v1/csc1_t3_s2v1.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    3607: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 2 Variation 2",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s2v2/csc1_t3_s2v2.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    3608: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 2 Variation 3",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s2v3/csc1_t3_s2v3.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    3332: {
      description: "ORE Wreck (Rorqual Hull)",
      graphicFile: "res:/dx9/model/ship/ore/ocs/wreck/OCS_T1_Wreck.red",
      colorScheme: "TurretPreset_ORE_T1",
      race: "ORE"
    },
    11802: {
      graphicFile: "res:/dx9/scene/Universe/a16_cube.red"
    },
    3611: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 3 Variation 1",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s3v1/csc1_t3_s3v1.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    11804: {
      graphicFile: "res:/dx9/scene/Universe/a18_cube.red"
    },
    11805: {
      graphicFile: "res:/dx9/scene/Universe/c01_cube.red"
    },
    3614: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 3 Variation 4",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s3v4/csc1_t3_s3v4.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    11807: {
      graphicFile: "res:/dx9/scene/Universe/c03_cube.red"
    },
    3616: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 4 Variation 1",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s4v1/csc1_t3_s4v1.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    3617: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 4 Variation 2",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s4v2/csc1_t3_s4v2.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    3618: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 4 Variation 3",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s4v3/csc1_t3_s4v3.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    3619: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 4 Variation 4",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s4v4/csc1_t3_s4v4.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    11812: {
      graphicFile: "res:/dx9/scene/Universe/c08_cube.red"
    },
    3621: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 5 Variation 1",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s5v1/csc1_t3_s5v1.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    11814: {
      graphicFile: "res:/dx9/scene/Universe/c10_cube.red"
    },
    3623: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 5 Variation 3",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s5v3/csc1_t3_s5v3.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    3624: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 5 Variation 4",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s5v4/csc1_t3_s5v4.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    11817: {
      graphicFile: "res:/dx9/scene/Universe/c13_cube.red"
    },
    3626: {
      description: "Amarr StrategicCruiser Legion - Subsystem 1 Variation 1",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s1v1/ASC1_T3_s1v1.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    3627: {
      description: "Amarr StrategicCruiser Legion - Subsystem 1 Variation 2",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s1v2/ASC1_T3_s1v2.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    3628: {
      description: "Amarr StrategicCruiser Legion - Subsystem 1 Variation 3",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s1v3/ASC1_T3_s1v3.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    3629: {
      description: "Amarr StrategicCruiser Legion - Subsystem 1 Variation 4",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s1v4/ASC1_T3_s1v4.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    11822: {
      graphicFile: "res:/dx9/scene/Universe/c18_cube.red"
    },
    3631: {
      description: "Amarr StrategicCruiser Legion - Subsystem 2 Variation 1",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s2v1/ASC1_T3_s2v1.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    3632: {
      description: "Amarr StrategicCruiser Legion - Subsystem 2 Variation 2",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s2v2/ASC1_T3_s2v2.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    3633: {
      description: "Amarr StrategicCruiser Legion - Subsystem 2 Variation 3",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s2v3/ASC1_T3_s2v3.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    3634: {
      description: "Amarr StrategicCruiser Legion - Subsystem 2 Variation 4",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s2v4/ASC1_T3_s2v4.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    11827: {
      graphicFile: "res:/dx9/scene/Universe/g04_cube.red"
    },
    3636: {
      description: "Amarr StrategicCruiser Legion - Subsystem 3 Variation 1",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s3v1/ASC1_T3_s3v1.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    3637: {
      description: "Amarr StrategicCruiser Legion - Subsystem 3 Variation 2",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s3v2/ASC1_T3_s3v2.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    3638: {
      description: "Amarr StrategicCruiser Legion - Subsystem 3 Variation 3",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s3v3/ASC1_T3_s3v3.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    3639: {
      description: "Amarr StrategicCruiser Legion - Subsystem 3 Variation 4",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s3v4/ASC1_T3_s3v4.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    11832: {
      graphicFile: "res:/dx9/scene/Universe/g09_cube.red"
    },
    20025: {
      graphicFile: "res:/dx9/model/turret/Launcher/CitadelTorpedo/CitadelTorpedo_t1.red"
    },
    20026: {
      graphicFile: "res:/dx9/model/turret/Launcher/Cruise/Cruise_t1.red"
    },
    20027: {
      graphicFile: "res:/dx9/model/turret/Launcher/Heavy/Heavy_t1.red"
    },
    20028: {
      graphicFile: "res:/dx9/model/turret/Launcher/Light/Light_t1.red"
    },
    11837: {
      graphicFile: "res:/dx9/scene/Universe/m01_cube.red"
    },
    3646: {
      description: "Amarr StrategicCruiser Legion - Subsystem 5 Variation 1",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s5v1/ASC1_T3_s5v1.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    20031: {
      graphicFile: "res:/dx9/model/turret/Launcher/CitadelTorpedo/CitadelTorpedo_missile_nova_t1.red"
    },
    20032: {
      graphicFile: "res:/dx9/model/turret/Launcher/CitadelTorpedo/CitadelTorpedo_missile_scourge_t1.red"
    },
    3649: {
      description: "Amarr StrategicCruiser Legion - Subsystem 5 Variation 4",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s5v4/ASC1_T3_s5v4.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    11842: {
      graphicFile: "res:/dx9/scene/Universe/m06_cube.red"
    },
    20035: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Bomb/Bomb_Missile_Scourge_T1.red"
    },
    20036: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Bomb/Bomb_Missile_Mjolnir_T1.red"
    },
    3653: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 1 Variation 3",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s1v3/gsc1_T3_s1v3.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    3654: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 1 Variation 4",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s1v4/gsc1_T3_s1v4.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    11847: {
      graphicFile: "res:/dx9/scene/Universe/m11_cube.red"
    },
    3656: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 2 Variation 1",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s2v1/gsc1_T3_s2v1.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    3657: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 2 Variation 2",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s2v2/gsc1_T3_s2v2.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    3658: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 2 Variation 3",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s2v3/gsc1_T3_s2v3.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    3659: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 2 Variation 4",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s2v4/gsc1_T3_s2v4.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    11852: {
      graphicFile: "res:/dx9/scene/Universe/m16_cube.red"
    },
    20045: {
      graphicFile: "res:/dx9/model/Turret/Launcher/CitadelCruise/CitadelCruise_Missile_Mjolnir_T1.red"
    },
    20046: {
      graphicFile: "res:/dx9/model/Turret/Launcher/CitadelCruise/CitadelCruise_Missile_Nova_T1.red"
    },
    3663: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 3 Variation 3",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s3v3/gsc1_T3_s3v3.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    3664: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 3 Variation 4",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s3v4/gsc1_T3_s3v4.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    20049: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Heavy/Heavy_Missile_Mjolnir_T1.red"
    },
    3666: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 4 Variation 1",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s4v1/gsc1_T3_s4v1.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    3667: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 4 Variation 2",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s4v2/gsc1_T3_s4v2.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    3668: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 4 Variation 3",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s4v3/gsc1_T3_s4v3.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    3669: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 4 Variation 4",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s4v4/gsc1_T3_s4v4.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    11862: {
      description: "Caldari Cruiser Ishukone (Blackbird Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC4/Ishukone/CC4_T2a_Ishukone.red",
      race: "Caldari"
    },
    3671: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 5 Variation 1",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s5v1/gsc1_T3_s5v1.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    3672: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 5 Variation 2",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s5v2/gsc1_T3_s5v2.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    3673: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 5 Variation 3",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s5v3/gsc1_T3_s5v3.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    3674: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 5 Variation 4",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s5v4/gsc1_T3_s5v4.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    11867: {
      description: "Small Tractor Tech 2",
      graphicFile: "res:/dx9/model/turret/tractor/s/Tractor_S_T2.red"
    },
    3676: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 1 Variation 1",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s1v1/msc1_T3_s1v1.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    3677: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 1 Variation 2",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s1v2/msc1_T3_s1v2.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    3678: {
      description: "Minmatar StrategicCruiser Loki -Subsystem 1 Variation 3",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s1v3/msc1_T3_s1v3.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    3679: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 1 Variation 4",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s1v4/msc1_T3_s1v4.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    20064: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Light/Light_Missile_Scourge_T1.red"
    },
    3681: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 2 Variation 1",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s2v1/msc1_T3_s2v1.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    3682: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 2 Variation 2",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s2v2/msc1_T3_s2v2.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    3683: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 2 Variation 3",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s2v3/msc1_T3_s2v3.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    3684: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 2 Variation 4",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s2v4/msc1_T3_s2v4.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    11877: {
      description: "Gallente Industrial Quafe Ultra White (Miasmos Hull)",
      graphicFile: "res:/dx9/Model/Ship/Gallente/Industrial/GI4/QuafeUltra/GI4_T1_QuafeUltra-White.red",
      colorScheme: "TurretPreset_Quafe",
      race: "Gallente"
    },
    3686: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 3 Variation 1",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s3v1/msc1_T3_s3v1.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    3687: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 3 Variation 2",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s3v2/msc1_T3_s3v2.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    3688: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 3 Variation 3",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s3v3/msc1_T3_s3v3.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    3689: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 3 Variation 4",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s3v4/msc1_T3_s3v4.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    20074: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Torpedo/Torpedo_T2.red"
    },
    3691: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 4 Variation 1",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s4v1/msc1_T3_s4v1.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    3692: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 4 Variation 2",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s4v2/msc1_T3_s4v2.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    3693: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 4 Variation 3",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s4v3/msc1_T3_s4v3.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    3694: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 4 Variation 4",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s4v4/msc1_T3_s4v4.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    20079: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Heavy/Heavy_N.red"
    },
    3696: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 5 Variation 1",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s5v1/msc1_T3_s5v1.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    3697: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 5 Variation 2",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s5v2/msc1_T3_s5v2.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    3698: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 5 Variation 3",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s5v3/msc1_T3_s5v3.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    3699: {
      description: "Minmatar StrategicCruiser Loki - Subsystem 5 Variation 4",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/msc1_T3_s5v4/msc1_T3_s5v4.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    20084: {
      graphicFile: "res:/dx9/model/Turret/Launcher/HeavyAssault/HeavyAssault_F.red"
    },
    3701: {
      description: "Talocan Outpost Nexus Optimized - Talocan Outpost Nexus Optimized",
      graphicFile: "res:/dx9/model/worldobject/defenses/talocan/ta_linkagestructure/ta_ls1/ta_ls1.red",
      race: "Talocan"
    },
    3702: {
      description: "Talocan Outpust Strut Optimized - Talocan Outpust Strut Optimized",
      graphicFile: "res:/dx9/model/worldobject/defenses/talocan/ta_linkagestructure/ta_ls2/ta_ls2.red",
      race: "Talocan"
    },
    3703: {
      description: "Talocan Outpost Dome Optimized - Talocan Outpost Dome Optimized",
      graphicFile: "res:/dx9/model/worldobject/defenses/talocan/ta_linkagestructure/ta_ls3/ta_ls3.red",
      race: "Talocan"
    },
    3704: {
      description: "Non spinning version - Debris1 Static",
      graphicFile: "res:/dx9/model/worldobject/debris/debris1static.red"
    },
    3705: {
      description: "Non spinning version - Debris2 Static",
      graphicFile: "res:/dx9/model/worldobject/debris/debris2static.red"
    },
    3706: {
      description: "Non spinning version - Debris3 Static",
      graphicFile: "res:/dx9/model/worldobject/debris/debris3static.red"
    },
    3707: {
      description: "Non spinning version - Debris4 Static",
      graphicFile: "res:/dx9/model/worldobject/debris/debris4static.red"
    },
    3708: {
      description: "Sun Black Hole",
      graphicFile: "res:/dx9/Model/WorldObject/Sun/BlackHole.red"
    },
    3709: {
      description: "Sun Pulsar",
      graphicFile: "res:/dx9/Model/WorldObject/Sun/Pulsar.red"
    },
    3710: {
      description: "Sun Cataclysmic",
      graphicFile: "res:/dx9/Model/WorldObject/Sun/Cataclysmic.red"
    },
    3124: {
      description: "Small_Wreck_Caldari",
      graphicFile: "res:/dx9/model/shipwrecks/small_wreck_caldari.red"
    },
    3712: {
      description: "Sun Wolfrayet",
      graphicFile: "res:/dx9/Model/WorldObject/Sun/WolfRayet.red"
    },
    3713: {
      description: "Sun Red Giant",
      graphicFile: "res:/dx9/Model/WorldObject/Sun/RedGiant.red"
    },
    3714: {
      description: "Gallente Shuttle Interbus",
      graphicFile: "res:/dx9/model/ship/gallente/Shuttle/GS1/InterBus/GS1_T1_InterBus.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    3715: {
      description: "Wormhole",
      graphicFile: "res:/dx9/model/WorldObject/Wormhole/Wormhole.red"
    },
    11542: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Walkway_Pipes_01_Min/Walkway_Pipes_01_Min.red"
    },
    20102: {
      description: "EoM Turret Scheme",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_EoM.red"
    },
    20103: {
      description: "Imperial Turret Scheme",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Imperial.red"
    },
    20104: {
      description: "CBD Pirate Turret Scheme",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_CBD.red"
    },
    20105: {
      description: "Hyasyoda Pirate Turret Scheme",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Hyasyoda.red"
    },
    20106: {
      description: "Sukuuvestaa Pirate Turret Scheme",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Sukuuvestaa.red"
    },
    11543: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Walkway_Pipes_02_Min/Walkway_Pipes_02_Min.red"
    },
    20109: {
      description: "Caldari Frigate Mordus Frigate (Merlin Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF7/Mordus/CF7_T1_Mordus.red",
      colorScheme: "TurretPreset_Mordus",
      race: "Caldari"
    },
    20110: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Bomb/Bomb_Missile_Nova_T1.red"
    },
    11544: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Walkway_Pipes_03_Min/Walkway_Pipes_03_Min.red"
    },
    20114: {
      description: "Caldari Pickaxe",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Pickaxe.red"
    },
    20115: {
      description: "Caldari Limos",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Limos.red"
    },
    20116: {
      description: "Caldari Serial",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Serial.red"
    },
    20117: {
      description: "Caldari Noose",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Noose.red"
    },
    20118: {
      description: "Caldari Undertaker",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Undertaker.red"
    },
    11545: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Walkway_Pipes_04_Min/Walkway_Pipes_04_Min.red"
    },
    20120: {
      description: "Caldari Neon",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Neon.red"
    },
    20121: {
      description: "Caldari Barrage",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Barrage.red"
    },
    20122: {
      description: "Caldari Gallows",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Gallows.red"
    },
    20123: {
      description: "Caldari Malkuth",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Malkuth.red"
    },
    11854: {
      description: "Damaged Amarrian Relic",
      graphicFile: "res:/dx9/model/worldobject/relic_damaged/relic_damaged.red"
    },
    3125: {
      description: "Small_Wreck_Gallente",
      graphicFile: "res:/dx9/model/shipwrecks/small_wreck_gallente.red"
    },
    20129: {
      description: "ORE Drone Medium Salvage Drone I",
      graphicFile: "res:/dx9/model/Drone/Ore/medium/OSDM1/OSDM1_T1.red",
      colorScheme: "TurretPreset_ORE_T1",
      race: "ORE"
    },
    11547: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Walkway_Pipes_06_Min/Walkway_Pipes_06_Min.red"
    },
    20136: {
      description: "Caldari Frigate Alliance Tournament X (Merlin Hull)",
      graphicFile: "res:/dx9/model/ship/Tournament/CF7_X/CF7_X.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    11548: {
      description: "SleeperDrone_Large",
      graphicFile: "res:/dx9/model/turret/Drone/SleeperDrone_Large.red",
      race: "Sleeper"
    },
    11549: {
      description: "SleeperDrone_Medium",
      graphicFile: "res:/dx9/model/turret/Drone/SleeperDrone_Medium.red",
      race: "Sleeper"
    },
    20311: {
      description: "Amarr Battleship Chamberlain (Apocalypse Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB1/Chamberlain/AB1_T1_Chamberlain.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    3767: {
      description: "Scan Probe 1 (Yellow) - Scan Probe 1",
      graphicFile: "res:/dx9/model/probe/scanprobe/scanprobe1.red"
    },
    3768: {
      description: "Scan Probe 2 (Blue) - Scan Probe 2",
      graphicFile: "res:/dx9/model/probe/scanprobe/scanprobe2.red"
    },
    3769: {
      description: "Scan Probe 3 (Green) - Scan Probe 3",
      graphicFile: "res:/dx9/model/probe/scanprobe/scanprobe3.red"
    },
    3770: {
      description: "Scan Probe 4 (Red) - Scan Probe 4",
      graphicFile: "res:/dx9/model/probe/scanprobe/scanprobe4.red"
    },
    3771: {
      description: "Full size station wreck. - As_4_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/as_4_std.red"
    },
    3772: {
      description: "Full size station wreck. Amarr Station Hub Standard. As_hub_std",
      graphicFile: "res:/dx9/Model/WorldObject/Wrecks/as_hub_std.red"
    },
    3773: {
      description: "Full size station wreck. - as_millitary_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/as_millitary_std.red"
    },
    3774: {
      description: "Full size station wreck. Amarr Mining Station Wreck - Standard Size. As_mining_std",
      graphicFile: "res:/dx9/Model/WorldObject/Wrecks/as_mining_std.red"
    },
    3775: {
      description: "Full size station wreck. - As_research_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/as_research_std.red"
    },
    3776: {
      description: "Full size station wreck. - As_tradepost_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/as_tradepost_std.red"
    },
    3777: {
      description: "Full size station wreck. - Cs1_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/cs1_std.red"
    },
    3778: {
      description: "Full size station wreck. - Cs2_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/cs2_std.red"
    },
    3779: {
      description: "Full size station wreck. - Cs3_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/cs3_std.red"
    },
    3780: {
      description: "Full size station wreck. - Cs4_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/cs4_std.red"
    },
    3781: {
      description: "Full size station wreck. - Gs1_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gs1_std.red"
    },
    3782: {
      description: "Full size station wreck. - Gs2_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gs2_std.red"
    },
    3361: {
      description: "Gallente Cruiser Roden Phobos (Thorax Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC4/Roden/GC4_T2b_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    3784: {
      description: "Full size station wreck. - Gs4_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gs4_std.red"
    },
    3785: {
      description: "Full size station wreck. - Gs5_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gs5_std.red"
    },
    3786: {
      description: "Full size station wreck. - Gs6_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gs6_std.red"
    },
    3787: {
      description: "Full size station wreck. - Gs7_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gs7_std.red"
    },
    3788: {
      description: "Full size station wreck. - Gs8_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gs8_std.red"
    },
    3789: {
      description: "Full size station wreck. - Gsm3_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gsm3_std.red"
    },
    3790: {
      description: "Full size station wreck. - MS_Hub_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/ms_hub_std.red"
    },
    3791: {
      description: "Full size station wreck. - MS_Industry_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/ms_industry_std.red"
    },
    3792: {
      description: "Full size station wreck. - MS_Millitary_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/ms_millitary_std.red"
    },
    3793: {
      description: "Full size station wreck. - MS_Mining_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/ms_mining_std.red"
    },
    3794: {
      description: "Full size station wreck. - MS_Research_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/ms_research_std.red"
    },
    3795: {
      description: "Full size station wreck. - MS_Standard_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/ms_standard_std.red"
    },
    3796: {
      description: "Full size station wreck. - MS_Tradepost_larger_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/ms_tradepost_larger_std.red"
    },
    3797: {
      description: "Full size station wreck. - MS_Tradepost_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/ms_tradepost_std.red"
    },
    3798: {
      description: "gs6_roden",
      graphicFile: "res:/dx9/model/station/gallente/gs6/gs6_roden.red",
      race: "Gallente"
    },
    3799: {
      description: "Minmatar Frigate Tournament VII Freki (Rifter Hull)",
      graphicFile: "res:/dx9/Model/Ship/Tournament/MF4_VII/MF4_VII.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    3800: {
      description: "Minmatar Cruiser Tournament VII Mimir (Rupture Hull)",
      graphicFile: "res:/dx9/Model/Ship/Tournament/MC2_VII/MC2_VII.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    11556: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Pipes_02_Min/Pipes_02_Min.red"
    },
    20186: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Concord_Science.red"
    },
    20187: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Concord_SpecOps.red"
    },
    20188: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Concord_SWAT.red"
    },
    20190: {
      description: "Gallente Destroyer Aliastra Catalyst (Catalyst Hull)",
      graphicFile: "res:/dx9/Model/Ship/Gallente/Destroyer/GDe1/Aliastra/GDe1_T1_Aliastra.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    11557: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Pipes_03_Min/Pipes_03_Min.red"
    },
    3808: {
      description: "Gallente Battleship Roden (Dominix Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Battleship/GB1/Roden/GB1_T1_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    3809: {
      description: "Gallente Battleship Roden (Megathron Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Battleship/GB2/Roden/GB2_T1_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    3810: {
      description: "Gallente Cruiser Roden (Celestis Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC1/Roden/GC1_T1_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    3811: {
      description: "Gallente Cruiser Roden (Vexor Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC3/Roden/GC3_T1_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    3812: {
      description: "Gallente Frigate Roden (Atron Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF6/Roden/GF6_T1_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    3813: {
      description: "Gallente Frigate Roden (Federation Navy Comet Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF8/Roden/GF8_T1_Roden.red",
      colorScheme: "TurretPreset_Roden",
      race: "Gallente"
    },
    3814: {
      description: "Amarr Battleship Navy Issue Armageddon",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB2/Navy/AB2_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    3815: {
      description: "Caldari Battleship Navy Scorpion Navy Issue (Scorpion Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/BattleShip/CB2/Navy/CB2_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    3816: {
      description: "Gallente Battleship Navy (Dominix Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Battleship/GB1/Navy/GB1_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    20201: {
      description: "Gallente Destroyer Algos",
      graphicFile: "res:/dx9/Model/Ship/Gallente/Destroyer/GDe2/GDe2_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    3818: {
      description: "Gallente Bomber Cyclops",
      graphicFile: "res:/dx9/Model/Ship/Gallente/Fighter/GFB1/GFB1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    3819: {
      description: "Caldari Bomber Mantis",
      graphicFile: "res:/dx9/Model/Ship/Caldari/Fighter/CFB1/CFB1_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    20204: {
      description: "orbital bombardment effect on the planet for EM",
      graphicFile: "res:/dx9/model/Effect/orbitalbombardment/s/em.red"
    },
    20205: {
      description: "orbital bombardment effect on the planet for Hybrid",
      graphicFile: "res:/dx9/model/Effect/orbitalbombardment/s/hybrid.red"
    },
    3822: {
      description: "Soverignty Marker Online",
      graphicFile: "res:/dx9/model/deployables/sovclaimmarker/s_claimmarker_online.red"
    },
    3825: {
      description: "Amarr Bomber Malleus",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Fighter/AFB1/AFB1_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    3826: {
      description: "Soverignty Disruptor",
      graphicFile: "res:/dx9/model/deployables/sovdisruptor/s_disruptor.red"
    },
    3827: {
      description: "Soverignty Command Base",
      graphicFile: "res:/dx9/model/deployables/sovcommandbase/scbase.red"
    },
    3828: {
      description: "Soverignty Command Base Economy",
      graphicFile: "res:/dx9/model/deployables/sovcommandbase/economy/sc_eco_l1.red"
    },
    3829: {
      description: "Soverignty Command Base Industry",
      graphicFile: "res:/dx9/model/deployables/sovcommandbase/industry/sc_industy_l1.red"
    },
    3830: {
      description: "Soverignty Command Base Military",
      graphicFile: "res:/dx9/model/deployables/sovcommandbase/military/sc_military_l1.red"
    },
    20215: {
      description: "Caldari StrategicCruiser Tengu",
      graphicFile: "res:/dx9/model/ship/Caldari/StrategicCruiser/csc1/CSC1_T3.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    3832: {
      description: "Earthlike Planet Shader",
      graphicFile: "res:/dx9/model/worldobject/planet/Earthlike.red"
    },
    3833: {
      description: "Gas Giant Planet Shader",
      graphicFile: "res:/dx9/model/worldobject/planet/GasGiant.red"
    },
    3834: {
      description: "Ice Planet Shader",
      graphicFile: "res:/dx9/model/worldobject/planet/IcePlanet.red"
    },
    3835: {
      description: "Ocean Planet Shader",
      graphicFile: "res:/dx9/model/worldobject/planet/Ocean.red"
    },
    3836: {
      description: "Lava Planet Shader",
      graphicFile: "res:/dx9/model/worldobject/planet/LavaPlanet.red"
    },
    3837: {
      description: "Sandstorm Planet Shader",
      graphicFile: "res:/dx9/model/worldobject/planet/SandStormPlanet.red"
    },
    20222: {
      description: "Amarr Destroyer Navy Coercer",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Destroyer/ADE1/Navy/ADE1_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    20223: {
      description: "Caldari Destroyer Navy Cormorant",
      graphicFile: "res:/dx9/model/ship/caldari/Destroyer/CDe1/Navy/CDe1_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    3840: {
      description: "Used by planets - Terrestrial Height Map 1",
      graphicFile: "res:/dx9/Model/WorldObject/planet/Terrestrial/Terrestrial01_H.dds"
    },
    20225: {
      description: "Gallente Destroyer Navy Catalyst",
      graphicFile: "res:/dx9/Model/Ship/Gallente/Destroyer/GDe1/Navy/GDe1_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    3842: {
      description: "Used by planets - Terrestrial Height Map 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/Terrestrial03_H.dds"
    },
    3843: {
      description: "Used by planets - Terrestrial Height Map 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/Terrestrial04_H.dds"
    },
    3844: {
      description: "Used by planets - Terrestrial Detail Map 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/TerrestrialDetail01_P.dds"
    },
    3845: {
      description: "Used by planets - Terrestrial Detail Map 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/TerrestrialDetail02_P.dds"
    },
    3846: {
      description: "Used by planets - Terrestrial Detail Map 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/TerrestrialDetail03_P.dds"
    },
    3847: {
      description: "Used by planets - Terrestrial Detail Map 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/TerrestrialDetail04_P.dds"
    },
    3848: {
      description: "Used by planets - Sparse Cloud Map 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/CloudSparse01_M.dds"
    },
    3849: {
      description: "Used by planets - Sparse Cloud Map 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/CloudSparse02_M.dds"
    },
    3850: {
      description: "Used by planets - Sparse Cloud Map 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/CloudSparse02_M.dds"
    },
    3851: {
      description: "Used by planets - Sparse Cloud Map 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/CloudSparse03_M.dds"
    },
    3852: {
      description: "Used by planets - Sparse Cloud Map 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/CloudSparse04_M.dds"
    },
    3853: {
      description: "Used by planets - Sparse Cloud Cap Map 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/CloudSparseCap01_M.dds"
    },
    3854: {
      description: "Used by planets - Sparse Cloud Cap Map 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/CloudSparseCap02_M.dds"
    },
    3855: {
      description: "Used by planets - Sparse Cloud Cap Map 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/CloudSparseCap03_M.dds"
    },
    3856: {
      description: "Used by planets - Sparse Cloud Cap Map 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/CloudSparseCap04_M.dds"
    },
    3857: {
      description: "Used by planets - Dense Cloud Map 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/CloudDense01_M.dds"
    },
    3858: {
      description: "Used by planets - Dense Cloud Map 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/CloudDense02_M.dds"
    },
    3859: {
      description: "Used by planets - Dense Cloud Map 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/CloudDense03_M.dds"
    },
    3860: {
      description: "Used by planets - Dense Cloud Map 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/CloudDense04_M.dds"
    },
    3374: {
      description: "ab1_wreck_front",
      graphicFile: "res:/dx9/model/shipwrecks/amarr/ab1/ab1_wreck_front.red",
      race: "Amarr"
    },
    3862: {
      description: "Used by planets - Dense Cloud Cap Map 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/CloudDenseCap02_M.dds"
    },
    3863: {
      description: "Used by planets - Dense Cloud Cap Map 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/CloudDenseCap03_M.dds"
    },
    3864: {
      description: "Used by planets - Dense Cloud Cap Map 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/CloudDenseCap04_M.dds"
    },
    3865: {
      description: "Used by planets - City Light Glow Map 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/Citylight01_G.dds"
    },
    3866: {
      description: "Used by planets - City Light Glow Map 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/Citylight02_G.dds"
    },
    3375: {
      description: "ab1_wreck_rear",
      graphicFile: "res:/dx9/model/shipwrecks/amarr/ab1/ab1_wreck_rear.red",
      race: "Amarr"
    },
    3868: {
      description: "Used by planets - City Light Glow Map 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/Citylight04_G.dds"
    },
    3869: {
      description: "Used by planets - City Light Distribution Map 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/Citylight01_UV.dds"
    },
    3870: {
      description: "Used by planets - City Light Distribution Map 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/Citylight02_UV.dds"
    },
    3871: {
      description: "Used by planets - City Light Distribution Map 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/Citylight03_UV.dds"
    },
    3872: {
      description: "Used by planets - City Light Distribution Map 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/Citylight04_UV.dds"
    },
    3376: {
      description: "ab2_wreck_front",
      graphicFile: "res:/dx9/model/shipwrecks/amarr/ab2/ab2_wreck_front.red",
      race: "Amarr"
    },
    3874: {
      description: "Used by planets - City Light Mask Map 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/Citylight02_M.dds"
    },
    3875: {
      description: "Used by planets - City Light Mask Map 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/Citylight03_M.dds"
    },
    3876: {
      description: "Used by planets - City Light Mask Map 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/Citylight04_M.dds"
    },
    3877: {
      description: "Used by planets - Terrestrial Scatter Light 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Preset/TerrestrialScatterLight01_D.dds"
    },
    3878: {
      description: "Used by planets - Terrestrial Scatter Light 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Preset/TerrestrialScatterLight02_D.dds"
    },
    3377: {
      description: "ab2_wreck_rear",
      graphicFile: "res:/dx9/model/shipwrecks/amarr/ab2/ab2_wreck_rear.red",
      race: "Amarr"
    },
    3880: {
      description: "Used by planets - Terrestrial Scatter Hue 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Preset/TerrestrialScatterHue02_D.dds"
    },
    3881: {
      description: "Used by planets - Ice Height Map 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Ice/Ice01_H.dds"
    },
    3882: {
      description: "Used by planets - Ice Height Map 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Ice/Ice02_H.dds"
    },
    3883: {
      description: "Used by planets - Ice Height Map 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Ice/Ice03_H.dds"
    },
    3884: {
      description: "Used by planets - Ice Height Map 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Ice/Ice04_H.dds"
    },
    3885: {
      description: "Used by planets - Ice Detail Map 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Ice/IceDetail01_P.dds"
    },
    3886: {
      description: "Used by planets - Ice Detail Map 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Ice/IceDetail02_P.dds"
    },
    3887: {
      description: "Used by planets - Ice Detail Map 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Ice/IceDetail03_P.dds"
    },
    3888: {
      description: "Used by planets - Ice Detail Map 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Ice/IceDetail04_P.dds"
    },
    3889: {
      description: "Used by planets - Lava Height Map 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Lava/Lava01_H.dds"
    },
    3890: {
      description: "Used by planets - Lava Height Map 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Lava/Lava02_H.dds"
    },
    3891: {
      description: "Used by planets - Lava Height Map 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Lava/Lava03_H.dds"
    },
    3892: {
      description: "Used by planets - Lava Height Map 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Lava/Lava04_H.dds"
    },
    3893: {
      description: "Used by planets - Lava Detail Map 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Lava/LavaMagma01_P.dds"
    },
    3894: {
      description: "Used by planets - Lava Detail Map 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Lava/LavaMagma02_P.dds"
    },
    3895: {
      description: "Used by planets - Lava Detail Map 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Lava/LavaMagma03_P.dds"
    },
    3896: {
      description: "Used by planets - Lava Detail Map 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Lava/LavaMagma04_P.dds"
    },
    3897: {
      description: "Used by planets - Ice Scatter Light 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Preset/IceScatterLight01_D.dds"
    },
    3898: {
      description: "Used by planets - Ice Scatter Light 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Preset/IceScatterLight02_D.dds"
    },
    3899: {
      description: "Used by planets - Ice Scatter Hue 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Preset/IceScatterHue01_D.dds"
    },
    3900: {
      description: "Used by planets - Ice Scatter Hue 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Preset/IceScatterHue02_D.dds"
    },
    3901: {
      description: "Used by planets - Lava Scatter Light 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Preset/LavaScatterLight01_D.dds"
    },
    3902: {
      description: "Used by planets - Lava Scatter Light 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Preset/LavaScatterLight02_D.dds"
    },
    3381: {
      description: "cb2_wreck_cockpit",
      graphicFile: "res:/dx9/model/shipwrecks/caldari/cb2/cb2_wreck_cockpit.red",
      race: "Caldari"
    },
    3904: {
      description: "Used by planets - Lava Scatter Hue 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Preset/LavaScatterHue01_D.dds"
    },
    3905: {
      description: "Used by planets - Lava Scatter Hue 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Preset/LavaScatterHue02_D.dds"
    },
    3906: {
      description: "Used by Planets. - Height Map Moon 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Moon/Moon02_H.dds"
    },
    11314: {
      description: "half_overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Amarr_T2.red"
    },
    3908: {
      description: "Used by planets. - Height Map Moon 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Moon/Moon04_H.dds"
    },
    3909: {
      description: "Used by planets. - Detail Map Moon 1.",
      graphicFile: "res:/dx9/model/worldobject/planet/Moon/MoonDetail01_P.dds"
    },
    3910: {
      description: "Used by planets - Gas Giant Diffuse 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiant01_D.dds"
    },
    3911: {
      description: "Used by planets. - Gas Giant Diffuse 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiant02_D.dds"
    },
    3912: {
      description: "Used by planets 2. - Detail Map Moon 2.",
      graphicFile: "res:/dx9/model/worldobject/planet/Moon/MoonDetail02_P.dds"
    },
    3913: {
      description: "Used by planets. - Gas Giant Diffuse 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiant03_D.dds"
    },
    3914: {
      description: "Used by planets. Temporarily referring to texture number 1, until other are generated. - Gas Giant Diffuse 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiant01_D.dds"
    },
    11575: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Floor/Floor_03_Ama_Base.red"
    },
    3916: {
      description: "Used by planets - Gas Giant Distortion 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiant01_P.dds"
    },
    3917: {
      description: "Used by planets. - Detail Map Moon 4.",
      graphicFile: "res:/dx9/model/worldobject/planet/Moon/MoonDetail04_P.dds"
    },
    3918: {
      description: "Used by planets - Gas Giant Distortion 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiant02_P.dds"
    },
    3919: {
      description: "Used by planets - Gas Giant Distortion 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiant03_P.dds"
    },
    3920: {
      description: "Used by planets - Gas Giant Distortion 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiant04_P.dds"
    },
    3384: {
      description: "gb2_wreck_rear",
      graphicFile: "res:/dx9/model/shipwrecks/gallente/gb2/gb2_wreck_rear.red",
      race: "Gallente"
    },
    3922: {
      description: "Used by planets - Gas Giant Detail Noise 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiantDetail02_M.dds"
    },
    3923: {
      description: "Used by planets - Gas Giant Detail Noise 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiantDetail03_M.dds"
    },
    3924: {
      description: "Used by planets - Gas Giant Ring Diffuse 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiantRing01_D.dds"
    },
    3925: {
      description: "Used by planets - Gas Giant Ring Diffuse 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiantRing02_D.dds"
    },
    3926: {
      description: "Used by planets - Gas Giant Ring Diffuse 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiantRing03_D.dds"
    },
    3385: {
      description: "mb2_shipwreck_bottom",
      graphicFile: "res:/dx9/model/shipwrecks/minmatar/mb2/mb2_shipwreck_bottom.red",
      race: "Minmatar"
    },
    3928: {
      description: "Used by planets - Gas Giant Ring Diffuse 5",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiantRing05_D.dds"
    },
    3929: {
      description: "Used by planets - Gas Giant Ring Diffuse 6",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiantRing06_D.dds"
    },
    3930: {
      description: "Used by planets - Gas Giant Ring Diffuse 7",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiantRing07_D.dds"
    },
    3931: {
      description: "Used by planets - Gas Giant Ring Diffuse 8",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiantRing08_D.dds"
    },
    3932: {
      description: "Used by planets - Gas Giant Ring Detail 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiantRingDetail01_D.dds"
    },
    3386: {
      description: "mb2_shipwreck_front",
      graphicFile: "res:/dx9/model/shipwrecks/minmatar/mb2/mb2_shipwreck_front.red",
      race: "Minmatar"
    },
    3934: {
      description: "Used by planets - Gas Giant Ring Detail 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiantRingDetail03_D.dds"
    },
    3935: {
      description: "Thunderstorm Planet Shader",
      graphicFile: "res:/dx9/model/worldobject/planet/ThunderStormPlanet.red"
    },
    20320: {
      description: "Caldari Industrial Guristas (Badger Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Industrial/CI1/Guristas/CI1_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    20321: {
      description: "Gallente Industrial Serpentis (Iteron Mark V Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Industrial/GI5/Serpentis/GI5_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    3387: {
      description: "mb2_shipwreck_midsection",
      graphicFile: "res:/dx9/model/shipwrecks/minmatar/mb2/mb2_shipwreck_midsection.red",
      race: "Minmatar"
    },
    20324: {
      description: "Gallente Industrial Serpentis (Epithal Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Industrial/GI3/Serpentis/GI3_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    3941: {
      description: "Plasma Planet Shader",
      graphicFile: "res:/dx9/model/WorldObject/planet/PlasmaPlanet.red"
    },
    20326: {
      description: "Gallente Industrial Serpentis (Nereus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Industrial/GI1/Serpentis/GI1_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Gallente"
    },
    20327: {
      description: "Caldari Industrial Guristas (Tayra Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Industrial/CI2/Guristas/CI2_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    3944: {
      description: "EVE Gate",
      graphicFile: "res:/dx9/model/WorldObject/EVEGate/NewEden3.red"
    },
    11580: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Wall/Wall_01_Ama_Base.red"
    },
    20330: {
      description: "Caldari Frigate Mordus (Heron Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF3/Mordus/CF3_T1_Mordus.red",
      colorScheme: "TurretPreset_Mordus",
      race: "Caldari"
    },
    20331: {
      description: "Caldari Battleship Mordus (Scorpion Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/BattleShip/CB2/Mordus/CB2_T1_Mordus.red",
      colorScheme: "TurretPreset_Mordus",
      race: "Caldari"
    },
    20332: {
      description: "Amarr Industrial Khanid (Bestower Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Industrial/AI1/Khanid/AI1_T1_Khanid.red",
      colorScheme: "TurretPreset_Khanid",
      race: "Amarr"
    },
    20333: {
      description: "Amarr Battleship Khanid (Armageddon Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB2/Khanid/AB2_T1_Khanid.red",
      colorScheme: "TurretPreset_Khanid",
      race: "Amarr"
    },
    20334: {
      description: "Minmatar Frigate Thukker (Rifter Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF4/Thukker/MF4_T1_Thukker.red",
      colorScheme: "TurretPreset_Thukker",
      race: "Minmatar"
    },
    11581: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Wall/Wall_02_Ama_Base.red"
    },
    20336: {
      description: "Minmatar Cruiser Thukker (Stabber Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Cruiser/MC1/Thukker/MC1_T1_Thukker.red",
      colorScheme: "TurretPreset_Thukker",
      race: "Minmatar"
    },
    20337: {
      description: "Minmatar Frigate Thukker (Breacher Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF5/Thukker/MF5_T1_Thukker.red",
      colorScheme: "TurretPreset_Thukker",
      race: "Minmatar"
    },
    20338: {
      description: "Caldari Battleship Ishukone (Raven Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/BattleShip/CB1/Ishukone/CB1_T1_Ishukone.red",
      colorScheme: "TurretPreset_Ishukone",
      race: "Caldari"
    },
    20339: {
      description: "This is referenced in code: This is the weapon of the bomber (Turret), and not the ship itself.",
      graphicFile: "res:/dx9/model/turret/drone/fighterbomber_sansha_t1.red"
    },
    3956: {
      description: "Used by planets - Dust Map 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Sandstorm/Dust01_M.dds"
    },
    11582: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Wall/Wall_04_05_06_Ama_Combo.red"
    },
    3958: {
      description: "Used by planets - Dust Map 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Sandstorm/Dust03_M.dds"
    },
    3959: {
      description: "Used by planets - Dust Map 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Sandstorm/Dust04_M.dds"
    },
    3960: {
      description: "Used by planets - Dust Cap Map 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Sandstorm/DustCap01_M.dds"
    },
    3961: {
      description: "Used by planets - Dust Cap Map 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Sandstorm/DustCap02_M.dds"
    },
    3962: {
      description: "Used by planets - Dust Cap Map 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Sandstorm/DustCap03_M.dds"
    },
    3963: {
      description: "Used by planets - Dust Cap Map 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Sandstorm/DustCap04_M.dds"
    },
    3964: {
      description: "P_GasGiant_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_01.red"
    },
    3965: {
      description: "P_GasGiant_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_02.red"
    },
    3966: {
      description: "P_GasGiant_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_03.red"
    },
    3967: {
      description: "P_GasGiant_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_04.red"
    },
    3968: {
      description: "P_GasGiant_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_05.red"
    },
    11584: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Wall/Wall_04_Ama_Base.red"
    },
    3970: {
      description: "P_GasGiant_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_07.red"
    },
    3971: {
      description: "P_GasGiant_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_08.red"
    },
    3972: {
      description: "P_GasGiant_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_09.red"
    },
    3973: {
      description: "P_GasGiant_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_10.red"
    },
    3974: {
      description: "P_GasGiant_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_11.red"
    },
    3393: {
      description: "as_tradepost_damaged",
      graphicFile: "res:/dx9/model/station/amarr/as_tradepost_damaged.red",
      race: "Amarr"
    },
    3976: {
      description: "P_GasGiant_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_13.red"
    },
    3977: {
      description: "P_GasGiant_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_14.red"
    },
    3978: {
      description: "P_GasGiant_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_15.red"
    },
    3979: {
      description: "P_GasGiant_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_16.red"
    },
    3980: {
      description: "P_GasGiant_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_17.red"
    },
    3981: {
      description: "P_GasGiant_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_18.red"
    },
    3982: {
      description: "P_GasGiant_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_19.red"
    },
    3983: {
      description: "P_GasGiant_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_20.red"
    },
    3984: {
      description: "P_GasGiant_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_21.red"
    },
    3985: {
      description: "P_GasGiant_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_22.red"
    },
    3986: {
      description: "P_GasGiant_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_23.red"
    },
    3987: {
      description: "P_GasGiant_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_24.red"
    },
    3988: {
      description: "P_GasGiant_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_25.red"
    },
    3989: {
      description: "P_GasGiant_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_26.red"
    },
    3990: {
      description: "P_GasGiant_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_27.red"
    },
    3991: {
      description: "P_GasGiant_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_28.red"
    },
    3992: {
      description: "P_GasGiant_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_29.red"
    },
    3396: {
      description: "cs1_wrecked",
      graphicFile: "res:/dx9/model/station/caldari/cs1_wrecked/cs1_wrecked.red",
      race: "Caldari"
    },
    3994: {
      description: "P_GasGiant_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_31.red"
    },
    3995: {
      description: "P_GasGiant_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_32.red"
    },
    3996: {
      description: "P_GasGiant_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_33.red"
    },
    3997: {
      description: "P_GasGiant_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_34.red"
    },
    3998: {
      description: "P_GasGiant_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_35.red"
    },
    3999: {
      description: "P_GasGiant_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_36.red"
    },
    4000: {
      description: "P_GasGiant_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_37.red"
    },
    4001: {
      description: "P_GasGiant_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_38.red"
    },
    4002: {
      description: "P_GasGiant_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_39.red"
    },
    4003: {
      description: "P_GasGiant_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_40.red"
    },
    4004: {
      description: "P_GasGiant_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_41.red"
    },
    4005: {
      description: "P_GasGiant_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_42.red"
    },
    4006: {
      description: "P_GasGiant_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_43.red"
    },
    4007: {
      description: "P_GasGiant_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_44.red"
    },
    4008: {
      description: "P_GasGiant_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_45.red"
    },
    4009: {
      description: "P_GasGiant_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_46.red"
    },
    4010: {
      description: "P_GasGiant_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_47.red"
    },
    4011: {
      description: "P_GasGiant_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_48.red"
    },
    4012: {
      description: "P_GasGiant_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_49.red"
    },
    4013: {
      description: "P_GasGiant_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_50.red"
    },
    4014: {
      description: "P_GasGiant_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_51.red"
    },
    4015: {
      description: "P_GasGiant_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_52.red"
    },
    4016: {
      description: "P_GasGiant_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_53.red"
    },
    4017: {
      description: "P_GasGiant_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_54.red"
    },
    4018: {
      description: "P_GasGiant_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_55.red"
    },
    4019: {
      description: "p_ice_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/p_ice_01.red"
    },
    4020: {
      description: "p_ice_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/p_ice_02.red"
    },
    4021: {
      description: "p_ice_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/p_ice_03.red"
    },
    4022: {
      description: "p_ice_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/p_ice_04.red"
    },
    4023: {
      description: "P_Ice_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_05.red"
    },
    4024: {
      description: "P_Ice_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_06.red"
    },
    4025: {
      description: "P_Ice_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_07.red"
    },
    4026: {
      description: "P_Ice_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_08.red"
    },
    11318: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Angel_T1.red"
    },
    4028: {
      description: "P_Ice_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_10.red"
    },
    4029: {
      description: "P_Ice_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_11.red"
    },
    4030: {
      description: "P_Ice_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_12.red"
    },
    4031: {
      description: "P_Ice_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_13.red"
    },
    4032: {
      description: "P_Ice_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_14.red"
    },
    4033: {
      description: "P_Ice_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_15.red"
    },
    4034: {
      description: "P_Ice_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_16.red"
    },
    4035: {
      description: "p_ice_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/p_ice_17.red"
    },
    4036: {
      description: "p_ice_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/p_ice_18.red"
    },
    4037: {
      description: "P_Ice_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_20.red"
    },
    4038: {
      description: "P_Ice_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_21.red"
    },
    4039: {
      description: "P_Ice_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_22.red"
    },
    4040: {
      description: "P_Ice_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_23.red"
    },
    4041: {
      description: "P_Ice_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_24.red"
    },
    4042: {
      description: "P_Ice_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_25.red"
    },
    4043: {
      description: "P_Ice_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_26.red"
    },
    4044: {
      description: "P_Ice_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_27.red"
    },
    4045: {
      description: "P_Ice_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_28.red"
    },
    4046: {
      description: "P_Ice_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_29.red"
    },
    4047: {
      description: "P_Ice_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_30.red"
    },
    4048: {
      description: "P_Ice_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_31.red"
    },
    4049: {
      description: "P_Ice_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_32.red"
    },
    4050: {
      description: "P_Ice_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_33.red"
    },
    4051: {
      description: "P_Ice_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_34.red"
    },
    4052: {
      description: "P_Ice_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_35.red"
    },
    4053: {
      description: "P_Ice_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_36.red"
    },
    4054: {
      description: "P_Ice_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_37.red"
    },
    4055: {
      description: "P_Ice_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_38.red"
    },
    4056: {
      description: "P_Ice_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_39.red"
    },
    4057: {
      description: "P_Ice_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_40.red"
    },
    4058: {
      description: "P_Ice_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_41.red"
    },
    4059: {
      description: "P_Ice_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_42.red"
    },
    4060: {
      description: "P_Ice_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_43.red"
    },
    4061: {
      description: "P_Ice_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_44.red"
    },
    4062: {
      description: "P_Ice_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_45.red"
    },
    4063: {
      description: "P_Ice_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_46.red"
    },
    4064: {
      description: "P_Ice_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_47.red"
    },
    4065: {
      description: "P_Ice_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_48.red"
    },
    4066: {
      description: "P_Ice_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_49.red"
    },
    4067: {
      description: "P_Ice_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_50.red"
    },
    4068: {
      description: "P_Ice_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_51.red"
    },
    4069: {
      description: "P_Ice_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_52.red"
    },
    4070: {
      description: "P_Ice_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_53.red"
    },
    4071: {
      description: "P_Ice_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_54.red"
    },
    4072: {
      description: "P_Ice_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_55.red"
    },
    4073: {
      description: "P_Ice_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_56.red"
    },
    4074: {
      description: "P_Ice_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_57.red"
    },
    4075: {
      description: "P_Ice_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_58.red"
    },
    4076: {
      description: "P_Ice_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_59.red"
    },
    4077: {
      description: "P_Ice_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_60.red"
    },
    4078: {
      description: "P_Ice_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_61.red"
    },
    4079: {
      description: "P_Ice_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_62.red"
    },
    4080: {
      description: "P_Ice_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_63.red"
    },
    4081: {
      description: "P_Ice_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_64.red"
    },
    4082: {
      description: "P_Ice_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_65.red"
    },
    11603: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Bar_Ceiling.red"
    },
    4084: {
      description: "P_Ice_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_67.red"
    },
    4085: {
      description: "P_Ice_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_68.red"
    },
    4086: {
      description: "P_Ice_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_69.red"
    },
    4087: {
      description: "P_Ice_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_70.red"
    },
    4088: {
      description: "P_Ice_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_71.red"
    },
    4089: {
      description: "P_Ice_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_72.red"
    },
    4090: {
      description: "P_Ice_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_73.red"
    },
    4091: {
      description: "P_Ice_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_74.red"
    },
    4092: {
      description: "P_Ice_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_75.red"
    },
    4093: {
      description: "P_Ice_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_76.red"
    },
    4094: {
      description: "P_Ice_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_77.red"
    },
    4095: {
      description: "P_Ice_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_78.red"
    },
    4096: {
      description: "P_Ice_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_79.red"
    },
    4097: {
      description: "P_Ice_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_80.red"
    },
    4098: {
      description: "P_Ice_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_81.red"
    },
    4099: {
      description: "P_Ice_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_82.red"
    },
    4100: {
      description: "P_Ice_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_83.red"
    },
    4101: {
      description: "P_Lava_01_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_01_S.red"
    },
    4102: {
      description: "P_Lava_02_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_02_S.red"
    },
    4103: {
      description: "P_Lava_03_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_03_S.red"
    },
    4104: {
      description: "P_Lava_04_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_04_S.red"
    },
    4105: {
      description: "P_Lava_05_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_05_S.red"
    },
    4106: {
      description: "P_Lava_06_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_06_S.red"
    },
    4107: {
      description: "P_Lava_07_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_07_S.red"
    },
    4108: {
      description: "P_Lava_08_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_08_S.red"
    },
    4109: {
      description: "P_Lava_09_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_09_S.red"
    },
    4110: {
      description: "P_Lava_10_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_10_S.red"
    },
    4111: {
      description: "P_Lava_11_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_11_S.red"
    },
    4112: {
      description: "P_Lava_12_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_12_S.red"
    },
    4113: {
      description: "P_Lava_13_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_13_S.red"
    },
    4114: {
      description: "P_Lava_14_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_14_S.red"
    },
    4115: {
      description: "P_Lava_15_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_15_S.red"
    },
    4116: {
      description: "P_Lava_16_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_16_S.red"
    },
    4117: {
      description: "P_Lava_17_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_17_S.red"
    },
    4118: {
      description: "P_Lava_18_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_18_S.red"
    },
    4119: {
      description: "P_Lava_19_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_19_S.red"
    },
    4120: {
      description: "P_Lava_20_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_20_S.red"
    },
    4121: {
      description: "P_Lava_21_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_21_S.red"
    },
    4122: {
      description: "P_Lava_22_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_22_S.red"
    },
    4123: {
      description: "P_Lava_23_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_23_S.red"
    },
    4124: {
      description: "P_Lava_24_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_24_S.red"
    },
    4125: {
      description: "P_Lava_25_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_25_S.red"
    },
    4126: {
      description: "P_Lava_26_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_26_S.red"
    },
    4127: {
      description: "P_Lava_27_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_27_S.red"
    },
    4128: {
      description: "P_Lava_28_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_28_S.red"
    },
    4129: {
      description: "P_Lava_29_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_29_S.red"
    },
    4130: {
      description: "P_Lava_30_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_30_S.red"
    },
    4131: {
      description: "P_Lava_31_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_31_S.red"
    },
    4132: {
      description: "P_Lava_32_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_32_S.red"
    },
    4133: {
      description: "P_Lava_33_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_33_S.red"
    },
    4134: {
      description: "P_Lava_34_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_34_S.red"
    },
    4135: {
      description: "P_Lava_35_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_35_S.red"
    },
    4136: {
      description: "P_Lava_36_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_36_S.red"
    },
    4137: {
      description: "P_Lava_37_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_37_S.red"
    },
    4138: {
      description: "P_Lava_38_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_38_S.red"
    },
    4139: {
      description: "P_Lava_39_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_39_S.red"
    },
    4140: {
      description: "P_Lava_40_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_40_S.red"
    },
    4141: {
      description: "P_Lava_41_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_41_S.red"
    },
    4142: {
      description: "P_Lava_42_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_42_S.red"
    },
    4143: {
      description: "P_Lava_43_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_43_S.red"
    },
    4144: {
      description: "P_Lava_44_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_44_S.red"
    },
    4145: {
      description: "P_Lava_45_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_45_S.red"
    },
    4146: {
      description: "P_Lava_46_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_46_S.red"
    },
    4147: {
      description: "P_Lava_47_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_47_S.red"
    },
    4148: {
      description: "P_Lava_48_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_48_S.red"
    },
    4149: {
      description: "P_Lava_49_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_49_S.red"
    },
    4150: {
      description: "P_Lava_50_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_50_S.red"
    },
    4151: {
      description: "P_Lava_51_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_51_S.red"
    },
    4152: {
      description: "P_Lava_52_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_52_S.red"
    },
    4153: {
      description: "P_Lava_53_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_53_S.red"
    },
    4154: {
      description: "P_Lava_54_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_54_S.red"
    },
    4155: {
      description: "P_Lava_55_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_55_S.red"
    },
    4156: {
      description: "P_Lava_56_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_56_S.red"
    },
    4157: {
      description: "P_Lava_57_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_57_S.red"
    },
    4158: {
      description: "P_Lava_58_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_58_S.red"
    },
    4159: {
      description: "P_Lava_59_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_59_S.red"
    },
    4160: {
      description: "P_Lava_60_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_60_S.red"
    },
    4161: {
      description: "P_Lava_61_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_61_S.red"
    },
    4162: {
      description: "P_Lava_62_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_62_S.red"
    },
    4163: {
      description: "P_Lava_63_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_63_S.red"
    },
    4164: {
      description: "P_Lava_64_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_64_S.red"
    },
    4165: {
      description: "P_Lava_65_",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Lava/P_Lava_65_S.red"
    },
    4166: {
      description: "p_moon_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_01.red"
    },
    4167: {
      description: "p_moon_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_02.red"
    },
    4168: {
      description: "p_moon_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_03.red"
    },
    4169: {
      description: "p_moon_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_04.red"
    },
    4170: {
      description: "p_moon_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_05.red"
    },
    4171: {
      description: "p_moon_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_06.red"
    },
    4172: {
      description: "p_moon_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_07.red"
    },
    4173: {
      description: "p_moon_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_08.red"
    },
    4174: {
      description: "p_moon_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_09.red"
    },
    4175: {
      description: "p_moon_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_10.red"
    },
    4176: {
      description: "p_moon_10",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_100.red"
    },
    4177: {
      description: "p_moon_10",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_101.red"
    },
    4178: {
      description: "p_moon_10",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_102.red"
    },
    4179: {
      description: "p_moon_10",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_103.red"
    },
    4180: {
      description: "p_moon_10",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_104.red"
    },
    4181: {
      description: "p_moon_10",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_105.red"
    },
    4182: {
      description: "p_moon_10",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_106.red"
    },
    4183: {
      description: "p_moon_10",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_107.red"
    },
    4184: {
      description: "p_moon_10",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_108.red"
    },
    4185: {
      description: "p_moon_10",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_109.red"
    },
    4186: {
      description: "p_moon_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_11.red"
    },
    4187: {
      description: "p_moon_11",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_110.red"
    },
    4188: {
      description: "p_moon_11",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_111.red"
    },
    4189: {
      description: "p_moon_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_12.red"
    },
    4190: {
      description: "p_moon_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_13.red"
    },
    4191: {
      description: "p_moon_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_14.red"
    },
    4192: {
      description: "p_moon_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_15.red"
    },
    4193: {
      description: "p_moon_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_16.red"
    },
    4194: {
      description: "p_moon_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_17.red"
    },
    4195: {
      description: "p_moon_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_18.red"
    },
    4196: {
      description: "p_moon_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_19.red"
    },
    4197: {
      description: "p_moon_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_20.red"
    },
    4198: {
      description: "p_moon_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_21.red"
    },
    4199: {
      description: "p_moon_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_22.red"
    },
    4200: {
      description: "p_moon_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_23.red"
    },
    4201: {
      description: "p_moon_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_24.red"
    },
    4202: {
      description: "p_moon_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_25.red"
    },
    4203: {
      description: "p_moon_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_26.red"
    },
    4204: {
      description: "p_moon_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_27.red"
    },
    4205: {
      description: "p_moon_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_28.red"
    },
    4206: {
      description: "p_moon_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_29.red"
    },
    4207: {
      description: "p_moon_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_30.red"
    },
    4208: {
      description: "p_moon_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_31.red"
    },
    4209: {
      description: "p_moon_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_32.red"
    },
    4210: {
      description: "p_moon_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_33.red"
    },
    4211: {
      description: "p_moon_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_34.red"
    },
    4212: {
      description: "p_moon_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_35.red"
    },
    4213: {
      description: "p_moon_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_36.red"
    },
    4214: {
      description: "p_moon_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_37.red"
    },
    4215: {
      description: "p_moon_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_38.red"
    },
    4216: {
      description: "p_moon_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_39.red"
    },
    4217: {
      description: "p_moon_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_40.red"
    },
    4218: {
      description: "p_moon_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_41.red"
    },
    4219: {
      description: "p_moon_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_42.red"
    },
    4220: {
      description: "p_moon_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_43.red"
    },
    4221: {
      description: "p_moon_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_44.red"
    },
    4222: {
      description: "p_moon_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_45.red"
    },
    4223: {
      description: "p_moon_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_46.red"
    },
    4224: {
      description: "p_moon_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_47.red"
    },
    4225: {
      description: "p_moon_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_48.red"
    },
    4226: {
      description: "p_moon_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_49.red"
    },
    4227: {
      description: "p_moon_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_50.red"
    },
    4228: {
      description: "p_moon_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_51.red"
    },
    4229: {
      description: "p_moon_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_52.red"
    },
    4230: {
      description: "p_moon_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_53.red"
    },
    4231: {
      description: "p_moon_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_54.red"
    },
    4232: {
      description: "p_moon_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_55.red"
    },
    4233: {
      description: "p_moon_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_56.red"
    },
    4234: {
      description: "p_moon_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_57.red"
    },
    4235: {
      description: "p_moon_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_58.red"
    },
    4236: {
      description: "p_moon_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_59.red"
    },
    4237: {
      description: "p_moon_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_60.red"
    },
    4238: {
      description: "p_moon_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_61.red"
    },
    4239: {
      description: "p_moon_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_62.red"
    },
    4240: {
      description: "p_moon_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_63.red"
    },
    4241: {
      description: "p_moon_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_64.red"
    },
    4242: {
      description: "p_moon_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_65.red"
    },
    4243: {
      description: "p_moon_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_66.red"
    },
    4244: {
      description: "p_moon_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_67.red"
    },
    4245: {
      description: "p_moon_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_68.red"
    },
    4246: {
      description: "p_moon_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_69.red"
    },
    4247: {
      description: "p_moon_70",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_70'.red"
    },
    4248: {
      description: "p_moon_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_71.red"
    },
    4249: {
      description: "p_moon_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_72.red"
    },
    4250: {
      description: "p_moon_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_73.red"
    },
    4251: {
      description: "p_moon_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_74.red"
    },
    4252: {
      description: "p_moon_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_75.red"
    },
    4253: {
      description: "p_moon_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_76.red"
    },
    4254: {
      description: "p_moon_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_77.red"
    },
    4255: {
      description: "p_moon_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_78.red"
    },
    4256: {
      description: "p_moon_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_79.red"
    },
    4257: {
      description: "p_moon_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_80.red"
    },
    4258: {
      description: "p_moon_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_81.red"
    },
    4259: {
      description: "p_moon_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_82.red"
    },
    4260: {
      description: "p_moon_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_83.red"
    },
    4261: {
      description: "p_moon_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_84.red"
    },
    4262: {
      description: "p_moon_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_85.red"
    },
    4263: {
      description: "p_moon_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_86.red"
    },
    4264: {
      description: "p_moon_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_87.red"
    },
    4265: {
      description: "p_moon_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_88.red"
    },
    4266: {
      description: "p_moon_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_89.red"
    },
    4267: {
      description: "p_moon_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_90.red"
    },
    4268: {
      description: "p_moon_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_91.red"
    },
    4269: {
      description: "p_moon_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_92.red"
    },
    4270: {
      description: "p_moon_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_93.red"
    },
    4271: {
      description: "p_moon_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_94.red"
    },
    4272: {
      description: "p_moon_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_95.red"
    },
    4273: {
      description: "p_moon_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_96.red"
    },
    4274: {
      description: "p_moon_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_97.red"
    },
    4275: {
      description: "p_moon_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_98.red"
    },
    4276: {
      description: "p_moon_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Moon/p_moon_99.red"
    },
    4277: {
      description: "P_Ocean_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_01.red"
    },
    4278: {
      description: "P_Ocean_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_02.red"
    },
    4279: {
      description: "P_Ocean_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_03.red"
    },
    4280: {
      description: "P_Ocean_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_04.red"
    },
    4281: {
      description: "P_Ocean_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_05.red"
    },
    4282: {
      description: "P_Ocean_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_06.red"
    },
    4283: {
      description: "P_Ocean_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_07.red"
    },
    4284: {
      description: "P_Ocean_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_08.red"
    },
    4285: {
      description: "P_Ocean_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_09.red"
    },
    4286: {
      description: "P_Ocean_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_10.red"
    },
    4287: {
      description: "P_Ocean_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_11.red"
    },
    4288: {
      description: "P_Ocean_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_12.red"
    },
    4289: {
      description: "P_Ocean_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_13.red"
    },
    4290: {
      description: "P_Ocean_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_14.red"
    },
    4291: {
      description: "P_Ocean_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_15.red"
    },
    4292: {
      description: "P_Ocean_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_16.red"
    },
    4293: {
      description: "P_Ocean_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_17.red"
    },
    4294: {
      description: "P_Ocean_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_18.red"
    },
    4295: {
      description: "P_Ocean_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_19.red"
    },
    4296: {
      description: "P_Ocean_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_20.red"
    },
    4297: {
      description: "P_Ocean_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ocean/P_Ocean_21.red"
    },
    4298: {
      description: "P_Plasma_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Plasma/P_Plasma_01.red"
    },
    4299: {
      description: "P_Plasma_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Plasma/P_Plasma_02.red"
    },
    4300: {
      description: "P_Plasma_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Plasma/P_Plasma_03.red"
    },
    4301: {
      description: "P_Plasma_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Plasma/P_Plasma_04.red"
    },
    4302: {
      description: "P_Plasma_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Plasma/P_Plasma_05.red"
    },
    4303: {
      description: "P_Plasma_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Plasma/P_Plasma_06.red"
    },
    4304: {
      description: "P_Plasma_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Plasma/P_Plasma_07.red"
    },
    4305: {
      description: "P_Plasma_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Plasma/P_Plasma_08.red"
    },
    4306: {
      description: "P_Plasma_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Plasma/P_Plasma_09.red"
    },
    4307: {
      description: "P_Plasma_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Plasma/P_Plasma_10.red"
    },
    4308: {
      description: "P_Plasma_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Plasma/P_Plasma_11.red"
    },
    4309: {
      description: "P_Plasma_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Plasma/P_Plasma_12.red"
    },
    4310: {
      description: "P_Plasma_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Plasma/P_Plasma_13.red"
    },
    4311: {
      description: "P_SandStorm_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_01.red"
    },
    4312: {
      description: "P_SandStorm_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_02.red"
    },
    4313: {
      description: "P_SandStorm_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_03.red"
    },
    4314: {
      description: "P_SandStorm_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_04.red"
    },
    4315: {
      description: "P_SandStorm_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_05.red"
    },
    4316: {
      description: "P_SandStorm_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_06.red"
    },
    4317: {
      description: "P_SandStorm_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_07.red"
    },
    4318: {
      description: "P_SandStorm_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_08.red"
    },
    4319: {
      description: "P_SandStorm_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_09.red"
    },
    4320: {
      description: "P_SandStorm_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_10.red"
    },
    4321: {
      description: "P_SandStorm_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_11.red"
    },
    4322: {
      description: "P_SandStorm_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_12.red"
    },
    4323: {
      description: "P_SandStorm_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_13.red"
    },
    4324: {
      description: "P_SandStorm_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_14.red"
    },
    4325: {
      description: "P_SandStorm_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_15.red"
    },
    4326: {
      description: "P_SandStorm_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_16.red"
    },
    4327: {
      description: "P_SandStorm_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_17.red"
    },
    4328: {
      description: "P_SandStorm_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_18.red"
    },
    4329: {
      description: "P_SandStorm_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_19.red"
    },
    4330: {
      description: "P_SandStorm_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_20.red"
    },
    4331: {
      description: "P_SandStorm_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_21.red"
    },
    4332: {
      description: "P_SandStorm_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_22.red"
    },
    4333: {
      description: "P_SandStorm_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_23.red"
    },
    4334: {
      description: "P_SandStorm_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_24.red"
    },
    4335: {
      description: "P_SandStorm_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_25.red"
    },
    4336: {
      description: "P_SandStorm_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_26.red"
    },
    4337: {
      description: "P_SandStorm_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_27.red"
    },
    4338: {
      description: "P_SandStorm_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_28.red"
    },
    4339: {
      description: "P_SandStorm_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_29.red"
    },
    4340: {
      description: "P_SandStorm_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_30.red"
    },
    4341: {
      description: "P_SandStorm_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_31.red"
    },
    4342: {
      description: "P_SandStorm_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_32.red"
    },
    4343: {
      description: "P_SandStorm_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_33.red"
    },
    4344: {
      description: "P_SandStorm_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_34.red"
    },
    4345: {
      description: "P_SandStorm_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_35.red"
    },
    4346: {
      description: "P_SandStorm_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_36.red"
    },
    4347: {
      description: "P_SandStorm_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_37.red"
    },
    4348: {
      description: "P_SandStorm_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_38.red"
    },
    4349: {
      description: "P_SandStorm_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_39.red"
    },
    4350: {
      description: "P_SandStorm_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_40.red"
    },
    4351: {
      description: "P_SandStorm_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_41.red"
    },
    4352: {
      description: "P_SandStorm_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_42.red"
    },
    4353: {
      description: "P_SandStorm_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_43.red"
    },
    4354: {
      description: "P_SandStorm_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_44.red"
    },
    4355: {
      description: "P_SandStorm_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_45.red"
    },
    4356: {
      description: "P_SandStorm_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_46.red"
    },
    4357: {
      description: "P_SandStorm_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_47.red"
    },
    4358: {
      description: "P_SandStorm_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_48.red"
    },
    4359: {
      description: "P_SandStorm_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_49.red"
    },
    4360: {
      description: "P_SandStorm_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_50.red"
    },
    4361: {
      description: "P_SandStorm_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_51.red"
    },
    4362: {
      description: "P_SandStorm_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_52.red"
    },
    4363: {
      description: "P_SandStorm_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_53.red"
    },
    4364: {
      description: "P_SandStorm_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_54.red"
    },
    4365: {
      description: "P_SandStorm_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_55.red"
    },
    4366: {
      description: "P_SandStorm_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_56.red"
    },
    4367: {
      description: "P_SandStorm_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_57.red"
    },
    4368: {
      description: "P_SandStorm_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_58.red"
    },
    4369: {
      description: "P_SandStorm_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_59.red"
    },
    4370: {
      description: "P_SandStorm_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_60.red"
    },
    4371: {
      description: "P_SandStorm_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_61.red"
    },
    4372: {
      description: "P_SandStorm_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_62.red"
    },
    4373: {
      description: "P_SandStorm_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_63.red"
    },
    4374: {
      description: "P_SandStorm_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_64.red"
    },
    4375: {
      description: "P_SandStorm_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_65.red"
    },
    4376: {
      description: "P_SandStorm_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_66.red"
    },
    4377: {
      description: "P_SandStorm_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_67.red"
    },
    4378: {
      description: "P_SandStorm_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_68.red"
    },
    4379: {
      description: "P_SandStorm_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_69.red"
    },
    4380: {
      description: "P_SandStorm_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_70.red"
    },
    4381: {
      description: "P_SandStorm_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_71.red"
    },
    4382: {
      description: "P_SandStorm_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_72.red"
    },
    4383: {
      description: "P_SandStorm_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_73.red"
    },
    4384: {
      description: "P_SandStorm_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_74.red"
    },
    4385: {
      description: "P_SandStorm_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_75.red"
    },
    4386: {
      description: "P_SandStorm_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_77.red"
    },
    4387: {
      description: "P_SandStorm_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_78.red"
    },
    4388: {
      description: "P_SandStorm_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_79.red"
    },
    4389: {
      description: "P_SandStorm_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_80.red"
    },
    4390: {
      description: "P_SandStorm_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_81.red"
    },
    4391: {
      description: "P_SandStorm_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_82.red"
    },
    4392: {
      description: "P_SandStorm_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_83.red"
    },
    4393: {
      description: "P_SandStorm_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_84.red"
    },
    4394: {
      description: "P_SandStorm_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/SandStorm/P_SandStorm_85.red"
    },
    4395: {
      description: "P_Shattered_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Shattered/P_Shattered_01.red"
    },
    4396: {
      description: "P_Shattered_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Shattered/P_Shattered_02.red"
    },
    4397: {
      description: "P_Shattered_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Shattered/P_Shattered_03.red"
    },
    4398: {
      description: "P_Shattered_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Shattered/P_Shattered_04.red"
    },
    4399: {
      description: "P_Shattered_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Shattered/P_Shattered_05.red"
    },
    4400: {
      description: "P_Terrestrial_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_01.red"
    },
    4401: {
      description: "P_Terrestrial_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_02.red"
    },
    4402: {
      description: "P_Terrestrial_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_03.red"
    },
    4403: {
      description: "P_Terrestrial_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_04.red"
    },
    4404: {
      description: "P_Terrestrial_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_05.red"
    },
    4405: {
      description: "P_Terrestrial_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_06.red"
    },
    4406: {
      description: "P_Terrestrial_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_07.red"
    },
    4407: {
      description: "P_Terrestrial_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_08.red"
    },
    4408: {
      description: "P_Terrestrial_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_09.red"
    },
    4409: {
      description: "P_Terrestrial_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_10.red"
    },
    4410: {
      description: "P_Terrestrial_10",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_100.red"
    },
    4411: {
      description: "P_Terrestrial_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_11.red"
    },
    4412: {
      description: "P_Terrestrial_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_12.red"
    },
    4413: {
      description: "P_Terrestrial_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_13.red"
    },
    4414: {
      description: "P_Terrestrial_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_14.red"
    },
    4415: {
      description: "P_Terrestrial_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_15.red"
    },
    4416: {
      description: "P_Terrestrial_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_16.red"
    },
    4417: {
      description: "P_Terrestrial_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_17.red"
    },
    4418: {
      description: "P_Terrestrial_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_18.red"
    },
    4419: {
      description: "P_Terrestrial_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_19.red"
    },
    4420: {
      description: "P_Terrestrial_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_20.red"
    },
    4421: {
      description: "P_Terrestrial_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_21.red"
    },
    4422: {
      description: "P_Terrestrial_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_22.red"
    },
    4423: {
      description: "P_Terrestrial_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_23.red"
    },
    4424: {
      description: "P_Terrestrial_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_24.red"
    },
    4425: {
      description: "P_Terrestrial_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_25.red"
    },
    4426: {
      description: "P_Terrestrial_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_26.red"
    },
    4427: {
      description: "P_Terrestrial_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_27.red"
    },
    4428: {
      description: "P_Terrestrial_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_28.red"
    },
    4429: {
      description: "P_Terrestrial_2",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_29.red"
    },
    4430: {
      description: "P_Terrestrial_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_30.red"
    },
    4431: {
      description: "P_Terrestrial_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_31.red"
    },
    4432: {
      description: "P_Terrestrial_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_32.red"
    },
    4433: {
      description: "P_Terrestrial_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_33.red"
    },
    4434: {
      description: "P_Terrestrial_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_34.red"
    },
    4435: {
      description: "P_Terrestrial_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_35.red"
    },
    4436: {
      description: "P_Terrestrial_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_36.red"
    },
    4437: {
      description: "P_Terrestrial_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_37.red"
    },
    4438: {
      description: "P_Terrestrial_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_38.red"
    },
    4439: {
      description: "P_Terrestrial_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_39.red"
    },
    4440: {
      description: "P_Terrestrial_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_40.red"
    },
    4441: {
      description: "P_Terrestrial_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_41.red"
    },
    4442: {
      description: "P_Terrestrial_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_42.red"
    },
    4443: {
      description: "P_Terrestrial_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_43.red"
    },
    4444: {
      description: "P_Terrestrial_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_44.red"
    },
    4445: {
      description: "P_Terrestrial_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_45.red"
    },
    4446: {
      description: "P_Terrestrial_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_46.red"
    },
    4447: {
      description: "P_Terrestrial_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_47.red"
    },
    4448: {
      description: "P_Terrestrial_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_48.red"
    },
    4449: {
      description: "P_Terrestrial_4",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_49.red"
    },
    4450: {
      description: "P_Terrestrial_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_50.red"
    },
    4451: {
      description: "P_Terrestrial_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_51.red"
    },
    4452: {
      description: "P_Terrestrial_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_52.red"
    },
    4453: {
      description: "P_Terrestrial_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_53.red"
    },
    4454: {
      description: "P_Terrestrial_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_54.red"
    },
    4455: {
      description: "P_Terrestrial_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_55.red"
    },
    4456: {
      description: "P_Terrestrial_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_56.red"
    },
    4457: {
      description: "P_Terrestrial_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_57.red"
    },
    4458: {
      description: "P_Terrestrial_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_58.red"
    },
    4459: {
      description: "P_Terrestrial_5",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_59.red"
    },
    4460: {
      description: "P_Terrestrial_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_60.red"
    },
    4461: {
      description: "P_Terrestrial_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_61.red"
    },
    4462: {
      description: "P_Terrestrial_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_62.red"
    },
    4463: {
      description: "P_Terrestrial_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_63.red"
    },
    4464: {
      description: "P_Terrestrial_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_64.red"
    },
    4465: {
      description: "P_Terrestrial_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_65.red"
    },
    4466: {
      description: "P_Terrestrial_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_66.red"
    },
    4467: {
      description: "P_Terrestrial_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_67.red"
    },
    4468: {
      description: "P_Terrestrial_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_68.red"
    },
    4469: {
      description: "P_Terrestrial_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_69.red"
    },
    4470: {
      description: "P_Terrestrial_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_70.red"
    },
    4471: {
      description: "P_Terrestrial_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_71.red"
    },
    4472: {
      description: "P_Terrestrial_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_72.red"
    },
    4473: {
      description: "P_Terrestrial_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_73.red"
    },
    4474: {
      description: "P_Terrestrial_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_74.red"
    },
    4475: {
      description: "P_Terrestrial_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_75.red"
    },
    4476: {
      description: "P_Terrestrial_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_76.red"
    },
    4477: {
      description: "P_Terrestrial_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_77.red"
    },
    4478: {
      description: "P_Terrestrial_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_78.red"
    },
    4479: {
      description: "P_Terrestrial_7",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_79.red"
    },
    4480: {
      description: "P_Terrestrial_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_80.red"
    },
    4481: {
      description: "P_Terrestrial_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_81.red"
    },
    4482: {
      description: "P_Terrestrial_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_82.red"
    },
    4483: {
      description: "P_Terrestrial_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_83.red"
    },
    4484: {
      description: "P_Terrestrial_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_84.red"
    },
    4485: {
      description: "P_Terrestrial_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_85.red"
    },
    4486: {
      description: "P_Terrestrial_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_86.red"
    },
    4487: {
      description: "P_Terrestrial_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_87.red"
    },
    4488: {
      description: "P_Terrestrial_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_88.red"
    },
    4489: {
      description: "P_Terrestrial_8",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_89.red"
    },
    4490: {
      description: "P_Terrestrial_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_90.red"
    },
    4491: {
      description: "P_Terrestrial_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_91.red"
    },
    4492: {
      description: "P_Terrestrial_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_92.red"
    },
    4493: {
      description: "P_Terrestrial_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_93.red"
    },
    4494: {
      description: "P_Terrestrial_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_94.red"
    },
    4495: {
      description: "P_Terrestrial_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_95.red"
    },
    4496: {
      description: "P_Terrestrial_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_96.red"
    },
    4497: {
      description: "P_Terrestrial_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_97.red"
    },
    4498: {
      description: "P_Terrestrial_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_98.red"
    },
    4499: {
      description: "P_Terrestrial_9",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_99.red"
    },
    4500: {
      description: "p_thunder_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Thunder/p_thunder_01.red"
    },
    4501: {
      description: "p_thunder_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Thunder/p_thunder_02.red"
    },
    4502: {
      description: "p_thunder_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Thunder/p_thunder_03.red"
    },
    4503: {
      description: "p_thunder_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Thunder/p_thunder_07.red"
    },
    4504: {
      description: "p_thunder_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Thunder/p_thunder_08.red"
    },
    4505: {
      description: "p_thunder_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Thunder/p_thunder_09.red"
    },
    4506: {
      description: "p_thunder_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Thunder/p_thunder_10.red"
    },
    4507: {
      description: "p_thunder_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Thunder/p_thunder_11.red"
    },
    4508: {
      description: "p_thunder_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Thunder/p_thunder_12.red"
    },
    4509: {
      description: "p_thunder_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Thunder/p_thunder_13.red"
    },
    4510: {
      description: "p_thunder_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Thunder/p_thunder_14.red"
    },
    4511: {
      description: "p_thunder_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Thunder/p_thunder_15.red"
    },
    4512: {
      description: "p_thunder_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Thunder/p_thunder_16.red"
    },
    4513: {
      description: "p_thunder_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Thunder/p_thunder_17.red"
    },
    4514: {
      description: "p_thunder_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Thunder/p_thunder_18.red"
    },
    4515: {
      description: "Amarr Battleship Imperial Issue Apocalypse",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB1/Imperial/AB1_T1_Imperial.red",
      colorScheme: "TurretPreset_Imperial",
      race: "Amarr"
    },
    4517: {
      description: "Science Zephyr",
      graphicFile: "res:/dx9/Model/Ship/Science/Pes1/Pes1.red",
      colorScheme: "TurretPreset_ORE_T1"
    },
    4522: {
      description: "A processing station that is used on terrestrial planets. - TerrestrialProcessingStationT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/terrestrial/processing/proct_t1/proct_t1.red"
    },
    4523: {
      description: "Tier 2 Terrestrial Processing Station. - TerrestrialProcessingStationT2",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/terrestrial/processing/proct_t2/proct_t2.red"
    },
    4524: {
      description: "A Terrestrial Processing Station UI pin Tier 3. - TerrestrialProcessingStationT3",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/terrestrial/processing/proct_t3/proct_t3.red"
    },
    4525: {
      description: "A Terrestrial Processing Station UI Pin Tier 4. - TerrestrialProcessingStationT4",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/terrestrial/processing/proct_t4/proct_t4.red"
    },
    4526: {
      description: "A Terrestrial Processing Station UI Pin Tier 5. - TerrestrialProcessingStationT5",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/terrestrial/processing/proct_t5/proct_t5.red"
    },
    4528: {
      description: "A Oceanic Processing Station UI Pin Tier 1. - OceanicProcessingStationT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/oceanic/processing/proco_t1/proco_t1.red"
    },
    4529: {
      description: "An Oceanic Processing Station UI Pin Tier 2. - OceanicProcessingStationT2",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/oceanic/processing/proco_t2/proco_t2.red"
    },
    4530: {
      description: "An Oceanic Processing Station UI Pin Tier 3. - OceanicProcessingStationT3",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/oceanic/processing/proco_t3/proco_t3.red"
    },
    4533: {
      description: "A Processing Station UI Pin for Hostile Planets, Tier 1. - HostileProcessingStationT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/hostile/processing/proch_t1/proch_t1.red"
    },
    4534: {
      description: "A Processing Station for Hostile Planets, Tier 2. - HostileProcessingStationT2",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/hostile/processing/proch_t2/proch_t2.red"
    },
    4535: {
      description: "A Processing Station for Hostile Planets, Tier 3. - HostileProcessingStationT3",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/hostile/processing/proch_t3/proch_t3.red"
    },
    4538: {
      description: "Gas Processing Station UI Pin Tier 1. - GasProcessingStationT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/gas/processing/procg_t1/procg_t1.red"
    },
    4539: {
      description: "Gas Processing Station UI Pin Tier 2. - GasProcessingStationT2",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/gas/processing/procg_t2/procg_t2.red"
    },
    4540: {
      description: "Gas Processing Station UI Pin Tier 3. - GasProcessingStationT3",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/gas/processing/procg_t3/procg_t3.red"
    },
    4541: {
      description: "Gas Processing Station UI Pin Tier 4. - GasProcessingStationT4",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/gas/processing/procg_t4/procg_t4.red"
    },
    4543: {
      description: "Terrestrial Extractor Station UI Pin Tier 1 - TerrestrialExtractionPinT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/terrestrial/extractor/extt_t1/extt_t1.red"
    },
    4544: {
      description: "Terrestrial Extractor UI Pin Tier 2. - TerrestrialExtractionPinT2",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/terrestrial/extractor/extt_t2/extt_t2.red"
    },
    4545: {
      description: "Terrestrial Extractor UI Pin Tier 3. - TerrestrialExtractionPinT3",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/terrestrial/extractor/extt_t3/extt_t3.red"
    },
    4546: {
      description: "Terrestrial Extraction UI Pin Tier 4. - TerrestrialExtractionPinT4",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/terrestrial/extractor/extt_t4/extt_t4.red"
    },
    4547: {
      description: "Oceanic Extraction UI Pin Tier 1. - OceanicExtractionPinT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/oceanic/extractor/exto_t1/exto_t1.red"
    },
    4548: {
      description: "Oceanic Extraction UI Pin Tier 2. - OceanicExtractionPinT2",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/oceanic/extractor/exto_t2/exto_t2.red"
    },
    4549: {
      description: "Oceanic Extraction UI Pin Tier 3. - OceanicExtractionPinT3",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/oceanic/extractor/exto_t3/exto_t3.red"
    },
    4550: {
      description: "Oceanic Extraction Pin Tier 4. - OceanicExtractionPinT4",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/oceanic/extractor/exto_t4/exto_t4.red"
    },
    4551: {
      description: "Hostile Extraction Pin Tier 1. - HostileExtractionPinT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/hostile/extractor/exth_t1/exth_t1.red"
    },
    4552: {
      description: "Hostile Extraction UI Pin Tier 2. - HostileExtractionPinT2",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/hostile/extractor/exth_t2/exth_t2.red"
    },
    4553: {
      description: "Hostile Extraction UI Pin Tier 3. - HostileExtractionPinT3",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/hostile/extractor/exth_t3/exth_t3.red"
    },
    4554: {
      description: "Hostile Extraction UI Pin Tier 4. - HostileExtractionPinT4",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/hostile/extractor/exth_t4/exth_t4.red"
    },
    4555: {
      description: "Gas Extraction UI Pin Tier 1. - GasExtractionPinT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/gas/extractor/extg_t1/extg_t1.red"
    },
    4556: {
      description: "Gas Extraction UI Pin Tier 2. - GasExtractionPinT2",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/gas/extractor/extg_t2/extg_t2.red"
    },
    4559: {
      description: "Terrestrial Spaceport UI Pin Tier 1. - TerrestrialSpaceportT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/terrestrial/spaceport/portt_t1/portt_t1.red"
    },
    4560: {
      description: "Terrestrial Spaceport UI Pin Tier 2. - TerrestrialSpaceportT2",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/terrestrial/spaceport/portt_t2/portt_t2.red"
    },
    4561: {
      description: "Oceanic Spaceport UI Pin Tier 1. - OceanicSpaceportT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/oceanic/spaceport/porto_t1/porto_t1.red"
    },
    4563: {
      description: "Gas Spaceport UI Pin Tier 1. - GasSpaceportT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/gas/spaceport/portg_t1/portg_t1.red"
    },
    4564: {
      description: "Hostile Spaceport UI Pin Tier 1. - HostileSpaceportT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/hostile/spaceport/porth_t1/porth_t1.red"
    },
    4566: {
      description: "Terrestrial Command UI Pin Tier 1. - TerrestrialCommandT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/terrestrial/command/commt_t1/commt_t1.red"
    },
    4567: {
      description: "Oceanic Command UI Pin Tier 1. - OceanicCommandT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/oceanic/command/commo_t1/commo_t1.red"
    },
    4568: {
      description: "Hostile Command UI Pin Tier 1. - HostileCommandT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/hostile/command/commh_t1/commh_t1.red"
    },
    4569: {
      description: "Gas Command UI Pin Tier 1. - GasCommandT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/gas/command/commg_t1/commg_t1.red"
    },
    4570: {
      description: "Terrestrial Storage UI Pin Tier 1. - TerrestrialStorageT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/terrestrial/storage/stort_t1/stort_t1.red"
    },
    4571: {
      description: "Oceanic Storage UI Pin Tier 1. - OceanicStorageT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/oceanic/storage/storo_t1/storo_t1.red"
    },
    4572: {
      description: "Hostile Storage UI Pin Tier 1. - HostileStorageT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/hostile/storage/storh_t1/storh_t1.red"
    },
    4573: {
      description: "Gas Storage UI Pin Tier 1. - GasStorageT1",
      graphicFile: "res:/dx9/model/worldobject/orbital/ui/gas/storage/storg_t1/storg_t1.red"
    },
    4578: {
      description: "Structure for Orbital Delivery - OrbitalDeliveryStructure",
      graphicFile: "res:/dx9/model/worldobject/orbital/structures/orbitaldelivery/ods01.red"
    },
    4579: {
      description: "Structure for Orbital Hangar. - OrbitalHangarStructure",
      graphicFile: "res:/dx9/Model/worldobject/Orbital/Structures/OrbitalHangar/OHS01.red"
    },
    11801: {
      graphicFile: "res:/dx9/scene/Universe/a15_cube.red"
    },
    11324: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Caldari_T1.red"
    },
    11597: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Ceiling/Ceiling_05_06_11_Ama_Combo.red"
    },
    11710: {
      graphicFile: "res:/Graphics/Interior/Testscenes/Lighttest/Cube_Base.red"
    },
    11711: {
      graphicFile: "res:/Graphics/Interior/Testscenes/Lighttest/Floor_base.red"
    },
    11712: {
      graphicFile: "res:/Graphics/Interior/Testscenes/Lighttest/Roof_Base.red"
    },
    11713: {
      graphicFile: "res:/Graphics/Interior/Testscenes/Lighttest/Room_Base.red"
    },
    11714: {
      graphicFile: "res:/Graphics/Interior/Testscenes/Lighttest/SolidRoof_base.red"
    },
    11715: {
      graphicFile: "res:/Graphics/Interior/Testscenes/Lighttest/WallBoxLarge_base.red"
    },
    11716: {
      graphicFile: "res:/Graphics/Interior/Testscenes/Lighttest/WallBoxSmall_base.red"
    },
    11717: {
      graphicFile: "res:/Graphics/Interior/Testscenes/Lighttest/WallExterior_base.red"
    },
    11718: {
      graphicFile: "res:/Graphics/Interior/Testscenes/Lighttest/WallInterior_Base.red"
    },
    11583: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Wall/Wall_04_05_08_Ama_Combo.red"
    },
    11719: {
      graphicFile: "res:/Graphics/Placeable/Amarr/Walkway_Occlusion_Ama/Walkway_Occlusion_Ama.red"
    },
    11616: {
      graphicFile: "res:/Graphics/Interior/Gallente/Establishment_Test1/Bar_Floor_Small.red"
    },
    11721: {
      graphicFile: "res:/Graphics/Placeable/Caldari/Walkway_Occlusion_Cal/Walkway_Occlusion_Cal.red"
    },
    11722: {
      graphicFile: "res:/Graphics/Placeable/Amarr/Undock_Holo_Unit_01_Ama/Undock_Holo_Unit_01_Ama.red"
    },
    11723: {
      graphicFile: "res:/Graphics/Placeable/Gallente/Undock_Holo_Unit_01_Gal/Undock_Holo_Unit_01_Gal.red"
    },
    11724: {
      graphicFile: "res:/Graphics/Placeable/Gallente/Undock_Holo_Sign_01_Gal/Undock_Holo_Sign_01_Gal.red"
    },
    11325: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Caldari_T2.red"
    },
    11725: {
      graphicFile: "res:/Graphics/Placeable/Amarr/Undock_Holo_Sign_01_Ama/Undock_Holo_Sign_01_Ama.red"
    },
    11726: {
      graphicFile: "res:/Graphics/Placeable/Caldari/Undock_Holo_Sign_01_Cal/Undock_Holo_Sign_01_Cal.red"
    },
    11727: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Undock_Holo_Sign_01_Min/Undock_Holo_Sign_01_Min.red"
    },
    11728: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Walkway_Occlusion_Min/Walkway_Occlusion_Min.red"
    },
    11729: {
      graphicFile: "res:/Graphics/Placeable/Minmatar/Walkway_Pod_Tubes_01_Min/Walkway_Pod_Tubes_01_Min.red"
    },
    11591: {
      graphicFile: "res:/Graphics/Interior/Amarr/Modular_Wall/Wall_12_13_14_Ama_Combo.red"
    },
    11730: {
      graphicFile: "res:/Graphics/Interior/Testscenes/Lighttest/Test_Hard_01.red"
    },
    11735: {
      graphicFile: "res:/Graphics/Interior/Testscenes/Lighttest/Test_Split_02.red"
    },
    11326: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Caldari_T3.red"
    },
    11751: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Floor/Floor_Grate_05_Base.red"
    },
    11752: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Floor/Floor_Grate_06_Base.red"
    },
    11753: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Floor/Floor_Grate_07_Base.red"
    },
    11759: {
      graphicFile: "res:/Graphics/Interior/Minmatar/Modular_Floor/Stair_01_Min_06.red"
    },
    11760: {
      graphicFile: "res:/Graphics/Placeable/Caldari/Walkway_Pod_Tubes_01_Cal/Walkway_Pod_Tubes_01_Cal.red"
    },
    11761: {
      graphicFile: "res:/Graphics/Placeable/Amarr/Walkway_Pod_Tubes_01_Ama/Walkway_Pod_Tubes_01_Ama.red"
    },
    11762: {
      graphicFile: "res:/Graphics/Placeable/Gallente/Walkway_Pod_Tubes_01_Gal/Walkway_Pod_Tubes_01_Gal.red"
    },
    11764: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Cq_01_Gal_Base.red"
    },
    11765: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Wall/Cq_02_Gal_Base.red"
    },
    11766: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Ceiling/Cq_Ceiling_Gal.red"
    },
    11767: {
      graphicFile: "res:/Graphics_Test/Interior/Andre/Wall_05_Min_Basetest.red"
    },
    11768: {
      graphicFile: "res:/Graphics/Placeable/Caldari/Railing_TypeA_03_Cal/Railing_TypeA_03_Cal.red"
    },
    11769: {
      graphicFile: "res:/Graphics/Placeable/Caldari/Railing_TypeA_04_Cal/Railing_TypeA_04_Cal.red"
    },
    11770: {
      graphicFile: "res:/Graphics/Placeable/Amarr/Statue_01_Ama/Statue_01_Ama.red"
    },
    11771: {
      graphicFile: "res:/Graphics/Placeable/Amarr/Statue_02_Ama/Statue_02_Ama.red"
    },
    11772: {
      graphicFile: "res:/Graphics/Placeable/Generic/Util_Towel_01_Uni/Util_Towel_01_Uni.red"
    },
    11773: {
      graphicFile: "res:/Graphics/Placeable/Generic/Util_Towel_02_Uni/Util_Towel_02_Uni.red"
    },
    11327: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Caldari_Utility.red"
    },
    11775: {
      description: "Amarr Battlecruiser Oracle",
      graphicFile: "res:/dx9/Model/Ship/Amarr/BattleCruiser/ABc3/ABc3_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    11776: {
      description: "Caldari Battlecruiser Naga",
      graphicFile: "res:/dx9/Model/Ship/Caldari/BattleCruiser/CBc3/CBc3_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    11777: {
      description: "Gallente BattleCruiser Talos",
      graphicFile: "res:/dx9/Model/Ship/Gallente/BattleCruiser/GBc3/GBc3_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    11778: {
      description: "Minmatar Battlecruiser Tornado",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/BattleCruiser/MBC3/MBC3_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    11779: {
      graphicFile: "res:/Graphics/Placeable/TestAssets/AnimationTest_RD/AnimationTest_RD.red"
    },
    11780: {
      graphicFile: "res:/Scene/Askur/askur.red"
    },
    11781: {
      graphicFile: "res:/dx9/Scene/Wormholes/wormhole_class_01.red"
    },
    11782: {
      graphicFile: "res:/dx9/Scene/Wormholes/wormhole_class_02.red"
    },
    11783: {
      graphicFile: "res:/dx9/Scene/Wormholes/wormhole_class_03.red"
    },
    11784: {
      graphicFile: "res:/dx9/Scene/Wormholes/wormhole_class_04.red"
    },
    11786: {
      graphicFile: "res:/dx9/Scene/Wormholes/wormhole_class_06.red"
    },
    11787: {
      graphicFile: "res:/dx9/scene/Universe/a01_cube.red"
    },
    11788: {
      graphicFile: "res:/dx9/scene/Universe/a02_cube.red"
    },
    11789: {
      graphicFile: "res:/dx9/scene/Universe/a03_cube.red"
    },
    11790: {
      graphicFile: "res:/dx9/scene/Universe/a04_cube.red"
    },
    11791: {
      graphicFile: "res:/dx9/scene/Universe/a05_cube.red"
    },
    11792: {
      graphicFile: "res:/dx9/scene/Universe/a06_cube.red"
    },
    11793: {
      graphicFile: "res:/dx9/scene/Universe/a07_cube.red"
    },
    11794: {
      graphicFile: "res:/dx9/scene/Universe/a08_cube.red"
    },
    3603: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 1 Variation 3",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s1v3/csc1_t3_s1v3.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    11796: {
      graphicFile: "res:/dx9/scene/Universe/a10_cube.red"
    },
    11798: {
      graphicFile: "res:/dx9/scene/Universe/a12_cube.red"
    },
    11799: {
      graphicFile: "res:/dx9/scene/Universe/a13_cube.red"
    },
    11800: {
      graphicFile: "res:/dx9/scene/Universe/a14_cube.red"
    },
    3609: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 2 Variation 4",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s2v4/csc1_t3_s2v4.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    11803: {
      graphicFile: "res:/dx9/scene/Universe/a17_cube.red"
    },
    3612: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 3 Variation 2",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s3v2/csc1_t3_s3v2.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    3613: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 3 Variation 3",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s3v3/csc1_t3_s3v3.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    11806: {
      graphicFile: "res:/dx9/scene/Universe/c02_cube.red"
    },
    11808: {
      graphicFile: "res:/dx9/scene/Universe/c04_cube.red"
    },
    11809: {
      graphicFile: "res:/dx9/scene/Universe/c05_cube.red"
    },
    11810: {
      graphicFile: "res:/dx9/scene/Universe/c06_cube.red"
    },
    11811: {
      graphicFile: "res:/dx9/scene/Universe/c07_cube.red"
    },
    11813: {
      graphicFile: "res:/dx9/scene/Universe/c09_cube.red"
    },
    3622: {
      description: "Caldari StrategicCruiser Tengu  - Subsystem 5 Variation 2",
      graphicFile: "res:/dx9/model/ship/Caldari/strategiccruiser/csc1/csc1_t3_s5v2/csc1_t3_s5v2.red",
      colorScheme: "TurretPreset_Caldari_T3",
      race: "Caldari"
    },
    11815: {
      graphicFile: "res:/dx9/scene/Universe/c11_cube.red"
    },
    11816: {
      graphicFile: "res:/dx9/scene/Universe/c12_cube.red"
    },
    11818: {
      graphicFile: "res:/dx9/scene/Universe/c14_cube.red"
    },
    11819: {
      graphicFile: "res:/dx9/scene/Universe/c15_cube.red"
    },
    11820: {
      graphicFile: "res:/dx9/scene/Universe/c16_cube.red"
    },
    11821: {
      graphicFile: "res:/dx9/scene/Universe/c17_cube.red"
    },
    20014: {
      graphicFile: "res:/dx9/model/turret/Launcher/torpedo/torpedo_missile_scourge_t1.red"
    },
    11823: {
      graphicFile: "res:/dx9/scene/Universe/c19_cube.red"
    },
    11824: {
      graphicFile: "res:/dx9/scene/Universe/g01_cube.red"
    },
    11825: {
      graphicFile: "res:/dx9/scene/Universe/g02_cube.red"
    },
    11826: {
      graphicFile: "res:/dx9/scene/Universe/g03_cube.red"
    },
    11828: {
      graphicFile: "res:/dx9/scene/Universe/g05_cube.red"
    },
    11829: {
      graphicFile: "res:/dx9/scene/Universe/g06_cube.red"
    },
    11830: {
      graphicFile: "res:/dx9/scene/Universe/g07_cube.red"
    },
    11831: {
      graphicFile: "res:/dx9/scene/Universe/g08_cube.red"
    },
    20024: {
      graphicFile: "res:/dx9/model/turret/Launcher/CitadelCruise/CitadelCruise_t1.red"
    },
    3641: {
      description: "Amarr StrategicCruiser Legion - Subsystem 4 Variation 1",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s4v1/ASC1_T3_s4v1.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    20095: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Light/Light_N.red"
    },
    3642: {
      description: "Amarr StrategicCruiser Legion - Subsystem 4 Variation 2",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s4v2/ASC1_T3_s4v2.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    3643: {
      description: "Amarr StrategicCruiser Legion - Subsystem 4 Variation 3",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s4v3/ASC1_T3_s4v3.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    3644: {
      description: "Amarr StrategicCruiser Legion - Subsystem 4 Variation 4",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s4v4/ASC1_T3_s4v4.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    11875: {
      description: "Gallente Industrial Quafe Ultra Blue (Miasmos Hull)",
      graphicFile: "res:/dx9/Model/Ship/Gallente/Industrial/GI4/QuafeUltra/GI4_T1_QuafeUltra-Blue.red",
      colorScheme: "TurretPreset_Quafe",
      race: "Gallente"
    },
    20029: {
      graphicFile: "res:/dx9/model/turret/Launcher/CitadelTorpedo/CitadelTorpedo_missile_inferno_t1.red"
    },
    11838: {
      graphicFile: "res:/dx9/scene/Universe/m02_cube.red"
    },
    3647: {
      description: "Amarr StrategicCruiser Legion - Subsystem 5 Variation 2",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s5v2/ASC1_T3_s5v2.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    3648: {
      description: "Amarr StrategicCruiser Legion - Subsystem 5 Variation 3",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3_s5v3/ASC1_T3_s5v3.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    11841: {
      graphicFile: "res:/dx9/scene/Universe/m05_cube.red"
    },
    3651: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 1 Variation 1",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s1v1/gsc1_T3_s1v1.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    3652: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 1 Variation 2",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s1v2/gsc1_T3_s1v2.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    20037: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Bomb/Bomb_Missile_Inferno_T1.red"
    },
    20038: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Bomb/Bomb_Missile_Lockbreaker_T1.red"
    },
    10973: {
      description: "new light color",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/SalmonRightCoolLeft.red"
    },
    20039: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Bomb/Bomb_Missile_Void_T1.red"
    },
    20040: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Cruise/Cruise_Missile_Inferno_T1.red"
    },
    11849: {
      graphicFile: "res:/dx9/scene/Universe/m13_cube.red"
    },
    11850: {
      graphicFile: "res:/dx9/scene/Universe/m14_cube.red"
    },
    11851: {
      graphicFile: "res:/dx9/scene/Universe/m15_cube.red"
    },
    10824: {
      graphicFile: "res:/Graphics/Interior/Establishments/Amarr/WallWindow_Small.red"
    },
    20044: {
      graphicFile: "res:/dx9/model/Turret/Launcher/CitadelCruise/CitadelCruise_Missile_Inferno_T1.red"
    },
    3661: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 3 Variation 1",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s3v1/gsc1_T3_s3v1.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    3662: {
      description: "Gallente StrategicCruiser Proteus - Subsystem 3 Variation 2",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/gsc1_T3_s3v2/gsc1_T3_s3v2.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    20047: {
      graphicFile: "res:/dx9/model/Turret/Launcher/CitadelCruise/CitadelCruise_Missile_Scourge_T1.red"
    },
    20048: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Heavy/Heavy_Missile_Inferno_T1.red"
    },
    20050: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Heavy/Heavy_Missile_Nova_T1.red"
    },
    20051: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Heavy/Heavy_Missile_Scourge_T1.red"
    },
    20052: {
      graphicFile: "res:/dx9/model/Turret/Launcher/HeavyAssault/HeavyAssault_Missile_Inferno_T1.red"
    },
    20053: {
      graphicFile: "res:/dx9/model/Turret/Launcher/HeavyAssault/HeavyAssault_Missile_Mjolnir_T1.red"
    },
    11876: {
      description: "Gallente Industrial Quafe Ultra Red (Miasmos Hull)",
      graphicFile: "res:/dx9/Model/Ship/Gallente/Industrial/GI4/QuafeUltra/GI4_T1_QuafeUltra-Red.red",
      colorScheme: "TurretPreset_Quafe",
      race: "Gallente"
    },
    20054: {
      graphicFile: "res:/dx9/model/Turret/Launcher/HeavyAssault/HeavyAssault_Missile_Nova_T1.red"
    },
    20055: {
      graphicFile: "res:/dx9/model/Turret/Launcher/HeavyAssault/HeavyAssault_Missile_Scourge_T1.red"
    },
    11864: {
      description: "Caldari Cruiser LaiDai (Osprey Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC1/LaiDai/CC1_T2_LaiDai.red",
      race: "Caldari"
    },
    20057: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Rocket/Rocket_Missile_Inferno_T1.red"
    },
    20058: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Rocket/Rocket_Missile_Mjolnir_T1.red"
    },
    20059: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Rocket/Rocket_Missile_Nova_T1.red"
    },
    11868: {
      description: "Extra Large Tractor Beam Tech 2",
      graphicFile: "res:/dx9/model/turret/tractor/xl/Tractor_XL_T2.red"
    },
    11869: {
      description: "Gallente Battleship Prototype Federal Issue Megathron (Megathron Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Battleship/GB2/FedUnique/GB2_T1_FedUnique.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    11870: {
      description: "Gallente Battleship Federal Issue Megathron (Megathron Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Battleship/GB2/Federal/GB2_T1_Federal.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    20063: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Light/Light_Missile_Nova_T1.red"
    },
    20065: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Bomb/Bomb_T1.red"
    },
    20066: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Bomb/Bomb_T2.red"
    },
    20067: {
      graphicFile: "res:/dx9/model/Turret/Launcher/CitadelTorpedo/CitadelTorpedo_T1.red"
    },
    20060: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Rocket/Rocket_Missile_Scourge_T1.red"
    },
    20068: {
      graphicFile: "res:/dx9/model/Turret/Launcher/CitadelTorpedo/CitadelTorpedo_N.red"
    },
    20069: {
      graphicFile: "res:/dx9/model/Turret/Launcher/CitadelCruise/CitadelCruise_N.red"
    },
    20070: {
      graphicFile: "res:/dx9/model/Turret/Launcher/CitadelCruise/CitadelCruise_T1.red"
    },
    20071: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Torpedo/Torpedo_F.red"
    },
    20072: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Torpedo/Torpedo_N.red"
    },
    20073: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Torpedo/Torpedo_T1.red"
    },
    20075: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Cruise/Cruise_N.red"
    },
    20076: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Cruise/Cruise_F.red"
    },
    20077: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Cruise/Cruise_T1.red"
    },
    20078: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Cruise/Cruise_T2.red"
    },
    20080: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Heavy/Heavy_F.red"
    },
    10013: {
      description: "Ore Battleship Primae",
      graphicFile: "res:/dx9/Model/Ship/ORE/Battleship/OreB1/OreB1_T1.red",
      colorScheme: "TurretPreset_ORE_T1",
      race: "ORE"
    },
    20081: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Heavy/Heavy_T1.red"
    },
    20082: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Heavy/Heavy_T2.red"
    },
    20083: {
      graphicFile: "res:/dx9/model/Turret/Launcher/HeavyAssault/HeavyAssault_N.red"
    },
    20085: {
      graphicFile: "res:/dx9/model/Turret/Launcher/HeavyAssault/HeavyAssault_T2.red"
    },
    20086: {
      graphicFile: "res:/dx9/model/Turret/Launcher/HeavyAssault/HeavyAssault_T1.red"
    },
    20087: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Rocket/Rocket_N.red"
    },
    20088: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Rocket/Rocket_F.red"
    },
    20089: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Rocket/Rocket_T1.red"
    },
    20090: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Rocket/Rocket_T2.red"
    },
    20091: {
      graphicFile: "res:/dx9/model/Turret/Launcher/RapidLight/RapidLight_N.red"
    },
    11639: {
      graphicFile: "res:/Graphics/Placeable/TestAssets/Table_Standard.red"
    },
    20092: {
      graphicFile: "res:/dx9/model/Turret/Launcher/RapidLight/RapidLight_T1.red"
    },
    11652: {
      graphicFile: "res:/Graphics/Placeable/TestAssets/Spheres/Sphere_high.red"
    },
    20093: {
      graphicFile: "res:/dx9/model/Turret/Launcher/RapidLight/RapidLight_T2.red"
    },
    20094: {
      graphicFile: "res:/dx9/model/Turret/Launcher/RapidLight/RapidLight_F.red"
    },
    3711: {
      description: "Sun Magnetar",
      graphicFile: "res:/dx9/Model/WorldObject/Sun/Magnetar.red"
    },
    20096: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Light/Light_F.red"
    },
    20097: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Light/Light_T1.red"
    },
    11653: {
      graphicFile: "res:/Graphics/Placeable/TestAssets/Spheres/Sphere_low.red"
    },
    20098: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Light/Light_T2.red"
    },
    20101: {
      description: "Chamberlain Turret Scheme",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Chamberlain.red"
    },
    11654: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Floor/Floor_03_Gal_Base.red"
    },
    11878: {
      graphicFile: "res:/Graphics_Test/Interior/FanfestTrailer/SleeperRoom/Module.red"
    },
    11109: {
      description: "Beam_Quad_T1",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/M/Beam_Quad_T1.red"
    },
    11655: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Floor/Floor_04_Gal_Base.red"
    },
    11110: {
      description: "Beam_Dual_T1",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/S/Beam_Dual_T1.red"
    },
    11656: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Floor/Floor_05_Gal_Base.red"
    },
    20113: {
      description: "Caldari Arbalest",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Arbalest.red"
    },
    11111: {
      description: "Beam_Medium_T1",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/S/Beam_Medium_T1.red"
    },
    11657: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Floor/Floor_06_Gal_Base.red"
    },
    20119: {
      description: "Caldari Balefire",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Balefire.red"
    },
    11112: {
      description: "Beam_GigaDual_T1",
      graphicFile: "res:/dx9/model/Turret/Energy/Beam/XL/Beam_GigaDual_T1.red"
    },
    11658: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Floor/Stairs_02_03_04_05_Gal_Combo_01.red"
    },
    20030: {
      graphicFile: "res:/dx9/model/Turret/Launcher/CitadelTorpedo/CitadelTorpedo_Missile_Mjolnir_T1.red"
    },
    11113: {
      description: "Pulse_HeavyDual_T1",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/L/Pulse_HeavyDual_T1.red"
    },
    11879: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_QuafeUltraRed.red"
    },
    11279: {
      description: "Artil_1400mm_T2",
      graphicFile: "res:/dx9/model/Turret/Projectile/Artil/L/artil_1400mm_T2.red"
    },
    11660: {
      graphicFile: "res:/Graphics/Interior/Gallente/Modular_Floor/Stairs_02_04_05_06_Gal_Combo_01.red"
    },
    20137: {
      description: "Caldari Cruiser Alliance Tournament X (Osprey Hull)",
      graphicFile: "res:/dx9/model/ship/Tournament/CC1_X/CC1_X.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    20041: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Cruise/Cruise_Missile_Mjolnir_T1.red"
    },
    11117: {
      description: "Pulse_Dual_T1",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/S/Pulse_Dual_T1.red"
    },
    11118: {
      description: "Pulse_Gatling_T1",
      graphicFile: "res:/dx9/model/Turret/Energy/Pulse/S/Pulse_Gatling_T1.red"
    },
    10974: {
      description: "new light color",
      graphicFile: "res:/Graphics/Character/Global/PaperdollSettings/LightColors/WarmFrontWhiteSides.red"
    },
    3783: {
      description: "Full size station wreck. - Gs3_std",
      graphicFile: "res:/dx9/model/worldobject/wrecks/gs3_std.red"
    },
    11124: {
      description: "Blast_Electron_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/M/Blast_Electron_T1.red"
    },
    20184: {
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Concord_Army.red"
    },
    11125: {
      description: "Blast_Ion_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/M/Blast_Ion_T1.red"
    },
    10035: {
      description: "Minmatar Wreck MT1 Non-Rotating",
      graphicFile: "res:/dx9/model/shipwrecks/Static_Capital_Wreck_mt1.red"
    },
    20192: {
      description: "Gallente Destroyer Inner Zone Shipping Catalyst (Catalyst Hull)",
      graphicFile: "res:/dx9/Model/Ship/Gallente/Destroyer/GDe1/Innerzone/GDe1_T1_Innerzone.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    20193: {
      description: "Gallente Destroyer Intaki Syndicate Catalyst (Catalyst Hull)",
      graphicFile: "res:/dx9/Model/Ship/Gallente/Destroyer/GDe1/Syndicate/GDe1_T1_Syndicate.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    20194: {
      description: "Gallente Destroyer Interbus Catalyst (Catalyst Hull)",
      graphicFile: "res:/dx9/Model/Ship/Gallente/Destroyer/GDe1/Interbus/GDe1_T1_Interbus.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    20195: {
      description: "Gallente Destroyer Quafe Catalyst (Catalyst Hull)",
      graphicFile: "res:/dx9/Model/Ship/Gallente/Destroyer/GDe1/Quafe/GDe1_T1_Quafe.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    20198: {
      description: "ORE Frigate",
      graphicFile: "res:/dx9/Model/Ship/Ore/Frigate/OreF1/OreF1_T1.red",
      colorScheme: "TurretPreset_ORE_T1",
      race: "ORE"
    },
    20199: {
      description: "Amarr Destroyer Dragoon",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Destroyer/ADe2/ADe2_T1.red",
      colorScheme: "TurretPreset_Amarr_T1",
      race: "Amarr"
    },
    20200: {
      description: "Caldari Destroyer Corax",
      graphicFile: "res:/dx9/Model/Ship/Caldari/Destroyer/CDe2/CDe2_T1.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    20202: {
      description: "Minmatar Destroyer Talwar",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Destroyer/MDe2/MDe2_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    20062: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Light/Light_Missile_Mjolnir_T1.red"
    },
    11130: {
      description: "Blast_Neutron_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Blast/S/Model_Asset/Old/Blast_Neutron_T1.red"
    },
    3831: {
      description: "Minmatar Bomber Tyrfing",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Fighter/MFB1/MFB1_T1.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    10040: {
      description: "Ore Battleship Noctis",
      graphicFile: "res:/dx9/Model/Ship/ORE/Battleship/OreB1/Noctis/OreB1_T1_Noctis.red",
      colorScheme: "TurretPreset_ORE_T1",
      race: "ORE"
    },
    20216: {
      description: "Amarr StrategicCruiser Legion",
      graphicFile: "res:/dx9/Model/Ship/Amarr/StrategicCruiser/ASC1/ASC1_T3.red",
      colorScheme: "TurretPreset_Amarr_T3",
      race: "Amarr"
    },
    20217: {
      description: "Gallente StrategicCruiser Proteus",
      graphicFile: "res:/dx9/model/ship/Gallente/StrategicCruiser/gsc1/GSC1_T3.red",
      colorScheme: "TurretPreset_Gallente_T3",
      race: "Gallente"
    },
    20218: {
      description: "Minmatar StrategicCruiser Loki",
      graphicFile: "res:/dx9/model/ship/Minmatar/StrategicCruiser/msc1/MSC1_T3.red",
      colorScheme: "TurretPreset_Minmatar_T3",
      race: "Minmatar"
    },
    11132: {
      description: "Rail_250mmDual_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/L/Rail_250mmDual_T1.red"
    },
    3841: {
      description: "Used by planets - Terrestrial Height Map 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/Terrestrial02_H.dds"
    },
    20226: {
      description: "Minmatar Destroyer Navy Thrasher",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Destroyer/MDE1/Navy/MDE1_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    20227: {
      description: "Amarr Battlecruiser Navy Harbinger Navy Issue",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battlecruiser/ABc2/Navy/ABc2_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    10670: {
      description: "Sansha Station 01 wreck (ruin)",
      graphicFile: "res:/dx9/model/station/Sansha/SS1/Wreck/SS1_wreck.red",
      race: "Sansha"
    },
    20228: {
      description: "Caldari Battlecruiser Navy Ferox",
      graphicFile: "res:/dx9/model/ship/Caldari/Battlecruiser/CBc1/Navy/CBc1_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    20229: {
      description: "Gallente Battlecruiser Navy Brutix",
      graphicFile: "res:/dx9/model/ship/gallente/BattleCruiser/GBc1/Navy/GBc1_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    20230: {
      description: "Minmatar Battlecruiser Navy Hurricane Fleet Issue",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/BattleCruiser/MBC2/Navy/MBC2_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    20231: {
      description: "Caldari Shuttle Guristas",
      graphicFile: "res:/dx9/model/ship/caldari/Shuttle/CS1/Guristas/CS1_T1_Guristas.red",
      colorScheme: "TurretPreset_Guristas",
      race: "Caldari"
    },
    10674: {
      description: "Sansha Super Carrier Wreck",
      graphicFile: "res:/dx9/Model/Ship/Sansha/Carrier/SCa1/Wreck/SCa1_T1_Wreck.red",
      race: "Sansha"
    },
    20233: {
      description: "Amarr Frigate Sarum Magnate (Magnate Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF7/Sarum/AF7_T1_Sarum.red",
      colorScheme: "TurretPreset_Sarum",
      race: "Amarr"
    },
    20234: {
      description: "Minmatar Frigate Vherokior Probe (Probe Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Frigate/MF2/Vherokior/MF2_T1_Vherokior.red",
      colorScheme: "TurretPreset_Minmatar_T1",
      race: "Minmatar"
    },
    20235: {
      description: "Gallente Frigate Innzerzone Imicus (Imicus Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Frigate/GF5/Innerzone/GF5_T1_Innerzone.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    20236: {
      description: "Caldari Frigate Sukuuvestaa Heron (Heron Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Frigate/CF3/Sukuuvestaa/CF3_T1_Sukuuvestaa.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    20237: {
      description: "Special launcher for snowballs and fireworks",
      graphicFile: "res:/dx9/model/turret/Launcher/festival/festival_f.red"
    },
    20238: {
      description: "Missile for Festival ammo: snowball",
      graphicFile: "res:/dx9/model/Turret/Launcher/Festival/Festival_missile_Snow_T1.red"
    },
    20239: {
      description: "missile for Festival ammo: Firworks 1",
      graphicFile: "res:/dx9/model/turret/Launcher/Festival/Festival_missile_Firework1_T1.red"
    },
    20240: {
      description: "missile for Festival ammo: Firworks 2",
      graphicFile: "res:/dx9/model/turret/Launcher/Festival/Festival_missile_Firework2_T1.red"
    },
    20241: {
      description: "missile for Festival ammo: Firworks 3",
      graphicFile: "res:/dx9/model/turret/Launcher/Festival/Festival_missile_Firework3_T1.red"
    },
    20242: {
      description: "A new-tech cloud, to sit around amarr prime station",
      graphicFile: "res:/dx9/model/worldobject/cloud/amarrprimestationcloud.red"
    },
    3861: {
      description: "Used by planets - Dense Cloud Cap Map 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/CloudDenseCap01_M.dds"
    },
    11137: {
      description: "Rail_250mm_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/M/Rail_250mm_T1.red"
    },
    20246: {
      description: "Gallente Drone Light Federation Navy Hobgoblin",
      graphicFile: "res:/dx9/model/Drone/Gallente/Light/GDL1/Navy/GDL1_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    11410: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Kaalakiota.red"
    },
    20248: {
      description: "Gallente Drone Medium Federation Navy Hammerhead",
      graphicFile: "res:/dx9/model/Drone/Gallente/Medium/GDM1/Navy/GDM1_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    20250: {
      description: "Gallente Drone Heavy Ogre I",
      graphicFile: "res:/dx9/model/Drone/Gallente/Heavy/GDH1/GDH1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    11138: {
      description: "Rail_125mm_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/S/Rail_125mm_T1.red"
    },
    3867: {
      description: "Used by planets - City Light Glow Map 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/Citylight03_G.dds"
    },
    11411: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Krusual.red"
    },
    20252: {
      description: "Gallente Drone Heavy Federation Navy Ogre",
      graphicFile: "res:/dx9/model/Drone/Gallente/Heavy/GDH1/Navy/GDH1_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    20254: {
      description: "Gallente Drone Sentry Garde I",
      graphicFile: "res:/dx9/model/Drone/Gallente/Sentry/GSD1/GSD1_T1.red",
      colorScheme: "TurretPreset_Gallente_T1",
      race: "Gallente"
    },
    20255: {
      description: "Gallente Drone CreoDron Sentry Garde II",
      graphicFile: "res:/dx9/model/Drone/Gallente/Sentry/GSD1/CreoDron/GSD1_T2_CreoDron.red",
      colorScheme: "TurretPreset_CreoDron",
      race: "Gallente"
    },
    11139: {
      description: "Rail_150mm_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/S/Rail_150mm_T1.red"
    },
    20256: {
      description: "Gallente Drone Sentry Federation Navy Garde",
      graphicFile: "res:/dx9/model/Drone/Gallente/Sentry/GSD1/Navy/GSD1_T1_Navy.red",
      colorScheme: "TurretPreset_GallenteNavy",
      race: "Gallente"
    },
    11412: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_LaiDai.red"
    },
    3873: {
      description: "Used by planets - City Light Mask Map 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Terrestrial/Citylight01_M.dds"
    },
    20258: {
      description: "Amarr Drone Sentry Imperial Navy Curator",
      graphicFile: "res:/dx9/model/Drone/Amarr/Sentry/ASD1/Navy/ASD1_T1_Navy.red",
      colorScheme: "TurretPreset_AmarrNavy",
      race: "Amarr"
    },
    20259: {
      description: "Caldari Drone LaiDai Sentry Warden II",
      graphicFile: "res:/dx9/model/Drone/Caldari/Sentry/CSD1/LaiDai/CSD1_T2_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    20260: {
      description: "Caldari Drone Sentry Caldari Navy Warden",
      graphicFile: "res:/dx9/model/Drone/Caldari/Sentry/CSD1/Navy/CSD1_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    11313: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Amarr_T1.red"
    },
    20261: {
      description: "Caldari Drone LaiDai Light Light Shield Maintenance Bot II",
      graphicFile: "res:/dx9/model/Drone/Caldari/Light/CDL1/LaiDai/CDL1_T2_LaiDai.red",
      colorScheme: "TurretPreset_LaiDai",
      race: "Caldari"
    },
    11413: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Mordus.red"
    },
    20042: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Cruise/Cruise_Missile_Nova_T1.red"
    },
    3879: {
      description: "Used by planets - Terrestrial Scatter Hue 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Preset/TerrestrialScatterHue01_D.dds"
    },
    20264: {
      description: "Minmatar Drone Light Republic Fleet Warrior",
      graphicFile: "res:/dx9/model/Drone/Minmatar/Light/MDL1/Navy/MDL1_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    11141: {
      description: "Rail_1000mmDual_T1",
      graphicFile: "res:/dx9/model/Turret/Hybrid/Rail/XL/Rail_1000mmDual_T1.red"
    },
    20266: {
      description: "Minmatar Drone Medium Republic Fleet Valkyrie",
      graphicFile: "res:/dx9/model/Drone/Minmatar/Medium/MDM1/Navy/MDM1_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    11414: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Nefantar.red"
    },
    20267: {
      description: "Minmatar Drone Heavy Republic Fleet Berserker",
      graphicFile: "res:/dx9/model/Drone/Minmatar/Heavy/MDH1/Navy/MDH1_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    20268: {
      description: "Minmatar Drone Brutor Sentry Bouncer II",
      graphicFile: "res:/dx9/model/Drone/Minmatar/Sentry/MSD1/Brutor/MSD1_T2_Brutor.red",
      colorScheme: "TurretPreset_Minmatar_T2",
      race: "Minmatar"
    },
    20269: {
      description: "Minmatar Drone Sentry Republic Fleet Bouncer",
      graphicFile: "res:/dx9/model/Drone/Minmatar/Sentry/MSD1/Navy/MSD1_T1_Navy.red",
      colorScheme: "TurretPreset_MinmatarNavy",
      race: "Minmatar"
    },
    20270: {
      description: "unique planet used for Caldari Prime",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Terrestrial/P_Terrestrial_Luminaire_CaldariPrime.red"
    },
    11415: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_NOH.red"
    },
    11416: {
      description: "not_overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_ORE_Officer.red"
    },
    20277: {
      description: "Caldari Jump Freighter Rhea",
      graphicFile: "res:/dx9/model/ship/caldari/Freighter/CFr1/ishukone/cfr_t2_ishukone.red",
      colorScheme: "TurretPreset_Ishukone",
      race: "Caldari"
    },
    11417: {
      description: "overridable",
      graphicFile: "res:/dx9/model/Turret/ShaderPreset/TurretPreset_Quafe.red"
    },
    20283: {
      description: "Caldari Battlecruiser Navy Drake",
      graphicFile: "res:/dx9/model/ship/caldari/BattleCruiser/CBc2/Navy/CBc2_T1_Navy.red",
      colorScheme: "TurretPreset_CaldariNavy",
      race: "Caldari"
    },
    20284: {
      description: "Generic Container 1",
      graphicFile: "res:/dx9/model/Deployables/Generic/Container/Profession/CP1/CP1_T1.red"
    },
    20285: {
      description: "Generic Container 2",
      graphicFile: "res:/dx9/model/Deployables/Generic/Container/Profession/CP2/CP2_T1.red"
    },
    20286: {
      description: "Generic Container 3",
      graphicFile: "res:/dx9/model/Deployables/Generic/Container/Profession/CP3/CP3_T1.red"
    },
    20287: {
      description: "Generic Container 4",
      graphicFile: "res:/dx9/model/Deployables/Generic/Container/Profession/CP4/CP4_T1.red"
    },
    3903: {
      description: "Used by planets. - Height Map Moon 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Moon/Moon01_H.dds"
    },
    20288: {
      description: "Generic Container 5",
      graphicFile: "res:/dx9/model/Deployables/Generic/Container/Profession/CP5/CP5_T1.red"
    },
    3907: {
      description: "Used by Planets. - Height Map Moon 3",
      graphicFile: "res:/dx9/model/worldobject/planet/Moon/Moon03_H.dds"
    },
    20293: {
      description: "Caldari Battleship Mordus Raven",
      graphicFile: "res:/dx9/model/ship/caldari/BattleShip/CB1/Mordus/CB1_T1_Mordus.red",
      colorScheme: "TurretPreset_Mordus",
      race: "Caldari"
    },
    3915: {
      description: "Used by planets. - Detail Map Moon 3.",
      graphicFile: "res:/dx9/model/worldobject/planet/Moon/MoonDetail03_P.dds"
    },
    20300: {
      description: "Amarr Frigate Tash-Murkon Magnate (Magnate Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Frigate/AF7/Tash-Murkon/AF7_T1_Tash-Murkon.red",
      colorScheme: "TurretPreset_TashMurkon",
      race: "Amarr"
    },
    20301: {
      description: "Angel Frigate Serpentis Daredevil (Devourer Hull)",
      graphicFile: "res:/dx9/Model/Ship/Angel/Frigate/Angf2/Serpentis/Angf2_T1_Serpentis.red",
      colorScheme: "TurretPreset_Serpentis",
      race: "Angel"
    },
    20304: {
      description: "Ammo for Golden Frequency"
    },
    11848: {
      graphicFile: "res:/dx9/scene/Universe/m12_cube.red"
    },
    3921: {
      description: "Used by planets - Gas Giant Detail Noise 1",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiantDetail01_M.dds"
    },
    20306: {
      description: "Effect Generic Smoke (Used on Profession Spawn Containers)",
      graphicFile: "res:/fisFX/Generic/Smoke/Smoke_Containers.red"
    },
    20015: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Torpedo/Torpedo_Missile_Mjolnir_T1.red"
    },
    20307: {
      description: "Jove Capsule Odyssey (10th Anniversary boxset edition pod)",
      graphicFile: "res:/dx9/Model/Ship/Jove/Capsule/Odyssey/Capsule_Odyssey.red",
      colorScheme: "TurretPreset_Jove",
      race: "Amarr"
    },
    20309: {
      description: "Amarr Battleship Ammatar (Apocalypse Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB1/Ammatar/AB1_T1_Ammatar.red",
      colorScheme: "TurretPreset_Ammatar",
      race: "Amarr"
    },
    20310: {
      description: "Amarr Battleship Ardishapur (Apocalypse Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB1/Ardishapur/AB1_T1_Ardishapur.red",
      colorScheme: "TurretPreset_Ardishapur",
      race: "Amarr"
    },
    3927: {
      description: "Used by planets - Gas Giant Ring Diffuse 4",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiantRing04_D.dds"
    },
    20312: {
      description: "Amarr Battleship Kador (Apocalypse Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB1/Kador/AB1_T1_Kador.red",
      colorScheme: "TurretPreset_Kador",
      race: "Amarr"
    },
    20313: {
      description: "Amarr Battleship Khanid (Apocalypse Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB1/Khanid/AB1_T1_Khanid.red",
      colorScheme: "TurretPreset_Khanid",
      race: "Amarr"
    },
    20314: {
      description: "Amarr Battleship Kor-Azor (Apocalypse Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB1/Kor-Azor/AB1_T1_Kor-Azor.red",
      colorScheme: "TurretPreset_KorAzor",
      race: "Amarr"
    },
    11859: {
      description: "Gallente Cruiser Duvolle Deimos (Thorax Hull)",
      graphicFile: "res:/dx9/model/ship/gallente/Cruiser/GC4/Duvolle/GC4_T2a_Duvolle.red",
      colorScheme: "TurretPreset_Duvolle",
      race: "Gallente"
    },
    20315: {
      description: "Amarr Battleship Sarum (Apocalypse Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB1/Sarum/AB1_T1_Sarum.red",
      colorScheme: "TurretPreset_Sarum",
      race: "Amarr"
    },
    20316: {
      description: "Amarr Battleship Tash-Murkon (Apocalypse Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Battleship/AB1/Tash-Murkon/AB1_T1_Tash-Murkon.red",
      colorScheme: "TurretPreset_TashMurkon",
      race: "Amarr"
    },
    3933: {
      description: "Used by planets - Gas Giant Ring Detail 2",
      graphicFile: "res:/dx9/model/worldobject/planet/Gasgiant/GasGiantRingDetail02_D.dds"
    },
    20319: {
      description: "Amarr Industrial Blood Raider (Bestower Hull)",
      graphicFile: "res:/dx9/Model/Ship/Amarr/Industrial/AI1/BloodRaider/AI1_T1_BloodRaider.red",
      colorScheme: "TurretPreset_Bloodraider",
      race: "Amarr"
    },
    20329: {
      description: "Caldari Cruiser Mordus (Moa Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Cruiser/CC2/Mordus/CC2_T1_Mordus.red",
      colorScheme: "TurretPreset_Mordus",
      race: "Caldari"
    },
    20016: {
      graphicFile: "res:/dx9/model/turret/Launcher/Torpedo/Torpedo_Missile_Nova_T1.red"
    },
    20335: {
      description: "Minmatar Cruiser Thukker (Rupture Hull)",
      graphicFile: "res:/dx9/Model/Ship/Minmatar/Cruiser/MC2/Thukker/MC2_T1_Thukker.red",
      colorScheme: "TurretPreset_Thukker",
      race: "Minmatar"
    },
    10782: {
      description: "CONCORD Frigate Echelon (Christmas Ship 2010)",
      graphicFile: "res:/dx9/Model/ship/Concord/Frigate/ConF3/ConF3_T1.red",
      colorScheme: "TurretPreset_Concord",
      race: "Concord"
    },
    11833: {
      graphicFile: "res:/dx9/scene/Universe/g10_cube.red"
    },
    3104: {
      description: "Caldari Titan Wreck 1 (Leviathan Hull)",
      graphicFile: "res:/dx9/model/ship/caldari/Titan/CT1/Wreck/CT1_T1_Wreck.red",
      colorScheme: "TurretPreset_Caldari_T1",
      race: "Caldari"
    },
    20061: {
      graphicFile: "res:/dx9/model/Turret/Launcher/Light/Light_Missile_Inferno_T1.red"
    },
    3969: {
      description: "P_GasGiant_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_06.red"
    },
    20017: {
      graphicFile: "res:/dx9/model/turret/Launcher/torpedo/torpedo_missile_inferno_t1.red"
    },
    3975: {
      description: "P_GasGiant_1",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_12.red"
    },
    11160: {
      description: "Auto_425mm_T1",
      graphicFile: "res:/dx9/model/Turret/Projectile/Auto/M/Auto_425mm_T1.red"
    },
    11834: {
      graphicFile: "res:/dx9/scene/Universe/g11_cube.red"
    },
    3993: {
      description: "P_GasGiant_3",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Gas/P_GasGiant_30.red"
    },
    11835: {
      graphicFile: "res:/dx9/scene/Universe/j01_cube.red"
    },
    4027: {
      description: "P_Ice_0",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_09.red"
    },
    11836: {
      graphicFile: "res:/dx9/scene/Universe/j02_cube.red"
    },
    4083: {
      description: "P_Ice_6",
      graphicFile: "res:/dx9/model/WorldObject/Planet/Template/Ice/P_Ice_66.red"
    },
    20344: {
      description: "Amarr Frigate Tournament XI Chremoas (Dramiel Hull)",
      graphicFile: "res:/dx9/model/ship/Tournament/AngF1_XI/AngF1_XI.red",
      colorScheme: "TurretPreset_Angel_T1",
      race: "Angel"
    },
    20345: {
      description: "Angel Cruiser Tournament XI Moracha (Ixion Hull)",
      graphicFile: "res:/dx9/model/ship/Tournament/AngC1_XI/AngC1_XI.red",
      colorScheme: "TurretPreset_Angel_T1",
      race: "Angel"
    }
  };

  return graphicIds;
});
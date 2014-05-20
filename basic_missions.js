var basic_missions = {

  void_locks : {
    6: {
      left_blip: 6,
      right_blip: 6,
      location_deck_setup: [2,3,4],
      locations: {
        left: {
          1: "Door",
          3: "Dark Corner"
        },
        right: {
          2: "Corridor",
          3: "Ventilation Duct"
        }
      },
      "spawn":{
        yellow: 2,
        white: 1
      }
    },
    8: {
      left_blip: 7,
      right_blip: 7,
      location_deck_setup: ["1C",2,3,4],
      locations: {
        left: {
          1: "Door",
          3: "Dark Corner"
        },
        right: {
          2: "Corridor",
          4: "Ventilation Duct"
        }
      },
      "spawn":{
        yellow: 3,
        white: 1
      }
    },
    10: {
      left_blip: 8,
      right_blip: 8,
      location_deck_setup: ["1B",2,3,4],
      locations: {
        left: {
          1: "Door",
          3: "Dark Corner"
        },
        right: {
          3: "Corridor",
          5: "Ventilation Duct"
        }
      },
      "spawn":{
        yellow: 4,
        white: 2
      }
    },
    12: {
      left_blip: 9,
      right_blip: 9,
      location_deck_setup: ["1A",2,3,4],
      locations: {
        left: {
          2: "Door",
          4: "Dark Corner"
        },
        right: {
          3: "Corridor",
          6: "Ventilation Duct"
        }
      },
      "spawn":{
        yellow: 5,
        white: 3
      }
    }
  },

  "1A": [
    {
      name: "Main Corridor",
      left_blip: 7,
      right_blip: 8,
      locations: {
        left: {
          2: "Ventilation Duct",
          5: "Door"
        },
        right: {
          7: "Corridor",
          3: "Dark Corner"
        }
      },
      upon_entering: "Spawn 2 Genestealers on the 'Corridor' Terrain card.",
      activate_control_panel: null
    },
    {
      name: "Service Shaft",
      left_blip: 7,
      right_blip: 7,
      locations: {
        left: {
          2: "Dark Corner",
          6: "Ventilation Duct"
        },
        right: {
          6: "Corridor",
          3: "Door"
        }
      },
      upon_entering: "Make each Space Marine face the right side of the formation.",
      activate_control_panel: null
    },
    {
      name: "Maintenance Tunnels",
      left_blip: 8,
      right_blip: 8,
      locations: {
        left: {
          3: "Dark Corner",
          7: "Control Panel"
        },
        right: {
          5: "Door",
          3: "Ventilation Duct"
        }
      },
      upon_entering: null,
      activate_control_panel: "Discard the 'Control Panel' Terrain card, and replace it with a 'Corridor' Terrain card."
    }
  ],

  "1B": [
    {
      name: "Cryo Control",
      left_blip: 7,
      right_blip: 7,
      locations: {
        left: {
          1: "Control Panel",
          4: "Ventilation Duct"
        },
        right: {
          2: "Corridor",
          5: "Dark Corner"
        }
      },
      upon_entering: null,
      activate_control_panel: "Discard 1 card from the blip pile of your choice."
    },
    {
      name: "Lower Accessway",
      left_blip: 7,
      right_blip: 7,
      locations: {
        left: {
          4: "Corridor",
          3: "Ventilation Duct"
        },
        right: {
          3: "Door",
          5: "Dark Corner"
        }
      },
      upon_entering: "Spawn 2 Genestealers behind the Space Marine at the top of the formation.",
      activate_control_panel: null
    },
    {
      name: "Wreckage Labyrinth",
      left_blip: 7,
      right_blip: 6,
      locations: {
        left: {
          5: "Corridor",
          1: "Ventilation Duct"
        },
        right: {
          3: "Door",
          5: "Promethium Tank"
        }
      },
      upon_entering: "Change the facing of each Space Marine who is facing a Terrain card in his position.",
      activate_control_panel: null
    }
  ],

  "1C": [
    {
      name: "Apothecarion",
      left_blip: 7,
      right_blip: 6,
      locations: {
        left: {
          2: "Control Panel",
          3: "Ventilation Duct"
        },
        right: {
          5: "Corridor",
          2: "Dark Corner"
        }
      },
      upon_entering: null,
      activate_control_panel: "Place 1 Support Token on any Space Marine. You may then change that Space Marine's facing."
    },
    {
      name: "Core Cogitator",
      left_blip: 7,
      right_blip: 5,
      locations: {
        left: {
          1: "Corridor",
          4: "Ventilation Duct"
        },
        right: {
          1: "Control Panel",
          3: "Dark Corner"
        }
      },
      upon_entering: null,
      activate_control_panel: "Choose a Terrain card. A maximum of 1 Genestealer may spawn on that Terrain card during the next Event Phase."
    },
    {
      name: "Munitorium",
      left_blip: 6,
      right_blip: 7,
      locations: {
        left: {
          3: "Promethium Tank",
          5: "Door"
        },
        right: {
          4: "Dark Corner",
          2: "Ventilation Duct"
        }
      },
      upon_entering: "The current player places 1 Support Token each on ny 2 Space Marines.",
      activate_control_panel: null
    }
  ],

  "2": [
    {
      name: "Black Holds",
      left_blip: 5,
      right_blip: 6,
      locations: {
        left: {
          2: "Corridor",
          4: "Door"
        },
        right: {
          3: "Ventilation Duct",
          2: "Promethium Tank"
        }
      },
      upon_entering: "The current player chooses a swarm (if able) and spawns 2 Genestealers on it. If 0 swarms in the formation, this has no effect",
      activate_control_panel: null
    },
    {
      name: "Dark Catacombs",
      left_blip: 6,
      right_blip: 6,
      locations: {
        left: {
          1: "Dark Corner",
          3: "Door"
        },
        right: {
          5: "Ventilation Duct",
          4: "Corridor"
        }
      },
      upon_entering: "The current player must choose a Space Marine with 0 Support Tokens (if able). Spawn 1 Genstealer behind a chosen Space Marine.",
      activate_control_panel: null
    },
    {
      name: "Teleportarium",
      left_blip: 7,
      right_blip: 5,
      locations: {
        left: {
          2: "Ventilation Duct",
          4: "Dark Corner"
        },
        right: {
          4: "Control Panel",
          2: "Corridor"
        }
      },
      upon_entering: null,
      activate_control_panel: "Each Space Marine must discard 1 Support Token or roll a die. On a 0, the Space Marine is slain. Then, regardless of the dice rolls, discard all cards from both blip piles."
    }
  ]

};


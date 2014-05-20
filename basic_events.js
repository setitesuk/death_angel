var basic_events = {

  tyrannid_type : ['claw','tongue','skull','talon'],

  event_deck : new Array,
  event_discard_pile : new Array,

  event_cards : [
    {
      name:       "Chaos Of Battle",
      instinct:   false,
      action:     "Change every Space Marine's facing",
      spawn: {
        red:    'white',
        orange: false,
        pale_green: 'white',
        bright_green: false
      },
      tyrannid_move: {
        type: 'skull',
        move: true,
        flank: false
      }
    },
    {
      name:       "Chaos Of Battle",
      instinct:   false,
      action:     "Change every Space Marine's facing",
      spawn: {
        red:    'white',
        orange: false,
        pale_green: 'white',
        bright_green: false
      },
      tyrannid_move: {
        type: 'skull',
        move: true,
        flank: false
      }
    },
    {
      name:       "Cleansing Flames",
      instinct:   true,
      action:     "Choose a Space Marine and roll a die. If you roll a SKULL, slay 2 Genestealers engaged with him (of your choice)",
      spawn: {
        red:    false,
        orange: 'yellow',
        pale_green: false,
        bright_green: 'yellow'
      },
      tyrannid_move: {
        type: 'tongue',
        move: true,
        flank: false
      }
    },
    {
      name:       "Enter Formation",
      instinct:   false,
      action:     "Each time a player resolves a 'Move + Activate' action card next round, he may first place 1 support token on any Space Marine.",
      spawn: {
        red:    false,
        orange: 'yellow',
        pale_green: 'yellow',
        bright_green: false
      },
      tyrannid_move: {
        type: 'claw',
        move: true,
        flank: false
      }
    },
    {
      name:       "Evasion",
      instinct:   false,
      action:     "When a player resolves an Attack Action card next round, he may only attack with 1 Space Marine of that Combat Team (instead of both).",
      spawn: {
        red:    'white',
        orange: false,
        pale_green: 'white',
        bright_green: false
      },
      tyrannid_move: {
        type: 'skull',
        move: false,
        flank: true
      }
    },
    {
      name:       "Flanking Manoeuvre",
      instinct:   false,
      action:     "Move all swarms so that they are behind their engaged Space Marine.",
      spawn: {
        red:    'white',
        orange: 'white',
        pale_green: false,
        bright_green: false
      },
      tyrannid_move: {
        type: false,
        move: false,
        flank: false
      }
    },
    {
      name:       "For My Battle Brothers",
      instinct:   true,
      action:     "Choose a Space Marine that has at least 1 Support Token (if able). Discard 1 Support Token from him and 1 Genestealer engaged with him (of your choice).",
      spawn: {
        red:    'yellow',
        orange: 'white',
        pale_green: false,
        bright_green: false
      },
      tyrannid_move: {
        type: 'talon',
        move: true,
        flank: false
      }
    },
    {
      name:       "For My Battle Brothers",
      instinct:   true,
      action:     "Choose a Space Marine that has at least 1 Support Token (if able). Discard 1 Support Token from him and 1 Genestealer engaged with him (of your choice).",
      spawn: {
        red:    'yellow',
        orange: 'white',
        pale_green: false,
        bright_green: false
      },
      tyrannid_move: {
        type: 'talon',
        move: true,
        flank: false
      }
    },
    {
      name:       "Full Scan",
      instinct:   true,
      action:     "Choose a blip pile. Discard the top card of the chosen pile.",
      spawn: {
        red:    'yellow',
        orange: false,
        pale_green: 'yellow',
        bright_green: false
      },
      tyrannid_move: {
        type: 'tongue',
        move: true,
        flank: false
      }
    },
    {
      name:       "Full Scan",
      instinct:   true,
      action:     "Choose a blip pile. Discard the top card of the chosen pile.",
      spawn: {
        red:    'yellow',
        orange: false,
        pale_green: 'yellow',
        bright_green: false
      },
      tyrannid_move: {
        type: 'tongue',
        move: true,
        flank: false
      }
    },
    {
      name:       "Gun Jam",
      instinct:   true,
      action:     "Choose a Combat Team that did not reveal and Attack Action this round. Next round, that Combat Team may not play an Attack Action card.",
      spawn: {
        red:    'white',
        orange: false,
        pale_green: 'yellow',
        bright_green: false
      },
      tyrannid_move: {
        type: 'talon',
        move: true,
        flank: false
      }
    },
    {
      name:       "Gun Jam",
      instinct:   true,
      action:     "Choose a Combat Team that did not reveal and Attack Action this round. Next round, that Combat Team may not play an Attack Action card.",
      spawn: {
        red:    'white',
        orange: false,
        pale_green: 'yellow',
        bright_green: false
      },
      tyrannid_move: {
        type: 'talon',
        move: true,
        flank: false
      }
    },
    {
      name:       "Outnumbered",
      instinct:   false,
      action:     "Discard all Support Tokens from each Space Marine engaged with at least 1 swarm.",
      spawn: {
        red:    'white',
        orange: 'white',
        pale_green: false,
        bright_green: false
      },
      tyrannid_move: {
        type: 'claw',
        move: false,
        flank: true
      }
    },
    {
      name:       "Out Of Thin Air",
      instinct:   true,
      action:     "Choose a Space Marine. Spawn 2 Genestealers behind him.",
      spawn: {
        red:    'white',
        orange: 'white',
        pale_green: false,
        bright_green: false
      },
      tyrannid_move: {
        type: 'skull',
        move: false,
        flank: true
      }
    },
    {
      name:       "Out Of Thin Air",
      instinct:   true,
      action:     "Choose a Space Marine. Spawn 2 Genestealers behind him.",
      spawn: {
        red:    'white',
        orange: 'white',
        pale_green: false,
        bright_green: false
      },
      tyrannid_move: {
        type: 'claw',
        move: false,
        flank: true
      }
    },
    {
      name:       "Psychic Assault",
      instinct:   true,
      action:     "Choose a Space Marine and roll a die. If you roll a 0 or 1, the Space Marine is slain.",
      spawn: {
        red:    'white',
        orange: 'white',
        pale_green: false,
        bright_green: false
      },
      tyrannid_move: {
        type: 'tongue',
        move: false,
        flank: true
      }
    },
    {
      name:       "Quick Instincts",
      instinct:   true,
      action:     "Choose a Space Marine. He may immediately make 1 attack.",
      spawn: {
        red:    'yellow',
        orange: 'yellow',
        pale_green: false,
        bright_green: false
      },
      tyrannid_move: {
        type: 'tongue',
        move: true,
        flank: false
      }
    },
    {
      name:       "Rescue Space Marine",
      instinct:   true,
      action:     "Choose a Space Marine that has been slain belonging to a non-eliminated Combat Team. Place the Space Marine at the bottom of the formation facing the right.",
      spawn: {
        red:    'yellow',
        orange: 'yellow',
        pale_green: false,
        bright_green: false
      },
      tyrannid_move: {
        type: 'claw',
        move: true,
        flank: false
      }
    },
    {
      name:       "Resupply",
      instinct:   true,
      action:     "Choose a Space Marine. Move all Support Tokens to him from all other Space Marines.",
      spawn: {
        red:    'yellow',
        orange: false,
        pale_green: 'white',
        bright_green: false
      },
      tyrannid_move: {
        type: 'skull',
        move: true,
        flank: false
      }
    },
    {
      name:       "Rewarded Faith",
      instinct:   true,
      action:     "Choose a Space Marine. You may discard any number of Support Tokens from him to slay an equal number of Genestealers engaed with him.",
      spawn: {
        red:    'white',
        orange: false,
        pale_green: false,
        bright_green: 'yellow'
      },
      tyrannid_move: {
        type: 'talon',
        move: true,
        flank: false
      }
    },
    {
      name:       "Second Wind",
      instinct:   true,
      action:     "Choose a Space Marine. Each tim he rolls a 0 while defending next round, the attack misses.",
      spawn: {
        red:    'yellow',
        orange: false,
        pale_green: 'yellow',
        bright_green: false
      },
      tyrannid_move: {
        type: 'tongue',
        move: true,
        flank: false
      }
    },
    {
      name:       "Secret Route",
      instinct:   false,
      action:     "If there is a Door Terrain card in the formation, place 2 support tokens on it.",
      spawn: {
        red:    false,
        orange: 'yellow',
        pale_green: false,
        bright_green: 'yellow'
      },
      tyrannid_move: {
        type: 'claw',
        move: true,
        flank: false
      }
    },
    {
      name:       "Secret Route",
      instinct:   false,
      action:     "If there is a Door Terrain card in the formation, place 2 support tokens on it.",
      spawn: {
        red:    false,
        orange: 'yellow',
        pale_green: false,
        bright_green: 'yellow'
      },
      tyrannid_move: {
        type: 'claw',
        move: true,
        flank: false
      }
    },
    {
      name:       "Stalking From The Shadows",
      instinct:   true,
      action:     "Choose a Space Marine with at least 1 Support Token. Discard all his Support Tokens.",
      spawn: {
        red:    'yellow',
        orange: false,
        pale_green: false,
        bright_green: 'white'
      },
      tyrannid_move: {
        type: 'skull',
        move: true,
        flank: false
      }
    },
    {
      name:       "Stalking From The Shadows",
      instinct:   true,
      action:     "Choose a Space Marine with at least 1 Support Token. Discard all his Support Tokens.",
      spawn: {
        red:    'yellow',
        orange: false,
        pale_green: false,
        bright_green: 'white'
      },
      tyrannid_move: {
        type: 'skull',
        move: true,
        flank: false
      }
    },
    {
      name:       "Surrounded",
      instinct:   true,
      action:     "Choose a Space Marine. Move all Genestealers (from every position) to the chosen Space Marine's position (do not change their side).",
      spawn: {
        red:    'white',
        orange: 'white',
        pale_green: false,
        bright_green: false
      },
      tyrannid_move: {
        type: false,
        move: false,
        flank: false
      }
    },
    {
      name:       "Temporary Sanctuary",
      instinct:   true,
      action:     "Choose a swarm of Genestealers. Shuffle all cards from the chosen swarm into the smallest blip pile.",
      spawn: {
        red:    'yellow',
        orange: 'yellow',
        pale_green: false,
        bright_green: false
      },
      tyrannid_move: {
        type: 'claw',
        move: true,
        flank: false
      }
    },
    {
      name:       "The Swarm",
      instinct:   false,
      action:     "Place 2 Genestealer cards into each blip pile (from the Genestealer deck).",
      spawn: {
        red:    false,
        orange: 'white',
        pale_green: 'white',
        bright_green: false
      },
      tyrannid_move: {
        type: 'tongue',
        move: false,
        flank: true
      }
    },
    {
      name:       "The Swarm",
      instinct:   false,
      action:     "Place 2 Genestealer cards into each blip pile (from the Genestealer deck).",
      spawn: {
        red:    false,
        orange: 'white',
        pale_green: 'white',
        bright_green: false
      },
      tyrannid_move: {
        type: 'talon',
        move: false,
        flank: true
      }
    },
    {
      name:       "They're Everywhere",
      instinct:   false,
      action:     "Spawn 1 Genestealer in front of each Space Marine that is not engaged with a swarm.",
      spawn: {
        red:    'white',
        orange: 'white',
        pale_green: false,
        bright_green: false
      },
      tyrannid_move: {
        type: 'talon',
        move: false,
        flank: true
      }
    }
  ],

  setup : function () {

    var that = this;

    this.set_event_deck(true);

    $('#event_discard_pile_count').html( this.event_discard_pile.length );

    $("#fill_event_deck").click( function () { that.set_event_deck(); } );
    $("#show_event_discard").click( function () { that.show_discard(); } );
    $("#hide_event_discard").click( function () { that.hide_discard(); } );
    $("#draw_event").click( function () { that.draw_event(); } );

  },

  set_event_deck : function (start) {

    if ( this.event_discard_pile.length ) {

      while ( this.event_discard_pile.length ) {
        this.event_deck.push( this.event_discard_pile.shift() );
      }

      $('#event_discard_pile_count').html( this.event_discard_pile.length );

    } else if ( ! start && ! this.event_discard_pile.length ) {
        
    } else {

      for ( var i = 0; i < this.event_cards.length; i++ ) {
        this.event_deck.push( this.event_cards[i] );
      }

    }

    this.event_deck = this.event_deck.shuffle();

    $('#event_deck_count').html(this.event_deck.length);

    return;

  },

  draw_event : function () {
    $('#last_event_card').html('');
    if ( ! this.event_deck.length ) {
      this.set_event_deck();
    }
    var card = this.event_deck.shift();

    $('#event_deck_count').html(this.event_deck.length);

    this.event_discard_pile.unshift(card);
    $('#event_discard_pile_count').html( this.event_discard_pile.length );

    var html = '<h4>'+card.name+'</h4><p>';
    if ( card.instinct ) {
      html += '<strong>Instinct:</strong> ';
    }
    html += card.action + '</p>';

    html += '<p><strong>Spawn:</strong>';
    if ( card.spawn.red ) {
      html += '<br />Red:'+card.spawn.red;
    }
    if ( card.spawn.orange ) {
      html += '<br />Orange:'+card.spawn.orange;
    }
    if ( card.spawn.pale_green ) {
      html += '<br />Pale Green:'+card.spawn.pale_green;
    }
    if ( card.spawn.bright_green ) {
      html += '<br />Bright Green:'+card.spawn.bright_green;
    }
    html += '</p>';

    if ( card.tyrannid_move.type ) {
      html += '<p><strong>Tyrannid Move:</strong> '+card.tyrannid_move.type+':';
      if ( card.tyrannid_move.move ) {
        html += 'Move';
      } else {
        html += 'Flank';
      }
    }

    $('#last_event_card').html(html);

    return card;
  },

  show_discard : function () {

    $('#show_event_discard').hide();
    $('#hide_event_discard').show();
    $('#event_discard_contents ul').html('');

    for ( var i = 0; i < this.event_discard_pile.length; i++ ) {
      $("#event_discard_contents ul").append('<li title="'+this.event_discard_pile[i].action+'">'+this.event_discard_pile[i].name + '</li>');
    }

  },

  hide_discard : function () {

    $('#show_event_discard').show();
    $('#hide_event_discard').hide();
    $('#event_discard_contents ul').html('');

  }

};
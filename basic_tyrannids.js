var basic_tyrannids = {

  tyrannid_type : ['claw','tongue','skull','talon'],

  tyrannid_deck : new Array,
  left_blip     : new Array,
  right_blip    : new Array,
  tyrannid_discard_pile : new Array,

  setup : function () {

    var that = this;

    this.set_tyrannid_deck(true);

    $('#tyrannid_discard_pile_count').html( this.tyrannid_discard_pile.length );
    $('#left_blip_cards_remaining').html( this.left_blip.length );
    $('#right_blip_cards_remaining').html( this.right_blip.length );

    $("#fill_left_blip").click( function () { that.set_left_blip(); } );
    $("#fill_right_blip").click( function () { that.set_right_blip(); } );
    $("#fill_tyrannid_deck").click( function () { that.set_tyrannid_deck(); } );
    $("#show_tyrannid_discard").click( function () { that.show_discard(); } );
    $("#hide_tyrannid_discard").click( function () { that.hide_discard(); } );

  },

  set_tyrannid_deck : function (start) {

    if ( this.tyrannid_discard_pile.length ) {

      while ( this.tyrannid_discard_pile.length ) {
        this.tyrannid_deck.push( this.tyrannid_discard_pile.shift() );
      }

      $('#tyrannid_discard_pile_count').html( this.tyrannid_discard_pile.length );

    } else if ( ! start && ! this.tyrannid_discard_pile.length ) {
        
    } else {

      for ( var i = 1; i < 37; i++ ) {
        this.tyrannid_deck.push(i);
      }

    }

    this.tyrannid_deck = this.tyrannid_deck.shuffle();

    $('#tyrannid_deck_count').html(this.tyrannid_deck.length);

    return;

  },

  set_left_blip : function () {
    while ( this.left_blip.length ) {
      this.discard_tyrannid( this.left_blip.shift() );
    }
    var amount = parseInt( $('#left_blip_fill_value').html() );
    for ( var i = 0; i < amount; i++ ) {
      this.add_to_left_blip();
    }

  },

  set_right_blip : function () {
    while ( this.right_blip.length ) {
      this.discard_tyrannid( this.right_blip.shift() );
    }
    var amount = parseInt( $('#right_blip_fill_value').html() );
    for ( var i = 0; i < amount; i++ ) {
      this.add_to_right_blip();
    }

  },

  draw_tyrannid : function () {
    if ( ! this.tyrannid_deck.length ) {
      this.set_tyrannid_deck();
    }
    var card = this.tyrannid_deck.shift();

    $('#tyrannid_deck_count').html(this.tyrannid_deck.length);

    return card;
  },

  add_to_left_blip : function () {
    var blip = this.draw_tyrannid();
    this.left_blip.push(blip);
    $('#left_blip_cards_remaining').html(this.left_blip.length);
  },

  add_to_right_blip : function () {
    var blip = this.draw_tyrannid();
    this.right_blip.push(blip);
    $('#right_blip_cards_remaining').html(this.right_blip.length);
  },

  draw_from_left_blip : function () {
    var blip = this.left_blip.shift();
    $('#left_blip_cards_remaining').html(this.left_blip.length);
    return blip;
  },

  draw_from_right_blip : function () {
    var blip = this.right_blip.shift();
    $('#right_blip_cards_remaining').html(this.right_blip.length);
    return blip;
  },

  is_a_blip_pile_empty : function () {
    if ( ! this.left_blip.length || ! this.right_blip.length ) {
      return true;
    }
    return false;
  },

  discard_tyrannid :  function  (blip) {
    this.tyrannid_discard_pile.unshift(blip);
    $('#tyrannid_discard_pile_count').html( this.tyrannid_discard_pile.length );
    return;
  },

  which_type_of_tyrannid : function (card) {
    return this.tyrannid_type[card%4];
  },

  show_discard : function () {
    $('#show_tyrannid_discard').hide();
    $('#hide_tyrannid_discard').show();
    $('#tyrannid_discard_contents ul').html('');
    for ( var i = 0; i < this.tyrannid_discard_pile.length; i++ ) {
      
      $("#tyrannid_discard_contents ul").append('<li>'+this.which_type_of_tyrannid( this.tyrannid_discard_pile[i] ) + '</li>');
    }
  },

  hide_discard : function () {
    $('#show_tyrannid_discard').show();
    $('#hide_tyrannid_discard').hide();
    $('#tyrannid_discard_contents ul').html('');
  }
};  


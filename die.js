var die = {
  values : [0,1,2,3,4,5],
  skulls_present : {0:false,1:true,2:true,3:true,4:false,5:false},

  setup: function () {
    $("#roll_die").click( this.roll_die );
  },

  roll_die : function () {
    
    $('#skull').hide();

    var value = die.values[ Math.floor( Math.random() * die.values.length ) ];

    if ( die.skulls_present[value] ) {
      $('#skull').show();
    }

    $('#die_score').html( value );

  }
};
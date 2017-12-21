'use strict';

// GUEST LIST
//=======================================================================================
var guests = [
  {
    name: 'Huynh & Jan Nguyen'

  }, 

  // {
  //   name: 'Phuong Graham',
  //     plusses: [
  //     'James Graham',
  //     'Thomas Graham',
  //     'Andrew Graham',
  //   ]
  // }, 

  {
    name: 'Xinh Nguyen',
      plusses: [
      'Chris Nguyen',
      'Jayme Nguyen',
      'Connor Nguyen',
      'Eve Nguyen',
      'Anton Nguyen',
    ]
  }, 

  // {
  //   name: 'Tuyen Vo',
  //     plusses: [
  //     'Tuan Nguyen',

  //   ]
  // }, 

  // {
  //   name: 'Jeremie Bernardin',
  //       plusses: [
  //     'Jolene Bianco',

  //   ]
  // }, 

  {
    name: 'Felix Levert',
        plusses: [
      'Sarah Kudrick',

    ]
  }, {
    name: 'Clyde So',
        plusses: [
      'Stephanie So',

    ]
  }, {
    name: 'Clinton Kwan'
  }, {
    name: 'Kevin Wong',
        plusses: [
      'Winnie Wong',

    ]
  }, {
    name: 'Sunil Dheda',
        plusses: [
      'Sarika Dheda',

    ]
  }, {
    name: 'Bradley Ahn'
  }, 
  // {
  //   name: 'Kaye Au-Duong',
  //     plusses: [
  //     'Matthew Ng-Wai Shing',

  //   ]

  // }, 
  {
    name: 'Hamesh Bhana'
  }, {
    name: 'Desmond Joe',
            plusses: [
      'Jeanie Joe',
      'Aria Joe',

    ]
  }, {
    name: 'Kenny Leung'
  }, {
    name: 'Yaseen Patel'
  }, 
  // {
  //   name: 'Jo Wong'
  // }, 
  // {
  //   name: 'Joshua & Anna Ng',
  //           plusses: [
  //     'Logan Ng',

  //   ]
  // }, 
  // {
  //   name: 'Robert & Laura Lee'
  // }, 

  // {
  //   name: 'Landon Lee'
  // }, 

  // {
  //   name: 'Alyssa Lee & Luke Cunningham'
  // }, 
  // {
  //   name: 'Phil & Esther Lee'
  // }, 
  // {
  //   name: 'Jordan Lee'
  // }, 
  {
    name: 'Jenica Lee'
  }, {
    name: 'Doug Lee & Tia Giang',
    plusses: [
          'Meagan Lee',
          'Lindsay Lee',
    ]
  }, {
    name: 'Matthew Lee'
  }, 
  // {
  //   name: 'Trevor Lee'
  // }, 

  // {
  //   name: 'Annette & Paul Fung',
  //       plusses: [
  //         'Jessica Fung',
  //         'Jillian Fung',
  //         'Cameron Fung',
  //   ]
  // }, 

  // {
  //   name: 'Chris Lee'
  // }, 
  // {
  //   name: 'Edmond & May Lee'
  // }, 
  {
    name: 'Kelly Chow'
  }, {
    name: 'Caroline Chow & Ray Leung'
  }, 

  /*{
    name: 'Grace & Walter Soo'
  },

  */ {
    name: 'Gary Chow'
  }, 

  // {
  //   name: 'Adrianna Teoh'
  // }, 

  {
    name: 'Mika Low'
  }, {
    name: 'Jennicar Altares'
  }, 
  // {
  //   name: 'Fondie & Christian Knowler'
  // }, 
  {
    name: 'Nicole Chong',
    plusses: [
      'Trevor Chong',
    ]
  }, {
    name: 'Tiffany Tan'
  }, {
    name: 'Sheena Narayan'
  }, 

  // {
  //   name: 'Catherine Hwee'
  // }, 

  {
    name: 'Kristen Wilson',
      plusses: [
        'Dustin Koepke',
      ]
  }, {
    name: 'Terence Hui'
  }, {
    name: 'Charlie Hui'
  }, 
  // {
  //   name: 'Wency Chan'
  // }, 
  {
    name: 'Kevin Lei'
  }, 
  // {
  //   name: 'Clara & Chanh Vuong',
  //     plusses: [
  //       'Danica Vuong',
  //       'Bebe Vuong',

  //     ]
  // }, 

  {
    name: 'Ron Wong'
  }, 
  //{
  //name: 'Ken Shum'
  //}, 
  {
    name: 'Tony Wong & Juliana Sam',
      plusses: [
        'Bebe WongSam',
      ]
  }, {
    name: 'Thi Nguyen'
  }, 
  // {
  //   name: 'Marina Tran'
  // }, 
  {
    name: 'Jonross Fong'
  },{
    name: 'Travis & Rachel Gertz'
  },{
    name: 'Ricky Wan'
  }



]

function sortGuestsByName () {
  guests.sort(function(a, b) {
    var aLower = a.name.toLowerCase()
    var bLower = b.name.toLowerCase()
    if (aLower < bLower) { return -1 }
    if (bLower < aLower) { return 1 }
    return 0
  });

  $.each(guests, function (i, guest) {
    if (guest.plusses && guest.plusses.length > 1) {
      guest.plusses.sort()
    }
  })

  guests.unshift({ name: 'Select your name...' });
}

function updatePlusGuests () {
  var selectedIndex = $('#primary').val()
  var selected = guests[selectedIndex]

  var plussesElement = $('#plusses')
  plussesElement.empty()

  var formGroupElement = $('#plusses-form-group')
  if (!selected.plusses || (selected.plusses && selected.plusses.length == 0)) {
    formGroupElement.hide()
    return
  } else {
    formGroupElement.show()
  }

  // CREATE A CHECKBOX FOR EACH PLUS GUEST FOR THE SELECTED GUEST
  $.each(selected.plusses, function (i, plus) {
    var container = $('<div>')
    var name = plus.split(' ').join('-').toLowerCase()
    var id = 'p-' + name

    container.append($('<input>', {
      class: 'plus-checkbox ajax-input ajax-checkbox-guest',
      type: 'checkbox',
      id: id,
      name: id,
      value: plus
    }))

    const label = $('<label>', { for: id }).text(plus)
    container.append(label)
    plussesElement.append(container)
  })
}

// POPULATE THE GUEST NAME SELECT WITH EACH GUEST
$(document).ready(function () {
  sortGuestsByName()

  var selectElement = $('#primary')
  $.each(guests, function (i, guest) {
    selectElement.append($('<option>', {
      value: i,
      text: guest.name
    }))
  })

  updatePlusGuests()
})

// HANDLE GUEST NAME CHANGE
$('#primary').change(updatePlusGuests)

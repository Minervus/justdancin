'use strict';

// GUEST LIST
//=======================================================================================
var guests = [
  {
    name: 'Allyson Ng',
    plusses: [
      'Stuart Ng',
      'Allyson Junior Ng',
    ]
  }, {
    name: 'Gary Yau'
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

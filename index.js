function scuberGreetingForFeet(number){
  if (number <= 400) {
    return 'This one is on me!'
  } else if (number > 2000) {
    if (number > 2500) {
      return "No can do."
    } else {
      return "I will gladly take your thirty bucks."
    }
  } 
}

function ternaryCheckCity(city){
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(attitude){
  if (attitude === 'generous') {
    return 'Thank you so much.'
  } else if (attitude === 'not as generous') {
    return 'Thank you.'
  } else {
    return 'Bye.'
  }
}
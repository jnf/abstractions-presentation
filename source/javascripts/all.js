const slide = document.getElementById('slide')
  , sequence = [
    'start',
    'purpose',
    'research',
    'me',
    'us',
    'in10',
    'in10edu',
    'in10exp',
    'values',
    'discuss',
  ]


slide.className = sequence[0]
var index = 0

function slideDirection (key) {
  switch (key) {
    case 'ArrowLeft':
    case 'ArrowDown':
      return --index; break
    case 'ArrowRight':
    case 'ArrowUp':
      return ++index; break
    default:
      return index;
  }
}

document.onkeydown = function(event) {
  slide.className = sequence[slideDirection(event.key)] || sequence[sequence.length - 1]
};

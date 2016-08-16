const dots = document.getElementById('dots')
  , sequence = [
    'start', 'purpose', 'me', 'us',
    'research', 'values', 'discuss'
  ]

let index = 0

function slideDirection (key) {
  switch (key) {
    case 'ArrowLeft':
    case 'ArrowDown':
      return index--; break
    case 'ArrowRight':
    case 'ArrowUp':
      return index++; break
    default:
      return index;
  }
}

document.onkeydown = function(event) {
  dots.className = sequence[slideDirection(event.key)] || sequence[sequence.length - q]
};

var string = 'abcdefghijklmnopqrstuvwxyz';
var words = 'Two driven jocks help fax my big quiz.'

function isPangram(words) {
  words = words.toLowerCase();
  for (var i = 0; i < words.length; i++) {
    string = string.replace(words.charAt(i), '');
  }
  if (string.length === 0) {
    return true;
  }
  return false;
}

document.write(isPangram(words));

(function () {

var names = ["Emmanouil", "Jane", "Bob", "Jack", "Frank", "Jim", "Rowdie", "Cecilia", "Jaren", "Karen"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j' ) {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();

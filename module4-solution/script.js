(function () {

var names = ["Emmanouil", "Chris", "Bob", "Alice", "Frank", "Michael", "Rowdie", "Cecilia", "Helen", "Karen"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'c' ) {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();

var randomFact = {
  "facts": [
    {"text":"I've fed wild Wallabies in Australia"},
    {"text":"I've surfed in South Africa"},
    {"text":"I've cooked dinner for a Senator"},
    {"text":"I like chocolate chip cookies"},
    {"text":"I'm a pretty decent point guard"},
    {"text":"Go Wolfpack!!!"},
    {"text":"I write and perform my own music"},
    {"text":"I like math"},
    {"text":"You might fly on a jet with an engine I helped develop"}
  ]
};

function generateRandomFact(first, last) {
  return Math.floor(Math.random() * (last - first + 1)) + first;
}

randomFactIndex = generateRandomFact(1, 9) - 1;
$("#fact-text").append( randomFact.facts[randomFactIndex].text );

function onClick() {
  randomFactIndex = generateRandomFact(1, 9) - 1;
  $( "#fact-text" ).empty();
  $( "#fact-text" ).prepend( randomFact.facts[randomFactIndex].text );
}

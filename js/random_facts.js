var randomFact = {
  "facts": [
    {"text":"I like chocolate chip cookies"},
    {"text":"I like math"}
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

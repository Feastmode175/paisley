const VOCAB_WORDS = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh']
const DEFINITIONS = ['def1', 'def2', 'def3', 'def4', 'def5', 'def6', 'def7']

const firstChoiceEl = document.querySelector('#content-1')
const secondChoiceEl = document.querySelector('#content-2')
const thirdChoiceEl = document.querySelector('#content-3')
const fourthChoiceEl = document.querySelector('#content-4')
const chosenWordEl = document.querySelector('.chosen-word')

const choiceEls = [firstChoiceEl, secondChoiceEl, thirdChoiceEl, fourthChoiceEl];
let choiceIndexList = [];
let defIndexList = [];


generateQuestion();
fillBlanks();
fillBlanks();
fillBlanks();
fillDefs();
fillDefs();
fillDefs();
mapAnswers();
  console.log('these are the definitions: ', defIndexList);
  console.log('and these are their positions: ', choiceIndexList);






function generateQuestion() {
  let wordIndex = vocabIndex();
    
  let chosenWord = VOCAB_WORDS[wordIndex];
  let correctDef = DEFINITIONS[wordIndex];
  defIndexList.push(wordIndex)

  chosenWordEl.innerText = chosenWord;
  console.log(chosenWord);
  console.log(correctDef);

  let correctDefIndex = choiceIndex();
  choiceIndexList.push(correctDefIndex);
}



function vocabIndex() {
  return  Math.floor(Math.random() * 7);
}

function choiceIndex() {
  return  Math.floor(Math.random() * 4);
}
//TODO: separate into two functions
//both with while loops one to fill each array
//then both functions up top

/** 
 * 1. Pick a random definition from the list
 *  1.1 If def is already in use pick again
 * 2. Pick a random choice slot
 *  2.1 If choice slot is in use pick again
 * 3. Assign definition to slot
 * 4. Repeat 1-3
 */

function fillBlanks() {
  let filler = choiceIndex();
  if (!choiceIndexList.includes(filler)) {
    choiceIndexList.push(filler);
  } else {
    fillBlanks()
  }
}

function fillDefs() {
  let filler = vocabIndex();
  if (!defIndexList.includes(filler)) {
    defIndexList.push(filler);
  } else {
    fillDefs()
  }
}

function mapAnswers() {
  for (let i = 0; i < 4; i++) {
    choiceEls[i].innerText = DEFINITIONS[defIndexList[i]];
  }
}

const inputs = document.querySelectorAll('.selections')

inputs.forEach (input => {
  input.addEventListener('click',()=> {
    removeActiveClasses();
    input.classList.add('active');
  })
})

function removeActiveClasses () {
  inputs.forEach(input => {
    input.classList.remove('active')
  })
}

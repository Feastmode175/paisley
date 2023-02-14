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

firstChoiceEl.innerText = 'This is the first choice';
secondChoiceEl.innerText = 'This is the second choice';
thirdChoiceEl.innerText = 'This is the third choice';
fourthChoiceEl.innerText = 'This is the fourth choice';

generateQuestion();
function generateQuestion() {
  let wordIndex = vocabIndex();
    
  let chosenWord = VOCAB_WORDS[wordIndex];
  let correctDef = DEFINITIONS[wordIndex];
  defIndexList.push(wordIndex)
  console.log(chosenWord);
  console.log(correctDef);
  chosenWordEl.innerText = chosenWord;

  let correctDefIndex = choiceIndex();
  choiceEls[correctDefIndex].innerText = correctDef;
  choiceIndexList.push(correctDefIndex);

  /**for (let i = 0; i < 4; i++) {
    let j = choiceIndex(); 
    let k = vocabIndex();

    while (choiceIndexList.includes(j) || defIndexList.includes(k)) {
      j = choiceIndex();
      k = vocabIndex();
    } 
      choiceIndexList.push(j);
      defIndexList.push(k);
      console.log('option: ', j, 'def: ', k);
      console.log('the selected definitions are: ', defIndexList);
      console.log('their positions will be: ', choiceIndexList);
    }*/
  }

  assignFillerIndices();
  assignFillerIndices();
  assignFillerIndices();
  assignFillerIndices();
  console.log('these are the definitions: ', defIndexList);
  console.log('and these are their positions: ', choiceIndexList);


function vocabIndex() {
  return  Math.floor(Math.random() * 7);
}

function choiceIndex() {
  return  Math.floor(Math.random() * 4);
}
//TODO: separate into two functions
//both with while loops one to fill each array
//then both functions up top
function assignFillerIndices() {
  let j = choiceIndex();
  let k = vocabIndex();

  if (choiceIndexList.includes(j)) {
    j = choiceIndex();
  } else {
    choiceIndexList.push(j);
  }

  if (defIndexList.includes(k)) {
    k = vocabIndex();
  } else {
    defIndexList.push(k);
  }
}


/** 
 * 1. Pick a random definition from the list
 *  1.1 If def is already in use pick again
 * 2. Pick a random choice slot
 *  2.1 If choice slot is in use pick again
 * 3. Assign definition to slot
 * 4. Repeat 1-3
 */
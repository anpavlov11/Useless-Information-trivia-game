const uselessKnowledge = document.querySelector('.trivia');
const questions = [{
  name: 'Who was the first US Secretary of the Treasury?', answer: 'Alexander Hamilton',
  options: [{ title: 'Aaron Burr' }, { title: 'John Adams' }, { title: 'Alexander Hamilton' }, { title: 'Oliver Wolcott, Jr.' } ]
}, {
   name: 'What is the name of the treaty that ended World War I', answer: 'The Treaty of Versailles',
  options: [{ title: 'The Vienna Convention' }, { title: 'The Paris Peace Treaties' }, { title: 'The Treaty of Versailles' }, { title: 'The German Treaty' } ]
}, {
   name: 'What was the top-grossing movie of the 1990s?', answer: 'Titanic',
  options: [{ title: 'Toy Story' }, { title: 'Star Wars: Episode I - The Phantom Menace' }, { title: 'Titanic' }, { title: 'Jurassic Park' } ]
}, {
   name: 'What is the order of the first 5 books of the Bible?', answer: 'Genesis, Exodus, Leviticus, Numbers, Deuteronomy',
  options: [{ title: 'Genesis, Numbers, Deuteronomy, Leviticus, Exodus' }, { title: 'Genesis, Exodus, Leviticus, Numbers, Deuteronomy' }, { title: 'Genesis, Numbers, Exodus, Leviticus, Deuteronomy' }, { title: 'Exodus, Genesis, Leviticus, Numbers, Deuteronomy' } ]
}, {
   name: 'Elvis Presley had a twin brother. What was his name?', answer: 'Jessie',
  options: [{ title: 'Jessie' }, { title: 'Aron' }, { title: 'Vernon' }, { title: 'Vince' } ]
}, {
   name: 'How long is four score and seven years?', answer: '87 years',
  options: [{ title: '27 years' }, { title: '69 years' }, { title: '87 years' }, { title: '107 years' } ]
}, {
   name: 'How many legs do dragonflies have?', answer: '6',
  options: [{ title: '6' }, { title: '8' }, { title: '2' }, { title: '4' } ]
}, {
   name: 'How many hearts do octopuses and squid have?', answer: '3',
  options: [{ title: '1' }, { title: '3' }, { title: '0' }, { title: '8' } ]
}, {
   name: 'What is the capital of Canada?', answer: 'Ottawa',
  options: [{ title: 'Ottawa' }, { title: 'Winnipeg' }, { title: 'Toronto' }, { title: 'Montreal' } ]
}, {
  name: 'What is the only horror movie to win the Academy Award for Best Picture?', answer: 'The Silence of the Lambs',
  options: [{ title: 'The Silence of the Lambs' }, { title: 'Halloween' }, { title: 'The Shining' }, { title: 'The Amityville Horror' } ]
}];

document.querySelector('.trivia').style.display = "table";

let thisQuestion = 0;
let submitted = false;

const displayQuestion = () => {
  submitted = false;

  removeEventListener(uselessKnowledge.querySelector('#nextQuestion'), handleNext);
  removeEventListener(uselessKnowledge.querySelector('#submit'), handleSubmit);

  const question = questions[thisQuestion];
  const lastOne = thisQuestion === questions.length - 1;

  uselessKnowledge.innerHTML = `
    <h3>${question.name}</h3>
    <form id="myForm">
        <input type="radio" id="0" name="option" value="0">
        <label for="0">${question.options[0].title}</label><br>

        <input type="radio" id="1" name="option" value="1">
        <label for="1">${question.options[1].title}</label><br>

        <input type="radio" id="2" name="option" value="2">
        <label for="2">${question.options[2].title}</label><br>

        <input type="radio" id="3" name="option" value="3">
        <label for="3">${question.options[3].title}</label><br>

        <p id="message"></p>

        <button id="submit">Submit</button>
        <button id="nextQuestion">${!lastOne ? 'Next' : 'Finish'}</button>
    </form> 
  `;

  addEventListener(uselessKnowledge.querySelector('#nextQuestion'), handleNext);
  addEventListener(uselessKnowledge.querySelector('#submit'), handleSubmit);
}

const addEventListener = (btn, listener) => {
  if (btn) btn.addEventListener('click', listener);
};

const removeEventListener = (btn, listener) => {
  if (btn) btn.removeEventListener('click', listener);
};

const handleNext = e => {
  e.preventDefault();
  
  const msg = document.getElementById('message');
  
  if (document.querySelector('input[name="option"]:checked') === null) {
    msg.innerHTML = "Select an answer to proceed."
    return; 
  }
  
  if (!submitted) {
    msg.innerHTML = "Please submit your answer before proceeding."
    return; 
  }
  
  if (thisQuestion < questions.length - 1) {
    thisQuestion++;
    displayQuestion();
  } else {
    msg.innerHtml = "That was the last question.";
  }
};

const handleSubmit = e => {
  e.preventDefault()

  const msg = document.getElementById('message');
  const ans = document.querySelector('input[name="option"]:checked');

  if (!ans) {
    msg.innerHTML = "Please select an answer."
    return; 
  }

  const question = questions[thisQuestion];
  const correctAns = question.answer;
  const userAns = ans.value;

  if (correctAns === userAns) {
    msg.innerHTML = "Correct"
  } else {
    msg.innerHTML = "Incorrect"
  }

  document.getElementById("0").disabled = true;
  document.getElementById("1").disabled = true;
  document.getElementById("2").disabled = true;
  document.getElementById("3").disabled = true;
  
  submitted = true;
};

displayQuestion();
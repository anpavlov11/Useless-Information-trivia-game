const useKnow = document.querySelector('.asksAndOptions');
const questions = [{
    ask: 'Who was the first US Secretary of the Treasury?', answer: 'Alexander Hamilton',
    options: [{title: 'Aaron Burr'}, {title: 'John Adams'}, {title: 'Alexander Hamilton'}], 
    ask: 'What is the only horror movie to win the Academy Award for Best Picture?', answer: 'Silence of the Lambs',
    options: [{title: 'Silence of the Lambs'}, {title: 'Halloween'}, {title: 'The Shining'}], 
    ask: 'What is the name of the treaty that ended World War I?', answer: 'The Treaty of Versailles',
    options: [{title: 'The Vienna Convention'}, {title: 'The Paris Peace Treaties'}, {title: 'The Treaty of Versailles'}],
    ask: 'What was the top-grossing movie of the 1990s?', answer: 'Titanic',
    options: [{title: 'Star Wars: Episode I - The Phantom Menace'}, {title: 'Titanic'}, {title: 'Jurassic Park'}],
    ask: 'What is the order of the first 5 books of the Bible?', answer: 'Genesis, Exodus, Leviticus, Numbers, Deuteronomy',
    options: [{title: 'Genesis, Numbers, Deuteronomy, Leviticus, Exodus'}, {title: 'Genesis, Exodus, Leviticus, Numbers, Deuteronomy'}, {title: 'Genesis, Numbers, Exodus, Leviticus, Deuteronomy'}],
    ask: 'Elvis Presley had a twin brother. What was his name?', answer: 'Jessie',
    options: [{title: 'Jessie'}, {title: 'Aron'}, {title: 'Vernon'}],
    ask: 'How long is four score and seven years?', answer: '87',
    options: [{title: '27'}, {title: '69'}, {title: '87'}],
    ask: 'How many legs do dragonflies have?', answer: '6',
    options: [{title: '6'}, {title: '8'}, {title: '2'}],
    ask: 'How many hearts do octopuses and squid have?', answer: '3',
    options: [{title: '1'}, {title: '3'}, {title: '0'}],
    ask: 'What is the capital of Canada?', answer: 'Ottawa',
    options: [{title: 'Ottawa'}, {title: 'Winnipeg'}, {title: 'Toronto'}],
    },];

    document.querySelector('.asksAndOptions').style.display = "table";

    let thisQuestion = 0;
    let answered = false;

    const giveQuestion = () => {
        answered = false;

        removeEventListener(useKnow.querySelector('.nextQuestion'), handleNext);
        removeEventListener(useKnow.querySelector('.answer'), handleAnswer);

        const question =  questions[thisQuestion];
        const lastOne = thisQuestion === questions.length - 1;

        useKnow.innerHTML = `
            <h3>${question.ask}</h3>
            <form id="myForm">
                <input type="radio" id="0" ask="option" value="0">
                <label for="0">${question.options[0].title}</label><br>

                <input type="radio" id="1" ask="option" value="1">
                <label for="1">${question.options[1].title}</label><br>

                <input type="radio" id="2" ask="option" value="2"></input>
                <label for="2">${question.options[2].title}</label><br>

                <p class="text"></p>

                <button class="answer">Answer</button>
                <button class="nextQuestion">${!lastOne ? 'Answer' : 'Next'}</button>
            </form>
            `;

        addEventListener(useKnow.querySelector('.nextQuestion'), handleNext);
        addEventListener(useKnow.querySelector('.answer'), handleAnswer);
        
    }

    const addEventListener = (btn, event) => {
        if (btn) btn.addEventListener('click', event);
    };

    const removeEventListener = (btn, event) => {
        if (btn) btn.removeEventListener('click', event)
    };

    const handleNext = event => {
        event.preventDefault();

        const msg = document.querySelector('.message');

        if (document.querySelector('input [ask = "option"] : checked') === null) {
            msg.innerHTML = "You have to choose an answer to continue."
            return;
        }

        if (!answered) {
            msg.innerHTML = "Press 'Next' to continue."
            return;
        }

        if (thisQuestion < questions.length - 1) {
            thisQuestion++;
            giveQuestion();
        } else {
            alert("Last one!");
        }
    };

    const handleAnswer = event => {
        const msg = document.getElementById('message');
        const ans = document.getElementById('input [ask = "option"] : checked');

        if (!ans) {
            msg.innerHTML = "Pick an answer."
            return;
        }

        const question = questions[thisQuestion];
        const correctAns = question.answer;
        const userAns = ans.value;

        if (correctAns === userAns) {
            msg.innerHTML = "Yes!!"
        } else {
            msg.innerHTML = "Nope."
        }

        document.getElementById("0").disabled = true;
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;

        answered = true;
    };

    giveQuestion();
    Event.preventDefault();
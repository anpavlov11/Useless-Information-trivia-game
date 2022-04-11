const useKnow = document.querySelector('.asksandanswers');
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
    },]
// Create object literals for the questions and answers; use an array to make questions easier to iterate over;
// Create an output variable for HTML output;
// Create a forEach loop;
//     Name curentQuestion and questionNumber;
//         Create the array for possible correct answers;
//             Use a loop to fill in answer possibilities)))
//         Create a radio(?) button for each choice in a label element;
//             Create submit button;
//                 Use conditional if statement for submit click event---
//                         if timer runs out before submit is clicked;
//                             else submit is clicked;
//                             revealAnswer();
//                         revealAnswer function to determine a correct answer:
//                             if answer is correct
//                                 add 5 points to score;
//                             else if answer is incorrect
//                                 add 0 points;
//                             else award 0 points;

// Function for end of game;
// Trigger results
//     Open div for results
//         Conditional
//             if player scores 50 points,
//                 console.log genius of useless knowledge;
//             else if player scores 40-49 points,
//                 console.log you know a lot of nothing;
//             else if player scores 30-39 points,
//                 console.log you know a little of nothing;
//             else if player scores 20-29,
//                 console.log keep living, useless knowledge is all around you...remember it
//             else
//                 console.log you know nothing of nothing...you must be great fun

// click event reset/new game;
// let myCanvas = target('myCanvas', document.body, 300, 700);

const useKnow = document.querySelector('.asksandanswers');
const questions = [{
    ask: 'Who was the first US Secretary of the Treasury?', answer: 'Alexander Hamilton',
    options: [{title: 'Aaron Burr'}, {title: 'John Adams'}, {title: 'Alexander Hamilton'}], 
    ask: 'What is the only horror movie to win the Academy Award for Best Picture?', answer: 'Silence of the Lambs',
    options: [{title: 'Silence of the Lambs'}, {title: 'Halloween'}, {title: 'The Shining'}], 
    ask: ''
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
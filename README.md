# Useless-Information-trivia-game
Many of us have a wealth of useless knowledge. Let's see what you know.







# Wireframe
<img src = "https://i.imgur.com/EdNB97G.png" alt = "Useless Information">



# Pseudocode
Open HTML
    Heading 1 Usleless Knowledge;
        Heading 2 a trivia game;
          Open body
            Open div for directions overlay
                Text describing to the user how the game works;
                    Use style opacity property;
                        Add event listener click event to start game;
                            Use animation property to fade out directions overlay;
            Close div;

        Heading 3 Categories;
            Open div for hoverable dropdown list
                Add list item
                <<--placeholder for more list items-->>
            <<----placeholder for more Categories---->>
                <<---placeholder for more list item (difficulty levels)--->>
            Close div;

        Open div class for question
            Heading 4 question title;
                Paragraph containing the question;
        Close div;

        Open div class for choices
            Heading 4 answer title;
                Create click event to reveal the multiple choice answers;
                    Paragraph containing choice1;
                    Paragraph containing choice2;
                    Paragraph containing choice3;
            Create object literals for the questions and answers; use an array to make questions easier to iterate over;
            Create an output variable for HTML output;
            Create a forEach loop;
                Name curentQuestion and questionNumber;
                    Create the array for possible correct answers;
                        Use a loop to fill in answer possibilities)))
                    Create a radio(?) button for each choice in a label element;
                        Create submit button;
                            Use conditional if statement for submit click event---
                                    if timer runs out before submit is clicked;
                                        else submit is clicked;
                                        revealAnswer();
                                    revealAnswer function to determine a correct answer:
                                        if answer is correct
                                            add 5 points to score;
                                        else if answer is incorrect
                                            add 0 points;
                                        else award 0 points;
            
        Function for end of game;
            Trigger results
                Open div for results
                    Conditional
                        if player scores 50 points,
                            console.log genius of useless knowledge;
                        else if player scores 40-49 points,
                            console.log you know a lot of nothing;
                        else if player scores 30-39 points,
                            console.log you know a little of nothing;
                        else if player scores 20-29,
                            console.log keep living, useless knowledge is all around you...remember it
                        else
                            console.log you know nothing of nothing...you must be great fun
        
        click event reset/new game;
      
        Close body
Close HTML
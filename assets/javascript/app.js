//questions variable declared

var questions =[
    {
    question: "Which music group released the album Survivor in 2001?",
    answers: ["Backstreet Boys", "Destinys Child", "TLC", "S Club"],
    rightAnswer: "Destinys Child",
    },
    {
    question: "What worldwide hit by Nelly Furtado was #1 on over 20 different music charts?",
    answers: ["I'm Like a Bird", "Promiscuous", "Turn Off The Lights","Say It Right"],
    rightAnswer: "Say It Right",
    },
    {
    question: "Fill in the blanks from Outkast's Hey Ya! Shake it like a ____.",
    answers: ["salt shaker", "rattlesnake", "polaroid picture", "leaf"],
    rightAnswer: "polaroid picture",
    },
    {
    question: "Which album is not a title of Britney Spear's?",
    answers:["Bionic", "...Baby One More Time", "Britney Jean", "In the Zone"],
    rightAnswer: "Bionic",
    },
    {
    question: "Who sang the hit song 'Genie in a Bottle'?",
    answers: ["Taylor Swift", "Dido", "Gwen Stefani", "Christina Aguilera"],
    rightAnswer: "Christina Aguilera",
    }]
// click event to post the question to the page
$("#start").on('click', function(){
    newGame.start();
})

$(document).on('click', '#submit', function(){
    newGame.over();
})
// new game varaible 

var newGame = {
    right: 0,
    wrong: 0,
    counter: 100,

    //the start function game 
    start: function(){
        // to remove the start button
        $("#start").hide();
        $("#submit").show();

        
        timer = setInterval(newGame.countdown, 1000);
        $("#display").prepend('<h2>Time Remaining: <span id="counter">100</span> seconds </h2>');
        for (var i = 0; i < questions.length; i++){
            $("#display").append('<h4>' + questions[i].question + '</h4>')
            for (var j = 0; j < questions[i].answers.length; j++){
                $("#display").append("<br><input type='radio' name='question "+ i +"' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        
        $("#display").append('<br> <br><button id="submit">Submit</button>')
    },

   
    countdown: function(){
        newGame.counter--;
        $("#counter").html(newGame.counter);
        if(newGame.counter == 0){
        
            newGame.over();
        }
    },
   
    over: function(){
        $.each($("input[name = 'question 0']:checked"), function(){
            if($(this).val() == questions[0].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 1']:checked"), function(){
            if($(this).val() == questions[1].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 2']:checked"), function(){
            if($(this).val() == questions[2].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 3']:checked"), function(){
            if($(this).val() == questions[3].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 4']:checked"), function(){
            if($(this).val() == questions[4].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 5']:checked"), function(){
            if($(this).val() == questions[5].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 6']:checked"), function(){
            if($(this).val() == questions[6].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 7']:checked"), function(){
            if($(this).val() == questions[7].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 8']:checked"), function(){
            if($(this).val() == questions[8].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });
        $.each($("input[name = 'question 9']:checked"), function(){
            if($(this).val() == questions[9].rightAnswer){
                newGame.right++;
            } else {
                newGame.wrong++;
            }
        });

        this.result()
    },

    result: function(){
        clearInterval(timer);
        $("#display h2").remove();

        $("#display").html("<h2>All Over!</h2>");
        $("#display").append("<h3>Right Answers: " + this.right + "</h3>");
        $("#display").append("<h3>Wrong Answers: " + this.wrong + "</h3>");
        $("#display").append("<h3>Unanswered: " + (questions.length-(this.wrong + this.right)) + "</h3>");
    }


}
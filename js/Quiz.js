class Quiz{
     constructor(){

     }

     getState(){

     }

     update(){

     }

     async start(){
         if(gameState === 0){
             var contestant = new Contestant();
             var contestantCountRef = await database.ref('contestantCount').once("value");
             if(contestantCountRef.exists()){
                 contestantCount = contestantCountRef.val();
                 contestant.getCount();
             }
             question = new Question();
             question.display();
         }
     }
     play(){
         background("yellow");
        question.hide();
        textSize(30);
        text("Note: The contestants who have answered correct are highlighted with green",120,100);
        Player.getPlayerInfo();
        for(var plr in allContestants){
            var correctAns = "4";
            if(correctAns === allContestants[plr].answer){
                fill("green");
            }
            else{
                fill("red");
            }
        }
     }
    }

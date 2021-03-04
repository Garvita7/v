class Contestant {
    constructor(){
       
      this.name = null;
      //this.distance = 0;
      this.index = null;
      this.button = createElement("Submit");
  
    }
  
    getCount(){
      var contestantCountRef = database.ref('playerCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + playerCount;
      database.ref(playerIndex).set({
        name:this.name,
        //distance:this.distance
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      });
    }

    display(){

       this.button.position(250, 200);
        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);

        });






    }
  }
  
class Question {
    constructor() {
  
      this.input1 = createInput("name");
      //this.button = createButton("play");
      this.question = createElement('h2');
      this.option1 = createElement('h2');
      this.option2 = createElement('h2');
      this.option3 = createElement('h2');
      this.option4 = createElement('h2');
  
      
    }
    /*hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
    }*/
  
    display(){
      var title = createElement('h2')
      title.html("My Quiz");
      title.position(130, 0);

      this.question.html("Question- In which year did BTS debut?");
      this.question.position(150, 80);

      this.option1.html("1: 1999");
      this.option1.position(150,100);
      this.option2.html("2: 2000");
      this.option2.position(150,120);
      this.option3.html("3: 2016");
      this.option3.position(150,140);
      this.option4.html("4: 2013");
      this.option4.position(150,160);

      this.input1.position(150,230);
      
      /*this.input.position(130, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
  
        player.name = this.input.value();
        
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name )
        this.greeting.position(130, 160)
      });*/
  
    }
  }
  
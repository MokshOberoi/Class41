class Form {
    constructor(){
        //Give positions according to the screen size
        this.input = createInput("Name");
        this.input.position (displayWidth/2-40,displayHeight/2-80);

        this.button = createButton("Play !!!");
        this.button.position (displayWidth/2+30,displayHeight/2);

        this.greeting = createElement("h3");
        this.greeting.html("Welcome Racer " + player.name);
        this.greeting.position(displayWidth/2-35,displayHeight/4);

        this.title = createElement("h2");
        this.title.html ("Car Racing Game");
        this.title.position (displayWidth/2-50,0);

        this.reset = createButton("Reset");
        this.reset.position(displayWidth-70,20);


    }

    display(){
        // code for play button 
        this.button.mousePressed(()=>  {
        // hide all display elements            
        this.input.hide();
        this.button.hide();
        
        // get racer name  
        player.name = this.input.value();
        playerCount = playerCount + 1 ;
        player.index = playerCount;
        // update player Count and Name in DB thro player Object
        player.update();
        player.updateCount(playerCount);

        // greet the player
        
            }
        );
        //Button to reset gamestate and playercount
        this.reset.mousePressed(()=> {
            game.update(0);
            player.updateCount(0);
            Player.updateCarsAtEnd(0);

        }
        );

    }

    
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
}
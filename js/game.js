class Game {
    constructor(){

    }
    // get game State from DB
    getGameState () {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on ("value", function (data) {gameState= data.val ();});
    }

    // update state in DB
    update(state) {
        database.ref("/").update({gameState : state});
    }

    start () {
        if ( gameState == 0){
             player = new Player ();
             player.getPlayerCount();

             form = new Form ();
             form.display();

             }

             //Create the cars
             car1 = createSprite(100,200);
             car1.addImage(car1Img);
             car2 = createSprite(300,200);
             car2.addImage(car2Img);
             car3 = createSprite(500,200);
             car3.addImage(car3Img);
             car4 = createSprite(700.200);
             car4.addImage(car4Img);

             cars = [car1, car2, car3, car4];


    }
    //Add play GameState
    play () {
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        
        // get player info from DB
        Player.getPlayerInfo();
        player.getCarsAtEnd();
        if (allPlayers != undefined){

            background(groundImg);

            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index = 0;
            var x = 175;
            var y = 0;

            //Give position to the cars
            for (var plr in allPlayers){
                index = index + 1 ;
                x = x + 200 ;
                y = displayHeight - allPlayers[plr].distance ;
                cars[index - 1].x = x ;
                cars[index - 1].y = y ;
                if (index == player.index){
                    cars[index - 1].shapeColor = "red";
                    // set the camera position to position of current car
                    camera.position.x = displayWidth/2 ;
                    camera.position.y = cars[index - 1].y ;
                    //Highlighting the current car
                    fill("orange");
                    stroke(10);
                    ellipse(x,y,100,120);
                }
            }
        }
        //Increase the distance of the Players
        if ( keyIsDown(UP_ARROW) && player.index != null){
            player.distance+= 25 ;
            player.update();
        }

        if ( player.distance > maxDistance){
            gameState = 2;
            player.rank += 1 ;
            Player.updateCarsAtEnd(player.rank);
            push();
            textSize(40);
            text("Your Rank : " + player.rank , displayWidth/2 , camera.position.y);
            pop();
        }



    }

    end(){  

        console.log("RANK : ", player.rank);

        console.log("game ended");
    }


}
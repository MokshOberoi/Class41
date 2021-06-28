class Player {
    constructor(){
        this.distance = 0;
        this.name = null ;
        this.index = null;
        this.rank = null;

    }

    // update player name and distance in DB
    update() {
        var playerIndex = "players/player"+this.index; // player1, player2..4
        //console.log (playerIndex);
        database.ref (playerIndex).set ({name : this.name , distance : this.distance});
    }
    // update player count in DB
    updateCount(count){
        var playerCountRef = database.ref ();
        playerCountRef.update ({"playerCount" : count}) ;
    }

    getPlayerCount(){
        //refer to player Count  location in DB
        var playerCountRef = database.ref ('/playerCount');
        // listen to playerCount changes in DB
        playerCountRef.on ("value", 
                        function(data){
                            playerCount = data.val ();
                            //console.log ("START1 :"+ playerCount);
                        }
        );        

    }

    getCarsAtEnd(){
        var carsAtEndRef = database.ref('/CarsAtEnd');
        carsAtEndRef.on ("value",
                        (data)=>{
                          this.rank = data.val();
                      }
        );
    }

    static updateCarsAtEnd(rank){
        var carsAtEndRef = database.ref("/");
        carsAtEndRef.update({"CarsAtEnd" : rank});  
    }

    static getPlayerInfo(){
        var playerInfo = database.ref("players");
        
        playerInfo.on ("value", (data)=>{allPlayers = data.val ();});


    }

}
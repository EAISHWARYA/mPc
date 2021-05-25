class Game{
    constructor(){}

    readState(){
        var refer=database.ref('gameState').on("value",function(data){

            gameState=data.val()
        })
    }

    update(){
        database.ref('gameState').update({
            gameState:state
        })
    
}
start(){
    if(gameState===0){
        player=new Player()
        player.readCount()
        form =new Form()
        form.display()
    }
}

play(){
    form.hide()
    textSize(30)
    text("Game start", 120,100)
    Player.getPlayerInfo()

    if(allPlayers!== undefined){
        var display_position=130
        for(var plr in allPlayers){
            if(plr=="player"+player.index){
                fill("red")
            }
            else{
                fill ("black")
            }
        display_position+=20
        textSize(15)
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,display_position)
    }
}
}

}
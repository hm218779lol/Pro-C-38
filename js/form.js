class Form{
constructor(){
    this.input=createInput("Name");
     this.button=createButton("play");
    this.greeting=createElement("h3");
}
display(){
    var title=createElement("h2");
    title.html("Car Racing Game");
    title.position(displayWidth/2-50,0);
this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value();
        playercount+=1;
        player.index=playercount
        player.update();
        player.updateCount(playercount);
        this.greeting.html("Hello "+player.name);
        this.greeting.position(displayWidth/2-70,displayHeight/4);


})
}
hide(){
this.input.hide()
this.button.hide()
this.greeting.hide()
}
}

canvas =new fabric.Canvas("myCanvas")
block_image_width=30
block_image_height=30
player_x=10
player_y=10
player_object=" "
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(150)
        player_object.set({
            top:player_y,left:player_x
        })
        canvas.add(player_object)
    })
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object=Img
        block_image_object.scaleToWidth(block_image_width)
        block_image_object.scaleToHeight(block_image_height)
        block_image_object.set({
            top:player_y,left:player_x
        })
        canvas.add(block_image_object)
    })
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
key_pressed=e.keyCode
if(e.shiftKey==true&&key_pressed=="80"){
block_image_width=block_image_width+10
block_image_height=block_image_height+10
console.log("Shift and P pressed together")
}
if(e.shiftKey==true&&key_pressed=="77"){
    block_image_width=block_image_width-10
    block_image_height=block_image_height-10
    console.log("Shift and M pressed together")
    }
    
if(key_pressed=="37"){
    left()
}
if(key_pressed=="38"){
    up()
}
if(key_pressed=="39"){
    right()
}
if(key_pressed=="40"){
    down()
}
if(key_pressed=="67"){
new_image("cloud.jpg")
}
if(key_pressed=="68"){
new_image("dark_green.png")
}
if(key_pressed=="71"){
new_image("ground.png")
}
if(key_pressed=="76"){
new_image("light_green.png")
}
if(key_pressed=="82"){
new_image("roof.jpg")
}
if(key_pressed=="84"){
new_image("trunk.jpg")
}
if(key_pressed=="85"){
new_image("unique.png")
}
if(key_pressed=="87"){
new_image("wall.jpg")
}    
}
function up(){
   if(player_y>0){
    player_y=player_y-10
    canvas.remove(player_object)
    player_update()
   } 
}
function down(){
    if(player_y<600){
        player_y=player_y+10
        canvas.remove(player_object)
        player_update()
       }  
}
function left(){
    if(player_x>0){
        player_x=player_x-10
        canvas.remove(player_object)
        player_update()
       }  
}
function right(){
    if(player_x<1000){
        player_x=player_x+10
        canvas.remove(player_object)
        player_update()
       } 
}

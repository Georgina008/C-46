var animals, snow, river, mountain
var person1, person2, person1Image, person2Image
var animalImages, snowImage, riverImage, mountainImage

function preload(){
    animalImages = loadImage("sprites/Animals.png")
    snowImage = loadImage("sprites/snow.png")
    riverImage = loadImage("sprites/RiverJPEG.png")
    mountainImage = loadImage("sprites/Mountain.png")

    person1Image = loadImage("sprites/Person.png")
    person2Image = loadImage("sprites/Person.png")
}

function setup(){
    createCanvas(displayWidth-30, displayHeight-30)

    
    //animals = createSprite(500,300,20,20)
    //snow = createSprite(600,500,20,20)
    //river = createSprite(700,700,20,20)
    person1 = createSprite(300,400,20,20)
    
    person1.addImage(person1Image)
    person1.scale = 0.2

   

}

function draw(){
    background(mountainImage)

    if(keyDown(LEFT_ARROW)){
        person1.velocityX = -6
    }

    if(keyDown(RIGHT_ARROW)){
        person1.velocityX = 6
    }

    if(keyDown(UP_ARROW)){
        person1.velocityY = -6
    }

    if(keyDown(DOWN_ARROW)){
        person1.velocityY = 6
    }

    spawnObstacles()

    drawSprites();
}


function spawnObstacles(){
    if(frameCount%80===0){
        var obstacles = createSprite(500,500,20,20)
        var rand = Math.round(random(1,3))
        switch(rand) {
            case 1: obstacles.addImage(animalImages)
            break;
            case 2: obstacles.addImage(snowImage)
            break;
            case 3: obstacles.addImage(riverImage)
            break;
        }

        obstacles.x = Math.round(random(100,1100))
        obstacles.y = Math.round(random(75,825))

        obstacles.lifetime = 100
    }
}

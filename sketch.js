var score=0;
var car, carImg;
var coin, coinImg, coinGroup;
var bomb, bombImg, bombGroup;
var road, roadImg;
var wall, wallImg, wallGroup;
var coinSpeed,wallSpeed,bombSpeed;

function preload(){

    coinImg = loadImage("coin.png");
    carImg = loadImage("car.png");
    bombImg = loadImage("bomb.png");
    roadImg = loadImage("road.png");
    wallImg = loadImage("wall.png");

}

function setup() {
    createCanvas(400,400);

    road = createSprite(200,200);
    road.addImage(roadImg);

    car = createSprite(200,350);
    car.addImage(carImg);
    car.scale = 0.05;

    coinGroup = new Group();
    wallGroup = new Group();
    bombGroup = new Group();

    coinSpeed = 4;


}

function draw() {
    background(200);
    text("Score: " + score, 20,45);

    if(keyDown(RIGHT_ARROW)){
        car.x = car.x + 4;
        car.rotation = 25;
    }
    else if(keyDown(LEFT_ARROW)){
        car.x = car.x - 4;
        car.rotation = -25;
    }
    else{
        car.rotation = 0;
    }
    spawnStuff();   
    drawSprites();
    
}

function spawnStuff(){
    if(frameCount % 100 === 0){
        coin = createSprite(200,-25);
        coin.addImage(coinImg);
        coin.velocityY = coinSpeed;
        coin.scale =0.2;
        coinGroup.add(coin);
        coin.x = Math.round(random(80,350));
        coin.lifetime = 700;
        coin.depth = road.depth;
        coin.depth++;
        if(coinGroup.isTouching(car)){
            score = score + 10
            coinGroup.destroyEach()
        }


        wall = createSprite(200,-25);
        wall.addImage(wallImg);
        wall.velocityY = 4;
        wall.scale =0.2;
        wallGroup.add(wall);
        wall.x = Math.round(random(50,200));
        wall.lifetime = 700;
        wall.depth = road.depth;
        wall.depth++;
        if(wallGroup.isTouching(car)){
            coinGroup.destroy();
            bombGroup.destroy();
            wallGroup.destroy();
        }


        bomb = createSprite(200,-25);
        bomb.addImage(bombImg);
        bomb.velocityY = 4;
        bomb.scale =0.2;
        bombGroup.add(bomb);
        bomb.x = Math.round(random(160,360));
        bomb.lifetime = 700;
        bomb.depth = road.depth;
        bomb.depth++;
        if(bombGroup.isTouching(car)){
            score = score - 10
            bombGroup.destroyEach()
        }

    }

}











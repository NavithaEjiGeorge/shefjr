function preload(){
m = loadImage("cook.png")
bI = loadImage("burger.jpg")
}

function setup() {
 createCanvas(1500,700)
 miya = createSprite(300,250,20,20)
 miya.addImage(m)
 miya.scale = 0.5;
 b = createSprite(1200,100,20,20)
 b.addImage(bI)
 b.scale = 0.8
}

function draw() {
 background("white")
  textSize(25)
  fill("brown")
  text("Today we are going to make Walnut Pesto Burger with natural ingrediants",100,50)
  textSize(20)
  fill("blue")
  text("The ingrediants are : ",50,100)
  fill("violet")
  text("1/2 cup Walnuts",50,150)
  text("1 6-ounce can black olives",50,200)
  text("8 garlic cloves",50,250)
  text("1 cup fresh basil",50,300)
  text("1 cup oats",50,350)
  text("1 1/2 cups cooked green lentils",50,400)
  text("1/4 cup nutritional yeast flakes",50,450)
  text("1 tablespoon Lemon Juice",50,500)
  text("tablespoon Dijon Mustard",50,550)
    text("1 teaspoon onion powder",50,600)
  textSize(30)
  fill("red")
  text("INSTRUCTIONS",600,100)
  text("__________________",580,130)
  textSize(20)
  fill("green")
  text("1. Preheat oven to 375° F.",450,200)
  text("2. Place the walnuts, olives, garlic, basil, and oats into a food processor and proces",450,250)
  text(" until the ingredients are finely ground. Place into a large bowl.",450,300)
  text("3. Add the remaining ingredients and mix thoroughly. Place on a parchment-lined",450,350)
  text("baking sheet and bake for 20-30 minutes until crispy around the edges.",450,400)
  text("4. Top with avocados, tomatoes, and sprouts or lettuce.",450,450)
  drawSprites()
}
function ing(){
  text("The ingrediants are :",50,100)
}
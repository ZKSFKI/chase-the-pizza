sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
    info.startCountdown(3)
})
let pizza: Sprite = null
scene.setBackgroundColor(13)
let mySprite = sprites.create(assets.image`dieFresse`, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(assets.image`PizzaSalame`, SpriteKind.Food)

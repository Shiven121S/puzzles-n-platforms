namespace SpriteKind {
    export const Reward = SpriteKind.create()
    export const Stop_Watch = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game_Started) {
        if (0 < Jumps) {
            mySprite.vy = -150
            Jumps += -1
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                `,img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                `,img`
                . . . . . . . . . . 
                . . . . 3 3 . . . . 
                . . . . 3 3 . . . . 
                . . . . 3 3 . . . . 
                . . . . 3 3 . . . . 
                . . . . 3 3 . . . . 
                . . . . 3 3 . . . . 
                . . . . 3 3 . . . . 
                . . . . 3 3 . . . . 
                . . . . 3 3 . . . . 
                . . . . 3 3 . . . . 
                . . . . 3 3 . . . . 
                `,img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                `,img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                `],
            100,
            false
            )
        }
    }
})
sprites.onOverlap(SpriteKind.Reward, SpriteKind.Reward, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, assets.tile`tile10`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Reward, function (sprite, otherSprite) {
    otherSprite.destroy()
    timer.background(function () {
        scene.cameraShake(4, 300)
    })
    timer.background(function () {
        music.playTone(262, music.beat(BeatFraction.Half))
    })
    timer.background(function () {
        Time += -2.5
    })
})
sprites.onDestroyed(SpriteKind.Reward, function (sprite) {
    sprites.setDataBoolean(sprite, "Alive", false)
    animation.stopAnimation(animation.AnimationTypes.All, sprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile6`, function (sprite, location) {
    if (controller.player2.isPressed(ControllerButton.A)) {
        tiles.setTileAt(location, assets.tile`tile9`)
        MapOneLeversPushed += 1
    } else if (!(controller.player2.isPressed(ControllerButton.A))) {
        mySprite.say("PRESS 'U'", 200)
    }
})
sprites.onCreated(SpriteKind.Reward, function (sprite) {
    sprites.setDataBoolean(sprite, "Alive", true)
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . . f 4 4 4 4 f . . . . . 
        . . . . . f 5 4 4 6 f . . . . . 
        . . . . . f 5 4 6 6 f . . . . . 
        . . . . . f 5 6 6 6 f . . . . . 
        . . . . . f 5 5 6 6 f . . . . . 
        . . . . . f 5 5 6 f f . . . . . 
        . . . . . f 5 5 6 f . . . . . . 
        . . . . . f 5 6 6 f . . . . . . 
        . . . . . f f 6 f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . . f 4 4 4 4 f . . . . . 
        . . . . . f 5 4 4 6 f . . . . . 
        . . . . . f 5 4 6 6 f . . . . . 
        . . . . . f 5 6 6 6 f . . . . . 
        . . . . . f 5 5 6 6 f . . . . . 
        . . . . . f 5 5 6 f f . . . . . 
        . . . . . f 5 5 6 f . . . . . . 
        . . . . . f 5 6 6 f . . . . . . 
        . . . . . f f 6 f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . . f 4 4 4 4 f . . . . . 
        . . . . . f 5 4 4 6 f . . . . . 
        . . . . . f 5 4 6 6 f . . . . . 
        . . . . . f 5 6 6 6 f . . . . . 
        . . . . . f 5 5 6 6 f . . . . . 
        . . . . . f 5 5 6 f f . . . . . 
        . . . . . f 5 5 6 f . . . . . . 
        . . . . . f 5 6 6 f . . . . . . 
        . . . . . f f 6 f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . . f 4 4 4 4 f . . . . . 
        . . . . . f 5 4 4 6 f . . . . . 
        . . . . . f 5 4 6 6 f . . . . . 
        . . . . . f 5 6 6 6 f . . . . . 
        . . . . . f 5 5 6 6 f . . . . . 
        . . . . . f 5 5 6 f f . . . . . 
        . . . . . f 5 5 6 f . . . . . . 
        . . . . . f 5 6 6 f . . . . . . 
        . . . . . f f 6 f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . . f 4 4 4 4 f . . . . . 
        . . . . . f 5 4 4 6 f . . . . . 
        . . . . . f 5 4 6 6 f . . . . . 
        . . . . . f 5 6 6 6 f . . . . . 
        . . . . . f 5 5 6 6 f . . . . . 
        . . . . . f 5 5 6 f f . . . . . 
        . . . . . f 5 5 6 f . . . . . . 
        . . . . . f 5 6 6 f . . . . . . 
        . . . . . f f 6 f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . . f 4 4 4 4 f . . . . . 
        . . . . . f 5 4 4 6 f . . . . . 
        . . . . . f 5 4 6 6 f . . . . . 
        . . . . . f 5 6 6 6 f . . . . . 
        . . . . . f 5 5 6 6 f . . . . . 
        . . . . . f 5 5 6 f f . . . . . 
        . . . . . f 5 5 6 f . . . . . . 
        . . . . . f 5 6 6 f . . . . . . 
        . . . . . f f 6 f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f 4 4 f f . . . . . 
        . . . . . f 4 4 4 4 f . . . . . 
        . . . . . f 5 4 4 6 f . . . . . 
        . . . . . f 5 4 6 6 f . . . . . 
        . . . . . f 5 6 6 6 f . . . . . 
        . . . . . f 5 5 6 6 f . . . . . 
        . . . . . f 5 5 6 f f . . . . . 
        . . . . . f 5 5 6 f . . . . . . 
        . . . . . f 5 6 6 f . . . . . . 
        . . . . . f f 6 f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    true
    )
})
function Set_Colors () {
    color.setColor(1, color.rgb(0, 0, 0))
    color.setColor(2, color.rgb(0, 155, 130))
    color.setColor(3, color.rgb(234, 248, 191))
    color.setColor(4, color.rgb(0, 105, 146))
    color.setColor(5, color.rgb(39, 71, 110))
    color.setColor(6, color.rgb(0, 29, 74))
    color.setColor(15, color.rgb(255, 255, 255))
}
blockMenu.onMenuOptionSelected(function (option, index) {
    if (option == "PLAY") {
        color.FadeToBlack.startScreenEffect(500)
        timer.after(600, function () {
            color.startFade(color.Black, color.originalPalette, 10)
            blockMenu.setControlsEnabled(false)
            blockMenu.closeMenu()
            textSprite.destroy()
            info.setLife(3)
            Jumps = 2
            MapOneLeversPushed = 0
            tiles.setTilemap(tilemap`Map1`)
            mySprite = sprites.create(img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                `, SpriteKind.Player)
            scene.cameraFollowSprite(mySprite)
            mySprite.ay = 275
            controller.moveSprite(mySprite, 100, 0)
            StopWatch = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Stop_Watch)
            StopWatch.setPosition(10, 20)
            StopWatch.setFlag(SpriteFlag.RelativeToCamera, true)
            StopWatch.setFlag(SpriteFlag.Ghost, true)
            for (let index2 = 0; index2 < 3; index2++) {
                Time_Shard = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 4 . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . 5 4 4 6 . . . . . . 
                    . . . . . . 5 4 6 6 . . . . . . 
                    . . . . . . 5 6 6 6 . . . . . . 
                    . . . . . . 5 5 6 6 . . . . . . 
                    . . . . . . 5 5 6 . . . . . . . 
                    . . . . . . 5 5 6 . . . . . . . 
                    . . . . . . 5 6 6 . . . . . . . 
                    . . . . . . . 6 . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Reward)
                tiles.placeOnRandomTile(Time_Shard, assets.tile`tile10`)
            }
            Time = 0
            Game_Started = true
        })
    }
})
let Fall_Damage = false
let Time_Shard: Sprite = null
let StopWatch: Sprite = null
let MapOneLeversPushed = 0
let Time = 0
let mySprite: Sprite = null
let Jumps = 0
let textSprite: Sprite = null
let Game_Started = false
let tilt_animation = false
Game_Started = false
let TimeWatchFreeze = false
Set_Colors()
blockMenu.showMenu(["PLAY"], MenuStyle.List, MenuLocation.BottomHalf)
blockMenu.setColors(5, 2)
scene.setBackgroundColor(4)
textSprite = textsprite.create("Puzzles n' Platforms")
textSprite.setPosition(71, 19)
let Level = 1
game.onUpdate(function () {
    if (Game_Started) {
        console.log(mySprite.vx)
    }
})
game.onUpdate(function () {
    if (Game_Started) {
        if (MapOneLeversPushed == 3) {
            tiles.setWallAt(tiles.getTileLocation(12, 28), false)
            tiles.setTileAt(tiles.getTileLocation(12, 28), assets.tile`tile`)
        }
    }
})
game.onUpdate(function () {
    if (Game_Started) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            if (Jumps == 0) {
                Fall_Damage = false
                Jumps = 2
            }
        }
    }
})
game.onUpdate(function () {
    if (Game_Started) {
        Set_Colors()
    }
})
game.onUpdate(function () {
    if (Game_Started) {
        if (mySprite.vy > 175) {
            console.log("Fall Damage is True")
            Fall_Damage = true
        }
    }
})
game.onUpdate(function () {
    if (Game_Started) {
        if (mySprite.tileKindAt(TileDirection.Center, assets.tile`tile8`)) {
            color.FadeToBlack.startScreenEffect(1000)
        }
    }
})
game.onUpdate(function () {
    if (Fall_Damage) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            Fall_Damage = false
            scene.cameraShake(4, 500)
            info.changeLifeBy(-1)
        }
    }
})
game.onUpdateInterval(250, function () {
    if (Game_Started) {
        StopWatch.say("" + Time + " Seconds")
    }
})
game.onUpdateInterval(250, function () {
    if (Game_Started) {
        if (!(TimeWatchFreeze)) {
            Time += 0.25
        }
    }
})

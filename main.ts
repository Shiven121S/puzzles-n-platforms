namespace SpriteKind {
    export const Reward = SpriteKind.create()
    export const Stop_Watch = SpriteKind.create()
    export const shadow = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Game_Started) {
        if (0 < Jumps) {
            if (2 == Jumps) {
                if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
                    mySprite.vy = -150
                    Jumps += -1
                    animation.runImageAnimation(
                    mySprite,
                    [img`
                        . . . . . . . . . . 
                        . . . . . . . . . . 
                        . . . . . . . . . . 
                        . . . 3 3 3 3 . . . 
                        . . 3 3 3 3 3 3 . . 
                        . . 3 3 3 3 3 3 . . 
                        . . 3 3 3 3 3 3 . . 
                        . . 3 3 3 3 3 3 . . 
                        . . 3 3 3 3 3 3 . . 
                        . . 3 3 3 3 3 3 . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        `,img`
                        . . . . . . . . . . 
                        . . . . . . . . . . 
                        . . . . 3 3 . . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . . 3 3 . . . . 
                        . . . . 3 3 . . . . 
                        `,img`
                        . . . . . . . . . . 
                        . . . . . . . . . . 
                        . . . . 3 3 . . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . . 3 3 . . . . 
                        . . . . 3 3 . . . . 
                        `,img`
                        . . . . . . . . . . 
                        . . . . . . . . . . 
                        . . . . 3 3 . . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . . 3 3 . . . . 
                        . . . . 3 3 . . . . 
                        `,img`
                        . . . . . . . . . . 
                        . . . . . . . . . . 
                        . . . . 3 3 . . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . . 3 3 . . . . 
                        . . . . 3 3 . . . . 
                        `,img`
                        . . . . . . . . . . 
                        . . . . . . . . . . 
                        . . . . 3 3 . . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . . 3 3 . . . . 
                        . . . . 3 3 . . . . 
                        `,img`
                        . . . . . . . . . . 
                        . . . . . . . . . . 
                        . . . . 3 3 . . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        . . . . 3 3 . . . . 
                        . . . . 3 3 . . . . 
                        `,img`
                        . . . . . . . . . . 
                        . . . . . . . . . . 
                        . . . . . . . . . . 
                        . . . 3 3 3 3 . . . 
                        . . 3 3 3 3 3 3 . . 
                        . . 3 3 3 3 3 3 . . 
                        . . 3 3 3 3 3 3 . . 
                        . . 3 3 3 3 3 3 . . 
                        . . 3 3 3 3 3 3 . . 
                        . . 3 3 3 3 3 3 . . 
                        . . . 3 3 3 3 . . . 
                        . . . 3 3 3 3 . . . 
                        `],
                    100,
                    false
                    )
                }
            } else {
                mySprite.vy = -150
                Jumps += -1
                animation.runImageAnimation(
                mySprite,
                [img`
                    . . . . . . . . . . 
                    . . . . . . . . . . 
                    . . . . . . . . . . 
                    . . . 3 3 3 3 . . . 
                    . . 3 3 3 3 3 3 . . 
                    . . 3 3 3 3 3 3 . . 
                    . . 3 3 3 3 3 3 . . 
                    . . 3 3 3 3 3 3 . . 
                    . . 3 3 3 3 3 3 . . 
                    . . 3 3 3 3 3 3 . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    `,img`
                    . . . . . . . . . . 
                    . . . . . . . . . . 
                    . . . . 3 3 . . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . . 3 3 . . . . 
                    . . . . 3 3 . . . . 
                    `,img`
                    . . . . . . . . . . 
                    . . . . . . . . . . 
                    . . . . 3 3 . . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . . 3 3 . . . . 
                    . . . . 3 3 . . . . 
                    `,img`
                    . . . . . . . . . . 
                    . . . . . . . . . . 
                    . . . . 3 3 . . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . . 3 3 . . . . 
                    . . . . 3 3 . . . . 
                    `,img`
                    . . . . . . . . . . 
                    . . . . . . . . . . 
                    . . . . 3 3 . . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    . . . . 3 3 . . . . 
                    . . . . 3 3 . . . . 
                    `,img`
                    . . . . . . . . . . 
                    . . . . . . . . . . 
                    . . . . . . . . . . 
                    . . . 3 3 3 3 . . . 
                    . . 3 3 3 3 3 3 . . 
                    . . 3 3 3 3 3 3 . . 
                    . . 3 3 3 3 3 3 . . 
                    . . 3 3 3 3 3 3 . . 
                    . . 3 3 3 3 3 3 . . 
                    . . 3 3 3 3 3 3 . . 
                    . . . 3 3 3 3 . . . 
                    . . . 3 3 3 3 . . . 
                    `],
                100,
                false
                )
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Reward, SpriteKind.Reward, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(sprite, assets.tile`myTile`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Reward, function (sprite, otherSprite) {
    otherSprite.destroy()
    tiles.setTileAt(tiles.locationOfSprite(otherSprite), assets.tile`tile`)
    timer.background(function () {
        scene.cameraShake(2, 150)
    })
    timer.background(function () {
        Time += -2
    })
})
sprites.onDestroyed(SpriteKind.Reward, function (sprite) {
    animation.stopAnimation(animation.AnimationTypes.All, sprite)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile8`, function (sprite, location) {
    TimeWatchFreeze = true
    LevelOneRecord = Time
    GameOver = true
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
    tiles.placeOnRandomTile(sprite, assets.tile`myTile`)
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
    200,
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
    if (option == "Choose Map") {
        color.FadeToBlack.startScreenEffect(500)
        timer.after(600, function () {
            color.startFade(color.Black, color.originalPalette, 10)
            blockMenu.closeMenu()
            blockMenu.showMenu(["Map 1", "Map 2", "Map 3", "Map 4", "Map 5"], MenuStyle.List, MenuLocation.BottomHalf)
        })
    } else if (option == "Map 1") {
        color.FadeToBlack.startScreenEffect(100)
        timer.after(110, function () {
            blockMenu.closeMenu()
            blockMenu.setControlsEnabled(false)
            color.startFade(color.Black, color.originalPalette, 10)
            Set_Colors()
            textSprite.destroy()
            Jumps = 2
            MapOneLeversPushed = 0
            tiles.setTilemap(tilemap`Map1`)
            mySprite = sprites.create(img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . 3 3 3 3 . . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                `, SpriteKind.Player)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
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
            for (let index2 = 0; index2 < 12; index2++) {
                TimeSharde = sprites.create(img`
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
                    `, SpriteKind.Reward)
            }
            Time = 0
            Map = 1
            Game_Started = true
        })
    } else if (option == "Map 2") {
        color.FadeToBlack.startScreenEffect(100)
        timer.after(110, function () {
            blockMenu.closeMenu()
            blockMenu.setControlsEnabled(false)
            color.startFade(color.Black, color.originalPalette, 10)
            Set_Colors()
            textSprite.destroy()
            Jumps = 2
            MapOneLeversPushed = 0
            tiles.setTilemap(tilemap`level13`)
            mySprite = sprites.create(img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . 3 3 3 3 . . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                `, SpriteKind.Player)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
            scene.cameraFollowSprite(mySprite)
            mySprite.ay = 275
            controller.moveSprite(mySprite, 100, 0)
            for (let index2 = 0; index2 < 16; index2++) {
                TimeSharde = sprites.create(img`
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
                    `, SpriteKind.Reward)
            }
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
            Time = 0
            Map = 2
            Game_Started = true
        })
    } else if (option == "Map 3") {
        color.FadeToBlack.startScreenEffect(100)
        timer.after(110, function () {
            blockMenu.closeMenu()
            blockMenu.setControlsEnabled(false)
            color.startFade(color.Black, color.originalPalette, 10)
            Set_Colors()
            textSprite.destroy()
            Jumps = 2
            MapOneLeversPushed = 0
            tiles.setTilemap(tilemap`level15`)
            for (let index2 = 0; index2 < 13; index2++) {
                TimeSharde = sprites.create(img`
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
                    `, SpriteKind.Reward)
            }
            mySprite = sprites.create(img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . 3 3 3 3 . . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                `, SpriteKind.Player)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
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
            // // tiles.placeOnTile(Time_Shard, tiles.getTileLocation(0, 0))
            // // tiles.placeOnRandomTile(Time_Shard, tiles.getRandomTileByType(img`tile21`))
            Time = 0
            Map = 3
            Game_Started = true
        })
    } else if (option == "Map 4") {
        color.FadeToBlack.startScreenEffect(100)
        timer.after(110, function () {
            blockMenu.closeMenu()
            blockMenu.setControlsEnabled(false)
            color.startFade(color.Black, color.originalPalette, 10)
            Set_Colors()
            textSprite.destroy()
            Jumps = 2
            MapOneLeversPushed = 0
            tiles.setTilemap(tilemap`level17`)
            for (let index2 = 0; index2 < 22; index2++) {
                TimeSharde = sprites.create(img`
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
                    `, SpriteKind.Reward)
            }
            mySprite = sprites.create(img`
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . . . . . . . . 
                . . . 3 3 3 3 . . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . 3 3 3 3 3 3 . . 
                . . . 3 3 3 3 . . . 
                . . . 3 3 3 3 . . . 
                `, SpriteKind.Player)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
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
            // // tiles.placeOnTile(Time_Shard, tiles.getTileLocation(0, 0))
            // // tiles.placeOnRandomTile(Time_Shard, tiles.getRandomTileByType(img`tile21`))
            Time = 0
            Map = 4
            Game_Started = true
        })
    } else if (option == "Store") {
    	
    }
})
let Fall_Damage = false
let Map = 0
let TimeSharde: Sprite = null
let StopWatch: Sprite = null
let MapOneLeversPushed = 0
let LevelOneRecord = 0
let Time = 0
let mySprite: Sprite = null
let Jumps = 0
let textSprite: Sprite = null
let TimeWatchFreeze = false
let GameOver = false
let Game_Started = false
let tilt_animation = false
Game_Started = false
GameOver = false
TimeWatchFreeze = false
Set_Colors()
blockMenu.showMenu(["Choose Map", "Store"], MenuStyle.List, MenuLocation.BottomHalf)
blockMenu.setColors(5, 2)
scene.setBackgroundColor(4)
textSprite = textsprite.create("Puzzles n' Platforms")
textSprite.setPosition(71, 19)
let Level = 1
game.onUpdate(function () {
    if (Game_Started) {
        Set_Colors()
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
game.onUpdate(function () {
    if (Game_Started) {
        if (Map == 2) {
            if (MapOneLeversPushed == 16) {
                tiles.setWallAt(tiles.getTileLocation(31, 33), false)
                tiles.setTileAt(tiles.getTileLocation(31, 33), assets.tile`tile13`)
            }
        }
    }
})
game.onUpdate(function () {
    if (Game_Started) {
        if (Map == 1) {
            if (MapOneLeversPushed == 15) {
                tiles.setWallAt(tiles.getTileLocation(33, 32), false)
                tiles.setTileAt(tiles.getTileLocation(33, 32), assets.tile`tile13`)
            }
        }
    }
})
game.onUpdate(function () {
    if (Game_Started) {
        if (Map == 4) {
            if (MapOneLeversPushed == 17) {
                tiles.setWallAt(tiles.getTileLocation(33, 1), false)
                tiles.setTileAt(tiles.getTileLocation(33, 1), assets.tile`tile13`)
                console.log("doAction")
            }
        }
    }
})
game.onUpdate(function () {
    if (Game_Started) {
        if (Map == 3) {
            if (MapOneLeversPushed == 18) {
                tiles.setWallAt(tiles.getTileLocation(33, 32), false)
                tiles.setTileAt(tiles.getTileLocation(33, 32), assets.tile`tile13`)
            }
        }
    }
})
game.onUpdate(function () {
    Set_Colors()
})
game.onUpdate(function () {
    if (Game_Started) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            if (Jumps == 0) {
                Jumps = 2
            }
        }
    }
})
game.onUpdate(function () {
    console.log(MapOneLeversPushed)
})
game.onUpdate(function () {
    if (Game_Started) {
        if (Map == 4) {
            if (MapOneLeversPushed == 17) {
                tiles.setWallAt(tiles.getTileLocation(33, 1), false)
                tiles.setTileAt(tiles.getTileLocation(33, 1), assets.tile`tile13`)
            }
        }
    }
})
game.onUpdateInterval(250, function () {
    if (Game_Started) {
        if (!(TimeWatchFreeze)) {
            Time += 0.25
        }
    }
})
game.onUpdateInterval(250, function () {
    if (Game_Started) {
        StopWatch.say("" + Time + " Seconds")
    }
})

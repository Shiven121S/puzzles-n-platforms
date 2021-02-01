// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Map1":
            case "level1":return tiles.createTilemap(hex`10001e00020201010202020202020202020202020202020102020202020202020202020202010101010101010101010101010102020101010101010101010101010101020201010101010101010101010103010202020202020202020101010101020202020202020202020201010101020202020202020202020202010101010102020202020202020202020101010101020202020202020202020201010102020202020202020201010101010101010102020202010101010101030101010106020202020101020202020202020202020202020201010202020202020202020202020202020102020202020202020202020202020101010101010101010101020202020202020101010101010101060202020202020202020201010202020202020202020202020202010202020202020202020202020202020101010202020202020202020202020202010301010101060202020202020202020202020101010202020202020202020202020202010102020202020202020201010101010101020202020202020202010101010101020202020202020202020202010102020202020202020202020202020201020202020202020202020202020201010202020202020202020202020202010101010401010502020202020202020202020202020202`, img`
22..222222222222
222.222222222222
2..............2
2..............2
2..............2
22222222.....222
22222222....2222
22222222.....222
22222222.....222
22222222...22222
2222.........222
2............222
2..2222222222222
2..2222222222222
22.2222222222222
2...........2222
222.........2222
222222..22222222
222222.222222222
222222...2222222
2222222.......22
2222222222...222
22222222222..222
222222.......222
222222......2222
22222222..222222
222222222.222222
22222222..222222
22222222....2...
2222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile7], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile":
            case "tile1":return tile1;
            case "tile0":
            case "tile2":return tile2;
            case "tile6":
            case "tile3":return tile3;
            case "tile7":
            case "tile4":return tile4;
            case "tile9":
            case "tile6":return tile6;
            case "tile8":
            case "tile5":return tile5;
            case "tile10":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.

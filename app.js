/**
 * Created by Administrator on 2015/10/20.
 */
var stage = new createjs.Stage("gameView");
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",stage);
var gameView = new createjs.Container();
stage.addChild(gameView);
/*var s = new createjs.Shape();
s.graphics.beginFill("#ff0000");
s.graphics.drawRect(0,0,100,100);
s.graphics.endFill();
gameView.addChild(s);*/

var n = 2;
function addRect(){
    var cl = parseInt(Math.random()*1000000);
    var color = "#"+cl;
    var rc = cl+131313;
    var RectColor = "#"+rc;
    var x = parseInt(Math.random()*n);
    var y = parseInt(Math.random()*n);
    for(var indexX = 0;indexX < n;indexX++){
        for(var indexY = 0;indexY < n;indexY++){
            var r = new Rect(n,color,RectColor);
            gameView.addChild(r);
            r.x = indexX;
            r.y = indexY;
            if(r.x==x && r.y==y){
                r.setRectType(2);
            }
            r.x = indexX*(400/n);
            r.y = indexY*(400/n);
            if(r.getRectType() == 2){
                r.addEventListener("click",function(){
                    if(n<7){
                        ++n;
                    }
                    gameView.removeAllChildren();
                    addRect();
                })
            }
        }
    }
}
addRect();
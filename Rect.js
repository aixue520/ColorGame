/**
 * Created by Administrator on 2015/10/20.
 */
function Rect(n,color,RectColor){
    createjs.Shape.call(this);

    this.setColor = function (colorString) {
        this.graphics.beginFill(colorString);
        this.graphics.drawRect(0,0,400/n-5,400/n-5);
        this.graphics.endFill();
    };
    /*type：选择当前的颜色（默认的有两种颜色），
    确定当前要用到哪个颜色后给其颜色设定一个类型，
    之后通过类型决定当前是什么颜色的小方框，并且给想方框设定一个监听事件*/
    this.setRectType = function(type){
        this._RectType = type;
        switch (type){
            case 1:
                this.setColor(color);
                break;
            case 2:
                this.setColor(RectColor);
                break;
        }
    };

    this.setRectType(1);

    this.getRectType = function(){
        return this._RectType;
    };
}
Rect.prototype = new  createjs.Shape();
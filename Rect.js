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
    /*type��ѡ��ǰ����ɫ��Ĭ�ϵ���������ɫ����
    ȷ����ǰҪ�õ��ĸ���ɫ�������ɫ�趨һ�����ͣ�
    ֮��ͨ�����;�����ǰ��ʲô��ɫ��С���򣬲��Ҹ��뷽���趨һ�������¼�*/
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
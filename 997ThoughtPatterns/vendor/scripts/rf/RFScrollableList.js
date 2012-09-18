
(function(window) {

    function RFScrollableList() {
        this.initialize();
    }

    RFScrollableList.prototype = p = new Container();

    p.background = new RFBlock();

    p.curVal=null;
    p.prevVal;
    p.timer;
    p.targetProp;
    p.mouseDown;

    p.val;
    p.distance;

    p.arr = new Array();

    p.Container_initialize = p.initialize;
    p.initialize = function() {

        this.Container_initialize();
        this.addChild(this.background);
        this.background.setSize(640,550);

//        var btn = new RFButtonBitmap();
//        btn.init("images/btnL1_def.png","images/btnL1_down.png");
//        this.addChild(btn);
//        btn.y=230;

    };

    p.init = function( targetProp,
                       targetClass,
                       size,
                       howMany,
                       dataSet
        ) {

        var that=this;
        this.targetProp = targetProp;
        this.recordValue = _.bind( this.recordValue, this );

        RF.stage.onMouseDown = function(e) {
            that.mouseDown = true;
        }

        RF.stage.onMouseUp = function(e) {
            that.mouseDown = false;
        }

        RF.stage.onMouseMove = function(e) {
            if(that.mouseDown) that.recordValue(e);
        }


        for ( var i = 0; i < howMany; i++) {

            var t = new targetClass();
            this.addChild(t);
            t.init();
            if(targetProp=="y") t.y+=size.h*i;

            t.setSetters( {setLabel:"newnewnew"} )

        }




//        t.y=300;
//        t.init();

        Ticker.addListener(this);

    };
    p.tick = function() {

    }

    p.recordValue = function(e) {
        console.log("e", e.stageX,e.stageY);
        this.prevVal = this.curVal;

        if(this.targetProp=='y') this.curVal= e.stageY;
        if(this.targetProp=='x') this.curVal= e.stageX;

        console.log("this[targetProp]",this.prevVal,this.curVal);

    }


    window.RFScrollableList = RFScrollableList;

}(window));














/**
 * Created with JetBrains WebStorm.
 * User: Robert
 * Date: 9/12/12
 * Time: 4:36 PM
 * To change this template use File | Settings | File Templates.
 */

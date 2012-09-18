
(function(window) {

    function RFScrollableList() {
        this.initialize();
    }

    RFScrollableList.prototype = new Container();
    RFScrollableList.prototype.Container_initialize = RFScrollableList.prototype.initialize;

    RFScrollableList.prototype.background = new RFBlock();

    RFScrollableList.prototype.curVal=null;
    RFScrollableList.prototype.prevVal;
    RFScrollableList.prototype.timer;
    RFScrollableList.prototype.targetProp;
    RFScrollableList.prototype.mouseDown;


    RFScrollableList.prototype.val
    RFScrollableList.prototype.distance

    RFScrollableList.prototype.arr = new Array();

//    RFScrollableList.prototype
//    RFScrollableList.prototype
//    RFScrollableList.prototype
//    RFScrollableList.prototype
//    RFScrollableList.prototype
//    RFScrollableList.prototype
//    RFScrollableList.prototype
//    RFScrollableList.prototype
//    RFScrollableList.prototype
//    RFScrollableList.prototype


    RFScrollableList.prototype.initialize = function() {

        this.Container_initialize();
        this.addChild(this.background);
        this.background.setSize(640,550);

        var btn = new RFButtonBitmap();
        btn.init("images/btnL1_def.png","images/btnL1_down.png");
        this.addChild(btn);
        btn.y=230;


    };

    RFScrollableList.prototype.init = function( targetProp,
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
            //console.log("onMouseUp");
            that.mouseDown = false;
        }

        RF.stage.onMouseMove = function(e) {
//            console.log("onMouseMove");
            if(that.mouseDown) that.recordValue(e);
        }

        Ticker.addListener(this);

    };
    RFScrollableList.prototype.tick = function() {


    }


    RFScrollableList.prototype.recordValue = function(e) {
        console.log("e", e.stageX,e.stageY);
        this.prevVal = this.curVal;

        if(this.targetProp=='y') this.curVal= e.stageY;
        if(this.targetProp=='x') this.curVal= e.stageX;

        console.log("this[targetProp]",this.prevVal,this.curVal);

        ///this[targetProp]
//
//        RFScrollableList.prototype.curVal;
//        RFScrollableList.prototype.prevVal;


    }


//    RFScrollableList.prototype
//    RFScrollableList.prototype
//    RFScrollableList.prototype
//    RFScrollableList.prototype
//    RFScrollableList.prototype
//    RFScrollableList.prototype
//    RFScrollableList.prototype
//    RFScrollableList.prototype
//    RFScrollableList.prototype
//    RFScrollableList.prototype
//    RFScrollableList.prototype

    window.RFScrollableList = RFScrollableList;

}(window));














/**
 * Created with JetBrains WebStorm.
 * User: Robert
 * Date: 9/12/12
 * Time: 4:36 PM
 * To change this template use File | Settings | File Templates.
 */

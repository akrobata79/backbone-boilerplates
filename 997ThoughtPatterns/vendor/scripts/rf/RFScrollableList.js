
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

    p.dataSet;

    p.arr = new Array();

    p.theShape;
    p.width;
    p.height;

    p.theArr = [];

    p.speed;
    p.vx=0;


    p.upperBorder;
    p.lowerBorder;

    p.Container_initialize = p.initialize;
    p.initialize = function() {
        this.Container_initialize();
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

        this.dataSet = dataSet;

        this.width = size.w
        this.height = size.h*howMany

        this.upperBorder = -size.h;
        this.lowerBorder = this.height;

        var mainContainer = new createjs.Container();
        this.addChild(mainContainer);

        this.theArr = []

        for ( var i = 0; i < howMany+1; i++) {

            var t = new targetClass();
            mainContainer.addChild(t);
            t.init();
            t.setSize(size.w,size.h)
            t.y=size.h*i;
            t.setSetters( this.dataSet[i] )
            this.theArr.push(t);

        }

        this.theShape  = new createjs.Shape();
        this.theShape.graphics.clear();
        this.theShape.graphics.beginFill("rgba(255,0,0,0.75)");
        this.theShape.graphics.lineTo(this.width, 0);
        this.theShape.graphics.lineTo(this.width, this.height);
        this.theShape.graphics.lineTo(0,this.height);
        this.theShape.graphics.lineTo(0,0 );
        this.theShape.graphics.closePath();
        this.theShape.graphics.endFill();

        mainContainer.mask = this.theShape;

        RF.stage.onMouseDown  = _.bind(this.onMouseDown, this );
        RF.stage.onMouseMove  = _.bind(this.onMouseMove, this );
        RF.stage.onMouseUp  = _.bind(this.onMouseUp, this );

        Ticker.addListener(this);

    };

    p.onMouseDown = function(e) {
        this.mouseDownPoint = new Point(e.stageX, e.stageY);
        this.lastMouseDownPoint = null;
        this.mouseDown = true;
    };

    p.onMouseUp = function(e) {
//            that.mouseDown = false;
//            console.log("UPUP");
//            this.curVal =null
//            this.prevVal =null;

        if (this.mouseDown) {
            this.mouseDown = false
        }

    }

    p.onMouseMove = function(e) {
//            if(that.mouseDown) that.recordValue(e);

        this.lastMouseDownPoint = new Point(this.mouseDownPoint.x,this.mouseDownPoint.y);

        this.mouseDownPoint.x= e.stageX
        this.mouseDownPoint.y= e.stageY


        if (this.mouseDown) {

            for ( var i = 0; i < this.theArr.length; i++) {

                var t = this.theArr[i];

                t.y +=  this.mouseDownPoint.y-this.lastMouseDownPoint.y

                if(t.y<this.upperBorder) t.y=this.lowerBorder;
                if(t.y>this.lowerBorder) t.y=this.upperBorder;


            }

        }

    }

    p.DECAY  = 0.93;
    p.MOUSE_DOWN_DECAY  = 0.5;
    p.SPEED_SPRINGNESS  = 0.4;
    p.BOUNCING_SPRINGESS  = 0.2;

    // variables
    p.mouseDown  = false;
    p.velocity  = 0;
    p.mouseDownY  = 0;
    p.mouseDownPoint  = new Point();
    p.lastMouseDownPoint  = new Point();

    // elements
    p.canvasHeight  = 0;
    p.stage = RF.stage;
    p.started =true;

    p.tick = function() {

        if(this.mouseDown) {
            if(this.lastMouseDownPoint) {
                this.vx = this.mouseDownPoint.y-this.lastMouseDownPoint.y;
            }
        }
        else
        {
            //thumb.x += vx;

            for ( var i = 0; i < this.theArr.length; i++) {

                var t = this.theArr[i];

                t.y +=  this.vx;

                console.log("this.vx",this.vx);

                if(t.y<this.upperBorder) t.y=this.lowerBorder;
                if(t.y>this.lowerBorder) t.y=this.upperBorder;


            }


        }

        this.vx *= 0.95;




    }



//    p.tick = function() {

//        if (this.curVal && this.prevVal) {
//            // console.log(this.curVal,this.prevVal,">",);
//
//            this.speed = this.curVal-this.prevVal;
//
//            console.log("this.speed",this.speed);
//
//            for ( var i = 0; i < this.theArr.length; i++) {
//
//                var t = this.theArr[i];
////
////                myMC.x += (stage.mouseX - myMC.x) / damping;
////                myMC.y += (stage.mouseY - myMC.y) / damping;
//
//
//
//                t.y += (this.curVal - t.y )/8;
//
//
//
//                //t.y -= this.speed/2;
////                this.vy += this.ay;
////
////                 t.y += vy;
//
//
//                if(t.y<this.upperBorder) t.y=this.lowerBorder;
//                if(t.y>this.lowerBorder) t.y=this.upperBorder;
//
//            }
//
//        }

    // };

    p.recordValue = function(e) {
        // console.log("e", e.stageX,e.stageY);
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

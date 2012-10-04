
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

    p.elementSize;

    p.mouseDown  = false;
    p.mouseDownPoint  = new Point();
    p.lastMouseDownPoint  = new Point();
    p.allowMouseMove = false;

    p.canvasHeight  = 0;

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

        this.elementSize = size;
        this.targetProp = targetProp;



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

        //
        // _.max(stooges, function(stooge){ return stooge.age; });



        //   console.log("res",maxPos.y,minPos.y);

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
        this.allowMouseMove = false;
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
        this.allowMouseMove = true;
        } else {
            this.allowMouseMove = false;
        }


    }


    p.reposition = function(t) {

        if(t.y<this.upperBorder) {
            var maxPos = _.max(this.theArr, function(stooge){return stooge.y; })
            t.y=maxPos.y+this.elementSize.h
        }

        if(t.y>this.lowerBorder) {
            var minPos =   _.min(this.theArr, function(stooge){return stooge.y; })
            t.y=minPos.y-this.elementSize.h;
        }

    }


    // variables




    p.tick = function() {

        if(this.mouseDown) {
            if(this.lastMouseDownPoint) {
                this.vx = this.mouseDownPoint.y-this.lastMouseDownPoint.y;

                if(this.allowMouseMove){

                    for ( var i = 0; i < this.theArr.length; i++) {

                        var t = this.theArr[i];
                        this.reposition(t);


                        var cap = this.mouseDownPoint.y-this.lastMouseDownPoint.y

                        if(cap>30) cap =30
                        this.reposition(t);
                        t.y +=  cap;


                        this.reposition(t);


                    }
                }


            }
        } else {
            for ( var i = 0; i < this.theArr.length; i++) {

                var t = this.theArr[i];
                this.reposition(t);

                if(this.vx>30) this.vx=30;

                t.y +=  this.vx;
                this.reposition(t);
            }
        }
        this.vx *= 0.98;

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

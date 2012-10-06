
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


    p.currentX = 0;
    p.lastX = 0;
    p.isDragging =false;

    p.offset;
    p.speed;
    p.vx=0;

    p.upperBorder;
    p.lowerBorder;

    p.elementSize;
    p.direction;
    p.howMany;

    p.mouseDownPoint  = new Point();
    p.lastMouseDownPoint  = new Point();
    p.allowMouseMove = false;

    p.canvasHeight  = 0;

    p.prevIndex;
    p.index = 0;
    p.indexArr = [];
    p.allowJump = false

    p.expo

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
        this.height = size.h*(howMany);

        this.upperBorder = -size.h;
        this.lowerBorder = this.height;

        this.howMany=howMany

        var mainContainer = new createjs.Container();
        this.addChild(mainContainer);

        this.theArr = []

        this.rail = new RFBlock();
        this.addChild(this.rail);
        this.rail.setSize(100,this.dataSet.length*this.elementSize.h);

        for ( var i = 0; i < this.dataSet.length; i++) {
            this.indexArr.push(-i*this.elementSize.h);
        }

        for ( var i = 0; i < howMany+1; i++) {

            var t = new targetClass();
            mainContainer.addChild(t);
            t.init();
            t.setSize(size.w,size.h)
            t.y=size.h*i;
            t.setSetters( this.dataSet.models[i].attributes )
//            t.setSetters( this.dataSet.models[i].attributes )
            t.offset=0;
//            this.reposition(t,i)
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

//        mainContainer.mask = this.theShape;





        console.log("indexArr",this.indexArr);

        RF.stage.onMouseDown  = _.bind(this.onMouseDown, this );
        RF.stage.onMouseMove  = _.bind(this.onMouseMove, this );
        RF.stage.onMouseUp  = _.bind(this.onMouseUp, this );




        Ticker.addListener(this);


        this.dataSet.on("add", function(msg) {
            console.log(">>>>> got it ",this.dataSet.length);

            this.theArr[0].setSetters( this.dataSet.models[10].attributes );

        },this);

    };

    p.onMouseDown = function(e) {

        console.log("onMouseDown", this.globalToLocal(e.stageX,e.stageY).y - this.rail.y);

        this.offset = this.globalToLocal(e.stageX,e.stageY).y - this.rail.y//this.rail.y - this.globalToLocal(e.stageX,e.stageY).y//+this.rail.y

//        console.log("e.stageY",this.globalToLocal(e.stageX,e.stageY).y);

        this.isDragging = true;

//        this.mou

//        this.mouseDownPoint = new Point(e.stageX, e.stageY);
//        this.lastMouseDownPoint = null;
//        this.mouseDown = true;
    };

    p.onMouseUp = function(e) {
        this.expo = e.stageY//this.globalToLocal(e.stageX,e.stageY).y
        this.isDragging = false;
//        this.allowMouseMove = false;
//        if (this.mouseDown) {
//            this.mouseDown = false
//        }

    }

    p.onMouseMove = function(e) {

       this.expo = this.globalToLocal(e.stageX,e.stageY).y

        if(this.isDragging) {
            this.rail.y = this.globalToLocal(e.stageX,e.stageY).y - this.offset
        }

//        if(this.isDragging)
//        if (this.mouseDown) {
//
//            this.lastMouseDownPoint = new Point(this.mouseDownPoint.x,this.mouseDownPoint.y);
//
//            this.mouseDownPoint.x= e.stageX;
//            this.mouseDownPoint.y= e.stageY;
//
//
//
//            this.allowMouseMove = true;
//
//        } else {
//            this.allowMouseMove = false;
//        }

    }

    p.tick = function() {


        if(this.isDragging) {

//            console.log("p.expo",);
            this.lastX = this.currentX;
            this.currentX = RF.stage.mouseY;

            if(this.currentX - this.lastX!=0)this.vx = this.currentX - this.lastX;

//            console.log("vx",this.vx);

//            this.vx =3

        } else {

//            console.log("now");
            this.rail.y += this.vx;


        }

//        if(this.mouseDown) {
//            if(this.lastMouseDownPoint) {
//                this.vx = (this.mouseDownPoint.y-this.lastMouseDownPoint.y)/3;
//                if(this.allowMouseMove){
//                    for ( var i = 0; i < this.theArr.length; i++) {
//                        var t = this.theArr[i];
//
//
//                        this.reposition(t,i)
//
//                    }
//                }
//            }
//        } else {
//            for ( var i = 0; i < this.theArr.length; i++) {
//                var t = this.theArr[i];
//
////                this.rail.y +=  this.vx;
//               this.reposition(t,i)
//               // t.y=this.rail.y+i*this.elementSize.h
//
//            }
//        }
//
       this.vx *= 0.97;
//        this.limitRail();
//        if( Math.abs(this.vx) < 0.5) this.vx = 0;

    }

    p.reposition = function(t,i) {

        if(t.y<this.upperBorder) {

//            console.log("reposition");

            t.offset++;
            this.setIndex(this.index+1)
//            this.inde


//            for ( var i = 0; i < this.indexArr.length - this.howMany; i++) {
//                if ( this.rail.y > this.indexArr[i+1] && this.rail.y < this.indexArr[i]) {
//                    this.setIndex(i);
//                }
//            }


            //this.dataSet.models[0].attributes )
        }


//        var val0 = t.offset*this.elementSize.h
        var val1 = (this.howMany+1)*this.elementSize.h
        var val2 = i*this.elementSize.h;

        this.rail.y +=  this.vx;
        t.y = this.rail.y - this.indexArr[i] + val1* t.offset;




    }

    p.setIndex = function(i) {
        this.prevIndex = this.index;

        if(this.prevIndex != i) {
            this.index=i;
            console.log("index",this.index);

            //this.theArr[0].setSetters({setLabel:"!!!!"})

        }
    }

    p.limitRail = function() {

        if (this.rail.y < 0 && this.rail.y > -(this.elementSize.h*2) && this.direction=="DOWN") {
            this.vx*=0.93;
        }


        if (this.rail.y > 0) this.rail.y=0;
        if (this.rail.y < this.height-this.rail.height) this.rail.y=this.height-this.rail.height


//        if (this.rail.y < -this.elementSize.h) this.vx*=0.4

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

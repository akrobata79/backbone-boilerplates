
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
    p.allowScroll=true;

    p.speedCap;



    p.Container_initialize = p.initialize;
    p.initialize = function() {
        this.Container_initialize();
    };

    p.init = function( targetProp,
                       targetClass,
                       size,
                       howMany,
                       dataSet,
                       speedCap
        ) {

        var that=this;

        if(!speedCap){this.speedCap=25} else {this.speedCap=speedCap};

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
            t.offset=0;
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

        this.dataSet.on("add", function(msg) {
            console.log(">>>>> got it ",this.dataSet.length);

            this.theArr[0].setSetters( this.dataSet.models[10].attributes );

        },this);

    };


    p.onMouseDown = function(e) {
        this.isDragging = true;
        this.offset = this.globalToLocal(e.stageX,e.stageY).y - this.rail.y
    };

    p.onMouseUp = function(e) {
        this.isDragging = false;
    }

    p.onMouseMove = function(e) {
        if(this.isDragging) {
            this.rail.y = this.globalToLocal(e.stageX,e.stageY).y - this.offset;
            this.handleMove();
        }
    }

    p.tick = function() {

        if( Math.abs(this.vx) < 0.5) this.vx = 0;
        if( Math.abs(this.vx) > this.speedCap) {

            if(this.vx>0) { this.vx=this.speedCap}
            if(this.vx<0) {this.vx=-this.speedCap}

        }

        if(this.isDragging) {
            this.lastX = this.currentX;
            this.currentX = RF.stage.mouseY;
            this.vx = this.currentX - this.lastX;

        } else {

            this.rail.y += this.vx;
            this.handleMove();
        }


        if( Math.abs(this.vx) < 0.5) this.vx = 0;
        if( Math.abs(this.vx) > this.speedCap) {

            if(this.vx>0) { this.vx=this.speedCap}
            if(this.vx<0) {this.vx=-this.speedCap}

        }

        this.vx *= 0.95;

    }

    p.handleMove = function() {

        if (this.rail.y > 0) {
            this.rail.y=0;
        }

        if (this.rail.y < this.height-this.rail.height) {
            this.rail.y=this.height-this.rail.height
        }

        for ( var i = 0; i < this.theArr.length; i++) {
            var t = this.theArr[i];

            if(this.allowScroll)   t.y = this.rail.y - this.indexArr[i] + (this.howMany+1)*this.elementSize.h* t.offset;

            if(t.y<this.upperBorder) {
                t.offset++;
                this.setIndex(this.index+1,this.upperBorder,t,i)
            }
            if(t.y>this.lowerBorder) {
                t.offset--;
                this.setIndex(this.index-1,this.lowerBorder,t,i)
            }
        }
    }

    p.setIndex = function(inn,where,t,i) {
        this.index=inn;
        if(where==this.upperBorder) this.theArr[i].setSetters( this.dataSet.models[this.index+this.howMany].attributes );
        if(where==this.lowerBorder) this.theArr[i].setSetters( this.dataSet.models[this.index].attributes ); 
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

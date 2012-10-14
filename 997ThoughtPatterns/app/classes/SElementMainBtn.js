
(function() {

    var SElementMainBtn = function() {this.initialize();}
    SElementMainBtn.prototype = p = new RFScrollableElement();

    p.label;
    p.background;
    p.text;

    p.width;
    p.height;

    p.init = function(patternData) {

        var mainBtn = new RFButtonBitmap();
        mainBtn.init("images/btnL1_def.png","images/btnL1_down.png");

        this.passInteraction  = _.bind(this.passInteraction, this );
        mainBtn.reportInteraction = this.passInteraction;

        this.text = new createjs.Text("TEMP", "50px Arial", "#000");
        this.text.textBaseline = "top";

        this.text.x=10;
        this.text.y=30;

        this.addChild(mainBtn,this.text);

    };

    p.setLabel=function(label){
        this.text.text=label;
    }

    p.setColor = function(color) {

    }

    p.sup_passInteraction = p.passInteraction;

    p.passInteraction = function(e) {
        this.sup_passInteraction(e);

        if (e.type=="onClick") {

            //////console.log("new shit");

            //update the other collection




        }
    };

    window.SElementMainBtn = SElementMainBtn;

}());


//example of how to override using super
//    p.sup_setSize = p.setSize;
//    p.setSize = function(w,h) {
//        this.sup_setSize(w,h);
//    };


// ---------------------------
//      ???
//      p.Container_initialize = p.initialize;
//      ???
//      this.Container_initialize();
// ---------------------------



//        this.temp = _.bind( this.temp, this );

//    p.temp=function(){
////        this.text.text=label;
//        this.cache(0,0,472,96);
//
//        //////console.log("temp");
//    }



//(function() {
//
//    var RFScrollableElement = function() {
//        this.initialize();
//    }
//    var p = RFScrollableElement.prototype = new createjs.Container(); // inherit from Container
//
//    p.label;
//    p.background;
//    p.count = 0;
//
//    p.Container_initialize = p.initialize;
//
//    p.initialize = function() {
//        this.Container_initialize();
//
//        //////console.log("RFScrollableElement");
//    }
//
//    window.RFScrollableElement = RFScrollableElement;
//}());
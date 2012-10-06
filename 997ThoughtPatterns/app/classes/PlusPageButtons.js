
(function() {

    var PlusPageButtons = function() {this.initialize();}
    PlusPageButtons.prototype = p = new RFScrollableElement();

    p.label;
    p.background;
    p.text;

    p.width=100;
    p.height=100;

    p.init = function() {

        var backButton = new RFButtonBitmap();
        backButton.init("images/btnL1_def.png","images/btnL1_down.png");
        this.text = new createjs.Text("TEMP", "50px Arial", "#000");
        this.text.textBaseline = "top";

        this.text.x=10;
        this.text.y=30;

        this.addChild(backButton,this.text);

        this.temp = _.bind( this.temp, this );
//        _.bin

        //setTimeout(this.temp,1000);



    };

    p.temp=function(){
//        this.text.text=label;
        this.cache(0,0,472,96);

        console.log("temp");
    }


    p.setLabel=function(label){
        this.text.text=label;
    }

    window.PlusPageButtons = PlusPageButtons;

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
//        console.log("RFScrollableElement");
//    }
//
//    window.RFScrollableElement = RFScrollableElement;
//}());
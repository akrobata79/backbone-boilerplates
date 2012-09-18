
(function() {

    var PlusPageButtons = function() {this.initialize();}

    PlusPageButtons.prototype = p = new RFScrollableElement();

    p.label;
    p.background;
    p.text;

    p.sup_setSize = p.setSize;
    p.setSize = function(w,h) {
        this.sup_setSize(w,h);
    };

    p.init = function() {

        this.label = "yo00000000";


        this.text = new createjs.Text(this.label, "20px Arial", "#000");
        this.text.textBaseline = "top";
        this.text.textAlign = "center";
       // this.text.text="ggggg"

        var width = 100+30;
        var height = 40+20;

        this.background = new createjs.Shape();
        this.background.graphics.beginFill( "#CCC").drawRoundRect(0,0,width,height,10);

//        text.x = width/2;
//        text.y = 10;

        this.addChild(this.background,this.text);
        console.log("333");

    };

    p.setLabel=function(label){

//        console.log("labellllll",label);

        this.text.text=label;
    }

    window.PlusPageButtons = PlusPageButtons;
}());


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
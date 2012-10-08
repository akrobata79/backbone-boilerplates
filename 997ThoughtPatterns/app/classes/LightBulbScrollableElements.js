
(function() {

    var LightBulbScrollableElements = function() {this.initialize();}
    LightBulbScrollableElements.prototype = p = new RFScrollableElement();

    p.label;
    p.background;
    p.text;

    p.width;
    p.height;

    p.init = function() {

        var backButton = new RFButtonBitmap();
        backButton.init("images/smallBtnDef.jpg","images/smallBtnOver.jpg");

        var backButton2 = new RFButtonBitmap();
        backButton2.init("images/smallBtnDef.jpg","images/smallBtnOver.jpg");


        this.passInteraction  = _.bind(this.passInteraction, this );
        backButton.reportInteraction = this.passInteraction;
        backButton2.reportInteraction = this.passInteraction;

        this.addChild(backButton);
        this.addChild(backButton2);

        backButton2.x=100;

        this.temp = _.bind( this.temp, this );

    };

    p.temp=function(){
//        this.text.text=label;
//        this.cache(0,0,472,96);

        console.log("temp");
    }






    window.LightBulbScrollableElements = LightBulbScrollableElements;

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
//}());/**

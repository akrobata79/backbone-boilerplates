
require('classes/Bulb');

(function() {

    var SElementBulbRow = function() {this.initialize();}
    SElementBulbRow.prototype = p = new RFScrollableElement();

    p.label;
    p.background;
    p.text;

    p.width;
    p.height;

    p.color;

    p.dataSet

    p.init = function() {

        this.dataSet=[]

//74x74

        this.passInteraction  = _.bind(this.passInteraction, this );

        for ( var i = 0; i < 8; i++) {

            var temp = new Bulb();
            temp.init();
            this.addChild(temp)

            temp.x = 74*i;
            temp.reportInteraction = this.passInteraction;

            this.dataSet.push(temp);

//            console.log("this.dataSet",this.dataSet.length);

        }


    };



    window.SElementBulbRow = SElementBulbRow;

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
//        //console.log("RFScrollableElement");
//    }
//
//    window.RFScrollableElement = RFScrollableElement;
//}());/**

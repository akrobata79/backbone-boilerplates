
(function() {

    var PlusPageButtons = function() {
        this.initialize();
    }

    PlusPageButtons.prototype = p = new RFScrollableElement();
    p.color=9


    p.setSizeSup = p.setSize;
    p.setSize = function(w,h) {
        this.setSizeSup(w,h);
    };

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
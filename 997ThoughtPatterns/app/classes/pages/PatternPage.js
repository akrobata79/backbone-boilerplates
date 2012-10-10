
require('classes/SElementBulbRow');

(function(window) {

    function PatternPage() {
        this.initialize();
    }

    PatternPage.prototype = new Container();
    PatternPage.prototype.Container_initialize = PatternPage.prototype.initialize;

    PatternPage.prototype.initialize = function() {



    };

    PatternPage.prototype.init = function(dataSet) {

        this.Container_initialize();

        var list = new RFScrollableList();
        this.addChild(list);

        list.init("y",SElementBulbRow,{w:74*8,h:74},5,dataSet);
        list.y=170;
        list.x=13;


    }

    window.PatternPage = PatternPage;

}(window));















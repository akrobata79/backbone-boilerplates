
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


        var PatternRowModel = Backbone.Model.extend({

        });

        var PatternRowCollection = Backbone.Collection.extend({
            model : PatternRowModel
        });

        console.log("6");

        var patternRowCollection = new PatternRowCollection();

        for ( var i = 0; i < 20; i++) {
            var m = new PatternRowModel();
            patternRowCollection.add(m);
            // m.set()
            m.set({})
        }


        console.log("8");
        list.init("y",SElementBulbRow,{w:74*8,h:74},9,patternRowCollection);
        list.y=170;
        list.x=13;


    }

    PatternPage.prototype.add = function(t) {

        console.log("PatternPage add",t);

    }



    window.PatternPage = PatternPage;

}(window));















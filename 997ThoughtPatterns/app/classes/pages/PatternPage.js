
require('classes/SElementBulbRow');

(function(window) {

    function PatternPage() {
        this.initialize();
    }

    PatternPage.prototype = new Container();
    PatternPage.prototype.Container_initialize = PatternPage.prototype.initialize;

    PatternPage.prototype.initialize = function() {
        this.Container_initialize();
    };

    PatternPage.prototype.patternRowCollection;
    PatternPage.prototype.mezzData;

    PatternPage.prototype.init = function(dataSet) {

        this.mezzData=dataSet;

        var list = new RFScrollableList();
        this.addChild(list);

        var BulbModel = Backbone.Model.extend({
            defaults: {setLabel:"NONE",setColor:10}
        });

        var BulbCollection = Backbone.Collection.extend({
            model : BulbModel
        });

        var PatternRowModel = Backbone.Model.extend({
            initialize : function() {
                this.bulbCollection = new BulbCollection;
            }
        });

        var PatternRowCollection = Backbone.Collection.extend({
            model : PatternRowModel
        });

        this.patternRowCollection = new PatternRowCollection();

        for ( var i = 0; i < 31; i++) {

            var m = new PatternRowModel();
            this.patternRowCollection.add(m);

            for ( var j = 0; j < 8; j++) {
                var mB = new BulbModel();
                m.bulbCollection.add(mB);
            }

            //////console.log(">>",this.patternRowCollection.models);

        }

        list.init("y",SElementBulbRow,{w:74*8,h:74},6,this.patternRowCollection,30);
        list.y=170;
        list.x=13;

        var that=this;

        this.mezzData.on("add", function(ship) {

            var t = that.patternRowCollection.at(0).bulbCollection.at(that.mezzData.length-1)
            t.set({setColor:ship.get('setColor')});




        });




        PatternPage.prototype.updateView2 =function(e) {
            //////console.log("!!!!!!!!!!");
        }


    }


    window.PatternPage = PatternPage;

}(window));















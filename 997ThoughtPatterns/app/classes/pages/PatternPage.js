
require('classes/SElementBulbRow');
require('classes/additional/MessageBox');

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
    PatternPage.prototype.messageBox;

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

            for ( var j = 0; j < 7; j++) {
                var mB = new BulbModel();
                m.bulbCollection.add(mB);
            }

            //////console.log(">>",this.patternRowCollection.models);

        }

//        list.init("y",SElementBulbRow,{w:82*7,h:78},6,this.patternRowCollection,30);
        list.y=150;
        list.x=60;

        var that=this;

        this.mezzData.on("add", function(ship) {

            var t = that.patternRowCollection.at(0).bulbCollection.at(that.mezzData.length-1)
            t.set({setColor:ship.get('setColor')});

        });

        this.messageBox = new MessageBox();
        this.addChild(this.messageBox);
        this.messageBox.y=660;
        this.messageBox.x=55;
        this.messageBox.init()

    }


    window.PatternPage = PatternPage;

}(window));















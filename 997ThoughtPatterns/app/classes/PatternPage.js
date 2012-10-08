
require('classes/LightBulbScrollableElements');

(function(window) {

    function PatternPage() {
        this.initialize();
    }

    PatternPage.prototype = new Container();
    PatternPage.prototype.Container_initialize = PatternPage.prototype.initialize;

    PatternPage.prototype.initialize = function() {

        this.Container_initialize();


        var list = new RFScrollableList();
        this.addChild(list);

        var DonutModel = Backbone.Model.extend({
            defaults: {enable:"50,50"}
        });
        var DonutsCollection = Backbone.Collection.extend({
            model : DonutModel
        });
        var donuts = new DonutsCollection();

        for ( var i = 0; i < 20; i++) {
            var m = new DonutModel();
            donuts.add(m);
           // m.set()
            m.set({enable:"50,50"})
        }

        list.init("y",LightBulbScrollableElements,{w:260,h:60},5,donuts);
        list.y=170;
        list.x=80;

    };

    window.PatternPage = PatternPage;

}(window));















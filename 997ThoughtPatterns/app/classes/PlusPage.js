

require('classes/PlusPageButtons');

(function(window) {

    function PlusPage() {
        this.initialize();
    }

    PlusPage.prototype = new Container();

    PlusPage.prototype.Container_initialize = PlusPage.prototype.initialize;
    PlusPage.prototype.initialize = function() {

        this.Container_initialize();

        var list = new RFScrollableList();
        this.addChild(list);

        var DonutModel = Backbone.Model.extend({
            defaults: {setLabel:"BEDZIE OK"}
        });
        var DonutsCollection = Backbone.Collection.extend({
            model : DonutModel
        });
        var donuts = new DonutsCollection();



        for ( var i = 0; i < 20; i++) {
            var m = new DonutModel();
            donuts.add(m);
            m.set({setLabel:""+i})
        }



//        console.log("don",donuts, donuts.models);

        list.init("y",PlusPageButtons,{w:479,h:93},5,donuts);
        list.y=170;
        list.x=80;

        var m = new DonutModel();
        m.set({setLabel:i+"!!!!"})
//        donuts.add(m);


    };

    window.PlusPage = PlusPage;

}(window));















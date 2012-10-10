

require('classes/SElementMainBtn');

(function(window) {

    function PlusPage() {
        this.initialize();
    }

    PlusPage.prototype = new Container();

    PlusPage.prototype.Container_initialize = PlusPage.prototype.initialize;
    PlusPage.prototype.initialize = function() {

        this.Container_initialize();


//    this.init()



    };


    PlusPage.prototype.init = function(dataSet,patternDataSet) {

        var list = new RFScrollableList();
        this.addChild(list);

        list.init("y",SElementMainBtn,{w:479,h:93},5,dataSet);
        list.y=170;
        list.x=80;

    }


    window.PlusPage = PlusPage;

}(window));


//        var m = new DonutModel();
//        m.set({setLabel:i+"!!!!"})
//        donuts.add(m);
















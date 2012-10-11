

require('classes/SElementMainBtn');

(function(window) {

    function PlusPage() {
        this.initialize();
    }

    PlusPage.prototype = new Container();

    PlusPage.prototype.Container_initialize = PlusPage.prototype.initialize;

    PlusPage.prototype.mezzData;


    PlusPage.prototype.initialize = function() {
        this.Container_initialize();
    };


    PlusPage.prototype.init = function(dataSet,mezzData) {

        this.mezzData=mezzData;

        var list = new RFScrollableList();
        this.addChild(list);

        list.init("y",SElementMainBtn,{w:479,h:93},5,dataSet);
        list.y=170;
        list.x=80;


        //this.trigger("YOYO",e)

        //p.theArr = [];


        for ( var i = 0; i < list.theArr.length; i++) {

            var t = list.theArr[i]
            t.on("YOYO", function(e) {

                console.log("xx", e.target.parent);

            })

        }




    }





    window.PlusPage = PlusPage;

}(window));


//        var m = new DonutModel();
//        m.set({setLabel:i+"!!!!"})
//        donuts.add(m);
















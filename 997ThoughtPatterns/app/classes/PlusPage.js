

require('classes/PlusPageButtons');

(function(window) {

    function PlusPage() {
        this.initialize();
    }

    PlusPage.prototype = new Container();

    PlusPage.prototype.Container_initialize = PlusPage.prototype.initialize;
    PlusPage.prototype.initialize = function() {

        console.log("111");

        this.Container_initialize();

        var list = new RFScrollableList();
        this.addChild(list);
        list.init("y",PlusPageButtons,{w:100,h:40},5);

        list.y=130;





    };

    window.PlusPage = PlusPage;

}(window));















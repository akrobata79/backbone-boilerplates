
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
        list.init("y");

        list.y=130;


    };

    window.PlusPage = PlusPage;

}(window));















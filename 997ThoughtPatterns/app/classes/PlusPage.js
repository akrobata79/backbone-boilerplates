

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

        var dataSet = [
            {setLabel:"BEDZIE DOBRZE"},
            {setLabel:"BEDZIE MUSI BYC"},
            {setLabel:"BEDZIE DOBRZE"},
            {setLabel:"BEDZIE JUZ JEST"}
        ];

        list.init("y",PlusPageButtons,{w:479,h:96},5,dataSet);
        list.y=170;
        list.x=80;

    };

    window.PlusPage = PlusPage;

}(window));















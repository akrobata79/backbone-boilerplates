
(function(window) {

    function InfoPage() {
        this.initialize();
    }

    InfoPage.prototype = new Container();
    InfoPage.prototype.Container_initialize = InfoPage.prototype.initialize;

    InfoPage.prototype.initialize = function() {

        this.Container_initialize();


        var btn = new RFButtonBitmap();
        btn.init("images/btnL1_def.png","images/btnL1_down.png");
        this.addChild(btn);
        btn.y=430;



    };

    window.InfoPage = InfoPage;

}(window));















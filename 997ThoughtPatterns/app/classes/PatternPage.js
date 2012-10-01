
(function(window) {

    function PatternPage() {
        this.initialize();
    }

    PatternPage.prototype = new Container();
    PatternPage.prototype.Container_initialize = PatternPage.prototype.initialize;

    PatternPage.prototype.initialize = function() {

        this.Container_initialize();

        var btn = new RFButtonBitmap();
        btn.init("images/btnL1_def.png","images/btnL1_down.png");
        this.addChild(btn);
        btn.y=230;

    };

    window.PatternPage = PatternPage;

}(window));















/**
 * Created with JetBrains WebStorm.
 * User: Robert
 * Date: 8/28/12
 * Time: 8:45 PM
 * To change this template use File | Settings | File Templates.
 */

(function(window) {

    Pattern.prototype.canvas=null;
    Pattern.prototype.stage=null;

    function Pattern() {

        var canvas = document.createElement('canvas');
        canvas.id     = "CursorLayer";
        canvas.width  = 100;
        canvas.height = 100;
        this.canvas = canvas;

      return this
    }

    Pattern.prototype.init = function() {

       this.stage = new Stage(this.canvas);

        var bg = new Shape();

        var bmp = new Bitmap("http://localhost/HTML5/GITPROJECTs/backbone-boilerplates/example3/img/thumb.jpg");
        this.stage.addChild(bmp);

        bmp.onPress = this.mouseUp;

        Ticker.setInterval(50);
        Ticker.addListener(this);

    }

    Pattern.prototype.mouseUp = function(e) {
        console.log("mouse");
    }

    Pattern.prototype.tick = function () {
        this.stage.update();
    }

    window.Pattern = Pattern;

}(window));



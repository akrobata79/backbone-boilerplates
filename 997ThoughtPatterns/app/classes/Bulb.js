

(function() {

    var Bulb = function() {this.initialize();}

    Bulb.prototype = p = new Container();

    p.label;
    p.background;
    p.text;

    p.width;
    p.height;

    p.top;
    p.bottom;

    p.gr;

    p.data

    p.init = function() {

        this.bottom = new Bitmap("images/bulbBack.png");
        this.addChild(this.bottom);

        var txt = new createjs.Text("Hello CreateJS!", "15px Arial", "#FFF");
        var to = new createjs.Container();

        this.gr = new createjs.Graphics();
        var color = Rnd.integer(0,360);

        this.top = new createjs.Shape(this.gr);   // new Bitmap("images/bulbTop.png");

        this.top.x = 37;
        this.top.y = 38;

        this.addChild(this.top);

        this.gr.beginFill(Graphics.getHSL(0,100,5,0.85));
        this.gr.drawCircle(0,0,47/2);

    };

    p.setColor = function(n) {

        this.gr.clear()

        this.gr.beginFill(Graphics.getHSL(n,100,50,0.45));
        this.gr.drawCircle(0,0,47/2);


    }

    p.setData = function (data) {
        this.data=data;
        console.log("bulb setData should change view",data.attributes.setColor);




        this.data.bind('change', this.updateView, this);
        // on change should change kuzwa
        //this.data

    }


    p.updateView = function() {
        this.setColor(this.data.attributes.setColor);
        console.log("caught");
    }

    p.revert = function() {

        ////console.log("revert",this);
        this.justReverted=true;
        // this.setState(this.prevState);

    }

    p.onClick = function(e) {

        if(!this.justReverted) {
            this.reportInteraction(e);
            this.justReverted=false;

            console.log("important bulb clicked");
        }

    }


    p.onPress = function(e) {
        ////console.log("qqq");
        this.reportInteraction(e);
    }




    window.Bulb = Bulb;

}());
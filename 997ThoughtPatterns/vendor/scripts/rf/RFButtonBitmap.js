
(function(window) {

    function RFButtonBitmap() {
        this.initialize();
    }

    RFButtonBitmap.prototype = new Container();
    RFButtonBitmap.prototype.Container_initialize = RFButtonBitmap.prototype.initialize;	//unique to avoid overiding base class

    RFButtonBitmap.prototype.img1;
    RFButtonBitmap.prototype.img2;

    RFButtonBitmap.prototype.stateNo;

    RFButtonBitmap.prototype.toggleBtn=false;
    RFButtonBitmap.prototype.radioBtn=false;

    RFButtonBitmap.prototype.eventName;
    RFButtonBitmap.prototype.id;


    RFButtonBitmap.prototype.initialize = function() {
        this.Container_initialize();
    };

    RFButtonBitmap.prototype.init = function(img1,img2,toggleBtn) {


        if(toggleBtn) this.toggleBtn = toggleBtn;

        this.img1= new Bitmap(img1);
        this.img2= new Bitmap(img2);

        this.addChild(this.img1);
        this.addChild(this.img2);

        this.onClick = this.click;
        this.onPress = this.click;

        this.setState(1);

        this.click = _.bind( this.click, this );

    };

    RFButtonBitmap.prototype.click = function(e) {

        if(!this.toggleBtn && this.radioBtn!=true) {

            console.log("2");

            if(e.type=='onClick') {
                console.log("onclicking");
                this.setState(1);
               if(this.eventName) EventBus.dispatch(this.eventName,this);
            };

            if(e.type=='onPress') {
                console.log("onpressing");
                this.setState(2);
            };

        };

        if(this.toggleBtn && !this.radioBtn) {

            if(e.type=='onPress') {
                console.log("onclicking");
                if(this.stateNo==1) {this.setState(2)} else {this.setState(1)};
                if(this.eventName) EventBus.dispatch(this.eventName,this);
            };

        };

        if(this.radioBtn==true) {


            console.log("first here");
            if(e.type=='onPress') {

                if(this.stateNo==1) {
                    this.setState(2);
                    if(this.eventName) EventBus.dispatch(this.eventName,this);
                }



            };



        }



    }

    RFButtonBitmap.prototype.setState = function(stateNo) {

        this.stateNo=stateNo;

        if(stateNo == 1) {
            this.img1.visible=true;
            this.img2.visible=false;
        }

        if(stateNo == 2) {
            this.img1.visible=false;
            this.img2.visible=true;
        }

    };

    window.RFButtonBitmap = RFButtonBitmap;

}(window));















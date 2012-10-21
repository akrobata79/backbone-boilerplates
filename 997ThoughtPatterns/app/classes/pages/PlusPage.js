

require('classes/SElementMainBtn');

(function(window) {

    function PlusPage() {
        this.initialize();
    }

    PlusPage.prototype = new Container();

    PlusPage.prototype.Container_initialize = PlusPage.prototype.initialize;

    PlusPage.prototype.popUp;

    PlusPage.prototype.switch;
    PlusPage.prototype.list;

    PlusPage.prototype.mainBulb;
    PlusPage.prototype.state = "STATE_DEFAULT"

    PlusPage.prototype.currentlyEdited;


    //DEFAULT_STATE

    PlusPage.prototype.initialize = function() {
        this.Container_initialize();
    };


    PlusPage.prototype.mezzData;
    PlusPage.prototype.init = function(dataSet,mezzData,popUp,mainBulb) {

        this.mezzData=mezzData;

        this.mainBulb=mainBulb

        this.list = new RFScrollableList();
        this.addChild(this.list);

        this.list.init("y",SElementMainBtn,{w:535,h:90},5,dataSet,20);

//        window.deb.add(this.list.rail,"y","rail.y");

        this.list.y=160;
        this.list.x=52;

        this.addToMezz = _.bind( this.addToMezz, this );

        var that=this;

        for ( var i = 0; i < this.list.theArr.length; i++) {

            var t = this.list.theArr[i];

            t.on("YOYO", function(e){

                if(e.type=="onClick") {

                    console.log("button in question");


                    if(that.state=="STATE_EDIT") {
                        that.popUp.show();
                        that.currentlyEdited=e.target.parent.data
                        console.log("currentlyEdited",that.currentlyEdited);

                        //that.currentlyEdited.set()

//                        this.list.visible=false;
                    }

                    if(that.state=="STATE_DEFAULT") {


                        that.addToMezz(e.target.parent.data);
                    }






                }

            })

        }

        var offset=130;
//        switch_default.png
//        switch_edit.png


        this.switch = new RFButtonBitmap2();
        this.switch.init("images/switch_default.png","images/switch_edit.png",true, "EVENT_SWITCH");
        this.addChild(this.switch);
        this.switch.y=664
        this.switch.x=220//+offset;

        var offsx = 50
        var offsy = 7

        var rec = new Bitmap("images/copy_record.png");
        this.addChild(rec)
        rec.y=662+offsy
        rec.x=40

        var edit = new Bitmap("images/copy_edit.png");
        this.addChild(edit)
        edit.y=662+offsy
        edit.x=465;


//    p.add = function(t, property, name) {


        this.switch.on("EVENT_SWITCH", function(msg) {

            if(msg.target.stateNo==2) {
                that.setState("STATE_EDIT");
            }
            if(msg.target.stateNo==1) {
                that.setState("STATE_DEFAULT");

            }


        });


        this.popUp=popUp;
        this.popUp.init(this);

        this.popUp.on("HIDE_POPUP", function() {

//            console.log("lokalizacja",that.popUp.popData,that.currentlyEdited);
//            console.log("that.currentlyEdited",that.currentlyEdited);

            that.currentlyEdited.set(that.popUp.popData)


            that.setState("STATE_DEFAULT");
//            that.popUp.hide();

            //tutaj wpisz resultat do currentlyEdited


        })



    }

    PlusPage.prototype.setState = function (state) {

        this.state=state;

        if(state=="STATE_DEFAULT") {
            this.switch.setState(1);

        }

        if(state=="STATE_EDIT") {
            this.switch.setState(2);

        }





    }



    PlusPage.prototype.addToMezz = function(data) {

        console.log("xx", data);

        var t = data.clone();

        this.mezzData.add(t);

        this.mainBulb.setColor(t.get("setColor"));

        ////console.log("666 ",this.mezzData.length, t);


    }





    window.PlusPage = PlusPage;

}(window));


//        var m = new DonutModel();
//        m.set({setLabel:i+"!!!!"})
//        donuts.add(m);
















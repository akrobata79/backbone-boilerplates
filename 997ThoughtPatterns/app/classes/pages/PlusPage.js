

require('classes/SElementMainBtn');

(function(window) {

    function PlusPage() {
        this.initialize();
    }

    PlusPage.prototype = new Container();

    PlusPage.prototype.Container_initialize = PlusPage.prototype.initialize;

    PlusPage.prototype.popUp;

    PlusPage.prototype.addBtn;
    PlusPage.prototype.list;

    PlusPage.prototype.initialize = function() {
        this.Container_initialize();
    };

    PlusPage.prototype.mezzData;
    PlusPage.prototype.init = function(dataSet,mezzData,popUp) {

        this.mezzData=mezzData;

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

                    that.addToMezz(e.target.parent.data);
                }

            })

        }

        var offset=130;

        var deleteBtn = new RFButtonBitmap2();
        deleteBtn.init("images/deleteBtnDef.png","images/deleteBtnDown.png",true);
        this.addChild(deleteBtn)
        deleteBtn.y=674
        deleteBtn.x=0+offset;

        this.addBtn = new RFButtonBitmap2();
        this.addBtn.init("images/addBtnDef.png","images/addBtnDown.png",true, "ADDBTN");
        this.addChild(this.addBtn);
        this.addBtn.y=674
        this.addBtn.x=200+offset;



//    p.add = function(t, property, name) {


        this.addBtn.on("ADDBTN", function(msg) {
//            alert("Triggered " + msg);

            that.popUp.show();
        });





        this.popUp=popUp;



    }

    PlusPage.prototype.addToMezz = function(data) {

        ////console.log("xx", data);

        var t = data.clone()

        this.mezzData.add(t);

        ////console.log("666 ",this.mezzData.length, t);


    }





    window.PlusPage = PlusPage;

}(window));


//        var m = new DonutModel();
//        m.set({setLabel:i+"!!!!"})
//        donuts.add(m);
















/**
 * View Description
 *
 * @langversion JavaScript
 *
 * @author
 * @since
 *
 * http://krasimirtsonev.com/blog/article/javascript-managing-events-dispatch-listen
 * So, to pass params, all you need to do is save off the super initialize method, overwrite it, and then call it with the appropriate params. Similar to draw in all the DisplayObject subclasses. It's clearer in code:
 * https://groups.google.com/forum/#!topic/easeljs/qdK6VFSACQw
 * scrolling explained: http://stackoverflow.com/questions/2863547/javascript-scroll-event-for-iphone-ipad
 *
 * javascript frameworks http://www.remotesynthesis.com/post.cfm/50-javascript-html5-frameworks-and-related-tools
 *
 */

var View = require('./supers/View');
var template = require('./templates/HomeViewTemplate');

require('classes/additional/Curtain');
require('classes/nav/ScreenManager');

require('classes/pages/PlusPage');
require('classes/pages/InfoPage');
require('classes/pages/PatternPage');

//require('rf/RF');


//var MyClass = require('classes/MyClass');

//require

module.exports = View.extend({

    //--------------------------------------
    //+ PUBLIC PROPERTIES / CONSTANTS
    //--------------------------------------

    /*
     * @private
     */
    id: 'home-view',
    /*
     * @private
     */
    template: template,

    myC:null,
    stage:null,


    //--------------------------------------
    //+ INHERITED / OVERRIDES
    //--------------------------------------

    /*
     * @private
     */
    initialize: function() {

        this.render = _.bind( this.render, this );

        //   console.log(">>>", $(this.el), $("#home-view"),document.getElementById("home-view"));

    },

    /*
     * @private
     */
    render: function() {



//        this.stage.alpha=0.1;


        this.updateView();




//        this.updateView();
        return this;

    },

    yo:function (e) {
        console.log("asi",e);
    },

    updateView: function() {



        //  console.log(">>>", $(this.el), $("#home-view"),document.getElementById("home-view"));



        var canvas = document.createElement("canvas");
//        this.el=canvas;
        $(this.el).width(640);
        $(this.el).height(920);

//       $(this.el).append('<div>sdsdd</div>');



        console.log("dd");


//        $('#pageId').trigger('create');






//       $(this.el).append(' <a href="#popupPadded" data-rel="popup" data-role="button">Popup with padding</a>');



        $(this.el).append(canvas);

        $(this.el).append('<div id="dialogBox" class="tha">' +
            '</br>' +
            '<input type="text" name="user" id="un" value="" placeholder="write your " />' +
            '</div>');


//        console.log("t",t);
//        t.getElementById('dialogBox');




//console.log("t",t);


//        $(t).hide();
//        $("#home-view").hide();
//       $('dialogBox').append('');


        canvas.width=640;
        canvas.height=920;

        this.stage = new Stage(canvas);
        Touch.enable ( this.stage , true , false );
        RF.stage=this.stage;



        //Stage
        //BACKGROUND
        var bmp = new Bitmap("images/BACK.jpg");
        this.stage.addChild(bmp);

        //SCREENMANAGER


        var MainBtnModel = Backbone.Model.extend({
            defaults: {setLabel:"BEDZIE OK",setColor:111}
        });

        var MainBtnCollection = Backbone.Collection.extend({
            model : MainBtnModel
        });

        var mainBtnCollection = new MainBtnCollection();

        for ( var i = 0; i < 20; i++) {
            var m = new MainBtnModel();
            mainBtnCollection.add(m);
            m.set({setLabel:""+i, setColor:i*10})
        }

        var MezzData = Backbone.Collection.extend({
            model : MainBtnModel
        });
        var mezzData = new MezzData();

        var patternPage = new PatternPage();
        patternPage.init(mezzData);

        // passing 2 datasets
        var plusPage = new PlusPage();
        plusPage.init(mainBtnCollection,mezzData);


        var infoPage = new InfoPage();

        var screenManager = new ScreenManager();
        screenManager.init([plusPage,patternPage,infoPage]);
        this.stage.addChild(screenManager);

        //CURTAIN
        curtain = new Curtain();
        //        this.stage.addChild(curtain);

        //NAV
        var navBtn1 = new RFButtonBitmap();
        navBtn1.init("images/Navigation_def_01.png","images/Navigation_down_01.png");
        this.stage.addChild(navBtn1);
        navBtn1.y=691;

        var navBtn2 = new RFButtonBitmap();
        navBtn2.init("images/Navigation_def_02.png","images/Navigation_down_02.png");
        this.stage.addChild(navBtn2);
        navBtn2.x=216;
        navBtn2.y=691;

        var navBtn3 = new RFButtonBitmap();
        navBtn3.init("images/Navigation_def_04.png","images/Navigation_down_04.png");
        this.stage.addChild(navBtn3);
        navBtn3.x=216+205;
        navBtn3.y=691;

        var nav = require('classes/nav/RFNav');
        nav.setup([navBtn1,navBtn2,navBtn3],curtain);
        nav.setPageEvent("PAGE_CHANGE_EVENT")
        //SCREENMANAGER
        screenManager.setController(nav,"PAGE_CHANGE_EVENT");

        console.log("RF",RF,"<<<");

        //FOOTER
        var f = new Bitmap("images/footer.png");
        this.stage.addChild(f);
        f.y=833;

        //TOP
        var top = new Bitmap("images/top.png");
        this.stage.addChild(top);

        Ticker.addListener(this);
        Ticker.setFPS(40);

        setTimeout(this.getcarter,2500)

//        console.log("el",this.body,$('body'));



    },


    getcarter: function() {

        console.log("this.el",$(this.el));
//        $(".tha").hide()

//        $(".tha").append(' <a href="index.html" data-role="button">Link button</a>');
    },

    myFunction: function(e) {
        console.log("eee",e);
    },

    do:function() {

        curtain.do();

    },


    tick: function() {
        this.stage.update();
    },

    /*
     * @private
     */
    getRenderData: function() {
        return {
            content: "Application Contentoooooo"
        }
    }

    //--------------------------------------
    //+ PUBLIC METHODS / GETTERS / SETTERS
    //--------------------------------------

    //--------------------------------------
    //+ EVENT HANDLERS
    //--------------------------------------

    //--------------------------------------
    //+ PRIVATE AND PROTECTED METHODS
    //--------------------------------------

});

//example of how to override using super
//    p.sup_setSize = p.setSize;
//    p.setSize = function(w,h) {
//        this.sup_setSize(w,h);
//    };


// setInterval(this.donow,1000);
//
//donow:function () {
//
//    var smallSh = new Bitmap("images/btn1.png");
//    this.stage.addChild(smallSh);
//
//    TweenLite.to(smallSh, 1, {x:200,y:300});
//
//},

//        this.el.width=640;
//        this.el.height=920;

//        canvas = document.createElement("canvas");
//        canvas.width = "640";
//        canvas.height = "920"; // allow 40 pixels for status bar on iOS
//        canvas.style.width = "320px";
//        canvas.style.height = "460px";
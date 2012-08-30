
$(function() {

    var loadCanvas = function(src) {
        var canvas = document.createElement("canvas");
        var context = canvas.getContext("2d");
        var img = new Image();
        img.src = src;

        $(img).load(function(){
            canvas.width = img.width;
            canvas.height = img.height
            context.drawImage(this, 0, 0);
        });

        return $(canvas);
    };

    var target = $(loadCanvas("img/smallworld.png"));
    $(target).addClass('behind');

   $('#mainImage').append(target);


    //>>

    var DonutModel = Backbone.Model.extend({

        defaults: { x:50, y:50, width:150, height:150, color:'black' },
        setTopLeft: function(x,y) { this.set({ x:x, y:y }); },
        setDim: function(w,h) { this.set({ width:w, height:h }) },

        initialize: function() {

            $('#myModal').modal('toggle');
        }





    });

    var DonutsCollection = Backbone.Collection.extend({
        model : DonutModel
    });

    var DonutView = Backbone.View.extend({

        initialize: function() {


//original:
//            this.model.bind('change', this.updateView, this);
//            var t =  this.model.attributes.target;
//            $(t).append($('<div class="donut">sksksksksks</div>'));



            $('#mainImage').mousemove(this, this.mousemove).mouseup(this, this.mouseup);
            this.model.bind('change', this.updateView, this);

        },

        render: function() {
            $('#mainImage').append(this.el);
            $(this.el).html('<div class="shape"/>'
                + '<div class="control delete hide"/>'
                + '<div class="control change-color hide"/>'
                + '<div class="control resize hide"/>')
                .css({ position: 'absolute', padding: '10px' });

            this.updateView();
            return this;
        },

        updateView: function() {
            $(this.el).css({
                left:       this.model.get('x'),
                top:        this.model.get('y'),
                width:      this.model.get('width') - 10,
                height:     this.model.get('height') - 10 });
            this.$('.shape').css({ background: this.model.get('color') });
        },

        events: {
            'mouseenter .shape': 'hoveringStart',
            'mouseleave': 'hoveringEnd',
            'mousedown .shape': 'draggingStart',
            'mousedown .resize': 'resizingStart',
            'mousedown .change-color': 'changeColor',
            'mousedown .delete': 'deleting',
        },
        hoveringStart: function (e) {
            this.$('.control').removeClass('hide');
        },

        hoveringEnd: function (e) {
            this.$('.control').addClass('hide');
        },

        draggingStart: function (e) {
            this.dragging = true;
            this.initialX = e.pageX - this.model.get('x');
            this.initialY = e.pageY - this.model.get('y');
            return false; // prevents text selection
        },

        resizingStart: function(e) {
            this.resizing = true;
            return false;
        },
        changeColor: function(e) {
            this.model.set({ color: prompt('Enter color value', this.model.get('color')) });
        },
        deleting: function(e) {
            this.model.collection.remove(this.model);
        },
        mouseup: function (e) {
            if (!e || !e.data) return;
            var self = e.data;
            self.dragging = self.resizing = false;
        },
        mousemove: function(e) {
            if (!e || !e.data) return;
            var self = e.data;
            if (self.dragging) {
                self.model.setTopLeft(e.pageX - self.initialX, e.pageY - self.initialY);
            } else if (self.resizing) {
                self.model.setDim(e.pageX - self.model.get('x'), e.pageY - self.model.get('y'));
            }
        }


    });

    var TabModel = Backbone.Model.extend({
        initialize : function() {
            this.donuts = new DonutsCollection;
        }
    });

    var TabView = Backbone.View.extend({

        views: {},

        initialize: function() {

            this.model.bind('change', this.updateView, this);
            this.el={top:null,bottom:null};

            console.log(">>",this.model.donuts);

            this.model.donuts.bind('add', function(model) {
                console.log("succ>>",model);
                this.views[model.cid] = new DonutView({ model: model, id:'view_' + model.cid }).render();

            }, this);

        },

        render: function() {

            this.el.top = $('<li> <a href="#' + this.model.cid +
                '" data-toggle="tab" >Section 3</a> </li>');

            $('#tabs').append(this.el.top);

//            this.el.bottom = $('<div class="tab-pane" id="' + this.model.cid +
//                '"> ajajajajaj: ' + this.model.cid +
//                '</div>');

            this.el.bottom = $('<div class="tab-pane" id="' + this.model.cid + '"> </div>');


            $('#contentTabs').append(this.el.bottom);

            var that=this;

            this.el.bottom.click(function() {
                that.model.donuts.add(new DonutModel({target:that.el.bottom}))
            });

            $('#tabArea a:last').tab('show');

            this.updateView();
            return this;
        },

        updateView: function() {

        },

        deleting: function(e) {
            this.model.collection.remove(this.model);
        }

    });

    var TabCollection = Backbone.Collection.extend({ model: TabModel });

    var DocumentView =  Backbone.View.extend({

        id: 'page',
        views: {},

        initialize: function() {

            this.collection.bind('add', function(model) {

                this.views[model.cid] = new TabView({ model: model, id:'view_' + model.cid }).render();

            }, this);

            this.collection.bind('remove', function(model) {
                this.views[model.cid].remove();
                delete this.views[model.cid];
            }, this);

        },

        render: function() {
            return this;
        }
    });

    var documentCollection = new TabCollection();

    var documentView = new DocumentView({ collection: documentCollection });
    documentView.render();

    $('#new-rectangle').click(function() {
        documentCollection.add(new TabModel());
    });

    documentCollection.add(new TabModel());
    //$('#myModal').hide();
    $('#myModal').modal('toggle');
    $('#myModal').modal('toggle');


});

//original:

//var Shape = Backbone.Model.extend({
//    defaults: { x:50, y:50, width:150, height:150, color:'black' },
//    setTopLeft: function(x,y) {
//        this.set({ x:x, y:y });
//    },
//    setDim: function(w,h) {
//        this.set({ width:w, height:h });
//    },
//});
//
//var shape = new Shape();
//
//shape.bind('change', function() {
//    $('.shape').css({ left:       shape.get('x'),
//        top:        shape.get('y'),
//        width:      shape.get('width'),
//        height:     shape.get('height'),
//        background: shape.get('color') });
//});
//
//shape.set({ width: 170 });
//shape.setTopLeft(100, 300);
//shape.set({ color: 'red' });​




// We extend the Backbone.Model prototype to build our own
//    var Donut = Backbone.Model.extend({
//
//        // We can pass it default values.
//        defaults : {
//            name : null,
//            sparkles : false,
//            cream_filled : false
//        }
//
//    });
//
//
//
//    var Donuts = Backbone.Collection.extend({
//        model : Donut
//    });
//
//    var donuts = new Donuts;
//
//    var bostonCream = new Donut({ // attributes passed to the Donut constructor will override the defaults
//        name : "Bostan Cream",
//        cream_filled : true
//    });
//
//    console.log("donuts",donuts);
//
//    var DonutShop = Backbone.Model.extend({
//        defaults : {
//            name : "Untitled"
//        },
//
//        initialize : function() {
//            this.donuts = new Donuts;
//        }
//    });
//
//    var DonutShopView = Backbone.View.extend({
//
//        initialize: function() {
//
//            console.log("111");
//
//        },
//
//        render: function() {
//
//
//        }
//
//    });



//    donutShop.donuts.bind("add", function(donut) {
//        alert("added " + donut.get("name"));
//    });
//
//    console.log("donuts",donutShop);
//
//    var DonutShopCollection = Backbone.Collection.extend({
//        model : DonutShop
//    });
//
//    var donutShopCollection = new DonutShopCollection;

//    $('#new-rectangle').click(function() {
////        document.add(new Shape());
////    });
//
//    var donutShop = new DonutShop();
//    donutShopCollection.add(donutShop);
//
//
//    var donutShop2 = new DonutShop();
//    donutShopCollection.add(donutShop2);

//    console.log("DonutShopCollection",donutShopCollection);







// now adding a donut will trigger the alert
//    var lemonFilled = donutShop.donuts.add({ name : "Lemon Filled" });



//
//    var Song = Backbone.Model.extend({
//        defaults: {
//            name: "Not specified",
//            artist: "Not specified"
//        },
//        initialize: function(){
//            console.log("Music is the answer");
//        }
//    });
//
//    var Album = Backbone.Collection.extend({
//        model: Song
//    });
//
//    var song1 = new Song({ name: "How Bizarre", artist: "OMC" });
//    var song2 = new Song({ name: "Sexual Healing", artist: "Marvin Gaye" });
//    var song3 = new Song({ name: "Talk It Over In Bed", artist: "OMC" });
//
//    var myAlbum = new Album([ song1, song2, song3]);
//    console.log( myAlbum.models );
//
//




// $('<li> <a href="#1" data-toggle="tab" >Section 3</a> </li>').appendTo('#yo');
// $('<li> <a href="#1" data-toggle="tab" >Section 3</a> </li>').appendTo('#yo');



//    $("<div/>", {
//        "class": "test",
//        text: "Click me!",
//        click: function(){
//            $(this).toggleClass("test");
//        }
//    }).appendTo("body");

//    console.log("M");


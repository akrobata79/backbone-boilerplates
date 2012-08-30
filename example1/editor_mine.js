/**
 * Created with JetBrains WebStorm.
 * User: Robert
 * Date: 7/20/12
 * Time: 1:42 PM
 * To change this template use File | Settings | File Templates.
 */

$(function() {



    var MainItem = Backbone.Model.extend({

        defaults: {title:"wio!", content:"def content man"},

        setTitle: function (t) {
            this.set({title:t});
        },

        setContent: function (t) {
            this.set({content:t});
        }

    })

    var it1 = new MainItem();
    var it2 = new MainItem();

    var Library = Backbone.Collection.extend({
        model: MainItem
    });

    var l = new Library([it1,it2]);
    console.log("l",l);
    l.on("change", function() { console.log("dhdh") });

   // it1.setContent("i");

    var DocumentView =  Backbone.View.extend({
        id: 'page',
        views: {},
        initialize: function() {
            this.collection.bind('add', this.added, this);
            this.collection.bind('remove', this.removed, this);
        },
        render: function() {
            return this;
        },
        added: function(m) {
            this.views[m.cid] = new ShapeView({
                model: m,
                id:'view_' + m.cid
            }).render();
        },
        removed: function(m) {
            this.views[m.cid].remove();
            delete this.views[m.cid];
        }
    });









//    var template = _.template($('#item-template').html());
//    var todoHTML = template({done: true});
//
//    var element = $(todoHTML);
//    var element2 = $(todoHTML);
//
//    jQuery('<div/>', {
//        id: 'foo'
//    }).appendTo('body');
//
//    var templateYo = _.template($('#some-text').html());
//    var theH = $(templateYo());
//    $("#foo").append(theH);


//    $("#foo").append(element);
//    $("#foo").append(element2);



//    var it = new MainItem();
//    it.bind('change', function() { console.log("dhdh") });
//    it.setContent("ioio");

//
//    var object = {};
//
//    _.extend(object, Backbone.Events);
//
//    object.on("alert", function(msg) {
//        console.log("Triggered " + msg);
//    });
////
//    object.trigger("alert", "an event");



});











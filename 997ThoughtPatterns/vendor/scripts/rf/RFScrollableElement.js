(function() {

    var RFScrollableElement = function() {
        this.initialize();
        _.extend(this, Backbone.Events);
    }
    RFScrollableElement.prototype = p = new createjs.Container();
   // p.Container_initialize = p.initialize;

    p.width;
    p.height;
    p.data;

//
//    p.initialize = function() {
////        this.Container_initialize();
//        _.extend(this, Backbone.Events);
//
//    }

    p.setSetters = function(props) {


//        console.log("props",props);

        _.each(
            props,
            function(val, key){
                this[key](val);
            },this);
    }

    p.setSize = function(w,h) {
        this.width=w;
        this.height=h
    }

    p.setData = function(data) {

        console.log("data",data);
        this.data=data;
    }

    p.enable = function(t) {

        console.log("ttttt",t);

    }

    p.passInteraction = function(e) {

        console.log("passInteraction >> ",e);
        this.trigger("YOYO",e)

    }


    window.RFScrollableElement = RFScrollableElement;
}());
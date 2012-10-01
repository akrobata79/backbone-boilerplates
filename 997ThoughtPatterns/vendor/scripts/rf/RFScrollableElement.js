(function() {

    var RFScrollableElement = function() {this.initialize();}
    var p = RFScrollableElement.prototype = new createjs.Container();

    p.width;
    p.height;
    p.data;

    p.Container_initialize = p.initialize;
    p.initialize = function() {
        this.Container_initialize();
    }

    p.setSetters = function(props) {
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
        this.data=data;
    }


    window.RFScrollableElement = RFScrollableElement;
}());
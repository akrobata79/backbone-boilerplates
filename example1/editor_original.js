
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


$(function() {

    var Shape = Backbone.Model.extend({
        defaults: { x:50, y:50, width:150, height:150, color:'black' },
        setTopLeft: function(x,y) { this.set({ x:x, y:y }); },
        setDim: function(w,h) { this.set({ width:w, height:h }); },
        isCircle: function() { return !!this.get('circle'); }
    });

    var Document = Backbone.Collection.extend({ model: Shape });

    var DocumentView =  Backbone.View.extend({
        id: 'page',
        views: {},
        initialize: function() {
            this.collection.bind('add', function(model) {
                this.views[model.cid] = new ShapeView({ model: model, id:'view_' + model.cid }).render();
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

    var ShapeView = Backbone.View.extend({

        //special:
        initialize: function() {

            $('#page').mousemove(this, this.mousemove).mouseup(this, this.mouseup);

            this.model.bind('change', this.updateView, this);

        },

        //special:
        render: function() {
            $('#page').append(this.el);
            $(this.el).html('<div class="shape"/>'
                + '<div class="control delete hide"/>'
                + '<div class="control change-color hide"/>'
                + '<div class="control resize hide"/>')
                .css({ position: 'absolute', padding: '10px' });
            if (this.model.isCircle()) {
                this.$('.shape').addClass('circle');
            }
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

    var document = new Document();
    var documentView = new DocumentView({ collection: document });

    documentView.render();

    $('#new-rectangle').click(function() {
        document.add(new Shape());
    });

    $('#new-circle').click(function() {
        document.add(new Shape({ circle: true }));
    });
});


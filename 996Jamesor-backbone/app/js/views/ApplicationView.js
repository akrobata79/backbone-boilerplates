

backboneDemo.Views.ApplicationView = Backbone.View.extend({

    views: {},

    initialize: function () {

        this.collection = new backboneDemo.Collections.PointCollection();
        this.createViews();
    },

    createViews: function () {

        var V = backboneDemo.Views
            , opts = {collection: this.collection};

        this.views.mapView = (new V.MapView(opts)).render();
        this.views.streetView = (new V.StreetView(opts)).render();


        this.render();
    },

    render: function () {
            this.$el.fadeIn('slow');
        return this;
    }

});

window.backboneDemo = {

    app: _.extend({}, Backbone.Events),

    Models: {},
    Collections: {},
    Views: {},
    Routers: {},

    init: function() {
        new backboneDemo.Views.ApplicationView({el: '#main'});
    },

    blocS: {
        'border-width': '2px',
        'padding': '0px 0px 10px 0px',
        'border-style': 'solid',
        'border-color': '#2d9bb3',
        'margin': '1px'
    },

    blocTopS: {
        'height': '40px',
        'width': 'auto',
        'background-color': '#2d9bb3',
        'cursor':'move'
    },

    blocContainerS: {
        margin: '2px'
    }





};

$(document).ready(function(){
    backboneDemo.init();
});

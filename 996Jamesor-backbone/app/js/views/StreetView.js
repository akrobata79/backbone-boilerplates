backboneDemo.Views.StreetView = Backbone.View.extend({

//    el: '#streetView',
    actualStreetMap:null,
    panorama:null,
    mapa:null,
//    newPath:new Array(),

    initialize: function () {

        var that = this;

        var fenway = new google.maps.LatLng(42.345573,-71.098326);

        var panoramaOptions = {
            //position: fenway,
            pov: {
                heading: 34,
                pitch: 10,
                zoom: 1
            }
        };


        var data = {blocId:"streetView", blocContentId:"streetViewContent"}
        var templ = Handlebars.compile($('#templateBloc').html());
        this.mapa = templ(data);

        $('#main').append(this.mapa);

        $('#streetView')
            .css(window.backboneDemo.blocS)
            .css('width','300px')
            .addClass('ui-widget-content')
            .draggable({ handle: ".blocTop" })
            .find('.blocTop')
            .css(window.backboneDemo.blocTopS);

        $('#streetViewContent')
            .css(window.backboneDemo.blocContainerS)
            .css('height','300px');

        var panorama = new  google.maps.StreetViewPanorama(document.getElementById("streetViewContent"), panoramaOptions);
//        panorama.setPosition(fenway)

        this.collection.on("collectionfull", function() {

            setInterval(loop,1000);
            var i=0
            function loop() {
//                console.log("loop",fenway,that.collection.at(i).langitude);
                i++;
//                console.log("panorama",panorama);
                var t = that.collection.at(i).langitude
                
                panorama.setPosition(new google.maps.LatLng(t.ab, t.$a))



//                panorama.setPosition(fenway)

            }


        });

//        panorama.setPosition(new google.maps.LatLng(newPath[i].Za,newPath[i].$a))

//        this.directionsDisplay.setMap(that.actualStreetMap);

    },

    render: function () {
//        this.$el.html(this.actualMap);
        return this;
    }

});


//google.maps.event.addListener(map, "click", function(event) {
//
////                placeMarker(event.latLng);
//
//
//    if(!start && !end) {
//
//        var marker = new google.maps.Marker({
//            position: location,
//            map: map
//        });
//
//
//    }

backboneDemo.Views.MapView = Backbone.View.extend({

    actualMap:null,
    startPoint:null,
    endPoint:null,

    directionsDisplay:null,
    directionsService:null,

    path:null,
    mapa:null,

    initialize: function () {

        var that = this;

        var data = {blocId:"mapa", blocContentId:"mapContent"}
        var templ = Handlebars.compile($('#templateBloc').html());
        this.mapa = templ(data);

        $('#main').append(this.mapa);

        $('#mapa')
            .css(window.backboneDemo.blocS)
            .css('width','300px')
            .addClass('ui-widget-content')
            .draggable({ handle: ".blocTop" })
            .find('.blocTop')
            .css(window.backboneDemo.blocTopS);

        $('#mapContent')
            .css(window.backboneDemo.blocContainerS)
            .css('height','300px');

        this.actualMap = new google.maps.Map(document.getElementById("mapContent"),
            {mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: new google.maps.LatLng(41.850033, -87.6500523),
                zoom:14
            })

        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay.setMap(that.actualMap);

        google.maps.event.addListener(this.actualMap, "click", function(event) {

            if(that.startPoint && that.endPoint) {
                that.startPoint=null;
                that.endPoint=null;
            }

            if(!that.startPoint && !that.endPoint) {
                that.startPoint=event.latLng;
                console.log("1",1);
                return;
            }

            if(that.startPoint && !that.endPoint) {
                that.endPoint=event.latLng;

                var request = {
                    origin:that.startPoint,
                    destination:that.endPoint,
                    travelMode: google.maps.TravelMode.DRIVING
                };

                that.directionsService.route(request, function(result, status) {

                    if (status == google.maps.DirectionsStatus.OK) {
                        that.path = result.routes[0].overview_path;
                        that.directionsDisplay.setDirections(result);

                        that.collectAllPoints();

                    }
                });

                return;
            }
        });

        console.log("34",34);
    },

    collectAllPoints: function() {

        for (var j = 0; j < this.path.length; j++) {

            var t = this.path[j];

            if(this.path[j+1]) {

                var pointA=this.path[j]
                var pointB=this.path[j+1]

                var distAB = this.distanceTwoPoints(pointA,pointB)
                var setDist = 0.0001;

                var howManyInbetweeners = distAB/setDist;

                for (var i = 0; i < (howManyInbetweeners).toFixed(); i++) {

                    var yu = i*setDist;

                    var res1=pointB.ab-pointA.ab;
                    var res2=pointB.$a-pointA.$a;
                    var me = 1/(distAB/(setDist*i))
                    var finres = new google.maps.LatLng(pointA.ab+(res1*me),pointA.$a+(res2*me))

                    var t = new backboneDemo.Models.PointModel()
                    t.langitude=finres

                    this.collection.add(t);

//                    if(this.newPath.length<1000) {
//
//
////                        this.newPath.push()
//
//                    } else {
//                        break;
//                    }
                }
            }
        }


//        console.log("this.collection",this.collection);

//        for (var i = 0; i < this.collection.length; i++) {
//            var t = this.collection.at(i).langitude
//
//            var leg = new google.maps.Marker({icon: 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld='+i+'|FF0000|000000'});
//            leg.setMap(this.actualMap);
//            leg.setPosition(t);
//
//        };

        this.collection.trigger("collectionfull");
//        console.log("222",222);


    },

    distanceTwoPoints: function (pA, pB) {
        var x1=pA.ab
        var y1=pA.$a
        var x2=pB.ab
        var y2=pB.$a
        var dx = x1-x2;
        var dy= y1-y2;
//        console.log("dx",dx, dy);
        return Math.sqrt(dx * dx + dy * dy);
    },

    render: function () {
//        this.$el.html(this.mapa);
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
//
//});
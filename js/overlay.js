      // var map;
      // var src = 'https://firms.modaps.eosdis.nasa.gov/data/active_fire/viirs/kml/VNP14IMGTDL_NRT_USA_contiguous_and_Hawaii_24h.kml';

      // function initMap() {
      //   map = new google.maps.Map(document.getElementById('map'), {
      //     center: new google.maps.LatLng(30.391830, -92.329102),
      //     zoom: 1,
      //     mapTypeId: 'terrain'
      //   });

      //   var kmlLayer = new google.maps.KmlLayer(src, {
      //     suppressInfoWindows: true,
      //     preserveViewport: false,
      //     map: map
      //   });

      //   kmlLayer.addListener('click', function(event) {
      //     var content = event.featureData.infoWindowHtml;
      //     var testimonial = document.getElementById('capture');
      //     testimonial.innerHTML = content;
      //   });
      // }
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 11,
          center: {lat: 41.876, lng: -87.624}
        });

        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        // var beachMarker = new google.maps.Marker({
        // position: {lat: -33.890, lng: 151.274},
        // map: map,
        // icon: image
        // });

        var ctaLayer = new google.maps.KmlLayer({
          url: 'http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml',
          map: map
          // ,
          // icon: image
        });
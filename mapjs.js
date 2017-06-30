var map;
var club = '<strong>Baia Le Grotte ' +
                'Night Club that is on the beach</strong>';
var pizza = '<strong>Ristorante La Montagnola ' +
            'come try out the towns best pizza!</strong>'
var mondellobeach = '<strong>Mondello Beach is a beautiful ' 
                    + 'location not to far from Palermo city.</strong>'
var sanvito = '<strong>San Vito Lo Capo is known as '
              + 'one of the beautifuliest beaches in the world.</strong>'
var scopello = '<strong>Cala Mazzo di Sciacca just ' 
                + 'another famous beach of Sicily</strong>'
        
        function initMap() {
        // Create a map object and specify the DOM element for display.
        var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 38.044942, lng: 13.141980},
        scrollwheel: true,
        zoom: 10
        });

         var montagnolaMarker = new google.maps.Marker ({
            position: {lat: 38.042069, lng: 13.146400},
            map: map,
            title: 'Ristorante La Montagnola',
            icon : 'images-for-project/pizza.png',
            animation: google.maps.Animation.DROP,


        });

         var montagnola = new google.maps.InfoWindow({
          content: pizza
          });

          montagnolaMarker.addListener('click', function() {
          montagnola.open(map, montagnolaMarker);
          
          setTimeout(function () { montagnola.close(); }, 10000);
          });



         var mondello = new google.maps.Marker ({
            position: {lat: 38.200241, lng: 13.328579},
            map: map,
            title: 'Mondello Palace',
            icon : 'images-for-project/beach.png',
            animation: google.maps.Animation.DROP,
            
        });

         var mondelloMarker = new google.maps.InfoWindow({
          content: mondellobeach
          });

          mondello.addListener('click', function() {
          mondelloMarker.open(map, mondello);

          setTimeout(function () { mondelloMarker.close(); }, 10000);
          });



          var sanvitobeach = new google.maps.Marker ({
            position: {lat: 38.176601, lng: 12.738661},
            map: map,
            title: 'San Vito Lo Capo',
            icon : 'images-for-project/beach.png',
            animation: google.maps.Animation.DROP,
        });

          var sanvitoMarker = new google.maps.InfoWindow({
          content: sanvito
          });

          sanvitobeach.addListener('click', function() {
          sanvitoMarker.open(map, sanvitobeach);

          setTimeout(function () { sanvitoMarker.close(); }, 10000);
          });

          var scopellobeach = new google.maps.Marker ({
            position: {lat: 38.079734, lng: 12.811925},
            map: map,
            title: 'Cala Mazzo di Sciacca',
            icon : 'images-for-project/beach.png',
            animation: google.maps.Animation.DROP,
            
        });

           var scopelloMarker = new google.maps.InfoWindow({
          content: scopello
          });

          scopellobeach.addListener('click', function() {
          scopelloMarker.open(map, scopellobeach);

          setTimeout(function () { scopelloMarker.close(); }, 10000);
          });


          var marker = new google.maps.Marker ({
            position: {lat: 38.048775, lng: 12.999010},
            map: map,
            title: 'Baia Le Grotte',
            icon : 'images-for-project/party.png',
            animation: google.maps.Animation.BOUNCE,

            
        });

          var infowindow = new google.maps.InfoWindow({
          content: club
          });

          marker.addListener('click', function() {
          infowindow.open(map, marker);

          setTimeout(function () { infowindow.close(); }, 10000);
          });

          google.maps.event.addDomListener(window, 'load', init);


        }
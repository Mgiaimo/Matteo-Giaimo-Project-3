var map;
var club = '<h1>Baia Le Grotte</h1> <p>Le Grotte night club that is on the beach, you can get your drink on here or just enjoy some music.</p>';
var pizza = '<h1>Ristorante La Montagnola</h1> <p>come try out the towns best pizza! They also have a variety of different types of food</p>.'
var mondellobeach = '<h1>Mondello Beach</h1> <p>is a beautiful beach but also is a great location, its not to far from Palermo city.</p>'
var sanvito = '<h1>San Vito Lo Capo</h1> <p>is known as one of the beautifuliest beaches in the world. One must come here to witness how clear the water is at this beach.</p>'
var scopello = '<h1>Cala Mazzo di Sciacca</h1> <p>just another famous beach of Sicily. The beach is not that big but looking out towards the ocean you can see beautiful rock formations in the water.</p>'
        
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
          
          setTimeout(function () { montagnola.close(); }, 8000);
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

          setTimeout(function () { mondelloMarker.close(); }, 8000);
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

          setTimeout(function () { sanvitoMarker.close(); }, 8000);
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

          setTimeout(function () { scopelloMarker.close(); }, 8000);
          });


          var lacrotteMarker = new google.maps.Marker ({
            position: {lat: 38.048775, lng: 12.999010},
            map: map,
            title: 'Baia Le Grotte',
            icon : 'images-for-project/party.png',
            animation: google.maps.Animation.BOUNCE,

            
        });

          var lacrotte = new google.maps.InfoWindow({
          content: club
          });

          lacrotteMarker.addListener('click', function() {
          lacrotte.open(map, lacrotteMarker);

          setTimeout(function () { lacrotte.close(); }, 8000);
          });

          google.maps.event.addDomListener(window, 'load', init);


        }
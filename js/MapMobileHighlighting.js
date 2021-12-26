// Access Popup Window Here
var _dblClickTimer = null
function isMobile () {
   // credit to Timothy Huang for this regex test:
   // https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
   console.log(navigator.userAgent)
   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
       
       return true
   }
   else {
       return false
   };
};

let Position = L.Control.extend(
{
  _container: null,
  options:
  {
    position: 'bottomleft'
  },
  onAdd: function (map)
  {
    var latlng = L.DomUtil.create('div', 'mouseposition');
    this._latlng = latlng;
    return latlng;
  },

  updateHTML: function (lat, lng)
  {
    var latlng = lat + " " + lng;
    this._latlng.innerHTML = "LatLng: " + latlng;
  }
});

this.position = new Position();
this.map.addControl(this.position);

if (!isMobile()) {

this.map.addEventListener('mousemove', (event) =>
{

  var lat = Math.round(event.latlng.lat * 100000) / 100000;
  var lng = Math.round(event.latlng.lng * 100000) / 100000;


  interSectingPlaces = []

  for (var i = 0; i < polyList.length; i++)
  {
    poly = polyList[i];
    interSecting = poly.contains(
    {
      "lat": lat,
      "lng": lng
    });
    interSectingPlaces.push(
    {
      "id": poly._leaflet_id,
      "intersecting": interSecting
    })
  }


  selectedLocation = []

  for (var x = 0; x < interSectingPlaces.length; x++)
  {


    place = interSectingPlaces[x];
    var PopUpLayer = map._layers[place['id']];
    cityName = ""


    // If the second intersection occurs
    // Update the city Name to the latest Intersection of the list


    if (place['intersecting'] == true)
    {
      cityName = PopUpLayer._popup._content


      PopUpLayer.setStyle(
      {
        fillColor: PolygonStyles['selectedFillColor'],
        color: PolygonStyles['selectedStrokeColor']
      });


      modal.style.display = "block";
      selectedLocation.push(cityName)

    }

    else if (place['intersecting'] == false)
    {

      PopUpLayer.setStyle(
      {
        fillColor: PolygonStyles['unselectedFillColor'],
        color: PolygonStyles['unselectedStrokeColor']
      });
    }


  }
  if (selectedLocation.length > 0)
  {
    modal.style.display = "block";
    modalTitle.innerHTML = selectedLocation[selectedLocation.length - 1]

  }
  else
  {
    modal.style.display = "none";
  }
})

// TouchScreen / Mobile Mode Only

} else {

  modal.style.top = '12%'



var selectedPolygon = 0

  // Remove all click events from polygons in the list for Mobile Mode
  for (var i =0; i < polyList.length; i++) {
    polygon = polyList[i];
    var popupContent = polygon._popup._content
    popupContent = popupContent.replace('<br>', ' ')
    polygon._popup._content = popupContent
    // Save the link function from locations.js
    var linkFunction = polygon._events.click[1].fn
    // Turn off all click functions
    polygon.off('click')  
    polygon.on('contextmenu', linkFunction)
  }
 
var currentCity = ""

// SINGLE CLICK ON THE MAP
    map.on('click', function(e) { 

    if (_dblClickTimer !== null) {
      return;
    }
    _dblClickTimer = setTimeout(() => {

      // real 'click' event handler here

      _dblClickTimer = null;
    }, 200);





      var lat = e.latlng.lat
      var lng = e.latlng.lng
      interSectingPlaces = []
      interSectingPolygonId = 0
      
      for (var i = 0; i < polyList.length; i++)
      {
        poly = polyList[i];
        interSecting = poly.contains(
        {
          "lat": lat,
          "lng": lng
        });
          // DESELECT ALL POLYGONS
          PopUpLayer = map._layers[poly._leaflet_id]

          PopUpLayer.setStyle(
          {
            fillColor: PolygonStyles['unselectedFillColor'],
            color: PolygonStyles['unselectedStrokeColor']
          });
        if (interSecting == true) {
          interSectingPolygonId = poly._leaflet_id
        }
      }

      selectedLocation = []
        var PopUpLayer = map._layers[interSectingPolygonId];
        


        // If the city is the same and the modal is block mode (not none)
        // Then treat this click as a "double tap"

        if (interSectingPolygonId != 0)
        {


          

          cityName = PopUpLayer._popup._content

          // Used to detect the thing
          if (currentCity != cityName) {
          
          PopUpLayer.setStyle(
          {
            fillColor: PolygonStyles['selectedFillColor'],
            color: PolygonStyles['selectedStrokeColor']
          });

          modal.style.display = "block";
          selectedLocation.push(cityName)
          selectedPolygon = interSectingPolygonId
          currentCity = cityName;

        } else {
          var linkFunction = PopUpLayer._events['contextmenu'][0]['fn']

          PopUpLayer.setStyle(
          {
            fillColor: PolygonStyles['selectedFillColor'],
            color: PolygonStyles['selectedStrokeColor']
          });
          modal.style.display = "block";
          selectedLocation.push(cityName)
          selectedPolygon = interSectingPolygonId
          currentCity = cityName;
          
          linkFunction();
        }



    }



      if (selectedLocation.length > 0)
      {
        modal.style.display = "block";
        modal.style.width = "70%";
        modalTitle.innerHTML = selectedLocation[selectedLocation.length - 1]

      }
      else
      {
        modal.style.display = "none";
      }
  modalTitle.style.paddingLeft = "20px";
  modalTitle.style.paddingRight = "20px";

    })

  map.on("dblclick", function() {
    clearTimeout(_dblClickTimer);
    _dblClickTimer = null;

    // real 'dblclick' handler here (if any). Do not add anything to just have the default zoom behavior
  });

}

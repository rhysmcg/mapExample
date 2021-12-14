// Access Popup Window Here
var modal = document.getElementById("locationPopup");
var modalTitle = document.getElementById("locationTitle");

var map = L.map('map').setView(start_coordinates, start_zoomLevel);
map.options.minZoom = minZoom;

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

var dynamicPopup = L.popup()

var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
{
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1
}).addTo(map);



this.map.addEventListener('mousemove', (event) =>
{

  var lat = Math.round(event.latlng.lat * 100000) / 100000;
  var lng = Math.round(event.latlng.lng * 100000) / 100000;
  this.position.updateHTML(lat, lng);

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
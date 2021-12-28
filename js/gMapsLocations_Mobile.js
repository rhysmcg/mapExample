
let map;


function initMap() {


  var modal = document.getElementById("locationPopup");
  var modalTitle = document.getElementById("locationTitle");


  // ATTRIBUTION INFORMATION
  document.getElementById("attributionInfo").innerHTML = AttributionInfo;


function isMobile () {
   // credit to Timothy Huang for this regex test:
   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
       
       return true
   }
   else {
       return false
   };
};



if (isMobile) {
      map = new google.maps.Map(document.getElementById("map"), {
    center: start_coordinates,
    zoom: start_zoomLevel,
    minZoom: minZoom,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: true,
    disableDoubleClickZoom: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT,
    }
  });
  } else {
      map = new google.maps.Map(document.getElementById("map"), {
    center: mobile_start_coordinates,
    zoom: mobile_start_zoomLevel,
    minZoom: mobile_minZoom,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: true,
    disableDoubleClickZoom: true,
    zoomControlOptions: {
      position: google.maps.ControlPosition.TOP_RIGHT,
    }
  });
  }




//
//
// COPY AND PASTE HERE FROM THE LEAFLET CONVERSION SCRIPT
//
//



var PolyList = []

google.maps.event.addListener(map, 'click', function(event) {

// RESET ALL TO BLUE for every click
for (var y = 0; y < PolyList.length; y++) {

    PolyList[y].setOptions({
        fillColor: PolygonStyles["unselectedFillColor"],
        strokeColor: PolygonStyles["unselectedStrokeColor"]
    })

    modal.style.display = "none";
}

})

var currentCity = ""
var loc_0_coords = [{ lat: 32.1, lng: -96.4},{ lat: 31, lng: -96.4},{ lat: 31, lng: -97.85},{ lat: 32.1, lng: -97.85},];




const loc_0 = new google.maps.Polygon({
    paths: loc_0_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_0.setMap(map);
PolyList.push(loc_0)
const loc_0_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Waco, TX</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Waco area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_0,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_0_infowindow.content
}); 

google.maps.event.addListener(loc_0,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_0, 'click', function(event) {



    var loc_0_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-waco.html','_blank'); 
        
    }
    loc_0_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_0_selected = false;

google.maps.event.addListener(loc_0, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Waco, TX</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Waco area.</small></div>`


    var loc_0_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-waco.html','_blank'); 
        
    }

    if (loc_0_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_0_infowindow.content
    lastSelectedPlace = "loc_0"
    loc_0_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_0.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_0_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_0_infowindow.content
    lastSelectedPlace = "loc_0"
    loc_0_selected = true;



        } else {

          loc_0_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_0_selected = false
        }



    }
      
  })






}


var loc_1_coords = [{ lat: 44.1, lng: -76.05},{ lat: 44.1, lng: -75.64},{ lat: 43.93, lng: -75.64},{ lat: 43.93, lng: -76.05},];




const loc_1 = new google.maps.Polygon({
    paths: loc_1_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_1.setMap(map);
PolyList.push(loc_1)
const loc_1_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Watertown, NY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Watertown area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_1,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_1_infowindow.content
}); 

google.maps.event.addListener(loc_1,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_1, 'click', function(event) {



    var loc_1_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-watertown.html','_blank'); 
        
    }
    loc_1_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_1_selected = false;

google.maps.event.addListener(loc_1, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Watertown, NY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Watertown area.</small></div>`


    var loc_1_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-watertown.html','_blank'); 
        
    }

    if (loc_1_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_1_infowindow.content
    lastSelectedPlace = "loc_1"
    loc_1_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_1.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_1_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_1_infowindow.content
    lastSelectedPlace = "loc_1"
    loc_1_selected = true;



        } else {

          loc_1_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_1_selected = false
        }



    }
      
  })






}


var loc_2_coords = [{ lat: 47.5, lng: -57.3},{ lat: 47.5, lng: -59.6},{ lat: 48.9, lng: -59.6},{ lat: 48.9, lng: -57.3},];




const loc_2 = new google.maps.Polygon({
    paths: loc_2_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_2.setMap(map);
PolyList.push(loc_2)
const loc_2_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Western Newfoundland</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from Western Newfoundland.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_2,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_2_infowindow.content
}); 

google.maps.event.addListener(loc_2,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_2, 'click', function(event) {



    var loc_2_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-western-newfoundland.html','_blank'); 
        
    }
    loc_2_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_2_selected = false;

google.maps.event.addListener(loc_2, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Western Newfoundland</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from Western Newfoundland.</small></div>`


    var loc_2_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-western-newfoundland.html','_blank'); 
        
    }

    if (loc_2_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_2_infowindow.content
    lastSelectedPlace = "loc_2"
    loc_2_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_2.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_2_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_2_infowindow.content
    lastSelectedPlace = "loc_2"
    loc_2_selected = true;



        } else {

          loc_2_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_2_selected = false
        }



    }
      
  })






}


var loc_3_coords = [{ lat: 40.5, lng: -82},{ lat: 41.5, lng: -82},{ lat: 41.5, lng: -81},{ lat: 40.5, lng: -81},];




const loc_3 = new google.maps.Polygon({
    paths: loc_3_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_3.setMap(map);
PolyList.push(loc_3)
const loc_3_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Akron-Canton, OH</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Akron-Canton area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_3,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_3_infowindow.content
}); 

google.maps.event.addListener(loc_3,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_3, 'click', function(event) {



    var loc_3_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-akron-canton.html','_blank'); 
        
    }
    loc_3_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_3_selected = false;

google.maps.event.addListener(loc_3, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Akron-Canton, OH</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Akron-Canton area.</small></div>`


    var loc_3_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-akron-canton.html','_blank'); 
        
    }

    if (loc_3_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_3_infowindow.content
    lastSelectedPlace = "loc_3"
    loc_3_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_3.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_3_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_3_infowindow.content
    lastSelectedPlace = "loc_3"
    loc_3_selected = true;



        } else {

          loc_3_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_3_selected = false
        }



    }
      
  })






}


var loc_4_coords = [{ lat: 29.5, lng: -98.5},{ lat: 31, lng: -98.5},{ lat: 31, lng: -97},{ lat: 29.5, lng: -97},];




const loc_4 = new google.maps.Polygon({
    paths: loc_4_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_4.setMap(map);
PolyList.push(loc_4)
const loc_4_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Austin, TX</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Austin area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_4,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_4_infowindow.content
}); 

google.maps.event.addListener(loc_4,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_4, 'click', function(event) {



    var loc_4_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-austin.html','_blank'); 
        
    }
    loc_4_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_4_selected = false;

google.maps.event.addListener(loc_4, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Austin, TX</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Austin area.</small></div>`


    var loc_4_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-austin.html','_blank'); 
        
    }

    if (loc_4_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_4_infowindow.content
    lastSelectedPlace = "loc_4"
    loc_4_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_4.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_4_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_4_infowindow.content
    lastSelectedPlace = "loc_4"
    loc_4_selected = true;



        } else {

          loc_4_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_4_selected = false
        }



    }
      
  })






}


var loc_5_coords = [{ lat: 45.5, lng: -69.5},{ lat: 45.5, lng: -68},{ lat: 44.5, lng: -68},{ lat: 44.5, lng: -69.5},];




const loc_5 = new google.maps.Polygon({
    paths: loc_5_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_5.setMap(map);
PolyList.push(loc_5)
const loc_5_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Bangor, ME</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Bangor area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_5,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_5_infowindow.content
}); 

google.maps.event.addListener(loc_5,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_5, 'click', function(event) {



    var loc_5_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-bangor.html','_blank'); 
        
    }
    loc_5_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_5_selected = false;

google.maps.event.addListener(loc_5, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Bangor, ME</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Bangor area.</small></div>`


    var loc_5_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-bangor.html','_blank'); 
        
    }

    if (loc_5_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_5_infowindow.content
    lastSelectedPlace = "loc_5"
    loc_5_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_5.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_5_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_5_infowindow.content
    lastSelectedPlace = "loc_5"
    loc_5_selected = true;



        } else {

          loc_5_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_5_selected = false
        }



    }
      
  })






}


var loc_6_coords = [{ lat: 46.99, lng: -66},{ lat: 48, lng: -66},{ lat: 48, lng: -65},{ lat: 46.99, lng: -65},];




const loc_6 = new google.maps.Polygon({
    paths: loc_6_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_6.setMap(map);
PolyList.push(loc_6)
const loc_6_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Bathurst, NB</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Bathurst area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_6,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_6_infowindow.content
}); 

google.maps.event.addListener(loc_6,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_6, 'click', function(event) {



    var loc_6_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-bathurst.html','_blank'); 
        
    }
    loc_6_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_6_selected = false;

google.maps.event.addListener(loc_6, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Bathurst, NB</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Bathurst area.</small></div>`


    var loc_6_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-bathurst.html','_blank'); 
        
    }

    if (loc_6_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_6_infowindow.content
    lastSelectedPlace = "loc_6"
    loc_6_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_6.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_6_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_6_infowindow.content
    lastSelectedPlace = "loc_6"
    loc_6_selected = true;



        } else {

          loc_6_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_6_selected = false
        }



    }
      
  })






}


var loc_7_coords = [{ lat: 41.5, lng: -73.5},{ lat: 45, lng: -73.5},{ lat: 45, lng: -70},{ lat: 41.5, lng: -70},];




const loc_7 = new google.maps.Polygon({
    paths: loc_7_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_7.setMap(map);
PolyList.push(loc_7)
const loc_7_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Boston, MA</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Boston area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_7,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_7_infowindow.content
}); 

google.maps.event.addListener(loc_7,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_7, 'click', function(event) {



    var loc_7_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-boston.html','_blank'); 
        
    }
    loc_7_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_7_selected = false;

google.maps.event.addListener(loc_7, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Boston, MA</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Boston area.</small></div>`


    var loc_7_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-boston.html','_blank'); 
        
    }

    if (loc_7_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_7_infowindow.content
    lastSelectedPlace = "loc_7"
    loc_7_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_7.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_7_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_7_infowindow.content
    lastSelectedPlace = "loc_7"
    loc_7_selected = true;



        } else {

          loc_7_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_7_selected = false
        }



    }
      
  })






}


var loc_8_coords = [{ lat: 36.9, lng: -89},{ lat: 36.9, lng: -90.1},{ lat: 37.75, lng: -90.1},{ lat: 37.75, lng: -89},];




const loc_8 = new google.maps.Polygon({
    paths: loc_8_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_8.setMap(map);
PolyList.push(loc_8)
const loc_8_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Cape Girardeau, MO</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Cape Girardeau area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_8,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_8_infowindow.content
}); 

google.maps.event.addListener(loc_8,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_8, 'click', function(event) {



    var loc_8_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-cape.html','_blank'); 
        
    }
    loc_8_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_8_selected = false;

google.maps.event.addListener(loc_8, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Cape Girardeau, MO</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Cape Girardeau area.</small></div>`


    var loc_8_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-cape.html','_blank'); 
        
    }

    if (loc_8_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_8_infowindow.content
    lastSelectedPlace = "loc_8"
    loc_8_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_8.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_8_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_8_infowindow.content
    lastSelectedPlace = "loc_8"
    loc_8_selected = true;



        } else {

          loc_8_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_8_selected = false
        }



    }
      
  })






}


var loc_9_coords = [{ lat: 37.56, lng: -89.42},{ lat: 37.95, lng: -89.42},{ lat: 37.95, lng: -88.75},{ lat: 37.56, lng: -88.75},];




const loc_9 = new google.maps.Polygon({
    paths: loc_9_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_9.setMap(map);
PolyList.push(loc_9)
const loc_9_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Carbondale, IL</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Carbondale area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_9,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_9_infowindow.content
}); 

google.maps.event.addListener(loc_9,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_9, 'click', function(event) {



    var loc_9_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-carbondale.html','_blank'); 
        
    }
    loc_9_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_9_selected = false;

google.maps.event.addListener(loc_9, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Carbondale, IL</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Carbondale area.</small></div>`


    var loc_9_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-carbondale.html','_blank'); 
        
    }

    if (loc_9_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_9_infowindow.content
    lastSelectedPlace = "loc_9"
    loc_9_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_9.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_9_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_9_infowindow.content
    lastSelectedPlace = "loc_9"
    loc_9_selected = true;



        } else {

          loc_9_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_9_selected = false
        }



    }
      
  })






}


var loc_10_coords = [{ lat: 40, lng: -89},{ lat: 42.5, lng: -89},{ lat: 42.5, lng: -86.5},{ lat: 40, lng: -86.5},];




const loc_10 = new google.maps.Polygon({
    paths: loc_10_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_10.setMap(map);
PolyList.push(loc_10)
const loc_10_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Chicago, IL</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Chicago area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_10,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_10_infowindow.content
}); 

google.maps.event.addListener(loc_10,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_10, 'click', function(event) {



    var loc_10_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-chicago.html','_blank'); 
        
    }
    loc_10_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_10_selected = false;

google.maps.event.addListener(loc_10, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Chicago, IL</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Chicago area.</small></div>`


    var loc_10_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-chicago.html','_blank'); 
        
    }

    if (loc_10_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_10_infowindow.content
    lastSelectedPlace = "loc_10"
    loc_10_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_10.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_10_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_10_infowindow.content
    lastSelectedPlace = "loc_10"
    loc_10_selected = true;



        } else {

          loc_10_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_10_selected = false
        }



    }
      
  })






}


var loc_11_coords = [{ lat: 38.5, lng: -85.5},{ lat: 40, lng: -85.5},{ lat: 40, lng: -84},{ lat: 38.5, lng: -84},];




const loc_11 = new google.maps.Polygon({
    paths: loc_11_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_11.setMap(map);
PolyList.push(loc_11)
const loc_11_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Cincinnati, OH</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Cincinnati area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_11,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_11_infowindow.content
}); 

google.maps.event.addListener(loc_11,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_11, 'click', function(event) {



    var loc_11_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-cincinnati.html','_blank'); 
        
    }
    loc_11_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_11_selected = false;

google.maps.event.addListener(loc_11, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Cincinnati, OH</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Cincinnati area.</small></div>`


    var loc_11_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-cincinnati.html','_blank'); 
        
    }

    if (loc_11_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_11_infowindow.content
    lastSelectedPlace = "loc_11"
    loc_11_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_11.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_11_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_11_infowindow.content
    lastSelectedPlace = "loc_11"
    loc_11_selected = true;



        } else {

          loc_11_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_11_selected = false
        }



    }
      
  })






}


var loc_12_coords = [{ lat: 41.99, lng: -82.5},{ lat: 41.99, lng: -80.99},{ lat: 41, lng: -80.99},{ lat: 41, lng: -82.5},];




const loc_12 = new google.maps.Polygon({
    paths: loc_12_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_12.setMap(map);
PolyList.push(loc_12)
const loc_12_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Cleveland, OH</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Cleveland area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_12,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_12_infowindow.content
}); 

google.maps.event.addListener(loc_12,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_12, 'click', function(event) {



    var loc_12_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-cleveland.html','_blank'); 
        
    }
    loc_12_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_12_selected = false;

google.maps.event.addListener(loc_12, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Cleveland, OH</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Cleveland area.</small></div>`


    var loc_12_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-cleveland.html','_blank'); 
        
    }

    if (loc_12_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_12_infowindow.content
    lastSelectedPlace = "loc_12"
    loc_12_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_12.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_12_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_12_infowindow.content
    lastSelectedPlace = "loc_12"
    loc_12_selected = true;



        } else {

          loc_12_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_12_selected = false
        }



    }
      
  })






}


var loc_13_coords = [{ lat: 40.5, lng: -84},{ lat: 40.5, lng: -82.5},{ lat: 39.5, lng: -82.5},{ lat: 39.5, lng: -84},];




const loc_13 = new google.maps.Polygon({
    paths: loc_13_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_13.setMap(map);
PolyList.push(loc_13)
const loc_13_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Columbus, OH</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Columbus area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_13,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_13_infowindow.content
}); 

google.maps.event.addListener(loc_13,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_13, 'click', function(event) {



    var loc_13_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-columbus.html','_blank'); 
        
    }
    loc_13_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_13_selected = false;

google.maps.event.addListener(loc_13, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Columbus, OH</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Columbus area.</small></div>`


    var loc_13_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-columbus.html','_blank'); 
        
    }

    if (loc_13_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_13_infowindow.content
    lastSelectedPlace = "loc_13"
    loc_13_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_13.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_13_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_13_infowindow.content
    lastSelectedPlace = "loc_13"
    loc_13_selected = true;



        } else {

          loc_13_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_13_selected = false
        }



    }
      
  })






}


var loc_14_coords = [{ lat: 33.99, lng: -97},{ lat: 33.99, lng: -95.5},{ lat: 32, lng: -95.5},{ lat: 32, lng: -97},];




const loc_14 = new google.maps.Polygon({
    paths: loc_14_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_14.setMap(map);
PolyList.push(loc_14)
const loc_14_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Dallas, TX</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Dallas area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_14,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_14_infowindow.content
}); 

google.maps.event.addListener(loc_14,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_14, 'click', function(event) {



    var loc_14_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-dallas.html','_blank'); 
        
    }
    loc_14_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_14_selected = false;

google.maps.event.addListener(loc_14, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Dallas, TX</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Dallas area.</small></div>`


    var loc_14_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-dallas.html','_blank'); 
        
    }

    if (loc_14_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_14_infowindow.content
    lastSelectedPlace = "loc_14"
    loc_14_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_14.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_14_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_14_infowindow.content
    lastSelectedPlace = "loc_14"
    loc_14_selected = true;



        } else {

          loc_14_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_14_selected = false
        }



    }
      
  })






}


var loc_15_coords = [{ lat: 39.3, lng: -83.5},{ lat: 39.3, lng: -84.99},{ lat: 39.5, lng: -84.99},{ lat: 40.5, lng: -84.99},{ lat: 40.5, lng: -83.5},{ lat: 39.5, lng: -83.5},];




const loc_15 = new google.maps.Polygon({
    paths: loc_15_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_15.setMap(map);
PolyList.push(loc_15)
const loc_15_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Dayton, OH</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Dayton area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_15,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_15_infowindow.content
}); 

google.maps.event.addListener(loc_15,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_15, 'click', function(event) {



    var loc_15_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-dayton.html','_blank');  
        
    }
    loc_15_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_15_selected = false;

google.maps.event.addListener(loc_15, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Dayton, OH</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Dayton area.</small></div>`


    var loc_15_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-dayton.html','_blank');  
        
    }

    if (loc_15_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_15_infowindow.content
    lastSelectedPlace = "loc_15"
    loc_15_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_15.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_15_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_15_infowindow.content
    lastSelectedPlace = "loc_15"
    loc_15_selected = true;



        } else {

          loc_15_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_15_selected = false
        }



    }
      
  })






}


var loc_16_coords = [{ lat: 42.99, lng: -84},{ lat: 42.99, lng: -81.99},{ lat: 41.5, lng: -81.99},{ lat: 41.5, lng: -84},];




const loc_16 = new google.maps.Polygon({
    paths: loc_16_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_16.setMap(map);
PolyList.push(loc_16)
const loc_16_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Detroit, MI</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Detroit area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_16,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_16_infowindow.content
}); 

google.maps.event.addListener(loc_16,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_16, 'click', function(event) {



    var loc_16_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-detroit.html','_blank'); 
        
    }
    loc_16_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_16_selected = false;

google.maps.event.addListener(loc_16, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Detroit, MI</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Detroit area.</small></div>`


    var loc_16_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-detroit.html','_blank'); 
        
    }

    if (loc_16_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_16_infowindow.content
    lastSelectedPlace = "loc_16"
    loc_16_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_16.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_16_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_16_infowindow.content
    lastSelectedPlace = "loc_16"
    loc_16_selected = true;



        } else {

          loc_16_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_16_selected = false
        }



    }
      
  })






}


var loc_17_coords = [{ lat: 23, lng: -106},{ lat: 24.99, lng: -106},{ lat: 24.99, lng: -103.99},{ lat: 23, lng: -103.99},];




const loc_17 = new google.maps.Polygon({
    paths: loc_17_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_17.setMap(map);
PolyList.push(loc_17)
const loc_17_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Durango, Mexico</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Durango area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_17,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_17_infowindow.content
}); 

google.maps.event.addListener(loc_17,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_17, 'click', function(event) {



    var loc_17_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-durango.html','_blank'); 
        
    }
    loc_17_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_17_selected = false;

google.maps.event.addListener(loc_17, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Durango, Mexico</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Durango area.</small></div>`


    var loc_17_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-durango.html','_blank'); 
        
    }

    if (loc_17_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_17_infowindow.content
    lastSelectedPlace = "loc_17"
    loc_17_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_17.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_17_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_17_infowindow.content
    lastSelectedPlace = "loc_17"
    loc_17_selected = true;



        } else {

          loc_17_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_17_selected = false
        }



    }
      
  })






}


var loc_18_coords = [{ lat: 45.3, lng: -59.3},{ lat: 45.3, lng: -62.4},{ lat: 47.85, lng: -62.4},{ lat: 47.85, lng: -59.3},];




const loc_18 = new google.maps.Polygon({
    paths: loc_18_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_18.setMap(map);
PolyList.push(loc_18)
const loc_18_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Eastern Nova Scotia</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from Eastern Nova Scotia.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_18,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_18_infowindow.content
}); 

google.maps.event.addListener(loc_18,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_18, 'click', function(event) {



    var loc_18_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-eastern-nova-scotia.html','_blank'); 
        
    }
    loc_18_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_18_selected = false;

google.maps.event.addListener(loc_18, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Eastern Nova Scotia</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from Eastern Nova Scotia.</small></div>`


    var loc_18_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-eastern-nova-scotia.html','_blank'); 
        
    }

    if (loc_18_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_18_infowindow.content
    lastSelectedPlace = "loc_18"
    loc_18_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_18.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_18_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_18_infowindow.content
    lastSelectedPlace = "loc_18"
    loc_18_selected = true;



        } else {

          loc_18_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_18_selected = false
        }



    }
      
  })






}


var loc_19_coords = [{ lat: 41.5, lng: -81.5},{ lat: 41.5, lng: -79.5},{ lat: 40, lng: -79.5},{ lat: 40, lng: -81.5},];




const loc_19 = new google.maps.Polygon({
    paths: loc_19_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_19.setMap(map);
PolyList.push(loc_19)
const loc_19_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Pittsburgh, PA</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Pittsburgh area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_19,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_19_infowindow.content
}); 

google.maps.event.addListener(loc_19,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_19, 'click', function(event) {



    var loc_19_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-pittsburgh.html','_blank'); 
        
    }
    loc_19_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_19_selected = false;

google.maps.event.addListener(loc_19, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Pittsburgh, PA</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Pittsburgh area.</small></div>`


    var loc_19_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-pittsburgh.html','_blank'); 
        
    }

    if (loc_19_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_19_infowindow.content
    lastSelectedPlace = "loc_19"
    loc_19_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_19.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_19_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_19_infowindow.content
    lastSelectedPlace = "loc_19"
    loc_19_selected = true;



        } else {

          loc_19_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_19_selected = false
        }



    }
      
  })






}


var loc_20_coords = [{ lat: 38.5, lng: -89},{ lat: 39.5, lng: -89},{ lat: 39.5, lng: -88},{ lat: 38.5, lng: -88},];




const loc_20 = new google.maps.Polygon({
    paths: loc_20_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_20.setMap(map);
PolyList.push(loc_20)
const loc_20_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Effingham, IL</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Effingham area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_20,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_20_infowindow.content
}); 

google.maps.event.addListener(loc_20,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_20, 'click', function(event) {



    var loc_20_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-effingham.html','_blank'); 
        
    }
    loc_20_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_20_selected = false;

google.maps.event.addListener(loc_20, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Effingham, IL</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Effingham area.</small></div>`


    var loc_20_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-effingham.html','_blank'); 
        
    }

    if (loc_20_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_20_infowindow.content
    lastSelectedPlace = "loc_20"
    loc_20_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_20.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_20_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_20_infowindow.content
    lastSelectedPlace = "loc_20"
    loc_20_selected = true;



        } else {

          loc_20_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_20_selected = false
        }



    }
      
  })






}


var loc_21_coords = [{ lat: 41.5, lng: -80.5},{ lat: 42.5, lng: -80.5},{ lat: 42.5, lng: -79.5},{ lat: 41.5, lng: -79.5},];




const loc_21 = new google.maps.Polygon({
    paths: loc_21_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_21.setMap(map);
PolyList.push(loc_21)
const loc_21_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Erie, PA</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Erie area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_21,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_21_infowindow.content
}); 

google.maps.event.addListener(loc_21,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_21, 'click', function(event) {



    var loc_21_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-erie.html','_blank'); 
        
    }
    loc_21_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_21_selected = false;

google.maps.event.addListener(loc_21, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Erie, PA</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Erie area.</small></div>`


    var loc_21_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-erie.html','_blank'); 
        
    }

    if (loc_21_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_21_infowindow.content
    lastSelectedPlace = "loc_21"
    loc_21_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_21.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_21_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_21_infowindow.content
    lastSelectedPlace = "loc_21"
    loc_21_selected = true;



        } else {

          loc_21_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_21_selected = false
        }



    }
      
  })






}


var loc_22_coords = [{ lat: 38.5, lng: -87.33},{ lat: 38.5, lng: -86.5},{ lat: 37.5, lng: -86.5},{ lat: 37.5, lng: -87.33},];




const loc_22 = new google.maps.Polygon({
    paths: loc_22_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_22.setMap(map);
PolyList.push(loc_22)
const loc_22_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Owensboro, KY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Owensboro area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_22,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_22_infowindow.content
}); 

google.maps.event.addListener(loc_22,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_22, 'click', function(event) {



    var loc_22_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-owensboro.html','_blank'); 
        
    }
    loc_22_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_22_selected = false;

google.maps.event.addListener(loc_22, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Owensboro, KY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Owensboro area.</small></div>`


    var loc_22_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-owensboro.html','_blank'); 
        
    }

    if (loc_22_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_22_infowindow.content
    lastSelectedPlace = "loc_22"
    loc_22_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_22.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_22_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_22_infowindow.content
    lastSelectedPlace = "loc_22"
    loc_22_selected = true;



        } else {

          loc_22_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_22_selected = false
        }



    }
      
  })






}


var loc_23_coords = [{ lat: 36, lng: -95.5},{ lat: 36, lng: -93.5},{ lat: 34.5, lng: -93.5},{ lat: 34.5, lng: -95.5},];




const loc_23 = new google.maps.Polygon({
    paths: loc_23_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_23.setMap(map);
PolyList.push(loc_23)
const loc_23_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Fort Smith, AR</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Fort Smith area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_23,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_23_infowindow.content
}); 

google.maps.event.addListener(loc_23,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_23, 'click', function(event) {



    var loc_23_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-fort-smith.html','_blank'); 
        
    }
    loc_23_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_23_selected = false;

google.maps.event.addListener(loc_23, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Fort Smith, AR</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Fort Smith area.</small></div>`


    var loc_23_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-fort-smith.html','_blank'); 
        
    }

    if (loc_23_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_23_infowindow.content
    lastSelectedPlace = "loc_23"
    loc_23_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_23.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_23_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_23_infowindow.content
    lastSelectedPlace = "loc_23"
    loc_23_selected = true;



        } else {

          loc_23_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_23_selected = false
        }



    }
      
  })






}


var loc_24_coords = [{ lat: 33.99, lng: -98.5},{ lat: 33.99, lng: -97},{ lat: 32, lng: -97},{ lat: 32, lng: -98.5},];




const loc_24 = new google.maps.Polygon({
    paths: loc_24_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_24.setMap(map);
PolyList.push(loc_24)
const loc_24_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Fort Worth, TX</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Fort Worth area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_24,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_24_infowindow.content
}); 

google.maps.event.addListener(loc_24,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_24, 'click', function(event) {



    var loc_24_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-fort-worth.html','_blank'); 
        
    }
    loc_24_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_24_selected = false;

google.maps.event.addListener(loc_24, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Fort Worth, TX</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Fort Worth area.</small></div>`


    var loc_24_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-fort-worth.html','_blank'); 
        
    }

    if (loc_24_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_24_infowindow.content
    lastSelectedPlace = "loc_24"
    loc_24_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_24.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_24_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_24_infowindow.content
    lastSelectedPlace = "loc_24"
    loc_24_selected = true;



        } else {

          loc_24_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_24_selected = false
        }



    }
      
  })






}


var loc_25_coords = [{ lat: 46.5, lng: -67.5},{ lat: 46.5, lng: -66},{ lat: 45.5, lng: -66},{ lat: 45.5, lng: -67.5},];




const loc_25 = new google.maps.Polygon({
    paths: loc_25_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_25.setMap(map);
PolyList.push(loc_25)
const loc_25_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Fredericton, NB</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Fredericton area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_25,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_25_infowindow.content
}); 

google.maps.event.addListener(loc_25,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_25, 'click', function(event) {



    var loc_25_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-fredericton.html','_blank'); 
        
    }
    loc_25_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_25_selected = false;

google.maps.event.addListener(loc_25, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Fredericton, NB</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Fredericton area.</small></div>`


    var loc_25_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-fredericton.html','_blank'); 
        
    }

    if (loc_25_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_25_infowindow.content
    lastSelectedPlace = "loc_25"
    loc_25_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_25.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_25_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_25_infowindow.content
    lastSelectedPlace = "loc_25"
    loc_25_selected = true;



        } else {

          loc_25_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_25_selected = false
        }



    }
      
  })






}


var loc_26_coords = [{ lat: 41.5, lng: -85.99},{ lat: 41.5, lng: -84.5},{ lat: 40.5, lng: -84.5},{ lat: 40.5, lng: -85.99},];




const loc_26 = new google.maps.Polygon({
    paths: loc_26_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_26.setMap(map);
PolyList.push(loc_26)
const loc_26_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Ft. Wayne, IN</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Ft. Wayne area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_26,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_26_infowindow.content
}); 

google.maps.event.addListener(loc_26,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_26, 'click', function(event) {



    var loc_26_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-ft-wayne.html','_blank'); 
        
    }
    loc_26_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_26_selected = false;

google.maps.event.addListener(loc_26, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Ft. Wayne, IN</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Ft. Wayne area.</small></div>`


    var loc_26_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-ft-wayne.html','_blank'); 
        
    }

    if (loc_26_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_26_infowindow.content
    lastSelectedPlace = "loc_26"
    loc_26_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_26.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_26_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_26_infowindow.content
    lastSelectedPlace = "loc_26"
    loc_26_selected = true;



        } else {

          loc_26_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_26_selected = false
        }



    }
      
  })






}


var loc_27_coords = [{ lat: 49.5, lng: -55.5},{ lat: 49.5, lng: -53.5},{ lat: 48.5, lng: -53.5},{ lat: 48.5, lng: -55.5},];




const loc_27 = new google.maps.Polygon({
    paths: loc_27_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_27.setMap(map);
PolyList.push(loc_27)
const loc_27_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Gander, NL</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Gander area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_27,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_27_infowindow.content
}); 

google.maps.event.addListener(loc_27,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_27, 'click', function(event) {



    var loc_27_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-gander.html','_blank'); 
        
    }
    loc_27_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_27_selected = false;

google.maps.event.addListener(loc_27, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Gander, NL</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Gander area.</small></div>`


    var loc_27_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-gander.html','_blank'); 
        
    }

    if (loc_27_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_27_infowindow.content
    lastSelectedPlace = "loc_27"
    loc_27_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_27.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_27_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_27_infowindow.content
    lastSelectedPlace = "loc_27"
    loc_27_selected = true;



        } else {

          loc_27_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_27_selected = false
        }



    }
      
  })






}


var loc_28_coords = [{ lat: 44, lng: -65.5},{ lat: 46.99, lng: -65.5},{ lat: 46.99, lng: -62.5},{ lat: 44, lng: -62.5},];




const loc_28 = new google.maps.Polygon({
    paths: loc_28_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_28.setMap(map);
PolyList.push(loc_28)
const loc_28_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Halifax, NS</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Halifax area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_28,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_28_infowindow.content
}); 

google.maps.event.addListener(loc_28,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_28, 'click', function(event) {



    var loc_28_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-halifax.html','_blank'); 
        
    }
    loc_28_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_28_selected = false;

google.maps.event.addListener(loc_28, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Halifax, NS</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Halifax area.</small></div>`


    var loc_28_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-halifax.html','_blank'); 
        
    }

    if (loc_28_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_28_infowindow.content
    lastSelectedPlace = "loc_28"
    loc_28_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_28.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_28_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_28_infowindow.content
    lastSelectedPlace = "loc_28"
    loc_28_selected = true;



        } else {

          loc_28_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_28_selected = false
        }



    }
      
  })






}


var loc_29_coords = [{ lat: 31, lng: -98},{ lat: 31, lng: -94},{ lat: 28.5, lng: -94},{ lat: 28.5, lng: -98},];




const loc_29 = new google.maps.Polygon({
    paths: loc_29_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_29.setMap(map);
PolyList.push(loc_29)
const loc_29_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Houston, TX</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Houston area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_29,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_29_infowindow.content
}); 

google.maps.event.addListener(loc_29,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_29, 'click', function(event) {



    var loc_29_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-houston.html','_blank'); 
        
    }
    loc_29_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_29_selected = false;

google.maps.event.addListener(loc_29, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Houston, TX</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Houston area.</small></div>`


    var loc_29_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-houston.html','_blank'); 
        
    }

    if (loc_29_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_29_infowindow.content
    lastSelectedPlace = "loc_29"
    loc_29_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_29.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_29_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_29_infowindow.content
    lastSelectedPlace = "loc_29"
    loc_29_selected = true;



        } else {

          loc_29_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_29_selected = false
        }



    }
      
  })






}


var loc_30_coords = [{ lat: 40.5, lng: -87.5},{ lat: 40.5, lng: -85},{ lat: 38.5, lng: -85},{ lat: 38.5, lng: -87.5},];




const loc_30 = new google.maps.Polygon({
    paths: loc_30_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_30.setMap(map);
PolyList.push(loc_30)
const loc_30_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Indianapolis, IN</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Indianapolis area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_30,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_30_infowindow.content
}); 

google.maps.event.addListener(loc_30,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_30, 'click', function(event) {



    var loc_30_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-indianapolis.html','_blank'); 
        
    }
    loc_30_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_30_selected = false;

google.maps.event.addListener(loc_30, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Indianapolis, IN</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Indianapolis area.</small></div>`


    var loc_30_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-indianapolis.html','_blank'); 
        
    }

    if (loc_30_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_30_infowindow.content
    lastSelectedPlace = "loc_30"
    loc_30_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_30.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_30_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_30_infowindow.content
    lastSelectedPlace = "loc_30"
    loc_30_selected = true;



        } else {

          loc_30_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_30_selected = false
        }



    }
      
  })






}


var loc_31_coords = [{ lat: 36.5, lng: -92},{ lat: 36.5, lng: -89.5},{ lat: 35, lng: -89.5},{ lat: 35, lng: -92},];




const loc_31 = new google.maps.Polygon({
    paths: loc_31_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_31.setMap(map);
PolyList.push(loc_31)
const loc_31_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Jonesboro, AR</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Jonesboro area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_31,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_31_infowindow.content
}); 

google.maps.event.addListener(loc_31,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_31, 'click', function(event) {



    var loc_31_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-jonesboro.html','_blank'); 
        
    }
    loc_31_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_31_selected = false;

google.maps.event.addListener(loc_31, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Jonesboro, AR</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Jonesboro area.</small></div>`


    var loc_31_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-jonesboro.html','_blank'); 
        
    }

    if (loc_31_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_31_infowindow.content
    lastSelectedPlace = "loc_31"
    loc_31_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_31.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_31_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_31_infowindow.content
    lastSelectedPlace = "loc_31"
    loc_31_selected = true;



        } else {

          loc_31_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_31_selected = false
        }



    }
      
  })






}


var loc_32_coords = [{ lat: 41, lng: -86.99},{ lat: 41, lng: -85.5},{ lat: 40, lng: -85.5},{ lat: 40, lng: -86.99},];




const loc_32 = new google.maps.Polygon({
    paths: loc_32_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_32.setMap(map);
PolyList.push(loc_32)
const loc_32_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Kokomo, IN</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Kokomo area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_32,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_32_infowindow.content
}); 

google.maps.event.addListener(loc_32,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_32, 'click', function(event) {



    var loc_32_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-kokomo.html','_blank'); 
        
    }
    loc_32_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_32_selected = false;

google.maps.event.addListener(loc_32, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Kokomo, IN</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Kokomo area.</small></div>`


    var loc_32_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-kokomo.html','_blank'); 
        
    }

    if (loc_32_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_32_infowindow.content
    lastSelectedPlace = "loc_32"
    loc_32_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_32.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_32_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_32_infowindow.content
    lastSelectedPlace = "loc_32"
    loc_32_selected = true;



        } else {

          loc_32_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_32_selected = false
        }



    }
      
  })






}


var loc_33_coords = [{ lat: 34, lng: -93.5},{ lat: 35.5, lng: -93.5},{ lat: 35.5, lng: -91.5},{ lat: 34, lng: -91.5},];




const loc_33 = new google.maps.Polygon({
    paths: loc_33_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_33.setMap(map);
PolyList.push(loc_33)
const loc_33_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Little Rock, AR</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Little Rock area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_33,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_33_infowindow.content
}); 

google.maps.event.addListener(loc_33,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_33, 'click', function(event) {



    var loc_33_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-little-rock.html','_blank'); 
        
    }
    loc_33_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_33_selected = false;

google.maps.event.addListener(loc_33, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Little Rock, AR</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Little Rock area.</small></div>`


    var loc_33_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-little-rock.html','_blank'); 
        
    }

    if (loc_33_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_33_infowindow.content
    lastSelectedPlace = "loc_33"
    loc_33_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_33.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_33_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_33_infowindow.content
    lastSelectedPlace = "loc_33"
    loc_33_selected = true;



        } else {

          loc_33_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_33_selected = false
        }



    }
      
  })






}


var loc_34_coords = [{ lat: 43.5, lng: -81.99},{ lat: 43.5, lng: -80.5},{ lat: 42.5, lng: -80.5},{ lat: 42.5, lng: -81.99},];




const loc_34 = new google.maps.Polygon({
    paths: loc_34_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_34.setMap(map);
PolyList.push(loc_34)
const loc_34_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>London, ON</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the London area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_34,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_34_infowindow.content
}); 

google.maps.event.addListener(loc_34,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_34, 'click', function(event) {



    var loc_34_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-london.html','_blank'); 
        
    }
    loc_34_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_34_selected = false;

google.maps.event.addListener(loc_34, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>London, ON</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the London area.</small></div>`


    var loc_34_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-london.html','_blank'); 
        
    }

    if (loc_34_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_34_infowindow.content
    lastSelectedPlace = "loc_34"
    loc_34_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_34.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_34_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_34_infowindow.content
    lastSelectedPlace = "loc_34"
    loc_34_selected = true;



        } else {

          loc_34_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_34_selected = false
        }



    }
      
  })






}


var loc_35_coords = [{ lat: 39, lng: -86.5},{ lat: 39, lng: -85},{ lat: 37.99, lng: -85},{ lat: 37.99, lng: -86.5},];




const loc_35 = new google.maps.Polygon({
    paths: loc_35_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_35.setMap(map);
PolyList.push(loc_35)
const loc_35_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Louisville, KY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Louisville area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_35,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_35_infowindow.content
}); 

google.maps.event.addListener(loc_35,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_35, 'click', function(event) {



    var loc_35_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-louisville.html','_blank'); 
        
    }
    loc_35_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_35_selected = false;

google.maps.event.addListener(loc_35, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Louisville, KY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Louisville area.</small></div>`


    var loc_35_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-louisville.html','_blank'); 
        
    }

    if (loc_35_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_35_infowindow.content
    lastSelectedPlace = "loc_35"
    loc_35_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_35.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_35_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_35_infowindow.content
    lastSelectedPlace = "loc_35"
    loc_35_selected = true;



        } else {

          loc_35_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_35_selected = false
        }



    }
      
  })






}


var loc_36_coords = [{ lat: 46, lng: -67.2},{ lat: 46, lng: -68.65},{ lat: 47.25, lng: -68.65},{ lat: 47.25, lng: -67.2},];




const loc_36 = new google.maps.Polygon({
    paths: loc_36_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_36.setMap(map);
PolyList.push(loc_36)
const loc_36_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Maine</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from Maine.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_36,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_36_infowindow.content
}); 

google.maps.event.addListener(loc_36,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_36, 'click', function(event) {



    var loc_36_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-maine.html','_blank');  
        
    }
    loc_36_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_36_selected = false;

google.maps.event.addListener(loc_36, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Maine</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from Maine.</small></div>`


    var loc_36_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-maine.html','_blank');  
        
    }

    if (loc_36_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_36_infowindow.content
    lastSelectedPlace = "loc_36"
    loc_36_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_36.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_36_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_36_infowindow.content
    lastSelectedPlace = "loc_36"
    loc_36_selected = true;



        } else {

          loc_36_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_36_selected = false
        }



    }
      
  })






}


var loc_37_coords = [{ lat: 23.99, lng: -107},{ lat: 23.99, lng: -104.99},{ lat: 22.5, lng: -104.99},{ lat: 22.5, lng: -107},];




const loc_37 = new google.maps.Polygon({
    paths: loc_37_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_37.setMap(map);
PolyList.push(loc_37)
const loc_37_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Mazatlan, Mexico</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Mazatlan area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_37,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_37_infowindow.content
}); 

google.maps.event.addListener(loc_37,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_37, 'click', function(event) {



    var loc_37_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-mazatlan.html','_blank'); 
        
    }
    loc_37_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_37_selected = false;

google.maps.event.addListener(loc_37, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Mazatlan, Mexico</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Mazatlan area.</small></div>`


    var loc_37_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-mazatlan.html','_blank'); 
        
    }

    if (loc_37_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_37_infowindow.content
    lastSelectedPlace = "loc_37"
    loc_37_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_37.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_37_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_37_infowindow.content
    lastSelectedPlace = "loc_37"
    loc_37_selected = true;



        } else {

          loc_37_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_37_selected = false
        }



    }
      
  })






}


var loc_38_coords = [{ lat: 36, lng: -91.5},{ lat: 36, lng: -89.5},{ lat: 34.5, lng: -89.5},{ lat: 34.5, lng: -91.5},];




const loc_38 = new google.maps.Polygon({
    paths: loc_38_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_38.setMap(map);
PolyList.push(loc_38)
const loc_38_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Memphis, TN</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Memphis area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_38,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_38_infowindow.content
}); 

google.maps.event.addListener(loc_38,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_38, 'click', function(event) {



    var loc_38_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-memphis.html','_blank'); 
        
    }
    loc_38_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_38_selected = false;

google.maps.event.addListener(loc_38, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Memphis, TN</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Memphis area.</small></div>`


    var loc_38_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-memphis.html','_blank'); 
        
    }

    if (loc_38_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_38_infowindow.content
    lastSelectedPlace = "loc_38"
    loc_38_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_38.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_38_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_38_infowindow.content
    lastSelectedPlace = "loc_38"
    loc_38_selected = true;



        } else {

          loc_38_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_38_selected = false
        }



    }
      
  })






}


var loc_39_coords = [{ lat: 26.7, lng: -102},{ lat: 27.5, lng: -102},{ lat: 27.5, lng: -101},{ lat: 26.7, lng: -101},];




const loc_39 = new google.maps.Polygon({
    paths: loc_39_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_39.setMap(map);
PolyList.push(loc_39)
const loc_39_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Monclova, Mexico</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Monclova area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_39,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_39_infowindow.content
}); 

google.maps.event.addListener(loc_39,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_39, 'click', function(event) {



    var loc_39_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-monclova.html','_blank'); 
        
    }
    loc_39_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_39_selected = false;

google.maps.event.addListener(loc_39, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Monclova, Mexico</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Monclova area.</small></div>`


    var loc_39_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-monclova.html','_blank'); 
        
    }

    if (loc_39_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_39_infowindow.content
    lastSelectedPlace = "loc_39"
    loc_39_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_39.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_39_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_39_infowindow.content
    lastSelectedPlace = "loc_39"
    loc_39_selected = true;



        } else {

          loc_39_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_39_selected = false
        }



    }
      
  })






}


var loc_40_coords = [{ lat: 46.99, lng: -66},{ lat: 46.99, lng: -63.5},{ lat: 45.5, lng: -63.5},{ lat: 45.5, lng: -66},];




const loc_40 = new google.maps.Polygon({
    paths: loc_40_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_40.setMap(map);
PolyList.push(loc_40)
const loc_40_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Moncton, NB</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Moncton area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_40,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_40_infowindow.content
}); 

google.maps.event.addListener(loc_40,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_40, 'click', function(event) {



    var loc_40_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-moncton.html','_blank'); 
        
    }
    loc_40_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_40_selected = false;

google.maps.event.addListener(loc_40, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Moncton, NB</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Moncton area.</small></div>`


    var loc_40_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-moncton.html','_blank'); 
        
    }

    if (loc_40_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_40_infowindow.content
    lastSelectedPlace = "loc_40"
    loc_40_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_40.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_40_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_40_infowindow.content
    lastSelectedPlace = "loc_40"
    loc_40_selected = true;



        } else {

          loc_40_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_40_selected = false
        }



    }
      
  })






}


var loc_41_coords = [{ lat: 46.5, lng: -75},{ lat: 46.5, lng: -71.99},{ lat: 44.5, lng: -71.99},{ lat: 44.5, lng: -75},];




const loc_41 = new google.maps.Polygon({
    paths: loc_41_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_41.setMap(map);
PolyList.push(loc_41)
const loc_41_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Montreal, QC</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Montreal area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_41,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_41_infowindow.content
}); 

google.maps.event.addListener(loc_41,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_41, 'click', function(event) {



    var loc_41_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-montreal.html','_blank'); 
        
    }
    loc_41_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_41_selected = false;

google.maps.event.addListener(loc_41, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Montreal, QC</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Montreal area.</small></div>`


    var loc_41_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-montreal.html','_blank'); 
        
    }

    if (loc_41_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_41_infowindow.content
    lastSelectedPlace = "loc_41"
    loc_41_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_41.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_41_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_41_infowindow.content
    lastSelectedPlace = "loc_41"
    loc_41_selected = true;



        } else {

          loc_41_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_41_selected = false
        }



    }
      
  })






}


var loc_42_coords = [{ lat: 36.99, lng: -89.99},{ lat: 36.99, lng: -85.99},{ lat: 35.5, lng: -85.99},{ lat: 35.5, lng: -89.99},];




const loc_42 = new google.maps.Polygon({
    paths: loc_42_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_42.setMap(map);
PolyList.push(loc_42)
const loc_42_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Nashville, TN</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Nashville area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_42,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_42_infowindow.content
}); 

google.maps.event.addListener(loc_42,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_42, 'click', function(event) {



    var loc_42_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-nashville.html','_blank'); 
        
    }
    loc_42_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_42_selected = false;

google.maps.event.addListener(loc_42, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Nashville, TN</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Nashville area.</small></div>`


    var loc_42_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-nashville.html','_blank'); 
        
    }

    if (loc_42_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_42_infowindow.content
    lastSelectedPlace = "loc_42"
    loc_42_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_42.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_42_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_42_infowindow.content
    lastSelectedPlace = "loc_42"
    loc_42_selected = true;



        } else {

          loc_42_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_42_selected = false
        }



    }
      
  })






}


var loc_43_coords = [{ lat: 44, lng: -72.5},{ lat: 45.99, lng: -72.5},{ lat: 45.99, lng: -70.5},{ lat: 44, lng: -70.5},];




const loc_43 = new google.maps.Polygon({
    paths: loc_43_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_43.setMap(map);
PolyList.push(loc_43)
const loc_43_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>New Hampshire</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from New Hampshire.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_43,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_43_infowindow.content
}); 

google.maps.event.addListener(loc_43,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_43, 'click', function(event) {



    var loc_43_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-new-hampshire.html','_blank'); 
        
    }
    loc_43_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_43_selected = false;

google.maps.event.addListener(loc_43, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>New Hampshire</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from New Hampshire.</small></div>`


    var loc_43_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-new-hampshire.html','_blank'); 
        
    }

    if (loc_43_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_43_infowindow.content
    lastSelectedPlace = "loc_43"
    loc_43_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_43.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_43_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_43_infowindow.content
    lastSelectedPlace = "loc_43"
    loc_43_selected = true;



        } else {

          loc_43_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_43_selected = false
        }



    }
      
  })






}


var loc_44_coords = [{ lat: 40, lng: -76},{ lat: 44, lng: -76},{ lat: 44, lng: -71.99},{ lat: 40, lng: -71.99},];




const loc_44 = new google.maps.Polygon({
    paths: loc_44_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_44.setMap(map);
PolyList.push(loc_44)
const loc_44_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>New York City, NY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the New York City area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_44,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_44_infowindow.content
}); 

google.maps.event.addListener(loc_44,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_44, 'click', function(event) {



    var loc_44_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-new-york.html','_blank'); 
        
    }
    loc_44_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_44_selected = false;

google.maps.event.addListener(loc_44, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>New York City, NY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the New York City area.</small></div>`


    var loc_44_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-new-york.html','_blank'); 
        
    }

    if (loc_44_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_44_infowindow.content
    lastSelectedPlace = "loc_44"
    loc_44_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_44.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_44_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_44_infowindow.content
    lastSelectedPlace = "loc_44"
    loc_44_selected = true;



        } else {

          loc_44_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_44_selected = false
        }



    }
      
  })






}


var loc_45_coords = [{ lat: 36.99, lng: -98},{ lat: 36.99, lng: -96.75},{ lat: 34.5, lng: -96.75},{ lat: 34.5, lng: -98},];




const loc_45 = new google.maps.Polygon({
    paths: loc_45_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_45.setMap(map);
PolyList.push(loc_45)
const loc_45_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Oklahoma City, OK</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Oklahoma City area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_45,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_45_infowindow.content
}); 

google.maps.event.addListener(loc_45,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_45, 'click', function(event) {



    var loc_45_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-oklahoma-city.html','_blank'); 
        
    }
    loc_45_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_45_selected = false;

google.maps.event.addListener(loc_45, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Oklahoma City, OK</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Oklahoma City area.</small></div>`


    var loc_45_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-oklahoma-city.html','_blank'); 
        
    }

    if (loc_45_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_45_infowindow.content
    lastSelectedPlace = "loc_45"
    loc_45_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_45.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_45_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_45_infowindow.content
    lastSelectedPlace = "loc_45"
    loc_45_selected = true;



        } else {

          loc_45_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_45_selected = false
        }



    }
      
  })






}


var loc_46_coords = [{ lat: 44.5, lng: -76.5},{ lat: 45.99, lng: -76.5},{ lat: 45.99, lng: -75},{ lat: 44.5, lng: -75},];




const loc_46 = new google.maps.Polygon({
    paths: loc_46_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_46.setMap(map);
PolyList.push(loc_46)
const loc_46_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Ottawa, ON</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Ottawa area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_46,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_46_infowindow.content
}); 

google.maps.event.addListener(loc_46,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_46, 'click', function(event) {



    var loc_46_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-ottawa.html','_blank'); 
        
    }
    loc_46_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_46_selected = false;

google.maps.event.addListener(loc_46, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Ottawa, ON</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Ottawa area.</small></div>`


    var loc_46_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-ottawa.html','_blank'); 
        
    }

    if (loc_46_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_46_infowindow.content
    lastSelectedPlace = "loc_46"
    loc_46_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_46.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_46_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_46_infowindow.content
    lastSelectedPlace = "loc_46"
    loc_46_selected = true;



        } else {

          loc_46_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_46_selected = false
        }



    }
      
  })






}


var loc_47_coords = [{ lat: 36.5, lng: -89},{ lat: 37.5, lng: -89},{ lat: 37.5, lng: -88},{ lat: 36.5, lng: -88},];




const loc_47 = new google.maps.Polygon({
    paths: loc_47_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_47.setMap(map);
PolyList.push(loc_47)
const loc_47_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Paducah, KY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Paducah area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_47,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_47_infowindow.content
}); 

google.maps.event.addListener(loc_47,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_47, 'click', function(event) {



    var loc_47_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-paducah.html','_blank'); 
        
    }
    loc_47_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_47_selected = false;

google.maps.event.addListener(loc_47, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Paducah, KY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Paducah area.</small></div>`


    var loc_47_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-paducah.html','_blank'); 
        
    }

    if (loc_47_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_47_infowindow.content
    lastSelectedPlace = "loc_47"
    loc_47_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_47.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_47_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_47_infowindow.content
    lastSelectedPlace = "loc_47"
    loc_47_selected = true;



        } else {

          loc_47_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_47_selected = false
        }



    }
      
  })






}


var loc_48_coords = [{ lat: 29.5, lng: -102},{ lat: 29.5, lng: -99.5},{ lat: 27.99, lng: -99.5},{ lat: 27.99, lng: -102},];




const loc_48 = new google.maps.Polygon({
    paths: loc_48_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_48.setMap(map);
PolyList.push(loc_48)
const loc_48_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Piedras Negras, Mexico</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Piedras Negras area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_48,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_48_infowindow.content
}); 

google.maps.event.addListener(loc_48,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_48, 'click', function(event) {



    var loc_48_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-piedras-negras.html','_blank'); 
        
    }
    loc_48_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_48_selected = false;

google.maps.event.addListener(loc_48, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Piedras Negras, Mexico</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Piedras Negras area.</small></div>`


    var loc_48_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-piedras-negras.html','_blank'); 
        
    }

    if (loc_48_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_48_infowindow.content
    lastSelectedPlace = "loc_48"
    loc_48_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_48.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_48_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_48_infowindow.content
    lastSelectedPlace = "loc_48"
    loc_48_selected = true;



        } else {

          loc_48_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_48_selected = false
        }



    }
      
  })






}


var loc_49_coords = [{ lat: 46.99, lng: -72.5},{ lat: 46.99, lng: -69.5},{ lat: 45.99, lng: -69.5},{ lat: 45.99, lng: -72.5},];




const loc_49 = new google.maps.Polygon({
    paths: loc_49_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_49.setMap(map);
PolyList.push(loc_49)
const loc_49_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Quebec City, QC</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Quebec City area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_49,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_49_infowindow.content
}); 

google.maps.event.addListener(loc_49,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_49, 'click', function(event) {



    var loc_49_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-quebec.html','_blank'); 
        
    }
    loc_49_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_49_selected = false;

google.maps.event.addListener(loc_49, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Quebec City, QC</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Quebec City area.</small></div>`


    var loc_49_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-quebec.html','_blank'); 
        
    }

    if (loc_49_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_49_infowindow.content
    lastSelectedPlace = "loc_49"
    loc_49_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_49.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_49_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_49_infowindow.content
    lastSelectedPlace = "loc_49"
    loc_49_selected = true;



        } else {

          loc_49_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_49_selected = false
        }



    }
      
  })






}


var loc_50_coords = [{ lat: 43.5, lng: -78.5},{ lat: 43.5, lng: -76.99},{ lat: 42.5, lng: -76.99},{ lat: 42.5, lng: -78.5},];




const loc_50 = new google.maps.Polygon({
    paths: loc_50_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_50.setMap(map);
PolyList.push(loc_50)
const loc_50_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Rochester, NY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Rochester area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_50,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_50_infowindow.content
}); 

google.maps.event.addListener(loc_50,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_50, 'click', function(event) {



    var loc_50_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-rochester.html','_blank'); 
        
    }
    loc_50_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_50_selected = false;

google.maps.event.addListener(loc_50, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Rochester, NY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Rochester area.</small></div>`


    var loc_50_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-rochester.html','_blank'); 
        
    }

    if (loc_50_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_50_infowindow.content
    lastSelectedPlace = "loc_50"
    loc_50_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_50.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_50_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_50_infowindow.content
    lastSelectedPlace = "loc_50"
    loc_50_selected = true;



        } else {

          loc_50_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_50_selected = false
        }



    }
      
  })






}


var loc_51_coords = [{ lat: 45.99, lng: -67},{ lat: 45.99, lng: -65.5},{ lat: 45, lng: -65.5},{ lat: 45, lng: -67},];




const loc_51 = new google.maps.Polygon({
    paths: loc_51_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_51.setMap(map);
PolyList.push(loc_51)
const loc_51_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Saint John, NB</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Saint John area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_51,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_51_infowindow.content
}); 

google.maps.event.addListener(loc_51,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_51, 'click', function(event) {



    var loc_51_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-saint-john.html','_blank'); 
        
    }
    loc_51_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_51_selected = false;

google.maps.event.addListener(loc_51, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Saint John, NB</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Saint John area.</small></div>`


    var loc_51_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-saint-john.html','_blank'); 
        
    }

    if (loc_51_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_51_infowindow.content
    lastSelectedPlace = "loc_51"
    loc_51_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_51.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_51_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_51_infowindow.content
    lastSelectedPlace = "loc_51"
    loc_51_selected = true;



        } else {

          loc_51_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_51_selected = false
        }



    }
      
  })






}


var loc_52_coords = [{ lat: 30, lng: -99.5},{ lat: 30, lng: -97.5},{ lat: 28.5, lng: -97.5},{ lat: 28.5, lng: -99.5},];




const loc_52 = new google.maps.Polygon({
    paths: loc_52_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_52.setMap(map);
PolyList.push(loc_52)
const loc_52_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>San Antonio, TX</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the San Antonio area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_52,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_52_infowindow.content
}); 

google.maps.event.addListener(loc_52,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_52, 'click', function(event) {



    var loc_52_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-san-antonio.html','_blank'); 
        
    }
    loc_52_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_52_selected = false;

google.maps.event.addListener(loc_52, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>San Antonio, TX</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the San Antonio area.</small></div>`


    var loc_52_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-san-antonio.html','_blank'); 
        
    }

    if (loc_52_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_52_infowindow.content
    lastSelectedPlace = "loc_52"
    loc_52_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_52.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_52_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_52_infowindow.content
    lastSelectedPlace = "loc_52"
    loc_52_selected = true;



        } else {

          loc_52_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_52_selected = false
        }



    }
      
  })






}


var loc_53_coords = [{ lat: 32.99, lng: -94.99},{ lat: 32.99, lng: -93},{ lat: 32, lng: -93},{ lat: 32, lng: -94.99},];




const loc_53 = new google.maps.Polygon({
    paths: loc_53_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_53.setMap(map);
PolyList.push(loc_53)
const loc_53_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Shreveport, LA</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Shreveport area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_53,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_53_infowindow.content
}); 

google.maps.event.addListener(loc_53,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_53, 'click', function(event) {



    var loc_53_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-shreveport.html','_blank'); 
        
    }
    loc_53_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_53_selected = false;

google.maps.event.addListener(loc_53, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Shreveport, LA</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Shreveport area.</small></div>`


    var loc_53_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-shreveport.html','_blank'); 
        
    }

    if (loc_53_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_53_infowindow.content
    lastSelectedPlace = "loc_53"
    loc_53_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_53.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_53_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_53_infowindow.content
    lastSelectedPlace = "loc_53"
    loc_53_selected = true;



        } else {

          loc_53_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_53_selected = false
        }



    }
      
  })






}


var loc_54_coords = [{ lat: 48.5, lng: -54.5},{ lat: 48.5, lng: -52},{ lat: 46.99, lng: -52},{ lat: 46.99, lng: -54.5},];




const loc_54 = new google.maps.Polygon({
    paths: loc_54_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_54.setMap(map);
PolyList.push(loc_54)
const loc_54_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>St. John's, NL</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the St. John's area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_54,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_54_infowindow.content
}); 

google.maps.event.addListener(loc_54,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_54, 'click', function(event) {



    var loc_54_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-st-johns.html','_blank'); 
        
    }
    loc_54_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_54_selected = false;

google.maps.event.addListener(loc_54, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>St. John's, NL</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the St. John's area.</small></div>`


    var loc_54_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-st-johns.html','_blank'); 
        
    }

    if (loc_54_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_54_infowindow.content
    lastSelectedPlace = "loc_54"
    loc_54_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_54.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_54_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_54_infowindow.content
    lastSelectedPlace = "loc_54"
    loc_54_selected = true;



        } else {

          loc_54_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_54_selected = false
        }



    }
      
  })






}


var loc_55_coords = [{ lat: 39, lng: -90.99},{ lat: 39, lng: -89},{ lat: 37.99, lng: -89},{ lat: 37.99, lng: -90.99},];




const loc_55 = new google.maps.Polygon({
    paths: loc_55_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_55.setMap(map);
PolyList.push(loc_55)
const loc_55_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>St. Louis, MO</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the St. Louis area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_55,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_55_infowindow.content
}); 

google.maps.event.addListener(loc_55,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_55, 'click', function(event) {



    var loc_55_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-st-louis.html','_blank'); 
        
    }
    loc_55_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_55_selected = false;

google.maps.event.addListener(loc_55, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>St. Louis, MO</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the St. Louis area.</small></div>`


    var loc_55_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-st-louis.html','_blank'); 
        
    }

    if (loc_55_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_55_infowindow.content
    lastSelectedPlace = "loc_55"
    loc_55_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_55.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_55_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_55_infowindow.content
    lastSelectedPlace = "loc_55"
    loc_55_selected = true;



        } else {

          loc_55_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_55_selected = false
        }



    }
      
  })






}


var loc_56_coords = [{ lat: 43.5, lng: -76.99},{ lat: 43.5, lng: -75.5},{ lat: 42.5, lng: -75.5},{ lat: 42.5, lng: -76.99},];




const loc_56 = new google.maps.Polygon({
    paths: loc_56_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_56.setMap(map);
PolyList.push(loc_56)
const loc_56_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Syracuse, NY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Syracuse area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_56,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_56_infowindow.content
}); 

google.maps.event.addListener(loc_56,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_56, 'click', function(event) {



    var loc_56_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-syracuse.html','_blank'); 
        
    }
    loc_56_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_56_selected = false;

google.maps.event.addListener(loc_56, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Syracuse, NY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Syracuse area.</small></div>`


    var loc_56_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-syracuse.html','_blank'); 
        
    }

    if (loc_56_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_56_infowindow.content
    lastSelectedPlace = "loc_56"
    loc_56_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_56.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_56_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_56_infowindow.content
    lastSelectedPlace = "loc_56"
    loc_56_selected = true;



        } else {

          loc_56_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_56_selected = false
        }



    }
      
  })






}


var loc_57_coords = [{ lat: 33.99, lng: -94.99},{ lat: 33.99, lng: -93},{ lat: 32.99, lng: -93},{ lat: 32.99, lng: -94.99},];




const loc_57 = new google.maps.Polygon({
    paths: loc_57_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_57.setMap(map);
PolyList.push(loc_57)
const loc_57_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Texarkana, TX</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Texarkana area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_57,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_57_infowindow.content
}); 

google.maps.event.addListener(loc_57,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_57, 'click', function(event) {



    var loc_57_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-texarkana.html','_blank'); 
        
    }
    loc_57_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_57_selected = false;

google.maps.event.addListener(loc_57, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Texarkana, TX</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Texarkana area.</small></div>`


    var loc_57_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-texarkana.html','_blank'); 
        
    }

    if (loc_57_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_57_infowindow.content
    lastSelectedPlace = "loc_57"
    loc_57_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_57.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_57_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_57_infowindow.content
    lastSelectedPlace = "loc_57"
    loc_57_selected = true;



        } else {

          loc_57_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_57_selected = false
        }



    }
      
  })






}


var loc_58_coords = [{ lat: 41, lng: -84},{ lat: 41.99, lng: -84},{ lat: 41.99, lng: -83},{ lat: 41, lng: -83},];




const loc_58 = new google.maps.Polygon({
    paths: loc_58_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_58.setMap(map);
PolyList.push(loc_58)
const loc_58_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Toledo, OH</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Toledo area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_58,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_58_infowindow.content
}); 

google.maps.event.addListener(loc_58,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_58, 'click', function(event) {



    var loc_58_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-toledo.html','_blank'); 
        
    }
    loc_58_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_58_selected = false;

google.maps.event.addListener(loc_58, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Toledo, OH</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Toledo area.</small></div>`


    var loc_58_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-toledo.html','_blank'); 
        
    }

    if (loc_58_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_58_infowindow.content
    lastSelectedPlace = "loc_58"
    loc_58_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_58.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_58_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_58_infowindow.content
    lastSelectedPlace = "loc_58"
    loc_58_selected = true;



        } else {

          loc_58_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_58_selected = false
        }



    }
      
  })






}


var loc_59_coords = [{ lat: 44.5, lng: -81},{ lat: 44.5, lng: -78},{ lat: 42.5, lng: -78},{ lat: 42.5, lng: -81},];




const loc_59 = new google.maps.Polygon({
    paths: loc_59_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_59.setMap(map);
PolyList.push(loc_59)
const loc_59_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Toronto-Hamilton, ON</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Toronto-Hamilton area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_59,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_59_infowindow.content
}); 

google.maps.event.addListener(loc_59,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_59, 'click', function(event) {



    var loc_59_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-toronto-hamilton.html','_blank'); 
        
    }
    loc_59_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_59_selected = false;

google.maps.event.addListener(loc_59, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Toronto-Hamilton, ON</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Toronto-Hamilton area.</small></div>`


    var loc_59_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-toronto-hamilton.html','_blank'); 
        
    }

    if (loc_59_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_59_infowindow.content
    lastSelectedPlace = "loc_59"
    loc_59_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_59.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_59_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_59_infowindow.content
    lastSelectedPlace = "loc_59"
    loc_59_selected = true;



        } else {

          loc_59_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_59_selected = false
        }



    }
      
  })






}


var loc_60_coords = [{ lat: 27, lng: -104.99},{ lat: 27, lng: -102},{ lat: 24.99, lng: -102},{ lat: 24.99, lng: -104.99},];




const loc_60 = new google.maps.Polygon({
    paths: loc_60_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_60.setMap(map);
PolyList.push(loc_60)
const loc_60_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Torreon, Mexico</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Torreon area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_60,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_60_infowindow.content
}); 

google.maps.event.addListener(loc_60,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_60, 'click', function(event) {



    var loc_60_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-torreon.html','_blank'); 
        
    }
    loc_60_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_60_selected = false;

google.maps.event.addListener(loc_60, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Torreon, Mexico</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Torreon area.</small></div>`


    var loc_60_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-torreon.html','_blank'); 
        
    }

    if (loc_60_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_60_infowindow.content
    lastSelectedPlace = "loc_60"
    loc_60_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_60.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_60_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_60_infowindow.content
    lastSelectedPlace = "loc_60"
    loc_60_selected = true;



        } else {

          loc_60_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_60_selected = false
        }



    }
      
  })






}


var loc_61_coords = [{ lat: 36.99, lng: -96.75},{ lat: 36.99, lng: -94},{ lat: 34.5, lng: -94},{ lat: 34.5, lng: -96.75},];




const loc_61 = new google.maps.Polygon({
    paths: loc_61_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_61.setMap(map);
PolyList.push(loc_61)
const loc_61_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Tulsa, OK</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Tulsa area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_61,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_61_infowindow.content
}); 

google.maps.event.addListener(loc_61,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_61, 'click', function(event) {



    var loc_61_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-tulsa.html','_blank'); 
        
    }
    loc_61_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_61_selected = false;

google.maps.event.addListener(loc_61, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Tulsa, OK</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Tulsa area.</small></div>`


    var loc_61_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-tulsa.html','_blank'); 
        
    }

    if (loc_61_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_61_infowindow.content
    lastSelectedPlace = "loc_61"
    loc_61_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_61.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_61_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_61_infowindow.content
    lastSelectedPlace = "loc_61"
    loc_61_selected = true;



        } else {

          loc_61_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_61_selected = false
        }



    }
      
  })






}


var loc_62_coords = [{ lat: 31.5, lng: -95.99},{ lat: 32.99, lng: -95.99},{ lat: 32.99, lng: -94.5},{ lat: 31.5, lng: -94.5},];




const loc_62 = new google.maps.Polygon({
    paths: loc_62_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_62.setMap(map);
PolyList.push(loc_62)
const loc_62_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Tyler, TX</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Tyler area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_62,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_62_infowindow.content
}); 

google.maps.event.addListener(loc_62,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_62, 'click', function(event) {



    var loc_62_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-tyler.html','_blank'); 
        
    }
    loc_62_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_62_selected = false;

google.maps.event.addListener(loc_62, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Tyler, TX</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Tyler area.</small></div>`


    var loc_62_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-tyler.html','_blank'); 
        
    }

    if (loc_62_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_62_infowindow.content
    lastSelectedPlace = "loc_62"
    loc_62_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_62.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_62_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_62_infowindow.content
    lastSelectedPlace = "loc_62"
    loc_62_selected = true;



        } else {

          loc_62_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_62_selected = false
        }



    }
      
  })






}


var loc_63_coords = [{ lat: 43.5, lng: -76},{ lat: 43.5, lng: -75},{ lat: 42.99, lng: -75},{ lat: 42.99, lng: -76},];




const loc_63 = new google.maps.Polygon({
    paths: loc_63_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_63.setMap(map);
PolyList.push(loc_63)
const loc_63_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Utica-Rome, NY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Utica-Rome area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_63,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_63_infowindow.content
}); 

google.maps.event.addListener(loc_63,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_63, 'click', function(event) {



    var loc_63_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-utica-rome.html','_blank'); 
        
    }
    loc_63_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_63_selected = false;

google.maps.event.addListener(loc_63, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Utica-Rome, NY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Utica-Rome area.</small></div>`


    var loc_63_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-utica-rome.html','_blank'); 
        
    }

    if (loc_63_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_63_infowindow.content
    lastSelectedPlace = "loc_63"
    loc_63_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_63.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_63_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_63_infowindow.content
    lastSelectedPlace = "loc_63"
    loc_63_selected = true;



        } else {

          loc_63_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_63_selected = false
        }



    }
      
  })






}


var loc_64_coords = [{ lat: 45.5, lng: -74},{ lat: 45.5, lng: -71},{ lat: 42.99, lng: -71},{ lat: 42.99, lng: -74},];




const loc_64 = new google.maps.Polygon({
    paths: loc_64_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_64.setMap(map);
PolyList.push(loc_64)
const loc_64_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Vermont</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from Vermont.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_64,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_64_infowindow.content
}); 

google.maps.event.addListener(loc_64,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_64, 'click', function(event) {



    var loc_64_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-vermont.html','_blank'); 
        
    }
    loc_64_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_64_selected = false;

google.maps.event.addListener(loc_64, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Vermont</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from Vermont.</small></div>`


    var loc_64_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-vermont.html','_blank'); 
        
    }

    if (loc_64_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_64_infowindow.content
    lastSelectedPlace = "loc_64"
    loc_64_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_64.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_64_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_64_infowindow.content
    lastSelectedPlace = "loc_64"
    loc_64_selected = true;



        } else {

          loc_64_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_64_selected = false
        }



    }
      
  })






}


var loc_65_coords = [{ lat: 41.5, lng: -81.5},{ lat: 41.5, lng: -80},{ lat: 40.5, lng: -80},{ lat: 40.5, lng: -81.5},];




const loc_65 = new google.maps.Polygon({
    paths: loc_65_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_65.setMap(map);
PolyList.push(loc_65)
const loc_65_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Youngstown, OH</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Youngstown area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_65,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_65_infowindow.content
}); 

google.maps.event.addListener(loc_65,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_65, 'click', function(event) {



    var loc_65_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-youngstown.html','_blank'); 
        
    }
    loc_65_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_65_selected = false;

google.maps.event.addListener(loc_65, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Youngstown, OH</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Youngstown area.</small></div>`


    var loc_65_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-youngstown.html','_blank'); 
        
    }

    if (loc_65_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_65_infowindow.content
    lastSelectedPlace = "loc_65"
    loc_65_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_65.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_65_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_65_infowindow.content
    lastSelectedPlace = "loc_65"
    loc_65_selected = true;



        } else {

          loc_65_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_65_selected = false
        }



    }
      
  })






}


var loc_66_coords = [{ lat: 38.45, lng: -87.8},{ lat: 38.9, lng: -87.8},{ lat: 38.9, lng: -87.1},{ lat: 38.45, lng: -87.1},];




const loc_66 = new google.maps.Polygon({
    paths: loc_66_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_66.setMap(map);
PolyList.push(loc_66)
const loc_66_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Vincennes, IN</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Vincennes area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_66,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_66_infowindow.content
}); 

google.maps.event.addListener(loc_66,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_66, 'click', function(event) {



    var loc_66_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-vincennes.html','_blank'); 
        
    }
    loc_66_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_66_selected = false;

google.maps.event.addListener(loc_66, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Vincennes, IN</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Vincennes area.</small></div>`


    var loc_66_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-vincennes.html','_blank'); 
        
    }

    if (loc_66_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_66_infowindow.content
    lastSelectedPlace = "loc_66"
    loc_66_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_66.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_66_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_66_infowindow.content
    lastSelectedPlace = "loc_66"
    loc_66_selected = true;



        } else {

          loc_66_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_66_selected = false
        }



    }
      
  })






}


var loc_67_coords = [{ lat: 44.35, lng: -73.75},{ lat: 45, lng: -73.75},{ lat: 45, lng: -73.34},{ lat: 44.35, lng: -73.34},];




const loc_67 = new google.maps.Polygon({
    paths: loc_67_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_67.setMap(map);
PolyList.push(loc_67)
const loc_67_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Plattsburgh, NY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Plattsburgh area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_67,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_67_infowindow.content
}); 

google.maps.event.addListener(loc_67,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_67, 'click', function(event) {



    var loc_67_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-plattsburgh.html','_blank'); 
        
    }
    loc_67_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_67_selected = false;

google.maps.event.addListener(loc_67, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Plattsburgh, NY</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Plattsburgh area.</small></div>`


    var loc_67_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-plattsburgh.html','_blank'); 
        
    }

    if (loc_67_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_67_infowindow.content
    lastSelectedPlace = "loc_67"
    loc_67_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_67.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_67_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_67_infowindow.content
    lastSelectedPlace = "loc_67"
    loc_67_selected = true;



        } else {

          loc_67_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_67_selected = false
        }



    }
      
  })






}


var loc_68_coords = [{ lat: 38.5, lng: -88},{ lat: 38.5, lng: -87.33},{ lat: 37.5, lng: -87.33},{ lat: 37.5, lng: -88},];




const loc_68 = new google.maps.Polygon({
    paths: loc_68_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_68.setMap(map);
PolyList.push(loc_68)
const loc_68_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Evansville, IN</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Evansville area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_68,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_68_infowindow.content
}); 

google.maps.event.addListener(loc_68,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_68, 'click', function(event) {



    var loc_68_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-evansville.html','_blank'); 
        
    }
    loc_68_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_68_selected = false;

google.maps.event.addListener(loc_68, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Evansville, IN</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Evansville area.</small></div>`


    var loc_68_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-evansville.html','_blank'); 
        
    }

    if (loc_68_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_68_infowindow.content
    lastSelectedPlace = "loc_68"
    loc_68_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_68.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_68_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_68_infowindow.content
    lastSelectedPlace = "loc_68"
    loc_68_selected = true;



        } else {

          loc_68_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_68_selected = false
        }



    }
      
  })






}


var loc_69_coords = [{ lat: 46.99, lng: -65},{ lat: 46.99, lng: -62.5},{ lat: 45.99, lng: -62.5},{ lat: 45.99, lng: -65},];




const loc_69 = new google.maps.Polygon({
    paths: loc_69_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_69.setMap(map);
PolyList.push(loc_69)
const loc_69_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Charlottetown, PEI</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Charlottetown area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_69,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_69_infowindow.content
}); 

google.maps.event.addListener(loc_69,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_69, 'click', function(event) {



    var loc_69_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-charlottetown.html','_blank'); 
        
    }
    loc_69_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_69_selected = false;

google.maps.event.addListener(loc_69, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Charlottetown, PEI</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Charlottetown area.</small></div>`


    var loc_69_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-charlottetown.html','_blank'); 
        
    }

    if (loc_69_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_69_infowindow.content
    lastSelectedPlace = "loc_69"
    loc_69_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_69.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_69_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_69_infowindow.content
    lastSelectedPlace = "loc_69"
    loc_69_selected = true;



        } else {

          loc_69_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_69_selected = false
        }



    }
      
  })






}


var loc_70_coords = [{ lat: 44.28, lng: -72.6},{ lat: 44.28, lng: -72.44},{ lat: 44.15, lng: -72.44},{ lat: 44.15, lng: -72.6},];




const loc_70 = new google.maps.Polygon({
    paths: loc_70_coords,
    strokeColor: PolygonStyles["unselectedStrokeColor"],
    strokeOpacity: PolygonStyles["strokeOpacity"],
    strokeWeight: PolygonStyles["strokeWeight"],
    fillOpacity: PolygonStyles["fillOpacity"],
    fillColor: PolygonStyles["unselectedFillColor"]
    })


loc_70.setMap(map);
PolyList.push(loc_70)
const loc_70_infowindow = new google.maps.InfoWindow({
content: `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Barre, VT</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Barre area.</small></div>`,
});


// PC Mode Event Listeners

if (!isMobile()) {
google.maps.event.addListener(loc_70,"mouseover",function(){
 this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
 });
 modal.style.display = "block";
 modalTitle.innerHTML = loc_70_infowindow.content
}); 

google.maps.event.addListener(loc_70,"mouseout",function(){
 this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
 });
 modal.style.display = "none";
});

google.maps.event.addListener(loc_70, 'click', function(event) {



    var loc_70_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-barre.html','_blank'); 
        
    }
    loc_70_linkURL();
    this.setOptions({
    fillColor: PolygonStyles["unselectedFillColor"],
    strokeColor: PolygonStyles["unselectedStrokeColor"]
});
modal.style.display = "none";
});


// Mobile Mode
} else {

var loc_70_selected = false;

google.maps.event.addListener(loc_70, 'click', function(event) {


    currentCity = `<div style="color:blue;font-family:'Gill Sans', sans-serif;"><b><big>Barre, VT</big></b></div></br><div style="font-family:'Verdana', sans-serif;"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Barre area.</small></div>`


    var loc_70_linkURL = function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-barre.html','_blank'); 
        
    }

    if (loc_70_selected == false) {



        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_70_infowindow.content
    lastSelectedPlace = "loc_70"
    loc_70_selected = true;


    // CLICK THE LINK
    }else {

        if (loc_70.fillColor == PolygonStyles["unselectedFillColor"]) {
            console.log("BLUE")
            loc_70_selected = false

        // RESET ALL TO BLUE for every click
        for (var y = 0; y < PolyList.length; y++) {

            PolyList[y].setOptions({
                fillColor: PolygonStyles["unselectedFillColor"],
                strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
        }

    this.setOptions({
    fillColor: PolygonStyles["selectedFillColor"],
    strokeColor: PolygonStyles["selectedStrokeColor"]
    })



    modal.style.display = "block";
    modalTitle.style.paddingLeft = "20px";
    modalTitle.style.paddingRight = "20px";
    modal.style.top = '12%'
    modal.style.width = "70%";
    modalTitle.innerHTML = loc_70_infowindow.content
    lastSelectedPlace = "loc_70"
    loc_70_selected = true;



        } else {

          loc_70_linkURL();
          modal.style.display = "none";
            this.setOptions({
            fillColor: PolygonStyles["unselectedFillColor"],
            strokeColor: PolygonStyles["unselectedStrokeColor"]
            })
          loc_70_selected = false
        }



    }
      
  })






}


}

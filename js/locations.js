var polyList = []

    var loc_0 = L.polygon([[32.10,-96.4],[31,-96.4],[31,-97.85],[32.10,-97.85],[32.10,-96.4]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Waco, TX</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Waco area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-waco.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_0)

    var loc_1 = L.polygon([[44.1,-76.05],[44.1,-75.64],[43.93,-75.64],[43.93,-76.05],[44.1,-76.05]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Watertown, NY</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Watertown area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-watertown.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_1)
	
    var loc_2 = L.polygon([[47.50,-57.3],[47.50,-59.6],[48.9,-59.6],[48.9,-57.3],[47.50,-57.3]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Western Newfoundland</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from Western Newfoundland.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-western-newfoundland.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_2)
	
    var loc_4 = L.polygon([[40.5,-82],[41.5,-82],[41.5,-81],[40.5,-81],[40.5,-82]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Akron-Canton, OH</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Akron-Canton area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-akron-canton.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_4)
	
    var loc_5 = L.polygon([[29.5,-98.5],[31,-98.5],[31,-97],[29.5,-97],[29.5,-98.5]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Austin, TX</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Austin area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-austin.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_5)
	
    var loc_6 = L.polygon([[45.5,-69.50],[45.5,-68],[44.50,-68],[44.50,-69.50],[45.5,-69.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Bangor, ME</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Bangor area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-bangor.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_6)

    var loc_8 = L.polygon([[46.99,-66.0],[48.0,-66.0],[48.0,-65.0],[46.99,-65.0],[46.99,-66.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Bathurst, NB</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Bathurst area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-bathurst.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_8)
	
    var loc_9 = L.polygon([[41.50,-73.50],[45.0,-73.50],[45.0,-70.0],[41.50,-70.0],[41.50,-73.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Boston, MA</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Boston area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-boston.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_9)

    var loc_11 = L.polygon([[36.9,-89],[36.9,-90.1],[37.75,-90.1],[37.75,-89],[36.9,-89]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Cape Girardeau, MO</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Cape Girardeau area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-cape.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_11)
	
    var loc_12 = L.polygon([[37.56,-89.42],[37.95,-89.42],[37.95,-88.75],[37.56,-88.75],[37.56,-89.42]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Carbondale, IL</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Carbondale area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-carbondale.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_12)

    var loc_14 = L.polygon([[40.0,-89.0],[42.50,-89.0],[42.50,-86.50],[40.0,-86.50],[40.0,-89.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Chicago, IL</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Chicago area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-chicago.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_14)
	
    var loc_15 = L.polygon([[38.50,-85.50],[40.0,-85.50],[40.0,-84.0],[38.50,-84.0],[38.50,-85.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Cincinnati, OH</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Cincinnati area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-cincinnati.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_15)
	
    var loc_16 = L.polygon([[41.99,-82.50],[41.99,-80.99],[41,-80.99],[41,-82.50],[41.99,-82.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Cleveland, OH</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Cleveland area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-cleveland.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_16)
	
    var loc_17 = L.polygon([[40.50,-84.0],[40.50,-82.50],[39.50,-82.50],[39.50,-84.0],[40.50,-84.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Columbus, OH</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Columbus area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-columbus.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_17)

    var loc_19 = L.polygon([[33.99,-97],[33.99,-95.50],[32,-95.50],[32,-97],[33.99,-97]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Dallas, TX</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Dallas area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-dallas.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_19)
	
    var loc_20 = L.polygon([[39.3,-83.5],[39.3,-84.99],[39.50,-84.99],[40.50,-84.99],[40.50,-83.50],[39.50,-83.50],[39.3,-83.5]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Dayton, OH</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Dayton area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-dayton.html','_blank');  
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_20)
	
    var loc_21 = L.polygon([[42.99,-84.0],[42.99,-81.99],[41.50,-81.99],[41.50,-84.0],[42.99,-84.0]])
    .addTo(map)	
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Detroit, MI</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Detroit area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-detroit.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_21)
	
     var loc_22 = L.polygon([[23,-106.0],[24.99,-106.0],[24.99,-103.99],[23,-103.99],[23,-106.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Durango, Mexico</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Durango area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-durango.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_22)
	
    var loc_23 = L.polygon([[45.30,-59.3],[45.30,-62.4],[47.85,-62.4],[47.85,-59.3],[45.30,-59.3]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Eastern Nova Scotia</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from Eastern Nova Scotia.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-eastern-nova-scotia.html','_blank'); 
        map.closePopup();
    })
	.setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_23)
	
	var loc_55 = L.polygon([[41.5,-81.5],[41.5,-79.5],[40,-79.5],[40,-81.5],[41.5,-81.5]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Pittsburgh, PA</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Pittsburgh area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-pittsburgh.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_55)		
	
    var loc_24 = L.polygon([[38.50,-89.0],[39.50,-89.0],[39.50,-88.0],[38.50,-88.0],[38.50,-89.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Effingham, IL</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Effingham area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-effingham.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_24)
	
    var loc_25 = L.polygon([[41.50,-80.5],[42.50,-80.5],[42.50,-79.50],[41.50,-79.50],[41.50,-80.5]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Erie, PA</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Erie area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-erie.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_25)

    var loc_27 = L.polygon([[38.50,-87.33],[38.50,-86.50],[37.50,-86.50],[37.50,-87.33],[38.50,-87.33]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Owensboro, KY</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Owensboro area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-owensboro.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_27)
	
   var loc_28 = L.polygon([[36.0,-95.50],[36.0,-93.50],[34.50,-93.50],[34.50,-95.50],[36.0,-95.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Fort Smith, AR</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Fort Smith area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-fort-smith.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_28)
	
    var loc_29 = L.polygon([[33.99,-98.5],[33.99,-97],[32,-97],[32,-98.5],[33.99,-98.5]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Fort Worth, TX</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Fort Worth area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-fort-worth.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_29)

    var loc_31 = L.polygon([[46.50,-67.50],[46.50,-66.0],[45.5,-66.0],[45.5,-67.50],[46.50,-67.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Fredericton, NB</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Fredericton area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-fredericton.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_31)
	
    var loc_32 = L.polygon([[41.50,-85.99],[41.50,-84.50],[40.50,-84.50],[40.50,-85.99],[41.50,-85.99]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Ft. Wayne, IN</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Ft. Wayne area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-ft-wayne.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_32)
	
    var loc_33 = L.polygon([[49.50,-55.50],[49.50,-53.5],[48.50,-53.5],[48.50,-55.50],[49.50,-55.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Gander, NL</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Gander area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-gander.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_33)
	
    var loc_34 = L.polygon([[44.0,-65.50],[46.99,-65.50],[46.99,-62.5],[44.0,-62.5],[44.0,-65.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Halifax, NS</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Halifax area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-halifax.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_34)
	
    var loc_35 = L.polygon([[31.0,-98.0],[31.0,-94],[28.50,-94],[28.50,-98.0],[31.0,-98.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Houston, TX</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Houston area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-houston.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_35)
	
    var loc_36 = L.polygon([[40.50,-87.50],[40.50,-85],[38.50,-85],[38.50,-87.50],[40.50,-87.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Indianapolis, IN</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Indianapolis area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-indianapolis.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_36)
	
    var loc_37 = L.polygon([[36.5,-92.0],[36.5,-89.5],[35.0,-89.5],[35.0,-92.0],[36.5,-92.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Jonesboro, AR</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Jonesboro area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-jonesboro.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_37)
	
    var loc_38 = L.polygon([[41,-86.99],[41,-85.50],[40.0,-85.50],[40.0,-86.99],[41,-86.99]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Kokomo, IN</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Kokomo area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-kokomo.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_38)
	
    var loc_39 = L.polygon([[34,-93.5],[35.5,-93.5],[35.5,-91.5],[34,-91.5],[34,-93.5]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Little Rock, AR</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Little Rock area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-little-rock.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_39)
	
    var loc_40 = L.polygon([[43.50,-81.99],[43.50,-80.5],[42.50,-80.5],[42.50,-81.99],[43.50,-81.99]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>London, ON</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the London area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-london.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_40)
	
    var loc_41 = L.polygon([[39.0,-86.50],[39.0,-85],[37.99,-85],[37.99,-86.50],[39.0,-86.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Louisville, KY</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Louisville area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-louisville.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_41)
	
    var loc_42 = L.polygon([[46,-67.2],[46,-68.65],[47.25,-68.65],[47.25,-67.2],[46,-67.2]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Maine</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from Maine.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-maine.html','_blank');  
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_42)
	
    var loc_43 = L.polygon([[23.99,-107.0],[23.99,-104.99],[22.50,-104.99],[22.50,-107.0],[23.99,-107.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Mazatlan, Mexico</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Mazatlan area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-mazatlan.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_43)
	
    var loc_44 = L.polygon([[36.0,-91.50],[36.0,-89.5],[34.50,-89.5],[34.50,-91.50],[36.0,-91.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Memphis, TN</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Memphis area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-memphis.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_44)
	
    var loc_45 = L.polygon([[26.70,-102.0],[27.5,-102.0],[27.5,-101.0],[26.70,-101.0],[26.70,-102.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Monclova, Mexico</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Monclova area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-monclova.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_45)
	
    var loc_46 = L.polygon([[46.99,-66.0],[46.99,-63.50],[45.5,-63.50],[45.5,-66.0],[46.99,-66.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Moncton, NB</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Moncton area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-moncton.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_46)
	
    var loc_47 = L.polygon([[46.50,-75.0],[46.50,-71.99],[44.50,-71.99],[44.50,-75.0],[46.50,-75.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Montreal, QC</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Montreal area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-montreal.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_47)
	
    var loc_48 = L.polygon([[36.99,-89.99],[36.99,-85.99],[35.50,-85.99],[35.50,-89.99],[36.99,-89.99]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Nashville, TN</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Nashville area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-nashville.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_48)
	
    var loc_49 = L.polygon([[44.0,-72.50],[45.99,-72.50],[45.99,-70.50],[44.0,-70.50],[44.0,-72.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>New Hampshire</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from New Hampshire.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-new-hampshire.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_49)
	
    var loc_50 = L.polygon([[40.0,-76],[44.0,-76],[44.0,-71.99],[40.0,-71.99],[40.0,-76]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>New York City, NY</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the New York City area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-new-york.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_50)
	
    var loc_51 = L.polygon([[36.99,-98.0],[36.99,-96.75],[34.50,-96.75],[34.50,-98.0],[36.99,-98.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Oklahoma City, OK</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Oklahoma City area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-oklahoma-city.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_51)
	
    var loc_52 = L.polygon([[44.50,-76.50],[45.99,-76.50],[45.99,-75.0],[44.50,-75.0],[44.50,-76.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Ottawa, ON</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Ottawa area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-ottawa.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_52)
	
    var loc_53 = L.polygon([[36.5,-89.0],[37.50,-89.0],[37.50,-88.0],[36.5,-88.0],[36.5,-89.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Paducah, KY</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Paducah area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-paducah.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_53)
	
    var loc_54 = L.polygon([[29.50,-102.0],[29.50,-99.50],[27.99,-99.50],[27.99,-102.0],[29.50,-102.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Piedras Negras, Mexico</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Piedras Negras area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-piedras-negras.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_54)

    var loc_57 = L.polygon([[46.99,-72.50],[46.99,-69.50],[45.99,-69.50],[45.99,-72.50],[46.99,-72.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Quebec City, QC</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Quebec City area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-quebec.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_57)
	
    var loc_58 = L.polygon([[43.50,-78.50],[43.50,-76.99],[42.50,-76.99],[42.50,-78.50],[43.50,-78.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Rochester, NY</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Rochester area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-rochester.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_58)
	
    var loc_59 = L.polygon([[45.99,-67],[45.99,-65.50],[45.0,-65.50],[45.0,-67],[45.99,-67]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Saint John, NB</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Saint John area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-saint-john.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_59)
	
    var loc_60 = L.polygon([[30.0,-99.50],[30.0,-97.50],[28.50,-97.50],[28.50,-99.50],[30.0,-99.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>San Antonio, TX</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the San Antonio area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-san-antonio.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_60)
	
    var loc_61 = L.polygon([[32.99,-94.99],[32.99,-93.0],[32,-93.0],[32,-94.99],[32.99,-94.99]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Shreveport, LA</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Shreveport area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-shreveport.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_61)
	
    var loc_62 = L.polygon([[48.50,-54.50],[48.50,-52.0],[46.99,-52.0],[46.99,-54.50],[48.50,-54.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>St. John's, NL</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the St. John's area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-st-johns.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_62)
	
    var loc_63 = L.polygon([[39.0,-90.99],[39.0,-89.0],[37.99,-89.0],[37.99,-90.99],[39.0,-90.99]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>St. Louis, MO</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the St. Louis area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-st-louis.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_63)
	
    var loc_65 = L.polygon([[43.50,-76.99],[43.50,-75.50],[42.50,-75.50],[42.50,-76.99],[43.50,-76.99]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Syracuse, NY</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Syracuse area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-syracuse.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_65)
	
    var loc_66 = L.polygon([[33.99,-94.99],[33.99,-93.0],[32.99,-93.0],[32.99,-94.99],[33.99,-94.99]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Texarkana, TX</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Texarkana area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-texarkana.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_66)
	
    var loc_67 = L.polygon([[41,-84.0],[41.99,-84.0],[41.99,-83.0],[41,-83.0],[41,-84.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Toledo, OH</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Toledo area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-toledo.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_67)
	
    var loc_68 = L.polygon([[44.5,-81],[44.5,-78],[42.5,-78],[42.5,-81],[44.5,-81]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Toronto-Hamilton, ON</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Toronto-Hamilton area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-toronto-hamilton.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_68)
	
    var loc_69 = L.polygon([[27.0,-104.99],[27.0,-102.0],[24.99,-102.0],[24.99,-104.99],[27.0,-104.99]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Torreon, Mexico</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Torreon area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-torreon.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_69)
	
    var loc_70 = L.polygon([[36.99,-96.75],[36.99,-94],[34.50,-94],[34.50,-96.75],[36.99,-96.75]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Tulsa, OK</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Tulsa area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-tulsa.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_70)
	
    var loc_71 = L.polygon([[31.50,-95.99],[32.99,-95.99],[32.99,-94.50],[31.50,-94.50],[31.50,-95.99]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Tyler, TX</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Tyler area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-tyler.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_71)
	
    var loc_72 = L.polygon([[43.50,-76],[43.50,-75.0],[42.99,-75.0],[42.99,-76],[43.50,-76]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Utica-Rome, NY</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Utica-Rome area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-utica-rome.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_72)

    var loc_73 = L.polygon([[45.5,-74.0],[45.5,-71.0],[42.99,-71.0],[42.99,-74.0],[45.5,-74.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Vermont</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from Vermont.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-vermont.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_73)

    var loc_3 = L.polygon([[41.50,-81.50],[41.50,-80.0],[40.50,-80.0],[40.50,-81.50],[41.50,-81.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Youngstown, OH</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Youngstown area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-youngstown.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_3)

    var loc_74 = L.polygon([[38.45,-87.8],[38.9,-87.8],[38.9,-87.1],[38.45,-87.1],[38.45,-87.8]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Vincennes, IN</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Vincennes area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-vincennes.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_74)
	
var loc_75 = L.polygon([[44.35,-73.75],[45.0,-73.75],[45.0,-73.34],[44.35,-73.34],[44.35,-73.75]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Plattsburgh, NY</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Plattsburgh area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-plattsburgh.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_75)


// These location squares had other locations on top of them
// which made it impossible to select
// I'm moving them down here so they are fully selectable.


     var loc_26 = L.polygon([[38.50,-88.0],[38.50,-87.33],[37.50,-87.33],[37.50,-88.0],[38.50,-88.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Evansville, IN</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Evansville area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-evansville.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_26)

    var loc_13 = L.polygon([[46.99,-65.0],[46.99,-62.5],[45.99,-62.5],[45.99,-65.0],[46.99,-65.0]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Charlottetown, PEI</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Charlottetown area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-charlottetown.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_13)

    var loc_7 = L.polygon([[44.28,-72.6],[44.28,-72.44],[44.15,-72.44],[44.15,-72.6],[44.28,-72.6]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Barre, VT</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Barre area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-barre.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_7)    

/*
    var loc_64 = L.polygon([[42.97,-76.3],[43.16,-76.3],[43.16,-76],[42.97,-76],[42.97,-76.3]])
    .addTo(map)
    .bindPopup("<b>Syracuse detail</b></br><p>Click this square on the map to view the page about Syracuse detail.")
    .on('click', function() {
        window.open('https://www.google.com','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_64)
*/

    var loc_10 = L.polygon([[43.50,-79.50],[43.50,-77.99],[42.50,-77.99],[42.50,-79.50],[43.50,-79.50]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Buffalo, NY</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Buffalo area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-buffalo.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_10)

    var loc_30 = L.polygon([[40.24,-86.57],[40.31,-86.57],[40.31,-86.47],[40.24,-86.47],[40.24,-86.57]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Frankfort, IN</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Frankfort area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-frankfort.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_30)

    var loc_18 = L.polygon([[39.99,-86.95],[40.09,-86.95],[40.09,-86.84],[39.99,-86.84],[39.99,-86.95]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Crawfordsville, IN</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Crawfordsville area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-crawfordsville.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_18)

    var loc_56 = L.polygon([[44.35,-73.34],[45.0,-73.34],[45.0,-72.8],[44.35,-72.8],[44.35,-73.34]])
    .addTo(map)
    .bindPopup("<div style=\"color:blue;font-family:'Gill Sans', sans-serif;\"><b><big>Burlington, VT</big></b></div></br><div style=\"font-family:'Verdana', sans-serif;\"><small>Click this map region for information on viewing<br>the 2024 eclipse from the Burlington area.</small></div>")
    .on('click', function() {
        window.open('/eclipse_cities/blog-posts/what-will-the-2024-total-solar-eclipse-look-like-from-burlington.html','_blank'); 
        map.closePopup();
    })
    .setStyle(
    {
      fillColor: PolygonStyles['unselectedFillColor'],
      color: PolygonStyles['unselectedStrokeColor']
    });
    polyList.push(loc_56)

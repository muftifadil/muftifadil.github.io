// ========================= config section =================================
var url = 'http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/ows?';
var featureNS = 'http://petakampus';
var infoFormat = 'application/vnd.ogc.gml/3.1.1'; // can also be 'text/html'
var view = new ol.View({
    center: ol.proj.transform([110.3753791, -7.7698986], 'EPSG:4326', 'EPSG:3857'),
    zoom: 15.5
});
// =========================================================================
    
// Base Map -------------------------------------
var baseLayer = new ol.layer.Group({
    title: 'Base Layers',
    openInLayerSwitcher: true,
    layers:[
        new ol.layer.Tile({
            title: 'Bing Road',
            baseLayer: true,
            visible: true,
            source: new ol.source.BingMaps({
                key: 'Ai7KjNsOgB3UHWH9wU8i9H1DuJzD-x57gB8fYEs1nfjZFAVJvnKqueUXOeJnhBR4',
                imagerySet: 'Road'
            })
        }),
        new ol.layer.Tile({
            title: "Carto",
            baseLayer: true,
            visible: false,
            source: new ol.source.XYZ({
                attributions: [ "&copy; <a href='https://carto.com/attribution/'>CARTO</a>" ],
                url: 'http://s.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        }),
        new ol.layer.Tile({
            title: "UGM",
            baseLayer: false,
            visible: false,
            source: new ol.source.TileWMS({
                attributions: [ "&copy; <a href='https://ugm.ac.id/'>Universitas Gadjah Mada</a>","&copy; <a>Geopotret</a>"  ],
                url: 'http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wms',
                params: {
                    'LAYERS': 'petakampus:basemap_ugm',
                    'TILED': true
                },
                serverType: 'geoserver',
                transition: 0
            })
        })
    ]
});

//Additional layer-------------------------------
var dataLayer = new ol.layer.Group({
    title: 'Data',
    zIndex: 2,
    openInLayerSwitcher: true,
    layers:[
        halte = new ol.layer.Tile({
            title: 'Halte',
            img: "http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wms?service=WMS&REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=40&HEIGHT=28&LAYER=petakampus:halte&TRANSPARENT=true",
            visible: false,
            zIndex: 1,
            source: new ol.source.TileWMS({
                url: url,
                params: {
                    'LAYERS': 'petakampus:halte',
                    'TILED': true
                },
                serverType: 'geoserver',
                crossOrigin: 'anonymous',
                transition: 0
            })
        }),			
        new ol.layer.Tile({
            title: 'Water Dispenser',
            img: "http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wms?service=WMS&REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=40&HEIGHT=28&LAYER=petakampus:air_bersih&TRANSPARENT=true",
            visible: false,
            zIndex: 1,
            source: new ol.source.TileWMS({
                url: url,
                params: {
                    'LAYERS': 'petakampus:air_bersih',
                    'TILED': true
                },
                serverType: 'geoserver',
                crossOrigin: 'anonymous',
                transition: 0
            })
        }),
        new ol.layer.Tile({
            title: 'Kafetaria',
            img: "http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wms?service=WMS&REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=40&HEIGHT=28&LAYER=petakampus:kantin&TRANSPARENT=true",
            visible: false,
            zIndex: 1,
            source: new ol.source.TileWMS({
                url: url,
                params: {
                    'LAYERS': 'petakampus:kantin',
                    'TILED': true
                },
                serverType: 'geoserver',
                crossOrigin: 'anonymous',
                transition: 0
            })
        }),
        new ol.layer.Tile({
            title: 'Layanan Kesehatan',
            img: "http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wms?service=WMS&REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=40&HEIGHT=28&LAYER=petakampus:layanan_kesehatan&TRANSPARENT=true",
            visible: false,
            zIndex: 1,
            source: new ol.source.TileWMS({
                url: url,
                params: {
                    'LAYERS': 'petakampus:layanan_kesehatan',
                    'TILED': true
                },
                serverType: 'geoserver',
                crossOrigin: 'anonymous',
                transition: 0
            })
        }),
        new ol.layer.Group({ title: 'Luasan', openInLayerSwitcher: false, visible: true, layers: [
            new ol.layer.Tile({
                title: 'Danau',
                img: "http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wms?service=WMS&REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=40&HEIGHT=28&LAYER=petakampus:danau&TRANSPARENT=true",
                visible: true,
                zIndex: 1,
                source: new ol.source.TileWMS({
                    url: url,
                    params: {
                        'LAYERS': 'petakampus:danau',
                        'TILED': true
                    },
                    serverType: 'geoserver',
                    crossOrigin: 'anonymous',
                    transition: 0
                })
            }),
            new ol.layer.Tile({
                title: 'Hutan',
                img: "http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wms?service=WMS&REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=40&HEIGHT=28&LAYER=petakampus:hutan&TRANSPARENT=true",
                visible: true,
                zIndex: 1,
                source: new ol.source.TileWMS({
                    url: url,
                    params: {
                        'LAYERS': 'petakampus:hutan',
                        'TILED': true
                    },
                    serverType: 'geoserver',
                    crossOrigin: 'anonymous',
                    transition: 0
                })
            }),
            new ol.layer.Tile({
                title: 'Lapangan',
                img: "http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wms?service=WMS&REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=40&HEIGHT=28&LAYER=petakampus:lapangan&TRANSPARENT=true",
                visible: true,
                zIndex: 1,
                source: new ol.source.TileWMS({
                    url: url,
                    params: {
                        'LAYERS': 'petakampus:lapangan',
                        'TILED': true
                    },
                    serverType: 'geoserver',
                    crossOrigin: 'anonymous',
                    transition: 0
                })
            })
        ]}),
        new ol.layer.Group({ title: 'Parkir', openInLayerSwitcher: false, visible: true, layers: [
            new ol.layer.Tile({
                title: 'Parkir Mobil',
                img: "http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wms?service=WMS&REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=40&HEIGHT=28&LAYER=petakampus:parkir_mobil&TRANSPARENT=true&RULE=mobil_umum",
                visible: false,
                zIndex: 1,
                source: new ol.source.TileWMS({
                    url: url,
                    params: {
                        'LAYERS': 'petakampus:parkir_mobil',
                        'TILED': true
                    },
                    serverType: 'geoserver',
                    crossOrigin: 'anonymous',
                    transition: 0
                })
            }),
            new ol.layer.Tile({
                title: 'Parkir Motor',
                img: "http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wms?service=WMS&REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=40&HEIGHT=28&LAYER=petakampus:parkir_motor&TRANSPARENT=true&RULE=motor_umum ",
                visible: false,
                zIndex: 1,
                source: new ol.source.TileWMS({
                    url: url,
                    params: {
                        'LAYERS': 'petakampus:parkir_motor',
                        'TILED': true
                    },
                    serverType: 'geoserver',
                    crossOrigin: 'anonymous',
                    transition: 0
                })
            })
        ]}),
        new ol.layer.Tile({
            title: 'Pos Keamanan',
            img: "http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wms?service=WMS&REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=40&HEIGHT=28&LAYER=petakampus:pos_keamanan&TRANSPARENT=true",
            visible: false,
            zIndex: 1,
            source: new ol.source.TileWMS({
                url: url,
                params: {
                    'LAYERS': 'petakampus:pos_keamanan',
                    'TILED': true
                },
                serverType: 'geoserver',
                crossOrigin: 'anonymous',
                transition: 0
            })
        }),
        new ol.layer.Tile({
            title: 'Sepeda Kampus',
            img: "http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wms?service=WMS&REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=40&HEIGHT=28&LAYER=petakampus:sepeda_kampus&TRANSPARENT=true",
            visible: false,
            zIndex: 1,
            source: new ol.source.TileWMS({
                url: url,
                params: {
                    'LAYERS': 'petakampus:sepeda_kampus',
                    'TILED': true
                },
                serverType: 'geoserver',
                crossOrigin: 'anonymous',
                transition: 0
            })
        }),
        new ol.layer.Tile({
            title: 'Masjid/Mushola',
            img: "http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wms?service=WMS&REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=40&HEIGHT=28&LAYER=petakampus:tempat_ibadah&TRANSPARENT=true",
            visible: false,
            zIndex: 1,
            source: new ol.source.TileWMS({
                url: url,
                params: {
                    'LAYERS': 'petakampus:tempat_ibadah',
                    'TILED': true
                },
                serverType: 'geoserver',
                crossOrigin: 'anonymous',
                transition: 0
            })
        }),
        new ol.layer.Tile({
            title: 'Bangunan',
            img: "http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wms?service=WMS&REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=40&HEIGHT=28&LAYER=petakampus:bangunan&TRANSPARENT=true&STYLE=petakampus:bang",
            source: new ol.source.TileWMS({
                attributions: [ "&copy; <a href='https://ugm.ac.id/'>Universitas Gadjah Mada</a>"],
                url: url,
                params: {
                    'LAYERS': 'petakampus:bangunan',
                    'TILED': true
                },
                serverType: 'geoserver',
                crossOrigin: 'anonymous',
                transition: 0,
            })
        })
    ]
});

// The Map --------------------------------
var map = new ol.Map({
    target: 'map',
    layers: [baseLayer, dataLayer],
    view: view,
    controls: ol.control.defaults().extend([
          new ol.control.FullScreen()
    ])
});

//Layer Switcher------------------------------------------------------
// Add a layer switcher outside the map
var switcher = new ol.control.LayerSwitcher({
    target: $(".layerSwitcher").get(0),
    // displayInLayerSwitcher: function (l) { return false; },
    show_progress: true,
    extent: false,
    reordering: false,
    trash: false
});
// Add a new button to the list 
switcher.on('drawlist', function(e) {
    var layer = e.layer;
    var imgSource = layer.get('img');
    $('<img class="layer-icon">').attr("src", imgSource)
    .appendTo($('> .ol-layerswitcher-buttons', e.li));
});
map.addControl(switcher);

//POPUP--------------------------------------------------------
var popup = new ol.Overlay.Popup ({	
    popupClass: "default anim", //"tooltips", "warning" "black" "default", "tips", "shadow",
    closeBox: false,
    onclose: function(){
        identifySelect.setSource(blankSource);
    },
    positioning: "bottom-center",
    autoPan: true,
    autoPanMargin: 20,
    autoPanAnimation: { duration: 100 }
});
map.addOverlay(popup);

//geolocation-----------------------------------------------
var geoLayer
var geolocationOn = function(){
    var geolocation = new ol.Geolocation({
        projection: map.getView().getProjection(),
        tracking: true,
        trackingOptions: {
            enableHighAccuracy: true,
            maximumAge: 5000
        }
    });
    // handle geolocation error.
    geolocation.on('error', function () {
        alert("Geolocation Error");
    });

    //add the feature
    var accuracyFeature = new ol.Feature();
    geolocation.on('change:accuracyGeometry', function () {
        accuracyFeature.setGeometry(geolocation.getAccuracyGeometry());
    });
    var positionFeature = new ol.Feature();
    positionFeature.setStyle(new ol.style.Style({
        image: new ol.style.Circle({
            radius: 6,
            fill: new ol.style.Fill({
                color: '#3399CC'
            }),
            stroke: new ol.style.Stroke({
                color: '#fff',
                width: 2
            })
        })
    }));

    geolocation.on('change:position', function () {
        var coordinates = geolocation.getPosition();
        positionFeature.setGeometry(coordinates ?
            new ol.geom.Point(coordinates) : null);
        view.animate({
            center: coordinates,
            zoom: 17,
            duration: 1000
        });
        geolocation.setTracking(false);
    });
    // add to vector layer
    geoLayer = new ol.layer.Vector({
        displayInLayerSwitcher: false,
        source: new ol.source.Vector({
            features: [accuracyFeature, positionFeature]
        })
    });
    map.addLayer(geoLayer);
};
var geolocationOff = function(){
    map.removeLayer(geoLayer);
};


//IDENTIFY----------------------------------------------
var blankSource = new ol.source.Vector();
var highlight = new ol.layer.Vector({
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: [255, 0, 0],
            width: 3
        })
    }),
    source: new ol.source.Vector(),
    displayInLayerSwitcher: false
});
map.addLayer(highlight);

var identifySelect =  new ol.layer.Vector({
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(255, 0, 0, 1.0)',
            width: 2
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255, 255, 0, 0.3)'
        })
    }),
    displayInLayerSwitcher: false
});

// register a single click listener on the map and show a popup based on WMS GetFeatureInfo
function wmsIdentify(event){
    // return only layers with ol.source.TileWMS
    var wmsLayerSource = map.forEachLayerAtPixel(event.pixel, function (layer) {
        var source = layer.getSource();
        if (source instanceof ol.source.TileWMS) {
            return layer;
        }
    });
    var resolution = map.getView().getResolution();
    var url = wmsLayerSource.getSource().getGetFeatureInfoUrl(
        event.coordinate, resolution, 'EPSG:3857',
        { 'INFO_FORMAT': 'text/html' });
    if (url) {
        fetch(url)
        .then((response) => response.text())
        .then((html) => {
            popup.show(event.coordinate, html);
        });
    } else {
        popup.hide();
    }
    
    // highlight using wfs get
    var coord = event.coordinate;
    var lat = coord[1];
    var lon = coord[0];
    var cqlUrl ='http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wfs?service=WFS&' +
    'version=1.1.0&request=GetFeature&typename=petakampus:bangunan&' +
    'CQL_FILTER=CONTAINS(geom,Point(' + lon + '%20' + lat + '))&'+
    'outputFormat=application/json&srsname=EPSG:3857&';
    console.log(cqlUrl);
    // var identify = new ol.layer.Vector({
    var source =  new ol.source.Vector({
        loader: function (extent) {
            $.ajax({
                url: cqlUrl,
                type: "GET",
            }).done(function (response) {
                feature = new ol.format.GeoJSON().readFeatures(response);
                source.addFeatures(feature);
            });
        },
        strategy: ol.loadingstrategy.bbox,
        projection: 'EPSG:3857'
    });
    identifySelect.setSource(source);
};

//autocomplete search-----------------------------
$("#autocomplete_search").autocomplete({
    minLength: 1,
    source: addressSource,
    select: addressSelect
});

function viewparamsToStr(obj) {
    var str = '';
    $.each(obj, function (k, v) {
        str.length && (str += ';');
        str += k + ':' + v;
    });
    return str;
};

function addressSource(requestString, responseFunc) {
    var querystr = requestString.term.replace(/[^0-9a-zA-Z ]/g, "");
    if (querystr.length == 0) {
        response([]);
        return;
    }
    var viewParamsStr = viewparamsToStr({
        query: querystr
    });
    var wfsParams = {
        service: 'WFS',
        version: '2.0.0',
        request: 'GetFeature',
        typeName: 'petakampus:search_bangunan',
        outputFormat: 'application/json',
        srsname: 'EPSG:3857',
        viewparams: viewParamsStr
    };
    $.ajax({
        url: url,
        data: wfsParams,
        type: "GET",
        dataType: "json",
        success: function (data, status, xhr) {
            var geojson = new ol.source.Vector({
                features: new ol.format.GeoJSON().readFeatures(data)
            });
            var arr = [];
            geojson.forEachFeature(function (feat) {
                arr.push({
                    label: feat.get("lokasi"),
                    value: feat.get("lokasi"),
                    feature: feat
                });
            })
            responseFunc(arr);
        }
    });
};

function addressSelect(event, ui) {
    var view = map.getView();
    var feat = ui.item.feature;
    var geom = feat.getGeometry();
    view.animate({
        center: geom.getFirstCoordinate(),
        zoom: 18,
        duration: 1000
    });

    var markerSource = highlight.getSource();
    markerSource.clear();
    markerSource.addFeature(feat);
};

$("#clr-search").click(function(){
    highlight.getSource().clear();
    $("#autocomplete_search").val('');
});

//MEASURE FUNCTION--------------------------------
var measureSource = new ol.source.Vector();
var measureLayer = new ol.layer.Vector({
    source: measureSource,
    style: new ol.style.Style({
        fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new ol.style.Stroke({
        color: '#ffcc33',
        width: 2
        }),
        image: new ol.style.Circle({
        radius: 7,
        fill: new ol.style.Fill({
            color: '#ffcc33'
        })
        })
    }),
    displayInLayerSwitcher: false
});
map.addLayer(measureLayer);
var draw; // global so we can remove it later
function measure(jenis) {
  var sketch;
  var helpTooltipElement;
  var helpTooltip;
  var measureTooltipElement;
  var measureTooltip;

  var continuePolygonMsg = 'Click to continue drawing the polygon';
  var continueLineMsg = 'Click to continue drawing the line';

  var pointerMoveHandler = function (event) {
    if (event.dragging) {
      return;
    }

    var helpMsg = 'Click to start drawing';

    if (sketch) {
      var geom = (sketch.getGeometry());
      if (geom instanceof ol.geom.Polygon) {
        helpMsg = continuePolygonMsg;
      } else if (geom instanceof ol.geom.LineString) {
        helpMsg = continueLineMsg;
      }
    }

    helpTooltipElement.innerHTML = helpMsg;
    helpTooltip.setPosition(event.coordinate);

    helpTooltipElement.classList.remove('hidden');
  };

  map.on('pointermove', pointerMoveHandler);

  map.getViewport().addEventListener('mouseout', function () {
    helpTooltipElement.classList.add('hidden');
  });

  //Format length output.
  var formatLength = function (line) {
    var length = Math.round(line.getLength() * 100) / 100;
    var output;
    if (length > 1000) {
      output = (Math.round(length / 1000 * 100) / 100) +
        ' ' + 'km';
    } else {
      output = (Math.round(length * 100) / 100) +
        ' ' + 'm';
    }
    return output;
  };

//Format area output.
  var formatArea = function (polygon) {
    var area = polygon.getArea();
    var output;
    if (area > 1000000) {
      output = (Math.round(area / 1000000 * 100) / 100) +
        ' ' + 'km<sup>2</sup>';
    } else {
      output = (Math.round(area * 100) / 100) +
        ' ' + 'm<sup>2</sup>';
    }
    return output;
  };

    var typeSelect = jenis;
  function addInteraction() {
    var type = (typeSelect == 'area' ? 'Polygon' : 'LineString');
    draw = new ol.interaction.Draw({
      source: measureSource,
      type: type,
      style: new ol.style.Style({
        fill: new ol.style.Fill({
          color: 'rgba(255, 255, 255, 0.2)'
        }),
        stroke: new ol.style.Stroke({
          color: 'rgba(0, 0, 0, 0.5)',
          lineDash: [10, 10],
          width: 2
        }),
        image: new ol.style.Circle({
          radius: 5,
          stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 0, 0.7)'
          }),
          fill: new ol.style.Fill({
            color: 'rgba(255, 255, 255, 0.2)'
          })
        })
      })
    });
    map.addInteraction(draw);

    createMeasureTooltip();
    createHelpTooltip();

    var listener;
    draw.on('drawstart',
      function (event) {
        sketch = event.feature;
        var tooltipCoord = event.coordinate;

        listener = sketch.getGeometry().on('change', function (event) {
          var geom = event.target;
          var output;
          if (geom instanceof ol.geom.Polygon) {
            output = formatArea(geom);
            tooltipCoord = geom.getInteriorPoint().getCoordinates();
          } else if (geom instanceof ol.geom.LineString) {
            output = formatLength(geom);
            tooltipCoord = geom.getLastCoordinate();
          }
          measureTooltipElement.innerHTML = output;
          measureTooltip.setPosition(tooltipCoord);
        });
      }, this);

    draw.on('drawend',
      function () {
        measureTooltipElement.className = 'tooltip tooltip-static';
        measureTooltip.setOffset([0, -7]);
        // unset sketch
        sketch = null;
        // unset tooltip so that a new one can be created
        measureTooltipElement = null;
        createMeasureTooltip();
        ol.Observable.unByKey(listener);
      }, this);
  }

  /**
   * Creates a new help tooltip
   */
  function createHelpTooltip() {
    if (helpTooltipElement) {
      helpTooltipElement.parentNode.removeChild(helpTooltipElement);
    }
    helpTooltipElement = document.createElement('div');
    helpTooltipElement.className = 'tooltip hidden';
    helpTooltip = new ol.Overlay({
      element: helpTooltipElement,
      offset: [15, 0],
      positioning: 'center-left'
    });
    map.addOverlay(helpTooltip);
  }
  /**
   * Creates a new measure tooltip
   */
  function createMeasureTooltip() {
    if (measureTooltipElement) {
      measureTooltipElement.parentNode.removeChild(measureTooltipElement);
    }
    measureTooltipElement = document.createElement('div');
    measureTooltipElement.className = 'tooltip tooltip-measure';
    measureTooltip = new ol.Overlay({
      element: measureTooltipElement,
      offset: [0, -15],
      positioning: 'bottom-center'
    });
    map.addOverlay(measureTooltip);
  }
  map.removeInteraction(draw);
  addInteraction();
}

//ROUTING------------------------------------------
var routeOff;
function routeOn(){
    var startPoint = new ol.Feature();
      var destPoint = new ol.Feature();
    var viewTable;
    var helpMsg;
    var result;
    var feature = null;
    var startCoord;
    var destCoord;
    var helpTooltipElement;
    var helpTooltip;

    // The vector layer used to display the "start" and "destination" features.
    var vectorLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [startPoint, destPoint]
        }),
        displayInLayerSwitcher: false
    });

    var startStyle = new ol.style.Style({
        image: new ol.style.FontSymbol({
            form: "marker",
            radius: 15,
            offsetY: -15,
            fill: new ol.style.Fill({
                color: "#33cc33"
            }),
            stroke: new ol.style.Stroke({
                color: "black",
                width: 1
            })
        }),
    });
    startPoint.setStyle(startStyle);

    var stopStyle = new ol.style.Style({
        image: new ol.style.FontSymbol({
            form: "marker",
            radius: 15,
            offsetY: -15,
            fill: new ol.style.Fill({
                color: "red"
            }),
            stroke: new ol.style.Stroke({
                color: "black",
                width: 1
            })
        }),
    });
    destPoint.setStyle(stopStyle);
    map.addLayer(vectorLayer);

    // A transform function to convert coordinates from EPSG:3857
    // to EPSG:4326.
    var transform = ol.proj.getTransform('EPSG:3857', 'EPSG:4326');

    // Register a map click listener.
    var startListener = function(event){
        startPoint.setGeometry(new ol.geom.Point(event.coordinate));
        startCoord = transform(startPoint.getGeometry().getCoordinates());
        
        document.getElementById("startForm").value = startCoord[0].toFixed(5) +' , '+ startCoord[1].toFixed(5);
    };

    var destListener = function(event){
        destPoint.setGeometry(new ol.geom.Point(event.coordinate));
        destCoord = transform(destPoint.getGeometry().getCoordinates());
        document.getElementById("destForm").value = destCoord[0].toFixed(5) +' , '+ destCoord[1].toFixed(5);
    };
    

    $('#select1').on('change', function() {
        if (this.value == "jalan"){
            viewTable = 'petakampus:routing_walk'
        } else if (this.value == "sepeda"){
            viewTable = 'petakampus:routing_cycle'
        } else if (this.value == "motor"){
            viewTable = 'petakampus:routing_motor'
        } else if (this.value == "mobil"){
            viewTable = 'petakampus:routing_car'
        } else {
          alert ('Pilih moda transportasi')
        };				 
    });

    var routeListener = function () {
        map.removeLayer(result);
        var viewparams = [
            'x1:' + startCoord[0], 'y1:' + startCoord[1],
            'x2:' + destCoord[0], 'y2:' + destCoord[1]
        ];

        var viewParamsStr = viewparams.join(';');

        result = new ol.layer.Vector({
            source: new ol.source.Vector({
                loader: function (extent) {
                    $.ajax('http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wfs', {
                        type: 'GET',
                        data: {
                            service: 'WFS',
                            version: '2.0.0',
                            request: 'GetFeature',
                            typename: viewTable,
                            outputFormat: 'application/json',
                            viewparams: viewParamsStr
                        }
                    }).done(function (response) {
                        feature = new ol.format.GeoJSON().readFeatures(response);
                        result.getSource().addFeatures(feature);
                        routeInfo();
                    });
                },
                strategy: ol.loadingstrategy.bbox,
                projection: 'EPSG:3857',
                displayInLayerSwitcher: false
            })
        });
        result.setStyle(new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'rgba(255, 0, 0)',
                width: 5
            })
        }));
        
        map.addLayer(result);
        map.removeOverlay(helpTooltip);

        function routeInfo(){
            var time = 0;
            var dist = 0;
            feature.forEach(function(feature) {
                time += feature.get('time');
                dist += feature.get('distance');
            });
            var text = null;
            text = '<p>Jarak : <code>' + formatDist(dist) + '</code></p>';
            text += '<p>Estimasi Waktu Perjalanan: <code>' + formatTime(time) + '</code></p>';
            text += '<hr>';
            text = text.replace(/ /g, '&nbsp;');
            document.getElementById("result").innerHTML = text;
        }
    };

    var pointerMoveHandler = function (event) {
        helpTooltipElement.innerHTML = helpMsg;
        helpTooltip.setPosition(event.coordinate);
    }

    function createHelpTooltip() {
        $(".tooltip ").remove();
        helpTooltipElement = document.createElement('div');
        helpTooltipElement.className = 'tooltip';
        helpTooltip = new ol.Overlay({
            element: helpTooltipElement,
            offset: [15, 0],
            positioning: 'center-left'
        });
        map.addOverlay(helpTooltip);
    }
    routeOff = function(){
        startPoint.setGeometry(null);
        destPoint.setGeometry(null);
        startCoord = null;
        destCoord = null;
        $(".tooltip ").remove();
        map.removeLayer(result);
        map.un('click', startListener);
        map.un('click', destListener);
        popup.innerHTML = "";
        document.getElementById("select1").value = '0';
        document.getElementById("startForm").value = null;
        document.getElementById("destForm").value = null;
    };

    document.getElementById("startPoint").onclick = function () {
        helpMsg = 'Click to add Start point';
        createHelpTooltip();
        map.on('pointermove', pointerMoveHandler);
        map.on('click', startListener);
        map.un('click', destListener);
    };
    document.getElementById("destPoint").onclick = function () {
        helpMsg = 'Click to add Target point';
        map.un('click', startListener);
        map.on('click', destListener);
    };
    document.getElementById("calculateRoute").onclick = function () {
        map.un('click', startListener);
        map.un('click', destListener);
        routeListener();
    };
    document.getElementById("clearRoute").onclick = function () {
        routeOff();
        document.getElementById("result").innerHTML = "";
    }
};

function formatDist(dist) {
    var units;
    dist = Math.round(dist);
    if (dist > 1000) {
        dist = dist / 1000;
        units = 'km';
    } else {
        units = 'm';
    }

    // make sure distances like 5.0 appear as just 5
    dist = dist.toString().replace(/\.0$/, '');
    return dist + units;
}

function formatTime(time) {
    var mins = Math.round(time);
    if (mins == 0) {
        return 'less than a minute';
    } else if (mins == 1) {
        return '1 minute';
    } else {
        return mins + ' minutes';
    }
}

function routeIdentify() {
    map.on('click', function (event) {
        var pixel = map.getPixelFromCoordinate(event.coordinate);
        var feature = map.forEachFeatureAtPixel(pixel, function(feature, layer) {
            if (layer == result) {
                return feature;
            }
        })
        var text = null;
        if (feature) { 
            text = '<p>Distance: <code>' + formatDist(feature.get('distance')) + '</code></p>';
            text += '<p>Estimated travel time: <code>' + formatTime(feature.get('time')) + '</code></p>';
            text = text.replace(/ /g, '&nbsp;');
            
            popup.show(event.coordinate, text);	
        }
        else{
            popup.hide();
        }
    });
}
//display-hide
function routeOnOff() {
    var x = document.getElementById("routeInterface");
    var y = document.getElementById("routeMenu");
    var z = document.getElementById("btnInfo");
    if (x.style.display == "block") {
        x.style.display = "none";
        y.style.display = "block";
        routeOff();
        z.value = "Mulai"
    } else {
        x.style.display = "block";
        y.style.display = "none";
        routeOn();
        z.value = "Selesai"
    }
};

//The storymap----------------------------------------------------
var story = new ol.control.Storymap({
    html: document.getElementById('story')
});
map.addControl (story);
// Add placemark
var placemark = new ol.Overlay.Placemark();
map.addOverlay (placemark);

var batasFakultas =  new ol.layer.Vector({
    style: new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(255, 0, 0, 1.0)',
            width: 2
        }),
        fill: new ol.style.Fill({
            color: 'rgba(255, 0, 0, 0.3)'
        })
    }),
    displayInLayerSwitcher: false
});
map.addLayer(batasFakultas);

var positions = {
    Start : { xy: ol.proj.transform([110.3753791, -7.7698986], 'EPSG:4326', 'EPSG:3857'), z: 15 },
    Biologi : { xy: ol.proj.fromLonLat([110.3763, -7.7660]), z: 19, s:'Biologi' },
    FEB : { xy: ol.proj.fromLonLat([110.379130, -7.770602]), z: 19, s:'FEB' },
    Farmasi : { xy: ol.proj.fromLonLat([110.376707, -7.768657]), z: 18.5, s:'Farmasi' },
    Filsafat : { xy: ol.proj.fromLonLat([110.380842, -7.771227]), z: 20, s:'Filsafat' },
    Geografi : { xy: ol.proj.fromLonLat([110.377319, -7.766368]), z: 19, s:'Geografi' },
    Hukum : { xy: ol.proj.fromLonLat([110.381052, -7.770029]), z: 19, s:'Hukum' },
    FIB : { xy: ol.proj.fromLonLat([110.379072, -7.771936]), z: 19, s:'FIB' },
    Fisipol: { xy: ol.proj.fromLonLat([110.379701, -7.769584]), z: 19, s:'Fisipol' },
    FKG : { xy: ol.proj.fromLonLat([110.374155, -7.770327]), z: 19, s:'FKG' },
    FKH : { xy: ol.proj.fromLonLat([110.384391, -7.767433]), z: 19, s:'FKH' },
    FKKMK : { xy: ol.proj.fromLonLat([110.375330, -7.768758]), z: 18, s:'FKKMK' },
    Kehutanan : { xy: ol.proj.fromLonLat([110.380456, -7.767240]), z: 19, s:'Kehutanan' },
    MIPA : { xy: ol.proj.fromLonLat([110.376758, -7.767287]), z: 19, s:'MIPA' },
    Pertanian : { xy: ol.proj.fromLonLat([110.381566, -7.767893]), z: 18, s:'Pertanian' },
    Peternakan : { xy: ol.proj.fromLonLat([110.386511, -7.768371]), z: 19, s:'Peternakan' },
    Psikologi : { xy: ol.proj.fromLonLat([110.380151, -7.771983]), z: 19, s:'Psikologi' },
    Teknik : { xy: ol.proj.fromLonLat([110.372519, -7.765148]), z: 17, s:'Teknik' },
    FTP : { xy: ol.proj.fromLonLat([110.380108, -7.768455]), z: 19, s:'FTP' },
    Pascasarjana : { xy: ol.proj.fromLonLat([110.375577, -7.763724]), z: 19, s:'Pascasarjana' },
    Vokasi : { xy: ol.proj.fromLonLat([110.374000, -7.774533]), z: 18, s:'Vokasi' }
}

// fly to the chapter on the map
story.on('scrollto', function(e){
    $('#story .chapter').removeClass('select');
    $(e.element).addClass('select');
    map.getView().cancelAnimations();
    if (e.name==='Start') {
        placemark.hide();
        batasFakultas.getSource().clear();
        var cqlUrl ='http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wfs?service=WFS&' +
            'version=1.1.0&request=GetFeature&typename=petakampus:batas_fakultas&' +
            'CQL_FILTER=fakultas+ILIKE+%27%25'+positions[e.name].s +'%25%27&'+
            'outputFormat=application/json&srsname=EPSG:3857&';
        var source =  new ol.source.Vector({
            loader: function (extent) {
                $.ajax({
                    url: cqlUrl,
                    type: "GET",
                }).done(function (response) {
                    feature = new ol.format.GeoJSON().readFeatures(response);
                    source.addFeatures(feature);
                });
            },
            strategy: ol.loadingstrategy.bbox,
            projection: 'EPSG:3857'
        });
        batasFakultas.setSource(source);
        map.getView().animate ({
            center: positions[e.name].xy,
            zoom: positions[e.name].z
        })
    } else {
        placemark.show(positions[e.name].xy);
        cqlUrl ='http://geoportal.ppids.ft.ugm.ac.id/geoserver/petakampus/wfs?service=WFS&' +
            'version=1.1.0&request=GetFeature&typename=petakampus:batas_fakultas&' +
            'CQL_FILTER=fakultas+ILIKE+%27%25'+positions[e.name].s +'%25%27&'+
            'outputFormat=application/json&srsname=EPSG:3857&';
        source =  new ol.source.Vector({
            loader: function (extent) {
                $.ajax({
                    url: cqlUrl,
                    type: "GET",
                }).done(function (response) {
                    feature = new ol.format.GeoJSON().readFeatures(response);
                    source.addFeatures(feature);
                });
            },
            strategy: ol.loadingstrategy.bbox,
            projection: 'EPSG:3857'
        });
        batasFakultas.setSource(source);
        
        // Fly to destination
        var duration = 2000;
        map.getView().animate ({
            center: positions[e.name].xy,
            duration: duration
        });
        map.getView().animate ({
            zoom: Math.min(map.getView().getZoom(), positions[e.name].z)-1,
            duration: duration/2
        },{
            zoom: positions[e.name].z,
            duration: duration/2
        });
    };
});

$('#tour-btn').click(function(){
    var x = document.getElementById("story");
    if (x.style.display == "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
});
    
//CONTROLBAR---------------------------------------
// Main control bar
var mainbar = new ol.control.Bar();
map.addControl(mainbar);
mainbar.setPosition("top-left");

/* Nested toobar with one control activated at once */
var nested = new ol.control.Bar({ 
    toggleOne: false, 
    group: true 
});
mainbar.addControl(nested);

// Add selection tool
var selectCtrl = new ol.control.Toggle({
    html: '<i class="fas fa-mouse-pointer"></i>',
    className: "select",
    title: "Select",
    interaction: new ol.interaction.Select(),
    active: false,
    onToggle: function (active) {
        if (active) {	
            measureLayer.getSource().clear(true);
            $(".tooltip ").remove();
            map.removeInteraction(draw);
            sub1.deactivateControls();
            routeIdentify();
            map.on('singleclick', wmsIdentify);
            map.addLayer(identifySelect);
        } else{
            map.un('singleclick', wmsIdentify);
            identifySelect.setSource(blankSource);
            map.removeLayer(identifySelect);
        }
    }
});
nested.addControl(selectCtrl);

// Add measure tool
var sub1 = new ol.control.Bar(
    {
        toggleOne: true,
        controls: [
            new ol.control.Toggle({
                html: '<i class="fas fa-arrows-alt-h"></i>',
                title: "Distance",
                onToggle: function (active) {
                    if (active) {
                        measure('line');
                    }
                    else {
                        measureLayer.getSource().clear(true);
                        $(".tooltip ").remove();
                        map.removeInteraction(draw);
                    }
                }
            }),
            new ol.control.Toggle({
                html: '<i class="fas fa-draw-polygon"></i>',
                title: "Area",
                onToggle: function (active) {
                    if (active) {
                        measure('area');
                    }
                    else {
                        measureLayer.getSource().clear(true);
                        $(".tooltip ").remove();
                        map.removeInteraction(draw);
                    }
                }
            }),
            new ol.control.Button({
                html: '<i class="fas fa-times-circle"></i>',
                title: "Finish",
                autoActivate: true,
                handleClick: function () {
                    measureLayer.getSource().clear(true);
                    $(".tooltip ").remove();
                    map.removeInteraction(draw);
                    sub1.deactivateControls();
                }
            })
        ]
    });
var measureCtrl = new ol.control.Toggle({
    html: '<i class="fas fa-ruler"></i>',
    className: "measure",
    title: "Measure",
    bar: sub1
});     
nested.addControl(measureCtrl);

//geolocation tool
var geolocationCtrl = new ol.control.Toggle({
    html: '<i class="fas fa-map-marked-alt"></i>',
    className: "geolocation",
    title: "Geolocation",
    onToggle: function (active) {
        if (active) {
            geolocationOn();
        }
        else {
            geolocationOff();
        }
    }
});
nested.addControl(geolocationCtrl);

//Routing control
var routeOverlay = new ol.control.Overlay ({ closeBox : false, className: "flip menu", content: $("#routeOverlay").get(0) });
map.addControl(routeOverlay);

var routingMenu = new ol.control.Toggle({
    html: '<i class="fas fa-route"></i>',
    className: "route-button",
    title: "Routing menu",
    onToggle: function() { 
        routeOverlay.toggle();
    }
});
nested.addControl(routingMenu);

//Legend Control
var botbar = new ol.control.Bar();
map.addControl(botbar);
botbar.setPosition("bottom-left");

var legend = new ol.control.Overlay ({ closeBox : false, className: "slide-up legend", content: $("#legend").get(0) });
map.addControl(legend);

var legendMenu = new ol.control.Toggle({
    html: '<i class="fas fa-list"></i>',
    className: "legend",
    title: "Show Legend",
    onToggle: function() { 
        legend.toggle();
    }
});
botbar.addControl(legendMenu);

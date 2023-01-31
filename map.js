import esriConfig from "./assets/arcgis_js_v425_api/arcgis_js_api/javascript/4.25/@arcgis/core/config.js";
import Map from "./assets/arcgis_js_v425_api/arcgis_js_api/javascript/4.25/@arcgis/core/Map.js";
import SceneView from "./assets/arcgis_js_v425_api/arcgis_js_api/javascript/4.25/@arcgis/core/views/SceneView.js"
import FeatureLayer from "./assets/arcgis_js_v425_api/arcgis_js_api/javascript/4.25/@arcgis/core/layers/FeatureLayer.js"
import WebScene from "./assets/arcgis_js_v425_api/arcgis_js_api/javascript/4.25/@arcgis/core/WebScene.js"
import SceneLayer from "./assets/arcgis_js_v425_api/arcgis_js_api/javascript/4.25/@arcgis/core/layers/SceneLayer.js"

esriConfig.apiKey = "AAPK38f94072116a467e8afd526e5be96c11QsUwSE47vqMs4a3nxUZGk_54aMsG-BIMXUe42SGS4-3YGqA2ac9LR0Ff8yoX4TWC";

const map = new WebScene({
  basemap: "satellite",
  ground: "world-elevation"
});

// Create the view
const view = new SceneView({
  container: "viewDiv",
  map: map,
  camera: {
    position: {
      latitude: 39.957011,
      longitude: -75.169457,
      z: 26
    },
    tilt: 78,
    heading: 315
  },
  environment: {
    lighting: {
      date: new Date("June 15, 2015 16:00:00 EDT"),
      directShadowsEnabled: true,
      ambientOcclusionEnabled: true
    }
  }
});

/********************************************************************
 * Add layer containing street furniture features: benches, street lamps
 ********************************************************************/

// convenience function to retrieve the WebStyleSymbols based on their name
function getStreetSymbol(name) {
  return {
    type: "web-style", // autocasts as new WebStyleSymbol()
    name: name,
    styleName: "EsriRealisticStreetSceneStyle"
  };
}

// use a UniqueValueRenderer to symbolize the different feature types (street lamps, trash bin)
const streetFurnitureRenderer = {
  type: "unique-value", // autocasts as new UniqueValueRenderer()
  field: "CATEGORY",
  defaultSymbol: getStreetSymbol("Light_On_Post_-_Light_on"),
  uniqueValueInfos: [
    {
      value: "Overhanging street",
      symbol: getStreetSymbol("Overhanging_Street_-_Light_on")
    },
    {
      value: "Overhanging street and sidewalk",
      symbol: getStreetSymbol("Light_On_Post_-_Light_on")
    },
    {
      value: "Trash bin",
      symbol: getStreetSymbol("Trash_Bin_1")
    },
    {
      value: "Newspaper",
      symbol: getStreetSymbol("Newspaper_Vending_Machine")
    },
    {
      value: "Park bench 1",
      symbol: getStreetSymbol("Park_Bench_2")
    }
  ],
  visualVariables: [
    {
      type: "rotation",
      field: "ROTATION"
    },
    {
      type: "size",
      field: "SIZE",
      axis: "height"
    }
  ]
};

// create the layer and assign the renderer to it
const streetFurnitureLayer = new FeatureLayer({
  url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Philadelphia_LoganSquare_streetFurniture/FeatureServer/0",
  renderer: streetFurnitureRenderer,
  elevationInfo: {
    mode: "on-the-ground"
  }
});

/**********************************************
 * Add layer containing transportation features
 **********************************************/

// convenience object that maps feature attribute value to web style symbol name
// will be used to create the uniqueValueInfos in the renderer
const transportationSymbols = [
  {
    value: "Bus",
    name: "Bus"
  },
  {
    value: "Taxi",
    name: "Taxi"
  },
  {
    value: "Ambulance",
    name: "Ambulance"
  },
  {
    value: "Porsche",
    name: "Porsche_Carrera"
  },
  {
    value: "Mercedes",
    name: "Mercedes_S-Class"
  },
  {
    value: "Ford",
    name: "Ford_Edge"
  },
  {
    value: "Audi",
    name: "Ford_Edge"
  },
  {
    value: "Volkswagen",
    name: "Volkswagen_Jetta_Wagon"
  }
];

const transportationRenderer = {
  type: "unique-value", // autocasts as new UniqueValueRenderer()
  field: "CATEGORY",
  uniqueValueInfos: transportationSymbols.map((type) => {
    return {
      value: type.value,
      symbol: {
        type: "web-style", // autocasts as new WebStyleSymbol()
        name: type.name,
        styleName: "EsriRealisticTransportationStyle"
      }
    };
  }),
  visualVariables: [
    {
      type: "rotation",
      // cars need to have a rotation field so that they are aligned to the street
      field: "ROTATION"
    },
    {
      type: "size",
      field: "SIZE",
      axis: "depth"
    }
  ]
};

const transportationLayer = new FeatureLayer({
  url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Philadelphia_LoganSquare_cars/FeatureServer",
  outFields: ["ROTATION", "CATEGORY", "SIZE"],
  renderer: transportationRenderer,
  elevationInfo: {
    mode: "on-the-ground"
  }
});

/**********************************************
 * Add layer containing vegetation features
 **********************************************/

// define the unique values
const uniqueValueInfos = [
  {
    value: "Acer",
    symbol: {
      type: "web-style", // autocasts as new WebStyleSymbol()
      name: "Acer",
      styleName: "EsriRealisticTreesStyle"
    }
  },
  {
    value: "Bulbophyllum",
    symbol: {
      type: "web-style", // autocasts as new WebStyleSymbol()
      name: "Bulbophyllum",
      styleName: "EsriRealisticTreesStyle"
    }
  },
  {
    value: "Cornus",
    symbol: {
      type: "web-style", // autocasts as new WebStyleSymbol()
      name: "Cornus",
      styleName: "EsriRealisticTreesStyle"
    }
  },
  {
    value: "Pinus",
    symbol: {
      type: "web-style", // autocasts as new WebStyleSymbol()
      name: "Pinus",
      styleName: "EsriRealisticTreesStyle"
    }
  }
];

// define vegetationLayer
const vegetationLayer = new FeatureLayer({
  url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Philadelphia_LoganSquare_vegetation_selection/FeatureServer",
  elevationInfo: {
    mode: "on-the-ground"
  },
  renderer: {
    type: "unique-value", // autocasts as new UniqueValueRenderer()
    field: "CATEGORY",
    defaultSymbol: {
      type: "web-style", // autocasts as new WebStyleSymbol()
      name: "Acer",
      styleName: "EsriRealisticTreesStyle"
    },
    uniqueValueInfos: uniqueValueInfos,
    visualVariables: [
      {
        type: "size",
        field: "SIZE",
        axis: "height" // take the real height of the plant from the SIZE field
      },
      {
        type: "rotation",
        valueExpression: "random() * 360" // we use a random rotation, so that plants look different
      }
    ]
  }
});

// add a mesh scene layer with the fountain in the middle of the square
const fountainLayer = new SceneLayer({
  portalItem: {
    id: "778c03645d9a4bea9c1ef8543327db29"
  }
});

map.addMany([
  streetFurnitureLayer,
  vegetationLayer,
  transportationLayer,
  fountainLayer
]);
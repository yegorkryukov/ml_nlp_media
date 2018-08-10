Plotly.d3.json("/chord", function(error, response) {

  // List of titles from JSON data     
  const titles = ['Atlantic', 'BBC', 'MotherJones', 'NewRepublic', 'Politico', 'Slate', 'DailyBeast', 'Guardian', 'Intercept', 'WashPost', 'AmerCons', 'Breitbart', 'DailyWire', 'Economist', 'FiscalTimes', 'FoxNews', 'NYPost', 'Reason', 'Hill', 'WashTimes'];
  
  // List of site names to show in chord diagram
  const fullNames = ['Atlantic', 'BBC', 'Mother Jones', 'New Republic', 'Politico', 'Slate', 'Daily Beast', 'The Guardian', 'The Intercept', 'Washington Post', 'American \n Conservative', 'Breitbart', 'Daily Wire', 'Economist', 'The Fiscal Times', 'Fox News', 'NY Post', 'Reason', 'The Hill', 'Washington Times'];
  
  // Blank list used for chord diagram
  let seriesList = [];

  // Empty dictionary to contain {'text': 'BBC', 'values': [3,6,5,7,etc]}
  let chordObj = {};

  for (let i = 0; i < titles.length; i++) {

    // 'text' is key and item from fullNames list is value
    chordObj['text'] = fullNames[i];

    // 'values' is key and list from JSON is value
    chordObj['values'] = response[0][titles[i]];

    //console.log(chordObj);

    // Add dictionary to list
    seriesList.push(chordObj);

    // Clear out dictionary
    chordObj = {};
  }

  console.log(seriesList);

  const myConfig = {
    "type": "chord",
    "sort-objects": false,
    "options": {
      "angle-padding": 1,
      "band-width": 10,
      "band-space": 1,
      "radius": 300,
      "color-type": "palette",
      "palette": [
        "#1F45FC",
        "#2B60DE",
        "#151B8D",
        "#151B54",
        "#2B547E",
        "#737CA1",
        "#3090C7",
        "#5CB3FF",
        "#A0CFEC",
        "#C2DFFF",
        "#800517",
        "#9F000F",
        "#C24641",
        "#E41B17",
        "#CA226B",
        "#F75D59",
        "#E77471",
        "#FBBBB9",
        "#E56E94",
        "#FAAFBE"
      ],
      "style": {
        "chord": { "border-width": 0 },
        "band": { "border-width": 0 },
        "tick": { "visible": false },
        "item": { "visible": false },
        "label": {
          "bold": false,
          "font-size": "16px",
          "font-family": "helvetica",
          "angle": 90,
        }
      }
    },
    "tooltip": { },

    "series": seriesList
  };

  zingchart.render({
    id: 'chordChart',
    data: myConfig,
    height: 1000, 
    width: 1000 
  });

}); 

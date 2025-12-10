document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.querySelector('.dropdown');
    const content = dropdown.querySelector('.dropdown-content');

    dropdown.addEventListener('mouseenter', () => {
        content.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', () => {
        content.style.display = 'none';
    });
});

function myPlot1() {//Basic Radar Plot
    const data = [{
        type: 'scatterpolar',
        r: [39, 28, 18, 37, 28, 39],
        theta: ['A', 'B', 'C', 'D', 'E', 'A'], //Equally distribute for 5 portations,
        fill: 'toself'
}]

layout = {
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 50]
    }
  },
  showlegend: false
}

Plotly.newPlot("myDiv1", data, layout)
    
}

function myPlot2() {//Multiple traces radar plot 
    data = [
  {
  type: 'scatterpolar',
  r: [39, 28, 8, 7, 28, 39],
  theta: ['A','B','C', 'D', 'E', 'A'],
  fill: 'toself',
  name: 'Group A'
  },
  {
  type: 'scatterpolar',
  r: [1.5, 10, 39, 31, 15, 1.5],
  theta: ['A','B','C', 'D', 'E', 'A'],
  fill: 'toself',
  name: 'Group B'
  }
]

layout = {
  polar: {
    radialaxis: {
      visible: true,
      range: [0, 50]
    }
  }
}

Plotly.newPlot("myDiv2", data, layout)
} 
 
function myPlot3() {
  var data = [{
    type: 'scattergeo',
    mode: 'markers+text',
    text: ['Montreal', 'Toronto', 'Vancouver', 'Calgary', 'Edmonton',
      'Ottawa', 'Halifax', 'Victoria', 'Winnepeg', 'Regina',
      'New York','Los Angeles', 'Chicago',
    ],
    lon: [-73.57, -79.24, -123.06, -114.1, -113.28,
      -75.43, -63.57, -123.21, -97.13, -104.6,
      -73.92,-118.41, -87.69
    ],
    lat: [45.5, 43.4, 49.13, 51.1, 53.34,
      45.24, 44.64, 48.25, 49.89, 50.45,
      40.69, 34.11, 41.84,
    ],
    marker: {
      size: [17, 14, 6, 5, 6,
        7, 5, 4, 6, 5,
        17, 15, 14, 6, 5, 4, 6, 5, 4, 6, 5, 4, 6, 5, 4, 6, 5, 4, 6, 5, 4, 6, 5, 4, 6, 5, 4, 6, 5, 4, 6, 5, 4, 6, 5, 4, 6, 5, 4, 6, 5, 4, 6, 5, 4, 6, 5, 4, 6, 5, 4, 6, 5, 4, 6, 5, 4, 6, 5, 4, 6, 5
      ],
      sizeref: 1,
      sizemode: 'area',
        color: [
           '#b3bada', '#fdb462', '#fb8072', '#d9d9d9', '#bc80bd',
          '#b3de69', '#8dd3c7', '#80b1d3', '#fccde5', '#ffffb3',
           '#ffd3c7', '#feb462', '#fd8d72'
        ],
        line: {
            width: 1
        }
    },
    name: 'Canadian cities',
    textposition: [
        'top right', 'top left', 'top center', 'bottom right', 'top right',
      'top left', 'bottom right', 'bottom left', 'top right', 'top right',
        'top right', 'top left', 'bottom right', 'bottom left', 'top right'
    ],
}];

var layout = {
    title: {
        text: 'North American Cities',
        font: {
            family: 'Droid Serif, serif',
            size: 16
        }
    },
    geo: {
        scope: 'north america',
        resolution: 10,
        //lonaxis: {
            //'range': [-130, -55]
        //},
        //lataxis: {
            //'range': [40, 70]
        //},
        showrivers: true,
        rivercolor: '#fff',
        showlakes: true,
        lakecolor: '#fff',
        showland: true,
        landcolor: '#EAEAAE',
        countrycolor: '#d3d3d3',
        countrywidth: 1.5,
        subunitcolor: '#d3d3d3'
    },
  width: 800,
  height: 600,
    paper_bgcolor: '#cdebf4',
  plot_bgcolor: '#e2f1f2',
  margin: {
      l: 40,
      r: 40,
      b: 10,
    t: 50,
    pad: 0
      
    }
};

  Plotly.newPlot('myDiv3', data, layout);
  

}

function myPlot4() { //North America Precipitation Map
d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2015_06_30_precipitation.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

 scl = [[0, 'rgb(150,0,90)'],[0.125, 'rgb(0, 0, 200)'],[0.25,'rgb(0, 25, 255)'],[0.375,'rgb(0, 152, 255)'],[0.5,'rgb(44, 255, 150)'],[0.625,'rgb(151, 255, 0)'],[0.75,'rgb(255, 234, 0)'],[0.875,'rgb(255, 111, 0)'],[1,'rgb(255, 0, 0)']];

    var data = [{
        type: 'scattergeo',
        mode: 'markers',
        text: unpack(rows, 'Globvalue'),
        lon: unpack(rows, 'Lon'),
        lat: unpack(rows, 'Lat'),
        marker: {
          color: unpack(rows, 'Globvalue'),
          colorscale: scl,
          cmin: 0,
          cmax: 1.4,
          reversescale: true,
          opacity: 0.6,
          size: 2,
          colorbar:{
            thickness: 10,
            title: {side:
              'right'
            },
            outlinecolor: 'rgba(68,68,68,0)',
            ticks: 'outside',
            ticklen: 3,
            shoticksuffix: 'last',
            ticksuffix: 'inches',
            dtick: 0.1,
            thickness: 20, // set the width of color bar
    thicknessmode: 'pixels',
    len: 0.6, // set the height of color bar
    
          }
        },
        name: 'NA Precipitation'
    }];

    var layout = {
      geo:{
        scope: 'north america',
        showland: true,
        landcolor: 'rgb(238, 238, 237)',
        subunitcolor: 'rgb(9, 9, 9)',
        countrycolor: 'rgba(239, 168, 168, 0.4)',
        showlakes: true,
        lakecolor: 'rgb(135, 181, 233)',
        showsubunits: true,
        showcountries: true,
        resolution: 10,
        projection: {
          type: 'conic conformal',
          rotation: {
            long: -100
          }
        },
      },
      longaxis: {
        showgrid: true,
        gridwidth: 0.5,
        range: [ -140.0, -40.0 ],
        dtick: 5
      },
      lataxis: {
        showgrid: true,
        gridwidth: 0.5,
        range: [ 30.0, 40.0 ],
        dtick: 5
      },
      title: {text: 'North America Precipitation'},
      width: 800,
      height: 600,
      paper_bgcolor: 'rgb(206, 234, 248)',
      plot_bgcolor: 'rgb(220, 245, 192)',
      margin: {
        l: 40,
        r: 40,
        b: 10,
        t: 50,
        pad: 0
      }
      
    };

    Plotly.newPlot('myDiv4', data, layout);
  });

}

function myPlot5() {//US specific map: Airport locations. 
  d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2011_february_us_airport_traffic.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var scl = [[0,'rgb(5, 10, 172)'],[0.35,'rgb(40, 60, 190)'],[0.5,'rgb(70, 100, 245)'], [0.6,'rgb(90, 120, 245)'],[0.7,'rgb(106, 137, 247)'],[1,'rgb(220, 220, 220)']];

    var data = [{
        type:'scattergeo',
        locationmode: 'USA-states',
        lon: unpack(rows, 'long'),
        lat: unpack(rows, 'lat'),
        hoverinfor:  unpack(rows, 'airport'),
        text:  unpack(rows, 'airport'),
        mode: 'markers',
        marker: {
            size: 8,
            opacity: 0.8,
            reversescale: true,
            autocolorscale: false,
            symbol: 'circle',
            line: {
                width: 1,
                color: 'rgb(14, 22, 248)'
            },
            colorscale: scl,
            cmin: 0,
            color: unpack(rows, 'cnt'),
            colorbar: {
              title: {
                text: 'Incoming Flights February 2011',
                side: 'right',
                len: 0.6, // set the height of color bar
              },
            
            }
        }
    }];


    var layout = {
        title: {text: 'Most Trafficked US airports'},
        colorbar: true,
        geo: {
            scope: 'usa',
            projection: {
                type: 'albers usa'
            },
            showland: true,
            landcolor: 'rgb(250,250,250)',
            subunitcolor: 'rgb(217,217,217)',
            countrycolor: 'rgb(217,217,217)',
            countrywidth: 0.5,
            subunitwidth: 0.5
      },
        width: 800,
        height: 600,
        paper_bgcolor: 'rgb(223, 223, 223)',
        plot_bgcolor: 'rgb(244, 244, 244)',
        margin: {
            l: 40,
            r: 40,
            b: 10,
            t: 50,
            pad: 0
        }
    };

    Plotly.newPlot("myDiv5", data, layout, {showLink: false});

});

}


function myPlot6() {
 
  var data = [{
    type: 'scattergeo',
    mode: 'markers+text',
    text: ['Alberta', 'Winnipeg', 'Halifax', 'Birmingham', 'Tucson',
      'Davis', 'Los Angeles', 'San Diego', 'Stanford', 'Boulder',
      'Denver', 'Miami', 'Atlanta', 'Honolulu', 'Iowa City',
      'Chicago', 'Louisville', 'New Orleans', 'Boston', 'Baltimore',
      'Bethesda', 'Minneapolis', 'St. Louis', 'Omaha', 'Newark',
      'Summit', 'New York', 'Rochester', 'Utica', 'Cincinnati',
      'Cleveland', 'Columbus', 'Philadelphia', 'Pittsburgh', 'Charleston',
      'Vermillion', 'Dallas', 'Houston', 'Salt Lake City', 'Richmond',
      'Seattle','Madison'
    ],
    lat: [55, 49.895077, 44.65107, 33.5279, 32.1541,
      38.5553, 34.1141, 32.8313, 37.4252, 40.0248,
      39.762, 25.784, 33.7628, 21.3294, 41.6559,
      41.8375, 38.1663, 30.0687, 42.3188, 39.3051,
      38.9866, 44.9635, 38.6359, 41.2627, 40.7245,
      40.7154, 40.6943, 43.168, 43.0962, 39.1413,
      41.4764, 39.9862, 40.0077, 40.4397, 32.8168,
      42.7811, 32.7935, 29.786, 40.7776, 37.5295,
      47.6211, 43.0822
    ],
    lon: [-115, -97.138451, -63.582687, -86.7971, -110.8787,
      -121.737, -118.4068, -117.1222, -122.1674, -105.2524,
      -104.8758, -80.2101, -84.422, -157.846, -91.5303,
      -87.6866, -85.6485, -89.9288, -71.0852, -76.6144,
      -77.1188, -93.2678, -90.2451, -96.0529, -74.1725,
      -74.3647, -73.9249, -77.6162, -75.2261, -84.506,
      -81.6805, -82.9855, -75.1339, -79.9763, -79.9687,
      -96.9256, -96.7667, -95.3885, -111.9311, -77.4756,
      -122.3244,-89.393
     
    ],
    
    textfont: {
      size: 6,  // Set the font size here
      color: 'blue'  // Optional: Set the font color here
    },
    marker: {
      size: [1, 2, 1, 3, 4,
        1, 4, 3, 3, 6,
        9, 1, 1, 1, 2,
        2, 2, 1, 5, 2,
        1, 1, 2, 1, 2,
        1, 2, 1, 1, 2,
        2, 2, 6, 1, 1,
        1, 3, 1, 1, 1,
        4, 1
      ],
      sizeref: 0.01,
      sizemode: 'area', //diameter',
        color: [
           '#b3bada', '#fdb462', '#fb8072', '#d9d9d9', '#bc80bd',
          '#b3de69', '#8dd3c7', '#80b1d3', '#fccde5', '#234c63',
          '#ffc85b', '#feb462', '#fd8d72', '#005a32', '#e31a1c',
          '#ff7f00', '#6a3d9a', '#a6cee3', '#1f78b4', '#b2df8a',
          '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00',
          '#cab2d6', '#6a3d9a', '#b2df8a', '#33a02c', '#fb9a99',
          '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a',
          '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f',
          '#ff7f00', '#cab2d6', '#6a3d9a',
      ],
        opacity: 0.6,
        
  
      line: {
          color: 'black',
            width: 0.5
      }
       
  },
    textposition: [
        'top right', 'top left', 'top center', 'bottom right', 'top right',
      'top', 'left', 'bottom', 'left', 'top',
      'bottom left', 'bottom right', 'top', 'top right', 'bottom left',
      'top', 'bottom', 'bottom right', 'top', 'right',
      'bottom right', 'top left', 'bottom left', 'top left', 'bottom left',
      'top right', 'top left', 'left', 'top left', 'bottom right',
      'top', 'left', 'right', 'bottom', 'right',
      'top left', 'bottom left', 'bottom left', 'top left', 'bottom right',
      'bottom left', 'top left'
    ],
}];

var layout = {
    title: {
        text: '<b>Geographic Distribution of the ISHR-NAS Invited Speakers</b>',
        font: {
            family: 'Droid Serif, serif',
            size: 16
        }
    },
    geo: {
        scope: 'north america',
        resolution: 10,
      lonaxis: {
        'range': [-160, -70]
      },
        lataxis: {
            'range': [20, 55]
        },
        showrivers: true,
        rivercolor: '#fff',
        showlakes: true,
        lakecolor: '#fff',
        showland: true,
        landcolor: '#EAEAAE',
        countrycolor: '#d3d3d3',
        countrywidth: 1.5,
        subunitcolor: '#d3d3d3'
    },
  width: 1200,
  height: 800,
    paper_bgcolor: '#cdebf4',
  plot_bgcolor: '#e2f1f2',
  margin: {
      l: 40,
      r: 40,
      b: 10,
    t: 50,
    pad: 0
      
    }
};

  Plotly.newPlot('myDiv6', data, layout);
  


}





function myPlot7() { 

  
    d3.csv('https://raw.githubusercontent.com/Dean-D-Wang/Plotly-JS-Practices/refs/heads/main/Datasets/ISHR-Speakers_per_City.csv', function (err, rows) {

      function unpack(rows, key) {
        return rows.map(function (row) { return row[key]; });
      }
 
      var data = [{
        type: 'scattergeo',
        mode: 'markers+text',
        text: unpack(rows,'city'),
        lat: unpack(rows, 'lat'),
        lon: unpack(rows, 'long'),
        textfont: {
          size: 10,  // Set the font size here
          color: 'blue'  // Optional: Set the font color here
        },
        marker: {
          size: unpack(rows,'speakers' ),
          sizeref: 0.01,
          sizemode: 'area', //diameter',
          color: unpack(rows, 'color'),
          opacity: 0.6,
        
  
          line: {
            color: 'black',
            width: 0.5
          }
       
        },
        textposition: unpack(rows, 'text_position'),
        
      }];
      console.log(unpack(rows, 'text_position'));

      var layout = {
        title: {
          text: '<b>Geographic Distribution of the ISHR-NAS Invited Speakers</b>',
          font: {
            family: 'Droid Serif, serif',
            size: 16
          }
        },
        dragmode:"zoom",
        geo: {
          scope: 'north america',
          resolution: 10,
          lonaxis: {
            'range': [-160, -70]
          },
          lataxis: {
            'range': [20, 55]
          },
          showrivers: true,
          rivercolor: '#fff',
          showlakes: true,
          lakecolor: '#fff',
          showland: true,
          landcolor: '#EAEAAE',
          countrycolor: '#d3d3d3',
          countrywidth: 1.5,
          subunitcolor: '#d3d3d3'
        },
        width: 1200,
        height: 800,
        paper_bgcolor: '#cdebf4',
        plot_bgcolor: '#e2f1f2',
        margin: {
          l: 40,
          r: 40,
          b: 10,
          t: 50,
          pad: 0
      
        }
      };

      Plotly.newPlot('myDiv7', data, layout);
  


});

}


function myPlot8() { //European Country Bubble Plot 
  var data = [{
    type: 'scattergeo',
    mode: 'markers',
    text: ['France', 'Germany', 'Russia','Spain','United Kingdom', 'Ireland', 'India'],
    locations: ['FRA', 'DEU', 'RUS', 'ESP', 'GBR', "IRL", 'IND'],
    marker: {
      size: [20, 30, 15, 10, 10, 7, 25],
      color: [10, 20, 40, 50, 30, 35,40],
      cmin: 0,
      cmax: 50,
      colorscale: 'oranges',
        reversescale: false,
        colorbar: {
            title: {text: 'Some rate'},
            ticksuffix: '%',
            showticksuffix: 'last'
        },
        line: {
            color: 'black'
        }
    },
    name: 'europe data'
}];

  var layout = {
    title: {
      text: '<b>Global Forest Distribution by Nation</b > ',
      font: {
        family: 'Droid Serif, serif',
        size: 16
      }
    },
    geo: {
        scope: 'world',
        showland: true,
        landcolor: 'lightgray',
        showocean: true,
        oceancolor: 'lightblue',
        showcountries: true,
        projection: {
            type: 'natural earth'
        },
        bounds: {
            west: -20,
            east: 150,
            north: 70,
            south: 10
        }
    }
};


      

Plotly.newPlot('myDiv8', data, layout);
}

function myPlot9() {
  d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2014_us_cities.csv', function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    var cityName = unpack(rows, 'name'),
        cityPop = unpack(rows, 'pop'),
        cityLat = unpack(rows, 'lat'),
        cityLon = unpack(rows, 'lon'),
        color = [,"rgb(255,65,54)","rgb(133,20,75)","rgb(255,133,27)","lightgrey"],
        citySize = [],
        hoverText = [],
        scale = 50000;

    for ( var i = 0 ; i < cityPop.length; i++) {
        var currentSize = cityPop[i] / scale;
        var currentText = cityName[i] + " pop: " + cityPop[i];
        citySize.push(currentSize);
        hoverText.push(currentText);
    }

    var data = [{
        type: 'scattergeo',
        locationmode: 'USA-states',
        lat: cityLat,
        lon: cityLon,
        hoverinfo: 'text',
        text: hoverText,
        marker: {
            size: citySize,
            line: {
                color: 'black',
                width: 2
            },
        }
    }];

    var layout = {
        title: {text: '2014 US City Populations'},
        showlegend: false,
        geo: {
            scope: 'usa',
            projection: {
                type: 'albers usa'
            },
            showland: true,
            landcolor: 'rgb(217, 217, 217)',
            subunitwidth: 1,
            countrywidth: 1,
            subunitcolor: 'rgb(249, 205, 205)',
            countrycolor: 'rgb(199, 225, 243)'
        },
    };

    Plotly.newPlot("myDiv9", data, layout, {showLink: false});

});
}

function myPlot10() { //a simple map rendered with the "open-street-map" tiles
  d3.csv(
	"https://raw.githubusercontent.com/plotly/datasets/master/2015_06_30_precipitation.csv",
	function(err, rows) {
		function unpack(rows, key) {
			return rows.map(function(row) {
				return row[key];
			});
		}

		var data = [
			{
				type: "scattermap",
				text: unpack(rows, "Globvalue"),
				lon: unpack(rows, "Lon"),
				lat: unpack(rows, "Lat"),
        marker: {
          //color: "fuchsia",
          color: "rgba(115, 112, 250, 0.8)", //set the color of the markers to fuchsia
      
          size: 4
        }
			}
		];

		var layout = {
      //dragmode: "zoom",
     dragmode: "pan",
			map: { style: "open-street-map", center: { lat: 38, lon: -90 }, zoom: 3 },
			margin: { r: 0, t: 0, b: 0, l: 0 }
		};

		Plotly.newPlot("myDiv10", data, layout);
	});

}



function myPlot11() { //replot the ISHR Speaker Distribution Map with the "open-street-map" tiles
  d3.csv(
	"https://raw.githubusercontent.com/Dean-D-Wang/Plotly-JS-Practices/refs/heads/main/Datasets/ISHR-Speakers_per_City.csv",
	function(err, rows) {
		function unpack(rows, key) {
			return rows.map(function(row) {
				return row[key];
			});
    }
    var numbersOfSpeakers = unpack(rows,"speakers");

		var data = [
			{
				type: "scattermap",
        text: unpack(rows, "city"),
        

				lon: unpack(rows, "long"),
				lat: unpack(rows, "lat"),
        marker: {
          //color: "fuchsia",
          color: "rgba(115, 112, 250, 0.8)", //set the color of the markers to fuchsia
      
          size: unpack(rows, "speakers"),
          sizemode: "area",
          sizeref: 0.01,
        
        },
        hovertemplate: '<b>%{text}</b><br>Speakers: %{marker.size}<extra></extra>',
			}
		];

		var layout = {
      //dragmode: "zoom",
     dragmode: "pan",
      map: {
        style: "open-street-map",  //open-street-map tiles
        //style: "carto-dark-matter",  //dark-matter tiles
        //style: "carto-positron",  //light-matter tiles
        //style: "carto-positron-nolabels",  //light-matter tiles without labels
       // style: "stamen-toner",  //toner tiles
        //style: "stamen-watercolor",  //watercolor tiles
        //style: "stamen-terrain",  //terrain tiles
        //style: "stamen-terrain-background",  //terrain background tiles
        //style: "stamen-terrain-labels",  //terrain labels tiles
        //style: "stamen-terrain-lite",  //terrain lite tiles
        //style: "stamen-toner-lite",  //toner lite tiles
        center: { lat: 38, lon: -110 }, zoom: 2.5

      },
			margin: { r: 0, t: 0, b: 0, l: 0 }
		};

		Plotly.newPlot("myDiv11", data, layout);
	});

}

function myPlot12() { //a simple map rendered with the "open-street-map" tiles
  d3.csv(
	"https://raw.githubusercontent.com/Dean-D-Wang/Plotly-JS-Practices/refs/heads/main/Datasets/ISHR-Speakers_per_City.csv",
	function(err, rows) {
		function unpack(rows, key) {
			return rows.map(function(row) {
				return row[key];
			});
    }
    var numbersOfSpeakers = unpack(rows,"speakers");

		var data = [
			{
				type: "scattermap",
        text: unpack(rows, "city"),
        

				lon: unpack(rows, "long"),
				lat: unpack(rows, "lat"),
        marker: {
          //color: "fuchsia",
          color: "rgba(232, 242, 98, 0.8)", //set the color of the markers to fuchsia
      
          size: unpack(rows, "speakers"),
          sizemode: "area",
          sizeref: 0.015, //set the relative size of markers
        
        },
        hovertemplate: '<b>%{text}</b><br>Speakers: %{marker.size}<extra></extra>',
			}
		];

    var layout = {
      dragmode: "zoom",
      map: {
        style: "white-bg", 
        //style: "open-street-map",  //open-street-map tiles
        //style: "carto-dark-matter",  //dark-matter tiles
        //style: "carto-positron",  //light-matter tiles
        //style: "carto-positron-nolabels",  //light-matter tiles without labels
        //style: "stamen-toner",  //toner tiles
        //style: "stamen-watercolor",  //watercolor tiles
        //style: "stamen-terrain",  //terrain tiles
        //style: "stamen-terrain-background",  //terrain background tiles
        //style: "stamen-terrain-labels",  //terrain labels tiles
        //style: "stamen-terrain-lite",  //terrain lite tiles
        //style: "stamen-toner-lite",  //toner lite tiles
        layers: [{
          sourcetype: "raster",
          source: ["https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}"],
          below: "traces"
        }],
        //center: { lat: 38, lon: -90 }, //St. Louise as Center of map
        center: { lat: 38, lon: -110 },
        zoom: 2.5
      },
      margin: { r: 0, t: 0, b: 0, l: 0 }
    };

		Plotly.newPlot("myDiv12", data, layout);
	});

}

function myPlot13() {
  d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/2015_06_30_precipitation.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
		}

var data = [{
        type: 'scattermap', text: unpack(rows, 'Globvalue'),
        lon: unpack(rows, 'Lon'), lat: unpack(rows, 'Lat'),
        marker: {color: 'fuchsia', size: 4}
    }];

var layout = {
	dragmode: 'zoom',
	map: {
		style: 'white-bg',
		layers: [
			{
            below: 'traces',
            sourcetype: "raster",
            source: [
                "https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryOnly/MapServer/tile/{z}/{y}/{x}"
            ]
        },
      {
        sourcetype: "raster",
        //source: ["https://geo.weather.gc.ca/geomet/?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&BBOX={bbox-epsg-3857}&CRS=EPSG:3857&WIDTH=1000&HEIGHT=1000&LAYERS=RADAR_1KM_RDBR&TILED=true&FORMAT=image/png"]}],
        source: ["https://geo.weather.gc.ca/geomet?SERVICE=WMS&VERSION=1.3.0&REQUEST=GetMap&LAYERS=RDPA.24F_PR&STYLES=RDPA-WXO&CRS=EPSG:4326&BBOX=35,-150,85,-45&WIDTH=1000&HEIGHT=1000&FORMAT=image/png"]}],
        below: 'traces',
		center: {lat: 38, lon: -90}, zoom: 4},
	margin: {r: 0, t: 0, b: 0, l: 0},
	showlegend: false};

Plotly.newPlot('myDiv13', data, layout);
  });

}

function myPlot14() {
  var url = "https://maplibre.org/maplibre-gl-js/docs/assets/significant-earthquakes-2015.geojson";

d3.json(url, (err, raw) => {
  var lon = raw.features.map(f => f.geometry.coordinates[0]);
  var lat = raw.features.map(f => f.geometry.coordinates[1]);
  var z = raw.features.map(f => f.properties.mag);

  var data = [
    { type: "scattermap", lon: lon, lat: lat, z: z, hoverinfo: "y" }
  ];

  var layout = {
    map: { style: "dark", zoom: 0.8, center: { lon: -100, lat: 60 } },
    margin: { t: 0, b: 0 }
  };

  Plotly.newPlot('myDiv14', data, layout);
});

}

function myPlot15() { //replot the ISHR Speaker Distribution Map with the "open-street-map" tiles
  d3.csv(
	"https://raw.githubusercontent.com/Dean-D-Wang/Plotly-JS-Practices/refs/heads/main/Datasets/bridge2AI-schoars-distribution.csv",
	function(err, rows) {
		function unpack(rows, key) {
			return rows.map(function(row) {
				return row[key];
			});
    }
    //var numbersOfSpeakers = unpack(rows,"scholars");
    console.log(unpack(rows, "scholars"));
    console.log(unpack(rows, "city"));
		var data = [
			{
				type: "scattermap",
        text: unpack(rows, "city"),
        

				lon: unpack(rows, "long"),
				lat: unpack(rows, "lat"),
        marker: {
          //color: "fuchsia",
          color: "rgba(115, 112, 250, 0.8)", //set the color of the markers to fuchsia
      
          size: unpack(rows, "scholars"),
          sizemode: "area",
          sizeref: 0.01,
        
        },
        hovertemplate: '<b>%{text}</b><br>Scholars: %{marker.size}<extra></extra>',
			}
		];

		var layout = {
      //dragmode: "zoom",
     dragmode: "pan",
      map: {
        style: "open-street-map",  //open-street-map tiles
        //style: "carto-dark-matter",  //dark-matter tiles
        //style: "carto-positron",  //light-matter tiles
        //style: "carto-positron-nolabels",  //light-matter tiles without labels
       // style: "stamen-toner",  //toner tiles
        //style: "stamen-watercolor",  //watercolor tiles
        //style: "stamen-terrain",  //terrain tiles
        //style: "stamen-terrain-background",  //terrain background tiles
        //style: "stamen-terrain-labels",  //terrain labels tiles
        //style: "stamen-terrain-lite",  //terrain lite tiles
        //style: "stamen-toner-lite",  //toner lite tiles
        center: { lat: 38, lon: -110 }, zoom: 2.5

      },
      showlegend: false,
      width: 1200,
      height: 800,
      //autosize: false,
      responsive: true,
			margin: { r: 0, t: 0, b: 0, l: 0 }
		};

		Plotly.newPlot("myDiv15", data, layout);
	});

}


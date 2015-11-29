var myData = [];

// Layout of the graph panel
var layout = {
  title: 'Report',
  xaxis: {
    showgrid: false,
    zeroline: false
  },
  yaxis: {
    showline: false
  }
};

var trace = {
    x: [],
    y: [],
    name: 'My Trace',
    type: 'scatter'
};

var data = [trace];

// Generate the plot
Plotly.newPlot(container, data, layout);

// Fist load
loadData();

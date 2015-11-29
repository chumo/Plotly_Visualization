function loadData(){
  // Load data from remote
  d3.json("data/Data.json", function(DATA) {
    myData = DATA[0];

    changePlot();

  });
}


function changePlot(){
  var xString = document.getElementById("x_coord").value;
  var yString = document.getElementById("y_coord").value;

  container.data[0].x = myData[xString];
  container.data[0].y = myData[yString];
  container.layout.xaxis.title = xString;
  container.layout.yaxis.title = yString;
  Plotly.redraw(container);
}

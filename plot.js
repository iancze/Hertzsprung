(function () {

  "use strict";

  //Goal: make a circle move across the canvas.

  // Plotting.
  var w = 580, h = 400;
  var xscale = d3.scale.linear()
                 .domain([0, 10])
                 .range([0, w]),
      yscale = d3.scale.linear()
                 .domain([-2.5, 2.5])
                 .range([h, 0]);
  var svg = d3.select("#plot").append("svg")
              .attr("width", w).attr("height", h);

})();


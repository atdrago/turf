var topojson = require('topojson')

module.exports = function(geojson, done){
  var topology = topojson.topology({geojson: geojson})

  done = done || function () {};

  done(null, topology)

  return topology;
}

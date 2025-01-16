var map = L.map('map').setView([53.992666, 27.320273], 13);

var OpenStreetMap_BZH = L.tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="http://www.openstreetmap.bzh/" target="_blank">Breton OpenStreetMap Team</a>',
}).addTo(map);

function onMapClick(e) {
  console.log('click', e)
}

var marker1 = L.marker([53.998848111522534, 27.30984758889346]).addTo(map).bindTooltip("Турбаза",
  {
    permanent: true,
    direction: 'right'
  })
  .on('click', onMapClick);

var marker2 = L.marker([54.03260355694114, 27.254911425654054]).addTo(map).bindTooltip("Крыница пясчанка",
  {
    permanent: true,
    direction: 'right'
  })
  .on('click', onMapClick);

var polygon = L.polygon([
  [54.00140725853155, 27.3111317697426],
  [54.00058233994049, 27.309039325319457],
  [53.98515936618216, 27.328621227237424],
  [53.98596958645076, 27.330560565971066]
]).addTo(map).bindPopup("Место для сплава")
const map = L.map('map').setView([53.992666, 27.320273], 13);
const modal = document.getElementById('modal');
const closeButton = document.getElementById('close');
const image = document.getElementById('image');

closeButton.addEventListener('click', onModalClose);

const OpenStreetMap_BZH = L.tileLayer('https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="http://www.openstreetmap.bzh/" target="_blank">Breton OpenStreetMap Team</a>',
}).addTo(map);

function onMarkerClick(src) {
  return function (e) {
    modal.classList.add('open');
    image.src = src;
  }
}

function onModalClose(e) {
  modal.classList.remove('open');
}

const configs = [
  {
    coords: [53.998848111522534, 27.30984758889346],
    label: "Турбаза",
    src: "/static/tyrbaza.jpg",
  },
  {
    coords: [54.03260355694114, 27.254911425654054],
    label: "Крыница пясчанка",
    src: "/static/grebkanal.jpg",
  }
];

const markers = configs.map(
  config => L.marker(config.coords)
    .addTo(map)
    .bindTooltip(config.label, { permanent: true, direction: 'right' })
    .on('click', onMarkerClick(config.src))
);

const polygon = L.polygon([
  [54.00140725853155, 27.3111317697426],
  [54.00058233994049, 27.309039325319457],
  [53.98515936618216, 27.328621227237424],
  [53.98596958645076, 27.330560565971066]
]).addTo(map).bindPopup("Место для сплава")




const map = L.map("map").setView([53.992666, 27.320273], 13);
const modal = document.getElementById("modal");
const closeButton = document.getElementById("close");
const image = document.getElementById("image");
const title = document.getElementById("title");

closeButton.addEventListener("click", onModalClose);

const OpenStreetMap_BZH = L.tileLayer(
  "https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png",
  {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="http://www.openstreetmap.bzh/" target="_blank">Breton OpenStreetMap Team</a>',
  }
).addTo(map);

function onMarkerClick(config) {
  return function (e) {
    modal.classList.add("open");
    image.src = config.src;
    title.innerText = config.label;
  };
}

function onModalClose(e) {
  modal.classList.remove("open");
}

const configs = [
  {
    coords: [53.998848111522534, 27.30984758889346],
    label: "Турбаза",
    src: "/static/tyrbaza.jpg",
  },
  {
    coords: [54.03260355694114, 27.254911425654054],
    label: "Крыница пяшчанка",
    src: "/static/paschanka.jpg",
  },
  {
    coords: [54.03599982506858, 27.248248818462006],
    label: "Хмелевский водопад",
    src: "/static/grebkanal.jpg",
  },
  {
    coords: [53.99998865610981, 27.31162980368535],
    label: "Гребной канал",
    src: "/static/grebkanal2.jpg",
  },
  {
    coords: [53.976312476392536, 27.3405276701716],
    label: "Санаторий юность",
    src: "/static/unost.jpg",
  },
  {
    coords: [53.97302509487277, 27.344890739131404],
    label: "Остров любви",
    src: "/static/lubov.jpg",
  },
];

const markers = configs.map((config) =>
  L.marker(config.coords)
    .addTo(map)
    .bindTooltip(config.label, { permanent: true, direction: "right" })
    .on("click", onMarkerClick(config))
);

const polygon1 = L.polygon([
  [54.00140725853155, 27.3111317697426],
  [54.00058233994049, 27.309039325319457],
  [53.98515936618216, 27.328621227237424],
  [53.98596958645076, 27.330560565971066],
])
  .addTo(map)
  .bindPopup("Место для сплава");

const polygon2 = L.polygon(
  [
    [53.99970895963, 27.30371626223849],
    [53.997278611408966, 27.30515009794397],
  ],
  { weight: 10 }
)
  .addTo(map)
  .bindPopup("Отличное место для рыбалки с удобным берегом");

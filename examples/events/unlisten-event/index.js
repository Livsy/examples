
var map = new maptalks.Map('map', {
  center: [121.48542888885189, 31.228541533313702],
  zoom: 14,
  baseLayer: new maptalks.TileLayer('base', {
    urlTemplate: '$(urlTemplate)',
    subdomains: $(subdomains)
  })
});
var layer = new maptalks.VectorLayer('vector').addTo(map);
var marker = new maptalks.Marker([121.485428, 31.228541]).addTo(layer);

function bind() {
  marker.on('click', this.printEvents);
}

function unbind() {
  marker.off('click', this.printEvents);
}

function printEvents() {
  var infoDom = document.getElementById('info');
  infoDom.innerHTML = infoDom.innerHTML + '<div>' + new Date().getTime() + ': Your click marker!</div>';
}
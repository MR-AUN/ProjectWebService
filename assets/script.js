var map;
var search;
function init() {
  map = new longdo.Map({
    layer: [longdo.Layers.GRAY, longdo.Layers.TRAFFIC],
    zoom: 9,
    placeholder: document.getElementById("maps"),
    language: "th",
    lastView: false,
  });
  search = document.getElementById("search");

  search.onkeyup = function (event) {
    if ((event || window.event).keyCode != 13) return;
    resultSearch();
  };
}


// Api data
async function resultSearch() {
  // 1. ดึงข้อมูลด้วย fetch
  const res = await fetch(
    `https://search.longdo.com/mapsearch/json/search?keyword=${search.value}&area=44&span=1000km&limit=1000&key=ef4403429ef6547092619fe33deea6c0`
  );

  // 2. เช็ค status ถ้าไม่ใช่ HTTP 200 OK ให้ error
  if (res.status !== 200) {
    alert("Something went wrong");
    return;
  }
  document.getElementById("result").innerHTML = "";
  // 3. แปลงเป็น json
  const jsonData = await res.json();

  // สร้างจุดในแผนที่
  var bound = jsonData.data;
  map.Overlays.clear();
  mockAjaxFromServer(bound, function (locationList) {
    let html = "";
    let result = ``;
    locationList.forEach((list) => {
      var marker = new longdo.Marker(list.location, {
        clickable: true,
        popup: {
          title: list.name,
          detail: `${list.address}<br><div class="fb-share-button" data-href="https://map.longdo.com/p/${list.id}/info" data-layout="" data-size=""><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmap.longdo.com%2Fp%2F${list.id}%2Finfo&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">แชร์</a></div>`,
        },
      });
      map.Overlays.add(marker);
      html +=
        list.address === undefined
          ? ""
          : `<button onclick="goToLocation(${list.location.lon},${list.location.lat})"  class="list-group-item list-group-item-action">
                                            <div class="fw-bold">${list.name}</div>
                                            ${list.address}
                                        </button> `;
    });
    result = `<div class="list-group">
                        ${html}
                    </div>`;
    document.getElementById("result").innerHTML = result;
  });
}

// เคลื่อนไปยังตำแหน่งที่กำหนด
function goToLocation(lon, lat) {
  map.location({ lon: lon, lat: lat }, true);
}

// จัดการข้อมูล
function mockAjaxFromServer(bound, callback) {
  var locationLists;
  var locationList = [];
  bound.forEach((list) => {
    let lons = list.lon;
    let lats = list.lat;
    locationLists = {
      lon: lons,
      lat: lats,
    };
    let objects = {
      name: list.name,
      id: list.id,
      address: list.address,
      location: locationLists,
    };
    locationList.push(objects);
  });

  callback(locationList);
}

let selectCity = document.getElementById('selectCity');
let infoCity = document.querySelectorAll('.contacts-info');
if (selectCity) {
  selectCity.addEventListener('change', changeSelect);
}

function changeSelect() {
  for (let i = 0; i < infoCity.length; i++) {
    if (infoCity[i].querySelector('.city').innerHTML === selectCity.value) {
      infoCity[i].classList.add("active");
    } else {
      infoCity[i].classList.remove("active");
    }
  }
}

let btn = document.querySelector('.btn');

let gender = document.querySelector('.gender');
let region = document.querySelector('.region');

btn.addEventListener('click', () => {

  let url = 'https://uinames.com/api/?'
  fetch(url + 'region=' + region.value)
  .then(function(resp) {
    return resp.json()
  })
  .then(function(data) {
    console.log(data);
    let dataArea = document.querySelector('.data');
    // dataArea.style.border = '2px solid red';
    // dataArea.style.borderRadius = '4px';

    let photo = document.querySelector('.photo');
    // photo.style.border = '2px solid grey'
    // photo.style.borderRadius = '4px';

    photo.innerHTML = `<img src=${data.photo}>`;
    document.querySelector('.name').innerHTML = `Name: ${data.name} ${data.surname}`
    document.querySelector('.age').innerHTML = `Age: ${data.age}`
    document.querySelector('.gender').innerHTML = `Gender: ${data.gender}`
    document.querySelector('.country').innerHTML = `Country: ${data.region}`
    document.querySelector('.phone').innerHTML = `Tel: ${data.phone}`
  })
})

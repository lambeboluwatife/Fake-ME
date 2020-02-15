let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

  fetch('https://uinames.com/api/?ext')
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
// .catch(function(error) {
//   // catch any error
//   console.log(error);
// })

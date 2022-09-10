let hotel = {
  name: '',
  location: '',
  img: '',
  rating: "<span class='fa fa-star'></span>",
  review: false,
};

hotelRating = prompt('Puntua el hotel: uno, dos, tres, cuatro o cinco');

let userHotelRating = document.getElementById('hotelRating');
for (let i = 0; i < parseInt(hotelRating); i++) {
  userHotelRating.innerHTML += hotel.rating;
  console.log('hotel', hotel.rating);
}

console.log(typeof hotelRating);

hotel.review = confirm('¿Quieres que la reseña sea anónima?');

let userHotelReview = document.getElementById('hotelReview');
userHotelReview.checked = hotel.review;

hotel.name = prompt('Introduce el nombre del hotel');

let userHotelName = document.getElementById('hotelName');
userHotelName.innerHTML = 'Hotel ' + hotel.name;

hotel.location = prompt('introduce la ubicación del hotel');

let userHotelLocation = document.getElementById('hotelLocation');
userHotelLocation.innerHTML = hotel.location;

hotel.img = prompt('Introduce la url de la foto del hotel');

let userHotelImg = document.getElementById('hotelImg');
userHotelImg.src = hotel.img;

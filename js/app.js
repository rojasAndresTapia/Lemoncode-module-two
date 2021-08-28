let hotel = {
    name: "",
    location: "",
    img: "",
    rating : {
        uno: "<span class='fa fa-star'></span><span class='fa fa-star-o'></span><span class='fa fa-star-o'></span><span class='fa fa-star-o'></span><span class='fa fa-star-o'></span>",
        dos: "<span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star-o'></span><span class='fa fa-star-o'></span><span class='fa fa-star-o'></span>",
        tres: "<span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star-o'></span><span class='fa fa-star-o'></span>",
        cuatro: "<span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star-o'></span>",
        cinco: "<span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span><span class='fa fa-star'></span>",
    },
    review: false,
};

hotelRating = prompt("Puntua el hotel: uno, dos, tres, cuatro o cinco");

let userHotelRating = document.getElementById("hotelRating");
userHotelRating.innerHTML = hotel.rating[hotelRating];


hotel.review = confirm("¿Quieres que la reseña sea anónima?");

let userHotelReview = document.getElementById("hotelReview");
userHotelReview.checked= hotel.review;

hotel.name = prompt("Introduce el nombre del hotel");

let userHotelName = document.getElementById("hotelName");
userHotelName.innerHTML= "Hotel " + hotel.name;

hotel.location = prompt("introduce la ubicación del hotel");

let userHotelLocation = document.getElementById("hotelLocation");
userHotelLocation.innerHTML= hotel.location;

hotel.img = prompt("Introduce la url de la foto del hotel");

let userHotelImg = document.getElementById("hotelImg");
userHotelImg.src= hotel.img;


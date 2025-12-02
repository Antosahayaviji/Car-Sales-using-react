// src/data/cars.js

// Helper to build image paths
const img = (id) => `/cars/car${id}.jpg`; // default image for Buy Cars
const colorImg = (id, color) => `/cars/car${id}-${color}.jpg`; // color-specific images

// ✅ Real car names
const carNames = [
  "Toyota Corolla", "Honda Civic", "Ford Mustang", "Chevrolet Camaro", "Nissan Altima",
  "Hyundai Elantra", "Kia Seltos", "Volkswagen Polo", "Skoda Octavia", "Tata Harrier",
  "Mahindra XUV700", "Maruti Suzuki Swift", "Renault Kwid", "Jeep Compass", "BMW 3 Series",
  "Mercedes-Benz C-Class", "Audi A4", "Jaguar XE", "Volvo XC40", "Lexus ES",
  "Porsche 911", "Ferrari F8 Tributo", "Lamborghini Huracán", "Maserati Ghibli", "Aston Martin Vantage",
  "Rolls-Royce Ghost", "Bentley Continental GT", "Bugatti Chiron", "McLaren 720S", "Pagani Huayra"
];

export const CARS = carNames.map((name, i) => {
  const id = i + 1;
  const reviews = [
    { user: "Arun", text: "Smooth drive and great mileage.", stars: 4 },
    { user: "Meera", text: "Comfortable seats, value for money.", stars: 5 },
    { user: "Rahul", text: "Solid build, feels premium.", stars: 4 },
    { user: "Sneha", text: "Service network is strong.", stars: 5 },
    { user: "Vijay", text: "Great for city and highway.", stars: 4 },
  ];

  return {
    id,
    name,
    price: 500000 + id * 25000,
    transmission: id % 2 === 0 ? "Manual" : "Automatic",
    seats: id % 3 === 0 ? 7 : 5,
    fuel: id % 2 === 0 ? "Petrol" : "Diesel",

    // ✅ Show default image on Buy Cars page
    image: img(id),

    // ✅ Show color-specific images on Car Detail page
    colors: {
      red: colorImg(id, "red"),
      blue: colorImg(id, "blue"),
      black: colorImg(id, "black"),
      white: colorImg(id, "white"),
    },

    rating: (id % 5) + 1,
    reviews,
  };
});

// Optional: home page hero images
export const HOME_IMAGES = Array.from({ length: 12 }).map((_, i) => `/cars/car${i + 1}.jpg`);

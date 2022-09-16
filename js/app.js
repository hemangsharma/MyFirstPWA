const container = document.querySelector(".container");
const coffees = [
  {
    name: "Bulb",
    image: "images/image1.jpg"
  },
  {
    name: "Sunset",
    image: "images/image2.jpg"
  },
  {
    name: "Cat",
    image: "images/image3.jpg"
  },
  {
    name: "Post",
    image: "images/image4.jpg"
  },
  {
    name: "Evening",
    image: "images/image5.jpg"
  },
  {
    name: "Post",
    image: "images/image6.PNG"
  },
  {
    name: "Glass",
    image: "images/image7.jpg"
  },
  {
    name: "Tree",
    image: "images/image8.jpg"
  },
  {
    name: "Flame",
    image: "images/image9.jpg"
  }
];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="https://www.instagram.com/hemang_hs/" target="_blank">View</a>
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}

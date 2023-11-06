// DOM Elements
const resultItems = JSON.parse(localStorage.getItem("listingItems") ?? "{}");
const parsedResultItems = JSON.parse(resultItems);
const listContainer = document.getElementById("left-col");
let optionsP = document.createElement("p");
let h1 = document.createElement("h1");
listContainer.innerHTML = "";


const locationTerm = localStorage.getItem("location")

//Render list to the ui

optionsP.innerHTML = `${parsedResultItems.results.length} Options`;
h1.innerHTML = `Reommended Places IN ${locationTerm}`;
listContainer.append(optionsP);
listContainer.append(h1);
renderDataToUI(parsedResultItems.results);

function renderDataToUI(dataList) {
  dataList.forEach((item) => {
    let housediv = document.createElement("div");
    housediv.className = "house";
    housediv.innerHTML = `<div class="house-img">
                    <a href="/AirBnB/house.html"><img src="${item.images[0]}"/></a>
                </div>
                <div class="house-info">
                    <p>Property in ${locationTerm}</p>
                    <h3>${item.name}</h3>
                    <p>${item.bedrooms} Bedroom / ${item.bathrooms} Bathroom /${item.previewAmenities[0]} / ${item.previewAmenities[1]}</p>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <i class="far fa-star"></i>
                    <div class="house-price">
                        <p>${item.persons} Guest</p>
                        <h4>$ ${item.price.total} <span>/ day</span></h4>
                    </div>
                </div>`;
    housediv.addEventListener("click", () => {

      localStorage.setItem("houseItem", `${JSON.stringify(item)}`);
      redirectPage('house.html');
    });
    listContainer.append(housediv);
  });
}

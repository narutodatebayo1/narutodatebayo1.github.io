import { driversVga, driversMotherboard } from "../assets/javascript/drivers_list.js";

const url_params = new URLSearchParams(window.location.search);
const category = url_params.get('category')


const driversDiv = document.getElementById("driversDiv")

if(category === null) {

    driversDiv.innerHTML = `
        <div class="grey-div">
            <p class="poppins-bold color-blue title text-center">DRIVERS</p>
            <div class="category-list">
                <a class="category" href="drivers.html?category=graphics_card">
                    <img id="graphics-card-image" src="./assets/images/drivers_display/graphics_card.png" />
                    <p class="poppins-bold color-blue">GRAPHICS CARD</p>
                </a>
                <a class="category" href="drivers.html?category=motherboard">
                    <img id="motherboard-image" src="./assets/images/drivers_display/motherboard.png" />
                    <p class="poppins-bold color-blue">MOTHERBOARD</p>
                </a>
            </div>
        </div>
    `

} else if(category !== null) {

    driversDiv.innerHTML = `
        <div class="grey-div">
            <p class="poppins-bold color-blue title text-center">
                ${category === "graphics_card" ? "GRAPHICS CARD" : "MOTHERBOARD"}
            </p>
            <div id="driversList"></div>
        </div>
    `

    const driversList = document.getElementById("driversList")
    if(category === "graphics_card") {
        driversVga.forEach(vga => {
            driversList.innerHTML += `
                <div class="drivers-div">
                    <div class="drivers-image-div">
                        <img src="${vga.image}" />
                    </div>
                    <div class="drivers-text-div">
                        <p class="poppins-bold color-blue drivers-name">${vga.name}</p>
                        <a class="poppins-bold color-white download-button" href="${vga.link}" download>Download</a>
                    </div>
                </div>
            `
        })
    } else {
        driversMotherboard.forEach(motherboard => {
            driversList.innerHTML += `
                <div class="drivers-div">
                    <div class="drivers-image-div">
                        <img src="${motherboard.image}" />
                    </div>
                    <div class="drivers-text-div">
                        <p class="poppins-bold color-blue drivers-name">${motherboard.name}</p>
                        <a class="poppins-bold color-white download-button" href="${motherboard.link}" download>Download</a>
                    </div>
                </div>
            `
        })
    }

}
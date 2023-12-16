const path = window.location.pathname



const nav = document.getElementById('nav')
nav.innerHTML = `
    <div class="nav-div">
        <div class="ham-logo-div">
            <div class="ham-div" onclick="hamClick()">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <a href="/"><img src="./assets/images/logo/innovation.png" /></a>
        </div>

        <div class="search-bar">
            <div>
                <div class="lens-div" onclick="searchBarClick()">
                    <img src="./assets/images/others/lens.png" />
                </div>
                <input 
                    class="poppins-medium color-blue input" 
                    id="searchBar"
                    placeholder="Search" 
                    onkeydown="searchBarKeyDown(event)"
                />
            </div>
        </div>

        <div class="nav-link-div">
            <a class="poppins-semi-bold color-blue nav-link" href="/">
                Home
                <div 
                    class="nav-link-hover 
                    ${path === "/index.html" || 
                    path === "/" ? "current-page" : "different-page"}"
                ></div>
            </a>
            <a class="poppins-semi-bold color-blue nav-link" href="product.html">
                Product
                <div 
                    class="nav-link-hover 
                    ${path === "/product.html" 
                    ? "current-page" : "different-page"}"
                ></div>
            </a>
            <a class="poppins-semi-bold color-blue nav-link" href="drivers.html">
                Drivers
                <div 
                    class="nav-link-hover 
                    ${path === "/drivers.html" 
                    ? "current-page" : "different-page"}"
                ></div>
            </a>
            <a class="poppins-semi-bold color-blue nav-link" href="about.html">
                About
                <div 
                    class="nav-link-hover 
                    ${path === "/about.html" 
                    ? "current-page" : "different-page"}"
                ></div>
            </a>
        </div>
    </div>


    <div class="pop-up-before" id="pop-up">
        <div>
            <div class="cross" onclick="hamClick()"></div>
        </div>
        <a class="poppins-semi-bold color-blue" href="/">Home</a>
        <a class="poppins-semi-bold color-blue" href="/product.html">Product</a>
        <a class="poppins-semi-bold color-blue" href="/about.html">About</a>
    </div>
    <div class="background-before" id="background" onclick="hamClick()"></div>

`

const searchBar = document.getElementById("searchBar")

const url_params = new URLSearchParams(window.location.search);
const query = url_params.get('query')


function searchPageLoad() {
    searchBar.value = query;
}


function searchBarKeyDown(event) {
    if(event.key === "Enter" && searchBar.value !== "") {
        window.location = "/search.html?query=" + searchBar.value.toLowerCase()
        searchBar.value = query;
    }
}

function searchBarClick() {
    if(searchBar.value !== "") {
        window.location = "/search.html?query=" + searchBar.value.toLowerCase()
    }
}


const popUp = document.getElementById("pop-up")
const background = document.getElementById("background")
function hamClick() {
    if(popUp.className === "pop-up-before") {
        nav.className = "nav-after"
        popUp.className = "pop-up-after"
        background.className = "background-after"
    } else {
        nav.className = "nav-before"
        popUp.className = "pop-up-before"
        background.className = "background-before"
    }
}




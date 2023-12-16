import { getOneCategory } from "../assets/javascript/product_list.js";

const url_params = new URLSearchParams(window.location.search);
const category = url_params.get('category')
const id = url_params.get('id')

const oneCategory = getOneCategory(category)

const title = document.getElementById('title')
const productPage = document.getElementById('product-page')
function changeTitle() {
    // if(product === "graphics_card") title.innerHTML = "GRAPHICS CARD"
    // else if(product === "mini_pc") title.innerHTML = "MINI-PC"
    // else if(product === "storage") title.innerHTML = "STORAGE"
    // else if(product === "motherboard") title.innerHTML = "MOTHERBOARD"
    // else if(product === "memory") title.innerHTML = "MEMORY"
    // else if(product === "accessories") title.innerHTML = "ACCESSORIES"
}

if(category === null && id === null) {
    productPage.innerHTML = `
        <div class="category-div">
            <p class="poppins-bold color-blue title text-center">PRODUCT CATEGORY</p>
            <div class="category-list">
                <a class="category" href="product.html?category=graphics_card">
                    <img id="graphics-card-image" src="./assets/images/product_display/graphics_card.png" />
                    <p class="poppins-bold color-blue">GRAPHICS CARD</p>
                </a>
                <a class="category" href="product.html?category=mini_pc">
                    <img id="mini-pc-image" src="./assets/images/product_display/mini_pc.png" />
                    <p class="poppins-bold color-blue">MINI-PC</p>
                </a>
                <a class="category" href="product.html?category=storage">
                    <img src="./assets/images/product_display/storage.png" />
                    <p class="poppins-bold color-blue">STORAGE</p>
                </a>
                <a class="category" href="product.html?category=motherboard">
                    <img id="motherboard-image" src="./assets/images/product_display/motherboard.png" />
                    <p class="poppins-bold color-blue">MOTHERBOARD</p>
                </a>
                <a class="category" href="product.html?category=power_supply">
                    <img src="./assets/images/product_display/power_supply.png" />
                    <p class="poppins-bold color-blue">POWER SUPPLY</p>
                </a>
                <a class="category" href="product.html?category=memory">
                    <img id="memory-image" src="./assets/images/product_display/memory.png" />
                    <p class="poppins-bold color-blue">MEMORY</p>
                </a>
                <a class="category" href="product.html?category=accessories">
                    <img src="./assets/images/product_display/accessories.png" />
                    <p class="poppins-bold color-blue">ACCESSORIES</p>
                </a>
            </div>
        </div>
    `
} else if(category !== null && id === null) {

    productPage.innerHTML = `
        <div class="product-div grey-div">
            <p class="poppins-bold color-blue text-center title">${oneCategory.title}</p>
            <div class="product-list" id="product-list"></div>
        </div>
    `

    const productList = document.getElementById("product-list")
    oneCategory.products.forEach(product => {
        productList.innerHTML += `
            <a 
                class="products-div" 
                href="/product.html?category=${category}&id=${product.id}"
            >
                <div class="product-logo-div">
                
                <img class="product-logo" src=${product.logo} />
                </div>
                <img class="product-image" src=${product.image} />
                <p class="poppins-bold color-blue text-center product-name">${product.name}</p>
            </a>
        `
    })

} else if(category !== null && id !== null) {

    const currentProduct = oneCategory.products[id - 1]

    productPage.innerHTML = `
        <div class="grey-div">
            <p class="poppins-bold color-blue text-center title">${oneCategory.title}</p>
            <div class="product-description">
                <div class="center-div">
                    <div class="temp">
                        <div class="logo-div">
                            <img class="logo" src=${currentProduct.logo} />
                        </div>
                        <img class="image" src=${currentProduct.image} />
                    </div>
                </div>
                <div class="product-text">
                    <div>
                        <p class="poppins-bold color-blue product-title">${currentProduct.name}</p>
                    </div>

                    <div>
                        <p class="poppins-bold color-blue product-detail-title">Detail Product</p>
                        <p class="poppins-medium color-blue">Warranty: 5 Years</p>
                    </div>

                    <div>
                        <p class="poppins-bold color-blue buy-here-title">Buy Here</p>
                        <div class="buy-here-div">
                            <a href="${currentProduct.shopee}" target="_blank"><img src="./assets/images/toko_online/shopee.png" /></a>
                            <a href="${currentProduct.tokopedia}" target="_blank"><img src="./assets/images/toko_online/tokopedia.png" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="gap"></div>

        <div class="grey-div position-relative">
            <p class="poppins-bold color-blue text-center title">PRODUCT RECOMMENDED</p>
            <div class="product-list" id="product-list"></div>
        </div>
    `

    const productListDiv = document.getElementById("product-list")
    oneCategory.products.forEach(product => {
        if(product !== currentProduct) {
            productListDiv.innerHTML += `
                <a 
                    class="products-div" 
                    href="/product.html?category=${category}&id=${product.id}"
                >
                    <div class="product-logo-div">
                    
                    <img class="product-logo" src=${product.logo} />
                    </div>
                    <img class="product-image" src=${product.image} />
                    <p class="poppins-bold color-blue text-center product-name">${product.name}</p>
                </a>
            `
        }
    })

}



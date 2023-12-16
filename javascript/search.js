const url_params = new URLSearchParams(window.location.search);
const query = url_params.get('query')


const title = document.getElementById('title')
title.innerHTML = query

import { allCategory } from "../assets/javascript/product_list.js";

const searchResult = document.getElementById('res')


allCategory.forEach(category => {
    category.products.forEach(product => {
        if(product.name.toLowerCase().includes(query)) {
            searchResult.innerHTML += `
                <a 
                    class="products-div" 
                    href="/product.html?category=${category.url}&id=${product.id}"
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
})
console.log("Hello");

const fetchdata = async () => {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        const productList = document.getElementById('product-list');

        if (!productList) throw new Error('Product list element not found');

        productList.innerHTML = data.map(product => `
            <div class="item">
                <img src="${product.image}" alt="${product.title}" />
                <h2>${product.title}</h2>
                <p>Price: $${product.price}</p>
                <button class="Cartbtn" data-product='${JSON.stringify(product)}'>Add to Cart</button>
            </div>
        `).join('');
    } catch (error) {
        console.error(error.message);
    }
};
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('Cartbtn')) {
        const productData = JSON.parse(event.target.dataset.product);
        addToCart(productData);
    }
});



fetchdata();

const addToCart = (product) => {
    console.log(`Added ${product.title} to cart`);
}

let open = document.querySelector('.open');
let close = document.querySelector('.close');

document.addEventListener('DOMContentLoaded', () => {
    let open = document.querySelector('.open');
    let close = document.querySelector('.close');

    open.addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        sidebar.style.right = '0';
        sidebar.style.transition = '0.5s';
        sidebar.style.opacity = '1';
        sidebar.style.visibility = 'visible';
        document.querySelector('.close').style.display = 'block';
    });

    close.addEventListener('click', () => {
        const sidebar = document.getElementById('sidebar');
        sidebar.style.right = '-30%';
        sidebar.style.transition = '0.5s';
        sidebar.style.opacity = '0';
        sidebar.style.visibility = 'hidden';
        document.querySelector('.close').style.display = 'none';
    });
});

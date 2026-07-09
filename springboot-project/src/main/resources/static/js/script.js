// Welcome message
window.onload = function () {
    console.log("Welcome to Dinesh Shopping Store!");
};

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Shop Now button
const shopBtn = document.querySelector(".hero button");

if (shopBtn) {
    shopBtn.addEventListener("click", function () {
        document.querySelector("#mobiles").scrollIntoView({
            behavior: "smooth"
        });
    });
}

// Add to Cart button
document.querySelectorAll(".product-card button").forEach(btn => {
    btn.addEventListener("click", function () {
        alert("✅ Product added to cart!");
    });
});
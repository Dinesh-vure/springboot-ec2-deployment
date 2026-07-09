// ===============================
// DevOps Shop JavaScript
// ===============================

// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to DevOps Shop");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});

// Add To Cart

let cartCount=0;

const cartIcon=document.querySelector(".fa-cart-shopping");

const buttons=document.querySelectorAll(".product button");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        cartCount++;

        cartIcon.setAttribute("data-count",cartCount);

        showToast("✅ Product Added To Cart");

    });

});

// Toast Notification

function showToast(message){

    const toast=document.createElement("div");

    toast.className="toast";

    toast.innerText=message;

    document.body.appendChild(toast);

    setTimeout(()=>{

        toast.classList.add("show");

    },100);

    setTimeout(()=>{

        toast.classList.remove("show");

        setTimeout(()=>{

            toast.remove();

        },300);

    },2500);

}

// Search

const searchInput=document.querySelector(".search input");

searchInput.addEventListener("keyup",function(){

    let value=this.value.toLowerCase();

    document.querySelectorAll(".product").forEach(product=>{

        let text=product.innerText.toLowerCase();

        if(text.includes(value))
            product.style.display="block";
        else
            product.style.display="none";

    });

});

// Hero Button

const heroButton=document.querySelector(".hero button");

heroButton.addEventListener("click",()=>{

    document.querySelector("#mobiles").scrollIntoView({

        behavior:"smooth"

    });

});

// Scroll Button

const scrollBtn=document.createElement("button");

scrollBtn.innerHTML="⬆";

scrollBtn.id="scrollTop";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300)

        scrollBtn.style.display="block";

    else

        scrollBtn.style.display="none";

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
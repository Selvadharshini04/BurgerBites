const wrapper=document.querySelector(".sliderWrapper");
const menuItems=document.querySelectorAll(".menuItem");


//declaring an array to change the images and text
const products=[
    {
        id:1,
        title:"MUSHROOM SWISS BURGER",
        price:30,
        image:"images/burger-removebg-preview.png",
        desc:"Savory patty topped with sautéed mushrooms, Swiss cheese, and garlic aioli, served on a toasted artisan bun. Indulge in rich, earthy flavors—this gourmet burger is comfort food at its finest!"
    },
    {
        id:2,
        title:"SPICY JALAPENO BURGER",
        price:35,
        image:"images/jalapeno-removebg-preview.png",
        desc:"A fiery patty with pepper jack cheese, jalapeños, guacamole, lettuce, and spicy sriracha mayo on a sesame seed bun. Ready to spice up your life? This burger brings the heat and the flavor in every bite!"
    },
    {
        id:3,
        title:"CLASSIC CHEESE BURGER",
        price:28,
        image:"images/burger1-removebg-preview.png",
        desc:"A juicy patty topped with melted cheddar, crisp lettuce, tomato, onions, and pickles, finished with our signature sauce on a toasted bun. Simple, classic, and irresistibly satisfying—one bite will take you back to burger bliss!"
    },
    {
        id:4,
        title:"SPECIAL BBQ  BACON  BURGER",
        price:38,
        image:"images/bbq-removebg-preview.png",
        desc:"Smoky BBQ-flavored patty with crispy bacon, cheddar cheese, and onion rings, all drizzled with BBQ sauce on a brioche bun. For those who crave bold, smoky flavors—this burger is a taste of barbecue heaven!"
    },
    {
        id:5,
        title:"SPECIAL HAWAIIAN BURGER",
        price:35,
        image:"images/hawaain1-removebg-preview.png",
        desc:"Patty topped with grilled pineapple, ham, Swiss cheese, lettuce, and teriyaki sauce on a toasted bun. Escape to a tropical paradise with every bite—this burger is a sweet and savory getaway!"
    }
];


const  productImage=document.querySelector(".productImg");
const productTitle=document.querySelector(".productTitle");
const  productPrice=document.querySelector(".productPrice");
const  productDescription=document.querySelector(".productDesc");
const   productSizes=document.querySelectorAll(".size");

//function to slide and change the product details
let chosenProduct=products[0];

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        console.log("clicked"+index);
        wrapper.style.transform =`translateX(${-100 * index}vw)`;

        //change the chosenProduct
        chosenProduct=products[index];

        //changing the title
        productTitle.textContent=chosenProduct.title;

        //changing the Product
        productPrice.textContent="Price: $"+ chosenProduct.price;

        //changing the description
        productDescription.textContent=chosenProduct.desc;

        //changing the image
        productImage.src=chosenProduct.image;

    });
});

//changing the color of the size button when clicked
productSizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        productSizes.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });
        console.log(index);
        size.style.backgroundColor="black";
        size.style.color="white";
    });
});

//giving access to the payment box only when order is placed

const productButton =document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex";
});
close.addEventListener("click",()=>{
    payment.style.display="none";
});

const payButton=document.querySelector(".payButton");
payButton.addEventListener("click",()=>{
    payment.style.display="none";
    alert("Your order has been placed. We will notify you once it is out for delivery.");
});
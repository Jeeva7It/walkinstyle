const wrapper = document.querySelector(".sliderwrapper")
const menuItems = document.querySelectorAll(".menuitem")

const product=[{
  id: 1,
  title: "Air force",
  price: 5874,
  color:[
    {
    code:"black",
    img:"./img/air.png",
  },
  {
    code:"blue",
    img:"./img/air2.png",
  },
],
},
{
  id: 2,
  title: "Jorden",
  price: 3000,
  color:[
    {
    code:"light grey",
    img:"./img/jordan.png",
  },
  {
    code:"green",
    img:"./img/jordan2.png",
  },
],
},
{
  id: 3,
  title: "blazer",
  price: 5690,
  color:[
    {
    code:"grey",
    img:"./img/blazer.png",
  },
  {
    code:"dark green",
    img:"./img/blazer2.png",
  },
],
},
{
  id: 4,
  title: "crater",
  price: 4399,
  color:[
    {
    code:"black",
    img:"./img/crater.png",
  },
  {
    code:"lightgrey",
    img:"./img/crater2.png",
  },
],
},
{
  id: 5,
  title: "hippie",
  price: 6543,
  color:[
    {
    code:"grey",
    img:"./img/hippie.png",
  },
  {
    code:"black",
    img:"./img/hippie2.png",
  },
],
},
];

let choosenproduct = product[0]

const currentproductimges = document.querySelector(".imges");
const currentproducttitle = document.querySelector(".producttitle");
const currentproductprice = document.querySelector(".productprice");
const currentproductcolors = document.querySelectorAll(".color");
const currentproductsizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
  item.addEventListener("click", ()=>{
    //change current slide 
   wrapper.style.transform= `translate(${-100 * index}vw)`;
   //change the chossen product
   choosenproduct = product[index]
  
   //change text of current product
   currentproducttitle.textContent = choosenproduct.title;
   currentproductprice.textContent = "₹" + choosenproduct.price;
   currentproductimges.src = choosenproduct.color[0].img;
   //assign new colors
   currentproductcolors.forEach((color, index) => {
    color.style.backgroundColor = choosenproduct.color[index].code;
   });
  });
});
  currentproductcolors.forEach((color ,index) => {
    color.addEventListener("click", ()=>{
      currentproductimges.src = choosenproduct.color[index].img;
    });
  });

  currentproductsizes.forEach((size ,index) =>{
    size.addEventListener("click", ()=>{
      currentproductsizes.forEach((size) =>{
        size.style.backgroundColor="white";
      size.style.color="black";
      });
      size.style.backgroundColor="black";
      size.style.color="white";
    });
});

  const ok = document.querySelector(".ok");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");

  ok.addEventListener("click", ()=>{
    payment.style.display="flex";
  });
  close.addEventListener("click", ()=>{
    payment.style.display="none";
  });

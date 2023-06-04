const monDiv = document.querySelector('.mon')
const tueDiv = document.querySelector('.tue')
const wedDiv = document.querySelector('.wed')
const thuDiv = document.querySelector('.thu')
const friDiv = document.querySelector('.fri')
const satDiv = document.querySelector('.sat')
const sunDiv = document.querySelector('.sun')
const monPrice = document.querySelector('.monPrice')
const tuePrice = document.querySelector('.tuePrice')
const wedPrice = document.querySelector('.wedPrice')
const thuPrice = document.querySelector('.thuPrice')
const friPrice = document.querySelector('.friPrice')
const satPrice = document.querySelector('.satPrice')
const sunPrice = document.querySelector('.sunPrice')
monDiv.addEventListener("mouseover", function(){
    monDiv.style.opacity = "0.8";
    monPrice.style.display = "flex"
})
monDiv.addEventListener("mouseout", function(){
    monDiv.style.opacity = "1";
    monPrice.style.display = "none"
})
tueDiv.addEventListener("mouseover", function(){
    tueDiv.style.opacity = "0.8";
    tuePrice.style.display = "flex"
})
tueDiv.addEventListener("mouseout", function(){
    tueDiv.style.opacity = "1";
    tuePrice.style.display = "none"
})
wedDiv.addEventListener("mouseover", function(){
    wedDiv.style.opacity = "0.8";
    wedPrice.style.display = "flex"
})
wedDiv.addEventListener("mouseout", function(){
    wedDiv.style.opacity = "1";
    wedPrice.style.display = "none"
})
thuDiv.addEventListener("mouseover", function(){
    thuDiv.style.opacity = "0.8";
    thuPrice.style.display = "flex"
})
thuDiv.addEventListener("mouseout", function(){
    thuDiv.style.opacity = "1";
    thuPrice.style.display = "none"
})
friDiv.addEventListener("mouseover", function(){
    friDiv.style.opacity = "0.8";
    friPrice.style.display = "flex"
})
friDiv.addEventListener("mouseout", function(){
    friDiv.style.opacity = "1";
    friPrice.style.display = "none"
})
satDiv.addEventListener("mouseover", function(){
    satDiv.style.opacity = "0.8";
    satPrice.style.display = "flex"
})
satDiv.addEventListener("mouseout", function(){
    satDiv.style.opacity = "1";
    satPrice.style.display = "none"
})
sunDiv.addEventListener("mouseover", function(){
    sunDiv.style.opacity = "0.8";
    sunPrice.style.display = "flex"
})
sunDiv.addEventListener("mouseout", function(){
    sunDiv.style.opacity = "1";
    sunPrice.style.display = "none"
})
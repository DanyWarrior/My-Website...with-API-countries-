

// Getting data from localStorage
const array = JSON.parse(localStorage.getItem("countriesArray-withObjets"))
let countryName = localStorage.getItem("eachCountryName-perClick")
let countryFlag = localStorage.getItem("country-flag")




let img = document.querySelector(".descrip-countryFlag")
img.src = countryFlag
console.log(img)

let p1 = document.querySelector(".country-name")
p1.textContent = localStorage.getItem("eachCountryName-perClick")

let p2 = document.querySelector(".this-Is-The-Description")
p2.textContent = localStorage.getItem("selected-country")






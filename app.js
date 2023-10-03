
const card_container = document.querySelector(".card-container")
const btn_SearchInfo = document.querySelector(".searchInfo")
let inputCountryName = document.getElementById("name")

const unOrdered_countries = []
const ordered_countries = []


const addressURL = "https://restcountries.com/v3.1/all"

const countriesObj = []

fetch(addressURL)
    .then(res => res.json())
    .then(data => {
        
        data.forEach(element => {

            // console.log(element.name.official);
            // console.log(element.capital);
            // console.log(element.flags.svg);
            // console.log(element.population);

            let card = document.createElement("div")
            card.classList.add("card")

            let countryFlag = document.createElement("img")
            countryFlag.classList.add("countryFlag")
            countryFlag.src = element.flags.svg

            let countryName = document.createElement("p")
            countryName.classList.add("countryName")
            countryName.textContent = element.name.official


            card.append(countryFlag, countryName)
            unOrdered_countries.push(card)
            card_container.append(card)

            let country = 
            {
                name: element.name.official, 
                capital: element.capital, 
                flag: element.flags.svg, 
                population: element.population
            }
            countriesObj.push(country)
        });
    })

console.log(countriesObj);
console.log(unOrdered_countries);

btn_SearchInfo.addEventListener("click", ()=>{
    
    if (inputCountryName.value === ""){
        alert("Field is Empty")
    } else {
        console.log(inputCountryName.value);
    }
})
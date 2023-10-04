
const card_container = document.querySelector(".card-container")
const btn_SearchInfo = document.querySelector(".searchInfo")
const btn_Alphabetically = document.querySelector(".alphabetically")
let inputCountryName = document.getElementById("name")

const cards_divs_countries = []
let ordered_countries = []


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
            cards_divs_countries.push(card)
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
console.log(cards_divs_countries);



// intento de ordenar los paises alfabeticamente ... funciona
// agregar todo nuevamente a la pagina, pero ya ordenado
btn_Alphabetically.addEventListener("click", ()=>{
    ordered_countries = countriesObj
    ordered_countries.sort((country1, country2) => {
        country1 = country1.name
        country2 = country2.name
        if (country1 < country2){
            return -1
        }
        if (country1 > country2){
            return 1
        }
    })
    console.log(ordered_countries)
})





btn_SearchInfo.addEventListener("click", ()=>{
    
    if (inputCountryName.value === ""){
        alert("Field is Empty")
    } else {
        console.log(inputCountryName.value);
    }
})

// let a = ["vaca", "feo", "amor", "cirra"]

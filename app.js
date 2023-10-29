
const card_container = document.querySelector(".card-container")
const btn_SearchInfo = document.querySelector(".searchInfo")
const btn_Alphabetically = document.querySelector(".alphabetically")
let inputCountryName = document.getElementById("name")

<<<<<<< HEAD
=======
const cards_divs_countries = []
let ordered_countries = []

let flag = false
>>>>>>> 25d6b5f89816b5654dab82351bc91621ac301652


const addressURL = "https://restcountries.com/v3.1/all"

const countriesObj = [] // personalized array of Objts from the api

fetch(addressURL)
    .then(res => res.json())
    .then(data => {
        
        data.forEach(element => {
<<<<<<< HEAD
            // console.log(element)
=======
>>>>>>> 25d6b5f89816b5654dab82351bc91621ac301652
            // console.log(element.name.common);
            // console.log(element.capital);
            // console.log(element.flags.svg);
            // console.log(element.population);

            let link_containerForCard = document.createElement("a")
            link_containerForCard.classList.add("link_containerForCard")
            link_containerForCard.href = "./countriesInfo.html"
            link_containerForCard.target = "_blank"
            
            let card = document.createElement("div")
            card.classList.add("card")
            let countryFlag = document.createElement("img")
            countryFlag.classList.add("countryFlag")
<<<<<<< HEAD
            countryFlag.src = element.flags.png
            let countryName = document.createElement("p")
            countryName.classList.add("countryName")
            countryName.textContent = element.name.common

            

            card.append(countryFlag, countryName)

            link_containerForCard.append(card)
            //card_container.append(card)
            card_container.append(link_containerForCard)

            cards_divs_countries.push(card)

=======
            countryFlag.src = element.flags.svg
            let countryName = document.createElement("p")
            countryName.classList.add("countryName")
            countryName.textContent = element.name.common

            card.append(countryFlag, countryName)

            cards_divs_countries.push(card)
            card_container.append(card)
>>>>>>> 25d6b5f89816b5654dab82351bc91621ac301652

            cards_divs_countries.push(card)

            let country = 
            {
                flag: element.flags.svg,
                name: element.name.common, 
                official_name: element.name.official, 
                capital: element.capital, 
                population: element.population,
                languages: element.languages,
                currencies: element.currencies,
                region: element.region,
                continents: element.continents,
                maps: element.maps,
            }
            countriesObj.push(country)

        })
    });
    
const cards_divs_countries = []
let allDivsInsideContainer;
let ordered_countries = []


console.log(countriesObj);
console.log(cards_divs_countries);




<<<<<<< HEAD
// function to get all divs inside Card Container after fetch call
function gettingAllcardsDivs(){
    setTimeout(()=>{
        //
        allDivsInsideContainer = document.querySelectorAll(".card")

        allDivsInsideContainer.forEach(element =>{
            element.addEventListener("click", ()=>{
                console.log(`
The official name of this country is: ${countriesObj.official_name}
Its capital is: ${countriesObj.capital}
It has a population of: ${countriesObj.population}
The languages spoken are: ${countriesObj.languages}
The Currencies: ${countriesObj.currencies}
It is located in the region of: ${countriesObj.region}
In the continent: ${countriesObj.continents}
Here you can find it on the map: ${countriesObj.maps}`)

                
            
            })
        })
    }, 1000)
}


gettingAllcardsDivs()


// ********************************* BUTTONS ***********************************

=======
>>>>>>> 25d6b5f89816b5654dab82351bc91621ac301652
// I tried to sort the countries alphabetically ... it works
// Now I need to add everything back to the page, but already organized
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
<<<<<<< HEAD
    console.log(ordered_countries);
})


=======

    console.log(ordered_countries);
    console.log(ordered_countries)
})




>>>>>>> 25d6b5f89816b5654dab82351bc91621ac301652

btn_SearchInfo.addEventListener("click", ()=>{
    
    if (inputCountryName.value === ""){
        alert("Field is Empty")
    } else {
        console.log(inputCountryName.value);
    }
})

<<<<<<< HEAD
// ****************************************************************************




=======
// let a = ["vaca", "feo", "amor", "cirra"]
>>>>>>> 25d6b5f89816b5654dab82351bc91621ac301652

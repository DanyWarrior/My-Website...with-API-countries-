
const card_container = document.querySelector(".card-container")
const btn_SearchInfo = document.querySelector(".searchInfo")
const btn_Alphabetically = document.querySelector(".alphabetically")
let inputCountryName = document.getElementById("name")


const cards_divs_countries = []
let ordered_countries = []
let allDivsInsideContainer = []




const addressURL = "https://restcountries.com/v3.1/all"

const countriesObj_fromJSON = [] // personalized array of Objts from API

fetch(addressURL)
    .then(res => res.json())
    .then(data => {
        
        data.forEach(element => {
            // console.log(element)
            // console.log(element.name.common);
            // console.log(element.capital);
            // console.log(element.flags.svg);
            // console.log(element.population);


            let country = 
            {
                flag: element.flags.png,
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
            countriesObj_fromJSON.push(country)

        })
    });
    



console.log(countriesObj_fromJSON);




function creating_Cards(array){

    setTimeout(()=>{

        array.forEach(element => {
            // console.log(element.flag)
            // Esto es para probar y ver si se puede poner un div
            // dentro de un link, si esto funciona, entonces tengo que 
            // acomodar las cards dentro de links, de esa forma probar 
            // si puedo hacer link a otro HTML para que me muestre 
            // la descripcion del pais
            let link_containerForCard = document.createElement("a")
            link_containerForCard.classList.add("link_containerForCard")
            link_containerForCard.href = "./countriesInfo.html"
            link_containerForCard.target = "_blank"
    
            let card = document.createElement("div")
            card.classList.add("card")

            let countryFlag = document.createElement("img")
            countryFlag.classList.add("countryFlag")
            countryFlag.setAttribute("alt", "Flag image") 
            countryFlag.setAttribute("src", element.flag) 
    
            let countryName = document.createElement("p")
            countryName.classList.add("p_countryName")
            countryName.textContent = element.name
    
            card.append(countryName, countryFlag)
            link_containerForCard.append(card)
    
            card_container.append(link_containerForCard)
    
            cards_divs_countries.push(link_containerForCard)
        })
    }, 1000)
            
}




function ordering_Alphabetically(array){
    btn_Alphabetically.addEventListener("click", () => {

        while(card_container.firstChild){
            card_container.removeChild(card_container.firstChild)
        }
    
        array.sort(function (a, b) {
          if (a.name < b.name) {
            return -1;
          } else {
            return true;
          }
        });
    
        console.log(array)
    
        creating_Cards(array)
    
    });
}



console.log(cards_divs_countries);
console.log(countriesObj_fromJSON);


creating_Cards(countriesObj_fromJSON)
ordering_Alphabetically(countriesObj_fromJSON)





// function to get all divs inside Card Container after fetch call
function gettingAllcardsDivs(){
    setTimeout(()=>{
        //
        cards_divs_countries.forEach(element =>{
            element.addEventListener("click", ()=>{
                console.log(`
The official name of this country is: ${countriesObj_fromJSON.official_name}
Its capital is: ${countriesObj_fromJSON.capital}
It has a population of: ${countriesObj_fromJSON.population}
The languages spoken are: ${countriesObj_fromJSON.languages}
The Currencies: ${countriesObj_fromJSON.currencies}
It is located in the region of: ${countriesObj_fromJSON.region}
In the continent: ${countriesObj_fromJSON.continents}
Here you can find it on the map: ${countriesObj_fromJSON.maps}`)

            })
        })
    }, 1000)
}


gettingAllcardsDivs()












// // ********************************* BUTTONS ***********************************

// // I tried to sort the countries alphabetically ... it works
// // Now I need to add everything back to the page, but already organized
// btn_Alphabetically.addEventListener("click", ()=>{
//     ordered_countries = countriesObj
//     ordered_countries.sort((country1, country2) => {
//         country1 = country1.name
//         country2 = country2.name
//         if (country1 < country2){
//             return -1
//         }
//         if (country1 > country2){
//             return 1
//         }
//     })

//     console.log(ordered_countries);
// })




//     console.log(ordered_countries);
//     console.log(ordered_countries)



// btn_SearchInfo.addEventListener("click", ()=>{
    
//     if (inputCountryName.value === ""){
//         alert("Field is Empty")
//     } else {
//         console.log(inputCountryName.value);
//     }
// })





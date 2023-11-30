

const main = document.querySelector("main")
const card_container = document.querySelector(".card-container")
const btn_SearchInfo = document.querySelector(".searchInfo")
const btn_Alphabetically = document.querySelector(".btn-alphabetically")
let inputCountryName = document.getElementById("name")
let all_LI;
let creatingHTML_file;





const cards_divs_countries = []
let ordered_countries = []
let allDivsInsideContainer = []





const addressURL = "https://restcountries.com/v3.1/all"

const countriesObj_fromJSON = [] // personalized array of Objts from API

const country_ul_element = document.getElementById("country-list")
const country_input_element = document.getElementById("country-input")
const countries_Array = []

fetch(addressURL)
    .then(res => res.json())
    .then(data => {

        // Adding the country's name to an array
        // countries_Array = data.map( x => x.name.common)
        // countries_Array.sort()

        // loadData(countries_Array, country_ul_element)
        
        data.forEach(element => { //        ... use an if() to check if there is an empty value
            if (element.languages == "undefined"){
                console.log("nothing here");
            }
            // console.log(element)
            // console.log(element.idd.suffixes)
            // console.log(element.name.common);
            // console.log(element.capital);
            // console.log(element.flags.svg);
            // console.log(element.population);
            //console.log({languages: element.languages})
            //console.log(element.currencies)
            
            let country_languaje = Object.values(element.languages)[0]
            let currenci_name = Object.values(element.currencies)[0].name
            let currenci_symbol = Object.values(element.currencies)[0].symbol




            // Adding the country's name to an array
            countries_Array.push(element.name.common)
            countries_Array.sort()

            loadData(countries_Array, country_ul_element)



            
            let country = 
            {
                flag: element.flags.png,
                name: element.name.common, 
                official_name: element.name.official, 
                capital: element.capital, 
                population: element.population,
                lang: country_languaje,
                //currencies:,
                region: element.region,
                continents: element.continents,
                maps: element.maps,
                id: element.idd.suffixes,
                url: "https://restcountries.com/v3.1/name/" + element.name.common,
                description: `The official name of this country is: ${element.name.official}. 
                    Its capital is: ${element.capital}.
                    It has a population of: ${element.population}. 
                    The language spoken is: ${country_languaje}. 
                    The Currencies name: "${currenci_name} - symbol ${currenci_symbol}".  
                    It is located in the region of: ${element.region}. 
                    In the continent: ${element.continents}. 
                    Here you can find it on the map: ${element.maps.googleMaps}`
            } 
            countriesObj_fromJSON.push(country)
        })
    })

// languaje ... ${Object.values(element.languages)[0]}
// currencies ...  ${Object.values(element.currencies)[0].name} - symbol "${Object.values(element.currencies)[0].symbol}





// to add list of countries to UL(unordered-list)
function loadData(array, ul){

    if (array){
        ul.innerHTML = ""
        let innerElement = ""
        array.forEach(item => {
            innerElement += `<a class="linkList" href="./countriesInfo.html" target="_blank"><li>${item}</li></a>`
        })

        ul.innerHTML = innerElement

        all_LI = document.querySelectorAll("li")
        //console.log(all_LI)
        
        all_linkList = document.querySelectorAll(".linkList")
        //console.log(all_linkList)

        searchBar_functionality(all_LI, countriesObj_fromJSON)
    }
}


function filterData(array, searchText){
    return array.filter(item => item.toLowerCase().includes(searchText.toLowerCase()))
}


country_input_element.addEventListener("input", ()=>{
    const filtered = filterData(countries_Array, country_input_element.value)
    loadData(filtered, country_ul_element)
})







function showHide_ListOfCountries_searchBar(){

    country_ul_element.style.display = "none"

    country_input_element.addEventListener("mouseover", ()=>{
        country_ul_element.style.display = ""
    })

    main.addEventListener("mouseover", ()=>{
        country_ul_element.style.display = "none"
    })
}






function creating_Cards(array){

    setTimeout(()=>{

        array.forEach(element => {

            let link_containerForCard = document.createElement("a")
            link_containerForCard.id = element.id
            link_containerForCard.classList.add("link_containerForCard")
            // link_containerForCard.href = "./countriesInfo.html" + "/" + element.id
            // link_containerForCard.href = element.url
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
    
        creating_Cards(array)

        creating_Cards(countriesObj_fromJSON)
        countriesDescription(cards_divs_countries, countriesObj_fromJSON)
        showHide_ListOfCountries_searchBar()
        dataTo_localStorage()
    });
}







console.log(cards_divs_countries);
console.log(countriesObj_fromJSON);







// function to get the description of the country that has been Clicked
function countriesDescription(links, objects){
    setTimeout(() => {

        let linkName;

        links.forEach(element =>{

            element.addEventListener("click", ()=>{
                linkName = element.textContent
                localStorage.setItem("eachCountryName-perClick", linkName)

                for (ele of objects){
                    if (ele.name === linkName){
                        console.log(ele.description)
                        console.log(ele.flag)
                        localStorage.setItem("country-flag", ele.flag)
                        localStorage.setItem("selected-country-description", ele.description)
                    }
                }
            })
        })
    }, 1000);
}







// Adding funcionality to the Search Bar ... link to description country page
function searchBar_functionality(nodeArray_of_LI, objects){
    setTimeout(()=>{
        nodeArray_of_LI.forEach(element =>{
            element.addEventListener("click", ()=>{
                console.log(element.innerText);
                localStorage.setItem("eachCountryName-perClick", element.innerText)
                
                objects.forEach(ele =>{
                    if (ele.name === element.innerText){
                        console.log(ele.flag);
                        console.log(ele.description);
                        localStorage.setItem("country-flag", ele.flag)
                        localStorage.setItem("selected-country-description", ele.description)
                    }
                })
            })
        })
    }, 1000)
}






// Sending data to localStorage
function dataTo_localStorage(){
    setTimeout(() => {
        localStorage.setItem("countriesArray-withObjets", JSON.stringify(countriesObj_fromJSON))
        //console.log(localStorage)
    }, 1000);
}






creating_Cards(countriesObj_fromJSON)
ordering_Alphabetically(countriesObj_fromJSON)
countriesDescription(cards_divs_countries, countriesObj_fromJSON)
searchBar_functionality(all_LI)
showHide_ListOfCountries_searchBar()
dataTo_localStorage()



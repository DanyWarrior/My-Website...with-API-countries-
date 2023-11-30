# My-Website...with-API-countries-

*** To run the project ***
. Open Visual Studio Code and use Live Server extension




*** Project Description ***
. In my project you will be able to navigate and find all the countries in the world, see their names and flags, but you also will be able to do more. If you click on any of them you will have the possibility of reading a description of it, which will be information that you may not know.
. There is a search bar that you can use to filter the country that you are interested even quicker, and see its description or info.
. You'll have access to my GitHub account, and be able to know me better and Contact Me if you like.




*** Identify 3+ features from the provided list that you've integrated ***
-------------------------------------------------------------------------------------
---   1 feature from the ... Second Set of Features   ---
-------------------------------------------------------------------------------------
1- Retrieve data from a
 third-party API and use it to
 display something within your
 app.

... I use this feature calling an API
with this url: https://restcountries.com/v3.1/all 

... After the API call I started creating
elements in the HTML file using the DOM in JavaScript,
elements like divs, a, and p
utilizing the API as the main source




-------------------------------------------------------------------------------------
---    3 features from the ... First  Set of Features    ---
-------------------------------------------------------------------------------------
1- Use arrays, objects, sets or
 maps to store and retrieve
 information that is displayed
 in your app.

... The API was used to store all the data
that I needed like: 
const countriesObj_fromJSON = []
... This is a personalized array of Objects created from API
information and then used to create and displayed all the countries cards on the website
with a function called ... creating_Cards()



2- Analyze data that is stored in
 arrays, objects, sets or maps
 and display information about
 it in your app.

... You can find a button at the top right, it's function is to analize
the data and sort all countries alphabetically 
and displayed them: 
function ordering_Alphabetically()
... Data was analized to create a search bar and provide funcionality 
including filtering the countries while you are typing: 
function loadData()
function filterData()




3- Use a regular expression to
 validate user input and either
 prevent the invalid input or
 inform the user about it (in all
 cases prevent invalid input
 from being stored or saved).

... You can test this feature in the search bar,
if you type something else different to a country name stored in the website
you will get nothing from it, preventing mistyped



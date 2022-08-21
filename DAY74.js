//e)Print the country which uses US Dollars as currency.

const dollar = new XMLHttpRequest();
dollar.open("GET","https://restcountries.com/v3.1/all");
dollar.send();
dollar.onload = function asiaContinent(){
    let country = JSON.parse(dollar.response);
    //const final = country.reduce((element) =>{
        // return element.currencies === "USD";
//});
for (let key of country){
    console.log(key.currencies);
}

}
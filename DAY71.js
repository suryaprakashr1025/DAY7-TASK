//b)Get all the countries with a population of less than 2 lakhs using Filter function

let request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function population1(){
    let data = JSON.parse(request.response);
    let totalPopulation = data.filter((element)=>{
        return element.population< 200000;
    });
    console.log(totalPopulation);
}
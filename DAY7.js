//Solving problems using array functions on the rest countries' data.
//a) Get all the countries from the Asia continent /region using the Filter function

const regions = new XMLHttpRequest();
regions.open("GET","https://restcountries.com/v3.1/all");
regions.send();
//regions.responseType="Json";
regions.onload = function asiaContinent(){
    let countries = JSON.parse(regions.response);
    const final = countries.filter((element) =>{
      return element.region ==="Asia";   
});
console.log(final);}

//d)Print the total population of countries using reduce function

let request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all");
request1.send();
request1.onload = function population2(){
    let data1 = JSON.parse(request1.response);
     let result = data1.reduce((val1,val2)=>{
      return val1 + val2.population;  
},0);
console.log(result);
}
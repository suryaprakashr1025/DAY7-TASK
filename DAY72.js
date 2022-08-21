//C)Print the following details name, capital, flag using forEach function

const details = new XMLHttpRequest();
details.open("GET","https://restcountries.com/v3.1/all");
details.send();
details.onload = function each(){
    let detail = JSON.parse(details.response);
    detail.forEach((element) => {
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
       
    });
    
}
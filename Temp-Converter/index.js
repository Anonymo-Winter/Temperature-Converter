const celsius = document.querySelector("#celsius"),
fahrenheit = document.querySelector("#fahrenheit");
kelvin = document.querySelector("#kelvin");

// focusing to celsius
console.log(celsius,fahrenheit);
window.addEventListener("load", () => celsius.focus());

// celsius to Fahrenheit
celsius.addEventListener("input",() => {
    fahrenheit.value = ((celsius.value * 9) / 5 +32).toFixed(2)
    kelvin.value = (parseFloat(celsius.value)+273.15).toFixed(2);
    //clear fahrenheit input if celsius input is empty
    if(!celsius.value){
        fahrenheit.value = "";
        kelvin.value="";
    }
});
fahrenheit.addEventListener("input",() => {
    celsius.value = ((fahrenheit.value - 32)*(5/9)).toFixed(2)
    kelvin.value = (((fahrenheit.value - 32)*(5/9)) + 273.15).toFixed(2)
    //clear celsius input if fahrenheit input is empty
    if(!fahrenheit.value){
        celsius.value="";
        kelvin.value="";
    }
});

kelvin.addEventListener("input",() =>{
    celsius.value = (kelvin.value - 273.15).toFixed(2)
    fahrenheit.value = ((celsius.value * 9) / 5 +32).toFixed(2)
    if(!kelvin.value){
        celsius.value="";
        fahrenheit.value="";}
})

function reset()
{
    kelvin.value="";
    celsius.value="";
    fahrenheit.value="";
}
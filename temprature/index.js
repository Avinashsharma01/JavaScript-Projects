let calcius = document.querySelector("#calcius");
let fahrenheit = document.querySelector("#fahrenheit");
let kelvin = document.querySelector("#kelvin");


calcius.addEventListener("input", () => {
    let c = parseFloat(calcius.value);
    let f = (c * 9 / 5) + 32;
    let k = c + 273.15;
    fahrenheit.value = f;
    kelvin.value = k;
})

fahrenheit.addEventListener("input",()=>{
    let f= parseFloat(fahrenheit.value);
    let c =(f-32)*5/9;
    let k = (5/9)*(f+459.67)
    calcius.value=c;
    kelvin.value=k;
})


kelvin.addEventListener('input', ()=>{
    let k= parseFloat(kelvin.value);
    let c= k -273.15;
    let f= (k -273.15)*9/5+32;
    calcius.value=c;
    fahrenheit.value=f;
})

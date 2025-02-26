let loki ="";
let thor = "";
let phoneDiv = document.querySelectorAll(".phone");
let display = document.getElementById("input");
phoneDiv.forEach((phoneNum) => {
  phoneNum.addEventListener("click", () =>  {
    loki += phoneNum.textContent
    display.value = loki
  })
});

/* Add , sub , multi nd divide */
let symbols = ""
let sidedDivs = document.querySelectorAll(".sided");
sidedDivs.forEach((numbered) => {
    numbered.addEventListener("click", () => {
        symbols = String(numbered.textContent)
        thor = loki
        loki ="";
        if(thor == ""){
            loki = symbols + loki;
        }
    })
});

/* percentage */
document.getElementById("percent").addEventListener("click", () => {
    let percent = (loki /100);
    loki = 0;
    display.value=percent;
});

/* Result perform */
document.getElementById("result").addEventListener("click",() => {
    switch(symbols){
        case  "+": 
            let Added = (parseFloat(thor) + parseFloat(loki));
            display.value = Added;
            break
        case "-":
            let minus = (parseFloat(thor) - parseFloat(loki));
            display.value = minus;
            break
        case "*":
            let product = (parseFloat(thor) * parseFloat(loki));
            display.value = product;
            break
        case "/" :
            let last = (parseFloat(thor) / parseFloat(loki));
            display.value = last;
            break
        default :
           alert(loki)
    }
    //display.value = (parseFloat(thor) + parseFloat(loki))
});

/* clear key */
document.getElementById("clear").addEventListener("click",() => {
    loki = ""
    thor = ""
    document.getElementById("input").value = ""
});


//remove key
document.getElementById("remove").addEventListener("click", () => {
    let inputField = document.getElementById("input").value
    let len = inputField.length;
    if(loki != "" ){
        loki = loki.slice(0,len-1)
        document.getElementById("input").value= loki
    }
    else{
        document.getElementById("input").value= loki
    }
});


/* Integer into decimal */
document.getElementById("decimal").addEventListener("click", () => {
    let inputField = document.getElementById("input").value
    if(inputField !=  "") {
        loki += ".";
        document.getElementById("input").value= loki
    }
})
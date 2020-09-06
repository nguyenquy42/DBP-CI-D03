
document.getElementById("btn").addEventListener("click",() => {
    let number = document.getElementById("txt").value;
    if (Htang(number) && KTtrung(number) == 1) {
        alert("Metadrome") ;
    }
    else if (Htang(number) && KTtrung(number) == 0) {
        alert("Plaindrome") ;
    }
    else if (Hgiam(number) && KTtrung(number) == 1) {
        alert("Katadrome") ;
    }
    else if (Hgiam(number) && KTtrung(number) == 0) {
        alert("Nialpdrome") ;
    }
    else if (KTtrung(number) == number.length) {
        alert("Repdrome") ;
    }
    else {
        alert("Nondrome") ;
    }
    document.getElementById("txt").focus();
})

function Htang(number) 
{
    for (let i = 0; i < number.length - 1; i++) {
        for (let j = i + 1; j < number.length; j++) {
            if (number[i] > number[j]) {
                return false;
            }
        }
    }
    return true
}

function Hgiam(number) 
{
    for (let i = 0; i < number.length - 1; i++) {
        for (let j = i + 1; j < number.length; j++) {
            if (number[i] < number[j]) {
                return false;
            }
        }
    }
    return true
}

function KTtrung(number) 
{
    let trung = 1;
    for (let i = 1; i < number.length; i++) {
        if (number[0] == number[i]) {
            trung += 1;
        }
    }
    if (trung == number.length) {
        return trung;
    }
    else {
        trung = 1;
        for (let i = 0; i < number.length - 1; i++) {
            for (let j = i + 1; j < number.length; j++) {
                if (number[i] == number[j]) {
                    trung = 0;
                    return trung;
                }
            }
        }
        return trung;
    }
}

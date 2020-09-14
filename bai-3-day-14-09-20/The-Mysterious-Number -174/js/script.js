document.getElementById("btn").addEventListener("click", () => {
    let n = document.getElementById("txtInput").value;
    if (n.length == 4) {
        let x = 0;
        for (i in n) {
            if (n[0] == n[i]) {
                x++;
            }
        }
        if (x != 4) {
            kaprekar(n);
            document.getElementById("txtInput").value = "";
            document.getElementById("txtInput").focus();
        }
        else {
            alert("Các số không được trùng nhau")
            document.getElementById("txtInput").value = "";
            document.getElementById("txtInput").focus();
        }
    } else {
        alert("Nhập số có 4 chứ số")
        document.getElementById("txtInput").value = "";
        document.getElementById("txtInput").focus();
    }

})

function kaprekar(n) {
    let Wri = []
    let Num = count = 0
    let S_max = ''
    let S_min = '';
    let str = '' + n;
    let min = []
    let max = []

    for (let i = 0; i < str.length; i++) {
        min.push(str[i])
        max.push(str[i])
    }

    while (count <= 10) {
        let tmp = ''
        count++;
        S_max = Max([], max);
        S_min = Min([], min);
        Num = S_max - S_min;
        if (Num == 6174) {
            Wri.push(S_max + " - " + S_min + " = " + Num)
            //console.log(count)
            break;
        }
        tmp += Num
        /////////////////////////////////
        Wri.push(S_max + " - " + S_min + " = " + Num)
        //////////////////////////////
        if (Num < 1000) {
            console.log("----Không phải là hằng số Kaprekar----")
            break;
        }
        //////reset
        S_max = ''
        S_min = '';
        min = []
        max = []
        for (let i = 0; i < tmp.length; i++) {
            min.push(tmp[i])
            max.push(tmp[i])
        }
    }
    // document.getElementById("hien").innerHTML = "Số vòng lặp: " + count
    console.log("Số vòng lặp: " + count)
    for (let i = 0; i < Wri.length; i++) {
        console.log("Interation " + parseInt(i + 1) + ": " + Wri[i])
        // document.getElementById("hien").innerHTML = "Interation " + parseInt(i + 1) + ": " + Wri[i]
}
}

//// Sắp MAx Min
function Max([], max) {
    max.sort().reverse();
    let m = trans([], max);
    return m
}

function Min([], min) {
    min.sort();
    let m = trans([], min);
    return m
}

//// mãng => chuỗi
function trans([], a) {
    let str = ''
    for (let i = 0; i < a.length; i++) {
        str += a[i]
    }
    return str
}
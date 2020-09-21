document.getElementById("btn").addEventListener("click", () => {
    let n = document.getElementById("txtInput").value;
    let a = n.split(",")
    let str = a[0].toString()
    let Num = a[1].toString()
    console.log(str, Num)
    console.log(cut(str, Num))
    document.getElementById("txtInput").value = ""
    document.getElementById("txtInput").focus();
})

function cut(str, Num) {
    let S = ''
    let n = parseInt(Num)
    let x = 0
    let Arr = []

    for (let i = n; i < str.length; i) {
        if (str[i] == " ") {
            S += str.substring(x, i)
            Arr.push(S)
            S = ''
            x = i + 1
            i += n + 1
            if (i >= str.length) {
                S = str.substring(x, str.length)
                Arr.push(S)
                return Arr
            }
        } else {
            i--
        }
    }
    return Arr
}
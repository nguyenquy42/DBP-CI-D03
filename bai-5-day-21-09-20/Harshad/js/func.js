document.getElementById("btn").addEventListener("click", () => {
    let n = document.getElementById("txtInput").value;
    console.log(harshad(n))

})

function harshad(n) {
    let len = n.length
    let a = []
    let A = []
    let sum = 0
    for (i in n) {
        sum += parseInt(n[i])
    }
    if (parseInt(n) % sum == 0) {
        let x = parseInt(n) - parseInt(n[len - 1])
        for (let i = x; i <= x + 10; i++) {
            sum = 0
            let y = i.toString()
            for (j in y) {
                sum += parseInt(y[j])
            }
            if (parseInt(i) % sum == 0) {
                a.push(i)
            }
        }
        let h = a.indexOf(parseInt(n));
        console.log(a)
        A.push(a.length)
        A.push(h + 1)
        return A
    }
    else {
        A.push(a.length)
        A.push(0)
        return A
    }
}
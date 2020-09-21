
document.getElementById("btn").addEventListener("click", () => {
    let n = document.getElementById("txtInput").value;
    console.log(finalCountDown(n))
    document.getElementById("txtInput").focus()
})

function finalCountDown(n) {
    let a = n.split(" ")
    let len = a.length
    let Arr = []
    let Count = []
    for (let i = 0; i < len; i++) {
        if (a[i] == parseInt(a[i + 1]) + 1) {
            Arr.pop(a[i])
            Arr.push(a[i])
            Arr.push(a[i + 1])
        } else if (Arr.length >= 2) {
            Count.push(Arr)
            Arr = []
            if (a[i + 1] == 1) {
                Arr.push(a[i + 1])
                Count.push(Arr)
                Arr = []
            }
        } else {
            Arr = []
        }
    }
    Count.unshift(Count.length)
    return Count
}
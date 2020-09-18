let a = []

document.getElementById("btn").addEventListener("click", () => {
    let n = document.getElementById("txtN").value;
    for (let i = 0; i <= n; i++) {
        a.push(padovan(n - i));
    }
    document.getElementById("show").innerHTML = a.reverse().join("-")
    a = []
    document.getElementById("txtN").focus();
})

function padovan(n) {
    let Sum = 0;
    if (n == 0 || n == 1 || n == 2) {
        return 1;
    } else {
        Sum = padovan(n - 2) + padovan(n - 3)
        return Sum
    }
}
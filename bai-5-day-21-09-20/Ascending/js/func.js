document.getElementById("btn").addEventListener("click", () => {

    let n = document.getElementById("number").value;
    if(n == 0){
        document.getElementById("hien").innerHTML = "Nhập số vô bạn ơi......"
        return
    }
    if (kiemTra(n)) {
        document.getElementById("hien").innerHTML = "Chuổi là một dảy số tăng dần => True"
    } else {
        document.getElementById("hien").innerHTML = "Chuổi không tăng dần => False"
    }

    document.getElementById("number").focus()

})

function kiemTra(n) {

    let len = n.length
    let a = []
    let count = 0;

    for (let i = 2; i < len; i++) {
        count = len / i
        if (count <= 0) {
            break;
        } else if (count != Math.floor(count)) {
            continue;
        } else {
            for (let j = 0; j < len; j += count) {
                a.push(n.substr(j, count))
            }
            for (let x = 0; x < a.length - 1; x++) {
                if (a[x] != a[x + 1] - 1) {
                    a = []
                }
            }
            if (a.length != 0) {
                return true
            }

        }
    }
    return false
}
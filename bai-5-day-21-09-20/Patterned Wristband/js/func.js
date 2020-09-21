document.getElementById("btn").addEventListener("click", () => {
    let s = document.getElementById("txtInput").value;
    if (isWristband(s)) {
        console.log("True")
    }
    else {
        console.log("False")
    }
    document.getElementById("txtInput").focus()

})


function Left([], a) {
    let y = a.length;
    let x = a[0].length
    let min = min2 = 0
    let flag = 0
    if (y < x) {
        flag = -1
        min = y;
    } else if (y > x) {
        flag = 1
        min = x;
    } else {
        flag = 0
        min = x
    }
    min2 = min
    let tmp = 0
    if (!(a[1].includes(a[0][x - 1]))) {
        return false
    }
    if (!(a[1].includes(a[y - 1][0]))) {
        return false
    }

    for (let i = 0; i < y; i++) {
        for (let j = 0; j < min; j++) {
            if (a[i][0] != a[i + j][j]) {
                return false;
            }
        }
        if (flag == 0 || flag == -1) {
            min--;
        } else if (flag == 1) {
            if (i > flag) {
                min--;
            }
        }
    }
    for (let i = 0; i < x - 1; i++) {
        for (let j = 0; j < min2; j++) {
            if (a[0][i] != a[j][j + i]) {
                return false;
            }
        }
        if (flag == 0 || flag == 1) {
            min2--;
        } else if (flag == -1) {
            if (i > 1) {
                min2--;
            }
        }
    }
    return true
}

function Right([], a) {
    var x = []
    for (let i = 0; i < a.length; i++) {
        x.push(a[i].reverse())
    }
    if (Left([], x)) {
        return true
    }
    return false
}


function isWristband(s) {
    let a = s.split(",")
    let arr = []
    let arr2 = []
    arr.push(a[0].split(" "))
    arr2.push(a[0].split(" "))
    for (let i = 1; i < a.length; i++) {
        arr.push(a[i].split(" "))
        arr[i].shift()
        arr2.push(a[i].split(" "))
        arr2[i].shift()
    }
    for (let i = 0; i < a.length; i++) {
        console.log(arr[i])
    }
    if (Left([], arr)) {
        console.log("Left")
        return true
    } else if (horizontal([], arr)) {
        console.log("Horizontal")
        return true
    } else if (vertical([], arr)) {
        console.log("vertical")
        return true
    } else if (Right([], arr2)) {
        console.log("Right")
        return true
    }
    else {
        return false
    }
}

function horizontal([], a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[0].length; j++) {
            if (a[i][0] != a[i][j]) {
                return false;
            }
        }
    }
    return true
}

function vertical([], a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[0].length; j++) {
            if (a[0][i] != a[j][i]) {
                return false;
            }
        }
    }
    return true
}

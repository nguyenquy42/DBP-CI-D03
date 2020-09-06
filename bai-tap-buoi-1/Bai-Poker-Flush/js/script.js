document.getElementById("btn").addEventListener("click", () => {
    let tbl = new Array();
    let hand = new Array();
    let a = document.getElementById("txtTable").value;
    let b = document.getElementById("txtHand").value;
    for (let i = 2; i < a.length; i += 4) {
        tbl.push(a.substr(i, 1));
        if (i < b.length) {
            hand.push(b.substr(i, 1));
        }
    }
    if (hand[0] != hand[1]) {
        document.getElementById("print").innerHTML = '=> False';
    }
    else {
        let count = 0;
        for (i of a) {
            if (i == hand[0]) {
                count++;
            }
        }
        if (count >= 3) {
            document.getElementById("print").innerHTML = '=> True';
        } else {
            document.getElementById("print").innerHTML = '=> False';
        }
    }

    document.getElementById("txtTable").focus();
})

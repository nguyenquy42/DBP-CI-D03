var array = []


document.getElementById("btn").addEventListener("click", () => {
    getVal();
    if (flush() == "royal" && sameType() == 5) {
        // console.log("Royal Flush")
    document.getElementById("hien").innerHTML = "Royal Flush"

    }
    else if (sameType() == 5 && flush() == "straight") {
        console.log("Straight Flush")
    document.getElementById("hien").innerHTML = "Straight Flush"
    }
    else if (SameName() == '4') {
        console.log("Four of a Kind")
    }
    else if (SameName() == 'cù') {
        console.log("Full House")
    document.getElementById("hien").innerHTML = "Full House"
    }
    else if (sameType() == 5) {
        console.log("Flush")
    document.getElementById("hien").innerHTML = "Flush"
    }
    else if (flush() == "royal" || flush() == "straight") {
        console.log("Straight")
    document.getElementById("hien").innerHTML = "Straight"
    }
    else if (SameName() == 'sám') {
        console.log("Three of a Kind")
    document.getElementById("hien").innerHTML = "Three of a Kind"
    }
    else if (SameName() == 'two pair') {
        console.log("Two Pair")
    document.getElementById("hien").innerHTML = "Two Pair"
    }
    else if (SameName() == 'pair') {
        console.log("Pair")
    document.getElementById("hien").innerHTML = "Pair"
    }
    else {
        console.log("High Card")
    document.getElementById("hien").innerHTML = "High Card"
    }
    array = [];
})

function cardVal(name, type) {
    this.Name = name;
    this.Type = type;
}

/// Lấy giá trị
function getVal() {
    var input = document.getElementById("txtInput").value;
    for (let i = 0; i < input.length; i += 2) {
        if (input[i] != " ") {
            var card = new cardVal();
            if (input[i] == 1) {
                card.Name = "90";
                card.Type = input[i + 2];
                i++;
            } else {
                card.Name = input[i];
                card.Type = input[i + 1];
            }
            array.push(card);
        }
        else {
            i--;
        }
    }
}

/// Xét sảnh
function flush() {
    let list1 = '2345678990JKQ'
    let list2 = '2345678990JQ'
    let tmp = []; /// mãng tạm
    let flag = ''; /// giá trị đã sắp xếp
    for (let i = 0; i < array.length; i++) {
        tmp.push(array[i].Name);
    }
    tmp.sort();
    for (let i = 0; i < tmp.length; i++) {
        flag += tmp[i]
    }
    //console.log(flag)

    if (flag.includes("90AJKQ")) {
        //console.log("royal");
        return "royal";
    }
    else if (list1.includes(flag) || list2.includes(flag)) {
        //console.log("straight");
        return "straight";
    }
}

////// xét đồng chất
function sameType() {
    let count = 1;
    for (let i = 1; i < array.length; i++) {
        if (array[0].Type == array[i].Type) {
            count++;
        }
    }
    if (count == 5) {
        return count;
    }
}

///// xét tên bài
function SameName() {
    ////
    let count = 0; /// dùng đếm số bài giống nhau

    for (let i = 0; i < 2; i++) {
        count = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i].Name == array[j].Name) {
                count++;
            }
        }
        if (count == 4) { /// tứ quý có 4 lá trong 5 lá
            return '4'
        }
    }
    //// không tứ quý
    if (count != 4) {
        let sum = 0; /// đếm số loại bài khác nhau
        let flag = []; /// mãng chứa các phần tử khác nhau

        for (let i = 0; i < array.length; i++) {
            flag.push(array[i].Name);
        }
        // Nếu giống nhau thì xóa
        for (let i = 0; i < flag.length - 1; i++) {
            for (let j = i + 1; j < flag.length; j++) {
                if (flag[i] == flag[j]) {
                    flag.splice(j, 1)
                    j--;
                }

            }
        }

        sum = flag.length; /// độ dài
        // console.log(sum)
        // console.log(flag)

        if (sum == 2) { /// Có 2 loại => tỉ lệ 2:3
            return 'cù'
        }
        /// Nếu ko phải cù
        else if (sum == 3) { /// có 3 loại => 3:1:1 2:2:1
            for (let i = 0; i < array.length; i++) {
                let count = 1; /// đếm số lượng giống

                for (let j = i + 1; j < array.length; j++) {
                    if (array[i].Name == array[j].Name) {
                        count++;
                        if (count == 3) {
                            return 'sám';
                        }
                    }
                }
            }
            return 'two pair'
        }
        else if (sum == 4) {
            return 'pair'
        }
        else {
            return "rác"
        }
    }
}

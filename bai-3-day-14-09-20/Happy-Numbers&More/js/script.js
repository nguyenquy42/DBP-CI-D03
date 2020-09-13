
// function happyNumbers() {
//     var result = document.getElementById("happy-result")
//     var inputy = document.getElementById("happyValue").value
//     result.innerHTML=""
//     for (i = 1; i < inputy; i++) {

//        (happy(i, i)) 
         
//     }

// }

// function happy(value,value2) {
//     var result = document.getElementById("happy-result")
//     var lengthNum = value.toString().length;
//     var resultNumbers = 0

//     // for (var b = 0 ; b < lengthNum; b++) {

//     //     resultNumbers = resultNumbers + parseInt(value.toString().charAt(b)) * parseInt(value.toString().charAt(b))

//     // }
    
//     resultNumbers = resultNumbers + parseInt(value.toString().charAt(result)) * parseInt(value.toString().charAt(result))

//     if (resultNumbers == 4) {
//         return false
//     } else if (resultNumbers == 1) {
//         result.innerHTML += "<br> happy number  " + i
//         return true
//     }else{
//         happy(resultNumbers, value2);
//     }

// }

// window.onload=happyNumbers()

var result = document.getElementById("result")
document.getElementById('btn').addEventListener('click',()=>{
    let n = document.getElementById('number').value;
    // Biến cờ hiệu
    var flag = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        flag = false;
    }
    else{
        // lặp từ 2 tới n-1
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }
 
    // Kiểm tra biến flag
    if (flag == true){
        result.innerHTML += n + " là số nguyên tố <br/>"

    }
    else{
        result.innerHTML += n + " không phải là số nguyên tố <br/>"
    }
})

document.getElementById('btn').addEventListener('click',()=>{
    let number = document.getElementById('number').value;
    let S = 0
    for (var i = 1; i < number; i++)
    {
        if (number % i == 0){
            S += i
        }
    }
    if (S == number){
        result.innerHTML += number + " là số hoàn hảo <br/>"

    }
    else{
        result.innerHTML += number + " không phải là hoàn hảo <br/>"
    }
})

function isHappyChecker(n) {
    var arr = [];
    var newNum = 0;
    var arr = n.toString().split("");
    for (var i = 0; i < arr.length; i++) {
        newNum += Math.pow(arr[i], 2);
    }   
    console.log(arr)

    if (newNum === 1) {
        result.innerHTML = "đây là số happy <br/>"
        return true;
    } else {
        if (newNum === 58 || newNum === 4 || newNum == 37) {
            result.innerHTML = " đây không phải là happy <br/>"
            return false;
        }
        return isHappyChecker(newNum);
    }

}


document.getElementById('btn').addEventListener('click',()=>{

    let num = document.getElementById('number').value
    if (num < 0) {
        return false;
    }
    sum = 0; 
    
    for (n = 1; sum <= num; n++) 
    { 
        sum = sum + n; 
        if (sum == num) {
            result.innerHTML += num +"là triangular number ";
            return true; 
        }
    } 
    result.innerHTML += num + " không phải là triangular number"; 
    return false; 
})
document.getElementById("btn").addEventListener("click", () => {
    let number = document.getElementById("number").value;
    let S = Number(number[0]);
    for (let i = 0; i < number.length - 1; i++) 
    {
        if (number[i] == '6')
        {
            S += Number(number[i + 1]) * 2;
        }
        else if (number[i] != '1')
        {
            S += Number(number[i + 1]);
        }
    }
    alert("Kết quả: " + S + " Điểm");
})

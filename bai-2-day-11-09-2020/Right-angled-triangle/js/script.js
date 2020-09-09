
document.getElementById('btn').addEventListener('click',()=>{
    let number = document.getElementById('number').value
    let a = ''
    for ( let i = 1; i <= number; i++) {
        for (let j = 1; j <=i; j++ ){
            a +=j + '   '
        }
        console.log(a)
        a = ''
    }

})
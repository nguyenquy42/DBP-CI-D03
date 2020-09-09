document.getElementById('btn').addEventListener('click', ()=>{
    let number  = document.getElementById('number').value
    for (var i = 1; i <= number; i++) {
        if ((i % 3 == 0) && (i % 5 != 0)) { 
          console.log('Fizz'); 
        }
        if ((i % 3 != 0) && (i % 5 == 0)) { 
          console.log('Buzz');
        }
      
        if ((i % 3 == 0) && (i % 5 == 0)) { 
          console.log('FizzBuzz');
        }
      
        if ((i % 3 != 0) && (i % 5 != 0)) { 
          console.log(i); 
        }
      }
})
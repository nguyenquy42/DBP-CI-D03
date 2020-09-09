document.getElementById('btn').addEventListener('click',()=>{
  var test = document.getElementById('txt').value;
  var a = '';
  for ( var i = 0; i < test.length; i++) {
    var chu = test[i]
    if (chu == chu.toLowerCase()) {
      a = a + chu.toUpperCase();
    } else {
      a = a + chu.toLowerCase();
    }
  }
  document.getElementById('hienthi').innerText = a;
})

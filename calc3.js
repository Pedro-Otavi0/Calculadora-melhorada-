const resultado = document.getElementById("resultado")
let dataResult = ""


function inserir(n){
    dataResult += n
   document.getElementById("resultado").innerHTML = dataResult
    
   console.log(dataResult)
}
function apagar(){
    dataResult = ''
    resultado.innerHTML = '0'
}
function calcular(){
  eval(dataResult)
  let res = eval(dataResult)
  document.getElementById("resultado").innerHTML = eval(dataResult)
  dataResult = ''
  dataResult = res
}
function tira(){
    let x = dataResult = dataResult.slice(0, -1)
    document.getElementById("resultado").innerHTML = x
}
function tabuada(){
  let num = document.getElementById('txtn')
  let select = document.getElementById('seltab')
  if (num.value.length == 0){
    window.alert('Por favor, insira um numero na caixa!')
  } else {
    let n = Number(num.value)
    let c = 1
    select.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `select${c}`
      select.appendChild(item)
      c++
    }
  }
}
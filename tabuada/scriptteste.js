function calcular(){
    let num = document.getElementById('numero')
    let tab = document.getElementById('tabu')
    if(num.value.length == 0){
        alert('[ERRO] verifique o valor digitado')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ``
        for(let c = 1; c <= 10;c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
const inputa = document.querySelector("#a");
const inputb = document.querySelector("#b");
const inputc = document.querySelector("#c");
let a = inputa.value, b = inputb.value, c = inputc.value;
const button = document.querySelector("#btn-calc");
const answer = document.querySelector(".final-answer");
atualizaTela();

inputa.addEventListener("change", (e) =>{
    a = e.target.value;
    atualizaTela();
})
inputb.addEventListener("change", (e) =>{
    b = e.target.value;
    atualizaTela();
})
inputc.addEventListener("change", (e) =>{
    c = e.target.value;
    atualizaTela();
})

function atualizaTela(){
    const funcInput = document.querySelector("#equation-shower");
    funcInput.innerHTML = `${a ? a : '0'}x² ${b>=0 ? '+' : '-'} ${b ? b >= 0 ? b : b * -1 : '0'}x ${c>=0 ? '+' : '-'} ${c ? c >= 0 ? c : c * -1 : '0'} = 0`;
}

button.addEventListener("click", (e) =>{
    if(a == 0) {
         answer.innerHTML = "Esta equação não é quadrática"
         return
    }
    maths();
})

function maths() {
    const delta = b*b - 4*a*c; 
    const raiz1 = (b * -1 + Math.sqrt(delta))/(2 * a);
    const raiz2 = (b * -1 - Math.sqrt(delta))/(2 * a);
    const eqcReduzida = `${a}.(X - ${raiz1}).(X - ${raiz2})`;
    finish(delta, eqcReduzida);
}

function finish(delta, eqcReduzida){
    if ( delta >= 0 ) {
        answer.innerHTML = `Expressão Redutivel : <h6> ${eqcReduzida} </h6>`
    } else if ( delta < 0 ){
        answer.innerHTML = "Expressão Irredutivel"
    }
}


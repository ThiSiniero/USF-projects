class Tanque {
    constructor(densidadeLiquido, volumeTanque, areaTanque, tempo, gravidade, velocidadeVazao, massaLiquido) {
        this.densidadeLiquido = densidadeLiquido;
        this.volumeTanque = volumeTanque;
        this.areaTanque = areaTanque;
        this.tempo = tempo;
        this.gravidade = gravidade;
        this.velocidadeVazao = velocidadeVazao;
        this.massaLiquido = massaLiquido;
    }

    vazaoVolumetrica(){
        if(this.volumeTanque !== "" && this.tempo !== "") return this.volumeTanque / this.tempo;
        if(this.velocidadeVazao !== "" && this.areaTanque !== "")return this.velocidadeVazao * this.areaTanque;
    }

    vazaoMassica(){
        if(this.massaLiquido !== "" && this.tempo !== "") return this.massaLiquido / this.tempo;
        if(this.densidadeLiquido !== "" && this.vazaoVolumetrica() !== undefined)return this.densidadeLiquido * this.vazaoVolumetrica();
    }

    vazaoPeso(){
        if(this.densidadeLiquido !== "" && this.vazaoVolumetrica() !== undefined) return this.densidadeLiquido * this.gravidade * this.vazaoVolumetrica();
        if(this.massaLiquido !== "" && this.tempo !== "") return (this.massaLiquido * this.gravidade) / this.tempo;
    }


    acao(){
        console.log("Ação Necessária:")
        if(this.vazaoVolumetrica() > 1){
            console.log("-Fechar Válvula");
        }
        if(this.vazaoVolumetrica() < 0.2 ){
            console.log("-Abrir Válvula");
        }
    }
}

let buttom = document.querySelector("#btn");

buttom.addEventListener("click", (e) => {

    let volume = (document.querySelector("#volume")).value;
    let area = document.querySelector("#area").value;
    let tempo = document.querySelector("#tempo").value;
    let velocidade = document.querySelector("#velocidade").value;
    let densidade = document.querySelector("#densidade").value;
    let massa = document.querySelector("#massa").value;
    let vazaoVol = document.querySelector("#vazaoVol");
    let vazaoMas = document.querySelector("#vazaoMas");
    let vazaoPes = document.querySelector("#vazaoPes");

    let tanque = new Tanque(densidade, volume, area, tempo, 9.81, velocidade, massa);

    vazaoVol.innerHTML = ` Vazão Volumetrica: ${tanque.vazaoVolumetrica()} m³/s.`;
    vazaoVol.style.visibility = "visible";
    vazaoMas.innerHTML = ` Vazão Mássica: ${tanque.vazaoMassica()} kg/s.`;
    vazaoMas.style.visibility = "visible";
    vazaoPes.innerHTML = ` Vazão em Peso: ${tanque.vazaoPeso()} N/s.`;
    vazaoPes.style.visibility = "visible";
    
})
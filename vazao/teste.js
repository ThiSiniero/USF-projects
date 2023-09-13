class Tanque {
    constructor(densidadePetroleo, diametroTanque, alturaTanque, tempo, gravidade) {
        this.densidadePetrole = densidadePetroleo;
        this.diametroTanque = diametroTanque;
        this.alturaTanque = alturaTanque;
        this.tempo = tempo;
        this.gravidade = gravidade;
        this.profundidadeTanque = this.random(0, this.alturaTanque);
    }

    random(min, max) {
        return (Math.floor(Math.random() * (max - min) + min));
    };

    volume(){
        let raio = this.diametroTanque / 2;
        const pi = 3.141592;
        let volume = pi * raio * raio * this.profundidadeTanque;
        return volume;
    };

    vazaoVolumetrica(){
        return this.volume() / this.tempo;
    }

    vazaoMassica(){
        return this.densidadePetrole * this.vazaoVolumetrica();
    }

    vazaoPeso(){
        return this.densidadePetrole * this.gravidade * this.vazaoVolumetrica();
    }

    pressaoManometrica(){
        return this.densidadePetrole * this.gravidade * this.profundidadeTanque;
    }

    acao(){
        console.log("Ação Necessária:")
        if(this.vazaoVolumetrica() > 1){
            console.log("-Fechar Válvula");
        }
        if(this.vazaoVolumetrica() < 0.2 ){
            console.log("-Abrir Válvula");
        }
        if(this.pressaoManometrica() > 99180){
            console.log("-Liberar pressão pela válvula de escape")
        }
    }
}

let tanque = new Tanque(826.5, 4, 15, 10, 9.81);
console.log(`Profundidade: ${tanque.profundidadeTanque} m`);
console.log(`Volume: ${tanque.volume()} m³`);
console.log(`Vazão Volumetrica: ${tanque.vazaoVolumetrica()} m³/s`);
console.log(`Vazão Mássica: ${tanque.vazaoMassica()} kg/s`);
console.log(`Vazão em Peso: ${tanque.vazaoPeso()} N/s`);
console.log(`Pressão Manométrica: ${tanque.pressaoManometrica()} Pa`);
tanque.acao();
class pizza{
    constructor(masa, tamano, ingredientes){
        this.masa = masa;
        this.tamano = tamano;
        this.ingredientes = ingredientes;

    }
    prepara(){
        console.log(` preparando pizza ${this.tamano}, ${this.masa}, ingredientes: ${this.ingredientes}` );
    return this;
    }
    hornear(){
        console.log(` la pizza esta en el horno`);
        return this;
    }
    empacar(){
        console.log(` empacando pizza...` );
        console.log(` pizza lista para ser enviada` );
        return this;

    }
}
const pizzaPolloChampinones = new Pizza ('Masa delgada', 'Grande',['Queso', 'Pollo', 'Champiñones'] );
console.log(pizzaPolloChampinones.preparar());
console.log(pizzaPolloChampinones.hornear());
console.log(pizzaPolloChampinones.empacar());
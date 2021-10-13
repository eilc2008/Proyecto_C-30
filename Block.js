class Block{
    constructor(x, y, width, height) {
        var options = {
            restitution :0.4,
            friction :0.0,
        }
        
        //Agrega una propiedad de "visibilidad"
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
                
        //Agrega la imagen block.png

        World.add(world, this.body);
        
      }
     
      display(){
        console.log(this.body.speed);
        var pos= this.body.position;
        
        //Escribe el código para mostrar las cajas, solo cuando su velocidad esté por
        //debajo del umbral de 3.
        //escribir la condición de eliminación para las cajas, cuando la
        //velocidad es mayor que el umbral

        //usar tint para hacer que los bloques se desvanezcan
        //reducir la visibilidad por 5

        //escribir las condiciones push() y pop()


    }
}
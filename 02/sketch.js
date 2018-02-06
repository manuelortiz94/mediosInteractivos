var rojo = 0;

function setup() { 
  createCanvas(400, 311);		//canvas segun planos
  background(202,188,153);	//color de fondo para ahorrar trabajo
  
  noStroke();		//para que las figuras no tengan contorno
  
  //CUADRADOS NEGROS IZQUIERDA
  for(var posX=0; posX<100; posX=posX+53){				//variacion en posicion X
  	for(var posY=0; posY<311; posY=posY+155.5){		//variacion en posicion Y
      fill(34,32,33)															//color de relleno negro		
      rect(posX,posY,47,152.5)										//creacion del rectangulo, se repite cuatro veces, hasta que las condiciones de los FOR sean cumplidas
    }
  }
  
  //CUADRADOS NEGROS DERECHA
  for(var posX=300; posX<400; posX=posX+53){				//variacion en posicion X
  	for(var posY=0; posY<311; posY=posY+155.5){		//variacion en posicion Y
      fill(34,32,33)															//color de relleno negro		
      rect(posX,posY,47,152.5)										//creacion del rectangulo, se repite cuatro veces, hasta que las condiciones de los FOR sean cumplidas
    }
  }
  
  //CUADRADOS ROJOS
  for(var posY=0; posY<311; posY=posY+51.83){		//variacion en posicion Y
    fill(200,79,50)															//color de relleno rojo		
    rect(100,posY,100,25.92)										//creacion del rectangulo, se repite seis veces con saltos de su misma medida, utilizando el fondo anterior como una pequeña trampa
  }
  
  //CUADRADOS CAFES
	for(var posY=0; posY<311; posY=posY+51.83){		//variacion en posicion Y
    fill(72,49,35)															//color de relleno cafe		
    rect(200,posY,100,25.92)										//creacion del rectangulo, se repite seis veces con saltos de su misma medida
  }
  
  //CUADRADOS FONDO ALTERNO
	for(var posY=25.92; posY<311; posY=posY+51.83){		//variacion en posicion Y (se "salta" un paso)
    fill(180,167,135)															//color de relleno gris		
    rect(200,posY,100,25.92)										//creacion del rectangulo, se repite seis veces con saltos de su misma medida
  }
}
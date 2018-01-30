function setup() { 
  createCanvas(1000, 1000);
  background(225,212,193);
  
  //ellipse azul//
  strokeWeight(2);				//grosor linea//
  fill(119,92,159,200);		//Relleno//
  ellipse(-90,400,300,300);		//coordenadas de centro y diametros//
  
  //ELLIPSE GRIS//
  strokeWeight(2);						//grosor linea//
  fill(124,132,119);					//Relleno//
  ellipse(550,650,530,530);		//Coordenadas de centro y diametros
  
  //Triangulo Amarillo//
  beginShape();						//Comando de inicio de figura//
	strokeWeight(2);				//grosor linea//
  fill(196,164,49, 200);	//Relleno//
  vertex(520,50);					//Vertice 1//
  vertex(180,440);				//Vertice 2//
  vertex(640,590);				//Vertice 3//
  endShape(CLOSE);				//Termina comando de creacion de figura y se cierran los vertices//
  
  //Cuadrado rojo//
  strokeWeight(10);				//grosor linea//
  fill(116,16,19);					//relleno de figura
  rect(775,800,120,120);		//coordenadas de esquinas del rectangulo//
  
  //Linea 1//
  strokeWeight(10);				
  line(0,30,520,50);
  
  //Linea 2//
  strokeWeight(20);			
  line(0,50,520,620);
  
  //Linea 3//
  strokeWeight(5);				
  line(-90,400,410,400);
  
  //Linea 4//
  strokeWeight(5);				
  line(700,0,750,80);
  
  //Linea 5//
  strokeWeight(10);				
  line(600,0,1000,800);
  
  //Linea 6//
  strokeWeight(10);				
  line(0,700,100,900);
  
  //Linea 7//
  strokeWeight(5);				
  line(0,780,480,760);
  
  
  //Linea 8//
  strokeWeight(5);				
  line(950,850,830,850);
  
  
  //Linea 7//
  strokeWeight(5);				
  line(950,880,830,880);
  
} 


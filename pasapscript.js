


function Palabra(letra,descrip,word,state){
this.letra=letra;
this.descrip=descrip;
this.word=word;
this.state=state;
}



var palabras = [
  new Palabra('A', 'Planta que realiza la fotosíntesis.', 'Arbol', false),
  new Palabra('B', 'Tablero de madera con hilos y bolas para enseñar a contar.', 'Abaco',false),
  new Palabra('C', 'Es usado para cortar alimentos en la cocina.', 'Cuchillo', false),
  new Palabra('D', 'Encryptar un mensaje usando una serie de reglas.', 'Codificar', false),
  new Palabra('E', 'Pasar de fuera adentro.', 'Entrar', false),
  new Palabra('F', 'Se puede ver en un incendio.', 'Fuego', false),
  new Palabra('G', 'Dulce que se come por placer.', 'Golosina', false),
  new Palabra('H', 'Fruta dulce que sale tras la breva.', 'Higo', false),
  new Palabra('I', 'Último día laboral de la semana.', 'Viernes', false),
  new Palabra('J', 'Insecto que fabrica la miel.', 'Abeja', false),
  new Palabra('K', 'Bebida alcohólica incolora de origen ruso o polaco.', 'Vodka', false),
  new Palabra('L', 'Grupo de hojas impresas o escritas encuadernadas.', 'Libro', false),
  new Palabra('M', 'Profundidad grande, inmensa o sin fondo.', 'Abismo', false),
  new Palabra('N', 'Hacer que alguien recupere el conocimiento.', 'Reanimar', false),
  new Palabra('Ñ', 'Dar a una cosa un color distinto del que tiene.', 'Teñir', false),
  new Palabra('O', 'Anticuado, ya no se suele utilizar.', 'Obsoleto', false),
  new Palabra('P', 'Entrenar, ensayar una actividad o conocimiento que se quiere perfeccionar.', 'Practicar', false),
  new Palabra('Q', 'Periodo de cinco años.', 'Quinquenio', false),
  new Palabra('R', 'Principio hinduista según el cual el comportamiento en una vida influye en las sucesivas.', 'Karma', false),
  new Palabra('S', 'Que sucede o va después de otra cosa.', 'Posterior', false),
  new Palabra('T', 'Firme, constante, obstinado en el cumplimiento de un objetivo.', 'Tenaz', false),
  new Palabra('U', 'Transporte público para numerosas personas y que tiene un carril con su nombre.', 'Bus', false),
  new Palabra('V', 'Frutas usadas para realizar vino.', 'Uvas', false),
  new Palabra('W', 'Antiguo aparato musical portátil con auriculares.', 'Walkman', false),
  new Palabra('X', 'Gas noble, cuyo número atómico es el 54.', 'Xenon', false),
  new Palabra('Y', 'Quinto mes del año.', 'Mayo', false),
  new Palabra('Z', 'Última letra del abecedario.', 'Zeta', false)
]

var counter = 0
var points = 0
document.getElementById('definicion').innerHTML = 'Planta que realiza la fotosíntesis.'

function getNext(){
  var description = palabras[counter+1].descrip
  document.getElementById('definicion').innerHTML = description
  var input = document.getElementById('word').value // el valor del txt introduit per l'usuari desde l'input
  if(input.toLowerCase() === palabras[counter].word.toLowerCase()){
    console.log('correcta')
    document.getElementById(palabras[counter].letra).style='color:#4265f4'; //com a l'Id del HTML correspon a cada lletra en el mateix ordre
    //utilitzem (palabras[counter].letra) pq es correspon amb la lletra del ID de cada span on es mostren les lletres a la web.
    points++
    palabras[counter].state=true; // bien o mal contestada , pero contestada, por lo tanto no es un pasapalabra
  }
  else{
    document.getElementById(palabras[counter].letra).style='color:#d60404;'
    palabras[counter].state=true; // bien o mal contestada pero contestada
  }
  counter++ // ens conta cada ronda i ens serveix per a fer tmb com si fos un "for" per recorre l'array
  document.getElementById('word').value = ''
  if(counter===26){secondRound()}
  console.log(counter)
}

function pasapalabra() {
  var description = palabras[counter+1].descrip // counter+1 pq hem fet que la primera definició surti per defecte, per tant
  //ell ha de cmençar a mostrar les definicions desde 1 no dsd 0.
  document.getElementById('definicion').innerHTML = description
  counter++
  if(counter===26){secondRound()}
}

function secondRound(){
  // aquesta funció lo unic que fa es modificar l'array amb el que treballem.... pero llavors...pq no cal tornar a a trucar a getNext?? 
  //No habría que llamar otra vez a getNext?????? Como hce el proceso de jugar otra vez, pq aqui nadie dice de ugar nada, solo cambiem l'array.
  counter = 0  
  document.getElementById('modal').style.display = 'block';
  palabras = palabras.filter(function(obj){
    return obj.state===false; // les que no han estat contestades continuen tenint l'estat per defecte de false.
    // sobreescribim el array palabras amb els retornats del filter de manera que ara  'palabras' només conté 
    //els que tenen obj.state ==false
  })
}

}

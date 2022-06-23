function oneThroughTwenty() {
  let retorno = []

  for (let d = 1;  d <= 20; d++) {
    
    retorno.push(d)
  } 
  return retorno
}

console.log(oneThroughTwenty())

function evensToTwenty() {
    let retorneDois = []

    for (let i = 1; i <= 20; i++) {
      if( i % 2 == 0){
        retorneDois.push(i)
      }
    }
    return retorneDois
}
console.log(evensToTwenty())


function oddsToTwenty() {

  let retorneImpar = []

  for (let f = 1; f <= 20; f++) {
    if( f % 2 == 1) {
      retorneImpar.push(f)
    }
  }
  return retorneImpar
}

console.log(oddsToTwenty())

//call function oddsToTwenty

function multiplesOfFive() {

  let retorneCinco = []

  for (let g = 1; g <= 100; g++) {
    if( g % 5 == 0){
      retorneCinco.push(g)
    }
  }
  return retorneCinco

}
console.log(multiplesOfFive())

function squareNumbers() {

  let retorneQuadrado = []

  for (let g = 1; g*g <= 100; g++) {

    retorneQuadrado.push(g*g)
  }
  return retorneQuadrado

}

console.log(squareNumbers())
//call function squareNumbers

function countingBackwards() {

  let retorneUm = []

  for (let h = 20; h >= 1; h--) {

    retorneUm.push(h)
  }
  return retorneUm

}
console.log(countingBackwards())


function evenNumbersBackwards() {

  let retorneAoFim = []

  for (let j = 20; j >= 1; j--) {
    if( j % 2 == 0) {
      retorneAoFim.push(j)
    }
  }
  return retorneAoFim
}

console.log(evenNumbersBackwards())

function oddNumbersBackwards() {

  let vinteImpar = []

  for (let k = 20; k >= 1; k--) {
    if( k % 2 == 1) {
      vinteImpar.push(k)
    }
  }
  return vinteImpar
}
console.log(oddNumbersBackwards())

function multiplesOfFiveBackwards() {
    
  let deCemACinco = []

  for (let l = 100; l >= 1; l--) {
    if( l % 5 == 0) {
      deCemACinco.push(l)
    }
  }
  return deCemACinco
}
console.log(multiplesOfFiveBackwards())


function squareNumbersBackwards() {

  let retorneQuadradoInverso = []

  for (let g = 10; g*g >= 1; g--) {

    retorneQuadradoInverso.push(g*g)
  }
  return retorneQuadradoInverso

}

console.log(squareNumbersBackwards())

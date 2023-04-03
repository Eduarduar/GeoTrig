let cal_angulo1, cal_angulo2, cal_angulo3, cal_lado1, cal_lado2, cal_lado3, cal_area, cal_altura, escala = 10

const calcular_isosceles = function() {

  // Función para calcular los ángulos del triángulo isósceles
  const calcular_angulos_isosceles = function() {
    if (isosceles.angulo1) {
      cal_angulo1 = parseFloat(document.querySelector("#angulo1_isosceles").value)
      cal_angulo2 = cal_angulo1
      cal_angulo3 = 180 - (cal_angulo1 * 2)
      isosceles.angulo2 = true
    } else if (isosceles.angulo2) {
      cal_angulo2 = parseFloat(document.querySelector("#angulo2_isosceles").value)
      cal_angulo1 = cal_angulo2
      cal_angulo3 = 180 - (cal_angulo2 * 2)
      isosceles.angulo1 = true
    }
  }

  // Función para calcular los lados del triángulo isósceles
  const calcular_lados_isosceles = function() {
    if (isosceles.lado) {
      cal_lado1 = parseFloat(document.querySelector("#lado1_isosceles").value)
      cal_lado2 = cal_lado1
      cal_lado3 = 2 * cal_lado1 * Math.sin(cal_angulo3 * Math.PI / 360)
      cal_altura = Math.sqrt(cal_lado1 ** 2 - (cal_lado3 ** 2 / 4))
      isosceles.base = true
    } else if (isosceles.base) {
      cal_lado3 = parseFloat(document.querySelector("#lado2_isosceles").value)
      cal_altura = Math.sqrt(cal_lado1 ** 2 - (cal_lado3 ** 2 / 4))
      cal_lado2 = Math.sqrt((cal_lado3 ** 2 / 4) + cal_altura ** 2)
      isosceles.lado = true
    }
  }

  calcular_angulos_isosceles()
  calcular_lados_isosceles()

  // Calcular el área del triángulo isósceles
  cal_area = 0.5 * cal_lado3 * Math.sqrt(cal_lado1 ** 2 - (cal_lado3 ** 2 / 4))

  console.log(`Angulo 1: ${cal_angulo1}\nAngulo 2: ${cal_angulo2}\nAngulo 3: ${cal_angulo3}\nLado 1: ${cal_lado1}\nLado 2: ${cal_lado2}\nBase 3: ${cal_lado3}\nÁrea: ${cal_area}\nAltura: ${cal_altura}`)
  
  background(220)
  
  triangle(width/2-cal_lado3/2*escala, height/2 + cal_altura/2*escala, width/2+cal_lado3/2*escala, height/2+cal_altura/2*escala, width/2, height/2-cal_altura/2*escala)
}

const calcular_escaleno = function (){
  
}



// codigo para dibujar el triangulo


function setup() {
  var miDiv = document.querySelector(".container-canvas");
  var canvas = createCanvas(400, 400);
  canvas.parent(miDiv);
}
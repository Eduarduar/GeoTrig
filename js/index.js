function setup() {
    var miDiv = document.querySelector(".contenedor-trig");
    var canvas = createCanvas(500, 500);
    canvas.parent(miDiv);
}

let campos = 0

const validarInputs = function () {
    inputs.forEach((input) => {
        if (input.value != ''){
            campos++
        }
    })
    
    if (campos >= 2){
        inputs.forEach((input) => {
            if (input.value == '')
            input.setAttribute('disabled','disabled')
        })
    }else{
        inputs.forEach((input) => {
            if (input.value == '')
            input.removeAttribute('disabled')
        })
    }
    campos = 0
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarInputs)
    input.addEventListener('blur', validarInputs)
}) 

const radToDeg = (rad) => rad * 180 / Math.PI

const calcularTrig = function () {
    formTrig.validarCampos(inputs[0],inputs[1],inputs[2]) // nos aseguramos que los datos estan correctos
    if (formTrig.camposTrue() == 4){ // comprobamos que no halla mas datos de los necesarios
        let a,b,c,AI1, AI2,AI3,AE1,AE2,AE3,altura, area, s, tipo, datos // creamo las variables que vamos a usar
        inputs.forEach((input) => { // identificamos cual es el lado que nos falta
            if (a == undefined){
                a = input.value != '' ? input.value : a
            }else if (b == undefined){
                b = input.value != '' ? input.value : b
            }
            if (c == undefined){  // lado faltante
                c = input.value == '' ? input : c
            }
        })
        tipo = c.id == 'hipotenusa' ? 1 : 2     // comprobamos si vamos a calcular la hipotenusa o un cateto 
        if (tipo == 1){
            c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))  // calculamos el lado faltante
            console.log(c)
        }else{
            c = Math.sqrt(Math.pow(a, 2) - Math.pow(b, 2))
            console.log(c)
        }
        // calculamos todos los angulos internos
        if (tipo = 1){
            AI1 = radToDeg(Math.acos((a**2 + b**2 - c**2) / (2*a*b))) 
            AI2 = radToDeg(Math.acos((a**2 + c**2 - b**2) / (2*a*c)))
            AI3 = radToDeg(Math.acos((b**2 + c**2 - a**2) / (2*b*c)))
        }else{
            AI1 = radToDeg(Math.acos((c**2 + b**2 - a**2) / (2*c*b))) 
            AI2 = radToDeg(Math.acos((c**2 + a**2 - b**2) / (2*c*a)))
            AI3 = radToDeg(Math.acos((b**2 + a**2 - c**2) / (2*b*a)))
        }
        // calculamos todos los angulos externos
        AE1 = 180 - AI1
        AE2 = 180 - AI2
        AE3 = 180 - AI3

        a = parseFloat(a)
        b = parseFloat(b)
        s = (a + b + c) / 2
        area = Math.sqrt(s*(s-a)*(s-b)*(s-c))

        datos = tipo === 1 ? {
        lado1:  c.toFixed(2),
        lado2:  b.toFixed(2),
        base:   a.toFixed(2),
        AI1:    AI1.toFixed(2),
        AI2:    AI2.toFixed(2),
        AI3:    AI3.toFixed(2),
        AE1:    AE1.toFixed(2),
        AE2:    AE2.toFixed(2),
        AE3:    AE3.toFixed(2),
        Area:   area.toFixed(2),
        Altura: ((2 * area) / a).toFixed(2)
        } : {
        lado1:  a.toFixed(2),
        lado2:  b.toFixed(2),
        base:   c.toFixed(2),
        AI1:    AI1.toFixed(2),
        AI2:    AI2.toFixed(2),
        AI3:    AI3.toFixed(2),
        AE1:    AE1.toFixed(2),
        AE2:    AE2.toFixed(2),
        AE3:    AE3.toFixed(2),
        Area:   area.toFixed(2),
        Altura: ((2 * area) / c).toFixed(2)
        }
        
        respuesta(datos)

    }else{
        // en caso de que se ingrese un dato de mas
    }
}

const respuesta = function (triangleData) { // esta función se encargara de graficar la respuesta
    const {lado1, lado2, base} = triangleData;
    const altura = triangleData.Altura;
    
    // Calcular las coordenadas de los vértices del triángulo
    const x1 = 0;
    const y1 = altura;
    const x2 = base;
    const y2 = altura;
    const x3 = (Math.pow(lado1, 2) - Math.pow(lado2, 2) + Math.pow(base, 2)) / (2 * base);
    const y3 = 0;
    
    // Obtener las dimensiones del canvas
    const canvasWidth = document.getElementById("contenedor-trig").offsetWidth;
    const canvasHeight = document.getElementById("contenedor-trig").offsetHeight;
    
    // Calcular el factor de escala
    const scale = Math.min(canvasWidth / base, canvasHeight / altura) - 20;
    
    // Calcular el centro del canvas
    const centerX = canvasWidth / 2;
    const centerY = canvasHeight / 2;
    
    // Calcular las coordenadas escaladas de los vértices del triángulo
    const scaledX1 = centerX - ((base / 2) * scale);
    const scaledY1 = centerY + ((altura / 2) * scale);
    const scaledX2 = centerX + ((base / 2) * scale);
    const scaledY2 = centerY + ((altura / 2) * scale);
    const scaledX3 = centerX + ((x3 - (base / 2)) * scale);
    const scaledY3 = centerY - ((altura / 2 - y3) * scale);
    
    // Dibujar el triángulo
    background(33, 37, 41);
    stroke(255); // Establecer el color del borde en blanco
    noFill(); // Indicar que no se quiere relleno
    triangle(scaledX1, scaledY1, scaledX2, scaledY2, scaledX3, scaledY3);

    document.querySelector('.contenedor-resp h3').innerHTML = `Lado 1: ${triangleData.lado1} <br><br>Lado 2: ${triangleData.lado2} <br><br>Base: ${triangleData.base} <br><br>Angulo Interno 1: ${triangleData.AI1} <br><br>Angulo Interno 2: ${triangleData.AI2} <br><br>Angulo Interno 3: ${triangleData.AI3} <br><br>Angulo Externo 1: ${triangleData.AE1} <br><br>Angulo Externo 2: ${triangleData.AE2} <br><br>Angulo Externo 3: ${triangleData.AE3} <br><br>Area: ${triangleData.Area} <br><br>Altura: ${triangleData.Altura}`
} 

let boton = document.querySelector('.contenedor_button_confirmar button')

boton.addEventListener('click', calcularTrig)
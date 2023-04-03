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
        let a,b,c,AI1, AI2,AI3,AE1,AE2,AE3 // creamo las variables que vamos a usar
        inputs.forEach((input) => { // identificamos cual es el lado que nos falta
            if (a == undefined){
                if (input.value != ''){
                    a = input.value
                }
            }else if (b == undefined){
                if (input.value != ''){                     //actualizar a si falta la hipotenuza o un cateto
                    b = input.value
                }
            }
            // if (c == undefined){  // lado faltante
            //     if (input.value == ''){
            //         c = input
            //     }
            // }
        })
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));  // calculamos el lado faltante
        console.log(c)
        // calculamos todos los angulos internos
        AI1 = radToDeg(Math.acos((a**2 + b**2 - c**2) / (2*a*b))) 
        AI2 = radToDeg(Math.acos((a**2 + c**2 - b**2) / (2*a*c)))
        AI3 = radToDeg(Math.acos((b**2 + c**2 - a**2) / (2*b*c)))
        // calculamos todos los angulos externos
        AE1 = 360 - AI1
        AE2 = 360 - AI2
        AE3 = 360 - AI3

    }else{
        // en caso de que se ingrese un dato de mas
    }
}

const respuesta = function (datos) { // esta función se encargara de graficar la respuesta

} 
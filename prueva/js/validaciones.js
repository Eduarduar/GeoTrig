let inputs = document.querySelectorAll('form input')
const expresion = /^\d+(.\d+)?$/

const isosceles = {
     lado: false,
     base: false,
     angulo1: false,
     angulo2: false
}

const escaleno = {
    lado1: false,
    lado2: false,
    lado3: false,
    angulo1: false,
    angulo2: false,
    angulo3: false
}

const rectangulo = {
    cateto1: false,
    cateto2: false,
    hipotenusa: false,
    angulo1: false,
    angulo2: false
}

const validarForm = (e) => {
    switch (e.target.name){

        // triangulo isosceles

        case 'lado1_isosceles':
            isosceles.lado = validarCampo(e.target)
        break
        case 'angulo1_isosceles':
            isosceles.angulo1 = validarCampo(e.target)
        break
        case 'angulo2_isosceles':
            isosceles.angulo2 = validarCampo(e.target)
        break

        // triangulo escaleno

        case 'lado1_escaleno':
            escaleno.lado1 = validarCampo(e.target)
        break
        case 'lado2_escaleno':
            escaleno.lado2 = validarCampo(e.target)
        break
        case 'lado3_escaleno':
            escaleno.lado3 = validarCampo(e.target)
        break
        case 'angulo1_escaleno':
            escaleno.angulo1 = validarCampo(e.target)
        break
        case 'angulo2_escaleno':
            escaleno.angulo2 = validarCampo(e.target)
        break
        case 'angulo3_escaleno':
            escaleno.angulo3 = validarCampo(e.target)
        break

        // triangulo rectangulo

        case 'cateto1_rectangulo':
            rectangulo.cateto1 = validarCampo(e.target)
        break
        case 'cateto2_rectangulo':
            rectangulo.cateto2 = validarCampo(e.target)
        break
        case 'hipotenusa_rectangulo':
            rectangulo.hipotenusa = validarCampo(e.target)
        break
        case 'angulo1_rectangulo':
            rectangulo.angulo1 = validarCampo(e.target)
        break
        case 'angulo2_rectangulo':
            rectangulo.angulo2 = validarCampo(e.target)
        break
    }
}

const validarCampo = (target) => {
    if (expresion.test(target.value)){
        document.getElementById(`${target.id}`).classList.remove('is-invalid')
        document.getElementById(`${target.id}`).classList.add('is-valid')
        return true;
    }else{
        document.getElementById(`${target.id}`).classList.remove('is-valid')
        document.getElementById(`${target.id}`).classList.add('is-invalid')
        return false;
    }
}

const habilitarValidacion = function (){
    inputs = document.querySelectorAll('form input')
    inputs.forEach((input) => {
        input.addEventListener('keyup', validarForm)
        input.addEventListener('blur', validarForm)
    });
}
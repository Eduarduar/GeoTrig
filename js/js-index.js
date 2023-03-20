var form_tipoDeTriangulo    = document.querySelector("#tipoDeTriangulo")
var form_isosceles          = document.querySelector("#isosceles")
var form_escaleno           = document.querySelector("#escaleno")
var form_rectangulo         = document.querySelector("#rectangulo")

let button_anterior = document.querySelector(".d-flex .btn-outline-secondary")
let button_siguiente = document.querySelector(".d-flex .btn-outline-primary")

let form_actual = form_tipoDeTriangulo
let form_actualNum = 1
let form_anterior = undefined
let form_anteriorNum = undefined

form_isosceles.parentNode.removeChild(form_isosceles)
form_escaleno.parentNode.removeChild(form_escaleno)
form_rectangulo.parentNode.removeChild(form_rectangulo)
button_anterior.disabled = true

// triangulos  1

// isosceles   2
// escaleno    3
// rectangulo  4

// calculo 5

const anterior = function () {
    if (form_actualNum != 1){
        document.querySelector(".contenedor_form").innerHTML = ""
        if (form_actualNum == 5){
            document.querySelector(".contenedor_form").appendChild(form_anterior)
            form_actual = form_anterior
            form_actualNum = form_anteriorNum
            form_anterior = form_tipoDeTriangulo
            form_anteriorNum = 1
            habilitarValidacion()
            clear()
        }else {
            document.querySelector(".contenedor_form").appendChild(form_anterior)
            button_anterior.disabled = true
            form_actual = form_anterior
            form_actualNum = form_anteriorNum 
            form_anterior = undefined
            form_anteriorNum = undefined
        }
    }
}

const siguientes = function () {
    if (form_actualNum == 1){
        let value = 0
        const radioButtons = document.querySelectorAll('input[name="tipoDeTriangulo"]')
        radioButtons.forEach(radio => {
            if (radio.checked) {
              value = radio.value
              form_actualNum = value
            }
        })
        if (value != 0){
            document.querySelector(".contenedor_form").innerHTML = ""
            button_anterior.disabled = false
            form_anteriorNum = 1
            form_anterior = form_actual
            switch (value){
                case "2": 
                    document.querySelector(".contenedor_form").appendChild(form_isosceles)
                    form_actual = form_isosceles
                break
                case "3":
                    document.querySelector(".contenedor_form").appendChild(form_escaleno)
                    form_actual = form_escaleno
                break
                case "4":
                    document.querySelector(".contenedor_form").appendChild(form_rectangulo)
                    form_actual = form_rectangulo
                break
            }
            habilitarValidacion()
        }
    }else{
        switch (form_actualNum){
            case "2":
                let pass = false
                calcular_isosceles()
                if (isosceles.angulo1 && isosceles.angulo2)
                pass = true
                if (isosceles.lado && isosceles.base)
                pass = true
                if (!pass){
                    
                }else{
                    document.querySelector(".contenedor_form").innerHTML = `Angulo 1: ${cal_angulo1} <br> Angulo 2: ${cal_angulo2} <br> Angulo 3: ${cal_angulo3} <br> Lado 1: ${cal_lado1} <br> Lado 2: ${cal_lado2} <br> Base 3: ${cal_lado3} <br> Área: ${cal_area} <br> Altura: ${cal_altura}`
                    form_anterior = form_actual
                    form_anteriorNum = form_actualNum
                    form_actualNum = 5
                    form_actual = undefined
                }
            break
            case 3:
            break
            case 4:
            break
        }
    }
}

button_siguiente.addEventListener('click', siguientes)
button_anterior.addEventListener('click', anterior)
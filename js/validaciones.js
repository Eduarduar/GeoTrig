let inputs = document.querySelectorAll('form input')
const expresion = /^\d+(.\d+)?$/

const formTrig = {
    lado1:  false,
    lado2:  false,
    base:   false,  
    
    camposTrue() {
        let count = 0;
        for (let key in this) {
          if (this.hasOwnProperty(key) && this[key]) {
            count++
          }
        }
        return count
      },
      
      validarCampos: function (target1, target2, target3){
        this.lado1  = validarCampo(target1)
        this.lado2  = validarCampo(target2)
        this.base   = validarCampo(target3)
      }
} 

const validarForm = (e) => {
    switch (e.target.name){
        case 'lado1':
            formTrig.lado1 = validarCampo(e.target)
        break

        case 'lado2':
            formTrig.lado2 = validarCampo(e.target)
        break

        case 'base':
            formTrig.base = validarCampo(e.target)
        break
    }
}

const validarCampo = (target) => {
    if (expresion.test(target.value)){
        // document.getElementById(`${target.id}`).classList.remove('is-invalid')
        document.getElementById(`${target.id}`).classList.add('is-valid')
        return true
    }else{
        document.getElementById(`${target.id}`).classList.remove('is-valid')
        // document.getElementById(`${target.id}`).classList.add('is-invalid')
        return false
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm)
    input.addEventListener('blur', validarForm)
})
window.addEventListener('load', ()=> {
    const form = document.querySelector('#formulario')
    const nombre= document.getElementById('nombre')
    const apellido = document.getElementById('apellido')
    const phone = document.getElementById('phone')
    const email = document.getElementById('email')

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        validaCampos()
    })
    
    const validaCampos = ()=> {
        //capturar los valores ingresados por el usuario
        const nombreValor = nombre.value.trim()
        const apellidoValor = apellido.value.trim()
        const phoneValor = phone.value.trim()
        const emailValor = email.value.trim();
     
        //validando campo nombre
        //(!nombreValor) ? console.log('CAMPO VACIO') : console.log(nombreValor)
        if(!nombreValor){
            //console.log('CAMPO VACIO')
            validaFalla(nombre, 'Campo vacío')
        }else{
            validaOk(nombre)
        }

	
        //validando campo apellido
        //(!apellidoValor) ? console.log('CAMPO VACIO') : console.log(apellidoValor)
        if(!apellidoValor){
            //console.log('CAMPO VACIO')
            validaFalla(apellido, 'Campo vacío')
        }else{
            validaOk(apellido)
        }

	
        //validando campo nombre
        //(!phoneValor) ? console.log('CAMPO VACIO') : console.log(phoneValor)
        if(!phoneValor){
            //console.log('CAMPO VACIO')
            validaFalla(phone, 'Campo vacío')
        }else{
            validaOk(phone)
        }

        //validando campo email
        if(!emailValor){
            validaFalla(email, 'Campo vacío')            
        }else if(!validaEmail(emailValor)) {
            validaFalla(email, 'El e-mail no es válido')
        }else {
            validaOk(email)
        }
         

         


    }

    const validaFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);        
    }

})
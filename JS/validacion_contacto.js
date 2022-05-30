            //Validación de un formulario con Javascript
            function valida_no_nula(texto){
                if(texto.length == 0){
                    return false;
                } else{
                    return true;
                }
            }

            function valida_long(texto, max){
                if(texto.length > max){
                    return false;
                } else{
                    return true;
                }
            }

            function valida_envia() {
                //valido el nombre
                if (!valida_no_nula(document.fvalida.firstname.value)) {
                    alert("Tiene que escribir su nombre")
                    document.fvalida.firstname.focus()//foco en el campo del error
                    return 0;
                }

                //valido el apellido
                if (!valida_no_nula(document.fvalida.lastname.value)) {
                    alert("Tiene que escribir su apellido")
                    document.fvalida.lastname.focus()//foco en el campo del error
                    return 0;
                }

                //valido el mail
                if (!valida_no_nula(document.fvalida.mail.value)) {
                    alert("Tiene que escribir su email")
                    document.fvalida.mail.focus()//foco en el campo del error
                    return 0;
                }
                //Validación basada en expresiones regulares robadas de internet
                //Es lo mas simple que encontré que valida al menos que sea algo@algomas.otracosamas y no deja que pongas dos @
                var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!(document.fvalida.mail.value.toLowerCase().match(re))){
                    alert("Ingrese un email válido")
                    document.fvalida.mail.focus()//foco en el campo del error
                    return 0;
                }
    
                //valido el asunto
                if (!valida_no_nula(document.fvalida.subject.value)){
                    alert("Tiene que escribir un asunto")
                    document.fvalida.subject.focus()//foco en el campo del error
                    return 0;
                }
                //Menos de 50 caracteres
                if (!valida_long(document.fvalida.subject.value,50)){
                    alert("El asunto no puede exceder los 50 caracteres")
                    document.fvalida.subject.focus()//foco en el campo del error
                    return 0;
                }

                //Valido código de país
                //El mas largo que conozco es +882-16 de Thuraya, limito a 7 caracteres
                if (!valida_long(document.fvalida.country_code.value,7)){
                    alert("El código de país no puede exceder los 7 caracteres")
                    document.fvalida.country_code.focus()//foco en el campo del error
                    return 0;
                }
                if(document.fvalida.country_code.value.charAt(0) != "+"){
                    alert("El código de país debe empezar por un +")
                    document.fvalida.country_code.focus()//foco en el campo del error
                    return 0;
                }
                
                //Valido código de area
                //El mas largo que conozco es de 4 digitos
                if (!valida_long(document.fvalida.area_code.value,4)){
                    alert("El código de area no puede exceder los 4 caracteres")
                    document.fvalida.area_code.focus()//foco en el campo del error
                    return 0;
                }
                if (validarEntero(document.fvalida.area_code.value) == "") {
                    alert("El código de area debe ser un número entero")
                    document.fvalida.area_code.focus()//foco en el campo del error
                    return 0;
                }
               
                //Valido telefono
                if (validarEntero(document.fvalida.phone_number.value) == "") {
                    alert("El número de telefono debe ser un número entero")
                    document.fvalida.phone_number.focus()//foco en el campo del error
                    return 0;
                }

                //valido el mensaje
                if (!valida_no_nula(document.fvalida.message.value)) {
                    alert("Tiene que escribir un mensaje")
                    document.fvalida.message.focus()//foco en el campo del error
                    return 0;
                }
                //Menos de 1000 caracteres
                if (!valida_long(document.fvalida.message.value, 1000)) {
                    alert("El mensaje no puede exceder los 1000 caracteres")
                    document.fvalida.message.focus()//foco en el campo del error
                    return 0;
                }

                //Valido terminos y condiciones
                if(document.fvalida.terms.value != "accept"){
                    alert("Debe aceptar los términos y condiiones")
                    document.fvalida.terms.focus()//foco en el campo del error
                    return 0;    
                }

                /*//valido la edad. tiene que ser entero mayor que 18
                edad = document.fvalida.edad.value
                edad = validarEntero(edad)
                document.fvalida.edad.value = edad
                if (edad == "") {
                    alert("Tiene que introducir un número entero en su edad.")
                    document.fvalida.edad.focus()
                    return 0;
                } else {
                    if (edad < 18) {
                        alert("Debe ser mayor de 18 años.")
                        document.fvalida.edad.focus()
                        return 0;
                    }
                }*/
    
                //el formulario se envia
                alert("Muchas gracias por enviar el formulario");
                document.fvalida.submit();
            }
    
            function validarEntero(valor) {
                //intento convertir a entero.
                //si era un entero no le afecta, si no lo era lo intenta convertir
                valor = parseInt(valor)
    
                //Compruebo si es un valor numérico
                if (isNaN(valor)) {
                    //entonces (no es numero) devuelvo el valor cadena vacia
                    return ""
                } else {
                    //En caso contrario (Si era un número) devuelvo el valor
                    return valor
                }
            }
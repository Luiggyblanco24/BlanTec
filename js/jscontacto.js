
        function enviar() {
            let nombre = document.getElementById("nombre").value;
            let apellido = document.getElementById("apellido").value;
            let contacto = document.getElementById("contacto").value;
           
            if (!isNaN(nombre) || nombre=="") {
                Swal.fire({
                text: "No se permiten numeros ni espacios vacios vacios",
                icon: "error",
                timer:2000
                });
                document.getElementById("nombre").style.border=" 2px solid red"
            }
           else if  (!isNaN(apellido) || apellido=="") {
                Swal.fire({
                    text:"no se permiten numeros ni espacios vacios ",
                    icon: "error",
                    timer: 2000
                })
                document.getElementById("apellido").style.border="2px solid red"
            }
            else if (contacto=="" || contacto.length<7 && contacto.length>11 ) {
                Swal.fire({
                    title: "es obligatorio este campo",
                    icon: "error",
                    timer: 3000
                })
                document.getElementById("contacto").style.border="2px solid red"

            }
            else{
                document.getElementById("nombre").style.border=" 2px solid #008080";
                document.getElementById("apellido").style.border="2px solid #008080";
                document.getElementById("contacto").style.border="2px solid #008080";
                document.getElementById("nombre").value="";
                document.getElementById("apellido").value="";
                document.getElementById("contacto").value="";

                
                Swal.fire({
                title: "Hola " + nombre + " " + apellido,
                text: "te vamos a enviar un mensaje al " + contacto
                })
            }
        }
        
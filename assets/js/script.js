
function confirmarEnvio() {
  return confirm("¿Estás seguro de que deseas enviar el formulario?");
} 

/* lo tengo que sacar porque no funciona el formspree
function confirmarEnvio() {
  Swal.fire({
    title: '¿Estás seguro?',
    text: '¿Deseas enviar el formulario?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, enviar',
    cancelButtonText: 'No, cancelar'
  }).then((result) => {
    if (result.isConfirmed) {      
      document.getElementById('miFormulario').submit(); 
    }
  }); 

  return false;
    }
*/

function confirmarCancelacion() {
  Swal.fire({
    title: '¿Estás seguro?',
    text: 'Si cancelas, la información no se enviará.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, cancelar',
    cancelButtonText: 'No, continuar'
  }).then((result) => {
    if (result.isConfirmed) {  
      Swal.fire('Cancelado', 'El envío ha sido cancelado', 'info');
    }
  });

  return false;  
}


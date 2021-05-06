
$(document).ready(function(){
    $("#error1").hide()
    $("#txt1").blur(function(){
        console.log("txt1 perdio el foco")
//validacion para txt1
if( $("#txt1").val().length <3){
     $("#error1").html("nombre debe ser mayor a dos caracteres")
        $("#error1").fadeIn()
}
  
    });
    $("#txt1").focus(function(){
        console.log("txt1 gano el foco")
        $("#error1").fadeOut()
    });

    //btn enviar
    $("#form1").submit(function(){
        console.log("submit")
        

        var pass= $("#txt2").val()
        if  (pass.length <8){
            $("#error2").html("contraseña 8 caracteres")
            event.preventDefault()//esto hace que el formulario no se envie
        }
    });

});


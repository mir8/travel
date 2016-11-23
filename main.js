// COUNTRIES GALLERY 

// IMAGES GERMANY

var arrayImagenes = new Array();
    		arrayImagenes[0] = "img/Germany/G_BW_Min.jpg";
    		arrayImagenes[1] = "img/Germany/G_2.jpg";
    		arrayImagenes[2] = "img/Germany/G_3.jpg";
    		arrayImagenes[3] = "img/Germany/G_4.jpg";
    		arrayImagenes[4] = "img/Germany/G_5.jpg";

    		var contador = 0;

    		window.onload = function(){
        		cambiarImagen();
    			}
    			cambiarImagen = function(){
        			if(contador == arrayImagenes.length){
            		contador = 0;
        		}
        		document.getElementById("imagenes_G").src = arrayImagenes[contador];
        		contador++;
        	setTimeout(cambiarImagen, 2000);
    		}

$(document).ready(function(){

// MENÚ PAISES (interacción C - BW)
	
	$("#show").hide();
	
    $("#hide").mouseenter(function(){
        $("#hide").hide();
        $("#show").show();
    });
    $("#show").mouseleave(function(){
        $("#show").hide();
        $("#hide").show();
    });

  	$("#show2").hide();
	
      $("#hide2").mouseenter(function(){
          $("#hide2").hide();
          $("#show2").show();
     });
     $("#show2").mouseleave(function(){
          $("#show2").hide();
         $("#hide2").show();
      });

      $("#show3").hide();
	
      $("#hide3").mouseenter(function(){
          $("#hide3").hide();
         $("#show3").show();
     });
      $("#show3").mouseleave(function(){
       $("#show3").hide();
         $("#hide3").show();
      });

      $("#show4").hide();
	
      $("#hide4").mouseenter(function(){
        $("#hide4").hide();
         $("#show4").show();
    });
      $("#show4").mouseleave(function(){
          $("#show4").hide();
          $("#hide4").show();
      });

      $("#show5").hide();
	
      $("#hide5").mouseenter(function(){
         $("#hide5").hide();
         $("#show5").show();
     });
      $("#show5").mouseleave(function(){
          $("#show5").hide();
          $("#hide5").show();
     });

      $("#show6").hide();
	
      $("#hide6").mouseenter(function(){
          $("#hide6").hide();
          $("#show6").show();
      });
     $("#show6").mouseleave(function(){
         $("#show6").hide();
          $("#hide6").show();
    });

// SECTION GERMANY FOTOS (haciendo clic)

//   $("#G_2show,#G_3show,#G_4show,#G_5show").hide();
	
//    $("#G_BW_Min").click(function(){
//        $("#G_BW_Min").hide();
//        $("#G_2show").show();
//    });
//    $("#G_2show").click(function(){
//        $("#G_2show").hide();
//        $("#G_3show").show();
//    });
//    $("#G_3show").click(function(){
//        $("#G_3show").hide();
//        $("#G_4show").show();
//   });
//    $("#G_4show").click(function(){
//        $("#G_4show").hide();
//        $("#G_5show").show();
//    });
//    $("#G_5show").click(function(){
//        $("#G_5show").hide();
//        $("#G_BW_Min").show();
//    });

});

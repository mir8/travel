// IMAGES ROMENIA GALLERY

var arrayImagenes = new Array();
    		arrayImagenes[0] = "img/Romania/R_BW_Min.jpg";
    		arrayImagenes[1] = "img/Romania/R_2.jpg";
    		arrayImagenes[2] = "img/Romania/R_3.jpg";
    		arrayImagenes[3] = "img/Romania/R_4.jpg";
    		arrayImagenes[4] = "img/Romania/R_5.jpg";

    		var contador = 0;

    		window.onload = function(){
        		cambiarImagen();
    			}
    			cambiarImagen = function(){
        			if(contador == arrayImagenes.length){
            		contador = 0;
        		}
        		document.getElementById("imagenes_R").src = arrayImagenes[contador];
        		contador++;
        	setTimeout(cambiarImagen, 2000);
    		}

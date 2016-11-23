// IMAGES HUNGARY

var arrayImagenes = new Array();
    		arrayImagenes[0] = "img/Hungary/H_BW_Min.jpg";
    		arrayImagenes[1] = "img/Hungary/H_2.jpg";
    		arrayImagenes[2] = "img/Hungary/H_3.jpg";
    		arrayImagenes[3] = "img/Hungary/H_4.jpg";
    		arrayImagenes[4] = "img/Hungary/H_5.jpg";

    		var contador = 0;

    		window.onload = function(){
        		cambiarImagen();
    			}
    			cambiarImagen = function(){
        			if(contador == arrayImagenes.length){
            		contador = 0;
        		}
        		document.getElementById("imagenes_H").src = arrayImagenes[contador];
        		contador++;
        	setTimeout(cambiarImagen, 2000);
    		}

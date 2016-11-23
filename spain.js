// IMAGES SPAIN GALLERY

var arrayImagenes = new Array();
    		arrayImagenes[0] = "img/Spain/S_BW_Min.jpg";
    		arrayImagenes[1] = "img/Spain/S_2.jpg";
    		arrayImagenes[2] = "img/Spain/S_3.jpg";
    		arrayImagenes[3] = "img/Spain/S_4.jpg";
    		arrayImagenes[4] = "img/Spain/S_5.jpg";

    		var contador = 0;

    		window.onload = function(){
        		cambiarImagen();
    			}
    			cambiarImagen = function(){
        			if(contador == arrayImagenes.length){
            		contador = 0;
        		}
        		document.getElementById("imagenes_S").src = arrayImagenes[contador];
        		contador++;
        	setTimeout(cambiarImagen, 2000);
    		}

// IMAGES FRANCE
var arrayImagenes = new Array();
    		arrayImagenes[0] = "img/France/F_BW_Min.jpg";
    		arrayImagenes[1] = "img/France/F_2.jpg";
    		arrayImagenes[2] = "img/France/F_3.jpg";
    		arrayImagenes[3] = "img/France/F_4.jpg";
    		arrayImagenes[4] = "img/France/F_5.jpg";

    		var contador = 0;

    		window.onload = function(){
        		cambiarImagen();
    			}
    			cambiarImagen = function(){
        			if(contador == arrayImagenes.length){
            		contador = 0;
        		}
        		document.getElementById("imagenes_F").src = arrayImagenes[contador];
        		contador++;
        	setTimeout(cambiarImagen, 2000);
    		}

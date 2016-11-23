// IMAGES ITALY

var arrayImagenes_I = new Array();
    		arrayImagenes_I[0] = "img/Italy/I_BW_Min.jpg";
    		arrayImagenes_I[1] = "img/Italy/I_2.jpg";
    		arrayImagenes_I[2] = "img/Italy/I_3.jpg";
    		arrayImagenes_I[3] = "img/Italy/I_4.jpg";
    		arrayImagenes_I[4] = "img/Italy/I_5.jpg";

    		var contador = 0;

    		window.onload = function(){
        		cambiarImagen();
    			}
    			cambiarImagen = function(){
        			if(contador == arrayImagenes_I.length){
            		contador = 0;
        		}
        		document.getElementById("imagenes_I").src = arrayImagenes_I[contador];
        		contador++;
        	setTimeout(cambiarImagen, 2000);
    		}

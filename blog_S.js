$(document).ready(function(){ 
  
    $('#alternar-respuesta').toggle( 
  
        // Primer click
        function(e){ 
            $('#respuesta').slideDown('slow');
            $(this).text('Close');
            e.preventDefault();
        }, // Separamos las dos funciones con una coma
      
        // Segundo click
        function(e){ 
            $('#respuesta').slideUp('slow');
            $(this).text('Read more...');
            e.preventDefault();
        }
  
    );
    $('#alternar-respuesta2').toggle( 
  
        // Primer click
        function(e){ 
            $('#respuesta2').slideDown('slow');
            $(this).text('Close');
            e.preventDefault();
        }, // Separamos las dos funciones con una coma
      
        // Segundo click
        function(e){ 
            $('#respuesta2').slideUp('slow');
            $(this).text('Read more...');
            e.preventDefault();
        }
  
    );
  	$('#alternar-respuesta3').toggle( 
  
        // Primer click
        function(e){ 
            $('#respuesta3').slideDown('slow');
            $(this).text('Close');
            e.preventDefault();
        }, // Separamos las dos funciones con una coma
      
        // Segundo click
        function(e){ 
            $('#respuesta3').slideUp('slow');
            $(this).text('Read more...');
            e.preventDefault();
        }
  
    );
});
 


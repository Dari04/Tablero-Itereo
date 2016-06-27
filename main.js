$.ajax({
    // la URL para la petición
    url : 'service.json',
 
    // especifica si será una petición POST o GET
    type : 'GET',
 
    // el tipo de información que se espera de respuesta
    dataType : 'json',
 
    // código a ejecutar si la petición es satisfactoria;
    // la respuesta es pasada como argumento a la función
    success : function(json) {
        console.log(json)
        for (i = 0; i < json.Services.length; i++) { 
            var currentDate = new Date(json.Services[i].date);
            var daysToAdd = (json.Services[i].ngt_qty == undefined) ? 0 : parseInt(json.Services[i].ngt_qty);
            var toDate = new Date();
            toDate.setDate(currentDate.getDate() + daysToAdd); 

            var content = '<tr>' + 
            '<td class="one">'+ json.Services[i].ser_name +'</td>' + 
            '<td class="two">'+ json.Services[i].svt_id +'</td>' + 
            '<td class="three">'+ json.Services[i].date +'</td>' + 
            '<td class="four">'+ (toDate) +'</td>' + 
            '<td class="five">'+ ((json.Services[i].ngt_qty == undefined) ? "-" : json.Services[i].ngt_qty) +'</td>' +
            '</tr>';
        	//Agregar elementos
        	$( '#services' ).append( $(content) );
        }

    },
 
    // código a ejecutar si la petición falla;
    // son pasados como argumentos a la función
    // el objeto de la petición en crudo y código de estatus de la petición
    error : function(xhr, status) {
        alert('Disculpe, existió un problema');
    },
});
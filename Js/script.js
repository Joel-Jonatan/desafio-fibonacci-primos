// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {

    // Obtención estricta de elementos usando document.getElementById()
    var formulario = document.getElementById("formulario-ahorro");
    var inputMeses = document.getElementById("meses");
    var seccionResultado = document.getElementById("seccion-resultado");
    
    var txtResumenMeses = document.getElementById("resumen-meses");
    var txtResumenTotal = document.getElementById("resumen-total");
    var txtResumenPrimos = document.getElementById("resumen-primos");
    var contenedorTabla = document.getElementById("tabla-resultados");

    // Escuchador del evento submit del formulario
    formulario.addEventListener("submit", function(evento) {
        // Evitar que la página se recargue por el formulario
        evento.preventDefault();

        // Convertir el valor de entrada a entero
        var totalMeses = parseInt(inputMeses.value);

        if (isNaN(totalMeses) || totalMeses < 1) {
            alert("Por favor, ingrese un número válido de meses.");
            return;
        }

        // Ejecutar los cálculos y renderizar los resultados
        calcularPlanAhorro(totalMeses);
    });

    /**
     * Función que ejecuta el algoritmo combinado de Fibonacci y Primos
     * siguiendo las restricciones de variables simples sin usar vectores para la secuencia.
     */
    function calcularPlanAhorro(mesesLimite) {
        // Variables para el algoritmo de Fibonacci sin vectores (Restricción 8.A)
        var a = 0;
        var b = 1;
        var c = 0;

        // Variables acumuladoras y de control financiero
        var acumuladorTotalAhorro = 0;
        var contadorMesesPrimos = 0;

        // Estructuración inicial de la tabla HTML (Corregida la cabecera)
        var tablaHtml = "<table>" +
                        "<thead>" +
                            "<tr>" +
                                "<th>Mes</th>" +
                                "<th>Ahorro del Mes (Fibonacci)</th>" +
                                "<th>Ahorro Acumulado</th>" +
                                "<th>Resultado Verificación</th>" +
                            "</tr>" +
                        "</thead>" +
                        "<tbody>";

        // Ciclo para generar los meses requeridos
        for (var k = 1; k <= mesesLimite; k++) {
            // El primer término de la serie que usaremos para el mes 1 es 1 (b)
            var depositoMes = b;

            // Acumular el dinero ahorrado hasta el momento
            acumuladorTotalAhorro += depositoMes;

            // Algoritmo de Verificación de Número Primo con contador (Restricción 8.B)
            var contadorDivisores = 0;
            for (var i = 1; i <= depositoMes; i++) {
                if (depositoMes % i == 0) {
                    contadorDivisores++;
                }
            }

            var textoResultadoPrimo = "";
            var claseFila = "";

            // Si tiene exactamente 2 divisores es primo
            if (contadorDivisores == 2) {
                contadorMesesPrimos++;
                textoResultadoPrimo = "<span class='badge-primo'>El número es primo</span>";
                claseFila = "class='fila-prima'";
            } else {
                textoResultadoPrimo = "El número no es primo";
            }

            // Construcción dinámica de la fila de la tabla
            tablaHtml += "<tr " + claseFila + ">" +
                            "<td>Mes " + k + "</td>" +
                            "<td>Bs. " + depositoMes + "</td>" +
                            "<td>Bs. " + acumuladorTotalAhorro + "</td>" +
                            "<td>" + textoResultadoPrimo + "</td>" +
                        "</tr>";

            // Avanzar en la serie de Fibonacci sin guardar en vectores
            c = a + b;
            a = b;
            b = c;
        }

        tablaHtml += "</tbody></table>";

        // Inyectar datos en el panel de resultados usando document.getElementById()
        txtResumenMeses.innerHTML = mesesLimite;
        txtResumenTotal.innerHTML = acumuladorTotalAhorro;
        txtResumenPrimos.innerHTML = contadorMesesPrimos;
        contenedorTabla.innerHTML = tablaHtml;

        // Mostrar el bloque de resultados removiendo la clase oculta
        seccionResultado.classList.remove("hidden");
    }
});
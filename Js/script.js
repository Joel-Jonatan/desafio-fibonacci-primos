// =========================================================================
// FUNCIONES COMPARTIDAS (Globales)
// =========================================================================

/**
 * Verifica si un número es primo
 * @param {number} numero - Número a evaluar
 * @returns {boolean} - true si es primo, false si no
 */
function comprobarSiEsPrimo(numero) {
    if (numero <= 1) return false;
    if (numero === 2) return true;
    if (numero % 2 === 0) return false;
    
    // Optimización: solo verificamos hasta la raíz cuadrada
    let limite = Math.sqrt(numero);
    for (let i = 2; i <= limite; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

/**
 * Genera la secuencia Fibonacci sin usar vectores
 * @param {number} cantidad - Cantidad de términos a generar
 * @returns {Array} - Array con la secuencia Fibonacci
 */
function generarFibonacci(cantidad) {
    if (cantidad <= 0) return [];
    if (cantidad === 1) return [0];
    if (cantidad === 2) return [0, 1];
    
    let secuencia = [0, 1];
    let a = 0, b = 1, c;
    
    for (let i = 3; i <= cantidad; i++) {
        c = a + b;
        a = b;
        b = c;
        secuencia.push(c);
    }
    return secuencia;
}

// =========================================================================
// 1. PROYECTO: CIBERSEGURIDAD (Tokens Criptográficos)
// =========================================================================

let formSeguridad = document.getElementById("formulario-seguridad");
if (formSeguridad) {
    formSeguridad.addEventListener("submit", function(e) {
        e.preventDefault();
        generarTokensCriptograficos();
    });
}

function generarTokensCriptograficos() {
    let bloques = parseInt(document.getElementById("codigo").value);
    let seccionResultado = document.getElementById("seccion-resultado-seguridad");
    
    if (isNaN(bloques) || bloques < 1 || bloques > 25) {
        alert("⚠️ Por favor ingresa un número válido entre 1 y 25.");
        return;
    }
    
    seccionResultado.classList.remove("hidden");
    
    let a = 0;
    let b = 1;
    let c;
    let secuencia = [];
    let tokensPrimos = [];
    let tokensCompuestos = [];
    
    let HTMLInyeccion = `
        <div class="resultado-stats">
            <div class="stat-badge">
                <span>🔐 Total Tokens Generados:</span>
                <strong>${bloques}</strong>
            </div>
        </div>
        <div class="tokens-lista">
    `;
    
    for (let i = 1; i <= bloques; i++) {
        let valorActual;
        if (i === 1) valorActual = 0;
        else if (i === 2) valorActual = 1;
        else {
            c = a + b;
            a = b;
            b = c;
            valorActual = c;
        }
        
        secuencia.push(valorActual);
        let esPrimo = comprobarSiEsPrimo(valorActual);
        
        if (esPrimo) {
            tokensPrimos.push(valorActual);
            HTMLInyeccion += `
                <div class="token-card token-exito">
                    <div class="token-icon">🔑</div>
                    <div class="token-info">
                        <span class="token-numero">Token ${i}</span>
                        <span class="token-valor">${valorActual}</span>
                        <span class="token-badge primo">✓ PRIMO - SEGURO</span>
                    </div>
                    <div class="token-lock"><i class="fas fa-lock"></i></div>
                </div>`;
        } else {
            tokensCompuestos.push(valorActual);
            HTMLInyeccion += `
                <div class="token-card token-error">
                    <div class="token-icon">⚠️</div>
                    <div class="token-info">
                        <span class="token-numero">Token ${i}</span>
                        <span class="token-valor">${valorActual}</span>
                        <span class="token-badge compuesto">✗ COMPUESTO</span>
                    </div>
                    <div class="token-lock"><i class="fas fa-lock-open"></i></div>
                </div>`;
        }
    }
    
    HTMLInyeccion += `</div>`;
    
    HTMLInyeccion += `
        <div class="resumen-cripto">
            <div class="resumen-item">
                <span>📊 Secuencia Fibonacci:</span>
                <strong>${secuencia.join(" → ")}</strong>
            </div>
            <div class="resumen-item exito">
                <span>✅ Tokens Seguros (Primos):</span>
                <strong>${tokensPrimos.length}</strong>
                <span class="detalle">${tokensPrimos.length > 0 ? `(${tokensPrimos.join(", ")})` : ""}</span>
            </div>
            <div class="resumen-item error">
                <span>❌ Tokens Vulnerables:</span>
                <strong>${tokensCompuestos.length}</strong>
            </div>
        </div>
    `;
    
    seccionResultado.innerHTML = HTMLInyeccion;
}

// =========================================================================
// 2. PROYECTO: DISEÑO NATURAL (Crecimiento Floral - Niveles 1 a 20)
// =========================================================================

let formNaturaleza = document.getElementById("formulario-naturaleza");
if (formNaturaleza) {
    formNaturaleza.addEventListener("submit", function(e) {
        e.preventDefault();
        simularCrecimientoFloral();
    });
}

function simularCrecimientoFloral() {
    let niveles = parseInt(document.getElementById("niveles").value);
    let seccionResultado = document.getElementById("seccion-resultado-naturaleza");
    let cajaTexto = document.getElementById("caja-resultado-naturaleza");
    let nivelMostrado = document.getElementById("nivel-mostrado");
    
    if (isNaN(niveles) || niveles < 1 || niveles > 20) {
        alert("⚠️ Por favor ingresa un número de niveles entre 1 y 20.");
        return;
    }
    
    seccionResultado.classList.remove("hidden");
    nivelMostrado.innerHTML = `🌿 Nivel ${niveles}`;
    
    let a = 0;
    let b = 1;
    let c;
    let secuencia = [];
    
    // Generar secuencia Fibonacci
    for (let i = 1; i <= niveles; i++) {
        let valorFibonacci;
        if (i === 1) valorFibonacci = 1;
        else if (i === 2) valorFibonacci = 1;
        else {
            c = a + b;
            a = b;
            b = c;
            valorFibonacci = c;
        }
        secuencia.push(valorFibonacci);
    }
    
    // Tabla de resultados
    let tablaHTML = `
        <div class="tabla-floral">
            <table class="tabla-fibonacci">
                <thead>
                    <tr>
                        <th>Nivel</th>
                        <th>Número Fibonacci</th>
                        <th>¿Es Primo?</th>
                        <th>Significado Botánico</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    for (let i = 0; i < secuencia.length; i++) {
        let valor = secuencia[i];
        let esPrimo = comprobarSiEsPrimo(valor);
        let significado = "";
        
        if (valor === 1) significado = "🌸 Semilla";
        else if (valor === 2) significado = "🌱 Primeras hojas";
        else if (valor === 3) significado = "🍃 Espiral inicial";
        else if (valor === 5) significado = "🌿 Flor pequeña";
        else if (valor === 8) significado = "🌸 Flor en desarrollo";
        else if (valor === 13) significado = "🌻 Girasol juvenil";
        else if (valor === 21) significado = "🌼 Margarita";
        else significado = "🌺 Capa floral";
        
        let clasePrimo = esPrimo ? "primo-si" : "";
        let textoPrimo = esPrimo ? "✅ Sí" : "❌ No";
        
        tablaHTML += `
            <tr class="${clasePrimo}">
                <td><strong>${i + 1}</strong></td>
                <td>${valor}</td>
                <td>${textoPrimo}</td>
                <td>${significado}</td>
            </tr>
        `;
    }
    
    tablaHTML += `
                </tbody>
            </table>
        </div>
    `;
    
    cajaTexto.innerHTML = `
        <div class="analisis-floral">
            <p><strong>🌻 Análisis Morfológico de la Flor</strong></p>
            <p>Sucesión Fibonacci completa del Nivel 1 al ${niveles}: <strong class="fibonacci-secuencia">${secuencia.join(" → ")}</strong></p>
            <p class="nota-botanica">
                📐 <strong>Explicación matemática:</strong> La flor ha crecido desde el nivel 1 hasta el nivel ${niveles}. 
                Cada número Fibonacci representa la cantidad de pétalos o espirales en cada capa floral.
            </p>
            <p class="nota-botanica">
                🔢 <strong>Ejemplo real:</strong> En la naturaleza, los girasoles tienen 55, 89 o 144 espirales,
                las margaritas 34 o 55 pétalos, y las piñas 8 y 13 espirales.
            </p>
        </div>
        ${tablaHTML}
    `;
}

function resetSimulacion() {
    let nivelesInput = document.getElementById("niveles");
    if (nivelesInput) nivelesInput.value = "";
    
    let seccionResultado = document.getElementById("seccion-resultado-naturaleza");
    if (seccionResultado) seccionResultado.classList.add("hidden");
    
    let capasContainer = document.getElementById("capas-flor");
    if (capasContainer) capasContainer.innerHTML = "";
    
    let cajaTexto = document.getElementById("caja-resultado-naturaleza");
    if (cajaTexto) cajaTexto.innerHTML = "";
}

// =========================================================================
// 3. PROYECTO: PLAN DE AHORRO (Fibonacci + Primos + Gráfico)
// =========================================================================

let formAhorro = document.getElementById("formulario-ahorro");
if (formAhorro) {
    formAhorro.addEventListener("submit", function(e) {
        e.preventDefault();
        calcularPlanAhorro();
    });
}

function calcularPlanAhorro() {
    let totalMeses = parseInt(document.getElementById("meses").value);
    let seccionResultado = document.getElementById("seccion-resultado");
    let resumenMeses = document.getElementById("resumen-meses");
    let resumenTotal = document.getElementById("resumen-total");
    let resumenPrimos = document.getElementById("resumen-primos");
    let resumenMontoPrimos = document.getElementById("resumen-monto-primos");
    let tablaResultados = document.getElementById("tabla-resultados");
    let graficoAhorro = document.getElementById("grafico-ahorro");
    let resumenFecha = document.getElementById("resumen-fecha");
    
    if (isNaN(totalMeses) || totalMeses < 1 || totalMeses > 40) {
        alert("⚠️ Por favor ingresa un número de meses entre 1 y 40.");
        return;
    }
    
    seccionResultado.classList.remove("hidden");
    
    if (resumenFecha) {
        let hoy = new Date();
        resumenFecha.innerHTML = `📅 ${hoy.toLocaleDateString()}`;
    }
    
    let a = 0;
    let b = 1;
    let c;
    let depositoMes = 1;
    let capitalAcumulado = 0;
    let mesesPrimosEncontrados = 0;
    let montoTotalPrimos = 0;
    let depositos = [];
    let esPrimoArray = [];
    
    let estructuraTabla = `<table class="tabla-ahorro">`;
    estructuraTabla += `<thead>`;
    estructuraTabla += `<tr>`;
    estructuraTabla += `<th>📅 Período</th>`;
    estructuraTabla += `<th>💰 Depósito Progresivo</th>`;
    estructuraTabla += `<th>🔍 Estado Analítico</th>`;
    estructuraTabla += `<th>🏦 Balance en Cuenta</th>`;
    estructuraTabla += `</tr>`;
    estructuraTabla += `</thead><tbody>`;
    
    for (let i = 1; i <= totalMeses; i++) {
        if (i === 1) depositoMes = 1;
        else if (i === 2) depositoMes = 1;
        else {
            c = a + b;
            a = b;
            b = c;
            depositoMes = c;
        }
        
        depositos.push(depositoMes);
        capitalAcumulado += depositoMes;
        let esMontoPrimo = comprobarSiEsPrimo(depositoMes);
        esPrimoArray.push(esMontoPrimo);
        let claseEstiloFila = "";
        let etiquetaMatematica = "📊 Número Compuesto";
        
        if (esMontoPrimo) {
            mesesPrimosEncontrados++;
            montoTotalPrimos += depositoMes;
            claseEstiloFila = "class='fila-destacada-prima'";
            etiquetaMatematica = "⭐ ¡Hito Primo de Ahorro! 🔐";
        }
        
        estructuraTabla += `<tr ${claseEstiloFila}>`;
        estructuraTabla += `<td><strong>Mes ${i}</strong></td>`;
        estructuraTabla += `<td>Bs. ${depositoMes.toLocaleString()}</td>`;
        estructuraTabla += `<td>${etiquetaMatematica}</td>`;
        estructuraTabla += `<td><strong>Bs. ${capitalAcumulado.toLocaleString()}</strong></td>`;
        estructuraTabla += `</tr>`;
    }
    
    estructuraTabla += `</tbody></table>`;
    
    resumenMeses.innerHTML = totalMeses;
    resumenTotal.innerHTML = capitalAcumulado.toLocaleString();
    resumenPrimos.innerHTML = mesesPrimosEncontrados;
    if (resumenMontoPrimos) resumenMontoPrimos.innerHTML = montoTotalPrimos.toLocaleString();
    tablaResultados.innerHTML = estructuraTabla;
    
    // Generar gráfico de barras
    if (graficoAhorro) {
        let maxDeposito = Math.max(...depositos);
        graficoAhorro.innerHTML = '<div class="barras-container"></div>';
        let barrasContainer = graficoAhorro.querySelector('.barras-container');
        
        depositos.forEach((deposito, index) => {
            let altura = (deposito / maxDeposito) * 150;
            let barra = document.createElement('div');
            barra.className = `barra-ahorro ${esPrimoArray[index] ? 'barra-prima' : 'barra-normal'}`;
            barra.style.height = `${Math.max(altura, 20)}px`;
            barra.setAttribute('data-valor', `Bs. ${deposito}`);
            barra.setAttribute('data-mes', `Mes ${index + 1}`);
            
            let tooltip = document.createElement('span');
            tooltip.className = 'barra-tooltip';
            tooltip.innerText = `Mes ${index + 1}: Bs. ${deposito}`;
            barra.appendChild(tooltip);
            
            barrasContainer.appendChild(barra);
        });
    }
}

function resetAhorro() {
    let mesesInput = document.getElementById("meses");
    if (mesesInput) mesesInput.value = "";
    
    let seccionResultado = document.getElementById("seccion-resultado");
    if (seccionResultado) seccionResultado.classList.add("hidden");
}

// =========================================================================
// MENÚ HAMBURGUESA PARA RESPONSIVE
// =========================================================================

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
});

// Exportar funciones para uso global
window.comprobarSiEsPrimo = comprobarSiEsPrimo;
window.generarTokensCriptograficos = generarTokensCriptograficos;
window.simularCrecimientoFloral = simularCrecimientoFloral;
window.resetSimulacion = resetSimulacion;
window.calcularPlanAhorro = calcularPlanAhorro;
window.resetAhorro = resetAhorro;
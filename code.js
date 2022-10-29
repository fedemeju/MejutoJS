// plazo fijo

const tazaAnual = .75;

function plazoFijo(){

    let plazo = document.getElementById('plazo').value;
    let importe = parseFloat(document.getElementById('importe').value);

    let interes = parseFloat(calculo(plazo,importe,tazaAnual)) 
    
    document.body.appendChild(form)
    
    correcto = check(importe,plazo);
    if(correcto === true){
        mostrar(plazo,importe,interes)
    }

    
    }


function calculo(plazo, importe,tazaAnual) {
    let porcentaje = (tazaAnual/365)*plazo
    let ganancia = importe*porcentaje
    return ganancia;   
}

function mostrar(plazo,importe,interes){
    document.write(`


    <h3>Plazo: ${plazo} dias</h3>
    <h3>Capital:  $${importe}</h3>
    <h3>Intereses Ganados:  $${interes}</h3>
    <h3>Monto total:  $${importe+interes}</h3>
    <h3>TNA:  ${tazaAnual*100}%</h3>
    <a class="nav-link active" aria-current="page" href="plazofijo.html">Volver</a>

    
    `);
}

function check(importe,plazo){
    let correcto = true;
    if(plazo >365 || plazo <30 ){
        alert("el plazo ingresado no es correcto")
        correcto = false;
    }
    if(importe<1500){
        alert("el importe es menor a $1500")
        correcto = false;
    }
    return correcto;
}


// tablas de multiplicar


function tablas(){
    let numero = document.getElementById("numero").value;

    document.write(`<h2>TABLA DEL: ${numero}</h2>`)
        for (let i = 1; i < 11; i++) {
            document.write(` <h3>${numero} x ${i} = ${numero*i}</h3>`)
        }
    document.write(`<a class="nav-link active" aria-current="page" href="tablas.html">Volver</a>`)
}
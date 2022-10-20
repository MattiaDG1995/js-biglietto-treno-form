function start(){
    let valuenome = document.getElementById('nome').value;
    document.getElementById('nomepass').innerHTML = `${valuenome}`;
    let valuekilometri = document.getElementById('kilometri').value;
    let etaPasseggero = document.getElementById('etaPasseggero').value;
    let minorenne = document.getElementById('minorenne').value;
    let over65 = document.getElementById('over65').value;
    let prezzoKilometro = 0.21;
    let prezzoBiglietto = valuekilometri * prezzoKilometro;
    let sconto = document.getElementById('sconto').value;
    // let standard = document.getElementById('standard').value;
    
    
    if (etaPasseggero == minorenne){
    
        sconto = (prezzoBiglietto  / 100) * 20;
        document.getElementById('sconto').innerHTML = `${sconto}%`;

    } else if (etaPasseggero == over65){
    
        sconto = (prezzoBiglietto  / 100) * 40;
        document.getElementById('sconto').innerHTML = `${sconto}%`;

    } else {
    
        sconto = 0;
        document.getElementById('sconto').innerHTML = `${sconto}%`;
        
    }
    
    let prezzoTotale = parseFloat(prezzoBiglietto - sconto).toFixed(2);
    document.getElementById('prezzotot').innerHTML = `${prezzoTotale} &euro;`;

    let numCarrozza = document.getElementById('numCarrozza').value;
    document.getElementById('numCarrozza').innerHTML = Math.floor(Math.random() * 10) + 1 ;


    let codecp = document.getElementById('codecp').value;
    document.getElementById('codecp').innerHTML = Math.floor(Math.random() * 100000) + 1;


    }

function start(){
    let valuekilometri = document.getElementById('kilometri').value;
    let valueetà = document.getElementById('età').value;
    let prezzoKilometro = 0.21;
    let prezzoBiglietto = valuekilometri * prezzoKilometro;
    let sconto ;
    
    
    if (valueetà < 18){
    
        sconto = (prezzoBiglietto  / 100) * 20;
    
    } else if (valueetà >= 65){
    
        sconto = (prezzoBiglietto  / 100) * 40;
    
    } else {
    
        sconto = 0;
    }
    
    let prezzoTotale = parseFloat(prezzoBiglietto - sconto).toFixed(2);
    
    document.getElementById('prezzotot').innerHTML = `il prezzo totale è di ${prezzoTotale} &euro;`;
    }
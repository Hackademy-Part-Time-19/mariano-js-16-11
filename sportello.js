


let operazione;
let prelievo;
let iban_dest;
var test;


var conto_aperto = false;
let saldo = 5000;



while(true) {
    
    test = prompt("Prema y per accedere allo sportello.");
    if (test == "y") {
        
        test = ""
        conto_aperto = true;
        
        while (conto_aperto == true) {
            
            operazione = prompt("Inserisca il numero dell'operazione che desidera eseguire:" + "\n" + "1. Prelievo" + "\n" + "2. Bonifico" + "\n" + "3. Visualizza saldo" + "\n" + "4. Logout")
            
            if (operazione == "1"){
                
                prelievo = parseInt(prompt("Inserisca l'importo che desidera prelevare: "))
                if (saldo >= prelievo) {
                    
                    saldo -= prelievo;
                    
                    alert("Importo prelevato correttamente.")
                }else if (saldo < prelievo) { 
                    
                    alert("Saldo insufficiente.")
                    
                }
                
                
                
                
                
            } else if (operazione == "2"){
                
                iban_dest = prompt("Inserisca l'IBAN del destinatario: ")
                parseInt(iban_dest)
                
                prelievo = parseInt(prompt("Inserisca l'importo che desidera inviare: "))
                
                if (saldo >= prelievo) {
                    
                    saldo -= prelievo;
                    
                    alert("Importo inviato correttamente.")
                }else if (saldo < prelievo) { 
                    
                    alert("Saldo insufficiente.")
                    
                }
                
                iban_dest = "";
                
            } else if (operazione == "3"){
                
                
                alert("Saldo attuale: " + saldo)
                
                


            }else if (operazione == "4"){
                
                let logout = prompt("E' sicuro di voler eseguire il logout? Y/N")
                
            
                
                if(logout == "y") {
                    
                    alert("Logout eseguito correttamente.")
                    conto_aperto = false;

                    break;
                                       
                    
                } else if(logout == "n"){
                    
                    alert("Ritorno al menù principale.")
                    
                }
                
                
                
                
            } 
            
            
            else { alert("Comando non riconosciuto.")}
            
            
        }
        
        
    } 
    
}


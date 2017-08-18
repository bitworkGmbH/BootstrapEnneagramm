


window.onload = function () { 
    createTable();
    // insertCards();
    createCards();
    }


    // create table with for loop and html table tags

function createTable(){
    
  
 var tempTable = "<thead>";
     tempTable += "";
     tempTable += "<tr>";
     tempTable +=    "<td>" + "<p id=heading>"+ Ueberschrift +"</p>";
     tempTable +=    "</td>";
     tempTable +=    "<td>" + imgArrow + "<p id=heading>"+ Ueberschrift2 +"</p>";
     tempTable +=    "</td>";
     tempTable += "</tr>";
     tempTable += "</thead>";

  
 // Für jede Frage, erstellen wir eine neue Zelle für den Fragenteil und für den Antwortteil.
    for (j=0; j<=Fragen.length -1; j++){

        
        tempTable += "<tr>";
        tempTable +=    "<td>";
        tempTable +=        j+1 + ". " ;
        tempTable +=        Fragen[j]; 
        tempTable +=    "</td>" ;
        tempTable +=    "<td>" ;
        tempTable +=       Skala; 
        tempTable +=    "</td>";  
        tempTable += "</tr>";
    }
        
    
         
    document.getElementById("tabelle1").innerHTML += tempTable;
}






var Ueberschrift = " Bitte erst alle 115 Fragen beantworten, dann Streifen rechts nach hinten falten und Auswertung vornehmen.";

var Ueberschrift2= "<p>stimmt nicht &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;stimmt</p>";

var imgArrow= "<img  src='images/double-arrow.png'>"

var Skala = "0 &nbsp;&nbsp;&nbsp; 1 &nbsp;&nbsp;&nbsp; 2 &nbsp;&nbsp;&nbsp; 3 &nbsp;&nbsp;&nbsp; 4 &nbsp;&nbsp;&nbsp; 5 &nbsp;&nbsp;&nbsp; 6";






// Array mit Interviewfragen:

var Fragen = ["Das Leben gelingt besser, wenn man das Positive sieht, anstatt sich am Negativen aufzuhalten.", 
"Ich kann auch emotional sehr angespannte Situationen nüchtern und mit Abstand betrachten.", 
"Ich arbeite gerne innerhalb einer Institution.",
"Wichtig an einem Menschen ist, dass er etwas 'darstellt'.",
"Ich möchte unabhängig sein.",
"Am wichtigsten ist mir, dass sich die Menschen bei mir wohlfühlen.",
"Für mich ist es wichtig die Zukunft zu planen, damit ich weiß, was auf mich zukommt.",
"Wenn jemand meine Hilfe braucht, bin ich bereit, meine ganze Kraft für ihn einzusetzen.",
"Ich möchte leidenschaftlich, emotional und mit allen Sinnen leben - auch wenn es schmerzt.",
"Eigene und fremde Unvollkommenheit kann ich nur schwer ertragen.",
"Erfolg und Status (Orden, Ämter, Titel) spielen für mich eine große Rolle.",
"In der Liebe sind vor allem Anstand und Benehmen wichtig.",
"In der Liebe sind vor allem Anstand und Benehmen wichtig.",
"Ich engagiere mich für Randgruppen, Benachteiligte und Rechtlose (Asylsuchende, Kinder in der 3. Welt, Ausländer etc.).",
"Das Leben ist wie ein Theaterstück, bei dem ich gleichzeitig Zuschauer und Schauspieler bin.",
"Für mein berufliches Fortkommen bin ich bereit, Ehe, Familie oder Freunde hintanzustellen.",
"Mich plagt oft ein schlechtes Gewissen.",
"Ich habe den Eindruck, dass sogenannte 'Autoritäten' oft inkompetent sind, aber ich zögere meist, gegen sie vorzugehen.",
"Ich lasse die Dinge gerne auf mich zukommen- vieles regelt sich dann schon ganz von alleine.",
"Ich muss wissen, wohin ich gehöre.",
"Ich genieße es, die Aufmerksamkeit anderer zu erregen und im Mittelpunkt zu stehen.",
"Ich halte meinen Ärger oft zurück.",
"Ich habe das Gefühl, nie 'ganz erfüllt' sein zu können.",
"Oft ahne ich, was in anderen vorgeht, bevor sie es aussprechen."];




// create cards dynamically:


function createCards() {

        // create card with question and number:

    for (i = 1; i <= Fragen.length ; i++) {
        var cardObject = document.createElement('div');
        cardObject.className = "card";
        cardObject.innerHTML += "<h4 class='card-title'>" + i + "</h4>" + "<p class= 'card-text'>" + Fragen[i-1] + "</h4>";
        cardObject.innerHTML += "<form>";

        //  create six radio-button labels with unique ids for each card:

        for (count = 1; count <= 6; count++) {
            cardObject.innerHTML += "<label class= 'radio-inline' id= 'newRadioButton" + i + "_" + count + "'></label>";
        }
        cardObject.innerHTML += "</form>";

        // insert code into Dom

        document.getElementById("test").appendChild(cardObject);

        // create 6 radio buttons for each card plus its number(scale 1-6) and add to dom:

        for (count = 1; count <= 6; count++) {
            var id = i + "_" + count;
            var radioInput = document.createElement('input');
            radioInput.setAttribute('type', 'radio');
            radioInput.setAttribute('name', 'optradio');
            radioInput.setAttribute('value', 'button' + id);
            document.getElementById("newRadioButton" + id).appendChild(radioInput);
            document.getElementById("newRadioButton" + id).appendChild(document.createTextNode(count + "."))
        }
    }
}



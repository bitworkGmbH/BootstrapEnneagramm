


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
        tempTable +=    "</td>";
        tempTable +=    "<td><div class= 'scale'>";
        tempTable +=       Skala; 
        tempTable +=    "</div></td>";  
        tempTable += "</tr>";
    }
        
    
         
    document.getElementById("tabelle1").innerHTML += tempTable;
}






var Ueberschrift = " Bitte erst alle 115 Fragen beantworten, dann Streifen rechts nach hinten falten und Auswertung vornehmen.";

var Ueberschrift2= "<div class= left>stimmt nicht</div><div class= right>stimmt</div></p>";

var imgArrow= "<img  src='images/double-arrow.png'>"

var Skala = "0  1  2  3  4  5  6";



/* <div class="container">
    <!-- <div class="row">
        <div class="col-sm-12hidden-xs-down col-md-6">Test 1</div>
        <div class="col-sm-12  col-md-6">Test 2</div>
        <div class="col-sm-12  col-md-6">Test 3</div>

    </div> --> */


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

        var html = ""

        html += "<h4 class='card-title'>" + i + "</h4>" + "<p class= 'card-text'>" + Fragen[i-1] + "</h4>";
        html += "<div id= 'einschaetzung'><div class='left'>stimmt</div>" + "<div class='right'>stimmt nicht</div></div>"
        html += "<div class='radio'><form>";

        //  create six radio-button labels with unique ids for each card:

        for (count = 1; count <= 6; count++) {
            html += "<label class= 'radio-inline' id= 'newRadioButton" + i + "_" + count + "'></label>";
        }
        html += "</form></div>";
        cardObject.innerHTML = html;
        // insert code into Dom

        document.getElementById("content2").appendChild(cardObject);

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



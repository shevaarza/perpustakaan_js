var nummber = 1;
function addbook(event){
event.preventDefault();
var judul = document.getElementById("judul").value;
var pengarang = document.getElementById("pengarang").value;
var hal = document.getElementById("hal").value;
    
var tbody = document.getElementById("table").getElementsByTagName('tbody')[0];
var tr = document.createElement("tr");
var tdno = document.createElement("td");
var tdjudul = document.createElement("td");
var tdpengarang = document.createElement("td");
var tdhal = document.createElement("td");

tdno.appendChild(document.createTextNode(nummber));
tdjudul.appendChild(document.createTextNode(judul));
tdpengarang.appendChild(document.createTextNode(pengarang));
tdhal.appendChild(document.createTextNode(hal));

tr.appendChild(tdno);
tr.appendChild(tdjudul);
tr.appendChild(tdpengarang);
tr.appendChild(tdhal);

tbody.appendChild(tr);
nummber++;

document.getElementById("judul").value=''; 
document.getElementById("pengarang").value='';
document.getElementById("hal").value='';
}

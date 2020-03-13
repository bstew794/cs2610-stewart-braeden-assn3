/* TODO: Build up the HTML document by using JavaScript DOM manipulation functions.
* Do not rely on changes you may have made to index.html because the grader won't use that file.
*/

document.title = "Calculator";

var ui = document.createElement("DIV");
ui.className = "stuff-box black";
ui.id = "UI";
document.body.appendChild(ui);

var testTitle = document.createElement("H2");
testTitle.innerHTML = "JavaScript Calculator";
ui.appendChild(testTitle);

var calcInstruct = document.createElement("P");
calcInstruct.innerHTML = "Create An Expression:";
ui.appendChild(calcInstruct);

var calcDiv = document.createElement("DIV");
ui.appendChild(calcDiv);

var numIn = document.createElement("INPUT");
numIn.setAttribute("type", "number");
numIn.id = "first_number";
calcDiv.appendChild(numIn);

var selectOper = document.createElement("SELECT");
selectOper.id = "operator";
calcDiv.appendChild(selectOper);

var plusStr = document.createElement("OPTION");
plusStr.text = "+";
selectOper.add(plusStr);

var minusStr = document.createElement("OPTION");
minusStr.text = "-";
selectOper.add(minusStr);

var divideStr = document.createElement("OPTION");
divideStr.text = "/";
selectOper.add(divideStr);

var multiplyStr = document.createElement("OPTION");
multiplyStr.text = "*";
selectOper.add(multiplyStr);

var remainStr = document.createElement("OPTION");
remainStr.text = "%";
selectOper.add(remainStr);

var exponStr = document.createElement("OPTION");
exponStr.text = "**";
selectOper.add(exponStr);

var numIn1 = document.createElement("INPUT");
numIn1.setAttribute("type", "number");
numIn1.id = "second_number";
calcDiv.appendChild(numIn1);

var calcButt = document.createElement("BUTTON");
calcButt.innerHTML = "Compute";
calcButt.id = "compute_button";

calcButt.onclick = function() {addOutput(document.getElementById("color_selector").value,
    document.getElementById("first_number").value, document.getElementById("operator").value,
    document.getElementById("second_number").value)};

calcDiv.appendChild(calcButt);

var selectColor = document.createElement("INPUT");
selectColor.setAttribute("type", "color");
selectColor.id = "color_selector"
ui.appendChild(selectColor);

var colorInstruct = document.createElement("P");
colorInstruct.style.display = "inline";
colorInstruct.innerText = "Color of New Result <Div>";
ui.appendChild(colorInstruct);

var outputDiv = document.createElement("DIV");
document.body.appendChild(outputDiv);

function getDateTime(){
    var today = new Date();
    var date = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return date + " " + time;
}

function addOutput(color, num, operator, num1){
    var outputEl = document.createElement("DIV");
    outputEl.className = "stuff-box red";
    outputEl.onclick = function(e) {this.parentNode.removeChild(this)};
    outputDiv.insertBefore(outputEl, outputDiv.childNodes[0]);

    var timestamp = document.createElement("P");
    timestamp.style.display = "inline";
    timestamp.innerHTML = getDateTime();
    timestamp.className = "timestamp";
    outputEl.appendChild(timestamp);

    var message = "Error! Missing One or More Operands!";

    if(!(num === "" || num1 === "")){
        var equationStr = num + operator + num1;
        var message = equationStr + "=" + result;
        var result = eval(equationStr);
        var message = equationStr + "=" + result;
        outputEl.style.backgroundColor = color;
        outputEl.style.borderColor = color;
    }

    var resultDisplay = document.createElement("P");
    resultDisplay.style.display = "inline";
    resultDisplay.innerHTML = message;
    outputEl.appendChild(resultDisplay);
}


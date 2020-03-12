/* TODO: Build up the HTML document by using JavaScript DOM manipulation functions.
 * Do not rely on changes you may have made to index.html because the grader won't use that file.
 */

 document.title = "Derplandia";

 buildUI();

 function buildUI(){
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
    calcDiv.appendChild(numIn);

    var selectOper = document.createElement("SELECT");
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
    calcDiv.appendChild(numIn1);

    var calcButt = document.createElement("BUTTON");
    calcButt.innerHTML = "Compute";
    calcDiv.appendChild(calcButt);

    var selectColor = document.createElement("INPUT");
    selectColor.setAttribute("type", "color");
    ui.appendChild(selectColor);

    var colorInstruct = document.createElement("P");
    colorInstruct.innerText = "Color of New Result <Div>";
    colorInstruct.id = "color_instructions";
    ui.appendChild(colorInstruct);
 }


let cards = [];
let edits = [];

function addCard() {
    let cardName = document.getElementById("name").value;
    let cardAge = document.getElementById("age").value;
    let cardSelect = document.getElementById("select").value;
    let cardSalary = document.getElementById("salary").value;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("select").value = "";
    document.getElementById("salary").value = "";

    let card = {
        name: cardName,
        age: cardAge,
        select: cardSelect,
        salary: cardSalary
    }


    cards.push(card);
    drawPage();
    progress();
}

function drawPage() {
    let result = "";
    for (let i = 0; i < cards.length; i++){
        result +=
            "<div class='col-6'>" +
            "<div class='card mt-3'>" +
            "<div class='card-header'>" +
            "<h5>"+ cards[i].name +"</h5>" +
            "</div>" +
            "<div class='card-body'>" +
            "<p>Age: <b>"+ cards[i].age +"</b></p>" +
            "<p>Position: <b>"+ cards[i].select +"</b></p>" +
            "<p>Salary: <b>"+ cards[i].salary +"</b></p>" +
            "</div>" +
            "<div class='card-footer'>" +
            "<button type='button' class='btn btn-success btn-block' onclick='checkCard("+ i +")'>Accepted</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
    document.getElementById("result1").innerHTML = result;

    let result2 = "";
    for (let i = 0; i < edits.length; i++){
        result2 +=
            "<div class='col-6'>" +
            "<div class='card mt-3'>" +
            "<div class='card-header'>" +
            "<h5 id='c-name'> "+ edits[i].name +"</h5>" +
            "</div>" +
            "<div class='card-body'>" +
            "<p id='c-age'>Age: <b>"+ edits[i].age +"</b></p>" +
            "<p id='c-select'>Position: <b>"+ edits[i].select +"</b></p>" +
            "<p id='c-salary'>Salary: <b>"+ edits[i].salary +"</b></p>" +
            "</div>" +
            "<div class='card-footer d-flex justify-content-between align-items-center'>" +
            "<button type='button' class='btn btn-primary' data-toggle=\"modal\" data-target=\"#modal2\" onclick='editModal("+ i +")'>Edit</button>" +
            "<button type='button' class='btn btn-danger' onclick='deleteCard("+ i +")'>Delete</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
    document.getElementById("result2").innerHTML = result2;
}

function checkCard(index) {
    edits.push(cards[index]);
    cards.splice(index, 1);
    drawPage();
    progress();
}

function deleteCard(index) {
    edits.splice(index, 1);
    drawPage();
    progress();
}

function progress() {
    let percent = edits.length * 100 / (edits.length + cards.length);
    document.getElementById("progress").style.width = percent + "%";
}


function editModal(index) {
    document.getElementById("name2").value = (edits[index].name || edits[index].lname);
    document.getElementById("age2").value = (edits[index].age || edits[index].lage);
    document.getElementById("select2").value = (edits[index].select || edits[index].lselect);
    document.getElementById("salary2").value = (edits[index].salary || edits[index].lsalary);

    edits.splice(index, 1);
    drawPage();
}

function left() {
    let leftName = document.getElementById("name2").value;
    let leftAge = document.getElementById("age2").value;
    let leftSelect = document.getElementById("select2").value;
    let leftSalary = document.getElementById("salary2").value;

    let lcard = {
        lname: leftName,
        lage: leftAge,
        lselect: leftSelect,
        lsalary: leftSalary
    }

    edits.push(lcard);
    drawCard();
}

function drawCard() {
    let result3 = "";
    for (let i = 0; i < edits.length; i++){
        result3 +=
            "<div class='col-6'>" +
            "<div class='card mt-3'>" +
            "<div class='card-header'>" +
            "<h5 id='c-name'> "+ edits[i].lname +"</h5>" +
            "</div>" +
            "<div class='card-body'>" +
            "<p id='c-age'>Age: <b>"+ edits[i].lage +"</b></p>" +
            "<p id='c-select'>Position: <b>"+ edits[i].lselect +"</b></p>" +
            "<p id='c-salary'>Salary: <b>"+ edits[i].lsalary +"</b></p>" +
            "</div>" +
            "<div class='card-footer d-flex justify-content-between align-items-center'>" +
            "<button type='button' class='btn btn-primary' data-toggle=\"modal\" data-target=\"#modal2\" onclick='editModal("+ i +")'>Edit</button>" +
            "<button type='button' class='btn btn-danger' onclick='deleteCard("+ i +")'>Delete</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
    document.getElementById("result2").innerHTML = result3;
}


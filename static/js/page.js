$(function () {
    $("#ModeLogin").click(ModeSignIn);
    $("#ModeSignUp").click(ModeSignUp);
    $('#RessourceModeCreation').click(gotoCreationRessource);
    $('#RessourceQuitCreation').click(quitCreationRessource);
    $('#id_room').click(gotoCreationRoom)
    $('#id_house').click(gotoCreationHouse);
    $('#gotoPageHome').click(gotoPageHome);
    $('#gotoPageProfile').click(gotoPageProfile);
});


// modify gestionnaire.html
function ModeSignIn() {
    $('#zoneLogin').css('display', 'block');
    $('#zoneSignUp').css('display', 'none');
}


function ModeSignUp() {
    $('#zoneSignUp').css('display', 'block');
    $('#zoneLogin').css('display', 'none');
}

function gotoCreationRessource() {
    $('#createRessource').css('display', 'block');
    $('#infoRessource').css('display', 'none');
}

function quitCreationRessource() {
    $('#createRessource').css('display', 'none');
    $('#infoRessource').css('display', 'block');
}

function gotoCreationHouse() {
    $('#optionRoom').css('display', 'none');
    $('#optionHouse').css('display', 'block');
    $('#id_num_room').attr('required');
    $('#id_room_type').removeAttr('required');
}

function gotoCreationRoom() {
    $('#optionRoom').css('display', 'block');
    $('#optionHouse').css('display', 'none');
    $('#id_num_room').removeAttr('required');
    $('#id_room_type').attr('required');
}

function gotoPageHome() {
    $('#mainDiv').children().css('display', 'none');
    $('#DivSearch').css('display', 'block');
}

function gotoPageProfile() {
    $('#mainDiv').children().css('display', 'none');
    $('#DivProfile').css('display', 'block');
}

function gotoPageResDetails() {
    $('#mainDiv').children().css('display', 'none');
    $('#DivResDetails').css('display', 'block');
}

function gotoPageSendedDemands() {
    $('#mainDiv').children().css('display', 'none');
    $('#DivSendedDemands').css('display', 'block');
}

function gotoPageRecievedDemands() {
    $('#mainDiv').children().css('display', 'none');
    $('#DivRecievedDemands').css('display', 'block');
}


function setAlert(str) {
    var html = "<div id=\"alert\" class=\"alert alert-danger\">" + str + "</div>";
    $('#divAlert').html(html);
}

function setSucess(str) {
    var html = "<div id=\"alert\" class=\"alert alert-sucess\">" + str + "</div>";
    $('#divAlert').html(html);
}

function htmlProfile(profileJson) {
    var html =
        '<div class="container bootstrap snippet">\
            <div class="row">\
                <div class="col-sm-10">\
                    <h1>Hello '+ profileJson.nom + ' ' + profileJson.prenom + '!</h1>\
                </div>\
                <div class="col-sm-2">\
                    <a href="" class="pull-right"><img title="profile image" class="img-circle img-responsive"\
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"></a>\
                </div>\
            </div>\
        </div>\
        <div class="col-sm-5">\
            <ul class="list-group">\
                <li class="list-group-item text-muted">Profile</li>\
                <li class="list-group-item text-right"><span class="pull-left"><strong>Email</strong></span>\
                    '+ profileJson.email + '\
                </li>\
                <li class="list-group-item text-right"><span class="pull-left"><strong>Adresse</strong></span>\
                    '+ profileJson.adresse + '\
                </li>\
                <li class="list-group-item text-right"><span class="pull-left"><strong>Telephone</strong></span>\
                    '+ profileJson.telephone + '\
                </li>\
            </ul>\
        </div>';
    return html;
}


function htmlResDetails(json) {
    var owner = json[0];
    var res = json[1];
    var html =
        '<div class=row-fluid>\
            <div class="col-md-4 ">\
            <div id="ressourceInfo">\
                <ul class="list-group">\
                    <li class="list-group-item text-muted">Ressource</li>\
                    <li class="list-group-item text-right"><span class="pull-left"><strong>Numero</strong></span>'
        + res.id +
        '</li>\
                    <li class="list-group-item text-right"><span class="pull-left"><strong>Type</strong></span>'
        + res.type +
        '</li>\
                    <li class="list-group-item text-right"><span class="pull-left"><strong>Price</strong></span>'
        + res.price +
        '</li>\
                    <li class="list-group-item text-right"><span class="pull-left"><strong>Adresse</strong></span>'
        + res.adresse +
        '</li>\
                </ul>\
            </div>\
            <div id=infoOwner>\
                <ul class="list-group">\
                    <li class="list-group-item text-muted">Owner\'s information</li>\
                    <li class="list-group-item text-right"><span class="pull-left"><strong>Owner</strong></span>'
        + owner.prenom + " " + owner.nom +
        '</li>\
                    <li class="list-group-item text-right"><span class="pull-left"><strong>Email</strong></span>'
        + owner.email +
        '</li>\
                    <li class="list-group-item text-right"><span class="pull-left"><strong>Telephone</strong></span>'
        + owner.telephone +
        '</li>\
                </ul>\
            </div>\
        </div>';
    return html;
}

function htmlSendedDemands(resp) {
    var html =
        '<div id="demandList">\
            <legend>Your sended demands</legend>\
            <table class="table table-striped">\
                <thead>\
                <tr>\
                    <th scope="col">Id</th>\
                    <th scope="col">Ressource</th>\
                    <th scope="col">Checkin date</th>\
                    <th scope="col">Checkout date</th>\
                    <th scope="col">Create Time</th>\
                    <th scope="col">Status</th>\
                </tr>\
                </thead>\
                <tbody>';
    for (var i = 0; i < resp.length; i++) {
        var demand = resp[i].demand;
        var res = resp[i].res;
        html += "<tr>";
        html += "<td>" + demand.id + "</td>";
        html += '<td><a class=accesResDetails  class=text-success data-id=' + res.id + '>' + res.type + " " + res.id + "</a></td>";
        html += '<td>' + demand.checkin + '</td>';
        html += '<td>' + demand.checkout + '</td>';
        html += '<td>' + demand.createTime + '</td>';
        html += '<td>' + demand.status + '</td>';
        html += '<td><a class=deleteSendedDemand class=text-success data-id=' + demand.id + '>Delete</a></td>';
        html += "<tr>";
    }
    html += '</tbody></table></div>';
    return html;
}


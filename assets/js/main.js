
var tableContent = {
    images: [
        { 'websiteOne': 'assets/images/70sDylan.jpg' },
        { 'websiteTwo': 'assets/images/websiteTwo.jpg' },
        { 'websiteThree': 'assets/images/face.jpg' },
        { 'websiteFour': 'assets/images/website4.jpg' },
        { 'websiteFive': 'assets/images/projectlogo.png' }
    ],
    descriptions: [
        { 'HTML Work': "This was my very first attempt at creating anything with code from scratch. Over the course of a month I learned the basics of HTML and CSS, how to troubleshoot and research specific issues I was experiencing, and create something that was visually appealing for my skill level" },
        { 'HTML/CSS': "After a few weeks of coding class, I put this page together to test my new knowledge of CSS and HTML and made something slightly less structured and logical than my previous page." },
        { 'Canvas/ JavaScript': "This project was originally supposed to challenge us to use JavaScript in our creation of a Web Application - I took it a smal step further and decidd to research and learn how to use HTML Canvas in order to make the game more entertaining and impressive." },
        { 'jQuery/ Canvas': "Creating this Application was a trial in dynamic webpage creation - I decided to challenge myself here and make the entire page load using only JavaScript and pre-defined objects containing HTML elements. I was proud of my use of HTML Canvas, jQuery and my JavaScript/CSS styling." },
        { 'APIs/ jQuery/ Group Dev.': "The first team effort I've been a part of - we decided to tackle the gathering of information of the current Congress of the United States as it is soon to be a hot topic with the coming 2020 Presidential Campaigns. This project made heavy use of APIs, dynamic loading, and involved a lot of peer teaching/learning when we had to work togetehr to integrate all of the components of the application." }
    ],
    links: [
        'http://rcreveling.github.io/bob-dylan', 'http://rcreveling.github.io/student-bio-page', 'http://rcreveling.github.io/unit-4-game/index.html', 'http://rcreveling.github.io/trivia-game', 'http://rcreveling.github.io/project-one/index.html'
    ]
}

function activateLinks() {
    $("#websiteOne").attr('href', tableContent.links[0])
    $("#websiteTwo").attr('href', tableContent.links[1])
    $("#websiteThree").attr('href', tableContent.links[2])
    $("#websiteFour").attr('href', tableContent.links[3])
    $("#websiteFive").attr('href', tableContent.links[4])
    $("#websiteOne").attr('target', "_blank")
    $("#websiteTwo").attr('target', "_blank")
    $("#websiteThree").attr('target', "_blank")
    $("#websiteFour").attr('target', "_blank")
    $("#websiteFive").attr('target', "_blank")


}

function buildTable() {
    var table = $("#myTable")
    var tablehead = $("<thead>")
    var tableheadcontent = $("<th>")
    var tablebody = $("<tbody>")
    var tablerow = $("<tr>")
    var tablerow2 = $("<tr>")
    var tablecontent = $("<td>")
    var itemstoappend = []
    var descriptionstoappend = []
    $.each(tableContent.images, function () {
        $.each(this, function (name, value) {
            tableheadcontent.html("<a style='width:0px;box-shadow:none !important;' id=" + name + "><img class='websiteImages' style = 'height:100px;width:auto;border-radius:15px;' src = " + value + " > <a>")
            var sendthis = tableheadcontent.html()
            itemstoappend.push(sendthis)
        })
    })
    $.each(tableContent.descriptions, function () {
        $.each(this, function (name, value) {
            tablecontent.html("<div class='descriptionDiv'> <h2>" + name + "</h2> <p>" + value + "</p> <div>")
            var sendthis = tablecontent.html()
            descriptionstoappend.push(sendthis)
        })
    })
    for (var i = 0; i < itemstoappend.length; i++) {
        tablerow.append(itemstoappend[i])
    }

    for (var i = 0; i < descriptionstoappend.length; i++) {
        var appendthis = tablecontent.html(descriptionstoappend)
        console.log(appendthis)
        tablerow2.append(appendthis)
    }
    tablerow.children($("<img>")).css({
        margin: "0 2.5vw 0 3vw",
        height: "20vh",
        boxSizing: "border-box",
    })
    tablerow2.css({
        height: "auto",
        width: "100%",

    })

    $("td").children($("h2")).css({
        textShadow: "0px 0px 9px rgba(199, 0, 0, 0.863), 0px 0px 18px rgba(255, 148, 148, 0.863), 0px 0px 30px rgba(41, 80, 255, 0.747),  0px 0px 35px rgba(105, 12, 114, 0.747)",
        width: "20vw !important"

    })
    tablehead.append(tablerow)
    table.append(tablehead)
    tablebody.append(tablerow2)
    table.append(tablebody)

    activateLinks();
}
function loadContent() {
    var containerDiv = $("<div>", { class: "container" })
    var rowDiv = $("<div>", { class: "row" })
    var table = $("<table>", { id: "myTable" })
    table.css({
        height: "90vh",

    })
    containerDiv.css({
        height: "100%",
        width: "100%",
    })
    rowDiv.css({
        height: "100%",
        width: "100%",
        backgroundColor: "transparent",
        textShadow: "0px 0px 9px rgba(199, 0, 0, 0.863), 0px 0px 18px rgba(255, 148, 148, 0.863), 0px 0px 30px rgba(41, 80, 255, 0.747),  0px 0px 35px rgba(105, 12, 114, 0.747)",
    })
    rowDiv.append(table)
    containerDiv.append(rowDiv)
    $("#expandContainer").append(containerDiv)
    buildTable()
}
$("#main-head-icon").on("click", function () {
    $(".main-wrapper").css({
        display: "none",
        transition: "3s fade"
    })
    $("#expanderDiv").css({
        margin: "0 5vw 0 10vw",
        display: "flex",
        justifyContent: "center",
    })
    var newDiv = $("<div>", { class: "container", id: "expandContainer" })
    newDiv.css({
        position: "fixed",
        height: "100%",
        width: "0px",
        top: "20%",
        backgroundColor: "transparent",
        margin: "auto"
    })
    $("#expanderDiv").append(newDiv)
    $("#expandContainer").animate({
        maxWidth: "100vw !important",
        width: "100vw",
        margin: "0 auto !important"

    }, 1500, "linear")
    loadContent();
})

$("#title-icon").on("click", function () {
    location.reload()
})
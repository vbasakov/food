// add new eating by pressing addNewTable button
function addNewTableUtil($, someName) {
    var eatingName = "Введите название";
    var someID = "";
    if (someName.length > 0) {
        someID = someName;
        eatingName = someName;
    }
    $("#sortable").append("<li><table class='table new addible' id='" + someID + "'><thead><tr><th class='name'><input class='eating' value='" + eatingName + "'></th><th class='col'></th><th class='col'></th><th class='col'></th><th class='col'></th></tr></thead><tbody></tbody></table></li>");

    $(".new").last().css("display", "block").animate({width: "98%"}, 300).animate({height: "33px"}, 700);

    setTimeout(al, 1000);

    function al() {
        $(".new").last().css("display", "table");
        $(".addible").each(function () {
            $(this).removeClass("active");
            $(this).parent().find(".clearEating").remove();
            $(this).parent().find(".delEating").remove();
        });
        $(".new").last().addClass("active");
        //$(".new" ).last().parent().prepend("<div class='delEating'>&times;</div>");
    }

    $(".addNewTable").addClass("Animate");
    setTimeout(rot, 500);

    function rot() {
        $(".addNewTable").removeClass("Animate");
    }
}
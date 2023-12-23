import {greatArray} from "./products";

export var whichNutrient = "";
var calcProt, calcFat, calcCarbs, calcKkal;
var factProt, factFat, factCarbs, factKkal;



// add new eating by pressing addNewTable button
export function addNewTableUtil($, someName) {
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

export function makeItActiveUtil($, eatingName) {
    $(".addible").each(function () {
        $(this).removeClass("active");
        $(this).parent().find(".clearEating").remove();
        $(this).parent().find(".delEating").remove();
    });
    $("#" + eatingName + "").addClass("active");
    $("#" + eatingName + "").parent().prepend("<div class='clearEating'>&#9675;</div>");
    $("#" + eatingName + "").parent().prepend("<div class='delEating'>&times;</div>");

}

// adding bunches of food into eating
export function addFoodsByRequestUtil($, choosenFood) {      // choosenFood - is a string like "name Of Food 1, name Of Food 2, name Of Food 3, ...."
    var name, unit, protein, fat, carbs, kkal;
    var amount;
    var allfood = choosenFood.split(", ");     // split that string by , and save as array in allfood
    function addIt(allfood) {
        for (var i = 0; i < allfood.length; i += 1) {       // going through array
            var singleItem = allfood[i];                   // find every one food name


            function findThatFood(array, attr, value) {    // finding this single food item in great array of all products
                for (var i = 0; i < array.length; i += 1) {
                    if (array[i][attr] === value) {
                        name = greatArray[i].nAme;
                        amount = greatArray[i].amount;
                        unit = greatArray[i].unit;
                        protein = greatArray[i].protein;
                        fat = greatArray[i].fat;
                        carbs = greatArray[i].carbs;
                        kkal = greatArray[i].kkal;
                    }
                }
            }

            findThatFood(greatArray, "nAme", singleItem);  // send that food name to function below
            var same = wasItThere($, singleItem);      // check if it there already

            var mult;

            if (unit == "гр." || unit == "мл.") {
                mult = amount / 100;
            } else {
                mult = amount;
            }
            protein = cutThisProperly(protein * mult);
            fat = cutThisProperly(fat * mult);
            carbs = cutThisProperly(carbs * mult);
            kkal = cutThisProperly(kkal * mult);

            if (!same) {                              // if not - insert new string
                insert($, name, amount, unit, protein, fat, carbs, kkal);
            } else {                                // if it was there - adding all stuff to previous one
                var currentAmount = 1 * ($('.active .nAme:contains("' + same + '")').parent().find(".output").text());
                var currentProt = 1 * ($('.active .nAme:contains("' + same + '")').parent().parent().find(".prot").text());
                var currentFat = 1 * ($('.active .nAme:contains("' + same + '")').parent().parent().find(".fat").text());
                var currentCarbo = 1 * ($('.active .nAme:contains("' + same + '")').parent().parent().find(".carbo").text());
                var currentKkal = 1 * ($('.active .nAme:contains("' + same + '")').parent().parent().find(".kkal").text());
                $('.active .nAme:contains("' + same + '")').parent().find(".output").html(cutThisProperly(currentAmount + amount));
                $('.active .nAme:contains("' + same + '")').parent().parent().find(".prot").html(cutThisProperly(currentProt + protein));
                $('.active .nAme:contains("' + same + '")').parent().parent().find(".fat").html(cutThisProperly(currentFat + fat));
                $('.active .nAme:contains("' + same + '")').parent().parent().find(".carbo").html(cutThisProperly(currentCarbo + carbs));
                $('.active .nAme:contains("' + same + '")').parent().parent().find(".kkal").html(cutThisProperly(currentKkal + kkal));
            }
        }
    }

    addIt(allfood);
    counterUtil($,);
    paintItUtil($, whichNutrient);
    compaireUtil($);
    boldUtil($);
};

// checking if this choosenFood food already in active table
function wasItThere($, choosenFood) {
    var same; // declare new var to save name of food, which we will find, if it already there
    $(".active .nAme").each(function () { // iterate through this active table
        var name = $(this).text(); // take name of food from each row
        if (choosenFood == name) { // compare choosenfood with name from this row
            same = name; // if they equal, save this name to same var
            return false; // stop this cycle
        } else {
            return true;
        }
        ;
    });
    return same;
};

export function cutThisProperly(x) {  // обрезает(не округляя) отправленное число до 2х цифр после запятой
    var digitFromButton = x.toFixed(4);
    var newY = digitFromButton.toString();
    var newX = newY;
    var arr = newX.split('.');
    var a = arr[0];
    var b = arr[1][0];
    var c = arr[1][1];

    if (c && (b == 0) && (c == 0)) {
        return a * 1;
    } else if (c && (b !== 0) && (c == 0)) {
        return (a + '.' + b) * 1;
    } else if (c && (b !== 0) && (c !== 0)) {
        return (a + '.' + b + c) * 1;
    } else if (!c && (b !== 0)) {
        return (a + '.' + b) * 1;
    } else if (!c && b == 0) {
        return a * 1;
    } else if (!b) {
        return a * 1;
    }
};

function insert($, name, amount, unit, protein, fat, carbs, kkal) {
    $($.parseHTML('<tr><td class="name"><span class="del">&times;</span>' +
        '<span class="nAme">' + name + '</span>' +
        '<button class="set up">+</button><span class="set unit">' +
        unit +
        '</span>' + " " +
        '<span class="set output">' +
        amount +
        '</span>' +
        '<button class="set down">&minus;</button>' +
        '</td><td class="col prot">' +
        protein +
        '</td><td class="col fat">' +
        fat +
        '</td><td class="col carbo">' +
        carbs +
        '</td><td class="col kkal">' +
        kkal +
        '</td></tr>')).appendTo(".active");
}

//Счетчик нутриентов
export function counterUtil($) {
    var proteinSumm = 0, fatSumm = 0, carboSumm = 0, kkalSumm = 0;
    $('.totalProtein, .totalFat, .totalCarbo, .totalKkal').html(0);                    // обнуляет итоги
    $("td.prot").each(function () {
        var currentProtein = 1 * $(this).text();
        proteinSumm += currentProtein;
        $('.totalProtein').html(cutThisProperly(proteinSumm).toFixed(1));
    });
    $("td.fat").each(function () {
        var currentFat = 1 * $(this).text();
        fatSumm += currentFat;
        $('.totalFat').html(cutThisProperly(fatSumm).toFixed(1));
    });
    $("td.carbo").each(function () {
        var currentCarbo = 1 * $(this).text();
        carboSumm += currentCarbo;
        $('.totalCarbo').html(cutThisProperly(carboSumm).toFixed(1));
    });
    $("td.kkal").each(function () {
        var currentKkal = 1 * $(this).text();
        kkalSumm += currentKkal;
        $('.totalKkal').html(cutThisProperly(kkalSumm).toFixed(1));
    });
};

export function paintItUtil($, x) {

    var column = new Array();
    var firstTwo;
    var secondTwo;


    $(x).each(function () {
        var num = $(this).text();
        column.push(num);
    });

    column.sort(function (a, b) {
        return b - a
    });
    firstTwo = column.slice(0, 3);
    secondTwo = column.slice(3, 6);

    $(x).removeClass("promptedprotein promptedfat");
    var pressedPromptButton = x + "float";
    if ($(pressedPromptButton).hasClass("bold")) {

        $(x).addClass("colored");

        for (var i = 0; i < firstTwo.length; i++) { // paints first three in array in red

            $(x).filter(function () {
                return $(this).text() === firstTwo[i];
            })
                .addClass("promptedprotein");

        }

        for (var i = 0; i < secondTwo.length; i++) { // paints first three in array in yellow

            $(x).filter(function () {
                return $(this).text() === secondTwo[i];
            })
                .addClass("promptedfat");

        }
    }

} // end of paintIt()

export function compaireUtil($){

// results from table:
    var tProtein = 1 * $(".totalProtein").html();
    var tFat = 1 * $(".totalFat").html();
    var tCarbo = 1 * $(".totalCarbo").html();
    var tKkal = 1 * $(".totalKkal").html();
// results from calc("dream" or "goal" counts):
    var goalProtein = 1 * $(".goalProtein").html();
    var goalFat = 1 * $(".goalFat").html();
    var goalCarbs = 1 * $(".goalCarbs").html();
    var goalKkal = 1 * $(".goalKkal").html();

// here we set extremums - lower and upper borders for protein and kkal
    var lowK;
    var highK;

    var lowP;
    var highP;

    var lowF = goalFat * 0.9;
    var highF = goalFat * 1.1;

    var lowC = goalCarbs * 0.9;
    var highC = goalCarbs * 1.1;

// check user's purpose
    var purpose = $("input[type='radio'][name='speed']:checked").val();

// scopes of nutrients should depend on purpose, so here we determine them:
    if (purpose == "maintain") {
        $(".blueNumberMove").text("осталась прежней");
        $(".yourDecision").text("поддерживать текущий вес");
        $(".yourCcalIntake").text("такое же");
        lowK = goalKkal * 0.98;
        highK = goalKkal * 1.02;
        lowP = goalProtein * 0.95;
        highP = goalProtein * 1.5;
    } else if (purpose == "lose") {
        $(".blueNumberMove").text("стала меньше");
        $(".yourDecision").text("терять вес");
        $(".yourCcalIntake").text("меньше");
        lowK = goalKkal * 0.9;
        highK = goalKkal * 1;
        lowP = goalProtein * 0.98;
        highP = goalProtein * 1.5;
    } else if (purpose == "gain") {
        $(".blueNumberMove").text("стала больше");
        $(".yourDecision").text("увеличить вес тела");
        $(".yourCcalIntake").text("больше");
        lowK = goalKkal * 1;
        highK = goalKkal * 1.1;
        lowP = goalProtein * 1;
        highP = goalProtein * 1.5;
    }


    if (goalProtein !== 0 && goalFat !== 0 && goalCarbs !== 0 && goalKkal !== 0) {
        $(".conclPrompt").css("display", "none");

        // function assembler is making conclutions with different text and colors
        // it called by comparing goal nutrient amount and actual one (find it below)
        function assembler(nutrientName, difference) {
            //todo maybe reason of wrong calculation
            // this.nutrientName = nutrientName;
            // this.difference = difference;

            var classToChange;
            var ifNotCool = "";
            var coolOrNot = "concNotCool ";
            var cellCool = "cellCool, cellShortage, cellOverload";
            var cellNotCool = "";
            var removeClass = "";
            var wat = "";
            var promptedSpan = "";
            var nameFloat = "";
            var x, y;


            if (difference == "high") {
                $(".concl" + nutrientName).addClass("available");
                ifNotCool = " concCool";
                classToChange = "overload";
                cellNotCool = "cellOverload";
                if (nutrientName == "Kkal") {
                    x = tKkal - highK;
                    nameFloat = "убери " + Math.round(x * 10) / 10 + " ккал";
                } else if (nutrientName == "Protein") {
                    x = tProtein - highP;
                } else if (nutrientName == "Fat") {
                    x = tFat - highF;
                } else if (nutrientName == "Carbo") {
                    x = tCarbo - highC;
                }
                nameFloat = "убери " + Math.round(x * 10) / 10 + " г";

            } else if (difference == "low") {
                $(".concl" + nutrientName).addClass("available");
                ifNotCool = " concCool";
                classToChange = "shortage";
                cellNotCool = "cellShortage";
                if (nutrientName == "Kkal") {
                    x = lowK - tKkal;
                    nameFloat = "добавь " + Math.round(x * 10) / 10 + " ккал";
                } else if (nutrientName == "Protein") {
                    x = lowP - tProtein;
                } else if (nutrientName == "Fat") {
                    x = lowF - tFat;
                } else if (nutrientName == "Carbo") {
                    x = lowC - tCarbo;
                }
                nameFloat = "добавь " + Math.round(x * 10) / 10 + " г";

            } else if (difference == "normal") {
                $(".concl" + nutrientName).removeClass("available");
                ifNotCool = " concNotCool bold";
                coolOrNot = "";
                classToChange = "concCool";
                cellCool = "cellOverload cellShortage";
                cellNotCool = "cellCool";
                removeClass = ".promptMe, #sortable";
                let whichOne = "";
                nameFloat = "в самый раз!";
                if (nutrientName == "Kkal") {
                    promptedSpan = "promptedkkal";
                    wat = ".kkal, .table thead th:nth-child(5)";
                } else if (nutrientName == "Protein") {
                    promptedSpan = "promptedprotein";
                    wat = ".prot, .table thead th:nth-child(2)";
                } else if (nutrientName == "Fat") {
                    promptedSpan = "promptedfat";
                    wat = ".fat, .table thead th:nth-child(3)";
                } else if (nutrientName == "Carbo") {
                    promptedSpan = "promptedcarbo";
                    wat = ".carbo, .table thead th:nth-child(4)";
                }
            }


            // краткое заключение в виде плавающей кнопки
            $(".concl" + nutrientName)
                .removeClass("shortage overload" + ifNotCool)
                .addClass(coolOrNot + classToChange);

            $(".total" + nutrientName)
                .removeClass(cellCool)
                .addClass(cellNotCool);

            $(".foodPanel span, .foodPanel button").removeClass(promptedSpan);

            $(removeClass).removeClass("promptedprotein promptedfat");

            $(wat).removeClass("promptedprotein promptedfat promptedcarbo colored");


            $(".concl" + nutrientName).find("span.howMuch").text(nameFloat);

            boldUtil($);


        };// end of assembler


        if (tKkal > 0 && goalKkal > 0) {
            if (highK < tKkal) {
                assembler("Kkal", "high");
            } else if (tKkal < lowK) {
                assembler("Kkal", "low");
            } else if ((lowK < tKkal) && (tKkal < highK)) {
                assembler("Kkal", "normal");
            }
        }

        if (tProtein > 0 && goalProtein > 0) {
            if (highP < tProtein) {
                assembler("Protein", "high");
            } else if (tProtein < lowP) {
                assembler("Protein", "low");
            } else if (lowP < tProtein && tProtein < highP) {
                assembler("Protein", "normal");
            }
        }

        if (tFat > 0 && goalFat > 0) {
            if (highF < tFat) {
                assembler("Fat", "high");
            } else if (tFat < lowF) {
                assembler("Fat", "low");
            } else if ((lowF < tFat) && (tFat < highF)) {
                assembler("Fat", "normal");
            }
        }

        if (tCarbo > 0 && goalCarbs > 0) {
            if (highC < tCarbo) {
                assembler("Carbo", "high");
            } else if (tCarbo < lowC) {
                assembler("Carbo", "low");
            } else if ((lowC < tCarbo) && (tCarbo < highC)) {
                assembler("Carbo", "normal");
            }
        }
    }

} // end of compaire()

// this function is managing float prompts behavior
// depending on type of prompt she makes it red, yellow, green or white

export function boldUtil($) {

    $(".float").css("background-color", "#fff");
    var boldE = $(".bold");
    if (boldE.hasClass("concCool")) {
        boldE.css("background-color", "#27bd27");
    } else if (boldE.hasClass("shortage")) {
        boldE.css("background-color", "#FFB83D");
    } else if (boldE.hasClass("overload")) {
        boldE.css("background-color", "#ff4e4e");
    }

}
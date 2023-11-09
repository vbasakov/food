let mainFunc = function ($) {
    // UP TO THE TOP BUTTON
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function () {
        ($(this).scrollTop() > offset) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        if ($(this).scrollTop() > offset_opacity) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0,
            }, scroll_top_duration
        );
    });
    // UP TO THE TOP BUTTON FINISHED


    var whichNutrient = "";

    var calcProt, calcFat, calcCarbs, calcKkal;

    var factProt, factFat, factCarbs, factKkal;

    if (typeof Cookies.get('age') !== 'undefined') {
        $('#age').val(Cookies.get('age'));
    }
    ;
    if (typeof Cookies.get('weight') !== 'undefined') {
        $('#weight').val(Cookies.get('weight'));
    }
    ;
    if (typeof Cookies.get('height') !== 'undefined') {
        $('#height').val(Cookies.get('height'));
    }
    ;
    if (typeof Cookies.get('sex') !== 'undefined') {
        var thissex = Cookies.get('sex');
        $('#' + thissex).prop('checked', true);
    }
    ;
    if (typeof Cookies.get('activity') !== 'undefined') {
        var thisactivity = Cookies.get('activity');
        $('#' + thisactivity).prop('checked', true);
    }
    ;

    var calc = function calc() {

        var sex = $("input[type='radio'][name='sex']:checked").val(), age = 1 * $(".age").val(),
            height = 1 * $(".height").val(), weight = 1 * $(".weight").val(),
            activity = $("input[type='radio'][name='activity']:checked").val(),
            purpose = $("input[type='radio'][name='speed']:checked").val();
        var checkResult = $(".tdee_ex_int").text();

        Cookies.set('age', age, {expires: 90});
        Cookies.set('height', height, {expires: 90});
        Cookies.set('weight', weight, {expires: 90});
        Cookies.set('sex', sex, {expires: 90});
        var activityId = $("input[type='radio'][name='activity']:checked").attr('id');
        Cookies.set('activity', activityId, {expires: 90});

        var bmr = 10 * weight + 6.25 * height - 5 * age, tdee_ex, tdee_ex_int;

        $(".genderT, .ageT, .heightT, .weightT, .activityT").removeClass("didntFill");
        $("#maleS, #femaleS, #age, #height, #weight").removeClass("redBorder");

        if (!sex || !age || !height || !weight || !activity) {  // check if all forms were filled

            $(".fillThatForm").slideDown(200).css("display", "block");
            bmr = 0;

            if (!sex) {
                $(".genderT").addClass("didntFill");    // highlight those, which weren't filled
                $("#maleS, #femaleS").addClass("redBorder");
            } else if (!age) {
                $(".ageT").addClass("didntFill");
                $("#age").addClass("redBorder");
            } else if (!height) {
                $(".heightT").addClass("didntFill");
                $("#height").addClass("redBorder");
            } else if (!weight) {
                $(".weightT").addClass("didntFill");
                $("#weight").addClass("redBorder");
            } else if (!activity) {
                $(".activityT").addClass("didntFill");
            }

        } else if (sex == "male") {  // if all forms were filled AND step2 didn't activate yet -> activate step2
            bmr = Math.round(bmr + 5);
        } else if (sex == "female") {
            bmr = Math.round(bmr - 161);
        }
        ;

        $(".bmr").html(bmr);

        if (bmr != 0 && !purpose && !checkResult) {
            $(".fillThatForm").slideUp(200);
            $('.purposeChooserCont').slideDown(1000);
            // $('html, body').animate({
            //     scrollTop: 500
            // }, 1500);
        }


        if (bmr != 0) {
            tdee = bmr * activity;
            $(".tdee_ex_int").html(Math.round(tdee));
            $(".results:last-child").slideDown(200);
        }

        var pPerkg = 1 * ($("#proteinSelect").val());
        var fPerkg = 1 * ($("#fatSelect").val());
        var pPermass = 1 * ((weight * pPerkg).toFixed(1));
        var fPermass = 1 * ((weight * fPerkg).toFixed(1));


        if ($('#speed1').is(':checked')) {
            purposeGoal = 1 * ($(".tdee_ex_int").text());
            $(".purposeGoal, .goalKkal, .label-goalKkal").html(Math.round(purposeGoal));
        }
        ;

        var kPermass = 1 * $(".purposeGoal").text();
        var remainKalories = kPermass - (pPermass * 4 + fPermass * 9);
        var cPermass = 1 * ((remainKalories / 4).toFixed(1));

        $(".kkalsFromProtein").html((pPermass * 4).toFixed(1));
        $(".kkalsFromFat").html((fPermass * 9).toFixed(1));
        $(".protPerDay, .goalProtein, .label-goalProtein").html(pPermass);
        $(".fatPerDay, .goalFat, .label-goalFat").html(fPermass);
        $(".carbsPerDay, .goalCarbs, .label-goalCarbs").html(cPermass);

    };///// <- end of calc()

///// call of calc():
    $(".calc, #fatSelect, #proteinSelect, #speed1, .howFastli").click(calc);


    var ccalsForPreSet = function ccalsForPreSet() {
        var totalCalories = 1 * $(".goalKkal").text();
        if ((1000 > totalCalories) || (totalCalories > 6000)) {
            $(".preSet").css("display", "none");
            $(".promptToCalc").css("display", "block");
            $(".promptToCalc").text("К сожалению, у нас нет готовых рационов для вашего калоража.");
        } else {
            var roundCalories = 1 * (Math.round(totalCalories / 50) * 50);
            $(".inactivePreSet").removeClass();
            $(".preSet").css("display", "inline-block");
            $(".promptToCalc").css("display", "none");
            $("#set3").removeClass().addClass("preSet").addClass("set" + roundCalories);
            $("#set3 span").text(roundCalories);
            $("#set1").removeClass().addClass("preSet").addClass("set" + (roundCalories - 100));
            $("#set1 span").text(roundCalories - 100);
            $("#set2").removeClass().addClass("preSet").addClass("set" + (roundCalories - 50));
            $("#set2 span").text(roundCalories - 50);
            $("#set4").removeClass().addClass("preSet").addClass("set" + (roundCalories + 50));
            $("#set4 span").text(roundCalories + 50);
            $("#set5").removeClass().addClass("preSet").addClass("set" + (roundCalories + 100));
            $("#set5 span").text(roundCalories + 100);
        }
        ;
    };

    $("#speed1, .howFastli").click(ccalsForPreSet);

    $('body').on('click', '.li', function () {
        if ($(".tdee_ex_int").text()) {
            calc();
        }
    });


    var counterFor3rdStep = 0; // helps to prevent endless animation for 3rd step - animation increase it by 1 and don't run further
    $(".howFastli, #speed1").on("click", function () {
        if (counterFor3rdStep == 0) {
            $('.nutrientsAmountCont').slideDown(1500);
            $(".purposeChooserCont p:last-child").css("display", "block");

            counterFor3rdStep++;
        }
        $(".goalTotal").css("color", "#444");
        $(".goalProtein, .goalFat, .goalCarbs").css("display", "table-cell");
        $(".conclusionDiv span").css("display", "block"); //показываем итог в синих банках
    })


// call compaire()
    $(".calc, #sex, .activity, #intensity, #fatSelect, #proteinSelect, .howFastli").click(compaire);


    function cutThisProperly(x) {  // обрезает(не округляя) отправленное число до 2х цифр после запятой

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


    ////
    ////
    ////
    ////
    //////////////////////
    //////////////////////
    ////
    ////
    ////
    ////

    function insert(name, amount, unit, protein, fat, carbs, kkal) {
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

// checking if this choosenFood food already in active table
    function wasItThere(choosenFood) {
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


// adding bunches of food into eating
    var addFoodsByRequest = function (choosenFood) {      // choosenFood - is a string like "name Of Food 1, name Of Food 2, name Of Food 3, ...."
        var nAme, unit, protein, fat, carbs, kkal;
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
                var same = wasItThere(singleItem);      // check if it there already

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
                    insert(name, amount, unit, protein, fat, carbs, kkal);
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
        counter();
        paintIt(whichNutrient);
        compaire();
        bold();
    };

    $('body').on('click', '.del', function () {
        $(this).closest('tr').remove();
        counter();
        paintIt(whichNutrient);
        compaire();
        bold();
    });


    function makeNewTableForPrepairedSetting(arrayForTable) {
        $("#sortable").empty();
        var t = arrayForTable.split(", ");
        var name;

        function callIt(t) {
            for (i = 0; i < t.length; i++) {
                switch (t[i]) {
                    case "breakfast":
                        name = "Завтрак"
                        break;
                    case "frstMid":
                        name = "Перекус"
                        break;
                    case "lunch":
                        name = "Обед"
                        break;
                    case "scndMid":
                        name = "Перекус"
                        break;
                    case "supper":
                        name = "Ужин"
                        break;
                    default:
                        name = t[i];
                }
                $("#sortable").append("<li><table id='" + t[i] + "' class='table new addible'><thead><tr><th class='name'><input class='eating' value='" + name + "'></th><th class='col'></th><th class='col'></th><th class='col'></th><th class='col'></th></tr></thead><tbody></tbody></table></li>");
                $(".new").last().css("display", "block").animate({width: "98%"}, 0).animate({height: "33px"}, 0);
                $(".new").last().css("display", "table");
            }
        };
        callIt(t);
    };


    var makeItActive = function (eatingName) {
        $(".addible").each(function () {
            $(this).removeClass("active");
            $(this).parent().find(".clearEating").remove();
            $(this).parent().find(".delEating").remove();
        });
        $("#" + eatingName + "").addClass("active");
        $("#" + eatingName + "").parent().prepend("<div class='clearEating'>&#9675;</div>");
        $("#" + eatingName + "").parent().prepend("<div class='delEating'>&times;</div>");

    }


    $('body').on('click', ".foodPanel button", function () {
        var choosenFood = $(this).text();
        // some buttons whith food names have additional info in dana-info,
        // all this info is recognized by
        // jquery as button.text() - and it mess up hole table. To prevent it, I take whole that text
        // and split it by space, and then send it further
        var stuff = choosenFood.split("  ");
        choosenFood = stuff[0];
        addFoodsByRequest(choosenFood);
        paintIt(whichNutrient);
        bold();
    });


    //
    /////
    /////////
    /////////////
    /////////////////
    /////////////////////
    ////////////////////////
    ///////
    ///////
    ///////
    ///////
    ///////
    ///////


    $('body').on('click', '.up', function () {

        var choosenFood = $(this).parent().find(".nAme").text();
        var a = $(this).next().next(".output").text();
        var nAme, unit, protein, fat, carbs, kkal;

        var stepRange;

        function findThatFood(array, attr, value) {
            for (var i = 0; i < array.length; i += 1) {
                if (array[i][attr] === value) {
                    name = greatArray[i].nAme;
                    unit = greatArray[i].unit;
                    protein = greatArray[i].protein;
                    fat = greatArray[i].fat;
                    carbs = greatArray[i].carbs;
                    kkal = greatArray[i].kkal;
                }
            }
        }

        findThatFood(greatArray, "nAme", choosenFood);

        var mult;

        if (unit == "гр." || unit == "мл.") {
            stepRange = ($("input[type='radio'][name='stepRange']:checked").val()) * 1;
            $(this).next().next(".output").html(function () {
                a = a * 1 + stepRange;
                mult = a / 100;
                return a;
            });
        } else {
            stepRange = 1;
            $(this).next().next(".output").html(function () {
                a = a * 1 + stepRange;
                mult = a;
                return a;
            });
        }

        var newpro = protein * mult;
        var newfat = fat * mult;
        var newcar = carbs * mult;
        var newkka = kkal * mult;

        $(this).parent().parent().find(".prot").html(cutThisProperly(newpro));
        $(this).parent().parent().find(".fat").html(cutThisProperly(newfat));
        $(this).parent().parent().find(".carbo").html(cutThisProperly(newcar));
        $(this).parent().parent().find(".kkal").html(cutThisProperly(newkka));
        counter();
        paintIt(whichNutrient);
        compaire();
        bold();
    });


    /////
    /////
    /////
    /////
    /////
    /////
    //////////////////////
    //////////////////////
    //////////////////
    //////////////
    //////////
    /////
    //

    $('body').on('click', '.down', function () {

        var choosenFood = $(this).parent().find(".nAme").text();
        var a = $(this).prev(".output").text();
        var nAme, unit, protein, fat, carbs, kkal;

        var stepRange;

        function findThatFood(array, attr, value) {
            for (var i = 0; i < array.length; i += 1) {
                if (array[i][attr] === value) {
                    name = greatArray[i].nAme;
                    unit = greatArray[i].unit;
                    protein = greatArray[i].protein;
                    fat = greatArray[i].fat;
                    carbs = greatArray[i].carbs;
                    kkal = greatArray[i].kkal;
                }
            }
        }

        var mult;

        findThatFood(greatArray, "nAme", choosenFood);
        // alert(unit);

        if (unit == "гр." || unit == "мл.") {
            stepRange = ($("input[type='radio'][name='stepRange']:checked").val()) * 1;
            $(this).prev(".output").html(function () {
                if (a > stepRange) {
                    a = a * 1 - stepRange;
                    mult = a / 100;
                    return a;
                } else if (a == stepRange || a < stepRange) {
                    mult = a / 100;
                    return a;
                }
                ;
            });
        } else {
            stepRange = 1;
            $(this).prev(".output").html(function () {
                if (a > stepRange) {
                    a = a * 1 - stepRange;
                    mult = a;
                    return a;
                } else if (a == stepRange || a < stepRange) {
                    mult = a;
                    return a;
                }
                ;
            });
        }

        var newpro = protein * mult;
        var newfat = fat * mult;
        var newcar = carbs * mult;
        var newkka = kkal * mult;

        $(this).parent().parent().find(".prot").html(cutThisProperly(newpro));
        $(this).parent().parent().find(".fat").html(cutThisProperly(newfat));
        $(this).parent().parent().find(".carbo").html(cutThisProperly(newcar));
        $(this).parent().parent().find(".kkal").html(cutThisProperly(newkka));
        counter();
        paintIt(whichNutrient);
        compaire();
        bold();

    });


// this function is managing float prompts behavior
// depending on type of prompt she makes it red, yellow, green or white

    var bold = function bold() {

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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
/// compare function: compaires goal nutrients amounts with factual ones from table //////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var compaire = function compaire() {

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

                this.nutrientName = nutrientName;
                this.difference = difference;

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
                    whichOne = "";
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

                bold();


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


    $('body').on("click", ".foodPanel button", function () {
        paintIt(whichNutrient);
    });


    var paintIt = function paintIt(x) {

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


    $(".float").on("click", function () {

        if ($(this).hasClass("available")) {
            if ($(this).hasClass("protfloat")) {
                $(".fatfloat, .carbofloat, .kkalfloat").removeClass("bold");
                $(".fat, .carbo, .kkal, .fatSource, .proteinSource, .carboSource, .kkalSource").removeClass("colored promptedfat promptedcarbo promptedkkal");
                $(".fat, .carbo, .kkal").removeClass("promptedprotein promptedfat");
                $(".proteinSource").toggleClass("promptedprotein");
                $(".table thead th:nth-child(3), .table thead th:nth-child(4), .table thead th:nth-child(5)").removeClass("colored");
                $(".table thead th:nth-child(2), .prot").toggleClass("colored");
                whichNutrient = ".prot";
            } else if ($(this).hasClass("fatfloat")) {
                $(".protfloat, .carbofloat, .kkalfloat").removeClass("bold");
                $(".prot, .carbo, .kkal, .proteinSource, .carboSource, .kkalSource").removeClass("colored promptedprotein promptedcarbo promptedkkal");
                $(".prot, .carbo, .kkal").removeClass("colored promptedprotein promptedfat");
                $(".fatSource").toggleClass("promptedfat");
                $(".table thead th:nth-child(2), .table thead th:nth-child(4), .table thead th:nth-child(5)").removeClass("colored");
                $(".table thead th:nth-child(3), .fat").toggleClass("colored");
                whichNutrient = ".fat";
            } else if ($(this).hasClass("carbofloat")) {
                $(".protfloat, .fatfloat, .kkalfloat").removeClass("bold");
                $(".prot, .fat, .kkal, .fatSource, .proteinSource, .carboSource, .kkalSource").removeClass("colored promptedprotein promptedfat promptedkkal");
                $(".fat, .prot, .kkal").removeClass("colored promptedprotein promptedfat");
                $(".carboSource").toggleClass("promptedcarbo");
                $(".table thead th:nth-child(3), .table thead th:nth-child(5), .table thead th:nth-child(2)").removeClass("colored");
                $(".table thead th:nth-child(4), .carbo").toggleClass("colored");
                whichNutrient = ".carbo";
            } else if ($(this).hasClass("kkalfloat")) {
                $(".protfloat, .fatfloat, .carbofloat").removeClass("bold");
                $(".prot, .fat, .carbo, .fatSource, .carboSource, .proteinSource").removeClass("colored promptedprotein promptedfat promptedcarbo");
                $(".fat, .prot, .carbo").removeClass("colored promptedprotein promptedfat");
                $(".kkalSource").toggleClass("promptedkkal");
                $(".table thead th:nth-child(3), .table thead th:nth-child(4), .table thead th:nth-child(2)").removeClass("colored");
                $(".table thead th:nth-child(5), .kkal").toggleClass("colored");
                whichNutrient = ".kkal";
            }
            $(this).toggleClass("bold");
            paintIt(whichNutrient);
            bold();
        }

    });

//Счетчик нутриентов
    function counter() {
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

    $("body").on("click", ".menu-trigger", function () {
        $(".nav-menu").slideToggle(400, function () {
            $(this).toggleClass("nav-expanded").css('display', '');
        });
    });


// add new eating by pressing addNewTable button
    var addNewTable = function (someName) {
        addNewTableUtil($, someName)
    };

// making eating inactive by clicking in dif area
    $(document).mouseup(function (e) {
        var container = $(".addible");
        var all = $(".groopOfProducts, .preSet, .stepChanger, .foodListContainer fieldset, .float");
        if (!container.is(e.target) // if the target of the click isn't the container...
            && !all.is(e.target)
            && all.has(e.target).length === 0
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $(".addible").each(function () {
                $(this).removeClass("active");
            });
        }
    });


    $(".clearButton").on("click", function () {
        var x = $(".areYouSure");
        x.css("display", "block").animate({right: "0px", opacity: "1"}, 100);
        $(".no").click(function () {
            x.animate({right: "80px", opacity: "0"}, 100);
        });
        $(".yes").click(function () {
            $(".titleTableth").empty();
            $(".addible").each(function () {
                $(this).find("tbody").empty();
            });
            x.animate({right: "80px", opacity: "0"}, 100);
            counter();
            paintIt(whichNutrient);
            compaire();
            $(".conc").each(function () {
                $(this).removeClass("concCool").removeClass("concNotCool");
            });
            $(".tcol").each(function () {
                $(this).removeClass("cellCool").removeClass("cellNotCool");
            });
        });

    });

    $("body").on("click", ".addNewTable", addNewTable);


// addNewTable button span-prompt - on hover - then hides it
    $(".addNewTable").on("mouseover", function () {
        $(".addingPrompt").animate({left: "-20px", opacity: "1"}, 100);
    }).on("mouseout", function () {
        $(".addingPrompt").animate({left: "-5px", opacity: "0"}, 100);
    });

//making first eating active
    $(".addible").first().addClass("active");

    var turnItOff = function () {
        $(".addible").each(function () {
            $(this).removeClass("active");
            $(this).parent().find(".clearEating").remove();
            $(this).parent().find(".delEating").remove();
        });
    }


// make this eating active - so you can add a product srtight there
    $("#sortable").on('click', '.addible', function () {

        var eatingName = $(this).attr('id');
        if (eatingName) {
            makeItActive(eatingName);
        } else {
            $(".addible").each(function () {
                $(this).removeClass("active");
            });
            $(this).addClass("active");
            $(".clearEating").remove();
            $(".delEating").remove();
            $(this).parent().prepend("<div class='clearEating'>&#9675;</div>");
            $(this).parent().prepend("<div class='delEating'>&times;</div>");
        }

        $(".delEating").on("click", function () {
            var thistable = $(this).next().next();
            thistable.animate({opacity: 0}, 500);
            setTimeout(delit, 700);
            setTimeout(counter, 700);
            setTimeout(paintIt(whichNutrient), 1000);
            setTimeout(compaire, 700);

            function delit() {
                thistable.remove();
            };
            $(this).remove();
        });

        $(".clearEating").on("click", function () {
            var thistable = $(this).next();
            thistable.find("tbody").empty();
            counter();
            paintIt(whichNutrient);
            compaire();
        });
    });


// раскрывает и скрывает выпадающие списки с кнопками с едой
    $(".groopOfProducts span").click(function () {
        $(this).next().slideDown(500);
        $(this).addClass("pressed");
        var first = $(".first");
        var second = $(".second");
        var thisSpan = $(this);
        if (!thisSpan.hasClass("first") && !thisSpan.hasClass("second")) {
            if (first.length) {
                if (second.length) {
                    first.removeClass("first").removeClass("pressed").next().slideUp(500);
                    second.addClass("first").removeClass("second");
                }
                $(this).addClass("second");
            } else {
                $(this).addClass("first");
            }
        } else if (thisSpan.hasClass("first")) {
            first.removeClass("first").removeClass("pressed").next().slideUp(500);
            second.addClass("first").removeClass("second");
        } else {
            second.removeClass("second").removeClass("pressed").next().slideUp(500);
        }

    });

// раскрывает FAQ по таблице
    $(".tableFAQ h2").click(function () {
        $(this).next().slideToggle(1000);
        $(".tableFAQ h2 span").toggleClass("Animate");
    })

// jquery.ui plugin at work
    $(function () {
        $("#sortable").sortable();
        $("#sortable").disableSelection();
        $("#sortable").sortable({
            revert: 50   // speed with wich #sortable li moving in free space, when you drop it
        });
    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                 purpose chooser function - drop-down lists with the intensivity of mass gaining/losing                   //
//                          MAKING CHANGINGS WHEN USER CLICKS BULLETS OF SPEED-PURPOSE CHAPTER                             //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    var speed; // var with intensivity of mass-gaining/loosing stored in it (0.75 - 1.25) from "purpose chooser function"                //
    var purposeGoal;                                                                                                                     //
    var choosenOnes = $(".purposeChooserCont p:last-child, .purposeGoal, .nutrientsAmountCont, .nutrientsAmountCont select");            //
    var divBG = $(".nutrientsAmountCont h2");                                                                                            //
    $(function () {                                                                                                                      //
        $("input[name='speed']").click(function () {                            // when clicked on radiobuttons of gain/lose weight      //
            $(".purposeChooserCont").find(".wrapper").css("display", "none");  // hide all drop-downs                                    //
            choosenOnes.removeClass("greyText");                                                                                         //
            divBG.removeClass("greyBG");                                                                                                 //
            $(".title").text("Насколько быстро?");                                                                                       //
            var iuuu = $(this).attr("id");                                                                                               //
            if (iuuu != "speed1") {                                                                                                      //
                $(".promptForSpeed").css("display", "block");                                                                            //
                $(".promptForSpeed").animate({left: "-=10"}, 150).animate({left: "+=10"}, 150).animate({left: "-=10"}, 150).animate({left: "+=10"}, 150);
                choosenOnes.addClass("greyText");                                                                                        //
                divBG.addClass("greyBG");                                                                                                //
            } else {                                                                                                                     //
                $(".promptForSpeed").css("display", "none");                                                                             //
                choosenOnes.removeClass("greyText");                                                                                     //
                divBG.removeClass("greyBG");                                                                                             //
            }                                                                                                                            //
            $(this).parent().next().css("display", "inline-block");             // show drop-down where user clicked                     //
        });                                                                                                                              //
                                                                                                                                         //
        $('#speed1').click(function () {                                       // when 1st bullet clicked ("maintaining weight")         //
            purposeGoal = 1 * ($(".tdee_ex_int").text());                       // change nothing                                          //
            $(".purposeGoal, .goalKkal, .label-goalKkal").html(Math.round(purposeGoal));                 // put the same tdee_ex_int weight from calc()   //
        });                                                                                                                              //
        $('.howFastli').mousedown(function () {                             // when some li pressed from .wrapper                        //
            speed = 1 * $(this).attr("data-value");                              // save this li attr with changing goal-coefficient       //
            $(this).parent().prev().html($(this).text());                     // put name of li as a title of drop-list                  //
            purposeGoal = 1 * ($(".tdee_ex_int").text()) * speed;                // multiply mass of user with his choosen goal-coefficient  //
            $(".purposeGoal, .goalKkal, .label-goalKkal").html(Math.round(purposeGoal));                // return result in html         //
            $(".promptForSpeed").css("display", "none");                                                                                 //
            choosenOnes.removeClass("greyText");                                                                                         //
            divBG.removeClass("greyBG");                                                                                                 //
        })                                                                                                                               //
            .mouseup(function () {                                                // when mouse click out                                    //
                $(".howFastul").css("display", "none");                                  // hide drop-list                                   //
            })                                                                                                                               //
        $(".wrapper").mouseover(function () {                                  // when mouse hover or drop-list title                    //
            $(this).children("ul").css("display", "block");                   // show it                                                 //
        })                                                                                                                               //
            .mouseout(function () {                                               // when cursor goes away                                   //
                $(".howFastul").css("display", "none");                                  // hide drop-list                                   //
            })                                                                                                                               //
                                                                                                                                             //
    });                                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// tips on hover on some products. taking data from data-attribute of button
    $('button').mouseenter(function (e) {
        var data = $(this).data('info');
        if (data) {
            $('<div />', {
                'class': 'tip',
                text: $(this).data('info'),
                css: {
                    position: 'fixed',
                    top: e.clientY + $(this).height() - 50,
                    left: e.clientX + ($(this).width() / 2) - 30
                }
            }).appendTo(this);
        }
    })
        .mouseleave(function () {
            $('.tip', this).remove();
        })
        .mousemove(function (e) {
            $('.tip', this).css({
                top: e.clientY + $(this).height() - 50,
                left: e.clientX + ($(this).width() / 2) - 30
            });
        });


//*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--*//
//*            FLOATABLE    start              *//
//*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--*//

// test if there is any addible table
    var isThereAnyAddible = $(".addible").length;
    if (isThereAnyAddible > 0) {

        $(document).scroll(function () {
            floatablePrompts();
        });

        function floatablePrompts() {
            var width = $(".addible").width();
            var width = width + 2 + "px";
            $(".floatableDiv").css("width", width);


            var navWrap = $('#navWrap'),
                nav = $('.floatableDiv');

            //dot is the lowest point, above which div start to float
            // $(".addible").last();
            var adHeight = $(".addible").last().height() + 50;
            var dot = $(".addible").last().offset().top + adHeight;
            // dot = $('.final').offset().top;
            // upperLimit is the point, which limits upper level for floated div
            var upperLimit = $("#sortable li:first-child").offset().top;
            var stop = upperLimit + 80;


            var bottom = $(this).scrollTop() + $(window).height();
            if (bottom < dot) {
                nav.addClass('sticky');
                if (bottom > stop) {
                    nav.css('bottom', 0);
                } else {
                    nav.css('bottom', stop);
                }
            } else {
                nav.removeClass('sticky');
            }
        }

    }

    $(".preSet").on("click", function () {
        floatablePrompts();
    });


//*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--*//
//*              FLOATABLE    end              *//
//*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--*//

// $(".textHeader").click(function(){
//     $(this).next().slideToggle(400);
// })


    applyGotovueBluda($);
    applyPreparedSets($);
};

let clickAll = function($) {
    $(".calc").click()
    $("#speed2").click()
    $(".howFastli").mousedown().mouseup().click()
    // ccalsForPreSet()
    // calc()
    $("span:contains('Супы')").click()
    $(".harcho").click()
}
jQuery(document).ready(function ($) {
    function applyScripts(scripts, callback) {
        if (scripts.length === 0) {
            callback()
        } else {
            const [head, ...tail] = scripts
            $.getScript(head, function() {
                applyScripts(tail, callback)
            })
        }
    }
    applyScripts(
        [
            "js/lightbox.js",
            "js/newUtil.js",
            "js/preparedBluda.js",
            "js/preparedSets.js",
            "js/products.js"
        ],
        function() {
            mainFunc($)
            clickAll($)
        }
    )
});// end ofjQuery($)
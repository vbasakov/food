function applyGotovueBluda($) {
    var addNewTable = function (someName) { addNewTableUtil($, someName);};

    var g1 = 1;
    var g2 = 1;
    var g3 = 1;
    var g4 = 1;
    var g5 = 1;
    var g6 = 1;

// примеры готовых наборов - гейнер, который можно добавить в рацион
    $(".gainer1").click(function () {
        var smthToAdd = "";
        if (g1 > 1) {
            var smthToAdd = "-" + g1; // добавляет к названию порядковый номер, чтобы можно было добавить несколько раз
        }
        addNewTable('Гейнер-№1' + smthToAdd + '');
        makeItActive('Гейнер-№1' + smthToAdd + '');
        addFoodsByRequest("Творог 2%, Творог 2%, Йогурт фруктовый, Йогурт фруктовый, Банан, Курага, Курага, Курага, Курага, Курага, Варенье малиновое");
        g1++;
    });
    $(".gainer2").click(function () {
        var smthToAdd = "";
        if (g2 > 1) {
            var smthToAdd = "-" + g2; // добавляет к названию порядковый номер, чтобы можно было добавить несколько раз
        }
        addNewTable('Гейнер-№2' + smthToAdd + '');
        makeItActive('Гейнер-№2' + smthToAdd + '');
        addFoodsByRequest("Творог 2%, Творог 2%, Груша, Изюм, Изюм, Изюм, Арахис, Арахис, Мёд, Мёд, Какао Nesquik, Какао Nesquik");
        g2++;
    });
    $(".gainer3").click(function () {
        var smthToAdd = "";
        if (g3 > 1) {
            var smthToAdd = "-" + g3; // добавляет к названию порядковый номер, чтобы можно было добавить несколько раз
        }
        addNewTable('Гейнер-№3' + smthToAdd + '');
        makeItActive('Гейнер-№3' + smthToAdd + '');
        addFoodsByRequest("Творог 2%, Творог 2%, Курага, Курага, Курага, Курага, Курага, Сахар, Сахар, Сметана 10%, Сметана 10%, Банан, Молоко 2,5%, Молоко 2,5%");
        g3++;
    });
    $(".borcsh").click(function () {
        var smthToAdd = "";
        if (g4 > 1) {
            var smthToAdd = "-" + g4; // добавляет к названию порядковый номер, чтобы можно было добавить несколько раз
        }
        addNewTable('Борщ' + smthToAdd + '');
        makeItActive('Борщ' + smthToAdd + '');
        addFoodsByRequest("Говядина, Говядина, Говядина, Говядина, Говядина, Говядина, Говядина, Говядина, Говядина, Говядина, Картофель, Картофель, Картофель, Капуста белокочанная, Капуста белокочанная, Капуста белокочанная, Свекла, Свекла, Свекла, Морковь, Морковь, Лук репчатый, Лук репчатый, Чеснок, Чеснок, Чеснок, Подсолнечное масло, Томатная паста, Томатная паста, Томатная паста");
        g4++;
    });
    $(".schi").click(function () {
        var smthToAdd = "";
        if (g5 > 1) {
            var smthToAdd = "-" + g5; // добавляет к названию порядковый номер, чтобы можно было добавить несколько раз
        }
        addNewTable('Щи' + smthToAdd + '');
        makeItActive('Щи' + smthToAdd + '');
        addFoodsByRequest("Говядина, Говядина, Говядина, Говядина, Говядина, Капуста белокочанная, Капуста белокочанная, Капуста белокочанная, Капуста белокочанная, Капуста белокочанная, Картофель, Картофель, Морковь, Лук репчатый, Лук репчатый, Томатная паста, Чеснок, Чеснок, Чеснок, Подсолнечное масло, Подсолнечное масло");
        g5++;
    });
    $(".harcho").click(function () {
        var smthToAdd = "";
        if (g6 > 1) {
            var smthToAdd = "-" + g6; // добавляет к названию порядковый номер, чтобы можно было добавить несколько раз
        }
        addNewTable('Харчо' + smthToAdd + '');
        makeItActive('Харчо' + smthToAdd + '');
        addFoodsByRequest("Баранина, Баранина, Баранина, Баранина, " +
            "Баранина, Баранина, Баранина, Баранина, Баранина, Баранина," +
            "Белый рис, Белый рис, " +
            "Лук репчатый, Лук репчатый, Лук репчатый, " +
            "Морковь, " +
            "Томатная паста, Томатная паста, " +
            "Чеснок, Чеснок, Чеснок, " +
            "Подсолнечное масло, Подсолнечное масло, Подсолнечное масло, Подсолнечное масло");
        g6++;
    });
}
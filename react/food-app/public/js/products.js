/////////////////////////////////////////////////////////////////////////
//     FOOD ADDING     /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

function food(nAme, amount, unit, protein, fat, carbs, kkal) {
    this.nAme = nAme;
    this.amount = amount;
    this.unit = unit;
    this.protein = protein;
    this.fat = fat;
    this.carbs = carbs;
    this.kkal = kkal;
}

// ВСЕ ДАННЫЕ ПО ПРОДУКТУ В СКОБКАХ ДОЛЖНЫ БЫТЬ ПРИВЕДЕНЫ НА 100 ГРАММ ПРОДУКТА!!!!!!!!!

var gelatin = new food("Желатин", 100, "гр.", 87.2, 0.4, 0.7, 355);

//Крупы
var krupa = new food("Крупа", 70, "гр.", 10, 10, 10, 100);   // НАПРИМЕР, ТУТ УКАЗАНЫ БЖУ И ККАЛ НА 100 гр, НО ПОРЦИЯ ПО УМОЛЧАНИЮ = 70 гр.
var buckweat = new food("Гречка", 100, "гр.", 12.6, 3.3, 62.1, 313);
var oatmeal = new food("Овсянка", 100, "гр.", 12.3, 6.1, 59.5, 342);
var fitnessHlopya = new food("Хлопья Fitness с молоком", 1, "пор.", 7, 0.7, 29.1, 150);
var semolina = new food("Манка", 100, "гр.", 11, 1, 73, 360);
var millet = new food("Пшено", 100, "гр.", 12, 2.9, 69.3, 334);
var polba = new food("Полба", 100, "гр.", 15, 2.4, 70, 338);
var kinoa = new food("Киноа", 100, "гр.", 14, 6, 64, 368);
var chickPea = new food("Нут", 100, "гр.", 19, 6, 61, 364);
var kuskus = new food("Кускус", 100, "гр.", 3.8, 0.2, 23, 112);
var len = new food("Льна семена", 100, "гр.", 18.3, 42.2, 28.9, 534);
var kunszhut = new food("Кунжут", 100, "гр.", 18, 50, 23, 573);
var test = new food("Тест", 100, "гр.", 1, 2, 3, 1000);
var whrice = new food("Белый рис", 100, "гр.", 6.6, 0.6, 79.3, 360);
var wildrice = new food("Дикий рис(цицания)", 100, "гр.", 14.7, 1.08, 74.9, 357);
var brrice = new food("Бурый рис", 100, "гр.", 7.5, 2.7, 76.2, 362);
var bulgur = new food("Булгур", 100, "гр.", 12.3, 1.3, 75.9, 342);
var chechevica = new food("Чечевица", 100, "гр.", 24.6, 1.1, 63.3, 352);
var yachnevaya = new food("Ячневая крупа", 100, "гр.", 10.4, 1.3, 66.3, 324);
var barley = new food("Перловка", 100, "гр.", 9.3, 1.1, 73.7, 324);
var dryGoroh = new food("Горох сушеный", 100, "гр.", 20.5, 2, 53.3, 298);
var dryFasol = new food("Фасоль сухая", 100, "гр.", 21.1, 1.2, 41.4, 265);
var otrubiPsh = new food("Отруби пшеничные", 100, "гр.", 15.1, 3.8, 53.6, 296);
var otrubiRszh = new food("Отруби ржаные", 100, "гр.", 11.2, 3.2, 32, 221);
var otrubiOvs = new food("Отруби овсяные", 100, "гр.", 8, 4, 10, 110);
var cucuruznayaCrupa = new food("Кукурузная крупа", 100, "гр.", 8.3, 1.2, 75, 337);

//Молочное
var yogurtFlav = new food("Йогурт фруктовый", 100, "мл.", 2.8, 2.5, 13.5, 89);
var yog04 = new food("Йогурт 0,4%", 100, "мл.", 3.2, 0.4, 4.0, 32);
var yog25 = new food("Йогурт 2,5%", 100, "мл.", 3.2, 2.5, 4.6, 54);
var milk_05 = new food("Молоко 0,5%", 100, "мл.", 2.8, 0.5, 4.9, 35);
var milk_15 = new food("Молоко 1,5%", 100, "мл.", 2.8, 1.5, 4.7, 44);
var milk_25 = new food("Молоко 2,5%", 100, "мл.", 2.8, 2.5, 4.7, 52);
var milk_32 = new food("Молоко 3,2%", 100, "мл.", 2.9, 3.2, 4.7, 59);
var kefir0 = new food("Кефир 0%", 100, "мл.", 3, 0.1, 3.8, 30);
var kefir1 = new food("Кефир 1%", 100, "мл.", 2.8, 1, 4, 40);
var kefir15 = new food("Кефир 1,5%", 100, "мл.", 3.3, 1.5, 3.6, 41);
var kefir25 = new food("Кефир 2,5%", 100, "мл.", 2.8, 2.5, 3.9, 50);
var kefir32 = new food("Кефир 3,2%", 100, "мл.", 2.8, 3.2, 4.1, 56);
var slivki10 = new food("Сливки 10%", 100, "мл.", 3, 10, 4, 118);
var slivki20 = new food("Сливки 20%", 100, "мл.", 2.8, 20, 3.7, 205);
var slivki33 = new food("Сливки 33%", 100, "мл.", 2.2, 33, 4, 322);
var snegok = new food("Снежок 2,5%", 100, "мл.", 2.9, 2.5, 10, 74);
var ryaghenka25 = new food("Ряженка 2,5%", 100, "мл.", 2.8, 2.5, 4.2, 51);
var ryaghenka32 = new food("Ряженка 3,2%", 100, "мл.", 2.9, 3.2, 4.2, 57);
var ryaghenka4 = new food("Ряженка 4%", 100, "мл.", 2.6, 4, 4.2, 63);
var aktimel = new food("Актимель", 100, "мл.", 2.8, 2.6, 11.5, 81);
var hohTr = new food("Сыр Хохланд 1 треугольник", 1, "шт.", 1.92, 4.9, 0.87, 55.3);
var hohLom = new food("Сыр Хохланд 1 ломтик", 1, "шт.", 2.62, 4.31, 0.75, 52.31);
var cottageCheese_gr = new food("Творог зерненый", 100, "гр.", 11, 4.3, 3.4, 98);
var cottageCheese_0 = new food("Творог 0%", 100, "гр.", 18, 0, 3.3, 85);
var cottageCheese_2 = new food("Творог 2%", 100, "гр.", 18, 2, 3.3, 103);
var cottageCheese_5 = new food("Творог 5%", 100, "гр.", 17.2, 5, 1.8, 121);
var cottageCheese_9 = new food("Творог 9%", 100, "гр.", 16.7, 9, 2.0, 159);
var smetana10 = new food("Сметана 10%", 1, "ст.л.", 0.75, 2.5, 0.72, 28.75);
var smetana15 = new food("Сметана 15%", 1, "ст.л.", 0.65, 3.75, 0.75, 39.5);
var smetana20 = new food("Сметана 20%", 1, "ст.л.", 0.62, 5, 0.85, 51);
var smetana25 = new food("Сметана 25%", 1, "ст.л.", 0.65, 6.25, 0.62, 62);
var smetana30 = new food("Сметана 30%", 1, "ст.л.", 0.6, 7.5, 0.77, 73.5);
var russianCheese = new food("Сыр Российский", 100, "гр.", 23, 29, 0, 360);
var adygCheese = new food("Сыр Адыгейский", 100, "гр.", 16, 18, 0, 240);
var lamber = new food("Сыр Ламбер", 100, "гр.", 23.7, 30.5, 0, 377);
var chedder = new food("Сыр Чеддер", 100, "гр.", 25, 33, 1.3, 402);
var suluguni = new food("Сулугуни", 100, "гр.", 20, 24, 0, 290);
var almetTvor = new food("Almette творожный", 100, "гр.", 6, 26, 3, 270);
var hohlTvor = new food("Hochland творожный", 100, "гр.", 6.5, 22.7, 3.6, 245);
var parmezan = new food("Пармезан", 100, "гр.", 35.7, 25.8, 3.2, 392);
var mozzarella = new food("Моцарелла", 100, "гр.", 22.1, 22.3, 2.2, 300);

//Жиры, масла, соусы
var fish_oil = new food("Жир рыбий", 1, "ст.л.", 0, 17, 0, 153.34);
var mayo = new food("Майонез Провансаль", 1, "ст.л.", 0.77, 16.75, 0.65, 156);
var mayo = new food("Майонез Провансаль", 1, "ст.л.", 0.77, 16.75, 0.65, 156);
var spread = new food("Маргарин", 100, "гр.", 0.5, 82, 0, 745);
var butter_72 = new food("Масло сливочное 72,5%", 1, "ст.л.", 0.14, 12.32, 0.22, 112.37);
var butter_82 = new food("Масло сливочное 82%", 1, "ст.л.", 0.08, 14.02, 0, 127.16);
var olive_oil = new food("Оливковое масло", 1, "ст.л.", 0, 13.47, 0, 121.23);
var sunflower_oil = new food("Подсолнечное масло", 1, "ст.л.", 0, 16.95, 0, 152.49);
var flaxseed_oil = new food("Льняное масло", 1, "ст.л.", 0, 13.6, 0, 122); // 1 ст. ложка 13,6 гр
var lard = new food("Сало", 100, "гр.", 1.4, 90, 0, 748);
var soysauce = new food("Соевый соус", 1, "ст.л.", 1.3, 0.1, 0.8, 8);
var heinzChes = new food("Heinz чесночный", 100, "гр.", 1.5, 28.1, 10.5, 305);
var heinzKS = new food("Heinz кисло-сладкий", 100, "гр.", 0.8, 0.2, 19.9, 86);
var heinzSyr = new food("Heinz сырный", 100, "гр.", 1.3, 57.5, 4.6, 517);
var heinzGor = new food("Heinz горчичный", 100, "гр.", 1.6, 57.2, 8.7, 555);
var heinzCez = new food("Heinz Цезарь", 100, "гр.", 1, 59, 6.5, 560);
var narsharab = new food("Наршараб", 100, "гр.", 0, 0, 62.5, 250);
var tkemali = new food("Ткемали", 100, "гр.", 0.6, 2.6, 16.2, 93);
var tomatPasta = new food("Томатная паста", 1, "ст.л.", 0.69, 0.08, 3.03, 13);  // 1 ст. ложка 15 гр

//Фрукты
var apricot = new food("Абрикос", 30, "гр.", 0.9, 0.1, 10.8, 41); // 30g
var pine = new food("Ананас", 100, "гр.", 0.4, 0, 11.8, 48);
var avocado = new food("Авокадо", 180, "гр.", 2, 20, 7.4, 208);
var orange = new food("Апельсин", 150, "гр.", 0.9, 0.2, 8.1, 36); // 150g
var watermelon = new food("Арбуз", 100, "гр.", 0.7, 0.2, 8.8, 38);
var banana = new food("Банан", 100, "гр.", 1.5, 0, 22.4, 91);  // 100g
var garnet = new food("Гранат", 125, "гр.", 0.9, 0, 13.9, 52); // 125g
var grapefruit = new food("Грейпфрут", 130, "гр.", 0.7, 0.2, 6.5, 29); // 130g
var pear = new food("Груша", 130, "гр.", 0.4, 0.3, 10.9, 42); // 130g
var melon = new food("Дыня", 100, "гр.", 0.6, 0.3, 7.4, 33);
var kiwi = new food("Киви", 100, "гр.", 1, 0.6, 10.3, 48); // 80g
var limon = new food("Лимон", 125, "гр.", 0.9, 0.1, 3, 16); // 125g
var mango = new food("Манго", 100, "гр.", 0.8, 0.4, 15, 60);
var mandarin = new food("Мандарин", 100, "гр.", 0.8, 0.2, 7.5, 33);  // 100g
var peach = new food("Персик", 150, "гр.", 0.9, 0.1, 11.3, 46); // 150g
var plum = new food("Слива", 30, "гр.", 0.8, 0.3, 9.6, 42); // 30g
var applereddel = new food("Яблоко красное", 100, "гр.", 0.27, 0.2, 14.06, 59);
var applegreen = new food("Яблоко зеленое", 100, "гр.", 0.44, 0.19, 13.6, 58);
var grape = new food("Виноград", 100, "гр.", 0.6, 0.2, 16.8, 65);
var malina = new food("Малина", 100, "гр.", 1.2, 0.65, 11.94, 52);
var inzhir = new food("Инжир", 1, "шт.", 0.4, 0.15, 9.6, 37); // средний = 50 гр
var chernika = new food("Черника", 100, "гр.", 0.74, 0.33, 14.5, 57);
var klubnika = new food("Клубника", 100, "гр.", 0.67, 0.3, 7.68, 32);
var smorodina = new food("Смородина", 100, "гр.", 1.4, 0.2, 14, 56); // любого цвета
var eszhevika = new food("Ежевика", 100, "гр.", 1.4, 0.5, 10, 43);
var vishnya = new food("Вишня", 100, "гр.", 0.8, 0.5, 11.3, 52);
var chereshnya = new food("Черешня", 100, "гр.", 1.1, 0.4, 11.5, 50);
var pomelo = new food("Помело", 100, "гр.", 0.8, 0, 10, 38);
var kryzovnik = new food("Крыжовник", 100, "гр.", 0.9, 0.6, 10, 44);
var oblepiha = new food("Облепиха", 100, "гр.", 1.2, 5.4, 5.7, 82);
var hurma = new food("Хурма", 25, "гр.", 0.8, 0.4, 34, 127);   // средний = 25 гр
var ryabinaCh = new food("Рябина", 100, "гр.", 1.2, 5.4, 5.7, 82); // черноплодная
var cranberry = new food("Клюква", 100, "гр.", 0.5, 0.13, 12, 46); // черноплодная

//Овощи
var aubergine = new food("Баклажан", 100, "гр.", 1.2, 0.1, 4.5, 24);
var broccoli = new food("Брокколи", 100, "гр.", 3, 0.4, 5.2, 28);
var greenPeas = new food("Горошек зеленый", 100, "гр.", 5, 0.2, 13.8, 73);
var kukuruza = new food("Кукуруза сладкая", 100, "гр.", 2.87, 0.6, 9, 57.8);
var chechKr = new food("Чечевица красная", 100, "гр.", 21.6, 1.1, 48, 314);
var zucchini = new food("Кабачок", 100, "гр.", 0.6, 0.3, 4.6, 24);
var cabbage = new food("Капуста белокочанная", 100, "гр.", 1.8, 0.1, 4.7, 27);
var cauliflower = new food("Капуста цветная", 100, "гр.", 2.5, 0.3, 5.4, 30);
var potatoes = new food("Картофель", 150, "гр.", 2, 0.1, 17, 77); // 150g
var onion = new food("Лук репчатый", 100, "гр.", 1.4, 0, 10.4, 41); // 100g
var carrot = new food("Морковь", 120, "гр.", 1.56, 0.12, 8.28, 38.4); // 120g
var olives = new food("Оливки", 100, "гр.", 0.8, 10.7, 6.3, 115);
var cucumber = new food("Огурец", 100, "гр.", 0.8, 0.1, 2.8, 15); // 100g
var bulgarianPepper = new food("Перец сладкий", 180, "гр.", 1.3, 0, 5.3, 27); // 180g
var radishes = new food("Редис", 15, "гр.", 1.2, 0.1, 3.4, 19); // 3sm - 15g
var beetroot = new food("Свекла", 100, "гр.", 1.5, 0.1, 8.8, 40);
var soy = new food("Соя", 100, "гр.", 36, 20, 30, 446);
var tomato = new food("Томат", 150, "гр.", 0.6, 0.2, 4.2, 20); // 150g
var tomatoCherry = new food("Томат черри", 20, "гр.", 0.8, 0.1, 2.8, 15); // 20g
var tykva = new food("Тыква", 100, "гр.", 1.3, 0.3, 7.7, 28);
var beans = new food("Фасоль", 100, "гр.", 7, 0.5, 16.9, 102);
var beansStr = new food("Фасоль стручковая", 100, "гр.", 1.8, 0.1, 7, 31);
var garlic = new food("Чеснок", 2, "гр.", 6.5, 0.5, 29.9, 143); // 1 small pc - 2g
var petrushka = new food("Петрушка", 30, "гр.", 3.7, 0.4, 7.6, 47);
var selderey = new food("Сельдерей", 100, "гр.", 0.7, 0.2, 3, 16);
var sparga = new food("Спаржа", 100, "гр.", 2.2, 0.12, 3.9, 20);
var ukrop = new food("Укроп", 30, "гр.", 2.5, 0.5, 6.3, 38);
var rukkola = new food("Руккола", 100, "гр.", 2.6, 0.7, 3.7, 25);
var salat = new food("Салат", 30, "гр.", 1.2, 0.3, 1.3, 12);
var shpinat = new food("Шпинат", 100, "гр.", 2.9, 0.4, 4.6, 23);
var brussel = new food("Брюссельская капуста", 19, "гр.", 3.38, 0.3, 8.95, 43); // 19g

//Грибы
var chanterelle = new food("Лисичка", 100, "гр.", 1.49, 0.53, 6.86, 38);
var shiitake = new food("Шиитаке", 100, "гр.", 2.24, 0.49, 6.79, 34);
var suroezki = new food("Сыроежки", 100, "гр.", 1.7, 0.7, 1.5, 15);
var opyata = new food("Опята", 100, "гр.", 2.2, 1.2, 0.5, 17);
var gruzdy = new food("Груздь", 100, "гр.", 1.8, 0.5, 0.8, 16);
var podosinovik = new food("Подосиновик", 100, "гр.", 3.3, 0.5, 3.7, 22);
var podberezovik = new food("Подберёзовик", 100, "гр.", 2.3, 0.9, 3.7, 31);
var beluy = new food("Белый гриб", 100, "гр.", 3.7, 1.7, 1.1, 34);
var shampinyon = new food("Шампиньон", 100, "гр.", 4.3, 1, 1, 27);
var veshenki = new food("Вешенки", 100, "гр.", 2.5, 0.3, 6.5, 38);
var maslyata = new food("Маслята", 100, "гр.", 2.4, 0.7, 1.7, 19);
var smorchky = new food("Сморчки", 100, "гр.", 1.7, 0.3, 4.2, 27);
var trufeli = new food("Трюфели", 100, "гр.", 5.9, 0.5, 5.3, 51);

//Мясо
var hameGuse = new food("Паштет из гусиной печени Hame", 1, "ст.л.", 3.63, 3.75, 0.45, 48);
var mutton = new food("Баранина", 100, "гр.", 15.6, 16.3, 0, 209);
var ham = new food("Ветчина", 100, "гр.", 14, 24, 0, 270)
var beef = new food("Говядина", 100, "гр.", 18.9, 12.4, 0, 187);
var tushenka = new food("Тушенка", 100, "гр.", 15, 17, 0, 213);
var beefLang = new food("Язык говяжий", 100, "гр.", 12.2, 10.9, 0, 146);
var beefLiver = new food("Печень говяжья", 100, "гр.", 20, 3.1, 4, 125);
var youngBeef = new food("Телятина отварная", 100, "гр.", 30.7, 0.9, 0, 131);
var goose = new food("Гусь", 100, "гр.", 15.2, 39, 0, 412);
var turkey = new food("Индейка", 100, "гр.", 19.2, 0.7, 0, 84);
var horsemeat = new food("Конина", 100, "гр.", 20.2, 7.0, 0, 187);
var rabbit = new food("Кролик", 100, "гр.", 21.0, 8.0, 0, 156);
var chickenBreast = new food("Куриная грудка", 100, "гр.", 23.6, 1.9, 0.4, 113);
var chickenLegs = new food("Куриные окорочка", 100, "гр.", 16.8, 10.2, 0, 158);
var chickenLiver = new food("Куриная печень", 100, "гр.", 19.1, 6.3, 0.6, 136);
var chickenStomak = new food("Куриные желудки", 100, "гр.", 18.2, 4.2, 0.6, 114);
var venison = new food("Оленина", 100, "гр.", 19.5, 8.5, 0, 154);
var duck = new food("Утка", 100, "гр.", 13.5, 28.6, 0, 308);
var pigChest = new food("Свиная грудинка", 100, "гр.", 9, 53, 0, 518);
var pigFatLess = new food("Свиная вырезка", 100, "гр.", 26, 3.5, 0, 143);
var pigLiver = new food("Свиная печень", 100, "гр.", 21.4, 3.65, 2.5, 134);

//Рыба
var gorbusha = new food("Горбуша", 100, "гр.", 21, 7, 0, 147);
var sardina = new food("Сардина", 100, "гр.", 25, 11, 0, 208);
var karas = new food("Карась", 100, "гр.", 17.7, 1.8, 0, 87)
var karp = new food("Карп", 100, "гр.", 16, 3.6, 0, 96);
var keta = new food("Кета", 100, "гр.", 21.5, 4.8, 0, 129);
var mintay = new food("Минтай", 100, "гр.", 15.9, 0.7, 0, 70);
var okunMorskoy = new food("Окунь морской", 100, "гр.", 17.6, 5.2, 0, 117);
var okunRechnoy = new food("Окунь речной", 100, "гр.", 18.5, 0.9, 0, 82);
var paltus = new food("Палтус", 100, "гр.", 18.9, 3.0, 0, 103);
var seld = new food("Сельдь", 100, "гр.", 16.3, 10.7, 0, 161);
var semga = new food("Семга", 100, "гр.", 20.8, 15.1, 0, 219);
var scumbriya = new food("Скумбрия", 100, "гр.", 18, 9, 0, 153);
var tuna = new food("Тунец", 100, "гр.", 22.5, 0.7, 0, 96);
var tilapiya = new food("Тилапия", 100, "гр.", 20.1, 1.7, 0, 96);
var nototeniya = new food("Нототения", 100, "гр.", 15.7, 9.5, 0, 148);
var hek = new food("Хек", 100, "гр.", 16.6, 2.2, 0, 86);
var pike = new food("Щука", 100, "гр.", 18.8, 0.7, 0, 82);
var losos = new food("Лосось", 100, "гр.", 20, 13, 0, 208);
var treska = new food("Треска", 100, "гр.", 17.7, 0.7, 0, 78);
var shrimp = new food("Креветка", 100, "гр.", 20.1, 0.5, 0, 85);
var mollusky = new food("Моллюски", 100, "гр.", 16.7, 1.1, 0, 77);
var squid = new food("Кальмар", 100, "гр.", 15.58, 1.38, 3.08, 92);
var rak = new food("Рак речной", 100, "гр.", 16, 0.95, 0, 77);
var lobster = new food("Омар/лобстер", 100, "гр.", 16.52, 0.75, 0, 77);
var crab = new food("Краб", 100, "гр.", 18.06, 1.08, 0.04, 87);
var langust = new food("Лангуст", 100, "гр.", 18.06, 1.08, 0.04, 87);
var kambala = new food("Камбала", 100, "гр.", 12, 1.9, 0, 70);
var lesch = new food("Лещ", 100, "гр.", 17.1, 4.1, 0, 105);
var nalim = new food("Налим", 100, "гр.", 18.8, 0.6, 0, 80);
var putassu = new food("Путассу", 100, "гр.", 16.1, 0.9, 0, 72);
var stavrida = new food("Ставрида", 100, "гр.", 19, 5, 0, 119);
var sudak = new food("Судак", 100, "гр.", 19.2, 0.7, 0, 84);
var som = new food("Сом", 100, "гр.", 16.8, 8.5, 0, 143);
var osetr = new food("Осётр", 100, "гр.", 16.4, 10.9, 0, 163);
var sayra = new food("Сайра", 100, "гр.", 18.6, 12, 0, 182);
var vobla = new food("Вобла", 100, "гр.", 18, 2.8, 0, 97);
var stavrida = new food("Ставрида", 100, "гр.", 19, 5, 0, 119);
var sudak = new food("Судак", 100, "гр.", 19.2, 0.7, 0, 84);
var som = new food("Сом", 100, "гр.", 16.8, 8.5, 0, 143);
var dorado = new food("Дорадо", 100, "гр.", 18, 3, 0, 96);
var bychki = new food("Бычки в томатном соусе", 100, "гр.", 13, 8, 3.7, 139); // ГОСТ 16978-99
var shprotu1 = new food("Шпроты-1", 100, "гр.", 17, 32, 0, 356); // ГОСТ 280-85
var shprotu2 = new food("Шпроты-2", 100, "гр.", 12, 23, 0, 255); // ГОСТ 280-2009
var sayraSS = new food("Сайра с/с", 100, "гр.", 18, 21, 0, 261); // ГОСТ 7452-97 в собственном соку
var sayraM = new food("Сайра в масле", 100, "гр.", 18, 23, 0, 279); // ГОСТ 13865-2000 с добавлением масла
var bananka = new food("бананка", 100, "гр.", 0, 0, 0, 0); // хорошо ловится
var hamsa = new food("Хамса", 100, "гр.", 21.2, 9, 0, 166);
var forel = new food("Форель радужная", 100, "гр.", 20.5, 3.46, 0, 119);
var sig = new food("Сиг", 100, "гр.", 19, 7.5, 0, 144);

//Напитки б/а
var tea = new food("Чай", 100, "мл.", 0, 0, 0, 0);
var coffee = new food("Кофе", 100, "мл.", 0.2, 0, 0.3, 2);
var cikoriy = new food("Цикорий", 100, "мл.", 0.1, 0, 0.75, 3);
var kakao = new food("Какао Nesquik", 100, "мл.", 3.4, 2, 16.3, 94);
var kompot = new food("Компот", 100, "мл.", 2.9, 3.2, 4.7, 59);
var kisel = new food("Кисель", 100, "мл.", 0.4, 0, 12.9, 54);
var nestea = new food("Nestea", 100, "мл.", 0, 0, 7.1, 29);
var appleJuice = new food("Яблочный сок", 100, "мл.", 0, 0, 11, 42);
var orangeJuice = new food("Апельсиновый сок", 100, "мл.", 0.9, 0.2, 8.1, 36);
var peachJuice = new food("Персиковый нектар", 100, "мл.", 0.2, 0, 9, 38);
var carrJuice = new food("Морковный сок", 100, "мл.", 1.1, 0.1, 6.4, 28);
var tomatoJuice = new food("Томатный сок", 100, "мл.", 1.1, 0.2, 3.8, 21);
var cherryJuice = new food("Вишнёвый сок", 100, "мл.", 0.7, 0, 10.2, 47);
var wineJuice = new food("Виноградный сок", 100, "мл.", 0.3, 0, 14, 54);
var granatJuice = new food("Гранатовый сок", 100, "мл.", 0.3, 0, 14.5, 64);
var ananJuice = new food("Ананасовый сок", 100, "мл.", 0.3, 0.1, 11.4, 48);
var kwas = new food("Квас", 100, "мл.", 0.2, 0, 5.2, 64);
var cocaCola = new food("Coca-Cola", 100, "мл.", 0, 0, 10.6, 42);
var pepsi = new food("Pepsi", 100, "мл.", 0.2, 0, 11.2, 45);
var fanta = new food("Fanta", 100, "мл.", 0, 0, 11.7, 48);
var sevUp = new food("7up", 100, "мл.", 0, 0, 8.7, 38);
var liptonMalPeach = new food("Lipton Ice Tea м/п/л", 100, "мл.", 0, 0, 5, 20); // вкусы малина; персик; лайм и мята
var liptonLemGrT = new food("Lipton Ice Tea л/зч", 100, "мл.", 0, 0, 7, 30); // вкусы лимон; зеленый чай

//Напитки алкогольные
var beer = new food("Пиво светлое", 100, "мл.", 0.3, 0, 4.6, 42);
var wineW = new food("Вино белое сухое", 100, "мл.", 0.1, 0, 0.6, 66);
var wineRdesertnoye = new food("Вино красное десертное", 100, "мл.", 0.5, 0, 20, 172);
var wineRedDry = new food("Вино красное сухое", 100, "мл.", 0.2, 0, 0.3, 68);
var vodka = new food("Водка", 100, "мл.", 0, 0, 0.1, 235);
var shampaine = new food("Шампанское", 100, "мл.", 0.2, 0, 5, 88);
var wisky = new food("Виски", 100, "мл.", 0, 0, 0.4, 235);
var congyak = new food("Конъяк", 100, "мл.", 0, 0, 0.1, 239);

//Яйца
var chickenEgg1 = new food("Яйцо куриное 1с", 1, "шт.", 7.62, 6.54, 0.42, 94.2);
var chickenEgg2 = new food("Яйцо куриное 2с", 1, "шт.", 4.75, 4.08, 0.25, 78.5)
var chickenEggV = new food("Яйцо куриное вс", 1, "шт.", 8.89, 7.63, 0.49, 109.9);
var chickenEggO = new food("Яйцо куриное о", 1, "шт.", 9.5, 8.17, 0.5, 117.75);
var eggPouder = new food("Яичный порошок", 100, "гр.", 46, 37.3, 4.5, 542);
var guseEgg = new food("Яйцо гусиное", 1, "шт.", 20.85, 20, 2.6, 277.5);
var perepelEgg = new food("Яйцо перепелиное", 1, "шт.", 1.19, 1.31, 0.06, 16.8);
var eggWhite = new food("Яичный белок сырой", 100, "гр.", 10.9, 0.17, 0.71, 52);
var eggYolk = new food("Яичный желток сырой", 100, "гр.", 15.86, 26.54, 3.59, 322);

//Мука
var baton = new food("Батон", 1, "кус.", 1.87, 0.65, 12.65, 65.25);
var whiteBread = new food("Хлеб белый", 1, "кус.", 2.02, 0.25, 12.2, 60.5);
var blackBread = new food("Хлеб Бородинский", 1, "кус.", 1.72, 0.32, 10.22, 52);
var greyBread = new food("Хлеб ржаной", 1, "кус.", 1.65, 0.3, 8.55, 41.25);
var tostBread = new food("Хлеб тостовый", 1, "кус.", 1.82, 0.97, 13.12, 71.25);
var lavash = new food("Лаваш", 1, "кус.", 0.98, 0.125, 5.95, 29.8);
var ramen = new food("Лапша Роллтон", 1, "пачка", 5.22, 12.66, 34.02, 268.8);
var makarony1s = new food("Макароны первый сорт", 100, "гр.", 10.7, 1.3, 68.4, 335);
var makaronyvs = new food("Макароны высший сорт", 100, "гр.", 10.4, 1.1, 69.7, 337);
var mukaphen = new food("Мука пшеничная", 100, "гр.", 9.2, 1.2, 74.9, 342);
var mukargen = new food("Мука ржаная", 100, "гр.", 9, 1, 73, 325);
var suhariki = new food("Сухарики ржаные", 100, "гр.", 16, 1.0, 70, 336);
var funchoza = new food("Фунчоза", 100, "гр.", 0.7, 0.5, 84, 320)
var hlebcy = new food("Хлебцы", 1, "шт.", 0.29, 0.07, 1.6, 8.58);

//Колбасы
var varenayaChainaya = new food("Колбаса вареная чайная", 100, "гр.", 11.7, 18.4, 1.9, 216);
var doctorskaya = new food("Колбаса докторская", 100, "гр.", 12.8, 22.2, 1.5, 257)
var krakovskaya = new food("Колбаса п/к краковская", 100, "гр.", 16.2, 44.6, 0, 466);
var tallinskaya = new food("Колбаса п/к таллиннская", 100, "гр.", 17.1, 33.8, 0.2, 373);
var ohotnichyi = new food("Колбаски охотничьи", 100, "гр.", 27.4, 24.3, 0, 326);
var salyami = new food("Салями", 100, "гр.", 21.6, 53.7, 1.4, 568);
var sardelkiSvinnye = new food("Сардельки свиные", 100, "гр.", 10.1, 31.6, 1.9, 332);
var sosiskiGovyagiyi = new food("Сосиски говяжьи", 100, "гр.", 10.4, 20.1, 0.8, 226);
var sosiskiKurinye = new food("Сосиски куриные", 100, "гр.", 10.8, 22.4, 4.2, 259)
var sosiskiMolochnye = new food("Сосиски молочные", 100, "гр.", 11, 23.9, 1.6, 266);
var shpicachki = new food("Шпикачки", 100, "гр.", 10, 33, 0, 337);

//Орехи, сухофрукты
var arahis = new food("Арахис", 1, "ст.л.", 2.63, 4.52, 0.99, 55.1);
var greckiy = new food("Грецкий орех", 1, "шт.", 0.91, 3.91, 0.42, 39.3)
var izum = new food("Изюм", 1, "ч.л.", 0.2, 0.04, 4.62, 18.48);
var inzhirSush = new food("Инжир сушеный", 1, "шт.", 0.28, 0.08, 5.37, 21); // средний = 9 гр
var mindal = new food("Миндаль", 1, "шт.", 0.22, 0.69, 0.19, 7.74);
var kedrovyeye = new food("Кедровые орехи", 1, "ст.л.", 1.16, 6.1, 1.93, 67.3);
var keshyiu = new food("Кешью", 1, "шт.", 0.38, 0.81, 0.19, 9.64);
var kuraga = new food("Курага", 1, "шт.", 0.62, 0.04, 6.12, 25.8);
var semechki = new food("Семечки подсолнечника", 1, "п.ст.", 6, 15.34, 0.98, 167.62);  // половина граненого стакана - 40 гр семечек, нутриенты посчитаны на очищеные ядра - это 29 грамм из тех 40-ка (11г - на шелуху)
var semenaTykvy = new food("Семечки тыквы", 100, "гр.", 30.2, 49.05, 10.7, 559);
var finiki = new food("Финики", 1, "шт.", 0.25, 0.05, 6.92, 27.4);
var fistashki = new food("Фисташки", 1, "пор.", 1.2, 3, 0.42, 33, 36)
var funduk = new food("Фундук", 1, "шт.", 0.24, 1, 0.15, 10.56);
var chernosliv = new food("Чернослив", 1, "шт.", 0.14, 0.04, 3.45, 13.86);

//Сладости
var sugar = new food("Сахар", 1, "ч.л.", 0, 0, 6.98, 27.86);
var honey = new food("Мёд", 1, "ч.л.", 0.03, 0, 8.2, 30.4);
var varMalina = new food("Варенье малиновое", 1, "ч.л.", 0.09, 0.03, 10.56, 40.95)
var varKlubnika = new food("Варенье клубничное", 1, "ч.л.", 0.04, 0.01, 11.1, 42.75);
var varChernSmor = new food("Варенье из черной смородины", 1, "ч.л.", 0.09, 0.01, 10.93, 42.6);
var marshmallow = new food("Зефир", 1, "шт.", 0.24, 0, 23.55, 91.2);
var pryanik = new food("Пряник", 1, "шт.", 1.74, 1.95, 21.48, 109.2);
var ovsyanoe = new food("Печенье овсяное", 100, "гр.", 6, 16, 73.2, 483);
var marmelad = new food("Мармелад", 1, "шт.", 0.08, 0, 15, 32, 58, 6);
var nutella = new food("Nutella", 1, "ст.л.", 1.02, 4.7, 8.3, 80);
var chokWh = new food("Шоколад белый", 100, "гр.", 4.2, 30.4, 62.2, 541);
var chokMilk = new food("Шоколад молочный", 100, "гр.", 6.9, 35.7, 54.4, 550);
var chokBlack = new food("Шоколад горький", 100, "гр.", 6.2, 35.4, 48.2, 539)
var twix = new food("Twix", 1, "палочка", 1, 6, 17, 125);
var snickers = new food("Snickers", 1, "шт.", 4, 12, 33, 250);
var picnic = new food("Picnic", 1, "шт.", 3.7, 11, 22.5, 235);
var mars = new food("Mars", 1, "шт.", 2.2, 9.1, 34, 227.5);
var sguschenka = new food("Сгущенка", 100, "гр.", 7.2, 8.5, 56, 329);
var plombir12 = new food("Пломбир 12%", 100, "гр.", 3.5, 12, 19, 200);
var plombir15 = new food("Пломбир 15%", 100, "гр.", 3.4, 15, 19, 225);
var plombir18 = new food("Пломбир 18%", 100, "гр.", 3.2, 18, 19.4, 225);
var nestlefitch = new food("Nestle Fitness с шоколадом", 1, "шт.", 1.3, 1.7, 16.3, 88);
var nestlefitkl = new food("Nestle Fitness с клубникой", 1, "шт.", 1.2, 1.7, 16.3, 87);
var nestlefitzl = new food("Nestle Fitness со злаками", 1, "шт.", 1.3, 1.6, 16.4, 88);

//KFC
var classic = new food("Классик", 1, "шт.", 17.1, 13.8, 38.2, 345); // 157
var longer = new food("Лонгер", 1, "шт.", 10.9, 8.8, 26, 227);  // 94
var longerCheez = new food("Лонгер Чиз", 1, "шт.", 12.9, 12.3, 26.5, 268);  // 106
var zinger = new food("Зингер", 1, "шт.", 18.2, 16.8, 34.9, 363); // 157
var bigger = new food("Биггер", 1, "шт.", 32.9, 28.2, 58.5, 622); // оригинальный 259
var sanders = new food("Сандерс", 1, "шт.", 13.7, 7.9, 37.4, 276); // 130
var fresher = new food("Фрешер", 1, "шт.", 16.8, 12.2, 38.5, 331); // 179
var panini = new food("Панини", 1, "шт.", 24.7, 21.3, 56.8, 519);  // 211
var tvisterToster = new food("Твистер", 1, "шт.", 19.2, 19.2, 43.2, 422); // оригинальный 192
var tvisterCheez = new food("Твистер Чиз", 1, "шт.", 21.4, 22.9, 46.8, 480); // 196
var boxMaster = new food("Боксмастер", 1, "пор.", 20.6, 39.2, 50.7, 638); // оригинальный 251
var iTvisterCheez = new food("Ай-Твистер Чиз", 1, "шт.", 10, 14.1, 24, 264); // 103
var chickenPiece = new food("Курица", 1, "шт.", 9.8, 6.8, 7.5, 130); // 53
var chickenWing = new food("Куриное крылышко", 1, "шт.", 4.5, 5.6, 4.2, 84.6); // 27
var strips = new food("Стрипс", 1, "шт.", 6.7, 4.3, 3.8, 81); // оригинальный 28
var bite1 = new food("Байтс мал.", 1, "пор.", 22.3, 11.3, 15.8, 255);  // маленькая порция 95
var bite2 = new food("Байтс ср.", 1, "пор.", 31.7, 16.1, 22.4, 362);  // средняя порция 135
var bite3 = new food("Байтс бол.", 1, "пор.", 47, 23.8, 33.2, 536);  // большая порция 200
var basketFri = new food("Баскет Фри", 1, "пор.", 7.6, 31, 60.2, 552);  // 200
var friSmall = new food("Картофель фри малый", 1, "пор.", 2.7, 10.9, 21.1, 193);  // 70
var friStand = new food("Картофель фри стандартный", 1, "пор.", 4.6, 18.6, 36.1, 331);  // 120
var salCezarKfc = new food("Салат Цезарь", 1, "пор.", 22.8, 18.4, 18.1, 329);  // без соуса - 211

//McDonalds основное меню
var bigMac = new food("Биг Мак", 1, "шт.", 27, 26, 41, 510); //
var royalChees = new food("Роял Чизбургер", 1, "шт.", 32, 28, 36, 530);  //
var royalDeLux = new food("Роял Де Люкс", 1, "шт.", 30, 29, 42, 555);  //
var macChicken = new food("Макчикен", 1, "шт.", 20, 19, 44, 435) //
var fileOFish = new food("Филе-о-Фиш", 1, "шт.", 14, 13, 36, 320); //
var bigTasty = new food("Биг Тейсти", 1, "шт.", 44, 52, 50, 850); //
var chickenBacon = new food("Чикен Бекон", 1, "шт.", 27, 36, 60, 680); //
var doubleCheesger = new food("Двойной чизбургер", 1, "шт.", 27, 24, 31, 450);  //
var chickenMacNug = new food("Чикен Макнаггетс", 1, "шт.", 2.8, 2.3, 3.16, 45); //
var beafRoll = new food("Биф Ролл", 1, "шт.", 20, 29, 43, 520); //
var caesarRoll = new food("Цезарь Ролл", 1, "шт.", 22, 24, 50, 510); //
var fishRoll = new food("Фиш Ролл", 1, "шт.", 17, 23, 49, 475); //
var hamburger = new food("Гамбургер", 1, "шт.", 13, 9, 30, 255); //
var chickenBurger = new food("Чикенбургер", 1, "шт.", 12, 16, 41, 360); //
var cheesBurger = new food("Чизбургер", 1, "шт.", 16, 13, 30, 305);  //
var chickenWinsMD = new food("Куриные крылышки", 1, "шт.", 5, 2.7, 3.7, 46.2);  //
var steakHouseCl = new food("Стейк Хаус Классик", 1, "шт.", 38, 40, 46, 702);  //
var friSmallMD = new food("Картофель малый", 1, "пор.", 3, 12, 29, 240);  // Картофель фри маленькая порция
var friMedMD = new food("Картофель средний", 1, "пор.", 4, 17, 41, 340);  // Картофель фри средняя порция
var friBigMD = new food("Картофель большой", 1, "пор.", 5, 22, 54, 445);  // Картофель фри большая порция
var friRural = new food("Картофель по-деревенски", 1, "пор.", 4, 15, 42, 330);  //
var carSticks = new food("Морковные палочки", 1, "пор.", 1, 0, 6, 27);  //
var applePieces = new food("Яблочные дольки", 1, "пор.", 0, 0, 8, 38);  //

//McDonalds завтрак
var doubFreshMcMf = new food("Двойной Фреш МакМаффин", 1, "шт.", 27, 35, 33, 560);
var freshRoll = new food("Фреш Ролл", 1, "шт.", 25, 38, 40, 610);
var bigBreakRoll = new food("Биг Брекфаст Ролл", 1, "шт.", 27, 36, 54, 655);
var mcMfEggPig = new food("МакМаффин с яйцом и свиной котлетой", 1, "шт.", 24, 25, 27, 435)
var dblmcMfEggPig = new food("Двойной МакМаффин с яйцом и свиной котлетой", 1, "шт.", 36, 41, 31, 645);
var mcMfPig = new food("МакМаффин со свиной котлетой", 1, "шт.", 17, 20, 27, 360);
var frMcMff = new food("Фреш МакМаффин", 1, "шт.", 18, 21, 33, 400);
var chickFrMcmff = new food("Чикен Фреш МакМаффин", 1, "шт.", 19, 13, 41, 365);
var mcMffEggBaecon = new food("МакМаффин с яйцом и беконом", 1, "шт.", 17, 14, 27, 310);
var mcMffEggCheese = new food("МакМаффин с яйцом и сыром", 1, "шт.", 15, 11, 27, 275);
var bigStBreak = new food("Большой Завтрак Стандартный", 1, "шт.", 30, 35, 46, 630);
var mctostHam = new food("МакТост с ветчиной", 1, "шт.", 14, 11, 30, 280)
var mcTost = new food("МакТост", 1, "шт.", 10, 10, 30, 255);
var potPancake = new food("Картофельный Оладушек", 1, "шт.", 1, 8, 14, 135);
var snRollOmlBacon = new food("Снек Ролл с омлетом и беконом", 1, "шт.", 16, 16, 27, 320);
var snRollOmlPig = new food("Снек Ролл с омлетом и свиной котлетой", 1, "шт.", 22, 26, 27, 435);
var eggMashSt = new food("Омлет Стандартный", 1, "шт.", 19, 14, 30, 330);
var oatFromMc = new food("Овсяная каша Стандартная", 1, "пор.", 4, 4, 23, 150);

//McDonalds десерты
var icChoco = new food("Мороженое шоколадное", 1, "шт.", 6, 9, 52, 315);
var icCaram = new food("Мороженое карамельное", 1, "шт.", 5, 7, 60, 325);
var icStraw = new food("Мороженое клубничное", 1, "шт.", 5, 5, 50, 265);
var mcFluDeLuxStrChoc = new food("Макфлурри де Люкс клубнично-шоколадное", 1, "шт.", 6, 8, 61, 340)
var mcFluDeLuxCarChoc = new food("Макфлурри де Люкс карамельно-шоколадное", 1, "шт.", 7, 10, 71, 400);
var cherryPie = new food("Вишнёвый пирожок", 1, "шт.", 3, 7, 25, 180);
var mcmffChoco = new food("Маффин с шоколадом", 1, "шт.", 6, 12, 52, 350);
var mcmffBlBerry = new food("Маффин с черной смородиной", 1, "шт.", 5, 18, 47, 370);
var milkShakeChoco = new food("Молочный коктейль шоколадный", 100, "мл.", 2.4, 2, 17.6, 98);
var vaffelRog = new food("Вафельный рожок", 1, "шт.", 3, 3, 23, 130); // ;)
var mcFlDeLuxeMokko = new food("Макфлурри Де Люкс Мокко", 1, "шт.", 7.2, 11, 57, 360);
var icMokko = new food("Мороженое Мокко", 1, "шт.", 5.6, 8, 45, 274);
var shakeMokko = new food("Шейк Мокко", 1, "шт.", 6.5, 6.4, 51, 288);

//Протеины
var fouruse = new food("4UZE + Сreatine", 1, "пор.", 23.5, 2.9, 16.7, 185); // 1 порция - 50 гр.
var on100wheygold = new food("ON 100% Whey Gold Standard", 1, "м.л.", 24, 1, 3, 120);
var on100Casein = new food("ON 100% Casein Protein", 1, "м.л.", 23, 1, 4, 120);
var onPlatHydro = new food("ON Platinum Hydrowhey", 1, "м.л.", 30, 1, 2, 140);
var dymElWhProt = new food("Dymatize Elite Whey Protein", 1, "м.л.", 24, 1.5, 2, 120);
var dymElXT = new food("Dymatize Elite XT", 1, "м.л.", 21, 1.5, 8, 130);
var dymElCasein = new food("Dymatize Elite Casein", 1, "м.л.", 25, 1.5, 3, 130);
var bSNSYNTHA6 = new food("BSN Syntha-6", 1, "м.л.", 22, 6, 14, 200);
var bSNSYNTHA6ISO = new food("BSN Syntha-6 Isolate", 1, "м.л.", 25, 1.5, 7, 140);
var animalWhey = new food("Animal Whey", 1, "м.л.", 25, 1, 4, 125);
var ostrovitWPC80 = new food("OstroVit WPC80.eu", 1, "пор.", 23.4, 0.3, 4.29, 111); // 1 порция - 3 ст.л. - 30 гр.
var ostrovitMC = new food("OstroVit Micellar Casein", 1, "пор.", 21.15, 3, 0.6, 102); // 1 порция - 3 ст.л. - 30 гр.
var mfCP = new food("MusclePharm Combat Powder", 1, "м.л.", 25, 1.5, 4, 130); // 1 м.л. 33.6 гр
var mfCP100I = new food("MusclePharm Combat 100% Isolate", 1, "м.л.", 24, 0, 0, 100); // 1 м.л. 27.3 гр
var sanNWS = new food("San 100% Natural Whey Supreme", 1, "м.л.", 18, 1, 1.5, 85); // 1 м.л. 23.9 гр
var sanCF = new food("San 100% Casein Fusion", 1, "м.л.", 25, 4, 5, 156); // 1 м.л. 36.7 гр
var fitmaxI90 = new food("FitMax Isolate 90", 1, "пор.", 26, 0.4, 0, 109); // 1 порция - 30 гр
var fitmaxPA = new food("FitMax Pure American", 1, "пор.", 23, 1, 5.6, 124); // 1 порция - 33 гр
var fitmaxWP81 = new food("FitMax Whey Protein 81+", 1, "пор.", 25.2, 1.1, 3, 125.5); // 1 порция - 33 гр
var sanPl = new food("SAN Pure Platinum Whey", 1, "м.л.", 23, 1.6, 2.2, 110); // 1 м.л. - 29.9 гр
var sanIso = new food("SAN Platinum Isolate Supreme", 1, "пор.", 27, 0, 0.5, 110); // 1 порция - 30.1 гр
var sanCas = new food("SAN 100% Casein Fusion", 1, "м.л.", 25, 4, 5.5, 158); // 1 м.л. - 37 гр

//Гейнеры
var onProGainer = new food("ON Pro Complex Gainer", 1, "м.л.", 60, 8, 85, 650);
var dymElMassGain = new food("Dymatize Elite Mass gainer", 1, "пор.", 54, 5, 75, 600);
var bSNTMG = new food("BSN True-Mass Gainer", 1, "пор.", 48, 17, 90, 700);
var animalMass = new food("Animal Mass", 1, "пор.", 60, 8, 84, 648);
var ostrovitMass = new food("OstroVit MASS IT", 1, "пор.", 10, 0.15, 79, 357); // 100 гр.
var fmPAG = new food("Fitmax Pure American Gainer", 1, "пор.", 12, 0.8, 45, 235); // 1 порция - 60 гр.
var fmBM = new food("FitMax Bulk Mass", 1, "пор.", 27.6, 1.8, 24, 222); // 1 порция - 60 гр.
var fmMA = new food("FitMax Mass Active", 1, "пор.", 10, 1.1, 36.7, 191); // 1 порция - 50 гр.
var fmEGM = new food("FitMax Easy Gain Mass", 1, "пор.", 10, 0.4, 52.8, 273); // 1 порция - 70 гр.


var greatArray = [oatmeal, semolina, millet, whrice, wildrice, brrice, barley, fitnessHlopya, dryGoroh, dryFasol, kuskus, len, kunszhut,
    cucuruznayaCrupa, otrubiPsh, otrubiRszh, otrubiOvs, test, chickPea, polba, bulgur, chechevica, yachnevaya, kinoa,

    butter_72, butter_82, lamber, chedder, adygCheese, yog25, yog04,
    russianCheese, buckweat, milk_05, milk_15, milk_25, milk_32, aktimel,
    kefir0, kefir1, kefir15, kefir25, kefir32, yogurtFlav, snegok,
    cottageCheese_0, cottageCheese_2, cottageCheese_5, slivki10, ryaghenka25, ryaghenka32, ryaghenka4,
    slivki20, slivki33, cottageCheese_9, hohTr, hohLom, smetana10, almetTvor, hohlTvor,
    smetana15, smetana20, smetana25, smetana30, suluguni, cottageCheese_gr, parmezan, mozzarella,
    gelatin,

    apricot, pine, orange, watermelon, banana, garnet, grapefruit, grape, inzhir, pomelo, hurma,
    pear, melon, kiwi, limon, mango, mandarin, peach, plum, applereddel, applegreen, avocado, cranberry,
    malina, chernika, klubnika, smorodina, eszhevika, vishnya, chereshnya, kryzovnik, oblepiha, ryabinaCh,

    aubergine, broccoli, greenPeas, zucchini, cabbage, cauliflower, petrushka, ukrop, salat, shpinat,
    potatoes, onion, carrot, cucumber, bulgarianPepper, radishes, tomatoCherry, selderey, sparga, rukkola,
    beetroot, tomato, garlic, olives, soy, beans, beansStr, tykva, kukuruza, chechKr, brussel,

    chanterelle, shiitake, suroezki, opyata, gruzdy, podosinovik, podberezovik,
    beluy, shampinyon, veshenki, maslyata, smorchky, trufeli,


    mutton, ham, beef, beefLiver, goose, turkey, horsemeat, rabbit, hameGuse,
    chickenBreast, chickenLegs, chickenLiver, venison, duck, youngBeef, chickenStomak,
    beefLang, pigChest, pigFatLess, tushenka, pigLiver,

    gorbusha, karas, karp, keta, mintay, okunMorskoy, okunRechnoy, sardina,
    paltus, seld, semga, scumbriya, tuna, hek, pike, losos, treska,
    shrimp, mollusky, squid, rak, lobster, crab, langust, bychki,
    kambala, lesch, nalim, putassu, stavrida, sudak, som, osetr, sayra,
    vobla, stavrida, sudak, som, dorado, shprotu1, shprotu2,
    sayraSS, sayraM, bananka, hamsa, forel, sig, tilapiya, nototeniya,

    chickenEgg1, chickenEgg2, chickenEggV, chickenEggO,
    eggPouder, guseEgg, perepelEgg, eggWhite, eggYolk,

    fish_oil, mayo, spread, butter_72, butter_82, olive_oil, heinzCez, narsharab, flaxseed_oil,
    sunflower_oil, lard, soysauce, heinzChes, heinzKS, heinzSyr, heinzGor, tkemali, tomatPasta,

    baton, tostBread, lavash, ramen, makarony1s, makaronyvs, mukaphen, hlebcy,
    mukargen, suhariki, funchoza, whiteBread, blackBread, greyBread,

    varenayaChainaya, doctorskaya, krakovskaya, tallinskaya,
    ohotnichyi, salyami, sardelkiSvinnye, sosiskiGovyagiyi,
    sosiskiKurinye, sosiskiMolochnye, shpicachki,

    arahis, greckiy, izum, kedrovyeye, keshyiu, kuraga, semechki, semenaTykvy,
    finiki, fistashki, funduk, chernosliv, mindal, inzhirSush,

    on100wheygold, on100Casein, onPlatHydro, onProGainer,
    dymElWhProt, dymElXT, dymElCasein, dymElMassGain, bSNSYNTHA6,
    bSNSYNTHA6ISO, bSNTMG, animalWhey, animalMass, ostrovitWPC80, ostrovitMC,
    ostrovitMass, mfCP, mfCP100I, fitmaxI90, fitmaxPA, fitmaxWP81, fmPAG,
    fmBM, fmMA, fmEGM, sanPl, sanIso, sanCas, fouruse,

    sugar, sguschenka, varMalina, varKlubnika, varChernSmor, marshmallow, honey,
    nutella, chokWh, chokMilk, chokBlack, twix, snickers, pryanik,
    marmelad, picnic, mars, ovsyanoe, plombir12, plombir15, plombir18,
    nestlefitch, nestlefitkl, nestlefitzl,

    tea, coffee, cikoriy, kakao, kompot, kisel, kwas, ananJuice,
    appleJuice, orangeJuice, peachJuice, carrJuice, tomatoJuice,
    cherryJuice, wineJuice, granatJuice, nestea, cocaCola, pepsi,
    fanta, sevUp, liptonMalPeach, liptonLemGrT,

    beer, wineW, wineRdesertnoye, wineRedDry, vodka,
    shampaine, wisky, congyak,

    bigMac, royalChees, royalDeLux, macChicken, fileOFish,
    bigTasty, chickenBacon, doubleCheesger, chickenMacNug, beafRoll,
    caesarRoll, fishRoll, hamburger, chickenBurger, cheesBurger,
    chickenWinsMD, steakHouseCl, friSmallMD, friMedMD, friBigMD,
    friRural, carSticks, applePieces,

    doubFreshMcMf, freshRoll, bigBreakRoll, mcMfEggPig,
    dblmcMfEggPig, mcMfPig, frMcMff, chickFrMcmff, mcMffEggBaecon,
    mcMffEggCheese, bigStBreak, mctostHam, mcTost, potPancake,
    snRollOmlBacon, snRollOmlPig, eggMashSt, oatFromMc,

    icChoco, icCaram, icStraw, mcFluDeLuxStrChoc, mcFluDeLuxCarChoc,
    cherryPie, mcmffChoco, mcmffBlBerry, milkShakeChoco, vaffelRog,
    mcFlDeLuxeMokko, icMokko, shakeMokko,

    classic, longer, longerCheez, zinger, bigger,
    sanders, fresher, panini, tvisterToster, tvisterCheez,
    boxMaster, iTvisterCheez, chickenPiece, chickenWing,
    strips, bite1, bite2, bite3, basketFri, friSmall,
    friStand, salCezarKfc];

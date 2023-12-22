import React from "react";

export function ReadyRations() {
    return <>
        <div className="buttonsContainer col-xs-12 col-md-5 col-lg-6">
            <fieldset>
                <legend>5 готовых рационов – с учетом вашего калоража</legend>
                <div className="promptToCalc">Чтобы получить готовые рационы, сначала
                    посчитайте
                    нужное вам количество калорий
                </div>
                <div className="setHolder">
                    <div>
                        <button className="inactivePreSet" id="set1"><span></span><br/>ккал
                        </button>
                    </div>
                    <div>
                        <button className="inactivePreSet" id="set2"><span></span><br/>ккал
                        </button>
                    </div>
                    <div>
                        <button className="inactivePreSet" id="set3"><span></span><br/>ккал
                        </button>
                    </div>
                    <div>
                        <button className="inactivePreSet" id="set4"><span></span><br/>ккал
                        </button>
                    </div>
                    <div>
                        <button className="inactivePreSet" id="set5"><span></span><br/>ккал
                        </button>
                    </div>
                </div>


            </fieldset>
            <fieldset className="regularButtonsCont">
                <legend>Обычная еда*</legend>
                <div className="plate">
                    <div className="groopOfProducts foodPanel">
                                                        <span
                                                            className="proteinSource carboSource kkalSource">Крупы</span>
                        <div>
                            <button className="carboSource">Белый рис</button>
                            <button className="proteinSource carboSource">Булгур
                            </button>
                            <button className="carboSource">Бурый рис</button>
                            <button className="proteinSource">Горох сушеный</button>
                            <button
                                className="proteinSource carboSource kkalSource">Гречка
                            </button>
                            <button className="proteinSource carboSource">Дикий
                                рис(цицания)
                            </button>
                            <button
                                className="proteinSource carboSource kkalSource">Киноа
                            </button>
                            <button>Кунжут</button>
                            <button>Кукурузная крупа</button>
                            <button>Кускус</button>
                            <button>Льна семена</button>
                            <button className="carboSource">Манка</button>
                            <button className="proteinSource carboSource">Нут</button>
                            <button className="proteinSource carboSource">Овсянка
                            </button>
                            <button>Отруби овсяные</button>
                            <button>Отруби пшеничные</button>
                            <button>Отруби ржаные</button>
                            <button className="carboSource">Перловка</button>
                            <button className="proteinSource carboSource">Полба</button>
                            <button className="carboSource">Пшено</button>
                            <button className="proteinSource">Фасоль сухая</button>
                            <button
                                data-info="  1 порция - 30 г хлопьев и 125 мл обезжиренного молока">
                                Хлопья Fitness с молоком
                            </button>
                            <button className="proteinSource">Чечевица</button>
                            <button>Ячневая крупа</button>
                        </div>
                    </div>
                    <div className="groopOfProducts foodPanel">
                        <span>Мука, хлеб и макароны</span>
                        <div>
                            <button data-info="  1 кусок - 25 г">Батон</button>
                            <button data-info="  1/8 лепешки - примерно - 30 г">Лаваш
                            </button>
                            <button data-info="  1 пачка в мягкой упаковке - 60 г">Лапша
                                Роллтон
                            </button>
                            <button
                                data-info="  Вид изделий не имеет принципиального значения">
                                Макароны высший сорт
                            </button>
                            <button
                                data-info="  Вид изделий не имеет принципиального значения">
                                Макароны первый сорт
                            </button>
                            <button>Мука пшеничная</button>
                            <button>Мука ржаная</button>
                            <button>Сухарики ржаные</button>
                            <button>Фунчоза</button>
                            <button data-info="  1 кусок - 25 г">Хлеб белый</button>
                            <button data-info="  1 кусок - 25 г">Хлеб Бородинский
                            </button>
                            <button data-info="  1 кусок - 25 г">Хлеб ржаной</button>
                            <button data-info="  1 кусок - 25 г">Хлеб тостовый</button>
                            <button data-info="  1 хлебец весит примерно 3 г">Хлебцы
                            </button>
                        </div>
                    </div>
                    <div className="groopOfProducts foodPanel">
                        <span className="proteinSource fatSource">Рыба</span>
                        <div>
                            <button data-info="  ГОСТ 16978-99"
                                    className="proteinSource">Бычки в
                                томатном соусе
                            </button>
                            <button className="proteinSource fatSource">Вобла</button>
                            <button className="proteinSource fatSource">Горбуша</button>
                            <button className="proteinSource">Дорадо</button>
                            <button className="proteinSource">Кальмар</button>
                            <button className="proteinSource fatSource">Камбала</button>
                            <button className="proteinSource">Карась</button>
                            <button className="proteinSource">Карп</button>
                            <button className="proteinSource fatSource">Кета</button>
                            <button className="proteinSource">Краб</button>
                            <button className="proteinSource">Креветка</button>
                            <button className="proteinSource">Лангуст</button>
                            <button className="proteinSource">Лещ</button>
                            <button data-info="  хорошо ловится">бананка</button>
                            <button className="proteinSource fatSource">Лосось</button>
                            <button className="proteinSource">Минтай</button>
                            <button className="proteinSource">Моллюски</button>
                            <button className="proteinSource">Налим</button>
                            <button className="proteinSource fatSource">Нототения
                            </button>
                            <button className="proteinSource">Окунь морской</button>
                            <button className="proteinSource">Окунь речной</button>
                            <button className="proteinSource">Омар/лобстер</button>
                            <button className="proteinSource">Осётр</button>
                            <button className="proteinSource">Палтус</button>
                            <button className="proteinSource fatSource">Путассу</button>
                            <button className="proteinSource">Рак речной</button>
                            <button className="proteinSource">Сайра</button>
                            <button data-info="  ГОСТ 13865-2000 с добавлением масла"
                                    className="proteinSource">Сайра в масле
                            </button>
                            <button data-info="  ГОСТ 7452-97 в собственном соку"
                                    className="proteinSource">Сайра с/с
                            </button>
                            <button className="proteinSource">Сардина</button>
                            <button className="proteinSource fatSource">Сельдь</button>
                            <button className="proteinSource fatSource">Семга</button>
                            <button className="proteinSource">Сиг</button>
                            <button className="proteinSource fatSource">Скумбрия
                            </button>
                            <button className="proteinSource">Сом</button>
                            <button className="proteinSource fatSource">Ставрида
                            </button>
                            <button className="proteinSource">Судак</button>
                            <button className="proteinSource">Тилапия</button>
                            <button className="proteinSource">Треска</button>
                            <button className="proteinSource">Тунец</button>
                            <button className="proteinSource">Форель радужная</button>
                            <button className="proteinSource">Хамса</button>
                            <button className="proteinSource">Хек</button>
                            <button data-info="  ГОСТ 280-85"
                                    className="proteinSource">Шпроты-1
                            </button>
                            <button data-info="  ГОСТ 280-2009"
                                    className="proteinSource">Шпроты-2
                            </button>
                            <button className="proteinSource">Щука</button>
                        </div>
                    </div>
                    <div className="groopOfProducts foodPanel">
                        <span className="carboSource">Напитки б/а</span>
                        <div>
                            <button className="carboSource">Ананасовый сок</button>
                            <button className="carboSource">Апельсиновый сок</button>
                            <button className="carboSource">Виноградный сок</button>
                            <button className="carboSource">Вишнёвый сок</button>
                            <button className="carboSource">Гранатовый сок</button>
                            <button
                                data-info="  2 ч.л. какао(14г) + 200 мл молока 1,5%. Состав указан на 100 мл готового напитка">
                                Какао Nesquik
                            </button>
                            <button>Квас</button>
                            <button>Кисель</button>
                            <button>Кофе</button>
                            <button>Морковный сок</button>
                            <button className="carboSource">Персиковый нектар</button>
                            <button>Томатный сок</button>
                            <button>Цикорий</button>
                            <button>Чай</button>
                            <button className="carboSource">Яблочный сок</button>
                            <button>Coca-Cola</button>
                            <button>Fanta</button>
                            <button
                                data-info="  состав указан для вкусов: лимон; зелёный чай">
                                Lipton Ice Tea л/зч
                            </button>
                            <button
                                data-info="  состав указан для вкусов: малина; персик; лайм и мята">
                                Lipton Ice Tea м/п/л
                            </button>
                            <button>Nestea</button>
                            <button>Pepsi</button>
                            <button>7up</button>
                        </div>
                    </div>
                    <div className="groopOfProducts foodPanel">
                        <span>Напитки алкогольные</span>
                        <div>
                            <button>Вино белое сухое</button>
                            <button>Вино красное десертное</button>
                            <button>Вино красное сухое</button>
                            <button>Виски</button>
                            <button>Водка</button>
                            <button>Конъяк</button>
                            <button>Пиво светлое</button>
                            <button>Шампанское</button>
                        </div>
                    </div>
                </div>
                <div className="plate">
                    <div className="groopOfProducts foodPanel">
                                                        <span
                                                            className="proteinSource carboSource fatSource">Овощи</span>
                        <div>
                            <button>Баклажан</button>
                            <button>Брокколи</button>
                            <button data-info="  1 шт. - 19 г">Брюссельская капуста
                            </button>
                            <button>Горошек зеленый</button>
                            <button>Кабачок</button>
                            <button>Капуста белокочанная</button>
                            <button>Капуста цветная</button>
                            <button className="carboSource"
                                    data-info="  1 клубень - 150 г">
                                Картофель
                            </button>
                            <button>Кукуруза сладкая</button>
                            <button data-info="  1 шт. - 100 г">Лук репчатый</button>
                            <button data-info="  1 шт. - 120 г">Морковь</button>
                            <button data-info="  1 шт. - 100 г">Огурец</button>
                            <button className="fatSource">Оливки</button>
                            <button data-info="  1 шт. - 180 г">Перец сладкий</button>
                            <button data-info="  30 г">Петрушка</button>
                            <button data-info="  1 шт. - 15 г">Редис</button>
                            <button>Руккола</button>
                            <button data-info="  30 г">Салат</button>
                            <button>Свекла</button>
                            <button>Сельдерей</button>
                            <button
                                className="proteinSource carboSource fatSource">Соя
                            </button>
                            <button>Спаржа</button>
                            <button data-info="  1 шт. - 150 г">Томат</button>
                            <button data-info="  1 шт. - 20 г">Томат черри</button>
                            <button>Тыква</button>
                            <button data-info="  30 г">Укроп</button>
                            <button className="proteinSource">Фасоль</button>
                            <button>Фасоль стручковая</button>
                            <button data-info="  1 зубчик - 2 г">Чеснок</button>
                            <button className="proteinSource">Чечевица красная</button>
                            <button>Шпинат</button>
                        </div>
                    </div>
                    <div className="groopOfProducts foodPanel">

                        <span className="carboSource fatSource">Фрукты и ягоды</span>
                        <div>
                            <button className="carboSource" data-info="  30 г">Абрикос
                            </button>
                            <button className="fatSource"
                                    data-info="  1 шт. - 150 г">Авокадо
                            </button>
                            <button className="carboSource">Ананас</button>
                            <button data-info="  150 г">Апельсин</button>
                            <button>Арбуз</button>
                            <button className="carboSource"
                                    data-info="  1 шт. без кожуры - 100 г">
                                Банан
                            </button>
                            <button className="carboSource">Виноград</button>
                            <button>Вишня</button>
                            <button className="carboSource" data-info="  125 г">Гранат
                            </button>
                            <button data-info="  130 г">Грейпфрут</button>
                            <button className="carboSource" data-info="  130 г">Груша
                            </button>
                            <button>Дыня</button>
                            <button>Ежевика</button>
                            <button className="carboSource"
                                    data-info="  Один сырой среднего размера - примерно 50 г">
                                Инжир
                            </button>
                            <button data-info="  80 г">Киви</button>
                            <button>Клубника</button>
                            <button>Клюква</button>
                            <button data-info="  125 г">Лимон</button>
                            <button>Малина</button>
                            <button className="carboSource">Манго</button>
                            <button data-info="  1 шт. без кожуры - 100 г">Мандарин
                            </button>
                            <button className="carboSource" data-info="  150 г">Персик
                            </button>
                            <button>Помело</button>
                            <button data-info="  30 г">Слива</button>
                            <button data-info="  любого цвета">Смородина</button>
                            <button data-info="  25 г">Хурма</button>
                            <button>Черешня</button>
                            <button>Черника</button>
                            <button className="carboSource"
                                    data-info="  Сорт golden delicious">
                                Яблоко зеленое
                            </button>
                            <button className="carboSource"
                                    data-info="  Сорт red delicious">Яблоко
                                красное
                            </button>

                        </div>
                    </div>
                    <div className="groopOfProducts foodPanel">
                                                        <span
                                                            className="carboSource proteinSource">Орехи, сухофрукты</span>
                        <div>
                            <button className="proteinSource"
                                    data-info="  Одна столовая ложка - примерно 10 г">Арахис
                            </button>
                            <button
                                data-info="  Один орех(две половинки) - примерно 6 г">
                                Грецкий орех
                            </button>
                            <button className="carboSource"
                                    data-info="  Одна чайная ложка - примерно 7 г">Изюм
                            </button>
                            <button className="carboSource"
                                    data-info="  Одна штука - примерно 9 г">
                                Инжир сушеный
                            </button>
                            <button
                                data-info="  Столовая ложка очищенных ядер - 10 г">Кедровые
                                орехи
                            </button>
                            <button data-info="  Один орешек - примерно 1,5 г">Кешью
                            </button>
                            <button className="carboSource"
                                    data-info="  Одна штука - примерно 12 г">Курага
                            </button>
                            <button data-info="  Один орешек - примерно 1,2 г">Миндаль
                            </button>
                            <button
                                data-info="  Половина граненого стакана - примерно 40 г">
                                Семечки подсолнечника
                            </button>
                            <button className="proteinSource"
                                    data-info="  Содержание нутриентов и калорий сильно зависит от влажности">
                                Семечки тыквы
                            </button>
                            <button className="carboSource"
                                    data-info="  Один без косточки - примерно 10 г">Финики
                            </button>
                            <button
                                data-info="  Одна порция - 10 шт - примерно 6 г">Фисташки
                            </button>
                            <button data-info="  Один орех - примерно 1,5 г">Фундук
                            </button>
                            <button className="carboSource"
                                    data-info="  Вес одной штуки без косточки - примерно 6 г">
                                Чернослив
                            </button>
                        </div>
                    </div>
                    <div className="groopOfProducts foodPanel">
                        <span className="proteinSource carboSource fatSource">Молочные продукты</span>
                        <div>
                            <button>Актимель</button>
                            <button className="">Йогурт 0,4%</button>
                            <button className="">Йогурт 2,5%</button>
                            <button className="carboSource">Йогурт фруктовый</button>
                            <button className="proteinSource">Кефир 0%</button>
                            <button className="proteinSource">Кефир 1,5%</button>
                            <button className="proteinSource">Кефир 1%</button>
                            <button className="proteinSource">Кефир 2,5%</button>
                            <button className="fatSource">Кефир 3,2%</button>
                            <button className="proteinSource">Молоко 0,5%</button>
                            <button className="proteinSource">Молоко 1,5%</button>
                            <button className="proteinSource">Молоко 2,5%</button>
                            <button className="fatSource">Молоко 3,2%</button>
                            <button className="proteinSource fatSource">Моцарелла
                            </button>
                            <button className="proteinSource fatSource">Пармезан
                            </button>
                            <button>Ряженка 2,5%</button>
                            <button>Ряженка 3,2%</button>
                            <button>Ряженка 4%</button>
                            <button>Сливки 10%</button>
                            <button>Сливки 20%</button>
                            <button>Сливки 33%</button>
                            <button className="fatSource"
                                    data-info="  Одна столовая ложка - 25 г">
                                Сметана 10%
                            </button>
                            <button className="fatSource"
                                    data-info="  Одна столовая ложка - 25 г">
                                Сметана 15%
                            </button>
                            <button className="fatSource"
                                    data-info="  Одна столовая ложка - 25 г">
                                Сметана 20%
                            </button>
                            <button className="fatSource"
                                    data-info="  Одна столовая ложка - 25 г">
                                Сметана 25%
                            </button>
                            <button className="fatSource"
                                    data-info="  Одна столовая ложка - 25 г">
                                Сметана 30%
                            </button>
                            <button data-info="  сладкий">Снежок 2,5%</button>
                            <button className="proteinSource fatSource">Сулугуни
                            </button>
                            <button>Сыр Адыгейский</button>
                            <button className="fatSource">Сыр Ламбер</button>
                            <button className="fatSource">Сыр Российский</button>
                            <button>Сыр Хохланд 1 ломтик</button>
                            <button>Сыр Хохланд 1 треугольник</button>
                            <button className="fatSource">Сыр Чеддер</button>
                            <button className="proteinSource">Творог 0%</button>
                            <button className="proteinSource">Творог 2%</button>
                            <button className="fatSource">Творог 5%</button>
                            <button className="fatSource">Творог 9%</button>
                            <button className="proteinSource">Творог зерненый</button>
                            <button data-info="  сливочный">Almette творожный</button>
                            <button data-info="  сливочный">Hochland творожный</button>
                        </div>
                    </div>
                    <div className="groopOfProducts foodPanel">
                        <span className="carboSource">Сладости</span>
                        <div>
                            <button className="carboSource"
                                    data-info="  Чайная ложка — 15 г">
                                Варенье из черной смородины
                            </button>
                            <button className="carboSource"
                                    data-info="  Чайная ложка — 15 г">
                                Варенье клубничное
                            </button>
                            <button className="carboSource"
                                    data-info="  Чайная ложка — 15 г">
                                Варенье малиновое
                            </button>
                            <button data-info="  Одна штука - 30 г">Зефир</button>
                            <button data-info="  Одна штука - 20 г">Мармелад</button>
                            <button className="carboSource"
                                    data-info="  Чайная ложка — 10 г">Мёд
                            </button>
                            <button className="carboSource">Печенье овсяное</button>
                            <button>Пломбир 12%</button>
                            <button>Пломбир 15%</button>
                            <button>Пломбир 18%</button>
                            <button data-info="  Одна штука - 30 г">Пряник</button>
                            <button className="carboSource"
                                    data-info="  Чайная ложка — 7 г">Сахар
                            </button>
                            <button className="carboSource"
                                    data-info="  ГОСТ Р 53436-2009">
                                Сгущенка
                            </button>
                            <button>Шоколад белый</button>
                            <button className="fatSource carboSource">Шоколад горький
                            </button>
                            <button>Шоколад молочный</button>
                            <button data-info="  Классический батончик — 50 г">Mars
                            </button>
                            <button data-info="  Один батончик - 23.5 г">Nestle Fitness
                                с
                                клубникой
                            </button>
                            <button data-info="  Один батончик  -23.5 г">Nestle Fitness
                                с
                                шоколадом
                            </button>
                            <button data-info="  Один батончик - 23.5 г">Nestle Fitness
                                со
                                злаками
                            </button>
                            <button data-info="  Столовая ложка — 15 г">Nutella</button>
                            <button
                                data-info="  Классический батончик — 48.4 г">Picnic
                            </button>
                            <button
                                data-info="  Классический батончик — 52.7 г">Snickers
                            </button>
                            <button data-info="  Одна палочка — 27,5 г">Twix</button>
                        </div>
                    </div>
                </div>
                <div className="plate">
                    <div className="groopOfProducts foodPanel">
                        <span className="proteinSource fatSource">Мясо</span>
                        <div>
                            <button className="fatSource">Баранина</button>
                            <button>Ветчина</button>
                            <button className="proteinSource">Говядина</button>
                            <button className="fatSource">Гусь</button>
                            <button>Желатин</button>
                            <button className="proteinSource">Индейка</button>
                            <button className="proteinSource">Конина</button>
                            <button className="proteinSource">Кролик</button>
                            <button className="proteinSource">Куриная грудка</button>
                            <button className="proteinSource">Куриная печень</button>
                            <button className="proteinSource">Куриные желудки</button>
                            <button>Куриные окорочка</button>
                            <button className="proteinSource">Оленина</button>
                            <button data-info="  В столовой ложке — 30 г">Паштет из
                                гусиной
                                печени Hame
                            </button>
                            <button className="proteinSource">Печень говяжья</button>
                            <button className="proteinSource"
                                    data-info="  нежирное мясо">Свиная
                                вырезка
                            </button>
                            <button className="fatSource"
                                    data-info="  жирное мясо">Свиная
                                грудинка
                            </button>
                            <button className="proteinSource">Свиная печень</button>
                            <button className="proteinSource">Телятина отварная</button>
                            <button className="fatSource"
                                    data-info="  ГОСТ 32125-2013">Тушенка
                            </button>
                            <button className="fatSource">Утка</button>
                            <button>Язык говяжий</button>
                        </div>
                    </div>
                    <div className="groopOfProducts foodPanel">
                        <span>Колбасные изделия</span>
                        <div>
                            <button>Колбаса вареная чайная</button>
                            <button>Колбаса докторская</button>
                            <button>Колбаса п/к краковская</button>
                            <button>Колбаса п/к таллиннская</button>
                            <button>Колбаски охотничьи</button>
                            <button>Салями</button>
                            <button>Сардельки свиные</button>
                            <button>Сосиски говяжьи</button>
                            <button>Сосиски куриные</button>
                            <button>Сосиски молочные</button>
                            <button>Шпикачки</button>
                        </div>
                    </div>
                    <div className="groopOfProducts foodPanel">
                        <span className="proteinSource fatSource">Яйца</span>
                        <div>
                            <button className="proteinSource fatSource"
                                    data-info="  Первая категория — 60 г">Яйцо куриное
                                1с
                            </button>
                            <button className="proteinSource fatSource"
                                    data-info="  Вторая категория — 50 г">Яйцо куриное
                                2с
                            </button>
                            <button className="proteinSource fatSource"
                                    data-info="  Высшая категория — 70 г">Яйцо куриное
                                вс
                            </button>
                            <button className="proteinSource fatSource"
                                    data-info="  Отборное яйцо — 75 г">Яйцо куриное о
                            </button>
                            <button>Яичный порошок</button>
                            <button>Яичный белок сырой</button>
                            <button>Яичный желток сырой</button>
                            <button className="proteinSource fatSource"
                                    data-info="  150 г">Яйцо
                                гусиное
                            </button>
                            <button data-info="  10 г">Яйцо перепелиное</button>
                        </div>
                    </div>
                    <div className="groopOfProducts foodPanel">
                        <span className="fatSource">Масла, жиры, соусы</span>
                        <div>
                            <button className="fatSource"
                                    data-info="  Столовая ложка — 17 г">Жир
                                рыбий
                            </button>
                            <button className="fatSource"
                                    data-info="  Столовая ложка — 13,6 г">
                                Льняное масло
                            </button>
                            <button data-info="  Столовая ложка — 25 г">Майонез
                                Провансаль
                            </button>
                            <button>Маргарин</button>
                            <button data-info="  Столовая ложка — 17 г">Масло сливочное
                                72,5%
                            </button>
                            <button data-info="  Столовая ложка — 17 г">Масло сливочное
                                82%
                            </button>
                            <button>Наршараб</button>
                            <button className="fatSource"
                                    data-info="  Столовая ложка — 13,5 г">
                                Оливковое масло
                            </button>
                            <button data-info="  Столовая ложка — 17 г">Подсолнечное
                                масло
                            </button>
                            <button>Сало</button>
                            <button data-info="  Столовая ложка — 16 г">Соевый соус
                            </button>
                            <button>Ткемали</button>
                            <button>Томатная паста</button>
                            <button>Heinz горчичный</button>
                            <button>Heinz кисло-сладкий</button>
                            <button>Heinz сырный</button>
                            <button>Heinz Цезарь</button>
                            <button>Heinz чесночный</button>
                        </div>
                    </div>
                    <div className="groopOfProducts foodPanel">
                        <span>Грибы</span>
                        <div>
                            <button>Белый гриб</button>
                            <button>Вешенки</button>
                            <button>Груздь</button>
                            <button>Лисичка</button>
                            <button>Маслята</button>
                            <button>Опята</button>
                            <button>Подберёзовик</button>
                            <button>Подосиновик</button>
                            <button>Сморчки</button>
                            <button>Сыроежки</button>
                            <button>Трюфели</button>
                            <button>Шампиньон</button>
                            <button>Шиитаке</button>
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset className="regularButtonsCont">
                <legend>Готовые блюда</legend>
                <div className="plate">
                    <div className="groopOfProducts foodPanel">
                        <span>Супы</span>
                        <div>
                            <button className="borcsh">Борщ</button>
                            <button className="schi">Щи</button>
                            <button className="harcho">Харчо</button>
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset className="regularButtonsCont">
                <legend>Фастфуд*</legend>
                <div className="plate">
                    <div className="groopOfProducts foodPanel">
                        <span>McD – основное меню</span>
                        <div>
                            <button>Биг Мак</button>
                            <button>Роял Чизбургер</button>
                            <button>Роял Де Люкс</button>
                            <button>Макчикен</button>
                            <button>Филе-о-Фиш</button>
                            <button>Биг Тейсти</button>
                            <button>Чикен Бекон</button>
                            <button>Двойной чизбургер</button>
                            <button>Чикен Макнаггетс</button>
                            <button>Биф Ролл</button>
                            <button>Цезарь Ролл</button>
                            <button>Фиш Ролл</button>
                            <button>Гамбургер</button>
                            <button>Чикенбургер</button>
                            <button>Чизбургер</button>
                            <button>Куриные крылышки</button>
                            <button>Стейк Хаус Классик</button>
                            <button>Картофель малый</button>
                            <button>Картофель средний</button>
                            <button>Картофель большой</button>
                            <button>Картофель по-деревенски</button>
                            <button>Морковные палочки</button>
                            <button>Яблочные дольки</button>
                        </div>
                    </div>
                    <div className="groopOfProducts foodPanel">
                        <span>KFC</span>
                        <div>
                            <button>Классик</button>
                            <button>Лонгер</button>
                            <button>Лонгер Чиз</button>
                            <button>Зингер</button>
                            <button data-info="  оригинальный">Биггер</button>
                            <button>Сандерс</button>
                            <button>Фрешер</button>
                            <button>Панини</button>
                            <button data-info="  оригинальный">Твистер</button>
                            <button>Твистер Чиз</button>
                            <button data-info="  оригинальный">Боксмастер</button>
                            <button>Ай-Твистер Чиз</button>
                            <button>Курица</button>
                            <button>Куриное крылышко</button>
                            <button data-info="  оригинальный">Стрипс</button>
                            <button data-info="  маленькая порция">Байтс мал.</button>
                            <button data-info="  средняя порция">Байтс ср.</button>
                            <button data-info="  большая порция">Байтс бол.</button>
                            <button>Баскет Фри</button>
                            <button>Картофель фри малый</button>
                            <button>Картофель фри стандартный</button>
                            <button data-info="  без соуса">Салат Цезарь</button>
                        </div>
                    </div>
                </div>
                <div className="plate">
                    <div className="groopOfProducts foodPanel">
                        <span>McD – завтрак</span>
                        <div>
                            <button>Двойной Фреш МакМаффин</button>
                            <button>Фреш Ролл</button>
                            <button>Биг Брекфаст Ролл</button>
                            <button>МакМаффин с яйцом и свиной котлетой</button>
                            <button>Двойной МакМаффин с яйцом и свиной котлетой</button>
                            <button>МакМаффин со свиной котлетой</button>
                            <button>Фреш МакМаффин</button>
                            <button>Чикен Фреш МакМаффин</button>
                            <button>МакМаффин с яйцом и беконом</button>
                            <button>МакМаффин с яйцом и сыром</button>
                            <button>Большой Завтрак Стандартный</button>
                            <button>МакТост с ветчиной</button>
                            <button>МакТост</button>
                            <button>Картофельный Оладушек</button>
                            <button>Снек Ролл с омлетом и беконом</button>
                            <button>Снек Ролл с омлетом и свиной котлетой</button>
                            <button>Омлет Стандартный</button>
                            <button>Овсяная каша Стандартная</button>
                        </div>
                    </div>
                </div>
                <div className="plate">
                    <div className="groopOfProducts foodPanel">
                        <span>McD – десерты</span>
                        <div>
                            <button>Мороженое шоколадное</button>
                            <button>Мороженое карамельное</button>
                            <button>Мороженое клубничное</button>
                            <button>Макфлурри де Люкс клубнично-шоколадное</button>
                            <button>Макфлурри де Люкс карамельно-шоколадное</button>
                            <button>Вишнёвый пирожок</button>
                            <button>Маффин с шоколадом</button>
                            <button>Маффин с черной смородиной</button>
                            <button>Молочный коктейль шоколадный</button>
                            <button>Вафельный рожок</button>
                            <button>Макфлурри Де Люкс Мокко</button>
                            <button>Мороженое Мокко</button>
                            <button>Шейк Мокко</button>
                        </div>
                    </div>
                </div>
            </fieldset>
            <fieldset className="regularButtonsCont">
                <legend>Спортивное питание*</legend>
                <div className="plate">
                    <div className="groopOfProducts foodPanel">
                        <span className="proteinSource">Протеин</span>
                        <div>
                            <button className="proteinSource"
                                    data-info="  1 порция - 50 г">4UZE +
                                Сreatine
                            </button>
                            <button className="proteinSource"
                                    data-info="  Одна мерная ложка - 29,4 г">ON 100%
                                Whey Gold
                                Standard
                            </button>
                            <button className="proteinSource"
                                    data-info="  Одна мерная ложка - 31 г">ON 100%
                                Casein
                                Protein
                            </button>
                            <button className="proteinSource"
                                    data-info="  Одна мерная ложка - 50 г">ON Platinum
                                Hydrowhey
                            </button>
                            <button className="proteinSource"
                                    data-info="  Одна мерная ложка - 27 г">Dymatize
                                Elite Whey
                                Protein
                            </button>
                            <button className="proteinSource"
                                    data-info="  Одна мерная ложка - 34 г">Dymatize
                                Elite XT
                            </button>
                            <button className="proteinSource"
                                    data-info="  Одна мерная ложка - 33 г">Dymatize
                                Elite Casein
                            </button>
                            <button className="proteinSource"
                                    data-info="  Одна мерная ложка - 47,2 г">BSN
                                Syntha-6
                            </button>
                            <button className="proteinSource"
                                    data-info="  Одна мерная ложка - 38 г">BSN Syntha-6
                                Isolate
                            </button>
                            <button className="proteinSource"
                                    data-info="  Одна мерная ложка - 32,8 г">Animal Whey
                            </button>
                            <button className="proteinSource"
                                    data-info="  1 порция - 3 ст.л. - 30 г">OstroVit
                                WPC80.eu
                            </button>
                            <button className="proteinSource"
                                    data-info="  1 порция - 3 ст.л. - 30 г">OstroVit
                                Micellar
                                Casein
                            </button>
                            <button className="proteinSource"
                                    data-info="  Одна мерная ложка - 33,6 г">MusclePharm
                                Combat
                                Powder
                            </button>
                            <button className="proteinSource"
                                    data-info="  Одна мерная ложка - 27,3 г">MusclePharm
                                Combat
                                100% Isolate
                            </button>
                            <button className="proteinSource"
                                    data-info="  Одна порция - 30 г">
                                FitMax Isolate 90
                            </button>
                            <button className="proteinSource"
                                    data-info="  Одна порция - 33 г">
                                FitMax Pure American
                            </button>
                            <button className="proteinSource"
                                    data-info="  Одна порция - 33 г">
                                FitMax Whey Protein 81+
                            </button>
                            <button className="proteinSource"
                                    data-info="  Одна мерная ложка - 29.9 гр">SAN Pure
                                Platinum
                                Whey
                            </button>
                            <button className="proteinSource"
                                    data-info="  Одна порция - 30.1 гр">
                                SAN Platinum Isolate Supreme
                            </button>
                            <button className="proteinSource"
                                    data-info="  Одна мерная ложка - 37 гр">SAN 100%
                                Casein
                                Fusion
                            </button>
                        </div>
                    </div>
                </div>
                <div className="plate">
                    <div className="groopOfProducts foodPanel">
                        <span>Смеси для набора массы(гейнеры)</span>
                        <div>
                            <button data-info="  Одна мерная ложка - 165 г">ON Pro
                                Complex
                                Gainer
                            </button>
                            <button
                                data-info="  Порция на один прием - 3 мерных ложки - 150 г">
                                Dymatize Elite Mass gainer
                            </button>
                            <button
                                data-info="  Порция на один прием - 3 мерных ложки - 165 г">
                                BSN True-Mass Gainer
                            </button>
                            <button
                                data-info="  Порция на один прием - 3 мерных ложки - 165 г">
                                Animal Mass
                            </button>
                            <button data-info="  Порция на один прием - 100 г">OstroVit
                                MASS
                                IT
                            </button>
                            <button data-info="  Порция на один прием - 60 г">Fitmax
                                Pure
                                American Gainer
                            </button>
                            <button data-info="  Порция на один прием - 60 г">FitMax
                                Bulk Mass
                            </button>
                            <button data-info="  Порция на один прием - 50 г">FitMax
                                Mass
                                Active
                            </button>
                            <button data-info="  Порция на один прием - 70 г">FitMax
                                Easy Gain
                                Mass
                            </button>
                        </div>
                    </div>
                </div>
                <div className="plate">
                    <div className="groopOfProducts">
                        <span>Замена спортпиту</span>
                        <div>
                            <button className="gainer1">Гейнер №1</button>
                            <button className="gainer2">Гейнер №2</button>
                            <button className="gainer3">Гейнер №3</button>
                        </div>
                    </div>
                </div>
            </fieldset>
            <p className="insertHere"></p>
        </div>
    </>
}
import React from "react";
import {Intro1} from "./intro1";
import {Intro2} from "./intro2";

export function Food() {
    return <>
        <div id="page" className="hfeed site" style={{height: 'auto !important;'}}>

            <div className="container" style={{height: 'auto !important;'}}>

                <div id="content" className="site-content" style={{height: 'auto !important;'}}>
                    <div id="primary" className="content-area" style={{height: 'auto !important;'}}>
                        <main id="main" className="site-main" role="main" style={{height: 'auto !important;'}}>


                            <div className="entry-content" style={{height: 'auto !important;'}}>
                                <div className="mainContainer">
                                    <div className="calcCont row">
                                        <Intro1/>

                                        <Intro2/>

                                        <div className="formCont stepDiv">
                                            <h2 className="h2">Шаг 1 из 3. <br/> Расчет текущих потребностей.</h2>
                                            <form className="formMainCalc">
                                                <div className="genderDiv row">
                                                    <div className="col-sm-12 col-md-6">
                                                        <span className="divTitle genderT">Выберите пол</span><br/>

                                                        <label className="genderLabel" htmlFor="male">
                                                            <input type="radio"
                                                                   className="gender"
                                                                   value="male"
                                                                   name="sex" id="male"
                                                                   checked={true}>
                                                                <span className="frame"
                                                                      id="maleS">Мужчина</span>
                                                            </input>
                                                        </label>

                                                        <label className="genderLabel" htmlFor="female">
                                                            <input type="radio" className="gender" value="female"
                                                                   name="sex"
                                                                   id="female"> <span className="frame"
                                                                                      id="femaleS">Женщина</span>
                                                            </input>
                                                        </label>

                                                    </div>

                                                    <div className="col-sm-12 col-md-6">
                                                        <div className="paramDivs">
                                                            <span className="divTitle ageT">Возраст</span><br/><input
                                                            id="age"
                                                            type="text"
                                                            className="age frame"
                                                            name="age"
                                                            value="36"></input><br/>
                                                        </div>

                                                        <div className="paramDivs">
                                                            <span className="divTitle heightT">Рост</span><br/><input
                                                            id="height"
                                                            type="text"
                                                            className="height frame"
                                                            name="height"
                                                            value="174"></input><br/>
                                                        </div>

                                                        <div className="paramDivs">
                                                            <span className="divTitle weightT">Вес</span><br/><input
                                                            id="weight"
                                                            type="text"
                                                            className="weight frame"
                                                            name="weight"
                                                            value="88"></input><br/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="activityDiv col-xs-12 col-md-offset-1 col-md-10">

                                                        <span className="divTitle activityT">Выберите уровень активности:</span>
                                                        <label className="inputLable" htmlFor="Sedentary">
                                                            <input id="Sedentary" className="activity" type="radio"
                                                                   name="activity"
                                                                   value="1.2"/><span>Веду сидячий образ жизни</span>
                                                        </label>

                                                        <label className="inputLable" htmlFor="v3">
                                                            <input id="v3" className="activity" type="radio"
                                                                   name="activity"
                                                                   value="1.375" checked={true}/><span>Занимаюсь активными видами спорта не менее 30 мин 3 раза в неделю</span><br/>
                                                        </label>

                                                        <label className="inputLable" htmlFor="v4">
                                                            <input id="v4" className="activity" type="radio"
                                                                   name="activity"
                                                                   value="1.418"/><span>4 раза в неделю</span><br/>
                                                        </label>

                                                        <label className="inputLable" htmlFor="v5">
                                                            <input id="v5" className="activity" type="radio"
                                                                   name="activity"
                                                                   value="1.462"/><span>5 раз в неделю</span><br/>
                                                        </label>

                                                        <label className="inputLable" htmlFor="v6">
                                                            <input id="v6" className="activity" type="radio"
                                                                   name="activity"
                                                                   value="1.506"/><span>6 раз в неделю</span><br/>
                                                        </label>

                                                        <label className="inputLable" htmlFor="v7">
                                                            <input id="v7" className="activity" type="radio"
                                                                   name="activity"
                                                                   value="1.6375"/><span>Занимаюсь ежедневно</span><br/>
                                                        </label>

                                                        <label className="inputLable" htmlFor="v7+">
                                                            <input id="v7+" className="activity" type="radio"
                                                                   name="activity"
                                                                   value="1.9"/><span>Я – работник тяжелого физического труда + занимаюсь ежедневно</span><br/>
                                                        </label>
                                                        <input type="button" className="calc btn"
                                                               value="Посчитать!"/><span
                                                        className="fillThatForm">Нужно заполнить все поля</span>

                                                    </div>
                                                </div>

                                                <div className="calcResultsDiv">
                                                    <p className="results">Супер! Теперь мы знаем вашу потребность в
                                                        энергии: это
                                                        <span className="tdee_ex_int"></span>
                                                        ккал. Если каждый день вы будете употреблять ровно столько
                                                        калорий, вы
                                                        не будете ни набирать, ни терять вес, ведь вся потребленная вами
                                                        энергия будет расходоваться. Самое сложное (и важное) уже
                                                        позади, едем
                                                        дальше.</p>
                                                </div>

                                            </form>
                                        </div>

                                        <div className="purposeChooserCont stepDiv">
                                            <h2 className="h2">Шаг 2 из 3. <br/> Выбор цели.</h2>
                                            <p>Следующий шаг: нам нужно определиться, чего мы хотим?
                                                Какова наша цель? В зависимости от задач, которые перед нами стоят, мы
                                                будем манипулировать с той <span className="blue">синей</span> цифрой,
                                                что
                                                получили выше. Потребляйте меньше энергии, если нужно похудеть, или
                                                больше – если хотите набрать вес. Все просто! Итак, ваша цель:</p>

                                            <label className="inputLable" htmlFor="speed1"><input className="activity"
                                                                                                  type="radio"
                                                                                                  name="speed"
                                                                                                  id="speed1"
                                                                                                  value="maintain"/><span>Поддерживать вес</span></label><br/>
                                            <label className="inputLable" htmlFor="speed2"><input className="activity"
                                                                                                  type="radio"
                                                                                                  name="speed"
                                                                                                  id="speed2"
                                                                                                  value="lose"/><span>Терять вес</span></label>
                                            <div className="wrapper"><span className="title">Насколько быстро?</span>
                                                <ul className="howFastul">
                                                    <li className="howFastli" data-value="0.85">медленно, но верно
                                                        (-15%)
                                                    </li>
                                                    <li className="howFastli" data-value="0.8">в темпе вальса (-20%)
                                                    </li>
                                                    <li className="howFastli" data-value="0.75">стремительно и
                                                        безрассудно (-25%)
                                                    </li>
                                                </ul>
                                            </div>
                                            <br/>
                                            <label className="inputLable forspeed3" htmlFor="speed3"><input
                                                className="activity"
                                                type="radio" name="speed"
                                                id="speed3"
                                                value="gain"/><span>Набирать вес</span></label>
                                            <div className="wrapper"><span
                                                className="title">Насколько быстро?</span>

                                                <ul className="howFastul">
                                                    <li className="howFastli" data-value="1.15">медленно, но верно
                                                        (+15%)
                                                    </li>
                                                    <li className="howFastli" data-value="1.2">в темпе вальса
                                                        (+20%)
                                                    </li>
                                                    <li className="howFastli" data-value="1.25">стремительно и
                                                        безрассудно (+25%)
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="promptForSpeed">Выберите скорость, с которой вы хотите
                                                терять или
                                                набирать вес.
                                            </div>
                                            <p>Для достижения поставленной цели вам необходимо потреблять <span
                                                className="purposeGoal"></span> калорий в день.<br/>Обратите
                                                внимание, что синяя
                                                цифра <span className="blueNumberMove"></span>. Вы решили <span
                                                    className="yourDecision"></span>, значит нужно потреблять <span
                                                    className="yourCcalIntake"></span> калорий ежедневно.</p>
                                        </div>
                                        {/*2 step end */}

                                        {/*<-- 3 step start --*/}
                                        <div className="nutrientsAmountCont stepDiv">
                                            <h2 className="h2">Шаг 3 из 3. <br/> Расчет нутриентов в рационе:</h2>
                                            <p>Дело осталось за малым – раскидать полученные калории
                                                по нутриентам: белкам, жирам и углеводам. На самом деле, это уже
                                                сделано за вас. Подавляющему большинству людей подойдут следующие
                                                параметры:</p>
                                            <div>
                                                <span className="nutrient">Белки:</span><br/>
                                                <select className="frame" id="proteinSelect">
                                                    <option selected={true} value="1.75">1.75</option>
                                                    <option value="2">2</option>
                                                    <option value="2.2">2.2</option>
                                                </select> гр. на килограмм массы тела – это <span
                                                className="protPerDay"></span> гр.
                                                в день, или <span className="kkalsFromProtein">0</span> ккал из вашего
                                                дневного
                                                калоража.<br/><br/>

                                                <span className="nutrient">Жиры:</span><br/>
                                                <select className="frame" id="fatSelect">
                                                    <option value="0.8">0.8</option>
                                                    <option selected={true} value="0.9">0.9</option>
                                                    <option value="1">1</option>
                                                </select> гр. на килограмм массы тела – это <span
                                                className="fatPerDay"></span> гр.
                                                в день, или <span className="kkalsFromFat">0</span> ккал из вашего
                                                дневного
                                                калоража.<br/><br/>
                                                <span className="nutrient">Углеводы </span> расчитываются исходя из
                                                оставшихся
                                                калорий – по 4 ккал на каждый грамм – получилось <span
                                                className="carbsPerDay"></span> гр. углеводов в день.<br/>
                                            </div>
                                            <p>Вот и всё! Все подобранные нутриенты, вместе с
                                                калориями, уже установлены в таблицу, что снизу. Эти параметры – ваша
                                                цель, ваш идеал. Теперь вы можете составить свой рацион, отталкиваясь от
                                                этих цифр и ориентируясь на них, а таблица поможет вам оставаться в
                                                коридоре допустимых значений. Под таблицей есть раздел “Рекомендации”, в
                                                нем программа сравнивает ваши целевые показатели с теми, что есть в
                                                таблице, если они совпадают – подсвечивает панель зеленым, если нет –
                                                красным. Постарайтесь составить свой план питания таким образом, чтобы
                                                все четыре панели в этом разделе стали зелеными, и тогда ваш рацион
                                                обязательно приведет вас к успеху. Вы можете добавлять в таблицу что
                                                угодно и сколько угодно – сникерсы или огурцы, шоколад или гречку – но,
                                                пока вы находитесь в “зеленом” коридоре по калориям, вы добъетесь своей
                                                цели.</p>
                                        </div>


                                        <h2 className="heading">Ваш идеальный рацион (план питания) должен
                                            содержать:</h2>
                                        <div className="conclusionDiv row col-md-offset-2 col-md-8 col-md-offset-2">
                                            <div className="col-xs-6">Калории <br/>
                                                <p>в день:</p> <span className="label-goalKkal"></span></div>
                                            <div className="col-xs-6">Белки <br/>
                                                <p>г/сутки:</p> <span className="label-goalProtein"></span></div>
                                            <div className="col-xs-6">Жиры <br/>
                                                <p>г/сутки:</p> <span className="label-goalFat"></span></div>
                                            <div className="col-xs-6">Углеводы <br/>
                                                <p>г/сутки:</p> <span className="label-goalCarbs"></span></div>
                                        </div>


                                        <div className="tableFAQ stepDiv">
                                            <h2 className="h2">Как пользоваться таблицей?</h2>
                                            <div>
                                                <p>С помощью представленной ниже таблицы вы можете
                                                    составить свой личный план питания с учетом ваших индивидуальных
                                                    потребностей в нутриентах и калориях. Если вы воспользуетесь
                                                    калькулятором, таблица будет знать необходимые вам параметры и
                                                    подсказывать, если что-либо нужно добавить или убрать из
                                                    рациона.</p>
                                                <p>Выбирайте прием пищи, в который хотите добавить еду (он
                                                    должен стать синим), а затем добавляйте продукты из выпадающих меню
                                                    справа. Вы можете удалять и создавать новые приемы пищи, менять их
                                                    местами или переименовывать.</p>
                                                <p>Вы также можете воспользоваться готовым рационом,
                                                    составленным под ваш дневной калораж. Для этого воспользуйтесь
                                                    калькулятором и укажете свою цель, программа выберет из 100 готовых
                                                    рационов пять наиболее приближенных к вашему калоражу.</p>
                                                <p>Один из них будет подходить вам по калориям оптимально –
                                                    он зеленого цвета, самый крупный, в рамке посередине. Остальные
                                                    четыре
                                                    выступают в роли набросков, неких шаблонов, которые дают
                                                    представление о
                                                    том, как еще можно организовать ваше питание. Эти четыре рациона
                                                    отличаются от вашей цели всего на 50-100 ккал и легко могут
                                                    использоваться вами в качестве основных после небольшой
                                                    коррекции. </p>
                                                <p>Внимание!!!</p>
                                                <p>Мною собрано 100 рационов от 1000 до 6000 ккал/сутки с
                                                    шагом в 50 ккал каждый (1000, 1050, 1100 … 5900, 5950, 6000), таким
                                                    образом покрыт весь разумный диапазон суточного калоража, который
                                                    будет
                                                    удовлетворять большинству пользователей. Но! Обратите внимание:
                                                    учитывается только калораж.</p>
                                                <p>Рационы, заложенные в программу, не могут удовлетворять всем
                                                    потребностям
                                                    всех пользователей по определению. </p>
                                                <p>Например. Маше 16 лет, ее рост 168 см, она весит 85 кг, 3 раза в
                                                    неделю ходит
                                                    в спортзал и хочет похудеть.</p>
                                                <p>Ивану – 30 лет, его рост 168 см, он весит 50 кг, не занимается
                                                    никакими
                                                    видами спорта и хочет набрать массу. </p>
                                                <p>Им обоим калькулятор выдаст одно и тоже число – 1939 ккал
                                                    в сутки. Именно столько нужно потреблять Марии в день, чтобы
                                                    похудеть, а
                                                    Ивану – чтобы набрать массу. В этом нет ничего удивительного: ведь
                                                    люди
                                                    разные и цели у них разные, и одно и тоже число калорий одного будет
                                                    держать в дефиците, а другого – в избытке энергии. Одно и то же
                                                    число
                                                    калорий будет удовлетворять разным целям разных людей. Но по
                                                    белкам-жирам-углеводам этот одинаковый для обоих калораж будет
                                                    распределяться по-разному. Маше нужно будет потреблять около 140 г
                                                    белка
                                                    в день, а Ване – всего около 90 г. Также будут отличаться и жиры с
                                                    углеводами. Ведь нутриенты рассчитываются на массу тела каждого
                                                    конкретного человека.</p>
                                                <p>Поэтому, нажимая на кнопку рекомендованного вам рациона,
                                                    не следует рассчитывать, что все параметры сразу станут идеальными.
                                                    Идеальным будет только калораж. Нутриенты же придется подкручивать
                                                    вручную. Но это уже гораздо лучше, чем просто где-то брать меню на
                                                    абстрактные 2000 ккал, составленное неизвестно кем, непонятно для
                                                    кого. </p>
                                            </div>
                                        </div>
                                        {/*tFAQ end --*/}
                                    </div>
                                    {/*-- calc end -*/}


                                    <div className="foodListContainer noselect row">
                                        <div className="plug col-xs-12">
                                            <p>На этом месте должна находиться таблица для составления
                                                супер-крутого индивидуального рациона. Но, к сожалению, экран вашего
                                                устройства слишком мал, чтобы полноценно ее отображать. Если вы зашли на
                                                эту страницу со смартфона – поверните его горизонтально, это может
                                                помочь, если же это не помогло – воспользуйтесь устройством с экраном
                                                побольше. Он должен быть более 550 пикселей в ширину – обычно, это
                                                смартфоны от 4х дюймов по диагонали – этого должно хватить. Но лучше
                                                всего вернутся позже со стационарного компьютера или ноутбука.</p>
                                        </div>
                                        <div className="tablesContainer col-xs-12 col-md-7 col-lg-6">
                                            <p className="stepChanger"><b>Шаг +/- грамм продуктов:</b>
                                                <label className="stepChangerLabel" htmlFor="step50">
                                                    <input type="radio" name="stepRange" checked={true} value="50"
                                                           id="step50"/>
                                                    <span className="stepChangerSpan">50</span>
                                                </label>
                                                <label className="stepChangerLabel" htmlFor="step10">
                                                    <input type="radio" name="stepRange" value="10" id="step10"/>
                                                    <span className="stepChangerSpan">10</span>
                                                </label>
                                                <label className="stepChangerLabel" htmlFor="step5">
                                                    <input type="radio" name="stepRange" value="5" id="step5"/>
                                                    <span className="stepChangerSpan">5</span>
                                                </label>
                                                <label className="stepChangerLabel" htmlFor="step1">
                                                    <input type="radio" name="stepRange" value="1" id="step1"/>
                                                    <span className="stepChangerSpan">1</span>
                                                </label>
                                            </p>
                                            <table className="titleTable">
                                                <tbody>
                                                <tr>
                                                    <th className="titleTableth">

                                                    </th>
                                                    <th className="col">Б</th>
                                                    <th className="col">Ж</th>
                                                    <th className="col">У</th>
                                                    <th className="col">Ккал</th>
                                                </tr>
                                                </tbody>
                                            </table>
                                            <ul id="sortable" className="ui-sortable">
                                                <li className="ui-sortable-handle">
                                                    <table className="table addible active" id="breakfast">
                                                        <thead>

                                                        <tr>
                                                            <th className="name"><input className="eating" type="text"
                                                                                        value="Завтрак"/>
                                                            </th>
                                                            <th className="col"></th>
                                                            <th className="col"></th>
                                                            <th className="col"></th>
                                                            <th className="col"></th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        </tbody>
                                                    </table>
                                                </li>
                                                <li className="ui-sortable-handle">
                                                    <table className="table addible" id="frstMid">
                                                        <thead>
                                                        <tr>
                                                            <th className="name"><input className="eating" type="text"
                                                                                        value="Перекуc"/>
                                                            </th>
                                                            <th className="col"></th>
                                                            <th className="col"></th>
                                                            <th className="col"></th>
                                                            <th className="col"></th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        </tbody>
                                                    </table>
                                                </li>
                                                <li className="ui-sortable-handle">
                                                    <table className="table addible" id="lunch">
                                                        <thead>
                                                        <tr>
                                                            <th className="name"><input className="eating" type="text"
                                                                                        value="Обед"/>
                                                            </th>
                                                            <th className="col"></th>
                                                            <th className="col"></th>
                                                            <th className="col"></th>
                                                            <th className="col"></th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        </tbody>
                                                    </table>
                                                </li>
                                                <li className="ui-sortable-handle">
                                                    <table className="table addible" id="scndMid">
                                                        <thead>
                                                        <tr>
                                                            <th className="name"><input className="eating" type="text"
                                                                                        value="Перекуc"/>
                                                            </th>
                                                            <th className="col"></th>
                                                            <th className="col"></th>
                                                            <th className="col"></th>
                                                            <th className="col"></th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        </tbody>
                                                    </table>
                                                </li>
                                                <li className="ui-sortable-handle">
                                                    <table className="table addible" id="supper">
                                                        <thead>
                                                        <tr>
                                                            <th className="name"><input className="eating" type="text"
                                                                                        value="Ужин"/>
                                                            </th>
                                                            <th className="col"></th>
                                                            <th className="col"></th>
                                                            <th className="col"></th>
                                                            <th className="col"></th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        </tbody>
                                                    </table>
                                                </li>
                                            </ul>

                                            <div className="floatableDiv">
                                                <div className="float conclProtein protfloat">
                                                    <span className="firstly">Б</span>
                                                    <span className="howMuch"></span>
                                                </div>
                                                <div className="float conclFat fatfloat">
                                                    <span className="firstly">Ж</span>
                                                    <span className="howMuch"></span>
                                                </div>
                                                <div className="float conclCarbo carbofloat">
                                                    <span className="firstly">У</span>
                                                    <span className="howMuch"></span>
                                                </div>
                                                <div className="float conclKkal kkalfloat">
                                                    <span className="firstly">К</span>
                                                    <span className="howMuch"></span>
                                                </div>
                                            </div>

                                            <table className="final">
                                                <thead>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td className="name total">
                                                        <div className="addNewTable btn">+</div>
                                                        <span
                                                            className="addingPrompt">добавить прием пищи в таблицу</span>
                                                    </td>
                                                    <td className="col">Б</td>
                                                    <td className="col">Ж</td>
                                                    <td className="col">У</td>
                                                    <td className="col">Ккал</td>
                                                </tr>
                                                <tr>
                                                    <td className="name total">Итого в таблице:</td>
                                                    <td className="col tcol totalProtein"></td>
                                                    <td className="col tcol totalFat"></td>
                                                    <td className="col tcol totalCarbo"></td>
                                                    <td className="col tcol totalKkal"></td>
                                                </tr>
                                                <tr>
                                                    <td className="name goalTotal total">Ваш идеальный рацион должен
                                                        содержать:
                                                    </td>
                                                    <td className="col tcol goalProtein"></td>
                                                    <td className="col tcol goalFat"></td>
                                                    <td className="col tcol goalCarbs"></td>
                                                    <td className="col tcol goalKkal"></td>
                                                </tr>
                                                </tbody>
                                            </table>

                                            {/*todo*/}
                                            <div className="printButton btn"
                                                 >onClick="javascript:window.print()" Распечатать
                                                таблицу
                                            </div>
                                            <div className="clearButton btn">Очистить таблицу</div>
                                            <div className="areYouSure">Вы уверены?<br/> <span
                                                className="yes">Да</span><span className="no">Нет</span>
                                            </div>

                                        </div>
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
                                    </div>
                                </div>

                                <div className="tableFAQ">
                                    <h2 className="h2 crowdFindInfo">Сохрани свой рацион питания и добавь продуты в
                                        таблицу!</h2>
                                    <div className="intro">
                                        <p>Привет!</p>
                                        <p>Многие из вас резонно замечают, что сайту не хватает очень важных
                                            функций, мне часто пишут, что было бы круто сохранять рацион питания или
                                            добавлять свои продукты в таблицу. Да, согласен, было бы круто. Слушай,
                                            рассказываю, как есть.</p>
                                        <p>Я делал сайт «на коленке»,в свободное от работы время, не имея
                                            базовых знаний за спиной, не имея опыта, каждый шаг — через google и
                                            stackoverflow. В первую очередь мне нужно было достичь удобства и
                                            быстродействия. Таблица должна была составляться и считать нутриенты
                                            быстро, на лету. Я не знал (и сейчас не знаю) backend’а, то есть
                                            серверной части программирования. А регистрация и сохранение
                                            пользовательских данных — это как раз таки backend, работа с базами
                                            данных на стороне сервера.</p>
                                        <p>Не многие из вас поняли, о чем вообще шла речь в предыдущем абзаце, так зачем
                                            я это
                                            рассказываю? </p>
                                        <p>Потому что мне пишут: «Автор, добавь то. Автор, добавь это». Я
                                            прекрасно понимаю, что эти функции действительно очень нужны и сайту и
                                            людям. Это было очевидно с самого начала. Я пытаюсь объяснить тебе, что
                                            не могу самостоятельно реализовать данные функции, по крайней мере, в
                                            одиночку. Это сложнее, чем то, что я уже сделал, и сложнее, чем тебе
                                            кажется: скорее всего придется переписывать бОльшую часть кода. Если я
                                            сделал таблицу, что сверху, это вовсе не значит, что мне ничего не стоит
                                            прикрутить еще парочку функций. Не потому, что мне лень, или я забросил
                                            проект, а потому, что это требует профессионального подхода. </p>
                                        <p>Если ты зарегистрируешься на сайте и сохранишь свой рацион, ты,
                                            наверное, очень расстроишься, если однажды он вдруг исчезнет? Что весьма
                                            вероятно, если за реализацию возьмусь я, ведь я – не программист, и
                                            ошибки будут неизбежны. </p>
                                        <p>Если я попытаюсь сделать это сам, выйдет очень криво, а я не хочу
                                            создавать некачественный продукт, там внизу стоит моё имя всё-таки.
                                            Сохранение пользовательских продуктов и рационов не появится на сайте,
                                            пока я не буду уверен в надежной работе этих функций. А значит, работать
                                            должен профессиональный программист.</p>
                                        <p>Итак, я написал техническое задание по расширению функционала сайта,
                                            где подробно изложил все желаемые улучшения. Если кратко, то получился
                                            вот такой список:</p>
                                        <ul className="FAQul">
                                            <li>Добавить возможность регистрации на сайте.</li>
                                            <li>Сохранение индивидуального рациона питания для каждого пользователя с
                                                возможностью его последующего редактирования.
                                            </li>
                                            <li>Добавление своих продуктов питания в таблицу.</li>
                                        </ul>
                                        <p>Техзадание я отправил в несколько фирм по изготовлению сайтов с
                                            вопросом, сколько это будет стоить. Самый демократичный ответ — 200 тыс.
                                            рублей и 2-3 месяца работы.
                                            Такие дела.</p>
                                        <p>Можешь дальше пользоваться сайтом в существующем виде. Да, сейчас он
                                            куц и убог, но даже такой – он многим был полезен, я не зря его пилил по
                                            вечерам несколько месяцев, это уже большое дело, и это круто. Но
                                            добавить в эту таблицу пельмени из соседнего ларька или бабушкины
                                            пирожки или сохранить 7 рационов на каждый день недели ты, скорее всего,
                                            не сможешь никогда.</p>
                                        <p>Второй вариант — ты кидаешь какие-то деньги мне на Яндекс.Деньги. Я
                                            отчитываюсь о всех средствах, поступивших от вас, и когда соберется 200
                                            тыс., ребята начнут работы на сайте. И тогда, возможно, сбудется наша с
                                            тобой мечта, и где-то в недрах гулко гудящего сервера в темноте и
                                            прохладе будут тихо лежать в базе данных пирожки, что стряпает твоя
                                            бабушка.</p>
                                        <p>Никаких гарантий ни на что я дать не могу. Нужная сумма может не
                                            собраться, и вообще может произойти любой форс-мажор. Тебе просто
                                            придется верить мне на слово, так что лучше не кидай ничего, если
                                            сомневаешься, не хочу, чтобы ты чувствовал себя обманутым.</p>
                                        В чем я уверен совершенно точно, за что я могу ручаться — это мощь
                                        данного проекта и его потенциал. Сейчас это звучит смешно и нелепо. Но
                                        это так. То, что сейчас реализовано на сайте — 15-20% от задуманного.
                                        Остальные 80% требуют еще больших ресурсов и времени. Если ты сейчас
                                        поможешь мне на этом этапе, дальше от тебя уже ничего не потребуется.
                                        Проект прокормит себя сам.<p></p>
                                        <p>Я ни о чем не прошу и оставляю решение за тобой, просто объяснил
                                            текущую ситуацию. В любом случае, я рад, что ты вообще сейчас здесь, это
                                            круто, когда-то тут не было никого. Спасибо, что дочитал и спасибо, что
                                            пользуешься сайтом. Пиши в комментариях, все что думаешь, буду рад
                                            обратной связи. И приходи еще.</p>

                                    </div>
                                </div>


                                <div class="gap"></div>

                                <div class="articlesHolder">
                                    <fieldset>
                                        <legend>Три статьи о том, как правильно считать калории:</legend>
                                        <div class="article">
                                            <div class="boxmain artcal1">
                                                <div class="cover top">
                                                    <h2 class="arttitle"><a
                                                        href="http://3-x-15.ru/2017/05/15/calories-counter/"
                                                        target="_blank">1. Счетчик калорий.</a></h2>
                                                    <a class="readmoar"
                                                       href="http://3-x-15.ru/2017/05/15/calories-counter/"
                                                       target="_blank">Разбираемся,
                                                        как правильно использовать счетчик калорий. Подробно рассмотрим
                                                        типичные ошибки из-за которых подсчет калорий “не работает”.</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="article">
                                            <div class="boxmain artcal2">
                                                <div class="cover top">
                                                    <h2 class="arttitle"><a
                                                        href="http://3-x-15.ru/2017/05/20/calories-2/"
                                                        target="_blank">2. Сырые продукты и прочие
                                                        “мелочи”.</a></h2>
                                                    <a class="readmoar" href="http://3-x-15.ru/2017/05/20/calories-2/"
                                                       target="_blank">Почему
                                                        считать калории нужно на вес продуктов до приготовления, а еще о
                                                        том,
                                                        что “полезных” или “вредных” калорий не бывает, и все они должны
                                                        быть
                                                        учтены.</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="article">
                                            <div class="boxmain artcal3">
                                                <div class="cover top">
                                                    <h2 class="arttitle"><a
                                                        href="http://3-x-15.ru/2017/05/17/calories-3/"
                                                        target="_blank">3. Готовые блюда.</a></h2>
                                                    <a class="readmoar" href="http://3-x-15.ru/2017/05/17/calories-3/"
                                                       target="_blank">Объединяем
                                                        полученные в первых двух частях знания и пытаемся осуществить
                                                        невозможное: посчитать калории в готовом блюде на примере
                                                        борща.</a>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>

                                <div class="gap"></div>

                                <div class="articlesHolder">
                                    <fieldset>
                                        <legend>Подробное руководство по ускорению метаболизма:</legend>
                                        <div class="article">
                                            <div class="boxmain artmet1">
                                                <div class="cover top">
                                                    <h2 class="arttitle"><a
                                                        href="http://3-x-15.ru/2016/10/19/metabolism-1/"
                                                        target="_blank">1. О чем речь вообще?</a></h2>
                                                    <a class="readmoar" href="http://3-x-15.ru/2016/10/19/metabolism-1/"
                                                       target="_blank">Статья объясняет понятие “метаболизм” на пальцах,
                                                        мимоходом поддавая пинка дробному питанию.</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="article">
                                            <div class="boxmain artmet2">
                                                <div class="cover top">
                                                    <h2 class="arttitle"><a
                                                        href="http://3-x-15.ru/2016/10/20/metabolism-2/"
                                                        target="_blank">2. Сухая масса тела</a></h2>
                                                    <a class="readmoar" href="http://3-x-15.ru/2016/10/20/metabolism-2/"
                                                       target="_blank">С
                                                        помощью данных научных исследований и цветных картинок
                                                        рассматривается
                                                        сухая масса тела – основной фактор, влияющий на скорость
                                                        метаболизма.</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="article">
                                            <div class="boxmain artmet3">
                                                <div class="cover top">
                                                    <h2 class="arttitle"><a
                                                        href="http://3-x-15.ru/2016/10/08/metabolic-boost-3-hiit-strength-training/"
                                                        target="_blank">3. EPOC, HIIT и силовые тренировки</a></h2>
                                                    <a class="readmoar"
                                                       href="http://3-x-15.ru/2016/10/08/metabolic-boost-3-hiit-strength-training/"
                                                       target="_blank">Простым
                                                        языком объясняю, как использовать интервальные тренировки и
                                                        силовой
                                                        тренинг, чтобы вызвать эффект “догорания” и ускорить
                                                        метаболизм.</a>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>


                            <div class="gap"></div>
                        </main>
                    </div>
                </div>

            </div>

            <footer id="colophon" class="site-footer navbar-static-bottom" role="contentinfo">
            </footer>

        </div>

    </>
}
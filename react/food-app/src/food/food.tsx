import React from "react";
import {Intro1} from "./plainText/intro1";
import {Intro2} from "./plainText/intro2";
import {ReadyRations} from "./readyRations";
import {Articles1} from "./plainText/articles1";
import {Articles2} from "./plainText/articles2";

export function Food() {
    return <>
        <div id="page" className="hfeed site" style={{height: 'auto !important'}}>

            <div className="container" style={{height: 'auto !important'}}>

                <div id="content" className="site-content" style={{height: 'auto !important'}}>
                    <div id="primary" className="content-area" style={{height: 'auto !important'}}>
                        <main id="main" className="site-main" role="main" style={{height: 'auto !important'}}>


                            <div className="entry-content" style={{height: 'auto !important'}}>
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
                                                                   defaultValue="male"
                                                                   name="sex"
                                                                   id="male"
                                                                   defaultChecked={true}/>
                                                            <span className="frame"
                                                                  id="maleS">Мужчина</span>
                                                        </label>

                                                        <label className="genderLabel" htmlFor="female">
                                                            <input type="radio"
                                                                   className="gender"
                                                                   defaultValue="female"
                                                                   name="sex"
                                                                   id="female"/>
                                                            <span className="frame"
                                                                  id="femaleS">Женщина</span>
                                                        </label>

                                                    </div>

                                                    <div className="col-sm-12 col-md-6">
                                                        <div className="paramDivs">
                                                            <span className="divTitle ageT">Возраст</span><br/><input
                                                            id="age"
                                                            type="text"
                                                            className="age frame"
                                                            name="age"
                                                            defaultValue="36"></input><br/>
                                                        </div>

                                                        <div className="paramDivs">
                                                            <span className="divTitle heightT">Рост</span><br/>
                                                            <input
                                                                id="height"
                                                                type="text"
                                                                className="height frame"
                                                                name="height"
                                                                defaultValue="174"/><br/>
                                                        </div>

                                                        <div className="paramDivs">
                                                            <span className="divTitle weightT">Вес</span><br/><input
                                                            id="weight"
                                                            type="text"
                                                            className="weight frame"
                                                            name="weight"
                                                            defaultValue="88"></input><br/>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="activityDiv col-xs-12 col-md-offset-1 col-md-10">

                                                        <span className="divTitle activityT">Выберите уровень активности:</span>
                                                        <label className="inputLable" htmlFor="Sedentary">
                                                            <input id="Sedentary" className="activity" type="radio"
                                                                   name="activity"
                                                                   defaultValue="1.2"/>
                                                            <span>Веду сидячий образ жизни</span>
                                                        </label>

                                                        <label className="inputLable" htmlFor="v3">
                                                            <input id="v3" className="activity" type="radio"
                                                                   name="activity"
                                                                   defaultValue="1.375" defaultChecked={true}/>
                                                            <span>Занимаюсь активными видами спорта не менее 30 мин 3 раза в неделю</span><br/>
                                                        </label>

                                                        <label className="inputLable" htmlFor="v4">
                                                            <input id="v4" className="activity" type="radio"
                                                                   name="activity"
                                                                   defaultValue="1.418"/>
                                                            <span>4 раза в неделю</span><br/>
                                                        </label>

                                                        <label className="inputLable" htmlFor="v5">
                                                            <input id="v5" className="activity" type="radio"
                                                                   name="activity"
                                                                   defaultValue="1.462"/>
                                                            <span>5 раз в неделю</span><br/>
                                                        </label>

                                                        <label className="inputLable" htmlFor="v6">
                                                            <input id="v6" className="activity" type="radio"
                                                                   name="activity"
                                                                   defaultValue="1.506"/>
                                                            <span>6 раз в неделю</span><br/>
                                                        </label>

                                                        <label className="inputLable" htmlFor="v7">
                                                            <input id="v7" className="activity" type="radio"
                                                                   name="activity"
                                                                   defaultValue="1.6375"/>
                                                            <span>Занимаюсь ежедневно</span><br/>
                                                        </label>

                                                        <label className="inputLable" htmlFor="v7+">
                                                            <input id="v7+"
                                                                   className="activity"
                                                                   type="radio"
                                                                   name="activity"
                                                                   defaultValue="1.9"/>
                                                            <span>Я – работник тяжелого физического труда + занимаюсь ежедневно</span><br/>
                                                        </label>
                                                        <input type="button"
                                                               className="calc btn"
                                                               value="Посчитать!"/>
                                                        <span className="fillThatForm">Нужно заполнить все поля</span>
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
                                                <select
                                                    className="frame"
                                                    id="proteinSelect"
                                                    defaultValue={1.75}
                                                >
                                                    <option value="1.75">1.75</option>
                                                    <option value="2">2</option>
                                                    <option value="2.2">2.2</option>
                                                </select> гр. на килограмм массы тела – это <span
                                                className="protPerDay"></span> гр.
                                                в день, или <span className="kkalsFromProtein">0</span> ккал из вашего
                                                дневного
                                                калоража.<br/><br/>

                                                <span className="nutrient">Жиры:</span><br/>
                                                <select className="frame"
                                                        id="fatSelect"
                                                        defaultValue={0.9}>
                                                    <option value="0.8">0.8</option>
                                                    <option value="0.9">0.9</option>
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
                                                    <input type="radio"
                                                           name="stepRange"
                                                           defaultChecked={true}
                                                           defaultValue="50"
                                                           id="step50"/>
                                                    <span className="stepChangerSpan">50</span>
                                                </label>
                                                <label className="stepChangerLabel" htmlFor="step10">
                                                    <input type="radio" name="stepRange" defaultValue="10" id="step10"/>
                                                    <span className="stepChangerSpan">10</span>
                                                </label>
                                                <label className="stepChangerLabel" htmlFor="step5">
                                                    <input type="radio" name="stepRange" defaultValue="5" id="step5"/>
                                                    <span className="stepChangerSpan">5</span>
                                                </label>
                                                <label className="stepChangerLabel" htmlFor="step1">
                                                    <input type="radio" name="stepRange" defaultValue="1" id="step1"/>
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
                                                            <th className="name">
                                                                <input className="eating" type="text"
                                                                       defaultValue="Завтрак"/>
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
                                                                                        defaultValue="Перекуc"/>
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
                                                            <th className="name">
                                                                <input className="eating" type="text"
                                                                       defaultValue="Обед"/>
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
                                                            <th className="name">
                                                                <input className="eating" type="text"
                                                                       defaultValue="Перекуc"/>
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
                                                            <th className="name">
                                                                <input className="eating" type="text"
                                                                                        defaultValue="Ужин"/>
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
                                        <ReadyRations/>
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

                                <div className="gap"></div>
                                <Articles1/>
                                <div className="gap"></div>
                                <Articles2/>
                            </div>
                            `
                            <div className="gap"></div>
                        </main>
                    </div>
                </div>

            </div>

            <footer id="colophon" className="site-footer navbar-static-bottom" role="contentinfo">
            </footer>

        </div>

    </>
}
import React from "react";

export function Articles1() {
    return <>
        <div className="articlesHolder">
            <fieldset>
                <legend>Три статьи о том, как правильно считать калории:</legend>
                <div className="article">
                    <div className="boxmain artcal1">
                        <div className="cover top">
                            <h2 className="arttitle"><a
                                href="http://3-x-15.ru/2017/05/15/calories-counter/"
                                target="_blank">1. Счетчик калорий.</a></h2>
                            <a className="readmoar"
                               href="http://3-x-15.ru/2017/05/15/calories-counter/"
                               target="_blank">Разбираемся,
                                как правильно использовать счетчик калорий. Подробно рассмотрим
                                типичные ошибки из-за которых подсчет калорий “не работает”.</a>
                        </div>
                    </div>
                </div>
                <div className="article">
                    <div className="boxmain artcal2">
                        <div className="cover top">
                            <h2 className="arttitle"><a
                                href="http://3-x-15.ru/2017/05/20/calories-2/"
                                target="_blank">2. Сырые продукты и прочие
                                “мелочи”.</a></h2>
                            <a className="readmoar"
                               href="http://3-x-15.ru/2017/05/20/calories-2/"
                               target="_blank">Почему
                                считать калории нужно на вес продуктов до приготовления, а еще о
                                том,
                                что “полезных” или “вредных” калорий не бывает, и все они должны
                                быть
                                учтены.</a>
                        </div>
                    </div>
                </div>
                <div className="article">
                    <div className="boxmain artcal3">
                        <div className="cover top">
                            <h2 className="arttitle"><a
                                href="http://3-x-15.ru/2017/05/17/calories-3/"
                                target="_blank">3. Готовые блюда.</a></h2>
                            <a className="readmoar"
                               href="http://3-x-15.ru/2017/05/17/calories-3/"
                               target="_blank">Объединяем
                                полученные в первых двух частях знания и пытаемся осуществить
                                невозможное: посчитать калории в готовом блюде на примере
                                борща.</a>
                        </div>
                    </div>
                </div>
            </fieldset>
        </div>
    </>
}
#### https://tensegrity666.github.io/bm1/
Адаптивный сайт с интерактивными элементами и переключаемой темной темой.
* Страница карточки товара доступна по ссылке https://tensegrity666.github.io/bm1/product.html:

![https://tensegrity666.github.io/bm1/product.html](https://github.com/yndx-shri-reviewer/shri-2020-task-1/blob/master/assets/screenshots/product.png)

## Комментарии по использованным инструментам стилизации.
* Для получения HTML-разметки из JSON-шаблонов был использован [XJST Online demo](https://bem.github.io/bem-xjst/) (лень было ради двух страниц разбираться с установкой, поэтому онлайн-демо)

* Для получения из HTML-разметки готовой структуры каталога common.blocks был использован [Bemgo](https://github.com/werty1001/bemgo)

* CSS-препроцессор не использован. 
При использовании БЭМ-методологии он не дал бы никаких преимуществ т.к. нэстинг и импорты при БЭМ-методологии не нужны, а переменные - нативные CSS.

* SVG в блоке image по условию в автотесты не загружается, поэтому они были минифицированы и заинлайнены в УРЛ background-image при помощи инструмента от [Yoksel](http://yoksel.github.io/url-encoder/).
Не очень красиво, но надежно.

## Комментарии по JavaScript.
*Исходный код script.js находится в каталоге source. Также файлы интерактивных блоков accordion и theme находятся в соответствующих папках*

* По условию, обработчик событий делегирован на тег body. Из-за того, что скрипт может вызываться до того, как в DOM-дереве появился элемент body, у меня возникала ошибка.
Чтобы её избежать, я обернул этот обработчик в функцию, вызываемую по событию ``window.onload``.
* Функциональность аккордеона не совсем такая, как хотелось бы - по клику на следующий пункт меню предыдущий не закрывается. Второй вариант имплементации - предыдущий пункт меню сворачивается, но по повторному клику на пункт меню он не закрывается. Т.к. особых условий в задании не описано, решил оставить первый вариант.
* Переключатель темы вешает класс на тэг body, мне показалось это логичным.

## UX
* Все блоки, у которых подразумевается интерактивность (кнопки, инпуты, карточки), имеют cursor: pointer.
* При смене цветовой темы, при смене ширины экрана, а так же на интерактивных элементах (свитч и аккордеон) включены transition для плавности.

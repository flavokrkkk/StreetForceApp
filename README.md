# StreetForceApp 
Стек: NodeJs, ExpressJs, PostgresQL, ReactJs (Не учитывая внешние библиотеки)
Реализовать в будущем: 
                      1)Адаптация личного кабинета
                      2)Подключить API для оплаты товаров
                      3)Исправить все мелкие недочеты проекта
# Скриншоты данного проекта

<h2>Основной Лендинг приложения, где в кратких частях описан магазин, при адаптации на 560px, добавляется SlickSlider</h2>
<img src="https://github.com/flavokrkkk/StreetForceApp/blob/main/scrins/2024-02-20_23-13-36.png">
<img src="https://github.com/flavokrkkk/StreetForceApp/blob/main/scrins/2024-02-20_23-16-52.png">


<h2>Главная страница магазина, где расположены все товары, которые мы подгружаем с БД, в качестве примера используются шаблоны, реализована сортировка, фильтрация и пагинация между страницами, все товары обёрнуты в глобальный стейт</h2>
<img src="https://github.com/flavokrkkk/StreetForceApp/blob/main/scrins/2024-02-20_23-13-55.png">
<img src="https://github.com/flavokrkkk/StreetForceApp/blob/main/scrins/2024-02-20_23-14-04.png">


<h2>Страница с характеристиками каждого товара, при get запросе на сервере указывается '/:id' товара и подгрузка характеристик с бд, с возможностью добавить товар в корзину или избранные, а также выбрать размер и реализованный слайдер с помощью компонента Carousel из
  React-Bootstrap
</h2>
<img src="https://github.com/flavokrkkk/StreetForceApp/blob/main/scrins/2024-02-20_23-14-57.png">
<img src="https://github.com/flavokrkkk/StreetForceApp/blob/main/scrins/2024-02-20_23-15-15.png">


<h2>Корзина пользователя, которая обернута в глобальное состояние и вычисление итоговой цены корзины</h2>
<img src="https://github.com/flavokrkkk/StreetForceApp/blob/main/scrins/2024-02-20_23-15-22.png">
<img src="https://github.com/flavokrkkk/StreetForceApp/blob/main/scrins/2024-02-20_23-19-10.png">


<h2>Избранные, аналогично с корзиной обернуты в глобальный стейт, товары сразу же добавляются из LocalStorage, SideBar с предложенными товарами, в котором рендерятся два случайных элемента массива всех товаров</h2>
<img src="https://github.com/flavokrkkk/StreetForceApp/blob/main/scrins/2024-02-20_23-15-50.png">
<img src="https://github.com/flavokrkkk/StreetForceApp/blob/main/scrins/2024-02-20_23-16-08.png">

<h2>Личный кабинет пользователя, данные динамичесик должны подгружаться после регестрации и боковая панель с контактами</h2>
<img src="https://github.com/flavokrkkk/StreetForceApp/blob/main/scrins/2024-02-20_23-16-36.png"/>

<h2>Окно с регистрацией и авторизацией, планируется реализовать ее по JWT токену</h2>
<img src="https://github.com/flavokrkkk/StreetForceApp/blob/main/scrins/2024-02-20_23-18-22.png"/>

<h2>Меню бургер реализованное, с помощью компонента offCanvas из React-Bootstrap, также выполняются переходы по всем страницам</h2>
<img src="https://github.com/flavokrkkk/StreetForceApp/blob/main/scrins/2024-02-20_23-17-31.png"/>

<h2>Админ панель, где администратор может подгружать, новые товары и их характеристики</h2>
<img src="https://github.com/flavokrkkk/StreetForceApp/blob/main/scrins/2024-02-21_00-36-11.png"/>

<h1>Спасибо за внимание :)</h1>

















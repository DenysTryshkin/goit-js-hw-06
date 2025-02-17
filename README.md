### **Homework Topic 10: OOP. Classes**

#### **After reviewing this week's materials, you:**

*   Understand what the this keyword is in the context of a standalone function.
    
*   Can determine this in the global scope, in an object method, in arrow functions, and in callback functions.
    
*   Know the call, apply, and bind methods.
    
*   Understand the essence of OOP, the concept of a class, an instance, and an interface.
    
*   Know what prototype inheritance is and its specifics.
    
*   Use prototype inheritance and classes to create uniform objects with the same set of properties but different values.
    

### **What's next?**

The final step is to complete **three tasks** where you need to correctly use the this keyword, create a class for managing a product warehouse, and set up a string constructor. Exciting, right? Let’s go! 🚀

### **Homework Topic 10: OOP. Classes**

1.  **Create a repository goit-js-hw-06 and clone it to your computer.**
    
2.  **Inside the goit-js-hw-06 folder, create the project structure as shown in the diagram below.**
    

**⚠ Note!**The file and folder names, as well as their nesting structure, must match the given scheme. Otherwise, the work will not be accepted.

1.  **Read each task and complete it in the corresponding file.**
    
2.  **Make sure your code is formatted using Prettier, and there are no errors or warnings in the console when opening the live page of the task.**
    
3.  **Submit your homework for review.**
    
**Task 1: User Account**
------------------------

📂 **File:** task-1.js

A developer broke the source code for managing user accounts in our food delivery service before quitting. Refactor the methods of the customer object by properly assigning missing this references when accessing object properties.
  `
**Mentor will check:**✔ The customer variable is declared.✔ The customer variable contains an object with properties and methods.✔ customer.getDiscount() returns the current value of discount.✔ customer.setDiscount(0.15) updates the discount value.✔ customer.getBalance() returns the current value of balance.✔ customer.getOrders() returns the current value of orders.✔ customer.addOrder(5000, "Steak") adds "Steak" to the orders array and updates the balance.✔ Methods correctly use this.

**Task 2: Storage**
-------------------

📂 **File:** task-2.js

Create a Storage class that will manage a warehouse of goods. The class expects a single argument—a starting array of goods, which should be stored in a **private property** items.

Declare the following class methods:

*   getItems() — returns the array of current goods from the private property items.
    
*   addItem(newItem) — takes a new product newItem and adds it to the array in items.
    
*   removeItem(itemToRemove) — takes a product name itemToRemove as a string and removes it from the itemsarray.
    
**Mentor will check:**✔ Storage class is declared.✔ Storage class contains getItems, addItem, and removeItem methods.✔ The items property is private.✔ Methods properly modify and access items.

**Task 3: String Constructor**
------------------------------

📂 **File:** task-3.js

Create a StringBuilder class that takes one parameter, initialValue—a string stored in a **private property** value.

Declare the following methods:

*   getValue() — returns the current value of value.
    
*   padEnd(str) — appends str to the end of value.
    
*   padStart(str) — prepends str to the beginning of value.
    
*   padBoth(str) — adds str to both the start and end of value.
    
**Mentor will check:**✔ StringBuilder class is declared.✔ value property is private.✔ getValue, padEnd, padStart, and padBoth methods exist.✔ Methods correctly modify and return value.

That’s it! Good luck with your homework! 🚀

_________________________________________________

**Після опрацювання матеріалів цього тижня, ти:**

*   розумієш, що таке ключове слово this в контексті окремої функції
    
*   вмієш визначати this у глобальній області видимості, в методі об'єкта, в стрілочних та callback-функціях
    
*   знаєш методи call, apply і bind
    
*   розумієш сутність ООП, поняття класа, екземпляра, інтерфейса
    
*   знаєш що таке прототипне наслідування та специфіку його використання
    
*   використовуєш прототипне наслідування, класи для створення однотипних об'єктів з однаковим набором властивостей, але різними значеннями
    

Що далі?  Останній крок — виконати 3 задачі, де треба правильно використати ключове слово this, створити клас для управління складом товарів та налаштувати конструктор рядків. Цікаво, чи не так?  Погнали!   `

**Домашнє завдання Тема 10. ООП. Класи**

*   Створи репозиторій goit-js-hw-06 та склонюй його собі на комп’ютер.
    
*   У папці goit-js-hw-06 створи структуру проєкта, як показано на схемі нижче.
    
*   Прочитай кожне завдання і виконай його у відповідному файлі.
    
*   Переконайся, що код відформатований за допомогою Prettier, а в консолі відсутні помилки й попередження під час відкриття живої сторінки завдання
    
*   Здай домашнє завдання на перевірку

    **Задача 1. Акаунт користувача**
Виконуй це завдання у файлі task-1.js   `

Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

**На що буде звертати увагу ментор при перевірці:**

*   Оголошена змінна customer
    
*   Значення змінної customer — це об'єкт із властивостями та методами
    
*   Виклик customer.getDiscount() повертає поточне значення властивості discount
    
*   Виклик customer.setDiscount(0.15) оновлює значення властивості discount
    
*   Виклик customer.getBalance() повертає поточне значення властивості balance.
    
*   Виклик customer.getOrders() повертає поточне значення властивості orders
    
*   Виклик customer.addOrder(5000, "Steak") додає "Steak" у масив значень властивості orders та оновлює баланс
    
*   Метод getBalance об'єкта customer використовує this
    
*   Метод getDiscount об'єкта customer використовує this
    
*   Метод setDiscount об'єкта customer використовує this
    
*   Метод getOrders об'єкта customer використовує this
    
*   Метод addOrder об'єкта customer використовує this
    

**Задача 2. Склад**

Виконуй це завдання у файлі task-2.js   `

Створи клас Storage, який створюватиме об'єкти для управління складом товарів. Клас очікує лише один аргумент — початковий масив товарів, який записується до створеного об'єкта в приватну властивість items.

Оголоси наступні методи класу:

*   getItems() — повертає масив поточних товарів у приватній властивості items.
    
*   addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
    
*   removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і видаляє його з масиву товарів у приватній властивості items об'єкта.
    
**На що буде звертати увагу ментор при перевірці:**

*   Оголошений клас Storage
    
*   У класі Storage оголошений метод getItems
    
*   У класі Storage оголошений метод addItem
    
*   У класі Storage оголошений метод removeItem
    
*   Властивість items у класі Storage оголошена приватною
    
*   Метод getItems повертає значення приватної властивості items екземпляра класу, який його викликає
    
*   Метод addItem змінює значення приватної властивості items екземпляра класу, який його викликає
    
*   Метод removeItem змінює значення приватної властивості items екземпляра класу, який його викликає
    
*   У результаті виклику new Storage(\["Nanitoids", "Prolonger", "Antigravitator"\]) значення змінної storage — це об'єкт
    
*   У об’єкта storage немає публічної властивості items
    
*   Перший виклик storage.getItems() одразу після ініціалізації екземпляра повертає масив \["Nanitoids", "Prolonger", "Antigravitator"\]
    
*   Другий виклик storage.getItems() після виклику storage.addItem("Droid") повертає масив \["Nanitoids", "Prolonger", "Antigravitator", "Droid"\]
    
*   Третій виклик storage.getItems() після виклику storage.removeItem("Prolonger") повертає масив \["Nanitoids", "Antigravitator", "Droid"\]
    

﻿**Задача 3. Конструктор рядків**

Виконуй це завдання у файлі task-3.js   `

Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок, який записується у приватну властивість value об'єкта, що створюється.

Оголоси наступні методи класу:

*   getValue() — повертає поточне значення приватної властивості value.
    
*   padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта, який викликає цей метод.
    
*   padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта, який викликає цей метод.
    
*   padBoth(str) — отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта, який викликає цей метод.
    
**На що буде звертати увагу ментор при перевірці:**

*   Оголошений клас StringBuilder
    
*   Властивість value у класі StringBuilder оголошена приватною
    
*   У класі StringBuilder оголошений метод getValue
    
*   Метод getValue повертає значення приватної властивості value екземпляра класу, який його викликає
    
*   У класі StringBuilder оголошений метод padEnd
    
*   Метод padEnd змінює значення приватної властивості value екземпляра класу, який його викликає
    
*   У класі StringBuilder оголошений метод padStart
    
*   Метод padStart змінює приватну властивість value екземпляра класу, який його викликає
    
*   У класі StringBuilder оголошений метод padBoth
    
*   Метод padBoth змінює значення приватної властивості value екземпляра класу, який його викликає
    
*   У результаті виклику new StringBuilder(".") значення приватної змінної builder — це об'єкт
    
*   Об'єкт builder не містить публічну властивість value
    
*   Перший виклик builder.getValue() одразу після ініціалізації екземпляра повертає рядок .
    
*   Другий виклик builder.getValue() після виклику builder.padStart("^") повертає рядок ^.
    
*   Третій виклик builder.getValue() після виклику builder.padEnd("^") повертає рядок ^.^
    
*   Четвертий виклик builder.getValue() після виклику builder.padBoth("=") повертає рядок =^.^=

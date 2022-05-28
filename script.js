var x = 6;
var y = 14;
var z = 4;
counterFirst = x += y - x++ * z;
console.log(counterFirst); // спочатку буде виконано множення, x = 6 так i залишеться x = 6, так як використовується постфіксний інкремент. Відповідь -4

var x = 6;
var y = 14;
var z = 4;
counterSecond = z = --x - y * 5;
console.log(counterSecond); //--x буде 5, так як використовується префіксний інкремент. Відповідь -65

var x = 6;
var y = 14;
var z = 4;
counterThird = y /= x + 5 % z;
console.log(counterThird); // y на старті дається значеня 14. Після 5 ділиться на z(4), отримаємо залишок від діленя 1. Виходить 14 / 7 = 2. Відповідь 2 

var x = 6;
var y = 14;
var z = 4;
counterFourth = z - x++ + y * 5;
console.log(counterFourth); //x++ буде 6, так як постфіксный інкремент повертає старе значення, далі обчислення по стандарту, множення, складання с знаком мінус. Відповідь 68

var x = 6;
var y = 14;
var z = 4;
counterFifth = x = y - x++ * z;
console.log(counterFifth); //x++ буде 6, так как постфіксный инкремент, далі по стандарту, множення, потом віднімання. Відповідь -10



// Класна робота. Запит імені, прізвища, дати народження і запит 3 чисел з подальшим знаходженням середнього арифметичногоо

var nameUser = prompt("Введіть Ваше ім'я");
var surnameUser = prompt("Введіть Ваше прізвище");
var birthdayUser = prompt("Введіть рік народження");

var firstNumber = prompt("Введіть перше число");
var secondNumber = prompt("Введіть друге число");
var thirdNumber = prompt("Введіть третє число");

var firstNumberOutput = parseInt(firstNumber);
var secondNumberOutput = parseInt(secondNumber);
var thirdNumberOutput = parseInt(thirdNumber);

var numberAndArithmeticalMean = (firstNumberOutput + secondNumberOutput + thirdNumberOutput) / 3;


document.write("<div>");
document.write("<header></header>");
document.write("<nav></nav>");
document.write("<main>");
document.write("Ім'я - " + nameUser + "<br>");
document.write("Прізвище - " + surnameUser + "<br>");
document.write("Рік народження - " + birthdayUser + "<br>");
document.write("Середнє арифметичне 3 чисел - " + numberAndArithmeticalMean + "<br>");
document.write("</main>");
document.write("<footer></footer>");
document.write("</div>");
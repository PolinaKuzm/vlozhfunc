//240
/*№1
Сделайте функцию test, параметрами принимающую 3 функции. 
Передайте в нее первым параметром функцию, возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3.
Выведите в консоль сумму результатов функций.
*/
test(
	function() {return 1;},
	function() {return 2;},
    function() {return 3;}
);

function test(func1, func2, func3) {
	console.log( func1() + func2()+ func3()); // выведет 6
}

//241
/*№1
Сделайте функцию test, параметрами принимающую 3 функции и возвращающую сумму результатов переданных функций.
*/
let get1 = function() {
	return 1;
}
let get2 = function() {
	return 2;
}
let get3 = function() {
	return 3;
}
test1(get1, get2, get3); // выведет 6

function test1(func1, func2, func3) {
	console.log( func1() + func2() + func3());
}

/*№2
Сделайте 3 функции, объявив их как Function Declaration и дав им имена func1, func2 и func3.
Пусть первая функция возвращает 1, вторая - 2, а третья - 3. Передайте эти функции параметром в функцию test из предыдущей задачи.
*/
function func11(){
    return 1;
}
function func12(){
    return 2;
}
function func13(){
    return 3;
}
function test2 (get1, get2, get3) {
	console.log(get1() + get2() + get3() );
}
test2(func11, func12, func13);

/*№3
Модифицируйте предыдущую задачу так, чтобы функции были объявлены как Function Expression с теми же именами.
*/
let func21 = function() {
	return 1;
}
let func22 = function() {
	return 2;
}
let func23 = function() {
	return 3;
}
test3(func21, func22, func23);

function test3(get1, get2, get3) {
	console.log(get1() + get2() + get3() );
}

//242
/*
№ 1
Скопируйте код моей функции test. Вызовите эту функцию, передав ей параметром анонимную функцию, которая параметром будет принимать число и возвращать его куб.
*/
test4(function(num) {
	return num * num * num;
});

function test4(func) {
	console.log(func(3));
}
/*
№2
Переделайте ваш код так, чтобы передаваемая функция была не анонимной, а была определена как Function Declaration с именем func.
*/
function test5(num) {
	return num * num * num;
};
	console.log(test5(3));
/*
№3
Переделайте передаваемую функцию на Function Expression с тем же именем func.
*/
let test6= function(num) {
	return num * num * num;
};
	console.log(test6(3));
/*
№4
Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму.
При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3.
Выведите алертом результат.
*/
test7(function(param1, param2) {
	return param1+ param2;
});

function test7(func) {
	console.log(func(2,3));
}

//243
/*№1
Пусть функция test первым параметром принимает число, а вторым и третьим параметрами - функции, также параметром принимающие числа.
Пусть функция test возвращает сумму результатов переданных функций:
function test(num, func1, func2) {
	return func1(num) + func2(num)
}
Вызовите функцию test, первым параметром передав число 3, вторым параметром функцию, возводящую число в квадрат, а третьим - функцию, возводящую число в куб.
Выведите результат работы в консоль.
*/
function test8(num, func1, func2) {
	return func1(num) + func2(num);
};
function test8(func) {
	console.log(func(3,num**2,num**3));
}

//244
/*
№1
Не подсматривая в мой код реализуйте такую же функцию test самостоятельно.
*/
function test9(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = func(arr[i]);
	}
	return arr;
}
let result = test9([0, -2, 2], function(num) {
	return num * num;
});
console.log(result); // выведет [0, 4, 4]
/*
№2
Вызовите созданную вами функцию test, передав ей параметром массив с числами.
Сделайте так, чтобы функция вернула массив с кубами этих чисел.
*/
function test9(arr, func) {
	for (let i = 0; i < arr.length; i++) {
		arr[i] = func(arr[i]);
	}
	return arr;
}
let result2 = test9([0, -2, 2], function(num) {
	return num * num * num;
});
console.log(result2); // выведет [0, -8, 8]

//245
/*№1
Сделайте функцию func, которая параметрами будет принимать два числа,
а возвращать сумму квадрата первого числа с кубом второго числа.
Сделайте для этого вспомогательную функцию square, возводящую число в квадрат, 
и вспомогательную функцию cube, возводящую число в куб.
*/
function func10(num1, num2) {
	function square(num) {
		return num * num;
	}
	function cube(num) {
		return num*num*num;
	}
	return square(num1) + cube(num2);
}
console.log(func10(2, 3)); // выведет 31

//250
/*№1
Сделайте функцию func11, которая будучи вызвана вот так: func11()(), вернет число 1.
Сделайте аналогичную функцию func12, возвращающую число 2.
Найдите сумму результатов этих функций.
*/
function func11() {
	return function() {
		return 1;
	};
}
function func12() {
	return function() {
		return 2;
	};
}
console.log( func11()() );
console.log( func12()() );
console.log( func11()()+( func12()() ));

//251
/*№1
Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'
*/
function func13() {
	return function() {
		return function() {
			return function(){
				return function(){
			return '!';
				};
			};
		};
	};
}
console.log( func13()()()()() ); // выведет '!'

//252
/*
№1
Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.
*/
function func14(num1) {
	return function(num2) {
		return function(num3) {
		return num1 + num2 + num3;
		};
	};
}

console.log( func14(2)(3)(4) ); // выведет 9
/*
№2
Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
*/
function func15(num1) {
	return function(num2) {
		return function(num3) {
			return function(num4) {
				return function() {
					let arr = [num1, num2, num3, num4];
					return arr;
				};
			};
		};
	};
}
console.log( func15(2)(3)(4)(5)() ); // выведет  [2, 3, 4, 5]

//253
/*№1
Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.
*/
function each(arr, callback) {
	for (let i=0; i<arr.length; i++) {
		arr[i]=(callback(arr[i]));
	}
	return arr;
}
console.log(each([0,1,2,3,4,5],function(num){
	return num*2
}))
/*№2
Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.
*/
function each(arr, callback) {
	let result = [];
	for (let elem of arr) {
		result.push( callback(elem) ); 
	}
	return result;
}
console.log(each(['abc', 'def', 'jik'], function(str){
	return str.split('').reverse().join('')
}))
/*
№3
Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.
*/
function each(arr, callback) {
	let result = [];
	for (let elem of arr) {
		result.push( callback(elem) ); 
	}
	return result;
}
console.log(each(['abc', 'def', 'jik'], function(str){
	let s=str.split('').reverse().join('')
	return s.toUpperCase()[0]+s.substring(1)
}))

//254
/*
№1
С помощью следующей функции возведите все элементы массива в куб:
function cube(num) {
	return num ** 3;
}
*/
function cube(num) {
	return num ** 3;
}
let result5 = each([1, 2, 3, 4, 5], cube);
console.log(result5);

//257
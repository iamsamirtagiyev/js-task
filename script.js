//1. Funksiya yazacaqsız, funksiya 2 parametr qəbul edir, 1-cisi array 2-cisi number. Həmin funksiyanın nəticəsi 0-cı indeks-dən number-in sayı qədər array-in içindən ədədləri götürüb yeni array-ə yığmalısız.

let array = [1, 2, 3, 4, 5, 6 ,7, 8 ,9]
let newArray = []

const myFunction = (array, number) =>{
    for(let i = 0; i < number; i++){
        newArray.push(array[i])
    }
    console.log(newArray)
}

myFunction(array, 5)

//2. findMultiples adlı funksiya yazacaqsız, 2 number parametri alır (ex. findMultiples(number, limit)) - number-dan limitə qədər limitdə daxil olmaqla yeni array-ə number-in 2-yə hasillərini əlavə edəcəksiz, taki limitə çatana qədər.

let array2 = []

const findMultiples = (number, limit) =>{
    for(let i = number; i <= limit; i*=2){
        array2.push(i)
    }
    console.log(array2)
}

findMultiples(2, 6)

// 3. Count funksiyası verilir, 1 number parametri alır, 1-dən həmin number-a qədər yeni array yaradın

let array3 = []

const count = (number) =>{
    for (let i = 1; i < number; i++) {
       array3.push(i)
    }
    console.log(array3);
}

count(10)
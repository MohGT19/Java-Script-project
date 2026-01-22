//String Manipulation Functions:

//Reverse a String:

function ReverseString(x) {
  return x.split('').reverse().join('');
};

//example:
console.log(ReverseString('abcdefg'))



//Count Characters:

function strCharCount(s) {
  var i = 0;

  while (i <= s.length-1) {
    i++
  }
  console.log(`there is ${i} number of characters in this sentence`)

}

//example:
strCharCount('I am a beginner')


//Capitalize Words:

/*the logic here is to convert the string into an array,
uppercase the first letter of each sentence, and join the array another time*/

function capWord(sentence) {
  const cut = sentence.split(' ')

  for (let i = 0; i < cut.length; i++) {
    cut[i] = cut[i][0].toUpperCase() + cut[i].substring(1)
    
  }
  
  let fin = cut.join(' ')
  console.log(fin)
}

//example:
capWord('try this function')



//Array Functions:

//Find Maximum and Minimum:

function maxMin(arr = []) {
  
    let maxValue = Math.max(...arr);
    let minValue = Math.min(...arr);

    console.log(`the maximum value in this array is ${maxValue}, and the minimum is ${minValue}`)
    
  
}

//example:
maxMin([75983,7483,299384,223,2221,323,39993])



//Sum of Array:

function arrSum(x = []) {

  var y = 0;
  for (let i = 0 ; i <= x.length-1 ; i++) { 
    y += x[i];
  }
  
  console.log(`the sum of numbersin this array is ${y}`)

}

//example:
arrSum([1,2,3,4,5,6,7,8,9])



//Filter Array: save just even numbers (that are bigger than or equals to 10) from the array:

function keepEvenNumbers(x = []) {
  let y = [];

  for (let i = 0; i < x.length; i++) {
    if (x[i]%2 === 0 && x[i]>=10 && typeof(x[i]) === 'number') {
      y.push(x[i])
    }
  }

  return y
  
}

//example:
console.log(keepEvenNumbers([3, 12, 7, 18, 9, 22, 4]))



//Mathematical Functions:

//Factorial:

function findFactorial(x) {

  let i = x;
  let factorial = 1;

  while ( i > 1) {
    factorial *= i
    i--
  } 

  return factorial
}

//example:
console.log(findFactorial(5))



//Prime Number Check:

function isPrimeNumber(x) {
  let i = x
  let prime 
  while (i > 2) {
    i--
    if (x%i !== 0) {
      prime = true
    }
    else{
      prime = false
    }
    
  }
  
  return `let's ask the computer if the number is prime.
  -so, Mr computer, is the number prime?
  -computer: ${prime}`
  
}

//example:
console.log(isPrimeNumber(19))
console.log(isPrimeNumber(18))

/*note:
the time complexity is O(n!), 
and the number 2 is undefined, 
so sorry */



//Fibonacci Sequence:

function fibonacciSequence(length) {
  let fiboArr = [];
  
  if (length <= 0)return fiboArr;

  if (length >= 1)fiboArr.push(1);
  if (length >= 2)fiboArr.push(1);


  for (let i = 2; i < length; i++) {
    fiboArr.push(fiboArr[i-1]+fiboArr[i-2])
    
  }

  console.log(fiboArr)

}

//example:
fibonacciSequence(12)

// fibonacci sequence with the help of chat GPT 
// Creates an array holding the Fibonacci sequence.
function getSeq (num) {
    // num cannot be less than 1.
    // No matter what the value of num will be, the first item in the array will always be 0.
    let arr = [0];    
    if (num >= 2) {
        // No matter what the value of num will be, the second item in the array will always be 1.
        arr.push(1);
  
        // If num >= 3. i is used to refer to the index in the array (where counting starts at 0).
        for (let i = 2; i < num; i++) {
            // A new item is created. It is equal to the sum of the 2 previous items in the array.
            let newItem = arr[i-2] + arr[i-1];
            // The item created is added to the array.
            arr.push(newItem);
        }
    }
    // Returns the array.
    // num and the array's length should be equal.
    return arr;
}

// Turns the numbers from the array into strings (bigger numbers will be easier to read!) which will be joined together in a new string.
function cleanSeq (arg) {
    let arr = arg;
    // A new array is created. It will hold every items the other array holds, but here they will be turned into strings.
    let newArr = [];
    for (let item of arr) {
        // Every item is turned into a string. Thousands separators will be used to make the numbers more readable (here, a comma will be used like in the UK).
        newArr.push(item.toLocaleString('en-GB'));
    }
    // Items from the new array are joined in a string, but separated with a colored dash (hence the span).
    return newArr.join('<span> - </span>');
}


// Inserts the new string in a sentence.
function stringSeq (para) {
    let num = para;
    if (num == 1) {
        // Only one number will be given as a result: singular form is needed.
        return `The first number in the Fibonacci sequence is: ${cleanSeq(getSeq(para))}.`;
    } else {
        // More than one number will be given as a result: plural form is needed.
        return  `The first ${para} numbers in the Fibonacci sequence are: ${cleanSeq(getSeq(para))}.`;
    }
}

// Every time the button is clicked on, a new paragraph will be added with the answer to the question.
showAnswer.addEventListener('click', function () {
    // The number of items that will be given in the answer.
    let inputVal = seqLength.value;
    // Security net to avoid errors.
    if (inputVal < 1) {
        // If the user enters a number lower than 1, it will be changed to 1.
        inputVal = 1;
    } else if (inputVal > 30) {
        // If the user enters a number higher than 30, it will be changed to 30.
        inputVal = 30;
    } else if (!Number.isInteger(inputVal)) {
        // If the user enters a number that is not an integer, it will be rounded to the nearest integer.
        inputVal = Math.round(inputVal);
    }
    // A paragraph is created.
    let createP = document.createElement('p');
    // It is added to the div dedicated to the answer.
    seqAnswer.append(createP);
    // It contains the result of the function stringSeq called with inputVal as a parameter.
    createP.innerHTML = stringSeq(inputVal);
    // The input is emptied, it can be used again!
    seqLength.value = '';
});
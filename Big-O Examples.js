// BIG O EXAMPLES

// THE FOLLOWING EXAMPLES RUN IN CONSTANT TIME O(1) BECAUSE THE NUMBER OF OPERATIONS DOES NOT CHANGE DEPENDING ON THE SIZE OF THE INPUT

function constantTime() {
  let a = 1;
  let b = 2;
  let c = a + 5 * b;

  let i = 0;
  while (i < 10) {
    console.log(i);
    i++;
  }
}

// THE FOLLOWING EXAMPLES RUN IN LINEAR TIME O(n) BECAUSE THE NUMBER OF OPERATIONS GROWS DIRECTLY IN PROPORTION TO THE SIZE OF THE INPUT

function linearTime(n) {
  let i = 0;
  while (i < n) {
    console.log(i);
    i++;
  }
}

// THE FOLLOWING EXAMPLES RUN IN QUADRATIC TIME O(n^2) BECAUSE THE NUMBER OF OPERATIONS GROWS DIRECTLY IN PROPORTION TO THE SQUARE OF THE SIZE OF THE INPUT

function quadraticTime(n) {
  let i = 0;
  while (i < n) {
    let j = 0;
    while (j < n) {
      console.log(i, j);
      j++;
    }
    i++;
  }
}

// THE FOLLOWING EXAMPLES RUN IN LOGARITHMIC TIME O(log n) BECAUSE THE NUMBER OF OPERATIONS GROWS DIRECTLY IN PROPORTION TO THE LOGARITHM OF THE SIZE OF THE INPUT

function logarithmicTime(array, target) {
  let low = 0;
  let high = array - 1;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    console.log(mid);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return "VALUE NOT FOUND";
}

// THE FOLLOWING EXAMPLES RUN IN EXPONENTIAL TIME O(2^n) BECAUSE THE NUMBER OF OPERATIONS GROWS DIRECTLY IN PROPORTION TO THE EXPONENTIAL OF THE SIZE OF THE INPUT

function exponentialTime(n) {
  let i = 0;
  while (i < 2 ** n) {
    console.log(i);
    i++;
  }
}

// THE FOLLOWING EXAMPLES RUN IN FACTORIAL TIME O(n!) BECAUSE THE NUMBER OF OPERATIONS GROWS DIRECTLY IN PROPORTION TO THE FACTORIAL OF THE SIZE OF THE INPUT

function factorialTime(n) {
  let i = 0;
  while (i < n) {
    let j = 0;
    while (j < n) {
      console.log(i, j);
      j++;
    }
    i++;
  }
}

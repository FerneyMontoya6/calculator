const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');

const bDelete = document.getElementById('bDelete');
const bPlus = document.getElementById('bPlus');
const bSubstraction = document.getElementById('bSubstraction');
const bEquals = document.getElementById('bEquals');
const bMultiplication = document.getElementById('bMultiplication');
const bReset = document.getElementById('bReset');

const body = document.querySelector('body');

const input = document.getElementById('result');

let inputArray = new Array();

body.addEventListener('click', () => {
  input.focus();
});

b0.addEventListener('click', () => {
  input.value += 0;
  inputArray.push(0);
  input.focus();
  console.log(inputArray);
});

b1.addEventListener('click', () => {
  input.value += 1;
  inputArray.push(1);
  input.focus();
});

b2.addEventListener('click', () => {
  input.value += 2;
  inputArray.push(2);
  input.focus();
});

b3.addEventListener('click', () => {
  input.value += 3;
  inputArray.push(3);
  input.focus();
});

b4.addEventListener('click', () => {
  input.value += 4;
  inputArray.push(4);
  input.focus();
});

b5.addEventListener('click', () => {
  input.value += 5;
  inputArray.push(5);
  input.focus();
});

b6.addEventListener('click', () => {
  input.value += 6;
  inputArray.push(6);
  input.focus();
});

b7.addEventListener('click', () => {
  input.value += 7;
  inputArray.push(7);
  input.focus();
});

b8.addEventListener('click', () => {
  input.value += 8;
  inputArray.push(8);
  input.focus();
});

b9.addEventListener('click', () => {
  input.value += 9;
  inputArray.push(9);
  input.focus();
});

bPlus.addEventListener('click', () => {
  input.value += '+';
  inputArray.push('+');
  input.focus();
});
bSubstraction.addEventListener('click', () => {
  input.value += '-';
  inputArray.push('-');
  input.focus();
});

document.addEventListener('keydown', (event) => {
  const key = event.keyCode;
  const keyString = String.fromCharCode(key);

  switch (key) {
    case 8:
      inputArray.pop();
      input.value = null;

      inputArray.forEach(element => {
        input.value += element;
      });

      input.focus();
      break;
    case 96:
      inputArray.push(0);
      break;
    case 97:
      inputArray.push(1);
      break;
    case 98:
      inputArray.push(2);
      break;
    case 99:
      inputArray.push(3);
      break;
    case 100:
      inputArray.push(4);
      break;
    case 101:
      inputArray.push(5);
      break;
    case 102:
      inputArray.push(6);
      break;
    case 103:
      inputArray.push(7);
      break;
    case 104:
      inputArray.push(8);
      break;
    case 105:
      inputArray.push(9);
      break;
    case 107:
      inputArray.push('+');
      break;
    default:
      inputArray.push(keyString);
      inputArray.pop();

      input.value = null;

      inputArray.forEach(element => {
        input.value += element;
      });

      input.focus();
      break;
  }

});


bDelete.addEventListener('click', () => {
  inputArray.pop();
  input.value = null;

  inputArray.forEach(element => {
    input.value += element;
  });

  input.focus();
});

bReset.addEventListener('click', () => {

  input.value = null;
  inputArray = [];
});


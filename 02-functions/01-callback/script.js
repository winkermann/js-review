/*
Uma callback function em JavaScript é uma função passada como argumento para outra função, executada após a conclusão de uma operação assíncrona ou evento específico, permitindo o controle do fluxo de execução de código. Ela é essencial para lidar com tarefas não bloqueantes e eventos em JavaScript.
*/

// gera valores aleatório entre 1 e 3s para simular o tempo de requisição de uma fução 
function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) +
    min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function() {
    console.log('f1');
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if (callback) callback();
  }, rand());
}

//para evitar callback hell são criadas chamadas individuais de cada função para que sejam executadas na ordem. 
f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Olá mundo!');
}


//callback hell
// f1(function() {
//   f2(function() {
//     f3(function() {
//       console.log('Olá Mundo!');
//     });
//   });
// });

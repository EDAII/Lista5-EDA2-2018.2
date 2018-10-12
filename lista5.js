function getRandomvalue() {
  return Math.floor(Math.random() * (50 * 100 - 1 * 100) + 1 * 100) / (1 * 100);
}

function greedyCoinChange(coins, value) {
  const change = {
    1: 0,
    5: 0,
    10: 0,
    20: 0,
    25: 0,
    50: 0,
    80: 0,
    100: 0
  };
  let total = 0;
  value = value * 100;

  for (let index = coins.length; index >= 0; index--) {
    const coin = coins[index];
    while (total + coin <= value) {
      change[coin] += 1;
      total += coin;
    }
  }

  return change;
}

function printChange(coins, value, change) {
  let message = "O troco para " + value + " é composto por:\n";
  coins.forEach(coin => {
    if (change[coin] && change[coin] > 0) {
      if (change[coin] === 1) {
        message += change[coin] + " moeda de " + translateCoins[coin] + " \n";
      } else {
        message += change[coin] + " moedas de " + translateCoins[coin] + " \n";
      }
    }
  });
  console.log(message);
}

const translateCoins = {
  1: "R$0,01",
  5: "R$0,05",
  10: "R$0,10",
  20: "R$0,20",
  25: "R$0,25",
  50: "R$0,50",
  80: "R$0,80",
  100: "R$1,00"
};

const coinsOptimal = [1, 5, 10, 25, 50, 100];
const coinsSubOptimal = [1, 5, 10, 20, 25, 50, 80, 100];

let value = 2.40;
console.log("Troco usando moedas otimizadas: ");
printChange(coinsOptimal, value, greedyCoinChange(coinsOptimal, value));

console.log("Troco usando moedas não otimizadas: (Nesse caso o troco usando a menor quantidade de moedas seriam 3 moedas de R$0,80.)");
printChange(coinsSubOptimal, value, greedyCoinChange(coinsSubOptimal, value));

console.log("\n\nTeste com valor aleatorio:")
value = getRandomvalue();
console.log("Troco usando moedas otimizadas:");
printChange(coinsOptimal, value, greedyCoinChange(coinsOptimal, value));

console.log("Troco usando moedas não otimizadas:");
printChange(coinsSubOptimal, value, greedyCoinChange(coinsSubOptimal, value));

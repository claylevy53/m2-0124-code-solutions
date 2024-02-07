const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

let priceObjects = prices.map((x) => ({
  price: x,
  salesPrice: x / 2,
}));

console.log('Price objects', priceObjects);

let formattedPrices = prices.map((x) => '$' + x);

console.log('Formatted Prices', formattedPrices);


const spin = function(time) {
  const spinnerMoves= [
    '\r|   ',
    '\r/   ',
    '\r-   ',
    '\r\\  ',
    '\r|   ',
    '\r|   ',
    '\r/   ',
    '\r-   ',
    '\r\\  ',
    '\r|   ',
  ];
  for (const move of spinnerMoves) {
    setTimeout(() => {
      process.stdout.write(move);
    }, time += 200);
  }
};

spin(100);



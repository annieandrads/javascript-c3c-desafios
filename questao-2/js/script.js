window.addEventListener('load', (start) => {
  console.log(resolverBhaskara(1, 3, 2))
  console.log(resolverBhaskara(3, 1, 2))
});

function resolverBhaskara(ax2, bx, c) {
  const delta = bx ** 2 - 4 * ax2 * c;
  if (delta >= 0) {
      const res = [];
      valor1 = (-bx + Math.sqrt(delta))/( 2 * ax2);
      res.push(valor1);
      valor2 = (-bx - Math.sqrt(delta))/( 2 * ax2);
      res.push(valor2);
      return res;
  } else {
      return "Delta é negativo";
  }
}
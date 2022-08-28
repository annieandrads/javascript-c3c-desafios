window.addEventListener('load', (start) => {
  classificarTriangulo(3, 3, 3)
  classificarTriangulo(1, 2, 2)
  classificarTriangulo(1, 2, 3)
});

function classificarTriangulo (valor1, valor2, valor3) {
  if (valor1 == valor2 && valor1 == valor3) {
      console.log("O triangulo é equilatero");
  } else if (valor1 == valor2 || valor2 == valor3 || valor1 == valor3) {
      console.log("O triangulo é isosceles");
  } else {
      console.log("O triangulo é escaleno");
  }
}

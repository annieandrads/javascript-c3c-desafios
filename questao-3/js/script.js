window.addEventListener('load', (start) => {
  calcularNota(29);
  calcularNota(38);
  calcularNota(84);
});

function calcularNota(nota) {
  const notaFinal = arredondarNota(nota);
  if (notaFinal < 40) {
      console.log(`Aluno foi reprovado com a nota ${notaFinal}`);
  } else {
      console.log(`Aluno foi aprovado com a nota ${notaFinal}`);
  }
}

function arredondarNota(nota) {
  if (nota < 38) {
      return nota
  } else if (nota % 5 >= 3 ) {
      return nota = nota + (5 - (nota % 5))
  } else {
      return nota = nota - (nota % 5)
  }
}
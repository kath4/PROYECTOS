const cantidad = Number(prompt("¿Cuántos números desea sumar?"));
let sumatoria = 0;
for (let i = 1; i <= cantidad; i++) {
    const numeroAsumar = Number(prompt("Ingrese un número a sumar"));
    sumatoria = sumatoria + numeroAsumar;
  }

  alert(sumatoria);
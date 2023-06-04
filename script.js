document
  .getElementById("calculadora-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Desabilitar o botão de calcular
    document
      .getElementById("calculadora-form")
      .querySelector("button[type=submit]").disabled = true;

    // Exibir tela de carregamento
    document.getElementById("resultado").innerHTML = "Calculando...";

    // Obter a data de término do evento do usuário
    var dataEvento = new Date(document.getElementById("data-evento").value);

    // Obter se deve considerar finais de semana e feriados
    var considerarFeriados = document.getElementById(
      "considerar-feriados"
    ).value;

    // Calcular o número de dias até o evento
    var hoje = new Date();
    var diasRestantes =
      Math.floor((dataEvento - hoje) / (1000 * 60 * 60 * 24)) + 1; // Adicionamos 1 para incluir o próprio dia do cálculo

    // Verificar se deve considerar finais de semana
    if (considerarFeriados === "nao") {
      var diasUteis = 0;
      var dia = new Date(hoje);
      while (dia <= dataEvento) {
        // Verificar se o dia é útil (não é final de semana)
        if (dia.getDay() !== 0 && dia.getDay() !== 6) {
          diasUteis++;
        }
        dia.setDate(dia.getDate() + 1);
      }
      diasRestantes = diasUteis;
    }

    // Exibir a resposta abaixo do botão "Calcular"
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "Faltarão " + diasRestantes + " dias!";

    // Criar botão de resetar
    var resetButton = document.createElement("button");
    resetButton.textContent = "Resetar";
    resetButton.classList.add("btn", "btn-primary");
    resetButton.addEventListener("click", function () {
      // Resetar o formulário
      document.getElementById("calculadora-form").reset();

      // Limpar a resposta e remover o botão de resetar
      resultadoDiv.innerHTML = "";
      resultadoDiv.removeChild(resetButton);

      // Habilitar o botão de calcular
      document
        .getElementById("calculadora-form")
        .querySelector("button[type=submit]").disabled = false;
    });

    // Adicionar botão de resetar
    resultadoDiv.appendChild(resetButton);

    // Reabilitar o botão de calcular
    document
      .getElementById("calculadora-form")
      .querySelector("button[type=submit]").disabled = false;
      
  });

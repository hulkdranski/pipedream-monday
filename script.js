var projectName, statuss, notes

document.addEventListener("DOMContentLoaded", () => {
  const projectForm = document.getElementById("projectForm");

  projectForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Obtém os valores dos campos
    projectName = document.getElementById("nome");
    statuss = document.getElementById("status").value;
    notes = document.getElementById("notas");

    if (statuss == "Em andamento") {
      statuss = 0
    } else if(statuss == "Feito"){
      statuss = 1
    } else if(statuss == "Parado"){
      statuss = 2
    } else if (statuss == "Não iniciado"){
      statuss = 5
    } else {
      throw('Status invalido')
    }

    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const body = {
      "Projeto": projectName.value,
      "Prioridade": statuss,
      "Notas": notes.value
    }

    const options = {
      method: "POST",
      headers,
      mode: "cors",
      body: JSON.stringify(body),
    }

    fetch("Your_pipedream_unique_URL_to_trigger_here", options)

    projectName.value = ""
    notes.value = ""
    
  });
});

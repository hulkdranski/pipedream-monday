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

    fetch("https://eo8dhklk17ufzkk.m.pipedream.net", options)

    projectName.value = ""
    notes.value = ""
    
  });
});

/*const query = `mutation {
  create_item (board_id: 6482815534, item_name: "kaue") {
    id
  }
}`;



// Fazendo a solicitação para a API do Monday.com
fetch("https://api.monday.com/v2", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM0OTEzNzY3MywiYWFpIjoxMSwidWlkIjo1OTc1NjExMSwiaWFkIjoiMjAyNC0wNC0xOFQxODowMjo0OC4xNTVaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjI5NzM0MTgsInJnbiI6InVzZTEifQ.nFzc_Cehr0lUq9eyQEEQon0nOPmdPCA3B9QYxZjeess'
  },
  body: JSON.stringify({
    'query': query
  })
})
.then(res => res.json())
.then(res => console.log(JSON.stringify(res, null, 2)))
.catch(error => console.error("Erro ao fazer a solicitação:", error));*/ /*

let query = 'query { webhooks (board_ids: 6482815534) { id event board_id config }}';

fetch ("https://api.monday.com/v2", {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
   'Authorization' : 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM0OTEzNzY3MywiYWFpIjoxMSwidWlkIjo1OTc1NjExMSwiaWFkIjoiMjAyNC0wNC0xOFQxODowMjo0OC4xNTVaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjI5NzM0MTgsInJnbiI6InVzZTEifQ.nFzc_Cehr0lUq9eyQEEQon0nOPmdPCA3B9QYxZjeess'
   },
   body: JSON.stringify({
     'query' : query
   })
  })
   .then(res => res.json())
   .then(res => console.log(JSON.stringify(res, null, 2)));

   const columnValues = {
    'text9': 'Valor de texto',
    'project_status': 'Em andamento'
  };*/
  
  const query = `mutation {
    create_item (board_id: 6482815534, item_name: "Projeto-Teste", column_values: "{\\"text9\\": \\"Testando API\\", \\"project_status\\": \\"Em andamento\\"}") {
      id
    }
  }`;
  
  fetch("https://api.monday.com/v2", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjM0OTEzNzY3MywiYWFpIjoxMSwidWlkIjo1OTc1NjExMSwiaWFkIjoiMjAyNC0wNC0xOFQxODowMjo0OC4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MjI5NzM0MTgsInJnbiI6InVzZTEifQ.hYRPkBf_C1gID3sL2Fvnf3WZM_L-YZxaX8ArnxUvvmU'
    },
    body: JSON.stringify({
      'query': query
    })
  })
  .then(res => res.json())
  .then(res => console.log(JSON.stringify(res, null, 2)))
  .catch(error => console.error("Erro ao fazer a solicitação:", error));
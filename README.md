# pipedream-monday

<div>
	<h2 class="f4 my-3">
		Descripction
	</h2>
	<p>
		A simple HTML/CSS/JavaScript form integrated with monday, through a webhook in Pipedream.
	</p>
	<h2 class="f4 my-3">
		How to use?
	</h2>
	<p>
		First of all, you need to create the structure inside pipedream.
  	</p>
  	<h3>
    		First Step
  	</h3>
  	<p>
    		Create a workflow on pipedream.
  	</p>
  	<h3>
    		Second Step
 	 </h3>
 	 <p>
   		 Create a trigger and get the unique URL to trigger.
  	</p>
 	 <p class="text-center" align="left">
		<img alt="trigger" src="/img/trigger.png" width="450px" height="450px"/>
 	 </p>
  	<h3>
   		 Third Step
  	</h3>
	<p>
   		 Create and configure the data store (depends on the request).
  	</p>
	<p class="text-center" align="left">
		<img alt="trigger" src="/img/data_store.png" width="450px" height="450px"/>
 	</p>
	<h3>
   		 Fourth Step
  	</h3>
	<p>
   		 Create and put pipedream-code on "Node pass data between steps".
  	</p>
	<p class="text-center" align="left">
		<img alt="trigger" src="/img/node.png" width="4650px" height="450px"/>
 	</p>
	<h3>
   		 Finally
  	</h3>
	<p>
   		Now you can run index.html, and don't forget to put your data, such as BoardID and Authorization Token in Script.js <br/><br/>
  		You can make the request directly through the monday API, I just using pipedream for study webhooks. Using this code you can do the samething whitout pipedream:
		<p style = 'font-size:10px'>
			
			var projeto, status, notas

			document.addEventListener("DOMContentLoaded", () => {
				const projectForm = document.getElementById("projectForm");
			  
			projectForm.addEventListener("submit", (event) => {
				event.preventDefault();
			
				projeto = document.getElementById("nome").value;
				statuss = document.getElementById("status").value;
				notas = document.getElementById("notas").value;			
   
   			const query = `mutation {
			    create_item (board_id: your_boardID, item_name: "${projeto}", column_values: "{\\"text9\\": \\"${notas}\\", \\"project_status\\": \\"${statuss}\\"}") {
			      id
			    }
			  }`;
			  
			fetch("https://api.monday.com/v2", {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer Your_Monday_Token_authorization_here'
			    },
				body: JSON.stringify({
				'query': query
			    })
			  })
				.then(res => res.json())
				.then(res => console.log(JSON.stringify(res, null, 2)))
				.catch(error => console.error("Erro ao fazer a solicitação:", error));
</p>
  	</p>

</div>


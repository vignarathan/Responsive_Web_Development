function getJoke() {
						fetch("https://official-joke-api.appspot.com/random_joke")
						  .then(response => response.json())  // Convert response to JSON
						  .then(data => {
							document.getElementById("joke").textContent =
							data.setup + " - " + data.punchline;
						  })
						  .catch(error => console.error("Error fetching joke:", error));
					  }
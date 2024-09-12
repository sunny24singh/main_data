const data = {
    name: "John",
    age: 30
  };
  
  // Send the POST request using fetch
  fetch("https://api.example.com/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((data) => console.log("Success:", data))
    .catch((error) => console.error("Error:", error)); 

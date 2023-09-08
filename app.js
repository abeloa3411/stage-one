const express = require("express");
const app = express();
const port = 3000; // You can change this to any port you prefer

// Endpoint to get specific information based on query parameters
app.get("/api/user", (req, res) => {
  const { firstName, lastName } = req.query;

  // Check if both query parameters are provided
  if (!firstName || !lastName) {
    return res.status(400).json({
      error: "Both firstName and lastName are required query parameters.",
    });
  }

  // You can customize the response based on the query parameters
  const user = {
    firstName: firstName,
    lastName: lastName,
    age: 30, // You can add more details here
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
  };

  res.json(user);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

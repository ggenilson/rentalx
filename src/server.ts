import express from "express";

const app = express();

app.post("/courses", (request, response) => {
  const { name } = request.body;

  return response.send({ name });
});

app.listen(3333, () => console.log("Server is running"));

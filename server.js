const express = require("express");
const bodyParser = require("body-parser");
app = express();
app.use(bodyParser.json());

const userService = require("./user_service");

app.get("/signup/:email/:password", async (req, res) => {
  const { email, password } = req.params;
  try {
    const user = await userService.addUser(email, password);
    res.status(201).json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

app.get("/signin/:email/:password", async (req, res) => {
  const { email, password } = req.params;
  try {
    const user = await userService.authenticate(email, password);
    res.json(user);
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

const port = 4000;
app.listen(port, () => console.log(`Server started at port ${port}`));

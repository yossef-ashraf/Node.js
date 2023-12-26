const users = (req, res) => {
  res.send("ur F API Use Node.js - express");
};

const userId = (req, res) => {
  const userId = req.params.userId;
  res.send(userId);
};

const store = (req, res) => {
  const body = req.body;
  res.send(body);
};

module.exports = {
  users,
  userId,
  store,
};

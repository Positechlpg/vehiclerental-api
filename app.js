require("dotenv").config();
const server = require("./server")

const port = 8000;
server.listen(port, () => {
  console.log(`server is running port ${port}`);
})
import axios from "axios";

const main = async () => {
  const response = saxios.get("http://localhost:3000/products/1");
  console.log((await response).data);
};

main().catch((error) => console.log(error));

console.log("I learn how to use git")
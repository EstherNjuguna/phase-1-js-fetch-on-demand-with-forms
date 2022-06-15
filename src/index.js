const configurationObject = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    name:"",email:""
  }),
};

fetch("http://localhost:3000/users", configurationObject);
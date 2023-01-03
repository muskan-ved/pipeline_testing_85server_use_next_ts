import axios from "axios";

export default axios.create({
    // baseURL:"http://localhost:5005",
    baseURL:'https://api-property.mangoitsol.com/',
    headers: {
        "Content-type": "application/json"
      }
}); 

// Swagger
const swaggerJsDoc = require("swagger-jsdoc");

// Options
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Disney World API",
      version: "1.0.0",
      description:
        "API that explores the world of Disney, which allows knowing and modifying the characters that compose it and understanding in which movies they participated",
      contact: {
        name: "Federico Milone",
        email: "fedeemilo91@gmail.com",
      },
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
      servers: ["http://localhost:8000"],
    },
  },
  apis: ["./api/routes/*.route.js"],
  
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;

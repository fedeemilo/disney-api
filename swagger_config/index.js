// Swagger
const swaggerJsDoc = require("swagger-jsdoc");

// Options
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.1',
    info: {
      title: "Disney World API",
      version: "1.0.0",
      description:
        "API that explores the world of Disney, which allows knowing and modifying the characters that compose it and understanding in which movies they participated",
      contact: {
        name: "Federico Milone",
        email: "fedeemilo91@gmail.com",
      },
      servers: ["http://localhost:8000"],
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  apis: ["./api/routes/*.route.js"],
  
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;

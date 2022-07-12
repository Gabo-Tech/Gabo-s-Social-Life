const users = {
    "/users": {
      post: {
        tags: ["User's Profile"],
        summary: "Register new user",
        description: "Register a new user with username, email and password",
        operationId: "registerUser",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#components/schemas/UserRegister" }
            }
          }
        },
        responses: {
          201: { description: "User successfully registered" },
          400: { description: "Data required: username, email, password" },
          500: { description: "Internal server error" },
        }
      },
    },
    "/users/login": {
      post: {
        tags: ["User's Profile"],
        summary: "Login a user",
        description: "Login a user with credentials (email, password) and get a jwt.",
        operationId: "loginUser",
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: { $ref: "#components/schemas/UserLogin" }
            }
          }
        },
        responses: {
          200: { description: "Returns the user's data and a jwt used for authentication." },
          400: { description: "Wrong credentials" },
          500: { description: "Internal server error" },
        }
      }
    },
  };
  export default users;

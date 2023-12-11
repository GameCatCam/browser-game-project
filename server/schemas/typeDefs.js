const typeDefs = `
  type User {
    _id: ID!
    username: String
    email: String
    highScore: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    allUsers: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!, highScore: Int): Auth
	  updateUser(username: String, email: String, password: String): User
    updateScore(highScore: Int): User
  }
`;

module.exports = typeDefs;

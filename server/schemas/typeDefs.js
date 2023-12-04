const typeDefs = `
  type User {
    _id: ID!
	firstName: String
	lastName: String
    email: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
	updateUser(firstName: String, lastName: String, email: String, password: String): User
  }
`;

module.exports = typeDefs;

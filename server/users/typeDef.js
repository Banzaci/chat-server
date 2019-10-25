
const typeDef = `
  type User {
    name: String
  }
  extend type Query {
    users: [User]
  }
`;

module.exports = {
  typeDef
};
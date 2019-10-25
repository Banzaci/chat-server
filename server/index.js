import { GraphQLServer, PubSub } from 'graphql-yoga';
import books from './users';

const typeDef = `
  type Query
`;

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: [
    typeDef,
    books.typeDef
  ],
  resolvers: [
    books.resolvers
  ],
  context:{
    pubsub
  }
});

server.start(({ port }) => console.log(`http://localhost${port}`));

// https://github.com/JoaoPauloCMarra/graphql-chat-sample/tree/master/frontend/src



// const server = new ApolloServer({
//   typeDefs: [typeDef, books.typeDef],
//   resolvers: [ books.resolvers ],
// });

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });
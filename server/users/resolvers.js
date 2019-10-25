import { User } from './User';

const resolvers = {
  Query: {
    users: () => User.all(),
  },
};

module.exports = {
  resolvers,
}
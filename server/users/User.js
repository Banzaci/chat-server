import { data } from './data';

class User {
  static all() {
    return data;
  }
}

module.exports = {
  User,
};
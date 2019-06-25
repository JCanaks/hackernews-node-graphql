"use strict";

var _graphqlYoga = require("graphql-yoga");

var typeDefs = "\n    type Query{\n        info: String!\n    }\n";
var resolvers = {
  Query: {
    info: function info() {
      return 'This is the API of a Hackernews Clone';
    }
  }
};
var server = new _graphqlYoga.GraphQlServer({
  typeDefs: typeDefs,
  resolvers: resolvers
});
server.start(function () {
  return console.log('Server is running on http://localhost:4000');
});
import { GraphQLServer } from 'graphql-yoga';

const typeDefs = `
type Query{
    info: String!
}
`

const resolvers = {
    Query: {
        info: () => 'This is the API of a Hackernews Clone'
    }
}

const server = new GraphQLServer({ typeDefs, resolvers });

// eslint-disable-next-line no-console
server.start(() => console.log('Server is running on http://localhost:4000'));

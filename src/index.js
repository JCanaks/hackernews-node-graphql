import { GraphQLServer } from 'graphql-yoga';

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}];

let idCount = links.length;

const resolvers = {
    Query: {
        info: () => 'This is the API of a Hackernews Clone',
        feed: () => links,
    },

    Mutation: {
        post: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            };
            links.push(link);
            return link;
        }
    }
}

const server = new GraphQLServer({ typeDefs: './src/schema.graphql', resolvers });

// eslint-disable-next-line no-console
server.start(() => console.log('Server is running on http://localhost:4000'));

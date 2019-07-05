import { GraphQLServer } from 'graphql-yoga';
import { prisma } from './generated/prisma-client';

const resolvers = {
    Query: {
        info: () => 'This is the API of a Hackernews Clone',
        feed: (root, args, context, info) => context.prisma.links(),
        link: (parent, args, context) => context.prisma.link({
            id: args.id,
        })
    },
    Mutation: {
        post: (root, args, context) => context.prisma.createLink({
            url: args.url,
            description: args.description,
        }),
        updateLink: async (root, args, context) => {
            const currentLink = await context.prisma.link({
                id: args.id,
            });
            return context.prisma.updateLink({
                data: {
                    url: args.url ? args.url : currentLink.url,
                    description: args.description ? args.description : currentLink.description,
                },
                where: {
                    id: args.id
                }
            });
        },
        deleteLink: (root, args, context) => context.prisma.deleteLink({
            id: args.id
        })
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: { prisma },
});

// eslint-disable-next-line no-console
server.start(() => console.log('Server is running on http://localhost:4000'));

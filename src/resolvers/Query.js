const feed = (root, args, context, info) => context.prisma.links();

export default {
    feed,
};
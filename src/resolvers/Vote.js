const link = (parent, args, context) =>
    context.prisma.vote({ id: parent.id }).link();

const user = (parent, args, context) =>
    context.prisma.vote({ id: parent.id }).user();

export default {
    link,
    user,
}

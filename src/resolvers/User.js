const links = (parent, args, context) => {
    return context.prisma.user({ id: parent.id }).links();
}

const votes = (parent, args, context) =>
    context.prisma.user({ id: parent.id }).votes();

export default {
    links,
    votes,
}

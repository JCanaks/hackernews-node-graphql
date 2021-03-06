const postedBy = (parent, args, context) => {
    return context.prisma.link({ id: parent.id }).postedBy();
}

const votes = (parent, args, context) =>
    context.prisma.link({ id: parent.id }).votes();
    
export default {
    postedBy,
    votes,
}

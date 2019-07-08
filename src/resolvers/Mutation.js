import 'dotenv/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import getUserId  from '../utils';

const { APP_SECRET } = process.env;

const signup = async (parent, args, context, info) => {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.createUser({ ...args, password });
    const token = jwt.sign({ userId: user.id }, APP_SECRET, { expiresIn: '3h' });

    return {
        token,
        user,
    }
}

const login = async (parent, args, context, info) => {
    const user = await context.prisma.user({ email: args.email });
    if (!user) {
        throw new Error('No such user found');
    }

    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
        throw new Error('Invalid password');
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET);

    return {
        token,
        user,
    }
}

const post = (parent, args, context, info) => {
    const userId = getUserId(context);
    return context.prisma.createLink({
        url: args.url,
        description: args.description,
        postedBy: { connect: { id: userId } }
    });
}

const updateLink = async (parent, args, context) => {
    getUserId(context);
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
}

const deleteLink = (parent, args, context) => {
    getUserId(context);
    return context.prisma.deleteLink({
        id: args.id
    });
}

export default {
    signup,
    login,
    post,
    updateLink,
    deleteLink
}
import jwt, { Secret, SignOptions } from 'jsonwebtoken';

// Define the shape of the user object
interface User {
    id: string; // Change to 'number' if your DB uses numeric IDs
    role: string;
}

const generateToken = (user: User): string => {
    // Assert process.env as string to satisfy jwt.sign()'s expected Secret type
    const secret = process.env.JWT_SECRET as Secret;

    const options: SignOptions = {
        expiresIn: (process.env.JWT_EXPIRES_IN || '7d') as SignOptions['expiresIn'],
    };

    return jwt.sign(
        {
            userId: user.id,
            role: user.role,
        },
        secret,
        options
    );
};

export default generateToken;
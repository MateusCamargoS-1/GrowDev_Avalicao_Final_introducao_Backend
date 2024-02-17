import bcrypt from 'bcryptjs';
import { usuarios } from '../index.js';

const authenticateUser = async (req, res, next) => {
    const userEmail = req.body.email;
    const password = req.body.password;

    // Verificar se o usuário existe
    const user = usuarios.find(user => user.email === userEmail);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: 'Email ou senha inválidos.'
        });
    }

    // Verificar senha
    const passwordVerified = await bcrypt.compare(password, user.password);
    if (!passwordVerified) {
        return res.status(400).json({
            success: false,
            message: 'Email ou senha inválidos.'
        });
    }

    next();
};

export default authenticateUser;
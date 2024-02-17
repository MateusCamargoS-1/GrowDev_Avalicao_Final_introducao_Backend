import { recados } from '../index';

const messageExists = (req, res, next) => {
    const id = parseInt(req.params.id);
    const recado = recados.find(recado => recado.id === id);
    
    if (!recado) {
        return res.status(404).json({
            success: false,
            message: 'Recado não encontrado.'
        });
    }
    next();
};

export default messageExists;
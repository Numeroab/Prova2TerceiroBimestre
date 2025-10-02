const database = require('../utils/db');

const getAllTarefas = async (req, res) => {
    try {
        const tarefas = await database.getAllTarefas();
        res.status(200).json(tarefas);
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
        res.status(500).json({ 
            message: 'Erro interno do servidor',
            error: error.message 
        });
    }
};

module.exports = {
    getAllTarefas
}
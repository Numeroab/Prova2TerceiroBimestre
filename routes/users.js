const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/auth');
const {
    getAllTarefas,
    getUserById,
   
} = require('../controllers/usersController');

// Todas as rotas protegidas por JWT
router.get('/', getAllTarefas);
router.post('/', authenticateToken, getUserById);

module.exports = router;
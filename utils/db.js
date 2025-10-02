const fs = require('fs').promises;
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const DB_PATH = path.join(__dirname, '..', 'db.json');

const database = {
  // USERS
  readDB: async () => {
    try {
      const data = await fs.readFile(DB_PATH, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      return { users: [] , tarefas:[]};
    }
  },

  saveDB: async (data) => {
    try {
      await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
    } catch (error) {
      throw new Error('Erro ao salvar dados no arquivo');
    }
  },
  
  createUser: async (userData) => {
    try {
      const db = await database.readDB();
      
      const newUser = {
        id: uuidv4(),
        ...userData,
        dataCriacao: new Date().toISOString(),
        dataAtualizacao: new Date().toISOString()
      };
      
      db.users.push(newUser);
      await database.saveDB(db);
      return newUser;
    } catch (error) {
      throw new Error('Falha ao criar usuário: ' + error.message);
    }
  },
    createTarefas: async (tarefaData) => {
        try {
      const db = await database.readDB();
      
      const newProduct = {
        id: uuidv4(),
        ...tarefaData,
        dataCriacao: new Date().toISOString(),
        dataAtualizacao: new Date().toISOString()
      };
      
      db.products.push(newProduct);
      await database.saveDB(db);
      return newProduct;
    } catch (error) {
      throw new Error('Falha ao criar tarefa: ' + error.message);
    }
  },

  
// readDB: async () => {
//     try {
//       const data = await fs.readFile(DB_PATH, 'utf-8');
//       return JSON.parse(data);
//     } catch (error) {
//       return { users: [] };
//     }
//   },

//   saveDB: async (data) => {
//     try {
//       await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2));
//     } catch (error) {
//       throw new Error('Erro ao salvar dados no arquivo');
//     }
//   },
//   create: async (usuarioData) => {
//     try {
//       const db = await database.readDB();
      
//       // Verificar se usuário já existe
//       const usuarioExistente = db.users.find(user => user.email === usuarioData.email);
//       if (usuarioExistente) {
//         throw new Error('Usuário já existe');
//       }
      
//       // CORREÇÃO: Usar uuidv4() corretamente
//       const novoUsuario = {
//         id: uuidv4(),
//         ...usuarioData,
//         dataCriacao: new Date().toISOString(),
//         dataAtualizacao: new Date().toISOString()
//       };
      
//       db.users.push(novoUsuario);
//       await database.saveDB(db);
      
//       return novoUsuario;
//     } catch (error) {
//       console.error('Erro ao criar usuário:', error);
//       throw new Error('Falha ao criar usuário: ' + error.message);
//     }
//   }
};



module.exports = database;
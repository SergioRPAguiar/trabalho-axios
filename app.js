const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');

app.use(express.json());
app.use('/api', apiRoutes);

const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

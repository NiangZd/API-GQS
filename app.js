const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let pedidos = [];
let rotas = [];

// ROTA PARA LISTAR PEDIDOS
app.get('/pedidos', (req, res) => {
    res.status(200).json([...pedidos]);
});

// ROTA PARA ADD UM NOVO PEDIDO
app.post('/pedidos', (req, res) => {
    const novoPedido = { ...req.body };
    pedidos = [...pedidos, novoPedido];
    res.status(201).json(novoPedido);
});

// ROTA PARA EXIBIR AS ROTAS DISPONÍVEIS
app.get('/rotas', (req, res) => {
    res.status(200).json([...rotas]);
});

// ROTA PARA ADD UMA NOVA ROTA
app.post('/rotas', (req, res) => {
    const novaRota = { ...req.body };
    rotas = [...rotas, novaRota];
    res.status(201).json(novaRota);
});

// ROTA PARA SABER A MELHOR DAS ROTAS
app.get('/melhor-rota/:id', (req, res) => {
    const rotaId = Number(req.params.id);
    const rotaEncontrada = rotas.find(r => r.id === rotaId);

    if (!rotaEncontrada) {
        res.status(404).json({ mensagem: 'Rota não encontrada' });
        return;
    }

    // SELEÇÃO DA MELHOR ROTA
    const pedidosComRota = pedidos.map(pedido => ({
        ...pedido,
        rota: rotaEncontrada
    }));

    res.status(200).json(pedidosComRota);
});

app.listen(port, () => {
    console.log(`Servidor está ativo na porta ${port}`);
});

module.exports = app;

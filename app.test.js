const request = require('supertest');
const app = require('../app');

describe('Testes de Integração', () => {
    let pedidoId;
    let rotaId;

    // TESTE PARA A ROTA POST /PEDIDOS
    it('Deve adicionar um novo pedido', async () => {
        const novoPedido = {
            endereco: { coordenadas: [34.0522, -118.2437] },
            latitude: 34.0522,
            longitude: -118.2437,
            produto: 'Produto 2',
            quantidade: 5
        };
        const response = await request(app).post('/pedidos').send(novoPedido);
        expect(response.statusCode).toBe(201);
        expect(response.body).toMatchObject(novoPedido);
        pedidoId = response.body.id;
    });

    // TESTE PARA A ROTA GET /PEDIDOS
    it('Deve listar todos os pedidos', async () => {
        const response = await request(app).get('/pedidos');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
    });

    // TESTE PARA A ROTA POST /ROTAS
    it('Deve adicionar uma nova rota', async () => {
        const novaRota = {
            id: 2,
            latitude: 34.0522,
            longitude: -118.2437
        };
        const response = await request(app).post('/rotas').send(novaRota);
        expect(response.statusCode).toBe(201);
        expect(response.body).toMatchObject(novaRota);
        rotaId = novaRota.id;
    });

    // TESTE PARA A ROTA GET /ROTAS
    it('Deve listar todas as rotas', async () => {
        const response = await request(app).get('/rotas');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
    });

    // TESTE PARA A ROTA GET /MELHOR-ROTA/:ID
    it('Deve encontrar a melhor rota para um pedido específico', async () => {
        const response = await request(app).get(`/melhor-rota/${rotaId}`);
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        response.body.forEach(pedido => {
            expect(pedido.rota).toBeDefined();
        });
    });
});

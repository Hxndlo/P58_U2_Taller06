const { Pool } = require('pg')

const pool = new Pool ({
    user: "postgres",
    host: "localhost",
    database: "tienda",
    password: "Handlo88",
    port: 5433
})

const obtenerCliente = async (req, res) => {
    const response = await pool.query('SELECT * FROM produccion.cliente');
    res.status(200).json(response.rows);
};

const agregarCliente = async (req, res) => {
    const { cedula, nombre, apellido } = req.body;
    const response = await pool.query('INSERT INTO produccion.cliente (cedula, nombre, apellido) VALUES ($1, $2, $3)', [cedula, nombre, apellido]);
    res.json({
        message: 'Cliente Agregado con éxito',
        body: {
            user: {cedula, nombre, apellido}
        }
    })
}

module.exports = {
    agregarCliente,
    obtenerCliente
}
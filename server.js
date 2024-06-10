// server.js
const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

// Configuración de la base de datos
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'REGISTROS_NETFLIX',
};

// Conectar a la base de datos
const db = mysql.createPool(dbConfig);

// Ruta para el registro
app.post('/register', async (req, res) => {
    try {
        // Obtener los datos del formulario
        const { nombre, apellido, email, contrasena } = req.body;

        // Preparar la consulta para insertar el usuario
        const query = `INSERT INTO dataUsers (nombre, apellido, email, contrasena) VALUES (?, ?, ?, ?)`;

        // Ejecutar la consulta
        await db.execute(query, [nombre, apellido, email, contrasena]);

        // Devolver un mensaje de éxito
        res.status(201).send('Registro exitoso');
    } catch (error) {
        // Manejar el error
        console.error(error);
        res.status(500).send('Error al registrar');
    }
});

// Iniciar el servidor
app.listen(5001, () => {
    console.log('Servidor iniciado en el puerto 5001');
});
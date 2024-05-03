const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware para parsear el body de las peticiones
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurar la conexión a la base de datos MySQL
const connection = mysql.createConnection({
    host: '127.0.0.1', // Host de la base de datos
    port: '3306', // Puerto de la base de datos
    user: 'root', // Usuario de MySQL
    password: 'jeremy12345JL30', // Contraseña de MySQL (pon tu contraseña si la has configurado)
    database: 'Contacto' // Nombre de la base de datos
});

// Conectar a la base de datos MySQL
connection.connect(err => {
    if (err) {
        console.error('Error de conexión a MySQL:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Ruta POST para manejar el envío del formulario
app.post('/submitForm', (req, res) => {
    const { name, email, message } = req.body;

    // Insertar datos en la base de datos
    const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    connection.query(sql, [name, email, message], (error, results) => {
        if (error) {
            console.error('Error al insertar mensaje en la base de datos:', error);
            res.status(500).send('Error al enviar el mensaje');
        } else {
            console.log('Mensaje insertado correctamente en la base de datos');
            res.status(200).send('Mensaje enviado correctamente');
        }
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

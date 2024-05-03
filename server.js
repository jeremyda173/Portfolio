const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 3000;
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'jeremy12345JL30',
    database: 'Contacto',
    port: 3306
});

// Conexión a la base de datos
db.connect(err => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err);
    } else {
        console.log('Conexión exitosa a la base de datos MySQL');
    }
});

// Ruta POST para guardar datos en la base de datos
app.post('/guardarDatos', (req, res) => {
    const userData = req.body;

    console.log('Datos recibidos del cliente:', userData);

    // Insertar datos en la tabla 'Contactos' en la base de datos 'Contacto'
    const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [userData.name, userData.email, userData.message], (err, result) => {
        if (err) {
            console.error('Error al insertar datos en la base de datos:', err);
            res.status(500).send('Error interno del servidor');
        } else {
            console.log('Datos insertados en la base de datos');
            res.send('Datos recibidos y guardados correctamente.');
        }
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

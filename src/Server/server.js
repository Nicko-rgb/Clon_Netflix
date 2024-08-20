const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer'); //para enviar email
const crypto = require('crypto');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos
const db = mysql.createConnection({
    host: 'junction.proxy.rlwy.net',
    user: 'root',
    password: 'rRpADYvrNmsOgmJUAzrGTOqpHYDaUyyw',
    database: 'railway',
    port: 35548 // Asegúrate de especificar el puerto
});

// Establecer la conexión
db.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos MySQL establecida.');
});

// Ruta para registrar un nuevo usuario
app.post('/api/registro', (req, res) => {
    const { nombre, apellido, email, password } = req.body;

    // Verificar si el email ya existe
    const checkEmailQuery = 'SELECT * FROM Usuarios WHERE email = ?';
    db.query(checkEmailQuery, [email], (err, results) => {
        if (err) {
            console.error('Error al verificar email:', err);
            return res.status(500).send('Error al registrar usuario');
        }
        if (results.length > 0) {
            return res.status(409).send('Usuario con este email ya existe');
        }

        // Hashear la contraseña
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                console.error('Error al hashear la contraseña:', err);
                return res.status(500).send('Error al registrar usuario');
            }

            // Insertar nuevo usuario
            const query = 'INSERT INTO Usuarios (nombre, apellido, email, password) VALUES (?, ?, ?, ?)';
            db.query(query, [nombre, apellido, email, hash], (err, result) => {
                if (err) {
                    console.error('Error al registrar usuario:', err);
                    return res.status(500).send('Error al registrar usuario');
                }
                res.status(201).json({ id: result.insertId, nombre, apellido, email });
            });
        });
    });
});

// Ruta para iniciar sesión
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM Usuarios WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Error al iniciar sesión:', err);
            return res.status(500).send('Error al iniciar sesión');
        }

        if (results.length === 0) {
            return res.status(401).send('Credenciales incorrectas');
        }

        const user = results[0];

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error('Error al comparar contraseñas:', err);
                return res.status(500).send('Error al iniciar sesión');
            }

            if (!isMatch) {
                return res.status(401).send('Credenciales incorrectas');
            }

            // Si las credenciales son correctas
            res.json({ id: user.id, nombre: user.nombre, apellido: user.apellido, email: user.email });
        });
    });
});


// Configura el transportador de Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // o el servicio de correo que estés utilizando
    auth: {
        user: 'mancillanixon7@gmail.com',
        pass: 'aylt pjvp qivj rbrt' // Asegúrate de usar un método seguro para manejar las contraseñas
    }
});

// Ruta para enviar el enlace de restablecimiento de contraseña
app.post('/api/reset-password', (req, res) => {
    const { email } = req.body;

    // Verificar si el email existe en la base de datos
    const query = 'SELECT * FROM Usuarios WHERE email = ?';
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error('Error al verificar el email:', err);
            return res.status(500).send('Error al verificar el email');
        }

        if (results.length === 0) {
            return res.status(404).send('No se encontró un usuario con este correo electrónico');
        }

        // Generar un token único
        const token = crypto.randomBytes(20).toString('hex');

        // Guardar el token en la base de datos junto con la fecha de expiración
        const expirationDate = new Date(Date.now() + 3600000); // 1 hora en milisegundos
        const formattedExpirationDate = expirationDate.toISOString().slice(0, 19).replace('T', ' '); // Formato compatible con MySQL

        const insertQuery = 'INSERT INTO PasswordResetTokens (email, token, expires) VALUES (?, ?, ?)';
        db.query(insertQuery, [email, token, formattedExpirationDate], (err) => {
            if (err) {
                console.error('Error al guardar el token:', err);
                return res.status(500).send('Error al guardar el token');
            }

            // Enviar el correo electrónico con el enlace para restablecer la contraseña
            const mailOptions = {
                from: 'mancillanixon7@gmail.com',
                to: email,
                subject: 'Restablecimiento de contraseña CineHub',
                text: `Haz clic en el siguiente enlace para restablecer tu contraseña: http://localhost:3000/reset-password/${token}`
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error al enviar el correo:', error);
                    return res.status(500).send('Error al enviar el correo');
                }
                res.send('Se ha enviado un enlace para restablecer tu contraseña a tu correo electrónico.');
            });
        });
    });
});


// Ruta para restablecer la contraseña
app.post('/api/reset-password/:token', (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    // Verificar si el token es válido y no ha expirado
    const query = 'SELECT * FROM PasswordResetTokens WHERE token = ? AND expires > ?';
    db.query(query, [token, Date.now()], (err, results) => {
        if (err) {
            console.error('Error al verificar el token:', err);
            return res.status(500).send('Error al verificar el token');
        }

        if (results.length === 0) {
            return res.status(401).send('Token inválido o expirado');
        }

        // Actualizar la contraseña del usuario en la tabla de Usuarios
        const updateQuery = 'UPDATE Usuarios SET password = ? WHERE email = ?';
        const hashedPassword = bcrypt.hashSync(newPassword, 10); // Hashear la nueva contraseña
        db.query(updateQuery, [hashedPassword, results[0].email], (err) => {
            if (err) {
                console.error('Error al actualizar la contraseña:', err);
                return res.status(500).send('Error al actualizar la contraseña');
            }

            // Eliminar el token de la tabla de PasswordResetTokens
            const deleteQuery = 'DELETE FROM PasswordResetTokens WHERE token = ?';
            db.query(deleteQuery, [token], (err) => {
                if (err) {
                    console.error('Error al eliminar el token:', err);
                    return res.status(500).send('Error al eliminar el token');
                }
                res.send('Contraseña restablecida exitosamente');
            });
        });
    });
});

// Ruta para crear nueva contraseña
app.post('/api/new-password', (req, res) => {
    const { token, newPassword } = req.body;

    // Verificar si el token es válido y no ha expirado
    const query = 'SELECT * FROM PasswordResetTokens WHERE token = ? AND expires > ?';
    db.query(query, [token, Date.now()], (err, results) => {
        if (err) {
            console.error('Error al verificar el token:', err);
            return res.status(500).send('Error al verificar el token');
        }

        if (results.length === 0) {
            return res.status(401).send('Token inválido o expirado');
        }

        // Actualizar la contraseña del usuario en la tabla de Usuarios
        const updateQuery = 'UPDATE Usuarios SET password = ? WHERE email = ?';
        const hashedPassword = bcrypt.hashSync(newPassword, 10); // Hashear la nueva contraseña
        db.query(updateQuery, [hashedPassword, results[0].email], (err) => {
            if (err) {
                console.error('Error al actualizar la contraseña:', err);
                return res.status(500).send('Error al actualizar la contraseña');
            }

            // Eliminar el token de la tabla de PasswordResetTokens
            const deleteQuery = 'DELETE FROM PasswordResetTokens WHERE token = ?';
            db.query(deleteQuery, [token], (err) => {
                if (err) {
                    console.error('Error al eliminar el token:', err);
                    return res.status(500).send('Error al eliminar el token');
                }
                res.send('Contraseña restablecida exitosamente');
            });
        });
    });
});

// Ruta para actualizar el perfil del usuario
app.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, email } = req.body;

    // Verificar que los datos no estén vacíos
    if (!nombre || !apellido || !email) {
        return res.status(400).send('Todos los campos son obligatorios.');
    }

    const updateQuery = 'UPDATE Usuarios SET nombre = ?, apellido = ?, email = ? WHERE id = ?';
    db.query(updateQuery, [nombre, apellido, email, id], (err) => {
        if (err) {
            console.error('Error al actualizar el perfil:', err);
            return res.status(500).send('Error al actualizar el perfil');
        }
        res.send('Perfil actualizado con éxito');
    });
});

// Ruta para eliminar la cuenta del usuario
app.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;

    const deleteQuery = 'DELETE FROM Usuarios WHERE id = ?';
    db.query(deleteQuery, [id], (err) => {
        if (err) {
            console.error('Error al eliminar la cuenta:', err);
            return res.status(500).send('Error al eliminar la cuenta');
        }
        res.send('Cuenta eliminada con éxito');
    });
});

// Ruta para obtener todos los videos
app.get('/api/videos/cinehub', (req, res) => {
    const query = 'SELECT * FROM Videos';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error al obtener los videos' });
        }
        res.json(results); // Enviar los resultados como respuesta
    });
});

// Ruta para agregar un video a favoritos
app.post('/api/favorites', (req, res) => {
    const { userId, videoId } = req.body;

    // Validar que se recibieron ambos IDs
    if (!userId || !videoId) {
        return res.status(400).json({ error: 'userId y videoId son requeridos' });
    }

    const query = 'INSERT INTO Favoritos (usuario_id, video_id) VALUES (?, ?)';
    db.query(query, [userId, videoId], (err, result) => {
        if (err) {
            console.error('Error al insertar en Favoritos:', err);
            return res.status(500).json({ error: 'Error al agregar a favoritos' });
        }
        res.status(201).json({ message: 'Video agregado a favoritos', id: result.insertId });
    });
});

// Ruta para eliminar un video de favoritos
app.delete('/api/favorites/:userId/:videoId', (req, res) => {
    const { userId, videoId } = req.params;

    const query = 'DELETE FROM Favoritos WHERE usuario_id = ? AND video_id = ?';
    db.query(query, [userId, videoId], (err, result) => {
        if (err) {
            console.error('Error al eliminar de Favoritos:', err);
            return res.status(500).json({ error: 'Error al eliminar de favoritos' });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Favorito no encontrado' });
        }
        res.status(200).json({ message: 'Favorito eliminado correctamente' });
    });
});

// Ruta para agregar un video a la lista de reproducción
app.post('/api/lista-reproduccion', (req, res) => {
    const { userId, videoId } = req.body;

    // Verificar si el video ya está en la lista de reproducción
    const checkQuery = 'SELECT * FROM ListaReproduccion WHERE usuario_id = ? AND video_id = ?';
    db.query(checkQuery, [userId, videoId], (err, results) => {
        if (err) {
            console.error('Error checking for duplicates:', err);
            return res.status(500).json({ error: 'Error checking for duplicates' });
        }

        // Si el video ya existe, responder con un mensaje
        if (results.length > 0) {
            return res.status(400).json({ message: 'El video ya está en la lista de reproducción' });
        }

        // Si el video no existe, insertarlo
        const insertQuery = 'INSERT INTO ListaReproduccion (usuario_id, video_id) VALUES (?, ?)';
        db.query(insertQuery, [userId, videoId], (err, results) => {
            if (err) {
                console.error('Error inserting into ListaReproduccion:', err);
                return res.status(500).json({ error: 'Error inserting into ListaReproduccion' });
            }
            res.status(201).json({ message: 'Video añadido a la lista de reproducción' });
        });
    });
});

// Ruta para obtener los favoritos de un usuario
app.get('/api/favorites/:userId', (req, res) => {
    const { userId } = req.params;

    const query = 'SELECT video_id FROM Favoritos WHERE usuario_id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error al obtener favoritos:', err);
            return res.status(500).json({ error: 'Error al obtener los favoritos' });
        }

        // Extraer solo los IDs de los videos
        const favoriteIds = results.map(row => row.video_id);
        res.status(200).json(favoriteIds);
    });
});
//ruta para obtner video por id
app.get('/api/videos/cine/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM Videos WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error al obtener el video:', err);
            return res.status(500).json({ error: 'Error al obtener el video' });
        }
        res.status(200).json(results[0]); // Devolver el primer (y único) resultado
    });
});

//ruta para buscar los videos
app.get('/api/videos/search', (req, res) => {
    const searchTerm = req.query.q;
    const query = 'SELECT * FROM Videos WHERE titulo LIKE ?';
    db.query(query, [`%${searchTerm}%`], (err, results) => {
        if (err) {
            console.error('Error al buscar videos:', err);
            return res.status(500).json({ error: 'Error al buscar videos' });
        }
        res.json(results);
    });
});

//ruta para mostrar los videos vistos 
app.get('/api/playlist/:userId', (req, res) => {
    const { userId } = req.params;
    const query = 'SELECT video_id FROM ListaReproduccion WHERE usuario_id = ?';
    db.query(query, [userId], (err, results) => {
        if (err) {
            console.error('Error al obtener la lista de reproducción:', err);
            return res.status(500).json({ error: 'Error al obtener la lista de reproducción' });
        }
        const videoIds = results.map(row => row.video_id);
        res.status(200).json(videoIds);
    });
});

//ruta para obtener videos ramdom
app.get('/api/videos/random', (req, res) => {
    const count = parseInt(req.query.count) || 20; // Número de videos a devolver
    const query = 'SELECT * FROM Videos ORDER BY RAND() LIMIT ?';
    db.query(query, [count], (err, results) => {
        if (err) {
            console.error('Error al obtener videos aleatorios:', err);
            return res.status(500).json({ error: 'Error al obtener videos aleatorios' });
        }
        res.json(results);
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
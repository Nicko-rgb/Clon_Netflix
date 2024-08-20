const mysql = require('mysql');
const BaseDatos = require('./base_datos'); // Importar el archivo que contiene los datos

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cine_hub'
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos');

  // Insertar los videos en la tabla Videos
  BaseDatos.forEach((video) => {
    const query = 'INSERT INTO Videos (titulo, genero, descripcion, ano, url_video, url_imagen) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [video.titulo, video.genero, video.descripcion, video.ano, video.url, video.imagen], (err, result) => {
      if (err) throw err;
      console.log(`Video "${video.titulo}" insertado con ID: ${result.insertId}`);
    });
  });

  connection.end();
});
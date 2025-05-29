const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos SQLite
const db = new sqlite3.Database('./sugerencias.db', (err) => {
  if (err) return console.error(err.message);
  console.log('Conectado a la base de datos SQLite.');
});

// Crear tabla si no existe
db.run(`CREATE TABLE IF NOT EXISTS sugerencias (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT,
  jerga TEXT NOT NULL,
  significado TEXT NOT NULL
)`);

// Ruta para recibir sugerencias
app.post('/api/sugerencias', (req, res) => {
  const { nombre, jerga, significado } = req.body;
  db.run(
    'INSERT INTO sugerencias (nombre, jerga, significado) VALUES (?, ?, ?)',
    [nombre, jerga, significado],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ id: this.lastID });
    }
  );
});

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
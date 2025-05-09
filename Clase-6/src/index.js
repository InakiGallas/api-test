import express from 'express';
import studentRoutes from './routes/student.route.js'; // Importar las rutas de estudiantes
import path from 'path';
import { fileURLToPath } from 'url';

const app = express(); // Crear una instancia de express
const PORT = 8080; // Puerto donde se va a levantar el servidor
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Middleware para parsear el cuerpo de la peticion
app.use(express.json()); // Para parsear el cuerpo de la peticion en formato JSON
app.use(express.static(path.join(__dirname, '../public'))); // Para servir archivos estaticos desde la carpeta public
//realizar el envio o recibir informacion desde un formulario 
app.use(express.urlencoded({ extended: true })); 
//endpoints entidad student
app.use('/api', studentRoutes); // Definir la ruta base para las rutas de estudiantes

app.get('/', (req, res) => {
    console.log('Entró al GET /');
    res.send('Ruta raíz');
  });

//Server running

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`)); // Levantar el servidor en el puerto 8080
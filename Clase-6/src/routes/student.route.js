import express from 'express';
import  studentController  from '../controllers/student.controller.js';

const router = express.Router();

//Definicion de rutas de mi entidad "student"
// router + verbo + url + controlador
//get 
router.get('/students', studentController.getStudents); 
//post (CREAR)
router.post('/students', studentController.createStudent); // Crear un nuevo estudiante


export default router; // Exportar el router para usarlo en el servidor
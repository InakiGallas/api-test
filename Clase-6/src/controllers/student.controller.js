import studentService from '../services/student.service.js';

const getStudents = async (req, res) => {
    const data = await studentService.getStudents();
    res.send(data);
}

const createStudent = async (req, res) => {
    const newStudent = req.body; // Obtener el cuerpo de la peticion
    console.log("newStudent:", Object.keys(newStudent)) 
if(Object.keys(newStudent).includes("nombre") && Object.keys(newStudent).includes("nota") ){
    const data = await studentService.createStudent(newStudent); // Agregar el nuevo estudiante al array
    res.send(data); // Respuesta al cliente
} else{
    res.send("Faltan datos"); // Respuesta al cliente
}
}

export default {
    getStudents,
    createStudent
}
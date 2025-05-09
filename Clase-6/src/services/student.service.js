import studentModel from '../models/student.model.js';  // Importar el modelo de estudiantes
const getStudents = async () => {
    const data = await studentModel.getStudents();
    return data;
}

const createStudent = async (newStudent) => {
    const data = await studentModel.createStudent(newStudent); // Agregar el nuevo estudiante al array
    return data; // Respuesta al cliente
}




export default
{
    getStudents,
    createStudent
}
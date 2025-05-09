const students = [
    
    {id: 1, nombre: "Juan Perez", email: "juanperez@gmail.com", nota: 9},
    { id: 2, nombre: "Maria Lopez", email: "marialopez@gmail.com", nota: 7 },
    { id: 3, nombre: "Pedro Gonzalez", email: "PedroGonzalez@gmail.com", nota: 8 },
    { id: 4, nombre: "Ana Torres", email: "anat@gmail.com", nota: 6 },
]

const getStudents =  async () => {
    return await students;
}

const createStudent = async (newStudent) => {
    students.push(newStudent); // Agregar el nuevo estudiante al array  
    return await newStudent; // Respuesta al cliente
}

export default {
    getStudents,
    createStudent
}
        
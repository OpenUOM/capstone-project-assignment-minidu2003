const readStudents = async () => {
    const sql = `SELECT * FROM studentTable`;
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const readStudentInfo = async (id) => {
    const sql = `SELECT * FROM studentTable WHERE id = ${id}`;
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const addStudent = async (id, name, age, religion) => {
    const sql = `INSERT INTO studentTable (id, name, age, religion) VALUES (${id}, '${name}', ${age}, '${religion}')`;
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const updateStudent = async (name, age, religion, id) => {
    const sql = `UPDATE studentTable SET name='${name}', age=${age}, religion='${religion}' WHERE id=${id}`;
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
} 

const deleteStudent = async (id) => {
    const sql = `DELETE FROM studentTable WHERE id=${id}`;
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql)
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

const searchTeacherByName = async (searchText) => {
    // Implement search logic for teachers by name
    // Update the teacherData array for the teacher class
}

const searchStudentByName = async (searchText) => {
    // Implement search logic for students by name
    // Update the studentData array for the student class
}

module.exports = {
    readTeachers,
    readStudents,
    addStudent,
    addTeacher,
    deleteTeacher,
    deleteStudent,
    readStudentInfo,
    readTeacherInfo,
    updateStudent,
    updateTeacher,
    searchTeacherByName,
    searchStudentByName,
};

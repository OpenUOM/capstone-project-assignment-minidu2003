// Existing code...

// Function to read all student data
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

// Function to read the information of a specified student
const readStudentInfo = async (id) => {
    const sql = `SELECT * FROM studentTable WHERE id = ?`;
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

// Function to add a student
const addStudent = async (id, name, age, religion) => {
    const sql = `INSERT INTO studentTable (id, name, age, religion) VALUES (?, ?, ?, ?)`;
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id, name, age, religion])
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

// Function to update details of a specific student
const updateStudent = async (name, age, religion, id) => {
    const sql = `UPDATE studentTable SET name = ?, age = ?, religion = ? WHERE id = ?`;
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [name, age, religion, id])
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

// Function to delete a specified student
const deleteStudent = async (id) => {
    const sql = `DELETE FROM studentTable WHERE id = ?`;
    return new Promise((resolve, reject) => {
        knex_db
            .raw(sql, [id])
            .then((data) => {
                resolve(data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

// Existing code...

// Search function for teacher and student classes
const search = async (searchText) => {
    // Implement the search logic for both teacherData and studentData arrays
    // Update teacherData and studentData arrays based on the search results
    // You can use filter or any other appropriate method for searching
    // Ensure that the function name 'search' remains unchanged
}

// Existing code...

module.exports = {
    // Existing exports...
    readStudents,
    readStudentInfo,
    addStudent,
    updateStudent,
    deleteStudent,
    search
};

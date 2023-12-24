import dbConnection from '../database/db.js';

export const StudentDocuments = async (req, res) => {
    try {
        const connection = await dbConnection();

        // Access the uploaded files from req.files
        const uploadedFiles = req.files;
        const {RollNo} = req.params;

        // Assuming you have a table named StudentDocuments
        const insertQuery = 'INSERT INTO StudentDocuments (RollNo, file_name, file_path) VALUES (?, ?, ?)';

        // Create an array to store all promises for database inserts
        const insertPromises = [];

        Object.keys(uploadedFiles).forEach((key) => {
            uploadedFiles[key].forEach((file) => {
                const values = [RollNo, file.fieldname, file.path];
                const insertPromise = new Promise((resolve, reject) => {
                    connection.query(insertQuery, values, (error, results) => {
                        if (error) {
                            reject(error);
                        } else {
                            resolve(results);
                        }
                    });
                });
                insertPromises.push(insertPromise);
            });
        });

        // Wait for all database inserts to complete before responding to the client
        Promise.all(insertPromises)
            .then(() => {
                res.json({ message: 'Files uploaded and database updated successfully' });
            })
            .catch((error) => {
                console.error('Error inserting into database:', error);
                res.status(500).json({ error: 'Internal Server Error' });
            });

        // Release the connection back to the pool
        connection.release();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

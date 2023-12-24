import { fileURLToPath } from 'url';
import { dirname } from 'path';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Middleware to handle file uploads
const fileUploadMiddleware = upload.fields([
  { name: 'photo' },
  { name: 'sign' },
  { name: 'adhimg' },
  { name: 'marktn' },
  { name: 'marktw' },
]);

export default fileUploadMiddleware;

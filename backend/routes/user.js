import express from 'express';
import { getAllUsers, getSuggestedUsers, getUserByUsername, logout, onOffStatus, updateProfile, uploadFile,   } from '../controllers/userController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

const uploadDir = path.resolve('uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    const uniqueName = `${baseName}-${Date.now()}${ext}`;
    cb(null, uniqueName);
  }
});

export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

const router = express.Router();

router.get('/', verifyToken, getAllUsers); 
router.get('/:username', verifyToken, getSuggestedUsers);
router.get('/status/:username', verifyToken, onOffStatus); 
router.get('/find/:username', verifyToken, getUserByUsername);
router.post("/logout", verifyToken, logout);
router.put("/update/:username", verifyToken, updateProfile);
router.put('/upload',verifyToken, upload.single('file'), uploadFile);

export default router;

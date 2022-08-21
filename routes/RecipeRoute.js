import express from 'express'
import{
    getRecipe,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
} from '../controllers/RecipesController.js'
import { verifyToken } from '../middleware/VerifyToken.js';
const router = express.Router();
router.get('/recipes',  getRecipe);
router.get('/recipes/:id',   getRecipeById);
router.post('/recipes', verifyToken, createRecipe);
router.patch('/recipes/:id',  updateRecipe);
router.delete('/recipes/:id',  deleteRecipe);

export default router;
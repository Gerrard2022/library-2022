const express = require('express');
const authController = require('../controllers/authControllers');
const studentsController = require('../controllers/studentsController');
const { requireAuth } = require('../middleware/authMiddleware');
const router = express.Router();


router.get('/signup', authController.signup_get);
router.post('/signup', authController.signup_post);
router.get('/login', authController.login_get);
router.post('/login', authController.login_post);
router.get('/logout', authController.logout_get);




  router.get('/students', requireAuth,  studentsController.student_log);
  router.get('/add-student', studentsController.learner_get);
  router.post('/add-student', studentsController.learner_post);
  router.delete('/students/:id', studentsController.learner_delete);

  router.get('/add-book', studentsController.book_get);
  router.post('/add-book', studentsController.book_post);
  router.get('/books', studentsController.book);
  router.delete('/books/:id', studentsController.book_delete);

module.exports = router;
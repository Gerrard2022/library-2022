const adding = require('../models/add-student');
const books  = require('../models/books');

// handle duplicate errors

const handleErrors = (err) => {
    let errors = { ID: ''};

    if(err.code === 11000){
        errors.ID = 'This book number is already taken';
        return errors;
    }  

}


const student_log =  (req, res) => {

    adding.find().sort({ createdAt: -1 })
    .then((result) => {
     res.render('students', { log: result });
    })
    .catch((err) => {
      console.log(err);
    })
  
  }



  const learner_get = (req, res) => {
    res.render('adding');
  }



  const learner_post =  (req, res) => {

     const learner = new adding(req.body);
     learner.save()
     .then((result) => {
       res.redirect('/students');
     })
     .catch((err) => {
        // const errors = handleErrors(err);
        // res.status(401).json({ errors });
        console.log(err)

     });
  }

const learner_delete = (req, res) => {
    const id = req.params.id;
  
    adding.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/students' })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const book_get =  (req, res) => {

    res.render('bookShelf');
  
  }

  const book_post =  (req, res) => {

    const book = new books(req.body);
    book.save()
    .then((result) => {
      res.redirect('/books');
    })
    .catch((err) => {
       console.log(err);

    });
 }

 const book = (req, res) => {

  books.find().sort({ createdAt: -1 })
  .then((result) => {
   res.render('books', { log: result });
  })
  .catch((err) => {
    console.log(err);
  })

}

const book_delete = (req, res) => {
  const id = req.params.id;

  books.findByIdAndDelete(id)
  .then((result) => {
    res.json({ redirect: '/books' })
  })
  .catch((err) => {
    console.log(err);
  });
}


module.exports = {
     student_log,
     learner_get,
     learner_post,
     learner_delete,
     book_get,
     book_post,
     book,
     book_delete
 }
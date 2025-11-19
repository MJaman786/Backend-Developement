const express = require('express');
const router = express.Router();

// import userModel
const User = require('../model/userModel');


// display student data
router.get('/', async (req, res) => {
    try {
        const data = await User.find();
        const obj = {
            user: data
        }
        console.log(data);
        res.render('dashboard.ejs', obj);
        console.log(` - Data Fetched Successful`);
    } catch (error) {
        console.error(error);
    }
});

// student Registration form 
router.get('/registration_form', async (req, res) => {
    try {
        res.render('studentForm.ejs');
        console.log(` - User Registered Successfull`);
    } catch (error) {
        console.log(error);
    }
})

// save data to db
router.post('/savedata', async (req, res) => {
    try {
        const data = req.body;
        const createUser = new User(data);
        createUser.save();
        res.redirect('/');
        console.log(' - User Saved in DB');
    } catch (error) {
        console.log(error);
    }
})

// delete user 
router.get('/deleteUser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await User.findByIdAndDelete(id);
        res.redirect('/');
        console.log(' - User Deleted Successfull');
    } catch (error) {
        console.log(error);
    }
})

// edit user 
router.get('/editUser/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findById(id);
        // res.send(data);
        const obj = {
            user: data
        }
        res.render('editForm.ejs', obj);
        console.log('Editing User');
    } catch (error) {
        console.log(error);
    }
})

router.post('/updateStudent/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await User.findByIdAndUpdate(id, data)
        res.redirect('/');
        console.log(` - User Updated Successfull`);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;
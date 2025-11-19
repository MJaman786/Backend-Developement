const userRoutes = (app, User) => {
    // READ STUDENTS
    // home route (show all students)
    app.get('/', async (req, res) => {
        try {
            const data = await User.find();
            res.render('showStudents.ejs', { user: data });
            console.log(`Reading Successfull`);
        } catch (error) {
            console.log(`Failed to Read`);
            console.log(error);
        }
    })

    // home route (add students)
    app.get('/register-Student', (req, res) => {
        res.render('studentForm.ejs');
    })

    // CREATE STUDENT
    app.post('/saveStudent', async (req, res) => {
        try {
            const data = req.body;
            // res.send(data);
            console.log(data);

            const createUser = new User(data);
            await createUser.save();

            res.redirect('/');

        } catch (error) {
            console.log(`Failed to Reguster User`);
            console.log(error);
            res.send(`
                <script> 
                    alert("Failed to register user.")
                    window.location.assign('/register-Student');
                </script>    
            `)
        }
    })

    // EDIT STUDENT
    app.get('/editUser/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const {
                _id,
                fullName, 
                email, 
                contactNumber, 
                course, 
                batchCode, 
                remarks
            } = await User.findById(id);

            let pevData = {
                _id: _id,
                fullName: fullName, 
                email: email, 
                contactNumber: contactNumber, 
                course: course, 
                batchCode: batchCode, 
                remarks: remarks
            }

            res.render('editStudents.ejs', {user: pevData});

            console.log('Edit Successfull');
        } catch (error) {
            console.log('Failed to Edit');
            console.log(error);
        }        
    })

    app.post('/updateStudent/:id', async (req, res) => {
        try {
            const id = req.params.id;
            const data = req.body;
            await User.findByIdAndUpdate(id, data);
            res.redirect('/')
            console.log(`Update Successfull`);
        } catch (error) {
            console.log('Failed to update');
            console.log(error);
        }
    })

    // DELETE STUDENT
    app.get('/deleteUser/:id', async (req, res) => {
        try {
            const id = req.params.id;
            await User.findByIdAndDelete(id);
            res.redirect('/')
            console.log('Deleted Successfully');
        } catch (error) {
            console.log('Failed to Delete');
            console.log(error);
        }
    })
}

module.exports = userRoutes;
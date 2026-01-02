import express from 'express';
import Student from '../model/UserSchema.js';
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = await Student.find();
        res.json(data);
    } catch (error) {
        console.log(error);
    }
})

// router.get('/:id', async (req, res) => {
//     try {
//         const id = req.params.id;
//         const data = await Student.findById(id);
//         res.json(data);
//     } catch (error) {
//         console.log(error);
//     }
// })

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await Student.findByIdAndDelete(id);

        res.json({
            success: true,
            message: 'User deleted successfully',
            deletedUser,
        });

    } catch (error) {
        res.status(500).json({
            message: 'Delete Failed'
        });
    }
});

// create new user
router.post('/add-user', async (req, res) => {
    try {

        const newStudent = req.body;
        await Student.create(newStudent)
        res.json({
            success: true,
            message: 'User Created Successfully'
        })
    } catch (error) {
        console.error(error);

        res.status(400).json({
            success: false,
            message: error.message,
        });
    }

})

router.get('/edit-user/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = await Student.findById(id);
        res.json({
            data,
            success: true,
            message: 'Data fetched Successfull'
        })
    } catch (error) {
        res.json({
            success: false,
            message: 'Failed to Fetch User'
        })
    }
})

router.put('/edit-user/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const studentData = req.body;
        await Student.findByIdAndUpdate(id, studentData);
        res.status(200).json({
            success: true,
            message: 'User Has Updated.'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
})

export default router;
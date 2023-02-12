/**
 * GET /api/product
 * 
 * 
 */
const express = require('express');
const router = express.Router();
router.get('/', async (req, res) => {
   try {
     res.json({msg: 'Product route'});
   } catch (error) {
        console.error(error);
       return res.status(500).send('Server Error');
     }
});

module.exports = router;
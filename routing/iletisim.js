import express from "express";

const router = express.Router();

router.get('/' , (req , res) => {
    res.send('iletisim sayfası');
});
router.get('/:rul' , (req , res) => {
    res.send('iletisim sayfası' + req.params.rul);
});

export default router;
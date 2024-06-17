import express from "express";
const router = express.Router();

router.get('/test', (req,res)=>{
    res.send("its works");
})
router.post('/test', (req,res)=>{
    res.send("its works");
})
router.put('/test', (req,res)=>{
    res.send("its works");
})
router.delete('/test', (req,res)=>{
    res.send("its works");
})
export default router;
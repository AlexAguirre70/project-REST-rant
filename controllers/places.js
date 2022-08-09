const router = require('express').Router()

router.get('/',(req,res)=>{
    res.send('/places/index')
})
module.exports = router


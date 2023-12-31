const express = require('express');
const router = express.Router();
const multer = require('multer');
const { getindex  , createslideshow ,getslideshow ,editslideshow, createuser, loginuser,createproperty,getproperty
,getpropertybyid,updateproperty,deleteproperty,schedule } = require('../controller/authcontroller');

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get('/', getindex);

router.get('/getslideshow', getslideshow);//done
router.post('/createslideshow',upload.single('image'), createslideshow);//done
router.put('/editslideshow/:id',upload.single('image'), editslideshow);//done



router.post('/register', createuser) //done
router.post('/login', loginuser)//done

router.post('/createproperty',upload.single('image'), createproperty);//done without auth
router.get('/getproperty', getproperty);//done
router.get('/getpropertybyid/:id', getpropertybyid);//done
router.put('/updateproperty/:id', upload.single('image'), updateproperty);//done
router.delete('/deleteproperty/:id', deleteproperty);//done
router.post('/schedule', schedule);





module.exports = router;
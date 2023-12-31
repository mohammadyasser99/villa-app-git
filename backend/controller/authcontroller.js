const Property = require('../models/property')
const Slideshow = require('../models/slideshow')
const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
require('dotenv').config();



const transporter = nodemailer.createTransport({
    service: 'gmail',
    
    auth: {
        user: 'mohamedy1999.my7753@gmail.com',
        pass: process.env.GOOGLE_PASS
    }
});

const getindex = (req, res) => {
    res.send('Hello World!');
}

const createslideshow = async(req, res) => {

    const imageData = req.file.buffer.toString('base64');

  
 



Slideshow.create({
    country: req.body.country,
    city: req.body.city,
    caption: req.body.caption,
    image: imageData
}) .then((slideshow) => {
    
    res.status(200).json({message: 'Slideshow created successfully'})

}
).catch((err) => {
    res.json(err)
})

}


const getslideshow = (req, res) => {
    Slideshow.find().then((slideshow) => {
        res.status(200).json(slideshow)
    }).catch((err) => {
        res.json(err)
    })
}

const editslideshow = (req, res) => {

    const imageData = req.file.buffer.toString('base64');
    Slideshow.findByIdAndUpdate(req.params.id, {
        country: req.body.country,
        city: req.body.city,
        caption: req.body.caption,
        image: imageData
    }) .then((slideshow) => {
        
        res.status(200).json({message: 'Slideshow updated successfully'})
    
    }
    ).catch((err) => {
        res.json(err)
    })
}

const deleteslideshow = (req, res) => {
    Slideshow.findByIdAndDelete(req.params.id).then((slideshow) => {
        res.status(200).json({message: 'Slideshow deleted successfully'})
    }).catch((err) => {
        res.json(err)
    })
}


const createproperty = (req, res) => {

    const imageData = req.file.buffer.toString('base64');

    Property.create({
        country: req.body.country,
        city: req.body.city,
        image: imageData,
        address: req.body.address,
        type: req.body.type,
        floor: req.body.floor,
        price: req.body.price,
        bedrooms: req.body.bedrooms,
        bathrooms: req.body.bathrooms,
        parking: req.body.parking,
        area: req.body.area,
        description: req.body.description,
        // location: req.body.location
    }) .then((property) => {
        
        res.status(200).json({message: 'Property created successfully'})
    
    }
    ).catch((err) => {
        res.json(err)
    })
}

const getproperty = (req, res) => {
    Property.find().then((property) => {
        res.status(200).json(property)
    }).catch((err) => {
        res.json(err)
    })
}

const getpropertybyid = (req, res) => {
    Property.findById(req.params.id).then((property) => {
        res.status(200).json(property)
    }).catch((err) => {
        res.json(err)
    })
}

const updateproperty = (req, res) => {
    Property.findByIdAndUpdate(req.params.id, req.body).then((property) => {
        res.status(200).json(property )
    }).catch((err) => {
        res.json(err)
    })
}

const deleteproperty = (req, res) => {
    Property.findByIdAndDelete(req.params.id).then((property) => {
        res.status(200).json({message: 'Property deleted successfully'})
    }).catch((err) => {
        res.json(err)
    })
}



const createuser =async (req, res) => {

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password,salt)


    User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedpassword,
        phonenumber: req.body.phonenumber,

    
    }) .then((user) => {
        
        res.status(200).json({message: 'User created successfully'})
    
    }
    ).catch((err) => {
        res.json(err)
    })
}

const getuser = (req, res) => {
    User.find().then((user) => {
        res.status(200).json(user)
    }).catch((err) => {
        res.json(err)
    })
}

const loginuser = (req, res) => {

    User.findOne({email: req.body.email}).then((user) => {
        if(user){
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if(err){
                    res.json(err)
                }
                if(result){
                    const token = jwt.sign({email: user.email, id: user._id}, 'mohamed90', {expiresIn: '1h'})
                    res.status(200).json({message: 'Login successful', token})
                }
                else{
                    res.json({message: 'Password incorrect'})
                }
            })
        }
        else{
            res.json({message: 'User not found'})
        }
    })
    
}


const schedule =(req,res) => {
    const username = req.body.username;
    const email = req.body.email;
    const date = req.body.date;
    const time = req.body.time;
  
    const options = {
        from: 'mohamedy1999.my7753@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: `welcome ${username}`,
        html: `<h1>welcome to villa.com</h1> <p>you have reserve an appointment at ${date} ${time}</p>`
        
    
    };

    transporter.sendMail(options, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ');
        }
      });

      res.status(200).json({message: 'Email sent successfully'})


}

module.exports = {
    getindex,
    createslideshow,
    getslideshow,
    createproperty,
    getproperty,
    getpropertybyid,
    updateproperty,
    deleteproperty,
    editslideshow,
    deleteslideshow,
    createuser,
    getuser,
    loginuser,
    schedule


}

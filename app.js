const fs = require('fs');
const express = require('express');


const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/A1_SRC`))


// app.get('/', (req, res) => {
//    res
//    .status(200)
//    .json({message:'hello from the server side'})
// })

// app.post('/', (req, res) => {
//    res
//    .status(200)
//    .json({message:'You can post to this url'})
// });


app.get('/api/users', (req, res) => {
  const users = JSON.parse(fs.readFileSync(`${__dirname}/user_data/signup.json`));

  res.status(200).json({
      status:'success',
      result:users.length,
      data:{
          users
      }
    })
});

app.post('/api/signup', (req, res) => {
    // console.log(req.body);
    const users = JSON.parse(fs.readFileSync(`${__dirname}/user_data/signup.json`));
    const email = req.body.userDetails.emailId
    console.log(email)
    const foundEmail = users.some(el => el.emailId === email);
    if(!foundEmail){
        const newId = users[users.length -1].id + 1;
        const newUser = Object.assign({id:newId}, req.body);
    
        users.push(newUser);
        fs.writeFile(`${__dirname}/user_data/signup.json`,JSON.stringify(users), err => {
            res.status(201).json({
                status:'Success',
                
            })
        } )
    }

    
})


app.post('/api/login', (req, res) => {

    const users = JSON.parse(fs.readFileSync(`${__dirname}/user_data/signup.json`));
    const email = req.body.loginDetails.emailId
    const password = req.body.loginDetails.password;
    const foundEmail = users.some(el => el.emailId === email);
    const foundPassword = users.some(el => el.password === password);
    if(foundEmail === true && foundPassword === true){
        console.log('found')
    }
    res.status(200).json({
        message:'success',
        data:'logged in successfully'
    })
}) 



const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}`)
});





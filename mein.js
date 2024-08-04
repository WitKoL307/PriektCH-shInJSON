var jwt = require('jsonwebtoken');
var token = jwt.sign( {foo:{
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022
  }} , 'shhhhh');
  console.log(typeof(token))
var decoded = jwt.verify(token, 'shhhhh');


function coder(el){
   
    let token = jwt.sign({foo:el}, 'shhhhh')
    return token
}

function decoder(el){

    let decoded = jwt.verify(el, 'shhhhh');
    return decoded
}

module.exports = [coder,decoder]
  

 



console.log(decoded.foo) // bar
console.log(jwt)
console.log(token)

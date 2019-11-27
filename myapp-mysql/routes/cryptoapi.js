var crypto = require('crypto');

function myEncode(mypass)
{
  var mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
  var mystr = mykey.update(mypass, 'utf8', 'hex') 
  mystr += mykey.final('hex');
  return mystr
}

function myDecode(myencode_pass)
{
  var mykey = crypto.createDecipher('aes-128-cbc', 'mypassword');
  var mystr = mykey.update(myencode_pass, 'hex', 'utf8')
  mystr += mykey.final('utf8');
  return mystr
}

module.exports={myEncode:myEncode,myDecode:myDecode}

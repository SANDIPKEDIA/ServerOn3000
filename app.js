const express=require('express');
const app= express();
app.get('/',function(req,res){
    res.send('Hello WORLD on port 3000!');

});
app.listen(3000,function(){
    console.log('Created a Server which is run on port 3000');
});
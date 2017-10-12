// allows you send sms using the nexmo platform
//get your keys from nexmo.com

let Nexmo = require('nexmo');

function nexmo(){
    this.nexmo = {}
    this.apiKey;
    this.apiSecret;
}

nexmo.prototype.setCredentials = (apiKey, apiSecret)=>{
    this.apiKey = apiKey;
    this.apiSecret = apiSecret;
    this.nex = new Nexmo({
        apiKey : this.apiKey,
        apiSecret : this.apiSecret
    })
}



nexmo.prototype.sendSms = (from,toPath,message)=>{
    
    // toPath = file absolute path

            this.nex.message.sendSms(from, to, message, (err,responseData)=>{
        if(err){
            console.log('err',err.message);
            return;
        }
    });
   

}



module.exports = nexmo;
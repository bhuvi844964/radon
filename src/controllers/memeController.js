let axios = require("axios");

let allMeme = async function (req, res) {
  
    try {
      var options = {
        method: "get",
        url: `https://api.imgflip.com/get_memes`,
      };
      let result = await axios(options);
      console.log(result);
      let data = result.data
      res.status(200).send({ msg: data ,status : true });
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: err.message });
    }
  };
let memo = async function (req, res) {
  
    try {
      
  

      var options = {
        method: "post",
        url: `https://api.imgflip.com/caption_image?template_id=131087935&text0=gaurav&text1=prakash&username=chewie12345 & password=meme@123`,
      };
      let result = await axios(options);
      console.log(result);
      let data = result.data
      res.status(200).send({ msg: data ,status : true });
    } catch (err) {
      console.log(err);
      res.status(500).send({ msg: err.message });
    }
  };

  module.exports.allMeme = allMeme;
  module.exports.memo = memo;
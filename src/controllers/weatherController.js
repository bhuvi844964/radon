let axios = require("axios");

let getWeatherOfLondan = async function (req, res) {
  let city = req.query.q;
  let key = req.query.appid;
  console.log(`query param are :${city}  ${key}`);
  try {
    var options = {
      method: "get",
      url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    // console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let sortcities = async function (req, res) {
  try {
    let cities = [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Kolkata",
      "Chennai",
      "London",
      "Moscow",
    ];
    let CityObjArr = [];

    for (i = 0; i < cities.lenght; i++) {
      let obj = { city: cities[i] };
      let resp = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=49e13c329b2bf9dad6bbf86594bbcb2c`
      );

      obj.temp = resp.data.main.temp;
      CityObjArr.push(obj);

      let shorted = CityObjArr.sort(function (a, b) {
        return a.temp - b.temp;
      });
      console.log(shorted);

      res.send({ status: true, data: shorted });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

module.exports.getWeatherOfLondan = getWeatherOfLondan;
module.exports.sortcities = sortcities;

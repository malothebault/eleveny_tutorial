const axios = require("axios");

/*
module.exports = async () => {
  const result = await axios.get("https://picsum.photos/400");
  console.log(result.config.url)
  return result.config.url;
};
*/

module.exports = async () => {
  const result = await axios.get("https://coffee.alexflipnote.dev/random.json");
  console.log(result.data.file)
  return result.data.file;
};


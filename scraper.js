const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeData(name) {
  try {
    const response = await axios.get(`https://www.example.com/search?q=${name}`);
    const $ = cheerio.load(response.data);

    // Extract relevant information from the page using jQuery-like selectors
    const result = $('.result-container').text();

    return result;
  } catch (error) {
    console.error('Error:', error.message);
    return null;
  }
}

module.exports = scrapeData;

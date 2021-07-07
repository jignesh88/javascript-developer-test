const { httpGet } = require('./mock-http-interface');

const SUCCESS = 'Arnie Quote';
const FAIL = 'FAILURE';

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  // return results;
  let quotes = [];

  const all  = urls.map(item => httpGet(item));

  const result = await Promise.all(all)

  result.forEach(item => {
    
    const result = JSON.parse(item.body);

    let output = {};
    
    output[item['status'] === 200 ? SUCCESS : FAIL ] = result.message;

    quotes.push(output);

  });
  
  return quotes;
};

module.exports = {
  getArnieQuotes,
};

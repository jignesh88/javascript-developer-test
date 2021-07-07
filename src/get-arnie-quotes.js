const { httpGet } = require('./mock-http-interface');

const getArnieQuotes = async (urls) => {
  // TODO: Implement this function.
  // return results;
  let quotes = [];

  const all  = urls.map(item => httpGet(item));

  const result = await Promise.all(all)

  result.forEach(item => {
    
    const result = JSON.parse(item.body);

    let output = {};
    
    output[item['status'] === 200 ? 'Arnie Quote' : 'FAILURE'] = result.message;

    quotes.push(output);

  });
  
  return quotes;
};

module.exports = {
  getArnieQuotes,
};

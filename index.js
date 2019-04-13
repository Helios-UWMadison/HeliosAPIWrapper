var request = require('request');
var csvtojson = require('csvtojson');

function extractParametersFromEvent (event) {
  let parameters = event.queryStringParameters;
  console.log(parameters);
  return {
    'from': parameters.from,
    'to': parameters.to,
    'interval': parameters.interval
  }
  /*
  return {
    'from': '2019-03-30',
    'to': '2019-03-31',
    'interval': '3600'
  }
  */
};

exports.handler = function (event, context, callback) {
  let parameters = extractParametersFromEvent(event);

  request.post({
    url: 'http://sunpeak.solarlog-web.net/api',
    form: {
      username: '814201486',
      password: 'waxakobo',
      function: 'getMinVars',
      mode: 'inverter_combined',
      solarlog: '8914',
      from: parameters.from,
      to: parameters.to,
      interval: parameters.interval,
      format: 'csv'
    }
  }, function (error, response, body) {
    console.log(error);
    console.log(response);
    console.log(body);
    //console.log('Status Code: ', response.statusCode);
    /*
    if (!error) {
      jsonResponse = convertCSVToJSON(body);
      console.log(jsonResponse);
    }
    */
  });
};

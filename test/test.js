var assert = require('assert');

describe ('API Param Extraction', function () {
  it ('should have all parameters: from, to, interval', function () {

    exports.handler('', '');
    assert.ok('Good job');
  })
});


/**
 * 

curl -d 'username=814201486&password=waxakobo&function=getMinVars&mode=inverter_combined&solarlog=8914&from=2019-03-01&to=2019-03-31&interval=300&format=csv' http://sunpeak.solarlog-web.net/api 

http://sunpeak.solarlog-web.net/api?username=814201486&password=waxakobo&function=getMinVars&mode=inverter_combined&solarlog=8914&from=2019-01-01&to=2019-01-31&interval=300&format=csv

http://sunpeak.solarlog-web.net/api?
*/
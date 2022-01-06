export function generateJson() {
    var credentials;
        try{
            credentials = require('../test-data/account.json');
        } catch(err) {
            console.log(err);
            console.log ('Couldn\'t load the inputJsonData file. Please ensure that ' +
                'you have the inputJsonData.json in subfolder ./test-data/account.json ' +
                'in the same folder as the tests');
            process.exit();
        }
  
    return credentials;
  }
const Snack = require("./snacks");
const snackData = require("./snacks.json");
/*const Company = require("./companies");
const companyData = require("./companies.json");*/

Snack.remove({})
  .then(() => {
    return Snack.collection.insert(snackData);
  })
  .then(() => {
    process.exit();
  });

/*Company.remove({})
  .then(() => {
    return Company.collection.insert(companyData);
  })
  .then(() => {
    process.exit();
  });
*/

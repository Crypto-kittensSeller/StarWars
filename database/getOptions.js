const charController = require('./characterController');

async function getOptions(fields) {
  const allChars = await charController.getAllCharacters(fields);

  const options = {};
  const params = fields.split(' ');
  params.forEach(param => {
    if (!options.param) {
      options[param] = [];
    }
  });

  allChars.forEach(char => {
    params.forEach(param => {
      if (char[param] && paramValidation(options, char[param], param)) {
        options[param].push(char[param]);
      }
    });
  });

  return options;
}

function paramValidation(options, charParam, param) {
  if (charParam === 'n/a' || charParam === 'unknown' || charParam === 'none')
    return false;
  if (
    options[param].find(confirmedParam => {
      return confirmedParam === charParam;
    })
  ) {
    return false;
  } else return true;
}

module.exports = getOptions;

const moment = require('moment');
const { SafeString } = require('handlebars');

moment.locale('ru'); // set russian locale globally

const birthDate = (birth) => {
  const out = [];
  if (birth && Object.keys(birth).length) {
    if (birth.place) {
      out.push(`<div> Родился в ${birth.place}`);
    }
    if (birth.place && birth.state) {
      out.push(`, ${birth.state}`);
    }
    const year = birth.date ? moment(birth.date.toString(), ['YYYY-MM-DD']).format('YYYY') : '';
    if (year && birth.place && birth.state) {
      out.push(` в ${year}</div>`);
    } else if (year && (!birth.place || birth.state)) {
      out.push(`<div> Родился в ${year}</div>`);
    }
  }

  return new SafeString(out.join(''));
};

module.exports = { birthDate };

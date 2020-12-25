const formatStatsErrors = (stats) => {
  const result = stats;
  switch (result.errors.length) {
    case 0:
      return result;
    case 1:
      if (result.errors[0].hasOwnProperty("message")) {
        result.errors = [result.errors[0].message];
      } else {
        return result;
      }
      break;
    default:
      result.errors = reduceErrors(result.errors);
  }
  return result;
};

const reduceErrors = (errors) => {
  const LAST_INDEX = errors.length - 1;
  let result = "";
  errors.forEach((err, index) => {
    if (err.hasOwnProperty("message")) {
      result += err.message;
      result += index !== LAST_INDEX ? "\n" : "";
    }
    if (typeof err === "string") {
      return (result += err);
    }
  });
  return [result];
};

module.exports = {
  formatStatsErrors,
}

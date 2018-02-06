
const CheckStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

const ParseJSON = (response) => {
  return response.json();
}
const GetRollNumbers = (cb) => {
  return fetch(`api/rollnumbers?q=3`, {
    accept: "application/json"
  })
    .then(CheckStatus)
    .then(ParseJSON)
    .then(cb);
}

const RollService = { GetRollNumbers };

export default RollService;

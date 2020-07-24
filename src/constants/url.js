const SERVICE_KEY = process.env.REACT_APP_SERVICE_KEY;

const URL = {
    COVID_STATE: `${process.env.REACT_APP_COVID_STATE}?${SERVICE_KEY}`,
}

export default URL;
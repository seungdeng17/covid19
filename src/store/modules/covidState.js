import convert from 'xml-js';
import request from 'request';
import URL from '@constants/url';

const { COVID_STATE } = URL;

request.get(COVID_STATE, (err, res, body) => {
    if (err) {
        console.log(`err => ${err}`);
    }
    else {
        if (res.statusCode === 200) {
            const result = body;
            const xmlToJson = JSON.parse(convert.xml2json(result, { compact: true, spaces: 4 }));
            console.log(xmlToJson.response.body.items);
        }
    }
})

const covieState = () => {
    return null;
}

export default covieState;
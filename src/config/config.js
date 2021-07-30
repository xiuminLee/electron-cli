

let baseUrl = 'https://factoryapi.sdspod.com';
switch (process.env.REACT_APP_SECRET_ENV) {
    case 'dev':
        baseUrl = 'https://factoryapidev.sdspod.com';
        break;
    case 'test':
        baseUrl = 'https://factoryapitest.sdspod.com';
        break;
    case 'sim':
        baseUrl = 'https://factoryapisim.sdspod.com';
        break;
    case 'prod':
        baseUrl = 'https://factoryapi.sdspod.com';
        break;
    default:
        baseUrl = 'https://factoryapi.sdspod.com';
}

export const SERVER_URL = baseUrl;
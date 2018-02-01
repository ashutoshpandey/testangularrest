angular.module('main').constant('CONSTANTS', {
    SERVER: {
        ROOT: '/',
    },
    API_URLS: {
        USER: 'user/',
    },
    RESPONSE_CODES: {
        HTTP_STATUS_OK: 200,
        HTTP_STATUS_ERROR: 500,
        HTTP_STATUS_FORBIDDEN: 403,
        HTTP_STATUS_NOT_FOUND: 404,
    },
    REQUEST_METHODS: {
        GET: 'get',
        PUT: 'put',
        POST: 'post',
        DELETE: 'delete'
    }
});
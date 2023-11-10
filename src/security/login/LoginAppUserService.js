import { request } from '../../utils/AxiosHelper';

const LoginAppUserService = (username) => {
    const apiEndpoint = '/users/login';

    return request('POST', apiEndpoint, { username })
        .then((response) => response)
        .catch((error) => {
            if (error.response) {
                return error.response;
            } else {
                return error.message;
            }
        });
}

export default LoginAppUserService;
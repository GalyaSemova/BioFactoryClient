import { request } from '../../utils/AxiosHelper';

const RegistrationAppUserService = (user) => {
    const apiEndpoint = '/users/register';


    return request('POST', apiEndpoint, user)
    .then((response) => response)
    .catch((error) => {
      if (error.response) {
        return error.response;
      } else {
        return error.message;
      }
    });
}

export default RegistrationAppUserService;
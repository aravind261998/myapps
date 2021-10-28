import axios from 'axios';

const LOGIN_API_BASE_URL = 'http://localhost:9102/rest/users';
class LoginService{


    validateAdmin(emailId,password){
        return axios.get(LOGIN_API_BASE_URL+'/api/v1/Contact/login/'+emailId+'/'+password);
    }

    validateUser(emailId,password){
        return axios.get(LOGIN_API_BASE_URL+'/api/v1/admin/login/'+emailId+'/'+password);
    }
    validate(user){
        return axios.post(LOGIN_API_BASE_URL+'/validate',user);
    }

}
export default new LoginService()
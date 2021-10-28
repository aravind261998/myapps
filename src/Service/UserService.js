import axios from 'axios';
const USERS_API_BASE_URL="http://localhost:9102/rest/users";
class UserService{
    ValidateLogin(){
        return axios.get(USERS_API_BASE_URL);
    }
    createUser(adduser){
        return axios.post(USERS_API_BASE_URL+'/adduser',adduser);
    }
    getUserById(userId){
        return axios.get(USERS_API_BASE_URL+'/'+ userId);
    }
    updateUser(user,userId){
        return axios.put(USERS_API_BASE_URL+'/'+userId,user);
    }
    

    }
    export default new UserService()
import axios from "axios";

const ProfileService = {
    registeruser:  function registeruser(formdata:any):Promise<any> {
    
        const data = {
            "phoneNumber": formdata['phonnumber'],
            "userName": "string",
            "isAuthenticated": true,
            "firstName": "string",
            "lastName": "string",
            "fatherName": "string",
            "grandFatherName": "string",
            "dateOfBirth": "2022-12-28",
            "passportNumber": "string",
            "faragirNumber": "string",
            "password": "string",
            "email": "user@example.com",
            "nationalityId": 0,
            "genderId": 0,
            "operatorId": 0
        };
    
        return  axios.post('http://localhost:5021/api/v1/UserManagment/AddUser',data,{
            
        });
    },
    login:  function Loginuser(formdata:any):Promise<any> {
       
         const data = {
            "verifycode": formdata['verifycode'],
            "mobailnumber": formdata['phonnumber']
         };
     
         return  axios.post('http://localhost:5021/api/auth/VerifyCode',data,{
             
         });
     }
}
 export default ProfileService;



 
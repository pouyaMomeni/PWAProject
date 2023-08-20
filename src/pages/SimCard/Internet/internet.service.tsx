import axios from "axios";

const InternetService = {
    BuyDirectCharge:  function BuyCharge(formdata:any):Promise<any> {
    
        const data = {
            "operatorType": formdata['operatorid'],
        };
    
        return  axios.post('http://localhost:5021/api/Internet/ListPackagesInternet',data,{
            
        });
    },
    PaymentPackageWeb:  function packagepay(formdata:any):Promise<any> {
    
        const data = {
            "amount": formdata['totalamount'],
            "cellNumber": formdata['phonnumber'],
            "operatorType":formdata['operatorid'],
            "bundleId": formdata['bundleId'],
            "requestId": 0
        };
        
        return  axios.post('http://localhost:5021/api/Internet/BuyPackageWeb',data,{
            
        });
    },

}
 export default InternetService;



 
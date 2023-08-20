import axios from "axios";

const ChargeService = {
    BuyDirectCharge:  function BuyCharge(formdata:any):Promise<any> {
    
        const data = {
            "totalAmount": formdata['totalamount'],
            "cellNumber": formdata['phonnumber'],
            "operatorType": formdata['operatorid'],
            "simcardtype": 0,
            "paybill": 0
        };
    
        return  axios.post('http://localhost:5021/api/charge/BuyCharge',data,{
            
        });
    },

}
 export default ChargeService;



 
/**
 * @desc Three-part price separator function.
 * @instruction Inputs are subject to prices that must be separated into three parts. 
 */

export function priceSeparator(num) {
    if(!num){
        return 0
    }else if(typeof num !== 'string'){
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }else {
        return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}


export const formatNumberWithCommas = (value = "") => {
    value += "";
    let x = value.split(".");
    let x1 = x[0];
    let x2 = x.length > 1 ? "." + x[1] : "";
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      // eslint-disable-next-line no-useless-concat
      x1 = x1.replace(rgx, "$1" + "," + "$2");
    }
    return x1 + x2;
  };

// return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

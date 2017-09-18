/**
 * Created by hy1 on 2017/9/15.
 */
function isNumeric(value, m, n) {
    if (isNaN(value)){
        return false;
    }

    var regex;
    if (m==null && n==null) {

        regex = new RegExp("^[+-]?([0-9]*\\.?[0-9]*)$");
    }
    else if (m==null && n!=null) {

        regex = new RegExp("^[+-]?([0-9]*\\.?[0-9]{0,"+n+"})$");
    }
    else if (m!=null && n==null) {

        regex = new RegExp("^[+-]?([0-9]{0,"+m+"}(\\.[0-9]*)?)$");
    }
    else {

        regex = new RegExp("^[+-]?(([0-9]{0,"+m+"}\\.?)|(\\.[0-9]{0,"+n+"})|([0-9]{0,"+m+"}\\.[0-9]{0,"+n+"}))$");
    }

    return regex.test(value);
}

function isInteger(value, m){
    var regex;
    if (m == null) {
        regex = /^[0-9]*$/;
    }
    else {
        regex = new RegExp("^([0-9]{0,"+m+"})$");
    }
    return regex.test(value);
}
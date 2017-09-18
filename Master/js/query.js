/**
 * Created by hy1 on 2017/9/13.
 */
var provs= ["45","23","42","0","65%","$89412","$894120","$89412","$89412","$89412","$89412","$444","微交易"];
var opts="<td>"+
    provs.join("</td><td>")
    +"</td>";
//设置id为selProvs的元素内容为opts
selProvs.innerHTML=opts;
console.log(opts);

var more=["45","23","42","0","65%","$89412","$894120","$89412","$89412","$89412","$89412","$444","微交易"];
var up="<td>"+more.join("</td><td>")+"</td>";
$(".order").html(up);
console.log(up);
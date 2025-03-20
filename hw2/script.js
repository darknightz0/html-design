 /**@type {HTMLInputElement}*/
var inpName;
 /**@type {HTMLInputElement}*/
var inpBir;
 /**@type {HTMLInputElement}*/
var inpId;
 /**@type {HTMLSelectElement}*/
var inpCity;
var v,gender;
var list={
    台北市:["A",10],
    台中市:["B",11],
    基隆市:["C",12],
    台南市:["D",13],
    高雄市:["E",14],
    新北市:["F",15],
    宜蘭縣:["G",16],
    桃園市:["H",17],
    新竹縣:["J",18],
    苗栗縣:["K",19],
    台中市:["L",20],
    南投縣:["M",21],
    彰化縣:["N",22],
    雲林縣:["P",23],
    嘉義縣:["Q",24],
    台南市:["R",25],
    高雄市:["S",26],
    屏東縣:["T",27],
    花蓮縣:["U",28],
    台東縣:["V",29],
    澎湖縣:["X",30],   
    陽明山管理局:["Y",31],
    金門縣:["W",32],
    連江縣:["Z",33],
    嘉義市:["I",34],
    新竹市:["O",35]      
}

onload=()=>{
inpName =document.getElementById("name");
inpBir =document.getElementById("bir");
inpId=document.getElementById("idn");
inpCity=document.getElementById("city");
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.onkeydown=() => {
        input.setCustomValidity("");
        input.reportValidity();
    }
    input.onblur=() => {
        input.setCustomValidity("");
        input.reportValidity();
    }
    ;
    input.required=true;
});
document.getElementById("file").required=false;
 /**@type {HTMLSelectElement} */
    Object.getOwnPropertyNames(list).forEach(n=>{
        let e=document.createElement("option");
        e.textContent=n;
        city.appendChild(e);
    })
    
}
var regName1=/^[\u4e00-\u9fff]{2,6}$/;

function test(){
    var res;
    var name=inpName.value;
    var bir=inpBir.value;
    var id=inpId.value;
    var city=inpCity.options[inpCity.selectedIndex].textContent;
    
    if(!regName1.test(name)){
        inpName.setCustomValidity("不能有空格及其他符號 只能有2~6中文");
         inpName.reportValidity();
        return false;
    }
    else if(new Date(bir).getTime()>Date.now()){
        inpBir.setCustomValidity("生日不可是未來日期");
        inpBir.reportValidity();
        return false;
    }
    else if((res=testId(id,city))[0]){
        inpId.setCustomValidity(res[1]);
        inpId.reportValidity();
        return false;
    }
    else{
        localStorage.setItem("name",name);
        localStorage.setItem("birthday",bir);
        localStorage.setItem("id",id);
        localStorage.setItem("city",city);
        localStorage.setItem("gender",(gender==1)?"男":"女");
        const reader = new FileReader();

        reader.onload = e =>{
            let res = e.target.result; 
            localStorage.setItem("icon",res);
;        };
        if(document.getElementById("file").value.length)
           reader.readAsDataURL(document.getElementById("file").files[0]);
        else
            localStorage.setItem("icon","");
        document.location.href="resource/page/info/main.html";
         return false;
   }
}
var regId0=/^[A-Z0-9]+$/;
var regId1=/^[A-Z0-9]{10}$/;
var regId2=/^[A-Z][0-9]{9}$/;
/**@param {string} id  */
function testId(id,city){
    gender=document.querySelector('input[name="gender"]:checked').value;
    if(!regId0.test(id))
        return [true,"不可其他符號 只能A-Z 0-9"];
    else if(!regId1.test(id))
        return [true,"長度須為10"];
    else if(!regId2.test(id))
        return [true,"字首需大寫英文"];
    else if(list[city][0]!=id.charAt(0))
        return [true,"字首與縣市不匹配"];
    else if(gender!=id.charAt(1))
        return [true,"性別不匹配"];
    else if(!idFormat(id,city))
        return [true,"無效身分證"];
    else
    return false;
}
/**
 * @param {string} id 
 */
function idFormat(id,city){
    var n=id.substring(1,9);
    var head=(list[city][1]).toString();
    var sum=0;
    n=head[1]+n;
    for(let i=0;i<n.length;i++){
        sum=sum+parseInt(n[i])*(9-i);
    }
    sum+=parseInt(head[0]);
    sum=(10-(sum%10))%10;
    return sum==parseInt(id[9]);
}

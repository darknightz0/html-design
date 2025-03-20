onload=()=>{
    var name=localStorage.getItem("name");
    var day=new Date(localStorage.getItem("birthday"));
    var id=localStorage.getItem("id");
    var city=localStorage.getItem("city");
    var gender=localStorage.getItem("gender");
    var file=localStorage.getItem("icon");
    /**@type {HTMLDivElement} */
    var divImg=document.getElementById("divImg");
    /**@type {HTMLParagraphElement} */
    var p;
    p=document.createElement("p");
    p.textContent=name;
    p.className="over";
    p.style.width="37%";
    p.style.left="18%";
    p.style.top="38%";
    divImg.appendChild(p);

    p=document.createElement("p");   
    p.textContent=(day.getFullYear()-1911)+" "+(day.getMonth()+1)+" "+day.getDate();
    p.className="over";
    p.style.fontSize="80%";
    p.style.width="29%";
    p.style.left="24%";
    p.style.top="63.2%";
    divImg.appendChild(p);
    
    day=new Date(Date.now());
    p=document.createElement("p");
    p.textContent=(day.getFullYear()-1911)+" "+(day.getMonth()+1)+" "+day.getDate();
    p.className="over";
    p.style.fontSize="7px";
    p.style.width="16%";
    p.style.left="21.5%";
    p.style.top="85.7%";
    divImg.appendChild(p);

    p=document.createElement("p");   
    p.textContent=city;
    p.className="over";
    p.style.fontSize="8px";
    p.style.width="8%";
    p.style.left="43.5%";
    p.style.top="84%";
    divImg.appendChild(p);

    p=document.createElement("p");
    p.textContent=gender;
    p.className="over";
    p.style.width="30%";
    p.style.fontSize="90%";
    p.style.left="86%";
    p.style.top="63%";
    divImg.appendChild(p);

    p=document.createElement("p");
    p.textContent=id;
    p.className="over";
    p.style.textAlignLast="none";
    p.style.width="30%";
    p.style.color="rgb(226, 6, 94)";
    p.style.fontSize="90%";
    p.style.left="69%";
    p.style.top="78%";
    divImg.appendChild(p);
    /**@type {HTMLImageElement} */
    var icon=document.createElement("img");
    icon.className="over";
    if(file.length==0)
        if(gender=="男")
            icon.src="resource/image/defIconm.jpg";
        else
         icon.src="resource/image/defIconw.jpg";
    else{
        icon.src=file;
    }
    icon.style.width="2.7cm";
    icon.style.height="3.7cm";
    icon.style.left="67%";
    icon.style.top="2%";
    divImg.appendChild(icon);
/** 
    console.log(name);
    console.log(day);
    console.log(id);
    console.log(city);
    console.log(gender);*/
}
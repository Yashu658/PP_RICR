function reg(){
    const a= document.getElementById("name").value;
    const b= document.getElementById("email").value;
    const c= document.getElementById("password").value;
    const d= document.getElementById("gender").value;
    const e= document.getElementById("dob").value;
    
    const g= document.querySelector("input[name='gender']:checked").value;
    const q=[]
     document.querySelectorAll("input[name='doc']:checked").forEach(element => {q.push(element.value)});
    console.log(a,b,c,d,e,g,q);

    const ck= document.getElementById("accept").checked;
    if(!ck)
    {
        alert("please acceot the t&c");
        return;
    }
    
}
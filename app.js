var list=document.getElementById("list");


function todoadd(){
    var todo_item=document.getElementById("todo-item");
    
    //div#1
    var editbtn=document.createElement("i");
    editbtn.setAttribute("class","fad fa-edit edit-icon")
    editbtn.setAttribute("onclick","edititem(this)")
    var delbtn=document.createElement("i");
    delbtn.setAttribute("class","fad fa-times-circle del-icon")
    delbtn.setAttribute("onclick","delitem(this)")
    var div1=document.createElement("div");
    div1.setAttribute("class","col-3 text-right")
    div1.appendChild(editbtn)
    div1.appendChild(delbtn);

    // div2
    var li_text=document.createTextNode(todo_item.value)
    var checkbtn=document.createElement("i");
    checkbtn.setAttribute("class","fad fa-check-circle check-icon hidden")
    checkbtn.setAttribute("onclick","confirmedit(this)");
    var div2=document.createElement("div");
    div2.setAttribute("class","col-8 pt-1 text-left");
    div2.appendChild(li_text);
    div2.appendChild(checkbtn);

    // div3,4
    var div3=document.createElement("div");
    div3.setAttribute("class","row border-bottom pt-3 col-7");
    div3.appendChild(div2)
    div3.appendChild(div1);
    var div4=document.createElement("div");
    div4.setAttribute("class","row")
    div4.appendChild(div3);

    //li
    var li=document.createElement("li")
    li.appendChild(div4);
    list.appendChild(li);
    todo_item.value="";

}
function delitem(e){
    var deletor=e.parentNode.parentNode.parentNode.parentNode;
    deletor.remove();

}
function delall(){
    list.innerHTML="";
}
function edititem(e){
    console.log(e.parentNode.parentNode.childNodes[0].childNodes[0].nodeValue);
    console.log(e.parentNode.parentNode.childNodes[0].childNodes);
    var text=e.parentNode.parentNode.childNodes[0].childNodes[0];
    text.remove();

    console.log(e.parentNode.parentNode.childNodes[0].childNodes)
    var edit=document.createElement("input");
    edit.setAttribute("type","text");
    edit.setAttribute("value",text.nodeValue);
    console.log(e.parentNode.parentNode.childNodes[0]);
    var parent=e.parentNode.parentNode.childNodes[0]
    parent.insertBefore(edit,parent.childNodes[0])
    console.log(parent.childNodes[0])
    parent.childNodes[1].className="fad fa-check-circle check-icon";
}
function confirmedit(e) {
    console.log(e)
    e.className+=" hidden";
    console.log(e.parentNode.firstChild.value)
    var inpval=e.parentNode.firstChild.value;
    e.parentNode.firstChild.remove();
    var newChild=document.createTextNode(inpval)
    e.parentNode.insertBefore(newChild,e.parentNode.firstChild)
}

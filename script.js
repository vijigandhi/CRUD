"use strict"

var edit_restore=null

let div1=document.createElement("div")
div1.setAttribute("class","container1")

let pcode=document.createElement("p");
pcode.innerText="Product code";

let input1=document.createElement("input")
input1.setAttribute("id","input1")
input1.setAttribute("type","number")

let pname=document.createElement("p");
pname.innerText="Product Name";

let input2=document.createElement("input")
input2.setAttribute("id","input2")

let qty=document.createElement("p");
qty.innerText="Quantity";

let input3=document.createElement("input")
input3.setAttribute("id","input3")

let price=document.createElement("p");
price.innerText="Price";

let input4=document.createElement("input")
input4.setAttribute("id","input4")

let innercontainer=document.createElement("div")
innercontainer.className="innercontainer"

let submit_btn=document.createElement("button")
submit_btn.innerText="submit"
submit_btn.setAttribute("id","submit_btn")

let reset_btn=document.createElement("button")
reset_btn.innerText="reset"
reset_btn.setAttribute("id","reset_btn")

let div2=document.createElement("div")
div2.setAttribute("class","container2")


let table=document.createElement("table")
table.setAttribute("id", "table"); 

let th1=document.createElement("th")
th1.innerText="product code"

let th2=document.createElement("th")
th2.innerText="product name"

let th3=document.createElement("th")
th3.innerText="Quantity"

let th4=document.createElement("th")
th4.innerText="price"




submit_btn.addEventListener("click",submitFunction)
function submitFunction()
{
    if(input1.value==0 || input2.value==0 || input3.value==0 || input4.value==0)
    {
        alert("please enter the valid product")
    }
    else
    {
        if(edit_restore==null)
        {
            // var innertable=document.createElement("table")
            // innertable.id="innertable"

            var tr=document.createElement("tr")
            tr.id="tablerow"

            var td1=document.createElement("td")
            td1.innerText=input1.value;

            var td2=document.createElement("td")
            td2.innerText=input2.value;

            var td3=document.createElement("td")
            td3.innerText=input3.value;

            var td4=document.createElement("td")
            td4.innerText=input4.value;

            var edit=document.createElement("button")
            edit.innerText="edit"
            edit.id="edit"

            var del=document.createElement("button")
            del.innerText="delete"
            del.id="delete"
        
            input1.value=""
            input2.value=""
            input3.value=""
            input4.value=""

        edit.addEventListener("click",function(){
                editFunction(this);
            })
        del.addEventListener("click",deleteFunction)

        function deleteFunction()
        {
            if(confirm("If you want to delete the row permanently....?"))
            {
                del.parentElement.remove();
            }
        }
        // table.append(innertable)
        table.append(tr)
        tr.append(td1,td2,td3,td4,edit,del)
        }
        else{

            updateRecord();
            
        }

    }
}
    
    function editFunction(element)
    {
        // console.log(element.parentElement);
        // console.log(element.parentElement.childNodes[0].innerText);
        // console.log(element.parentElement.childNodes[1]);
        // console.log(element.parentElement.childNodes[2]);
        edit_restore = element.parentElement.childNodes; 
        input1.value=edit_restore[0].innerHTML;
        input2.value=edit_restore[1].innerHTML
        input3.value=edit_restore[2].innerHTML
        input4.value=edit_restore[3].innerHTML

    }
      
    
    reset_btn.addEventListener("click",resetFunction)

    function resetFunction()
    {
        input1.value=""
        input2.value=""
        input3.value=""
        input4.value=""
    }

    function updateRecord()
    {
        // console.log(edit_restore[0].innerHTML)
        edit_restore[0].innerHTML = input1.value;
        edit_restore[1].innerHTML = input2.value;
        edit_restore[2].innerHTML = input3.value;
        edit_restore[3].innerHTML = input4.value;

        input1.value=""
        input2.value=""
        input3.value=""
        input4.value=""
        
        edit_restore=null
    }
    
document.body.append(div1,div2)
div1.append(pcode,input1,pname,input2,qty,input3,price,input4)
div1.append(innercontainer)
innercontainer.append(submit_btn,reset_btn)

div2.append(table)
table.append(th1,th2,th3,th4)







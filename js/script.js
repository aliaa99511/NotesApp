
/* 
<div class="col">
    <div class="inffo">
        <img src="images/edit.png">
        <img src="images/trash.png">
    </div>
    <textarea rows="6"></textarea>
</div>*/



var butt=document.getElementById("butt");
var mygrid=document.getElementById("my-grid");



butt.addEventListener("click",function(){

    var mycol=document.createElement("div");
    mycol.setAttribute("class","col");

    var inffo=document.createElement("div");
    inffo.style="width: 100%;display: flex;background-color: #22c2bf;justify-content: flex-end;padding-top: 2px;padding-bottom: 2px;";
    mycol.appendChild(inffo);

    var firstimg=document.createElement("img");
    firstimg.setAttribute("src","images/edit.png");
    firstimg.style="width: 21px;margin-right: 6px;height: 21px;cursor: pointer;";
    inffo.appendChild(firstimg);
    
    var secondtimg=document.createElement("img");
    secondtimg.setAttribute("src","images/trash.png");
    secondtimg.style="width: 21px;margin-right: 6px;height: 21px;cursor: pointer;";
    inffo.appendChild(secondtimg);

    var texta=document.createElement("textarea");
    texta.style="width: 98%; font-size: 18px;color: #495057";
    texta.setAttribute("rows","8");
    mycol.appendChild(texta);

    mygrid.appendChild(mycol);

    

    secondtimg.addEventListener("click",function(){
        mycol.remove();
    })


    firstimg.addEventListener("click",function(){
        texta.classList.toggle("disabl");
    })


});







/*
    var item=document.createElement("div");
    item.classList.add("item");
    item.innerHTML=`
        <div class="inffo">
            <img id="firstt" src="images/edit.png">
            <img id="secnd" src="images/trash.png">
        </div>
        <textarea rows="8"></textarea>
    `

    mygrid.appendChild(item);


    var itemm=document.getElementsByClassName("item");
    document.getElementById("secnd").addEventListener("click",function(){

        for(var i=0; i<itemm.length; i++){
            itemm[i].remove();

        }
    })

    
    document.getElementById("firstt").addEventListener("click",function(){
        document.querySelector("textarea").classList.toggle("disabl");
    })*/
function myfuncion(){
	var x = document.getElementById("menunav");
if(x.className==="menu"){
	x.className += "responsive";
}
else{x.className = "menu"}
}

/***Boton para cerrar imagen grande*/
window.onload=function(){
    
    var bto=document.getElementById("cerrar");
   
    bto.onclick=cerrarImgGde;
    function cerrarImgGde(){
        document.getElementById("modal").style.display="none";
    }
    
    var img=document.getElementsByClassName("imagenes");
    for(var i=0; i<=img.length-1; i++){
    img[i].onclick=mostrarImgGde;
    }
    function mostrarImgGde(){
        var src1 = this.getAttribute("src");
        document.getElementById("modal").style.display="block";
        document.getElementById("img2").src=src1;
        
        
        
    }
    
    
    

    
    
}




    var x=document.getElementById("s1");
    var y=document.getElementById("s2");
	document.getElementById("in1").addEventListener("click",function(){
	
		myFunction(x,y);
	});
	document.getElementById("in2").addEventListener("click",function(){
		myFunction(y,x);
	});
     function myFunction(x,y)
     {
     	let a,b;
     	if(true){
        a=x.selectedIndex;



        
        b=x.options;
     	let option = document.createElement("option");
     	option.text=b[a].text;
     	y.add(option);
     	x.remove(x.selectedIndex);
        }
     }
	
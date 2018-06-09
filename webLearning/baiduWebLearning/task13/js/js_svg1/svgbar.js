function svgBar(){
	var contain=document.querySelector("#contain");
	var bsvg=document.createElementNS("http://www.w3.org/2000/svg","svg");
	bsvg.setAttribute("version","1.1");
	bsvg.setAttribute("baseProfile","full");
	bsvg.setAttribute("width","600");
	bsvg.setAttribute("height","410");
	var data=new Array();
	for(let i=0;i<sourceData[0].sale.length;i++){
		data.push(sourceData[0].sale[i])
	};
	var dataSort=data.sort((a,b)=>a-b);
	var dataMax=dataSort[dataSort.length-1];
	var dataSource=sourceData[0].sale;
	for(i=0;i<data.length;i++){
		var brect=document.createElementNS("http://www.w3.org/2000/svg","rect");
		brect.setAttribute("width","30");
		brect.setAttribute("height",dataSource[i]);
		brect.setAttribute("x",40*i+40);
		brect.setAttribute("y",dataMax-dataSource[i]);
		brect.setAttribute("style","fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)"); 
		bsvg.appendChild(brect);
	};
	var axis=document.createElementNS("http://www.w3.org/2000/svg","polyline");
		axis.setAttribute("points","25 5,30 0,35 5,30 0,30 270,560 270,555 265,560 270,555 275");
		axis.setAttribute("style","fill:none;stroke:black;stroke-width:2");
		bsvg.appendChild(axis);
		
	contain.appendChild(bsvg);

}
	
	
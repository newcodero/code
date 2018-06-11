// JavaScript Document
function localRead(source){
	if(localStorage.sourcedata==undefined){
		return source;
	}else{	
		let str=localStorage.sourcedata;
		let strArr=str.split(' ,');
		let strsArr=[];
		let sourceData1={};
		for(let i=0;i<strArr.length;i++){
			strsArr[i]=strArr[i].split('|');
		};
		strsArr[8][2]=strsArr[8][2].slice(0,-1);
		let saleArr=[];
		for(let i=0;i<strsArr.length;i++){
			saleArr[i]=[];
			let s=strsArr[i][2].split(',');
			for(let j=0;j<s.length;j++){
				saleArr[i].push(s[j]);
			};
		};
		
		for(let i=0;i<strsArr.length;i++){
			sourceData1[i]={
				"product":strsArr[i][0],
				"region":strsArr[i][1],
				"sale":saleArr[i]
			};
		};
		return sourceData1;
	}
};
function localSave(){
	let sourceData1={};
	let saleArr=[];
	let trs=document.querySelectorAll('#tbody-show tr');
	
	for(let i=0;i<trs.length;i++){
		saleArr[i]=[];
		for(let k=2;k<14;k++){
			saleArr[i].push(trs[i].children[k].innerHTML);	
		};
	};
	
	for(let i=0;i<trs.length;i++){
		sourceData1[i]={
						"product":trs[i].children[0].innerHTML,
						"region":trs[i].children[1].innerHTML,
						"sale":saleArr[i]
						};
	};
	
	let arr=[];
	for(let i=0;i<9;i++){
		arr.push(sourceData1[i].product+'|'+sourceData1[i].region+'|'+sourceData1[i].sale+' ');
	};
	localStorage.sourcedata=arr;
	
};
	
	
	
	
	

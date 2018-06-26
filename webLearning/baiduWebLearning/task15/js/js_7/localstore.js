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
	[objArr,regionArr1,regionArr2,regionArr3]=arrData(sourceData);
	let sourceData1={0:{}};
	let saleArr=[];
	let trs=document.querySelectorAll('#tbody-show tr');
	let pro=[];
	let reg=[];
	let num=checkedNum();
	for(let i=0;i<trs.length;i++){
		if((num[0]==1)&&(num[1]>1)){//区域商品判断
			pro[i]=trs[i].children[1].innerHTML;
			reg[i]=trs[i].children[0].innerHTML;
		}else{
			pro[i]=trs[i].children[0].innerHTML;
			reg[i]=trs[i].children[1].innerHTML;
		};
		saleArr[i]=[];
		for(let k=2;k<14;k++){
			saleArr[i].push(trs[i].children[k].innerHTML);	
		};
	};
	
	for(let i=0;i<9;i++){
		if(i<trs.length){//添加表格信息
			sourceData1[i]={
				"product":pro[i],
				"region":reg[i],
				"sale":saleArr[i]
			};
		}else{//添加表格未显示的信息
			for(let m in objArr){
				for(let n in objArr[m]){
					let index=0;
					for(let k in sourceData1){
						if((objArr[m][n].product==sourceData1[k].product)&&(objArr[m][n].region==sourceData1[k].region)){
							index++;
						};
					};
					if(!index){
						sourceData1[i]={
							"product":objArr[m][n].product,
							"region":objArr[m][n].region,
							"sale":objArr[m][n].sale
						};
					};
				};	
				
			};
		};
		
	};
	let arr=[];
	for(let i=0;i<9;i++){
		arr.push(sourceData1[i].product+'|'+sourceData1[i].region+'|'+sourceData1[i].sale+' ');
	};
	localStorage.sourcedata=arr;
};
	
	
	
	
	

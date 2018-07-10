function getHash(){
	return location.hash;
};
function status(){
	var arr=['a','b','c','d','e','f','g','h','i','j','k'];
	let boxs=document.querySelectorAll('#checkbox input');
	let nhash=getHash();
	for(let x=0;x<arr.length;x++){
		var ind=nhash.indexOf(arr[x]);
		if(ind!==-1){
			var y=x;	
			var indn=ind;
		}
	};
	let str='';
	if(indn!==-1){
		if(indn==1){
			str=nhash.slice(indn+1);
		}else{
			str=nhash.slice(0,indn);
		};
	};
	for(let i=0;i<boxs.length;i++){
		if((i!==3)&&(i!==7)){
			boxs[i].value=i;
			let ind1=nhash.indexOf(i);
			if((boxs[i].checked)&&(ind1==-1)){
				location.hash+=i;
			};
			if((!(boxs[i].checked))&&(ind1!==-1)){
				location.hash=nhash.slice(0,ind1)+nhash.slice(ind1+1);
			};
		};
	};
};
function addCheck(){
	let nhash=getHash();
	let boxs=document.querySelectorAll('#checkbox input');
	for(let i=0;i<boxs.length;i++){
		let ind=nhash.indexOf(i);
		if(ind!==-1){
			boxs[i].checked=true;
		}else{
			if(nhash.length>2){
				boxs[i].checked=false;
			};
		};
	};11
};
function boxClick(){
	let boxs=document.querySelectorAll('#checkbox input');
	for(let i=0;i<boxs.length;i++){
		boxs[i].addEventListener('click',function(){
			setTimeout("status()",300);
		});
	};
};

function thInput(){
	var arr=['a','b','c','d','e','f','g','h','i','j','k'];
	let nhash=getHash();
	let localData=localStorage.thdata;
	//取出hash中的数据记录标签
	for(let x=0;x<arr.length;x++){
		var ind=nhash.indexOf(arr[x]);
		if(ind!==-1){
			var y=x;	
			var indn=ind;
		}
	};
	if(y!==undefined && localData !== undefined){//console.log(localData);console.log(index1);console.log(index2);
		var index1=localData.indexOf(arr[y]);
		var index2=localData.indexOf(arr[y+1]);
		if(indn!==-1){
			let trs=document.querySelectorAll('#tbody-show tr');
			let num=checkedNum();
			for(let i=0;i<trs.length;i++){	
				if((num[0]==1)&&(num[1]>1)){//区域商品判断
					pro=trs[i].children[1].innerText;
					reg=trs[i].children[0].innerText;
				}else{
					pro=trs[i].children[0].innerText;
					reg=trs[i].children[1].innerText;
				};
				let localData=localStorage.thdata;
				if(index2==-1 || index2==0){
					localData=localData.substring(index1);	
				}else{
					localData=localData.substring(index1,index2-1);
				};
				let m,n,data;
				for(j=0;j<4;j++){
					let ind0=localData.indexOf(',');
					localData=localData.slice(0,ind0)+localData.slice(ind0+1);
					let ind1=localData.indexOf(',');
					if((j==0)&&(pro==localData.slice(ind0,ind1))){
						m=1;
					};
					if((j==1)&&(reg==localData.slice(ind0,ind1))){
						n=1;
					};
					if(j==2){
						data=localData.slice(ind0,ind1);
					};
					if(j==3){
						let v=localData.slice(ind0);				
						if((m==1)&&(n==1)){
							trs[i].children[v].innerHTML=data;
					 	};
					};
					
				};
			};
		};
	};
};
function thHash(trs,i,j){
	let obj={
		a:"",
		b:"",
		c:"",
		d:"",
		e:"",
		f:"",
		g:"",
		h:"",
		i:"",
		j:"",
		k:"",
	};
	var arr=['a','b','c','d','e','f','g','h','i','j','k'];
	let nhash=getHash();
	let num=checkedNum();
	if((num[0]==1)&&(num[1]>1)){//区域商品判断
		pro=trs[i].children[1].innerText;
		reg=trs[i].children[0].innerText;
	}else{
		pro=trs[i].children[0].innerText;
		reg=trs[i].children[1].innerText;
	};
	let data=trs[i].children[j].innerText;
	for(let x=0;x<arr.length;x++){
		var ind=nhash.indexOf(arr[x]);
		if(ind!==-1){
			var ind1=ind;
			if(x==arr.length-1){
				var y=0;
			}else{
				var y=x;	
				var indd;
				if(localStorage.thdata !== undefined){
					do{//判断本地localStorage是否保存有
						y++;
						indd=localStorage.thdata.indexOf(arr[y]);
					}while(indd!==-1);
				};
				if(y==arr.length){y=x+1};
			};
		};
	};
	if(ind1==undefined){
		var y=0;
	}else{
		location.hash=nhash.slice(0,ind1)+nhash.slice(ind1+1);
	};
	location.hash+=arr[y];
	if(localStorage.thdata!==undefined){
		let index1=localStorage.thdata.indexOf(arr[y]);
		if(index1!==-1){
			let index2=localStorage.thdata.indexOf(arr[y+1]);
			localStorage.thdata=localStorage.thdata.substring(0,index1-1)+localStorage.thdata.substring(index2);
		};
	};
	localStorage.thdata+=','+arr[y]+','+pro+','+reg+','+data+','+j;
	localStorage.thdata=localStorage.thdata.replace(/编辑|undefined,/g,'');
};

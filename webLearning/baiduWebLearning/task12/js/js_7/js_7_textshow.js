// JavaScript Document
function regionsNum(i,j){
	if(i==0){
		var q=j;
	}else if(i==1){
		var q=j+3;
	}else{
		var q=j+6;
	};
	return q;
};

function checkedNum(){//����ѡ�еĸ���
	let regionNum=0;
	let productNum=0;
	for(let i=0;i<selectRegions.length-1;i++){
		if(selectRegions[i].checked){
			regionNum++;
		}
	};
	for(let j=0;j<selectProducts.length-1;j++){
		if(selectProducts[j].checked){
			productNum++;
		}
	};
	return [regionNum,productNum];
};	
//��ӱ������
function textShow(){//��ͬ��ѡ����ʾ��ͬ������
	let num=checkedNum();
	for(let i=0;i<selectRegions.length-1;i++){
		for(let j=0;j<selectProducts.length-1;j++){
			let dataP=document.querySelectorAll('#data-show p');
			let inner=objArr[i][j].product+' '+objArr[i][j].region+' '+objArr[i][j].sale;
			let trs=document.querySelectorAll('#tbody-show tr');
			let tbodyShow=document.getElementById('tbody-show');
			if(selectRegions[i].checked){//����ѡ��
				let str=dataShow.innerHTML;
				let ind=str.indexOf(inner);
				let q=regionsNum(i,j);
				if(selectProducts[j].checked){//��Ʒѡ��ʱ��ʾ
					if(ind==-1){//������ʾ
						let p=document.createElement('p');
						p.innerHTML=inner;
						dataShow.appendChild(p);
					}; 
					let index=0;
					for(let k=0;k<trs.length;k++){//�����ʾ
						let innerSale0=objArr[i][j].sale
						let innerSale=innerSale0.join('');
						let trsText=trs[k].innerText.replace(/\s/g,'')
						if(trsText.indexOf(innerSale)==-1){
							index++;
						};
					};
					if(index==trs.length){//��ԭ�������ڸ���Ϣ�����
						let tr=document.createElement('tr');
						tbodyShow.appendChild(tr);
						let trs=document.querySelectorAll('#tbody-show tr');
						for(let x=0;x<14;x++){
							let th=document.createElement('th');
							trs[trs.length-1].appendChild(th);
						};
						trs[trs.length-1].children[0].innerHTML=objArr[i][j].product;
						trs[trs.length-1].children[1].innerHTML=objArr[i][j].region;
						for(let k=2;k<14;k++){
							trs[trs.length-1].children[k].innerHTML=objArr[i][j].sale[k-2];	
						};
					};
				}else{//��Ʒû��ѡ��ʱɾ����Ʒ��Ϣ
					let trs=document.querySelectorAll('#tbody-show tr');
					for(let k=0;k<dataP.length;k++){
						if(dataP[k].innerHTML.indexOf(inner)!==-1){
							dataShow.removeChild(dataP[k]);
						};
					};
					for(let k=0;k<trs.length;k++){
						let a=trs[k].children[0].innerHTML;
						let b=trs[k].children[1].innerHTML;
						let c=objArr[i][j].region;
						let d=objArr[i][j].product;
						if(((a==c)&&(b==d))||((a==d)&&(b==c))){
							tbodyShow.removeChild(trs[k]);
						};
					};						
				};
			}else{//����û��ѡ��ʱɾ����Ʒ��Ϣ
				for(let k=0;k<dataP.length;k++){
					if(dataP[k].innerHTML.indexOf(inner)!==-1){
						dataShow.removeChild(dataP[k]);
					};
				};
				let trs=document.querySelectorAll('#tbody-show tr');
				for(let k=0;k<trs.length;k++){
					let a=trs[k].children[0].innerHTML;
					let b=trs[k].children[1].innerHTML;
					if((a==objArr[i][j].region)||(b==objArr[i][j].region)){
						tbodyShow.removeChild(trs[k]);
					};
				};	
			};
			
		};
		
	};
	toChange(num);
};
function toChange(num){
	let trs=document.querySelectorAll('#tbody-show tr');
	if((num[0]==1)&&(num[1]>1)){//һ����������Ʒʱ�������ڵ�һ�У���Ʒ�ڵڶ���
		for(let k=0;k<trs.length;k++){
			if(trs[k]){
				trs[k].children[0].hidden=false;
				let inn=trs[k].children[0].innerHTML;
				if(inn=='�ֻ�'||inn=='�ʼǱ�'||inn=='��������'){
					trs[k].children[0].innerHTML=trs[k].children[1].innerHTML;
					trs[k].children[1].innerHTML=inn;
					l.children[0].innerHTML='����';
					l.children[1].innerHTML='��Ʒ';
					
				};
				let inn1=trs[k].children[0].innerHTML;
				if(inn1=='����'||inn1=='����'||inn1=='����'){//�ϲ���Ԫ
					trs[0].children[0].rowSpan=num[1];
					if(k!==0){
						trs[k].children[0].hidden=true;
					};
				
				};
			};
		};
	}else{
		let index=0;
		let ind=0;
		for(let k=0;k<trs.length;k++){
			if(trs[k]){
				trs[k].children[0].rowSpan=1;
				trs[k].children[0].hidden=false;
				let inner=trs[k].children[0].innerHTML;
				if(inner=='����'||inner=='����'||inner=='����'){//�������������Ʒ�ڵ�һ�У������ڵڶ���
					trs[k].children[0].innerHTML=trs[k].children[1].innerHTML;
					trs[k].children[1].innerHTML=inner;
					l.children[0].innerHTML='��Ʒ';
					l.children[1].innerHTML='����';
				};
				let inners=trs[k].children[0].innerHTML;
				let trsk=trs[k].innerHTML;	
				if((k!==0)&&(inners==trs[0].children[0].innerHTML)){//��Ʒ��ͬ�ķ�һ��				
					index++;
					for(let j=k;j>0;j--){
						trs[j].innerHTML=trs[j-1].innerHTML;	
					};
					trs[0].innerHTML=trsk;
				};
				
				if(k>=index+1){
					if((inners==trs[index+1].children[0].innerHTML)){	
						ind++;
						for(let j=k;j>index+1;j--){
							trs[j].innerHTML=trs[j-1].innerHTML;	
						};
						trs[index+1].innerHTML=trsk;
					};
				};
			};
		};
		for(let k=0;k<trs.length;k++){//�ϲ���Ԫ��
			if((k!==0)&&(k!==index+1)&&(k!==index+1+ind)){
				trs[k].children[0].hidden=true;
			};
			trs[k].children[0].rowSpan=num[0];
		};
		
	};
};
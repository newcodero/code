//表格mouseover触发折线，触发表格数字编辑，调用的函数在edit.js

function mousevent(){
	let trs=document.querySelectorAll('#tbody-show tr');
	let tbody=document.querySelector('#tbody-show');
	tbody.onmouseover=function(e){//mouseover出现当前单一折线
		let target=e.target || e.srcElement;
		if(target.nodeName.toLowerCase()=="th"){
			names='mouses';	
			canvasLine(names,target);	
		};
	};
	tbody.onmouseout=function(e){//鼠标移出时，显示全部折线
		names='clicks';
		canvasLine(names,'');
	};								 
	
	for(let i=0;i<trs.length;i++){
		for(let j=2;j<trs[i].children.length;j++){
			trs[i].children[j].onmouseover=function(){edit(i,j,trs)};//悬浮提示
			trs[i].children[j].onmouseout=function(){//鼠标移开还原之前状态
				let  p=trs[i].children[j].querySelector('p');
				if(p!==null){
					trs[i].children[j].removeChild(p);
				};
			};
			trs[i].children[j].onclick=function(){thclick(trs,i,j)};//点击变成input输入框，进行编辑
		};	
	};
};
function thclick(trs,i,j){
	let  p=trs[i].children[j].querySelector('p');
	if(p!==null){
		trs[i].children[j].removeChild(p);
	};
	let text=editInput(i,j,trs);
	let  input=trs[i].children[j].querySelector('input');
	if(input!==null){
		input.addEventListener('input',function(){//判断输入是否为数字								
			 let input=trs[i].children[j].querySelector('input');
			 let val=input.value;
			 if(isNaN(val)){
				 alert('请输入数字！');
				input.removeEventListener('blur',canc);
			 }else{
				 input.addEventListener('blur',canc);
			 };
		});
		input.addEventListener('click',function(){
			 event.stopPropagation();
		});
		input.addEventListener('blur',canc);
		function canc(){//输入框失焦，还原不可编辑状态
			let a=i;
			let b=j;
			let c=trs;
			let d=text;//保证只有一个单元格被选中
			setTimeout(function(){cancelInput(a,b,c,d)},200);
		};
		
	};										

};

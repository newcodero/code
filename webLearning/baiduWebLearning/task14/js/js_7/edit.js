// JavaScript Document
function edit(i,j,trs){
	let p=trs[i].children[j].querySelector('p');//mouseover显示可编辑
	if(p==null){
		let editText=document.createElement('p');
		editText.innerHTML='编辑';
		editText.style.fontSize='12px';
		editText.style.float='right';
		editText.style.lineHeight='12px';
		trs[i].children[j].appendChild(editText);
	};
	
	
};
function editInput(i,j,trs){
	let input=document.createElement('input');//点击变成输入框
	let text=trs[i].children[j].innerText;
	input.value=text;
	input.style.type="text";
	input.style.width='32px';
	trs[i].children[j].innerHTML='';
	trs[i].children[j].appendChild(input);
	input.focus();
	input.addEventListener('mouseover',function(){event.stopPropagation()});
	addbtns(i,j,trs,input,text);
	keyEvent(i,j,trs,text);
	return text;
};
function addbtns(i,j,trs,input,text){//出现保存和取消按键
	let btn1=document.createElement('button');
	let btn2=document.createElement('button');
	btn1.innerText='save';
	btn1.style.type='button';
	//btn1.style.id='btn_1';
	btn2.innerText='cancel';
	btn2.style.type='button';
	//btn2.style.id='btn_2';
	trs[i].children[j].appendChild(btn1);
	trs[i].children[j].appendChild(btn2);
	btn1.addEventListener('click',function(){ event.stopPropagation();saveText(i,j,trs)});
	btn2.addEventListener('click',function(){ event.stopPropagation();cancelInput(i,j,trs,text)});
	btn1.addEventListener('mouseover',function(){event.stopPropagation()});
	btn2.addEventListener('mouseover',function(){event.stopPropagation()});
};
function saveText(i,j,trs){//点击保存按键触发事件
	let input=trs[i].children[j].querySelector('input');
	let val=input.value;
	if(val){
		trs[i].children[j].removeChild(input);
		trs[i].children[j].innerHTML=val;
	};
	
};
function cancelInput(i,j,trs,text){//取消编辑
	let input=trs[i].children[j].querySelector('input');
	if(input!==null){
		trs[i].children[j].removeChild(input);
		trs[i].children[j].innerHTML=text;
	};
};
function keyEvent(i,j,trs,text){//输入框编辑时，按esc取消，按enter确认保存
	document.onkeydown=function(e){
		if(e.keyCode==27){
			cancelInput(i,j,trs,text)
			//console.log('1')
			};	
		if(e.keyCode==13){saveText(i,j,trs);};
	};
};
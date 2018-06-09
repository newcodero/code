// JavaScript Document
//checked 部分
function allClick(){
	for(let i=0;i<selectRegions.length;i++){//创建委托事件
		if(i==selectRegions.length-1){
			selectRegions[i].addEventListener('click',function(){
				allChecked();
				unChecked();
				textShow();
			});
			selectProducts[i].addEventListener('click',function(){
				allChecked();
				unChecked();
				textShow();
			});
		}else{
			selectRegions[i].addEventListener('click',function(){
				unChecked();
				textShow();

			});
			selectProducts[i].addEventListener('click',function(){
				unChecked();
				textShow();
				
			});
		}
	};
	};

	function allChecked(){//全选按钮触发事件
		if(selectRegions[3].checked){//点击全选按钮，所有选项被选中
			for(let i=0;i<selectRegions.length-1;i++){
				selectRegions[i].checked=true;
			};
		};
		if(selectProducts[3].checked){
			for(let i=0;i<selectProducts.length-1;i++){
				selectProducts[i].checked=true;
			};
		};
	};
	function unChecked(){//根据勾选的个数决定全选复选框是否选中
		let index=0;
		let index1=0;
		for(let i=0;i<selectProducts.length-1;i++){
			selectProducts[i].disabled=false;
			selectRegions[i].disabled=false;
			if(selectProducts[i].checked){
				index++;
				var m=i;
			};
			if(selectRegions[i].checked){
				index1++;
				var n=i;
			};
		};
		if(index==1){//只有一个选中时不允许取消
			selectProducts[m].disabled=true;
		};
		if(index1==1){
			selectRegions[n].disabled=true;
		};
		if(index!==3){//只有全部选中，全选框才选中
			selectProducts[3].checked=false;
		}else{
			selectProducts[3].checked=true;
		};
		if(index1!==3){
			selectRegions[3].checked=false;
		}else{
			selectRegions[3].checked=true;
		};
	};
	
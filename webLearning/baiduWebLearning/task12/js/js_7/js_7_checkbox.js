// JavaScript Document
//checked ����
function allClick(){
	for(let i=0;i<selectRegions.length;i++){//����ί���¼�
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

	function allChecked(){//ȫѡ��ť�����¼�
		if(selectRegions[3].checked){//���ȫѡ��ť������ѡ�ѡ��
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
	function unChecked(){//���ݹ�ѡ�ĸ�������ȫѡ��ѡ���Ƿ�ѡ��
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
		if(index==1){//ֻ��һ��ѡ��ʱ������ȡ��
			selectProducts[m].disabled=true;
		};
		if(index1==1){
			selectRegions[n].disabled=true;
		};
		if(index!==3){//ֻ��ȫ��ѡ�У�ȫѡ���ѡ��
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
	
function arrInit(k,trs,color,dataArr){//获取当前表格的数据或者hover的数据
	for(let i in objArr){
		for(let x=0;x<objArr[i].length;x++){
			let m=trs[k].children[0].innerText;
			let n=trs[k].children[1].innerText;
			let ind1=m.indexOf("编辑");
			let ind2=n.indexOf("编辑");
			if(ind1!==-1){
				m=m.slice(0,-2);
			};
			if(ind2!==-1){
				n=n.slice(0,-2);
			};
			let product=objArr[i][x].product;
			let region=objArr[i][x].region;
			if(((m==product)&&(n==region))||((m==region)&&(n==product))){
				color.push('rgb('+(50+i*100)+','+(50+x*100)+',100)');
				
				let dataArr1=[];
				for(let j=0;j<objArr[i][x].sale.length;j++){
					let dataRound=objArr[i][x].sale[j]*0.5;
					dataArr1.push(dataRound);
				};
				dataArr.push(dataArr1);
			};

		};
	};
};


function canvasLine(names,z){
	
	var canvas=document.querySelector('#canvas');
	if(canvas.getContext){
		var ctx=canvas.getContext('2d');
		ctx.clearRect(0,0,600,400);
		var dataArr=new Array();
		var color=[];
		var data=[];
		var trs=document.querySelectorAll('#tbody-show tr');
		if(names=='clicks'){//点击事件触发显示表格的全部内容的折线
			for(let k=0;k<trs.length;k++){
				arrInit(k,trs,color,dataArr);
			};
		}else if(names=='mouses'){//hover事件只显示当前内容的折线趋势
			ctx.clearRect(0,0,600,400);
			arrInit(z,trs,color,dataArr);
		}
		
		if(dataArr[0].length){
			len=dataArr[0].length;
		}else{
			len=dataArr.length;
		};
		for(let i=0;i<dataArr.length;i++){//数据点
			for(let j=0;j<dataArr[i].length;j++){
				ctx.beginPath();
				ctx.fillStyle=color[i];
				ctx.arc(40+j*40,360-dataArr[i][j],5,0,(Math.PI)*2,true);
				ctx.fill();
				
				if(j!==dataArr[i].length-1){//连线，最后一个不用连
					ctx.beginPath();
					ctx.moveTo(40+j*40,360-dataArr[i][j]);
					ctx.lineTo(40+(1+j)*40,360-dataArr[i][j+1]);
					ctx.stroke();
				};
			};
		};
		//坐标轴
		ctx.beginPath();
		ctx.moveTo(25,35);
		ctx.lineTo(30,30);
		ctx.lineTo(35,35);
		ctx.lineTo(30,30);
		ctx.lineTo(30,360);
		ctx.lineTo(40*(len+2),360);
		ctx.lineTo(40*(len+2)-5,360-5);
		ctx.lineTo(40*(len+2),360);
		ctx.lineTo(40*(len+2)-5,360+5);
		ctx.stroke();
	}else{
		alert('所用浏览器不支持canvas');
	};
	
}

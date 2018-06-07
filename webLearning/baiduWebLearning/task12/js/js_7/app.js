// JavaScript Document
//initial
let sourceData = [
	{
	product: "手机",
	region: "华东",
	sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
	}, {
	product: "手机",
	region: "华北",
	sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
	}, {
	product: "手机",
	region: "华南",
	sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
	}, {
	product: "笔记本",
	region: "华东",
	sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
	}, {
	product: "笔记本",
	region: "华北",
	sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
	}, {
	product: "笔记本",
	region: "华南",
	sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
	}, {
	product: "智能音箱",
	region: "华东",
	sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
	}, {
	product: "智能音箱",
	region: "华北",
	sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
	}, {
	product: "智能音箱",
	region: "华南",
	sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}];
var selectRegions=document.querySelectorAll('#select-region input');
var selectRegion=document.querySelector('#select-region');
var selectProduct=document.querySelector('#select-product');
var selectProducts=document.querySelectorAll('#select-product input');
var dataShow=document.querySelector('#data-show');
var divShow=document.querySelector('#div-show');
var trs=document.querySelectorAll('#tbody-show tr');
var tbodyShow=document.querySelector('#tbody-show');
var l=document.querySelector('#div-show thead tr');
var btn1=document.querySelector('#btn1');
var btn2=document.querySelector('#btn2');
//
divShow.style.display='table';
dataShow.style.display='table';
btn1.onclick=function(){
	if(divShow.style.display=='none'){
		divShow.style.display='table';
	}else{
		divShow.style.display='none';
	};
};
btn2.onclick=function(){
	if(dataShow.style.display=='none'){
		dataShow.style.display='table';
	}else{
		dataShow.style.display='none';
	};
};
//
var regionArr1=new Array();
var regionArr2=new Array();
var regionArr3=new Array();
for(let i=0;i<sourceData.length;i++){//根据地区分为三组数据
	if(sourceData[i].region=='华东'){
		regionArr1.push(sourceData[i]);
	}else if(sourceData[i].region=='华南'){
		regionArr2.push(sourceData[i]);
	}else{
		regionArr3.push(sourceData[i]);
	};
	
};
var objArr={
	0:regionArr1,
	1:regionArr2,
	2:regionArr3
};
allClick();
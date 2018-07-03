// JavaScript Document
//餐厅类
function Restaurant(money,seats,staffList){
	this.money=money;
	this.seats=seats;
	this.staffList=staffList;
};
//餐厅方法
Restaurant.prototype.hire=function(staff){
	for(let i=0;i<arguments.length;i++){
		this.staffList.push(arguments[i].name);
	};	
};
Restaurant.prototype.fire=function(staff){
	for(let i=0;i<arguments.length;i++){
		var index=this.staffList.indexOf(arguments[i].name);
		if(index!==-1){
			this.staffList.splice(index,1);
		};
	};
	
	
};
//职员类
function Staff(id,name,salary){
	this.id=id;
	this.name=name;
	this.salary=salary;
};
//职员方法
Staff.prototype.oneJob=function(){};
//服务员类
function Waiter(id,name,salary){
	Staff.call(this,id,name,salary);
};	
//服务员类继承职员类
Waiter.prototype=new Staff();
//服务员类方法
Waiter.prototype.oneJob=function(){
	if(arguments.constructor===Array){
		order();
	}else{
		serving();
	};
};
//厨师类，继承职员类
function Chief(id,name,salary){
	Staff.call(this,id,name,salary);
};
Chief.prototype=new Staff();
//厨师类方法
Chief.prototype.oneJob=function(){
	cooking();
};
//顾客类
function Customer(){};
//顾客类方法
Customer.prototype.order=function(){
	order();
};
Customer.prototype.eat=function(){
	eat();
};
//菜品类
function Food(name,firstCost,price){
	this.name=name;
	this.firstCost=firstCost;
	this.price=price;
};
function order(){
	console.log('order');
};
function serving(){
	console.log('serving');
};
function cooking(){
	console.log('cooking');
};
function eat(){
	console.log('eat');
};

//测试
var ifeRestaurant=new Restaurant(10000,20,[]);
var newCook1=new Chief(1,"Tony",15000);
var newCook2=new Chief(2,"Tom",20000);
ifeRestaurant.hire(newCook1,newCook2);
console.log(ifeRestaurant.staffList);
ifeRestaurant.fire(newCook1);
console.log(ifeRestaurant.staffList);

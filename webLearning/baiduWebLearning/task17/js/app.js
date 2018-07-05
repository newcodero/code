// JavaScript Document
//餐厅类
function Restaurant(money,seats,staffList){
	this.money=money;
	this.seats=seats;
	this.staffList=staffList;
};
//餐厅方法
Restaurant.prototype.hire=function(staff){
	if(this.staffList.length===0){this.staffList.push(staff)};
	for(let i=0;i<this.staffList.length;i++){
		if((!this.staffList[i].waiter && staff.waiter) || (!this.staffList[i].chief && staff.chief)){
			this.staffList.push(staff);
		};
		
	};	
};
Restaurant.prototype.fire=function(staff){
	if(this.staffList.length===1 && this.staffList[0]==staff ){
		this.staffList.pop(staff);
	};
	for(let i=0;i<this.staffList.length;i++){
		if(this.staffList[i]==staff){
			this.staffList.splice(i,1);
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
	waiters=(function(){ 
		if(typeof waiter===undefined){				  
			Staff.call(this,id,name,salary);
		};
		return {
			waiter:'waiter',
			id:id,
			name:name,
			salary:salary
			};/**/
	})();
	return waiters;
};	
//服务员类继承职员类
Waiter.prototype=new Staff();
//服务员类方法
Waiter.prototype.oneJob=function(foods){
	order(foods);
	return foods;
};
Waiter.prototype.server=function(foods){
	serving(foods);
	return foods;
};
//厨师类，继承职员类
function Chief(id,name,salary){
	chiefs=(function(){ 
		if(typeof chief==undefined){				  
			Staff.call(this,id,name,salary);
		};
		return {
			chief:'chief',
			id:id,
			name:name,
			salary:salary
			};
	})();
	return chiefs;
};

Chief.prototype=new Staff();
//厨师类方法
Chief.prototype.oneJob=function(foods){
	cooking(foods);
	return foods;
};
//顾客类
function Customer(num,seats){
	this.num=num;
	this.seats=seats;
};
//顾客类方法
Customer.prototype.order=function(foods){
	return foods;
};
Customer.prototype.eat=function(foods){
	eat(foods);
};
//菜品类
function Food(name,firstCost,price){
	this.name=name;
	this.firstCost=firstCost;
	this.price=price;
};
function order(foods){
	console.log('order'+foods);
};
function serving(foods){
	console.log('serving'+foods);
};
function cooking(foods){
	console.log('cooking'+foods);
};
function eat(foods){
	console.log('eating');
};

//测试
var ifeRestaurant=new Restaurant(10000,20,[]);
var newCook=new Chief(1,"Tony",15000);
var newWaiter=new Waiter(2,"Tom",20000);
ifeRestaurant.hire(newCook);
ifeRestaurant.hire(newWaiter);
var customer1=new Customer(1,1);
var foods=['food1','food2','food3'];
var customerOrder=customer1.order(foods);

var order1=newWaiter.oneJob(customerOrder);
var cook1=newCook.oneJob(order1);
var serving1=newWaiter.server(cook1);
customer1.eat(serving1);
//console.log(ifeRestaurant.staffList);

/**
*@file 主程序
*/
const restaurant=Restaurant.getInstance({
	cash:10000,
	seats:1,
	staffList:[]
});
//菜单
const menu=Menu.getInstance([
	{
		name:"菜品1",
		cost:1,
		price:25
	},
	{
		name:"菜品2",
		cost:1,
		price:35
	},
	{
		name:"菜品3",
		cost:1,
		price:45
	}
]);
//招聘
const cook_1=Cook.getInstance({
	name:"1号厨师",
	wages:10000
});
const waiter_1=Waiter.getInstance({
	name:"1号服务员",
	wages:5000
});
restaurant.hire(cook_1);
restaurant.hire(waiter_1);
//顾客列表
let customerQueue=[];
const customer_1=new Customer();
const customer_2=new Customer();
const customer_3=new Customer();
const customer_4=new Customer();
customerQueue.push(customer_1,customer_2,customer_3,customer_4);
//运转餐厅
document.getElementsByTagName('button')[0].addEventListener('click',()=>opening(customerQueue));

async function opening (queue){
	//保存队列
	let customerList=[...queue];
	while (restaurant.seats>0
		&& restaurant.cash>0
		&& restaurant.staffList.length>0
		&& customerList.length>0){
		console.log("有顾客来了");
		//入座
		restaurant.seats-=1;
		let currentCustomer=customerList.shift();
		let order=[];
		await delay(1000);
		order.push(currentCustomer.order(menu));
		//服务员点菜
		let waiterFlag=waiter_1.doneWork(order);
		await delay(1000);
		console.log("顾客点菜："+order[0].name);
		//厨师做菜
		let cookFlag=false;
		if(waiterFlag){
			await delay(2000);
			console.log("烹饪中");
			await delay(2000);
			cookFlag=cook_1.doneWork(order);
		};
		 // 厨师烹饪完成
		if (cookFlag) {
			await delay(1000);
			waiterFlag = waiter_1.doneWork('');
			await delay(1000);
			console.log('上菜完成')
		};
		 // 顾客享用
		let customerFlag = false;
		if (waiterFlag) {
			console.log("顾客正在吃饭")
			await delay(1000);
			customerFlag = currentCustomer.eat();
			await delay(1000);
			console.log("顾客走了");
		};
		// 顾客吃完
		if (customerFlag) {
			restaurant.seats += 1;
		};
	};
	await delay(1000);
	console.log('没客人了');
	await delay(1000);
	console.log('打扫');
	await delay(1000);
	console.log('打烊！');
};
/**
 * 延迟函数
 * @param {number} time 
 */
function delay(time) {
    return new Promise((resolve, reject)=>{
        setTimeout(function () {resolve()}, time);
    })
};


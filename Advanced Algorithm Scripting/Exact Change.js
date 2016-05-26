//  根据给出价格和现金以及所拥有的零钱  找零

var denom = [
	{ name: 'PENNY', val: 0.01},
	{ name: 'NICKEL', val: 0.05},
	{ name: 'DIME', val: 0.10},
	{ name: 'QUARTER', val: 0.25},
	{ name: 'ONE', val: 1.00},
	{ name: 'FIVE', val: 5.00},
	{ name: 'TEN', val: 10.00},
	{ name: 'TWENTY', val: 20.00},
	{ name: 'ONE HUNDRED', val: 100.00}
];
function checkCashRegister(price, cash, cid) {
	var payMoney = cash - price;
	//  钱箱总余额
	var drawerMoney = 0;
	for (var i=0; i<cid.length; i++) {
		drawerMoney += cid[i][1];
	} 
	drawerMoney = drawerMoney;

	if (payMoney == drawerMoney) {
		return 'Closed';
	}else if (payMoney > drawerMoney) {
		return 'Insufficient Funds';
	}else {
		//  找出找零所需最大面值
		var index;
		for (var i=0; i<denom.length; i++) {
			if(payMoney < denom[i].val) {
				index = i - 1;
				break;
			}
		}
		//  判断所需最大面值及小面值总面值是否满足找零需求
		var allFloorMondy = 0;
		for (var i=0; i<index+1; i++) {
			allFloorMondy += cid[i][1];
		} 
		allFloorMondy = allFloorMondy;
		if(payMoney > allFloorMondy) {
			return 'Insufficient Funds';
		}else {
			var acc = [];
			//  已经支付的
			var havePay = 0;
			//  还需要支付的
			var needPay = 0;
			var pay = payMoney;
			for(var i=index; i>0; i--) {
				pay -= cid[i][1];
				needPay = payMoney - havePay;
				needPay = Math.round(needPay * 100) / 100;
				if(needPay == 0) {
					break;
				}
				if(pay > 0) {
					acc.push([cid[i][0], cid[i][1]]);
					havePay += cid[i][1];
				}else if (pay < 0) {
					if(Math.floor(needPay/denom[i].val) != 0) {
						needPay = denom[i].val * Math.floor(needPay/denom[i].val);
						acc.push([cid[i][0], needPay]); 
						havePay += needPay;
					}else {
						needPay = denom[i-1].val * Math.floor(needPay/denom[i-1].val); 
						acc.push([cid[i-1][0], needPay]); 
						havePay += needPay;
					}
				}
			}
			console.log(acc);
			return acc;
		}
	}	
}

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
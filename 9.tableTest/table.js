//新增数据
function addRow(){
	var table=document.getElementById('table');
	//获取插入的位置
	var length=table.rows.length;
	//插入行节点
	var newRow=table.insertRow(length);
	console.log(newRow);
	//插入列节点
	var nameCol=newRow.insertCell(0);
	var phoneCol=newRow.insertCell(1);
	var actionCol=newRow.insertCell(2);
	
	//修改节点文本内容
	nameCol.innerHTML='未命名';
	phoneCol.innerHTML='无联系方式';
	actionCol.innerHTML='<button onclick="editRow(this)">编辑</button><button onclick="deleteRow(this)">删除</button>';	
}

//删除数据
function deleteRow(button){
	var row=button.parentNode.parentNode;
	console.log(row);
	row.parentNode.removeChild(row);
}

//编辑数据
function editRow(button){
	var row=button.parentNode.parentNode;
	var name=row.cells[0];
	var phone=row.cells[1];
	
	var inputName=prompt("请输入名字");
	var inputPhone=prompt("请输入联系方式");
	
	if(inputName!='')
		name.innerHTML=inputName;
	if(inputPhone!='')
		phone.innerHTML=inputPhone;
}

let count=0;
document.getElementById('countButton').addEventListener('click',function(){
	count++;
	document.getElementById('count').textContent=count;
})
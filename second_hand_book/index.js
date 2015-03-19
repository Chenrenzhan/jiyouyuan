// JavaScript Document
window.onload=Init;


function GetId(e)//根据鼠标处理事件获取鼠标活动当前的ID
{
	e=e||event;
	var tag=e.srcElement||e.target;
	return tag.id;
}


function Init()
{
	var ligonglei=document.getElementById("ligonglei");
    var jingguanlei=document.getElementById("jingguanlei");
    var faxuelei=document.getElementById("faxuelei");
    var yuyanlei=document.getElementById("yuyanlei");
    var jisuanjilei=document.getElementById("jisuanjilei");
    var qitalei=document.getElementById("qitalei");
    
    var objarr=new Array(ligonglei,jingguanlei,faxuelei,yuyanlei,jisuanjilei,qitalei);

    
    Start();//初始化开始状态
    
   // var allData = GetData();//获取数据

	document.onclick=function(e)
	{
        
        var strId=GetId(e);
        
        if(strId=="ligonglei" || strId=="jingguanlei" || strId=="faxuelei"
            || strId=="yuyanlei" || strId=="jisuanjilei" || strId=="qitalei")
        {
            var obj=document.getElementById(strId);
            
            BtnStyle(objarr);
            
            obj.style.backgroundColor="RGB(240,240,240)";
            obj.style.borderBottom="3px solid blue";
            //obj.style.borderRight="2px solid #009933"; 
            obj.style.borderTopWidth="3px";
            //obj.style.border="3px";
            //obj.style.borderBottom="none";
          
            Show(strId);//显示数据
        }
	}
    
    
}

//初始化开始状态
function Start()
{
    ligonglei.style.backgroundColor="RGB(240,240,240)";
    ligonglei.style.borderBottom="3px solid blue";
    //ligonglei.style.borderRight="2px solid #009933";      
    ligonglei.style.borderTopWidth="3px";
    
    var allData = GetData();//获取数据
    
    var data = allData["ligonglei"];
    WriteHTML(data);
    
    LookContact(data);
}


function BtnStyle(objarr)
{
    for(var index=0; index < objarr.length; ++index)
    {
        objarr[index].style.backgroundColor="RGB(240,240,240)";
        objarr[index].style.border="1px solid #009933";
        //objarr[index].style.borderBottom="none";
        //objarr[index].style.color="#FFF";
    }
    
}

//请求数据
function GetData()
{
    //构造json测试数据,仅供测试，后台根据这个格式构造json对象发送过来即可
    var ligonglei=
        [
            {"name":"理工类书名1", "price":20, "contact":"10086",},
            {"name":"理工类书名2", "price":20, "contact":"10086",},
            {"name":"理工类书名3", "price":20, "contact":"10086",},
            {"name":"理工类书名4", "price":20, "contact":"10086",},
            {"name":"理工类书名5", "price":20, "contact":"10086",},
            {"name":"理工类书名6", "price":20, "contact":"10086",},
            {"name":"理工类书名7", "price":20, "contact":"10086",},
         ];
   
    
    
    var jingguanlei=
        [
            {"name":"经管类书名1", "price":20, "contact":"10086",},
            {"name":"经管类书名2", "price":20, "contact":"10086",},
            {"name":"经管类书名3", "price":20, "contact":"10086",},
            {"name":"经管类书名4", "price":20, "contact":"10086",},
            {"name":"经管类书名5", "price":20, "contact":"10086",},
            {"name":"经管类书名6", "price":20, "contact":"10086",},
            {"name":"经管类书名7", "price":20, "contact":"10086",},
            {"name":"经管类书名8", "price":20, "contact":"10086",},
            {"name":"经管类书名9", "price":20, "contact":"10086",},
         ];
    
    var faxuelei=
        [
            {"name":"法学类书名1", "price":20, "contact":"10086",},
            {"name":"法学类书名2", "price":20, "contact":"10086",},
            {"name":"法学类书名3", "price":20, "contact":"10086",},
            {"name":"法学类书名4", "price":20, "contact":"10086",},
            {"name":"法学类书名5", "price":20, "contact":"10086",},
            {"name":"法学类书名6", "price":20, "contact":"10086",},
         ];
    
    var yuyanlei=
        [
            {"name":"语言类书名1", "price":20, "contact":"10086",},
            {"name":"语言类书名2", "price":20, "contact":"10086",},
            {"name":"语言类书名3", "price":20, "contact":"10086",},
            {"name":"语言类书名4", "price":20, "contact":"10086",},
            {"name":"语言类书名5", "price":20, "contact":"10086",},
 
         ];
    
    var jisuanjilei=
        [
            {"name":"计算机类书名1", "price":20, "contact":"10086",},
            {"name":"计算机类书名2", "price":20, "contact":"10086",},
            {"name":"计算机类书名3", "price":20, "contact":"10086",},
            {"name":"计算机类书名4", "price":20, "contact":"10086",},
            {"name":"计算机类书名5", "price":20, "contact":"10086",},
            {"name":"计算机类书名6", "price":20, "contact":"10086",},
            {"name":"计算机类书名7", "price":20, "contact":"10086",},
            {"name":"计算机类书名8", "price":20, "contact":"10086",},
         ];
    
    
    var qitalei=
        [
            {"name":"其他类书名1", "price":20, "contact":"10086",},
            {"name":"其他类书名2", "price":20, "contact":"10086",},
            {"name":"其他类书名3", "price":20, "contact":"10086",},
            {"name":"其他类书名4", "price":20, "contact":"10086",},
            {"name":"其他类书名5", "price":20, "contact":"10086",},
            {"name":"其他类书名6", "price":20, "contact":"10086",},
            {"name":"其他类书名7", "price":20, "contact":"10086",},
            {"name":"其他类书名8", "price":20, "contact":"10086",},
            {"name":"其他类书名9", "price":20, "contact":"10086",},
            {"name":"其他类书名10", "price":20, "contact":"10086",},
         ];
    
    
    var jsonData={
        "ligonglei":ligonglei,
        "jingguanlei":jingguanlei,
        "faxuelei":faxuelei,
        "yuyanlei":yuyanlei,
        "jisuanjilei":jisuanjilei,
        "qitalei":qitalei,
        };

    return jsonData;
}

//显示数据
function Show(strId)
{
    var allData = GetData();//获取数据
    var data = allData[strId];
    
    WriteHTML(data);

    LookContact(data);//查看联系方式
    
}

function WriteHTML(data)
{
    var strHTML = 
        "   <tr>" +
        "        <td colspan=\"3\" class=\"title\">书名</td>" +
        "        <td colspan=\"1\" class=\"title\">价格</td>" +
        "        <td colspan=\"2\" class=\"title\">联系方式</td>" +
        "    </tr>";
        
    for(var i=0; i < data.length; ++i)
    {
        
        strHTML += 
        "   <tr>" +
        "        <td colspan=\"3\" class=\"name\">"+ data[i].name +"</td>" +
        "        <td colspan=\"1\" class=\"price\">"+ data[i].price +"</td>" +
        "        <td colspan=\"2\" class=\"contact\" id=\""+ ("td_"+i) +"\">"+ 
        "<a id=\""+ ("look_"+i)+ "\"href=\"#\">查看</a>" /*data[i].contact*/ +"</td>" +
        "    </tr>";
    }
    
    document.getElementById("tbody").innerHTML = strHTML;
}

//查看联系方式
function LookContact(data)
{
    for(var i=0; i < data.length; ++i)
    {
        var lookObj = document.getElementById("look_"+i);
        lookObj.onclick = function(e)
        {
            var strId = GetId(e);
            var index = strId.split("_");
            document.getElementById("td_"+index[1]).innerHTML = data[index[1]].contact;
        }
    }
    
    
}









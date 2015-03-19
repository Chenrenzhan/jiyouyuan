window.onload = Init;

function Init()
{
    //自动显示联系方式
    var contact = GetContact();
    document.getElementById("contact").value = contact;
    

    //提交
    document.getElementById("submit").onclick = function(e)
    {
        //选中书的类型
        var type = document.getElementById("sort").value;
        //书名
        var name = document.getElementById("name").value;
        //价格
        var price = document.getElementById("price").value;
        //联系方式
        var contact = document.getElementById("contact").value;
        //数量
        var sum = document.getElementById("sum").value;
        
        //构造json格式数据
        json_data = {
            "type":type,
            "name":name,
            "price":price,
            "contact":contact,
            "sum":sum,
        }
        var isSucess = PostData(json_data);
        if(isSucess == 1)
        {
            if(confirm("提交成功！\n是否继续？"))
            {
                window.location.href="sell.html";
            }
            else
            {
                window.location.href="index.html";
            }
        }
        else
        {
            if(!confirm("提交失败！\n是否继续？"))
            {
                window.location.href="index.html";
            }
        }
    }
    
    //取消
    document.getElementById("cancel").onclick = function(e)
    {
        window.location.href="index.html";
    }
    
}

//请求联系方式
function GetContact()
{
    var contact="10086";
    return contact;
}

//发送数据
function PostData(json_data)
{
    //发送成功则返回1，否则返回0表示失败
    return 1;
}






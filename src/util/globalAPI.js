export default{
    // 端口地址
    localhost:"http://localhost:8081",
    //项目
    proejct:"onevue",
    //头部导航   
    headerAPI:"mysqlConnection.php",
    
    //接口地址
    getGlobalApi:function(address,proejct,adressApi) {
        return address+"/"+proejct+"/"+adressApi;
    }
        
    

     
    
}
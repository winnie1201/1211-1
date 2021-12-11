//載入Express套件，建立Application物件
let express=require("express");
let app=express();
//處理路徑 / 的要求
app.get("/",function(req,res){
    // res.send("<h3>Hello Express</h3>測試看看<script>console.log('Hello');</script>");
    res.sendFile(__dirname+"/home.html");
});
//處理路徑/pop 的要求，根據要求字串 city=城市名稱 決定要提供的服務
//http://127.0.0.1:3000/pop?city=城市名稱
//http://127.0.0.1:3000/pop?city=taipei
//http://127.0.0.1:3000/pop?city=hsinchu
//http://127.0.0.1:3000/pop?city=tainan
app.get("/pop",function(req,res){
    let city=req.query.city;
    if(city=="taipei"){
        res.send("300萬");
    }else if(city=="hsinchu"){
        res.send("40萬");
    }else{
        res.send("沒有資料");
    }
});

//啟動伺服器在 http://127.0.0.1:3000/
app.listen(3000,function(){
    console.log("Server Started");
});
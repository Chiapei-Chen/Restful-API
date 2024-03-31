//1.引入模組
const express = require('express');
const axios = require('axios');
//2.創建實例
const app = express();
//指定端口
const port = 3000;
//定義一個函數 myWeatherApi()，它返回一個配置好的 Axios 實例
//用於向特定的天氣 API 發送請求
// 建 Axios 实例
const myWeatherApi = () => {
    return axios.create({
        baseURL: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-4725D58D-2826-4BA4-8C35-5CCA4127C072',
        responseType: 'json',
    });
};
// 處理 GET 请求
app.get('/weather', (req, res) => {
    const { locationName, elementName } = req.query;
    const authorization = 'CWA-4725D58D-2826-4BA4-8C35-5CCA4127C072'; // 替换为你的授权令牌

    // 創建 Axios 實例
    const api = myWeatherApi();

     // 發起 GET 請求
    api.get('F-C0032-001', {
        params: {
            locationName: locationName,
            elementName: elementName
        },
        headers: {
            Authorization: authorization
        }
    })
    .then(response => {
     // 處理 API 響應的數據
        res.json(response.data);
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    });
});

//使用 Express 中的 express.static
//中介軟體將 public 目錄設置為靜態資源的根目錄

app.use(express.static('public'));


// 啟動伺服器並開始監聽指定的端口
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

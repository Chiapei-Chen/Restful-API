const axios = require('axios');

// 定义 API 接口
const getWeatherApi = async (Authorization, locationName, elementName) => {
    try {
        const response = await axios.get('F-C0032-001', {
            params: {
                Authorization: Authorization,
                locationName: locationName,
                elementName: elementName
            }
        });
        return response.data; // 返回 API 响应的数据
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error; // 抛出错误
    }
};

module.exports = { getWeatherApi };

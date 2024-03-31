class Records {
    constructor(location) {
        this.location = location;
    }
}
//constructor 是一個特殊的方法，
//用於定義 JavaScript 類別的建構函數。
//建構函數在創建類別的新實例時自動調用，用於初始化新創建的物件

class Location {
    constructor(locationName, weatherElement) {
        this.locationName = locationName;
        this.weatherElement = weatherElement;
    }
}

class WeatherElement {
    constructor(elementName, time) {
        this.elementName = elementName;
        this.time = time;
    }
}

class Time {
    constructor(parameter) {
        this.parameter = parameter;
    }
}

class Parameter {
    constructor(parameterName, parameterUnit) {
        this.parameterName = parameterName;
        this.parameterUnit = parameterUnit;
    }
}

module.exports = { Records, Location, WeatherElement, Time, Parameter };

//用於導出模組中的變數、函數或類別，以便其他檔案可以引入並使用這些導出物件
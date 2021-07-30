const fs = window.require("fs");
const path = window.require('path');
const mineType = window.require('mime-types');

export function queryParams(data, excludeNull = true) {
    const params = [];
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const value = data[key];
        if (!(excludeNull && ['', undefined, null].includes(value))) {
          if (value.constructor === Array) {
            value.forEach((item) => {
              params.push(`${encodeURIComponent(key)}=${encodeURIComponent(item)}`);
            });
          } else {
            params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
          }
        }
      }
    }
    return params.length ? params.join('&') : '';
  }

  // 去除字符串首尾空格
  export function trim(str){   
    return str.replace(/^(\s|\xA0)+|(\s|\xA0)+$/g, '');   
} 

// 将图片转换成base64
export function getBase64Image(file) {
  let filePath = path.resolve(file);
  let data = fs.readFileSync( path.resolve(filePath));
  data = new Buffer(data).toString('base64');
  return 'data:' + mineType.lookup(filePath) + ';base64,' + data;
}
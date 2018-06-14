//模块过程
/*
* 1 创建模块
* 2 导出模块 exports
* 3 加载模块 require
* 4 使用模块
*
* */
function add(student) {
    console.log('Add student'+student);
}

exports.add=add;
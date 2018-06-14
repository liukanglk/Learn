let student=require('./school')
let teacher=require('./teacher');
teacher.add('lk');
function add(teacherName,students) {
    teacher.add(teacherName);
    students.forEach(function (item,index) {
        student.add(item);
    })
}
exports.add=add;
import Mock from 'mockjs'

const url = {
    tableDataOne: 'http://20181024Mock.com/mode1/tableDataOne',
    tableDataTwo: 'http://20181024Mock.com/mode1/tableDataTwo',
    tableDataThi: 'http://20181024Mock.com/mode1/tableDataThi',
}
module.exports = [
    Mock.mock(url.tableDataOne, {
        "code": 1,
        "msg": "请求接口成功",
        'dataSource|5': [{
            'key|+1': 1,
            'num|1': ['72016120591', '72016120592', '72016120598', '72016120594', '72016120593'],
            'sex|1': ['男', '女', ],
            'room|1': ['D2615', 'D2614', 'D2618'],
            "name|1": ["张三", "李四"]
        }]
    })
]
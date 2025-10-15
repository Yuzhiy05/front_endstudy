

function es6learn() {
    let a = 1;

    console.log(`\zzzthis is a string: ${a}`);

    function loop(str, ...values) {
        console.log(str);
        str.forEach((strraw) => {
            console.log(strraw);
            //console.log('\n');
        }
        );
        return str.raw[0];
    }

    function row(str) {
        let raw = String.raw(str);
    }

    let max = 10000;
    let min = 1;
    let rand = Math.floor(Math.random() * (max - min + 1) + min);
    //console.log(
    loop`hello the ${rand} world`;

    console.log(String.raw`hello\n${rand}world`);

    console.log(Object.getOwnPropertyNames`hello`);
    //);


    function findPropertyOrigin(obj, propName = 'raw') {
        // 1. 先检查是否是自身的属性
        if (obj.hasOwnProperty(propName)) {
            return {
                type: '自身属性',
                value: obj[propName],
                object: obj
            };
        }

        // 2. 如果不是自身的，就沿着原型链向上查找
        let currentProto = Object.getPrototypeOf(obj);

        while (currentProto !== null) {
            if (currentProto.hasOwnProperty(propName)) {
                return {
                    type: '继承属性',
                    fromPrototype: currentProto,
                    value: currentProto[propName],
                    propName: propName
                };
            }
            currentProto = Object.getPrototypeOf(currentProto); // 继续往上一层原型找
        }

        // 3. 如果原型链上都没有，则属性不存在
        return {
            type: '属性不存在'
        };
    }

    console.log(findPropertyOrigin`134`);

    let aaa = 10;
    console.log(Object.getOwnPropertyNames`123${aaa}456`);
    console.log(Object.keys`123${aaa}456`);

    console.log(Object.getOwnPropertySymbols(`123${aaa}456`));
    console.log(Object.keys(`123${aaa}456`));

    console.log(Object.getOwnPropertyNames('123${aaa}456'));
    console.log(Object.keys('123${aaa}456'));
}

console.log(String.raw`Hi\n${2 + 3}!`)

//给模板字符串用的
//console.log(String.raw('Hi\u000A!'))
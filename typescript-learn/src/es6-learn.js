

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

//console.log(String.raw`Hi\n${2 + 3}!`)

//给模板字符串用的
//console.log(String.raw('Hi\u000A!'))



function test() {
    function test_bool(...args) {
        args.forEach((arg) => {
            console.log(arg);
        });
    }

    test_bool(
        Number.isInteger(25), // true
        Number.isInteger(25.0), // true
        Number.isInteger(3.0000000000000002), // true
        Number.isInteger(5E-324), // false
        Number.isInteger(5E-325), // true
    )
}

function logExpr(...args) {
    const error = new Error();
    const callerLine = error.stack.split('\n')[2];

    // 提取调用表达式
    const exprMatch = callerLine.match(/logExpr\((.*)\)/);
    if (exprMatch) {
        const expressions = exprMatch[1].split(',').map(s => s.trim());

        console.group('表达式调试');
        expressions.forEach((expr, i) => {
            console.log(`${expr} =`, args[i]);
        });
        console.groupEnd();
    }

    return args.length === 1 ? args[0] : args;
}

// 使用
const width = 100, height = 50;
const area = logExpr(width * height);
const perimeter = logExpr(2 * (width + height));
const complex = logExpr(Math.PI * width ** 2 / 4);

// function debugArgs(...args) {
//     const error = new Error();
//     const stackLine = error.stack.split('\n')[2];
//     // 提取括号内的参数
//     const match = stackLine.match(/debugArgs\((.*)\)/);

//     if (match) {
//         const argExpressions = match[1].split(',').map(s => s.trim());
//         console.log('参数表达式:', argExpressions);
//         console.log('参数值:', args);
//     }

//     return args;
// }

// // 使用
// const a = 5, b = 3;
// debugArgs(a + b, a * b, Math.max(a, b));


function createDebugProxy() {
    return new Proxy({}, {
        get: (target, prop) => {
            return (...args) => {
                const error = new Error();
                const stackLine = error.stack.split('\n')[2];
                const exprMatch = stackLine.match(new RegExp(`${String(prop)}\\((.*)\\)`));

                if (exprMatch) {
                    console.log(`调用 ${String(prop)}:`);
                    console.log('  表达式:', exprMatch[1]);
                    console.log('  参数值:', args);
                }

                // 这里可以执行实际函数逻辑
                return args;
            };
        }
    });
}

const debug = createDebugProxy();

// 使用
const a = 10, b = 20;
debug.add(a + b, b - a);
debug.multiply(a * b, Math.sqrt(a));


function f(x=1,y){
  console.log(x,y);
}

f() // [1, undefined]
f(2) // [2, undefined]
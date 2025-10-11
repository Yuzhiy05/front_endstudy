// var f = function () {
//   console.log('1');
// }

// function f() {
//   console.log('2');
// }

// var arr = [1, 2, 3];

// var arrobj = [
//   { name: 'zhangsan', age: 20 },
//   [1, 2, 3],
//   function () { console.log('hello') }
// ]


// var arr2 = [, undefined, 3];

// console.log(arr2.length);

// arr2.forEach(item => {
//   console.log(item);
// });

// //加法
let test = function () {
    console.info(
        '%cThis text is styled!',
        'color: red; background: red; font-size: 24px;'
    )


    var x = Object.defineProperty({}, 'func', {
        value: function () {
            console.log('hello');
        },
        writable: false
    })
    x.func();
    x.func = 123;
    x.func();

    console.log(x.func);

    // console.log(1 + 2); //3

    var arry = [1, 2, 3].concat(['1', '2', '3']);

    console.log(arry.length);
    var arr3 = [1, 2, 3, '1', undefined, '3'];

    console.log(Array.isArray(arr3));

    console.log(Object.keys(arr3));

    var arrslice = arr3.slice(-2);
    console.log(arrslice);

    console.log(arr3.slice(0, 3));

    var arr4 = [111, 1011, 110];
    arr4.sort();
    console.log(arr4);

    arr4.sort((a, b) => a - b);
    console.log(arr4);

    var arr5 = arr4.map(a => a - 1);
    console.log(arr5);

    var arr6 = arr4.map((elem, index, arr) => {
        return null;
    });
    console.log(arr6);

    var arr7 = [1, 2, 3, 4, 5, 6,];
    console.log(arr7.length);

    var aa = arr7.forEach((elem, index) => {
        console.log(index);
        return 1;
    });

    var flasebool = new Boolean(false);
    if (new Boolean(false)) {
        console.log('true');
    }
    console.log(typeof flasebool);
    console.log(flasebool instanceof Boolean);
    console.log(flasebool.valueOf());

    [(10.055).toFixed(2), // 10.05
    (10.005).toFixed(2) // 10.01
    ].forEach(item => console.log(item));

    console.log(Date());
    console.log(new Date().toLocaleString());
    console.log(Date.now());
}

//json
let json_emample = function () {
    var jsonarr = [
        { "name": "zhangsan", "age": 20 },
        { "name": "lisi", "age": 30 },
        { "name": "wangwu", "age": 40 }
    ];

    var jsonstr = JSON.stringify(jsonarr);
    console.log(jsonstr);

    var jsonobj = JSON.parse(jsonstr);
    console.log(jsonobj);
}

var test_this = function () {
    var o = {
        f1: function () {
            console.log(this);
            var that = this;
            var f2 = function () {
                console.log(that);
            }();
        }
    }
    var o2 = {
        f1: function () {
            console.log(this);
            var f2 = function () {
                console.log(this);
            }();
        }
    }

    o.f1();
    o2.f1();
}


//使用call 固定this
var fixedthis = function () {
    var func = function () {
        return this;
    }
    var obj = {};

    console.warn(func.call(obj) === obj);
}







let func_test_let_or_var = () => {
    {
        var func_area_obj_var = 10;
    }

    console.log(func_area_obj_var);

    {
        let func_area_obj_let = 11;
    }

    console.log(func_area_obj_let);
}




//Function.prototype.

let func_prototype_series = function () {
    let obj_func_block = 10;

    let obj_for_call = {
        name: '114',
        length: '514'
    }
    let func_for_call = function () {
        console.log(this.name + this.length);
    }
    //U can dont define object property to call
    func_for_call.call(obj_for_call);
    func_for_call(obj_func_block);
};
//func_prototype_series();
let func_prototype_series_2 = function () {
    var obj = {};
    console.log(obj.hasOwnProperty('toString')) // false

    // 覆盖掉继承的 hasOwnProperty 方法
    obj.hasOwnProperty = function () {
        return true;
    };
    console.log(obj.hasOwnProperty('toString')) // true

    console.log(Object.prototype.hasOwnProperty.call(obj, 'toString')) // false
}
//func_prototype_series_2();

let func_prototype_series_3 = function () {
    let obj2 = {
        name: '114'
    }

    let func = function (name2) {
        console.log('call call func');
        console.log((this.name) + name2);
    }
    func.call(obj2, '514');
}
//func_prototype_series_3();


let convert_array_like = function () {
    console.log([1, 32, 3, 5].slice());

    let array_like = {
        1: '1',
        2: '5',
        5: '6',
        length: 3
    }

    let array_is = Array.prototype.slice.apply(array_like);
    console.log(Array.isArray(array_like));
    console.log(Array.isArray(array_is));
};

let func_prototype_series_4 = function () {

    let for_bind = {
        name: '114'
    }

    let apply_bind = function () {
        console.log('apply_bind');
        console.log(this === for_bind)
    }
    let binded = function () {
        apply_bind.apply(for_bind);
    }

    binded();

    let bind_func_obj = {
        name: '114514',
        func: function () {
            console.log(this.name);
        }
    }
    let binded_func = bind_func_obj.func;

    binded_func();
    let other_obj = {
        name: '514'
    };
    let binded_func2 = bind_func_obj.func.bind(bind_func_obj);
    let binded_func3 = bind_func_obj.func.bind(other_obj);
    binded_func2();
    binded_func3();
};
func_prototype_series_4();

let oop_test = function () {
    let People = function (name = '114', end_name = '514', age = 24) {
        this.name = name;
        this.end_name = end_name;
        this.age = age;
        this.func = function () {
            console.log(`${this.age} duse`)
        }
    };

    let beast = new People();
    beast.func();

    People.prototype.color = 'white';
    console.info(beast.color);

    console.log(People.prototype);

    People.prototype = {
        constructor: People,
        name2: '1919',
        fuc_super: function () {
            console.log('调用原型对象')
        }
    };
    People.prototype.assg
    console.log(People.prototype);
    console.log(Object.getPrototypeOf(beast));
    console.info(beast.color);

    let new_obj = new People();
    console.log(new_obj.color);
    console.log(new_obj.name2);

};


oop_test();

let oop_derived = function () {
    let Base = function (name) {
        let name2 = '111';
        this.name = name;
    }

    let Derived = function (name, age) {
        Base.call(this, name);
        this.age = age;
    }

    Derived.prototype = Object.create(Base.prototype);
    Derived.prototype.constructor = Derived;

    let new_obj = new Derived('114', '514');
    console.log(Base.name2);

}
oop_derived();

let func_arrow = function () {
    let varry = [1, 2, 3, 4, 5, 6];
    for (let x in varry) {
        console.log(x);
    }

    varry.map((value) => {
        console.log(value);
    });
    let result = new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // 假设异步操作成功了

            if (success) {
                resolve("操作成功，这是结果"); // ✅ 调用 resolve，并传入结果
            } else {
                reject(new Error("操作失败")); // ❌ 调用 reject
            }
        }, 1000);
    });

    result.then((value) => {
        console.log("成功:", value);
    }, (error) => {
        console.log("失败:", error);
    })
};

let func_global_test = function () {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("循环值为:" + i)

    console.log(i === global.i);
}

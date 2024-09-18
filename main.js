const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4, e: 5, f: 6};
const obj3 = {g: "qwerty", e:"", f: 12, h:false, j:"&"}

// masala 1
for (const key in obj2) {
    obj1[key] = obj2[key];
}
console.log(obj1);

// masala 2

function myReduce(values){
    let s = 0;
    for(let i = 0; i < values.length; i++){
        s += +values[i];
    }
    console.log(s)
}
myReduce(Object.values(obj2));

// masala 3

function displayKeys(keys){
    return keys;
}

displayKeys(Object.keys(obj2));

// masala 4

function displayKeys(values){
    return values;
}

displayKeys(Object.values(obj2));

// masala 5

function checkKeys(key, keys){
    if(keys.includes(key)){
        return true;
    }
    return false;
}

console.log(checkKeys("b", Object.keys(obj2)))
console.log(checkKeys("b", Object.keys(obj1)))

// masala 6

function countTypes(values) {
    let counts = {
        number: 0,
        null: 0,
        undefined: 0,
        string: 0,
        bigint: 0,
        boolean: 0,
        symbol: 0
    };

    for (let i = 0; i < values.length; i++) {
        let value = values[i];
        if (value === null) {
            counts.null++;
        } else {
            let type = typeof value;
            if (type === "number") {
                if (Number.isInteger(value)) {
                    counts.number++;
                } else {
                    counts.number++;
                }
            } else if (type === "string") {
                counts.string++;
            } else if (type === "boolean") {
                counts.boolean++;
            } else if (type === "undefined") {
                counts.undefined++;
            } else if (type === "symbol") {
                counts.symbol++;
            } else if (type === "bigint") {
                counts.bigint++;
            }
        }
    }
    return counts;
}

let result = countTypes(Object.values(obj3));
result = Object.entries(result);
console.log(result.filter(([keys, value]) => value !== 0));

// masala 7

function addInObj(obj, key, value){
    obj[key] = value;
    return obj;
}

console.log(addInObj(obj2, "z", 21));

// -----------------------------------------------------------------------

// document.addEventListener('DOMContentLoaded', function () {
//     var swiper = new Swiper('.swiper-container-movies', {
//         slidesPerView: 'auto',
//         loop: true,
//         autoplay: {
//             delay: 1000,
//             disableOnInteraction: false,
//         },
//         speed: 5000,
//         freeMode: true,
//         spaceBetween: 0,
//         breakpoints: {
//             768: {
//                 slidesPerView: 'auto',
//                 spaceBetween: 0,
//             }
//         }
//     });
// });


document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        loop: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,            
        },
        speed: 3000,
        spaceBetween: 0,
    });
});

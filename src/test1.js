// const Weekday =["Mon","Tue","Wed","Thu","Fri"];     //定数として使うもの
// // let Weekday =["Mon","Tue","Wed","Thu","Fri"];    //変数として使うもの


// function isWeekday(dayOfWeek){                      //関数の宣言
//     for( let i=0; i<Weekday.length; i++ ){          //配列に結果を格納するためにループ
//         if( Weekday[i] == dayOfWeek ){              //平日の場合にはtrue
//             return true;
//         }else{                                      //休日の場合にはfalse
//             return false;
//         }
//     }
// }
// console.log(isWeekday("Mon"))

const showUserOptions = (options) =>{
    console.log(`User: name:${options.name}, age; ${options.age}`);
};

showUserOptions({name: 'Ken the Ninja', age: 20})
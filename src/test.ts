import type {User} from './type.tsx';
 
// const users : User[] = [
//     {id :1, names : '田中れいな', age : 25},
//     {id :2, names : '鈴木太郎', age : 30},
//     {id :3, names : '山田花子'}
// ];


const user1: User = { id:1, names: '田中れいな', age: 25};
const user2: User = { id:2, names: '鈴木太郎', age: 30};
const user3: User = { id:3, names: '山田花子'};

// const isAdult = (user:User): boolean => {
//     if(user.age !== undefined && user.age >= 20){
//         return true;
//     }else{
//     return false;
//     };
// };


// 1. バラバラのユーザーをひとつの配列にまとめる
const allusers = [user1, user2, user3];

// 2. 配列をループして、ひとりずつ表示する
allusers.forEach((user) => {
    // 名前と、年齢（なければメッセージ）を並べて表示
    console.log(user.names, user.age ?? '年齢ないよ！');
});
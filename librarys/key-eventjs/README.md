# key-event.js

- [key-event.js](https://raw.githubusercontent.com/kelp-of-truth/kelp-of-truth/main/librarys/key-event.js)
- [key-event.min.js](https://raw.githubusercontent.com/kelp-of-truth/kelp-of-truth/main/librarys/key-event.min.js)
## キーの状態の取得
### 構文
```js
Key.state; // 0: up 1: down 2: pressing
```
キーが押されていない場合は0が返され、キーを押下してから１回目に取得したときのみ1が返されます。以降はキーを上げるまでは2が返され続けます。
### 例
```js
setInterval=(()=>{
  if(keyA.state===1){
    console.log("keyA pressed");
  }
},1)
```

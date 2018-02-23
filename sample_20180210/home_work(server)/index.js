
// ポート番号を定数（再代入不可）で指定しておく
const PORT = 8888;

// http モジュールでサーバを起動する
let http = require('http');

// http.createServer でサーバのインスタンスを生成
let server = http.createServer();

// サーバにリクエストがあった場合の処理を on を使って登録
// 第一引数 イベントの種類 今回はリクエストがった場合を想定して request
// 第二引数 イベントが起こった時のコールバック関数
server.on('request', (request, response) => {
    // レスポンスヘッダの設定
    // 200 is Standard response for successful HTTP requests
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    //end に フォーマットした日付文字列を渡して終了
    response.end(formatDate(new Date()));
});

// サーバのPORTにリクエストがあった時の処理
server.listen(PORT);

// サーバが起動したことをメッセージとして出力
console.log('server running!');
console.log('http://localhost:' + PORT);

/**
 * Date 型のデータをフォーマットして返す
 * @param {Date} date - フォーマットする Date 型のデータ
 * @param {string} [delimiter='/'] - 年月日の区切り文字
 */
function formatDate(date, delimiter = '/') {
    let y = date.getFullYear();  // 四桁の年
    let m = date.getMonth() + 1; // 月（０始まり）
    let d = date.getDate();      // 日
    let h = date.getHours();     // 時
    let i = date.getMinutes();   // 分
    let s = date.getSeconds();   // 秒
    return y + delimiter + m + delimiter + d + ' ' + h + ':' + i + ':' + s;
}

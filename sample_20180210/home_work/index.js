// fs モジュールはファイルの入出力を行うモジュール
let fs = require('fs');
let path = require('path');

let d = new Date();
let f = formatDate(d);

const MY_NAME = 'Ryosuke_Shimizu';

// ファイル名
let file_name = f+'_'+MY_NAME+'.txt';

// 実行中のスクリプトからの相対パスを取得
let p = path.join(__dirname, file_name)

// ファイルの中身
let content = "test";

/**
 * ファイルに〜の文字列を出力する
 * 第一引数に出力するパス（p）、第二引数に書き込む内容（f）
 * 第三引数に処理終了後に呼ばれるコールバック関数を渡す
 * @type {[type]}
 */
fs.writeFile(p, content, (error) => {
  if(error) {
    // なんらかのエラーが起きている場合は例外をスロー
    throw error;
  }
  console.log('success output file');
});

/**
 * [日付（年月日を出力する関数）]
 * @param  {[Date]} date [日付（年月日を出力する関数）のタイムスタンプ]
 * @return {[String]}      [タイムスタンプを年月日に置き換えたやつ]
 */
function formatDate (date) {
  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();
  return y+''+m+''+d;
}

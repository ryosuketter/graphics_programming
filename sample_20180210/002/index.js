
// Date インスタンスを生成
// カッコに何も入れてない場合は現在時
let d = new Date();

// フォーマット済みの文字列として出力
console.log(formatDate(d, "-"));

/**
 * Date 型のデータをフォーマットして返す
 * JS Doc を書く習慣をつける時は、この関数が何を意味するかをコメントしておく
 * @param => 引数に関する情報{データ型}引数の名前（期待される引数に関する情報）
 * @return {string} 戻り値（期待される戻り値に関する情報）
 *
 * @param {Date} date - フォーマットする Date 型のデータ
 * @param {string} [delimiter='/'] - 年月日の区切り文字
 */
function formatDate(date, delimiter = '/'){
    let y = date.getFullYear();  // 四桁の年
    let m = date.getMonth() + 1; // 月（０始まり）
    let d = date.getDate();      // 日
    let h = date.getHours();     // 時
    let i = date.getMinutes();   // 分
    let s = date.getSeconds();   // 秒
    return y + delimiter + m + delimiter + d + ' ' + h + ':' + i + ':' + s;
}

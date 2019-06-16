window.onload = function(){
    setSheat();
};

function setsheat() {
    var target = document.getElementById("canvas");
    target.innerHTML = "";
    //--有効座席
    var table_enable = [
        [0, 0, 0, 0, 1, 3],
        [0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [1, 1, 2, 2, 1, 1],
        [2, 2, 2, 2, 2, 2]
    ];

    //--座席(名簿番号)
    var table_num=[
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ];

    //--有効名簿番号
    var users=[
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [301, 302, 304, 305, 309, 310, 311, 312, 313, 314, 315, 316, 318, 322, 323, 324, 325, 326, 327, 328, 330, 331, 333, 334, 335, 336, 338, 339, 340, 341, 342, 343, 337, 307],
        [319, 320, 321, 308, 306, 317, 329, 332],
        [344]
    ];

    //--座席でforeach
    for(var x = 0; x < table_enable.length; x++){
        for(var y = 0; y < table_enable[0].length; y++){
            // stype:座席タイプ(0:null 1:random 2:special)
            var stype = table_enable[x][y];
            // tmplist:座席タイプに合った名簿番号リスト
            var tmplist = users[stype];

            //tmplistからランダムに取り出し、その要素を削除する
            var idx = Math.floor(Math.random() * tmplist.length);
            var tmp = tmplist[idx];
            //範囲外飛び出し防止
            if(tmp == undefined) tmp = 0;
            table_num[x][y] = tmp; //テーブルに当てはめる
            users[stype].splice(idx, 1);
        }
    }

    //--座席でforeach
    for(var x = 0; x < table_num.length; x++){
        for(var y = 0; y < table_num[0].length; y++){
            var tmp = table_num[x][y]
            if(tmp != 0){
                target.innerHTML += ( '000' + tmp ).slice(-3) + "|";
            }else{
                target.innerHTML += "000|";
            }
        }
        target.innerHTML += "<br>";
    }

};

//--
function rand(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
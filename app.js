document.getElementById("btn").addEventListener("click", hai);

function hai() {
var emojiS = ["😂","😶","😮","😍","🤑","🤕","😛","😀","😎","😡","🤓","😇","😞","😑","😙","😝","😜","😖","😨","😭","🤐","😳","😴","😋","😐","😱","😤","😷","😘","😌"];
    document.getElementById("test").innerHTML = emojiS [Math.floor(Math.random()*emojiS.length)];
}

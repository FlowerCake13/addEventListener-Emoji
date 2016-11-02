      document.getElementById("btn").addEventListener("click", hai);
  function hai()  {
    var emojiS = ["😂","😶","😮","😍","🤑","🤕","😛","😀","😎","😡","🤓"
                 ,"😇","😞","😑","😙","😝","😜","😖","😨","😭","🤐","😳","😴","😋","😐","😱","😤","😷","😘","😌"];
      document.getElementById("empty").innerHTML = emojiS [Math.floor(Math.random()*emojiS.length)];
                   }

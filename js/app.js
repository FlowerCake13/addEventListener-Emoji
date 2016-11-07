      document.getElementById("btn").addEventListener("click", hai);
  function hai()  {
    var emojiS = ["😀","😬","😁","😂","😃","😄","😅","😆","😇","😉","😊","🙂","🙃","☺️","😋","😌","😍","😘","😗","😙","😚"
                  ,"😜","😝","😛","🤑","🤓","😎","🤗","😏","😶","😐","😑","😒","🙄","🤔","😳","😞","😟","😠","😡","😔","😕"
                  ,"🙁","☹️","😣","😖","😫","😩","😤","😮","😱","😨","😰","😯","😦","😧","😢","😥","😪","😓","😭","😵","😲"
                  ,"🤐","😷","🤒","🤕","😴"];
      document.getElementById("empty").innerHTML = emojiS [Math.floor(Math.random()*emojiS.length)];
                   }

      document.getElementById("food").addEventListener("click", haf);
  function haf()  {
    var emojiS = ["🍏","🍎"];
      document.getElementById("emptyf").innerHTML = emojiS [Math.floor(Math.random()*emojiS.length)];
                   }

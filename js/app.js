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
    var emojiS = ["🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🍈","🍒","🍑","🍍","🍅","🍆","🌶","🌽","🍠","🍯","🍞","🧀","🍗"
                 ,"🍖","🍤","🍳","🍔","🍟","🌭","🍕","🍝","🌯","🌮","🍜","🍲","🍥","🍣","🍱","🍛","🍙","🍚","🍘","🍢","🍡","🍧"
                  ,"🍨","🍦","🍰","🎂","🍮","🍬","🍭","🍫","🍿","🍩","🍪"]; 
      document.getElementById("emptf").innerHTML = emojiS [Math.floor(Math.random()*emojiS.length)];
                   }

  document.getElementById("reset1").addEventListener("click", reset1);
  function reset1()  {
    var space = ["Nope", "Hai!"]; 
      document.getElementById("empty").innerHTML = space [Math.floor(Math.random()*emojiS.space)];
                   }
  
 document.getElementById("reset2").addEventListener("click", reset1);
  function reset1()  {
    var space = ["Nope", "Hai!"]; 
      document.getElementById("emptf").innerHTML = space [Math.floor(Math.random()*emojiS.space)];
                   }
  

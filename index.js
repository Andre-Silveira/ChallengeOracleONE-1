function criptografar() {
   var input = document.querySelector("#criptografar");
   var criptografar = input.value;
   var result = "";

   for (let index = 0; index < criptografar.length; index++) {
      // console.log(criptografar.substring(index,1))
      switch (criptografar.substring(index, index + 1)) {
         case "a":
            result = result + "ai";
            break;
         case "e":
            result = result + "enter";
            break;
         case "i":
            result = result + "imes";
            break;
         case "o":
            result = result + "ober";
            break;
         case "u":
            result = result + "ufat";
            break;
         default:
            result = result + criptografar.substring(index, index + 1);
            break;
      }

      // if(criptografar.substring(index,1) == 'a')  result = result + 'ai';
      // else if(criptografar.substring(index,index+1) == 'e')  result = result + 'enter';
      // else if(criptografar.substring(index,index+1) == 'i')  result = result + 'imes';
      // else if(criptografar.substring(index,index+1) == 'o')  result = result + 'ober';
      // else if(criptografar.substring(index,index+1) == 'u')  result = result + 'ufat';
      // else result = result + criptografar.substring(index,1);
   }

   document.querySelector("#mensagem").value = result;

   var labelMSG = document.getElementById("labelMSG");

   labelMSG.innerHTML = "Mensagem criptografa: ";
}

function descriptografar() {
   var input = document.querySelector("#descriptografar");
   var descriptografar = input.value;
   var result = "";

   descriptografar = descriptografar.replaceAll("ai", "a");
   descriptografar = descriptografar.replaceAll("enter", "e");
   descriptografar = descriptografar.replaceAll("imes", "i");
   descriptografar = descriptografar.replaceAll("ober", "o");
   descriptografar = descriptografar.replaceAll("ufat", "u");

   document.querySelector("#mensagem").value = descriptografar;

   var labelMSG = document.getElementById("labelMSG");

   labelMSG.innerHTML = "Mensagem descriptografada: ";
}

function copy(id) {
   var input = document.querySelector(id);
   input.select();
   document.execCommand("copy");
}

function limpar() {
   console.log("teste clear");
   let descriptografar = document.querySelector("#descriptografar");
   let criptografar = document.querySelector("#criptografar");
   let msg = document.querySelector("#mensagem");

   descriptografar.value = "";
   criptografar.value = "";
   msg.value = "";
}

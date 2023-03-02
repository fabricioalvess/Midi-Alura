    function tocaSom(seletorAudio){
          const elemento = document.querySelector(seletorAudio);
          if(elemento && elemento.localName === 'audio'){
                elemento.play();           
          }else{
            console.log("erro")
          }
        
    };

    const listButtons = document.querySelectorAll(".tecla");
    
    for(let a = 0; a < listButtons.length; a++){

        const tecla = listButtons[a];//0 1 2...
        const instrumento = tecla.classList[1];//nome da variavel
        const idAudio = `#som_${instrumento}`;//criando uma string 

       tecla.touchstart= function(e){//quando clicar na tecla
        tocaSom(idAudio);//funcao tocasom recebe id audio.
       }
       
    tecla.onkeydown = function(e){

        if(e.code === 'Space' || e.code ==='Enter'){
            tecla.classList.add("ativa");
        }
        
            tecla.onkeyup = function(){
                tecla.classList.remove("ativa");      
            }
    }
       
       
    };

       

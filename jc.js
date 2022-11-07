function muda() {

    //muda forma
    forma = document.getElementById('foo').className;

    cont = forma.length; //pega numero total de caracteres da string
    if (cont <= 4) { //verifica se é aprimeira vez , na primeira vez o valor não passa de 4 

    } else {
        forma = forma.slice(0, 17) // pega so o nome de primeira class 
        forma = forma.replace(/\s/g, ''); // remove os espaços em branco 
    }
    num = Math.floor(Math.random() * 33 + 1); //gera valor aleatorio para mudar
    switch (num) {
        case 1:
            if (forma != 'quadrado-multi2') {
                document.getElementById('foo').className = 'quadrado-multi2         ';
            } else {
                document.getElementById('foo').className = 'paralelogramo           ';
            }
            break;
        case 2:
            if (forma != 'quadrado-multi1') {
                document.getElementById('foo').className = 'quadrado-multi1          ';
            } else {
                document.getElementById('foo').className = 'meia-lua                   ';
            }
            break;
        case 3:
            if (forma != 'retangulo-multi4') {
                document.getElementById('foo').className = 'retangulo-multi4          ';
            } else {
                document.getElementById('foo').className = 'pentagon                ';
            }
            break;
        case 4:
            if (forma != 'retangulo-multi3') {
                document.getElementById('foo').className = 'retangulo-multi3          ';
            } else {
                document.getElementById('foo').className = 'hexagono                     ';
            }
            break;
        case 5:
            if (forma != 'retangulo-multi2') {
                document.getElementById('foo').className = 'retangulo-multi2          ';
            } else {
                document.getElementById('foo').className = 'octogono                  ';
            }
            break;
        case 6:
            if (forma != 'retangulo-multi1') {
                document.getElementById('foo').className = 'retangulo-multi1           ';
            } else {
                document.getElementById('foo').className = 'lupa                      ';
            }
            break;
        case 7:
            if (forma != 'trapesio') {
                document.getElementById('foo').className = 'trapesio             ';
            } else {
                document.getElementById('foo').className = 'estrelaCinco            ';
            }
            break;
        case 8:
            if (forma != 'losango') {
                document.getElementById('foo').className = 'losango                  ';
            } else {
                document.getElementById('foo').className = 'rombo                ';
            }
            break;
        case 9:
            if (forma != 'lua') {
                document.getElementById('foo').className = 'lua                ';
            } else {
                document.getElementById('foo').className = 'estrelaSeis            ';
            }
            break;
        case 10:
            if (forma != 'infinito') {
                document.getElementById('foo').className = 'infinito           ';
            } else {
                document.getElementById('foo').className = 'lua               ';
            }
            break;
        case 11:
            if (forma != 'coracao') {
                document.getElementById('foo').className = 'coracao           ';
            } else {
                document.getElementById('foo').className = 'retangulo-multi4     ';
            }
            break;
        case 12:
            if (forma != 'estrelaSeis') {
                document.getElementById('foo').className = 'estrelaSeis     ';
            } else {
                document.getElementById('foo').className = 'estrella-12     ';
            }
            break;
        case 13:
            if (forma != 'estrelaCinco') {
                document.getElementById('foo').className = 'estrelaCinco     ';
            } else {
                document.getElementById('foo').className = 'quarto-de-lua     ';
            }
            break;
        case 14:
            if (forma != 'cruz') {
                document.getElementById('foo').className = 'cruz              ';
            } else {
                document.getElementById('foo').className = 'infinito             ';
            }
            break;
        case 15:
            if (forma != 'rombo') {
                document.getElementById('foo').className = 'rombo              ';
            } else {
                document.getElementById('foo').className = 'retangulo-multi2     ';
            }
            break;
        case 16:
            if (forma != 'estrella-12') {
                document.getElementById('foo').className = 'estrella-12             ';
            } else {
                document.getElementById('foo').className = 'coracao             ';
            }
            break;
        case 17:
            if (forma != 'lupa') {
                document.getElementById('foo').className = 'lupa              ';
            } else {
                document.getElementById('foo').className = 'cruz              ';
            }
            break;
        case 18:
            if (forma != 'nonagon') {
                document.getElementById('foo').className = 'nonagon              ';
            } else {
                document.getElementById('foo').className = 'retangulo              ';
            }
            break;
        case 19:
            if (forma != 'octogono') {
                document.getElementById('foo').className = 'octogono              ';
            } else {
                document.getElementById('foo').className = 'triangulo-obtuso     ';
            }
            break;
        case 20:
            if (forma != 'pentagono') {
                document.getElementById('foo').className = 'pentagono              ';
            } else {
                document.getElementById('foo').className = 'retangulo-multi1     ';
            }
            break;
        case 21:
            if (forma != 'hexagono') {
                document.getElementById('foo').className = 'hexagono              ';
            } else {
                document.getElementById('foo').className = 'hexagono              ';
            }
            break;
        case 22:
            if (forma != 'retangulo') {
                document.getElementById('foo').className = 'retangulo              ';
            } else {
                document.getElementById('foo').className = 'trapesio              ';
            }
            break;
        case 23:
            if (forma != 'quarto-de-lua') {
                document.getElementById('foo').className = 'quarto-de-lua     ';
            } else {
                document.getElementById('foo').className = 'losango             ';
            }
            break;
        case 24:
            if (forma != 'meia-lua') {
                document.getElementById('foo').className = 'meia-lua              ';
            } else {
                document.getElementById('foo').className = 'quadrado-multi1     ';
            }
            break;
        case 25:
            if (forma != 'paralelogramo') {
                document.getElementById('foo').className = 'paralelogramo     ';
            } else {
                document.getElementById('foo').className = 'quadrado-multi2     ';
            }
            break;
        case 26:
            if (forma != 'triangulo-obtuso') {
                document.getElementById('foo').className = 'triangulo-obtuso     ';
            } else {
                document.getElementById('foo').className = 'retangulo-multi3     ';
            }
            break;
        case 27:
            if (forma != 'triangulo') {
                document.getElementById('foo').className = 'triangulo              ';
            } else {
                document.getElementById('foo').className = 'quadrado-multi2     ';
            }
            break;
        case 28:
            if (forma != 'quadrado') {
                document.getElementById('foo').className = 'quadrado     ';
            } else {
                document.getElementById('foo').className = 'ball             ';
            }
            break;
        case 29:
            if (forma != 'ball') {
                document.getElementById('foo').className = 'ball              ';
            } else {
                document.getElementById('foo').className = 'quadrado              ';
            }
            break;
			 case 30:
            if (forma != 'trapezio') {
                document.getElementById('foo').className = 'trapezio              ';
            } else {
                document.getElementById('foo').className = 'quadrado              ';
            }
            break;
			 case 31:
            if (forma != 'heptagono') {
                document.getElementById('foo').className = 'heptagono              ';
            } else {
                document.getElementById('foo').className = 'ball             ';
            }
            break;
			 case 32:
            if (forma != 'close') {
                document.getElementById('foo').className = 'close              ';
            } else {
                document.getElementById('foo').className = 'heptagono             ';
            }
            break;
			case 33:
            if (forma != 'aleatorio1') {
                document.getElementById('foo').className = 'aleatorio1              ';
            } else {
                document.getElementById('foo').className = 'hexagono             ';
            }
            break;
    }
    forma = document.getElementById('foo').className;
    
     
     trocaCor();
     move();
}


function trocaCor() {
    //muda a cor 
    let r = Math.floor(Math.random() * 255),
        g = Math.floor(Math.random() * 255),
        b = Math.floor(Math.random() * 255);
    //document.getElementById("foo").style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ') ' + cor; //muda a cor após randomico
    document.getElementById('foo').backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    //document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    cor = Math.floor(Math.random() * 8 + 1) //gera valor aleatorio para mudar
    switch (cor) {
        case 1:
            document.getElementById('foo').className = forma + 'azul ';
            break;
        case 2:
            document.getElementById('foo').className = forma + 'vermelho ';
            break;
        case 3:
            document.getElementById('foo').className = forma + 'verde ';
            break;
        case 4:
            document.getElementById('foo').className = forma + 'roxo ';
            break;
        case 5:
            document.getElementById('foo').className = forma + 'azul-esverdeado ';
            break;
            case 6:
                document.getElementById('foo').className = forma + 'branco ';
                break;
                case 7:
                    document.getElementById('foo').className = forma + 'preto ';
                    break;
                    case 8:
                        document.getElementById('foo').className = forma + 'rosa ';
                        break;
    }

} 


function  move (){
    
    const f = document.getElementById('foo');
    document.addEventListener('click', (ev) => {
        f.style.transform = `translateY(${ev.clientY - 25}px)`;
        f.style.transform += `translateX(${ev.clientX - 25}px)` ;
    }, false);
    altera_tamanho();//muda tamanho antes da cor
    
    
  }


function altera_tamanho() {

    TamanhoRan = Math.floor(Math.random() * 5 + 1) //gera valor aleatorio para mudar
    switch (TamanhoRan) {
        case 1:
            document.getElementById('foo').className = forma + 'pequeno ';
            tamanho ='pequeno ';
            break;
        case 2:
            document.getElementById('foo').className = forma + 'medio1 ';
            tamanho ='medio1 ';
            break;
        case 3:
            document.getElementById('foo').className = forma + 'medio2 ';
            tamanho ='medio2 ';
            break;
        case 4:
            document.getElementById('foo').className = forma + 'medio3 ';
            tamanho ='medio3';
            break;
        case 5:
            document.getElementById('foo').className = forma + 'grande ';
            tamanho ='grande ';
            break;
    }
  
   
}

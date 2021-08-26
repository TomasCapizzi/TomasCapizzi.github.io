'use strict'
const body = document.getElementById('body');


function lenguajeEsp() {
    body.innerHTML = `
<header class="menu">
    <div class="links" id="menu-normal">
        <ul>
            <li><a href="" class="link" id="link-home">Inicio</a></li>
            <li>|</li>
          <li><a href="#sobre-mi" class="link" id="link-yo">Sobre mí</a></li>
          <li>|</li>
          <li><a href="#proyectos" class="link" id="link-proyectos">Proyectos</a></li>
          <li>|</li>
          <li><a href="#contacto" class="link" id="link-contacto">Contacto</a></li>

      </ul>
    </div>
    <div class="menu-der">
        <div class="idioma">
                <ul>
                    <li id="espanol">ES</li>
                    <li>/</li>
                    <li id="ingles">EN</li>
                </ul>
            </div>
    </div>
</header>
<header class="menu-responsive">
    <div class="menu-hamburguesa" id="menu-h">
        <button class="boton" id="btn-burga"><i class="fas fa-bars"></i></button>
         <nav id="lista">
             <ul>
               <li><a href="" class="h-link">Inicio</a></li>
               <li><a href="#sobre-mi" class="h-link">Sobre Mí</a></li>
               <li><a href="#proyectos" class="h-link">Proyectos</a></li>
               <li><a href="#contacto" class="h-link">Contacto</a></li>
           </ul>
        </nav>
    </div>
    <div class="menu-der">
        <div class="idioma">
                <ul>
                    <li id="espanol-responsive">ES</li>
                    <li>/</li>
                    <li id="ingles-responsive">EN</li>
                </ul>
            </div>
    </div>
</header>
<div class="contenedor">
<div class="cv">
    <h2 class="subtitle" id="sobre-mi">Sobre mí</h2>
    <div class="descripcion">
        <img src="media/115.jpg" alt="foto-perfil">
        <p>Hola! Soy Tomas Capizzi, productor digital y actualmente enfoncandome en Desarrollo Front-End, con conocimientos en JavaScript, HTML y CSS; y aprendiendo React.
            <br><br> Estos últimos meses decidí enfoncar mi tiempo libre en aprender algo que me interesaba desde hacía tiempo y habia realizado algunos cursos unos años anteriores, que es el desarrollo web.
            <br> Complementando estos conocimientos con la que carrera donde me encuentro cursando las últimas materias, la Licenciatura en Artes Digitales enfocado en lo Audiovisual.
        </p>
    </div>
</div>
<div class="iconos">
    <ul>
        <li><i class="fab fa-html5"></i></li>
        <li><i class="fab fa-css3-alt"></i></li>
        <li><i class="fab fa-js-square"></i></li>
        <li><i class="fab fa-react"></i></li>
        <li><i class="fab fa-github"></i></li>
        <li><i class="fab fa-wordpress"></i></li>
        <li><img src="media/icono/photoshop.svg" alt="logo Photoshop"></li>
        <li><img src="media/icono/illustrator.svg" alt="Logo Illustrator"></li>
        <li><img src="media/icono/premiere.svg" alt="Logo Premiere"></li>
        <li><img src='media/icono/after-effects.svg'></li>
    </ul>
</div>
<div class="listado-proyectos">
    <h2 class="subtitle" id="proyectos">Proyectos</h2>
    <div class="list">
        <div class="proyecto">
            <div class="titulo">
                <h3>Brewers</h3>
            </div>
            <a href="https://tomascapizzi.github.io/brewers/" target="_blank"><img src="media/webs/brewers.PNG" alt=""></a>
        </div>
        <div class="proyecto">
            <div class="titulo">
                <h3>Pokédex</h3>
            </div>
            <a href="https://tomascapizzi.github.io/pokedex/" target="_blank"><img src="media/webs/pokedex.PNG" alt=""></a>
        </div>
        <div class="proyecto">
        <div class="titulo">
            <h3>Memotest</h3>
        </div>
        <a href="https://tomascapizzi.github.io/memotest/" target="_blank"> <img src="media/webs/memotest.PNG" alt=""></a>
        </div>
        <div class="proyecto">
            <div class="titulo">
                <h3>Control de Gastos</h3>
            </div>
            <a href="https://tomascapizzi.github.io/gastos/" target="_blank"><img src="media/webs/gastos.PNG" alt=""></a>
        </div>
        <div class="proyecto">
            <div class="titulo">
                <h3>Rick y Morty App</h3>
            </div>
            <a href="https://tomascapizzi.github.io/rick-morty-app/" target="_blank"><img src="media/webs/rick_morty.PNG" alt=""></a>
        </div>
        <div class="proyecto">
            <div class="titulo">
                <h3>Famox SA</h3>
            </div>
            <a href="http://www.famox.com.ar" target="_blank"><img src="media/webs/famox.PNG" alt=""></a>
        </div>
        <div class="proyecto">
            <div class="titulo">
                <h3>Notas</h3>
            </div>
            <a href="https://tomascapizzi.github.io/notas/" target="_blank"><img src="media/webs/notas1.PNG" alt=""></a>
        </div>
        <div class="proyecto">
            <div class="titulo">
                <h3>Presupuesto de Viaje</h3>
            </div>
            <img src="media/webs/budget_viaje.PNG" alt="">
        </div>
       
        <div class="proyecto">
            <div class="titulo">
                <h3>Memory Game</h3>
            </div>
            <a href="https://tomascapizzi.github.io/memory-game/" target="_blank"> <img src="media/webs/memory_game.PNG" alt=""></a>
        </div>
    </div>
</div>
<div class="contacto">
    <h2 class="subtitle" id="contacto">Contacto</h2>
    <p>Si mi perfil se adapta a lo que estas buscando, o algunos de mis proyectos te interesan, estoy abierto a recibir feedback y propuestas profesionales.¡No dudes en contactarte conmigo! </p>
    <div class="redes">
        <ul>
            <li><a href="https://www.linkedin.com/in/tomas-capizzi/" target="_blank"  alt="Linkedin Tomas Capizzi"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://github.com/TomasCapizzi" target="_blank"><i class="fab fa-github"></i></a></li>
            <li><a href="mailto:tomas.capizzi@hotmail.com" target="_blank"><i class="fas fa-envelope"></i></a></li>
            <li><a href="https://wa.link/sssxh3" target="_blank"><i class="fab fa-whatsapp"></i></a></i>
            </li>
        </ul>
    </div>
</div>
<div class="footer">
    <h5><i class="far fa-copyright"></i> Capizzi Tomas | 2021</h5>
</div>
</div>
`
    const btnEsp = document.getElementById('espanol');
    const btnIng = document.getElementById('ingles');

    btnEsp.addEventListener('click', () => {
        body.innerHTML = ''
        lenguajeEsp();
    });
    btnIng.addEventListener('click', () => {
        body.innerHTML = '';
        translate()
    });


    // Para el menú Responsive
    const btnEspResponsive = document.getElementById('espanol-responsive');
    const btnIngResponsive = document.getElementById('ingles-responsive');

    btnEspResponsive.addEventListener('click', () => {
        body.innerHTML = ''
        lenguajeEsp();
    });
    btnIngResponsive.addEventListener('click', () => {
        body.innerHTML = '';
        translate()
    });


    ////////////////

    const btnHamb = document.getElementById('btn-burga');
    const menu = document.getElementById('lista');

    btnHamb.addEventListener('click', () => {
        menu.classList.toggle('on');
    })

}

lenguajeEsp();

function translate() {
    body.innerHTML = `
    <header class="menu">
    <div class="links" id="menu-normal">
        <ul>
            <li><a href="" class="link" id="link-home">Home</a></li>
            <li>|</li>
          <li><a href="#sobre-mi" class="link" id="link-yo">About me</a></li>
          <li>|</li>
          <li><a href="#proyectos" class="link" id="link-proyectos">Projects</a></li>
          <li>|</li>
          <li><a href="#contacto" class="link" id="link-contacto">Contact</a></li>

      </ul>
    </div>
    <div class="menu-der">
        <div class="idioma">
                <ul>
                    <li id="espanol">ES</li>
                    <li>/</li>
                    <li id="ingles">EN</li>
                </ul>
            </div>
    </div>
</header>
<header class="menu-responsive">
    <div class="menu-hamburguesa" id="menu-h">
        <button class="boton" id="btn-burga"><i class="fas fa-bars"></i></button>
         <nav id="lista">
             <ul>
               <li><a href="" class="h-link">Home</a></li>
               <li><a href="#sobre-mi" class="h-link">About me</a></li>
               <li><a href="#proyectos" class="h-link">Projects</a></li>
               <li><a href="#contacto" class="h-link">Contact</a></li>
           </ul>
        </nav>
    </div>
    <div class="menu-der">
        <div class="idioma">
                <ul>
                <li id="espanol-responsive">ES</li>
                <li>/</li>
                <li id="ingles-responsive">EN</li>
                </ul>
            </div>
    </div>
</header>
<div class="contenedor">
    <div class="cv">
        <h2 class="hide" id="sobre-mi">Sobre mí</h2>
        <div class="img-titulo">
            <img src="media/titulos/about-me.png" alt="">
        </div>    
        <div class="descripcion">
            <img src="media/115.jpg" alt="foto-perfil">
            <p> Hi! Mi name is Tomas Capizzi, i´m a digital producer and currently i´m focusing on Front-End development, with knowledge´s on Javascript, Html and CSS; and learning the basics of React.
                <br><br> This past months i decided to focus my free time on learning something that has been interesting me for a while, and i had taken a few courses a couple of years before, that is the web development
                <br> Complementing this knowledge with the career where i´m currently doing the last subjects, the degree on Digital Arts focused on Audiovisual.
        </div>
    </div>
    <div class="iconos">
        <ul>
            <li><i class="fab fa-html5"></i></li>
            <li><i class="fab fa-css3-alt"></i></li>  
            <li><i class="fab fa-js-square"></i></li>
            <li><i class="fab fa-react"></i></li>
            <li><i class="fab fa-github"></i></li>
            <li><i class="fab fa-wordpress"></i></li>
            <li><img src="media/icono/photoshop.svg" alt="logo Photoshop"></li>
            <li><img src="media/icono/illustrator.svg" alt="Logo Illustrator"></li>
            <li><img src="media/icono/premiere.svg" alt="Logo Premiere"></li>
            <li><img src="media/icono/after-effects.svg" alt="Logo After Effects"></li>
        </ul>
    </div>
    <div class="listado-proyectos">
        <h2 class="hide" id="proyectos">Proyectos</h2>
        <div class="img-titulo">
            <img src="media/titulos/projects.png" alt="">
        </div>
        <div class="list">
            <div class="proyecto">
                <div class="titulo">
                    <h3>Brewers</h3>
                </div>
                <a href="https://tomascapizzi.github.io/brewers/" target="_blank"><img src="media/webs/brewers.PNG" alt=""></a>
            </div>
            <div class="proyecto">
                <div class="titulo">
                    <h3>Pokédex</h3>
                </div>
                <a href="https://tomascapizzi.github.io/pokedex/" target="_blank"><img src="media/webs/pokedex.PNG" alt=""></a>
            </div>
            <div class="proyecto">
                <div class="titulo">
                    <h3>Memotest</h3>
                </div>
                <a href="https://tomascapizzi.github.io/memotest/" target="_blank"> <img src="media/webs/memotest.PNG" alt=""></a>
            </div>

            <div class="proyecto">
                <div class="titulo">
                    <h3>Expense Control</h3>
                </div>
                <a href="https://tomascapizzi.github.io/gastos/" target="_blank"><img src="media/webs/gastos.PNG" alt=""></a>
            </div>
            <div class="proyecto">
                <div class="titulo">
                    <h3>Rick y Morty App</h3>
                </div>
                <a href="https://tomascapizzi.github.io/rick-morty-app/" target="_blank"><img src="media/webs/rick_morty.PNG" alt=""></a>
            </div>
            <div class="proyecto">
                <div class="titulo">
                    <h3>Famox SA</h3>
                </div>
                <a href="http://www.famox.com.ar" target="_blank"><img src="media/webs/famox.PNG" alt=""></a>
            </div>
            <div class="proyecto">
                <div class="titulo">
                    <h3>Notes</h3>
                </div>
                <a href="https://tomascapizzi.github.io/notas/" target="_blank"><img src="media/webs/notas1.PNG" alt=""></a>
            </div>
            <div class="proyecto">
                <div class="titulo">
                    <h3>Trip Budget</h3>
                </div>
                <img src="media/webs/budget_viaje.PNG" alt="">
            </div>
           
            <div class="proyecto">
            <div class="titulo">
                <h3>Memory Game</h3>
            </div>
            <a href="https://tomascapizzi.github.io/memory-game/" target="_blank"> <img src="media/webs/memory_game.PNG" alt=""></a>
        </div>
        </div>
    </div>
    <div class="contacto">
        <h2 class="hide" id="contacto">Contacto</h2>
        <div class="img-titulo">
            <img src="media/titulos/contact.png" alt="">
        </div>
        <p> If my profile adjusts to waht you´re looking for, or some of my projects are of youre interest, i´m open to feedback and profesional proposals. ¡Don't doubt on contacting me! </p>
        <div class="redes">
            <ul>
                <li><a href="https://www.linkedin.com/in/tomas-capizzi/" target="_blank" alt="Linkedin Tomas Capizzi"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="https://github.com/TomasCapizzi" target="_blank"><i class="fab fa-github"></i></a></li>
                <li><a href="mailto:tomas.capizzi@hotmail.com" target="_blank"><i class="fas fa-envelope"></i></a></li>
                <li><a href="https://wa.link/sssxh3" target="_blank"><i class="fab fa-whatsapp"></i></a></i>
                </li>
            </ul>
        </div>
    </div>
    <div class="footer">
        <h5><i class="far fa-copyright"></i> Capizzi Tomas | 2021</h5>
    </div>
    </div>
`
    const btnEsp = document.getElementById('espanol');
    const btnIng = document.getElementById('ingles');

    btnEsp.addEventListener('click', () => {
        body.innerHTML = ''
        lenguajeEsp();
    });
    btnIng.addEventListener('click', () => {
        body.innerHTML = '';
        translate()
    });

    // Para el menú responsive
    const btnEspResponsive = document.getElementById('espanol-responsive');
    const btnIngResponsive = document.getElementById('ingles-responsive');

    btnEspResponsive.addEventListener('click', () => {
        body.innerHTML = ''
        lenguajeEsp();
    });
    btnIngResponsive.addEventListener('click', () => {
        body.innerHTML = '';
        translate()
    });

    /////////////  Menu Responsive //////////
    const btnHamb = document.getElementById('btn-burga');
    const menu = document.getElementById('lista');

    btnHamb.addEventListener('click', () => {
        menu.classList.toggle('on');
    })

}
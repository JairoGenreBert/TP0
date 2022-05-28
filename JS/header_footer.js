var cadena = `
    <img id=id_logo class="logo" src="imagenes/logo-entero.jpg" alt="Logo de la escuela">
    <h1>Escuela Superior de Enfermería</h1>
    <h2>María Elena Araya de Colombres</h2>
    <nav id=id_nav>        
        <a href="index.html">Home</a>
        <a href="about.html">Acerca De</a>
        <a href="contact.html">Contacto</a>
        <a href="form.html">Registrese</a>            
    </nav>
    <div id="id_cortina"> </div>
    <button id="id_boton" class="button-menu"> <!-- onclick="window.location='#id_nav';" -->
        <hr>
        <hr>
        <hr>
    <span></span>
    <span></span>
  </button>`

document.getElementById("id_header").innerHTML=cadena;

cadena =`
    <a href="https://www.facebook.com/enfermeros.rosario.terciario" target="_blank"><i class="fa-brands fa-facebook"></i></a>
    <br>
    <p>Derechos reservados @2022</div>
    <br>`

document.getElementById("id_footer").innerHTML=cadena;
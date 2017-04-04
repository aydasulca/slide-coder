window.addEventListener('load', function(){
  var button= document.getElementById('button');
  button.addEventListener('click', function(){
    var usuario = document.getElementById('usuario').value;
    var post = document.getElementById('post').value;

    //imprimiendo datos
    function Slide(usuario, post){
      this.usuario = usuario;
      this.post = post;
    }
    /*
    var arr = [];
    var imprimir = new Slide(usuario, post);
    arr.push(imprimir);
    */
     localStorage.setItem("bienvenidaCoder",JSON.stringify(new Slide(usuario, post)));
    window.location="bienvenidaCoder.html";


    var contenedor= document.getElementById('contenedor');
    //nuevoContenedor.innerHTML= "";
    var nuevoContenedor=document.createElement("div");
    var parrafo= document.createElement("p");
    parrafo.innerHTML="Usuario: " + usuario + "<br>" + "Post: " + post;
    nuevoContenedor.appendChild(parrafo);
    contenedor.appendChild(nuevoContenedor);



  /*
    var contenedor=function(){
      var usuario = document.getElementById('usuario');
      var post = document.getElementById('post');
    }
    */

  })
})

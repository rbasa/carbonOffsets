import React from 'react'
import imagenPrincipal from './img/bosque.jpeg'
import arbol from './img/carbon.png'
import moon from './img/carbonEmisions.jpg'


export default function header() {
    return (
      <>
     
 <body>
      
        
 
        {/* <!-- Responsive navbar--> */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="#!">Home</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* <li class="nav-item"><a class="nav-link active" aria-current="page" href="#!"></a></li> */}
                        {/* <li class="nav-item"><a class="nav-link" href="#!">Home</a></li> */}
                        <li class="nav-item"><a class="nav-link" href="#!">Token</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">Manifiesto</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">Matriz de Motivaciones</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">Stock and Flows</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">GitHub</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">Colony</a></li>
                       
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- Header - set the background image for the header in the line below--> */}
        <header class="py-5 bg-image-full" style={{ backgroundImage: `url(${imagenPrincipal})` }}>
            <div class="text-center my-5">
                <img class="img-fluid mb-4" src={arbol} alt="..." />
                <h1 class="text-white fs-3 fw-bolder">Proof of Tree</h1>
                {/* <h2>Una DAO que conspira contra el cambio climático</h2> */}
                <h2 class="text-white ">Somos una conspiración contra el cambio climático</h2>
                <p class="text-white mb-0">DAO - Carbon offsets</p>
            </div>
        </header>
        {/* <!-- Content section--> */}
        <section class="py-5">
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <h2>Transparencia y responsabilidad ambiental</h2>
                        <p class="lead">Facilitamos a personas y empresas minimizar huella de carbono y fomentamos aquellos proyectos que lo capturan</p>
                        <p class="mb-0">Utilizamos mecanismos de incentivos en la comunidad para proveer transparencia, trazabilidad, y eficiencia a la batalla contra el cambio climático</p>
                        <p class="mb-0"></p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Image element - set the background image for the header in the line below--> */}
        




        <div class="py-5 bg-image-full jumbotron" style={{ backgroundImage: `url(${moon})`}}>
            {/* <!-- Put anything you want here! The spacer below with inline CSS is just for demo purposes!--> */}
            <div style={{height: '50 rem'}}></div>
        </div>
        {/* <!-- Content section--> */}
        <section class="py-5">
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <h2>Mejoras en el medio ambiente y la salud</h2>
                        <p class="lead">Entendemos la importancia del cuidado del medio ambiente y de vivir en armonía con todos los demás seres que coexisten en el planeta.</p>
                        <p class="mb-0">Creamos un ecosistema que incentive la generación y comercialización de créditos de carbono verificables, con la finalidad de reducir emisiones a nivel global</p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Proof of tree 2021</p></div>
        </footer>
        {/* <!-- Bootstrap core JS--> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></script> */}
        {/* <!-- Core theme JS--> */}
        {/* <script src="js/scripts.js"></script> */}
    
      </body>
      </>
    )
}

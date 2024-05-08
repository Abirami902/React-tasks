import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';



const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-primary">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold" href="#">Deck.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active ms-5 fw-bold text-body-secondary" aria-current="page" href="#">TECHNOLOGY</a>
        <a class="nav-link ms-5 fw-bold text-body-secondary" href="#">IDEAS</a>
        <a class="nav-link ms-5 fw-bold text-body-secondary" href="#">LEADERSHIP</a>
        <a class="nav-link ms-5 fw-bold text-body-secondary" aria-disabled="true">VIDEO</a>
        <a class="nav-link ms-5 fw-bold text-body-secondary" aria-disabled="true">NEWS</a>
        <a class="nav-link ms-5 fw-bold text-body-secondary" aria-disabled="true">FINANCE</a>
        <a class="nav-link ms-5 fw-bold text-body-secondary" aria-disabled="true">ENTERTAINMENT</a>
        <a class="nav-link ms-5 fw-bold text-body-secondary" aria-disabled="true"><i class="fa-solid fa-bars"></i></a>

      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav

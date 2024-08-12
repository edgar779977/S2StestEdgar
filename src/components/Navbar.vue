<template>
  <nav class="navbar navbar-expand-lg custom-navbar">
    <div class="container-fluid">
      <a class="navbar-brand logo" href="#">Logo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
              aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll me-0 me-md-5" style="--bs-scroll-height: 100px;">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Ծառայություններ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Մեր Մասին</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Պորտֆոլիո</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#">Ռեսուրսներ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Բլոգ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Կապ</a>
          </li>
        </ul>
        <div class="d-flex align-items-center gap-4 nav-right-btn-group">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              ՀԱՅ
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <SearchIcon/>
          <button class="btn btn-light contact-us-btn" type="submit">Կապ մեզ հետ</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import SearchIcon from "./Icons/SearchIcon.vue";

export default {
  name: 'Navbar',
  components: {
    SearchIcon,
  },
};
</script>

<style scoped>
.custom-navbar {
  background-color: #000000;
  color: #FFFFFF;
  padding: 21px 120px 23px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 56px;
  color: #FFFFFF;
  text-decoration: none;
}

.navbar-toggler {
  margin-left: auto;
}

.nav-item .nav-link {
  text-decoration: none;
}

.nav-item .dropdown-menu .dropdown-item {
  text-decoration: none;
}

.d-flex {
  gap: 48px;
}

.d-flex > * {
  display: flex;
  align-items: center;
}

.nav-link {
  font-size: 16px;
}

@media (max-width: 1300px) {
  .nav-link {
    font-size: 12px;
  }
}

@media (max-width: 1200px) {
  .custom-navbar {
    padding: 15px 30px 18px;
  }
}

@media (max-width: 991px) {
  .custom-navbar {
    padding: 15px 30px 18px;
  }

  .nav-right-btn-group{
    justify-content: right;
  }
}

.custom-navbar .navbar-brand {
  color: #FFFFFF;
  text-decoration: none;
}

.custom-navbar .navbar-nav .nav-link {
  color: #FFFFFF;
}

.custom-navbar .navbar-nav .nav-link.active {
  color: #00A2FF;
}

.navbar-toggler-icon {
  filter: invert(1);
}

@media (max-width: 991px) {
  .navbar-nav {
    text-align: center;
    margin-bottom: 10px;
  }

  .navbar-nav .nav-item {
    margin-bottom: 10px;
  }
}
</style>

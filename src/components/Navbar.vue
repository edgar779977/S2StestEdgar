<template>
  <nav class="navbar navbar-expand-lg custom-navbar">
    <div class="container-fluid">
      <a class="navbar-brand logo" href="#">Logo</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
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
        <div class="d-flex align-items-center gap-4">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              ՀԱՅ
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <SearchIcon />
          <button class="btn btn-outline-success" type="submit">Search</button>
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
  background-color: #000000; /* Black background */
  color: #FFFFFF; /* White text */
  padding: 21px 120px 23px; /* Top, Right/Left, Bottom padding */
  display: flex; /* Enable flexbox for alignment */
  justify-content: space-between; /* Space between items */
  align-items: center; /* Center items vertically */
}

.logo {
  font-family: 'Roboto', sans-serif; /* Use Roboto font */
  font-weight: 700; /* Bold text */
  font-size: 40px; /* Font size */
  line-height: 56px; /* Line height */
  color: #FFFFFF; /* White text color */
  text-decoration: none; /* Remove underline from link */
}

.navbar-toggler {
  margin-left: auto; /* Push the toggler to the right */
}

.nav-item .nav-link {
  text-decoration: none; /* Remove underline from link */
}

.nav-item .dropdown-menu .dropdown-item {
  text-decoration: none; /* Remove underline from dropdown items */
}

/* Add gap between items */
.d-flex {
  gap: 48px; /* Space between items */
}

/* Optional: Ensure proper alignment */
.d-flex > * {
  display: flex;
  align-items: center; /* Center-align items if needed */
}

/* Adjust padding for smaller screens */
@media (max-width: 1200px) {
  .custom-navbar {
    padding: 21px 60px 23px; /* Reduce padding on larger tablets and smaller desktops */
  }
}

@media (max-width: 991px) {
  .custom-navbar {
    padding: 15px 30px 18px; /* Further reduce padding on tablets and larger phones */
  }
}

@media (max-width: 767px) {
  .custom-navbar {
    padding: 10px 20px 12px; /* Further reduce padding on mobile devices */
  }
}

.custom-navbar .navbar-brand {
  color: #FFFFFF; /* Ensure logo text is white */
  text-decoration: none; /* Remove underline from link */
}

.custom-navbar .navbar-nav .nav-link {
  color: #FFFFFF; /* Ensure links are white */
}

.custom-navbar .navbar-nav .nav-link.active {
  color: #00A2FF; /* Optional: Change the color of active link */
}

.navbar-toggler-icon {
  filter: invert(1); /* Invert color of the navbar-toggler-icon */
}

/* Responsive Styles for Navbar Items */
@media (max-width: 991px) {
  .navbar-nav {
    text-align: center; /* Center-align nav items on smaller screens */
    margin-bottom: 10px; /* Space below the nav items */
  }

  .navbar-nav .nav-item {
    margin-bottom: 10px; /* Add margin-bottom for spacing between items */
  }
}
</style>

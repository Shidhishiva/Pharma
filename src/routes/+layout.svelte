<!-- Layout -->
<script>
  import "$lib/assets/style.css";
  import Footer from "$lib/Footer.svelte";
  import Navbar from "$lib/Navbar.svelte";
</script>

<div class="app">
  <Navbar />
  <slot />
  <Footer />
</div>

<style>
  .app {
    margin: 0px auto;
    width: 100%;
    }

    /* 2xl */
@media (max-width: 1536px) {
  .app {
    min-height: 95vh;
    max-width: auto;

    display: flex;
    flex-direction: column;
    }
}

/* xl */
@media (max-width: 1280px) {
  .app {
    min-height: 90vh;
    width: auto;

    display: flex;
    flex-direction: column;
    }
}

/* lg */
@media (max-width: 1024px) {
  .app {
    min-height: 85vh;
    width: auto;

    display: flex;
    flex-direction: column;
    }
}

/* md */
@media (max-width: 768px) {
  .app {
    min-height: 80vh;
    width: auto;

    display: flex;
    flex-direction: column;
    }
}

/* sm */
@media (max-width: 640px) {
  .app {
    min-height: 75vh;
    width: auto;

    display: flex;
    flex-direction: column;
    }
}

/* xs */
@media (max-width: 475px) {
  .app {
    min-height: 70vh;
    width: auto;

    display: flex;
    flex-direction: column;
    }
}

@media (max-width: 435px) {
  .app {
    min-height: 65vh;
    width: auto;

    display: flex;
    flex-direction: column;
    }
}

@media (max-width: 375px) {
  .app {
    min-height: 60vh;
    width: auto;

    display: flex;
    flex-direction: column;
    }
}




.container {
  max-width: 1536px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

/* 2xl */
@media (max-width: 1536px) {
  .container {
    max-width: 1280px;
  }
}

/* xl */
@media (max-width: 1280px) {
  .container {
    max-width: 1024px;
  }
}

/* lg */
@media (max-width: 1024px) {
  .container {
    max-width: 768px;
  }
}

/* md */
@media (max-width: 768px) {
  .container {
    max-width: 640px;
  }
}

/* sm */
@media (max-width: 640px) {
  .container {
    max-width: 475px;
  }
}

/* xs */
@media (max-width: 475px) {
  .container {
    width: 100%;
  }
}
</style>

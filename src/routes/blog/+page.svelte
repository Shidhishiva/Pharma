<!--Blog section -->

<script>
  import Seo from "$lib/Seo.svelte";

  export let data;

  const { posts } = data;
</script>

<div class="container">
  <h1>Blog Posts</h1>

  <!--Each block to display post from api-->
  <div class="content">
    {#each posts as post}
      <a href="/blog/{post.id}">
        <h2>{post.title}</h2>
      </a>
    {/each}
  </div>
</div>

<!--Seo -->
<Seo title="Blog | Prachi Pharma" description="This is blog" type="WebPage" />

<style>
  .container {
    height: 80%;
    width: 80%;
    font-size: 20px;
    min-height: 100vh;
  }


  a {
    text-decoration: underline;
    color: var(--color);
  }
  a:hover {
    color: var(--primary-color);
  }

  /* 2xl */
  @media (max-width: 1536px) {
    .container {
      height: 80%;
      width: 80%;
      font-size: 19px;
      min-height: 100vh;
    }

    
    a {
      text-decoration: underline;
      color: var(--color);
    }
    a:hover {
      color: var(--primary-color);
    }
  }

  /* xl */
  @media (max-width: 1280px) {
    .container {
      height: 80%;
      width: 80%;
      font-size: 18px;
      min-height: 100vh;
    }
    a {
      text-decoration: underline;
      color: var(--color);
    }
    a:hover {
      color: var(--primary-color);
    }
  }

  /* lg */
  @media (max-width: 1024px) {
    .container {
      height: 80%;
      width: 80%;
      font-size: 17px;
      min-height: 100vh;
    }
    a {
      text-decoration: underline;
      color: var(--color);
    }
    a:hover {
      color: var(--primary-color);
    }
  }

  /* md */
  @media (max-width: 768px) {
    .container {
      height: 80%;
      width: 80%;
      font-size: 16px;
      min-height: 100vh;
    }
    a {
      text-decoration: underline;
      color: var(--color);
    }
    a:hover {
      color: var(--primary-color);
    }
  }

  /* sm */
  @media (max-width: 640px) {
    .container {
      height: 90%;
      width: 90%;
      font-size: 14px;
      min-height: 100vh;
    }
    a {
      text-decoration: underline;
      color: var(--color);
    }
    a:hover {
      color: var(--primary-color);
    }
  }

  /* xs */
  @media (max-width: 475px) {
    .container {
      height: 90%;
      width: 90%;
      font-size: 12px;
      min-height: 100vh;
    }
    a {
      text-decoration: underline;
      color: var(--color);
    }
    a:hover {
      color: var(--primary-color);
    }
  }

  @media (max-width: 435px) {
    .container {
      height: 90%;
      width: 90%;
      font-size: 10px;
      min-height: 100vh;
    }
    a {
      text-decoration: underline;
      color: var(--color);
    }
    a:hover {
      color: var(--primary-color);
    }
  }

  @media (max-width: 375px) {
    .container {
      height: 90%;
      width: 90%;
      font-size: 8px;
      min-height: 100vh;
    }

    a {
      text-decoration: underline;
      color: var(--color);
    }
    a:hover {
      color: var(--primary-color);
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
      width: 435px;
    }
  }

  @media (max-width: 435px) {
    .container {
      width: 375px;
    }
  }

  @media (max-width: 375px) {
    .container {
      width: 100%;
    }
  }
</style>

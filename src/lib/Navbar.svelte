<!-- navbar section -->
<script>
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Moon from "./icons/moon.svelte";
  import Sun from "./icons/sun.svelte";

  // navigation section
  const navs = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Products",
      href: "/products",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];

  // selection theme
  let currentTheme = "";

  //matching the theme and applying the current theme
  onMount(() => {
    // currentTheme = document.documentElement.dataset.theme;
    const userPrefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    //dark theme
    const hasUserSetDarkModeManually =
      document.documentElement.dataset.theme == "dark";

    //light theme
    if (!hasUserSetDarkModeManually) {
      setTheme(userPrefersDarkMode ? "dark" : "light");
    }
  });

  //set theme
  const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;
    document.cookie = `siteTheme=${theme};max-age=31536000;path="/"`;
    currentTheme = theme;
  };

  $: url = $page.url.href;
  $: routeId = $page.url.pathname;
</script>

<!-- theme logo -->
<nav>
  <div class="container">
    <img class="logo" src="../../pharma.png" alt="logo" />
    <ul>
      {#each navs as { title, href }}
        <li>
          <a
            {href}
            class:active={href === "/" ? routeId === "/" : url.includes(href)}
            {title}>{title}</a
          >
        </li>
      {/each}
      <li class="relative">
        {#if currentTheme == "light"}
          <a class="moon" href={"#"} on:click={() => setTheme("dark")}>
            <Moon />
          </a>
        {:else}
          <a class="sun" href={"#"} on:click={() => setTheme("light")}>
            <Sun />
          </a>
        {/if}
      </li>
    </ul>
  </div>
</nav>


<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  nav {
    color: black;
    background-color: #fff;
    box-sizing: border-box;
    padding: 20px;
  }

  ul {
    display: flex;
    margin: 0;
    margin-left: auto;
    list-style: none;
    font-size: 18px;
    gap: 10px;
    padding: 15px;
  }

  li {
    margin-right: 20px;
  }

  img {
    border: 0;
    vertical-align: middle;
    height: 100%;
  }

  .logo {
    max-width: 100%;
  }

  a {
    text-decoration: none;
    color: black;
  }

  .active {
    color: rgb(240, 150, 47);
  }
</style>

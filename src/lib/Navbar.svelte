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
    min-width: 100vw;
  }
  nav {
    color: black;
    background-color: #f8f8f8;
    box-sizing: border-box;
    padding: 20px;
    height: auto;
    width: auto;
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

  /* 2xl */
  @media (max-width: 1536px) {

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 45px;
      min-width: 100vw;

    }
    nav {
      color: black;
      background-color: #f8f8f8;
      box-sizing: border-box;
      padding-inline: 20px;
    }

    ul {
      display: flex;
      margin: 0;
      margin-left: auto;
      list-style: none;
      font-size: 22px;
      gap: 20px;
      padding: 22px;
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
      max-width: 160px;
      margin-right: 120px;
    }

    a {
      text-decoration: none;
      color: black;
    }

    .active {
      color: rgb(240, 150, 47);
    }
  }

  /* xl */
  @media (max-width: 1280px) {
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 35px;
      min-width: 100vw;

    }
    nav {
      color: black;
      background-color: #f8f8f8;
      box-sizing: border-box;
      padding-inline: 18px;
    }

    ul {
      display: flex;
      margin: 0;
      margin-left: auto;
      list-style: none;
      font-size: 20px;
      gap: 18px;
      padding: 18px;
    }

    li {
      margin-right: 18px;
    }

    img {
      border: 0;
      vertical-align: middle;
      height: 100%;
    }

    .logo {
      max-width: 130px;
      margin-right: 95px;
    }

    a {
      text-decoration: none;
      color: black;
    }

    .active {
      color: rgb(240, 150, 47);
    }
  }

  /* lg */
  @media (max-width: 1024px) {
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 30px;
      min-width: 100vw;

    }
    nav {
      color: black;
      background-color: #f8f8f8;
      box-sizing: border-box;
      padding-inline: 16px;
    }

    ul {
      display: flex;
      margin: 0;
      margin-left: auto;
      list-style: none;
      font-size: 18px;
      gap: 16px;
      padding: 16px;
    }

    li {
      margin-right: 16px;
    }

    img {
      border: 0;
      vertical-align: middle;
      height: 100%;
    }

    .logo {
      max-width: 125px;
      margin-right: 95px;
    }

    a {
      text-decoration: none;
      color: black;
    }

    .active {
      color: rgb(240, 150, 47);
    }
  }

  /* md */
  @media (max-width: 768px) {
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 25px;
      min-width: 100vw;

    }
    nav {
      color: black;
      background-color: #f8f8f8;
      box-sizing: border-box;
      padding-inline: 12px;
    }

    ul {
      display: flex;
      margin: 0;
      margin-left: auto;
      list-style: none;
      font-size: 16px;
      gap: 16px;
      padding: 16px;
    }

    li {
      margin-right: 14px;
    }

    img {
      border: 0;
      vertical-align: middle;
      height: 100%;
    }

    .logo {
      max-width: 110px;
      margin-right: 85px;
    }

    a {
      text-decoration: none;
      color: black;
    }

    .active {
      color: rgb(240, 150, 47);
    }
  }

  /* sm */
  @media (max-width: 640px) {
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 25px;
      min-width: 100vw;

    }
    nav {
      color: black;
      background-color: #f8f8f8;
      box-sizing: border-box;
      padding-inline: 10px;
    }

    ul {
      display: flex;
      margin: 0;
      margin-left: auto;
      list-style: none;
      font-size: 15px;
      gap: 12px;
      padding: 12px;
    }

    li {
      margin-right: 10px;
    }

    img {
      border: 0;
      vertical-align: middle;
      height: 100%;
    }

    .logo {
      max-width: 80px;
      margin-right: 95px;
    }

    a {
      text-decoration: none;
      color: black;
    }

    .active {
      color: rgb(240, 150, 47);
    }
  }

  /* xs */
  @media (max-width: 475px) {
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 22px;
      min-width: 100vw;

    }
    nav {
      color: black;
      background-color: #f8f8f8;
      box-sizing: border-box;
      padding-inline: 8px;
    }

    ul {
      display: flex;
      margin: 0;
      margin-left: auto;
      list-style: none;
      font-size: 10px;
      gap: 8px;
      padding: 8px;
    }

    li {
      margin-right: 8px;
    }

    img {
      border: 0;
      vertical-align: middle;
      height: 100%;
    }

    .logo {
      max-width: 85px;
      margin-right: 75px;
    }

    a {
      text-decoration: none;
      color: black;
    }

    .active {
      color: rgb(240, 150, 47);
    }
  }

  @media (max-width: 435px) {
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 22px;
      min-width: 100vw;

    }
    nav {
      color: black;
      background-color: #f8f8f8;
      box-sizing: border-box;
      padding-inline: 7px;
    }

    ul {
      display: flex;
      margin: 0;
      margin-left: auto;
      list-style: none;
      font-size: 8px;
      gap: 7px;
      padding: 7px;
    }

    li {
      margin-right: 7px;
    }

    img {
      border: 0;
      vertical-align: middle;
      height: 100%;
    }

    .logo {
      max-width: 95px;
      margin-right: 80px;
    }

    a {
      text-decoration: none;
      color: black;
    }

    .active {
      color: rgb(240, 150, 47);
    }
  }

  @media (max-width: 375px) {
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 20px;
      min-width: 100vw;

    }
    nav {
      color: black;
      background-color: #f8f8f8;
      box-sizing: border-box;
      padding-inline: 10px;
    }

    ul {
      display: flex;
      margin: 0;
      margin-left: auto;
      list-style: none;
      font-size: 8px;
      gap: 5px;
      padding: 5px;
    }

    li {
      margin-right: 6px;
    }

    img {
      border: 0;
      vertical-align: middle;
      height: 100%;
    }

    .logo {
      max-width: 65px;
      margin-right: 50px;
    }

    a {
      text-decoration: none;
      color: black;
    }

    .active {
      color: rgb(240, 150, 47);
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

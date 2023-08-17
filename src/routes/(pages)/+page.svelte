<!--Home page, Page Landing Section-->

<script>
  import Seo from "$lib/Seo.svelte";
  import Hero from "$lib/Hero.svelte";
  import Home from "$lib/Home.svelte";


  export let data;

  const { posts } = data;
</script>

<Hero/>
<Home />



<Seo title="Prachi Pharma" description="This is homepage" type="WebSite" />

<style>

</style>

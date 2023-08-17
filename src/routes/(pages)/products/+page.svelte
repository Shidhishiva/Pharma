<script>
  import Seo from "$lib/Seo.svelte";
 
  import What from "$lib/What.svelte";

  export let data;

  const { posts } = data;
</script>

<What />

<div class="container">
  <div class="grid">
    {#each posts as { id, title, image, body }}
      <div class="card">
        <h2>{title.substring(0, 20)}</h2>
        <div class="cont">
          <p>{body.substring(0, 80)}</p>
        </div>
      </div>
    {/each}
  </div>



 
</div>

<style lang="text/scss">
  /* Watch this video */

 

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-self: end;
    align-items: center;
    gap: 2em;
    padding-top: 50px;
    
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2em;
    padding: 2em 0;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 15px 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 250px;
    padding-bottom: 15px;
    background-color: white;
  }

  .card h2  {
    margin: 10px 0;
    color:rgb(10, 9, 9);
  }

  .card p {
    color:rgb(10, 9, 9);

  }

  .cont {
    width: 90%;
    height: 0;
    overflow: hidden;
    text-align: center;
    transition: all 0.6s ease;
  }

  .card .cont .link i {
    font-size: 25px;
    color: rgb(10, 9, 9);
    transition: all 0.2s ease;
  }

  .card .cont .link i:hover {
    color: black;
    cursor: pointer;
  }

  .card:hover > .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 150px;
  }

  .card:hover > .link {
    width: 40%;
    display: flex;
    justify-content: space-between;
  }
</style>

<script>
  import Contact from "$lib/Contact.svelte";
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

<style>

  
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-self: end;
    align-items: center;
    gap: 2em;
    padding-top: 50px;
    padding-left: 80px;
    min-height: 100vh;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10em;
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

  .card h2 {
    margin: 10px 0;
    color: rgb(10, 9, 9);
  }

  .card p {
    color: rgb(10, 9, 9);
  }

  .cont {
    width: 90%;
    height: 0;
    overflow: hidden;
    text-align: center;
    transition: all 0.6s ease;
  }

  .card:hover > .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 150px;
  }

  /* 2xl */
@media (max-width: 1536px) {

  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-self: end;
    align-items: center;
    gap: 2em;
    padding-top: 50px;
    padding-left: 80px;
    min-height: 100vh;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6em;
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

  .card h2 {
    margin: 10px 0;
    color: rgb(10, 9, 9);
  }

  .card p {
    color: rgb(10, 9, 9);
  }

  .cont {
    width: 90%;
    height: 0;
    overflow: hidden;
    text-align: center;
    transition: all 0.6s ease;
  }

  .card:hover > .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 150px;
  }
}

/* xl */
@media (max-width: 1280px) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-self: end;
    align-items: center;
    gap: 2em;
    padding-top: 50px;
    padding-left: 80px;
    min-height: 100vh;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5em;
    padding: 2em 0;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 15px 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 230px;
    padding-bottom: 15px;
    background-color: white;
  }

  .card h2 {
    margin: 10px 0;
    color: rgb(10, 9, 9);
    font-size: 20px;

  }

  .card p {
    color: rgb(10, 9, 9);
  }

  .cont {
    width: 90%;
    height: 0;
    overflow: hidden;
    text-align: center;
    transition: all 0.6s ease;
  }

  .card:hover > .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 150px;
  }
}

/* lg */
@media (max-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-self: end;
    align-items: center;
    gap: 2em;
    padding-top: 50px;
    padding-left: 80px;
    min-height: 100vh;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.7em;
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

  .card h2 {
    margin: 8px 0;
    color: rgb(10, 9, 9);
  }

  .card p {
    color: rgb(10, 9, 9);
  }

  .cont {
    width: 90%;
    height: 0;
    overflow: hidden;
    text-align: center;
    transition: all 0.6s ease;
  }

  .card:hover > .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 150px;
  }
}

/* md */
@media (max-width: 768px) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-self: end;
    align-items: center;
    gap: 2em;
    padding-top: 50px;
    padding-left: 80px;
    min-height: 100vh;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3em;
    padding: 2em 0;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 15px 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 180px;
    padding-bottom: 10px;
    background-color: white;
  }

  .card h2 {
    margin: 8px 0;
    color: rgb(10, 9, 9);
    font-size: 15px;
  }

  .card p {
    color: rgb(10, 9, 9);
  }

  .cont {
    width: 90%;
    height: 0;
    overflow: hidden;
    text-align: center;
    transition: all 0.6s ease;
  }

  .card:hover > .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 150px;
  }
}

/* sm */
@media (max-width: 640px) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-self: end;
    align-items: center;
    gap: 2em;
    padding-top: 50px;
    padding-left: 80px;
    min-height: 100vh;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5em;
    padding: 2em 0;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 15px 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 150px;
    padding-bottom: 10px;
    background-color: white;
  }

  .card h2 {
    margin: 8px 0;
    color: rgb(10, 9, 9);
    font-size: 12px;
  }

  .card p {
    color: rgb(10, 9, 9);
  }

  .cont {
    width: 90%;
    height: 0;
    overflow: hidden;
    text-align: center;
    transition: all 0.6s ease;
  }

  .card:hover > .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 150px;
  }
}

/* xs */
@media (max-width: 475px) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-self: end;
    align-items: center;
    gap: 2em;
    padding-top: 50px;
    padding-left: 80px;
    min-height: 100vh;
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
    width: 130px;
    padding-bottom: 10px;
    background-color: white;
  }

  .card h2 {
    margin: 8px 0;
    color: rgb(10, 9, 9);
    font-size: 10px;
  }

  .card p {
    color: rgb(10, 9, 9);
  }

  .cont {
    width: 90%;
    height: 0;
    overflow: hidden;
    text-align: center;
    transition: all 0.6s ease;
  }

  .card:hover > .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 150px;
  }
}

@media (max-width: 435px) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-self: end;
    align-items: center;
    gap: 2em;
    padding-top: 50px;
    padding-left: 80px;
    min-height: 100vh;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.8em;
    padding: 2em 0;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 15px 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 120px;
    padding-bottom: 10px;
    background-color: white;
  }

  .card h2 {
    margin: 8px 0;
    color: rgb(10, 9, 9);
    font-size: 10px;
  }

  .card p {
    color: rgb(10, 9, 9);
    font-size: 8px;
  }

  .cont {
    width: 90%;
    height: 0;
    overflow: hidden;
    text-align: center;
    transition: all 0.6s ease;
  }

  .card:hover > .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 60px;
  }
}

@media (max-width: 375px) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-self: end;
    align-items: center;
    gap: 2em;
    padding-top: 50px;
    padding-left: 80px;
    min-height: 100vh;  
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6em;
    padding: 2em 0;
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 15px 15px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    width: 100px;
    padding-bottom: 10px;
    background-color: white;
  }

  .card h2 {
    margin: 8px 0;
    color: rgb(10, 9, 9);
    font-size: 8px;
  }

  .card p {
    color: rgb(10, 9, 9);
  }

  .cont {
    width: 90%;
    height: 0;
    overflow: hidden;
    text-align: center;
    transition: all 0.6s ease;
  }

  .card:hover > .cont {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 60px;
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

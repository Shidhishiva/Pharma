<script>
  import Button from "$lib/Button.svelte";
  import Contact from "./Contact.svelte";
</script>

<div class="container grid">
  <div class="what">
    <h3>What We Do?</h3>
    <p>
      With the Vision and Mission of our partners to develop world class APIs
      and Intermediates, OSCAR pharma is committed to satisfy the ever rising
      demands of worldwide market through an authentic range of pharmaceutical
      compositions.
    </p>
    <p>
      Our expertise in the field of APIs & Intermediates, additionally excellent client
      serving will help us to earn credible reputation in of manufacturer and exporter
      in both domestic and global market place.
    </p>

  

    
    
  </div>
  
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2em;
  }
  .what {
    grid-column: span 8;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }

  /* 2xl */
@media (max-width: 1536px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2em;
  }
  .what {
    grid-column: span 8;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 28px;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }

  p{
    font-size: 18px;
  }

}

/* xl */
@media (max-width: 1280px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2em;
  }

  
  p{
    font-size: 16px;
  }
  .what {
    grid-column: span 8;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 26px;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
}

/* lg */
@media (max-width: 1024px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2em;
  }
  
  p{
    font-size: 15px;
  }
  .what {
    grid-column: span 8;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 28px;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
}

/* md */
@media (max-width: 768px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2em;
  }

  
  p{
    font-size: 13px;
  }
  .what {
    grid-column: span 8;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 24px;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
}

/* sm */
@media (max-width: 640px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2em;
  }

  p{
    font-size: 11px;
  }
  .what {
    grid-column: span 8;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 20px;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
}

/* xs */
@media (max-width: 475px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2em;
  }

  p{
    font-size: 10px;
  }
  .what {
    grid-column: span 8;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 18px;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
}

@media (max-width: 435px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2em;
  }

  p{
    font-size: 9px;
  }
  .what {
    grid-column: span 8;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 15px;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
}

@media (max-width: 375px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2em;
  }

  p{
    font-size: 9px;
  }
  .what {
    grid-column: span 8;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 12px;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
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

@media (max-width: 435px) {
  .container {
    width: 100%;
  }
}

@media (max-width: 375px) {
  .container {
    width: 100%;
  }
}
</style>

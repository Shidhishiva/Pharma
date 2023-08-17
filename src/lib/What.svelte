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
    Our expertise in the field of APIs & Intermediates, additionally excellent client
    serving will help us to earn credible reputation in of manufacturer and exporter
    in both domestic and global market place.
    <p />

    <Button class="secondary" id="a-button" size="medium"
      >Call To Action ></Button
    >
  </div>
  <Contact />
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
    font-size: 2em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
</style>

<!--About section -->

<script>
  import Seo from "$lib/Seo.svelte";
  import Contact from "$lib/Contact.svelte";
  
  
  import Emp from "$lib/Emp.svelte";

</script>

<h2>Our Employees</h2>
<Emp />
<div class="container grid">
  <div class="what">
    <h3>About Us</h3>
    Welcome to Prachi Pharmaceuticals Pvt. Ltd., one of India's most trusted name
    in the field of Pharmaceuticals and Chemicals. Today, we are acclaimed as on
    of the most respected manufacturers, exporters, importers, suppliers, and service
    providers of a vast range of Active Pharmaceutical Ingredients, Iodine Compounds,
    Veterinary Products and Specialty Chemicals. We manufacture our entire range
    adhering to high industrial standards and hence, our entire range is unmatched
    in terms of quality, reliability and features NO SIDE EFFECTS. Today, our range
    of Calcium Iodate, Cuprous Iodide, Povidone Iodine Powder, Povidone Iodine ,
    Sodium Iodide, Erythromycin Estolate, Erythromycin Ethyl Succinate, Lumefentrine,
    Furosemide, Artemethe, Oxfendazole, Oxyclozanide, Albendazole, Praziquantel,
    Closantel Base / Sodium, Rafoxanide, etc., are demanded all around the globe.
    Being a quality conscious organization, we resort to sound technology & innovative
    research and development to bring forth a cost effective range of intermediates
    and compound. Moreover, we practice strict quality assuring methods to ensure
    that our entire range is high in terms of quality and reliability. We also rely
    on the assistance of an expert team of technocrats who's penchant for constant
    technological advancements that has helped us achieve us a leading position in
    industry.
  </div>
  <Contact />
</div>
<Seo
  title="About | Prachi Pharma"
  description="This is about page"
  type="WebPage"
/>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2em;
  }
  .what {
    grid-column: span 8;
    padding-bottom: 30px;
  }

  h2 {
    padding-bottom: 10px;
    padding-left: 150px;
    margin-bottom: 0.5em;
    font-size: 2em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 2em;
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
    padding-bottom: 30px;
  }

  h2 {
    padding-bottom: 10px;
    padding-left: 150px;
    margin-bottom: 0.5em;
    font-size: 2em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 2em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
}

/* xl */
@media (max-width: 1280px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    gap: 1.8em;
  }
  .what {
    grid-column: span 8;
    padding-bottom: 28px;
    font-size: 16px;
  }

  h2 {
    padding-bottom: 8px;
    padding-left: 130px;
    margin-bottom: 0.5em;
    font-size: 1.8em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 1.8em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
}

/* lg */
@media (max-width: 1024px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 1.6em;
  }
  .what {
    grid-column: span 8;
    padding-bottom: 26px;
    font-size: 16px;
  }

  h2 {
    padding-bottom: 10px;
    padding-left: 120px;
    margin-bottom: 0.5em;
    font-size: 1.7em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 1.7em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
}

/* md */
@media (max-width: 768px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    gap: 1.6em;
  }
  .what {
    grid-column: span 8;
    padding-bottom: 24px;
    font-size: 14px;
  }

  h2 {
    padding-bottom: 10px;
    padding-left: 110px;
    margin-bottom: 0.5em;
    font-size: 1.5em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 2em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
}

/* sm */
@media (max-width: 640px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.3em;
  }
  .what {
    grid-column: span 8;
    padding-bottom: 22px;
    font-size: 14px;
  }

  h2 {
    padding-bottom: 10px;
    padding-left: 150px;
    margin-bottom: 0.5em;
    font-size: 1.5em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 2em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
}

/* xs */
@media (max-width: 475px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.4em;
  }
  .what {
    grid-column: span 8;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 12px;
  }

  h2 {
    padding-bottom: 10px;
    padding-left: 30%;
    margin-bottom: 0.5em;
    font-size: 1.4em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 1.4em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
}

@media (max-width: 435px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.4em;
  }
  .what {
    grid-column: span 8;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 10px;
  }

  h2 {
    padding-bottom: 10px;
    padding-left: 30%;
    margin-bottom: 0.5em;
    font-size: 1.4em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 1.4em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }
}

@media (max-width: 375px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1.4em;
  }
  .what {
    grid-column: span 8;
    padding-bottom: 5px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 8px;
  }

  h2 {
    padding-bottom: 10px;
    padding-left: 30%;
    margin-bottom: 0.5em;
    font-size: 1.4em;
    font-weight: 500;
    border-bottom: 1px solid #ddd;
  }

  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 1.4em;
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
</style>

<script>
  import { enhance, applyAction } from "$app/forms";
  
  import What from "$lib/What.svelte";
  import Button from "$lib/Button.svelte";
  import Seo from "$lib/Seo.svelte";
  import Contact from "$lib/Contact.svelte";
  
  export let form;

</script>
<What/>
<!-- contact form saving to google form-->
<div class="container">
  <h2>Contact us</h2>
  {#if form?.success}
    <p class="success">{form?.status || ""}</p>
  {:else}
    <form
      method="POST"
      use:enhance={() => {
        return async ({ result }) => {
          await applyAction(result);
        };
      }}
    >
      <div class="form-group">
        <label class="col-md-3 control-label" for="name">Name</label>
        <div class="col-md-9">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            class="form-control"
            value={form?.name || ""}
            class:error={form?.errors?.name}
          />
          {#if form?.errors?.name}
            <p class="red">{form?.errors?.name}</p>
          {/if}
        </div>
      </div>

      <div class="form-group">
        <label class="col-md-3 control-label" for="email">Your E-mail</label>
        <div class="col-md-9">
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Your email"
            class="form-control"
            value={form?.email || ""}
            class:error={form?.errors?.email}
          />
          {#if form?.errors?.email}
            <p class="red">{form?.errors?.email}</p>
          {/if}
        </div>
      </div>

      <div class="form-group">
        <label class="col-md-3 control-label" for="message">Your message</label>
        <div class="col-md-9">
          <textarea
            class="form-control"
            id="message"
            name="message"
            placeholder="Please enter your message here..."
            rows="5"
            value={form?.message || ""}
            class:error={form?.errors?.message}
          />
          {#if form?.errors?.message}
            <p class="red">{form?.errors?.message}</p>
          {/if}
        </div>
      </div>

      <div class="form-group">
        <div class="col-md-12">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </form>
  {/if}
</div>
<div class="contact">
  <Contact/>
</div>
<Seo
  title="Contact | Prachi Pharma"
  description="This is contact page"
  type="WebPage"
/>

<style>

  .contact {
    display: flex;
    text-align: center;
    justify-content: center;
  }
  
  .container {
    width: 100%;
    padding: 2em 0;
    min-height: 100vh;
  }
  h2 {
    font-weight: 500;
    font-size: 2em;
  }
  input,
  textarea {
    width: 100%;
    padding: 0.75em 1em;
    border-radius: 0.25em;
    border: 1px solid #999;
  }
  .form-group {
    margin-bottom: 1.5em;
  }
  label {
    display: block;
    padding-bottom: 0.5em;
  }
  .success {
    color: rgb(230, 116, 22);
  }
  .error {
    border: 1px solid red;
  }
  .red {
    color: red;
  }

  /* 2xl */
@media (max-width: 1536px) {
  .contact {
    display: flex;
    text-align: center;
    justify-content: center;
  }
  .container {
    width: 100%;
    padding: 2em 0;
    min-height: 100vh;
  }
  h2 {
    font-weight: 500;
    font-size: 2em;
  }
  input,
  textarea {
    width: 90%;
    padding: 0.75em 1em;
    border-radius: 0.25em;
    border: 1px solid #999;
  }
  .form-group {
    margin-bottom: 1.5em;
  }
  label {
    display: block;
    padding-bottom: 0.5em;
  }
  .success {
    color: rgb(230, 116, 22);
  }
  .error {
    border: 1px solid red;
  }
  .red {
    color: red;
  }

}

/* xl */
@media (max-width: 1280px) {
  .contact {
    display: flex;
    text-align: center;
    justify-content: center;
  }
  .container {
    width: 100%;
    padding: 2em 0;
    min-height: 100vh;
  }
  h2 {
    font-weight: 500;
    font-size: 2em;
  }
  input,
  textarea {
    width: 90%;
    padding: 0.75em 1em;
    border-radius: 0.25em;
    border: 1px solid #999;
  }
  .form-group {
    margin-bottom: 1.5em;
  }
  label {
    display: block;
    padding-bottom: 0.5em;
  }
  .success {
    color: rgb(230, 116, 22);
  }
  .error {
    border: 1px solid red;
  }
  .red {
    color: red;
  }

}

/* lg */
@media (max-width: 1024px) {
  .contact {
    display: flex;
    text-align: center;
    justify-content: center;
  }
  .container {
    width: 100%;
    padding: 2em 0;
    min-height: 100vh;
  }
  h2 {
    font-weight: 500;
    font-size: 1.5em;
  }
  input,
  textarea {
    width: 90%;
    padding: 0.75em 1em;
    border-radius: 0.25em;
    border: 1px solid #999;
  }
  .form-group {
    margin-bottom: 1.5em;
  }
  label {
    display: block;
    padding-bottom: 0.5em;
  }
  .success {
    color: rgb(230, 116, 22);
  }
  .error {
    border: 1px solid red;
  }
  .red {
    color: red;
  }

}

/* md */
@media (max-width: 768px) {
  .contact {
    display: flex;
    text-align: center;
    justify-content: center;
  }
  .container {
    width: 100%;
    padding: 2em 0;
    min-height: 100vh;
  }
  h2 {
    font-weight: 500;
    font-size: 1.5em;
  }
  input,
  textarea {
    width: 90%;
    padding: 0.75em 1em;
    border-radius: 0.25em;
    border: 1px solid #999;
  }
  .form-group {
    margin-bottom: 1.5em;
    font-size: 0.8em;
  }
  label {
    display: block;
    padding-bottom: 0.5em;
  }
  .success {
    color: rgb(230, 116, 22);
  }
  .error {
    border: 1px solid red;
  }
  .red {
    color: red;
  }

}

/* sm */
@media (max-width: 640px) {
  .contact {
    display: flex;
    text-align: center;
    justify-content: center;
  }
  .container {
    width: 100%;
    padding: 2em 0;
    min-height: 100vh;
  }
  h2 {
    font-weight: 500;
    font-size: 1.5em;
  }
  input,
  textarea {
    width: 90%;
    padding: 0.75em 1em;
    border-radius: 0.25em;
    border: 1px solid #999;
  }
  .form-group {
    margin-bottom: 1.5em;
    font-size: 0.8em;
  }
  label {
    display: block;
    padding-bottom: 0.5em;
  }
  .success {
    color: rgb(230, 116, 22);
  }
  .error {
    border: 1px solid red;
  }
  .red {
    color: red;
  }
}

/* xs */
@media (max-width: 475px) {
  .contact {
    display: flex;
    text-align: center;
    justify-content: center;
  }
  .container {
    width: 100%;
    padding: 2em 0;
    min-height: 100vh;
  }
  h2 {
    font-weight: 500;
    font-size: 1.3em;
  }
  input,
  textarea {
    width: 90%;
    padding: 0.75em 1em;
    border-radius: 0.25em;
    border: 1px solid #999;
  }
  .form-group {
    margin-bottom: 1.5em;
    font-size: 0.7em;
  }
  label {
    display: block;
    padding-bottom: 0.5em;
  }
  .success {
    color: rgb(230, 116, 22);
  }
  .error {
    border: 1px solid red;
  }
  .red {
    color: red;
  }
}

@media (max-width: 435px) {
  .contact {
    display: flex;
    text-align: center;
    justify-content: center;
  }
  .container {
    width: 100%;
    padding: 2em 0;
    min-height: 100vh;
  }
  h2 {
    font-weight: 500;
    font-size: 1.4em;
  }
  input,
  textarea {
    width: 90%;
    padding: 0.75em 1em;
    border-radius: 0.25em;
    border: 1px solid #999;
  }
  .form-group {
    margin-bottom: 1.5em;
    font-size: 0.8em;
  }
  label {
    display: block;
    padding-bottom: 0.5em;
  }
  .success {
    color: rgb(230, 116, 22);
  }
  .error {
    border: 1px solid red;
  }
  .red {
    color: red;
  }
}

@media (max-width: 375px) {
  .contact {
    display: flex;
    text-align: center;
    justify-content: center;
    
  }
  .container {
    width: 100%;
    padding: 2em 0;
    min-height: 100vh;
  }
  h2 {
    font-weight: 500;
    font-size: 1.2em;
  }
  input,
  textarea {
    width: 80%;
    padding: 0.75em 1em;
    border-radius: 0.25em;
    border: 1px solid #999;
  }
  .form-group {
    margin-bottom: 1.5em;
    font-size: 0.6em;
  }
  label {
    display: block;
    padding-bottom: 0.5em;
  }
  .success {
    color: rgb(230, 116, 22);
  }
  .error {
    border: 1px solid red;
  }
  .red {
    color: red;
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



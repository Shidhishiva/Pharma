<!--contact component-->

<div class="contact">
  <h3>Contact Us</h3>
  <p><strong>Prachi Pharma</strong></p>
  <p>3481 Dope Hills</p>
  <p>Malabar Hills, Mumbai</p>
  <p>Phone: (123) 456-7890</p>
  <p>Email: <a href="mailto:name@example.com">pharma@222.com</a></p>
</div>

<style>
  .contact {
    grid-column: span 4;
    
  }
  h3 {
    padding-bottom: 0.5em;
    margin-bottom: 0.5em;
    font-size: 25px;
    font-weight: 500;
    
  }
  a {
    text-decoration: none;
    color: var(--primary-color);
  }
  a:hover {
    text-decoration: underline;
  }

  /* 2xl */
  @media (max-width: 1536px) {
    .contact {
      grid-column: span 4;
    }
    h3 {
      padding-bottom: 0.5em;
      margin-bottom: 0.5em;
      font-size: 25px;
      font-weight: 500;
      border-bottom: 1px solid #ddd;
    }

    p {
      font-size: 22px;
    }
    a {
      text-decoration: none;
      color: var(--primary-color);
    }
    a:hover {
      text-decoration: underline;
    }
  }

  /* xl */
  @media (max-width: 1280px) {
    .contact {
      grid-column: span 4;
    }
    h3 {
      padding-bottom: 0.5em;
      margin-bottom: 0.5em;
      font-size: 25px;
      font-weight: 500;
      border-bottom: 1px solid #ddd;
    }

    p {
      font-size: 22px;
    }
    a {
      text-decoration: none;
      color: var(--primary-color);
    }
    a:hover {
      text-decoration: underline;
    }
  }

  /* lg */
  @media (max-width: 1024px) {
    .contact {
      grid-column: span 4;
    }
    h3 {
      padding-bottom: 0.5em;
      margin-bottom: 0.5em;
      font-size: 22px;
      font-weight: 500;
      border-bottom: 1px solid #ddd;
    }

    p {
      font-size: 18px;
    }
    a {
      text-decoration: none;
      color: var(--primary-color);
    }
    a:hover {
      text-decoration: underline;
    }
  }

  /* md */
  @media (max-width: 768px) {
    .contact {
      grid-column: span 4;
    }
    h3 {
      padding-bottom: 0.5em;
      margin-bottom: 0.5em;
      font-size: 16px;
      font-weight: 500;
      border-bottom: 1px solid #ddd;
    }

    p {
      font-size: 14px;
    }
    a {
      text-decoration: none;
      color: var(--primary-color);
    }
    a:hover {
      text-decoration: underline;
    }
  }

  /* sm */
  @media (max-width: 640px) {
    .contact {
      grid-column: span 4;
    }
    h3 {
      padding-bottom: 0.5em;
      margin-bottom: 0.5em;
      font-size: 14px;
      font-weight: 500;
      border-bottom: 1px solid #ddd;
    }

    p {
      font-size: 11px;
    }
    a {
      text-decoration: none;
      color: var(--primary-color);
    }
    a:hover {
      text-decoration: underline;
    }
  }

  /* xs */
  @media (max-width: 475px) {
    .contact {
      grid-column: span 4;
      padding-left: 20px;
    }
    h3 {
      padding-bottom: 0.5em;
      margin-bottom: 0.5em;
      font-size: 12px;
      font-weight: 500;
      border-bottom: 1px solid #ddd;
    }

    p {
      font-size: 10px;
    }
    a {
      text-decoration: none;
      color: var(--primary-color);
    }
    a:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 435px) {
    .contact {
      grid-column: span 4;

    }
    h3 {
      padding-bottom: 0.5em;
      margin-bottom: 0.5em;
      font-size: 12px;
      font-weight: 500;
      border-bottom: 1px solid #ddd;
    }

    p {
      font-size: 9px;
    }
    a {
      text-decoration: none;
      color: var(--primary-color);
    }
    a:hover {
      text-decoration: underline;
    }
    
  }

  @media (max-width: 375px) {
    .contact {
      grid-column: span 4;
    }
    h3 {
      padding-bottom: 0.5em;
      margin-bottom: 0.5em;
      font-size: 12px;
      font-weight: 500;
      border-bottom: 1px solid #ddd;
    }

    p {
      font-size: 9px;
    }
    a {
      text-decoration: none;
      color: var(--primary-color);
    }
    a:hover {
      text-decoration: underline;
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

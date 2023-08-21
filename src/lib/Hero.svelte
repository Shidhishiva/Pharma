<!-- Hero section -->
<!--Images slider section-->

<div class="hero">
  <div class="image-slider">
    <h2>Welcome to Prachi Pharma</h2>
  </div>
</div>

<style>
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-slider {
    height: 80vh;
    width: 100%;
    align-items: center;
    background-image: url("./assets/slider-1.jpg");
    background-size: 100% 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    animation: changeImage 5s linear infinite;
  }

  @keyframes changeImage {
    0% {
      background-image: url("./assets/slider-2.jpg");
    }
    50% {
      background-image: url("./assets/slider-3.jpg");
    }
    100% {
      background-image: url("./assets//slider-1.jpg");
    }
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 250px;
    color: #fff;
    font-size: 40px;
    font-weight: 500;
    animation-name: inherit;
    animation-duration: 3s;
  }

  @keyframes inherit {
    from {
      margin-right: 100%;
    }

    to {
      margin-top: 0%;
    }
  }

  /* 2xl */
  @media (max-width: 1536px) {
    .hero {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .image-slider {
      height: 78vh;
      width: 100%;
      background-image: url("./assets/slider-1.jpg");
      background-size: 100% 100%;
      object-fit: cover;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      animation: changeImage 5s linear infinite;
    }

    @keyframes changeImage {
      0% {
        background-image: url("./assets/slider-2.jpg");
      }
      50% {
        background-image: url("./assets/slider-3.jpg");
      }
      100% {
        background-image: url("./assets//slider-1.jpg");
      }
    }

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 14%;
      color: #fff;
      font-size: 38px;
      font-weight: 500;
      animation-name: inherit;
      animation-duration: 3s;
    }

    @keyframes inherit {
      from {
        margin-right: 100%;
      }

      to {
        margin-top: 0%;
      }
    }
  }

  /* xl */
  @media (max-width: 1280px) {
    .hero {
      align-items: center;
      margin: 10px;
    }

    .image-slider {
      height: 76vh;
      width: 100%;
      background-image: url("./assets/slider-1.jpg");
      background-size: 100% 100%;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      animation: changeImage 5s linear infinite;
    }

    @keyframes changeImage {
      0% {
        background-image: url("./assets/slider-2.jpg");
      }
      50% {
        background-image: url("./assets/slider-3.jpg");
      }
      100% {
        background-image: url("./assets//slider-1.jpg");
      }
    }

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 15%;
      color: #fff;
      font-size: 38px;
      font-weight: 500;
      animation-name: inherit;
      animation-duration: 3s;
    }

    @keyframes inherit {
      from {
        margin-right: 100%;
      }

      to {
        margin-top: 0%;
      }
    }
  }

  /* lg */
  @media (max-width: 1024px) {
    .image-slider {
      height: 76vh;
      width: 100%;
      background-image: url("./assets/slider-1.jpg");
      background-size: 100% 100%;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      animation: changeImage 5s linear infinite;
    }

    @keyframes changeImage {
      0% {
        background-image: url("./assets/slider-2.jpg");
      }
      50% {
        background-image: url("./assets/slider-3.jpg");
      }
      100% {
        background-image: url("./assets//slider-1.jpg");
      }
    }

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 20%;
      color: #fff;
      font-size: 35px;
      font-weight: 500;
      animation-name: inherit;
      animation-duration: 3s;
    }

    @keyframes inherit {
      from {
        margin-right: 100%;
      }

      to {
        margin-top: 0%;
      }
    }
  }

  /* md */
  @media (max-width: 768px) {
    .image-slider {
      height: 70vh;
      width: 100%;
      background-image: url("./assets/slider-1.jpg");
      background-size: 100% 100%;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      animation: changeImage 5s linear infinite;
    }

    @keyframes changeImage {
      0% {
        background-image: url("./assets/slider-2.jpg");
      }
      50% {
        background-image: url("./assets/slider-3.jpg");
      }
      100% {
        background-image: url("./assets//slider-1.jpg");
      }
    }

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 25%;
      color: #fff;
      font-size: 28px;
      font-weight: 500;
      animation-name: inherit;
      animation-duration: 3s;
    }

    @keyframes inherit {
      from {
        margin-right: 100%;
      }

      to {
        margin-top: 0%;
      }
    }
  }

  /* sm */
  @media (max-width: 640px) {
    .image-slider {
      height: 68vh;
      width: 100%;
      background-image: url("./assets/slider-1.jpg");
      background-size: 100% 100%;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      animation: changeImage 5s linear infinite;
    }

    @keyframes changeImage {
      0% {
        background-image: url("./assets/slider-2.jpg");
      }
      50% {
        background-image: url("./assets/slider-3.jpg");
      }
      100% {
        background-image: url("./assets//slider-1.jpg");
      }
    }

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 35%;
      color: #fff;
      font-size: 25px;
      font-weight: 500;
      animation-name: inherit;
      animation-duration: 3s;
    }

    @keyframes inherit {
      from {
        margin-right: 100%;
      }

      to {
        margin-top: 0%;
      }
    }
  }

  @media (max-width: 475px) {
    .image-slider {
      height: 64vh;
      width: 100%;
      background-image: url("./assets/slider-1.jpg");
      background-size: 100% 100%;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      animation: changeImage 5s linear infinite;
    }

    @keyframes changeImage {
      0% {
        background-image: url("./assets/slider-2.jpg");
      }
      50% {
        background-image: url("./assets/slider-3.jpg");
      }
      100% {
        background-image: url("./assets//slider-1.jpg");
      }
    }

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 40%;
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      animation-name: inherit;
      animation-duration: 3s;
    }

    @keyframes inherit {
      from {
        margin-right: 100%;
      }

      to {
        margin-top: 0%;
      }
    }
  }

  @media (max-width: 435px) {
    .image-slider {
      height: 52vh;
      width: 100%;
      background-image: url("./assets/slider-1.jpg");
      background-size: 100% 100%;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      animation: changeImage 5s linear infinite;
    }

    @keyframes changeImage {
      0% {
        background-image: url("./assets/slider-2.jpg");
      }
      50% {
        background-image: url("./assets/slider-3.jpg");
      }
      100% {
        background-image: url("./assets//slider-1.jpg");
      }
    }

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 35%;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
      animation-name: inherit;
      animation-duration: 3s;
    }

    @keyframes inherit {
      from {
        margin-right: 100%;
      }

      to {
        margin-top: 0%;
      }
    }
  }

  /* xs */
  @media (max-width: 375px) {
    .image-slider {
      height: 38vh;
      width: 100%;
      background-image: url("./assets/slider-1.jpg");
      background-size: 100% 100%;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      animation: changeImage 5s linear infinite;
    }

    @keyframes changeImage {
      0% {
        background-image: url("./assets/slider-2.jpg");
      }
      50% {
        background-image: url("./assets/slider-3.jpg");
      }
      100% {
        background-image: url("./assets//slider-1.jpg");
      }
    }

    h2 {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top: 30%;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      animation-name: inherit;
      animation-duration: 3s;
    }

    @keyframes inherit {
      from {
        margin-right: 100%;
      }

      to {
        margin-top: 0%;
      }
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

  @media (max-width: 475px) {
    .container {
      max-width: 435px;
    }
  }

  @media (max-width: 435px) {
    .container {
      max-width: 375px;
    }
  }

  /* xs */
  @media (max-width: 375px) {
    .container {
      width: 100%;
    }
  }
</style>

<!-- Hero section -->
<!--Images slider section-->
<div class="image-slider">
  <h2>Welcome to Prachi Pharma</h2>
  
  <div class="button-slider">
    <button class="btn"> Click here </button>
  </div>
</div>

<style>
  .image-slider {
    height: 80vh;
    width: 100%;
    background-image: url("../../static/slider-1.jpg");
    background-size: 100% 100%;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    animation: changeImage 5s linear infinite;
  }

  @keyframes changeImage {
    0% {
      background-image: url("http://www.oscarpharma.in/images/main-slider/slider-4.jpg");
    }
    50% {
      background-image: url("http://www.oscarpharma.in/images/main-slider/slider-1.jpg");
    }
    100% {
      background-image: url("http://www.oscarpharma.in/images/main-slider/slider-5.jpg");
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

  .button-slider {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn {
    background-color: #df6e0b; /* Green */
    border: 10px;
    border-radius: 15px;
    color: white;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 18px;
    margin: 4px 2px;
    cursor: pointer;
    -webkit-transition-duration: 0.3s; /* Safari */
    transition-duration: 0.3s;
  }

  .btn:hover {
    background-color: #fff;
    color: black;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
      0 17px 50px 0 rgba(0, 0, 0, 0.19);
  }
</style>

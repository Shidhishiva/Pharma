<!-- Employees flash cards -->
<script>
  import emp1 from "$lib/assets/demo1.jpg";
  import emp2 from "$lib/assets/demo2.jpg";
  import emp3 from "$lib/assets/demo3.jpg";
</script>

<div class="container">
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img class="pic" src={emp1} alt="Avatar"  />
      </div>
      <div class="flip-card-back">
        <h1>John Doe</h1>
        <p>Chemical Engineer</p>
        <p>We love that guy</p>
      </div>
    </div>
  </div>

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img class="pic" src={emp2} alt="Avatar" />
      </div>
      <div class="flip-card-back">
        <h1>Mark Down</h1>
        <p>BioTech Engineer</p>
        <p>We love that guy</p>
      </div>
    </div>
  </div>

  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img class="pic" src={emp3} alt="Avatar"/>
      </div>
      <div class="flip-card-back">
        <h1>Tray Lewis</h1>
        <p>Production Engineer</p>
        <p>We love that guy</p>
      </div>
    </div>
  </div>
</div>

<!-- (max-width: 640px)
(min-width: 641px) and (max-width: 800px)
(min-width: 801px) and (max-width: 1024px)
(min-width: 1025px) -->

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 50px;

  }

  .pic {
    width: 300px;
    height: 300px;
  }
  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  .flip-card-back {
    background-color: #ff6600;
    color: white;
    transform: rotateY(180deg);
  }

/* 2xl */
@media (max-width: 1536px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 50px;
  }

  .pic {
    width: 300px;
    height: 300px;
  }
  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  .flip-card-back {
    background-color: #ff6600;
    color: white;
    transform: rotateY(180deg);
  }
}

/* xl */
@media (max-width: 1280px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 45px;
    padding: 45px;
  }

  .pic {
     width: 280px;
     height: 280px;
  }
  .flip-card {
    background-color: transparent;
    width: 280px;
    height: 280px;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  .flip-card-back {
    background-color: #ff6600;
    color: white;
    transform: rotateY(180deg);
  }
}

/* lg */
@media (max-width: 1024px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 40px;
  }

  .pic {
     width: 260px;
     height: 260px;
  }
  .flip-card {
    background-color: transparent;
    width: 260px;
    height: 260px;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  .flip-card-back {
    background-color: #ff6600;
    color: white;
    transform: rotateY(180deg);
  }
}

/* md */
@media (max-width: 768px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 30px;
  }

  .pic {
     width: 200px;
     height: 200px;
  }
  .flip-card {
    background-color: transparent;
    width: 200px;
    height: 200px;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  .flip-card-back {
    background-color: #ff6600;
    color: white;
    transform: rotateY(180deg);
  }
}

/* sm */
@media (max-width: 640px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
  }

  h1 {
     font-size: 20px;
  }

  p {
     font-size: 15px;
  }

  .pic {
     width: 150px;
     height: 150px;
  }
  .flip-card {
    background-color: transparent;
    width: 150px;
    height: 150px;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  .flip-card-back {
    background-color: #ff6600;
    color: white;
    transform: rotateY(180deg);
  }
}

/* xs */
@media (max-width: 475px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding: 15px;
  }

  h1 {
     font-size: 18px;
  }

  p {
     font-size: 12px;
  }

  .pic {
     width: 125px;
     height: 125px;
  }
  .flip-card {
    background-color: transparent;
    width: 125px;
    height: 125px;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  .flip-card-back {
    background-color: #ff6600;
    color: white;
    transform: rotateY(180deg);
  }
}

@media (max-width: 435px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 12px;
  }

  
  h1 {
     font-size: 16px;
  }

  p {
     font-size: 10px;
  }

  .pic {
     width: 105px;
     height: 105px;
  }
  .flip-card {
    background-color: transparent;
    width: 105px;
    height: 105px;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  .flip-card-back {
    background-color: #ff6600;
    color: white;
    transform: rotateY(180deg);
  }
}

@media (max-width: 375px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
  }

  h1 {
     font-size: 14px;
  }

  p {
     font-size: 8px;
  }

  .pic {
     width: 95px;
     height: 95px;
  }
  .flip-card {
    background-color: transparent;
    width: 95px;
    height: 95px;
    perspective: 1000px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.6s;
    transform-style: preserve-3d;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front,
  .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    background-color: #bbb;
    color: black;
  }

  .flip-card-back {
    background-color: #ff6600;
    color: white;
    transform: rotateY(180deg);
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
    max-width: 435px;
  }
}

@media (max-width: 435px) {
  .container {
    max-width: 375px;
  }
}

@media (max-width: 375px) {
  .container {
    width: 100%;
  }
}
</style>

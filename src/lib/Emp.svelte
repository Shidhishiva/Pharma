<!-- Employees flash cards --> 

<div class="container">
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img
          src="../../static/demo1.jpg"
          alt="Avatar"
          style="width:300px;height:300px;"
        />
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
        <img
          src="../../static/demo2.jpg"
          alt="Avatar"
          style="width:300px;height:300px;"
        />
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
        <img
          src="../../static/demo3.jpg"
          alt="Avatar"
          style="width:300px;height:300px;"
        />
      </div>
      <div class="flip-card-back">
        <h1>Tray Lewis </h1>
        <p>Production Engineer</p>
        <p>We love that guy</p>
      </div>
    </div>
  </div>
</div>

<style>

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
    padding: 50px;
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
</style>

<style scoped>
  .hamburger {
    height: 35px;
    width: 35px;
    transform: 0.2s;
    position: relative;
  }
  .hamburger .checkbox {
    position: absolute;
    opacity: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
    z-index: 2;
  }
  .line {
    transition: 0.5s;
    stroke-width: 4px;
    stroke: black;
  }
  .lineTop {
    stroke-dasharray: 40 40;
    stroke-dashoffset: 25;
  }
  .lineBottom {
    stroke-dasharray: 40 40;
    stroke-dashoffset: 60;
  }
  .lineMid {
    stroke-dasharray: 40 40;
  }
  .hamburger .checkbox:checked + svg .line {
    stroke: crimson;
  }
  .hamburger .checkbox:checked + svg .lineTop {
    stroke-dashoffset: 0;
    transform-origin: left;
    transform: rotateZ(45deg) translate(-5px, -3px);
  }
  .hamburger .checkbox:checked + svg .lineMid {
    stroke-dashoffset: 40;
  }
  .hamburger .checkbox:checked + svg .lineBottom {
    stroke-dashoffset: 0;
    transform-origin: left;
    transform: rotateZ(-45deg) translate(-3px, 3px);
  }
</style>

<template>
  <div class="hamburger">
    <input class="checkbox" type="checkbox" />
    <svg fill="none" viewBox="0 0 50 50" height="35" width="35">
      <path
        class="lineTop line"
        stroke-linecap="round"
        stroke-width="4"
        stroke="black"
        d="M6 11L44 11"
      ></path>
      <path
        stroke-linecap="round"
        stroke-width="4"
        stroke="black"
        d="M6 24H43"
        class="lineMid line"
      ></path>
      <path
        stroke-linecap="round"
        stroke-width="4"
        stroke="black"
        d="M6 37H43"
        class="lineBottom line"
      ></path>
    </svg>
  </div>
</template>

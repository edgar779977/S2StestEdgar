<template>
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_bii_0_1)">
      <rect width="40" height="40" rx="10" fill="#D9D9D9" fill-opacity="0.1"/>
    </g>
    <path
        d="M32.003 20.075C32.003 13.406 26.63 8 20.003 8C13.373 8.0015 8 13.406 8 20.0765C8 26.102 12.389 31.097 18.125 32.003V23.5655H15.08V20.0765H18.128V17.414C18.128 14.3885 19.9205 12.7175 22.661 12.7175C23.975 12.7175 25.3475 12.953 25.3475 12.953V15.923H23.834C22.3445 15.923 21.8795 16.8545 21.8795 17.81V20.075H25.2065L24.6755 23.564H21.878V32.0015C27.614 31.0955 32.003 26.1005 32.003 20.075Z"
        fill="white"/>
    <defs>
      <filter id="filter0_bii_0_1" x="-9.33333" y="-9.33333" width="58.6667" height="58.6667"
              filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="4.66667"/>
        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_0_1" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                       result="hardAlpha"/>
        <feOffset dx="-4.66667" dy="4.66667"/>
        <feGaussianBlur stdDeviation="2.33333"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_0_1"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                       result="hardAlpha"/>
        <feOffset dx="4.66667" dy="-4.66667"/>
        <feGaussianBlur stdDeviation="2.33333"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.646745 0 0 0 0 0.646745 0 0 0 0 0.646745 0 0 0 0.1 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_0_1" result="effect3_innerShadow_0_1"/>
      </filter>
    </defs>
  </svg>
</template>

<script>
export default {
  name: "FbSquare"
}
</script>
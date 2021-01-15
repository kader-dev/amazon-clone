import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/EvergreenRefresh/FromDec-19/FR_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg"
        alt=""
      />
      <div class="home__row">
        <Product
          id="122"
          title="Dell U2719D Écran de PC 27 InfinityEdge UltraSharp Wide Quad HD LCD à Rétroéclairage LED, IPS, 60 Hz, 8 ms, Noir"
          price={350}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Dhr7vaPiL._AC_SL1280_.jpg"
        />
        <Product
          id="125"
          title="Câble HDMI 4K 2m - Snowkids Câble HDMI 2.0 Haute Vitesse par Ethernet en Nylon Tressé Supporte 3D/ Retour Audio - Cordon HDMI pour Lecteur Blu-Ray/ PS3/ PS4/ TV 4K Ultra HD/Ecran"
          price={20}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61FZeqrnl3L._SL1001_.jpg"
        />
      </div>
      <div class="home__row">
        <Product
          id="128"
          title="La Vie en bleu (Français) Broché – 6 janvier 2021"
          price={21}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81Us54+l7GL.jpg"
        />
        <Product
          id="121"
          title="Willful Montre Connectée Femmes Homme Smartwatch Montre Sport Podometre Cardiofrequencemètre"
          price={28}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51EiuQIKL7L._AC_SL1000_.jpg"
        />
        <Product
          id="122"
          title="VIVENS pour Anker SoundCore 2 Enceinte Bluetooth Portable sans Fil avec EVA Dur Cas étui de Voyage Housse"
          price={40}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71FItWXL0BL._AC_SL1200_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

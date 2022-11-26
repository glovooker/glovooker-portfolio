import { Avatar } from '../components/Avatars/Avatars';
import gabrielLobo from '../assets/img/contributors/gabrielLobo.jpg';
import franklinCastro from '../assets/img/contributors/franklinCastro.jpg';
import thomasBermudez from '../assets/img/contributors/thomasBermudez.jpg';
import andreLopez from '../assets/img/contributors/andreLopez.jpg';
import fabianMena from '../assets/img/contributors/fabianMena.jpg';
import eduardoFont from '../assets/img/contributors/eduardoFont.jpg';
import estefaniaRegidor from '../assets/img/contributors/estefaniaRegidor.jpg';
import anabelleVelasquez from '../assets/img/contributors/anabelleVelasquez.jpg';
import jeremyVillegas from '../assets/img/contributors/jeremyVillegas.jpg';
import alvaroCastillo from '../assets/img/contributors/alvaroCastillo.jpg';
import andreyVillalobos from '../assets/img/contributors/andreyVillalobos.jpg';
import brandonLen from '../assets/img/contributors/brandonLen.jpg';
import monseSandi from '../assets/img/contributors/monseSandi.jpg';
import luciaManzanares from '../assets/img/contributors/luciaManzanares.jpg';
import arielMontero from '../assets/img/contributors/arielMontero.jpg';
import sergioMonge from '../assets/img/contributors/sergioMonge.jpg';

export type ContributorsList = {
  [key: string]: Avatar;
};

export const contributors: ContributorsList = {
  glovooker: {
    name: 'Gabriel Lobo',
    image: gabrielLobo,
    link: 'https://www.linkedin.com/in/glovooker/',
  },
  woodsoul: {
    name: 'Franklin Castro',
    image: franklinCastro,
    link: 'https://www.linkedin.com/in/franklin-castro-rodr%C3%ADguez/',
  },
  saturnxs: {
    name: 'Thomas Bermúdez',
    image: thomasBermudez,
    link: 'https://www.linkedin.com/in/thomas-bermudez-mora/',
  },
  anderlyn: {
    name: 'André López',
    image: andreLopez,
    link: 'https://www.linkedin.com/in/alstoria/',
  },
  fabianMena: {
    name: 'Fabián Mena',
    image: fabianMena,
    link: 'https://www.linkedin.com/in/fabi%C3%A1n-mena-garro-b25233202/',
  },
  eduardoFont: {
    name: 'Eduardo Font',
    image: eduardoFont,
    link: 'https://www.linkedin.com/in/eduardo-font-0ab75895/',
  },
  estefaniaRegidor: {
    name: 'Estefanía Regidor',
    image: estefaniaRegidor,
    link: 'https://www.linkedin.com/in/estefania-regidor-1971a680/',
  },
  anabelleVelasquez: {
    name: 'Anabelle Velásquez',
    image: anabelleVelasquez,
    link: 'https://www.linkedin.com/in/anabellevg/',
  },
  jeremyVillegas: {
    name: 'Jeremy Villegas',
    image: jeremyVillegas,
    link: 'https://www.linkedin.com/in/jeremy-alejandro-villegas-rodriguez-a60bab218/',
  },
  alvaroCastillo: {
    name: 'Álvaro Castillo',
    image: alvaroCastillo,
    link: 'https://github.com/lvroc',
  },
  andreyVillalobos: {
    name: 'Andrey Villalobos',
    image: andreyVillalobos,
    link: 'https://github.com/andrey2620',
  },
  brandonLen: {
    name: 'Brandon Len',
    image: brandonLen,
    link: 'https://github.com/LenVr',
  },
  monseSandi: {
    name: 'Monserrat Sandí',
    image: monseSandi,
    link: 'https://www.linkedin.com/in/monserrat-sand%C3%AD-fonseca-ab7536230/',
  },
  luciaManzanares: {
    name: 'Lucía Manzanares',
    image: luciaManzanares,
    link: 'https://www.linkedin.com/in/luc%C3%ADa-manzanares-ram%C3%ADrez-2931a9211/',
  },
  arielMontero: {
    name: 'Ariel Montero',
    image: arielMontero,
    link: 'https://www.linkedin.com/in/ariel-montero-monestel-74a337186/',
  },
  sergioMonge: {
    name: 'Sergio Monge',
    image: sergioMonge,
    link: 'https://www.linkedin.com/in/sergio-monge-49363050/',
  },
};

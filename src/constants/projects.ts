import mawiCover from '../assets/img/projects/mawi.jpg';
import mawi1 from '../assets/img/projects/mawi/1.png';
import mawi2 from '../assets/img/projects/mawi/2.png';
import mawi3 from '../assets/img/projects/mawi/3.png';

import stariesCover from '../assets/img/projects/staries.jpg';
import staries1 from '../assets/img/projects/staries/1.png';
import staries2 from '../assets/img/projects/staries/2.png';
import staries3 from '../assets/img/projects/staries/3.png';

import mobydygCover from '../assets/img/projects/mobydyg-site.jpg';
import mobydygSite1 from '../assets/img/projects/mobydyg-site/1.png';
import mobydygSite2 from '../assets/img/projects/mobydyg-site/2.png';
import mobydygSite3 from '../assets/img/projects/mobydyg-site/3.png';

import mobydygClientCore1 from '../assets/img/projects/mobydyg-client-core/1.png';
import mobydygClientCore2 from '../assets/img/projects/mobydyg-client-core/2.png';
import mobydygClientCore3 from '../assets/img/projects/mobydyg-client-core/3.png';

import mobydygBackoffice1 from '../assets/img/projects/mobydyg-backoffice/1.png';
import mobydygBackoffice2 from '../assets/img/projects/mobydyg-backoffice/2.png';
import mobydygBackoffice3 from '../assets/img/projects/mobydyg-backoffice/3.png';

import tournamentCover from '../assets/img/projects/tournament.jpg';
import tournament1 from '../assets/img/projects/fct-tournament/1.png';
import tournament2 from '../assets/img/projects/fct-tournament/2.png';
import tournament3 from '../assets/img/projects/fct-tournament/3.png';

import mokaCover from '../assets/img/projects/moka.jpg';
import moka1 from '../assets/img/projects/moka/1.png';
import moka2 from '../assets/img/projects/moka/2.png';
import moka3 from '../assets/img/projects/moka/3.png';

import tummyCover from '../assets/img/projects/tummy.jpg';
import tummy1 from '../assets/img/projects/tummy/1.png';
import tummy2 from '../assets/img/projects/tummy/2.png';
import tummy3 from '../assets/img/projects/tummy/3.png';

import cleverSolutionsCover from '../assets/img/projects/clever-solutions.jpg';
import cleverSolutions1 from '../assets/img/projects/clever-solutions/1.png';
import cleverSolutions2 from '../assets/img/projects/clever-solutions/2.png';
import cleverSolutions3 from '../assets/img/projects/clever-solutions/3.png';

import personalBrandCover from '../assets/img/projects/content-brand-book.jpg';
import personalBrand1 from '../assets/img/projects/personal-brand/1.png';
import personalBrand2 from '../assets/img/projects/personal-brand/2.png';
import personalBrand3 from '../assets/img/projects/personal-brand/3.png';
import personalBrand4 from '../assets/img/projects/personal-brand/4.png';
import personalBrand5 from '../assets/img/projects/personal-brand/5.png';
import personalBrand6 from '../assets/img/projects/personal-brand/6.png';
import personalBrand7 from '../assets/img/projects/personal-brand/7.png';
import personalBrand8 from '../assets/img/projects/personal-brand/8.png';
import personalBrand9 from '../assets/img/projects/personal-brand/9.png';
import personalBrand10 from '../assets/img/projects/personal-brand/10.png';
import personalBrand11 from '../assets/img/projects/personal-brand/11.png';
import personalBrand12 from '../assets/img/projects/personal-brand/12.png';
import personalBrand13 from '../assets/img/projects/personal-brand/13.png';
import personalBrand14 from '../assets/img/projects/personal-brand/14.png';
import personalBrand15 from '../assets/img/projects/personal-brand/15.png';

import ikiCover from '../assets/img/projects/iki.jpg';
import iki1 from '../assets/img/projects/iki/1.png';
import iki2 from '../assets/img/projects/iki/2.png';
import iki3 from '../assets/img/projects/iki/3.png';
import iki4 from '../assets/img/projects/iki/4.png';
import iki5 from '../assets/img/projects/iki/5.png';

import findingTheMeaningCover from '../assets/img/projects/finding-the-meaning.jpg';
import findingTheMeaning1 from '../assets/img/projects/finding-the-meaning/1.png';
import findingTheMeaning2 from '../assets/img/projects/finding-the-meaning/2.png';
import findingTheMeaning3 from '../assets/img/projects/finding-the-meaning/3.png';
import findingTheMeaning4 from '../assets/img/projects/finding-the-meaning/4.png';
import findingTheMeaning5 from '../assets/img/projects/finding-the-meaning/5.png';
import findingTheMeaning6 from '../assets/img/projects/finding-the-meaning/6.png';
import findingTheMeaning7 from '../assets/img/projects/finding-the-meaning/7.png';
import findingTheMeaning8 from '../assets/img/projects/finding-the-meaning/8.png';
import findingTheMeaning9 from '../assets/img/projects/finding-the-meaning/9.png';
import findingTheMeaning10 from '../assets/img/projects/finding-the-meaning/10.png';

import { tags } from './tags';
import { TagProps } from '../components/ProjectCard/ProjectCard';
import { Avatar } from '../components/Avatars/Avatars';
import { contributors } from './contributors';

type ProjectList = {
  tags: TagProps[];
  title: string;
  categ: string;
  coverImg: string;
  desc: string;
  longDesc: string;
  textColor: string;
  tagsBgColor: string;
  projectImg: string[];
  contributors: Avatar[];
  previewLink?: string;
  githubLink?: string;
  figmaLink?: string;
};

export const PROJECTS: ProjectList[] = [
  {
    tags: [tags.react, tags.typescript, tags.figma],
    title: 'mawi.title',
    categ: 'SOFT · UI/UX',
    coverImg: mawiCover,
    desc: 'mawi.description',
    longDesc: 'mawi.long_description',
    textColor: 'text-[#36015d]',
    tagsBgColor: 'bg-[#36015d]',
    projectImg: [mawi1, mawi2, mawi3],
    contributors: [
      contributors.glovooker,
      contributors.sergioMonge,
      contributors.arielMontero,
    ],
  },
  {
    tags: [tags.react, tags.typescript, tags.nodejs, tags.firebase, tags.figma],
    title: 'staries.title',
    categ: 'SOFT · UI/UX · DES',
    coverImg: stariesCover,
    desc: 'staries.description',
    longDesc: 'staries.long_description',
    previewLink: 'https://staries-skemclub.web.app/',
    githubLink: 'https://github.com/glovooker/staries',
    textColor: 'text-[#3f8293]',
    tagsBgColor: 'bg-[#3f8293]',
    projectImg: [staries1, staries2, staries3],
    contributors: [
      contributors.glovooker,
      contributors.woodsoul,
      contributors.saturnxs,
      contributors.anderlyn,
      contributors.fabianMena,
    ],
  },
  {
    tags: [tags.angular, tags.scss, tags.typescript, tags.aws, tags.figma],
    title: 'mobydygSite.title',
    categ: 'SOFT · UI/UX · DES',
    coverImg: mobydygCover,
    desc: 'mobydygSite.description',
    longDesc: 'mobydygSite.long_description',
    previewLink: 'https://mobydyg.com/',
    textColor: 'text-[#EA803F]',
    tagsBgColor: 'bg-[#EA803F]',
    projectImg: [mobydygSite1, mobydygSite2, mobydygSite3],
    contributors: [contributors.glovooker],
  },
  {
    tags: [tags.angular, tags.scss, tags.typescript, tags.aws, tags.mysql],
    title: 'mobydygCore.title',
    categ: 'SOFT · DES',
    coverImg: mobydygCover,
    desc: 'mobydygCore.description',
    longDesc: 'mobydygCore.long_description',
    previewLink: 'https://merakienlinea.com/',
    textColor: 'text-[#EA803F]',
    tagsBgColor: 'bg-[#EA803F]',
    projectImg: [mobydygClientCore1, mobydygClientCore2, mobydygClientCore3],
    contributors: [
      contributors.glovooker,
      contributors.woodsoul,
      contributors.saturnxs,
      contributors.eduardoFont,
    ],
  },
  {
    tags: [
      tags.angular,
      tags.scss,
      tags.typescript,
      tags.aws,
      tags.mysql,
      tags.figma,
    ],
    title: 'mobydygBackoffice.title',
    categ: 'SOFT · UI/UX · DES',
    coverImg: mobydygCover,
    desc: 'mobydygBackoffice.description',
    longDesc: 'mobydygBackoffice.long_description',
    previewLink: 'https://portal.mobydyg.com/',
    textColor: 'text-[#EA803F]',
    tagsBgColor: 'bg-[#EA803F]',
    projectImg: [mobydygBackoffice1, mobydygBackoffice2, mobydygBackoffice3],
    contributors: [
      contributors.glovooker,
      contributors.woodsoul,
      contributors.saturnxs,
      contributors.eduardoFont,
    ],
  },
  {
    tags: [tags.react, tags.dotnet, tags.csharp, tags.sqlserver, tags.figma],
    title: 'tournament.title',
    categ: 'SOFT · UI/UX · DES',
    coverImg: tournamentCover,
    desc: 'tournament.description',
    longDesc: 'tournament.long_description',
    textColor: 'text-[#f2bc1c]',
    tagsBgColor: 'bg-[#f2bc1c]',
    projectImg: [tournament1, tournament2, tournament3],
    contributors: [
      contributors.glovooker,
      contributors.woodsoul,
      contributors.saturnxs,
      contributors.estefaniaRegidor,
    ],
  },
  {
    tags: [
      tags.html,
      tags.css,
      tags.javascript,
      tags.nodejs,
      tags.mongodb,
      tags.figma,
    ],
    title: 'moka.title',
    categ: 'SOFT · UI/UX · DES',
    coverImg: mokaCover,
    desc: 'moka.description',
    longDesc: 'moka.long_description',
    githubLink: 'https://github.com/glovooker/veterinaria-moka',
    textColor: 'text-[#82b29a]',
    tagsBgColor: 'bg-[#82b29a]',
    projectImg: [moka1, moka2, moka3],
    contributors: [
      contributors.glovooker,
      contributors.anabelleVelasquez,
      contributors.jeremyVillegas,
      contributors.alvaroCastillo,
      contributors.andreyVillalobos,
      contributors.brandonLen,
    ],
  },
  {
    tags: [tags.html, tags.css, tags.javascript, tags.php],
    title: 'tummy.title',
    categ: 'SOFT · DES',
    coverImg: tummyCover,
    desc: 'tummy.description',
    longDesc: 'tummy.long_description',
    githubLink: 'https://github.com/glovooker/tummy',
    textColor: 'text-[#fe5470]',
    tagsBgColor: 'bg-[#fe5470]',
    projectImg: [tummy1, tummy2, tummy3],
    contributors: [
      contributors.glovooker,
      contributors.monseSandi,
      contributors.luciaManzanares,
    ],
  },
  {
    tags: [tags.html, tags.css, tags.javascript, tags.figma],
    title: 'cleverSolutions.title',
    categ: 'SOFT · UI/UX · DES',
    coverImg: cleverSolutionsCover,
    desc: 'cleverSolutions.description',
    longDesc: 'cleverSolutions.long_description',
    previewLink: 'https://glovooker.github.io/landing-page-bisoft-1/',
    githubLink: 'https://github.com/glovooker/landing-page-bisoft-1',
    textColor: 'text-[#492e71]',
    tagsBgColor: 'bg-[#492e71]',
    projectImg: [cleverSolutions1, cleverSolutions2, cleverSolutions3],
    contributors: [
      contributors.glovooker,
      contributors.anabelleVelasquez,
      contributors.jeremyVillegas,
      contributors.alvaroCastillo,
      contributors.andreyVillalobos,
      contributors.brandonLen,
    ],
  },
  {
    tags: [tags.figma],
    title: 'personalBrand.title',
    categ: 'DES',
    coverImg: personalBrandCover,
    desc: 'personalBrand.description',
    longDesc: 'personalBrand.long_description',
    figmaLink:
      'https://www.figma.com/file/M85LUPS1P2iWSpW9n90kdZ/Just-Another-Personal-Design-Style?node-id=1%3A42&t=H74Gb6JpkYdjb7Ij-1',
    textColor: 'text-[#4b7877]',
    tagsBgColor: 'bg-[#4b7877]',
    projectImg: [
      personalBrand1,
      personalBrand2,
      personalBrand3,
      personalBrand4,
      personalBrand5,
      personalBrand6,
      personalBrand7,
      personalBrand8,
      personalBrand9,
      personalBrand10,
      personalBrand11,
      personalBrand12,
      personalBrand13,
      personalBrand14,
      personalBrand15,
    ],
    contributors: [contributors.glovooker],
  },
  {
    tags: [tags.figma],
    title: 'iki.title',
    categ: 'UI/UX · DES',
    coverImg: ikiCover,
    desc: 'iki.description',
    longDesc: 'iki.long_description',
    figmaLink:
      'https://www.figma.com/file/iJu9bgjogKUKHkz0g2huKq/CEDES---iki-Imagen-Gr%C3%A1fica?node-id=0%3A1&t=pu70NTQ9MEECXKA0-1',
    textColor: 'text-[#4699c1]',
    tagsBgColor: 'bg-[#4699c1]',
    projectImg: [iki1, iki2, iki3, iki4, iki5],
    contributors: [contributors.glovooker],
  },
  {
    tags: [tags.figma],
    title: 'findingTheMeaning.title',
    categ: 'DES',
    coverImg: findingTheMeaningCover,
    desc: 'findingTheMeaning.description',
    longDesc: 'findingTheMeaning.long_description',
    figmaLink:
      'https://www.figma.com/file/VtbRxXh3YR59WZ5vohYcTz/Cenfotec---Finding-The-Meaning-Content-Book?node-id=251%3A2&t=jz3Fxonbwy3DsS38-1',
    textColor: 'text-[#0094ff]',
    tagsBgColor: 'bg-[#0094ff]',
    projectImg: [
      findingTheMeaning1,
      findingTheMeaning2,
      findingTheMeaning3,
      findingTheMeaning4,
      findingTheMeaning5,
      findingTheMeaning6,
      findingTheMeaning7,
      findingTheMeaning8,
      findingTheMeaning9,
      findingTheMeaning10,
    ],
    contributors: [contributors.glovooker, contributors.woodsoul],
  },
];

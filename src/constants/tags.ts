import {
  FaReact,
  FaAngular,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPhp,
  FaBootstrap,
  FaJava,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiAmazonaws,
  SiDotnet,
  SiCsharp,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiFirebase,
  SiSass,
  SiGraphql,
  SiApollographql,
  SiDgraph,
  SiAzuredevops,
  SiWolframmathematica,
  SiRedux,
  SiTailwindcss,
  SiJquery,
  SiMui,
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { DiJavascript1 } from 'react-icons/di';
import { IconType } from 'react-icons/lib';

export type TagList = {
  [key: string]: {
    tagName: string;
    tagColor: string;
    tagBgColor: string;
    tagIcon: IconType;
  };
};

export const tags: TagList = {
  html: {
    tagName: 'HTML',
    tagColor: '#dd4b25',
    tagBgColor: 'bg-[#dd4b25]',
    tagIcon: FaHtml5,
  },
  css: {
    tagName: 'CSS',
    tagColor: '#3595cf',
    tagBgColor: 'bg-[#3595cf]',
    tagIcon: FaCss3Alt,
  },
  javascript: {
    tagName: 'JavaScript',
    tagColor: '#efd81d',
    tagBgColor: 'bg-[#efd81d]',
    tagIcon: DiJavascript1,
  },
  jquery: {
    tagName: 'jQuery',
    tagColor: '#0769ad',
    tagBgColor: 'bg-[#0769ad]',
    tagIcon: SiJquery,
  },
  bootstrap: {
    tagName: 'Bootstrap',
    tagColor: '#7952b3',
    tagBgColor: 'bg-[#7952b3]',
    tagIcon: FaBootstrap,
  },
  tailwind: {
    tagName: 'Tailwind CSS',
    tagColor: '#06b6d4',
    tagBgColor: 'bg-[#06b6d4]',
    tagIcon: SiTailwindcss,
  },
  react: {
    tagName: 'React',
    tagColor: '#61dbfb',
    tagBgColor: 'bg-[#61dbfb]',
    tagIcon: FaReact,
  },
  redux: {
    tagName: 'Redux',
    tagColor: '#764abc',
    tagBgColor: 'bg-[#764abc]',
    tagIcon: SiRedux,
  },
  materialui: {
    tagName: 'Material UI',
    tagColor: '#0a58ad',
    tagBgColor: 'bg-[#0a58ad]',
    tagIcon: SiMui,
  },
  angular: {
    tagName: 'Angular',
    tagColor: '#dd1b16',
    tagBgColor: 'bg-[#dd1b16]',
    tagIcon: FaAngular,
  },
  scss: {
    tagName: 'SCSS',
    tagColor: '#c76395',
    tagBgColor: 'bg-[#c76395]',
    tagIcon: SiSass,
  },
  nodejs: {
    tagName: 'Node.js',
    tagColor: '#7dbb45',
    tagBgColor: 'bg-[#7dbb45]',
    tagIcon: FaNodeJs,
  },
  aws: {
    tagName: 'AWS',
    tagColor: '#FF9900',
    tagBgColor: 'bg-[#FF9900]',
    tagIcon: SiAmazonaws,
  },
  azuredevops: {
    tagName: 'Azure DevOps',
    tagColor: '#007acc',
    tagBgColor: 'bg-[#007acc]',
    tagIcon: SiAzuredevops,
  },
  typescript: {
    tagName: 'TypeScript',
    tagColor: '#007acc',
    tagBgColor: 'bg-[#007acc]',
    tagIcon: SiTypescript,
  },
  graphql: {
    tagName: 'GraphQL',
    tagColor: '#e535ab',
    tagBgColor: 'bg-[#e535ab]',
    tagIcon: SiGraphql,
  },
  apollo: {
    tagName: 'Apollo',
    tagColor: '#311C87',
    tagBgColor: 'bg-[#311C87]',
    tagIcon: SiApollographql,
  },
  dgraph: {
    tagName: 'Dgraph',
    tagColor: '#f62d58',
    tagBgColor: 'bg-[#f62d58]',
    tagIcon: SiDgraph,
  },
  csharp: {
    tagName: 'C#',
    tagColor: '#1d9924',
    tagBgColor: 'bg-[#1d9924]',
    tagIcon: SiCsharp,
  },
  php: {
    tagName: 'PHP',
    tagColor: '#858eb8',
    tagBgColor: 'bg-[#858eb8]',
    tagIcon: FaPhp,
  },
  firebase: {
    tagName: 'Firebase',
    tagColor: '#f7c52a',
    tagBgColor: 'bg-[#f7c52a]',
    tagIcon: SiFirebase,
  },
  mongodb: {
    tagName: 'MongoDB',
    tagColor: '#4c8e43',
    tagBgColor: 'bg-[#4c8e43]',
    tagIcon: SiMongodb,
  },
  sqlserver: {
    tagName: 'SQL Server',
    tagColor: '#b71c1c',
    tagBgColor: 'bg-[#b71c1c]',
    tagIcon: SiMicrosoftsqlserver,
  },
  mysql: {
    tagName: 'MySQL',
    tagColor: '#00758f',
    tagBgColor: 'bg-[#00758f]',
    tagIcon: GrMysql,
  },
  dotnet: {
    tagName: '.NET Core',
    tagColor: '#4e2acd',
    tagBgColor: 'bg-[#4e2acd]',
    tagIcon: SiDotnet,
  },
  java: {
    tagName: 'Java',
    tagColor: '#f89820',
    tagBgColor: 'bg-[#f89820]',
    tagIcon: FaJava,
  },
  mathematica: {
    tagName: 'Wolfram Mathematica',
    tagColor: '#e32004',
    tagBgColor: 'bg-[#e32004]',
    tagIcon: SiWolframmathematica,
  },
  figma: {
    tagName: 'Figma',
    tagColor: '#e4041d',
    tagBgColor: 'bg-[#e4041d]',
    tagIcon: FaFigma,
  },
};

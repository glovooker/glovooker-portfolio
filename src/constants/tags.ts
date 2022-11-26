import {
  FaReact,
  FaAngular,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPhp,
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
  react: {
    tagName: 'React',
    tagColor: '#61dbfb',
    tagBgColor: 'bg-[#61dbfb]',
    tagIcon: FaReact,
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
  typescript: {
    tagName: 'TypeScript',
    tagColor: '#007acc',
    tagBgColor: 'bg-[#007acc]',
    tagIcon: SiTypescript,
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
  figma: {
    tagName: 'Figma',
    tagColor: '#e4041d',
    tagBgColor: 'bg-[#e4041d]',
    tagIcon: FaFigma,
  },
};

import {
  backend,
  frontend,
  software,
  database,
  css,
  git,
  html,
  java,
  php,
  c,
  python,
  ue,
  jetbrains,
  javascript,
  nodejs,
  reactjs,
  threejs,
  memory,
  bank,
  horrorgame,
  } from "../assets/constants";
  
  export const navLinks = [
    {
      id: "about",
      title: "A propos",
    },
    {
      id: "projects",
      title: "Projets",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Développement Web | Frontend",
      icon: frontend,
    },
    {
      title: "Développement Logiciel",
      icon: software,
    },
    {
      title: "Développement Web | Backend",
      icon: backend,
    },
    {
      title: "Management de Base de Données",
      icon: database,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "react JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "jetbrains",
      icon: jetbrains,
    },
    {
      name: "Unreal Engine",
      icon: ue,
    },
  ];

  
  const projects = [
    {
      name: "Jeu Memory",
      description:
        "Application JavaFX qui permet de jouer au jeu Memory. Le jeu est composé de 16 cartes qui sont retournées face cachée. Le but du jeu est de retrouver les paires de cartes identiques en un minimum de coups.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "javafx",
          color: "green-text-gradient",
        },
      ],
      image: memory,
      source_code_link: "https://github.com/Antwannnn/Memory-Game",
    },
    {
      name: "Agence Bancaire",
      description:
        "Application java qui permet de gérer les comptes bancaires des clients d'une agence bancaire mais également les comptes des employés de l'agence.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "javafx",
          color: "green-text-gradient",
        },
        {
          name: "oracle-sql",
          color: "pink-text-gradient",
        },
      ],
      image: bank,
      source_code_link: "https://github.com/IUT-Blagnac/sae2023-bank-1b3",
    },
    {
      name: "Prototype de jeu d'horreur en 3D",
      description:
        "Prototype de jeu d'horreur en 3D développé avec le moteur de jeu Unreal Engine 4. Mécaniques de base et interactions avec l'environnement implémentées.",
      tags: [
        {
          name: "c++",
          color: "blue-text-gradient",
        },
        {
          name: "unreal-engine-4",
          color: "green-text-gradient",
        },
        {
          name: "blueprint",
          color: "pink-text-gradient",
        },
      ],
      image: horrorgame,
      source_code_link: "https://github.com/Antwannnn/TheForgottenWords_SourceCode/tree/main",
    },
  ];
  
  export { services, technologies, projects };
// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "MOCS Fall 2024",
  pages: [
    { name: "Getting Started", path: "/getting-started" },
    { name: "Why models", path: "/W1-why-models" },
    { name: "Modeling", path: "/W2-modeling" },
    {
      name: "Dynamics",
      open: false,
      pager: "M1-Dynamics",
      pages: [
        { name: "Getting started", path: "M1-Dynamics/getting-started" },
        { name: "Discrete models", path: "M1-Dynamics/W3-discrete" },
        { name: "Continous models", path: "M1-Dynamics/W4-continuous" },
        { name: "Chaos", path: "M1-Dynamics/W5-chaos" },
      ]
    },
    {
      name: "Structure, part 1",
      open: false,
      pager: "M2-Structure-part-1",
      pages: [
        { name: "Getting started", path: "M2-Structure-part-1/getting-started" },
        { name: "A game of life", path: "M2-Structure-part-1/W6-intro-ca" },
        { name: "Stochastic CA", path: "M2-Structure-part-1/W7-stochastic-ca" },
      ]
    },
    {
      name: "Structure, part 2",
      open: false,
      pager: "M3-Structure-part-2",
      pages: [
        { name: "Getting started", path: "M3-Structure-part-2/getting-started" },
        { name: "Networks", path: "M3-Structure-part-2/W9-networks" },
        { name: "Models on networks", path: "M3-Structure-part-2/W10-on-networks" },
        { name: "Models of networks", path: "M3-Structure-part-2/W11-of-networks" },
        { name: "Models on and of networks", path: "M3-Structure-part-2/W12-on-and-of-networks" },
      ]
    },
    {
      name: "Dynamics & Structure",
      open: false,
      pager: "M4-Dynamics-and-Structure",
      pages: [
        { name: "Getting started", path: "M4-Dynamics-and-Structure/getting-started" },
        { name: "ABMs in archeology", path: "M4-Dynamics-and-Structure/W13-crabtree-abms" },
        { name: "Evolutionary game theory", path: "M4-Dynamics-and-Structure/W14-evo-game-theory" },
      ]
    },
    {
      name: "Model Theory (redux)",
      open: false,
      pager: "M0-Model-theory-redux",
      pages: [
        { name: "Getting started", path: "M0-Model-theory-redux/getting-started" },
      ]
    },
    { name: "Table of Contents", path: "/toc" },
    { name: "Computational ressources", path: "/comp-ressources" },
    { name: "Syllabus", path: "/syllabus" },
    { name: "References", path: "/refs" },
    { name: "Notebooks", path: "https://github.com/jstonge/2024Fall-MOCS/tree/main/notebooks"},
  ],
  // Content to add to the head of the page, e.g. for a favicon:
  head: '<link rel="icon" href="observable.png" type="image/png" sizes="32x32">',
  header: ({path}) => `<div style="display: justify-content: flex-end; direction: rtl;"><small><a href="https://github.com/jstonge/2024Fall-MOCS/blob/main/docs${path}.md?plain=1">view source</a></small></div>`,
  root: "docs", // path to the source root for preview
  output: "dist", // path to the output root for build
  search: true, // activate search
  style: "style.css"
};

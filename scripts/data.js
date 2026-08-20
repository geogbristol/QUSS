/**
 * Central content file for the site.
 * Edit the values below to customize every page — nav, header/footer,
 * homepage news, research themes, people list and open positions are
 * all rendered from here by shared.js and the per-page scripts.
 */

const SITE = {
  groupName: "Spatial Analysis and GeoAI Research Group",
  groupShort: "SAGE",
  headerLabel: "SAGE Bristol", // short label shown in the header, next to the nav
  tagline: "Understanding social, environmental and economic challenges through spatial analysis and GeoAI.",
  description:
    "The Spatial Analysis and GeoAI (SAGE) research group assesses a wide range of social, " +
    "political, economic, demographic, health, and environmental research questions using " +
    "innovative quantitative and data-driven methods across statistics, spatial analysis, " +
    "machine learning, and artificial intelligence.",
  affiliations: [
    { label: "School of Geographical Sciences", href: "https://www.bristol.ac.uk/geography/" },
    { label: "University of Bristol", href: "https://www.bristol.ac.uk/" },
  ],
  university: "University of Bristol",
  buildingName: "School of Geographical Sciences",
  street: "University Rd",
  city: "Bristol",
  postcode: "BS8 1SS", 
  country: "United Kingdom",
  email: "sage-group@bristol.ac.uk", // TODO: set the group's contact email
  //twitter: "https://twitter.com/sagebristol", // TODO: update or remove
  github: "https://github.com/geogbristol/QUSS",
  // Optional: a proper "google.com/maps/embed?pb=..." URL (from Maps' Share > Embed a map
  // dialog) to override the map auto-generated from the address fields above. A maps.app.goo.gl
  // or maps.google.com/maps?... share link will NOT work here — Google blocks those from
  // loading in an iframe.
  mapEmbedUrl: "",
};

const NAV = [
  { href: "index.html", page: "home", label: "Home" },
  { href: "research.html", page: "research", label: "Research" },
  { href: "people.html", page: "people", label: "People" },
  { href: "history.html", page: "history", label: "Our History" },
  { href: "news.html", page: "news", label: "News" },
  { href: "join.html", page: "join", label: "Join Us" },
];

// Most recent first.
const NEWS = [
  {
    date: "2026-07-15",
    text: "Example: our paper on [topic] has been accepted for publication at [venue].",
  },
  {
    date: "2026-05-02",
    text: "Example: [Name] successfully defended their PhD thesis. Congratulations!",
  },
  {
    date: "2026-03-20",
    text: "Example: the group has been awarded a new grant from [funder] to study [topic].",
  },
  {
    date: "2026-01-10",
    text: "Example: [Name] joined the group as a postdoctoral researcher. Welcome!",
  },
  {
    date: "2025-11-08",
    text: "Example: we presented three posters at the [Conference Name] annual meeting.",
  },
];

const RESEARCH = [
  {
    title: "Social and environmental inequality",
    description:
      "Examining how social, economic and environmental disadvantage are distributed " +
      "across places and populations, and what drives those disparities.",
  },
  {
    title: "Human mobility and transport",
    description:
      "Studying how and why people move — from everyday travel behaviour to migration " +
      "patterns — and the implications for transport systems and planning.",
  },
  {
    title: "Energy and health",
    description:
      "Investigating the links between energy systems, environmental exposures and " +
      "population health outcomes across different geographies.",
  },
  {
    title: "Local and global economy",
    description:
      "Analysing economic activity and change at scales from local labour markets to " +
      "global trade and development.",
  },
  {
    title: "Earth observation",
    description:
      "Using satellite and remote sensing data to monitor and understand environmental " +
      "and urban change over time.",
  },
  {
    title: "GeoAI",
    description:
      "Developing and applying machine learning and artificial intelligence methods to " +
      "spatial data and geographic problems.",
  },
];

// category controls grouping/order on the People page.
// image is the filename inside src/assets/people/ — leave unset to use default-people.jpg.
// url, if set, makes the person's name link out to their profile page.
const PEOPLE = [
  {
    name: "Becky Collins",
    category: "Core Faculty",
    url: "https://www.bristol.ac.uk/people/person/Becky-Collins-3772a09c-ede0-4d11-8ab8-dd4a9ad06821/",
    image: "Becky-Colins.jpg",
  },
  {
    name: "Rich Harris",
    category: "Core Faculty",
    url: "https://www.bristol.ac.uk/people/person/Richard-Harris-871b21a9-0f5f-4bc8-9a99-8ace550d9903/",
    image: "Rich-Harris.jpg",
  },
  {
    name: "David Manley",
    category: "Core Faculty",
    url: "https://www.bristol.ac.uk/people/person/David-Manley-d058b9d0-dc8e-45c8-a683-0c5484a65c15/",
    image: "David-Manley.jpg",
  },
  {
    name: "Caitlin Robinson",
    category: "Core Faculty",
    url: "https://www.bristol.ac.uk/people/person/Caitlin-Robinson-29fc8d3e-8d7e-41ba-80f9-0e325f1cce90/",
    image: "Cait-Robinson.jpeg",
  },
  {
    name: "Richard Timmerman",
    category: "Core Faculty",
    url: "https://www.bristol.ac.uk/people/person/Richard-Timmerman-ac9ad4d6-9396-46c2-81e6-a9a97c7c3fc2/",
    image: "Richard-Timmmerman.jpg",
  },
  {
    name: "Emmanouil Tranos",
    category: "Core Faculty",
    url: "https://www.bristol.ac.uk/people/person/Emmanouil-Tranos-b26cd054-b65e-438c-9a73-43d0ef833f8d/",
    image: "Emmanouil-Tranos.jpg",
  },
  {
    name: "Winnie Wang",
    category: "Core Faculty",
    url: "https://www.bristol.ac.uk/people/person/Winnie-Wang-8abe0488-9fea-49ca-bf41-83024bcff7a5/",
    image: "Winnie-Wang.jpg",
  },
  {
    name: "Levi Wolf",
    category: "Core Faculty",
    url: "https://www.bristol.ac.uk/people/person/Levi-Wolf-6fd84b18-4172-4b27-aac9-55092de68fdc/",
    image: "Levi-Wolf.jpg",
  },
  {
    name: "Rui Zhu",
    category: "Core Faculty",
    url: "https://www.bristol.ac.uk/people/person/Rui-Zhu-8537f231-1192-41d4-b8ff-ddc52cca4dfb/",
    image: "Rui-Zhu.jpg",
  },
  {
    name: "Ce Zhang",
    category: "Core Faculty",
    url: "https://www.bristol.ac.uk/people/person/Ce-Zhang-2bfdcbe3-de66-446f-a8d3-953838417294/",
    image: "Ce-Zhang.jpg",
  },
  {
    name: "Qiujie Shi",
    category: "Core Faculty",
    url: "https://www.bristol.ac.uk/people/person/Qiujie-Shi-943dae66-7f9f-4419-9f27-ca8a61e596a6/",
    image: "Qiujie-Shi.png",
  },
  {
    name: "Joe Day",
    category: "Core Faculty",
    url: "https://www.bristol.ac.uk/people/person/Joseph-Day-f714f702-8f75-440d-8fb9-1dd3d445461a/",
    image: "Joe-Day.jpg",
  },
  {
    name: "Jamie Evans",
    category: "Core Faculty",
    url: "https://www.bristol.ac.uk/people/person/Jamie-Evans-5bafa632-7837-47c5-a21a-5499dc98cf2d/",
    image: "Jamie-Evans.jpg",
  },
  {
    name: "Sean Fox",
    category: "Core Faculty",
    url: "https://www.bristol.ac.uk/people/person/Sean-Fox-ade0ab9d-58b0-4b25-833a-73e8d4633d42/",
    image: "Sean-Fox.jpg",
  },
  {
    name: "Lenka Hasova",
    category: "Postdoc Scholar",
    url: "https://www.bristol.ac.uk/people/person/Lenka-Hasova-0b32770b-c4cb-4d84-945b-b85a9bd4536b/",
    image: "Lenka-Hasova.jpg",
  },
  {
    name: "Alex Davis",
    category: "Postdoc Scholar",
    url: "https://www.bristol.ac.uk/people/person/Alex-Davies-9f27e73d-90f3-4cdb-aae1-7d1ab616f7c9/",
    image: "Alex-Davis.png",
  },
  { name: "Qingya Cheng", category: "PhD Student" },
  { name: "Hao Zhang", category: "PhD Student" },
  { name: "Sitong Guo", category: "PhD Student" },
  { name: "Ruida Guo", category: "PhD Student" },
  { name: "Killian Mayer", category: "PhD Student" },
  { name: "Tom Moncrief", category: "PhD Student" },
  { name: "Shiqi Li", category: "PhD Student" },
  { name: "Mirah Zhang", category: "Alumni" },
];

const PEOPLE_CATEGORY_ORDER = ["Core Faculty", "Postdoc Scholar", "PhD Student", "Alumni"];

// Shown on the Join Us page as three fixed sections.
const OPPORTUNITIES = [
  {
    title: "Postdoc opportunities",
    text:
      "We don't always have funded postdoctoral positions open, but we welcome enquiries from " +
      "researchers interested in applying for fellowships (e.g. " +
      '<a href="https://www.ukri.org/publications/post-doctoral-and-open-fellowships/" target="_blank" rel="noopener">UKRI</a>, ' +
      '<a href="https://marie-sklodowska-curie-actions.ec.europa.eu/actions/postdoctoral-fellowships" target="_blank" rel="noopener">Marie Skłodowska-Curie</a>, ' +
      '<a href="https://leverhulme.ac.uk/" target="_blank" rel="noopener">Leverhulme</a>' +
      ") to work with the group on spatial analysis, GeoAI or related topics. Get in " +
      "touch with a member of the group to discuss a potential project before you apply.",
  },
  {
    title: "PhD opportunities",
    text:
      "We welcome applications from prospective PhD students interested in spatial analysis, " +
      "GeoAI, human mobility, urban science, health geography, and related areas within our " +
      '<a href="https://www.bristol.ac.uk/geography/courses/postgraduate/phd-in-geographic-data-science/" target="_blank" rel="noopener">PhD in Geographic Data Science</a>. ' +
      "Funding is available through University of Bristol scholarships " +
      'and via the <a href="https://www.swdtp.ac.uk/prospective-students-and-fellows/esrc-funded-studentships/aqm/" target="_blank" rel="noopener">ESRC South West Doctoral Training Partnership\'s Advanced Quantitative Methods (AQM) route</a>' +
      ", which supports doctoral research that develops or applies advanced quantitative, statistical, computational or " +
      "AI-based methods in the social sciences. Applicants typically need to identify at least " +
      "two potential supervisors and secure their support, and submit a short research proposal, " +
      "before applying. We recommend to contact potential supervisors from the group if you are interested. " +
      'For more details, check <a href="https://www.bristol.ac.uk/study/postgraduate/research/geographic-data-science/" target="_blank" rel="noopener">the programme page</a>.'
  },
  {
    title: "Master's opportunities",
    text:
      'Our <a href="https://www.bristol.ac.uk/study/postgraduate/taught/msc-geographic-data-science-and-spatial-analytics/" target="_blank" rel="noopener">MSc in Geospatial Data Science</a>' +
      " (known until 2027 as the MSc in Geographic Data " +
      "Science and Spatial Analytics) teaches students to apply data science, machine learning " +
      "and GeoAI methods to spatial data, from cartographic theory through to big geospatial " +
      "data analysis. Students on the programme can undertake dissertation projects supervised " +
      "by members of the group." 
  },
];

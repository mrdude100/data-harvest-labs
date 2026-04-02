// Local testimonial data.
// Add new reviews here, or let Google Reviews (via env vars) populate automatically.
// Each review requires: id, text, name, role, organisation, service.
// Optional: rating (1-5), source ('local' | 'google').

const TESTIMONIALS = [
  {
    id: 1,
    text: 'Data Harvest Labs delivered a complete GWAS pipeline for our wheat population within the agreed timeline. The methodology was rigorous, the figures were publication-ready, and the team remained highly responsive throughout.',
    name: 'Dr. Amir Malik',
    role: 'Senior Plant Breeder',
    organisation: 'Agricultural Research Institute',
    service: 'GWAS & SNP Data Analysis',
    rating: 5,
    source: 'local',
  },
  {
    id: 2,
    text: 'Exceptional statistical consulting. They helped us design a multi-environment trial analysis that satisfied our thesis committee on the first submission. Deep domain knowledge and clear, honest communication.',
    name: 'Mehreen Hassan',
    role: 'PhD Candidate',
    organisation: 'Department of Plant Genetics',
    service: 'Statistical Consulting & MET ANOVA',
    rating: 5,
    source: 'local',
  },
  {
    id: 3,
    text: 'The population structure and genomic diversity analysis performed on our livestock dataset was outstanding — delivered on time with fully reproducible R code and a detailed interpretation guide.',
    name: 'Dr. Suresh Patel',
    role: 'Principal Investigator',
    organisation: 'Livestock Genomics Institute',
    service: 'Genomic Diversity & PCA Analysis',
    rating: 5,
    source: 'local',
  },
  {
    id: 4,
    text: 'We engaged Data Harvest Labs for SNP quality filtering and haplotype phasing on a large GBS dataset. They handled the complexity efficiently and flagged issues we had overlooked ourselves.',
    name: 'Dr. Farida Yusupova',
    role: 'Genomics Researcher',
    organisation: 'Central Asia Crop Research Centre',
    service: 'SNP Data Analysis',
    rating: 5,
    source: 'local',
  },
  {
    id: 5,
    text: 'I enrolled in the GWAS training programme as a first-year PhD student. The hands-on software sessions were exactly what I needed — by the end I could run a full GWAS independently.',
    name: 'Bilal Qureshi',
    role: 'PhD Student',
    organisation: 'University of Veterinary Sciences',
    service: 'GWAS & SNP Analysis Training',
    rating: 5,
    source: 'local',
  },
  {
    id: 6,
    text: 'Professional presentation design for our international conference talk. They understood the science and translated it into clear, visually compelling slides. We received several compliments from the audience.',
    name: 'Dr. Nadia Al-Rashid',
    role: 'Associate Professor',
    organisation: 'College of Agriculture & Life Sciences',
    service: 'Presentation Design',
    rating: 5,
    source: 'local',
  },
  {
    id: 7,
    text: 'Heritability estimation and BLUP analysis for our dairy cattle breeding programme. The team was knowledgeable about both the statistics and the biological context, which made a big difference to the quality of results.',
    name: "James O'Brien",
    role: 'Lead Geneticist',
    organisation: 'National Livestock Improvement Programme',
    service: 'Heritability Estimation & BLUP',
    rating: 5,
    source: 'local',
  },
];

export default TESTIMONIALS;

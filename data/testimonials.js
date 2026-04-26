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
];

export default TESTIMONIALS;

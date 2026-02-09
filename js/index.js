// FOOTER

const body = document.body;

const footer = document.createElement('footer');

footer.style.padding = '2rem 0';
footer.style.fontSize = '.85rem';
footer.style.textAlign = 'center';

body.appendChild(footer);

const today = new Date();

const thisYear = today.getFullYear();

const footerElement = document.querySelector('footer');

const copyright = document.createElement('p');

copyright.innerHTML = `&copy; JEXICA ${thisYear}. all rights reserved`;

footer.appendChild(copyright);

// SKILLS

const skills = [
  'Adobe CC: Photoshop, Illustrator, Indesign, AfterEffects',
  'HTML',
  'CSS',
  'Javascript',
  'React.js',
  'Next.js',
  'Node',
  'PostgreSQL',
  'MongoDB',
  'Express',
  'Python',
  'Java',
  'TailwindCSS',
  'Bootstrap',
  'MaterialUI',
  'Dall-E 3',
  'Stable Diffusion',
];

const skillsSection = document.getElementById('skills');

const skillsList = skillsSection.querySelector('ul');

skills.forEach((skillItem) => {
  const skill = document.createElement('li');
  skill.innerHTML = `.ೃ ${skillItem}`;
  skillsList.appendChild(skill);
});

skillsList.style.listStyleType = 'none';

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

const messageForm = document.forms.leave_message;

messageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = event.target.usersName.value;
  const email = event.target.usersEmail.value;
  const message = event.target.usersMessage.value;

  console.log(name, email, message);

  const messagesSection = document.getElementById('messages');
  const messageList = messagesSection.querySelector('ul');

  const newMessage = document.createElement('li');
  newMessage.innerHTML = `
    <a href="mailto: ${email}">${email}</a>;
    <span>wrote: ${message}</span>;
  `;

  const removeButton = document.createElement('button');
  removeButton.innerText = 'remove';
  removeButton.type = 'button';

  removeButton.addEventListener('click', () => {
    const entry = removeButton.parentNode;
    entry.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();
});

// FETCH GITHUB

fetch('https://api.github.com/users/jexica-dev/repos')
  .then((response) => response.json())
  .then((repositories) => {
    console.log(repositories);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

fetch('https://api.github.com/users/jexica-dev/repos')
  .then((response) => response.json())
  .then((repositories) => {
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');

    for (let i = 0; i < repositories.length; i++) {
      const project = document.createElement('li');
      let links = repositories[i].html_url;
      let aTag = document.createElement('a');
      aTag.href = links;
      aTag.textContent = repositories[i].name;
      // project.innerText = repositories[i].name;
      project.appendChild(aTag);
      projectList.appendChild(project);
    }
  })
  .catch((error) => {
    console.log('Error:', error);
  });

const topics = {
  'HTML / CSS': [
      { name: 'HTML Structure', description: 'Defines the foundation and organization of content on web pages.' },
      { name: 'CSS Styling', description: 'Customizes the appearance of HTML elements for enhanced visual presentation.' },
      { name: 'Responsive Design', description: 'Adapts web layouts to look good on any device screen.' },
      { name: 'Semantic Tags', description: 'HTML elements that convey meaning and improve accessibility and SEO.' },
      { name: 'Box Model', description: 'CSS concept defining element size, including padding, border, and margin.' },
      { name: 'Flexbox', description: 'CSS layout model for aligning and distributing elements in containers.' },
      { name: 'Grid Layout', description: 'CSS system for creating structured, responsive, two-dimensional layouts effortlessly.' },
      { name: 'Inline Styles', description: 'CSS written directly inside an element, useful for quick adjustments.' },
      { name: 'External Stylesheets', description: 'CSS stored in separate files, promoting reusability and easier maintenance.' },
      { name: 'CSS Variables', description: 'Reusable custom properties that simplify theming and consistent design adjustments.' },
      { name: 'Media Queries', description: 'CSS rules to apply styles based on device characteristics, like screen size.' },
      { name: 'CSS Transitions', description: 'Animate changes in property values smoothly for enhanced user experience.' },
      { name: 'CSS Animations', description: 'Create keyframe-based motion effects for dynamic and engaging visual elements.' },
      { name: 'Hover Effects', description: 'Interactive styles triggered when users hover over elements with a cursor.' },
      { name: 'Z-Index', description: 'CSS property controlling the stacking order of overlapping elements.' },
      { name: 'Pseudo-Classes', description: 'CSS selectors targeting elements based on states like hover or focus.' },
      { name: 'Forms Styling', description: 'Customizing form fields and buttons for user-friendly, visually appealing inputs.' },
      { name: 'CSS Specificity', description: 'Hierarchy determining which styles apply when multiple rules target an element.' },
      { name: 'HTML Attributes', description: 'Add extra information or functionality to HTML elements, like IDs or classes.' },
      { name: 'Web Accessibility', description: 'Designing HTML/CSS for inclusivity, ensuring usability for users with disabilities.' },
      { name: 'HTML Tools', description: 'Software and utilities to assist in writing, testing, and optimizing HTML code.' }
  ],
  'SOFT SKILLS': [
    { name: 'Adaptability', description: 'Adjusting to new situations or challenges with flexibility and resilience.' },
    { name: 'Networking', description: 'Building and maintaining relationships for professional growth and collaboration opportunities.' },
    { name: 'Collaboration', description: 'Working effectively with others to achieve shared goals and objectives.' },
    { name: 'Open-Mindedness', description: 'Being receptive to new ideas, perspectives, and constructive feedback.' },
    { name: 'Stress Management', description: 'Handling stress effectively to maintain productivity and emotional well-being.' },
    { name: 'Problem Identification', description: 'Recognizing issues early to address them efficiently and effectively.' },
    { name: 'Work Ethic', description: 'Demonstrating dedication, reliability, and effort to consistently achieve high-quality results.' },
    { name: 'Constructive Feedback', description: 'Providing clear, respectful input to help others improve performance or skills.' },
    { name: 'Negotiation', description: 'Reaching agreements by balancing differing interests and finding mutual benefits.' },
    { name: 'Curiosity', description: 'Seeking to learn and understand continuously, driving innovation and personal growth.' },
    { name: 'Time Management', description: 'Effectively organizing tasks to maximize productivity and meet deadlines consistently.' },
    { name: 'Empathy', description: 'Understanding and sharing others’ feelings, fostering stronger relationships and collaboration.' },
    { name: 'Conflict Resolution', description: 'Addressing disputes constructively, ensuring solutions that benefit all parties involved.' },
    { name: 'Emotional Intelligence', description: 'Recognizing and managing emotions to navigate relationships and handle challenges effectively.' },
    { name: 'Persuasion', description: 'Influencing others’ decisions while respecting their values and fostering mutual agreement.' },
    { name: 'Accountability', description: 'Taking responsibility for actions, fostering trust and dependability in professional environments.' },
    { name: 'Decision-Making', description: 'Evaluating options to choose the most effective solution under given circumstances.' },
    { name: 'Public Speaking', description: 'Delivering information confidently and clearly to engage and influence an audience.' },
    { name: 'Mentorship', description: 'Guiding and supporting others to grow and succeed personally or professionally.' },
    { name: 'Self-Motivation', description: 'Driving oneself to achieve goals without needing external pressure or encouragement.' },
    { name: 'Leadership', description: 'Inspiring and guiding others to work towards shared goals and visions effectively.' }
],
'USING INTERNET': [
    { name: 'Social Media Usage', description: 'Social media connects people, enabling communication, sharing content, and building communities across various platforms.' },
    { name: 'Privacy Protection Online', description: 'Protecting privacy online involves safeguarding personal data and controlling its use through secure digital practices.' },
    { name: 'Streaming and Television', description: 'Streaming platforms offer on-demand video content, shifting traditional TV viewing habits towards digital entertainment.' },
    { name: 'Email Evolution', description: 'Emails evolved from simple text to multimedia communication, now supporting attachments, hyperlinks, and instant messaging.' },
    { name: 'Daily Internet Usage', description: 'Daily Internet usage includes browsing, social media, shopping, and working, becoming integral to everyday life.' },
    { name: 'Online File Storage', description: 'Online file storage allows users to store, access, and share data securely through cloud-based services.' },
    { name: 'Online Shopping', description: 'Online shopping enables consumers to purchase products from home, offering convenience and a wide selection.' },
    { name: 'Information Online', description: 'The internet provides vast amounts of information on diverse topics, making research and learning accessible.' },
    { name: 'Interaction on Social Media', description: 'Social media allows users to interact through posts, comments, likes, shares, and private messages.' },
    { name: 'Necessary Digital Skills',description: 'Essential abilities for navigating the internet, including using browsers, search engines, and managing online accounts.' },
    { name: 'Cybersecurity Awareness', description: 'Understanding threats like phishing and malware, and knowing how to protect against them.' },
    { name: 'Search Engine Usage', description: 'Effectively using search engines to find accurate and relevant information.' },
    { name: 'E-Learning Platforms', description: 'Utilizing online platforms for acquiring knowledge and new skills.' },
    { name: 'Digital Collaboration Tools', description: 'Using software like Zoom, Slack, or Google Workspace for teamwork and communication.' },
    { name: 'Online Entertainment', description: 'Exploring digital content like videos, music, and games for leisure and learning.' },
    { name: 'E-Banking', description: 'Managing finances through secure online platforms and applications.' },
    { name: 'Digital Marketing Basics', description: 'Understanding online advertising and promotion strategies.' },
    { name: 'Blogging', description: 'Creating and sharing written or multimedia content on personal or professional topics.' },
    { name: 'Open Educational Resources', description: 'Accessing free digital materials for educational purposes.' },
    { name: 'Remote Work Tools', description: 'Utilizing software and platforms for working from home or collaborating with remote teams.' },
    { name: 'Online Gaming', description: 'Playing video games with others over the internet for entertainment and social interaction.' }
]
};

let currentTopic = '';
let currentIndex = 0;

function loadConcepts(topic) {
  currentTopic = topic;
  currentIndex = 0;
  showMoreConcepts();
}

function showMoreConcepts() {
  const title = document.getElementById('topic-title');
  const cardsContainer = document.getElementById('concept-cards');
  const conceptsDiv = document.getElementById('concepts');

  title.textContent = currentTopic;
  cardsContainer.innerHTML = ''; // Clear previous cards

  if (currentIndex >= topics[currentTopic].length) {
      currentIndex = 0; // Reset to the first batch
  }

  const concepts = topics[currentTopic].slice(currentIndex, currentIndex + 3);
  currentIndex += 3;

  concepts.forEach(concept => {
      const col = document.createElement('div');
      col.className = 'col-md-4';

      const card = document.createElement('div');
      card.className = 'card h-100';

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      const cardTitle = document.createElement('h5');
      cardTitle.className = 'card-title';
      cardTitle.textContent = concept.name;

      const cardDescription = document.createElement('p');
      cardDescription.className = 'card-description';
      cardDescription.textContent = concept.description;

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardDescription);
      card.appendChild(cardBody);
      col.appendChild(card);
      cardsContainer.appendChild(col);
  });

  conceptsDiv.classList.remove('d-none');
}

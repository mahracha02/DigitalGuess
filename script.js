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
],
"Social media influence": [
  { "name": "Content Virality", "description": "Content rapidly spreads online, reaching massive audiences and driving trends." },
  { "name": "Influencer Marketing", "description": "Brands use influencers to promote products and engage target audiences effectively." },
  { "name": "Algorithmic Reach", "description": "Algorithms determine who sees content, shaping visibility and online influence." },
  { "name": "Authenticity Matters", "description": "Authentic content builds trust and fosters stronger connections with audiences." },
  { "name": "User Engagement", "description": "Likes, comments, and shares reflect audience interest and content impact." },
  { "name": "Brand Visibility", "description": "Social media platforms amplify brands, improving recognition and customer loyalty." },
  { "name": "Social Trends", "description": "Trends emerge online, influencing behavior, culture, and even purchasing decisions." },
  { "name": "Community Building", "description": "Social media fosters niche groups sharing interests, ideas, and support worldwide." },
  { "name": "Memes as Communication", "description": "Memes simplify complex ideas, making them relatable and easily shareable online." },
  { "name": "Negative Feedback", "description": "Critical responses on social platforms can affect reputations and brand images." },
  { "name": "Content Oversaturation", "description": "Excessive posts dilute attention, making standout content harder to achieve." },
  { "name": "Platform Dominance", "description": "Major platforms like Instagram and TikTok dictate global social media dynamics." },
  { "name": "Hashtag Campaigns", "description": "Hashtags unify discussions, boosting awareness and participation in topics or movements." },
  { "name": "Social Responsibility", "description": "Users expect brands to align with societal values and meaningful causes online." },
  { "name": "Influence of Aesthetics", "description": "Visually appealing posts attract attention, increasing shares and audience interaction." },
  { "name": "Content Scheduling", "description": "Timely posts maximize engagement, matching audience habits and platform activity peaks." },
  { "name": "Echo Chambers", "description": "Social platforms reinforce views, limiting exposure to diverse perspectives and ideas." },
  { "name": "Real-Time Updates", "description": "Instant posts connect users to live events, enhancing engagement and immediacy." },
  { "name": "Misinformation Risks", "description": "False information spreads quickly, impacting trust and public perception negatively." },
  { "name": "Social Media Activism", "description": "Platforms amplify causes, allowing voices to advocate for change globally." }
],
"Digital communication": [
  { "name": "Email Etiquette", "description": "Professional tone and clear subject lines ensure effective email communication." },
  { "name": "Instant Messaging", "description": "Quick, informal text-based exchanges, ideal for fast-paced discussions." },
  { "name": "Video Conferencing", "description": "Real-time visual interaction enabling remote meetings and collaboration globally." },
  { "name": "Asynchronous Communication", "description": "Messages sent and read at different times, allowing flexibility." },
  { "name": "Digital Body Language", "description": "Non-verbal cues like punctuation, emojis, and tone convey online communication meaning." },
  { "name": "Collaboration Platforms", "description": "Tools like Slack or Microsoft Teams streamline communication within organizations." },
  { "name": "Professional Profiles", "description": "Platforms like LinkedIn showcase skills and network with industry professionals." },
  { "name": "Cross-Cultural Communication", "description": "Online interactions require understanding cultural nuances to avoid misinterpretations." },
  { "name": "Effective Listening", "description": "Reading and interpreting messages carefully ensures meaningful digital interactions." },
  { "name": "Feedback Loops", "description": "Clear feedback processes improve understanding and foster trust in conversations." },
  { "name": "Public Relations Online", "description": "Crafting brand responses on digital platforms influences public perceptions effectively." },
  { "name": "Digital Storytelling", "description": "Conveying ideas through engaging multimedia content connects with audiences emotionally." },
  { "name": "Privacy in Communication", "description": "Ensuring secure channels to protect sensitive information during online exchanges." },
  { "name": "Virtual Customer Support", "description": "Chatbots and emails resolve customer issues, enhancing satisfaction and loyalty." },
  { "name": "Broadcast Messaging", "description": "Mass communication tools distribute updates to large audiences simultaneously." },
  { "name": "Avoiding Miscommunication", "description": "Clear, concise messages minimize errors and improve understanding digitally." },
  { "name": "Group Dynamics Online", "description": "Collaborating digitally requires managing diverse communication styles effectively." },
  { "name": "Remote Team Management", "description": "Leaders coordinate tasks and foster connection using digital communication tools." },
  { "name": "Tone Interpretation", "description": "Text-based communication risks misreading tone, requiring careful phrasing for clarity." },
  { "name": "Evolving Communication Trends", "description": "Emerging technologies shape how people connect and exchange information worldwide." }
],
'Data privacy concerns': [
  { name: 'Personal Data Misuse', description: 'Unauthorized access or exploitation of personal information without user consent.' },
  { name: 'Data Breaches', description: 'Cyberattacks exposing sensitive information, causing financial and reputational damage.' },
  { name: 'User Consent', description: 'Explicit permission required before collecting or using personal information online.' },
  { name: 'Third-party Tracking', description: 'External companies monitor user behavior across websites without transparency.' },
  { name: 'Encryption Importance', description: 'Secures data by converting it into unreadable codes, ensuring privacy.' },
  { name: 'Data Minimization', description: 'Collecting only essential information to reduce risks of misuse.' },
  { name: 'Cookies Tracking', description: 'Small files monitor browsing habits, raising transparency and privacy concerns.' },
  { name: 'Right to Be Forgotten', description: 'Users can request data removal from online platforms to protect privacy.' },
  { name: 'Social Media Privacy', description: 'Platforms collect vast user data, often shared with advertisers or third parties.' },
  { name: 'Phishing Threats', description: 'Scams trick users into revealing sensitive data, risking identity theft.' },
  { name: 'Location Tracking', description: 'Apps often access location data, raising concerns about safety and consent.' },
  { name: 'Anonymity Challenges', description: 'Difficulty maintaining online privacy due to extensive tracking mechanisms.' },
  { name: 'Data Transparency', description: 'Companies must clearly disclose data collection and usage practices.' },
  { name: 'Data Selling', description: 'Businesses profit by selling user data, often without proper notification.' },
  { name: 'IoT Vulnerabilities', description: 'Connected devices collect and share data, increasing potential privacy risks.' },
  { name: 'Privacy Regulations', description: 'Laws like GDPR aim to protect user data rights globally.' },
  { name: 'Digital Footprints', description: 'User activities leave trails, often used for tracking and profiling.' },
  { name: 'Cloud Storage Risks', description: 'Storing sensitive data online raises concerns about unauthorized access.' },
  { name: 'AI and Privacy', description: 'Artificial intelligence systems process user data, raising ethical and privacy issues.' },
  { name: 'Data Ownership', description: 'Debate over whether users or platforms own the collected information.' }
],
'AI tools': [
  { name: 'Chatbots', description: 'Automated communication tools answering queries and improving customer support efficiency.' },
  { name: 'Virtual Assistants', description: 'AI tools like Siri or Alexa simplifying scheduling and task management.' },
  { name: 'Image Recognition', description: 'AI identifying images or objects for visual content creation and analysis.' },
  { name: 'Speech-to-Text Software', description: 'Converts spoken words into text, streamlining note-taking and transcription processes.' },
  { name: 'Language Translation Tools', description: 'Real-time translation breaking language barriers for global communication and collaboration.' },
  { name: 'Predictive Analytics Platforms', description: 'Forecasts trends by analyzing data, aiding decision-making and strategic planning.' },
  { name: 'Sentiment Analysis Tools', description: 'Identifies emotions in text, enhancing customer feedback evaluation and marketing strategies.' },
  { name: 'Recommendation Systems', description: 'Personalized suggestions improving customer engagement and sales on e-commerce platforms.' },
  { name: 'Creative AI Software', description: 'Generates content like graphics or writing, aiding creative professionals efficiently.' },
  { name: 'Fraud Detection Systems', description: 'Monitors patterns to detect anomalies, ensuring financial and cybersecurity protection.' },
  { name: 'Autonomous Process Automation', description: 'Automates repetitive tasks, increasing productivity and reducing human errors.' },
  { name: 'Natural Language Processing Tools', description: 'Improves communication by understanding and generating human-like text responses.' },
  { name: 'AI-powered CRMs', description: 'Analyzes customer data to optimize sales processes and improve client relationships.' },
  { name: 'Healthcare Diagnostic Tools', description: 'Assists doctors with patient data analysis for accurate and faster diagnoses.' },
  { name: 'AI-powered Marketing Tools', description: 'Optimizes campaigns by analyzing audience data and targeting effectively.' },
  { name: 'Predictive Maintenance Software', description: 'Anticipates equipment failures, reducing downtime and improving operational efficiency.' },
  { name: 'AI-driven Recruitment Platforms', description: 'Screens resumes and matches candidates with roles, saving HR departments time.' },
  { name: 'AI-powered Financial Advisors', description: 'Provides personalized investment recommendations based on financial data and trends.' },
  { name: 'Virtual Reality Trainers', description: 'Uses AI to simulate real-world scenarios for employee training programs.' },
  { name: 'AI Document Analysis', description: 'Scans and extracts data from documents, accelerating legal or administrative processes.' }
],
'Cybersecurity basics': [
  { name: 'Strong Passwords', description: 'Complex, unique passwords protect accounts from unauthorized access and breaches.' },
  { name: 'Multi-factor Authentication (MFA)', description: 'Adds an extra layer of security by requiring multiple login methods.' },
  { name: 'Regular Software Updates', description: 'Updating software fixes vulnerabilities and prevents potential security threats.' },
  { name: 'Encryption', description: 'Data encryption secures information by making it unreadable to unauthorized users.' },
  { name: 'Firewalls', description: 'Block unauthorized access to networks, protecting devices from potential threats.' },
  { name: 'Phishing Prevention', description: 'Avoiding fraudulent emails or messages that steal personal or financial information.' },
  { name: 'Secure Wi-Fi Networks', description: 'Password-protected Wi-Fi networks prevent unauthorized access and data theft.' },
  { name: 'Antivirus Software', description: 'Detects and removes malicious software to protect devices from harm.' },
  { name: 'Backup Data', description: 'Regular data backups ensure recovery after cyberattacks or accidental deletion.' },
  { name: 'Strong Security Policies', description: 'Clear, enforced policies guide employees on best security practices and protocols.' },
  { name: 'User Access Control', description: 'Limiting user access to only necessary data reduces internal threats.' },
  { name: 'Cybersecurity Training', description: 'Employee education helps identify risks and follow best protection practices.' },
  { name: 'Secure Browsing Habits', description: 'Avoiding suspicious sites and links reduces exposure to online threats.' },
  { name: 'Data Masking', description: 'Obfuscating sensitive data so it remains safe even during exposure.' },
  { name: 'Password Managers', description: 'Store and generate strong, unique passwords for safer, easier management.' },
  { name: 'Threat Intelligence', description: 'Using real-time data and tools to identify and prevent cyberattacks.' },
  { name: 'Social Engineering Awareness', description: 'Recognizing manipulation tactics helps prevent attacks like phishing and impersonation.' },
  { name: 'Mobile Device Security', description: 'Protects smartphones and tablets from threats using security software and settings.' },
  { name: 'Incident Response Plan', description: 'Prepares a company for quick action to mitigate cyberattack impacts.' },
  { name: 'Remote Work Security', description: 'Secures networks and devices when working remotely to prevent breaches.' }
],
'Digital': [
  { name: 'Digital Communication', description: 'Sharing information instantly through emails, chats, or video calls globally.' },
  { name: 'Online Collaboration', description: 'Using tools like shared documents and platforms to work together remotely.' },
  { name: 'Social Media Influence', description: 'Impact of online platforms on opinions, trends, and digital marketing.' },
  { name: 'Cloud Computing', description: 'Storing, accessing, and managing data online without physical storage devices.' },
  { name: 'Digital Identity', description: 'Your personal information and presence in the online world.' },
  { name: 'E-commerce Evolution', description: 'Transformation of shopping through online platforms, mobile apps, and delivery systems.' },
  { name: 'Cybersecurity Basics', description: 'Essential practices to protect data from online threats and breaches.' },
  { name: 'Data Privacy Concerns', description: 'Issues surrounding how personal information is collected, used, and shared.' },
  { name: 'Digital Content Creation', description: 'Producing blogs, videos, and images to engage audiences on digital platforms.' },
  { name: 'Online Education Tools', description: 'Learning resources like apps and platforms transforming traditional education methods.' },
  { name: 'Search Engine Optimization', description: 'Improving website visibility and traffic through better online search rankings.' },
  { name: 'Digital Detox', description: 'Taking breaks from screens to prioritize mental health and well-being.' },
  { name: 'Virtual Reality Experiences', description: 'Immersive digital environments enabling realistic interactions for gaming and learning.' },
  { name: 'AI-powered Assistants', description: 'Smart tools like chatbots helping with tasks and queries online.' },
  { name: 'Internet of Things (IoT)', description: 'Interconnected devices sharing data to simplify daily tasks and systems.' },
  { name: 'Digital Nomad Lifestyle', description: 'Working remotely from anywhere, relying on technology and connectivity.' },
  { name: 'Streaming Services Rise', description: 'Shift from traditional TV to on-demand video platforms like Netflix and YouTube.' },
  { name: 'App Development Trends', description: 'Innovations in creating apps for better usability and user engagement.' },
  { name: 'Digital Payment Systems', description: 'Secure and fast transactions through apps like PayPal, Google Pay, or Apple Pay.' },
  { name: 'Influencer Marketing', description: 'Brands collaborating with online personalities to promote products and reach audiences.' }
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

window.addEventListener('load', function() {
  const audio = document.querySelector('audio');
  if (audio) {
      audio.play().catch(error => {
          console.log('Audio play failed:', error);
      });
  }
});



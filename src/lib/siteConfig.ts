export const siteConfig = {
  name: 'Behavior Pathways',
  description:
    'Independent ABA therapy services in Naples, Fort Myers, Bonita Springs, Estero, Marco Island, and throughout Collier & Lee Counties, Florida. Specialized in autism communication skills and parent training.',
  url: 'https://behaviorpathways.com',
  ogImage: '/og.jpg',
  links: {
    email: 'hello@behaviorpathways.com',
    phone: '(239) 555-0123',
  },
  location: {
    city: 'Naples',
    state: 'Florida',
    county: 'Collier & Lee Counties',
    zipCode: '34102',
    serviceAreas: [
      'Naples',
      'Fort Myers',
      'Bonita Springs',
      'Estero',
      'Marco Island',
      'Cape Coral',
      'Lehigh Acres',
      'Golden Gate',
      'Immokalee',
      'Ave Maria',
      'North Naples',
      'East Naples',
      'Sanibel',
      'Captiva',
      'Fort Myers Beach',
    ],
    coordinates: {
      lat: 26.142,
      lng: -81.7948,
    },
  },
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Our Approach', href: '/approach' },
    { name: 'Service Areas', href: '/service-areas' },
    { name: 'Parent Training', href: '/parent-training' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Resources', href: '/resources' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
  social: {
    facebook: 'https://facebook.com/behaviorpathways',
    instagram: 'https://instagram.com/behaviorpathways',
    linkedin: 'https://linkedin.com/company/behaviorpathways',
  },
  announcement: {
    enabled: false,
    message: 'New parent training program starting in January!',
    link: '/parent-training',
  },
  testimonials: [
    {
      id: 'gj',
      quote:
        'When my daughter first started working with Valentina she barely interacted with anyone, she only wanted to use the tablet all day, and she did not ask for anything at all. After several months, she was able to use short sentences to ask for things she wanted, she played with different toys, and she interacted more with me and her mom. She even asked me to read her a book and sing her songs.',
      author: 'G.J.',
    },
    {
      id: 'ml',
      quote:
        "My daughter spent years going to a clinic and they let her go without her making much progress. Valentina was able to teach my daughter how to communicate quickly. She was very helpful with teaching my husband and I how to communicate better with her and how to handle her behaviors. She also taught my daughter's school the same strategies. My daughter was able to use her voice more than ever and she used her PECS book all by herself.",
      author: 'M.L.',
    },
    {
      id: 'km',
      quote:
        'My son had a lot of tantrums when he first started ABA therapy. Valentina was amazing with him. She was so patient and made sure to teach him in a fun way. They had an amazing bond and he even started to use his words with her.',
      author: 'K.M.',
    },
  ],
  services: [
    {
      title: 'Communication Skill Building',
      description:
        'We teach requesting, turn taking, expressive and receptive language, and conversational foundations. We support AAC and PECS so your child can be successful with the system that fits best.',
      icon: 'MessageCircle',
    },
    {
      title: 'In Home and Community Based Sessions',
      description:
        'We schedule around family routines, coach caregivers in the moment, and practice skills during meals, play, errands, and outings.',
      icon: 'Home',
    },
    {
      title: 'School Collaboration',
      description:
        'We coordinate with your team and contribute to classroom strategies and IEP goals. We train teachers on prompts, supports, and data that are simple and practical.',
      icon: 'GraduationCap',
    },
    {
      title: 'Behavior Support',
      description:
        'We use functional assessment to understand what behavior communicates. Then we teach gentle prevention strategies and new skills that work in daily life.',
      icon: 'Heart',
    },
  ],
  approach: [
    {
      step: 1,
      title: 'Start with listening',
      description:
        'Your first visit is a conversation. We listen to your story and your hopes.',
    },
    {
      step: 2,
      title: 'Clear plan',
      description:
        'You receive a short plan in plain language with three to five goals you can see and measure.',
    },
    {
      step: 3,
      title: 'Coaching first',
      description:
        'We model strategies, then practice with you, then support you as you lead.',
    },
    {
      step: 4,
      title: 'Real life practice',
      description:
        'Sessions happen where communication happens. Home, school, community.',
    },
    {
      step: 5,
      title: 'Review and celebrate',
      description:
        'We check progress together, adjust, and celebrate every step forward.',
    },
  ],
  faqs: [
    {
      question: 'What makes Behavior Pathways different?',
      answer:
        'We focus on communication first and work where it matters most - in your home, school, and community. Unlike clinic-based services, we prioritize parent coaching and real-life practice.',
    },
    {
      question: 'Do you work with schools?',
      answer:
        'Yes! We collaborate closely with teachers and school teams to ensure consistent support. We can help with IEP goals, classroom strategies, and teacher training.',
    },
    {
      question: 'What age groups do you serve?',
      answer:
        "We work with children and adolescents of all ages, from early intervention through high school. Our approach adapts to each child's developmental stage and needs.",
    },
    {
      question: 'How often do sessions occur?',
      answer:
        "Session frequency depends on your child's needs and your family's schedule. We typically start with 2-3 sessions per week and adjust based on progress and family preferences.",
    },
    {
      question: 'Do you accept insurance?',
      answer:
        'We work with most major insurance providers and can help you understand your coverage. Contact us to discuss your specific insurance situation.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We provide in-home and community-based services throughout the surrounding area. Contact us to confirm we serve your specific location.',
    },
  ],
  resources: [
    {
      title: 'How to create more communication moments in daily routines',
      description:
        'A practical guide with simple strategies you can use today.',
      type: 'PDF Guide',
      href: '/resources/communication-moments-guide.pdf',
    },
    {
      title: 'Communication snapshot',
      description:
        "One page tool to track your child's communication progress.",
      type: 'Template',
      href: '/resources/communication-snapshot.pdf',
    },
    {
      title:
        "The Moment Everything Changed: A Parent's Guide to Communication Breakthroughs",
      description:
        "Discover the powerful strategies that lead to those magical moments when your child's communication suddenly clicks.",
      type: 'Blog Post',
      href: '/blog/the-moment-everything-changed-a-parents-guide-to-communication-breakthroughs',
    },
    {
      title: 'From Meltdowns to Mastery: The Sensory Regulation Revolution',
      description:
        "Learn how understanding sensory processing can transform your child's daily life with practical strategies.",
      type: 'Blog Post',
      href: '/blog/from-meltdowns-to-mastery-the-sensory-regulation-revolution',
    },
    {
      title:
        'The School Collaboration Secret: How ABA Therapy Transforms Education',
      description:
        'Discover how effective collaboration between ABA therapists and schools creates powerful learning environments.',
      type: 'Blog Post',
      href: '/blog/the-school-collaboration-secret-how-aba-therapy-transforms-education',
    },
    {
      title:
        'The Naples Autism Community: Your Guide to Local Resources and Support',
      description:
        'Discover the vibrant autism community in Naples, Bonita Springs, and Collier County.',
      type: 'Blog Post',
      href: '/blog/the-naples-autism-community-your-guide-to-local-resources-and-support',
    },
    {
      title:
        'Beyond Words: The AAC Revolution Transforming Autism Communication',
      description:
        'Discover how Augmentative and Alternative Communication (AAC) is revolutionizing how children with autism express themselves.',
      type: 'Blog Post',
      href: '/blog/beyond-words-the-aac-revolution-transforming-autism-communication',
    },
    {
      title: 'The Future is Now: ABA Therapy Trends for 2025',
      description:
        'Discover the cutting-edge trends shaping ABA therapy in 2025. From AI-powered interventions to personalized learning paths.',
      type: 'Blog Post',
      href: '/blog/the-future-is-now-aba-therapy-trends-for-2025',
    },
  ],
}

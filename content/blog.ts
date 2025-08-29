import InviteCommunication from './posts/invite-communication'
import CollaborateSchool from './posts/collaborate-school'
import FirstMonth from './posts/first-month'

export const posts = [
  {
    slug: '5-simple-ways-to-invite-communication-during-play',
    title: '5 simple ways to invite communication during play',
    date: '2024-01-01',
    excerpt: 'Practical tips to spark interaction in everyday play.',
    component: InviteCommunication,
  },
  {
    slug: 'how-to-collaborate-with-your-childs-school-team',
    title: 'How to collaborate with your child’s school team',
    date: '2024-02-01',
    excerpt: 'Strategies for building positive partnerships with educators.',
    component: CollaborateSchool,
  },
  {
    slug: 'what-to-expect-in-your-first-month-of-aba',
    title: 'What to expect in your first month of ABA',
    date: '2024-03-01',
    excerpt: 'A quick overview of the early weeks of therapy.',
    component: FirstMonth,
  },
]

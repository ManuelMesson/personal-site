export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Starting here',
    date: '2026-08-03',
    excerpt: "What I'm going to write about here, and why it isn't predictions.",
    content: [
      'I’ve had this site for a while and it said something that stopped being true.',
      'Until this year I built software for hospitality businesses. Now I build AI agents, and I run a company staffed by them — PopoSoft, founded in March, one human. Two things are out in the world so far: Landed, a career tool people can actually use, and Shelves, the open-source memory engine underneath everything.',
      'I still work as a barista at Amazon’s Day 1 HQ, five days a week. That isn’t a detour from the work; it’s where a lot of it comes from. Serving a hundred and fifty engineers and PMs a day teaches you something about reading what someone needs before they finish asking. Most of the design decisions I’m proudest of came off the bar, not off a whiteboard.',
      'So this is what I’m going to write about here: agents, and what it’s actually like to build with them.',
      'Not predictions. Not thought leadership. I’m not interested in telling anyone where this is going — I don’t know. What I can do is write down what happens when you try to run real work through these systems: what drifts, what breaks quietly, what you have to write down so it stops breaking, and the parts that turn out to be harder than the demos suggest.',
      'Some of it will be technical. Some of it will just be operations — the boring, load-bearing kind. A lot of it will be about memory, because that’s the problem I keep landing on from every direction.',
      'I’ll be honest about the misses. The most useful thing I’ve learned in five months is that the failures are more instructive than the wins, and almost nobody publishes them.',
      'That’s the whole plan. More soon.',
    ].join('\n\n'),
    tags: ['AI Agents', 'Building', 'Notes'],
  },
];

export default blogPosts;

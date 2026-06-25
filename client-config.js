/* ================================================================
   EXTRA SAUCE AGENCY — CLIENT CONFIG
   Edit this file for each new proposal. Nothing else needs to change.
   ================================================================ */

const CLIENT = {

  // ── Hero section ──────────────────────────────────────────────
  prospectName:   '[Prospect Name]',
  date:           'June 2026',
  engagementType: 'Executive Content & Demand Generation',
  tagline:        'The Sauce Recipe™ — Content to Pipeline',

  // ── Overview: headline ────────────────────────────────────────
  overviewTitle:   "This isn't JUST a newsletter.",
  overviewTitleEm: "It's a new business unit.",

  // ── Overview: body paragraphs ─────────────────────────────────
  overviewBody1: `[Paragraph 1 — describe what the prospect already has going for them. Acknowledge their strengths, their audience, their position. Make them feel seen.]`,

  overviewBody2: `[Paragraph 2 — describe what this proposal is about. What are we building for them, why does it matter, and what's the outcome? Keep it specific to their business.]`,

  // ── Overview: three callout cards ────────────────────────────
  callout1Lbl: 'The Asset',
  callout1Val: '[What owned asset are we building for them — audience, list, channel?]',

  callout2Lbl: 'The Engine',
  callout2Val: '[How does the content/distribution system work for their specific situation?]',

  callout3Lbl: 'The Outcome',
  callout3Val: '[What does success look like — pipeline, revenue, meetings, impressions?]',

  // ── Investment section ────────────────────────────────────────
  investTitle:   'Three ways to install',
  investTitleEm: 'The Sauce Recipe™.',
  investBody:    'Pick the track that fits where you are. Most clients start with Track 1 and expand as results compound.',

  tiers: [
    {
      tag:      'Track 1',
      name:     'LinkedIn Revenue System',
      price:    '$5,500',
      cadence:  'per month',
      featured: true,
      desc:     "Turn your executive's LinkedIn into your best-performing demand channel without taking more than 4 hours a month from their schedule.",
      includes: [
        'Creative & Narrative Development',
        'Content Management',
        'Social Selling',
        'Performance Reporting',
      ],
    },
    {
      tag:      'Track 2 — Full Stack',
      name:     'Podcast Revenue System',
      price:    '$9,500',
      cadence:  'per month',
      featured: false,
      desc:     'Build a binge-worthy content show & newsletter that becomes your company\'s primary demand engine — content your buyers actively look forward to every week.',
      includes: [
        'GTM Guidance',
        'Brand Show Management',
        'High-Value Guest Sourcing',
        'Senior Video Editing / Flywheel Execution',
      ],
    },
    {
      tag:      'Track 3',
      name:     'Content-To-Pipeline Sprint',
      price:    '$6,000',
      cadence:  'one-time',
      featured: false,
      desc:     'Work 1:1 with us to build your own content revenue system in 6–8 weeks with the exact strategy, systems, and playbooks we use in The Sauce Recipe™.',
      includes: [
        'Weekly 1:1 Implementation Calls',
        'SOPs & Playbooks',
        '60 Days of Ongoing Slack Support',
      ],
    },
  ],

  // ── Timeline section ──────────────────────────────────────────
  timelineTitle:   'What the first',
  timelineTitleEm: 'twelve months look like.',
  timeline: [
    {
      period: 'Month 1',
      phase:  'Foundation',
      items: [
        'ICP deep-dive and buyer psychology mapping — who your best customer actually is',
        'Competitive landscape analysis to find white space',
        'Core narrative, positioning document, and messaging hierarchy',
        'Executive bio and personal brand narrative built',
        'Tech stack setup: scheduling tools, CRM integration, analytics',
      ],
    },
    {
      period: 'Months 2–4',
      phase:  'Content Engine',
      items: [
        'Executive content live on LinkedIn — posts, short-form video, repurposed assets',
        'Weekly editorial cadence established and running on near-autopilot',
        'First performance data in: what resonates, what gets refined',
        'Audience building underway — follows, impressions, inbound DMs tracked',
      ],
    },
    {
      period: 'Months 4–8',
      phase:  'Outbound Activation',
      items: [
        'Warm outbound sequences launched against target accounts',
        'Buyers who engaged with content become outreach targets — reply rates 10–30%',
        'Meeting booking and pipeline tracking live',
        'First qualified meetings attributable to the system',
      ],
    },
    {
      period: 'Months 6–12',
      phase:  'Paid Amplification',
      items: [
        'Best-performing organic content identified and repurposed as paid creative',
        'LinkedIn retargeting campaigns live — warm audiences only, low CPM',
        'Full-stack system running: content → warm outbound → paid retargeting',
        'Revenue attribution reporting tied back to content and outbound performance',
      ],
    },
  ],

};

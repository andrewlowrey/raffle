/* Customer Journey Prototypes — Prize Competition Venture
   Illustrative only. No real data, no payment processing.
   Journey definitions: screen markup + compliance/design notes per step. */

const N = {
  design: (t, b) => ({ type: '', tag: t, body: b }),
  risk:   (t, b) => ({ type: 'risk', tag: t, body: b }),
  legal:  (t, b) => ({ type: 'legal', tag: t, body: b })
};

const JOURNEYS = {

  /* ───────────────────────── A · PAID ENTRY ───────────────────────── */
  paid: {
    label: 'Paid entry',
    steps: [
      {
        crumb: 'Home',
        bar: 'Home',
        title: 'Discovery',
        lede: 'Hero-led homepage. One aspirational prize dominates, with category rails beneath for repeat browsers.',
        notes: [
          N.design('Positioning', 'Hero competition carries the automotive wedge from §14 — premium presentation, not a wall of 80 cards. Cash and low-price rails sit beneath to serve the frequent-player segment (§3.5).'),
          N.design('Live activity', 'Win feed generated from verified winner events with privacy rules applied, not hard-coded copy. Stage 2 identified this as That Prize Guy\'s strongest retention mechanic.'),
          N.legal('DMCCA 2024 (§9.2)', 'Every urgency and scarcity signal on this screen — "ending tonight", percentage sold, remaining counts — must be generated from real data and be substantiable. Fabricated urgency risks CMA penalties up to 10% of global turnover.')
        ],
        html: `
          <div class="p-feed">
            <div class="p-feed__row"><i class="p-feed__dot"></i><span>Sarah, Manchester won £1,000 cash</span><span>2m</span></div>
            <div class="p-feed__row"><i class="p-feed__dot"></i><span>James, Leeds won £250 credit</span><span>7m</span></div>
            <div class="p-feed__row"><i class="p-feed__dot"></i><span>Priya, Cardiff won a MacBook Air</span><span>19m</span></div>
          </div>
          <div class="p-hero">
            <div class="p-hero__img">
              <div>
                <span class="p-badge">Hero draw</span><span class="p-badge p-badge--guar">Draw guaranteed</span>
                <small>Illustrative prize imagery</small>
              </div>
            </div>
          </div>
          <div class="p-title">Win a Porsche 718 Cayman<br>or £48,000 cash</div>
          <div class="p-sub">£0.79 per entry &middot; Draw Sunday 20:00</div>
          <div class="p-progress"><i style="width:62%"></i></div>
          <div class="p-progress-label"><span>62% sold</span><span>23,180 of 37,500</span></div>
          <button class="p-btn" data-next>Enter now</button>
          <div class="p-h">Ending today</div>
          <div class="p-rail">
            <div class="p-tile"><div class="p-tile__img p-tile__img--b"></div><div class="p-tile__b"><div class="p-tile__t">£5,000 cash</div><div class="p-tile__p">29p</div></div></div>
            <div class="p-tile"><div class="p-tile__img p-tile__img--c"></div><div class="p-tile__b"><div class="p-tile__t">MacBook Air</div><div class="p-tile__p">49p</div></div></div>
            <div class="p-tile"><div class="p-tile__img"></div><div class="p-tile__b"><div class="p-tile__t">£1,000 cash</div><div class="p-tile__p">15p</div></div></div>
          </div>
          <div class="p-h">Under £1 &middot; Free to play</div>
          <div class="p-rail">
            <div class="p-tile"><div class="p-tile__img p-tile__img--b"></div><div class="p-tile__b"><div class="p-tile__t">£250 free draw</div><div class="p-tile__p">Free</div></div></div>
            <div class="p-tile"><div class="p-tile__img p-tile__img--c"></div><div class="p-tile__b"><div class="p-tile__t">Tech bundle</div><div class="p-tile__p">35p</div></div></div>
          </div>`
      },
      {
        crumb: 'Competition',
        bar: 'Competition detail',
        title: 'Competition detail',
        lede: 'The compliance-critical screen. Odds, draw method, guaranteed-draw status and the free entry route all appear before any payment decision.',
        notes: [
          N.legal('Sch. 2 para. 8(1)(c)', 'The free entry route must be publicised so as to be likely to come to the attention of everyone proposing to participate. Here it sits above the paid CTA, not in the footer or T&Cs.'),
          N.legal('DCMS Code 2.2 / 2.3', 'Draw mechanism published, and pre-entry information on likelihood of winning provided via maximum ticket count. Prizes stated as allocated by chance.'),
          N.legal('DCMS Code 2.5', 'Guaranteed draw is an obligation once a Code signatory — the prize cannot be reduced, the date moved, or the draw cancelled for low sales. Badging it is honest, not just marketing.'),
          N.risk('Capital exposure (§6)', 'The guaranteed-draw commitment is exactly what makes the §6.5 downside scenarios real committed exposure. This screen is where that promise is made to the customer.')
        ],
        html: `
          <div class="p-hero"><div class="p-hero__img"><div><span class="p-badge p-badge--guar">Draw guaranteed</span><span class="p-badge p-badge--ghost">Cash alternative</span></div></div></div>
          <div class="p-title">Porsche 718 Cayman</div>
          <div class="p-sub">2.0T &middot; 24,600 miles &middot; full service history &middot; or £48,000 cash</div>
          <div class="p-meta">
            <div><dt>Entry price</dt><dd>£0.79</dd></div>
            <div><dt>Max entries</dt><dd>37,500</dd></div>
            <div><dt>Max per person</dt><dd>500</dd></div>
            <div><dt>Draw</dt><dd>Sun 20:00</dd></div>
          </div>
          <div class="p-progress"><i style="width:62%"></i></div>
          <div class="p-progress-label"><span>62% sold</span><span>14,320 remaining</span></div>
          <div class="p-card p-card--ok">
            <div class="p-card__t">Draw method — certified RNG</div>
            <div class="p-card__d">Winner selected by a verifiably random, auditable process. Draw ID, entry manifest and result published after every draw. Prizes are allocated in accordance with the laws of chance.</div>
          </div>
          <div class="p-card p-card--accent">
            <div class="p-card__t">Free entry route available</div>
            <div class="p-card__d">You can enter this competition free by post, with exactly the same chance of winning as a paid entry. No purchase necessary.</div>
          </div>
          <button class="p-btn" data-next>Choose entries</button>
          <div class="p-link" data-goto-journey="free">Enter free instead &rarr;</div>`
      },
      {
        crumb: 'Entries',
        bar: 'Select entries',
        title: 'Entry selection',
        lede: 'Quantity-based selection rather than picking individual ticket numbers — the lower-friction pattern from 7 Days Performance.',
        notes: [
          N.design('Friction', 'Customers choose spend or quantity, not individual numbers. Stage 2 found this materially reduces checkout abandonment versus number-picking interfaces.'),
          N.legal('DCMS Code 1.4', 'Running spend total shown against the customer\'s own monthly limit. Limits must be settable — including to £0 — and cannot be exceeded.'),
          N.risk('Pricing (§6.8)', 'At 79p against a £48,000 prize and 37,500 max entries, this competition needs roughly 76% sell-through to break even once 20% VAT applies. The displayed price is the lever that has to move if the VAT position holds.')
        ],
        html: `
          <div class="p-title" style="font-size:.95rem">Porsche 718 Cayman</div>
          <div class="p-sub">£0.79 per entry &middot; max 500 per person</div>
          <div class="p-h">Popular amounts</div>
          <div class="qty">
            <button data-qty="10"><b>10</b><small>£7.90</small></button>
            <button data-qty="25" class="is-sel"><b>25</b><small>£19.75</small></button>
            <button data-qty="50"><b>50</b><small>£39.50</small></button>
            <button data-qty="100"><b>100</b><small>£79.00</small></button>
            <button data-qty="200"><b>200</b><small>£158.00</small></button>
            <button data-qty="500"><b>500</b><small>£395.00</small></button>
          </div>
          <div class="p-card">
            <div class="p-card__t">Your odds with 25 entries</div>
            <div class="p-card__d">25 in 37,500 if the competition sells out — roughly 1 in 1,500. Final odds depend on total entries sold.</div>
          </div>
          <div class="p-card p-card--ok">
            <div class="p-card__t">Monthly spend limit</div>
            <div class="p-card__d">£19.75 of your £50 self-set monthly limit. £30.25 remaining. Change this anytime in your account.</div>
          </div>
          <button class="p-btn" data-next>Add to basket &middot; £19.75</button>`
      },
      {
        crumb: 'Checkout',
        bar: 'Checkout',
        title: 'Checkout',
        lede: 'Short checkout with age verification and the DCMS credit card restrictions enforced at the payment method level.',
        notes: [
          N.legal('DCMS Code 1.3', 'Credit cards capped at £250 per player per month, and prohibited entirely for instant-win competitions. Enforcement has to happen here, at card-type detection — not as a policy statement in T&Cs.'),
          N.legal('DCMS Code 1.1', '18+ only with a reasonable age verification process. This is a gate, not a tickbox, and it applies before entry is completed.'),
          N.design('Payment abstraction (§7)', 'Built against a PaymentProvider interface rather than a named provider. Mainstream PSPs restrict this business category, so the acquirer may need to change — the architecture must not assume otherwise.'),
          N.risk('Acquirer dependency (§7)', 'This screen cannot function without a high-risk acquirer that accepts prize competitions. That approval is the highest-lead-time external dependency in the programme and should be started in Phase 1.')
        ],
        html: `
          <div class="p-row"><span>25 entries &middot; Porsche 718</span><span>£19.75</span></div>
          <div class="p-row"><span>Booking or admin fees</span><span>£0.00</span></div>
          <div class="p-row p-row--total"><span>Total</span><span>£19.75</span></div>
          <div class="p-h">Payment method</div>
          <div class="p-pay">
            <button class="is-sel">Apple&nbsp;Pay</button>
            <button>Debit&nbsp;card</button>
            <button disabled title="Credit cards restricted">Credit&nbsp;card</button>
          </div>
          <div class="p-card p-card--warn">
            <div class="p-card__t">Credit card limits apply</div>
            <div class="p-card__d">Credit card spend is capped at £250 per month, and credit cards cannot be used for instant win competitions at all.</div>
          </div>
          <div class="p-h">Confirmations</div>
          <label class="p-check"><input type="checkbox" checked><span>I confirm I am 18 or over and a UK resident. Your age will be verified.</span></label>
          <label class="p-check"><input type="checkbox" checked><span>I have read the competition terms, including the free entry route and the draw process.</span></label>
          <button class="p-btn" data-next>Pay £19.75</button>
          <div class="p-link">Set a spending limit before you pay</div>`
      },
      {
        crumb: 'Confirmed',
        bar: 'Entries confirmed',
        title: 'Post-purchase',
        lede: 'The journey does not end at payment. Anticipation for the draw is part of the product.',
        notes: [
          N.design('Retention', 'Stage 2 concluded that most e-commerce ends at "payment successful" and that prize competitions should not. Draw date, calendar add and next-competition discovery all belong here.'),
          N.legal('Sch. 2 para. 7', 'No payment may be required to take possession of a prize. Free delivery and no claim fees are legal requirements, not service promises — worth stating to the customer explicitly.'),
          N.design('Trust', 'Entry numbers issued immediately and visible in the account. Public entry lists were one of the strongest transparency signals in the competitor teardown.')
        ],
        html: `
          <div class="p-success">
            <div class="p-success__ring">&#10003;</div>
            <div class="p-title">You are in the draw</div>
            <div class="p-sub">25 entries confirmed &middot; order #PC-48213</div>
          </div>
          <div class="p-card p-card--accent">
            <div class="p-card__t">Draw &mdash; Sunday 20:00</div>
            <div class="p-card__d">Certified RNG draw, going ahead whether or not the competition sells out. Result and verification published immediately afterwards.</div>
          </div>
          <div class="p-card">
            <div class="p-card__t">Your entry numbers</div>
            <div class="p-card__d">14321&ndash;14345. Searchable in the public entry list for this competition.</div>
          </div>
          <div class="p-card p-card--ok">
            <div class="p-card__t">If you win</div>
            <div class="p-card__d">We contact you personally. Prizes are delivered free and there is nothing to pay to claim. Cash alternative available on request.</div>
          </div>
          <button class="p-btn p-btn--ghost p-btn--sm">Add draw to calendar</button>
          <button class="p-btn p-btn--dark p-btn--sm" data-restart>Back to start</button>`
      }
    ]
  },

  /* ────────────────────── B · FREE ENTRY ROUTE ────────────────────── */
  free: {
    label: 'Free entry route',
    steps: [
      {
        crumb: 'Free route',
        bar: 'Free entry',
        title: 'Free entry route',
        lede: 'The legal foundation of the entire business. This journey exists to demonstrate convenience parity with the paid route.',
        notes: [
          N.legal('Sch. 2 para. 8(1)(b)', 'The free route must be by ordinary post, or another method that is neither more expensive nor less convenient than paying. "Not less convenient" is the hardest condition to satisfy and the most commonly failed.'),
          N.legal('Sch. 2 para. 8(1)(a)', 'Every eligible person must have a genuine choice between paying and sending a communication. If the free route is not a genuine choice in practice, participants are treated as required to pay — making the arrangement an unlicensed lottery.'),
          N.risk('No licensed fallback (§8.5)', 'Lottery operating licences are unavailable to commercial for-profit operators. If this route fails the statutory test there is no licence to fall back on — the business model would be unlawful. This is why blocking item 0c exists.'),
          N.design('Design stance', 'Presented as a first-class route, not a grudging fallback. Same competitions, same odds, no upsell interruption.')
        ],
        html: `
          <div class="p-title">Enter free by post</div>
          <div class="p-sub">No purchase necessary. Same chance of winning.</div>
          <div class="p-card p-card--ok">
            <div class="p-card__t">Identical chance of winning</div>
            <div class="p-card__d">Free postal entries go into exactly the same draw, treated identically to paid entries. The draw system does not distinguish between them.</div>
          </div>
          <div class="p-h">Choose a competition</div>
          <div class="p-card p-card--accent">
            <div class="p-card__t">Porsche 718 Cayman &middot; or £48,000</div>
            <div class="p-card__d">Draw Sunday 20:00. Postal entries must arrive before the draw closes.</div>
          </div>
          <div class="p-card">
            <div class="p-card__t">All open competitions available free</div>
            <div class="p-card__d">£5,000 cash &middot; MacBook Air &middot; £1,000 cash &middot; Tech bundle &middot; and every other live competition.</div>
          </div>
          <button class="p-btn" data-next>See how to enter</button>`
      },
      {
        crumb: 'How to enter',
        bar: 'Postal entry',
        title: 'Entry instructions',
        lede: 'Plain requirements, no artificial complexity. Deliberately short — every extra hoop weakens the parity argument.',
        notes: [
          N.legal('Sch. 2 para. 5', 'Only normal-rate communication costs are permitted. Ordinary first or second class post, with no special delivery arrangements and no premium-rate channels.'),
          N.risk('Parity is a design decision', 'A six-field handwritten form against two-click Apple Pay is legally fragile. Requirements here are kept to the minimum needed to identify the entrant and competition.'),
          N.legal('DCMS Code 2.4', 'Terms must allow sufficient time for a postal entry to be received and validly entered. The stated cut-off has to be genuinely achievable by second class post.'),
          N.design('Open question', 'Whether a digital free route (web form) should also be offered is a live legal question — it would strengthen convenience parity considerably but needs sign-off. Flagged for blocking item 0c.')
        ],
        html: `
          <div class="p-title" style="font-size:.95rem">What to send</div>
          <div class="p-card">
            <div class="p-card__t">On a postcard or sheet of paper</div>
            <div class="p-card__d">
              1. Your full name<br>
              2. Your address and postcode<br>
              3. Your date of birth (18+)<br>
              4. Your email address<br>
              5. The competition you are entering
            </div>
          </div>
          <div class="p-card p-card--accent">
            <div class="p-card__t">Send to</div>
            <div class="p-card__d">Free Entry &middot; Prize Competition Venture<br>PO Box 000, City, Postcode<br><br>Ordinary first or second class post. No special delivery required or accepted.</div>
          </div>
          <div class="p-card p-card--ok">
            <div class="p-card__t">Timing</div>
            <div class="p-card__d">Must arrive before the draw closes on Sunday at 20:00. Allow normal postal time. One entry per envelope.</div>
          </div>
          <button class="p-btn" data-next>Confirm my entry is sent</button>`
      },
      {
        crumb: 'Processed',
        bar: 'Entry received',
        title: 'Free entry processed',
        lede: 'Free entries are validated and issued numbers through the same Entry Engine as paid entries.',
        notes: [
          N.legal('Sch. 2 para. 8(1)(d)', 'The prize allocation system must not differentiate between paid and free participants. This is why paid, postal and free entries share a single Entry Engine with identical eligibility and draw logic — a legal requirement, not a design preference.'),
          N.legal('DCMS Code 2.2', 'Entries via the free route must have an equal chance of winning each available prize. Verifiable in the published entry manifest.'),
          N.risk('Operational load (§10)', 'Postal intake is agent-assisted but human-audited every batch. It is the compliance-critical path and does not scale linearly — worth tracking as a founder-load pressure point.'),
          N.design('Same treatment', 'Free entrants receive the same confirmation, the same entry numbers and the same public entry list presence as paying customers.')
        ],
        html: `
          <div class="p-success">
            <div class="p-success__ring">&#10003;</div>
            <div class="p-title">Free entry received</div>
            <div class="p-sub">1 entry confirmed &middot; ref #FE-90412</div>
          </div>
          <div class="p-card p-card--ok">
            <div class="p-card__t">Treated identically to paid entries</div>
            <div class="p-card__d">Your entry number is 14346 and appears in the same public entry list. The draw process cannot tell paid and free entries apart.</div>
          </div>
          <div class="p-card p-card--accent">
            <div class="p-card__t">Draw &mdash; Sunday 20:00</div>
            <div class="p-card__d">Certified RNG. Result and verification published immediately afterwards.</div>
          </div>
          <div class="p-card">
            <div class="p-card__t">Enter again free</div>
            <div class="p-card__d">There is no limit on how many competitions you can enter through the free route.</div>
          </div>
          <button class="p-btn p-btn--dark p-btn--sm" data-restart>Back to start</button>`
      }
    ]
  },

  /* ─────────────────── C · INSTANT WIN + REVEAL ─────────────────── */
  instant: {
    label: 'Instant win + reveal',
    steps: [
      {
        crumb: 'Instant win',
        bar: 'Instant wins',
        title: 'Instant win competition',
        lede: 'Instant prizes plus continued eligibility for the end draw — the mechanic that made instant wins core rather than optional.',
        notes: [
          N.design('Ticket value', 'An instant-win ticket remains eligible for the end draw. Stage 2 identified this as the mechanic that transforms perceived ticket value from "did I win, no, finished" to "maybe now, and still later".'),
          N.legal('DCMS Code 1.10', 'Instant wins must not form the majority of live competitions at any time. The merchandising engine has to enforce a ratio cap — this is a hard product-mix constraint, tracked as open item 12.'),
          N.legal('DCMS Code 1.3', 'Credit cards are prohibited entirely for instant-win competitions. Not capped — prohibited. Checkout must block the card type outright for this product.'),
          N.design('Site credit', 'Credit prizes keep value inside the ecosystem and drive return visits, versus cash which leaves it. Requires a real wallet with an immutable ledger, not a balance field.')
        ],
        html: `
          <div class="p-hero"><div class="p-hero__img p-hero__img--cash"><div><span class="p-badge">Instant wins</span><span class="p-badge p-badge--guar">Plus end draw</span></div></div></div>
          <div class="p-title">£25,000 Instant Win<br>plus £5,000 end draw</div>
          <div class="p-sub">£0.35 per entry &middot; end draw Friday 21:00</div>
          <div class="p-meta">
            <div><dt>Prizes left</dt><dd>1,842</dd></div>
            <div><dt>Total prizes</dt><dd>3,000</dd></div>
            <div><dt>Biggest left</dt><dd>£2,500</dd></div>
            <div><dt>Max entries</dt><dd>90,000</dd></div>
          </div>
          <div class="p-card p-card--ok">
            <div class="p-card__t">Every ticket stays in the end draw</div>
            <div class="p-card__d">Winning an instant prize does not remove you from the £5,000 end draw. Every entry is eligible for both.</div>
          </div>
          <div class="p-card p-card--accent">
            <div class="p-card__t">Free entry route available</div>
            <div class="p-card__d">Postal entries receive instant-win tickets and end-draw entry on identical terms, with the same chance of winning every prize.</div>
          </div>
          <button class="p-btn" data-next>Choose entries</button>`
      },
      {
        crumb: 'Checkout',
        bar: 'Checkout',
        title: 'Checkout',
        lede: 'Credit cards are blocked outright here, and the reveal is explicitly stated as free before any payment is taken.',
        notes: [
          N.legal('DCMS Code 1.3', 'No credit card payments whatsoever for instant win competitions, including payments routed through a money service business. The option is removed, not merely warned against.'),
          N.legal('Sch. 2 para. 6 — critical', 'A requirement to pay in order to discover whether a prize has been won counts as paying to participate. The customer is paying for entries here, and the reveal that follows must be free. Stating that on this screen makes the boundary explicit.'),
          N.risk('Highest-risk mechanic', 'This is the easiest provision in the whole model to breach by accident — any "unlock your result" or "pay to check" pattern would convert the product into an unlicensed lottery. Named in the risk register and blocking item 0c.')
        ],
        html: `
          <div class="p-row"><span>50 entries &middot; £25,000 Instant Win</span><span>£17.50</span></div>
          <div class="p-row"><span>Fees</span><span>£0.00</span></div>
          <div class="p-row p-row--total"><span>Total</span><span>£17.50</span></div>
          <div class="p-h">Payment method</div>
          <div class="p-pay">
            <button class="is-sel">Apple&nbsp;Pay</button>
            <button>Debit&nbsp;card</button>
            <button disabled title="Not permitted for instant wins">Credit&nbsp;card</button>
          </div>
          <div class="p-card p-card--warn">
            <div class="p-card__t">Credit cards not accepted here</div>
            <div class="p-card__d">Credit cards cannot be used for instant win competitions. Debit card, Apple Pay, Google Pay or wallet credit only.</div>
          </div>
          <div class="p-card p-card--ok">
            <div class="p-card__t">Revealing your results is free</div>
            <div class="p-card__d">You are paying for entries only. Checking whether you have won costs nothing, now or later, and your results stay in your account.</div>
          </div>
          <label class="p-check"><input type="checkbox" checked><span>I confirm I am 18 or over and a UK resident.</span></label>
          <button class="p-btn" data-next>Pay £17.50</button>`
      },
      {
        crumb: 'Reveal',
        bar: 'Your results',
        title: 'Reveal experience',
        lede: 'The reveal is a product moment in its own right — deliberately after payment, and never gated by it.',
        notes: [
          N.legal('Sch. 2 para. 6', 'No payment gate may exist anywhere in this path. There is no "unlock", no reveal fee, and no premium-rate step. Results are already determined and owned by the customer.'),
          N.design('Separation of concerns', 'The outcome engine and the presentation are separate. The same determined results could render as tiles, cards, a wheel or scratch panels without changing the underlying allocation — Stage 2 architectural conclusion.'),
          N.design('Not in checkout', 'BOTB and Elite both moved the reveal out of checkout and into the account. It builds anticipation and gives a reason to return, rather than blurring into the payment flow.'),
          N.risk('Presentation and RG', 'Reveal mechanics resembling gambling interfaces attract scrutiny under Code 1.11 and ASA rules on socially responsible advertising. Presentation choices need creative review — Mode B in §10.')
        ],
        html: `
          <div class="p-title" style="font-size:.95rem">Your 50 tickets are ready</div>
          <div class="p-sub">Tap to reveal. Free, and always available in your account.</div>
          <div class="reveal-grid" id="revealGrid">
            <button class="reveal-tile">Reveal</button>
            <button class="reveal-tile">Reveal</button>
            <button class="reveal-tile">Reveal</button>
            <button class="reveal-tile">Reveal</button>
            <button class="reveal-tile">Reveal</button>
            <button class="reveal-tile">Reveal</button>
          </div>
          <div class="p-card">
            <div class="p-card__t">Revealing costs nothing</div>
            <div class="p-card__d">Your results were determined when your entries were issued. Revealing does not change them and is never charged for.</div>
          </div>
          <button class="p-btn p-btn--ghost p-btn--sm">Reveal all remaining</button>
          <button class="p-btn" data-next>See my results</button>`
      },
      {
        crumb: 'Result',
        bar: 'Result',
        title: 'Result and claim',
        lede: 'Prize awarded, choice of credit or cash, and continued end-draw eligibility made explicit.',
        notes: [
          N.legal('Sch. 2 para. 7', 'No payment may be required to take possession of a prize. Claiming is free, with no admin or delivery charge — a statutory requirement.'),
          N.design('Wallet economics', 'Offering credit alongside cash keeps value in the ecosystem. Requires the immutable WalletTransaction ledger from the platform model, with expiry and source tracking.'),
          N.design('End draw reminder', 'Reinforcing continued eligibility is the retention payoff for the mechanic introduced on screen one.'),
          N.legal('DCMS Code 1.6 / 1.7', 'Post-win is a monitoring point. Behaviour following a win is a harm indicator; the agent flags patterns and a human decides on intervention (§10, Mode B).')
        ],
        html: `
          <div class="p-success">
            <div class="p-success__ring">&#10003;</div>
            <div class="p-title">You won £50</div>
            <div class="p-sub">1 winning ticket from 50 &middot; ticket 55127</div>
          </div>
          <div class="p-card p-card--ok">
            <div class="p-card__t">Take it as credit or cash</div>
            <div class="p-card__d">£50 site credit added instantly, or £50 paid to your bank within 48 hours. Nothing to pay either way.</div>
          </div>
          <button class="p-btn">Add £50 to my wallet</button>
          <button class="p-btn p-btn--ghost p-btn--sm">Pay £50 to my bank instead</button>
          <div class="p-card p-card--accent">
            <div class="p-card__t">Still in the end draw</div>
            <div class="p-card__d">All 50 of your entries remain eligible for the £5,000 end draw on Friday at 21:00.</div>
          </div>
          <div class="p-card">
            <div class="p-card__t">Your other 49 tickets</div>
            <div class="p-card__d">No instant prize this time. Results saved in your account.</div>
          </div>
          <button class="p-btn p-btn--dark p-btn--sm" data-restart>Back to start</button>`
      }
    ]
  }
};

/* ───────────────────────── Runtime ───────────────────────── */
let journey = 'paid';
let step = 0;

const el = {
  screens: document.getElementById('screens'),
  flow: document.getElementById('flow'),
  noteTitle: document.getElementById('noteTitle'),
  noteLede: document.getElementById('noteLede'),
  noteList: document.getElementById('noteList'),
  barTitle: document.getElementById('barTitle'),
  barStep: document.getElementById('barStep'),
  back: document.getElementById('backBtn'),
  notes: document.getElementById('notesPanel'),
  toggle: document.getElementById('notesToggle')
};

function render() {
  const j = JOURNEYS[journey];
  const s = j.steps[step];

  el.screens.innerHTML = `<div class="screen is-active">${s.html}</div>`;
  el.barTitle.textContent = s.bar;
  el.barStep.textContent = `${step + 1} / ${j.steps.length}`;
  el.back.disabled = step === 0;

  el.flow.innerHTML = j.steps.map((st, i) =>
    `<button class="notes__crumb ${i === step ? 'is-active' : (i < step ? 'is-done' : '')}" data-step="${i}">${i + 1}. ${st.crumb}</button>`
  ).join('');

  el.noteTitle.textContent = s.title;
  el.noteLede.textContent = s.lede;
  el.noteList.innerHTML = s.notes.map(n =>
    `<div class="note-item ${n.type ? 'note-item--' + n.type : ''}">
       <div class="note-item__tag">${n.tag}</div>
       <div class="note-item__body">${n.body}</div>
     </div>`
  ).join('');

  el.screens.querySelector('.screen').scrollTop = 0;
}

/* Delegated interactions */
document.addEventListener('click', e => {
  const t = e.target.closest('[data-next],[data-restart],[data-goto-journey],[data-step],[data-qty],.reveal-tile,.p-pay button,.journey-tab');
  if (!t) return;

  if (t.classList.contains('journey-tab')) {
    document.querySelectorAll('.journey-tab').forEach(b => b.classList.toggle('is-active', b === t));
    journey = t.dataset.journey; step = 0; render(); return;
  }
  if (t.dataset.gotoJourney) {
    journey = t.dataset.gotoJourney; step = 0;
    document.querySelectorAll('.journey-tab').forEach(b => b.classList.toggle('is-active', b.dataset.journey === journey));
    render(); return;
  }
  if (t.hasAttribute('data-next')) {
    if (step < JOURNEYS[journey].steps.length - 1) { step++; render(); } return;
  }
  if (t.hasAttribute('data-restart')) { step = 0; render(); return; }
  if (t.dataset.step !== undefined) { step = +t.dataset.step; render(); return; }

  /* Local, non-navigating UI state */
  if (t.dataset.qty) {
    t.parentElement.querySelectorAll('button').forEach(b => b.classList.toggle('is-sel', b === t));
    return;
  }
  if (t.classList.contains('reveal-tile')) {
    if (t.classList.contains('is-done') || t.classList.contains('is-win')) return;
    const grid = t.parentElement;
    const idx = [...grid.children].indexOf(t);
    if (idx === 2) { t.classList.add('is-win'); t.textContent = '£50'; }
    else { t.classList.add('is-done'); t.textContent = 'No win'; }
    return;
  }
  if (t.closest('.p-pay') && !t.disabled) {
    t.parentElement.querySelectorAll('button').forEach(b => b.classList.toggle('is-sel', b === t));
  }
});

el.back.addEventListener('click', () => { if (step > 0) { step--; render(); } });
el.toggle.addEventListener('change', () => el.notes.classList.toggle('is-hidden', !el.toggle.checked));

render();

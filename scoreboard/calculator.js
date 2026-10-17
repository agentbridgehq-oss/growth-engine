// Weekly funnel scoreboard. Paste your numbers, find the leak.
const inputs = {
  posts: 4,
  visits: 320,
  downloads: 64,
  clicks: 16,
  sales: 3
};

const rates = {
  visitsPerPost: inputs.posts ? inputs.visits / inputs.posts : 0,
  visitToLead: inputs.visits ? inputs.downloads / inputs.visits * 100 : 0,
  leadToCheckout: inputs.downloads ? inputs.clicks / inputs.downloads * 100 : 0,
  checkoutToSale: inputs.clicks ? inputs.sales / inputs.clicks * 100 : 0
};

// Normalize against targets: 50 visits/post, 10% visit->lead, 20% lead->checkout, 65% checkout->sale
const normalized = [
  Math.min(rates.visitsPerPost / 50, 1),
  Math.min(rates.visitToLead / 10, 1),
  Math.min(rates.leadToCheckout / 20, 1),
  Math.min(rates.checkoutToSale / 65, 1)
];

const labels = ['post -> visit', 'visit -> lead', 'lead -> checkout', 'checkout -> sale'];
const minIdx = normalized.indexOf(Math.min(...normalized));

console.log('Rates:', rates);
console.log('Thinnest handoff:', labels[minIdx]);
console.log('Fix that one before adding traffic.');
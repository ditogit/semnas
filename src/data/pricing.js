const base = 'https://icoabcd.asasi.or.id';

function planLink(type, name) {
  return `${base}/dashboard.php?plan_type=${type}&plan_name=${name.split(' ').join('+')}`;
}

function tier(type, category, name, price, usd, desc, featured = false) {
  return { category, name, price, usd, desc, link: planLink(type, name), featured, cta: 'Select Plan' };
}

export const pricing = {
  onsite: [
    tier('onsite', 'Presenter', 'IEEE Student Member', 'IDR 3,000,000', 'USD 167', 'Active IEEE student membership required during registration verification.'),
    tier('onsite', 'Presenter', 'IEEE Professional Member', 'IDR 3,500,000', 'USD 195', 'Active IEEE professional membership required during registration verification.', true),
    tier('onsite', 'Presenter', 'Regular Student', 'IDR 3,500,000', 'USD 195', 'For non-IEEE member undergraduate, graduate, or postgraduate students.'),
    tier('onsite', 'Presenter', 'Regular Professional', 'IDR 4,000,000', 'USD 223', 'For non-IEEE member professional researchers, industry practitioners, and academics.'),
    tier('onsite', 'Non-Presenter', 'Attendee', 'IDR 500,000', 'USD 28', 'For non-presenting general audience or co-authors attending sessions physically.'),
    tier('onsite', 'Non-Presenter', 'Student Attendee', 'IDR 300,000', 'USD 17', 'For non-presenting students attending sessions physically.')
  ],
  online: [
    tier('online', 'Presenter', 'IEEE Student Member', 'IDR 3,000,000', 'USD 167', 'Active IEEE student membership required for online participant verification.'),
    tier('online', 'Presenter', 'IEEE Professional Member', 'IDR 3,500,000', 'USD 195', 'Active IEEE professional membership required for online participant verification.', true),
    tier('online', 'Presenter', 'Regular Student', 'IDR 3,500,000', 'USD 195', 'For non-IEEE member students joining and presenting virtually.'),
    tier('online', 'Presenter', 'Regular Professional', 'IDR 4,000,000', 'USD 223', 'For non-IEEE member professional researchers presenting virtually.'),
    tier('online', 'Non-Presenter', 'Attendee', 'IDR 500,000', 'USD 28', 'For virtual attendees accessing live sessions, workshops, and keynotes.'),
    tier('online', 'Non-Presenter', 'Student Attendee', 'IDR 300,000', 'USD 17', 'For virtual student attendees accessing live sessions and keynotes.')
  ]
};

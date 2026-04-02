// getReviews — combines local testimonials with Google Reviews (when configured).
//
// To enable Google Reviews:
//   1. Get a Google Maps API key with Places API enabled.
//   2. Find your Google Place ID at https://developers.google.com/maps/documentation/places/web-service/place-id
//   3. Add to .env.local:
//        GOOGLE_PLACES_API_KEY=your_key_here
//        GOOGLE_PLACE_ID=your_place_id_here
//
// The testimonials page uses getStaticProps with revalidate: 86400 (24 h),
// so new Google reviews appear on the site within a day without redeploying.

import LOCAL_REVIEWS from '../data/testimonials';

export async function getReviews() {
  const reviews = [...LOCAL_REVIEWS];

  const { GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID } = process.env;

  if (GOOGLE_PLACES_API_KEY && GOOGLE_PLACE_ID) {
    try {
      const url =
        `https://maps.googleapis.com/maps/api/place/details/json` +
        `?place_id=${GOOGLE_PLACE_ID}` +
        `&fields=reviews` +
        `&key=${GOOGLE_PLACES_API_KEY}`;

      const res = await fetch(url);
      const data = await res.json();

      if (data.result && Array.isArray(data.result.reviews)) {
        const googleReviews = data.result.reviews
          .filter(r => r.text && r.text.length > 40 && r.rating >= 4)
          .map((r, i) => ({
            id: `google_${i}`,
            text: r.text,
            name: r.author_name,
            role: 'Verified Google Review',
            organisation: '',
            service: '',
            rating: r.rating,
            source: 'google',
          }));

        reviews.push(...googleReviews);
      }
    } catch {
      // Network error or API misconfiguration — fall back to local reviews only.
    }
  }

  return reviews;
}

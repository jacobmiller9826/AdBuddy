const templates = {
  nails: {
    bizName: "Desert Glow Nails",
    offer: "Manicure & Pedicure Services",
    location: "Phoenix, AZ",
    special: "20% off first visit",
    contact: "(602) 555-1234"
  },
  tanning: {
    bizName: "SunKissed Tanning",
    offer: "Spray Tan & UV Beds",
    location: "Scottsdale, AZ",
    special: "Buy 3, get 1 free",
    contact: "info@sunkissedtan.com"
  },
  eyebrows: {
    bizName: "Brow Artistry Studio",
    offer: "Shaping & Microblading",
    location: "Tempe, AZ",
    special: "Free touch-up with 1st visit",
    contact: "(480) 555-5678"
  },
  waxing: {
    bizName: "Smooth & Silky Waxing",
    offer: "Full Body Waxing",
    location: "Mesa, AZ",
    special: "First wax 15% off",
    contact: "appointments@smoothsilky.com"
  },
  massage: {
    bizName: "Tranquil Touch Massage",
    offer: "Therapeutic Massage",
    location: "Gilbert, AZ",
    special: "Book 2 hrs, get 30 min free",
    contact: "(480) 555-7890"
  },
  skincare: {
    bizName: "Radiance Skin",
    offer: "Facials & Treatments",
    location: "Chandler, AZ",
    special: "Free skin analysis",
    contact: "contact@radianceskin.com"
  },
  lashes: {
    bizName: "Luxe Lash Lounge",
    offer: "Lash Extensions",
    location: "Flagstaff, AZ",
    special: "25% off for new clients",
    contact: "(928) 555-9876"
  },
  makeup: {
    bizName: "Glamour Pro Makeup",
    offer: "Bridal & Event Makeup",
    location: "Peoria, AZ",
    special: "Free bridal trial",
    contact: "glamourpro@peoria.com"
  },
  boutique: {
    bizName: "Chic Boutique",
    offer: "Trendy Apparel & Accessories",
    location: "Scottsdale, AZ",
    special: "Summer sale up to 40% off",
    contact: "shop@chicboutique.com"
  },
  spa: {
    bizName: "Oasis Day Spa",
    offer: "Massage & Wraps",
    location: "Tucson, AZ",
    special: "Couples massage discount",
    contact: "info@oasisspa.com"
  }
};

document.getElementById('preset').addEventListener('change', (e) => {
  const selected = templates[e.target.value];
  if (selected) {
    document.getElementById('bizName').value = selected.bizName;
    document.getElementById('offer').value = selected.offer;
    document.getElementById('location').value = selected.location;
    document.getElementById('special').value = selected.special;
    document.getElementById('contact').value = selected.contact;
  }
});

function generateAd() {
  const bizName = document.getElementById('bizName').value;
  const offer = document.getElementById('offer').value;
  const location = document.getElementById('location').value;
  const special = document.getElementById('special').value;
  const contact = document.getElementById('contact').value;

  const output = `📢 ${bizName} – ${offer}\n📍 ${location}\n🎁 ${special}\n📞 ${contact}`;
  document.getElementById('output').innerText = output;
  document.getElementById('result').style.display = 'block';
}

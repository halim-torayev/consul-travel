const hotels = {
  istanbul: [
    {
      name: "Mandarin Oriental Hotel",
      image: "images/hotels/istanbul/01-mandarin-oriental-hotel.jpg",
      type: "Luxury"
    },
    {
      name: "Four Seasons at the Bosphorus",
      image: "images/hotels/istanbul/02-four-seasons.jpg",
      type: "Luxury"
    },
    {
      name: "Çırağan Palace Kempinski İstanbul",
      image: "images/hotels/istanbul/03-ciragan-palace-kempinski.jpg",
      type: "Luxury All Inclusive"
    },
    {
      name: "The Peninsula Istanbul",
      image: "images/hotels/istanbul/04-peninsula.webp",
      type: "Luxury"
    },
    {
      name: "St. Regis Hotel",
      image: "images/hotels/istanbul/05-st-regis-hotel.jpg",
      type: "Luxury"
    },
    {
      name: "Swissotel The Bosphorus",
      image: "images/hotels/istanbul/06-swissotel-bosphorus.jpg",
      type: "Luxury"
    },
    {
      name: "Fairmont Quasar Istanbul",
      image: "images/hotels/istanbul/07-fairmont-quasar.jpg",
      type: "Luxury"
    },
    {
      name: "Shangri-La Bosphorus",
      image: "images/hotels/istanbul/08-shangri-la.jpg",
      type: "Luxury"
    },
    {
      name: "The Ritz-Carlton Istanbul",
      image: "images/hotels/istanbul/09-the-ritz-carlton.jpg",
      type: "Luxury"
    }
  ],

  antalya: [
    {
      name: "Gloria Serenity Resort Belek",
      image: "images/hotels/antalya/01-gloria-serenity-resort-belek.jpg",
      type: "Luxury Resort"
    },
    {
      name: "Gloria Golf Resort",
      image: "images/hotels/antalya/02-gloria-golf-resort.jpg",
      type: "Golf & Luxury"
    },
    {
      name: "Gloria Verde Resort Belek",
      image: "images/hotels/antalya/03-gloria-verde-resort-belek.jpg",
      type: "Luxury Resort"
    },
    {
      name: "Regnum Carya Golf & Spa Resort",
      image: "images/hotels/antalya/04-regnum-carya-golf-and-spa-resort.jpg",
      type: "Golf & Spa"
    },
    {
      name: "Club Arona",
      image: "images/hotels/antalya/05-club-arona.webp",
      type: "Luxury Resort"
    },
    {
      name: "Bayou Villas",
      image: "images/hotels/antalya/06-bayou-villas.webp",
      type: "Private Villas"
    },
    {
      name: "Bijal Resort",
      image: "images/hotels/antalya/07-bijal-resort.webp",
      type: "Luxury Resort"
    },
    {
      name: "Ethno Belek",
      image: "images/hotels/antalya/08-ethno-belek.webp",
      type: "Luxury Resort"
    },
    {
      name: "Balmy Foresta",
      image: "images/hotels/antalya/09-balmy-foresta.webp",
      type: "Luxury Resort"
    },
    {
      name: "Balmy Beach Resort Kemer",
      image: "images/hotels/antalya/10-balmy-beach-resort-kemer.webp",
      type: "Beach Resort"
    },
    {
      name: "Paloma Sencia",
      image: "images/hotels/antalya/11-paloma-sencia.webp",
      type: "Luxury Resort"
    },
    {
      name: "FashionTV Luxe Resort",
      image: "images/hotels/antalya/12-fashionTV-luxe-resort.webp",
      type: "Luxury Resort"
    }
  ],

  bodrum: [
    {
      name: "Mandarin Oriental Bodrum",
      image: "images/hotels/bodrum/01-mandarin-oriental-bodrum.webp",
      type: "Luxury Sea View"
    },
    {
      name: "D Maris Bay",
      image: "images/hotels/bodrum/02-d-maris-bay.jpg",
      type: "Luxury Resort"
    },
    {
      name: "Scorpios Bodrum",
      image: "images/hotels/bodrum/03-scorpios-bodrum.webp",
      type: "Luxury"
    },
    {
      name: "Akana Loft Bodrum",
      image: "images/hotels/bodrum/04-akana-loft-bodrum.webp",
      type: "Boutique Luxury"
    },
    {
      name: "The Bodrum Edition",
      image: "images/hotels/bodrum/05-the-bodrum-edition.jpg",
      type: "Luxury Resort"
    },
    {
      name: "Maxx Royal Bodrum",
      image: "images/hotels/bodrum/06-maxx-royal-bodrum.webp",
      type: "Luxury Resort"
    },
    {
      name: "Oku Bodrum",
      image: "images/hotels/bodrum/07-oku-bodrum.webp",
      type: "Luxury"
    },
    {
      name: "Susona Bodrum",
      image: "images/hotels/bodrum/08-susona-bodrum.webp",
      type: "Luxury Resort"
    },
    {
      name: "Hyde Bodrum",
      image: "images/hotels/bodrum/09-hyde-bodrum.webp",
      type: "Luxury Resort"
    }
  ],

  kapadokya: [
    {
      name: "Argos in Cappadocia",
      image: "images/hotels/kapadokya/01-argos-in-cappadocia.jpg",
      type: "Boutique Luxury"
    },
    {
      name: "Museum Hotel Cappadocia",
      image: "images/hotels/kapadokya/02-museum-hotel-cappadocia.jpg",
      type: "Luxury Cave Hotel"
    },
    {
      name: "Ariana Sustainable Luxury Lodge",
      image: "images/hotels/kapadokya/03-ariana-sustainable-luxury-lodge.jpg",
      type: "Luxury Lodge"
    },
    {
      name: "Sacred House Hotel",
      image: "images/hotels/kapadokya/04-sacred-house-hotel.jpg",
      type: "Boutique Luxury"
    },
    {
      name: "Ajwa Cappadocia",
      image: "images/hotels/kapadokya/05-ajwa-cappadocia.jpg",
      type: "Luxury"
    },
    {
      name: "Exedra Hotel Cappadocia",
      image: "images/hotels/kapadokya/06-exedra-hotel-cappadocia.jpg",
      type: "Cave Hotel"
    }
  ]
};

function createHotelCard(hotel) {
  return `
    <div class="hotel-card">
      <img src="${hotel.image}" alt="${hotel.name}">
      <h3>${hotel.name}</h3>
      <p>★★★★★ - Türkiye</p>
      <span>${hotel.type}</span>
    </div>
  `;
}

function renderHotels(city) {
  const container = document.getElementById(city);

  hotels[city].forEach(function (hotel) {
    container.innerHTML += createHotelCard(hotel);
  });
}

renderHotels("istanbul");
renderHotels("antalya");
renderHotels("bodrum");
renderHotels("kapadokya");
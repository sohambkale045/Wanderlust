const sampleListings = [
  {
    title: "Modern Apartment in the City",
    description: "A sleek and modern apartment located in the bustling city center, perfect for urban living.",
    image: {
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      filename: "listingimage"
    },
    price: 250,
    location: "New York",
    country: "USA"
  },
  {
    title: "Rustic Cabin in the Woods",
    description: "A cozy cabin surrounded by nature, ideal for a peaceful retreat away from the city.",
    image: {
      url: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09",
      filename: "listingimage"
    },
    price: 180,
    location: "Colorado",
    country: "USA"
  },
  {
    title: "Luxury Beach House",
    description: "A stunning beach house with panoramic ocean views, perfect for a luxurious getaway.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename: "listingimage"
    },
    price: 450,
    location: "Miami",
    country: "USA"
  },
  {
    title: "Charming Countryside Cottage",
    description: "A picturesque cottage in the countryside, offering a serene and relaxing environment.",
    image: {
      url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
      filename: "listingimage"
    },
    price: 200,
    location: "Cotswolds",
    country: "UK"
  },
  {
    title: "Ski Chalet in the Alps",
    description: "A luxurious chalet located in the heart of the Alps, perfect for ski enthusiasts.",
    image: {
      url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6",
      filename: "listingimage"
    },
    price: 600,
    location: "Chamonix",
    country: "France"
  },
  {
    title: "Urban Loft with Rooftop Access",
    description: "A stylish loft with rooftop access, offering stunning city views and modern amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688", // Fixed URL (removed extra colon)
      filename: "listingimage"
    },
    price: 300,
    location: "Los Angeles",
    country: "USA"
  },
  {
    title: "Seaside Villa in Santorini",
    description: "A beautiful villa located on the cliffs of Santorini, offering breathtaking views of the Aegean Sea.",
    image: {
      url: "https://images.unsplash.com/photo-1513611775061-51aa35c5f3f1",
      filename: "listingimage"
    },
    price: 500,
    location: "Santorini",
    country: "Greece"
  },
  {
    title: "Mountain Retreat with Hot Tub",
    description: "A cozy mountain retreat with a private hot tub, perfect for relaxing after a day of hiking.",
    image: {
      url: "https://images.unsplash.com/photo-1519643225200-94bcdf8c5e3c",
      filename: "listingimage"
    },
    price: 350,
    location: "Aspen",
    country: "USA"
  },
  {
    title: "Historic Castle Stay",
    description: "Experience living like royalty in a historic castle with luxurious rooms and grand architecture.",
    image: {
      url: "https://images.unsplash.com/photo-1528127269322-539801943592",
      filename: "listingimage"
    },
    price: 700,
    location: "Edinburgh",
    country: "Scotland"
  },
  {
    title: "Tropical Treehouse Escape",
    description: "A unique treehouse experience in the middle of a tropical forest, perfect for nature lovers.",
    image: {
      url: "https://images.unsplash.com/photo-1521405924368-64c5b84bec60",
      filename: "listingimage"
    },
    price: 280,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Lakeside Cabin Retreat",
    description: "A peaceful cabin by the lake, offering stunning views and a tranquil atmosphere.",
    image: {
      url: "https://images.unsplash.com/photo-1501685532562-aa6846b14a0e",
      filename: "listingimage"
    },
    price: 220,
    location: "Lake Tahoe",
    country: "USA"
  },
  {
    title: "Sunny Beachfront Apartment",
    description: "A bright and airy apartment located right on the beach, perfect for sun-seekers.",
    image: {
      url: "https://images.unsplash.com/photo-1505873242700-f289a29e1e0f",
      filename: "listingimage"
    },
    price: 320,
    location: "Gold Coast",
    country: "Australia"
  },
  {
    title: "Cozy Mountain Lodge",
    description: "A warm and inviting lodge nestled in the mountains, ideal for a winter getaway.",
    image: {
      url: "https://images.unsplash.com/photo-1511884928147-1d2e7439d3a5",
      filename: "listingimage"
    },
    price: 400,
    location: "Whistler",
    country: "Canada"
  },
  {
    title: "Romantic Vineyard Cottage",
    description: "A charming cottage located in a vineyard, perfect for a romantic escape.",
    image: {
      url: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7",
      filename: "listingimage"
    },
    price: 280,
    location: "Tuscany",
    country: "Italy"
  },
  {
    title: "Luxury Safari Tent",
    description: "A luxurious tent in the middle of the savannah, offering an unforgettable safari experience.",
    image: {
      url: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995",
      filename: "listingimage"
    },
    price: 550,
    location: "Maasai Mara",
    country: "Kenya"
  },
  {
    title: "Modern Penthouse with Skyline Views",
    description: "A luxurious penthouse with floor-to-ceiling windows offering stunning city views.",
    image: {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", // Fixed URL (removed extra colon)
      filename: "listingimage"
    },
    price: 800,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Rustic Farmhouse in Provence",
    description: "A traditional farmhouse surrounded by lavender fields, offering a taste of French countryside life.",
    image: {
      url: "https://images.unsplash.com/photo-1515169067868-16f8a16d6a93",
      filename: "listingimage"
    },
    price: 300,
    location: "Provence",
    country: "France"
  },
  {
    title: "Beachfront Bungalow in Thailand",
    description: "A cozy bungalow located right on the beach, perfect for a tropical getaway.",
    image: {
      url: "https://images.unsplash.com/photo-1506929562872-bb421503ef21",
      filename: "listingimage"
    },
    price: 150,
    location: "Phuket",
    country: "Thailand"
  },
  {
    title: "Snowy Cabin in the Rockies",
    description: "A cozy cabin surrounded by snow-covered mountains, perfect for a winter retreat.",
    image: {
      url: "https://images.unsplash.com/photo-1511884928147-1d2e7439d3a5",
      filename: "listingimage"
    },
    price: 350,
    location: "Rocky Mountains",
    country: "USA"
  },
  {
    title: "Luxury Villa in the Maldives",
    description: "A stunning villa located over crystal-clear waters, offering ultimate privacy and luxury.",
    image: {
      url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
      filename: "listingimage"
    },
    price: 900,
    location: "Maldives",
    country: "Maldives"
  },
  {
    title: "Historic Townhouse in Paris",
    description: "A charming townhouse located in the heart of Paris, offering a blend of history and modern comfort.",
    image: {
      url: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
      filename: "listingimage"
    },
    price: 600,
    location: "Paris",
    country: "France"
  },
  {
    title: "Secluded Island Retreat",
    description: "A private island retreat with pristine beaches and lush greenery, perfect for a secluded getaway.",
    image: {
      url: "https://images.unsplash.com/photo-1583313663750-2a8c5d19b25a",
      filename: "listingimage"
    },
    price: 1000,
    location: "Fiji",
    country: "Fiji"
  },
  {
    title: "Coastal Cottage in Cornwall",
    description: "A charming cottage located on the rugged coast of Cornwall, offering stunning sea views.",
    image: {
      url: "https://images.unsplash.com/photo-1515169067868-16f8a16d6a93",
      filename: "listingimage"
    },
    price: 250,
    location: "Cornwall",
    country: "UK"
  },
  {
    title: "Luxury Apartment in Tokyo",
    description: "A modern and luxurious apartment in the heart of Tokyo, offering easy access to the city's attractions.",
    image: {
      url: "https://images.unsplash.com/photo-1511731045157-cd67f39b95f4",
      filename: "listingimage"
    },
    price: 700,
    location: "Tokyo",
    country: "Japan"
  },
  {
    title: "Desert Oasis Retreat",
    description: "A luxurious retreat in the middle of the desert, offering a unique and tranquil experience.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      filename: "listingimage"
    },
    price: 400,
    location: "Dubai",
    country: "UAE"
  },
  {
    title: "Lakeside Villa in Switzerland",
    description: "A stunning villa located by a serene lake, offering breathtaking views of the Swiss Alps.",
    image: {
      url: "https://images.unsplash.com/photo-1515169067868-16f8a16d6a93",
      filename: "listingimage"
    },
    price: 850,
    location: "Lucerne",
    country: "Switzerland"
  },
  {
    title: "Traditional Japanese Ryokan",
    description: "Experience traditional Japanese hospitality in a beautifully designed ryokan.",
    image: {
      url: "https://images.unsplash.com/photo-1515169067868-16f8a16d6a93",
      filename: "listingimage"
    },
    price: 300,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Beachfront Villa in Bali",
    description: "A luxurious villa located right on the beach, offering stunning ocean views and modern amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename: "listingimage"
    },
    price: 500,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Mountain Cabin in Canada",
    description: "A cozy cabin located in the Canadian Rockies, perfect for a nature-filled retreat.",
    image: {
      url: "https://images.unsplash.com/photo-1511884928147-1d2e7439d3a5",
      filename: "listingimage"
    },
    price: 350,
    location: "Banff",
    country: "Canada"
  },
  {
    title: "Luxury Penthouse in Singapore",
    description: "A luxurious penthouse with panoramic views of Singapore's skyline.",
    image: {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      filename: "listingimage"
    },
    price: 900,
    location: "Singapore",
    country: "Singapore"
  }
];

module.exports = {data:sampleListings};
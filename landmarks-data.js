console.log("lets render some landmarks!");

const landmarks = [
  {
    name: "Eiffel Tower",
    location: {
      city: "Paris",
      country: "France",
      continent: "Europe",
    },
    built: 1889,
    type: "Observation Tower",
    dimensions: {
      heightMeters: 330,
      floors: 3,
    },
    facts: [
      "Originally built for the 1889 World's Fair",
      "Was the tallest structure in the world until 1930",
      "Repainted every 7 years with 60 tons of paint",
    ],
    architect: {
      name: "Gustave Eiffel",
      nationality: "French",
    },
    visited: true,
    image: "",
  },
  {
    name: "Statue of Liberty",
    location: {
      city: "New York City",
      country: "USA",
      continent: "North America",
    },
    built: 1886,
    type: "Monument",
    dimensions: {
      heightMeters: 93,
      floors: 0,
    },
    facts: [
      "Gift from France to the USA",
      "Full name: Liberty Enlightening the World",
      "Copper exterior has oxidized to green",
    ],
    architect: {
      name: "Frédéric Auguste Bartholdi",
      nationality: "French",
    },
    visited: false,
    image: "",
  },
  {
    name: "Taj Mahal",
    location: {
      city: "Agra",
      country: "India",
      continent: "Asia",
    },
    built: 1643,
    type: "Mausoleum",
    dimensions: {
      heightMeters: 73,
      floors: 1,
    },
    facts: [
      "Built by Mughal emperor Shah Jahan for his wife Mumtaz Mahal",
      "Made of white marble",
      "Considered one of the New Seven Wonders of the World",
    ],
    architect: {
      name: "Ustad Ahmad Lahauri",
      nationality: "Indian",
    },
    visited: false,
    image: "",
  },
  {
    name: "Christ the Redeemer",
    location: {
      city: "Rio de Janeiro",
      country: "Brazil",
      continent: "South America",
    },
    built: 1931,
    type: "Statue",
    dimensions: {
      heightMeters: 38,
      armSpanMeters: 28,
    },
    facts: [
      "Located at the peak of Corcovado mountain",
      "Made of reinforced concrete and soapstone",
      "Symbol of Christianity and Brazilian culture",
    ],
    architect: {
      name: "Paul Landowski",
      nationality: "French-Polish",
    },
    visited: true,
    image: "",
  },
  {
    name: "Great Wall of China",
    location: {
      city: "Various",
      country: "China",
      continent: "Asia",
    },
    built: "7th century BC to 16th century",
    type: "Fortification",
    dimensions: {
      lengthKm: 21196,
      heightMeters: 7,
    },
    facts: [
      "Can be seen from space (myth)",
      "Built to protect against invasions",
      "Over 2,000 years old",
    ],
    architect: {
      name: "Various dynasties",
      nationality: "Chinese",
    },
    visited: false,
    image: "",
  },
  {
    name: "Machu Picchu",
    location: {
      city: "Cusco Region",
      country: "Peru",
      continent: "South America",
    },
    built: "15th century",
    type: "Incan Citadel",
    dimensions: {
      elevationMeters: 2430,
    },
    facts: [
      "Rediscovered in 1911 by Hiram Bingham",
      "Believed to be a royal estate for Inca emperors",
      "No mortar used in construction",
    ],
    architect: {
      name: "Inca Empire",
      nationality: "Peruvian",
    },
    visited: false,
    image: "",
  },
  {
    name: "Sydney Opera House",
    location: {
      city: "Sydney",
      country: "Australia",
      continent: "Australia",
    },
    built: 1973,
    type: "Performing Arts Center",
    dimensions: {
      shells: 14,
      seatingCapacity: 5738,
    },
    facts: [
      "Famous for its sail-like design",
      "Designed by Danish architect Jørn Utzon",
      "Over 1 million tiles cover its roof",
    ],
    architect: {
      name: "Jørn Utzon",
      nationality: "Danish",
    },
    visited: false,
    image: "",
  },
  {
    name: "Stonehenge",
    location: {
      city: "Wiltshire",
      country: "England",
      continent: "Europe",
    },
    built: "3000 BC",
    type: "Prehistoric Monument",
    dimensions: {
      stones: 93,
      tallestStoneMeters: 9,
    },
    facts: [
      "Mystery surrounding its construction and purpose",
      "Stones are aligned with the sunrise on solstices",
      "Some stones transported from over 150 miles away",
    ],
    architect: {
      name: "Unknown",
      nationality: "Ancient Britons",
    },
    visited: false,
    image: "",
  },
];

const landmarksSectionElement = document.getElementById("landmarks");

for (let landmark of landmarks) {
  console.log(landmark);
  // create our elements in JS
  const landmarkDivElement = document.createElement("div");
  const headingElement = document.createElement("h3");
  const locationDetailsElement = document.createElement("small");
  const factListElement = document.createElement("ul");

  // add text or attributes content to elements
  landmarkDivElement.classList.add("landmark-div");
  headingElement.innerHTML = landmark.name;
  locationDetailsElement.innerHTML = `${landmark.location.city}, ${landmark.location.country}`;
  for (let fact of landmark.facts) {
    let factListItemElement = document.createElement("li");
    factListItemElement.textContent += fact;
    factListElement.appendChild(factListItemElement);
  }

  // append child elements to parent elements
  // parentElement.appendChild(childElement)
  landmarkDivElement.appendChild(headingElement);
  landmarkDivElement.appendChild(locationDetailsElement);
  landmarkDivElement.appendChild(factListElement);

  landmarksSectionElement.appendChild(landmarkDivElement);
}

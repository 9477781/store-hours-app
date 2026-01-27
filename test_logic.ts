const REGIONS = [
  { id: "kanto", name: "関東" },
  { id: "kinki", name: "近畿" },
];

const selectedRegion = REGIONS[0]; // Kanto
const selectedPrefecture = null;
const selectedCity = null;
const inputTerm = "";
const appliedTerm = "";
const selectedDates = [];
const selectedStore = "HUB Store"; // User selects a store

const isFiltered =
  inputTerm !== "" ||
  appliedTerm !== "" ||
  selectedRegion.id !== REGIONS[0].id ||
  selectedPrefecture !== null ||
  selectedCity !== null ||
  selectedDates.length > 0 ||
  selectedStore !== null;

console.log("isFiltered:", isFiltered);
console.log(
  "selectedRegion.id !== REGIONS[0].id:",
  selectedRegion.id !== REGIONS[0].id
);
console.log("selectedStore !== null:", selectedStore !== null);

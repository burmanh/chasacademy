let isSaleActive = true; // Ändra till false för att testa när rean inte är aktiv
let userRegion = "RU";   // Testa med t.ex. "SE", "NO", "US", osv.

if (isSaleActive && userRegion === "SE") {
  console.log("Visa 'REA-bannern' för svenska användare!");
} else if (isSaleActive && userRegion !== "SE") {
  console.log("Visa 'SALE-banner' för internationella användare!");
} else {
  console.log("Ingen REA aktiv just nu, dölj bannern.");
}

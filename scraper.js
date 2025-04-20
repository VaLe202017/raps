const axios = require("axios");
const cheerio = require("cheerio");

const URL =
  "https://meteo.hr/podaci.php?section=podaci_vrijeme&param=hrvatska1_n";

async function scrapeWeather() {
  try {
    const { data } = await axios.get(URL);
    const $ = cheerio.load(data);

    console.log("Trenutni vremenski podaci za Hrvatsku:");

    $("table tbody tr").each((index, element) => {
      const tds = $(element).find("td");

      const postaja = $(tds[0]).text().trim();
      const temp = $(tds[1]).text().trim();
      const vlaga = $(tds[2]).text().trim();
      const tlak = $(tds[3]).text().trim();
      const vjetar = $(tds[4]).text().trim();
      const stanje = $(tds[5]).text().trim();
      if ((postaja = "Palagruža")) {
        if (postaja) {
          console.log(
            `Postaja: ${postaja} | Temperatura: ${temp}°C | Vlaga: ${vlaga}% | Tlak: ${tlak} hPa | Vjetar: ${vjetar} | Stanje: ${stanje}`
          );
        }
      }

      if (postaja) {
        console.log(
          `Postaja: ${postaja} | Temperatura: ${temp}°C | Vlaga: ${vlaga}% | Tlak: ${tlak} hPa | Vjetar: ${vjetar} | Stanje: ${stanje}`
        );
      }
    });
  } catch (error) {
    console.error("❌ Greška prilikom dohvata podataka:", error.message);
  }
}

scrapeWeather();

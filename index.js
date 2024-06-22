const express = require("express");
const router = express.Router();

const ussdResponses = {
  "": `Welcome to the Justice platform
Please select a language:
1. Kinyarwanda
2. English
3. French
00. Back`,
  "1": `Hitamo:
1. Amategeko mbonezamubano
2. Amategeko Y'ubucuruzi
3. Amategeko ahana Ibyaha`,
  "2": `Choose:
1. Civil law
2. Commercial law
3. Criminal law`,
  "3": `Choisissez:
1. Droit civil
2. Droit commercial
3. Loi criminelle`,
  "1*1": `Amategeko mbonezamubano:
1. Itegeko numero 101/10/2024
2. Itegeko numero 205/11/2003`,
  "1*2": `Amategeko Y'ubucuruzi:
1. Itegeko numero 102/10/2024
2. Itegeko numero 206/11/2003`,
  "1*3": `Amategeko ahana Ibyaha:
1. Itegeko numero 102/10/2024
2. Itegeko numero 206/11/2003`,
  "1*3*1": `Itegeko numero 102/10/2024:
1. Yego
2. Oya`,
  "1*3*2": `Itegeko numero 206/11/2003:
1. Yego
2. Oya`,
  "1*3*2*1": `Murakoze guhitamo`,
  "1*3*2*2": `Murakoze guhitamo`,
  "2*1": `Civil law:
1. Law Number 101/10/2024
2. Law Number 205/11/2003`,
  "2*1*1": `Law Number 101/10/2024:
1. Yes
2. No`,
  "2*1*2": `Law Number 205/11/2003:
1. Yes
2. No`,
  "2*2": `Commercial law:
1. Law Number 102/10/2024
2. Law Number 206/11/2003`,
  "2*2*1": `Law Number 102/10/2024:
1. Yes
2. No`,
  "2*2*2": `Law Number 206/11/2003:
1. Yes
2. No`,
  "2*3": `Criminal law:
1. Law Number 102/10/2024
2. Law Number 206/11/2003`,
  "2*3*1": `Law Number 102/10/2024:
1. Yes
2. No`,
  "2*3*2": `Law Number 206/11/2003:
1. Yes
2. No`,
  "3*1": `Droit civil:
1. Numero du loi 101/10/2024
2. Numero du loi 205/11/2003`,
  "3*1*1": `Numero du loi 101/10/2024:
1. Oui
2. Non`,
  "3*1*2": `Numero du loi 205/11/2003:
1. Oui
2. Non`,
  "3*2": `Droit commercial:
1. Numero du loi 102/10/2024
2. Numero du loi 206/11/2003`,
  "3*2*1": `Numero du loi 102/10/2024:
1. Oui
2. Non`,
  "3*2*2": `Numero du loi 206/11/2003:
1. Oui
2. Non`,
  "3*3": `Loi criminelle:
1. Numero du loi 102/10/2024
2. Numero du loi 206/11/2003`,
  "3*3*1": `Numero du loi 102/10/2024:
1. Oui
2. Non`,
  "3*3*2": `Numero du loi 206/11/2003:
1. Oui
2. Non`
};

router.post("/ussd", (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;
  console.log('Information', JSON.stringify(req.body, null, 2));

  let response = ussdResponses[text] || `Dear customer, the network is experiencing technical problems and your request was not processed. Please try again later.`;

  res.set("Content-Type", "text/plain"); // Corrected Content-Type header
  res.send(response);
});



module.exports = router;

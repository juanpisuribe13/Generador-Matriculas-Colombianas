municipalities = {
  "0": "   AGUAZUL",
  "1": "   BARBOSA",
  "2": "    BELLO",
  "3": " BOGOTA D.C.",
  "4": "BUCARAMANGA",
  "5": "     CALI",
  "6": "  COLOMBIA",
  "7": "   CUCUTA",
  "8": "   ENVIGADO",
  "9": "FLORIDABLANCA",
  "10": "  MANIZALES",
  "11": "   MEDELLIN",
  "12": "   PEREIRA",
  "13": "    QUIBDO",
  "14": "   PEREIRA",
  "15": "   RIOSUCIO",
  "16": "  SABANETA",
  "17": "S. ANDRES ISLA",
  "18": "   SOCORRO"
}
// don't ask why i didn't made this into a json file

function getMunicipality() {
	while (true) {
		i = 0
		while (true) {
			x = municipalities[i]
			i++
			if (x === undefined) {
				i--
				break
			}
		}
		// scans the length of the municipalities array
		
		if (municipalities[Math.floor(Math.random() * i)] === "undefined") {
			continue;
		}
		
		muns = municipalities[Math.floor(Math.random() * i)]
		return muns.trim()
	}
}

function getLicenseNumber() {
    nums = ""
    for (var i = 0; i < 3; i++) {
        num = Math.floor(Math.random() * 9)
        nums = nums + num
    }

    alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let_len = alphabet.length

    letters = ""
    for (var i = 0; i < 3; i++) {
		if (i === 0) {
			console.log(let_len)
			min = let_len - 8
			max = let_len - 3
			pickedLetter = alphabet[Math.floor(Math.random() * (max - min)) + min]
		}
		else {
			pickedLetter = alphabet[Math.floor(Math.random() * let_len)]
		}
        letters = letters + pickedLetter
    }

	LicenseNumber = ""
    LicenseNumber = LicenseNumber.concat(letters, "-", nums)
    return LicenseNumber
}

function getIMG() {
	imgURL = ""
	imgURL = imgURL.concat("https://matriculasdelmundo.com/gCOL1.php?textCOL1=", letters + nums, "&textCOL10=", muns)
	return imgURL
}
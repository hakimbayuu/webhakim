document.addEventListener("DOMContentLoaded", function () {
  const hurufHijaiyah = [
    { arabic: "ا", latin: "Alif" },
    { arabic: "ب", latin: "Ba" },
    { arabic: "ت", latin: "Ta" },
    { arabic: "ث", latin: "Tsa" },
    { arabic: "ج", latin: "Jim" },
    { arabic: "ح", latin: "Ha" },
    { arabic: "خ", latin: "Kho" },
    { arabic: "د", latin: "Dal" },
    { arabic: "ذ", latin: "Dza" },
    { arabic: "ر", latin: "Ro" },
    { arabic: "ز", latin: "Zay" },
    { arabic: "س", latin: "Sin" },
    { arabic: "ش", latin: "Syin" },
    { arabic: "ص", latin: "Shod" },
    { arabic: "ض", latin: "Dhod" },
    { arabic: "ط", latin: "Tho" },
    { arabic: "ظ", latin: "Dzo" },
    { arabic: "ع", latin: "`Ain" },
    { arabic: "غ", latin: "Ghoin" },
    { arabic: "ف", latin: "Fa" },
    { arabic: "ق", latin: "Qof" },
    { arabic: "ك", latin: "Kaf" },
    { arabic: "ل", latin: "Lam" },
    { arabic: "م", latin: "Mim" },
    { arabic: "ن", latin: "Nun" },
    { arabic: "ه", latin: "Ha" },
    { arabic: "و", latin: "Waw" },
    { arabic: "ي", latin: "Ya" },
    { arabic: "ء", latin: "Hamzah" },
  ];

  let fragmentHurufHijaiyah = "";

  hurufHijaiyah.forEach((huruf) => {
    fragmentHurufHijaiyah += `
            <div class="col">
                <div class="huruf p-4 text-center">
                    <div>
                        <h1 class="arabic">${huruf.arabic}</h1>
                        <h4 class="latin mb-1">${huruf.latin}</h4>
                    </div>
                </div>
            </div>
        `;
  });

  document.querySelector(".huruf-hijaiyah .container").innerHTML =
    fragmentHurufHijaiyah;
});

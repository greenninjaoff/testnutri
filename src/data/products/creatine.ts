export const creatine = {
  id: 8,
  baseName: "Creatine Monohydrate Unflavoured",
  category: "creatine",
  type: "Protein Powder",
  series: "Creatine",
  netWeightOptions: ["300g"],

  variants: [
    {
      sku: "creatine-300g-unflavoured",
      netWeight: "300g",
      flavorKey: "Unflavoured",
      price: 100000,
      image: "/products/creatine-unflavoured.png",

      i18n: {
        ru: {
          name: "Креатин моногидрат без вкуса, 300 г",
          description:
            "Неароматизированный порошок пищевой добавки — креатин моногидрат. Поддерживает увеличение силы и выносливости во время интенсивных тренировок.",
          ingredients:
            "Креатин моногидрат 100%. Произведено на предприятии, производящем продукты, содержащие яйца, глютен, арахис, орехи, сельдерей, рыбу, ракообразных и диоксид серы.",
        },

        uz: {
          name: "Kreatin monogidrat tamsiz, 300 g",
          description:
            "Ta'msiz kreatin monogidrat oziq-ovqat qo'shimchasi kukuni. Kuch va chidamlilikni oshirishga yordam beradi.",
          ingredients:
            "Kreatin monogidrat 100%. Tuxum, glyuten, araxis, yong'oq, selderey, baliq, qisqichbaqasimonlar va oltingugurt dioksidi mahsulotlari ishlab chiqariladigan korxonada ishlab chiqarilgan.",
        },

        en: {
          name: "Creatine Monohydrate Unflavoured, 300g",
          description:
            "Unflavoured creatine monohydrate food supplement powder. Supports increased strength and performance during high-intensity training.",
          ingredients:
            "Creatine monohydrate 100%. Made in a facility that processes egg, gluten, peanuts, nuts, celery, fish, crustacean and sulphur dioxide containing foods.",
        },
      },
    },
  ],
};

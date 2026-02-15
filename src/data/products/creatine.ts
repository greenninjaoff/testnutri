export const creatine = {
    id: 8,
    baseName: "Creatine Monohydrate Unflavoured",
    category: "creatine",
    type: "Protein Powder",
    series: "Creatine",
    netWeightOptions: ["300g"],

    commonI18n: {
        ru: {
            note:
                "WPC+WPI — смесь концентрата и изолята сывороточного протеина. Более высокая «чистота» белка и комфортнее по усвоению для многих людей.",
        },
        uz: {
            note:
                "WPC+WPI — zardob oqsili konsentrati va izolyati aralashmasi. Oqartirish darajasi yuqori va ko‘pchilik uchun yengilroq hazm bo‘ladi.",
        },
        en: {
            note:
                "WPC+WPI — a blend of whey protein concentrate and isolate. Higher protein purity and often easier digestion.",
        },
    },

    variants: [
        // =========================
        // Unflavoured 300g
        // =========================
        {
            sku: "creatine-300g-unflavoured",
            netWeight: "300g",
            flavorKey: "Unflavoured",
            price: null,
            image: "/products/creatine-unflavoured.png",

            i18n: {
                ru: {
                    name: "Креатин моногидрат без вкуса, 300 г",
                    flavorLabel: "Без вкуса",
                    tagline: "Twice the chocolate happiness!",
                    description:
                        "НЕАРОМАТИЗИРОВАННЫЙ ПОРОШОК ПИЩЕВОЙ ДОБАВКИ КРЕАТИН МОНОГИДРАТ.",
                    usage:
                        "РЕКОМЕНДАЦИИ ПО ПРИМЕНЕНИЮ: Смешайте 1 порцию (3,4 г = ½ мерная ложка) продукта с 300 мл воды в шейкере. Для точного измерения используйте весы. Принимайте 1 порцию в день.",
                    ingredients:
                        "СОСТАВ: Кратин моногидрат 100%. Произведено на предприятии, производящем продукты, содержащие яйца, глютен, арахис, орехи, сельдерей, рыбу, ракообразных и диоксид серы. Хранить в прохладном сухом месте. Срок годности: 24 месяца. Производитель: BioTechUSA Kft. 1033 Будапешт, Huszti út 60., Венгрия. Произведено по эксклюзивному заказу ООО «BEFIT NUTRITION», г. Ташкент, 100052 Мирзо-Улугбекский р-н, ул. Буюк Ипак Йули, 10Б.",
                },

                uz: {
                    name: "Kreatin monogidrat tamsiz, 300 g",
                    flavorLabel: "Tamsiz",
                    tagline: "Twice the chocolate happiness!",
                    description:
                        "TA'MSIZ KREATIN MONOGIDRAT OZIQ-OVQAT QO'SHIMCHASI ICHIMLIK KUKUNI.",
                    usage:
                        "TAVSIYA ETILGAN FOYDALANISH USULI: 1 portsiya (3,4 g = ½ qoshiq) mahsulotni 300 ml suv bilan silkitgich idishida aralashtiring. Aniq o'lchash uchun tarozidan foydalaning. Kuniga 1 portsiya qabul qiling.",
                    ingredients:
                        "TARKIBI: Kreatin monogidrat 100%. Tuxum, glyuten, araxis, yong'oq, selderey, baliq, qisqichbaqasimonlar va oltingugurt dioksidi mahsulotlarini ishlab chiqaradigan zavodda ishlab chiqarilgan. Mahsulotni salqin va quruq joyda saqlang. Saqlash muddati: 24 oy. Ishlab chiqaruvchi: BioTechUSA Kft. 1033 Budapesht, Huszti út 60., Vengriya. “BEFIT NUTRITION” MChJ eksklyuziv buyurtma asosida ishlab chiqarilgan. Toshkent shahri, 100052, Mirzo-Ulug'bek tumani, Buyuk Ipak yo'li ko'chasi, 10B.",
                },

                en: {
                    name: "Creatine Monohydrate Unflavoured, 300 g",
                    flavorLabel: "Unflavoured",
                    tagline: "Twice the chocolate happiness!",
                    description:
                        "UNFLAVOURED CREATINE MONOHYDRATE FOOD SUPPLEMENT DRINK POWDER.",
                    usage:
                        "RECOMMENDED USE: Mix 1 serving (3.4 g = ½ scoop) product with 300 ml water in a shaker bottle. For accurate measurement, use a scale. Take 1 serving daily.",
                    ingredients:
                        "INGREDIENTS: Creatine monohydrate 100%. Made in a plant that manufactures egg, gluten, peanuts, nuts, celery, fish, crustacean and sulphur dioxide containing foods. Store product in a cool dry place. Shelf life: 24 months. Manufacturer: Distributed by BioTechUSA Kft. 1033 Budapest, Huszti út 60., Hungary. Produced under an exclusive order from “BEFIT NUTRITION” LLC, Tashkent, 100052 Mirzo-Ulugbek district, Buyuk Ipak Yuli street, 10B.",
                },
            },
        },
    ],
};

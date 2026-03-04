export const multivitamins = {
    id: 7,
    baseName: "Befit Nutrition Multivitamins",
    category: "Multivitamins",
    type: "Tablets",
    series: "Vitamins",
    netWeightOptions: ["180 tablets"],

    variants: [
        // ===============================
        // 1) WOMEN
        // ===============================
        {
            sku: "multivitamins-women-180",
            netWeight: "180 tablets",
            flavorKey: "Women",
            price: 440000,
            image: "/products/multivitamins-women.png",

            i18n: {
                ru: {
                    name: "Мультивитамины для женщин",
                    typeName: "Мультивитаминный комплекс",
                    flavorLabel: "Для женщин",
                    description:
                        "Комплекс мультивитаминов для женщин с витаминами A, B, C, D3, L-карнитином и натуральными экстрактами. Поддерживают энергию, иммунитет, гормональный баланс и женское здоровье.",
                    ingredients:
                        "Витамины группы A, B, множество витаминов, таких как C, D3, Л карнитин, оксид цинка, клюква, ежевика, экстракт гинкго билоба, экстракт зеленого чая и другие полезные вещества... (полный текст из docx)",
                },

                uz: {
                    name: "Ayollar uchun multivitaminlar",
                    typeName: "Multivitamin kompleksi",
                    flavorLabel: "Ayollar uchun",
                    description:
                        "A, B, C, D3 vitaminlari, L-karnitin va tabiiy ekstraktlarga ega ayollar uchun multivitaminli kompleks. Energiya, immunitet, gormonal muvozanat va ayollar salomatligini qo'llab-quvvatlaydi.",
                    ingredients:
                        "A, B guruh vitaminlari, C, D3 kabi ko’plab vitaminlar, L-karnitin, rux oksidi, klyukva, chernika, ginkgo biloba ekstrakti, ko’k choy ekstrakti va boshqa foydali moddalar... (docx dagi to‘liq matnni qoldiring)",
                },

                en: {
                    name: "Multivitamins for Women",
                    typeName: "Multivitamin Complex",
                    flavorLabel: "Women",
                    description:
                        "A multivitamin complex for women with vitamins A, B, C, D3, L-carnitine, and natural extracts. Supports energy, immunity, hormonal balance, and feminine health.",
                    ingredients:
                        "Vitamins A, B, many vitamins such as C, D3, L-carnitine, zinc oxide, cranberry, blackberry, ginkgo biloba extract, green tea extract and other beneficial substances... (keep full docx text)",
                },
            },
        },

        // ===============================
        // 2) MEN
        // ===============================
        {
            sku: "multivitamins-men-180",
            netWeight: "180 tablets",
            flavorKey: "Men",
            price: 440000,
            image: "/products/multivitamins-men.png",

            i18n: {
                ru: {
                    name: "Мультивитамины для мужчин",
                    typeName: "Мультивитаминный комплекс",
                    flavorLabel: "Для мужчин",
                    description:
                        "Комплекс мультивитаминов для мужчин с аминокислотами, женьшенем, гинкго и цинком. Повышает уровень энергии, поддерживает здоровье сердца, иммунитет и половую функцию.",
                    ingredients:
                        "Витамины А, В, множество витаминов, таких как С, D3, множество аминокислот, таких как лейцин, валин, изолейцин, оксид цинка, клюква, экстракт гинкго билоба, экстракт корня женьшеня... (полный текст из docx)",
                },

                uz: {
                    name: "Erkaklar uchun multivitaminlar",
                    typeName: "Multivitamin kompleksi",
                    flavorLabel: "Erkaklar uchun",
                    description:
                        "Aminokislotalar, jenshen, ginkgo va sink bilan boyitilgan erkaklar uchun multivitaminli kompleks. Energiya darajasini oshiradi, yurak sog'ligini va immunitetni qo'llab-quvvatlaydi.",
                    ingredients:
                        "A, B guruh vitaminlari, C, D3 kabi ko'plab vitaminlar, leysin, valin, izoleysin kabi aminokislotalar, rux oksidi, klyukva, ginkgo biloba ekstrakti, jenshen ildizi ekstrakti... (docx to‘liq matn)",
                },

                en: {
                    name: "Multivitamins for Men",
                    typeName: "Multivitamin Complex",
                    flavorLabel: "Men",
                    description:
                        "Multivitamin complex for men with amino acids, ginseng, ginkgo, and zinc. Supports energy, heart health, immunity, and performance.",
                    ingredients:
                        "Vitamins A, B, many vitamins such as C, D3, amino acids such as leucine, valine, isoleucine, zinc oxide, cranberry, ginkgo biloba extract, ginseng root extract... (full docx text)",
                },
            },
        },
    ],
};
export const bcaa = {
    id: 5,
    baseName: "Befit Nutrition BCAA",
    category: "bcaa",
    type: "Powder",
    series: "BCAA",
    netWeightOptions: ["300g", "700g"],

    commonI18n: {
        ru: {
            note:
                "BCAA — аминокислоты с разветвлённой цепью (лейцин, изолейцин, валин), способствуют восстановлению после тренировок и поддержке мышечной массы.",
        },
        uz: {
            note:
                "BCAA — tarmoqlangan aminokislotalar (leytsin, izoleytsin, valin), mashg‘ulotlardan keyingi tiklanish va mushak massasini qo‘llab-quvvatlaydi.",
        },
        en: {
            note:
                "BCAA — branched-chain amino acids (leucine, isoleucine, valine) that support recovery and muscle maintenance.",
        },
    },

    variants: [
        // ===============================
        // 700g Peach Ice Tea
        // ===============================
        {
            sku: "bcaa-peach-ice-tea",
            netWeight: "700g",
            flavorKey: "Peach_Ice_Tea",
            price: null,
            image: "/products/bcaa-peach-ice-tea.png",

            i18n: {
                ru: {
                    name: "BCAA Персик Ледяной Чай",
                    flavorLabel: "Персик и ледяной чай",
                    tagline: "Восстановление и освежающий вкус.",
                    description:
                        "Порошок для приготовления напитка с аминокислотами BCAA. Помогает поддерживать восстановление после интенсивных тренировок, снижать усталость и поддерживать мышечную выносливость. Освежающий вкус персика и холодного чая делает приём особенно приятным.",
                    usage:
                        "Смешайте 1 порцию (7 г = ¾ мерной ложки) с 300 мл воды. Принимайте 1 раз в день или по рекомендации специалиста.",
                    ingredients:
                        "L-лейцин 36%, кислоты (лимонная кислота, яблочная кислота), L-изолейцин 18%, L-валин 18%, ароматизаторы, подсластители (ацесульфам К, сукралоза), краситель (аммиачная карамель). Произведено на предприятии, производящем продукты, содержащие яйца, глютен, арахис, орехи, сельдерей, рыбу, ракообразных и диоксид серы. Хранить в прохладном сухом месте. Срок годности: 24 месяца. Производитель: BioTechUSA Kft. 1033 Будапешт, Huszti út 60., Венгрия. Произведено по эксклюзивному заказу ООО «BEFIT NUTRITION», г. Ташкент, 100052 Мирзо-Улугбекский р-н, ул. Буюк Ипак Йули, 10Б.",
                },

                uz: {
                    name: "BCAA Shaftoli Muzli Choy",
                    flavorLabel: "Shaftoli va muzli choy",
                    tagline: "Tiklanish va tetiklantiruvchi ta’m.",
                    description:
                        "BCAA aminokislotalari asosidagi ichimlik tayyorlash uchun kukun. Kuchli mashg‘ulotlardan keyin tiklanishni qo‘llab-quvvatlaydi, charchoqni kamaytirishga yordam beradi va mushak chidamliligini saqlaydi.",
                    usage:
                        "1 porsiyani (7 g = ¾ o‘lchov qoshiq) 300 ml suv bilan aralashtiring. Kuniga 1 marta yoki mutaxassis tavsiyasiga ko‘ra qabul qiling.",
                    ingredients:
                        "L-leytsin 36%, kislotalar (limon kislotasi, olma kislotasi), L-izoleytsin 18%, L-valin 18%, xushbo'ylashtiruvchilar, shirinlashtiruvchilar (atsesulfam K, sukraloza), rang beruvchi (ammiak karamel). Tuxum, glyuten, araxis, yong'oq, selderey, baliq, qisqichbaqasimonlar va oltingugurt dioksidi mahsulotlarini ishlab chiqaradigan zavodda ishlab chiqarilgan. Mahsulotni salqin va quruq joyda saqlang. Saqlash muddati: 24 oy. Ishlab chiqaruvchi: BioTechUSA Kft. 1033 Budapesht, Huszti út 60., Vengriya. “BEFIT NUTRITION” MChJ eksklyuziv buyurtma asosida ishlab chiqarilgan. Toshkent shahri, 100052, Mirzo-Ulug'bek tumani, Buyuk Ipak yo'li ko'chasi, 10B.",
                },

                en: {
                    name: "BCAA Peach Ice Tea",
                    flavorLabel: "Peach Ice Tea",
                    tagline: "Recovery with a refreshing taste.",
                    description:
                        "A BCAA-based powdered drink mix. Helps support recovery after intense workouts, reduce fatigue, and maintain muscle endurance. Refreshing peach iced tea flavor makes it enjoyable to consume.",
                    usage:
                        "Mix 1 serving (7 g = ¾ scoop) with 300 ml of water. Take once daily or as directed by a specialist.",
                    ingredients:
                        "L-Leucine 36%, acids (citric acid, malic acid), L-Isoleucine 18%, L-Valine 18%, flavourings, sweeteners (acesulfame K, sucralose), colour (ammonia caramel). Made in a plant that manufactures egg, gluten, peanuts, nuts, celery, fish, crustacean and sulphur dioxide containing foods. Store product in a cool dry place. Shelf life: 24 months. Manufacturer: Distributed by BioTechUSA Kft. 1033 Budapest, Huszti út 60., Hungary. Produced under an exclusive order from “BEFIT NUTRITION” LLC, Tashkent, 100052 Mirzo-Ulugbek district, Buyuk Ipak Yuli street, 10B.",
                },
            },
        },

        // ===============================
        // 300g Apple
        // ===============================
        {
            sku: "bcaa-apple",
            netWeight: "300g",
            flavorKey: "Apple",
            price: null,
            image: "/products/bcaa-apple.png",

            i18n: {
                ru: {
                    name: "BCAA Apple",
                    flavorLabel: "Яблочный",
                    tagline: "Восстановление и освежающий вкус.",
                    description:
                        "Порошок для приготовления напитка с аминокислотами BCAA. Помогает поддерживать восстановление после интенсивных тренировок и снижать усталость.",
                    usage:
                        "Смешайте 1 порцию (7 г = ¾ мерной ложки) с 300 мл воды. Принимайте 1 раз в день.",
                    ingredients:
                        "L-лейцин 36%, кислоты (лимонная кислота, яблочная кислота), L-изолейцин 18%, L-валин 18%, ароматизатор, подсластители (ацесульфам К, сукралоза), красители (сульфитно-аммиачная карамель, рибофлавины). Произведено на предприятии, производящем продукты, содержащие яйца, глютен, арахис, орехи, сельдерей, рыбу, ракообразных и диоксид серы. Хранить в прохладном сухом месте. Срок годности: 24 месяца. Производитель: BioTechUSA Kft. 1033 Будапешт, Huszti út 60., Венгрия. Произведено по эксклюзивному заказу ООО «BEFIT NUTRITION», г. Ташкент, 100052 Мирзо-Улугбекский р-н, ул. Буюк Ипак Йули, 10Б.",
                },

                uz: {
                    name: "BCAA Olma",
                    flavorLabel: "Olma",
                    tagline: "Tiklanish va tetiklantiruvchi ta’m.",
                    description:
                        "BCAA aminokislotalari asosidagi ichimlik kukuni. Mashg‘ulotdan keyingi tiklanishni qo‘llab-quvvatlaydi.",
                    usage:
                        "1 porsiyani 300 ml suv bilan aralashtiring. Kuniga 1 marta qabul qiling.",
                    ingredients:
                        "L-leytsin 36%, kislotalar (limon kislotasi, olma kislotasi), L-izoleytsin 18%, L-valin 18%, xushbo'ylashtiruvchi, shirinlashtiruvchilar (atsesulfam K, sukraloza), rang beruvchilar (sulfit ammiak karamel, riboflavinlar). Tuxum, glyuten, araxis, yong'oq, selderey, baliq, qisqichbaqasimonlar va oltingugurt dioksidi mahsulotlarini ishlab chiqaradigan zavodda ishlab chiqarilgan. Mahsulotni salqin va quruq joyda saqlang. Saqlash muddati: 24 oy. Ishlab chiqaruvchi: BioTechUSA Kft. 1033 Budapesht, Huszti út 60., Vengriya. “BEFIT NUTRITION” MChJ eksklyuziv buyurtma asosida ishlab chiqarilgan. Toshkent shahri, 100052, Mirzo-Ulug'bek tumani, Buyuk Ipak yo'li ko'chasi, 10B.",
                },

                en: {
                    name: "BCAA Apple",
                    flavorLabel: "Apple",
                    tagline: "Recovery with refreshing taste.",
                    description:
                        "BCAA powdered drink mix that supports recovery and reduces fatigue.",
                    usage:
                        "Mix 1 serving with 300 ml of water. Take once daily.",
                    ingredients:
                        "L-Leucine 36%, acids (citric acid, malic acid), L-Isoleucine 18%, L-Valine 18%, flavouring, sweeteners (acesulfame K, sucralose), colours (sulphite ammonia caramel, riboflavins). Made in a plant that manufactures egg, gluten, peanuts, nuts, celery, fish, crustacean and sulphur dioxide containing foods. Store product in a cool dry place. Shelf life: 24 months. Manufacturer: Distributed by BioTechUSA Kft. 1033 Budapest, Huszti út 60., Hungary. Produced under an exclusive order from “BEFIT NUTRITION” LLC, Tashkent, 100052 Mirzo-Ulugbek district, Buyuk Ipak Yuli street, 10B.",
                },
            },
        },
    ],
};

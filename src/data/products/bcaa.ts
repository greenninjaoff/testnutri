export const bcaa = {
    id: 5,
    baseName: "Befit Nutrition BCAA",
    category: "bcaa",
    type: "Powder",
    series: "BCAA",
    netWeightOptions: ["300g", "700g"],

    variants: [
        // ===============================
        // 700g Peach Ice Tea
        // ===============================
        {
            sku: "bcaa-peach-ice-tea-700g",
            netWeight: "700g",
            flavorKey: "Peach_Ice_Tea",
            price: 100000,
            image: "/products/bcaa-peach-ice-tea.png",

            i18n: {
                ru: {
                    name: "BCAA Персик Ледяной Чай, 700 г",
                    description:
                        "Порошок для приготовления напитка с аминокислотами BCAA. Поддерживает восстановление после интенсивных тренировок, снижает усталость и помогает сохранять мышечную выносливость.",
                    ingredients:
                        "L-лейцин 36%, кислоты (лимонная кислота, яблочная кислота), L-изолейцин 18%, L-валин 18%, ароматизаторы, подсластители (ацесульфам К, сукралоза), краситель (аммиачная карамель).",
                },

                uz: {
                    name: "BCAA Shaftoli Muzli Choy, 700 g",
                    description:
                        "BCAA aminokislotalari asosidagi ichimlik kukuni. Kuchli mashg‘ulotlardan keyingi tiklanishni qo‘llab-quvvatlaydi va mushak chidamliligini saqlashga yordam beradi.",
                    ingredients:
                        "L-leytsin 36%, kislotalar (limon kislotasi, olma kislotasi), L-izoleytsin 18%, L-valin 18%, xushbo'ylashtiruvchilar, shirinlashtiruvchilar (atsesulfam K, sukraloza), rang beruvchi (ammiak karamel).",
                },

                en: {
                    name: "BCAA Peach Ice Tea, 700g",
                    description:
                        "BCAA powdered drink mix that supports recovery after intense workouts, reduces fatigue and helps maintain muscle endurance.",
                    ingredients:
                        "L-Leucine 36%, acids (citric acid, malic acid), L-Isoleucine 18%, L-Valine 18%, flavourings, sweeteners (acesulfame K, sucralose), colour (ammonia caramel).",
                },
            },
        },

        // ===============================
        // 300g Apple
        // ===============================
        {
            sku: "bcaa-apple-300g",
            netWeight: "300g",
            flavorKey: "Apple",
            price: 100000,
            image: "/products/bcaa-apple.png",

            i18n: {
                ru: {
                    name: "BCAA Яблоко, 300 г",
                    description:
                        "Порошок для приготовления напитка с аминокислотами BCAA. Поддерживает восстановление после тренировок и способствует снижению усталости.",
                    ingredients:
                        "L-лейцин 36%, кислоты (лимонная кислота, яблочная кислота), L-изолейцин 18%, L-валин 18%, ароматизатор, подсластители (ацесульфам К, сукралоза), красители (сульфитно-аммиачная карамель, рибофлавины).",
                },

                uz: {
                    name: "BCAA Olma, 300 g",
                    description:
                        "BCAA aminokislotalari asosidagi ichimlik kukuni. Mashg‘ulotdan keyingi tiklanishni qo‘llab-quvvatlaydi va charchoqni kamaytirishga yordam beradi.",
                    ingredients:
                        "L-leytsin 36%, kislotalar (limon kislotasi, olma kislotasi), L-izoleytsin 18%, L-valin 18%, xushbo'ylashtiruvchi, shirinlashtiruvchilar (atsesulfam K, sukraloza), rang beruvchilar (sulfit ammiak karamel, riboflavinlar).",
                },

                en: {
                    name: "BCAA Apple, 300g",
                    description:
                        "BCAA powdered drink mix that supports recovery and helps reduce fatigue.",
                    ingredients:
                        "L-Leucine 36%, acids (citric acid, malic acid), L-Isoleucine 18%, L-Valine 18%, flavouring, sweeteners (acesulfame K, sucralose), colours (sulphite ammonia caramel, riboflavins).",
                },
            },
        },
    ],
};

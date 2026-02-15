export const wpc = {
    id: 3,
    baseName: "Befit Nutrition Whey Protein Concentrate",
    category: "wpc",
    type: "Protein Powder",
    series: "Sachet",
    netWeightOptions: ["30g"],

    commonI18n: {
        ru: {
            note:
                "Whey Protein Concentrate (WPC) — напиток на основе сывороточного протеина. Используйте как удобную порционную добавку после тренировки или в течение дня.",
        },
        uz: {
            note:
                "Whey Protein Concentrate (WPC) — zardob oqsili asosidagi ichimlik kukuni. Mashg‘ulotdan keyin yoki kun davomida qulay porsiyali qo‘shimcha sifatida foydalaning.",
        },
        en: {
            note:
                "Whey Protein Concentrate (WPC) — a whey-based drink powder. A convenient single-serving option post-workout or during the day.",
        },
    },

    variants: [
        // =========================
        // Coffee Latte
        // =========================
        {
            sku: "wpc-30g-coffee-latte",
            netWeight: "30g",
            flavorKey: "Coffee_Latte",
            price: null,
            image: "/products/wpc-coffee-latte.png",

            i18n: {
                ru: {
                    name: "Whey Protein Concentrate (WPC) Coffee Latte Flavor, sachet 30 г",
                    flavorLabel: "Кофе латте",
                    description:
                        "Концентрат сывороточного протеина — порошок для напитка со вкусом кофе латте с концентратом сывороточного протеина, аминокислотами, растворимым кофе, сахаром и подсластителями.",
                    ingredients:
                        "СОСТАВ: быстрорастворимый концентрат сывороточного белка (молоко) {концентрат сывороточного белка (молоко), эмульгатор [лецитины (соя)]} 87%, L-глутамин 5,5%, ароматизаторы (содержат кофеин), гидрохлорид L-аргинина 2,0%, растворимый кофе 1,0%, соль, загуститель (ксантановая жевательная резинка), подсластители (ацесульфам К, сукралоза), краситель (аммиачная карамель). Произведено на предприятии, производящем продукты, содержащие яйца, глютен, арахис, орехи, сельдерей, рыбу, ракообразных и диоксид серы. Хранить в прохладном сухом месте. Срок годности: 24 месяца. Производитель: BioTechUSA Kft. 1033 Будапешт, Huszti út 60., Венгрия. Произведено по эксклюзивному заказу ООО «BEFIT NUTRITION», г. Ташкент, 100052 Мирзо-Улугбекский р-н, ул. Буюк Ипак Йули, 10Б.",
                    usage:
                        "РЕКОМЕНДАЦИИ ПО ПРИМЕНЕНИЮ: Смешайте 1 порцию (30 г = ¾ мерная ложка) продукта с 250 мл воды в шейкере. Для точного измерения используйте весы. Принимайте 2 порции в день.",
                },

                uz: {
                    name: "Whey Protein Concentrate (WPC) Latte qahvasi ta’mi, sachet 30 g",
                    flavorLabel: "Latte qahva",
                    description:
                        "Zardob oqsili konsentrati — zardob oqsili konsentrati, aminokislotalar, tez tayyorlanadigan qahva, shakar va shirinlashtiruvchilar qo'shilgan latte qahvasi ta'mli ichimlik kukuni.",
                    ingredients:
                        "TARKIBI: tez tayyorlanadigan zardob oqsili konsentrati (sut) {zardob oqsili konsentrati (sut), emulsifikator [lesitinlar (soya)]} 87%, L-glyutamin 5,5%, xushbo'ylashtiruvchilar (kofein saqlaydi), L-arginin gidroxlorid 2,0%, tez tayyorlanadigan qahva 1,0%, tuz, quyuqlashtiruvchi (ksantan saqichi), shirinlashtiruvchilar (atsesulfam K, sukraloza), rang beruvchi (ammiak karamel). Tuxum, glyuten, araxis, yong'oq, selderey, baliq, qisqichbaqasimonlar va oltingugurt dioksidi mahsulotlarini ishlab chiqaradigan zavodda ishlab chiqarilgan. Mahsulotni salqin va quruq joyda saqlang. Saqlash muddati: 24 oy. Ishlab chiqaruvchi: BioTechUSA Kft. 1033 Budapesht, Huszti út 60., Vengriya. “BEFIT NUTRITION” MChJ eksklyuziv buyurtma asosida ishlab chiqarilgan. Toshkent shahri, 100052, Mirzo-Ulug'bek tumani, Buyuk Ipak yo'li ko'chasi, 10B.",
                    usage:
                        "TAVSIYA ETILGAN FOYDALANISH USULI: 1 portsiya (30 g = ¾ qoshiq) mahsulotni 250 ml suv bilan silkitgich idishida aralashtiring. Aniq o'lchash uchun tarozidan foydalaning. Kuniga 2 portsiya qabul qiling.",
                },

                en: {
                    name: "Whey Protein Concentrate (WPC) Coffee Latte Flavor sachet 30 g",
                    flavorLabel: "Coffee Latte",
                    description:
                        "Whey protein concentrate — caffé latte flavoured drink powder with whey protein concentrate, amino acids, instant coffee, sugar and sweeteners.",
                    ingredients:
                        "INGREDIENTS: instant whey protein concentrate (milk) {whey protein concentrate (milk), emulsifier [lecithins (soy)]} 87%, L-Glutamine 5.5%, flavourings (contains caffeine), L-Arginine hydrochloride 2.0%, instant coffee 1.0%, salt, thickener (xanthan gum), sweeteners (acesulfame K, sucralose), colour (ammonia caramel). Made in a plant that manufactures egg, gluten, peanuts, nuts, celery, fish, crustacean and sulphur dioxide containing foods. Store product in a cool dry place. Shelf life: 24 months. Manufacturer: Distributed by BioTechUSA Kft. 1033 Budapest, Huszti út 60., Hungary. Produced under an exclusive order from “BEFIT NUTRITION” LLC, Tashkent, 100052 Mirzo-Ulugbek district, Buyuk Ipak Yuli street, 10B.",
                    usage:
                        "RECOMMENDED USE: Mix 1 serving (30 g = ¾ scoop) product with 250 ml water in a shaker bottle. For accurate measurement, use a scale. Take 2 servings daily.",
                },
            },
        },

        // =========================
        // Hazelnut
        // =========================
        {
            sku: "wpc-30g-hazelnut",
            netWeight: "30g",
            flavorKey: "Hazelnut",
            price: null,
            image: "/products/wpc-hazelnut.png",

            i18n: {
                ru: {
                    name: "Whey Protein Concentrate (WPC) Hazelnut Flavor, sachet 30 г",
                    flavorLabel: "Лесной орех",
                    description:
                        "Концентрат сывороточного протеина — порошок для напитка со вкусом лесного ореха с концентратом сывороточного протеина, аминокислотами и подсластителями.",
                    ingredients:
                        "СОСТАВ: быстрорастворимый концентрат сывороточного белка (молоко) {концентрат сывороточного белка (молоко), эмульгатор [лецитины (соя)]} 90%, L-глутамин 5,5%, гидрохлорид L-аргинина 2,0%, ароматизаторы, соль, загуститель (ксантановая жевательная резинка), подсластители (ацесульфам К, сукралоза), краситель (аммиачная карамель). Произведено на предприятии, производящем продукты, содержащие яйца, глютен, арахис, орехи, сельдерей, рыбу, ракообразных и диоксид серы. Хранить в прохладном сухом месте. Срок годности: 24 месяца. Производитель: BioTechUSA Kft. 1033 Будапешт, Huszti út 60., Венгрия. Произведено по эксклюзивному заказу ООО «BEFIT NUTRITION», г. Ташкент, 100052 Мирзо-Улугбекский р-н, ул. Буюк Ипак Йули, 10Б.",
                    usage:
                        "РЕКОМЕНДАЦИИ ПО ПРИМЕНЕНИЮ: Смешайте 1 порцию (30 г = ¾ мерная ложка) продукта с 250 мл воды в шейкере. Для точного измерения используйте весы. Принимайте 2 порции в день.",
                },

                uz: {
                    name: "Whey Protein Concentrate (WPC) O‘rmon yong‘og‘i ta’mi, sachet 30 g",
                    flavorLabel: "O‘rmon yong‘og‘i",
                    description:
                        "Zardob oqsili konsentrati — zardob oqsili konsentrati, aminokislotalar va shirinlashtiruvchilar qo'shilgan o’rmon yong’og’i ta'mli ichimlik kukuni.",
                    ingredients:
                        "TARKIBI: tez tayyorlanadigan zardob oqsili konsentrati (sut) {zardob oqsili konsentrati (sut), emulsifikator [lesitinlar (soya)]} 90%, L-glyutamin 5,5%, L-arginin gidroxlorid 2,0%, xushbo'ylashtiruvchilar, tuz, quyuqlashtiruvchi (ksantan saqichi), shirinlashtiruvchilar (atsesulfam K, sukraloza), rang beruvchi (ammiak karamel). Tuxum, glyuten, araxis, yong'oq, selderey, baliq, qisqichbaqasimonlar va oltingugurt dioksidi mahsulotlarini ishlab chiqaradigan zavodda ishlab chiqarilgan. Mahsulotni salqin va quruq joyda saqlang. Saqlash muddati: 24 oy. Ishlab chiqaruvchi: BioTechUSA Kft. 1033 Budapesht, Huszti út 60., Vengriya. “BEFIT NUTRITION” MChJ eksklyuziv buyurtma asosida ishlab chiqarilgan. Toshkent shahri, 100052, Mirzo-Ulug'bek tumani, Buyuk Ipak yo'li ko'chasi, 10B.",
                    usage:
                        "TAVSIYA ETILGAN FOYDALANISH USULI: 1 portsiya (30 g = ¾ qoshiq) mahsulotni 250 ml suv bilan silkitgich idishida aralashtiring. Aniq o'lchash uchun tarozidan foydalaning. Kuniga 2 portsiya qabul qiling.",
                },

                en: {
                    name: "Whey Protein Concentrate (WPC) Hazelnut Flavor sachet 30 g",
                    flavorLabel: "Hazelnut",
                    description:
                        "Whey protein concentrate — hazelnut flavoured drink powder with whey protein concentrate, amino acids and sweeteners.",
                    ingredients:
                        "INGREDIENTS: instant whey protein concentrate (milk) {whey protein concentrate (milk), emulsifier [lecithins (soy)]} 90%, L-Glutamine 5.5%, L-Arginine hydrochloride 2.0%, flavourings, salt, thickener (xanthan gum), sweeteners (acesulfame K, sucralose), colour (ammonia caramel). Made in a plant that manufactures egg, gluten, peanuts, nuts, celery, fish, crustacean and sulphur dioxide containing foods. Store product in a cool dry place. Shelf life: 24 months. Manufacturer: Distributed by BioTechUSA Kft. 1033 Budapest, Huszti út 60., Hungary. Produced under an exclusive order from “BEFIT NUTRITION” LLC, Tashkent, 100052 Mirzo-Ulugbek district, Buyuk Ipak Yuli street, 10B.",
                    usage:
                        "RECOMMENDED USE: Mix 1 serving (30 g = ¾ scoop) product with 250 ml water in a shaker bottle. For accurate measurement, use a scale. Take 2 servings daily.",
                },
            },
        },

        // =========================
        // Cookies & Cream
        // =========================
        {
            sku: "wpc-30g-cookies-cream",
            netWeight: "30g",
            flavorKey: "Cookies_Cream",
            price: null,
            image: "/products/wpc-cookies-cream.png",

            i18n: {
                ru: {
                    name: "Whey Protein Concentrate (WPC) Cookies & Cream Flavor, sachet 30 г",
                    flavorLabel: "Печенье и сливки",
                    description:
                        "Концентрат сывороточного протеина — порошок для напитка со вкусом печенья и сливок с концентратом сывороточного протеина, аминокислотами и подсластителями.",
                    ingredients:
                        "СОСТАВ: быстрорастворимый концентрат сывороточного белка (молоко) {концентрат сывороточного белка (молоко), эмульгатор [лецитины (соя)]} 89%, L-глутамин 5,5%, ароматизаторы (содержат кофеин), гидрохлорид L-аргинина 2,0%, соль, загуститель (ксантановая жевательная резинка), подсластители (ацесульфам К, сукралоза), краситель (сульфитно-аммиачная карамель). Произведено на предприятии, производящем продукты, содержащие яйца, глютен, арахис, орехи, сельдерей, рыбу, ракообразных и диоксид серы. Хранить в прохладном сухом месте. Срок годности: 24 месяца. Производитель: BioTechUSA Kft. 1033 Будапешт, Huszti út 60., Венгрия. Произведено по эксклюзивному заказу ООО «BEFIT NUTRITION», г. Ташкент, 100052 Мирзо-Улугбекский р-н, ул. Буюк Ипак Йули, 10Б.",
                    usage:
                        "РЕКОМЕНДАЦИИ ПО ПРИМЕНЕНИЮ: Смешайте 1 порцию (30 г = ¾ мерная ложка) продукта с 250 мл воды в шейкере. Для точного измерения используйте весы. Принимайте 2 порции в день.",
                },

                uz: {
                    name: "Whey Protein Concentrate (WPC) Pechene va qaymoq ta’mi, sachet 30 g",
                    flavorLabel: "Pechene va qaymoq",
                    description:
                        "Zardob oqsili konsentrati — zardob oqsili konsentrati, aminokislotalar va shirinlashtiruvchilar qo'shilgan pechene va qaymoq ta'mli ichimlik kukuni.",
                    ingredients:
                        "TARKIBI: tez tayyorlanadigan zardob oqsili konsentrati (sut) {zardob oqsili konsentrati (sut), emulsifikator [lesitinlar (soya)]} 89%, L-glyutamin 5,5%, xushbo'ylashtiruvchilar (kofein saqlaydi), L-arginin gidroxlorid 2,0%, tuz, quyuqlashtiruvchi (ksantan saqichi), shirinlashtiruvchilar (atsesulfam K, sukraloza), rang beruvchi (sulfit ammiak karamel). Tuxum, glyuten, araxis, yong'oq, selderey, baliq, qisqichbaqasimonlar va oltingugurt dioksidi mahsulotlarini ishlab chiqaradigan zavodda ishlab chiqarilgan. Mahsulotni salqin va quruq joyda saqlang. Saqlash muddati: 24 oy. Ishlab chiqaruvchi: BioTechUSA Kft. 1033 Budapesht, Huszti út 60., Vengriya. “BEFIT NUTRITION” MChJ eksklyuziv buyurtma asosida ishlab chiqarilgan. Toshkent shahri, 100052, Mirzo-Ulug'bek tumani, Buyuk Ipak yo'li ko'chasi, 10B.",
                    usage:
                        "TAVSIYA ETILGAN FOYDALANISH USULI: 1 portsiya (30 g = ¾ qoshiq) mahsulotni 250 ml suv bilan silkitgich idishida aralashtiring. Aniq o'lchash uchun tarozidan foydalaning. Kuniga 2 portsiya qabul qiling.",
                },

                en: {
                    name: "Whey Protein Concentrate (WPC) Cookies & Cream Flavor 30 g",
                    flavorLabel: "Cookies & Cream",
                    description:
                        "Whey protein concentrate — cookies & cream flavoured drink powder with whey protein concentrate, amino acids and sweeteners.",
                    ingredients:
                        "INGREDIENTS: instant whey protein concentrate (milk) {whey protein concentrate (milk), emulsifier [lecithins (soy)]} 89%, L-Glutamine 5.5%, flavourings (contains caffeine), L-Arginine hydrochloride 2.0%, salt, thickener (xanthan gum), sweeteners (acesulfame K, sucralose), colour (sulphite ammonia caramel). Made in a plant that manufactures egg, gluten, peanuts, nuts, celery, fish, crustacean and sulphur dioxide containing foods. Store product in a cool dry place. Shelf life: 24 months. Manufacturer: Distributed by BioTechUSA Kft. 1033 Budapest, Huszti út 60., Hungary. Produced under an exclusive order from “BEFIT NUTRITION” LLC, Tashkent, 100052 Mirzo-Ulugbek district, Buyuk Ipak Yuli street, 10B.",
                    usage:
                        "RECOMMENDED USE: Mix 1 serving (30 g = ¾ scoop) product with 250 ml water in a shaker bottle. For accurate measurement, use a scale. Take 2 servings daily.",
                },
            },
        },
    ],
};

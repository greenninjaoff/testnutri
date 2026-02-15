export const healthybars = {
    id: 2,
    baseName: "Befit Nutrition Healthy Bar",
    category: "Healthy Bars",
    type: "Healthy Bar",
    series: "Junior",
    netWeightOptions: ["40g"],

    commonI18n: {
        ru: {
            note:
                "Каждый вкус батончиков BEFIT NUTRITION JUNIOR — это сочетание пользы и удовольствия. Найдите свой любимый и добавьте яркие моменты в свой день!",
            contraindications:
                "Противопоказания: индивидуальная непереносимость ингредиентов продукта. Срок годности: до 9 месяцев с даты изготовления, при соблюдении условий хранения. Условия хранения: хранить в защищенном от прямых солнечных лучей месте, при температуре 18±3 °С и относительной влажности воздуха не более 70%. ",
        },
        uz: {
            note:
                "BEFIT NUTRITION JUNIOR batonchiklarining har bir ta’mi foyda va zavqning noyob birikmasidir. Sevimli ta’mingizni toping va kuningizga yorqin lahzalarni qo‘shing!",
            contraindications:
                "Qo’llash mumkin bo’lmagan holatlar: mahsulot tarkibiy qismlariga individual o‘zlashtiraolmaslik. Saqlash muddati: Ishlab chiqarilgan kundan boshlab 9 oygacha, saqlash shartlariga rioya gilinganida. Saqlash shartlari: To'g'ridan-to'g'ri quyosh nurlaridan himoyalangan joyda, 18±3 °C haroratda va nisbiy namlik 70% dan oshmagan sharoitda saqlang.",
        },
        en: {
            note:
                "Each flavor of BEFIT NUTRITION JUNIOR bars is a unique combination of health and pleasure. Find your favorite and add some bright moments to your day!",
            contraindications:
                "Contraindications: individual intolerance to the product ingredients. Shelf life: up to 9 months from the date of manufacture, subject to storage conditions. Storage conditions: store in a place protected from direct sunlight, at a temperature of 18±3 °C and a relative humidity of no more than 70%.",
        },
    },

    variants: [
        // 1) Double Chocolate
        {
            sku: "junior-double-chocolate-40g",
            netWeight: "40g",
            flavorKey: "Double_Chocolate",
            price: 24,
            image: "/products/junior-double-chocolate.png",

            i18n: {
                ru: {
                    name: "Батончик Befit Nutrition Junior Double Chocolate, 40 г",
                    flavorLabel: "Double Chocolate",
                    tagline: "В два раза больше шоколадного счастья!",
                    description:
                        "Когда одного шоколада недостаточно — приходит он. Снаружи — плотная какао-глазурь, внутри — мягкая шоколадная масса. Вкусный перекус и заряд энергии на учёбу, спорт и приключения.",
                    ingredients:
                        "Протеин (концентрат сывороточного белка, концентрат молочного белка), патока, молочно-шоколадная глазурь (подсластитель мальтитол, заменитель масла какао лауринового типа, молоко сухое обезжиренное, какао-порошок, сыворотка сухая молочная деминерализованная, эмульгатор (лецитин соевый), подсластитель (сукралоза), ароматизатор), заменитель молочного жира, вода, натуральный какао порошок, агенты влагоудерживающие (глицерин, сорбитол), эмульгатор (лецитин соевый), регулятор кислотности (лимонная кислота), ароматизатор, соль, антиоксидант (аскорбиновая кислота), консервант (сорбат калия), подсластитель (сукралоза).",
                },
                uz: {
                    name: "Befit Nutrition Junior Ikki karra shokolad batonchigi, 40 g",
                    flavorLabel: "Ikki karra shokolad",
                    tagline: "Ikki karra shokoladli baxt!",
                    description:
                        "Faqat shokolad yetarli bo‘lmaganida — ikki karra shokoladli ta’m yordamga keladi. Tashqarisi qalin kakao qoplama, ichi esa yumshoq shokolad massasi. O‘qish, sport va sarguzashtlar uchun mazali gazak va energiya.",
                    ingredients:
                        "Protein (zardob oqsili konsentrati, sut oqsili konsentrati), patoka, sutli shokolad qoplami (shirinlashtiruvchi maltitol, laurin turdagi kakao moyi o‘rnini bosuvchi, yog‘siz quruq sut, kakao kukuni, demineralizatsiyalangan quruq zardob, emulgator (soya lesitini), shirinlashtiruvchi (sukraloza), xushbo‘y modda), sut yog‘i o‘rnini bosuvchi, suv, tabiiy kakao kukuni, namlikni ushlab turuvchi moddalar (glitserin, sorbitol), emulgator (soya lesitini), kislotalikni tartibga soluvchi (limon kislotasi), xushbo‘y modda, tuz, antioksidant (askorbin kislotasi), konservant (kaliy sorbati), shirinlashtiruvchi (sukraloza).",
                },
                en: {
                    name: "Befit Nutrition Junior Double Chocolate Bar, 40g",
                    flavorLabel: "Double Chocolate",
                    tagline: "Twice the chocolate happiness!",
                    description:
                        "When chocolate alone isn't enough, this one comes in. A dense cocoa coating outside and a soft chocolate filling inside. A tasty snack and an energy boost for studying, sports, and adventures.",
                    ingredients:
                        "Protein (whey protein concentrate, milk protein concentrate), molasses, milk chocolate glaze (sweetener maltitol, lauric cocoa butter substitute, skimmed milk powder, cocoa powder, demineralized whey powder, emulsifier (soy lecithin), sweetener (sucralose), flavoring), milk fat substitute, water, natural cocoa powder, humectants (glycerol, sorbitol), emulsifier (soy lecithin), acidity regulator (citric acid), flavoring, salt, antioxidant (ascorbic acid), preservative (potassium sorbate), sweetener (sucralose).",
                },
            },
        },

        // 2) Strawberries & Cream
        {
            sku: "junior-strawberries-cream-40g",
            netWeight: "40g",
            flavorKey: "Strawberries_and_Cream",
            price: 24,
            image: "/products/junior-strawberries-cream.png",

            i18n: {
                ru: {
                    name: "Батончик Befit Nutrition Junior Strawberries and Cream, 40 г",
                    flavorLabel: "Strawberries & Cream",
                    tagline: "Нежность клубничного удовольствия.",
                    description:
                        "Этот батончик превращает перекус в десерт — мягкий и сладкий, как клубничный пломбир. Вкусно, удобно и отлично подходит для школьных дней.",
                    ingredients:
                        "Протеин (концентрат сывороточного белка, концентрат молочного белка), патока, молочно-шоколадная глазурь (подсластитель мальтитол, заменитель масла какао лауринового типа, молоко сухое обезжиренное, какао-порошок, сыворотка сухая молочная деминерализованная, эмульгатор (лецитин соевый), подсластитель (сукралоза), ароматизатор), клубника, заменитель молочного жира, вода, агенты влагоудерживающие (глицерин, сорбитол), эмульгатор (лецитин соевый), регулятор кислотности (лимонная кислота), ароматизатор, соль, антиокислитель (аскорбиновая кислота), консервант (сорбат калия), подсластитель (сукралоза).",
                },
                uz: {
                    name: "Befit Nutrition Junior Qulupnay va krem batonchigi, 40 g",
                    flavorLabel: "Qulupnay va krem",
                    tagline: "Qulupnay lazzatining nozikligi.",
                    description:
                        "Bu batonchik har bir gazakni shirinlikka aylantiradi — yumshoq va shirin, qulupnayli muzqaymoq kabi. Mazali, qulay va maktab kunlari uchun ideal.",
                    ingredients:
                        "Protein (zardob oqsili konsentrati, sut oqsili konsentrati), patoka, sutli shokolad qoplami (shirinlashtiruvchi maltitol, laurin turdagi kakao moyi o‘rnini bosuvchi, yog‘siz quruq sut, kakao kukuni, demineralizatsiyalangan quruq zardob, emulgator (soya lesitini), shirinlashtiruvchi (sukraloza), xushbo‘y modda), qulupnay, sut yog‘i o‘rnini bosuvchi, suv, namlik saqlovchilar (glitserin, sorbitol), emulgator (soya lesitini), kislotalikni tartibga soluvchi (limon kislotasi), xushbo‘y modda, tuz, antioksidant (askorbin kislotasi), konservant (kaliy sorbati), shirinlashtiruvchi (sukraloza).",
                },
                en: {
                    name: "Befit Nutrition Junior Strawberries & Cream Bar, 40g",
                    flavorLabel: "Strawberries & Cream",
                    tagline: "The delicacy of strawberry delight.",
                    description:
                        "This bar turns every snack into a dessert—soft and sweet like strawberry ice cream. Tasty, convenient, and perfect for school days.",
                    ingredients:
                        "Protein (whey protein concentrate, milk protein concentrate), molasses, milk chocolate glaze (sweetener maltitol, lauric cocoa butter substitute, skimmed milk powder, cocoa powder, demineralized whey powder, emulsifier (soy lecithin), sweetener (sucralose), flavoring), strawberries, milk fat substitute, water, humectants (glycerol, sorbitol), emulsifier (soy lecithin), acidity regulator (citric acid), flavoring, salt, antioxidant (ascorbic acid), preservative (potassium sorbate), sweetener (sucralose).",
                },
            },
        },

        // 3) Pistachio Ice Cream
        {
            sku: "junior-pistachio-ice-cream-40g",
            netWeight: "40g",
            flavorKey: "Pistachio_Ice_Cream",
            price: 24,
            image: "/products/junior-pistachio-ice-cream.png",

            i18n: {
                ru: {
                    name: "Батончик Befit Nutrition Junior Pistachio Ice Cream, 40 г",
                    flavorLabel: "Pistachio Ice Cream",
                    tagline: "Освежающее лакомство каждый день.",
                    description:
                        "Любимый вкус мороженого в новом формате! Фисташка даёт яркий акцент, а сбалансированный состав делает перекус удобным и приятным.",
                    ingredients:
                        "Протеин (концентрат сывороточного белка, концентрат молочного белка), патока, молочно-шоколадная глазурь (подсластитель мальтитол, заменитель масла какао лауринового типа, молоко сухое обезжиренное, какао-порошок, сыворотка сухая молочная деминерализованная, эмульгатор (лецитин соевый), подсластитель (сукралоза), ароматизатор), заменитель молочного жира, вода, фисташки, агенты влагоудерживающие (глицерин, сорбитол), эмульгатор (лецитин соевый), регулятор кислотности (лимонная кислота), ароматизатор, соль, антиокислитель (аскорбиновая кислота), консервант (сорбат калия), натуральный краситель (медные комплексы хлорофиллов), подсластитель (сукралоза).",
                },
                uz: {
                    name: "Befit Nutrition Junior Pista muzqaymoq batonchigi, 40 g",
                    flavorLabel: "Pista muzqaymoq",
                    tagline: "Har kuni tetiklantiruvchi shirin ta’m.",
                    description:
                        "Sevimli muzqaymoq ta’mi endi batonchik formatida! Pista yorqin aksent beradi, muvozanatli tarkib esa gazakni qulay va yoqimli qiladi.",
                    ingredients:
                        "Protein (zardob oqsili konsentrati, sut oqsili konsentrati), patoka, sutli shokolad qoplami (shirinlashtiruvchi maltitol, laurin turdagi kakao moyi o‘rnini bosuvchi, yog‘siz quruq sut, kakao kukuni, demineralizatsiyalangan quruq zardob, emulgator (soya lesitini), shirinlashtiruvchi (sukraloza), aromatizator), sut yog‘i o‘rnini bosuvchi, suv, pista, namlik saqlovchilar (glitserin, sorbitol), emulgator (soya lesitini), kislotalikni tartibga soluvchi (limon kislotasi), aromatizator, tuz, antioksidant (askorbin kislotasi), konservant (kaliy sorbati), tabiiy bo‘yoq (xlorofill mis komplekslari), shirinlashtiruvchi (sukraloza).",
                },
                en: {
                    name: "Befit Nutrition Junior Pistachio Ice Cream Bar, 40g",
                    flavorLabel: "Pistachio Ice Cream",
                    tagline: "A refreshing treat every day.",
                    description:
                        "A favorite ice cream flavor in a new format! Pistachio adds a bright accent, and the balanced composition makes snacking convenient and enjoyable.",
                    ingredients:
                        "Protein (whey protein concentrate, milk protein concentrate), molasses, milk chocolate glaze (sweetener maltitol, lauric cocoa butter substitute, skimmed milk powder, cocoa powder, demineralized whey powder, emulsifier (soy lecithin), sweetener (sucralose), flavoring), milk fat substitute, water, pistachios, humectants (glycerol, sorbitol), emulsifier (soy lecithin), acidity regulator (citric acid), flavoring, salt, antioxidant (ascorbic acid), preservative (potassium sorbate), natural color (copper complexes of chlorophylls), sweetener (sucralose).",
                },
            },
        },

        // 4) Raspberry + Cranberry
        {
            sku: "junior-raspberry-cranberry-40g",
            netWeight: "40g",
            flavorKey: "Raspberry_and_Cranberry",
            price: 24,
            image: "/products/junior-raspberry-cranberry.png",

            i18n: {
                ru: {
                    name: "Батончик Befit Nutrition Junior Raspberry + Cranberry, 40 г",
                    flavorLabel: "Raspberry + Cranberry",
                    tagline: "Ягодная сила каждый день.",
                    description:
                        "Кисло-сладкий дуэт малины и клюквы бодрит и освежает. Отличный выбор в рюкзак или на прогулку — вкусно и удобно.",
                    ingredients:
                        "Протеин (концентрат сывороточного белка, концентрат молочного белка), патока, молочно-шоколадная глазурь (подсластитель мальтитол, заменитель масла какао лауринового типа, молоко сухое обезжиренное, какао-порошок, сыворотка сухая молочная деминерализованная, эмульгатор (лецитин соевый), подсластитель (сукралоза), ароматизатор), ягоды (малина, клюква), заменитель молочного жира, вода, агенты влагоудерживающие (глицерин, сорбитол), эмульгатор (лецитин соевый), регулятор кислотности (лимонная кислота), ароматизатор, соль, антиоксидант (аскорбиновая кислота), консервант (сорбат калия), подсластитель (сукралоза).",
                },
                uz: {
                    name: "Befit Nutrition Junior Malina + Klyukva batonchigi, 40 g",
                    flavorLabel: "Malina + Klyukva",
                    tagline: "Har kuni rezavorlar kuchi.",
                    description:
                        "Malina va klyukvaning shirin-nordon uyg‘unligi tetiklantiradi. Portfelga solib olish yoki sayr uchun ajoyib — mazali va qulay.",
                    ingredients:
                        "Protein (zardob oqsili konsentrati, sut oqsili konsentrati), patoka, sutli shokolad qoplami (shirinlashtiruvchi maltitol, laurin turdagi kakao moyi o‘rnini bosuvchi, yog‘siz quruq sut, kakao kukuni, demineralizatsiyalangan quruq zardob, emulgator (soya lesitini), shirinlashtiruvchi (sukraloza), xushbo‘y modda), rezavorlar (malina, klyukva), sut yog‘i o‘rnini bosuvchi, suv, namlikni ushlab turuvchi moddalar (glitserin, sorbitol), emulgator (soya lesitini), kislotalikni tartibga soluvchi (limon kislotasi), xushbo‘y modda, tuz, antioksidant (askorbin kislotasi), konservant (kaliy sorbati), shirinlashtiruvchi (sukraloza).",
                },
                en: {
                    name: "Befit Nutrition Junior Raspberry + Cranberry Bar, 40g",
                    flavorLabel: "Raspberry + Cranberry",
                    tagline: "Berry power every day.",
                    description:
                        "A sweet-and-tangy duo of raspberry and cranberry that feels refreshing. Great for a backpack or a walk — tasty and convenient.",
                    ingredients:
                        "Protein (whey protein concentrate, milk protein concentrate), molasses, milk chocolate glaze (sweetener maltitol, lauric cocoa butter substitute, skimmed milk powder, cocoa powder, demineralized whey powder, emulsifier (soy lecithin), sweetener (sucralose), flavoring), berries (raspberries, cranberries), milk fat substitute, water, humectants (glycerol, sorbitol), emulsifier (soy lecithin), acidity regulator (citric acid), flavoring, salt, antioxidant (ascorbic acid), preservative (potassium sorbate), sweetener (sucralose).",
                },
            },
        },

        // 5) Dark Choco & Milk Cream
        {
            sku: "junior-darkchoco-milkcream-40g",
            netWeight: "40g",
            flavorKey: "DarkChoco_and_MilkCream",
            price: 24,
            image: "/products/junior-darkchoco-milkcream.png",

            i18n: {
                ru: {
                    name: "Батончик Befit Nutrition Junior Dark Choco & Milk Cream, 40 г",
                    flavorLabel: "Dark Choco & Milk Cream",
                    tagline: "Классика, которая нравится каждый день.",
                    description:
                        "Нежный молочный крем и насыщенный тёмный шоколад создают любимую классику. Вкусный перекус, который отлично подходит на каждый день.",
                    ingredients:
                        "Протеин (концентрат сывороточного белка, концентрат молочного белка), патока, молочно-шоколадная глазурь (подсластитель мальтитол, заменитель масла какао лауринового типа, молоко сухое обезжиренное, какао-порошок, сыворотка сухая молочная деминерализованная, эмульгатор (лецитин соевый), подсластитель (сукралоза), ароматизатор), заменитель молочного жира, вода, агенты влагоудерживающие (глицерин, сорбитол), эмульгатор (лецитин соевый), натуральный краситель (уголь растительный), регулятор кислотности (лимонная кислота), ароматизатор, соль, антиокислитель (аскорбиновая кислота), консервант (сорбат калия), подсластитель (сукралоза).",
                },
                uz: {
                    name: "Befit Nutrition Junior Qora shokolad va sut krem batonchigi, 40 g",
                    flavorLabel: "Qora shokolad va sut krem",
                    tagline: "Har kuni yoqadigan klassika.",
                    description:
                        "Yumshoq sut kremi va to‘yingan qora shokolad klassik uyg‘unlikni yaratadi. Har kuni uchun mos, mazali va qulay gazak.",
                    ingredients:
                        "Protein (zardob oqsili konsentrati, sut oqsili konsentrati), patoka, sutli shokolad qoplami (shirinlashtiruvchi maltitol, laurin turdagi kakao moyi o‘rnini bosuvchi, yog‘siz quruq sut, kakao kukuni, demineralizatsiyalangan quruq zardob, emulgator (soya lesitini), shirinlashtiruvchi (sukraloza), aromatizator), sut yog‘i o‘rnini bosuvchi, suv, namlikni ushlab turuvchi moddalar (glitserin, sorbitol), emulgator (soya lesitini), tabiiy bo‘yoq (o‘simlik ko‘miri), kislotalikni tartibga soluvchi (limon kislotasi), aromatizator, tuz, antioksidant (askorbin kislotasi), konservant (kaliy sorbati), shirinlashtiruvchi (sukraloza).",
                },
                en: {
                    name: "Befit Nutrition Junior Dark Choco & Milk Cream Bar, 40g",
                    flavorLabel: "Dark Choco & Milk Cream",
                    tagline: "A classic you’ll enjoy every day.",
                    description:
                        "Smooth milk cream and rich dark chocolate create a classic combination. A tasty, convenient daily snack.",
                    ingredients:
                        "Protein (whey protein concentrate, milk protein concentrate), molasses, milk chocolate glaze (sweetener maltitol, lauric cocoa butter substitute, skimmed milk powder, cocoa powder, demineralized whey powder, emulsifier (soy lecithin), sweetener (sucralose), flavoring), milk fat substitute, water, humectants (glycerol, sorbitol), emulsifier (soy lecithin), natural color (vegetable charcoal), acidity regulator (citric acid), flavoring, salt, antioxidant (ascorbic acid), preservative (potassium sorbate), sweetener (sucralose).",
                },
            },
        },
    ],
};

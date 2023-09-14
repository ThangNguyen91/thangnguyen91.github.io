'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.json": "f5708eb5432c5a818c3590df897684cb",
"assets/AssetManifest.smcbin": "bf6c0bb2a52d1b9cd8453886a46d732e",
"assets/FontManifest.json": "173d838ca7a9817ef4148e51bc5dc6c4",
"assets/fonts/Fahkwang-Bold.ttf": "2eafaf600b3fed3a49a29c98b092b3bb",
"assets/fonts/MaterialIcons-Regular.otf": "8e2a07523aa0682d0eac746d35e187d8",
"assets/fonts/SF-Pro-Display-Bold.otf": "88b6e0b21919fa6abb7899faa1571f01",
"assets/fonts/SF-Pro-Display-Regular.otf": "a07152f3f0c03589a75b218b2c6536cb",
"assets/fonts/SF-Pro-Display-Semibold.otf": "9a7c849b216648913f216d20a21e9aae",
"assets/images/demo/0.75x/img_avatar_null.png": "95a0f02815e5e5530314dcc1e01c7e25",
"assets/images/demo/0.75x/img_placeholder.png": "a2f897a2f8873ef9698441a1507dee19",
"assets/images/demo/1.5x/img_avatar_null.png": "584781a5be8afcb9097b2fb8d8572652",
"assets/images/demo/1.5x/img_placeholder.png": "b5f87c27dfdc6accd62f195e82b14fc8",
"assets/images/demo/2x/img_avatar_null.png": "5450d31953d32b62c762799bdf75a2e5",
"assets/images/demo/2x/img_placeholder.png": "c016360bdc10001773229dd42364cfbb",
"assets/images/demo/3x/img_avatar_null.png": "595c74aa9973ef44d35da53fef4797e8",
"assets/images/demo/3x/img_placeholder.png": "e49cd1115da330caefeb9d7a2c0e6a8d",
"assets/images/demo/4x/img_avatar_null.png": "ecd095fec637d0b6567d1d5c2891b88b",
"assets/images/demo/4x/img_placeholder.png": "94f72b26b0f8c24ea75b28db42c4fb78",
"assets/images/demo/img_avatar_null.png": "260fc3c2a726055074ce436e3842c523",
"assets/images/demo/img_placeholder.png": "3a951695ca67765fcdbeeb4704a466fc",
"assets/images/icons/0.75x/ic_logo_2.png": "643d666dde21cc641627e34ab594dc15",
"assets/images/icons/0.75x/ic_logo_3.png": "cd51c4a8e3b077996953e3bd031b95b4",
"assets/images/icons/1.5x/ic_logo_2.png": "2bc390a3b761d36a3f87696da81b411c",
"assets/images/icons/1.5x/ic_logo_3.png": "e5e8207b88579873b61c9d37df362b5f",
"assets/images/icons/2x/ic_logo_2.png": "e828c44e6fe1fada015920714e394627",
"assets/images/icons/2x/ic_logo_3.png": "767bda20a714037bbeabc6e4d981c699",
"assets/images/icons/3x/ic_logo_2.png": "88f4c6d1cf8a189470f72661fabb84ba",
"assets/images/icons/3x/ic_logo_3.png": "9813a6fd99873c476da53f5b1f781de1",
"assets/images/icons/4x/ic_logo_2.png": "83c2c5ee02926b529ad223ea6fe21b22",
"assets/images/icons/4x/ic_logo_3.png": "37efab6efe4d7e8b5f2babb367b5137b",
"assets/images/icons/ic_add_circle_new.svg": "98983fa9ae3f41fa57134ca3aacb2e12",
"assets/images/icons/ic_add_circle_outline.svg": "388d240a6ecd409da8c47c81a885949b",
"assets/images/icons/ic_add_event.svg": "9fe1588a821006d8a5be196eaf4df301",
"assets/images/icons/ic_add_image.svg": "12e17d97e222f8561e5afadb27387706",
"assets/images/icons/ic_add_image_new.svg": "8bf9989b554d1c31c5e7e3f7b662b6c8",
"assets/images/icons/ic_add_user.svg": "3ba8440f6a280882f0093184b05c55fe",
"assets/images/icons/ic_apple.svg": "3cb973a91bb7d2384863dbdbaeecdfef",
"assets/images/icons/ic_arrow_down.svg": "3c941086c7fae06c235dad271b6e9aa7",
"assets/images/icons/ic_arrow_down_new.svg": "f00b510dd85f546906d9078ae4ca9fd3",
"assets/images/icons/ic_arrow_left.svg": "09d73fce7a0354f4c691de92acde3a9e",
"assets/images/icons/ic_arrow_left_circle.svg": "b4414dfafd69c305c5d3b49da653a77f",
"assets/images/icons/ic_arrow_right.svg": "828f6cf8d0984784fa997e3daa7b5af0",
"assets/images/icons/ic_arrow_right_2.svg": "f52fdbe81b7a4e7e211779a16a57df24",
"assets/images/icons/ic_arrow_right_circle.svg": "e9155b5dd27fb0860fa79c1d618ea5d8",
"assets/images/icons/ic_arrow_right_circle_outline.svg": "25cd363d6f5480522dd4ae5de3136eaa",
"assets/images/icons/ic_arrow_right_new.svg": "9c7b6baab8f3a2a30a46bf11c7cfb62e",
"assets/images/icons/ic_arrow_right_new2.svg": "7abae55721e047474849dd22f9649942",
"assets/images/icons/ic_arrow_square_left.svg": "b8be21778c844589d032e19c036a5e35",
"assets/images/icons/ic_back.svg": "da857db08a01d135a7a18dfb3e9a45d8",
"assets/images/icons/ic_back_create_hall.svg": "eec9a8c17c2cc754f07b5947ca629b46",
"assets/images/icons/ic_bookmark.svg": "7a87f52afdceabc89cc2e4046533b101",
"assets/images/icons/ic_broadcast_1.svg": "51ea1bb8e6e7c4539e5b3cd99d22f077",
"assets/images/icons/ic_broadcast_2.svg": "7fa394aa149fbe7261d4aa3a792e940f",
"assets/images/icons/ic_building.svg": "ded652ddab827101ac1a31add57b0801",
"assets/images/icons/ic_calendar.svg": "68cb4b29223c40d615c0bfc23e672ec5",
"assets/images/icons/ic_calendar_bold.svg": "77539a4667a88fb1e68ea6fc13ea6bde",
"assets/images/icons/ic_calendar_outline.svg": "c7ff615b6bd6e99e287acb36cc1e3054",
"assets/images/icons/ic_call.svg": "58e8ee3ceef40630441d24b22bc22b20",
"assets/images/icons/ic_camera.svg": "7b053e745d75e5a69f747068e5531c09",
"assets/images/icons/ic_check_rq.svg": "c22572fbe621a1cfc65837cd94d73fc8",
"assets/images/icons/ic_chevron_down.svg": "a329dfd6c681c08b4d0b6af99ec73108",
"assets/images/icons/ic_chevron_right.svg": "0c571a15d120ed687d490713564de74e",
"assets/images/icons/ic_clock_bold.svg": "1030e9feef6611b4299d76bbe66cd2da",
"assets/images/icons/ic_clock_outline.svg": "a06f7fd3733647f8f1c69fb019b8db60",
"assets/images/icons/ic_close.svg": "86de3ad3a8e90674425828d2fac263be",
"assets/images/icons/ic_close_circle.svg": "aec3a4ad600cd7b60005a55ad717e370",
"assets/images/icons/ic_copy.svg": "bc98828b16b28d034d365921119a4165",
"assets/images/icons/ic_copy_link.svg": "cf13fd655795b750a3536f21cf210f01",
"assets/images/icons/ic_create.svg": "eb13fed2c7aeb881c8b9ebe72ff08a43",
"assets/images/icons/ic_create_hall_result_setting.svg": "994a7cd24d267c953541503bee1e111e",
"assets/images/icons/ic_datetime.svg": "570a5e94d557a5720da92a33cb15f03a",
"assets/images/icons/ic_delete.svg": "3c867f7faea18781ab3d59fc51c30513",
"assets/images/icons/ic_delete_bank.svg": "76ecd346360fbd06569e4c75d2314196",
"assets/images/icons/ic_delete_event.svg": "ed1c9e68d6d3ed70c86007672ae18dfe",
"assets/images/icons/ic_del_event.svg": "cdd035d664492e361097edb00da3e104",
"assets/images/icons/ic_detail.svg": "ff92043952405f9ec206e898a89cd3d1",
"assets/images/icons/ic_document.svg": "5b141e1390a7be7fdab7245aaa3761b4",
"assets/images/icons/ic_down_input.svg": "b8b82ae5cd402dc204ca1f8e058bffbe",
"assets/images/icons/ic_edit.svg": "babb7e32ea8b368885f5bcf856a45d38",
"assets/images/icons/ic_edit_condolence.svg": "4d2acac3d40bba0536caf0a58a31db17",
"assets/images/icons/ic_edit_new.svg": "2de32a93cc6162cc3a71af0350080a49",
"assets/images/icons/ic_eye.svg": "752cd31a1d6200ac7a56245c115742f5",
"assets/images/icons/ic_facebook.svg": "cb7282d15e496243729448f31befd2f1",
"assets/images/icons/ic_feature_1.svg": "092855460251128478e6c29c80396a18",
"assets/images/icons/ic_feature_1_v2.svg": "4d5c5eee3a9489d38fcb86891e11a368",
"assets/images/icons/ic_feature_2.svg": "247db830c106b3c0298ddc6211a14584",
"assets/images/icons/ic_feature_2_v2.svg": "afc0e57227efdacff10707553314b57b",
"assets/images/icons/ic_feature_3.svg": "fc7c93de712a156b9a7a14ec2db8489d",
"assets/images/icons/ic_feature_3_v2.svg": "3313e605124ead8b1f6cb493a43ac4df",
"assets/images/icons/ic_feature_4.svg": "0e804afecdf7d52fa653092de6d011d7",
"assets/images/icons/ic_feature_4_v2.svg": "197df5cdd8c36de4528ab9830d2d3a6e",
"assets/images/icons/ic_feature_5.svg": "01686b2d2d21b764cb40ddc8f2fa356c",
"assets/images/icons/ic_feature_5_v2.svg": "221e707a69432da8d7ab2dd5c36e2666",
"assets/images/icons/ic_filter_arrow_down.svg": "bb47839c9733f706cc8d6d4f33d13f97",
"assets/images/icons/ic_filter_check.svg": "ed60dc3ef70198dc2ce6b495b845a856",
"assets/images/icons/ic_filter_location.svg": "d00eefb0499844ebcd6fead3ae2f97fe",
"assets/images/icons/ic_flower.svg": "b47c3983658e324fec736cbc85764750",
"assets/images/icons/ic_funeral_info.svg": "61cf3e3d6bbf48af77ccbc1090ee2cb3",
"assets/images/icons/ic_funeral_services_1.svg": "5c9ed6c895806088d5dc3a039d10e8a9",
"assets/images/icons/ic_funeral_services_2.svg": "cfef377b148a20cc174793c7edde36b9",
"assets/images/icons/ic_gallery.svg": "f8d73f58af613c233d946401cb49b1a9",
"assets/images/icons/ic_google.svg": "a8825668d098fcf76e85ca1d04b6f78b",
"assets/images/icons/ic_google_logo.png": "3e9090ff8407b9922d12fc69b5331bae",
"assets/images/icons/ic_guides_1_v2.svg": "b9fbc96b4261009722647365d14c9e08",
"assets/images/icons/ic_guides_2_v2.svg": "4cf435d00a9d6d80b3b3fcad947ae095",
"assets/images/icons/ic_guides_3_v2.svg": "a2a9b45c026cedbc1a4aa33a34bbccaf",
"assets/images/icons/ic_guides_4_v2.svg": "c44002d0d72fb0553072eb4823c8b9f6",
"assets/images/icons/ic_hall_tick.svg": "9f87752bcc36d327dbf72f651f23770c",
"assets/images/icons/ic_hall_upload.svg": "ca5f2b1981b3e15740b41313f001b0e3",
"assets/images/icons/ic_heart_off.svg": "c4b6e65ba5e5ec3e360b0eef4deeb35a",
"assets/images/icons/ic_home.svg": "60210c4e2267dd3afb4cc240f3e1b51c",
"assets/images/icons/ic_home_active.svg": "e07040435648b141aa26b99891265743",
"assets/images/icons/ic_home_inactive.svg": "83a85aa96d180fb8327b0d6f66ed1175",
"assets/images/icons/ic_hotline_bold.svg": "444d99b76218d468c726071647d0da59",
"assets/images/icons/ic_intro_quote.svg": "5d41aa533feb438bfb76f3cd3ab85823",
"assets/images/icons/ic_kakao_logo.png": "2b9025186a6ffc443351e73424aa99ec",
"assets/images/icons/ic_like.svg": "c73a2c4e811da4670b90cc60e6d2781e",
"assets/images/icons/ic_liked.svg": "f05bea563b88f3f83ffd64dd4618202d",
"assets/images/icons/ic_location.svg": "9bee9282a75f973b2257e5a9118b40be",
"assets/images/icons/ic_location_border.svg": "447990685998583f7b3c1a592cb671bc",
"assets/images/icons/ic_location_new.svg": "d00eefb0499844ebcd6fead3ae2f97fe",
"assets/images/icons/ic_lock.svg": "ae8806246e3f142e5b5a0b44bc0db737",
"assets/images/icons/ic_lock_alpha.svg": "30f511a7c62e743e5b718ec8505006b5",
"assets/images/icons/ic_logo.png": "ee1c40a6420450748919e768a6aa9393",
"assets/images/icons/ic_logo_2.png": "b76855c94e201c1b2cb13e304c571f74",
"assets/images/icons/ic_logo_3.png": "5c44239e978c1181c2b20e4dc1d2a9c2",
"assets/images/icons/ic_logo_4.svg": "9848e91dd89abacb781a22e29211aa7d",
"assets/images/icons/ic_logo_mo.svg": "e950780266a74e19e2b4c67df1285fe1",
"assets/images/icons/ic_logo_notification.png": "b5931675c35f4cbe49c02e9b6173c37e",
"assets/images/icons/ic_map_marker.svg": "3df4e9098f4c7d6ca30202b73e533e67",
"assets/images/icons/ic_memorial_active.svg": "b97162a8988115c122c663a27486d45c",
"assets/images/icons/ic_memorial_hall.svg": "f4182c22a78b1f904f4ac269baa035cf",
"assets/images/icons/ic_memorial_inactive.svg": "d48bc690c11f14fe6f7a064076c8fb3f",
"assets/images/icons/ic_memorial_money.svg": "92e4e4eead57f18b9ca9f4891b2f76e5",
"assets/images/icons/ic_menu_dot.svg": "9413bfe69e4e308590c69b4702d69591",
"assets/images/icons/ic_message_text.svg": "ed8609c04b71b647b41b65fbc5500c68",
"assets/images/icons/ic_messenger.svg": "472767e18d0f313d86c95b95eb7fab07",
"assets/images/icons/ic_moon.svg": "4d48c39a8e521b404cc392ff6eecebcd",
"assets/images/icons/ic_more_horiz.svg": "847203f5c47e15fc5d90011a42a62e8b",
"assets/images/icons/ic_mourn.svg": "59bd86437c7ebdabfe8d0b673ef80b85",
"assets/images/icons/ic_my_memory_active.svg": "305d6c1acb1502f6c1c19b9fcde8049a",
"assets/images/icons/ic_my_memory_hall.svg": "c8edf77e9bfe14498d07d1f149bdbaea",
"assets/images/icons/ic_name_kanji.svg": "1a0d8fbbd9aaf670de8e7e9c39ea8332",
"assets/images/icons/ic_naver.svg": "0df7818eebe8aa6c89d57e71472a3eb0",
"assets/images/icons/ic_naver_logo.png": "8c51e89753c39c3f84997c3178b13e54",
"assets/images/icons/ic_next.svg": "cce63bbd8ec4cf294980ba2f9ba550c6",
"assets/images/icons/ic_next_circle.svg": "309e70627776a4202dfbafceb1a91130",
"assets/images/icons/ic_next_circle_black.svg": "9bf00e6102a74a3a80e04e9b48f5ee18",
"assets/images/icons/ic_next_circle_grey.svg": "c3f25ea844e319ba99e8567ae71e11d6",
"assets/images/icons/ic_next_circle_inactive.svg": "a640e73b74d38c115daf39e9342e36eb",
"assets/images/icons/ic_next_circle_new.svg": "9ceae7310792b21750299a079d3a2d1f",
"assets/images/icons/ic_night.svg": "db71a5aaf95ee8d25269348b0b3529ef",
"assets/images/icons/ic_note.svg": "ec54e028d0a33cd73a285cf715f1ab78",
"assets/images/icons/ic_noti_off.svg": "637b0155ecbc34af6a967464c0b88483",
"assets/images/icons/ic_noti_on.svg": "ee2b8502ca85ed855b454fa2be62079f",
"assets/images/icons/ic_not_selected.svg": "3103593689b9f4b04e0dfc7039b5290f",
"assets/images/icons/ic_people.svg": "b6f0f666a8bb58d48b2ee33f3dce9186",
"assets/images/icons/ic_people_2.svg": "aca96bbfd0d0167b35336318341b2955",
"assets/images/icons/ic_petal_left.svg": "46c7c986ff94c5005fc7d04c87199ed9",
"assets/images/icons/ic_petal_top.svg": "5601b98b2d488c84ac1676266bd68938",
"assets/images/icons/ic_private.svg": "e8962bde69a85039528a89d191ed19b5",
"assets/images/icons/ic_private_hall.svg": "c8656bb624e33be0dca8211b77df6ec5",
"assets/images/icons/ic_profile.svg": "ea98fea659227e4608178f59ebc14639",
"assets/images/icons/ic_public_hall.svg": "61346b10c660483ad0b17d183de18aa7",
"assets/images/icons/ic_publish.svg": "b6d8528b4723ae52b6a22bbb19115715",
"assets/images/icons/ic_quote.svg": "e4be5f3bb1fded13429bdcc68599b1fe",
"assets/images/icons/ic_rating_empty.png": "c39b096621b7b4ab68a0ad5a84e0d66f",
"assets/images/icons/ic_rating_full.png": "1f5269752ebb095936805803f6391b1e",
"assets/images/icons/ic_record.svg": "d4bb24d71348ac6f378724dc77bdd732",
"assets/images/icons/ic_remove_circle_outline.svg": "5bfcbc641809be1f4645507e1e290b8e",
"assets/images/icons/ic_route_square.svg": "e1256887ad5fecf39889977d5a4655f3",
"assets/images/icons/ic_route_square_bold.svg": "7592f0e5ad38beb77d669b6c07a7228c",
"assets/images/icons/ic_save_memory.svg": "0733737107e41538f93c4844042d2d31",
"assets/images/icons/ic_save_memory_active.svg": "27c4a1c429bf8581ef5b4addfeeb97eb",
"assets/images/icons/ic_scan_qrcode.svg": "02ab2cad88a02ba1615424fef2ba7e4a",
"assets/images/icons/ic_search.svg": "efdb4a793a48b6cf62fc69d8aa573a91",
"assets/images/icons/ic_search_2.svg": "b88405bf2fcd0deb20534d5396fdab0d",
"assets/images/icons/ic_search_normal.svg": "0cfd7c4fc8027e62b4e3c8111ff11f40",
"assets/images/icons/ic_search_normal_active.svg": "030758f6d5377a12a2ec8f34d6d100e5",
"assets/images/icons/ic_search_no_result_v2.svg": "90c749222aa77944171deff33dda08d2",
"assets/images/icons/ic_selected.svg": "c42c016209f03d4d40054d7ff0fc7f77",
"assets/images/icons/ic_send_flower.svg": "ce278fbcaccab69e8ff6eddac18752aa",
"assets/images/icons/ic_send_message.svg": "e901b68fa8b0746fdb4d14c5048a63c5",
"assets/images/icons/ic_send_money.svg": "3beb3b9780303e2e1f2f26689ac9dd5f",
"assets/images/icons/ic_send_new.svg": "771efc3951afe537e9f5ebb44071f684",
"assets/images/icons/ic_send_rq.svg": "03ed8ae262d3aa146afbeee548b04510",
"assets/images/icons/ic_send_white.png": "6ad2c7fdf191d26b19f7ea3b14ebf522",
"assets/images/icons/ic_send_white.svg": "147b06e6eb14a44dc56cfc13a5bfac07",
"assets/images/icons/ic_setting.svg": "b75a953e09cb909507c78d1fde6425fd",
"assets/images/icons/ic_settings.svg": "e3d688758daae7cb81b6b3ed27104b54",
"assets/images/icons/ic_settings_active.svg": "131a1d8c2b4cfb77920179061bfb5fd5",
"assets/images/icons/ic_settings_v2.svg": "c329bc689fdca5a132e72ba1ec78d599",
"assets/images/icons/ic_setting_active.svg": "3081b5231952a26e6a6a65375a472ba6",
"assets/images/icons/ic_setting_inactive.svg": "0999752511e6f8651e2b7205a771b5c1",
"assets/images/icons/ic_share.svg": "399bf8cf2c1913c4be77718572f9c26b",
"assets/images/icons/ic_share_2.svg": "10f2420dac75f87637f8e9d77bbe9b22",
"assets/images/icons/ic_share_image.svg": "2f90f7fe9ee69a3c42998852afdce7d8",
"assets/images/icons/ic_star.svg": "49c88d41db34f1f7bbe07f0d57576fdf",
"assets/images/icons/ic_sun.svg": "5cd6aa9b67df9c93be18eee3181fe51f",
"assets/images/icons/ic_talk.svg": "00edf1f62b7b429910e4f28446b0a896",
"assets/images/icons/ic_telegram.svg": "44fa124df7ed9ca0f65085620486c8a1",
"assets/images/icons/ic_tick_circle.svg": "c3db428c9fe1247692dc0a8b8b87ce19",
"assets/images/icons/ic_tick_circle_bold.svg": "f551635f834a22c62c6a76b6658a1d81",
"assets/images/icons/ic_tick_circle_outline.svg": "d9ea854179f079b7cd34a955ececf08c",
"assets/images/icons/ic_tick_disable.svg": "bf01833811de944c2b63ce0570a1ddc4",
"assets/images/icons/ic_tick_enable.svg": "8a38a0520a2b5bae78e166f514bba725",
"assets/images/icons/ic_time.svg": "570a5e94d557a5720da92a33cb15f03a",
"assets/images/icons/ic_trash.svg": "a6f30d98e333c547bb75012486979ee0",
"assets/images/icons/ic_tutorial_active.svg": "9079a1e5ac7c4b06f4bb778d21a6e9af",
"assets/images/icons/ic_tutorial_inactive.svg": "81e0a5219b7fbf138640fc6356a67f7a",
"assets/images/icons/ic_user_check.svg": "51bc6624dd2231fc1a7b49df995be4ce",
"assets/images/icons/ic_user_new.svg": "60690215988eeb24b0121659fb05687d",
"assets/images/icons/ic_user_square.svg": "531afbd16983d055cd22a3c79e07801e",
"assets/images/icons/ic_visit.svg": "a188514418fb32c59dac372bdb77360d",
"assets/images/icons/ic_zalo.svg": "8e8f73887d9095e6e7479ad5f093abc2",
"assets/images/icons/non_selected_check_box.svg": "ec1146b3c5b5e96c4da28ff30f57b65e",
"assets/images/icons/selected_check_box.svg": "37fe69abb627a502e7728a00fb16920e",
"assets/images/images/0.75x/bg_broadcast_schedule.png": "bfe280e7fb72f3af3405a86ecf323874",
"assets/images/images/0.75x/bg_card.png": "c31f4ed2aef49eb5138c514a79c6acee",
"assets/images/images/0.75x/bg_create_memory_hall_button.png": "9ccccdb8bba85d3a28b5d46ae634fc2f",
"assets/images/images/0.75x/bg_guides_support_v2.jpg": "f52607c39c22a9fe5e94020b26cda443",
"assets/images/images/0.75x/bg_intro_first.jpg": "2a8abb5ffeb8caa712f2816d120011a4",
"assets/images/images/0.75x/bg_intro_five.jpg": "b817f2bc61c3841539f558506a600f6e",
"assets/images/images/0.75x/bg_letter_background.png": "0b1f0bb568ff5d994bd666abd3c68cfc",
"assets/images/images/0.75x/bg_my_memory_hall_button.png": "2e558e72139c7d422f3ba26e014f918f",
"assets/images/images/0.75x/bg_result_create_hall.jpg": "a6ff51ddb99b8f44e84a2c4d08b6dc6b",
"assets/images/images/0.75x/img_banner_home.png": "02bf81a196ed2dedc665b4e137bf92f1",
"assets/images/images/0.75x/img_bg_hall_detail.png": "d4f3e4d4727d5129b49b54789fafc5ac",
"assets/images/images/0.75x/img_clock.png": "415300a98ccd890608787341d6625ecc",
"assets/images/images/0.75x/img_google_meet_01.png": "a697b896f4495b29b48a8bc6d08ea522",
"assets/images/images/0.75x/img_google_meet_02.png": "12f978e9fc9df4ae6b39181aabdca27b",
"assets/images/images/0.75x/img_google_meet_03.png": "76cf80aeff34f879af18a46e5ecc86ba",
"assets/images/images/0.75x/img_my_memorial.png": "88f6c98f7372bb7730738520329caf00",
"assets/images/images/0.75x/img_new_create_hall.png": "ce3886d308862510a101ec2c72893486",
"assets/images/images/0.75x/img_obituary.png": "9a1912574704e8cb556b1d3e8c12c3d4",
"assets/images/images/0.75x/img_old_create_hall.png": "3dfec8a94e1a0d04e8643bd3da63075b",
"assets/images/images/0.75x/img_profile_header.png": "eeb625d5b9b2e2bc5b528e2ec9b2df35",
"assets/images/images/0.75x/img_search_no_result.png": "c49d2a1d15dec11daecfaf9f417fb1c5",
"assets/images/images/0.75x/img_signin_header.png": "70275aaeb6e78e77c362b98640dd1845",
"assets/images/images/1.5x/bg_broadcast_schedule.png": "22e0aa5bbeaa3dd83cbb1c0107d52794",
"assets/images/images/1.5x/bg_card.png": "b46b4afa7d8ec24b52ce0e0969ae3b7b",
"assets/images/images/1.5x/bg_create_memory_hall_button.png": "66a2fe8efb0d8cc7e225a69c7bdad218",
"assets/images/images/1.5x/bg_guides_support_v2.jpg": "43d665fc9c25df3671139f7a2563dd17",
"assets/images/images/1.5x/bg_intro_first.jpg": "d2d9b654b266adfa141cda7db5d087d2",
"assets/images/images/1.5x/bg_intro_five.jpg": "407d729dea1f4020e45a1001857ca093",
"assets/images/images/1.5x/bg_letter_background.png": "4b4fe14a3aaf5883fbb08f59a3b443be",
"assets/images/images/1.5x/bg_my_memory_hall_button.png": "582040efd68a8a207ae54e43f4401b66",
"assets/images/images/1.5x/bg_result_create_hall.jpg": "31b2c23398f9013ab6c81e4749a6a129",
"assets/images/images/1.5x/img_banner_home.png": "5103bb109b6f0cbf11d8939ae8d64bfc",
"assets/images/images/1.5x/img_bg_hall_detail.png": "152b0482464637e42a021649169f9b6a",
"assets/images/images/1.5x/img_clock.png": "454109e5d91caefd85c796d8e4bb322a",
"assets/images/images/1.5x/img_google_meet_01.png": "067e2bbe8a9c0acd82e3049f1fde5a74",
"assets/images/images/1.5x/img_google_meet_02.png": "9962eb358a1fe83d53a22b2b96f32321",
"assets/images/images/1.5x/img_google_meet_03.png": "c4b0a5238fd09ff19ec13b907139b8d5",
"assets/images/images/1.5x/img_my_memorial.png": "7c9c6496c51bbbd75d463098d97e79a7",
"assets/images/images/1.5x/img_new_create_hall.png": "623b235c04240a670a11b878548c6b1c",
"assets/images/images/1.5x/img_obituary.png": "0aa72cac43c4d4991bdee82a700d091e",
"assets/images/images/1.5x/img_old_create_hall.png": "2630caa952a2f2d6e9c1ce8a442ca5ca",
"assets/images/images/1.5x/img_profile_header.png": "eea2bb054c8bd2b92cdf97d2d3c5a3cb",
"assets/images/images/1.5x/img_search_no_result.png": "d48742a6ecfcf84f30ea146a579f2362",
"assets/images/images/1.5x/img_signin_header.png": "7d90e81a5e5bda8d2d0df3860a0b03e9",
"assets/images/images/2x/bg_broadcast_schedule.png": "4df154920332578788b4bb18a2215588",
"assets/images/images/2x/bg_card.png": "2336938264bbc4504d20410154b34e7b",
"assets/images/images/2x/bg_create_memory_hall_button.png": "ddac6b07a1e01df8f42ddd1029b823b5",
"assets/images/images/2x/bg_empty_hall.png": "348b6d53d37c59b99fd652da251ff5bf",
"assets/images/images/2x/bg_funeral_services.png": "e67ec516fe5567abbaa030e80fe8ef01",
"assets/images/images/2x/bg_guides_support_v2.jpg": "3ca5a6c93c0acb2a38f4a8ef803a18c1",
"assets/images/images/2x/bg_intro_first.jpg": "4ce5078ef25994c23f596951fa1e7c82",
"assets/images/images/2x/bg_intro_five.jpg": "2320e063d1c79e17404af80a8877ee88",
"assets/images/images/2x/bg_letter_background.png": "facee524d76f311181cb9ff11c255d04",
"assets/images/images/2x/bg_my_memory_hall_button.png": "7697475735513d408333458989acd994",
"assets/images/images/2x/bg_result_create_hall.jpg": "e5645b9facb505a2b8bcb89ec15c838a",
"assets/images/images/2x/img_articles_condolence.png": "41077877517af3fef94598836e1ee2fc",
"assets/images/images/2x/img_banner_home.png": "ffd5f1005c8c9ba183fd7db45e55a08a",
"assets/images/images/2x/img_bg_hall_detail.png": "6260e418fa1308005974e5a56e3dfb80",
"assets/images/images/2x/img_clock.png": "1e4da11467d6ce8784e585e23f7a3531",
"assets/images/images/2x/img_google_meet_01.png": "e61b4d162f788ecec347edce26e0cf2e",
"assets/images/images/2x/img_google_meet_02.png": "e71c55ee8bd5b1e1fcaab67c5d28c733",
"assets/images/images/2x/img_google_meet_03.png": "174d7bfe2d7e9d8bf8c49ffc189d41f1",
"assets/images/images/2x/img_messenger.png": "bcdfdc8ffbda4350475b4f690b003a11",
"assets/images/images/2x/img_my_memorial.png": "cd15f91e6d45b23f8de80bf81c4ad953",
"assets/images/images/2x/img_my_memorials.png": "0e5485f999128fca7c9834153a6acd57",
"assets/images/images/2x/img_new_create_hall.png": "e89a524126cba0448817012385d88f63",
"assets/images/images/2x/img_obituary.png": "2f682f6445efc80418bde7bc26685d36",
"assets/images/images/2x/img_old_create_hall.png": "1a4fe2c4c20270a9c08c35d8dacc6718",
"assets/images/images/2x/img_profile_header.png": "57633674a97b457cbbf5d78d0553b0b3",
"assets/images/images/2x/img_search_no_result.png": "d39a1203adbd51c70efd062119a2f719",
"assets/images/images/2x/img_signin_header.png": "91fcaaede50cb14ff72b0500a84b7cea",
"assets/images/images/2x/img_stored_photos.png": "faa8320b34eddcb0518e1f7fdbe9f435",
"assets/images/images/2x/img_telegram.png": "43279f5f75651de5d93e8c0ea169ceeb",
"assets/images/images/2x/img_zalo.png": "facd8ce2dec70ec92fc5fd563c01a55d",
"assets/images/images/3x/bg_broadcast_schedule.png": "21beaddc7c6ecb1a14e3698435820ea7",
"assets/images/images/3x/bg_card.png": "c7561ddb03824fe10415ee1f36532704",
"assets/images/images/3x/bg_create_memory_hall_button.png": "4bd8b423a7c4110046b9296eb6fca37c",
"assets/images/images/3x/bg_empty_hall.png": "c66d76e6b06351f969721469648e2a27",
"assets/images/images/3x/bg_funeral_services.png": "c9ea9fda6aae4ddc3491ea6200dfad0b",
"assets/images/images/3x/bg_guides_support_v2.jpg": "1f8b3c1cc9a714494751ba27a356309d",
"assets/images/images/3x/bg_intro_first.jpg": "f1b06b22dd030089bdd49f1f1a374953",
"assets/images/images/3x/bg_intro_five.jpg": "127860e764d71ca863d16d232c439fb9",
"assets/images/images/3x/bg_letter_background.png": "9f61b54f7bb9e62eb0a3a7005a6e60a0",
"assets/images/images/3x/bg_my_memory_hall_button.png": "119caca4239a065a7d2a484b76ca7787",
"assets/images/images/3x/bg_result_create_hall.jpg": "38df82661569f79494227a6d2acee62d",
"assets/images/images/3x/img_articles_condolence.png": "99b5a211b3a7d0b64307ba80dc4ac7ef",
"assets/images/images/3x/img_banner_home.png": "076388728b574ed806951fe49ef3a289",
"assets/images/images/3x/img_bg_hall_detail.png": "dffb8f8b684e3ad6b224132e1a082b11",
"assets/images/images/3x/img_clock.png": "97c76d1ec8c762514c636494bbb28968",
"assets/images/images/3x/img_google_meet_01.png": "ba3e712beee7acd354421c107c6dad4f",
"assets/images/images/3x/img_google_meet_02.png": "6cd196580f936c30d9ef6678eda06ab6",
"assets/images/images/3x/img_google_meet_03.png": "349425b218e5d58c8fe3c897ee5338b3",
"assets/images/images/3x/img_messenger.png": "e139206a4306a9537dbe4f4ef8c43126",
"assets/images/images/3x/img_my_memorial.png": "9344232a4645259c3f064880c91d59d9",
"assets/images/images/3x/img_my_memorials.png": "708af156c44d03631f78e1991d170df2",
"assets/images/images/3x/img_new_create_hall.png": "d71ec1b98f39aeab9c7bd38fd4df3e45",
"assets/images/images/3x/img_obituary.png": "78a9211032d59d1d68b81c101b087efd",
"assets/images/images/3x/img_old_create_hall.png": "1f3ec29a4ed796a75425af298a769e2d",
"assets/images/images/3x/img_profile_header.png": "0b0425a90d2ed76d5537f2e2edf1e177",
"assets/images/images/3x/img_search_no_result.png": "d5442f2e43296f42335d1c16327742e2",
"assets/images/images/3x/img_signin_header.png": "0ab67a5a31036f175993f21da39dd7d5",
"assets/images/images/3x/img_stored_photos.png": "386b19cbe9cca26bfa7e3b9417d1112f",
"assets/images/images/3x/img_telegram.png": "2031d9789b25665ea159ba0e9091258a",
"assets/images/images/3x/img_zalo.png": "a0676b2ed5acf74b0f04b34d6252ccbd",
"assets/images/images/4x/bg_broadcast_schedule.png": "315ae0e224b9dcfb4347770914b7d829",
"assets/images/images/4x/bg_card.png": "d70bd364bb4641673052449d98e02e18",
"assets/images/images/4x/bg_create_memory_hall_button.png": "7a526365a55a32e2511055dfe4cabb9d",
"assets/images/images/4x/bg_funeral_services.png": "255ae03a55fe44b31e471a954be37fa8",
"assets/images/images/4x/bg_guides_support_v2.jpg": "bf317c39601967e41bc68ee9a45ab2a1",
"assets/images/images/4x/bg_intro_first.jpg": "421dc6f7312458bc05ac889156947f7b",
"assets/images/images/4x/bg_intro_five.jpg": "c5cbf92daeb1810f49f22c44a512419c",
"assets/images/images/4x/bg_letter_background.png": "92f86be4d88b057c7f75c64b95ce7669",
"assets/images/images/4x/bg_my_memory_hall_button.png": "9d3024b1ee3e7e21e12ed6dab9288433",
"assets/images/images/4x/bg_result_create_hall.jpg": "c4b13d4bd9acdb55e8185d72eec05b8d",
"assets/images/images/4x/img_banner_home.png": "1cc67233fba93e797c80a9ed47b57f92",
"assets/images/images/4x/img_bg_hall_detail.png": "e38bd9c19411e279a53595144c409307",
"assets/images/images/4x/img_clock.png": "098c59effd8b7f7ba22ea0a4ff212104",
"assets/images/images/4x/img_google_meet_01.png": "59cdf000c6040cb0ec4ace78fc5b9ed5",
"assets/images/images/4x/img_google_meet_02.png": "1800bce0dccf84cb964397f7ff2e0b28",
"assets/images/images/4x/img_google_meet_03.png": "4e5e3e70da7bab87f82236d970caa3cf",
"assets/images/images/4x/img_my_memorial.png": "382e24315901423396bcc66e10e2f957",
"assets/images/images/4x/img_new_create_hall.png": "af42ad35f4d1b0354f155a2b179b8da9",
"assets/images/images/4x/img_obituary.png": "4ead1e536a2144cfa76eebbf88837bdd",
"assets/images/images/4x/img_old_create_hall.png": "34b079f4137eeb59aec9fdb74c168f88",
"assets/images/images/4x/img_profile_header.png": "e095f0f6b98f1ecc71216ffad66913b4",
"assets/images/images/4x/img_search_no_result.png": "142114e4b97889b789638e76a3331a17",
"assets/images/images/4x/img_signin_header.png": "301eac348ca458addcd2e019ef3ddc20",
"assets/images/images/background2.png": "65113fe754ca9aae5616f1ed60051e36",
"assets/images/images/bg_broadcast_schedule.png": "0e15afece11da361df523042ea3d1357",
"assets/images/images/bg_card.png": "c365a6a3f1696ce2b38cf3c8275d1067",
"assets/images/images/bg_create_memory_hall_button.png": "bd1fd84bc5f89fa1efb2e3cff9f5490a",
"assets/images/images/bg_empty_hall.png": "0ba1299034542df3991845e66487c8c4",
"assets/images/images/bg_funeral_services.png": "837127db70ca05d64b102d8389fe1291",
"assets/images/images/bg_guides_support_v2.jpg": "d67dc4a03e754be5ba5da4d5d0c98e54",
"assets/images/images/bg_guide_support.jpg": "0a8598cae3c8373679c9416ae379d167",
"assets/images/images/bg_intro_first.jpg": "7be14c039bfed6f74d55caf054665aa8",
"assets/images/images/bg_intro_five.jpg": "5a169c1117d260682a9b0bcdb71b44f4",
"assets/images/images/bg_letter_background.png": "0c068dc1f4665b6e6053eb46a304443e",
"assets/images/images/bg_my_memory_hall_button.png": "973f5aa5682d243b028df75a481f3ab1",
"assets/images/images/bg_result_create_hall.jpg": "24b00e37de42dfa495da0f0d3f67c410",
"assets/images/images/bg_result_create_hall.png": "172dc59af4b2c7d8ab1e7f7e2e4710b4",
"assets/images/images/bg_web.png": "0a57503b5187c37cd731d0a9f20cc2c0",
"assets/images/images/img_articles_condolence.png": "92c3bbfc1be82cf7caa8eb4c64f6ae11",
"assets/images/images/img_auth_header.png": "e8c1121ed476bc99e10f9567d608d5f6",
"assets/images/images/img_avatar_placeholder.png": "260fc3c2a726055074ce436e3842c523",
"assets/images/images/img_bank_placeholder.png": "38d37d453aa7bf490969aa76eba7d7a1",
"assets/images/images/img_banner_home.png": "8ba31bd7b68f4c348a5d886edc281a69",
"assets/images/images/img_bg_hall_detail.png": "29c5fc1d61d267483b83f0eedec05715",
"assets/images/images/img_clock.png": "506072f5485baed83d10c5ef3b609c59",
"assets/images/images/img_funeral_home.png": "77789713a543cc57d9457428f5d6d2b6",
"assets/images/images/img_google_meet_01.png": "c4dbce9967657ff76924e50620a3f7d5",
"assets/images/images/img_google_meet_02.png": "e85c100058d3bc7702520d9ca79027dc",
"assets/images/images/img_google_meet_03.png": "3f8b35f99f838c74a7f79533bc318a73",
"assets/images/images/img_intro_slide_2.png": "6063da95dc18dc0f453ff4ec058b90de",
"assets/images/images/img_intro_slide_3.png": "283596a599537851e4b4d4e55e09a7ae",
"assets/images/images/img_messenger.png": "4f8623938d3c0297c9f623eca1f99079",
"assets/images/images/img_my_memorial.png": "1fd04e8e4e9c553f07e6f7fdf1cd4400",
"assets/images/images/img_my_memorials.png": "7da3657c5f1610cc6e4e7d8c4084babb",
"assets/images/images/img_new_create_hall.png": "33e1f884f91e52db67cab19bc580bf62",
"assets/images/images/img_obituary.png": "3dab59e969d61ea038b714a048204000",
"assets/images/images/img_old_create_hall.png": "ef0d5be1dbb3dc609808eb536d4bc3c8",
"assets/images/images/img_profile_header.png": "b9d9533acaea93e2b5ca19836594fc56",
"assets/images/images/img_search_no_result.png": "56c48228817a06887d4c6783061a47e1",
"assets/images/images/img_share_config.png": "dab86c1c311ec3f0698fdd8e226c7a13",
"assets/images/images/img_signin_header.png": "722b07416f481089fecf963a64db526b",
"assets/images/images/img_stored_photos.png": "ecc5d73592a0fb42d7aea708c22d0154",
"assets/images/images/img_telegram.png": "9c8a04b4012cdf895e148ca46b7de95e",
"assets/images/images/img_zalo.png": "92c579cc2f7fa36545851a7e202dab42",
"assets/NOTICES": "642e7c587a88caaed256195f5f46505f",
"assets/packages/dropdown_button2/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon-16x16.png": "b9e9f0cea2d530b99fb8e97e1be3a508",
"favicon-32x32.png": "c77bf6acf7437e55efbdf4b712a9993d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"images/img_splash_web.jpg": "83bc87a579d662d82f9bbe247d7c8375",
"index.html": "70c70c892a68a4e9e859941611d94f25",
"/": "70c70c892a68a4e9e859941611d94f25",
"main.dart.js": "9cc28698d5726dd98fce6d6bd39995a4",
"manifest.json": "57e643fa21ac0843174c4bb77fd79cf7",
"sqflite_sw.js": "f05c84c04b191bc6bd36da575a8eec08",
"sqlite3.wasm": "2068781fd3a05f89e76131a98da09b5b",
"styles.css": "f86d161d61ade76bbd8f6f70d97439d7",
"version.json": "8e0222c12606c6b3fc260e0c0152007c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

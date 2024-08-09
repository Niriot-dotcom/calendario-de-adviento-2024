import { b as set_current_component, r as run_all, d as current_component, c as create_ssr_component, e as escape, f as createEventDispatcher, a as subscribe, h as set_store_value, i as add_attribute, o as onDestroy, j as get_store_value, s as setContext, g as getContext, k as compute_rest_props, l as spread, n as escape_object, v as validate_component, p as escape_attribute_value, q as identity, t as each } from "../../chunks/ssr.js";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { w as writable, d as derived, r as readable, a as readonly } from "../../chunks/index.js";
import { getExampleNumber, AsYouType, getCountryCallingCode, Metadata, parsePhoneNumberWithError, ParseError } from "libphonenumber-js/max";
import "dequal";
import { nanoid } from "nanoid/non-secure";
import { createFocusTrap as createFocusTrap$1 } from "focus-trap";
import { clsx } from "clsx";
import { tv } from "tailwind-variants";
import "@firebase/firestore";
import { twMerge } from "tailwind-merge";
const dirty_components = [];
const binding_callbacks = [];
let render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = /* @__PURE__ */ Promise.resolve();
let update_scheduled = false;
function schedule_update() {
  if (!update_scheduled) {
    update_scheduled = true;
    resolved_promise.then(flush);
  }
}
function tick() {
  schedule_update();
  return resolved_promise;
}
function add_render_callback(fn) {
  render_callbacks.push(fn);
}
const seen_callbacks = /* @__PURE__ */ new Set();
let flushidx = 0;
function flush() {
  if (flushidx !== 0) {
    return;
  }
  const saved_component = current_component;
  do {
    try {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
    } catch (e) {
      dirty_components.length = 0;
      flushidx = 0;
      throw e;
    }
    set_current_component(null);
    dirty_components.length = 0;
    flushidx = 0;
    while (binding_callbacks.length) binding_callbacks.pop()();
    for (let i = 0; i < render_callbacks.length; i += 1) {
      const callback = render_callbacks[i];
      if (!seen_callbacks.has(callback)) {
        seen_callbacks.add(callback);
        callback();
      }
    }
    render_callbacks.length = 0;
  } while (dirty_components.length);
  while (flush_callbacks.length) {
    flush_callbacks.pop()();
  }
  update_scheduled = false;
  seen_callbacks.clear();
  set_current_component(saved_component);
}
function update($$) {
  if ($$.fragment !== null) {
    $$.update();
    run_all($$.before_update);
    const dirty = $$.dirty;
    $$.dirty = [-1];
    $$.fragment && $$.fragment.p($$.ctx, dirty);
    $$.after_update.forEach(add_render_callback);
  }
}
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name2) {
  return void_element_names.test(name2) || name2.toLowerCase() === "!doctype";
}
const AngelitosHomepage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isAngelitoFirst = false } = $$props;
  let { firstPosition = "TOP" } = $$props;
  let { angelitosSize = "w-full" } = $$props;
  const classesByPosition = {
    TOP: {
      LEFT: "top-0 left-0",
      RIGHT: "bottom-0 right-0"
    },
    BOTTOM: {
      LEFT: "bottom-0 right-0",
      RIGHT: "top-0 left-0"
    },
    CENTER: {
      LEFT: "top-1/2 transform -translate-y-1",
      RIGHT: "top-1/2 transform -translate-y-1"
    }
  };
  if ($$props.isAngelitoFirst === void 0 && $$bindings.isAngelitoFirst && isAngelitoFirst !== void 0) $$bindings.isAngelitoFirst(isAngelitoFirst);
  if ($$props.firstPosition === void 0 && $$bindings.firstPosition && firstPosition !== void 0) $$bindings.firstPosition(firstPosition);
  if ($$props.angelitosSize === void 0 && $$bindings.angelitosSize && angelitosSize !== void 0) $$bindings.angelitosSize(angelitosSize);
  return `${isAngelitoFirst ? `<div class="relative h-full w-1/2 md:w-1/3"><div class="${"absolute " + escape(classesByPosition[firstPosition].LEFT, true) + " animate-bounce-smooth"}"><img class="${escape(angelitosSize, true) + " h-full object-contain scale-x-flip"}" alt="ANGELITO" src="/images/PERSONAJES/ANGELITO.webp"></div></div> <div class="relative h-full w-1/2 md:w-1/3"><div class="${"absolute " + escape(classesByPosition[firstPosition].RIGHT, true) + " animate-bounce-smooth w-full flex justify-end"}" style="animation-delay: 0.3s;"><img class="${escape(angelitosSize, true) + " h-full object-contain"}" alt="ANGELITA" src="/images/PERSONAJES/ANGELITA.webp"></div></div>` : `<div class="relative h-full w-1/2"><div class="${"absolute " + escape(classesByPosition[firstPosition].LEFT, true) + " animate-bounce-smooth"}"><img class="${escape(angelitosSize, true) + " h-full object-contain scale-x-flip"}" alt="ANGELITA" src="/images/PERSONAJES/ANGELITA.webp"></div></div> <div class="relative h-full w-1/2"><div class="${"absolute " + escape(classesByPosition[firstPosition].RIGHT, true) + " animate-bounce-smooth"}"><img class="${escape(angelitosSize, true) + " h-full object-contain"}" alt="ANGELITO" src="/images/PERSONAJES/ANGELITO.webp"></div></div>`}`;
});
const HeaderAndLogo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hideText = false } = $$props;
  if ($$props.hideText === void 0 && $$bindings.hideText && hideText !== void 0) $$bindings.hideText(hideText);
  return ` <div class="h-[14vh] md:h-[15vh] p-[3vh] z-10" data-svelte-h="svelte-drrrkc"><img class="w-full h-full object-contain" alt="LOGO VIANNEY INVIERNO" src="/images/ELEMENTOS/LOGO-MORADO.webp"></div>  ${!hideText ? `<div class="text-ared z-10" data-svelte-h="svelte-7jxi7u"><p class="f1-ivy leading-none">Calendario de Adviento</p> <p class="f2-baby leading-[3rem]">Angelitos 2024</p></div>` : ``}`;
});
const LaMagiaCopy = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="text-ared w-full my-0 z-10" data-svelte-h="svelte-ynmsz2"><p class="f4-latino leading-none">¡La magia de la <span class="f3-ivy">navidad</span></p> <p class="f4-latino leading-none">está cada vez más cerca!</p></div>`;
});
const firebaseConfig = {
  apiKey: "AIzaSyApmPfeaM7obHHx8ytLuQqpQLrGetZ5Do4",
  authDomain: "mx-vianney-001.firebaseapp.com",
  databaseURL: "https://mx-vianney-001.firebaseio.com",
  projectId: "mx-vianney-001",
  storageBucket: "mx-vianney-001.appspot.com",
  messagingSenderId: "676687949327",
  appId: "1:676687949327:web:839027a1a7e7cb412f7d7a",
  measurementId: "G-CZLXZFJJJZ"
};
const app = initializeApp(firebaseConfig);
getFirestore(app);
const auth = getAuth();
getStorage();
function userStore() {
  let unsubscribe;
  if (!auth || !globalThis.window) {
    console.warn("Auth is not initialized or not in browser");
    const { subscribe: subscribe22 } = writable(null);
    return {
      subscribe: subscribe22
    };
  }
  const { subscribe: subscribe2 } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user2) => {
      set(user2);
    });
    return () => unsubscribe();
  });
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error al cerrar sesión: ", error);
    }
  };
  return {
    subscribe: subscribe2,
    logout
  };
}
userStore();
const allCountries = [
  ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
  ["Albania (Shqipëri)", "al", "355"],
  ["Algeria (‫الجزائر‬‎)", "dz", "213"],
  ["American Samoa", "as", "1", 5, ["684"]],
  ["Andorra", "ad", "376"],
  ["Angola", "ao", "244"],
  ["Anguilla", "ai", "1", 6, ["264"]],
  ["Antigua and Barbuda", "ag", "1", 7, ["268"]],
  ["Argentina", "ar", "54"],
  ["Armenia (Հայաստան)", "am", "374"],
  ["Aruba", "aw", "297"],
  ["Ascension Island", "ac", "247"],
  ["Australia", "au", "61", 0],
  ["Austria (Österreich)", "at", "43"],
  ["Azerbaijan (Azərbaycan)", "az", "994"],
  ["Bahamas", "bs", "1", 8, ["242"]],
  ["Bahrain (‫البحرين‬‎)", "bh", "973"],
  ["Bangladesh (বাংলাদেশ)", "bd", "880"],
  ["Barbados", "bb", "1", 9, ["246"]],
  ["Belarus (Беларусь)", "by", "375"],
  ["Belgium (België)", "be", "32"],
  ["Belize", "bz", "501"],
  ["Benin (Bénin)", "bj", "229"],
  ["Bermuda", "bm", "1", 10, ["441"]],
  ["Bhutan (འབྲུག)", "bt", "975"],
  ["Bolivia", "bo", "591"],
  ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
  ["Botswana", "bw", "267"],
  ["Brazil (Brasil)", "br", "55"],
  ["British Indian Ocean Territory", "io", "246"],
  ["British Virgin Islands", "vg", "1", 11, ["284"]],
  ["Brunei", "bn", "673"],
  ["Bulgaria (България)", "bg", "359"],
  ["Burkina Faso", "bf", "226"],
  ["Burundi (Uburundi)", "bi", "257"],
  ["Cambodia (កម្ពុជា)", "kh", "855"],
  ["Cameroon (Cameroun)", "cm", "237"],
  [
    "Canada",
    "ca",
    "1",
    1,
    [
      "204",
      "226",
      "236",
      "249",
      "250",
      "289",
      "306",
      "343",
      "365",
      "387",
      "403",
      "416",
      "418",
      "431",
      "437",
      "438",
      "450",
      "506",
      "514",
      "519",
      "548",
      "579",
      "581",
      "587",
      "604",
      "613",
      "639",
      "647",
      "672",
      "705",
      "709",
      "742",
      "778",
      "780",
      "782",
      "807",
      "819",
      "825",
      "867",
      "873",
      "902",
      "905"
    ]
  ],
  ["Cape Verde (Kabu Verdi)", "cv", "238"],
  ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
  ["Cayman Islands", "ky", "1", 12, ["345"]],
  ["Central African Republic (République centrafricaine)", "cf", "236"],
  ["Chad (Tchad)", "td", "235"],
  ["Chile", "cl", "56"],
  ["China (中国)", "cn", "86"],
  ["Christmas Island", "cx", "61", 2, ["89164"]],
  ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]],
  ["Colombia", "co", "57"],
  ["Comoros (‫جزر القمر‬‎)", "km", "269"],
  ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
  ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
  ["Cook Islands", "ck", "682"],
  ["Costa Rica", "cr", "506"],
  ["Côte d’Ivoire", "ci", "225"],
  ["Croatia (Hrvatska)", "hr", "385"],
  ["Cuba", "cu", "53"],
  ["Curaçao", "cw", "599", 0],
  ["Cyprus (Κύπρος)", "cy", "357"],
  ["Czech Republic (Česká republika)", "cz", "420"],
  ["Denmark (Danmark)", "dk", "45"],
  ["Djibouti", "dj", "253"],
  ["Dominica", "dm", "1", 13, ["767"]],
  ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]],
  ["Ecuador", "ec", "593"],
  ["Egypt (‫مصر‬‎)", "eg", "20"],
  ["El Salvador", "sv", "503"],
  ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
  ["Eritrea", "er", "291"],
  ["Estonia (Eesti)", "ee", "372"],
  ["Eswatini", "sz", "268"],
  ["Ethiopia", "et", "251"],
  ["Falkland Islands (Islas Malvinas)", "fk", "500"],
  ["Faroe Islands (Føroyar)", "fo", "298"],
  ["Fiji", "fj", "679"],
  ["Finland (Suomi)", "fi", "358", 0],
  ["France", "fr", "33"],
  ["French Guiana (Guyane française)", "gf", "594"],
  ["French Polynesia (Polynésie française)", "pf", "689"],
  ["Gabon", "ga", "241"],
  ["Gambia", "gm", "220"],
  ["Georgia (საქართველო)", "ge", "995"],
  ["Germany (Deutschland)", "de", "49"],
  ["Ghana (Gaana)", "gh", "233"],
  ["Gibraltar", "gi", "350"],
  ["Greece (Ελλάδα)", "gr", "30"],
  ["Greenland (Kalaallit Nunaat)", "gl", "299"],
  ["Grenada", "gd", "1", 14, ["473"]],
  ["Guadeloupe", "gp", "590", 0],
  ["Guam", "gu", "1", 15, ["671"]],
  ["Guatemala", "gt", "502"],
  ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
  ["Guinea (Guinée)", "gn", "224"],
  ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
  ["Guyana", "gy", "592"],
  ["Haiti", "ht", "509"],
  ["Honduras", "hn", "504"],
  ["Hong Kong (香港)", "hk", "852"],
  ["Hungary (Magyarország)", "hu", "36"],
  ["Iceland (Ísland)", "is", "354"],
  ["India (भारत)", "in", "91"],
  ["Indonesia", "id", "62"],
  ["Iran (‫ایران‬‎)", "ir", "98"],
  ["Iraq (‫العراق‬‎)", "iq", "964"],
  ["Ireland", "ie", "353"],
  ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]],
  ["Israel (‫ישראל‬‎)", "il", "972"],
  ["Italy (Italia)", "it", "39", 0],
  ["Jamaica", "jm", "1", 4, ["876", "658"]],
  ["Japan (日本)", "jp", "81"],
  ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]],
  ["Jordan (‫الأردن‬‎)", "jo", "962"],
  ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]],
  ["Kenya", "ke", "254"],
  ["Kiribati", "ki", "686"],
  ["Kosovo", "xk", "383"],
  ["Kuwait (‫الكويت‬‎)", "kw", "965"],
  ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
  ["Laos (ລາວ)", "la", "856"],
  ["Latvia (Latvija)", "lv", "371"],
  ["Lebanon (‫لبنان‬‎)", "lb", "961"],
  ["Lesotho", "ls", "266"],
  ["Liberia", "lr", "231"],
  ["Libya (‫ليبيا‬‎)", "ly", "218"],
  ["Liechtenstein", "li", "423"],
  ["Lithuania (Lietuva)", "lt", "370"],
  ["Luxembourg", "lu", "352"],
  ["Macau (澳門)", "mo", "853"],
  ["North Macedonia (Македонија)", "mk", "389"],
  ["Madagascar (Madagasikara)", "mg", "261"],
  ["Malawi", "mw", "265"],
  ["Malaysia", "my", "60"],
  ["Maldives", "mv", "960"],
  ["Mali", "ml", "223"],
  ["Malta", "mt", "356"],
  ["Marshall Islands", "mh", "692"],
  ["Martinique", "mq", "596"],
  ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
  ["Mauritius (Moris)", "mu", "230"],
  ["Mayotte", "yt", "262", 1, ["269", "639"]],
  ["Mexico (México)", "mx", "52"],
  ["Micronesia", "fm", "691"],
  ["Moldova (Republica Moldova)", "md", "373"],
  ["Monaco", "mc", "377"],
  ["Mongolia (Монгол)", "mn", "976"],
  ["Montenegro (Crna Gora)", "me", "382"],
  ["Montserrat", "ms", "1", 16, ["664"]],
  ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
  ["Mozambique (Moçambique)", "mz", "258"],
  ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
  ["Namibia (Namibië)", "na", "264"],
  ["Nauru", "nr", "674"],
  ["Nepal (नेपाल)", "np", "977"],
  ["Netherlands (Nederland)", "nl", "31"],
  ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
  ["New Zealand", "nz", "64"],
  ["Nicaragua", "ni", "505"],
  ["Niger (Nijar)", "ne", "227"],
  ["Nigeria", "ng", "234"],
  ["Niue", "nu", "683"],
  ["Norfolk Island", "nf", "672"],
  ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
  ["Northern Mariana Islands", "mp", "1", 17, ["670"]],
  ["Norway (Norge)", "no", "47", 0],
  ["Oman (‫عُمان‬‎)", "om", "968"],
  ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
  ["Palau", "pw", "680"],
  ["Palestine (‫فلسطين‬‎)", "ps", "970"],
  ["Panama (Panamá)", "pa", "507"],
  ["Papua New Guinea", "pg", "675"],
  ["Paraguay", "py", "595"],
  ["Peru (Perú)", "pe", "51"],
  ["Philippines", "ph", "63"],
  ["Poland (Polska)", "pl", "48"],
  ["Portugal", "pt", "351"],
  ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
  ["Qatar (‫قطر‬‎)", "qa", "974"],
  ["Réunion (La Réunion)", "re", "262", 0],
  ["Romania (România)", "ro", "40"],
  ["Russia (Россия)", "ru", "7", 0],
  ["Rwanda", "rw", "250"],
  ["Saint Barthélemy", "bl", "590", 1],
  ["Saint Helena", "sh", "290"],
  ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
  ["Saint Lucia", "lc", "1", 19, ["758"]],
  ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
  ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
  ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]],
  ["Samoa", "ws", "685"],
  ["San Marino", "sm", "378"],
  ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
  ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
  ["Senegal (Sénégal)", "sn", "221"],
  ["Serbia (Србија)", "rs", "381"],
  ["Seychelles", "sc", "248"],
  ["Sierra Leone", "sl", "232"],
  ["Singapore", "sg", "65"],
  ["Sint Maarten", "sx", "1", 21, ["721"]],
  ["Slovakia (Slovensko)", "sk", "421"],
  ["Slovenia (Slovenija)", "si", "386"],
  ["Solomon Islands", "sb", "677"],
  ["Somalia (Soomaaliya)", "so", "252"],
  ["South Africa", "za", "27"],
  ["South Korea (대한민국)", "kr", "82"],
  ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
  ["Spain (España)", "es", "34"],
  ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
  ["Sudan (‫السودان‬‎)", "sd", "249"],
  ["Suriname", "sr", "597"],
  ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
  ["Sweden (Sverige)", "se", "46"],
  ["Switzerland (Schweiz)", "ch", "41"],
  ["Syria (‫سوريا‬‎)", "sy", "963"],
  ["Taiwan (台灣)", "tw", "886"],
  ["Tajikistan", "tj", "992"],
  ["Tanzania", "tz", "255"],
  ["Thailand (ไทย)", "th", "66"],
  ["Timor-Leste", "tl", "670"],
  ["Togo", "tg", "228"],
  ["Tokelau", "tk", "690"],
  ["Tonga", "to", "676"],
  ["Trinidad and Tobago", "tt", "1", 22, ["868"]],
  ["Tristan da Cunha", "ta", "290"],
  ["Tunisia (‫تونس‬‎)", "tn", "216"],
  ["Turkey (Türkiye)", "tr", "90"],
  ["Turkmenistan", "tm", "993"],
  ["Turks and Caicos Islands", "tc", "1", 23, ["649"]],
  ["Tuvalu", "tv", "688"],
  ["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
  ["Uganda", "ug", "256"],
  ["Ukraine (Україна)", "ua", "380"],
  ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
  ["United Kingdom", "gb", "44", 0],
  ["United States", "us", "1", 0],
  ["Uruguay", "uy", "598"],
  ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
  ["Vanuatu", "vu", "678"],
  ["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]],
  ["Venezuela", "ve", "58"],
  ["Vietnam (Việt Nam)", "vn", "84"],
  ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
  ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, ["5288", "5289"]],
  ["Yemen (‫اليمن‬‎)", "ye", "967"],
  ["Zambia", "zm", "260"],
  ["Zimbabwe", "zw", "263"],
  ["Åland Islands", "ax", "358", 1, ["18"]]
];
const normalizedCountries = allCountries.map((country) => {
  return {
    id: country[1].toUpperCase(),
    label: `${country[0]} +${country[2]}`,
    name: country[0],
    iso2: country[1].toUpperCase(),
    dialCode: country[2],
    priority: country[3] || 0,
    areaCodes: country[4] || null
  };
});
const examplePhoneNumbers = { "AC": "40123", "AD": "312345", "AE": "501234567", "AF": "701234567", "AG": "2684641234", "AI": "2642351234", "AL": "672123456", "AM": "77123456", "AO": "923123456", "AR": "91123456789", "AS": "6847331234", "AT": "664123456", "AU": "412345678", "AW": "5601234", "AX": "412345678", "AZ": "401234567", "BA": "61123456", "BB": "2462501234", "BD": "1812345678", "BE": "470123456", "BF": "70123456", "BG": "43012345", "BH": "36001234", "BI": "79561234", "BJ": "90011234", "BL": "690001234", "BM": "4413701234", "BN": "7123456", "BO": "71234567", "BQ": "3181234", "BR": "11961234567", "BS": "2423591234", "BT": "17123456", "BW": "71123456", "BY": "294911911", "BZ": "6221234", "CA": "5062345678", "CC": "412345678", "CD": "991234567", "CF": "70012345", "CG": "061234567", "CH": "781234567", "CI": "0123456789", "CK": "71234", "CL": "221234567", "CM": "671234567", "CN": "13123456789", "CO": "3211234567", "CR": "83123456", "CU": "51234567", "CV": "9911234", "CW": "95181234", "CX": "412345678", "CY": "96123456", "CZ": "601123456", "DE": "15123456789", "DJ": "77831001", "DK": "32123456", "DM": "7672251234", "DO": "8092345678", "DZ": "551234567", "EC": "991234567", "EE": "51234567", "EG": "1001234567", "EH": "650123456", "ER": "7123456", "ES": "612345678", "ET": "911234567", "FI": "412345678", "FJ": "7012345", "FK": "51234", "FM": "3501234", "FO": "211234", "FR": "612345678", "GA": "06031234", "GB": "7400123456", "GD": "4734031234", "GE": "555123456", "GF": "694201234", "GG": "7781123456", "GH": "231234567", "GI": "57123456", "GL": "221234", "GM": "3012345", "GN": "601123456", "GP": "690001234", "GQ": "222123456", "GR": "6912345678", "GT": "51234567", "GU": "6713001234", "GW": "955012345", "GY": "6091234", "HK": "51234567", "HN": "91234567", "HR": "921234567", "HT": "34101234", "HU": "201234567", "ID": "812345678", "IE": "850123456", "IL": "502345678", "IM": "7924123456", "IN": "8123456789", "IO": "3801234", "IQ": "7912345678", "IR": "9123456789", "IS": "6111234", "IT": "3123456789", "JE": "7797712345", "JM": "8762101234", "JO": "790123456", "JP": "9012345678", "KE": "712123456", "KG": "700123456", "KH": "91234567", "KI": "72001234", "KM": "3212345", "KN": "8697652917", "KP": "1921234567", "KR": "1020000000", "KW": "50012345", "KY": "3453231234", "KZ": "7710009998", "LA": "2023123456", "LB": "71123456", "LC": "7582845678", "LI": "660234567", "LK": "712345678", "LR": "770123456", "LS": "50123456", "LT": "61234567", "LU": "628123456", "LV": "21234567", "LY": "912345678", "MA": "650123456", "MC": "612345678", "MD": "62112345", "ME": "67622901", "MF": "690001234", "MG": "321234567", "MH": "2351234", "MK": "72345678", "ML": "65012345", "MM": "92123456", "MN": "88123456", "MO": "66123456", "MP": "6702345678", "MQ": "696201234", "MR": "22123456", "MS": "6644923456", "MT": "96961234", "MU": "52512345", "MV": "7712345", "MW": "991234567", "MX": "12221234567", "MY": "123456789", "MZ": "821234567", "NA": "811234567", "NC": "751234", "NE": "93123456", "NF": "381234", "NG": "8021234567", "NI": "81234567", "NL": "612345678", "NO": "40612345", "NP": "9841234567", "NR": "5551234", "NU": "8884012", "NZ": "211234567", "OM": "92123456", "PA": "61234567", "PE": "912345678", "PF": "87123456", "PG": "70123456", "PH": "9051234567", "PK": "3012345678", "PL": "512345678", "PM": "551234", "PR": "7872345678", "PS": "599123456", "PT": "912345678", "PW": "6201234", "PY": "961456789", "QA": "33123456", "RE": "692123456", "RO": "712034567", "RS": "601234567", "RU": "9123456789", "RW": "720123456", "SA": "512345678", "SB": "7421234", "SC": "2510123", "SD": "911231234", "SE": "701234567", "SG": "81234567", "SH": "51234", "SI": "31234567", "SJ": "41234567", "SK": "912123456", "SL": "25123456", "SM": "66661212", "SN": "701234567", "SO": "71123456", "SR": "7412345", "SS": "977123456", "ST": "9812345", "SV": "70123456", "SX": "7215205678", "SY": "944567890", "SZ": "76123456", "TA": "8999", "TC": "6492311234", "TD": "63012345", "TG": "90112345", "TH": "812345678", "TJ": "917123456", "TK": "7290", "TL": "77212345", "TM": "66123456", "TN": "20123456", "TO": "7715123", "TR": "5012345678", "TT": "8682911234", "TV": "901234", "TW": "912345678", "TZ": "621234567", "UA": "501234567", "UG": "712345678", "US": "2015550123", "UY": "94231234", "UZ": "912345678", "VA": "3123456789", "VC": "7844301234", "VE": "4121234567", "VG": "2843001234", "VI": "3406421234", "VN": "912345678", "VU": "5912345", "WF": "821234", "WS": "7212345", "XK": "43201234", "YE": "712345678", "YT": "639012345", "ZA": "711234567", "ZM": "955123456", "ZW": "712345678" };
const normalizeTelInput = (input) => {
  const filteredResult = Object.fromEntries(Object.entries({
    countryCode: input ? input.country : null,
    isValid: input ? input.isValid() : false,
    isPossible: input ? input.isPossible() : false,
    phoneNumber: input ? input.number : null,
    countryCallingCode: input ? input.countryCallingCode : null,
    formattedNumber: input ? input.formatInternational() : null,
    nationalNumber: input ? input.nationalNumber : null,
    formatInternational: input ? input.formatInternational() : null,
    formatOriginal: input ? input.formatInternational().slice(input.countryCallingCode.length + 1).trim() : null,
    formatNational: input ? input.formatNational() : null,
    uri: input ? input.getURI() : null,
    e164: input ? input.number : null
  }).filter(([, value]) => value !== null));
  return filteredResult;
};
const generatePlaceholder = (country, { format, spaces } = {
  format: "national",
  spaces: true
}) => {
  const examplePhoneNumber = getExampleNumber(country, examplePhoneNumbers);
  if (examplePhoneNumber) {
    switch (format) {
      case "international":
        return spaces ? examplePhoneNumber.formatInternational() : examplePhoneNumber.number;
      default:
        return spaces ? examplePhoneNumber.formatInternational().slice(examplePhoneNumber.countryCallingCode.length + 1).trim() : examplePhoneNumber.nationalNumber;
    }
  } else {
    throw new Error(`No country found with this country code: ${country}`);
  }
};
const getInternationalPhoneNumberPrefix = (country) => {
  const ONLY_DIGITS_REGEXP = /^\d+$/;
  let prefix = "+" + getCountryCallingCode(country);
  const newMetadata = new Metadata();
  const leadingDigits = newMetadata.numberingPlan?.leadingDigits();
  if (leadingDigits && ONLY_DIGITS_REGEXP.test(leadingDigits)) {
    prefix += leadingDigits;
  }
  return prefix;
};
const getCountryForPartialE164Number = (partialE164Number, { country, countries, required } = {}) => {
  if (partialE164Number === "+") {
    return country;
  }
  const derived_country = getCountryFromPossiblyIncompleteInternationalPhoneNumber(partialE164Number);
  if (derived_country && (!countries || countries.indexOf(derived_country) >= 0)) {
    return derived_country;
  } else if (country && !required && !couldNumberBelongToCountry(partialE164Number, country)) {
    return void 0;
  }
  return country;
};
const getCountryFromPossiblyIncompleteInternationalPhoneNumber = (number) => {
  const formatter = new AsYouType();
  formatter.input(number);
  return formatter.getCountry();
};
const couldNumberBelongToCountry = (number, country) => {
  const intlPhoneNumberPrefix = getInternationalPhoneNumberPrefix(country);
  let i = 0;
  while (i < number.length && i < intlPhoneNumberPrefix.length) {
    if (number[i] !== intlPhoneNumberPrefix[i]) {
      return false;
    }
    i++;
  }
  return true;
};
const watcher = (initialValue, watchFunction) => {
  const { subscribe: subscribe2, update: update2 } = writable(initialValue);
  return {
    subscribe: subscribe2,
    set: (value) => {
      update2((oldvalue) => {
        watchFunction(oldvalue, value);
        return value;
      });
    }
  };
};
const TelInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let getPlaceholder;
  let $countryChangeWatch, $$unsubscribe_countryChangeWatch;
  const dispatch = createEventDispatcher();
  const defaultOptions = {
    autoPlaceholder: true,
    spaces: true,
    invalidateOnCountryChange: false,
    format: "national"
  };
  let { autocomplete = null } = $$props;
  let { class: classes = "" } = $$props;
  let { disabled = false } = $$props;
  let { id = "phone-input-" + /* @__PURE__ */ (/* @__PURE__ */ new Date()).getTime().toString(36) + Math.random().toString(36).slice(2) } = $$props;
  let { name: name2 = null } = $$props;
  let { placeholder = null } = $$props;
  let { readonly: readonly2 = null } = $$props;
  let { required = null } = $$props;
  let { size = null } = $$props;
  let { value } = $$props;
  let { country } = $$props;
  let { detailedValue = null } = $$props;
  let { valid = true } = $$props;
  let { options = defaultOptions } = $$props;
  let inputValue = value;
  let prevCountry = country;
  const combinedOptions = { ...defaultOptions, ...options };
  const updateCountry = (countryCode) => {
    if (countryCode !== country) {
      country = countryCode;
      prevCountry = country;
      dispatch("updateCountry", country);
    }
    return country;
  };
  const handleParsePhoneNumber = (rawInput, currCountry = null) => {
    const input = rawInput;
    if (input !== null) {
      const numberHasCountry = getCountryForPartialE164Number(input);
      if (numberHasCountry && numberHasCountry !== prevCountry) {
        updateCountry(numberHasCountry);
      }
      try {
        detailedValue = normalizeTelInput(parsePhoneNumberWithError(input, numberHasCountry ?? currCountry ?? void 0));
      } catch (err) {
        if (err instanceof ParseError) {
          detailedValue = { isValid: false, error: err.message };
          dispatch("parseError", err.message);
        } else {
          throw err;
        }
      }
      const formatOption = combinedOptions.format === "national" ? "nationalNumber" : "e164";
      const formattedValue = combinedOptions.format === "national" ? "formatOriginal" : "formatInternational";
      if (combinedOptions.spaces && detailedValue?.[formattedValue]) {
        inputValue = detailedValue[formattedValue] ?? null;
      } else if (detailedValue?.[formatOption]) {
        inputValue = detailedValue[formatOption] ?? null;
      }
      value = detailedValue?.e164 ?? input ?? null;
      valid = detailedValue?.isValid ?? false;
      dispatch("updateValid", valid);
      dispatch("updateValue", value);
      dispatch("updateDetailedValue", detailedValue);
    } else if (input === null && currCountry !== null) {
      if (currCountry !== prevCountry) {
        prevCountry = currCountry;
        valid = !options.invalidateOnCountryChange;
        value = null;
        inputValue = null;
        detailedValue = null;
        dispatch("updateValid", valid);
        dispatch("updateValue", value);
        dispatch("updateDetailedValue", detailedValue);
      }
    } else {
      valid = true;
      value = null;
      detailedValue = null;
      prevCountry = currCountry;
      dispatch("updateValid", valid);
      dispatch("updateDetailedValue", detailedValue);
      inputValue = null;
    }
  };
  let countryWatchInitRun = true;
  const countryChangeWatchFunction = () => {
    if (!countryWatchInitRun) {
      handleParsePhoneNumber(null, country);
    }
    countryWatchInitRun = false;
  };
  const countryChangeWatch = watcher(null, countryChangeWatchFunction);
  $$unsubscribe_countryChangeWatch = subscribe(countryChangeWatch, (value2) => $countryChangeWatch = value2);
  const updateValue = (newValue, newCountry) => {
    const castedValue = newValue;
    if (castedValue) {
      handleParsePhoneNumber(castedValue, getCountryForPartialE164Number(castedValue) || newCountry);
    }
  };
  if ($$props.autocomplete === void 0 && $$bindings.autocomplete && autocomplete !== void 0) $$bindings.autocomplete(autocomplete);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0) $$bindings.class(classes);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0) $$bindings.disabled(disabled);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.name === void 0 && $$bindings.name && name2 !== void 0) $$bindings.name(name2);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0) $$bindings.placeholder(placeholder);
  if ($$props.readonly === void 0 && $$bindings.readonly && readonly2 !== void 0) $$bindings.readonly(readonly2);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0) $$bindings.required(required);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  if ($$props.country === void 0 && $$bindings.country && country !== void 0) $$bindings.country(country);
  if ($$props.detailedValue === void 0 && $$bindings.detailedValue && detailedValue !== void 0) $$bindings.detailedValue(detailedValue);
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0) $$bindings.valid(valid);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.updateValue === void 0 && $$bindings.updateValue && updateValue !== void 0) $$bindings.updateValue(updateValue);
  set_store_value(countryChangeWatch, $countryChangeWatch = country, $countryChangeWatch);
  getPlaceholder = combinedOptions.autoPlaceholder && country ? generatePlaceholder(country, {
    format: combinedOptions.format,
    spaces: combinedOptions.spaces
  }) : placeholder;
  {
    if (value === null && inputValue !== null && detailedValue !== null) {
      inputValue = null;
      detailedValue = null;
      dispatch("updateDetailedValue", detailedValue);
    }
  }
  $$unsubscribe_countryChangeWatch();
  return `<input${add_attribute("autocomplete", autocomplete, 0)}${add_attribute("class", classes, 0)} ${disabled ? "disabled" : ""}${add_attribute("id", id, 0)}${add_attribute("name", name2, 0)} ${readonly2 ? "readonly" : ""} ${required ? "required" : ""}${add_attribute("size", size, 0)}${add_attribute("placeholder", getPlaceholder, 0)} type="tel"${add_attribute("value", inputValue, 0)}>`;
});
function last(array) {
  return array[array.length - 1];
}
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
({
  type: "hidden",
  "aria-hidden": true,
  hidden: true,
  tabIndex: -1,
  style: styleToString({
    position: "absolute",
    opacity: 0,
    "pointer-events": "none",
    margin: 0,
    transform: "translateX(-100%)"
  })
});
function portalAttr(portal) {
  if (portal !== null) {
    return "";
  }
  return void 0;
}
function lightable(value) {
  function subscribe2(run) {
    run(value);
    return () => {
    };
  }
  return { subscribe: subscribe2 };
}
const hiddenAction = (obj) => {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => key !== "action");
    }
  });
};
const isFunctionWithParams = (fn) => {
  return typeof fn === "function";
};
makeElement("empty");
function makeElement(name2, args) {
  const { stores, action, returned } = args ?? {};
  const derivedStore = (() => {
    if (stores && returned) {
      return derived(stores, (values) => {
        const result = returned(values);
        if (isFunctionWithParams(result)) {
          const fn = (...args2) => {
            return hiddenAction({
              ...result(...args2),
              [`data-melt-${name2}`]: "",
              action: action ?? noop
            });
          };
          fn.action = action ?? noop;
          return fn;
        }
        return hiddenAction({
          ...result,
          [`data-melt-${name2}`]: "",
          action: action ?? noop
        });
      });
    } else {
      const returnedFn = returned;
      const result = returnedFn?.();
      if (isFunctionWithParams(result)) {
        const resultFn = (...args2) => {
          return hiddenAction({
            ...result(...args2),
            [`data-melt-${name2}`]: "",
            action: action ?? noop
          });
        };
        resultFn.action = action ?? noop;
        return lightable(resultFn);
      }
      return lightable(hiddenAction({
        ...result,
        [`data-melt-${name2}`]: "",
        action: action ?? noop
      }));
    }
  })();
  const actionFn = action ?? (() => {
  });
  actionFn.subscribe = derivedStore.subscribe;
  return actionFn;
}
function createElHelpers(prefix) {
  const name2 = (part) => part ? `${prefix}-${part}` : prefix;
  const attribute = (part) => `data-melt-${prefix}${part ? `-${part}` : ""}`;
  const selector = (part) => `[data-melt-${prefix}${part ? `-${part}` : ""}]`;
  const getEl = (part) => document.querySelector(selector(part));
  return {
    name: name2,
    attribute,
    selector,
    getEl
  };
}
const isBrowser = typeof document !== "undefined";
const isFunction = (v) => typeof v === "function";
function isElement(element) {
  return element instanceof Element;
}
function isHTMLElement(element) {
  return element instanceof HTMLElement;
}
function isObject(value) {
  return value !== null && typeof value === "object";
}
function isReadable(value) {
  return isObject(value) && "subscribe" in value;
}
function executeCallbacks(...callbacks) {
  return (...args) => {
    for (const callback of callbacks) {
      if (typeof callback === "function") {
        callback(...args);
      }
    }
  };
}
function noop() {
}
function addEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  events.forEach((_event) => target.addEventListener(_event, handler, options));
  return () => {
    events.forEach((_event) => target.removeEventListener(_event, handler, options));
  };
}
function addMeltEventListener(target, event, handler, options) {
  const events = Array.isArray(event) ? event : [event];
  if (typeof handler === "function") {
    const handlerWithMelt = withMelt((_event) => handler(_event));
    events.forEach((_event) => target.addEventListener(_event, handlerWithMelt, options));
    return () => {
      events.forEach((_event) => target.removeEventListener(_event, handlerWithMelt, options));
    };
  }
  return () => noop();
}
function dispatchMeltEvent(originalEvent) {
  const node = originalEvent.currentTarget;
  if (!isHTMLElement(node))
    return null;
  const customMeltEvent = new CustomEvent(`m-${originalEvent.type}`, {
    detail: {
      originalEvent
    },
    cancelable: true
  });
  node.dispatchEvent(customMeltEvent);
  return customMeltEvent;
}
function withMelt(handler) {
  return (event) => {
    const customEvent = dispatchMeltEvent(event);
    if (customEvent?.defaultPrevented)
      return;
    return handler(event);
  };
}
const safeOnDestroy = (fn) => {
  try {
    onDestroy(fn);
  } catch {
    return fn;
  }
};
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
function withGet(store) {
  return {
    ...store,
    get: () => get_store_value(store)
  };
}
withGet.writable = function(initial) {
  const internal = writable(initial);
  let value = initial;
  return {
    subscribe: internal.subscribe,
    set(newValue) {
      internal.set(newValue);
      value = newValue;
    },
    update(updater) {
      const newValue = updater(value);
      internal.set(newValue);
      value = newValue;
    },
    get() {
      return value;
    }
  };
};
withGet.derived = function(stores, fn) {
  const subscribers = /* @__PURE__ */ new Map();
  const get = () => {
    const values = Array.isArray(stores) ? stores.map((store) => store.get()) : stores.get();
    return fn(values);
  };
  const subscribe2 = (subscriber) => {
    const unsubscribers = [];
    const storesArr = Array.isArray(stores) ? stores : [stores];
    storesArr.forEach((store) => {
      unsubscribers.push(store.subscribe(() => {
        subscriber(get());
      }));
    });
    subscriber(get());
    subscribers.set(subscriber, unsubscribers);
    return () => {
      const unsubscribers2 = subscribers.get(subscriber);
      if (unsubscribers2) {
        for (const unsubscribe of unsubscribers2) {
          unsubscribe();
        }
      }
      subscribers.delete(subscriber);
    };
  };
  return {
    get,
    subscribe: subscribe2
  };
};
const overridable = (_store, onChange) => {
  const store = withGet(_store);
  const update2 = (updater, sideEffect) => {
    store.update((curr) => {
      const next = updater(curr);
      let res = next;
      if (onChange) {
        res = onChange({ curr, next });
      }
      sideEffect?.(res);
      return res;
    });
  };
  const set = (curr) => {
    update2(() => curr);
  };
  return {
    ...store,
    update: update2,
    set
  };
};
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function generateId() {
  return nanoid(10);
}
function generateIds(args) {
  return args.reduce((acc, curr) => {
    acc[curr] = generateId();
    return acc;
  }, {});
}
const kbd = {
  ALT: "Alt",
  ARROW_DOWN: "ArrowDown",
  ARROW_LEFT: "ArrowLeft",
  ARROW_RIGHT: "ArrowRight",
  ARROW_UP: "ArrowUp",
  BACKSPACE: "Backspace",
  CAPS_LOCK: "CapsLock",
  CONTROL: "Control",
  DELETE: "Delete",
  END: "End",
  ENTER: "Enter",
  ESCAPE: "Escape",
  F1: "F1",
  F10: "F10",
  F11: "F11",
  F12: "F12",
  F2: "F2",
  F3: "F3",
  F4: "F4",
  F5: "F5",
  F6: "F6",
  F7: "F7",
  F8: "F8",
  F9: "F9",
  HOME: "Home",
  META: "Meta",
  PAGE_DOWN: "PageDown",
  PAGE_UP: "PageUp",
  SHIFT: "Shift",
  SPACE: " ",
  TAB: "Tab",
  CTRL: "Control",
  ASTERISK: "*",
  A: "a",
  P: "p"
};
const isDom = () => typeof window !== "undefined";
function getPlatform() {
  const agent = navigator.userAgentData;
  return agent?.platform ?? navigator.platform;
}
const pt = (v) => isDom() && v.test(getPlatform().toLowerCase());
const isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
const isMac = () => pt(/^mac/) && !isTouchDevice();
const isApple = () => pt(/mac|iphone|ipad|ipod/i);
const isIos = () => isApple() && !isMac();
const LOCK_CLASSNAME = "data-melt-scroll-lock";
function assignStyle(el, style) {
  if (!el)
    return;
  const previousStyle = el.style.cssText;
  Object.assign(el.style, style);
  return () => {
    el.style.cssText = previousStyle;
  };
}
function setCSSProperty(el, property, value) {
  if (!el)
    return;
  const previousValue = el.style.getPropertyValue(property);
  el.style.setProperty(property, value);
  return () => {
    if (previousValue) {
      el.style.setProperty(property, previousValue);
    } else {
      el.style.removeProperty(property);
    }
  };
}
function getPaddingProperty(documentElement) {
  const documentLeft = documentElement.getBoundingClientRect().left;
  const scrollbarX = Math.round(documentLeft) + documentElement.scrollLeft;
  return scrollbarX ? "paddingLeft" : "paddingRight";
}
function removeScroll(_document) {
  const doc = document;
  const win = doc.defaultView ?? window;
  const { documentElement, body } = doc;
  const locked = body.hasAttribute(LOCK_CLASSNAME);
  if (locked)
    return noop;
  body.setAttribute(LOCK_CLASSNAME, "");
  const scrollbarWidth = win.innerWidth - documentElement.clientWidth;
  const setScrollbarWidthProperty = () => setCSSProperty(documentElement, "--scrollbar-width", `${scrollbarWidth}px`);
  const paddingProperty = getPaddingProperty(documentElement);
  const scrollbarSidePadding = win.getComputedStyle(body)[paddingProperty];
  const setStyle = () => assignStyle(body, {
    overflow: "hidden",
    [paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`
  });
  const setIOSStyle = () => {
    const { scrollX, scrollY, visualViewport } = win;
    const offsetLeft = visualViewport?.offsetLeft ?? 0;
    const offsetTop = visualViewport?.offsetTop ?? 0;
    const restoreStyle = assignStyle(body, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(scrollY - Math.floor(offsetTop))}px`,
      left: `${-(scrollX - Math.floor(offsetLeft))}px`,
      right: "0",
      [paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`
    });
    return () => {
      restoreStyle?.();
      win.scrollTo(scrollX, scrollY);
    };
  };
  const cleanups = [setScrollbarWidthProperty(), isIos() ? setIOSStyle() : setStyle()];
  return () => {
    cleanups.forEach((fn) => fn?.());
    body.removeAttribute(LOCK_CLASSNAME);
  };
}
function effect(stores, fn) {
  let cb = void 0;
  const destroy = derived(stores, (stores2) => {
    cb?.();
    cb = fn(stores2);
  }).subscribe(noop);
  const unsub = () => {
    destroy();
    cb?.();
  };
  safeOnDestroy(unsub);
  return unsub;
}
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = withGet(writable(value));
  });
  return result;
}
function getPortalParent(node) {
  let parent = node.parentElement;
  while (isHTMLElement(parent) && !parent.hasAttribute("data-portal")) {
    parent = parent.parentElement;
  }
  return parent || "body";
}
function getPortalDestination(node, portalProp) {
  if (portalProp !== void 0)
    return portalProp;
  const portalParent = getPortalParent(node);
  if (portalParent === "body")
    return document.body;
  return null;
}
async function handleFocus(args) {
  const { prop, defaultEl } = args;
  await Promise.all([sleep(1), tick]);
  if (prop === void 0) {
    defaultEl?.focus();
    return;
  }
  const returned = isFunction(prop) ? prop(defaultEl) : prop;
  if (typeof returned === "string") {
    const el = document.querySelector(returned);
    if (!isHTMLElement(el))
      return;
    el.focus();
  } else if (isHTMLElement(returned)) {
    returned.focus();
  }
}
readable(void 0, (set) => {
  function clicked(event) {
    set(event);
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "pointerup", clicked, {
    passive: false,
    capture: true
  });
  return unsubscribe;
});
const documentEscapeKeyStore = readable(void 0, (set) => {
  function keydown(event) {
    if (event && event.key === kbd.ESCAPE) {
      set(event);
    }
    set(void 0);
  }
  const unsubscribe = addEventListener(document, "keydown", keydown, {
    passive: false
  });
  return unsubscribe;
});
const useEscapeKeydown = (node, config = {}) => {
  let unsub = noop;
  function update2(config2 = {}) {
    unsub();
    const options = { enabled: true, ...config2 };
    const enabled = isReadable(options.enabled) ? options.enabled : readable(options.enabled);
    unsub = executeCallbacks(
      // Handle escape keydowns
      documentEscapeKeyStore.subscribe((e) => {
        if (!e || !get_store_value(enabled))
          return;
        const target = e.target;
        if (!isHTMLElement(target) || target.closest("[data-escapee]") !== node) {
          return;
        }
        e.preventDefault();
        if (options.ignore) {
          if (isFunction(options.ignore)) {
            if (options.ignore(e))
              return;
          } else if (Array.isArray(options.ignore)) {
            if (options.ignore.length > 0 && options.ignore.some((ignoreEl) => {
              return ignoreEl && target === ignoreEl;
            }))
              return;
          }
        }
        options.handler?.(e);
      }),
      effect(enabled, ($enabled) => {
        if ($enabled) {
          node.dataset.escapee = "";
        } else {
          delete node.dataset.escapee;
        }
      })
    );
  }
  update2(config);
  return {
    update: update2,
    destroy() {
      node.removeAttribute("data-escapee");
      unsub();
    }
  };
};
function createFocusTrap(config = {}) {
  let trap;
  const { immediate, ...focusTrapOptions } = config;
  const hasFocus = writable(false);
  const isPaused = writable(false);
  const activate = (opts) => trap?.activate(opts);
  const deactivate = (opts) => {
    trap?.deactivate(opts);
  };
  const pause = () => {
    if (trap) {
      trap.pause();
      isPaused.set(true);
    }
  };
  const unpause = () => {
    if (trap) {
      trap.unpause();
      isPaused.set(false);
    }
  };
  const useFocusTrap = (node) => {
    trap = createFocusTrap$1(node, {
      ...focusTrapOptions,
      onActivate() {
        hasFocus.set(true);
        config.onActivate?.();
      },
      onDeactivate() {
        hasFocus.set(false);
        config.onDeactivate?.();
      }
    });
    if (immediate) {
      activate();
    }
    return {
      destroy() {
        deactivate();
        trap = void 0;
      }
    };
  };
  return {
    useFocusTrap,
    hasFocus: readonly(hasFocus),
    isPaused: readonly(isPaused),
    activate,
    deactivate,
    pause,
    unpause
  };
}
const visibleModals = [];
const useModal = (node, config) => {
  let unsubInteractOutside = noop;
  function removeNodeFromVisibleModals() {
    const index = visibleModals.indexOf(node);
    if (index >= 0) {
      visibleModals.splice(index, 1);
    }
  }
  function update2(config2) {
    unsubInteractOutside();
    const { open, onClose, shouldCloseOnInteractOutside, closeOnInteractOutside } = config2;
    sleep(100).then(() => {
      if (open) {
        visibleModals.push(node);
      } else {
        removeNodeFromVisibleModals();
      }
    });
    function isLastModal() {
      return last(visibleModals) === node;
    }
    function closeModal() {
      if (isLastModal() && onClose) {
        onClose();
        removeNodeFromVisibleModals();
      }
    }
    function onInteractOutsideStart(e) {
      const target = e.target;
      if (!isElement(target))
        return;
      if (target && isLastModal()) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
    function onInteractOutside(e) {
      if (shouldCloseOnInteractOutside?.(e) && isLastModal()) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        closeModal();
      }
    }
    unsubInteractOutside = useInteractOutside(node, {
      onInteractOutsideStart,
      onInteractOutside: closeOnInteractOutside ? onInteractOutside : void 0,
      enabled: open
    }).destroy;
  }
  update2(config);
  return {
    update: update2,
    destroy() {
      removeNodeFromVisibleModals();
      unsubInteractOutside();
    }
  };
};
const usePortal = (el, target = "body") => {
  let targetEl;
  if (!isHTMLElement(target) && typeof target !== "string") {
    return {
      destroy: noop
    };
  }
  async function update2(newTarget) {
    target = newTarget;
    if (typeof target === "string") {
      targetEl = document.querySelector(target);
      if (targetEl === null) {
        await tick();
        targetEl = document.querySelector(target);
      }
      if (targetEl === null) {
        throw new Error(`No element found matching css selector: "${target}"`);
      }
    } else if (target instanceof HTMLElement) {
      targetEl = target;
    } else {
      throw new TypeError(`Unknown portal target type: ${target === null ? "null" : typeof target}. Allowed types: string (CSS selector) or HTMLElement.`);
    }
    el.dataset.portal = "";
    targetEl.appendChild(el);
    el.hidden = false;
  }
  function destroy() {
    el.remove();
  }
  update2(target);
  return {
    update: update2,
    destroy
  };
};
const useInteractOutside = (node, config) => {
  let unsub = noop;
  let unsubClick = noop;
  let isPointerDown = false;
  let isPointerDownInside = false;
  let ignoreEmulatedMouseEvents = false;
  function update2(config2) {
    unsub();
    unsubClick();
    const { onInteractOutside, onInteractOutsideStart, enabled } = config2;
    if (!enabled)
      return;
    function onPointerDown(e) {
      if (onInteractOutside && isValidEvent(e, node)) {
        onInteractOutsideStart?.(e);
      }
      const target = e.target;
      if (isElement(target) && isOrContainsTarget(node, target)) {
        isPointerDownInside = true;
      }
      isPointerDown = true;
    }
    function triggerInteractOutside(e) {
      onInteractOutside?.(e);
    }
    const documentObj = getOwnerDocument(node);
    if (typeof PointerEvent !== "undefined") {
      const onPointerUp = (e) => {
        unsubClick();
        const handler = (e2) => {
          if (shouldTriggerInteractOutside(e2)) {
            triggerInteractOutside(e2);
          }
          resetPointerState();
        };
        if (e.pointerType === "touch") {
          unsubClick = addEventListener(documentObj, "click", handler, {
            capture: true,
            once: true
          });
          return;
        }
        handler(e);
      };
      unsub = executeCallbacks(addEventListener(documentObj, "pointerdown", onPointerDown, true), addEventListener(documentObj, "pointerup", onPointerUp, true));
    } else {
      const onMouseUp = (e) => {
        if (ignoreEmulatedMouseEvents) {
          ignoreEmulatedMouseEvents = false;
        } else if (shouldTriggerInteractOutside(e)) {
          triggerInteractOutside(e);
        }
        resetPointerState();
      };
      const onTouchEnd = (e) => {
        ignoreEmulatedMouseEvents = true;
        if (shouldTriggerInteractOutside(e)) {
          triggerInteractOutside(e);
        }
        resetPointerState();
      };
      unsub = executeCallbacks(addEventListener(documentObj, "mousedown", onPointerDown, true), addEventListener(documentObj, "mouseup", onMouseUp, true), addEventListener(documentObj, "touchstart", onPointerDown, true), addEventListener(documentObj, "touchend", onTouchEnd, true));
    }
  }
  function shouldTriggerInteractOutside(e) {
    if (isPointerDown && !isPointerDownInside && isValidEvent(e, node)) {
      return true;
    }
    return false;
  }
  function resetPointerState() {
    isPointerDown = false;
    isPointerDownInside = false;
  }
  update2(config);
  return {
    update: update2,
    destroy() {
      unsub();
      unsubClick();
    }
  };
};
function isValidEvent(e, node) {
  if ("button" in e && e.button > 0)
    return false;
  const target = e.target;
  if (!isElement(target))
    return false;
  const ownerDocument = target.ownerDocument;
  if (!ownerDocument || !ownerDocument.documentElement.contains(target)) {
    return false;
  }
  return node && !isOrContainsTarget(node, target);
}
function isOrContainsTarget(node, target) {
  return node === target || node.contains(target);
}
function getOwnerDocument(el) {
  return el?.ownerDocument ?? document;
}
({
  prefix: "",
  disabled: readable(false),
  required: readable(false),
  name: readable(void 0)
});
const defaults$1 = {
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  preventDeselect: false,
  numberOfMonths: 1,
  pagedNavigation: false,
  weekStartsOn: 0,
  fixedWeeks: false,
  calendarLabel: "Event Date",
  locale: "en",
  minValue: void 0,
  maxValue: void 0,
  disabled: false,
  readonly: false,
  weekdayFormat: "narrow"
};
({
  isDateDisabled: void 0,
  isDateUnavailable: void 0,
  value: void 0,
  positioning: {
    placement: "bottom"
  },
  closeOnEscape: true,
  closeOnOutsideClick: true,
  onOutsideClick: void 0,
  preventScroll: false,
  forceVisible: false,
  locale: "en",
  granularity: void 0,
  disabled: false,
  readonly: false,
  minValue: void 0,
  maxValue: void 0,
  weekdayFormat: "narrow",
  ...omit(defaults$1, "isDateDisabled", "isDateUnavailable", "value", "locale", "disabled", "readonly", "minValue", "maxValue", "weekdayFormat")
});
const { name } = createElHelpers("dialog");
const defaults = {
  preventScroll: true,
  closeOnEscape: true,
  closeOnOutsideClick: true,
  role: "dialog",
  defaultOpen: false,
  portal: void 0,
  forceVisible: false,
  openFocus: void 0,
  closeFocus: void 0,
  onOutsideClick: void 0
};
const dialogIdParts = ["content", "title", "description"];
function createDialog(props) {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "ids"));
  const { preventScroll, closeOnEscape, closeOnOutsideClick, role, portal, forceVisible, openFocus, closeFocus, onOutsideClick } = options;
  const activeTrigger = withGet.writable(null);
  const ids = toWritableStores({
    ...generateIds(dialogIdParts),
    ...withDefaults.ids
  });
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const open = overridable(openWritable, withDefaults?.onOpenChange);
  const isVisible = derived([open, forceVisible], ([$open, $forceVisible]) => {
    return $open || $forceVisible;
  });
  let unsubScroll = noop;
  function handleOpen(e) {
    const el = e.currentTarget;
    const triggerEl = e.currentTarget;
    if (!isHTMLElement(el) || !isHTMLElement(triggerEl))
      return;
    open.set(true);
    activeTrigger.set(triggerEl);
  }
  function handleClose() {
    open.set(false);
    handleFocus({
      prop: closeFocus.get(),
      defaultEl: activeTrigger.get()
    });
  }
  const trigger = makeElement(name("trigger"), {
    stores: [open],
    returned: ([$open]) => {
      return {
        "aria-haspopup": "dialog",
        "aria-expanded": $open,
        type: "button"
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", (e) => {
        handleOpen(e);
      }), addMeltEventListener(node, "keydown", (e) => {
        if (e.key !== kbd.ENTER && e.key !== kbd.SPACE)
          return;
        e.preventDefault();
        handleOpen(e);
      }));
      return {
        destroy: unsub
      };
    }
  });
  const overlay = makeElement(name("overlay"), {
    stores: [isVisible, open],
    returned: ([$isVisible, $open]) => {
      return {
        hidden: $isVisible ? void 0 : true,
        tabindex: -1,
        style: styleToString({
          display: $isVisible ? void 0 : "none"
        }),
        "aria-hidden": true,
        "data-state": $open ? "open" : "closed"
      };
    },
    action: (node) => {
      let unsubEscapeKeydown = noop;
      if (closeOnEscape.get()) {
        const escapeKeydown = useEscapeKeydown(node, {
          handler: () => {
            handleClose();
          }
        });
        if (escapeKeydown && escapeKeydown.destroy) {
          unsubEscapeKeydown = escapeKeydown.destroy;
        }
      }
      return {
        destroy() {
          unsubEscapeKeydown();
        }
      };
    }
  });
  const content = makeElement(name("content"), {
    stores: [isVisible, ids.content, ids.description, ids.title, open],
    returned: ([$isVisible, $contentId, $descriptionId, $titleId, $open]) => {
      return {
        id: $contentId,
        role: role.get(),
        "aria-describedby": $descriptionId,
        "aria-labelledby": $titleId,
        "aria-modal": $isVisible ? "true" : void 0,
        "data-state": $open ? "open" : "closed",
        tabindex: -1,
        hidden: $isVisible ? void 0 : true,
        style: styleToString({
          display: $isVisible ? void 0 : "none"
        })
      };
    },
    action: (node) => {
      let activate = noop;
      let deactivate = noop;
      const destroy = executeCallbacks(effect([open, closeOnOutsideClick, closeOnEscape], ([$open, $closeOnOutsideClick, $closeOnEscape]) => {
        if (!$open)
          return;
        const focusTrap = createFocusTrap({
          immediate: false,
          escapeDeactivates: $closeOnEscape,
          clickOutsideDeactivates: $closeOnOutsideClick,
          allowOutsideClick: true,
          returnFocusOnDeactivate: false,
          fallbackFocus: node
        });
        activate = focusTrap.activate;
        deactivate = focusTrap.deactivate;
        const ac = focusTrap.useFocusTrap(node);
        if (ac && ac.destroy) {
          return ac.destroy;
        } else {
          return focusTrap.deactivate;
        }
      }), effect([closeOnOutsideClick, open], ([$closeOnOutsideClick, $open]) => {
        return useModal(node, {
          open: $open,
          closeOnInteractOutside: $closeOnOutsideClick,
          onClose() {
            handleClose();
          },
          shouldCloseOnInteractOutside(e) {
            onOutsideClick.get()?.(e);
            if (e.defaultPrevented)
              return false;
            return true;
          }
        }).destroy;
      }), effect([closeOnEscape], ([$closeOnEscape]) => {
        if (!$closeOnEscape)
          return noop;
        return useEscapeKeydown(node, { handler: handleClose }).destroy;
      }), effect([isVisible], ([$isVisible]) => {
        tick().then(() => {
          if (!$isVisible) {
            deactivate();
          } else {
            activate();
          }
        });
      }));
      return {
        destroy: () => {
          unsubScroll();
          destroy();
        }
      };
    }
  });
  const portalled = makeElement(name("portalled"), {
    stores: portal,
    returned: ($portal) => ({
      "data-portal": portalAttr($portal)
    }),
    action: (node) => {
      const unsubPortal = effect([portal], ([$portal]) => {
        if ($portal === null)
          return noop;
        const portalDestination = getPortalDestination(node, $portal);
        if (portalDestination === null)
          return noop;
        return usePortal(node, portalDestination).destroy;
      });
      return {
        destroy() {
          unsubPortal();
        }
      };
    }
  });
  const title = makeElement(name("title"), {
    stores: [ids.title],
    returned: ([$titleId]) => ({
      id: $titleId
    })
  });
  const description = makeElement(name("description"), {
    stores: [ids.description],
    returned: ([$descriptionId]) => ({
      id: $descriptionId
    })
  });
  const close = makeElement(name("close"), {
    returned: () => ({
      type: "button"
    }),
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        handleClose();
      }), addMeltEventListener(node, "keydown", (e) => {
        if (e.key !== kbd.SPACE && e.key !== kbd.ENTER)
          return;
        e.preventDefault();
        handleClose();
      }));
      return {
        destroy: unsub
      };
    }
  });
  effect([open, preventScroll], ([$open, $preventScroll]) => {
    if (!isBrowser)
      return;
    if ($preventScroll && $open)
      unsubScroll = removeScroll();
    if ($open) {
      const contentEl = document.getElementById(ids.content.get());
      handleFocus({ prop: openFocus.get(), defaultEl: contentEl });
    }
    return () => {
      if (!forceVisible.get()) {
        unsubScroll();
      }
    };
  });
  return {
    ids,
    elements: {
      content,
      trigger,
      title,
      description,
      overlay,
      close,
      portalled
    },
    states: {
      open
    },
    options
  };
}
function createBitAttrs(bit, parts) {
  const attrs = {};
  parts.forEach((part) => {
    attrs[part] = {
      [`data-${bit}-${part}`]: ""
    };
  });
  return (part) => attrs[part];
}
function createDispatcher() {
  const dispatch = createEventDispatcher();
  return (e) => {
    const { originalEvent } = e.detail;
    const { cancelable } = e;
    const type = originalEvent.type;
    const shouldContinue = dispatch(type, { originalEvent, currentTarget: originalEvent.currentTarget }, { cancelable });
    if (!shouldContinue) {
      e.preventDefault();
    }
  };
}
function removeUndefined(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function getOptionUpdater(options) {
  return function(key, value) {
    if (value === void 0)
      return;
    const store = options[key];
    if (store) {
      store.set(value);
    }
  };
}
function getAlertDialogData() {
  const NAME = "alert-dialog";
  const PARTS = [
    "action",
    "cancel",
    "content",
    "description",
    "overlay",
    "portal",
    "title",
    "trigger"
  ];
  return { NAME, PARTS };
}
function setCtx(props) {
  const { NAME, PARTS } = getAlertDialogData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const initAlertDialog = createDialog({
    ...removeUndefined(props),
    role: "alertdialog",
    forceVisible: true
  });
  const alertDialog = {
    ...initAlertDialog,
    getAttrs,
    updateOption: getOptionUpdater(initAlertDialog.options)
  };
  setContext(NAME, alertDialog);
  return {
    ...alertDialog,
    updateOption: getOptionUpdater(alertDialog.options),
    getAttrs
  };
}
function getCtx() {
  const { NAME } = getAlertDialogData();
  return getContext(NAME);
}
const Alert_dialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $idValues, $$unsubscribe_idValues;
  let { preventScroll = void 0 } = $$props;
  let { closeOnEscape = void 0 } = $$props;
  let { closeOnOutsideClick = false } = $$props;
  let { portal = void 0 } = $$props;
  let { open = void 0 } = $$props;
  let { onOpenChange = void 0 } = $$props;
  let { openFocus = void 0 } = $$props;
  let { closeFocus = void 0 } = $$props;
  let { onOutsideClick = void 0 } = $$props;
  const { states: { open: localOpen }, updateOption, ids } = setCtx({
    closeOnEscape,
    preventScroll,
    closeOnOutsideClick,
    portal,
    forceVisible: true,
    defaultOpen: open,
    openFocus,
    closeFocus,
    onOutsideClick,
    onOpenChange: ({ next }) => {
      if (open !== next) {
        onOpenChange?.(next);
        open = next;
      }
      return next;
    }
  });
  const idValues = derived([ids.content, ids.description, ids.title], ([$contentId, $descriptionId, $titleId]) => ({
    content: $contentId,
    description: $descriptionId,
    title: $titleId
  }));
  $$unsubscribe_idValues = subscribe(idValues, (value) => $idValues = value);
  if ($$props.preventScroll === void 0 && $$bindings.preventScroll && preventScroll !== void 0) $$bindings.preventScroll(preventScroll);
  if ($$props.closeOnEscape === void 0 && $$bindings.closeOnEscape && closeOnEscape !== void 0) $$bindings.closeOnEscape(closeOnEscape);
  if ($$props.closeOnOutsideClick === void 0 && $$bindings.closeOnOutsideClick && closeOnOutsideClick !== void 0) $$bindings.closeOnOutsideClick(closeOnOutsideClick);
  if ($$props.portal === void 0 && $$bindings.portal && portal !== void 0) $$bindings.portal(portal);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0) $$bindings.open(open);
  if ($$props.onOpenChange === void 0 && $$bindings.onOpenChange && onOpenChange !== void 0) $$bindings.onOpenChange(onOpenChange);
  if ($$props.openFocus === void 0 && $$bindings.openFocus && openFocus !== void 0) $$bindings.openFocus(openFocus);
  if ($$props.closeFocus === void 0 && $$bindings.closeFocus && closeFocus !== void 0) $$bindings.closeFocus(closeFocus);
  if ($$props.onOutsideClick === void 0 && $$bindings.onOutsideClick && onOutsideClick !== void 0) $$bindings.onOutsideClick(onOutsideClick);
  open !== void 0 && localOpen.set(open);
  {
    updateOption("preventScroll", preventScroll);
  }
  {
    updateOption("closeOnEscape", closeOnEscape);
  }
  {
    updateOption("closeOnOutsideClick", closeOnOutsideClick);
  }
  {
    updateOption("portal", portal);
  }
  {
    updateOption("openFocus", openFocus);
  }
  {
    updateOption("closeFocus", closeFocus);
  }
  {
    updateOption("onOutsideClick", onOutsideClick);
  }
  $$unsubscribe_idValues();
  return `${slots.default ? slots.default({ ids: $idValues }) : ``}`;
});
const Alert_dialog_title$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["level", "asChild", "id", "el"]);
  let $title, $$unsubscribe_title;
  let { level = "h2" } = $$props;
  let { asChild = false } = $$props;
  let { id = void 0 } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { title }, ids, getAttrs } = getCtx();
  $$unsubscribe_title = subscribe(title, (value) => $title = value);
  const attrs = getAttrs("title");
  if ($$props.level === void 0 && $$bindings.level && level !== void 0) $$bindings.level(level);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  {
    if (id) {
      ids.title.set(id);
    }
  }
  builder = $title;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_title();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `${((tag) => {
    return tag ? `<${level}${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${is_void(tag) ? "" : `${slots.default ? slots.default({ builder }) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(level)}`}`;
});
const Alert_dialog_action$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $close, $$unsubscribe_close;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { close }, getAttrs } = getCtx();
  $$unsubscribe_close = subscribe(close, (value) => $close = value);
  createDispatcher();
  const attrs = getAttrs("action");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  builder = $close;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_close();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
const Alert_dialog_portal$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $portalled, $$unsubscribe_portalled;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { portalled }, getAttrs } = getCtx();
  $$unsubscribe_portalled = subscribe(portalled, (value) => $portalled = value);
  const attrs = getAttrs("portal");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  builder = $portalled;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_portalled();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>`}`;
});
const Alert_dialog_content$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "id",
    "asChild",
    "el"
  ]);
  let $content, $$unsubscribe_content;
  let $open, $$unsubscribe_open;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { id = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { content }, states: { open }, ids, getAttrs } = getCtx();
  $$unsubscribe_content = subscribe(content, (value) => $content = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  const attrs = getAttrs("content");
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0) $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0) $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0) $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0) $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0) $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  {
    if (id) {
      ids.content.set(id);
    }
  }
  builder = $content;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_content();
  $$unsubscribe_open();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${inTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : `${$open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</div>` : ``}`}`}`}`}`}`;
});
const Alert_dialog_overlay$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "el"
  ]);
  let $overlay, $$unsubscribe_overlay;
  let $open, $$unsubscribe_open;
  let { transition = void 0 } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { inTransition = void 0 } = $$props;
  let { inTransitionConfig = void 0 } = $$props;
  let { outTransition = void 0 } = $$props;
  let { outTransitionConfig = void 0 } = $$props;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { overlay }, states: { open }, getAttrs } = getCtx();
  $$unsubscribe_overlay = subscribe(overlay, (value) => $overlay = value);
  $$unsubscribe_open = subscribe(open, (value) => $open = value);
  const attrs = getAttrs("overlay");
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0) $$bindings.transitionConfig(transitionConfig);
  if ($$props.inTransition === void 0 && $$bindings.inTransition && inTransition !== void 0) $$bindings.inTransition(inTransition);
  if ($$props.inTransitionConfig === void 0 && $$bindings.inTransitionConfig && inTransitionConfig !== void 0) $$bindings.inTransitionConfig(inTransitionConfig);
  if ($$props.outTransition === void 0 && $$bindings.outTransition && outTransition !== void 0) $$bindings.outTransition(outTransition);
  if ($$props.outTransitionConfig === void 0 && $$bindings.outTransitionConfig && outTransitionConfig !== void 0) $$bindings.outTransitionConfig(outTransitionConfig);
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  builder = $overlay;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_overlay();
  $$unsubscribe_open();
  return `${asChild && $open ? `${slots.default ? slots.default({ builder }) : ``}` : `${transition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${inTransition && outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${inTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${outTransition && $open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : `${$open ? `<div${spread([escape_object(builder), escape_object($$restProps)], {})}${add_attribute("this", el, 0)}></div>` : ``}`}`}`}`}`}`;
});
const Alert_dialog_trigger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let builder;
  let $$restProps = compute_rest_props($$props, ["asChild", "el"]);
  let $trigger, $$unsubscribe_trigger;
  let { asChild = false } = $$props;
  let { el = void 0 } = $$props;
  const { elements: { trigger }, getAttrs } = getCtx();
  $$unsubscribe_trigger = subscribe(trigger, (value) => $trigger = value);
  createDispatcher();
  const attrs = getAttrs("trigger");
  if ($$props.asChild === void 0 && $$bindings.asChild && asChild !== void 0) $$bindings.asChild(asChild);
  if ($$props.el === void 0 && $$bindings.el && el !== void 0) $$bindings.el(el);
  builder = $trigger;
  {
    Object.assign(builder, attrs);
  }
  $$unsubscribe_trigger();
  return `${asChild ? `${slots.default ? slots.default({ builder }) : ``}` : `<button${spread([escape_object(builder), { type: "button" }, escape_object($$restProps)], {})}${add_attribute("this", el, 0)}>${slots.default ? slots.default({ builder }) : ``}</button>`}`;
});
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const flyAndScale = (node, params = { y: -8, x: 0, start: 0.95, duration: 150 }) => {
  const style = getComputedStyle(node);
  const transform = style.transform === "none" ? "" : style.transform;
  const scaleConversion = (valueA, scaleA, scaleB) => {
    const [minA, maxA] = scaleA;
    const [minB, maxB] = scaleB;
    const percentage = (valueA - minA) / (maxA - minA);
    const valueB = percentage * (maxB - minB) + minB;
    return valueB;
  };
  const styleToString2 = (style2) => {
    return Object.keys(style2).reduce((str, key) => {
      if (style2[key] === void 0) return str;
      return str + `${key}:${style2[key]};`;
    }, "");
  };
  return {
    duration: params.duration ?? 200,
    delay: 0,
    css: (t) => {
      const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
      const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
      const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);
      return styleToString2({
        transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
        opacity: t
      });
    },
    easing: cubicOut
  };
};
const Alert_dialog_title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "level"]);
  let { class: className = void 0 } = $$props;
  let { level = "h3" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.level === void 0 && $$bindings.level && level !== void 0) $$bindings.level(level);
  return `${validate_component(Alert_dialog_title$1, "AlertDialogPrimitive.Title").$$render(
    $$result,
    Object.assign(
      {},
      {
        class: cn("text-lg font-semibold", className)
      },
      { level },
      $$restProps
    ),
    {},
    {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    }
  )}`;
});
const buttonVariants = tv({
  base: "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline: "border-input bg-background hover:bg-accent hover:text-accent-foreground border",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const Alert_dialog_action = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `${validate_component(Alert_dialog_action$1, "AlertDialogPrimitive.Action").$$render($$result, Object.assign({}, { class: cn(buttonVariants(), className) }, $$restProps), {}, {
    default: ({ builder }) => {
      return `${slots.default ? slots.default({ builder }) : ``}`;
    }
  })}`;
});
const Alert_dialog_portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  return `${validate_component(Alert_dialog_portal$1, "AlertDialogPrimitive.Portal").$$render($$result, Object.assign({}, $$restProps), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Alert_dialog_footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Alert_dialog_header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(cn("flex flex-col space-y-2 text-center sm:text-left", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</div>`;
});
function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const Alert_dialog_overlay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "transition", "transitionConfig"]);
  let { class: className = void 0 } = $$props;
  let { transition = fade } = $$props;
  let { transitionConfig = { duration: 150 } } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0) $$bindings.transitionConfig(transitionConfig);
  return `${validate_component(Alert_dialog_overlay$1, "AlertDialogPrimitive.Overlay").$$render(
    $$result,
    Object.assign(
      {},
      { transition },
      { transitionConfig },
      {
        class: cn("bg-background/80 fixed inset-0 z-50 backdrop-blur-sm ", className)
      },
      $$restProps
    ),
    {},
    {}
  )}`;
});
const Alert_dialog_content = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["transition", "transitionConfig", "class"]);
  let { transition = flyAndScale } = $$props;
  let { transitionConfig = void 0 } = $$props;
  let { class: className = void 0 } = $$props;
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.transitionConfig === void 0 && $$bindings.transitionConfig && transitionConfig !== void 0) $$bindings.transitionConfig(transitionConfig);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `${validate_component(Alert_dialog_portal, "AlertDialog.Portal").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Alert_dialog_overlay, "AlertDialog.Overlay").$$render($$result, {}, {}, {})} ${validate_component(Alert_dialog_content$1, "AlertDialogPrimitive.Content").$$render(
        $$result,
        Object.assign(
          {},
          { transition },
          { transitionConfig },
          {
            class: cn("bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg sm:rounded-lg md:w-full", className)
          },
          $$restProps
        ),
        {},
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          }
        }
      )}`;
    }
  })}`;
});
const Root = Alert_dialog;
const Trigger = Alert_dialog_trigger;
const SuccessModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { valid } = $$props;
  let { value } = $$props;
  let message = "Introduce tu número de teléfono";
  function setMessage() {
    if (value === "") {
      message = "Introduce tu número de teléfono";
    } else {
      message = "¡Registro exitoso!";
    }
  }
  if ($$props.valid === void 0 && $$bindings.valid && valid !== void 0) $$bindings.valid(valid);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0) $$bindings.value(value);
  return `${validate_component(Root, "AlertDialog.Root").$$render(
    $$result,
    {
      closeOnEscape: true,
      closeOnOutsideClick: true,
      onOpenChange: () => setMessage()
    },
    {},
    {
      default: () => {
        return `${validate_component(Trigger, "AlertDialog.Trigger").$$render($$result, {}, {}, {
          default: () => {
            return `<button ${!valid ? "disabled" : ""} type="submit" class="text-white flex items-center justify-center space-x-1 w-fit bg-agreen hover:bg-green-700 disabled:bg-gray-400 f5-latino rounded-full px-5 py-2 mt-1 mb-5"><div class="" data-svelte-h="svelte-6iy8nw"><img class="w-4 h-4" src="/images/ICONOS/whatsapp.png" alt="WHATSAPP ICON"></div> <p class="f10-latino" data-svelte-h="svelte-18vqdum">Recibir notificaciones</p></button>`;
          }
        })} ${validate_component(Alert_dialog_content, "AlertDialog.Content").$$render($$result, { class: "w-5/6 rounded-lg" }, {}, {
          default: () => {
            return `${validate_component(Alert_dialog_header, "AlertDialog.Header").$$render($$result, {}, {}, {
              default: () => {
                return `  ${validate_component(Alert_dialog_title, "AlertDialog.Title").$$render($$result, {}, {}, {
                  default: () => {
                    return `<p class="f6-latino text-agreen">${escape(message)}</p> <p class="f5-latino leading-none text-agreen" data-svelte-h="svelte-10fmah">Calendario disponible a partir del 1 de Diciembre del 2024</p>`;
                  }
                })} `;
              }
            })} ${validate_component(Alert_dialog_footer, "AlertDialog.Footer").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Alert_dialog_action, "AlertDialog.Action").$$render(
                  $$result,
                  {
                    class: "text-white bg-agreen hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-agreen font-medium rounded-lg text-sm inline-flex items-center px-8 py-2.5 text-center"
                  },
                  {},
                  {
                    default: () => {
                      return ` <p class="f4-latino" data-svelte-h="svelte-1uq0sad">OK</p>`;
                    }
                  }
                )}`;
              }
            })}`;
          }
        })}`;
      }
    }
  )}`;
});
const NotificationInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let value = "";
  let country = "MX";
  let valid = true;
  let { detailedValue = null } = $$props;
  let { options = {} } = $$props;
  if ($$props.detailedValue === void 0 && $$bindings.detailedValue && detailedValue !== void 0) $$bindings.detailedValue(detailedValue);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="flex w-full items-center justify-center"><select class="form-select appearance-none block px-3 py-1.5 bg-clip-padding bg-no-repeat cursor-pointer text-agreen f10-latino rounded-s-full m-0" aria-label="Default select example" name="Country"><option${add_attribute("value", null, 0)} ${country !== null ? "hidden" : ""}>Selecciona</option>${each(normalizedCountries, (currentCountry) => {
      return `<option${add_attribute("value", currentCountry.iso2, 0)} ${currentCountry.iso2 === country ? "selected" : ""}${add_attribute("aria-selected", currentCountry.iso2 === country, 0)}>${escape(currentCountry.iso2)} (+${escape(currentCountry.dialCode)})
      </option>`;
    })}</select> ${validate_component(TelInput, "TelInput").$$render(
      $$result,
      {
        options,
        placeholder: "",
        class: "block px-3 py-1.5 m-0\n    bg-clip-padding bg-no-repeat cursor-pointer\n    text-agreen f10-latino rounded-e-full\n    " + (valid ? "border border-gray-300 " : "border-2 border-ared"),
        country,
        valid,
        value,
        detailedValue
      },
      {
        country: ($$value) => {
          country = $$value;
          $$settled = false;
        },
        valid: ($$value) => {
          valid = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        },
        detailedValue: ($$value) => {
          detailedValue = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div> <div class="flex flex-col w-full items-center justify-center">${!valid ? `<p class="mt-2 mb-4 f10-latino text-ared" data-svelte-h="svelte-1vigim1">El número de teléfono no es válido.</p>` : ``}  ${validate_component(SuccessModal, "SuccessModal").$$render(
      $$result,
      { value, valid },
      {
        value: ($$value) => {
          value = $$value;
          $$settled = false;
        },
        valid: ($$value) => {
          valid = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const TimeRemaining = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { testingHours = false } = $$props;
  let timeRemaining = "";
  if ($$props.testingHours === void 0 && $$bindings.testingHours && testingHours !== void 0) $$bindings.testingHours(testingHours);
  return `<div class="my-0 text-agreen"><p class="f6-latino" data-svelte-h="svelte-1ase7dj">Faltan</p> <p class="f8-ivy leading-tight lg:leading-none">${escape(timeRemaining)}</p></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let testingHours = false;
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="w-screen h-[100vh] z-10 inner-div box-border overflow-y-hidden relative border-[12px] border-ared bg-cover flex flex-col text-center" style="background: url('/images/FONDOS/FONDO.webp') no-repeat;"> ${validate_component(HeaderAndLogo, "HeaderAndLogo").$$render($$result, { hideText: true }, {}, {})}  ${validate_component(LaMagiaCopy, "LaMagiaCopy").$$render($$result, {}, {}, {})}  <div class="absolute z-0 flex justify-between w-full h-[38vh] md:h-[80vh] top-[32%] transform -translate-y-[40%]">${validate_component(AngelitosHomepage, "AngelitosHomepage").$$render(
      $$result,
      {
        isAngelitoFirst: true,
        firstPosition: "TOP",
        angelitosSize: "w-5/6"
      },
      {},
      {}
    )}</div>  <div class="absolute flex flex-col bottom-0 w-full z-10">  ${validate_component(TimeRemaining, "TimeRemaining").$$render(
      $$result,
      { testingHours },
      {
        testingHours: ($$value) => {
          testingHours = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="mb-2 text-ared" data-svelte-h="svelte-1pruujh"><p class="f4-latino leading-none text-nowrap">para conocer nuestro</p> <p class="f1-ivy leading-none text-nowrap">Calendario de Adviento</p> <p class="f1-ivy leading-none">2024</p> <p class="f10-latino leading-none text-agreen mt-1">Disponible a partir del</p> <p class="f10-latino leading-none text-agreen">1 de Diciembre del 2024</p></div>  <div class="my-8 text-ared" data-svelte-h="svelte-v3hjbs"><p class="f10-latino leading-none">Con nuestro calendario <span class="f9-latino">realizarás</span></p> <p class="f9-latino leading-none">acciones nobles jugando y disfrutando</p> <p class="f10-latino leading-none">el tiempo con tus seres queridos.</p></div>  ${validate_component(NotificationInput, "NotificationInput").$$render($$result, {}, {}, {})}  </div></div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};

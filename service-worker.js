/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "25018e62676a45926d41388da5c6f9b6"
  },
  {
    "url": "about.html",
    "revision": "940245faf18b41eb6458a57a6e064fc9"
  },
  {
    "url": "assets/css/0.styles.1328dae9.css",
    "revision": "fd40e40637dbba1fe19a62d993032341"
  },
  {
    "url": "assets/img/1.021fd2f0.svg",
    "revision": "021fd2f0cd05c98a6ad02bbb0cbd9afa"
  },
  {
    "url": "assets/img/1.9714328b.png",
    "revision": "9714328b3234822c5a180bcd5bbc146a"
  },
  {
    "url": "assets/img/11.305727db.svg",
    "revision": "305727db985a6489f9bf59183c378b58"
  },
  {
    "url": "assets/img/2.18965506.svg",
    "revision": "189655060548dbc26cf40ee26e2e3c5d"
  },
  {
    "url": "assets/img/2.5a493adb.jpeg",
    "revision": "5a493adbad990c4cb35d110cbbb9149c"
  },
  {
    "url": "assets/img/2.84bdf8e6.jpeg",
    "revision": "84bdf8e691bd403e0c0fe84868a79f5b"
  },
  {
    "url": "assets/img/3.0fd92ccf.svg",
    "revision": "0fd92ccf4088a7c439c83cbce99a1f19"
  },
  {
    "url": "assets/img/3.eaed9d1e.jpeg",
    "revision": "eaed9d1e262741e211ece970181ed20d"
  },
  {
    "url": "assets/img/4.4c996b17.jpeg",
    "revision": "4c996b17bdef99e089b5bdbad31d963a"
  },
  {
    "url": "assets/img/4.6f30c900.svg",
    "revision": "6f30c90046b6e08d77eaf72b1e99d310"
  },
  {
    "url": "assets/img/5.0b71b7a7.svg",
    "revision": "0b71b7a7bf94e5921d83903f3a2ba906"
  },
  {
    "url": "assets/img/5.ec3af9d6.jpeg",
    "revision": "ec3af9d6714bce3057fe6b0d71d1efd2"
  },
  {
    "url": "assets/img/6.a49b1da1.jpeg",
    "revision": "a49b1da11c1d62f651b5b54181184ba4"
  },
  {
    "url": "assets/img/7.55a23f0b.svg",
    "revision": "55a23f0ba589def11d722a76b4672052"
  },
  {
    "url": "assets/img/7.666a0b6c.jpeg",
    "revision": "666a0b6c4ef82d8a3d2e3d5119c64d71"
  },
  {
    "url": "assets/img/8.f9490d9b.jpeg",
    "revision": "f9490d9bcea796c88df7d8846de8338b"
  },
  {
    "url": "assets/img/9.689d1811.svg",
    "revision": "689d1811ccce36a5a25636190c9b6c86"
  },
  {
    "url": "assets/img/add1.3b0eb6fd.png",
    "revision": "3b0eb6fd1e19998ae07b2fdda0d18b47"
  },
  {
    "url": "assets/img/add2.48f229d5.png",
    "revision": "48f229d5b0bd038dfbece7976c43dedd"
  },
  {
    "url": "assets/img/add3.16924c71.png",
    "revision": "16924c71bf4b945a9112a3ba55f30f99"
  },
  {
    "url": "assets/img/apply.28a537cd.png",
    "revision": "28a537cd708e65a5d834b9e37c4747ec"
  },
  {
    "url": "assets/img/bb-due-gcal.e5c077e0.png",
    "revision": "e5c077e040e029439b4683b77e1f269c"
  },
  {
    "url": "assets/img/bb-due-macos.1528a39b.png",
    "revision": "1528a39b7e152972bd7d6efcb733fa91"
  },
  {
    "url": "assets/img/busline.49d736fe.png",
    "revision": "49d736feefacdae3d9ff950782337a22"
  },
  {
    "url": "assets/img/cas-login.dfbae961.png",
    "revision": "dfbae961438fb4f789ee70f463722b1e"
  },
  {
    "url": "assets/img/CC-BY-SA_icon.af17d52a.svg",
    "revision": "af17d52ad72e6d1015d183d060e68046"
  },
  {
    "url": "assets/img/chrome-browser-desktop.e1f4ef5c.png",
    "revision": "e1f4ef5cf06ca958ec117aca49c74b98"
  },
  {
    "url": "assets/img/copy-1.d1179d13.jpeg",
    "revision": "d1179d13dadd129e538969f331d12c19"
  },
  {
    "url": "assets/img/copy-2.93c70e3c.jpeg",
    "revision": "93c70e3ce5a88a41be3bc48fbb8fd1a8"
  },
  {
    "url": "assets/img/copy-3.f2a2463b.jpeg",
    "revision": "f2a2463b987942bb98f2c494193d7662"
  },
  {
    "url": "assets/img/copy-4.75679705.jpeg",
    "revision": "75679705724e0880efb6619a40b5e799"
  },
  {
    "url": "assets/img/copy-5.d09dcb21.jpeg",
    "revision": "d09dcb21d3fb931a2835def7933d4a28"
  },
  {
    "url": "assets/img/database.ff3c4edf.png",
    "revision": "ff3c4edfbf324af9136e6ea8d0df7ed2"
  },
  {
    "url": "assets/img/discount.8bc3f011.png",
    "revision": "8bc3f0114babaeb594603c8d41908a76"
  },
  {
    "url": "assets/img/english-vocabulary-daka.be106d43.png",
    "revision": "be106d43bcc04ec57a0c2a30f2d3d96f"
  },
  {
    "url": "assets/img/get-link.1b5d1f7e.png",
    "revision": "1b5d1f7ebe1db58a46500502648b0b38"
  },
  {
    "url": "assets/img/ics-url.d32d371c.png",
    "revision": "d32d371c2de86a4f5d528421cb2cb09a"
  },
  {
    "url": "assets/img/interior.e8186b41.jpg",
    "revision": "e8186b41f73e27f8554f9988ead92470"
  },
  {
    "url": "assets/img/ios.6e324d40.png",
    "revision": "6e324d4040e2d29fcc549444a2add317"
  },
  {
    "url": "assets/img/major-overview.69f3f2bd.png",
    "revision": "69f3f2bd127892b13703668e936b73aa"
  },
  {
    "url": "assets/img/matlab.6a9a3ca4.png",
    "revision": "6a9a3ca471ac2e10c6f3d350d1bd8e8d"
  },
  {
    "url": "assets/img/matlab1.018a0124.png",
    "revision": "018a0124c9d67f0fe8c543dda354a7f7"
  },
  {
    "url": "assets/img/matlab2.85b35081.png",
    "revision": "85b350811cd6417c96ee3d74c78998fa"
  },
  {
    "url": "assets/img/print-1.8902bf97.jpeg",
    "revision": "8902bf97cbc83b9f2a3158d11b1eda0e"
  },
  {
    "url": "assets/img/print-2.e9461c36.jpeg",
    "revision": "e9461c36834331858f4b0a2ad3c4a700"
  },
  {
    "url": "assets/img/print-3.9838ff94.jpeg",
    "revision": "9838ff941e662f46b79806025aa25b7b"
  },
  {
    "url": "assets/img/print-4.5c5882e8.jpeg",
    "revision": "5c5882e8656470e0dbd8d53f638a964b"
  },
  {
    "url": "assets/img/print-5.b5a75bea.jpeg",
    "revision": "b5a75bea7870bd0f6aec19c11de265f0"
  },
  {
    "url": "assets/img/print.ed9d4bc4.png",
    "revision": "ed9d4bc42a8226325e3849a683d8a984"
  },
  {
    "url": "assets/img/reader-service.0c0368aa.png",
    "revision": "0c0368aaf3a1423f0441e1f2728d0d9d"
  },
  {
    "url": "assets/img/sakai-1.9434888c.png",
    "revision": "9434888c9903637674a80eb1acd56248"
  },
  {
    "url": "assets/img/sakai-2.b1ee0463.png",
    "revision": "b1ee04633413694907cfd5ddd1b8061a"
  },
  {
    "url": "assets/img/sakai-3.675e389c.png",
    "revision": "675e389c8d6a658aca6f0e363ce88557"
  },
  {
    "url": "assets/img/sakai-4.000dd574.png",
    "revision": "000dd5749f386829df97c37217d9ce86"
  },
  {
    "url": "assets/img/sakai-5.f244a3a4.png",
    "revision": "f244a3a419620ac52ea8a1e63e14ff8f"
  },
  {
    "url": "assets/img/scan-2-0.1bf9e6b7.jpeg",
    "revision": "1bf9e6b7f13351ecb87300c17f04ced5"
  },
  {
    "url": "assets/img/scan-2-1.303453b4.jpeg",
    "revision": "303453b48a1feb7e2d35ed91e191d23e"
  },
  {
    "url": "assets/img/scan-2-2.bf12b859.jpeg",
    "revision": "bf12b8599e3e0d18b56878b2891c067d"
  },
  {
    "url": "assets/img/scan-2-3.e9ebc852.jpeg",
    "revision": "e9ebc852daaaac202876b7e0d86c1941"
  },
  {
    "url": "assets/img/scan-2-4.712fafef.jpeg",
    "revision": "712fafef765953fb853a0cbd450576a5"
  },
  {
    "url": "assets/img/schedule.abad98f6.png",
    "revision": "abad98f699a0ee9a82c7c5eff0d3ac6f"
  },
  {
    "url": "assets/img/search.237d6f6a.svg",
    "revision": "237d6f6a3fe211d00a61e871a263e9fe"
  },
  {
    "url": "assets/img/szmc-system-map-2020.baa0800d.png",
    "revision": "baa0800d66d21cad0c6185f5c196a35c"
  },
  {
    "url": "assets/img/unifound-1.4fc26bc0.jpeg",
    "revision": "4fc26bc067ff1b178e7c9f6d0e9fd22f"
  },
  {
    "url": "assets/img/unifound-10.06ec06f8.png",
    "revision": "06ec06f80c28ba2c7a086c3bb9d56b01"
  },
  {
    "url": "assets/img/unifound-2.f8330e27.jpeg",
    "revision": "f8330e2761ddaa20d77c26dec687c213"
  },
  {
    "url": "assets/img/unifound-3.e57013fa.jpeg",
    "revision": "e57013fa465673457e84fd49f63b9b9d"
  },
  {
    "url": "assets/img/unifound-4.d7973763.png",
    "revision": "d79737638f38b299730b23da98c57a1b"
  },
  {
    "url": "assets/img/unifound-5.aae7e2e8.jpeg",
    "revision": "aae7e2e80661c5e94c074a86a74994bb"
  },
  {
    "url": "assets/img/unifound-6.ef5f24ab.jpeg",
    "revision": "ef5f24ab859fb25b31843238882bb53d"
  },
  {
    "url": "assets/img/unifound-7.22b69a1f.jpeg",
    "revision": "22b69a1fae5b8174bcd3da791b61ba4f"
  },
  {
    "url": "assets/img/unifound-8.3855edb9.jpeg",
    "revision": "3855edb91e2079cc340263fdbfeeebc5"
  },
  {
    "url": "assets/img/unifound-home.0e1673b8.png",
    "revision": "0e1673b82b15322a2296223af80247f4"
  },
  {
    "url": "assets/js/10.94d3bba1.js",
    "revision": "ecfe4c50b5de890091262a9b0dc80cca"
  },
  {
    "url": "assets/js/11.7132f629.js",
    "revision": "513a4284be82576b6f55c067712f3f93"
  },
  {
    "url": "assets/js/12.df1df613.js",
    "revision": "46e05fb2dd71887ac4283babde79e1ec"
  },
  {
    "url": "assets/js/13.6f3cc14f.js",
    "revision": "b8e02a7956b68ab64518230011552713"
  },
  {
    "url": "assets/js/14.c03f1791.js",
    "revision": "20e92d1b08f400c8fe454d3d859f595c"
  },
  {
    "url": "assets/js/15.cbc9abfd.js",
    "revision": "2268bb6f7ee3c52a6f148e4bb943e3bd"
  },
  {
    "url": "assets/js/16.20e6dab3.js",
    "revision": "e75db0178b5dd217665978f3cf2bad06"
  },
  {
    "url": "assets/js/17.c8fadb7a.js",
    "revision": "7646c77f2e0cb1ac37b2a927485f639d"
  },
  {
    "url": "assets/js/18.edac0307.js",
    "revision": "ab664d3836b1e229de102f5898e6a821"
  },
  {
    "url": "assets/js/19.a94c9272.js",
    "revision": "ab6321d82226b181db779f0ca981c6d4"
  },
  {
    "url": "assets/js/2.f3b6f53b.js",
    "revision": "8defbe011f5b4b1b59487ee2996fc802"
  },
  {
    "url": "assets/js/20.fa97941a.js",
    "revision": "0a9b5a6fb944841fb545c6b7e17e6bc3"
  },
  {
    "url": "assets/js/21.4de269f0.js",
    "revision": "236ae874ff9aeb687f8fb522f24bb1da"
  },
  {
    "url": "assets/js/22.7c534e08.js",
    "revision": "516968c6585cc7378d5e8d30d7fe9181"
  },
  {
    "url": "assets/js/23.ea56ee8f.js",
    "revision": "5338151e76405260aa686feffe853081"
  },
  {
    "url": "assets/js/24.c13b426f.js",
    "revision": "987df2950b057ef60e9b7b5943c0d5bd"
  },
  {
    "url": "assets/js/25.75a9da1e.js",
    "revision": "1e42a36ddea318841b7ec66b03f72ba5"
  },
  {
    "url": "assets/js/26.c8c2f454.js",
    "revision": "22e435c7de3a08d9b20a3dd330a49d0d"
  },
  {
    "url": "assets/js/27.91d424b4.js",
    "revision": "f11d9ecbbedfa611df13945af40f3b53"
  },
  {
    "url": "assets/js/28.e03ddd16.js",
    "revision": "a2b6c483717b5ed2aeb8fd834c96721c"
  },
  {
    "url": "assets/js/29.86a35664.js",
    "revision": "f4815d3f3a5a306f530f9b2cbc8b6e8b"
  },
  {
    "url": "assets/js/3.677d48cc.js",
    "revision": "48f8b8bf63da425661a24ad6a2abf637"
  },
  {
    "url": "assets/js/30.2d5ce510.js",
    "revision": "37209abff604b1c6c9dfb67b59938e75"
  },
  {
    "url": "assets/js/31.ccda3b6e.js",
    "revision": "0c74545b49ced49fce5868f11037b530"
  },
  {
    "url": "assets/js/32.c1247e76.js",
    "revision": "e0d292a91ebf94a276b1ff8d0d7da15e"
  },
  {
    "url": "assets/js/33.84761730.js",
    "revision": "d7718eb686d01c9f55b807d1ce00d57f"
  },
  {
    "url": "assets/js/34.46019eec.js",
    "revision": "ddcdaa8f4516826d74ee6a3f8267685a"
  },
  {
    "url": "assets/js/35.92740a2b.js",
    "revision": "6d0e49217990d9ce8755fad0e2d1072e"
  },
  {
    "url": "assets/js/36.36fa1d8b.js",
    "revision": "66ca0caafc30c9d4e19592227135951c"
  },
  {
    "url": "assets/js/37.7f06b2d4.js",
    "revision": "309e65c4d3bb606b90a6dcaeebbbfe9c"
  },
  {
    "url": "assets/js/38.66413c10.js",
    "revision": "b73d8ff9876d4610f51489d9c6d814ba"
  },
  {
    "url": "assets/js/39.cdff2a8a.js",
    "revision": "cbbb75ae20c44bc018b6ee4360e70545"
  },
  {
    "url": "assets/js/4.4fd70a91.js",
    "revision": "2f12b9cbbcc8880140cb8b28551fdb21"
  },
  {
    "url": "assets/js/40.36117348.js",
    "revision": "1466189b5afd2862f50faca4cfa0fc56"
  },
  {
    "url": "assets/js/41.48d60243.js",
    "revision": "3692ff6fb0dd2c3ef56a26fbea17c5b9"
  },
  {
    "url": "assets/js/42.48c1def2.js",
    "revision": "3c3695b090bd59a7437aec9e6d748956"
  },
  {
    "url": "assets/js/43.cb2ced9c.js",
    "revision": "79c8265601a0c9f1b2d9c1ba6300b407"
  },
  {
    "url": "assets/js/44.5275bd21.js",
    "revision": "16f328e7e4c669700fd0a3674e58563b"
  },
  {
    "url": "assets/js/45.353d4e8a.js",
    "revision": "067b0504e8adb7c87fb3a55f293a3206"
  },
  {
    "url": "assets/js/46.d371240d.js",
    "revision": "84819461eba5835bf94927186af23efb"
  },
  {
    "url": "assets/js/47.5ca4687b.js",
    "revision": "f8a0af403e2f2192632ad5e3a06bb210"
  },
  {
    "url": "assets/js/48.a8b35154.js",
    "revision": "f2a51cdbe8c93cc81e974263bbd7dcc9"
  },
  {
    "url": "assets/js/49.9c414432.js",
    "revision": "1b8ccbe27248ed670b04b99f54ce0a4e"
  },
  {
    "url": "assets/js/5.f37f2b4d.js",
    "revision": "6ae86406180f95e76c53f663dd5aba73"
  },
  {
    "url": "assets/js/50.2aa0b07a.js",
    "revision": "0e4cc6a829efdad5e7b0cd0589f7698e"
  },
  {
    "url": "assets/js/6.c915a4b6.js",
    "revision": "7920675c4ae55b8213b233d083b51f53"
  },
  {
    "url": "assets/js/7.30230666.js",
    "revision": "b9f9c6305ba15dfabf5b3d624aadfab4"
  },
  {
    "url": "assets/js/8.b7f3eb42.js",
    "revision": "aad362a6e1077afd59f87cf9c5d702fb"
  },
  {
    "url": "assets/js/9.29efbcf3.js",
    "revision": "cf3a4ceb0538599b3b3e2c573c3d5949"
  },
  {
    "url": "assets/js/app.b32523cc.js",
    "revision": "55bb14533e5b754ae52707be719aaa7f"
  },
  {
    "url": "baidu_verify_yQSeRkHJla.html",
    "revision": "e34a6f863c56b8f0ccc227edb4e462b0"
  },
  {
    "url": "calendar/2018-2019.html",
    "revision": "b677ac0d8393df552ff433251e3a69d8"
  },
  {
    "url": "calendar/2019-2020.html",
    "revision": "42756eaad7bd8210dfdd9ab1c4cb572d"
  },
  {
    "url": "calendar/2020-2021.html",
    "revision": "4e8eebbc2b4dd2593a5596a5816da1e1"
  },
  {
    "url": "calendar/index.html",
    "revision": "3554f534f68d261f0ad99d6a26f93507"
  },
  {
    "url": "catering/index.html",
    "revision": "9682e53dee9733c8fedba5e4c3b060f9"
  },
  {
    "url": "contact/index.html",
    "revision": "7b67ac3cfe40e3652fad2644cb1b994d"
  },
  {
    "url": "facility/index.html",
    "revision": "4ca3bc30e4db858355c32bb44abf4b9a"
  },
  {
    "url": "facility/panolens.html",
    "revision": "d20c25d0ad76b4927708331604d27df2"
  },
  {
    "url": "if-you-are-a-freshman.html",
    "revision": "f54f5f214731202dcde57022113af51f"
  },
  {
    "url": "index.html",
    "revision": "532ba3b58684030d030b41d3c7e9ef2e"
  },
  {
    "url": "life/dormitory/index.html",
    "revision": "9e030fc00b2a7f5adb486ba01c05c6d6"
  },
  {
    "url": "life/freshman-register/index.html",
    "revision": "e9f6af298edcb1718c01dea63ee8ef43"
  },
  {
    "url": "life/index.html",
    "revision": "efec04c41c915f65123f325b997abaf5"
  },
  {
    "url": "life/sports-facility/index.html",
    "revision": "20145a8803d2448b633af894f920a9be"
  },
  {
    "url": "logo-assets/touch/homescreen144.png",
    "revision": "51742628b96a4d2c587eab560373962b"
  },
  {
    "url": "logo-assets/touch/homescreen168.png",
    "revision": "741edd656b98963d2ef2881ff00a7610"
  },
  {
    "url": "logo-assets/touch/homescreen192.png",
    "revision": "7182aab7d4c78e800943f2c59e57e5a0"
  },
  {
    "url": "logo-assets/touch/homescreen48.png",
    "revision": "34bcad7cabc11efd8a6859f4cc6d2526"
  },
  {
    "url": "logo-assets/touch/homescreen512.png",
    "revision": "0206c3548fcda8dd59055f45eb2f3f35"
  },
  {
    "url": "logo-assets/touch/homescreen72.png",
    "revision": "e93cd5bbf2dc0ad83e2e37938d0120ee"
  },
  {
    "url": "logo-assets/touch/homescreen96.png",
    "revision": "cd04040f900f20c8a4e2e204218a1c57"
  },
  {
    "url": "media/index.html",
    "revision": "e20ea564d5a06b5540949f4bf151ed79"
  },
  {
    "url": "organizations/index.html",
    "revision": "91d1773ee88edcbf8e8a49dfd7fd46dc"
  },
  {
    "url": "organizations/registered-organization.html",
    "revision": "1cd50f4a622d648d47a8ebb2cd80249a"
  },
  {
    "url": "service/blackboard/retrive-ics-url/index.html",
    "revision": "15106314fd08b92062270e6beb13c661"
  },
  {
    "url": "service/campus-card/index.html",
    "revision": "6fd352cf1569ac5d8c5a910d71a4941c"
  },
  {
    "url": "service/email/index.html",
    "revision": "9faec128f74a69a7db43d0b67c174304"
  },
  {
    "url": "service/index.html",
    "revision": "7e9ccb5fb35e28dae590e0c6064dd1ca"
  },
  {
    "url": "service/mail-and-express/index.html",
    "revision": "ab17d2f44b219e665a801e19278c8efa"
  },
  {
    "url": "service/matlab/index.html",
    "revision": "829e365af7f19a49a9e446bd5efda827"
  },
  {
    "url": "service/medical-treatment/index.html",
    "revision": "cfc5669ad9e34b3caafb931b7d09c4f7"
  },
  {
    "url": "service/network/apply-for-vpn/index.html",
    "revision": "1ca987ab713170daa4b49c5b7a46a7e9"
  },
  {
    "url": "service/network/choose-a-pad/index.html",
    "revision": "8b61cb049832400cc8585871642895c6"
  },
  {
    "url": "service/network/choose-a-router/index.html",
    "revision": "a509fade730a7f77d0d7637e350771e5"
  },
  {
    "url": "service/network/index.html",
    "revision": "b212fedb3d2b97fb0d2d35d30b09b954"
  },
  {
    "url": "service/sakai/index.html",
    "revision": "159ef0a95ad8865ddecbb34485274e29"
  },
  {
    "url": "service/sid/index.html",
    "revision": "1b1f2a820e52c369933adc088397bc7d"
  },
  {
    "url": "service/ssc/index.html",
    "revision": "539ff57fab1fcda0b416efcaa0a460cd"
  },
  {
    "url": "service/unifound/index.html",
    "revision": "5379c14cd2779329a273dba512760d77"
  },
  {
    "url": "service/work-wechat/index.html",
    "revision": "5b10a66ede0c0e014ea722379eebb00b"
  },
  {
    "url": "site-help/index.html",
    "revision": "2838a2ef0a2323b167b709c8f421d78c"
  },
  {
    "url": "study/book-list-by-prof-yuan/2018/index.html",
    "revision": "a73c73badcf4372f96fd4b596fb5e183"
  },
  {
    "url": "study/borrow-books/index.html",
    "revision": "8a60e0818008826400211825bf5d2f88"
  },
  {
    "url": "study/by-shude-college/advice-on-study.html",
    "revision": "67f67a97c96ac8d026f40ba906d0f5ef"
  },
  {
    "url": "study/by-shude-college/info-on-study.html",
    "revision": "256b88889b9d7add2f2a75d7501a4cb8"
  },
  {
    "url": "study/index.html",
    "revision": "efff85c9c250ecbf3dea57031e31cca6"
  },
  {
    "url": "surroundings/index.html",
    "revision": "ad5a1e7988711bbc3b2c835131ed24f2"
  },
  {
    "url": "transport/holiday.html",
    "revision": "5916f8a64100d4091d80e09d89d2537a"
  },
  {
    "url": "transport/index.html",
    "revision": "182a6e90d33aa79f0c58adf7bd8c1e64"
  },
  {
    "url": "transport/workday.html",
    "revision": "bcf5a5ce9ea7e5ce651014d62dcb9bde"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

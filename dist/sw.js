!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=0)}([function(e,r){"workbox"in self&&workbox.precaching.precacheAndRoute([{'revision':'0e0d90993ce4ee5d0afc913af2e07a05','url':'1.js'},{'revision':'b1f549aff7d8498abda0363206ac23c2','url':'2.js'},{'revision':'3ea5ccfa243b6e74066d1299b17ecc9b','url':'3.js'},{'revision':'6ea705ef89ad891bbc602f2d922716e8','url':'css/styles.css'},{'revision':'bd551f56ce2be3eba2812e605ab4f5b2','url':'css/x/bootstrap.css'},{'revision':'f7245521b4bfad97e8404de1525a6f05','url':'css/x/responsive.css'},{'revision':'edff85f6d0238357f6a824ae19991203','url':'css/x/style.css'},{'revision':'3d9323df26240d7ff6c3507a8c037deb','url':'data/blogdata.json'},{'revision':'3ae491bc96f102e7f2243aa9deaf2c2d','url':'data/faq.json'},{'revision':'a38c8dbb4e1c737807290f852644129e','url':'data/schedule.json'},{'revision':'85bfe6f80f89775d91782b6edd6c2ce8','url':'data/speakers.json'},{'revision':'ca5f383d547ed33b2fcbf8de8939214b','url':'data/videosdata.json'},{'revision':'40ef2e72233e461949c4e517b4da785f','url':'img/bg/bug-stripe-horz-bg.png'},{'revision':'e6804cf82c74354114c3b48e6850ff39','url':'img/bg/news-bg.png'},{'revision':'4c5c01e71b85820d4b2a4fd65285de25','url':'img/bg/paper.gif'},{'revision':'d8219b40840dcd5b61d71afb30afa626','url':'img/bloggers/WikiAtlas_Ganesh_Arun_Planemad.jpg'},{'revision':'30e99902937cace23bcceacc88a9f0ef','url':'img/bloggers/WikiAtlas_Lopez_Edouard_Lyhana8.png'},{'revision':'917a6eaff2ce46cb52988c7afb7b9aba','url':'img/bloggers/WikiAtlas_Lopez_Hugo_Yug.png'},{'revision':'0d4fa928386b14974bf7513677278ef5','url':'img/icons/favicon.png'},{'revision':'2e7327d709d72dcadb463772466a5eee','url':'img/icons/icon-1024x1024.png'},{'revision':'34ad0fa20eb37378acaa4e978a114854','url':'img/icons/icon-128x128.png'},{'revision':'185ed67f84fbe116423eeecde5507a59','url':'img/icons/icon-144x144.png'},{'revision':'6ce106dc33b9e06bc44cf4467193f9b7','url':'img/icons/icon-152x152.png'},{'revision':'d98f272e437f181a8e4a495fd70b35f1','url':'img/icons/icon-192x192.png'},{'revision':'a9ad438b6ee1a417636e115838954923','url':'img/icons/icon-384x384.png'},{'revision':'2fdbfe87de17fd61fbd737682140aba4','url':'img/icons/icon-512x512.png'},{'revision':'f5c850fb7799776c8a82d33ab03505a5','url':'img/icons/icon-72x72.png'},{'revision':'1b7bab36fe7ab88660465b3bedcbfa05','url':'img/icons/icon-96x96.png'},{'revision':'9ab2b3304b1c55ca96b5ff7d6b074d2c','url':'img/icons/img-1.png'},{'revision':'f2a8f7c2ac963ce9fe7d7506555e08fe','url':'img/icons/img-2.png'},{'revision':'556e9ff845b7dd0c62dcdbbb00babb4b','url':'img/icons/loading.gif'},{'revision':'9c38962dcce6776be2cfb827ed13e4ea','url':'img/icons/logo.png'},{'revision':'37589698c4e74e6f371d25d01056f76e','url':'img/speakers/andy-crawford.jpg'},{'revision':'dafb95cd12b59752606f082683700cc7','url':'img/speakers/brooke-singh.jpg'},{'revision':'dc02fe7e25e7f0e28a4dd628d573ad52','url':'img/speakers/clara-wilson.jpg'},{'revision':'73504359b8894fe4614c3d2221ed25ec','url':'img/speakers/lauri-erkkila.jpg'},{'revision':'32a92aa7b07407faf9df10ece7dc3f4f','url':'img/speakers/liam-ramirez.jpg'},{'revision':'b0030813aa706d6fec4c6220454bbeac','url':'img/speakers/melissa-de-sousa.jpg'},{'revision':'b2fce1543a6073a92e7c43755760ec91','url':'img/speakers/nino-durand.jpg'},{'revision':'b1566bee0ab3959050f638b8c3079c50','url':'img/speakers/trinita-rodrigues.jpg'},{'revision':'84b0e8e4679a683ffe329cbd0b65ec94','url':'index.html'},{'revision':'3f2e7784bae77f33b0e3c15fc5b1bf1c','url':'js/app.js'},{'revision':'0a6e846b954e345951e710cd6ce3440e','url':'js/jquery-2.0.3.min.js'},{'revision':'6447e25a98cb7b8d64c6605777d5ade7','url':'js/utility.js'},{'revision':'7f827fe484ec04346553202782b0664b','url':'js/x/bootstrap.js'},{'revision':'6fa979718eaf37bf49e9d655f8bad1b5','url':'js/x/custom.js'},{'revision':'2f772fed444d5489079f275bd01e26cc','url':'js/x/jquery-3.4.1.min.js'},{'revision':'345b2b8200444cb88fc0ddfef0aaab51','url':'main.css'},{'revision':'d7d3ae0dba03d76eee977886d062dbf2','url':'main.js'},{'revision':'4f691bbd7834b3a3b066b6d4c7b8c177','url':'manifest.webmanifest'},{'revision':'562d0fbc57e7fde465091e0f3ebaa792','url':'pages/about.html'},{'revision':'f3baba19dd917b8c5d447df2f7035cf6','url':'pages/arabic.html'},{'revision':'fc850defb5b85d18f91160cd9c095397','url':'pages/blog-old.html'},{'revision':'e8b12c3c146a096241f5f3aa3aeab114','url':'pages/blog.html'},{'revision':'aa614623c526e39c996f4bce161f35f7','url':'pages/blognew.html'},{'revision':'424a576c82faaab5ef5ff98794b84e0a','url':'pages/code-of-conduct.html'},{'revision':'19ed384ef5a110687c04ca0f8ecbb552','url':'pages/code-of-conduct.js'},{'revision':'ee6278c59f765a91de9c0bc6463b4336','url':'pages/contact.html'},{'revision':'c4eb2cc73946d021bc1aeaae6c2fc56c','url':'pages/embed.html'},{'revision':'d41d8cd98f00b204e9800998ecf8427e','url':'pages/embed.js'},{'revision':'bcdcec4df4acb46a457bc75f791409e9','url':'pages/httpweb.html'},{'revision':'d41d8cd98f00b204e9800998ecf8427e','url':'pages/httpweb.js'},{'revision':'6411c20a9d91ab37b2fc6625da097e69','url':'pages/news.html'},{'revision':'28a8fe5c4ea91ad296519ded4c200287','url':'pages/news.js'},{'revision':'1a66d23c59fea71152313975fd84e6f6','url':'pages/resources.html'},{'revision':'11b772cddf9b316dc84ba29ee6c9d356','url':'pages/schedule.html'},{'revision':'ffa296c9e2828e9f43bbbeca1c4692c8','url':'pages/schedule.js'},{'revision':'5b38e6c4768aeef35bf62956af934e8b','url':'pages/speakers.html'},{'revision':'dd259011780a19e98663c80a2bb61bb4','url':'pages/speakers.js'},{'revision':'85bfe6f80f89775d91782b6edd6c2ce8','url':'pages/speakers.json'},{'revision':'2ad94f0b18796055a07abee7a9807f94','url':'qafco/New-QP-Annex-Clinic-in-MIC.pdf'},{'revision':'6078cba531c50201259a64e2e018184a','url':'qafco/Opening-of-Frontline-clinic-in-MES-RasLaffan-for-COVID-19.pdf'},{'revision':'b455d0566579971964ac99b081bea007','url':'qafco/POSTER-COVID-19-5-TIPS.png'}])}]);
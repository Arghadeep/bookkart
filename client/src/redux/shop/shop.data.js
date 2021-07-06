const SHOP_DATA = {
  fiction: {
    id: 1,
    title: 'Fiction',
    routeName: 'fiction',
    items: [
      {
        id: 1,
        name: '1984',
        author: 'George Orwell',
        imageUrl: 'https://i.ibb.co/X4HQ5tD/1984-original-imagff72gcung7ac.jpg',
        price: 25,
      },
      {
        id: 2,
        name: 'Animal Farm',
        author: 'George Orwell',
        imageUrl: 'https://i.ibb.co/LDy5BvX/animal-farm.jpg',
        price: 18,
      },
      {
        id: 3,
        name: 'A Passage To India',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/HdLfBWW/a-passage-to-india-original-imafyaqyygq4bpnj.jpg',
        price: 35,
      },
      {
        id: 4,
        name: 'a-poem-a-day',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/H4xtgRs/a-poem-a-day-original-imafvnh4qke5acdc.jpg',
        price: 25,
      },
      {
        id: 5,
        name: 'shakespeare',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/QNVcbNV/arden-shakespeare-third-series-complete-works-original-imaftztwmnzy6r4u.jpg',
        price: 18,
      },
      {
        id: 6,
        name: 'dead-lawyers',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/xqwcF66/dead-lawyers-tell-no-tales-original-imafbz39h8wfpxak.jpg',
        price: 14,
      },
      {
        id: 7,
        name: 'delhi-is-not-far',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/cF8k9V0/delhi-is-not-far-original-imagy93bpnf7ehtf-2.jpg',
        price: 18,
      },
      {
        id: 8,
        name: 'fantastic-beasts',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/1qfQYFq/fantastic-beasts-the-crimes-of-grindelwald-the-original-original-imafyyhfxsxswjfh-2.jpg',
        price: 14,
      },
      {
        id: 9,
        name: 'give-your-heart-a-break',
        author: 'EM Forster',
        imageUrl:
          '<img src="https://i.ibb.co/9smMQK6/give-your-heart-a-break-original-imaffj6ghx5ubtmf.jpg" alt="give-your-heart-a-break-original-imaffj6ghx5ubtmf" border="0" />',
        price: 16,
      },
    ],
  },
  nonFiction: {
    id: 2,
    title: 'Non-Fiction',
    routeName: 'nonFiction',
    items: [
      {
        id: 10,
        name: '50-world-s-greatest-speeches',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/pR9tV5f/50-world-s-greatest-speeches-original-imafkhfgbxmduawz.jpg',
        price: 220,
      },
      {
        id: 11,
        name: 'alexander-the-great-original',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/h154vrb/alexander-the-great-original-imag4hshrzauyyd9.jpg',
        price: 280,
      },
      {
        id: 12,
        name: 'astrophysics-for-people-in-a-hurry',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/VYjqh3f/astrophysics-for-people-in-a-hurry-original-imafy7efz8djz4yq.jpg',
        price: 110,
      },
      {
        id: 13,
        name: 'buried-thoughts',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/g6BbtVg/buried-thoughts-original-imafbygdhhnax9mx.jpg',
        price: 160,
      },
      {
        id: 14,
        name: 'hyperfocus',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/Gvt6h9j/hyperfocus-how-to-work-less-to-achieve-more-english-paperback-by-original-imafye7p5ptc8utp.jpg',
        price: 160,
      },
      {
        id: 15,
        name: 'i-am-no-messiah',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/YDQhH4h/i-am-no-messiah-original-imafxfy6uhtwhnvj.jpg',
        price: 160,
      },
      {
        id: 16,
        name: 'india-s-most-fearless',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/4fRPWhv/india-s-most-fearless-original-imafgznyrqhpsbup.jpg',
        price: 190,
      },
      {
        id: 17,
        name: 'india-s-struggle-for-independence',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/TTQP6MN/india-s-struggle-for-independence-1857-1947-original-imafxrbrdvcexhmh.jpg',
        price: 200,
      },
    ],
  },
  selfHelp: {
    id: 3,
    title: 'Self-Help',
    routeName: 'selfHelp',
    items: [
      {
        id: 18,
        name: 'think-like-a-monk',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/Bz41NgL/think-like-a-monk-original-imafxr36mwua29uj.jpg',
        price: 125,
      },
      {
        id: 19,
        name: 'tools-for-success',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/fdYgnnH/tools-for-success-original-imag4hpp8ugh5q6d.jpg',
        price: 90,
      },
      {
        id: 20,
        name: 'who-will-cry-when-you-die',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/68FMx4Z/who-will-cry-when-you-die-original-imafdw8gnfnvtam5.jpg',
        price: 90,
      },
      {
        id: 21,
        name: 'word-power-made-easy',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/Xb7BfD2/word-power-made-easy-original-imafyxy8aduwfenw.jpg',
        price: 165,
      },
      {
        id: 22,
        name: 'the-secret',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/VtdGfhP/the-secret-original-imafzdhpjgs7mcjm.jpg',
        price: 185,
      },
      {
        id: 36,
        name: 'the-winning-attitude',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/vByHt2T/the-winning-attitude-how-to-create-extraordinary-results-in-your-original-imafyf7jzxzzydjq.jpg',
        price: 185,
      },
      {
        id: 37,
        name: 'the-science-of-getting-rich',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/jkYBv4Q/the-science-of-getting-rich-with-the-science-of-being-great-original-imafkkpemzszv4je.jpg',
        price: 185,
      },
      {
        id: 38,
        name: 'the-pursuit-of-happines',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/bFK64KR/the-pursuit-of-happiness-original-imafzra6tnxyrmbq.jpg',
        price: 185,
      },
      {
        id: 39,
        name: 'the-psychology-of-money',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/LJ5QK17/the-psychology-of-money-original-imafvb5vbgcczykj.jpg',
        price: 185,
      },
    ],
  },
  business: {
    id: 4,
    title: 'Business',
    routeName: 'business',
    items: [
      {
        id: 23,
        name: 'zero-to-one-original',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/wWZHm9J/zero-to-one-original-imafy6hhwgy8u4tn.jpg',
        price: 25,
      },
      {
        id: 24,
        name: 'who-moved-my-cheese-original',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/5F9MVNp/who-moved-my-cheese-original-imafh5tffudeepgh.jpg',
        price: 20,
      },
      {
        id: 25,
        name: 'the-ultimate-guide-to-success',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/jL61rKj/the-ultimate-guide-to-success-original-imag4hm2wp9cckew.jpg',
        price: 80,
      },
      {
        id: 26,
        name: 'the-intelligent-investor',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/b53KHNf/the-intelligent-investor-english-paperback-graham-benjamin-original-imagfg7tc2wfjkkx.jpg',
        price: 80,
      },
      {
        id: 27,
        name: 'the-100-startup',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/S5LKXv7/the-100-startup-original-imafbnvkgkt9fkyu.jpg',
        price: 45,
      },
      {
        id: 28,
        name: 'the-5-am-club',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/QMjPmR8/the-5-am-club-original-imafy4frfhbgszgz.jpg',
        price: 135,
      },
      {
        id: 29,
        name: 'security-analysis',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/7QD0N6w/security-analysis-original-imafyw6xskfgfup7.jpg',
        price: 20,
      },
    ],
  },
  topPicks: {
    id: 5,
    title: 'Top Picks Of the Months',
    routeName: 'topPicks',
    items: [
      {
        id: 30,
        name: '14000-objective-questions-general-studies',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/PZwVqM6/14000-objective-questions-general-studies-original-imafzbvs4hgsfwye.jpg',
        price: 325,
      },
      {
        id: 31,
        name: 'ancient-and-medieval-india',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/0KvkTnW/ancient-and-medieval-india-second-edition-original-imafty2fytjh8uhm.jpg',
        price: 20,
      },
      {
        id: 32,
        name: 'a-thousand-splendid-suns-original',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/0CSZ0YQ/a-thousand-splendid-suns-original-imafxrtdgczvuh2p.jpg',
        price: 25,
      },
      {
        id: 33,
        name: 'bharat-ki-rajvyavastha',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/S7f9tQk/bharat-ki-rajvyavastha-civil-seva-evam-anya-rajya-parikshao-hetu-original-imafmak7h6vynjsc.jpg',
        price: 25,
      },
      {
        id: 34,
        name: 'geography-of-india-9th-edition-original',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/zZGy9kx/geography-of-india-9th-edition-original-imafty2fff5fqznp.jpg',
        price: 40,
      },
      {
        id: 35,
        name: 'how-to-prepare-for-data-interpretation',
        author: 'EM Forster',
        imageUrl:
          'https://i.ibb.co/hsvFYfh/how-to-prepare-for-data-interpretation-for-cat-6e-original-imafh8ghdmy699pg.jpg',
        price: 25,
      },
    ],
  },
};

export default SHOP_DATA;

const potatoes = [
  {
    id: 'klasyczna-pyra',
    name: 'Klasyczna Pyra',
    rarity: 'common',
    rarityLabel: 'ZWYKŁY',
    chance: '60% szansy',
    caption: 'Nie jest rzadki, za to świetnie udaje, że zna właściciela piekarnika.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Potato1.jpg/1200px-Potato1.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Potato1.jpg',
    credit: 'Zdjęcie: safaritravelplus · CC0'
  },
  {
    id: 'pan-kartofel',
    name: 'Pan Kartofel',
    rarity: 'common',
    rarityLabel: 'ZWYKŁY',
    chance: '60% szansy',
    caption: 'Pan Kartofel ma klasę. I prawdopodobnie monokl z masła.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Potato.jpg/1200px-Potato.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Potato.jpg',
    credit: 'Zdjęcie: Andy Roberts · CC BY 2.0'
  },
  {
    id: 'pyra-z-targu',
    name: 'Pyra z Targu',
    rarity: 'common',
    rarityLabel: 'ZWYKŁY',
    chance: '60% szansy',
    caption: 'Właśnie usłyszała cenę frytek i postanowiła zostać w domu.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Potato_in_market.jpg/1000px-Potato_in_market.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Potato_in_market.jpg',
    credit: 'Zdjęcie: Abumuslimjalingo · CC0'
  },
  {
    id: 'splesnialek',
    name: 'Spleśniałek',
    rarity: 'common',
    rarityLabel: 'ZWYKŁY',
    chance: '60% szansy',
    caption: 'Twierdzi, że to limitowana zielona skórka. Nie wierz mu.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Potato_soft_rot_%285684245277%29.jpg/960px-Potato_soft_rot_%285684245277%29.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Potato_soft_rot_(5684245277).jpg',
    credit: 'Zdjęcie: Scot Nelson · CC0'
  },
  {
    id: 'ziemniak-z-kielkami',
    name: 'Ziemniak z Kiełkami',
    rarity: 'common',
    rarityLabel: 'ZWYKŁY',
    chance: '60% szansy',
    caption: 'Ma antenki, ale nadal nie odbiera zamówień na frytki.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Potato_sprouts.jpg/960px-Potato_sprouts.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Potato_sprouts.jpg',
    credit: 'Zdjęcie: Donna · CC BY-SA 2.0'
  },
  {
    id: 'ziemniaczana-ekipa',
    name: 'Ziemniaczana Ekipa',
    rarity: 'common',
    rarityLabel: 'ZWYKŁY',
    chance: '60% szansy',
    caption: 'Ziemniaczana ekipa: jeden obiera, reszta udaje, że pomaga.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Potatoes.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Potatoes.jpg',
    credit: 'Zdjęcie: USDA · domena publiczna'
  },
  {
    id: 'czerwona-rakieta',
    name: 'Czerwona Rakieta',
    rarity: 'uncommon',
    rarityLabel: 'NIEZWYKŁY',
    chance: '23,9% szansy',
    caption: 'Czerwona, bo usłyszała, że dziś będzie obieranie.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Red_potatoes.jpg/960px-Red_potatoes.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Red_potatoes.jpg',
    credit: 'Zdjęcie: Albertinon · CC BY 4.0'
  },
  {
    id: 'krol-pola',
    name: 'Król Pola',
    rarity: 'uncommon',
    rarityLabel: 'NIEZWYKŁY',
    chance: '23,9% szansy',
    caption: 'Rządzi polem, ale w kuchni zmywa po sobie.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/194_-_PEI_Potatoes.JPG/1200px-194_-_PEI_Potatoes.JPG',
    source: 'https://commons.wikimedia.org/wiki/File:194_-_PEI_Potatoes.JPG',
    credit: 'Zdjęcie: Share Bear · domena publiczna'
  },
  {
    id: 'zlota-yukon',
    name: 'Złota Yukon',
    rarity: 'rare',
    rarityLabel: 'RZADKI',
    chance: '10% szansy',
    caption: 'Warta fortunę? Tylko jeśli płacisz w sosie czosnkowym.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Potatoes_%2828446585921%29.jpg/1200px-Potatoes_%2828446585921%29.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Potatoes_(28446585921).jpg',
    credit: 'Zdjęcie: Benjamin White · CC BY-SA 2.0'
  },
  {
    id: 'fioletowa-vitelotte',
    name: 'Fioletowa Vitelotte',
    rarity: 'epic',
    rarityLabel: 'EPICKI',
    chance: '5% szansy',
    caption: 'Wygląda jak ziemniak, który odkrył tryb nocny.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Vitelotte.jpg/960px-Vitelotte.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Vitelotte.jpg',
    credit: 'Zdjęcie: Cschleiermacher · CC BY-SA 3.0'
  },
  {
    id: 'blekitna-anneliese',
    name: 'Błękitna Anneliese',
    rarity: 'legendary',
    rarityLabel: 'LEGENDARNY',
    chance: '1% szansy',
    caption: 'Zimna krew, niebieska skórka i zero stresu przed obiadem.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Kartoffeln_Sorte_Blaue_Anneliese.jpg/960px-Kartoffeln_Sorte_Blaue_Anneliese.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:Kartoffeln_Sorte_Blaue_Anneliese.jpg',
    credit: 'Zdjęcie: Perchtinger · CC0'
  },
  {
    id: 'peruwianski-skarb',
    name: 'Peruwiański Skarb',
    rarity: 'mythic',
    rarityLabel: 'MITYCZNY',
    chance: '0,1% szansy',
    caption: 'Przyleciał prosto z Peru i od razu pyta, gdzie są frytki.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/PurplePeruvianPotatoes.jpg',
    source: 'https://commons.wikimedia.org/wiki/File:PurplePeruvianPotatoes.jpg',
    credit: 'Zdjęcie: Stephen Lea · CC BY-SA 3.0'
  }
];

const resultCard = document.querySelector('#result-card');
const photo = document.querySelector('#potato-photo');
const emptyState = document.querySelector('#empty-state');
const emptyLabel = emptyState.querySelector('.empty-label');
const nameLabel = document.querySelector('#potato-name');
const captionLabel = document.querySelector('#potato-caption');
const rarityBadge = document.querySelector('#rarity-badge');
const chanceLabel = document.querySelector('#chance-label');
const sourceLink = document.querySelector('#photo-credit');
const drawButton = document.querySelector('#draw-button');
const drawButtonLabel = drawButton.querySelector('.button-label');
const drawHint = document.querySelector('#draw-hint');
const photoShine = document.querySelector('.photo-shine');
const drawCountLabel = document.querySelector('#draw-count');
const unlockedCountLabel = document.querySelector('#unlocked-count');
const specialCountLabel = document.querySelector('#special-count');
const albumGrid = document.querySelector('#album-grid');
const albumProgressText = document.querySelector('#album-progress-text');
const albumProgressBar = document.querySelector('#album-progress-bar');
const albumToggle = document.querySelector('#album-toggle');
const albumContent = document.querySelector('#album-content');
const albumFilterButtons = document.querySelectorAll('[data-album-filter]');
const albumResultCount = document.querySelector('#album-result-count');
const albumToggleCount = document.querySelector('#album-toggle-count');
const soundToggle = document.querySelector('#sound-toggle');
const soundToggleLabel = document.querySelector('#sound-toggle-label');
const achievementGrid = document.querySelector('#achievement-grid');
const achievementCountLabel = document.querySelector('#achievement-count');
const achievementToast = document.querySelector('#achievement-toast');
const coinCountLabel = document.querySelector('#coin-count');
const shopCoinCountLabel = document.querySelector('#shop-coin-count');
const shopGrid = document.querySelector('#shop-grid');
const shopNotice = document.querySelector('#shop-notice');
const shareResult = document.querySelector('#share-result');
const shareButton = document.querySelector('#share-button');
const saveCardButton = document.querySelector('#save-card-button');
const shareStatus = document.querySelector('#share-status');
const rerollButton = document.querySelector('#reroll-button');
const oddsChanceLabels = document.querySelectorAll('[data-odds-chance]');

const storageKey = 'pyraRngProgressV1';
const soundStorageKey = 'pyraRngSoundOnV1';
const baseSpinDurationMs = 7000;
const specialRarities = new Set(['rare', 'epic', 'legendary', 'mythic']);
const rarityKeys = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythic'];
const baseRarityChances = { common: 60, uncommon: 23.9, rare: 10, epic: 5, legendary: 1, mythic: 0.1 };
const rarityDetails = {
  common: { label: 'ZWYKŁY', chance: '60% szansy' },
  uncommon: { label: 'NIEZWYKŁY', chance: '23,9% szansy' },
  rare: { label: 'RZADKI', chance: '10% szansy' },
  epic: { label: 'EPICKI', chance: '5% szansy' },
  legendary: { label: 'LEGENDARNY', chance: '1% szansy' },
  mythic: { label: 'MITYCZNY', chance: '0,1% szansy' }
};
let selectedAlbumFilter = 'all';

function loadProgress() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(storageKey));
    if (!saved || typeof saved !== 'object') return {
      draws: 0, specialHits: 0, unlocked: [], rarityCounts: {}, coins: 0, coinsEarned: 0,
      upgrades: { goldenScoopLevel: 0, rareBonusLevel: 0, luckLevel: 0, fastSpinLevel: 0, secondChanceLevel: 0 }
    };
    return {
      draws: Number.isFinite(saved.draws) ? Math.max(0, saved.draws) : 0,
      specialHits: Number.isFinite(saved.specialHits) ? Math.max(0, saved.specialHits) : 0,
      unlocked: Array.isArray(saved.unlocked) ? [...new Set(saved.unlocked.filter((id) => typeof id === 'string'))] : [],
      rarityCounts: Object.fromEntries(rarityKeys.map((rarity) => [
        rarity,
        Number.isFinite(saved.rarityCounts?.[rarity]) ? Math.max(0, saved.rarityCounts[rarity]) : 0
      ])),
      coins: Number.isFinite(saved.coins) ? Math.max(0, saved.coins) : 0,
      coinsEarned: Number.isFinite(saved.coinsEarned) ? Math.max(0, saved.coinsEarned) : (Number.isFinite(saved.coins) ? Math.max(0, saved.coins) : 0),
      upgrades: {
        goldenScoopLevel: Math.min(3, Math.max(0, Number.isInteger(saved.upgrades?.goldenScoopLevel) ? saved.upgrades.goldenScoopLevel : 0)),
        rareBonusLevel: Math.min(3, Math.max(0, Number.isInteger(saved.upgrades?.rareBonusLevel) ? saved.upgrades.rareBonusLevel : 0)),
        luckLevel: Math.min(3, Math.max(0, Number.isInteger(saved.upgrades?.luckLevel) ? saved.upgrades.luckLevel : 0)),
        fastSpinLevel: Math.min(2, Math.max(0, Number.isInteger(saved.upgrades?.fastSpinLevel) ? saved.upgrades.fastSpinLevel : 0)),
        secondChanceLevel: Math.min(1, Math.max(0, Number.isInteger(saved.upgrades?.secondChanceLevel) ? saved.upgrades.secondChanceLevel : 0))
      }
    };
  } catch {
    return {
      draws: 0, specialHits: 0, unlocked: [], rarityCounts: Object.fromEntries(rarityKeys.map((rarity) => [rarity, 0])), coins: 0, coinsEarned: 0,
      upgrades: { goldenScoopLevel: 0, rareBonusLevel: 0, luckLevel: 0, fastSpinLevel: 0, secondChanceLevel: 0 }
    };
  }
}

let progress = loadProgress();
let soundEnabled = true;
try {
  soundEnabled = window.localStorage.getItem(soundStorageKey) !== 'false';
} catch {
  // Dźwięki są domyślnie włączone, nawet gdy przeglądarka blokuje zapis.
}
let audioContext = null;
let achievementToastTimer = 0;

const achievementDefinitions = [
  { id: 'first-draw', icon: '🥔', title: 'Pierwsza pyra', description: 'Wykonaj pierwsze losowanie.', unit: 'losowań', target: 1, current: () => progress.draws },
  { id: 'ten-draws', icon: '🎲', title: 'Rozkręcamy się', description: 'Wylosuj ziemniaka 10 razy.', unit: 'losowań', target: 10, current: () => progress.draws },
  { id: 'hundred-draws', icon: '🧤', title: 'Ziemniaczany weteran', description: 'Dobij do 100 losowań.', unit: 'losowań', target: 100, current: () => progress.draws },
  { id: 'first-special', icon: '✨', title: 'Ale błysk!', description: 'Traf na dowolnego rzadkiego ziemniaka.', unit: 'rzadkich trafień', target: 1, current: () => progress.specialHits },
  { id: 'ten-potatoes', icon: '📚', title: 'Mały kolekcjoner', description: 'Odblokuj 10 różnych ziemniaków.', unit: 'w albumie', target: 10, current: () => getUnlockedPotatoCount() },
  { id: 'coin-collector', icon: '🪙', title: 'Pyrowy bogacz', description: 'Zbierz 100 monet łącznie.', unit: 'monet zebranych', target: 100, current: () => progress.coinsEarned },
  { id: 'legendary', icon: '👑', title: 'Spotkanie z legendą', description: 'Odblokuj ziemniaka legendarnego.', unit: 'legendarnych trafień', target: 1, current: () => getRarityHitCount('legendary') },
  { id: 'mythic', icon: '🌌', title: 'Mityczna pyra', description: 'Odblokuj ziemniaka mitycznego.', unit: 'mitycznych trafień', target: 1, current: () => getRarityHitCount('mythic') },
  { id: 'full-album', icon: '🏆', title: 'Pełna spiżarnia', description: 'Zbierz całą kolekcję z albumu.', unit: 'w albumie', target: () => Math.max(100, potatoes.length), current: () => getUnlockedPotatoCount() }
];

const shopItems = [
  { id: 'goldenScoopLevel', icon: '🥄', title: 'Złota łopatka', description: '+25% monet za każdy wylosowany ziemniak.', costs: [60, 120, 240] },
  { id: 'rareBonusLevel', icon: '🌟', title: 'Szczęśliwy worek', description: '+5 monet za rzadkiego lub lepszego ziemniaka.', costs: [45, 90, 180] },
  { id: 'luckLevel', icon: '🍀', title: 'Pyrowe szczęście', description: '+2 p.p. szansy na rzadkiego lub lepszego ziemniaka.', costs: [100, 250, 500] },
  { id: 'fastSpinLevel', icon: '⚡', title: 'Szybka karuzela', description: 'Każdy poziom skraca losowanie o 1 sekundę.', costs: [90, 180] },
  { id: 'secondChanceLevel', icon: '🎲', title: 'Drugi rzut', description: 'Odblokuj jeden przerzut po każdym losowaniu.', costs: [200] }
];

const coinRewards = { common: 3, uncommon: 5, rare: 10, epic: 20, legendary: 50, mythic: 150 };
let lastResultPotato = null;
let lastCoinReward = 0;

function calculateCoinReward(potato) {
  const multiplier = 1 + progress.upgrades.goldenScoopLevel * 0.25;
  const rarityBonus = specialRarities.has(potato.rarity) ? progress.upgrades.rareBonusLevel * 5 : 0;
  return Math.round((coinRewards[potato.rarity] || coinRewards.common) * multiplier) + rarityBonus;
}

function getRarityChances() {
  const bonus = progress.upgrades.luckLevel * 2;
  const specialTotal = 100 - baseRarityChances.common - baseRarityChances.uncommon;
  const chances = { ...baseRarityChances, common: baseRarityChances.common - bonus };
  for (const rarity of ['rare', 'epic', 'legendary', 'mythic']) {
    chances[rarity] = baseRarityChances[rarity] + bonus * baseRarityChances[rarity] / specialTotal;
  }
  return chances;
}

function formatPercentage(value) {
  return `${Number(value.toFixed(3)).toString().replace('.', ',')}%`;
}

function getRarityChanceLabel(rarity) {
  return `${formatPercentage(getRarityChances()[rarity])} szansy`;
}

function renderOdds() {
  const chances = getRarityChances();
  oddsChanceLabels.forEach((label) => {
    label.textContent = formatPercentage(chances[label.dataset.oddsChance]);
  });
}

function getSpinDurationMs() {
  return baseSpinDurationMs - progress.upgrades.fastSpinLevel * 1000;
}

function buildShop() {
  shopGrid.replaceChildren();
  shopItems.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'shop-card';
    card.dataset.shopCard = item.id;
    const icon = document.createElement('span');
    icon.className = 'shop-card-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = item.icon;
    const title = document.createElement('h3');
    title.className = 'shop-card-title';
    title.textContent = item.title;
    const description = document.createElement('p');
    description.className = 'shop-card-description';
    description.textContent = item.description;
    const level = document.createElement('p');
    level.className = 'shop-card-level';
    const button = document.createElement('button');
    button.className = 'shop-buy';
    button.type = 'button';
    button.dataset.shopBuy = item.id;
    card.append(icon, title, description, level, button);
    shopGrid.append(card);
  });
}

function renderShop() {
  shopCoinCountLabel.textContent = String(progress.coins);
  shopItems.forEach((item) => {
    const card = shopGrid.querySelector(`[data-shop-card="${item.id}"]`);
    if (!card) return;
    const level = progress.upgrades[item.id];
    const maxLevel = item.costs.length;
    const button = card.querySelector('.shop-buy');
    card.querySelector('.shop-card-level').textContent = `Poziom ${level}/${maxLevel}`;
    button.disabled = level >= maxLevel;
    button.textContent = level >= maxLevel ? 'Maksymalny poziom' : `Ulepsz za ${item.costs[level]} 🪙`;
  });
}

function buyShopUpgrade(upgradeId) {
  const item = shopItems.find((shopItem) => shopItem.id === upgradeId);
  if (!item) return;
  const level = progress.upgrades[upgradeId];
  if (level >= item.costs.length) return;
  const price = item.costs[level];
  if (progress.coins < price) {
    shopNotice.textContent = `Brakuje ${price - progress.coins} monet na ten bonus.`;
    return;
  }
  progress.coins -= price;
  progress.upgrades[upgradeId] += 1;
  saveProgress();
  renderProgress();
  shopNotice.textContent = `Ulepszono: ${item.title}! Następny poziom czeka.`;
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Spróbuj starszego sposobu, jeśli schowek jest niedostępny z pliku lokalnego.
    }
  }
  const helper = document.createElement('textarea');
  helper.value = text;
  helper.setAttribute('readonly', '');
  helper.style.position = 'fixed';
  helper.style.opacity = '0';
  document.body.append(helper);
  helper.select();
  const copied = document.execCommand('copy');
  helper.remove();
  if (!copied) throw new Error('Schowek jest niedostępny.');
}

function downloadTextResult(text) {
  const file = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'moja-pyra.txt';
  link.hidden = true;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function shareResultPotato() {
  if (!lastResultPotato) return;
  const text = `${lastResultPotato.name} — ${lastResultPotato.rarityLabel} (${getRarityChanceLabel(lastResultPotato.rarity)})\n${lastResultPotato.caption}\nWpadło mi ${lastCoinReward} 🪙 w Pyra RNG!`;
  const shareData = { title: 'Moja pyra z Pyra RNG', text };
  if (['http:', 'https:'].includes(window.location.protocol)) shareData.url = window.location.href;

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      shareStatus.textContent = 'Poszło w świat!';
      return;
    } catch (error) {
      if (error.name === 'AbortError') return;
    }
  }

  try {
    await copyText(text);
    shareStatus.textContent = 'Wynik skopiowany — możesz wkleić go znajomym!';
  } catch {
    downloadTextResult(text);
    shareStatus.textContent = 'Pobrano plik z Twoim wynikiem.';
  }
}

function loadCardImage(url) {
  return new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = () => resolve(image);
    image.onerror = () => resolve(null);
    image.src = url;
  });
}

function drawWrappedCanvasText(context, text, x, y, maxWidth, lineHeight, maxLines = 3) {
  const words = String(text || '').split(/\s+/);
  const lines = [];
  let line = '';
  words.forEach((word) => {
    const candidate = line ? `${line} ${word}` : word;
    if (line && context.measureText(candidate).width > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  });
  if (line) lines.push(line);
  const shownLines = lines.slice(0, maxLines);
  if (lines.length > maxLines) shownLines[maxLines - 1] = `${shownLines[maxLines - 1].slice(0, 48)}…`;
  shownLines.forEach((lineText, index) => context.fillText(lineText, x, y + index * lineHeight, maxWidth));
  return y + shownLines.length * lineHeight;
}

async function savePotatoCard() {
  if (!lastResultPotato) return;
  saveCardButton.disabled = true;
  saveCardButton.textContent = 'Tworzę kartę…';
  shareStatus.textContent = 'Chwila, szykuję kartę pyry.';
  try {
    const potato = lastResultPotato;
    const image = await loadCardImage(potato.image);
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 675;
    const context = canvas.getContext('2d');
    context.fillStyle = '#fffdf8';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.save();
    context.beginPath();
    context.roundRect(0, 0, 500, 675, 32);
    context.clip();
    if (image) {
      const scale = Math.max(500 / image.width, 675 / image.height);
      const width = image.width * scale;
      const height = image.height * scale;
      context.drawImage(image, (500 - width) / 2, (675 - height) / 2, width, height);
    } else {
      const backdrop = context.createLinearGradient(0, 0, 500, 675);
      backdrop.addColorStop(0, '#efd9b4');
      backdrop.addColorStop(1, '#9b6845');
      context.fillStyle = backdrop;
      context.fillRect(0, 0, 500, 675);
      context.textAlign = 'center';
      context.font = '150px sans-serif';
      context.fillText('🥔', 250, 375);
      context.textAlign = 'left';
    }
    context.restore();
    context.fillStyle = '#fffdf8';
    context.fillRect(460, 0, 740, 675);
    context.fillStyle = '#a94d20';
    context.font = '600 18px sans-serif';
    context.fillText('PYRA RNG  ·  MOJA ZDOBYCZ', 535, 94);
    context.fillStyle = '#27251f';
    context.font = '700 48px sans-serif';
    const titleBottom = drawWrappedCanvasText(context, potato.name, 535, 185, 600, 57, 2);
    context.fillStyle = '#f5f0e5';
    context.beginPath();
    context.roundRect(535, titleBottom + 8, 190, 43, 21);
    context.fill();
    context.fillStyle = '#746348';
    context.font = '600 16px sans-serif';
    context.fillText(potato.rarityLabel, 553, titleBottom + 35);
    context.fillStyle = '#81796b';
    context.font = '16px sans-serif';
    context.fillText(`Szansa: ${getRarityChanceLabel(potato.rarity)}`, 535, titleBottom + 86);
    context.fillStyle = '#5c5549';
    context.font = '21px sans-serif';
    const captionBottom = drawWrappedCanvasText(context, potato.caption, 535, titleBottom + 139, 600, 32, 4);
    context.fillStyle = '#946521';
    context.font = '700 22px sans-serif';
    context.fillText(`+${lastCoinReward} 🪙 za tę pyrę`, 535, Math.min(565, captionBottom + 32));
    context.fillStyle = '#9a907d';
    context.font = '13px sans-serif';
    drawWrappedCanvasText(context, potato.credit, 535, 620, 600, 18, 2);

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `pyra-rng-${potato.id}.png`;
    link.hidden = true;
    document.body.append(link);
    link.click();
    link.remove();
    shareStatus.textContent = 'Karta PNG pobrana!';
  } catch {
    shareStatus.textContent = 'Nie udało się przygotować karty. Możesz udostępnić albo skopiować wynik.';
  } finally {
    saveCardButton.disabled = false;
    saveCardButton.textContent = '💾 Pobierz kartę PNG';
  }
}

function getUnlockedPotatoCount() {
  const knownIds = new Set(potatoes.map((potato) => potato.id));
  return new Set(progress.unlocked.filter((id) => knownIds.has(id))).size;
}

function getRarityHitCount(rarity) {
  const savedCount = progress.rarityCounts?.[rarity] || 0;
  if (savedCount > 0) return savedCount;
  return progress.unlocked.some((id) => potatoes.some((potato) => potato.id === id && potato.rarity === rarity)) ? 1 : 0;
}

function getAchievementStates() {
  return achievementDefinitions.map((achievement) => {
    const target = Math.max(1, typeof achievement.target === 'function' ? achievement.target() : achievement.target);
    const current = Math.max(0, achievement.current());
    return { ...achievement, target, current: Math.min(current, target), unlocked: current >= target };
  });
}

function renderAchievements() {
  const states = getAchievementStates();
  achievementCountLabel.textContent = `${states.filter((achievement) => achievement.unlocked).length}/${states.length} zdobytych`;
  achievementGrid.replaceChildren();

  states.forEach((achievement) => {
    const card = document.createElement('article');
    card.className = `achievement-card${achievement.unlocked ? ' is-unlocked' : ' is-locked'}`;
    card.dataset.achievementId = achievement.id;
    const icon = document.createElement('span');
    icon.className = 'achievement-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = achievement.unlocked ? achievement.icon : '🔒';
    const copy = document.createElement('div');
    copy.className = 'achievement-copy';
    const title = document.createElement('h3');
    title.className = 'achievement-name';
    title.textContent = achievement.title;
    const description = document.createElement('p');
    description.className = 'achievement-description';
    description.textContent = achievement.description;
    const progressText = document.createElement('span');
    progressText.className = 'achievement-progress-text';
    progressText.textContent = achievement.unlocked
      ? 'ZDOBYTE!'
      : `${achievement.current}/${achievement.target} ${achievement.unit}`;
    const track = document.createElement('span');
    track.className = 'achievement-track';
    track.setAttribute('aria-hidden', 'true');
    const bar = document.createElement('span');
    bar.style.width = `${(achievement.current / achievement.target) * 100}%`;
    track.append(bar);
    copy.append(title, description, progressText, track);
    card.append(icon, copy);
    card.setAttribute('aria-label', `${achievement.title}: ${achievement.description} ${progressText.textContent}`);
    achievementGrid.append(card);
  });
}

function showAchievementToast(newAchievements) {
  if (!newAchievements.length) return;
  const names = newAchievements.map((achievement) => achievement.title);
  achievementToast.textContent = names.length === 1
    ? `🏆 Nowe osiągnięcie: ${names[0]}!`
    : `🏆 Nowe osiągnięcia: ${names.join(', ')}!`;
  achievementToast.hidden = false;
  achievementToast.classList.remove('is-visible');
  window.requestAnimationFrame(() => achievementToast.classList.add('is-visible'));
  window.clearTimeout(achievementToastTimer);
  achievementToastTimer = window.setTimeout(() => {
    achievementToast.classList.remove('is-visible');
    window.setTimeout(() => { achievementToast.hidden = true; }, 300);
  }, 3600);
}

function getAudioContext() {
  if (!soundEnabled) return null;
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) return null;
  try {
    if (!audioContext) audioContext = new AudioContextConstructor();
    if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
    return audioContext;
  } catch {
    return null;
  }
}

function playTone(frequency, offset = 0, duration = 0.16, volume = 0.035, type = 'sine') {
  const context = getAudioContext();
  if (!context) return;
  const startAt = context.currentTime + offset;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, startAt);
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(startAt);
  oscillator.stop(startAt + duration + 0.02);
}

function playSpinStart() {
  playTone(360, 0, 0.12, 0.022, 'triangle');
  playTone(540, 0.11, 0.18, 0.026, 'triangle');
}

function playSpinTick() {
  playTone(380 + Math.random() * 100, 0, 0.045, 0.009, 'triangle');
}

function playRevealSound(rarity) {
  const notes = {
    common: [523, 659],
    uncommon: [523, 659, 784],
    rare: [659, 784, 988],
    epic: [659, 831, 988, 1244],
    legendary: [784, 988, 1175, 1568, 1175],
    mythic: [659, 831, 988, 1244, 1568, 1976]
  }[rarity] || [523, 659];
  notes.forEach((frequency, index) => playTone(frequency, index * 0.12, 0.24, rarity === 'mythic' ? 0.045 : 0.035));
}

function updateSoundToggle() {
  const icon = soundToggle.querySelector('.sound-toggle-icon');
  icon.textContent = soundEnabled ? '🔊' : '🔇';
  soundToggleLabel.textContent = soundEnabled ? 'Dźwięki włączone' : 'Dźwięki wyciszone';
  soundToggle.setAttribute('aria-pressed', String(soundEnabled));
  soundToggle.setAttribute('aria-label', soundEnabled ? 'Wyłącz dźwięki' : 'Włącz dźwięki');
}

let lastSpinPotato = null;
let isRolling = false;
const loadedPotatoes = [];
const scheduledPotatoImages = new Set();
const bagEggImage = new Image();
bagEggImage.src = 'potato-bag.png';
let spinStartedAt = 0;
let bagEggScheduled = false;
let bagEggShown = false;
let bagEggVisibleUntil = 0;

function preloadPotatoes(limit = 16) {
  const candidates = potatoes.filter((potato) => !scheduledPotatoImages.has(potato.id));
  for (let index = candidates.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [candidates[index], candidates[swapIndex]] = [candidates[swapIndex], candidates[index]];
  }

  candidates.slice(0, limit).forEach((potato) => {
    scheduledPotatoImages.add(potato.id);
    const image = new Image();
    image.onload = () => loadedPotatoes.push(potato);
    image.src = potato.image;
  });
}

function plainMetadata(value) {
  if (!value) return '';
  const parsed = new DOMParser().parseFromString(String(value), 'text/html');
  return (parsed.body.textContent || '').replace(/\s+/g, ' ').trim();
}

const commonsNicknames = [
  'Król Frytek', 'Mistrz Obieraczki', 'Bulwiasty Boss', 'Pan Purée', 'Pyra Chrupka',
  'Kartofel na Medal', 'Książę Spiżarni', 'Frytkomistrz', 'Kapitan Kopytko', 'Pyra z Planem',
  'Obierkowy Ninja', 'Wielka Bulwa', 'Czarodziej Kopytek', 'Prezes Spiżarni', 'Pogromca Głodu',
  'Maślany Baron', 'Chrupiący Agent', 'Tajny Kartofel', 'Kosmiczna Bulwa', 'Frytka w Treningu',
  'Prawie Krokiet', 'Bulwa z Charakterem', 'Ziemniaczany Gwiazdor', 'Szef Kuchni',
  'Pyra na Wakacjach', 'Pupil Piekarnika', 'Kartofel Imperator', 'Kiełkowy Wizjoner'
];

function polishCommonsName(catalogNumber) {
  const nickname = commonsNicknames[(catalogNumber - 1) % commonsNicknames.length];
  return `${nickname} #${catalogNumber}`;
}

function getOriginalImageUrl(imageUrl) {
  return imageUrl
    .replace('/commons/thumb/', '/commons/')
    .replace(/\/\d+px-[^/]+$/, '');
}

function funnyPotatoCaption(name) {
  const captions = [
    (potatoName) => `„${potatoName}” twierdzi, że to on pierwszy wymyślił puree.`,
    (potatoName) => `To ${potatoName} — ma plan. Plan: zostać frytką.`,
    (potatoName) => `Plotka głosi, że ${potatoName} zna osobiście każdego klopsa.`,
    (potatoName) => `„${potatoName}” przyjechał na zdjęcie, bo usłyszał słowo „chipsy”.`,
    (potatoName) => `Nie daj się zwieść skórce. ${potatoName} ma doktorat z leżenia w spiżarni.`,
    (potatoName) => `„${potatoName}” ma dziś wolne od obierania. Proszę nie pytać dlaczego.`,
    () => 'W środku tajemnica. Na zewnątrz — bardzo pewny siebie ziemniak.',
    (potatoName) => `Podobno ${potatoName} wygrał konkurs na najpoważniejszą pyrę.`,
    (potatoName) => `${potatoName} nie ma nóg, ale i tak ucieka przed obieraczką.`,
    (potatoName) => `Jeśli usłyszysz „plask”, to tylko ${potatoName} robi wejście.`,
    (potatoName) => `„${potatoName}” jest gotowy na karierę w puree. Autografy po obiedzie.`,
    (potatoName) => `Uwaga: patrzenie na ${potatoName} może wywołać nagłą ochotę na frytki.`
  ];
  const hash = [...name].reduce((value, character) => (value * 31 + character.codePointAt(0)) >>> 0, 7);
  return captions[hash % captions.length](name);
}

function commonsRarity(title, category) {
  const searchable = `${title} ${category}`.toLowerCase();
  if (/\b(blue|violet|purple|peruvian|chilo[eé]|black potato)\b/.test(searchable)) return 'epic';
  if (/unusually shaped|potato texture|odd potato/.test(searchable)) return 'rare';
  if (/cultivar|variety|cv\b/.test(searchable)) return 'uncommon';
  return 'common';
}

async function fetchCommonsCategory(category) {
  const parameters = new URLSearchParams({
    action: 'query',
    generator: 'categorymembers',
    gcmtitle: category,
    gcmtype: 'file',
    gcmlimit: '50',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata',
    iiurlwidth: '640',
    iiextmetadatafilter: 'Artist|LicenseShortName',
    format: 'json',
    origin: '*'
  });
  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${parameters}`);
  if (!response.ok) throw new Error('Nie udało się pobrać zdjęć z Wikimedia Commons.');
  const data = await response.json();
  return Object.values(data.query?.pages || []).map((page) => {
    const info = page.imageinfo?.[0];
    if (!info?.thumburl || !page.title) return null;

    const extension = page.title.split('.').pop().toLowerCase();
    if (!['jpg', 'jpeg', 'png', 'webp'].includes(extension)) return null;
    if (/(baked|boiled|fried|fries|chips|stew|soup|mashed|salad|recipe|stamp|manual|illustration|drawing|painting|poster|flower|leaf|tractor|machine|logo|diagram)/i.test(page.title)) return null;

    const meta = info.extmetadata || {};
    const author = plainMetadata(meta.Artist?.value);
    const license = plainMetadata(meta.LicenseShortName?.value);
    const fallbackRarity = commonsRarity(page.title, category);
    return {
      id: `commons-${page.pageid}`,
      name: '',
      rarity: fallbackRarity,
      rarityLabel: rarityDetails[fallbackRarity].label,
      chance: rarityDetails[fallbackRarity].chance,
      caption: '',
      image: info.thumburl,
      originalImage: info.url,
      source: info.descriptionurl || `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title.replace(/ /g, '_'))}`,
      credit: `Zdjęcie: ${author || 'autor na stronie źródłowej'}${license ? ` · ${license}` : ''}`
    };
  }).filter(Boolean);
}

async function loadLargePotatoCatalog() {
  const categories = [
    'Category:Potatoes on white background',
    'Category:Potato cultivars',
    'Category:Potato sprouts',
    'Category:Unusually shaped potatoes',
    'Category:Blue potato cultivars',
    'Category:Purple potatoes'
  ];
  const knownImages = new Set(potatoes.map((potato) => potato.image));
  const knownIds = new Set(potatoes.map((potato) => potato.id));
  const additions = [];

  for (const category of categories) {
    if (potatoes.length + additions.length >= 100) break;
    try {
      const candidates = await fetchCommonsCategory(category);
      candidates.forEach((potato) => {
        if (potatoes.length + additions.length >= 100) return;
        if (knownImages.has(potato.image) || knownIds.has(potato.id)) return;
        knownImages.add(potato.image);
        knownIds.add(potato.id);
        potato.name = polishCommonsName(potatoes.length + additions.length + 1);
        potato.caption = funnyPotatoCaption(potato.name);
        additions.push(potato);
      });
    } catch {
      // Przejdź do następnej kategorii, jeśli Commons chwilowo nie odpowiada.
    }
  }

  if (potatoes.length + additions.length < 100) {
    try {
      const morePotatoes = await fetchCommonsCategory('Category:Potatoes');
      morePotatoes.forEach((potato) => {
        if (potatoes.length + additions.length >= 100) return;
        if (knownImages.has(potato.image) || knownIds.has(potato.id)) return;
        knownImages.add(potato.image);
        knownIds.add(potato.id);
        potato.name = polishCommonsName(potatoes.length + additions.length + 1);
        potato.caption = funnyPotatoCaption(potato.name);
        additions.push(potato);
      });
    } catch {
      // Zachowaj zdjęcia z kategorii, które udało się już pobrać.
    }
  }

  potatoes.push(...additions);
  return additions.length;
}

function getRandomPotato() {
  const roll = Math.random() * 100;
  const chances = getRarityChances();
  let rarity;

  let threshold = 0;
  for (const rarityKey of rarityKeys) {
    threshold += chances[rarityKey];
    if (roll < threshold) {
      rarity = rarityKey;
      break;
    }
  }

  const options = potatoes.filter((potato) => potato.rarity === rarity);
  return options[Math.floor(Math.random() * options.length)];
}

function showPotato(potato) {
  resultCard.classList.remove('is-spinning');
  resultCard.classList.remove('is-revealing');
  void resultCard.offsetWidth;
  resultCard.classList.add('is-revealing');
  window.setTimeout(() => resultCard.classList.remove('is-revealing'), 760);
  photo.classList.remove('is-bag-egg');
  resultCard.dataset.rarity = potato.rarity;
  nameLabel.textContent = potato.name;
  captionLabel.textContent = potato.caption;
  rarityBadge.textContent = potato.rarityLabel;
  chanceLabel.textContent = getRarityChanceLabel(potato.rarity);
  sourceLink.href = potato.source;
  sourceLink.textContent = potato.credit;
  sourceLink.hidden = false;
  lastResultPotato = potato;
  lastCoinReward = recordPotato(potato);
  shareResult.hidden = false;
  shareStatus.textContent = '';
  playRevealSound(potato.rarity);

  photo.dataset.fallbackTried = '';
  photo.classList.remove('loaded');
  photo.hidden = false;
  photo.alt = potato.name;
  photo.onload = () => {
    photo.dataset.fallbackTried = '';
    photo.classList.add('loaded');
    emptyLabel.textContent = 'Miejsce na Twoją pyrę';
    emptyState.classList.add('is-hidden');
  };
  photo.onerror = () => {
    const fallbackUrl = potato.originalImage || getOriginalImageUrl(potato.image);
    if (fallbackUrl && fallbackUrl !== photo.src && !photo.dataset.fallbackTried) {
      photo.dataset.fallbackTried = 'true';
      photo.src = fallbackUrl;
      return;
    }
    photo.dataset.fallbackTried = '';
    photo.hidden = true;
    photo.alt = '';
    emptyLabel.textContent = '🥔 Zdjęcie chwilowo niedostępne';
    emptyState.classList.remove('is-hidden');
    captionLabel.textContent = 'Ziemniak został wylosowany i zapisany w albumie — zdjęcie nie chciało się załadować.';
  };
  photo.src = potato.image;

  photoShine.classList.remove('flash');
  window.requestAnimationFrame(() => photoShine.classList.add('flash'));
  return lastCoinReward;
}

function saveProgress() {
  try {
    window.localStorage.setItem(storageKey, JSON.stringify(progress));
  } catch {
    // Strona nadal działa, nawet gdy przeglądarka blokuje zapis lokalny.
  }
}

function recordPotato(potato) {
  const previousAchievements = new Set(getAchievementStates().filter((achievement) => achievement.unlocked).map((achievement) => achievement.id));
  progress.draws += 1;
  if (specialRarities.has(potato.rarity)) progress.specialHits += 1;
  progress.rarityCounts[potato.rarity] = (progress.rarityCounts[potato.rarity] || 0) + 1;
  if (!progress.unlocked.includes(potato.id)) progress.unlocked.push(potato.id);
  const coinReward = calculateCoinReward(potato);
  progress.coins += coinReward;
  progress.coinsEarned += coinReward;
  saveProgress();
  renderProgress();
  [coinCountLabel, shopCoinCountLabel].forEach((label) => {
    label.classList.remove('coin-earned');
    void label.offsetWidth;
    label.classList.add('coin-earned');
    window.setTimeout(() => label.classList.remove('coin-earned'), 620);
  });
  const newAchievements = getAchievementStates().filter((achievement) => achievement.unlocked && !previousAchievements.has(achievement.id));
  newAchievements.forEach((achievement) => {
    const card = achievementGrid.querySelector(`[data-achievement-id="${achievement.id}"]`);
    if (!card) return;
    card.classList.add('just-unlocked');
    window.setTimeout(() => card.classList.remove('just-unlocked'), 850);
  });
  showAchievementToast(newAchievements);
  return coinReward;
}

function buildAlbum() {
  albumGrid.replaceChildren();

  potatoes.forEach((potato) => {
    const card = document.createElement('article');
    card.className = 'album-card is-locked';
    card.dataset.potatoId = potato.id;

    const imageFrame = document.createElement('div');
    imageFrame.className = 'album-image-frame';
    const image = document.createElement('img');
    image.className = 'album-image';
    image.dataset.src = potato.image;
    image.alt = potato.name;
    image.loading = 'lazy';
    image.addEventListener('load', () => {
      imageFrame.classList.remove('has-image-error');
      image.dataset.fallbackTried = '';
    });
    image.addEventListener('error', () => {
      const fallbackUrl = potato.originalImage || getOriginalImageUrl(potato.image);
      if (fallbackUrl && fallbackUrl !== image.src && !image.dataset.fallbackTried) {
        image.dataset.fallbackTried = 'true';
        image.src = fallbackUrl;
        return;
      }
      imageFrame.classList.add('has-image-error');
    });
    const imageFallback = document.createElement('span');
    imageFallback.className = 'album-image-fallback';
    imageFallback.textContent = '🥔 Zdjęcie niedostępne';
    const lock = document.createElement('span');
    lock.className = 'album-lock';
    lock.setAttribute('aria-hidden', 'true');
    lock.textContent = '?';
    imageFrame.append(image, imageFallback, lock);

    const copy = document.createElement('div');
    copy.className = 'album-copy';
    const name = document.createElement('h3');
    name.className = 'album-name';
    const rarity = document.createElement('span');
    rarity.className = 'album-rarity';
    const caption = document.createElement('p');
    caption.className = 'album-caption';
    const source = document.createElement('a');
    source.className = 'album-source';
    source.target = '_blank';
    source.rel = 'noreferrer';
    source.textContent = 'Autor i licencja ↗';
    copy.append(name, rarity, caption, source);
    card.append(imageFrame, copy);
    albumGrid.append(card);
  });
}

function renderProgress() {
  const knownIds = new Set(potatoes.map((potato) => potato.id));
  const unlocked = new Set(progress.unlocked.filter((id) => knownIds.has(id)));
  const total = potatoes.length;
  drawCountLabel.textContent = String(progress.draws);
  unlockedCountLabel.textContent = `${unlocked.size}/${total}`;
  albumToggleCount.textContent = `${unlocked.size}/${total}`;
  specialCountLabel.textContent = String(progress.specialHits);
  coinCountLabel.textContent = String(progress.coins);
  albumProgressText.textContent = `${unlocked.size} z ${total} odkrytych`;
  albumProgressBar.style.width = `${total ? (unlocked.size / total) * 100 : 0}%`;

  albumGrid.querySelectorAll('.album-card').forEach((card) => {
    const potato = potatoes.find((item) => item.id === card.dataset.potatoId);
    if (!potato) return;
    const isUnlocked = unlocked.has(card.dataset.potatoId);
    card.classList.toggle('is-unlocked', isUnlocked);
    card.classList.toggle('is-locked', !isUnlocked);
    const image = card.querySelector('.album-image');
    image.hidden = !isUnlocked;
    if (isUnlocked && image.dataset.src && !image.hasAttribute('src')) image.src = image.dataset.src;
    card.querySelector('.album-name').textContent = isUnlocked ? potato.name : 'Nieodkryty ziemniak';
    card.querySelector('.album-rarity').textContent = isUnlocked ? potato.rarityLabel : '???';
    const caption = card.querySelector('.album-caption');
    caption.textContent = isUnlocked ? potato.caption : '';
    caption.hidden = !isUnlocked;
    const source = card.querySelector('.album-source');
    source.href = potato.source;
    source.hidden = !isUnlocked;
    card.setAttribute('aria-label', isUnlocked ? `${potato.name}, ${potato.rarityLabel}` : 'Nieodkryty ziemniak');
    card.hidden = selectedAlbumFilter !== 'all' && potato.rarity !== selectedAlbumFilter;
  });

  const visibleCount = [...albumGrid.querySelectorAll('.album-card')].filter((card) => !card.hidden).length;
  albumResultCount.textContent = `${visibleCount} ziemniaków`;
  renderShop();
  renderOdds();
  renderAchievements();
}

function setAlbumFilter(filter) {
  selectedAlbumFilter = filter;
  albumFilterButtons.forEach((button) => {
    const isActive = button.dataset.albumFilter === filter;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  renderProgress();
}

function showSpinFrame() {
  const now = Date.now();
  if (bagEggShown && now < bagEggVisibleUntil) return;

  if (bagEggScheduled && !bagEggShown && now - spinStartedAt >= 1200 && bagEggImage.complete && bagEggImage.naturalWidth > 0) {
    bagEggShown = true;
    bagEggVisibleUntil = now + 900;
    resultCard.dataset.rarity = 'easter-egg';
    photo.onload = null;
    photo.onerror = null;
    photo.classList.add('is-bag-egg');
    photo.src = bagEggImage.src;
    photo.alt = 'Tajny worek ziemniaków';
    photo.hidden = false;
    photo.classList.add('loaded');
    emptyState.classList.add('is-hidden');
    nameLabel.textContent = 'WOREK?!';
    captionLabel.textContent = 'Tajny worek ziemniaków przemknął przez losowanie!';
    rarityBadge.textContent = 'EASTER EGG';
    chanceLabel.textContent = 'rzadki widok';
    sourceLink.hidden = true;
    playTone(880, 0, 0.12, 0.035, 'triangle');
    playTone(1175, 0.12, 0.24, 0.04, 'triangle');
    return;
  }

  if (loadedPotatoes.length === 0) return;
  photo.classList.remove('is-bag-egg');
  resultCard.dataset.rarity = 'spinning';
  nameLabel.textContent = 'Losujemy ziemniaka...';
  captionLabel.textContent = 'Która pyra wpadnie tym razem?';
  rarityBadge.textContent = 'LOSOWANIE';
  chanceLabel.textContent = 'trwa...';

  const options = loadedPotatoes.length > 1
    ? loadedPotatoes.filter((potato) => potato !== lastSpinPotato)
    : loadedPotatoes;
  const potato = options[Math.floor(Math.random() * options.length)];
  lastSpinPotato = potato;

  photo.onload = null;
  photo.onerror = null;
  photo.src = potato.image;
  photo.alt = 'Zdjęcie ziemniaka w trakcie losowania';
  photo.hidden = false;
  photo.classList.add('loaded');
  emptyState.classList.add('is-hidden');
}

let rerollAvailable = false;

function startRoll(isReroll = false) {
  if (isRolling) return;
  if (isReroll && (!rerollAvailable || progress.upgrades.secondChanceLevel < 1)) return;

  const spinDurationMs = getSpinDurationMs();
  rerollAvailable = false;
  rerollButton.hidden = true;
  isRolling = true;
  playSpinStart();
  spinStartedAt = Date.now();
  bagEggScheduled = Math.random() < 0.03;
  bagEggShown = false;
  bagEggVisibleUntil = 0;
  preloadPotatoes(12);
  const finalPotato = getRandomPotato();
  const originalHint = 'Nie ma limitu losowań. Powodzenia, kolekcjonerze!';
  drawButton.disabled = true;
  drawButton.classList.add('is-loading');
  drawButtonLabel.textContent = 'Losujemy...';
  drawHint.textContent = 'Jeszcze chwila — ziemniak zaraz się zatrzyma!';
  shareResult.hidden = true;
  shareStatus.textContent = '';
  resultCard.classList.add('is-spinning');
  resultCard.dataset.rarity = 'spinning';
  nameLabel.textContent = 'Losujemy ziemniaka...';
  captionLabel.textContent = 'Która pyra wpadnie tym razem?';
  rarityBadge.textContent = 'LOSOWANIE';
  chanceLabel.textContent = 'trwa...';
  sourceLink.hidden = true;

  showSpinFrame();
  const spinInterval = window.setInterval(showSpinFrame, 150);
  const soundInterval = window.setInterval(playSpinTick, 760);

  window.setTimeout(() => {
    window.clearInterval(spinInterval);
    window.clearInterval(soundInterval);
    const coinReward = showPotato(finalPotato);
    isRolling = false;
    drawButton.disabled = false;
    drawButton.classList.remove('is-loading');
    drawButtonLabel.textContent = 'Losuj ziemniaka';
    drawHint.textContent = `+${coinReward} 🪙 za tę pyrę! ${originalHint}`;
    if (!isReroll && progress.upgrades.secondChanceLevel > 0) {
      rerollAvailable = true;
      rerollButton.hidden = false;
    }
  }, spinDurationMs);
}

albumToggle.addEventListener('click', () => {
  const isExpanded = albumToggle.getAttribute('aria-expanded') === 'true';
  albumToggle.setAttribute('aria-expanded', String(!isExpanded));
  albumContent.hidden = isExpanded;
  albumToggle.querySelector('.album-toggle-label').textContent = isExpanded ? 'Otwórz album' : 'Zamknij album';
});

albumFilterButtons.forEach((button) => {
  button.addEventListener('click', () => setAlbumFilter(button.dataset.albumFilter));
});

shopGrid.addEventListener('click', (event) => {
  const button = event.target.closest('[data-shop-buy]');
  if (button) buyShopUpgrade(button.dataset.shopBuy);
});

shareButton.addEventListener('click', shareResultPotato);
saveCardButton.addEventListener('click', savePotatoCard);

soundToggle.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  try {
    window.localStorage.setItem(soundStorageKey, String(soundEnabled));
  } catch {
    // Wyciszenie działa także bez zapisywania ustawienia.
  }
  updateSoundToggle();
  if (soundEnabled) playTone(660, 0, 0.18, 0.03, 'triangle');
});

async function initializePage() {
  updateSoundToggle();
  buildShop();
  buildAlbum();
  renderProgress();
  preloadPotatoes(12);
  drawHint.textContent = 'Dodaję zdjęcia do kolekcji — możesz już losować!';

  try {
    await loadLargePotatoCatalog();
    buildAlbum();
    renderProgress();
    preloadPotatoes(36);
    drawHint.textContent = `Gotowe — w albumie czeka ${potatoes.length} zdjęć ziemniaków!`;
  } catch {
    drawHint.textContent = 'Nie udało się doładować zdjęć. Możesz losować z podstawowej kolekcji.';
  }
}

drawButton.addEventListener('click', () => startRoll());
rerollButton.addEventListener('click', () => startRoll(true));
initializePage();
// Przelaczanie jasnego i ciemnego motywu
(() => {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const root = document.documentElement;
  const key = "pyra-rng-theme";

  function setTheme(theme) {
    root.dataset.theme = theme;
    btn.textContent = theme === "dark"
      ? "☀️ Jasny motyw"
      : "🌙 Ciemny motyw";
  }

  let saved = "light";
  try {
    saved = localStorage.getItem(key) || "light";
  } catch {}

  setTheme(saved);

  btn.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem(key, next);
    } catch {}
  });
})();

// Portfolio managers and funds.
const investments = [
  {
    name: "Novacap",
    url: "https://novacapcorp.com/",
    kind: "fund",
    label: "private-equity",
  },
  {
    name: "Imperial",
    url: "https://www.imperialcap.com/",
    kind: "fund",
    label: "private-equity",
  },
  {
    name: "Ironbridge",
    url: "https://www.ironbridgeequity.com/",
    kind: "fund",
    label: "private-equity",
  },
  {
    name: "Altas",
    url: "https://www.altas.com/",
    kind: "fund",
    label: "private-equity",
  },
  {
    name: "Atlas Grove",
    url: "https://www.atlasgrove.partners/",
    kind: "fund",
    label: "private-equity",
  },
  {
    name: "Hale Capital",
    url: "https://halecapital.com/",
    kind: "fund",
    label: "private-equity",
    logo: "./assets/images/hale-capital-mark.svg",
  },
  {
    name: "CPS",
    url: "https://cpscapital.com/",
    kind: "fund",
    label: "private-equity",
  },
  {
    name: "Kline Hill",
    url: "https://www.klinehill.com/",
    kind: "fund",
    label: "private-equity",
  },
  {
    name: "Victor",
    url: "https://www.victorcapitalpartners.com/",
    kind: "fund",
    label: "private-equity",
  },
  {
    name: "Legate",
    url: "https://www.legatelp.com/",
    kind: "fund",
    label: "private-equity",
  },
  {
    name: "Renwave",
    url: "https://www.renwavekore.com/",
    kind: "fund",
    label: "private-equity",
  },
  {
    name: "Shore",
    url: "https://www.shorecp.com/",
    kind: "fund",
    label: "private-equity",
  },
  {
    name: "Birch Hill",
    url: "https://www.birchhillequity.com/",
    kind: "fund",
    label: "private-equity",
  },
  {
    name: "Equality Asset Management",
    url: "https://equalityassetmanagement.com/",
    kind: "fund",
    label: "private-equity",
  },
  {
    name: "Chicago Pacific Founders",
    url: "https://cpfounders.com/",
    kind: "fund",
    label: "private-equity",
  },
  {
    name: "Truelink",
    url: "https://truelinkcap.com/",
    kind: "fund",
    label: "private-equity",
  },
  {
    name: "Afore",
    url: "https://afore.vc/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Ballistic",
    url: "https://ballisticventures.com/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Browder Capital",
    url: "https://browdercapital.com/",
    kind: "fund",
    label: "venture-capital",
    logo: "./assets/images/browder-capital-wordmark.svg",
    logoMode: "wordmark",
  },
  {
    name: "Buckley Ventures",
    url: "https://buckleyventures.com/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Caffeinated",
    url: "https://caffeinated.com/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Compound",
    url: "https://compound.vc/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Discipulus",
    url: "https://discipulusventures.com/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Framework",
    url: "https://www.framework.ventures/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Dorm Room Fund",
    url: "https://dormroomfund.com/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Eclipse",
    url: "https://eclipse.capital/",
    kind: "fund",
    label: "venture-capital",
    logo: "./assets/images/eclipse-logo.svg",
    logoMode: "wordmark",
  },
  {
    name: "Foothill",
    url: "https://foothill.ventures/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Ford Street",
    url: "https://fordstreetvc.com/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "FPV",
    url: "https://fpvventures.com/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Fuse",
    url: "https://fuse.vc/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Garage",
    url: "https://garage.vc/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "GreenOaks",
    url: "https://greenoaks.com/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Horizon",
    url: "https://horizon.vc/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Humba Ventures",
    url: "https://humbaventures.com/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Iron Nation",
    url: "https://ironnation.org/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Iterative",
    url: "https://iterative.vc/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Julian Capital",
    url: "https://julian.capital/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "KdT",
    url: "https://kdtvc.com/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Keel",
    url: "https://keel.club/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Leo",
    url: "https://leo.capital/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Liquid 2",
    url: "https://liquid2.vc/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "New Form",
    url: "https://www.newformcap.com/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Night",
    url: "https://nightcapvc.com/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Northside",
    url: "https://northside.ventures/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Powerset",
    url: "https://powerset.co/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Repeat VC",
    url: "https://repeat.vc/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Road",
    url: "https://roadcapitalmgmt.com/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Selva Ventures",
    url: "https://selvaventures.com/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Ambition Capital",
    url: "https://ambition.capital/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Sunshine Lake",
    url: "https://sunshinelake.vc/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Topology",
    url: "https://topology.vc/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Variant",
    url: "https://variant.fund/",
    kind: "fund",
    label: "venture-capital",
    logoMode: "wordmark",
  },
  {
    name: "Valkyrie",
    url: "https://valkyrie.vc/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Wayfinder",
    url: "https://wayfinder.com/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Worldbuild",
    url: "https://worldbuild.vc/",
    kind: "fund",
    label: "venture-capital",
  },
  {
    name: "Abingdon Software Group",
    url: "https://abingdon.software/",
    kind: "direct",
    label: "private-equity",
  },
  {
    name: "Antares Nuclear",
    url: "https://antaresindustries.com/",
    kind: "direct",
    label: "venture-capital",
  },
  {
    name: "Actual",
    url: "https://onactual.com/",
    kind: "direct",
    label: "venture-capital",
  },
  {
    name: "Brainbase",
    url: "https://brainbaselabs.com/",
    kind: "direct",
    label: "venture-capital",
  },
  {
    name: "Canada Rocket Company",
    url: "https://www.canadarocketcompany.com/",
    kind: "direct",
    label: "venture-capital",
  },
  {
    name: "Deel",
    url: "https://www.deel.com/",
    kind: "direct",
    label: "venture-capital",
  },
  {
    name: "Owner",
    url: "https://www.owner.com/",
    kind: "direct",
    label: "venture-capital",
  },
  {
    name: "Paloma",
    url: "https://www.getpaloma.ai/",
    kind: "direct",
    label: "venture-capital",
  },
  {
    name: "Rivet Tax",
    url: "https://www.rivet.tax/",
    kind: "direct",
    label: "venture-capital",
  },
  {
    name: "Skyryse",
    url: "https://www.skyryse.com/",
    kind: "direct",
    label: "venture-capital",
  },
  {
    name: "Switch Growth",
    url: "https://switchgrowth.com/",
    kind: "direct",
    label: "venture-capital",
  },
  {
    name: "The Lumber Manufactory",
    url: "https://www.lumbermanufactory.com/",
    kind: "direct",
    label: "venture-capital",
  },
  {
    name: "Titus",
    url: "https://gotitus.com/",
    kind: "direct",
    label: "venture-capital",
  },
  {
    name: "Underdog Fantasy",
    url: "https://www.underdogfantasy.com/",
    kind: "direct",
    label: "venture-capital",
  },
  {
    name: "Yuzu Health",
    url: "https://yuzu.health/",
    kind: "direct",
    label: "venture-capital",
  },
  {
    name: "Zuper",
    url: "https://www.zuper.co/",
    kind: "direct",
    label: "venture-capital",
    logoMode: "wordmark",
  },
  {
    name: "AlumierMD",
    url: "https://www.alumiermd.com/",
    kind: "direct",
    label: "private-equity",
  },
  {
    name: "GlobalFaces Direct",
    url: "https://globalfacesdirect.com/",
    kind: "direct",
    label: "private-equity",
  },
  {
    name: "Kii Health",
    url: "https://www.kiihealth.com/",
    kind: "direct",
    label: "private-equity",
  },
  {
    name: "Tree Care Partners",
    url: "https://treecare.partners/",
    kind: "direct",
    label: "private-equity",
  },
  {
    name: "We Grow Brands",
    url: "https://wegrowbrands.org/",
    kind: "direct",
    label: "private-equity",
  },
];

const localLogoMap = {
  "Abingdon Software Group": "./assets/images/portfolio/abingdon-software-group-011454585e70.webp",
  Actual: "./assets/images/portfolio/actual-5146efa6237b.webp",
  Afore: "./assets/images/portfolio/afore-8a37dde1662f.png",
  Altas: "./assets/images/portfolio/altas-33d4f8cf7f6c.png",
  AlumierMD: "./assets/images/portfolio/alumiermd-8fad35bc8871.png",
  "Antares Nuclear": "./assets/images/portfolio/antares-nuclear-411a2d0e92f3.webp",
  "Atlas Grove": "./assets/images/portfolio/atlas-grove-46ccb5fe2f50.jpg",
  Ballistic: "./assets/images/portfolio/ballistic-715347fd467e.webp",
  "Birch Hill": "./assets/images/portfolio/birch-hill-b8aa49eff371.png",
  Brainbase: "./assets/images/portfolio/brainbase.svg",
  "Canada Rocket Company": "./assets/images/portfolio/canada-rocket-company-official.png",
  "Buckley Ventures": "./assets/images/portfolio/buckley-ventures-5cfbbfc9ce29.webp",
  CPS: "./assets/images/portfolio/cps-74fbdab86f18.png",
  Caffeinated: "./assets/images/portfolio/caffeinated-c4fdd3ad7c2d.png",
  "Chicago Pacific Founders": "./assets/images/portfolio/chicago-pacific-founders-6e0d136c9779.png",
  Compound: "./assets/images/portfolio/compound-b0bd51f79e3c.png",
  Deel: "./assets/images/portfolio/deel-1e3a557ec88c.ico",
  Discipulus: "./assets/images/portfolio/discipulus-e3e0ca90ef79.ico",
  "Dorm Room Fund": "./assets/images/portfolio/dorm-room-fund-3e71f7ebd0f6.ico",
  "Equality Asset Management": "./assets/images/portfolio/equality-asset-management-1d9b36896182.svg",
  FPV: "./assets/images/portfolio/fpv-4b81d7a172c1.webp",
  Foothill: "./assets/images/portfolio/foothill-180223578846.png",
  "Ford Street": "./assets/images/portfolio/ford-street-ee89aa46c5d0.png",
  Framework: "./assets/images/portfolio/framework-9d6f83e89edf.svg",
  Fuse: "./assets/images/portfolio/fuse-38442c9432a6.svg",
  Garage: "./assets/images/portfolio/garage-22ebe308c340.png",
  "GlobalFaces Direct": "./assets/images/portfolio/globalfaces-direct-8c6898c8616c.png",
  GreenOaks: "./assets/images/portfolio/greenoaks-62fcddbad241.png",
  Horizon: "./assets/images/portfolio/horizon-3d61498e2787.png",
  "Humba Ventures": "./assets/images/portfolio/humba-ventures-bdc0975a7b10.ico",
  Imperial: "./assets/images/portfolio/imperial.png",
  "Iron Nation": "./assets/images/portfolio/iron-nation-880c0c63df10.png",
  Ironbridge: "./assets/images/portfolio/ironbridge-dc7c5b2f1db4.png",
  Iterative: "./assets/images/portfolio/iterative-0d86ceee28ee.png",
  "Julian Capital": "./assets/images/portfolio/julian-capital-36f702ad0097.png",
  KdT: "./assets/images/portfolio/kdt-191766793f0d.webp",
  Keel: "./assets/images/portfolio/keel-club-official.png",
  "Kii Health": "./assets/images/portfolio/kii-health-1807eead7afb.svg",
  "Kline Hill": "./assets/images/portfolio/kline-hill-985dabdc86df.webp",
  Legate: "./assets/images/portfolio/legate-a8e97782012d.webp",
  Leo: "./assets/images/portfolio/leo-9fb8a84cfdad.webp",
  "Liquid 2": "./assets/images/portfolio/liquid-2-0f8f36cc8659.svg",
  "New Form": "./assets/images/portfolio/new-form-60ffbdf1ab99.png",
  Night: "./assets/images/portfolio/night-capital.svg",
  Northside: "./assets/images/portfolio/northside-91d482b1f562.png",
  Novacap: "./assets/images/portfolio/novacap-c210c931c056.png",
  Owner: "./assets/images/portfolio/owner-87050216020c.png",
  Paloma: "./assets/images/portfolio/paloma-e9e4f1975983.svg",
  Powerset: "./assets/images/portfolio/powerset-dcfbf7e73f6c.png",
  Renwave: "./assets/images/portfolio/renwave-f4908cdbfb02.webp",
  "Repeat VC": "./assets/images/portfolio/repeat-vc-68b4d1a4523f.svg",
  "Rivet Tax": "./assets/images/portfolio/rivet-tax-1847f9becc39.png",
  Road: "./assets/images/portfolio/road-capital-management-evergreen.png",
  "Selva Ventures": "./assets/images/portfolio/selva-ventures-official.png",
  Shore: "./assets/images/portfolio/shore-c4cb90888828.png",
  Skyryse: "./assets/images/portfolio/skyryse-617057dcca25.png",
  "Ambition Capital": "./assets/images/portfolio/ambition-capital.svg",
  "Sunshine Lake": "./assets/images/portfolio/sunshine-lake-966b382a3916.png",
  "Switch Growth": "./assets/images/portfolio/switch-growth-cbc1aa1f1da7.png",
  "The Lumber Manufactory": "./assets/images/portfolio/the-lumber-manufactory-mark.svg",
  Titus: "./assets/images/portfolio/titus-73742769ac2d.ico",
  Topology: "./assets/images/portfolio/topology-d7c51b33cd0b.png",
  "Tree Care Partners": "./assets/images/portfolio/tree-care-partners-c80e236451e1.png",
  Truelink: "./assets/images/portfolio/truelink-2ee881374e96.png",
  "Underdog Fantasy": "./assets/images/portfolio/underdog-fantasy-a38037cdef83.png",
  Valkyrie: "./assets/images/portfolio/valkyrie-043bbe696d54.png",
  Variant: "./assets/images/portfolio/variant.svg",
  Victor: "./assets/images/portfolio/victor-54d607c98255.png",
  Wayfinder: "./assets/images/portfolio/wayfinder-b17eb6f80908.png",
  "We Grow Brands": "./assets/images/portfolio/we-grow-brands-3005a24372a8.webp",
  Worldbuild: "./assets/images/portfolio/worldbuild-linkedin-logo.png",
  "Yuzu Health": "./assets/images/portfolio/yuzu-health-df863e0679b5.svg",
  Zuper: "./assets/images/portfolio/zuper.svg",
};

const labelMap = {
  "venture-capital": "Venture Capital",
  "private-equity": "Private Equity",
};

const kindMap = {
  fund: "Fund",
  direct: "Direct",
};

const state = {
  kind: "all",
  label: "all",
  fundsExpanded: false,
};

const fundGrid = document.getElementById("fund-grid");
const fundCount = document.getElementById("fund-count");
const fundShowMoreButton = document.getElementById("fund-show-more");
const template = document.getElementById("portfolio-card-template");
const portfolioLogoTickerTrack = document.getElementById("portfolio-logo-ticker-track");
const heroChartRoot = document.querySelector(".moonshot-chart");
const heroChartPath = document.querySelector(".chart-trajectory");
const heroChartRocket = document.querySelector(".chart-rocket");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const FUNDS_PAGE_SIZE = 9;

document.body.classList.add("js-enabled");

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

const HERO_CHART_ANIMATION_START = 0.05;
const HERO_CHART_SCROLL_COMPLETE = 0.44;

function initialsForName(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 4)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("");
}

function isLocalAssetPath(src) {
  return typeof src === "string" && src.length > 0 && !/^(?:https?:)?\/\//i.test(src);
}

function renderMoonshotChart(progress) {
  if (!heroChartRoot || !heroChartPath || !heroChartRocket) {
    return;
  }

  const animatedProgress = HERO_CHART_ANIMATION_START + progress * (1 - HERO_CHART_ANIMATION_START);
  const pathLength = heroChartPath.getTotalLength();
  const distance = pathLength * animatedProgress;
  const rocketPoint = heroChartPath.getPointAtLength(distance);
  const nextPoint = heroChartPath.getPointAtLength(Math.min(pathLength, distance + 2));
  const rocketAngle = Math.atan2(nextPoint.y - rocketPoint.y, nextPoint.x - rocketPoint.x) * (180 / Math.PI);
  const remainingDistance = Math.max(pathLength - distance, 0);

  heroChartRoot.style.setProperty("--chart-draw", animatedProgress.toFixed(4));
  heroChartPath.style.strokeDasharray = `${pathLength.toFixed(2)} ${pathLength.toFixed(2)}`;
  heroChartPath.style.strokeDashoffset = remainingDistance.toFixed(2);
  heroChartRocket.setAttribute(
    "transform",
    `translate(${rocketPoint.x.toFixed(2)} ${rocketPoint.y.toFixed(2)}) rotate(${rocketAngle.toFixed(2)})`
  );
  heroChartRoot.classList.add("is-ready");
}

function logoCandidatesFor(item) {
  const candidates = [];
  const logo = item.logo || localLogoMap[item.name];

  if (isLocalAssetPath(logo)) {
    candidates.push({ src: logo, type: "logo" });
  }

  return candidates;
}

function shuffled(items) {
  const next = items.slice();
  for (let index = next.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [next[index], next[swapIndex]] = [next[swapIndex], next[index]];
  }
  return next;
}

function createPortfolioTickerLogoNode(item) {
  const chip = document.createElement("span");
  chip.className = "portfolio-logo-chip";
  chip.title = item.name;
  chip.setAttribute("aria-label", `${item.name} logo`);
  chip.dataset.kind = item.kind;
  if (item.name.length > 22) {
    chip.classList.add("is-long-name");
  }

  const logoMark = document.createElement("span");
  logoMark.className = "portfolio-logo-mark";

  const img = document.createElement("img");
  img.alt = "";
  img.loading = "eager";
  img.decoding = "async";
  img.referrerPolicy = "no-referrer";

  const fallback = document.createElement("span");
  fallback.className = "portfolio-logo-fallback";
  const symbolText = initialsForName(item.name);
  fallback.textContent = symbolText;
  fallback.hidden = false;

  const symbol = document.createElement("span");
  symbol.className = "portfolio-logo-symbol";
  symbol.textContent = symbolText;

  const name = document.createElement("span");
  name.className = "portfolio-logo-name";
  name.textContent = item.name;

  const meta = document.createElement("span");
  meta.className = "portfolio-logo-meta";
  meta.textContent = item.kind === "direct" ? "DIRECT" : "FUND";

  const text = document.createElement("span");
  text.className = "portfolio-logo-text";
  text.appendChild(symbol);
  text.appendChild(name);

  logoMark.appendChild(img);
  logoMark.appendChild(fallback);
  chip.appendChild(logoMark);
  chip.appendChild(text);
  chip.appendChild(meta);

  const candidates = logoCandidatesFor(item);

  function loadNextCandidate() {
    const next = candidates.shift();
    if (!next) {
      img.hidden = true;
      fallback.hidden = false;
      return;
    }
    fallback.hidden = false;
    img.hidden = false;
    img.classList.toggle("is-favicon", next.type === "favicon");
    img.src = next.src;
  }

  img.addEventListener("load", () => {
    fallback.hidden = true;
    img.hidden = false;
  });

  img.addEventListener("error", () => {
    fallback.hidden = false;
    loadNextCandidate();
  });
  loadNextCandidate();

  return chip;
}

function wirePortfolioLogoTicker() {
  if (!portfolioLogoTickerTrack) {
    return;
  }

  const uniqueByName = new Map();
  investments.forEach((item) => {
    if (!uniqueByName.has(item.name)) {
      uniqueByName.set(item.name, item);
    }
  });

  const randomized = shuffled(Array.from(uniqueByName.values()));
  const picked = randomized.slice(0, Math.min(20, randomized.length));

  if (!picked.length) {
    portfolioLogoTickerTrack.parentElement?.setAttribute("hidden", "true");
    return;
  }

  portfolioLogoTickerTrack.innerHTML = "";
  for (let runIndex = 0; runIndex < 2; runIndex += 1) {
    const run = document.createElement("div");
    run.className = "portfolio-logo-ticker-run";
    if (runIndex > 0) {
      run.setAttribute("aria-hidden", "true");
    }

    picked.forEach((item) => {
      run.appendChild(createPortfolioTickerLogoNode(item));
    });

    portfolioLogoTickerTrack.appendChild(run);
  }
}

function cardNode(item, index) {
  const fragment = template.content.cloneNode(true);
  const root = fragment.querySelector(".portfolio-card");
  const logoLink = fragment.querySelector(".card-logo-link");
  const logo = fragment.querySelector(".card-logo");
  const placeholder = fragment.querySelector(".placeholder-logo");
  const title = fragment.querySelector(".card-title");
  const arrow = fragment.querySelector(".card-arrow");
  const kindTag = fragment.querySelector(".kind-tag");
  const labelTag = fragment.querySelector(".label-tag");

  if (logoLink) {
    logoLink.href = item.url;
    logoLink.setAttribute("aria-label", `${item.name} logo (opens in a new tab)`);
  }

  title.textContent = item.name;
  title.href = item.url;
  title.setAttribute("aria-label", `${item.name} (opens in a new tab)`);
  arrow.href = item.url;
  arrow.setAttribute("aria-label", `Visit ${item.name} (opens in a new tab)`);
  root.classList.toggle("has-wordmark-logo", item.logoMode === "wordmark");

  kindTag.textContent = kindMap[item.kind];
  labelTag.textContent = labelMap[item.label] || item.label;
  placeholder.textContent = initialsForName(item.name);
  logo.alt = "";
  logo.loading = "eager";
  logo.decoding = "async";
  logo.referrerPolicy = "no-referrer";

  const candidates = logoCandidatesFor(item);

  const loadNextCandidate = () => {
    const next = candidates.shift();
    if (!next) {
      logo.hidden = true;
      placeholder.hidden = false;
      return;
    }

    logo.hidden = false;
    placeholder.hidden = false;
    const isFavicon = next.type === "favicon";
    logo.classList.toggle("is-favicon", isFavicon);
    logo.classList.toggle("is-trimmed", !isFavicon && item.logoMode === "trim");
    logo.classList.toggle("is-wordmark", !isFavicon && item.logoMode === "wordmark");
    logo.src = next.src;
  };

  logo.addEventListener("load", () => {
    placeholder.hidden = true;
    logo.hidden = false;
  });

  logo.addEventListener("error", () => {
    logo.hidden = false;
    placeholder.hidden = false;
    loadNextCandidate();
  });

  loadNextCandidate();

  root.dataset.kind = item.kind;
  root.dataset.label = item.label;
  root.style.setProperty("--card-index", String(index));

  return fragment;
}

function render() {
  fundGrid.setAttribute("aria-busy", "true");
  fundGrid.innerHTML = "";

  const filtered = investments.filter((item) => {
    const kindMatches = state.kind === "all" || item.kind === state.kind;
    const labelMatches = state.label === "all" || item.label === state.label;
    return kindMatches && labelMatches;
  });

  const combined = filtered.sort((left, right) => left.name.localeCompare(right.name, undefined, { sensitivity: "base" }));
  const visibleItems = state.fundsExpanded ? combined : combined.slice(0, FUNDS_PAGE_SIZE);

  visibleItems.forEach((item, index) => fundGrid.appendChild(cardNode(item, index)));

  if (!combined.length) {
    fundGrid.innerHTML = '<p class="empty-message">No portfolio entries match this filter.</p>';
  }

  fundCount.textContent = `${combined.length} Item${combined.length === 1 ? "" : "s"}`;

  if (fundShowMoreButton) {
    if (combined.length <= FUNDS_PAGE_SIZE) {
      state.fundsExpanded = false;
      fundShowMoreButton.hidden = true;
      fundShowMoreButton.setAttribute("aria-expanded", "false");
    } else {
      const hiddenCount = Math.max(combined.length - FUNDS_PAGE_SIZE, 0);
      fundShowMoreButton.hidden = false;
      fundShowMoreButton.textContent = state.fundsExpanded ? "Show less" : `Show more (${hiddenCount})`;
      fundShowMoreButton.setAttribute("aria-expanded", state.fundsExpanded ? "true" : "false");
    }
  }

  fundGrid.setAttribute("aria-busy", "false");
}

function wireFilters() {
  const kindButtons = document.querySelectorAll("[data-kind]");
  const labelButtons = document.querySelectorAll("[data-label]");

  function setActiveButton(buttons, activeButton) {
    buttons.forEach((candidate) => {
      const isActive = candidate === activeButton;
      candidate.classList.toggle("is-active", isActive);
      candidate.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  kindButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.kind = button.dataset.kind || "all";
      state.fundsExpanded = false;
      setActiveButton(kindButtons, button);
      render();
    });
  });

  labelButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.label = button.dataset.label || "all";
      state.fundsExpanded = false;
      setActiveButton(labelButtons, button);
      render();
    });
  });

  const activeKindButton = document.querySelector(`[data-kind="${state.kind}"]`);
  const activeLabelButton = document.querySelector(`[data-label="${state.label}"]`);
  setActiveButton(kindButtons, activeKindButton);
  setActiveButton(labelButtons, activeLabelButton);
}

function wireHashNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") {
        return;
      }

      let target;
      try {
        target = document.getElementById(decodeURIComponent(hash.slice(1)));
      } catch {
        return;
      }

      if (!target) {
        return;
      }

      event.preventDefault();
      if (window.location.hash !== hash) {
        window.history.pushState(null, "", hash);
      }
      target.scrollIntoView({
        behavior: prefersReducedMotion.matches ? "auto" : "smooth",
        block: "start",
      });
    });
  });
}

function configurePortfolioLayout() {
  const hasDirectEntries = investments.some((item) => item.kind === "direct");
  const hasVentureEntries = investments.some((item) => item.label === "venture-capital");

  const directKindButton = document.querySelector('[data-kind="direct"]');
  if (directKindButton) {
    directKindButton.hidden = !hasDirectEntries;
  }
  if (!hasVentureEntries) {
    const ventureButton = document.querySelector('[data-label="venture-capital"]');
    if (ventureButton) {
      ventureButton.hidden = true;
    }
  }
}

function wireShowMore() {
  if (!fundShowMoreButton) {
    return;
  }

  fundShowMoreButton.addEventListener("click", () => {
    state.fundsExpanded = !state.fundsExpanded;
    render();
  });
}

function wireScrollMotion() {
  const hero = document.querySelector(".hero");
  let ticking = false;
  let resizeTimer = 0;

  let heroOffsetTop = 0;
  let heroHeight = 1;

  function refreshGeometry() {
    if (hero) {
      heroOffsetTop = hero.offsetTop || 0;
      heroHeight = Math.max(hero.offsetHeight || 0, 1);
    }
  }

  function paintChartForScroll(scrollY) {
    const heroProgress = clamp((scrollY - heroOffsetTop) / Math.max(heroHeight * 0.86, 1), 0, 1.2);
    const chartProgress = prefersReducedMotion.matches ? 1 : clamp(heroProgress / HERO_CHART_SCROLL_COMPLETE, 0, 1);

    if (hero) {
      hero.style.setProperty("--chart-progress", chartProgress.toFixed(4));
    }
    renderMoonshotChart(chartProgress);
  }

  function update() {
    ticking = false;
    paintChartForScroll(window.scrollY || window.pageYOffset || 0);
  }

  function queueUpdate() {
    if (ticking) {
      return;
    }
    ticking = true;
    window.requestAnimationFrame(update);
  }

  function handleViewportChange() {
    refreshGeometry();
    queueUpdate();
  }

  function handleResize() {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(handleViewportChange, 120);
  }

  refreshGeometry();
  queueUpdate();

  if (!prefersReducedMotion.matches) {
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize, { passive: true });
  } else {
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize, { passive: true });
  }
}

function wirePageChrome() {
  const navLinks = Array.from(document.querySelectorAll('.site-nav a[href^="#"]'));
  const navSections = navLinks
    .map((link) => {
      const id = link.getAttribute("href")?.slice(1);
      return id ? { link, section: document.getElementById(id) } : null;
    })
    .filter((item) => item?.section);
  const footerYear = document.getElementById("footer-year");
  let ticking = false;

  if (footerYear) {
    footerYear.textContent = String(new Date().getFullYear());
  }

  function paintPageChrome() {
    ticking = false;
    const scrollTop = window.scrollY || window.pageYOffset || 0;
    const scrollRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = clamp(scrollTop / scrollRange, 0, 1);
    const marker = scrollTop + window.innerHeight * 0.34;
    let activeLink = null;

    navSections.forEach(({ link, section }) => {
      if (section.offsetTop <= marker) {
        activeLink = link;
      }
    });

    document.documentElement.style.setProperty("--page-progress", progress.toFixed(4));
    navLinks.forEach((link) => {
      if (link === activeLink) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }

  function queuePaint() {
    if (ticking) {
      return;
    }
    ticking = true;
    window.requestAnimationFrame(paintPageChrome);
  }

  window.addEventListener("scroll", queuePaint, { passive: true });
  window.addEventListener("resize", queuePaint);
  paintPageChrome();
}

wireFilters();
wireShowMore();
wirePortfolioLogoTicker();
configurePortfolioLayout();
wireHashNavigation();
wireScrollMotion();
wirePageChrome();
render();

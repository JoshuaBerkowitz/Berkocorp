// Portfolio managers and funds.
const investments = [
  {
    name: "Novacap",
    url: "https://novacapcorp.com/",
    kind: "fund",
    label: "private-equity",
    logo: "https://logo.clearbit.com/novacapcorp.com",
  },
  {
    name: "Imperial Capital",
    url: "https://www.imperialcap.com/",
    kind: "fund",
    label: "private-equity",
    logo: "https://logo.clearbit.com/imperialcap.com",
  },
  {
    name: "Ironbridge Equity Partners",
    url: "https://www.ironbridgeequity.com/",
    kind: "fund",
    label: "private-equity",
    logo: "https://logo.clearbit.com/ironbridgeequity.com",
  },
  {
    name: "Altas",
    url: "https://www.altas.com/",
    kind: "fund",
    label: "private-equity",
    logo: "https://logo.clearbit.com/altas.com",
  },
  {
    name: "Atlas Grove",
    url: "https://www.atlasgrove.partners/",
    kind: "fund",
    label: "private-equity",
    logo: "https://logo.clearbit.com/atlasgrove.partners",
  },
  {
    name: "Hale Capital Partners",
    url: "https://halecapital.com/",
    kind: "fund",
    label: "private-equity",
    logo: "./assets/placeholders/hale-capital-mark.svg",
  },
  {
    name: "CPS",
    url: "https://cpscapital.com/",
    kind: "fund",
    label: "private-equity",
    logo: "https://logo.clearbit.com/cpscapital.com",
  },
  {
    name: "Kline Hill",
    url: "https://www.klinehill.com/",
    kind: "fund",
    label: "private-equity",
    logo: "https://logo.clearbit.com/klinehill.com",
  },
  {
    name: "Victor Capital",
    url: "https://www.victorcapitalpartners.com/",
    kind: "fund",
    label: "private-equity",
    logo: "https://logo.clearbit.com/victorcapitalpartners.com",
  },
  {
    name: "Legate LP",
    url: "https://www.legatelp.com/",
    kind: "fund",
    label: "private-equity",
    logo: "https://logo.clearbit.com/legatelp.com",
  },
  {
    name: "Renwave",
    url: "https://www.renwavekore.com/",
    kind: "fund",
    label: "private-equity",
    logo: "https://logo.clearbit.com/renwavekore.com",
  },
  {
    name: "Shore Capital",
    url: "https://www.shorecp.com/",
    kind: "fund",
    label: "private-equity",
    logo: "https://logo.clearbit.com/shorecp.com",
  },
  {
    name: "Birch Hill",
    url: "https://www.birchhillequity.com/",
    kind: "fund",
    label: "private-equity",
    logo: "https://logo.clearbit.com/birchhillequity.com",
  },
  {
    name: "Equality Asset Management",
    url: "https://equalityassetmanagement.com/",
    kind: "fund",
    label: "private-equity",
    logo: "https://logo.clearbit.com/equalityassetmanagement.com",
  },
  {
    name: "Chicago Pacific Founders",
    url: "https://cpfounders.com/",
    kind: "fund",
    label: "private-equity",
    logo: "https://logo.clearbit.com/cpfounders.com",
  },
  {
    name: "Truelink",
    url: "https://truelinkcap.com/",
    kind: "fund",
    label: "private-equity",
    logo: "https://logo.clearbit.com/truelinkcap.com",
  },
  {
    name: "Afore",
    url: "https://afore.vc/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/afore.vc",
  },
  {
    name: "Ballistic",
    url: "https://ballisticventures.com/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/ballisticventures.com",
  },
  {
    name: "Browder Capital",
    url: "https://browdercapital.com/",
    kind: "fund",
    label: "venture-capital",
    logo: "./assets/placeholders/browder-capital-wordmark.svg",
    logoMode: "wordmark",
  },
  {
    name: "Buckley Ventures",
    url: "https://buckleyventures.com/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/buckleyventures.com",
  },
  {
    name: "Caffeinated",
    url: "https://caffeinated.com/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/caffeinated.com",
  },
  {
    name: "Compound",
    url: "https://compound.vc/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/compound.vc",
  },
  {
    name: "Discipulus",
    url: "https://discipulusventures.com/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/discipulusventures.com",
  },
  {
    name: "Framework",
    url: "https://www.framework.ventures/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/framework.ventures",
  },
  {
    name: "Dorm Room Fund",
    url: "https://dormroomfund.com/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/dormroomfund.com",
  },
  {
    name: "Eclipse",
    url: "https://eclipse.capital/",
    kind: "fund",
    label: "venture-capital",
    logo: "./assets/placeholders/eclipse-logo.svg",
    logoMode: "wordmark",
  },
  {
    name: "Foothill",
    url: "https://foothill.ventures/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/foothill.ventures",
  },
  {
    name: "Ford Street",
    url: "https://fordstreetvc.com/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/fordstreetvc.com",
  },
  {
    name: "FPV",
    url: "https://fpvventures.com/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/fpvventures.com",
  },
  {
    name: "Fuse",
    url: "https://fuse.vc/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/fuse.vc",
  },
  {
    name: "Garage Capital",
    url: "https://garage.vc/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/garage.vc",
  },
  {
    name: "GreenOaks",
    url: "https://greenoaks.com/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/greenoaks.com",
  },
  {
    name: "Horizon",
    url: "https://horizon.vc/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/horizon.vc",
  },
  {
    name: "Iron Nation",
    url: "https://ironnation.org/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/ironnation.org",
  },
  {
    name: "Iterative",
    url: "https://iterative.vc/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/iterative.vc",
  },
  {
    name: "Julian Capital",
    url: "https://julian.capital/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/julian.capital",
  },
  {
    name: "KdT",
    url: "https://kdtvc.com/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/kdtvc.com",
  },
  {
    name: "Leo Capital",
    url: "https://leo.capital/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/leo.capital",
  },
  {
    name: "Liquid 2",
    url: "https://liquid2.vc/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/liquid2.vc",
  },
  {
    name: "New Form",
    url: "https://www.newformcap.com/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/newformcap.com",
  },
  {
    name: "Night Capital",
    url: "https://nightcapvc.com/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/nightcapvc.com",
  },
  {
    name: "Northside",
    url: "https://northside.ventures/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/northside.ventures",
  },
  {
    name: "Powerset",
    url: "https://powerset.co/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/powerset.co",
  },
  {
    name: "Repeat VC",
    url: "https://repeat.vc/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/repeat.vc",
  },
  {
    name: "Road Capital",
    url: "https://roadcapitalmgmt.com/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/roadcapitalmgmt.com",
  },
  {
    name: "Space VC",
    url: "https://spacevc.com/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/spacevc.com",
  },
  {
    name: "Sunshine Lake",
    url: "https://sunshinelake.vc/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/sunshinelake.vc",
  },
  {
    name: "Topology",
    url: "https://topology.vc/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/topology.vc",
  },
  {
    name: "Variant",
    url: "https://variant.fund/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/variant.fund",
  },
  {
    name: "Valkyrie",
    url: "https://valkyrie.vc/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/valkyrie.vc",
  },
  {
    name: "Wayfinder",
    url: "https://wayfinder.com/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/wayfinder.com",
  },
  {
    name: "Worldbuild",
    url: "https://worldbuild.vc/",
    kind: "fund",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/worldbuild.vc",
  },
  {
    name: "Abingdon Software Group",
    url: "https://abingdon.software/",
    kind: "direct",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/abingdon.software",
  },
  {
    name: "Antares Nuclear",
    url: "https://antaresindustries.com/",
    kind: "direct",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/antaresindustries.com",
  },
  {
    name: "Atlas RMS",
    url: "https://www.atlasrms.com/",
    kind: "direct",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/atlasrms.com",
  },
  {
    name: "Deel",
    url: "https://www.deel.com/",
    kind: "direct",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/deel.com",
  },
  {
    name: "Owner",
    url: "https://www.owner.com/",
    kind: "direct",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/owner.com",
  },
  {
    name: "Paloma",
    url: "https://www.getpaloma.ai/",
    kind: "direct",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/getpaloma.ai",
  },
  {
    name: "Rivet Tax",
    url: "https://www.rivet.tax/",
    kind: "direct",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/rivet.tax",
  },
  {
    name: "Skyryse",
    url: "https://www.skyryse.com/",
    kind: "direct",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/skyryse.com",
  },
  {
    name: "Switch Growth",
    url: "https://switchgrowth.com/",
    kind: "direct",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/switchgrowth.com",
  },
  {
    name: "Titus",
    url: "https://gotitus.com/",
    kind: "direct",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/gotitus.com",
  },
  {
    name: "Underdog Fantasy",
    url: "https://www.underdogfantasy.com/",
    kind: "direct",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/underdogfantasy.com",
  },
  {
    name: "Zuper",
    url: "https://www.zuper.co/",
    kind: "direct",
    label: "venture-capital",
    logo: "https://logo.clearbit.com/zuper.co",
  },
  {
    name: "AlumierMD",
    url: "https://www.alumiermd.com/",
    kind: "direct",
    label: "private-equity",
    logo: "https://logo.clearbit.com/alumiermd.com",
  },
  {
    name: "GlobalFaces Direct",
    url: "https://globalfacesdirect.com/",
    kind: "direct",
    label: "private-equity",
    logo: "https://logo.clearbit.com/globalfacesdirect.com",
  },
  {
    name: "Kii Health",
    url: "https://www.kiihealth.com/",
    kind: "direct",
    label: "private-equity",
    logo: "https://logo.clearbit.com/kiihealth.com",
  },
  {
    name: "Tree Care Partners",
    url: "https://treecare.partners/",
    kind: "direct",
    label: "private-equity",
    logo: "https://logo.clearbit.com/treecare.partners",
  },
  {
    name: "We Grow Brands",
    url: "https://wegrowbrands.org/",
    kind: "direct",
    label: "private-equity",
    logo: "https://logo.clearbit.com/wegrowbrands.org",
  },
];

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
const heroChartRoot = document.querySelector(".moonshot-chart");
const heroChartPolyline = document.querySelector(".chart-polyline");
const heroChartMoon = document.querySelector(".chart-moon");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileScrollLiteQuery = window.matchMedia("(max-width: 900px), (pointer: coarse)");
const FUNDS_PAGE_SIZE = 10;

document.body.classList.add("js-enabled");

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

const HERO_CHART_START = { x: 12, y: 85 };
const HERO_CHART_KINK = { x: 52, y: 66 };
const HERO_CHART_DEFAULT_END = { x: 94, y: 10 };
const HERO_CHART_ANIMATION_START = 0.2;
const HERO_CHART_BASE_POINTS = buildMoonshotBasePoints();
let cachedMoonAlignedPoints = null;
let cachedMoonPointKey = "";

function buildMoonshotBasePoints() {
  const startX = HERO_CHART_START.x;
  const startY = HERO_CHART_START.y;
  const kinkX = HERO_CHART_KINK.x;
  const kinkY = HERO_CHART_KINK.y;
  const finalEndX = HERO_CHART_DEFAULT_END.x;
  const finalEndY = HERO_CHART_DEFAULT_END.y;
  const points = [];
  const firstSegmentSteps = 22;
  const secondSegmentSteps = 56;

  for (let index = 0; index <= firstSegmentSteps; index += 1) {
    const t = index / firstSegmentSteps;
    const x = startX + (kinkX - startX) * t;
    const trendY = startY + (kinkY - startY) * t;
    const microChop = Math.sin(t * 52 + 0.21) * 0.14 + Math.sin(t * 90 + 0.77) * 0.08;
    const wiggle =
      Math.sin(t * 14 + 0.54) * 0.46 +
      Math.sin(t * 30 + 0.31) * 0.24 +
      Math.sin(t * 64 + 0.14) * 0.12 +
      microChop;
    const earlyPullback = t > 0.27 && t < 0.36 ? Math.sin(((t - 0.27) / 0.09) * Math.PI) * 0.55 : 0;
    const y = trendY + wiggle + earlyPullback;
    points.push({ x, y });
  }

  const trendAnchors = [
    { t: 0, y: kinkY },
    { t: 0.1, y: 64.2 },
    { t: 0.2, y: 61.8 },
    { t: 0.3, y: 58.2 },
    { t: 0.4, y: 54.6 },
    { t: 0.48, y: 49.4 },
    { t: 0.56, y: 42.8 },
    { t: 0.62, y: 46.8 },
    { t: 0.7, y: 38.4 },
    { t: 0.78, y: 31.2 },
    { t: 0.86, y: 23.4 },
    { t: 0.93, y: 16.6 },
    { t: 0.96, y: 24.2 },
    { t: 1, y: finalEndY },
  ];

  function anchoredTrendY(t) {
    for (let index = 1; index < trendAnchors.length; index += 1) {
      const prev = trendAnchors[index - 1];
      const next = trendAnchors[index];
      if (t <= next.t) {
        const localT = (t - prev.t) / Math.max(next.t - prev.t, 0.0001);
        return prev.y + (next.y - prev.y) * localT;
      }
    }
    return trendAnchors[trendAnchors.length - 1].y;
  }

  for (let index = 1; index <= secondSegmentSteps; index += 1) {
    const t = index / secondSegmentSteps;
    const x = kinkX + (finalEndX - kinkX) * t;
    const trendY = anchoredTrendY(t);
    const volatility = 0.68 + t * 0.24;
    const microChop = Math.sin(t * 104 + 0.19) * 0.1 + Math.sin(t * 164 + 1.04) * 0.06;
    const wiggle =
      (Math.sin(t * 18 + 0.34) * 0.52 +
        Math.sin(t * 40 + 1.02) * 0.24 +
        Math.sin(t * 72 + 0.18) * 0.1 +
        microChop) *
      volatility;
    const sharpMidDip = t > 0.16 && t < 0.23 ? Math.sin(((t - 0.16) / 0.07) * Math.PI) * 3.05 : 0;
    const y = trendY + wiggle + sharpMidDip;
    points.push({ x, y });
  }

  return points;
}

function moonAlignedChartPoints(moonPoint) {
  const key = `${moonPoint.x.toFixed(2)}|${moonPoint.y.toFixed(2)}`;
  if (cachedMoonAlignedPoints && cachedMoonPointKey === key) {
    return cachedMoonAlignedPoints;
  }

  cachedMoonPointKey = key;
  cachedMoonAlignedPoints = HERO_CHART_BASE_POINTS.map((point) => ({ x: point.x, y: point.y }));
  if (cachedMoonAlignedPoints.length) {
    cachedMoonAlignedPoints[cachedMoonAlignedPoints.length - 1] = { x: moonPoint.x, y: moonPoint.y };
  }
  return cachedMoonAlignedPoints;
}

function pointAtRatio(pathPoints, ratio) {
  if (!pathPoints.length) {
    return { x: HERO_CHART_KINK.x, y: HERO_CHART_KINK.y };
  }
  if (pathPoints.length === 1) {
    return pathPoints[0];
  }

  const clampedRatio = clamp(ratio, 0, 1);
  const scaledIndex = clampedRatio * (pathPoints.length - 1);
  const lowerIndex = Math.floor(scaledIndex);
  const upperIndex = Math.min(lowerIndex + 1, pathPoints.length - 1);
  const interpolation = scaledIndex - lowerIndex;
  const from = pathPoints[lowerIndex];
  const to = pathPoints[upperIndex];

  return {
    x: from.x + (to.x - from.x) * interpolation,
    y: from.y + (to.y - from.y) * interpolation,
  };
}

function slicePathByRatio(pathPoints, startRatio, endRatio) {
  if (!pathPoints.length) {
    return [{ x: HERO_CHART_KINK.x, y: HERO_CHART_KINK.y }];
  }

  const start = clamp(startRatio, 0, 1);
  const end = clamp(Math.max(endRatio, start), start, 1);
  const startScaled = start * (pathPoints.length - 1);
  const endScaled = end * (pathPoints.length - 1);
  const startPoint = pointAtRatio(pathPoints, start);
  const endPoint = pointAtRatio(pathPoints, end);
  const result = [startPoint];

  const firstInterior = Math.ceil(startScaled);
  const lastInterior = Math.floor(endScaled);

  for (let index = firstInterior; index <= lastInterior; index += 1) {
    const point = pathPoints[index];
    if (!point) {
      continue;
    }
    const previous = result[result.length - 1];
    if (!previous || Math.abs(previous.x - point.x) > 0.001 || Math.abs(previous.y - point.y) > 0.001) {
      result.push(point);
    }
  }

  const previous = result[result.length - 1];
  if (!previous || Math.abs(previous.x - endPoint.x) > 0.001 || Math.abs(previous.y - endPoint.y) > 0.001) {
    result.push(endPoint);
  }

  return result;
}

function moonTargetInChart() {
  if (!heroChartRoot || !heroChartMoon) {
    return { x: 92, y: 11 };
  }

  const chartRect = heroChartRoot.getBoundingClientRect();
  const moonRect = heroChartMoon.getBoundingClientRect();
  if (chartRect.width < 1 || chartRect.height < 1) {
    return { x: 92, y: 11 };
  }

  const x = ((moonRect.left + moonRect.width * 0.5 - chartRect.left) / chartRect.width) * 100;
  const y = ((moonRect.top + moonRect.height * 0.5 - chartRect.top) / chartRect.height) * 100;
  return {
    x: clamp(x, 0, 100),
    y: clamp(y, 0, 100),
  };
}

function renderMoonshotChart(progress, moonPoint = moonTargetInChart()) {
  if (!heroChartRoot || !heroChartPolyline) {
    return;
  }

  const fullPathPoints = moonAlignedChartPoints(moonPoint);
  if (!fullPathPoints.length) {
    return;
  }

  const animatedEndRatio = HERO_CHART_ANIMATION_START + progress * (1 - HERO_CHART_ANIMATION_START);
  const visiblePoints = slicePathByRatio(fullPathPoints, 0, animatedEndRatio);

  heroChartPolyline.setAttribute(
    "points",
    visiblePoints.map((point) => `${point.x.toFixed(2)},${point.y.toFixed(2)}`).join(" ")
  );

  const rocketPoint = pointAtRatio(fullPathPoints, animatedEndRatio);

  const lineToMoonAngle = Math.atan2(moonPoint.y - rocketPoint.y, moonPoint.x - rocketPoint.x) * (180 / Math.PI);
  const emojiFacingOffset = 45;
  const rocketAngle = lineToMoonAngle + emojiFacingOffset;
  heroChartRoot.style.setProperty("--rocket-x", `${rocketPoint.x.toFixed(2)}%`);
  heroChartRoot.style.setProperty("--rocket-y", `${rocketPoint.y.toFixed(2)}%`);
  heroChartRoot.style.setProperty("--rocket-r", `${rocketAngle.toFixed(2)}deg`);
}

function getDomainFromUrl(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "";
  }
}

function logoCandidatesFor(item) {
  const domain = getDomainFromUrl(item.url);
  const candidates = [];

  if (item.logo) {
    candidates.push({ src: item.logo, type: "logo" });
  }

  if (domain) {
    candidates.push({ src: `https://logo.clearbit.com/${domain}`, type: "logo" });
    candidates.push({ src: `https://www.google.com/s2/favicons?domain=${domain}&sz=256`, type: "favicon" });
    candidates.push({ src: `https://icons.duckduckgo.com/ip3/${domain}.ico`, type: "favicon" });
  }

  return candidates;
}

function cardNode(item, index) {
  const fragment = template.content.cloneNode(true);
  const root = fragment.querySelector(".portfolio-card");
  const logo = fragment.querySelector(".card-logo");
  const placeholder = fragment.querySelector(".placeholder-logo");
  const title = fragment.querySelector(".card-title");
  const kindTag = fragment.querySelector(".kind-tag");
  const labelTag = fragment.querySelector(".label-tag");

  title.textContent = item.name;
  title.href = item.url;
  title.setAttribute("aria-label", `${item.name} (opens in a new tab)`);
  root.classList.toggle("has-wordmark-logo", item.logoMode === "wordmark");

  kindTag.textContent = kindMap[item.kind];
  labelTag.textContent = labelMap[item.label] || item.label;
  placeholder.textContent = "";
  logo.alt = `${item.name} logo`;
  logo.loading = "lazy";
  logo.decoding = "async";
  logo.referrerPolicy = "no-referrer";

  const candidates = logoCandidatesFor(item);

  const loadNextCandidate = () => {
    const next = candidates.shift();
    if (!next) {
      logo.hidden = true;
      return;
    }

    logo.hidden = false;
    const isFavicon = next.type === "favicon";
    logo.classList.toggle("is-favicon", isFavicon);
    logo.classList.toggle("is-trimmed", !isFavicon && item.logoMode === "trim");
    logo.classList.toggle("is-wordmark", !isFavicon && item.logoMode === "wordmark");
    logo.src = next.src;
  };

  logo.addEventListener("load", () => {
    placeholder.hidden = true;
  });

  logo.addEventListener("error", () => {
    loadNextCandidate();
  });

  loadNextCandidate();

  root.dataset.kind = item.kind;
  root.dataset.label = item.label;
  root.style.setProperty("--card-index", String(index));

  return fragment;
}

function render() {
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
    } else {
      const hiddenCount = Math.max(combined.length - FUNDS_PAGE_SIZE, 0);
      fundShowMoreButton.hidden = false;
      fundShowMoreButton.textContent = state.fundsExpanded ? "Show less" : `Show more (${hiddenCount})`;
      fundShowMoreButton.setAttribute("aria-expanded", state.fundsExpanded ? "true" : "false");
    }
  }
}

function wireFilters() {
  const kindButtons = document.querySelectorAll("[data-kind]");
  const labelButtons = document.querySelectorAll("[data-label]");

  kindButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.kind = button.dataset.kind || "all";
      state.fundsExpanded = false;
      kindButtons.forEach((candidate) => candidate.classList.remove("is-active"));
      button.classList.add("is-active");
      render();
    });
  });

  labelButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.label = button.dataset.label || "all";
      state.fundsExpanded = false;
      labelButtons.forEach((candidate) => candidate.classList.remove("is-active"));
      button.classList.add("is-active");
      render();
    });
  });
}

function wireReveal() {
  const targets = document.querySelectorAll(".section-observe");
  if (!("IntersectionObserver" in window)) {
    targets.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );

  targets.forEach((node) => observer.observe(node));
}

function applyStaggerForGroups(groupSelector, childSelector, varName = "--reveal-order") {
  document.querySelectorAll(groupSelector).forEach((group) => {
    const items = Array.from(group.children).filter((child) => child.matches(childSelector));
    items.forEach((node, index) => node.style.setProperty(varName, `${index + 1}`));
  });
}

function wireStagger() {
  applyStaggerForGroups(".hero-copy", "*");
  applyStaggerForGroups(".section-grid", "*");
  applyStaggerForGroups(".invest-grid", "article");
  applyStaggerForGroups(".button-group", ".filter-button");
  applyStaggerForGroups(".split-layout", ".portfolio-column");
  applyStaggerForGroups(".footer-inner", "*");
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

function wireBrandMotionSystem() {
  if (prefersReducedMotion.matches || !window.matchMedia("(pointer: fine)").matches) {
    return;
  }

  const root = document.documentElement;
  const glow = document.createElement("div");
  glow.className = "brand-cursor-glow";
  document.body.appendChild(glow);
  document.body.classList.add("brand-motion-system");

  let activeTiltTarget = null;
  let pointerX = window.innerWidth * 0.5;
  let pointerY = window.innerHeight * 0.22;
  let glowRaf = 0;

  const tiltSelector = ".portfolio-card, .invest-grid article, .filter-button, .show-more-button";

  function queueGlowPaint() {
    if (glowRaf) {
      return;
    }

    glowRaf = window.requestAnimationFrame(() => {
      glowRaf = 0;
      glow.style.transform = `translate3d(${(pointerX - 170).toFixed(2)}px, ${(pointerY - 170).toFixed(2)}px, 0)`;
    });
  }

  function updatePointerShift() {
    const viewportWidth = Math.max(window.innerWidth || 0, 1);
    const viewportHeight = Math.max(window.innerHeight || 0, 1);
    const normalizedX = clamp((pointerX / viewportWidth - 0.5) * 2, -1, 1);
    const normalizedY = clamp((pointerY / viewportHeight - 0.5) * 2, -1, 1);

    root.style.setProperty("--pointer-shift-x", `${(normalizedX * 18).toFixed(2)}px`);
    root.style.setProperty("--pointer-shift-y", `${(normalizedY * 14).toFixed(2)}px`);
  }

  function clearTilt(node) {
    if (!node) {
      return;
    }
    node.style.removeProperty("transform");
  }

  function applyTilt(node, event) {
    const rect = node.getBoundingClientRect();
    if (rect.width < 2 || rect.height < 2) {
      return;
    }

    const offsetX = clamp((event.clientX - rect.left) / rect.width - 0.5, -0.5, 0.5);
    const offsetY = clamp((event.clientY - rect.top) / rect.height - 0.5, -0.5, 0.5);
    const rotateX = clamp(-offsetY * 6.2, -6.2, 6.2);
    const rotateY = clamp(offsetX * 7.2, -7.2, 7.2);
    const lift = node.matches(".portfolio-card, .invest-grid article") ? -2.8 : -1.5;

    node.style.transform =
      `perspective(920px) rotateX(${rotateX.toFixed(2)}deg) ` +
      `rotateY(${rotateY.toFixed(2)}deg) translate3d(0, ${lift.toFixed(2)}px, 0)`;
  }

  document.addEventListener(
    "pointermove",
    (event) => {
      if (event.pointerType && event.pointerType !== "mouse" && event.pointerType !== "pen") {
        return;
      }

      pointerX = event.clientX;
      pointerY = event.clientY;
      queueGlowPaint();
      updatePointerShift();

      const nextTiltTarget = event.target instanceof Element ? event.target.closest(tiltSelector) : null;
      if (activeTiltTarget && activeTiltTarget !== nextTiltTarget) {
        clearTilt(activeTiltTarget);
      }
      activeTiltTarget = nextTiltTarget;
      if (activeTiltTarget) {
        applyTilt(activeTiltTarget, event);
      }
    },
    { passive: true }
  );

  window.addEventListener("pointerout", (event) => {
    if (event.relatedTarget) {
      return;
    }
    clearTilt(activeTiltTarget);
    activeTiltTarget = null;
    root.style.setProperty("--pointer-shift-x", "0px");
    root.style.setProperty("--pointer-shift-y", "0px");
  });

  window.addEventListener("blur", () => {
    clearTilt(activeTiltTarget);
    activeTiltTarget = null;
    root.style.setProperty("--pointer-shift-x", "0px");
    root.style.setProperty("--pointer-shift-y", "0px");
  });

  queueGlowPaint();
  updatePointerShift();
}

function wireScrollMotion() {
  if (prefersReducedMotion.matches) {
    return;
  }

  const root = document.documentElement;
  const hero = document.querySelector(".hero");
  const sections = Array.from(document.querySelectorAll("main .section-observe")).filter(
    (section) => !section.classList.contains("hero")
  );

  const motionProfile = {
    mobileLite: mobileScrollLiteQuery.matches,
  };
  let ticking = false;
  let resizeTimer = 0;
  let heroOffsetTop = 0;
  let heroHeight = 1;
  let moonPoint = { x: 92, y: 11 };

  function setMobileScrollLiteClass(enabled) {
    document.body.classList.toggle("mobile-scroll-lite", enabled);
  }

  function resetSectionDepth(section) {
    section.style.setProperty("--section-scroll-y", "0px");
    section.style.setProperty("--section-scroll-opacity", "0.62");
    section.style.setProperty("--section-focus", "0.7");
  }

  function refreshGeometry() {
    if (hero) {
      heroOffsetTop = hero.offsetTop || 0;
      heroHeight = Math.max(hero.offsetHeight || 0, 1);
    }
    moonPoint = moonTargetInChart();
  }

  function update() {
    ticking = false;

    const viewportHeight = window.innerHeight || 1;
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const maxScroll = Math.max(root.scrollHeight - viewportHeight, 1);
    const scrollProgress = clamp(scrollY / maxScroll, 0, 1);
    root.style.setProperty("--scroll-progress", scrollProgress.toFixed(4));

    if (hero) {
      let heroProgress = 0;
      if (motionProfile.mobileLite) {
        heroProgress = clamp((scrollY - heroOffsetTop) / Math.max(heroHeight * 0.86, 1), 0, 1.2);
      } else {
        const rect = hero.getBoundingClientRect();
        heroProgress = clamp((-rect.top || 0) / Math.max(rect.height * 0.86, 1), 0, 1.2);
      }

      const chartProgress = clamp(heroProgress / 0.72, 0, 1);

      if (motionProfile.mobileLite) {
        hero.style.setProperty("--hero-bg-y", "0px");
        hero.style.setProperty("--hero-bg-s", "1");
        hero.style.setProperty("--hero-copy-y", "0px");
        hero.style.setProperty("--hero-copy-o", "1");
        hero.style.setProperty("--hero-logo-y", "0px");
        hero.style.setProperty("--hero-logo-r", "0deg");
        hero.style.setProperty("--hero-logo-s", "1");
      } else {
        const copyOpacity = clamp(1 - heroProgress * 0.33, 0.56, 1);
        hero.style.setProperty("--hero-bg-y", `${(heroProgress * 64).toFixed(2)}px`);
        hero.style.setProperty("--hero-bg-s", `${(1 + heroProgress * 0.09).toFixed(4)}`);
        hero.style.setProperty("--hero-copy-y", `${(heroProgress * -34).toFixed(2)}px`);
        hero.style.setProperty("--hero-copy-o", copyOpacity.toFixed(3));
        hero.style.setProperty("--hero-logo-y", `${(heroProgress * 10).toFixed(2)}px`);
        hero.style.setProperty("--hero-logo-r", `${(heroProgress * 1.3).toFixed(2)}deg`);
        hero.style.setProperty("--hero-logo-s", `${(1 + heroProgress * 0.04).toFixed(4)}`);
      }

      hero.style.setProperty("--chart-progress", chartProgress.toFixed(4));
      renderMoonshotChart(chartProgress, moonPoint);
    }

    if (motionProfile.mobileLite) {
      return;
    }

    const sectionMeasurements = sections.map((section, index) => ({
      section,
      index,
      rect: section.getBoundingClientRect(),
    }));

    sectionMeasurements.forEach(({ section, index, rect }) => {
      if (rect.bottom < -120 || rect.top > viewportHeight + 120) {
        resetSectionDepth(section);
        return;
      }

      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const normalized = clamp(centerOffset / (viewportHeight * 0.9), -1, 1);
      const drift = -normalized * (16 + index * 2.2);
      const focus = 1 - Math.min(Math.abs(normalized), 1);

      section.style.setProperty("--section-scroll-y", `${drift.toFixed(2)}px`);
      section.style.setProperty("--section-scroll-opacity", `${(0.58 + focus * 0.42).toFixed(3)}`);
      section.style.setProperty("--section-focus", `${(0.64 + focus * 0.36).toFixed(3)}`);
    });
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
    if (motionProfile.mobileLite) {
      return;
    }
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(handleViewportChange, 110);
  }

  function handleOrientationChange() {
    window.setTimeout(handleViewportChange, 90);
  }

  function handleMotionProfileChange(event) {
    motionProfile.mobileLite = event.matches;
    setMobileScrollLiteClass(motionProfile.mobileLite);
    if (motionProfile.mobileLite) {
      sections.forEach(resetSectionDepth);
    }
    handleViewportChange();
  }

  setMobileScrollLiteClass(motionProfile.mobileLite);
  if (motionProfile.mobileLite) {
    sections.forEach(resetSectionDepth);
  }
  refreshGeometry();

  window.addEventListener("scroll", queueUpdate, { passive: true });
  window.addEventListener("resize", handleResize);
  window.addEventListener("orientationchange", handleOrientationChange, { passive: true });
  if (typeof mobileScrollLiteQuery.addEventListener === "function") {
    mobileScrollLiteQuery.addEventListener("change", handleMotionProfileChange);
  } else if (typeof mobileScrollLiteQuery.addListener === "function") {
    mobileScrollLiteQuery.addListener(handleMotionProfileChange);
  }
  update();
}

wireFilters();
wireShowMore();
configurePortfolioLayout();
wireStagger();
wireReveal();
wireBrandMotionSystem();
wireScrollMotion();
render();

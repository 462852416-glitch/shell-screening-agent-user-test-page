(function () {
  const OUTCOMES_HF = ['Pass', 'Warning', 'Exclude', 'Unknown'];
  const OUTCOMES_DD = ['Clean', 'Manageable', 'High', 'Critical', 'Unknown'];

  const EVIDENCE = [
    {
      ticker: '00831.HK', name: '利亚零售', board: 'Main Board', listingStatus: 'active', industry: '食物饮品',
      netAssets: 587736802.7683365, avgTurnover60d: 450813.35, low52w: 0.22, high52w: 0.4,
      evidence: [
        ev('EV-00217', 'business_summary', 'Direct consumer retail platform under the Fung Retailing Group. Subsidiaries principally operate Saint Honore bakery stores in Hong Kong/Macau/Mainland China, Mon cher premium patisserie in Hong Kong, and Zoff fast-fashion eyewear stores in Hong Kong.', 'Annual Report 2025', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0413/2026041300569.pdf', 'official', 'verified', 'high'),
        ev('EV-00462', 'controlling_shareholder', 'Fung Retailing Limited / Fung Holdings (1937) Limited control chain; FRL owns 40.11% of the Company shares. Seller willingness remains unverified.', 'Annual Report 2025', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0413/2026041300569.pdf', 'direct', 'verified_from_annual_report_body', 'high'),
        ev('EV-00463', 'public_float_risk', 'FY2025 annual report states sufficient public float of more than 25%; post-transaction float is not inferred.', 'Annual Report 2025', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0413/2026041300569.pdf', 'direct', 'verified_from_annual_report_body', 'high'),
        ev('EV-00464', 'debt_risk', 'Low debt risk in reviewed FY2025 annual report: net cash HK$208m, no bank borrowings, total liabilities HK$531.738m.', 'Annual Report 2025', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0413/2026041300569.pdf', 'direct', 'verified_from_annual_report_body', 'high'),
        ev('EV-00465', 'audit_risk', 'Clean / unqualified audit opinion from PricewaterhouseCoopers for FY2025.', 'Annual Report 2025', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0413/2026041300569.pdf', 'direct', 'verified_from_annual_report_body', 'high'),
        ev('EV-00466', 'transaction_complexity', 'Medium-low to medium: one-off connected tenancy transaction and fully exempt continuing connected transactions with FH 1937 group entities.', 'Annual Report 2025', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0413/2026041300569.pdf', 'direct', 'verified_from_annual_report_body', 'high'),
        ev('EV-00223', 'synergy_business', 'High. Existing bakery / festive-food / retail-channel capability plus eyewear leg support consumer / lifestyle / health adjacency thesis.', 'Annual Report 2025', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0413/2026041300569.pdf', 'official', 'document_derived', 'medium')
      ]
    },
    {
      ticker: '00573.HK', name: '稻香控股', board: 'Main Board', listingStatus: 'active', industry: '旅游及消闲设施',
      netAssets: 981271756.2996563, avgTurnover60d: 74013.11666666667, low52w: 0.243, high52w: 0.465,
      evidence: [
        ev('EV-00245', 'business_summary', 'Direct F&B operating platform. The group is principally involved in restaurant and bakery operations, food catering, production / sale / distribution of food products, and poultry farm operations.', 'Annual Report 2025', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0424/2026042400984.pdf', 'official', 'verified', 'high'),
        ev('EV-00467', 'controlling_shareholder', 'Billion Era / Tin Tao / Sapphire / Zedra Trust chain holds 423,434,689 shares, 41.74%; discretionary objects include Mr. Chung Wai Ping and family members. Sale willingness is not evidenced.', 'Annual Report 2025', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0424/2026042400984.pdf', 'direct', 'verified_from_annual_report_body', 'high'),
        ev('EV-00468', 'public_float_risk', 'FY2025 annual report states at least 25% of issued shares were held by the public as at report date.', 'Annual Report 2025', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0424/2026042400984.pdf', 'direct', 'verified_from_annual_report_body', 'high'),
        ev('EV-00469', 'debt_risk', 'Moderate: FY2025 cash/equivalents HK$202.0m; interest-bearing bank borrowings HK$33.6m; net cash HK$168.4m; total liabilities HK$776.561m.', 'Annual Report 2025', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0424/2026042400984.pdf', 'direct', 'verified_from_annual_report_body', 'high'),
        ev('EV-00470', 'audit_risk', 'Clean / unqualified audit opinion from Ernst & Young for FY2025.', 'Annual Report 2025', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0424/2026042400984.pdf', 'direct', 'verified_from_annual_report_body', 'high'),
        ev('EV-00471', 'transaction_complexity', 'High: connected/continuing connected transactions include related-party legal fee, lease payment and management fee; Dongguan Tian Yao tenancy is a Chapter 14A connected transaction.', 'Annual Report 2025', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0424/2026042400984.pdf', 'direct', 'verified_from_annual_report_body', 'high'),
        ev('EV-00251', 'synergy_business', 'High but less clean than 00831. Strong food-service / bakery / catering adjacency remains attractive, but the platform is operationally heavy and family-linked.', 'Annual Report 2025', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2026/0424/2026042400984.pdf', 'official', 'document_derived', 'medium')
      ]
    },
    {
      ticker: '00518.HK', name: '同得仕（集团）', board: 'Main Board', listingStatus: 'active', industry: '纺织及服饰',
      netAssets: 350367030.7600901, avgTurnover60d: 18740.866666666665, low52w: 0.16, high52w: 0.249,
      evidence: [
        ev('EV-00252', 'business_summary', 'Operating garment platform. Annual report states subsidiaries principally engage in manufacture and sale of garment products and retail of garment products.', '2025 ANNUAL REPORT', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0729/2025072901101.pdf', 'official', 'verified', 'high'),
        ev('EV-00472', 'controlling_shareholder', 'Corona Investments Limited holds 150,059,268 shares, 33.27%; Benson Tung Wah Wing and Madam Wong Fung Lin own Corona equally. Sale willingness is not evidenced.', '2025 ANNUAL REPORT', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0729/2025072901101.pdf', 'direct', 'verified_from_annual_report_body', 'high'),
        ev('EV-00473', 'public_float_risk', 'FY2025 annual report states sufficient public float of not less than 25% throughout the year ended 31 March 2025.', '2025 ANNUAL REPORT', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0729/2025072901101.pdf', 'direct', 'verified_from_annual_report_body', 'high'),
        ev('EV-00474', 'debt_risk', 'Moderate: FY2025 cash HK$240.5m including pledged deposits HK$104.0m; bank borrowings HK$74.1m, all short-term; gearing 19.6%; total liabilities HK$197.301m.', '2025 ANNUAL REPORT', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0729/2025072901101.pdf', 'direct', 'verified_from_annual_report_body', 'high'),
        ev('EV-00475', 'litigation_risk', 'Medium / review required: FY2025 annual report discloses Yellow River litigation in New York; directors state proceeding is not of material importance after legal advice.', '2025 ANNUAL REPORT', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0729/2025072901101.pdf', 'direct', 'verified_from_annual_report_body', 'high'),
        ev('EV-00476', 'audit_risk', 'Clean / unqualified audit opinion from D & PARTNERS for FY2025.', '2025 ANNUAL REPORT', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0729/2025072901101.pdf', 'direct', 'verified_from_annual_report_body', 'high'),
        ev('EV-00477', 'transaction_complexity', 'Medium: main complexity is operating/debt/litigation perimeter rather than large connected-transaction burden in reviewed annual report.', '2025 ANNUAL REPORT', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0729/2025072901101.pdf', 'direct', 'verified_from_annual_report_body', 'high'),
        ev('EV-00258', 'synergy_business', 'Medium-low. Some lifestyle / supply-chain adjacency, but core asset is apparel manufacturing and retail rather than food / beverage / wellness / consumer-channel platform.', '2025 ANNUAL REPORT', 'https://www1.hkexnews.hk/listedco/listconews/sehk/2025/0729/2025072901101.pdf', 'official', 'document_derived', 'medium')
      ]
    },
    {
      ticker: '08136.HK', name: '英马斯集团', board: 'GEM', listingStatus: 'active', industry: '家庭电器及用品',
      netAssets: 98846518.64, avgTurnover60d: 97036.66666666667, low52w: 0, high52w: 0.062,
      evidence: [
        ev('EV-00427', 'board', 'GEM board classification verified from HKEX official List of Securities.', 'HKEX List of Securities', 'https://www.hkex.com.hk/eng/services/trading/securities/securitieslists/ListOfSecurities.xlsx', 'official', 'verified', 'high'),
        ev('EV-00428', 'listing_status', 'Listing status active verified from HKEX official List of Securities.', 'HKEX List of Securities', 'https://www.hkex.com.hk/eng/services/trading/securities/securitieslists/ListOfSecurities.xlsx', 'official', 'verified', 'high'),
        ev('EV-00430', 'industry', 'Industry classified as household appliances and supplies by Eastmoney company profile via AKShare; unverified against issuer PDF.', 'Eastmoney HK company profile via AKShare', 'https://emweb.securities.eastmoney.com/PC_HKF10/pages/home/index.html', 'secondary_public_structured', 'structured_source_unverified_against_issuer_pdf', 'medium'),
        ev('EV-00431', 'latest_net_assets_hkd', 'Latest net assets HK$98.846m from Eastmoney financial indicator via AKShare; unverified against issuer PDF.', 'Eastmoney HK financial indicator via AKShare', 'https://emweb.securities.eastmoney.com/PC_HKF10/pages/home/index.html', 'secondary_public_structured', 'structured_source_unverified_against_issuer_pdf', 'medium'),
        ev('EV-00459', 'avg_turnover_60d_hkd', '60-day average turnover HK$97,036.67 from Eastmoney historical kline public API; unverified against issuer PDF.', 'Eastmoney HK historical kline', 'http://33.push2his.eastmoney.com/api/qt/stock/kline/get', 'secondary_public_structured', 'structured_source_unverified_against_issuer_pdf', 'medium'),
        ev('EV-00460', 'fifty_two_week_low_hkd', '52-week low is 0.0 in Eastmoney historical kline public API, requiring human review before external reliance.', 'Eastmoney HK historical kline', 'http://33.push2his.eastmoney.com/api/qt/stock/kline/get', 'secondary_public_structured', 'structured_source_unverified_against_issuer_pdf', 'medium'),
        ev('EV-00461', 'fifty_two_week_high_hkd', '52-week high HK$0.062 from Eastmoney historical kline public API; unverified against issuer PDF.', 'Eastmoney HK historical kline', 'http://33.push2his.eastmoney.com/api/qt/stock/kline/get', 'secondary_public_structured', 'structured_source_unverified_against_issuer_pdf', 'medium')
      ]
    }
  ];

  const HF_RULES = [
    { id: 'HF-1', name: 'Listing Status / Board', signal: 'listing status, board, verified public float when available', evidence: ['listing_status', 'board', 'public_float_risk'], source: 'official', test: (c, s) => c.listingStatus !== 'active' ? raw('Exclude', .92) : c.board === 'GEM' && s.gemMode === 'exclude' ? raw('Exclude', .82) : c.board === 'GEM' ? raw('Warning', s.gemMode === 'strictWarning' ? .78 : .62) : raw('Pass', .82) },
    { id: 'HF-2', name: 'Valuation / Shell Value', signal: 'net assets, turnover, 52-week range; market cap and P/B remain Unknown', evidence: ['latest_net_assets_hkd', 'avg_turnover_60d_hkd', 'fifty_two_week_low_hkd', 'fifty_two_week_high_hkd'], source: 'structured', test: (c) => c.high52w <= 0 || !c.netAssets ? raw('Unknown', .72) : c.netAssets < 160000000 && c.avgTurnover60d < 150000 ? raw('Warning', .70) : c.avgTurnover60d < 120000 ? raw('Warning', .58) : raw('Pass', .52) },
    { id: 'HF-3', name: 'Control Path', signal: 'substantial-shareholder chain and seller willingness', evidence: ['controlling_shareholder'], source: 'shareholder', test: (c) => has(c, 'controlling_shareholder') && /Sale willingness is not evidenced|seller willingness remains unverified/i.test(text(c, 'controlling_shareholder')) ? raw('Warning', .72) : has(c, 'controlling_shareholder') ? raw('Pass', .64) : raw('Unknown', .80) },
    { id: 'HF-4', name: 'Financing Structure', signal: 'borrowings, pledged deposits, financing burden', evidence: ['debt_risk'], source: 'financing', test: (c) => /pledged|bank borrowings|total liabilities|Moderate/i.test(text(c, 'debt_risk')) ? raw('Warning', .60) : /net cash|no bank borrowings|Low debt/i.test(text(c, 'debt_risk')) ? raw('Pass', .76) : raw('Unknown', .75) },
    { id: 'HF-5', name: 'Disclosure & Audit', signal: 'audit opinion and disclosure status', evidence: ['audit_risk'], source: 'audit', test: (c) => /Clean|unqualified/i.test(text(c, 'audit_risk')) ? raw('Pass', .86) : has(c, 'audit_risk') ? raw('Warning', .62) : raw('Unknown', .80) },
    { id: 'HF-6', name: 'Legal & Regulatory Risk', signal: 'litigation, regulatory, public-float and unresolved legal risk', evidence: ['regulatory_risk', 'litigation_risk', 'public_float_risk'], source: 'court', test: (c) => /review required|litigation/i.test(text(c, 'litigation_risk')) ? raw('Warning', .68) : /No major litigation|No major litigation \/ regulatory/i.test(text(c, 'regulatory_risk')) ? raw('Pass', .72) : has(c, 'public_float_risk') ? raw('Pass', .52) : raw('Unknown', .82) },
    { id: 'HF-7', name: 'Platform Fit', signal: 'consumer adjacency, operating platform, repairability', evidence: ['business_summary', 'synergy_business'], source: 'ir', test: (c) => /High\.|consumer|food|bakery|retail-channel|F&B/i.test(text(c, 'synergy_business') + text(c, 'business_summary')) ? raw('Pass', .74) : /Medium-low|apparel|household/i.test(text(c, 'synergy_business') + c.industry) ? raw('Warning', .68) : raw('Unknown', .72) }
  ];

  const DD_RULES = [
    { id: 'DD-1', name: 'Control & Ownership', signal: 'controller identity, block size, family/trust chain, sale willingness', evidence: ['controlling_shareholder'], source: 'shareholder', test: (c) => !has(c, 'controlling_shareholder') ? rawDd('Unknown', .82) : /Sale willingness is not evidenced|seller willingness remains unverified/i.test(text(c, 'controlling_shareholder')) ? rawDd('Manageable', .62, 'Unknown', .16) : rawDd('Clean', .66) },
    { id: 'DD-2', name: 'Debt & Litigation', signal: 'bank borrowings, pledged deposits, litigation and liabilities', evidence: ['debt_risk', 'litigation_risk'], source: 'court', test: (c) => /litigation|pledged|bank borrowings|Moderate/i.test(text(c, 'debt_risk') + text(c, 'litigation_risk')) ? rawDd('High', .58, 'Manageable', .22) : /Low debt|no bank borrowings|net cash/i.test(text(c, 'debt_risk')) ? rawDd('Clean', .72, 'Manageable', .12) : rawDd('Unknown', .78) },
    { id: 'DD-3', name: 'Compliance & Audit', signal: 'audit opinion, listing status, public float', evidence: ['audit_risk', 'listing_status', 'public_float_risk'], source: 'audit', test: (c) => /Clean|unqualified/i.test(text(c, 'audit_risk')) && c.listingStatus === 'active' ? rawDd('Clean', .82) : c.listingStatus === 'active' ? rawDd('Manageable', .48, 'Unknown', .22) : rawDd('Critical', .84) },
    { id: 'DD-4', name: 'Maintenance Cost', signal: 'net assets, low-liquidity carrying burden; annual cost is not directly verified', evidence: ['latest_net_assets_hkd', 'avg_turnover_60d_hkd'], source: 'structured', test: (c) => c.avgTurnover60d < 100000 && c.netAssets < 400000000 ? rawDd('High', .54, 'Unknown', .24) : c.avgTurnover60d < 150000 ? rawDd('Manageable', .52, 'Unknown', .18) : rawDd('Manageable', .56, 'Clean', .18) },
    { id: 'DD-5', name: 'Business Substance & Repairability', signal: 'operating business, consumer adjacency, repairability', evidence: ['business_summary', 'synergy_business', 'industry'], source: 'ir', test: (c) => /High\.|consumer|F&B|bakery|food|retail-channel/i.test(text(c, 'synergy_business') + text(c, 'business_summary')) ? rawDd('Manageable', .62, 'Clean', .20) : /Medium-low|apparel|household/i.test(text(c, 'synergy_business') + c.industry) ? rawDd('High', .54, 'Manageable', .18) : rawDd('Unknown', .72) }
  ];

  function ev(id, field, value, title, url, support, status, confidence) {
    return { id, field, value, title, url, support, status, confidence };
  }

  function esc(value) {
    return String(value ?? '').replace(/[&<>\"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  }

  function fmtMoney(n) {
    if (!Number.isFinite(n)) return 'Unknown';
    if (n >= 1000000000) return `HK$${(n / 1000000000).toFixed(2)}bn`;
    if (n >= 1000000) return `HK$${(n / 1000000).toFixed(1)}m`;
    return `HK$${Math.round(n).toLocaleString()}`;
  }

  function has(c, field) { return c.evidence.some(e => e.field === field); }
  function text(c, field) { return c.evidence.filter(e => e.field === field).map(e => e.value).join(' '); }
  function evidenceFor(c, fields) { return c.evidence.filter(e => fields.includes(e.field)); }

  function raw(label, support, altLabel, altSupport) {
    const out = { Pass: 0, Warning: 0, Exclude: 0, Unknown: 0 };
    out[label] += support;
    if (altLabel) out[altLabel] += altSupport;
    out.Unknown += Math.max(0, 1 - Object.values(out).reduce((a, b) => a + b, 0));
    return out;
  }

  function rawDd(label, support, altLabel, altSupport) {
    const out = { Clean: 0, Manageable: 0, High: 0, Critical: 0, Unknown: 0 };
    out[label] += support;
    if (altLabel) out[altLabel] += altSupport;
    out.Unknown += Math.max(0, 1 - Object.values(out).reduce((a, b) => a + b, 0));
    return out;
  }

  function settings() {
    const val = id => document.getElementById(id).value;
    const num = id => Number(document.getElementById(id).value);
    return {
      gemMode: val('gemMode'), warningThreshold: num('warningThreshold') / 100,
      relOfficial: num('relOfficial'), relAudit: num('relAudit'), relCourt: num('relCourt'), relShareholder: num('relShareholder'),
      relFinancing: num('relFinancing'), relStructured: num('relStructured'), relIR: num('relIR'), relMedia: num('relMedia')
    };
  }

  function reliabilityFor(source, s) {
    const map = { official: s.relOfficial, audit: s.relAudit, court: s.relCourt, shareholder: s.relShareholder, financing: s.relFinancing, structured: s.relStructured, ir: (s.relIR + s.relMedia) / 2 };
    return Math.max(0, Math.min(1, map[source] ?? .7));
  }

  function discount(dist, reliability, labels) {
    const out = {};
    labels.forEach(label => { out[label] = (dist[label] || 0) * reliability; });
    const known = labels.filter(x => x !== 'Unknown').reduce((sum, label) => sum + out[label], 0);
    out.Unknown = 1 - known;
    return out;
  }

  function combine(a, b, labels) {
    const out = Object.fromEntries(labels.map(label => [label, 0]));
    let conflict = 0;
    labels.forEach(x => {
      labels.forEach(y => {
        const product = (a[x] || 0) * (b[y] || 0);
        if (!product) return;
        if (x === 'Unknown' && y === 'Unknown') out.Unknown += product;
        else if (x === 'Unknown') out[y] += product;
        else if (y === 'Unknown') out[x] += product;
        else if (x === y) out[x] += product;
        else conflict += product;
      });
    });
    const norm = 1 - conflict;
    if (norm <= 0) return Object.fromEntries(labels.map(label => [label, label === 'Unknown' ? 1 : 0]));
    labels.forEach(label => { out[label] /= norm; });
    return out;
  }

  function aggregate(items, labels) {
    return items.reduce((acc, item) => combine(acc, item.discounted, labels), Object.fromEntries(labels.map(label => [label, label === 'Unknown' ? 1 : 0])));
  }

  function pct(v) { return Math.round((v || 0) * 100); }
  function dominant(dist, labels) { return labels.slice().sort((a, b) => (dist[b] || 0) - (dist[a] || 0))[0]; }
  function band(label) { return /Exclude|Critical|Reject/.test(label) ? 'decision-exclude' : /Warning|Needs DD|Manageable|High|Hold|Conditions/.test(label) ? 'decision-warning' : /Unknown|Insufficient/.test(label) ? 'decision-unknown' : 'decision-pass'; }

  function evaluateCompany(c, s) {
    const hfRules = HF_RULES.map(rule => evaluateRule(rule, c, s, OUTCOMES_HF));
    const hfAgg = aggregate(hfRules, OUTCOMES_HF);
    const hfDecision = hfAgg.Exclude >= .42 ? 'Exclude' : hfAgg.Unknown >= .46 ? 'Insufficient Evidence' : hfAgg.Warning >= s.warningThreshold ? 'Needs DD' : 'Pass';
    const ddRules = DD_RULES.map(rule => evaluateRule(rule, c, s, OUTCOMES_DD));
    const ddAgg = aggregate(ddRules, OUTCOMES_DD);
    const ddDecision = ddAgg.Critical >= .36 ? 'Reject' : ddAgg.Unknown >= .45 ? 'Insufficient Evidence' : ddAgg.High >= .38 ? 'Hold' : ddAgg.Manageable >= .34 || ddAgg.High >= .22 ? 'Proceed with Conditions' : 'Proceed';
    return { c, hfRules, hfAgg, hfDecision, ddRules, ddAgg, ddDecision };
  }

  function evaluateRule(rule, c, s, labels) {
    const rel = reliabilityFor(rule.source, s);
    const rawDist = rule.test(c, s);
    const discounted = discount(rawDist, rel, labels);
    return { rule, reliability: rel, raw: rawDist, discounted, evidences: evidenceFor(c, rule.evidence), result: dominant(discounted, labels) };
  }

  function beliefBar(dist, labels) {
    const cls = { Pass: 'b-pass', Warning: 'b-warn', Exclude: 'b-exclude', Unknown: 'b-unk', Clean: 'b-clean', Manageable: 'b-manageable', High: 'b-high', Critical: 'b-critical' };
    return `<div class="belief-bar">${labels.map(label => `<div class="${cls[label] || 'b-unknown'}" style="width:${pct(dist[label])}%"></div>`).join('')}</div><div class="${labels.length === 5 ? 'dd-belief-meta' : 'belief-meta'}">${labels.map(label => `<span>${esc(label)} ${pct(dist[label])}%</span>`).join('')}</div>`;
  }

  function evidenceTrace(ruleResult) {
    const evidence = ruleResult.evidences.length ? ruleResult.evidences : [{ id: 'Unknown', field: 'missing', value: 'No verified public evidence in current local evidence snapshot.', title: 'Local evidence snapshot', url: '', support: 'none', status: 'unknown', confidence: 'none' }];
    return `<div class="chip-list">${evidence.map(e => `<div class="chip"><strong>${esc(e.id)} · ${esc(e.field)}</strong><br>${esc(e.value)}<br><span style="color:var(--muted)">${esc(e.title)} · ${esc(e.support)} · ${esc(e.status)} · confidence ${esc(e.confidence)}</span>${e.url ? `<br><a href="${esc(e.url)}" target="_blank" rel="noreferrer">source</a>` : ''}</div>`).join('')}</div>`;
  }

  function strongest(items, labels, predicate) {
    return items.slice().sort((a, b) => predicate(b.discounted, labels) - predicate(a.discounted, labels))[0];
  }

  function render() {
    const s = settings();
    document.getElementById('warningThresholdValue').textContent = `${Math.round(s.warningThreshold * 100)}%`;
    const results = EVIDENCE.map(c => evaluateCompany(c, s));
    const enterDd = results.filter(r => r.hfDecision === 'Pass' || r.hfDecision === 'Needs DD');

    renderUniverse(results);
    renderHf(results, enterDd);
    renderDd(enterDd);
  }

  function renderUniverse(results) {
    document.getElementById('universeGrid').innerHTML = `<table class="belief-table"><thead><tr><th>Company</th><th>Verified public evidence</th><th>Structured fields</th><th>Unavailable fields</th></tr></thead><tbody>${results.map(r => `<tr><td><strong>${esc(r.c.ticker)} · ${esc(r.c.name)}</strong><br>${esc(r.c.board)} · ${esc(r.c.listingStatus)} · ${esc(r.c.industry)}</td><td>${r.c.evidence.length} local evidence rows from HKEX / annual reports / announcements / structured public sources.</td><td>Net assets ${fmtMoney(r.c.netAssets)}<br>60d turnover ${fmtMoney(r.c.avgTurnover60d)}<br>52w range ${esc(r.c.low52w)} - ${esc(r.c.high52w)}</td><td>market_cap_hkd: Unknown<br>price_to_book: Unknown<br><span style="color:var(--muted)">Not present in current evidence snapshot; not inferred.</span></td></tr>`).join('')}</tbody></table>`;
  }

  function renderHf(results, enterDd) {
    const pass = results.filter(r => r.hfDecision === 'Pass');
    const needs = results.filter(r => r.hfDecision === 'Needs DD');
    const blocked = results.filter(r => r.hfDecision === 'Exclude' || r.hfDecision === 'Insufficient Evidence');
    document.getElementById('hfFunnel').innerHTML = `<div class="table-card"><div class="label">HF gate summary</div><div class="summary-grid" style="grid-template-columns:repeat(4,minmax(0,1fr))"><div class="summary-card"><div class="kicker">Candidates</div><div class="number-value">${results.length}</div></div><div class="summary-card"><div class="kicker">Enter DD</div><div class="number-value">${enterDd.length}</div></div><div class="summary-card"><div class="kicker">Direct pass</div><div class="number-value">${pass.length}</div></div><div class="summary-card"><div class="kicker">Blocked / unknown</div><div class="number-value">${blocked.length}</div></div></div></div><div class="table-card"><div class="label">BRB / ER method</div><div class="headline-title">Evidence → Signal → Activated BRB Rules → Reliability → ER Result → Decision</div><div class="headline-copy">Each rule starts from public evidence rows. Source reliability discounts supported belief directly; unsupported mass is assigned to Unknown. Rule-level beliefs are combined through ER aggregation, with hard vetoes limited to explicit Exclude / Critical outcomes.</div></div>`;

    document.getElementById('hfOverviewGrid').innerHTML = results.map(r => `<div class="overview-card"><div class="result-code">${esc(r.c.ticker)} · ${esc(r.c.board)}</div><div class="result-name">${esc(r.c.name)}</div><span class="decision-pill ${band(r.hfDecision)}">${esc(r.hfDecision)}</span><div class="overview-copy">ER aggregate:<br>Pass ${pct(r.hfAgg.Pass)}% · Warning ${pct(r.hfAgg.Warning)}% · Exclude ${pct(r.hfAgg.Exclude)}% · Unknown ${pct(r.hfAgg.Unknown)}%</div></div>`).join('');

    document.getElementById('hfBeliefTables').innerHTML = results.map(r => ruleTable(r, r.hfRules, OUTCOMES_HF, 'HF')).join('');
    document.getElementById('hfSummaryTableBody').innerHTML = results.map(r => {
      const warn = strongest(r.hfRules, OUTCOMES_HF, d => d.Warning || 0);
      const excl = strongest(r.hfRules, OUTCOMES_HF, d => d.Exclude || 0);
      const unk = strongest(r.hfRules, OUTCOMES_HF, d => d.Unknown || 0);
      return `<tr><td>${esc(r.c.ticker)} · ${esc(r.c.name)}</td><td><span class="decision-pill ${band(r.hfDecision)}">${esc(r.hfDecision)}</span></td><td>${esc(warn.rule.name)} (${pct(warn.discounted.Warning)}%)</td><td>${esc(excl.rule.name)} (${pct(excl.discounted.Exclude)}%)</td><td>${esc(unk.rule.name)} (${pct(unk.discounted.Unknown)}%)</td></tr>`;
    }).join('');
    document.getElementById('hfQuestionCards').innerHTML = enterDd.map(r => `<div class="chip"><strong>${esc(r.c.ticker)} · ${esc(r.c.name)}</strong><br>Confirm control-transfer willingness.<br>Quantify unresolved debt / litigation perimeter.<br>Verify post-transaction public float.<br>Review connected transactions and consent constraints.<br>Confirm business-substance transferability.</div>`).join('') || '<div class="chip">No companies entered DD under current settings.</div>';
  }

  function ruleTable(r, rules, labels, phase) {
    return `<div class="table-card"><div class="label">${phase} rule-level evidence trace</div><div class="section-sub" style="margin-bottom:12px">${esc(r.c.ticker)} · ${esc(r.c.name)}. Rule output uses reliability-discounted belief distributions and ER aggregation, not preset company scores.</div><table class="belief-table"><thead><tr><th>BRB rule</th><th>Signal</th><th>Reliability</th><th>ER belief</th><th>Result</th><th>Evidence trace</th></tr></thead><tbody>${rules.map(rr => `<tr><td><strong>${esc(rr.rule.id)}</strong><br>${esc(rr.rule.name)}</td><td>${esc(rr.rule.signal)}</td><td>${Math.round(rr.reliability * 100)}%<br><span style="color:var(--muted)">${esc(rr.rule.source)}</span></td><td>${beliefBar(rr.discounted, labels)}</td><td><span class="decision-pill ${band(rr.result)}">${esc(rr.result)}</span></td><td>${evidenceTrace(rr)}</td></tr>`).join('')}</tbody></table></div>`;
  }

  function renderDd(enterDd) {
    document.getElementById('ddMethodBox').innerHTML = `<div class="label">DD method</div><div class="headline-title">HF-passed names receive DD module BRB rules</div><div class="headline-copy">DD evaluates Control & Ownership, Debt & Litigation, Compliance & Audit, Maintenance Cost, and Business Substance & Repairability. Unknown remains explicit when current evidence is absent or only secondary structured data exists.</div>`;
    document.getElementById('ddOverviewGrid').innerHTML = enterDd.map(r => `<div class="overview-card"><div class="result-code">${esc(r.c.ticker)} · ${esc(r.c.board)}</div><div class="result-name">${esc(r.c.name)}</div><span class="decision-pill ${band(r.ddDecision)}">${esc(r.ddDecision)}</span><div class="overview-copy">Clean ${pct(r.ddAgg.Clean)}% · Manageable ${pct(r.ddAgg.Manageable)}% · High ${pct(r.ddAgg.High)}% · Critical ${pct(r.ddAgg.Critical)}% · Unknown ${pct(r.ddAgg.Unknown)}%</div></div>`).join('') || '<div class="overall-box">No DD dossiers because no company entered DD.</div>';
    document.getElementById('ddDossiers').innerHTML = enterDd.map(r => `<section class="card"><div class="dd-header"><div><div class="label">DD dossier</div><div class="dd-company-name">${esc(r.c.ticker)} · ${esc(r.c.name)}</div><div class="section-sub">Inherited HF decision: ${esc(r.hfDecision)}. Market cap and P/B are Unknown in current evidence snapshot and are not used as verified inputs.</div></div><span class="decision-pill ${band(r.ddDecision)}">${esc(r.ddDecision)}</span></div><div class="memo-strip"><div class="headline-box"><div class="label">DD top-line readout</div><div class="headline-title">${esc(r.ddDecision)}</div><div class="headline-copy">${ddNarrative(r)}</div></div><div class="number-strip"><div class="number-card"><div class="kicker">Net assets</div><div class="number-value">${fmtMoney(r.c.netAssets)}</div></div><div class="number-card"><div class="kicker">60d turnover</div><div class="number-value">${fmtMoney(r.c.avgTurnover60d)}</div></div><div class="number-card"><div class="kicker">Market cap</div><div class="number-value">Unknown</div></div><div class="number-card"><div class="kicker">P/B</div><div class="number-value">Unknown</div></div></div></div>${ruleTable(r, r.ddRules, OUTCOMES_DD, 'DD')}</section>`).join('');
  }

  function ddNarrative(r) {
    if (r.ddDecision === 'Proceed') return 'Evidence is strong enough and no DD module produces a dominant high or critical belief.';
    if (r.ddDecision === 'Proceed with Conditions') return 'Evidence supports continuing, but transaction terms should address control willingness, cleanup cost, connected-party consent and business-transferability gaps.';
    if (r.ddDecision === 'Hold') return 'High-risk belief is dominant enough that the file needs additional evidence or remediation before commercial thesis work.';
    if (r.ddDecision === 'Reject') return 'Critical belief is high enough to treat the platform as not tradable under the current mandate.';
    return 'Unknown belief remains too high relative to verified evidence.';
  }

  function reset() {
    document.getElementById('caseInput').value = '吨吨健康科技集团拟在港股市场筛选适合资产注入、业务整合、控股权交易或上市公司重组的上市平台。目标不是直接做最终排序，而是先识别哪些公司能够进入 Deep Due Diligence，并在 DD 层进一步判断：1. 是否干净到足以交易；2. 风险是否可量化、可清理、可谈判；3. 业务是否真实存续；4. 困境是否可逆；5. 是否值得进入 Commercial Thesis 与 Transaction Structure 阶段。';
    ['relOfficial','relAudit','relCourt','relShareholder','relFinancing','relStructured','relIR','relMedia'].forEach((id, idx) => { document.getElementById(id).value = ['1.0','0.9','0.9','0.9','0.9','0.8','0.7','0.6'][idx]; });
    document.getElementById('gemMode').value = 'warning';
    document.getElementById('warningThreshold').value = '40';
    render();
  }

  document.getElementById('runBtn').addEventListener('click', render);
  document.getElementById('resetBtn').addEventListener('click', reset);
  ['gemMode','warningThreshold','relOfficial','relAudit','relCourt','relShareholder','relFinancing','relStructured','relIR','relMedia'].forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener(el.type === 'range' ? 'input' : 'change', render);
  });
  render();
})();

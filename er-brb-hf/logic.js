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


  const HF_MODULES = [
    {
      id: 'HF-1', name: 'Listing Status / Board', source: 'official',
      signal: 'listing continuity, board classification and public-float support',
      evidence: ['listing_status', 'board', 'public_float_risk'],
      antecedents: [
        ant('Listing Continuity', ['Active','Impaired','Unknown'], (c) => c.listingStatus === 'active' ? deg({Active:.96, Unknown:.04}) : deg({Impaired:.9, Unknown:.1})),
        ant('Board Risk', ['Main Board','GEM','Unknown'], (c, s) => c.board === 'Main Board' ? deg({'Main Board':.94, Unknown:.06}) : c.board === 'GEM' ? deg({GEM: s.gemMode === 'pass' ? .45 : .86, Unknown: s.gemMode === 'pass' ? .55 : .14}) : deg({Unknown:1})),
        ant('Public Float Support', ['Confirmed','Unresolved','Unknown'], (c) => has(c, 'public_float_risk') ? deg({Confirmed:.78, Unresolved:.12, Unknown:.10}) : deg({Unknown:1}))
      ],
      rules: [
        brb('HF-1-R1', 'IF listing is impaired THEN exclude', {'Listing Continuity':'Impaired'}, {Pass:.02, Warning:.08, Exclude:.84, Unknown:.06}),
        brb('HF-1-R2', 'IF active + Main Board + float confirmed THEN pass', {'Listing Continuity':'Active','Board Risk':'Main Board','Public Float Support':'Confirmed'}, {Pass:.82, Warning:.12, Exclude:.02, Unknown:.04}),
        brb('HF-1-R3', 'IF active + GEM THEN warning / DD', {'Listing Continuity':'Active','Board Risk':'GEM'}, {Pass:.18, Warning:.62, Exclude:.12, Unknown:.08}),
        brb('HF-1-R4', 'IF float unresolved THEN warning / unknown', {'Listing Continuity':'Active','Public Float Support':'Unresolved'}, {Pass:.28, Warning:.44, Exclude:.08, Unknown:.20}),
        brb('HF-1-R5', 'IF listing or board is unknown THEN insufficient evidence', {'Listing Continuity':'Unknown'}, {Pass:.05, Warning:.12, Exclude:.03, Unknown:.80})
      ]
    },
    {
      id: 'HF-2', name: 'Valuation / Shell Value', source: 'structured',
      signal: 'net assets, trading liquidity and explicit absence of market-cap / P/B evidence',
      evidence: ['latest_net_assets_hkd', 'avg_turnover_60d_hkd', 'fifty_two_week_low_hkd', 'fifty_two_week_high_hkd'],
      antecedents: [
        ant('Asset Base', ['Small','Medium','Large','Unknown'], (c) => !c.netAssets ? deg({Unknown:1}) : c.netAssets < 160e6 ? deg({Small:.78, Medium:.16, Unknown:.06}) : c.netAssets < 650e6 ? deg({Medium:.70, Small:.12, Large:.10, Unknown:.08}) : deg({Large:.72, Medium:.20, Unknown:.08})),
        ant('Liquidity', ['Adequate','Thin','Very Thin','Unknown'], (c) => !Number.isFinite(c.avgTurnover60d) ? deg({Unknown:1}) : c.avgTurnover60d < 30000 ? deg({'Very Thin':.78, Thin:.16, Unknown:.06}) : c.avgTurnover60d < 150000 ? deg({Thin:.68, 'Very Thin':.12, Adequate:.10, Unknown:.10}) : deg({Adequate:.74, Thin:.18, Unknown:.08})),
        ant('Valuation Completeness', ['Observed','Missing','Unknown'], () => deg({Missing:.92, Unknown:.08}))
      ],
      rules: [
        brb('HF-2-R1', 'IF valuation evidence is missing THEN unknown dominates', {'Valuation Completeness':'Missing'}, {Pass:.14, Warning:.30, Exclude:.03, Unknown:.53}),
        brb('HF-2-R2', 'IF small asset base + very thin liquidity THEN warning', {'Asset Base':'Small','Liquidity':'Very Thin'}, {Pass:.12, Warning:.68, Exclude:.10, Unknown:.10}),
        brb('HF-2-R3', 'IF medium asset base + thin liquidity THEN warning / needs DD', {'Asset Base':'Medium','Liquidity':'Thin'}, {Pass:.28, Warning:.54, Exclude:.05, Unknown:.13}),
        brb('HF-2-R4', 'IF adequate liquidity + medium/large asset base THEN pass with valuation caveat', {'Liquidity':'Adequate','Asset Base':'Medium'}, {Pass:.58, Warning:.26, Exclude:.03, Unknown:.13}),
        brb('HF-2-R5', 'IF large asset base + adequate liquidity THEN lower shell-value fit', {'Asset Base':'Large','Liquidity':'Adequate'}, {Pass:.38, Warning:.42, Exclude:.06, Unknown:.14})
      ]
    },
    {
      id: 'HF-3', name: 'Control Path', source: 'shareholder',
      signal: 'control clarity, seller willingness and ownership-risk referential states',
      evidence: ['controlling_shareholder'],
      antecedents: [
        ant('Control Clarity', ['High','Medium','Low','Unknown'], (c) => controlClarity(c)),
        ant('Seller Willingness', ['Strong','Moderate','Weak','Unknown'], (c) => sellerWillingness(c)),
        ant('Ownership Risk', ['Low','Medium','High','Unknown'], (c) => ownershipRisk(c))
      ],
      rules: [
        brb('HF-3-R1', 'IF clarity low + seller weak THEN warning / exclude', {'Control Clarity':'Low','Seller Willingness':'Weak'}, {Pass:.10, Warning:.70, Exclude:.20, Unknown:0}),
        brb('HF-3-R2', 'IF clarity high + seller weak THEN warning but tradable', {'Control Clarity':'High','Seller Willingness':'Weak'}, {Pass:.35, Warning:.55, Exclude:.10, Unknown:0}),
        brb('HF-3-R3', 'IF clarity medium + seller weak THEN warning / unknown', {'Control Clarity':'Medium','Seller Willingness':'Weak'}, {Pass:.22, Warning:.58, Exclude:.08, Unknown:.12}),
        brb('HF-3-R4', 'IF clarity high + seller unknown THEN DD question', {'Control Clarity':'High','Seller Willingness':'Unknown'}, {Pass:.32, Warning:.44, Exclude:.04, Unknown:.20}),
        brb('HF-3-R5', 'IF ownership risk high THEN warning / exclude', {'Ownership Risk':'High'}, {Pass:.10, Warning:.56, Exclude:.22, Unknown:.12}),
        brb('HF-3-R6', 'IF clarity high + ownership risk low THEN pass', {'Control Clarity':'High','Ownership Risk':'Low'}, {Pass:.68, Warning:.20, Exclude:.03, Unknown:.09})
      ]
    },
    {
      id: 'HF-4', name: 'Financing Structure', source: 'financing',
      signal: 'borrowings, pledged deposits, leverage and financing complexity',
      evidence: ['debt_risk'],
      antecedents: [
        ant('Leverage Burden', ['Low','Moderate','High','Unknown'], (c) => leverageBurden(c)),
        ant('Pledge / Encumbrance', ['Absent','Present','Unknown'], (c) => /pledged/i.test(text(c,'debt_risk')) ? deg({Present:.78, Unknown:.22}) : /no bank borrowings|net cash/i.test(text(c,'debt_risk')) ? deg({Absent:.78, Unknown:.22}) : deg({Unknown:1})),
        ant('Financing Complexity', ['Simple','Mixed','Complex','Unknown'], (c) => financingComplexity(c))
      ],
      rules: [
        brb('HF-4-R1', 'IF leverage low + no encumbrance THEN pass', {'Leverage Burden':'Low','Pledge / Encumbrance':'Absent'}, {Pass:.76, Warning:.14, Exclude:.02, Unknown:.08}),
        brb('HF-4-R2', 'IF leverage moderate + pledge present THEN warning', {'Leverage Burden':'Moderate','Pledge / Encumbrance':'Present'}, {Pass:.18, Warning:.62, Exclude:.08, Unknown:.12}),
        brb('HF-4-R3', 'IF financing complexity mixed THEN warning', {'Financing Complexity':'Mixed'}, {Pass:.28, Warning:.50, Exclude:.06, Unknown:.16}),
        brb('HF-4-R4', 'IF leverage high THEN exclude / warning', {'Leverage Burden':'High'}, {Pass:.06, Warning:.42, Exclude:.36, Unknown:.16}),
        brb('HF-4-R5', 'IF financing evidence unknown THEN unknown', {'Leverage Burden':'Unknown'}, {Pass:.08, Warning:.16, Exclude:.04, Unknown:.72})
      ]
    },
    {
      id: 'HF-5', name: 'Disclosure & Audit', source: 'audit',
      signal: 'audit opinion, body-text support and disclosure coverage',
      evidence: ['audit_risk', 'listing_status'],
      antecedents: [
        ant('Audit Opinion', ['Clean','Qualified','Unknown'], (c) => /Clean|unqualified/i.test(text(c,'audit_risk')) ? deg({Clean:.88, Unknown:.12}) : has(c,'audit_risk') ? deg({Qualified:.58, Unknown:.42}) : deg({Unknown:1})),
        ant('Disclosure Coverage', ['High','Medium','Low','Unknown'], (c) => c.evidence.length >= 7 ? deg({High:.78, Medium:.16, Unknown:.06}) : c.evidence.length >= 4 ? deg({Medium:.66, Low:.12, Unknown:.22}) : deg({Low:.50, Unknown:.50})),
        ant('Listing Disclosure', ['Current','Impaired','Unknown'], (c) => c.listingStatus === 'active' ? deg({Current:.92, Unknown:.08}) : deg({Impaired:.78, Unknown:.22}))
      ],
      rules: [
        brb('HF-5-R1', 'IF clean audit + high coverage THEN pass', {'Audit Opinion':'Clean','Disclosure Coverage':'High'}, {Pass:.84, Warning:.10, Exclude:.02, Unknown:.04}),
        brb('HF-5-R2', 'IF clean audit + medium coverage THEN pass / warning', {'Audit Opinion':'Clean','Disclosure Coverage':'Medium'}, {Pass:.62, Warning:.22, Exclude:.03, Unknown:.13}),
        brb('HF-5-R3', 'IF qualified audit THEN warning / exclude', {'Audit Opinion':'Qualified'}, {Pass:.08, Warning:.50, Exclude:.26, Unknown:.16}),
        brb('HF-5-R4', 'IF low coverage THEN unknown / warning', {'Disclosure Coverage':'Low'}, {Pass:.08, Warning:.30, Exclude:.04, Unknown:.58}),
        brb('HF-5-R5', 'IF listing disclosure impaired THEN exclude', {'Listing Disclosure':'Impaired'}, {Pass:.02, Warning:.08, Exclude:.78, Unknown:.12})
      ]
    },
    {
      id: 'HF-6', name: 'Legal & Regulatory Risk', source: 'court',
      signal: 'litigation, regulatory evidence and public-float legal risk',
      evidence: ['regulatory_risk', 'litigation_risk', 'public_float_risk'],
      antecedents: [
        ant('Litigation Exposure', ['Low','Review Required','High','Unknown'], (c) => litigationExposure(c)),
        ant('Regulatory Exposure', ['Low','Medium','High','Unknown'], (c) => /No major litigation|No major litigation \/ regulatory/i.test(text(c,'regulatory_risk')) ? deg({Low:.74, Unknown:.26}) : has(c,'regulatory_risk') ? deg({Medium:.50, Unknown:.50}) : deg({Unknown:1})),
        ant('Float Legal Support', ['Confirmed','Unresolved','Unknown'], (c) => has(c,'public_float_risk') ? deg({Confirmed:.78, Unresolved:.12, Unknown:.10}) : deg({Unknown:1}))
      ],
      rules: [
        brb('HF-6-R1', 'IF litigation low + float confirmed THEN pass', {'Litigation Exposure':'Low','Float Legal Support':'Confirmed'}, {Pass:.70, Warning:.18, Exclude:.03, Unknown:.09}),
        brb('HF-6-R2', 'IF litigation needs review THEN warning', {'Litigation Exposure':'Review Required'}, {Pass:.14, Warning:.62, Exclude:.10, Unknown:.14}),
        brb('HF-6-R3', 'IF regulatory exposure medium THEN warning / unknown', {'Regulatory Exposure':'Medium'}, {Pass:.22, Warning:.46, Exclude:.08, Unknown:.24}),
        brb('HF-6-R4', 'IF litigation high THEN exclude / warning', {'Litigation Exposure':'High'}, {Pass:.04, Warning:.36, Exclude:.44, Unknown:.16}),
        brb('HF-6-R5', 'IF legal evidence unknown THEN unknown', {'Litigation Exposure':'Unknown','Regulatory Exposure':'Unknown'}, {Pass:.04, Warning:.12, Exclude:.04, Unknown:.80})
      ]
    },
    {
      id: 'HF-7', name: 'Platform Fit', source: 'ir',
      signal: 'consumer adjacency, operating substance and transferability',
      evidence: ['business_summary', 'synergy_business', 'industry'],
      antecedents: [
        ant('Strategic Fit', ['High','Medium','Low','Unknown'], (c) => strategicFit(c)),
        ant('Business Substance', ['Strong','Operating','Weak','Unknown'], (c) => businessSubstance(c)),
        ant('Transferability', ['Modular','Operationally Heavy','Unknown'], (c) => /operationally heavy|family-linked|restaurant/i.test(text(c,'synergy_business') + text(c,'business_summary')) ? deg({'Operationally Heavy':.64, Modular:.18, Unknown:.18}) : /modular|retail-channel|branded business/i.test(text(c,'synergy_business')) ? deg({Modular:.70, Unknown:.30}) : deg({Unknown:1}))
      ],
      rules: [
        brb('HF-7-R1', 'IF high strategic fit + strong substance THEN pass', {'Strategic Fit':'High','Business Substance':'Strong'}, {Pass:.78, Warning:.14, Exclude:.02, Unknown:.06}),
        brb('HF-7-R2', 'IF high fit + operationally heavy THEN warning but keep', {'Strategic Fit':'High','Transferability':'Operationally Heavy'}, {Pass:.40, Warning:.44, Exclude:.04, Unknown:.12}),
        brb('HF-7-R3', 'IF medium fit + operating substance THEN warning / pass', {'Strategic Fit':'Medium','Business Substance':'Operating'}, {Pass:.38, Warning:.42, Exclude:.05, Unknown:.15}),
        brb('HF-7-R4', 'IF low fit THEN warning / exclude', {'Strategic Fit':'Low'}, {Pass:.10, Warning:.52, Exclude:.20, Unknown:.18}),
        brb('HF-7-R5', 'IF substance unknown THEN unknown', {'Business Substance':'Unknown'}, {Pass:.06, Warning:.16, Exclude:.04, Unknown:.74})
      ]
    }
  ];

  const DD_MODULES = [
    {
      id: 'DD-1', name: 'Control & Ownership', source: 'shareholder',
      signal: 'controller identity, transferability and public-float path', evidence: ['controlling_shareholder', 'public_float_risk'],
      antecedents: [
        ant('Controller Identifiability', ['High','Medium','Low','Unknown'], (c) => controlClarity(c)),
        ant('Transfer Willingness', ['Supported','Not Evidenced','Weak','Unknown'], (c) => /Sale willingness is not evidenced|seller willingness remains unverified/i.test(text(c,'controlling_shareholder')) ? deg({'Not Evidenced':.70, Unknown:.30}) : has(c,'controlling_shareholder') ? deg({Unknown:.72, Supported:.18, 'Not Evidenced':.10}) : deg({Unknown:1})),
        ant('Float Path', ['Supported','Needs Check','Unknown'], (c) => has(c,'public_float_risk') ? deg({Supported:.70, 'Needs Check':.20, Unknown:.10}) : deg({Unknown:1}))
      ],
      rules: [
        brb('DD-1-R1', 'IF identifiable controller + supported float + transfer not evidenced THEN manageable with condition', {'Controller Identifiability':'High','Transfer Willingness':'Not Evidenced','Float Path':'Supported'}, {Clean:.12, Manageable:.64, High:.12, Critical:.02, Unknown:.10}),
        brb('DD-1-R2', 'IF medium controller + transfer not evidenced THEN high DD work', {'Controller Identifiability':'Medium','Transfer Willingness':'Not Evidenced'}, {Clean:.06, Manageable:.44, High:.32, Critical:.04, Unknown:.14}),
        brb('DD-1-R3', 'IF low controller identifiability THEN high / unknown', {'Controller Identifiability':'Low'}, {Clean:.02, Manageable:.18, High:.44, Critical:.14, Unknown:.22}),
        brb('DD-1-R4', 'IF transfer supported + controller high THEN clean', {'Controller Identifiability':'High','Transfer Willingness':'Supported'}, {Clean:.70, Manageable:.20, High:.03, Critical:.01, Unknown:.06}),
        brb('DD-1-R5', 'IF ownership data unknown THEN insufficient evidence', {'Controller Identifiability':'Unknown'}, {Clean:.02, Manageable:.08, High:.10, Critical:.02, Unknown:.78})
      ]
    },
    {
      id: 'DD-2', name: 'Debt & Litigation', source: 'court',
      signal: 'debt burden, pledged assets and litigation exposure', evidence: ['debt_risk','litigation_risk'],
      antecedents: [
        ant('Debt Burden', ['Low','Moderate','High','Unknown'], (c) => leverageBurden(c)),
        ant('Litigation Burden', ['Low','Review Required','High','Unknown'], (c) => litigationExposure(c)),
        ant('Cash Quality', ['Clean','Pledged / Mixed','Unknown'], (c) => /pledged/i.test(text(c,'debt_risk')) ? deg({'Pledged / Mixed':.76, Unknown:.24}) : /net cash|no bank borrowings/i.test(text(c,'debt_risk')) ? deg({Clean:.76, Unknown:.24}) : deg({Unknown:1}))
      ],
      rules: [
        brb('DD-2-R1', 'IF debt low + litigation low THEN clean', {'Debt Burden':'Low','Litigation Burden':'Low'}, {Clean:.74, Manageable:.16, High:.03, Critical:.01, Unknown:.06}),
        brb('DD-2-R2', 'IF moderate debt + pledged cash THEN manageable / high', {'Debt Burden':'Moderate','Cash Quality':'Pledged / Mixed'}, {Clean:.08, Manageable:.48, High:.30, Critical:.04, Unknown:.10}),
        brb('DD-2-R3', 'IF litigation review required THEN high DD work', {'Litigation Burden':'Review Required'}, {Clean:.06, Manageable:.32, High:.46, Critical:.06, Unknown:.10}),
        brb('DD-2-R4', 'IF debt high OR litigation high THEN critical possible', {'Debt Burden':'High'}, {Clean:.02, Manageable:.12, High:.48, Critical:.24, Unknown:.14}),
        brb('DD-2-R5', 'IF debt and litigation unknown THEN insufficient evidence', {'Debt Burden':'Unknown','Litigation Burden':'Unknown'}, {Clean:.02, Manageable:.08, High:.12, Critical:.02, Unknown:.76})
      ]
    },
    {
      id: 'DD-3', name: 'Compliance & Audit', source: 'audit',
      signal: 'audit opinion, listing status and disclosure completeness', evidence: ['audit_risk','listing_status','public_float_risk'],
      antecedents: [
        ant('Audit Quality', ['Clean','Adverse / Qualified','Unknown'], (c) => /Clean|unqualified/i.test(text(c,'audit_risk')) ? deg({Clean:.88, Unknown:.12}) : has(c,'audit_risk') ? deg({'Adverse / Qualified':.62, Unknown:.38}) : deg({Unknown:1})),
        ant('Compliance Standing', ['Current','Impaired','Unknown'], (c) => c.listingStatus === 'active' ? deg({Current:.92, Unknown:.08}) : deg({Impaired:.80, Unknown:.20})),
        ant('Disclosure Completeness', ['High','Medium','Low','Unknown'], (c) => c.evidence.length >= 7 ? deg({High:.76, Medium:.16, Unknown:.08}) : c.evidence.length >= 4 ? deg({Medium:.62, Low:.12, Unknown:.26}) : deg({Low:.45, Unknown:.55}))
      ],
      rules: [
        brb('DD-3-R1', 'IF clean audit + current standing + high disclosure THEN clean', {'Audit Quality':'Clean','Compliance Standing':'Current','Disclosure Completeness':'High'}, {Clean:.82, Manageable:.12, High:.02, Critical:.01, Unknown:.03}),
        brb('DD-3-R2', 'IF clean audit + medium disclosure THEN manageable', {'Audit Quality':'Clean','Disclosure Completeness':'Medium'}, {Clean:.48, Manageable:.34, High:.04, Critical:.01, Unknown:.13}),
        brb('DD-3-R3', 'IF adverse / qualified audit THEN high / critical', {'Audit Quality':'Adverse / Qualified'}, {Clean:.02, Manageable:.12, High:.44, Critical:.28, Unknown:.14}),
        brb('DD-3-R4', 'IF compliance standing impaired THEN reject risk', {'Compliance Standing':'Impaired'}, {Clean:.01, Manageable:.05, High:.32, Critical:.48, Unknown:.14}),
        brb('DD-3-R5', 'IF disclosure low THEN unknown / high', {'Disclosure Completeness':'Low'}, {Clean:.02, Manageable:.12, High:.24, Critical:.04, Unknown:.58})
      ]
    },
    {
      id: 'DD-4', name: 'Maintenance Cost', source: 'structured',
      signal: 'asset scale, turnover liquidity and missing direct cost evidence', evidence: ['latest_net_assets_hkd','avg_turnover_60d_hkd'],
      antecedents: [
        ant('Liquidity Carry', ['Low Burden','Manageable','Heavy','Unknown'], (c) => !Number.isFinite(c.avgTurnover60d) ? deg({Unknown:1}) : c.avgTurnover60d < 30000 ? deg({Heavy:.72, Manageable:.16, Unknown:.12}) : c.avgTurnover60d < 150000 ? deg({Manageable:.50, Heavy:.30, Unknown:.20}) : deg({'Low Burden':.64, Manageable:.24, Unknown:.12})),
        ant('Asset Cushion', ['Thin','Adequate','Large','Unknown'], (c) => !c.netAssets ? deg({Unknown:1}) : c.netAssets < 160e6 ? deg({Thin:.76, Adequate:.14, Unknown:.10}) : c.netAssets < 650e6 ? deg({Adequate:.68, Thin:.12, Large:.10, Unknown:.10}) : deg({Large:.70, Adequate:.20, Unknown:.10})),
        ant('Cost Evidence', ['Direct','Estimated','Missing'], () => deg({Missing:.88, Estimated:.12}))
      ],
      rules: [
        brb('DD-4-R1', 'IF heavy liquidity carry + thin asset cushion THEN high cost risk', {'Liquidity Carry':'Heavy','Asset Cushion':'Thin'}, {Clean:.03, Manageable:.18, High:.56, Critical:.08, Unknown:.15}),
        brb('DD-4-R2', 'IF manageable carry + adequate cushion THEN manageable', {'Liquidity Carry':'Manageable','Asset Cushion':'Adequate'}, {Clean:.18, Manageable:.54, High:.14, Critical:.02, Unknown:.12}),
        brb('DD-4-R3', 'IF low burden + adequate/large cushion THEN clean / manageable', {'Liquidity Carry':'Low Burden','Asset Cushion':'Adequate'}, {Clean:.42, Manageable:.40, High:.06, Critical:.01, Unknown:.11}),
        brb('DD-4-R4', 'IF cost evidence missing THEN unknown retained', {'Cost Evidence':'Missing'}, {Clean:.06, Manageable:.22, High:.18, Critical:.02, Unknown:.52}),
        brb('DD-4-R5', 'IF asset cushion thin THEN high DD attention', {'Asset Cushion':'Thin'}, {Clean:.04, Manageable:.20, High:.46, Critical:.08, Unknown:.22})
      ]
    },
    {
      id: 'DD-5', name: 'Business Substance & Repairability', source: 'ir',
      signal: 'business reality, strategic fit and transfer/repair route', evidence: ['business_summary','synergy_business','industry'],
      antecedents: [
        ant('Business Substance', ['Strong','Operating','Weak','Unknown'], (c) => businessSubstance(c)),
        ant('Strategic Repair Fit', ['High','Medium','Low','Unknown'], (c) => strategicFit(c)),
        ant('Repairability', ['High','Medium','Low','Unknown'], (c) => repairability(c))
      ],
      rules: [
        brb('DD-5-R1', 'IF strong substance + high repair fit THEN manageable / clean', {'Business Substance':'Strong','Strategic Repair Fit':'High'}, {Clean:.32, Manageable:.54, High:.06, Critical:.01, Unknown:.07}),
        brb('DD-5-R2', 'IF operating substance + medium fit THEN manageable with conditions', {'Business Substance':'Operating','Strategic Repair Fit':'Medium'}, {Clean:.12, Manageable:.50, High:.20, Critical:.03, Unknown:.15}),
        brb('DD-5-R3', 'IF low fit + low repairability THEN high / critical', {'Strategic Repair Fit':'Low','Repairability':'Low'}, {Clean:.02, Manageable:.12, High:.52, Critical:.18, Unknown:.16}),
        brb('DD-5-R4', 'IF operationally heavy but high fit THEN manageable / high', {'Repairability':'Medium','Strategic Repair Fit':'High'}, {Clean:.16, Manageable:.50, High:.20, Critical:.02, Unknown:.12}),
        brb('DD-5-R5', 'IF business substance unknown THEN insufficient evidence', {'Business Substance':'Unknown'}, {Clean:.02, Manageable:.08, High:.12, Critical:.02, Unknown:.76})
      ]
    }
  ];

  const HF_DECISION_BASE = {
    id: 'HF-DECISION', name: 'HF second-level BRB decision', source: 'decision',
    output: ['Pass','Needs DD','Exclude','Insufficient Evidence'],
    rules: [
      brb('HF-D-R1', 'IF listing module excludes THEN final Exclude', {'HF-1':'Exclude'}, {Pass:.01, 'Needs DD':.06, Exclude:.86, 'Insufficient Evidence':.07}),
      brb('HF-D-R2', 'IF legal module excludes THEN final Exclude', {'HF-6':'Exclude'}, {Pass:.02, 'Needs DD':.12, Exclude:.72, 'Insufficient Evidence':.14}),
      brb('HF-D-R3', 'IF control warning + valuation warning THEN Needs DD', {'HF-3':'Warning','HF-2':'Warning'}, {Pass:.12, 'Needs DD':.70, Exclude:.06, 'Insufficient Evidence':.12}),
      brb('HF-D-R4', 'IF financing warning + legal warning THEN Needs DD / Exclude', {'HF-4':'Warning','HF-6':'Warning'}, {Pass:.08, 'Needs DD':.62, Exclude:.16, 'Insufficient Evidence':.14}),
      brb('HF-D-R5', 'IF platform pass + audit pass + listing pass THEN Pass', {'HF-7':'Pass','HF-5':'Pass','HF-1':'Pass'}, {Pass:.74, 'Needs DD':.18, Exclude:.02, 'Insufficient Evidence':.06}),
      brb('HF-D-R6', 'IF valuation unknown + control unknown THEN insufficient evidence', {'HF-2':'Unknown','HF-3':'Unknown'}, {Pass:.02, 'Needs DD':.12, Exclude:.04, 'Insufficient Evidence':.82}),
      brb('HF-D-R7', 'IF platform warning + valuation warning THEN Needs DD', {'HF-7':'Warning','HF-2':'Warning'}, {Pass:.10, 'Needs DD':.68, Exclude:.10, 'Insufficient Evidence':.12}),
      brb('HF-D-R8', 'IF audit unknown + legal unknown THEN insufficient evidence', {'HF-5':'Unknown','HF-6':'Unknown'}, {Pass:.02, 'Needs DD':.10, Exclude:.04, 'Insufficient Evidence':.84})
    ]
  };

  const DD_DECISION_BASE = {
    id: 'DD-DECISION', name: 'DD second-level BRB decision', source: 'decision',
    output: ['Proceed','Proceed with Conditions','Hold','Reject','Insufficient Evidence'],
    rules: [
      brb('DD-D-R1', 'IF compliance critical THEN Reject', {'DD-3':'Critical'}, {Proceed:.01, 'Proceed with Conditions':.05, Hold:.22, Reject:.60, 'Insufficient Evidence':.12}),
      brb('DD-D-R2', 'IF debt high + control high THEN Hold', {'DD-2':'High','DD-1':'High'}, {Proceed:.02, 'Proceed with Conditions':.22, Hold:.56, Reject:.10, 'Insufficient Evidence':.10}),
      brb('DD-D-R3', 'IF control manageable + compliance clean THEN Proceed with Conditions', {'DD-1':'Manageable','DD-3':'Clean'}, {Proceed:.18, 'Proceed with Conditions':.62, Hold:.08, Reject:.02, 'Insufficient Evidence':.10}),
      brb('DD-D-R4', 'IF business manageable + compliance clean + debt manageable THEN Proceed with Conditions', {'DD-5':'Manageable','DD-3':'Clean','DD-2':'Manageable'}, {Proceed:.24, 'Proceed with Conditions':.60, Hold:.06, Reject:.02, 'Insufficient Evidence':.08}),
      brb('DD-D-R5', 'IF debt clean + compliance clean + business clean THEN Proceed', {'DD-2':'Clean','DD-3':'Clean','DD-5':'Clean'}, {Proceed:.78, 'Proceed with Conditions':.14, Hold:.02, Reject:.01, 'Insufficient Evidence':.05}),
      brb('DD-D-R6', 'IF maintenance high + business high THEN Hold', {'DD-4':'High','DD-5':'High'}, {Proceed:.02, 'Proceed with Conditions':.18, Hold:.58, Reject:.10, 'Insufficient Evidence':.12}),
      brb('DD-D-R7', 'IF control unknown + debt unknown THEN insufficient evidence', {'DD-1':'Unknown','DD-2':'Unknown'}, {Proceed:.01, 'Proceed with Conditions':.08, Hold:.10, Reject:.02, 'Insufficient Evidence':.79}),
      brb('DD-D-R8', 'IF several modules manageable THEN conditional proceed', {'DD-1':'Manageable','DD-4':'Manageable','DD-5':'Manageable'}, {Proceed:.22, 'Proceed with Conditions':.62, Hold:.06, Reject:.02, 'Insufficient Evidence':.08})
    ]
  };

  function ev(id, field, value, title, url, support, status, confidence) {
    return { id, field, value, title, url, support, status, confidence };
  }

  function ant(name, states, match) { return { name, states, match }; }
  function brb(id, text, ifStates, thenBelief, weight = 1) { return { id, text, ifStates, thenBelief, weight }; }
  function deg(values) { return values; }

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

  function normalizeDegrees(values, states) {
    const out = Object.fromEntries(states.map(state => [state, Math.max(0, Number(values[state] || 0))]));
    let total = Object.values(out).reduce((a, b) => a + b, 0);
    if (!total) { out.Unknown = 1; total = 1; }
    Object.keys(out).forEach(k => { out[k] = out[k] / total; });
    return out;
  }

  function completeDistribution(values, labels) {
    const out = Object.fromEntries(labels.map(label => [label, Math.max(0, Number(values[label] || 0))]));
    const total = Object.values(out).reduce((a,b)=>a+b,0);
    if (total <= 0) out[labels[labels.length - 1]] = 1;
    else if (Math.abs(total - 1) > .0001) Object.keys(out).forEach(k => { out[k] = out[k] / total; });
    return out;
  }

  function settings() {
    const val = id => document.getElementById(id).value;
    const num = id => Number(document.getElementById(id).value);
    return {
      gemMode: val('gemMode'), decisionCaution: num('decisionCaution') / 100,
      relOfficial: num('relOfficial'), relAudit: num('relAudit'), relCourt: num('relCourt'), relShareholder: num('relShareholder'),
      relFinancing: num('relFinancing'), relStructured: num('relStructured'), relIR: num('relIR'), relMedia: num('relMedia')
    };
  }

  function reliabilityFor(source, s) {
    const map = { official: s.relOfficial, audit: s.relAudit, court: s.relCourt, shareholder: s.relShareholder, financing: s.relFinancing, structured: s.relStructured, ir: (s.relIR + s.relMedia) / 2, decision: 1 };
    return Math.max(0, Math.min(1, map[source] ?? .7));
  }

  function activationDiscount(dist, activation, labels) {
    // BRB rule activation is a relative rule weight, not a new evidence-source reliability.
    // Keep weakly activated rules visible but partially uncommitted, so activation shapes ER
    // without turning every low-activation consequent into pure Unknown.
    const out = {};
    const unknownLabel = labels.includes('Unknown') ? 'Unknown' : 'Insufficient Evidence';
    const activationCommitment = Math.min(1, Math.max(0, 0.55 + 0.45 * activation));
    labels.forEach(label => { out[label] = label === unknownLabel ? 0 : (dist[label] || 0) * activationCommitment; });
    const known = labels.filter(x => x !== unknownLabel).reduce((sum, label) => sum + out[label], 0);
    out[unknownLabel] = 1 - known;
    return out;
  }

  function discount(dist, reliability, labels) {
    const out = {};
    const unknownLabel = labels.includes('Unknown') ? 'Unknown' : 'Insufficient Evidence';
    labels.forEach(label => { out[label] = label === unknownLabel ? 0 : (dist[label] || 0) * reliability; });
    const known = labels.filter(x => x !== unknownLabel).reduce((sum, label) => sum + out[label], 0);
    out[unknownLabel] = 1 - known;
    return out;
  }

  function combine(a, b, labels) {
    const unknownLabel = labels.includes('Unknown') ? 'Unknown' : 'Insufficient Evidence';
    const out = Object.fromEntries(labels.map(label => [label, 0]));
    let conflict = 0;
    labels.forEach(x => {
      labels.forEach(y => {
        const product = (a[x] || 0) * (b[y] || 0);
        if (!product) return;
        if (x === unknownLabel && y === unknownLabel) out[unknownLabel] += product;
        else if (x === unknownLabel) out[y] += product;
        else if (y === unknownLabel) out[x] += product;
        else if (x === y) out[x] += product;
        else conflict += product;
      });
    });
    const norm = 1 - conflict;
    if (norm <= 0) return Object.fromEntries(labels.map(label => [label, label === unknownLabel ? 1 : 0]));
    labels.forEach(label => { out[label] /= norm; });
    return out;
  }

  function aggregate(items, labels) {
    const unknownLabel = labels.includes('Unknown') ? 'Unknown' : 'Insufficient Evidence';
    return items.reduce((acc, item) => combine(acc, item.discounted, labels), Object.fromEntries(labels.map(label => [label, label === unknownLabel ? 1 : 0])));
  }

  function pct(v) { return Math.round((v || 0) * 100); }
  function dominant(dist, labels) { return labels.slice().sort((a, b) => (dist[b] || 0) - (dist[a] || 0))[0]; }
  function band(label) { return /Exclude|Critical|Reject/.test(label) ? 'decision-exclude' : /Warning|Needs DD|Manageable|High|Hold|Conditions/.test(label) ? 'decision-warning' : /Unknown|Insufficient/.test(label) ? 'decision-unknown' : 'decision-pass'; }

  function evaluateCompany(c, s) {
    const hfModules = HF_MODULES.map(module => evaluateModule(module, c, s, OUTCOMES_HF));
    const hfAgg = aggregate(hfModules, OUTCOMES_HF);
    const hfDecisionTrace = evaluateDecisionLayer(HF_DECISION_BASE, hfModules, OUTCOMES_HF, s);
    const hfDecision = hardVeto(c).label || dominant(hfDecisionTrace.aggregate, HF_DECISION_BASE.output);
    const hfDecisionBelief = hardVeto(c).belief || hfDecisionTrace.aggregate;
    const ddModules = DD_MODULES.map(module => evaluateModule(module, c, s, OUTCOMES_DD));
    const ddAgg = aggregate(ddModules, OUTCOMES_DD);
    const ddDecisionTrace = evaluateDecisionLayer(DD_DECISION_BASE, ddModules, OUTCOMES_DD, s);
    const ddDecision = dominant(ddDecisionTrace.aggregate, DD_DECISION_BASE.output);
    return { c, hfModules, hfAgg, hfDecisionTrace, hfDecision, hfDecisionBelief, ddModules, ddAgg, ddDecisionTrace, ddDecision };
  }

  function hardVeto(c) {
    if (c.listingStatus !== 'active') return { label:'Exclude', belief:{Pass:0,'Needs DD':0,Exclude:1,'Insufficient Evidence':0}, reason:'Deterministic hard veto: listing status is not active.' };
    return { label:null, belief:null, reason:null };
  }

  function evaluateModule(module, c, s, labels) {
    const antecedents = module.antecedents.map(a => ({ name:a.name, states:a.states, degrees:normalizeDegrees(a.match(c, s), a.states) }));
    const rel = reliabilityFor(module.source, s);
    const rawRules = module.rules.map(rule => {
      const rawActivation = Object.entries(rule.ifStates).reduce((prod, [antName, state]) => {
        const a = antecedents.find(x => x.name === antName);
        return prod * (a ? (a.degrees[state] || 0) : 0);
      }, rule.weight || 1);
      return { rule, rawActivation };
    });
    const totalAct = rawRules.reduce((sum, r) => sum + r.rawActivation, 0);
    const activeRules = rawRules.map(r => {
      const activation = totalAct > 0 ? r.rawActivation / totalAct : 0;
      const rawBelief = completeDistribution(r.rule.thenBelief, labels);
      const activatedBelief = activationDiscount(rawBelief, activation, labels);
      const discounted = discount(activatedBelief, rel, labels);
      return { rule:r.rule, rawActivation:r.rawActivation, activation, reliability:rel, raw:rawBelief, activated:activatedBelief, discounted, result:dominant(discounted, labels) };
    }).filter(r => r.activation > .001);
    const aggregateBelief = activeRules.length ? aggregate(activeRules, labels) : completeDistribution({Unknown:1}, labels);
    return { module, id:module.id, name:module.name, signal:module.signal, reliability:rel, antecedents, activeRules, discounted:aggregateBelief, result:dominant(aggregateBelief, labels), evidences:evidenceFor(c, module.evidence) };
  }

  function evaluateDecisionLayer(base, modules, moduleLabels, s) {
    const labels = base.output;
    const moduleMap = Object.fromEntries(modules.map(m => [m.id, m.discounted]));
    const rawRules = base.rules.map(rule => {
      const decisionWeight = decisionRuleWeight(base, rule, s);
      const rawActivation = Object.entries(rule.ifStates).reduce((prod, [moduleId, state]) => prod * ((moduleMap[moduleId] || {})[state] || 0), (rule.weight || 1) * decisionWeight);
      return { rule, rawActivation, decisionWeight };
    });
    const totalAct = rawRules.reduce((sum, r) => sum + r.rawActivation, 0);
    const activeRules = rawRules.map(r => {
      const activation = totalAct > 0 ? r.rawActivation / totalAct : 0;
      const rawBelief = completeDistribution(r.rule.thenBelief, labels);
      const activatedBelief = activationDiscount(rawBelief, activation, labels);
      const discounted = discount(activatedBelief, 1, labels);
      return { rule:r.rule, rawActivation:r.rawActivation, activation, reliability:1, raw:rawBelief, activated:activatedBelief, discounted, result:dominant(discounted, labels) };
    }).filter(r => r.activation > .001);
    const aggregateBelief = activeRules.length ? aggregate(activeRules, labels) : completeDistribution({'Insufficient Evidence':1}, labels);
    return { base, activeRules, aggregate:aggregateBelief, result:dominant(aggregateBelief, labels) };
  }


  function decisionRuleWeight(base, rule, s) {
    if (base.id !== 'HF-DECISION') return 1;
    const caution = Math.max(.25, Math.min(.60, s.decisionCaution || .40));
    const main = dominant(completeDistribution(rule.thenBelief, base.output), base.output);
    if (main === 'Pass') return 1.15 - caution;
    if (main === 'Needs DD') return .85 + caution;
    if (main === 'Exclude') return .80 + caution;
    if (main === 'Insufficient Evidence') return .90 + caution;
    return 1;
  }

  function controlClarity(c) {
    const t = text(c,'controlling_shareholder');
    if (!t) return deg({Unknown:1});
    if (/holds|control chain|owns|%|shares/i.test(t)) return deg({High:.68, Medium:.24, Unknown:.08});
    return deg({Medium:.50, Low:.18, Unknown:.32});
  }
  function sellerWillingness(c) {
    const t = text(c,'controlling_shareholder');
    if (!t) return deg({Unknown:1});
    if (/Sale willingness is not evidenced|seller willingness remains unverified/i.test(t)) return deg({Weak:.58, Unknown:.34, Moderate:.08});
    return deg({Unknown:.62, Moderate:.28, Weak:.10});
  }
  function ownershipRisk(c) {
    const t = text(c,'controlling_shareholder');
    if (!t) return deg({Unknown:1});
    if (/trust|family|discretionary|family members|spouse/i.test(t)) return deg({Medium:.58, High:.20, Low:.12, Unknown:.10});
    if (/control chain|controlling shareholder/i.test(t)) return deg({Medium:.44, Low:.38, Unknown:.18});
    return deg({Unknown:1});
  }
  function leverageBurden(c) {
    const t = text(c,'debt_risk');
    if (!t) return deg({Unknown:1});
    if (/Low debt|no bank borrowings|net cash about HK\$208m/i.test(t)) return deg({Low:.78, Moderate:.12, Unknown:.10});
    if (/Moderate|bank borrowings|pledged|gearing|total liabilities/i.test(t)) return deg({Moderate:.62, High:.14, Low:.10, Unknown:.14});
    return deg({Unknown:1});
  }
  function financingComplexity(c) {
    const t = text(c,'debt_risk') + text(c,'transaction_complexity');
    if (!t) return deg({Unknown:1});
    if (/pledged|short-term|borrowings|connected|continuing connected|Chapter 14A/i.test(t)) return deg({Mixed:.64, Complex:.16, Unknown:.20});
    if (/no bank borrowings|Low debt|net cash/i.test(t)) return deg({Simple:.70, Unknown:.30});
    return deg({Unknown:1});
  }
  function litigationExposure(c) {
    const t = text(c,'litigation_risk') + text(c,'regulatory_risk');
    if (/litigation|review required/i.test(t)) return deg({'Review Required':.68, High:.12, Unknown:.20});
    if (/No major litigation|No major litigation \/ regulatory/i.test(t)) return deg({Low:.74, Unknown:.26});
    if (has(c,'public_float_risk')) return deg({Low:.45, Unknown:.55});
    return deg({Unknown:1});
  }
  function strategicFit(c) {
    const t = text(c,'synergy_business') + ' ' + text(c,'business_summary') + ' ' + c.industry;
    if (/High\.|consumer|F&B|bakery|food|retail-channel|lifestyle|health/i.test(t)) return deg({High:.68, Medium:.22, Unknown:.10});
    if (/Medium-low|apparel|garment|household/i.test(t)) return deg({Low:.54, Medium:.24, Unknown:.22});
    return deg({Unknown:1});
  }
  function businessSubstance(c) {
    const t = text(c,'business_summary') + ' ' + text(c,'synergy_business') + ' ' + c.industry;
    if (/Direct consumer|Direct F&B|principally involved|bakery|restaurant|retail platform/i.test(t)) return deg({Strong:.66, Operating:.24, Unknown:.10});
    if (/Operating garment|manufacture|retail|家庭电器/i.test(t)) return deg({Operating:.56, Weak:.18, Unknown:.26});
    return deg({Unknown:1});
  }
  function repairability(c) {
    const t = text(c,'synergy_business') + ' ' + text(c,'transaction_complexity') + ' ' + text(c,'business_summary');
    if (/modular|cleanest|consumer|retail-channel/i.test(t)) return deg({High:.60, Medium:.26, Unknown:.14});
    if (/operationally heavy|family-linked|connected|Chapter 14A|restaurant/i.test(t)) return deg({Medium:.52, Low:.20, Unknown:.28});
    if (/Medium-low|apparel|household/i.test(t)) return deg({Low:.48, Medium:.20, Unknown:.32});
    return deg({Unknown:1});
  }

  function beliefBar(dist, labels) {
    const cls = { Pass: 'b-pass', Warning: 'b-warn', Exclude: 'b-exclude', Unknown: 'b-unk', Clean: 'b-clean', Manageable: 'b-manageable', High: 'b-high', Critical: 'b-critical', Proceed: 'b-clean', 'Proceed with Conditions': 'b-manageable', Hold: 'b-high', Reject: 'b-critical', 'Needs DD': 'b-warn', 'Insufficient Evidence': 'b-unk' };
    return `<div class="belief-bar">${labels.map(label => `<div class="${cls[label] || 'b-unknown'}" style="width:${pct(dist[label])}%"></div>`).join('')}</div><div class="${labels.length === 5 ? 'dd-belief-meta' : 'belief-meta'}">${labels.map(label => `<span>${esc(label)} ${pct(dist[label])}%</span>`).join('')}</div>`;
  }

  function referentialTrace(moduleResult) {
    return `<div class="chip-list">${moduleResult.antecedents.map(a => `<div class="chip"><strong>${esc(a.name)}</strong><br>${a.states.map(state => `${esc(state)} ${pct(a.degrees[state])}%`).join(' · ')}</div>`).join('')}</div>`;
  }

  function activatedRulesTrace(moduleResult, labels) {
    const rules = moduleResult.activeRules.slice().sort((a,b)=>b.activation-a.activation);
    return `<div class="chip-list">${rules.map(r => `<div class="chip"><strong>${esc(r.rule.id)}</strong> · activation ${pct(r.activation)}%<br>${esc(r.rule.text)}<br>${beliefBar(r.discounted, labels)}</div>`).join('') || '<div class="chip">No BRB rule activated; Unknown retained.</div>'}</div>`;
  }

  function decisionTrace(trace, labels) {
    const rules = trace.activeRules.slice().sort((a,b)=>b.activation-a.activation).slice(0,6);
    return `<div class="chip-list">${rules.map(r => `<div class="chip"><strong>${esc(r.rule.id)}</strong> · activation ${pct(r.activation)}%<br>${esc(r.rule.text)}<br>${beliefBar(r.discounted, labels)}</div>`).join('') || '<div class="chip">No second-level decision rule activated.</div>'}</div>`;
  }

  function evidenceTrace(moduleResult) {
    const evidence = moduleResult.evidences.length ? moduleResult.evidences : [{ id: 'Unknown', field: 'missing', value: 'No verified public evidence in current local evidence snapshot.', title: 'Local evidence snapshot', url: '', support: 'none', status: 'unknown', confidence: 'none' }];
    return `<div class="chip-list">${evidence.map(e => `<div class="chip"><strong>${esc(e.id)} · ${esc(e.field)}</strong><br>${esc(e.value)}<br><span style="color:var(--muted)">${esc(e.title)} · ${esc(e.support)} · ${esc(e.status)} · confidence ${esc(e.confidence)}</span>${e.url ? `<br><a href="${esc(e.url)}" target="_blank" rel="noreferrer">source</a>` : ''}</div>`).join('')}</div>`;
  }

  function strongest(items, label) {
    return items.slice().sort((a, b) => (b.discounted[label] || 0) - (a.discounted[label] || 0))[0];
  }

  function render() {
    const s = settings();
    document.getElementById('decisionCautionValue').textContent = `${Math.round(s.decisionCaution * 100)}%`;
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
    document.getElementById('hfFunnel').innerHTML = `<div class="table-card"><div class="label">HF gate summary</div><div class="summary-grid" style="grid-template-columns:repeat(4,minmax(0,1fr))"><div class="summary-card"><div class="kicker">Candidates</div><div class="number-value">${results.length}</div></div><div class="summary-card"><div class="kicker">Enter DD</div><div class="number-value">${enterDd.length}</div></div><div class="summary-card"><div class="kicker">BRB Pass</div><div class="number-value">${pass.length}</div></div><div class="summary-card"><div class="kicker">Blocked / unknown</div><div class="number-value">${blocked.length}</div></div></div></div><div class="table-card"><div class="label">BRB / ER method</div><div class="headline-title">Evidence → Referential States → Activated Rules → Reliability → ER Result → Final Decision</div><div class="headline-copy">Each HF module now contains multiple IF–THEN BRB rules. Evidence is converted into referential-state matching degrees; several rules activate simultaneously. Supported belief is discounted by source reliability and unsupported mass is assigned to Unknown. Module outputs feed a second-level BRB/ER decision layer; the slider only changes rule activation context, not a fixed threshold.</div></div>`;
    document.getElementById('hfOverviewGrid').innerHTML = results.map(r => `<div class="overview-card"><div class="result-code">${esc(r.c.ticker)} · ${esc(r.c.board)}</div><div class="result-name">${esc(r.c.name)}</div><span class="decision-pill ${band(r.hfDecision)}">${esc(r.hfDecision)}</span><div class="overview-copy">Final decision BRB:<br>${beliefBar(r.hfDecisionBelief, HF_DECISION_BASE.output)}<br>Module ER aggregate:<br>Pass ${pct(r.hfAgg.Pass)}% · Warning ${pct(r.hfAgg.Warning)}% · Exclude ${pct(r.hfAgg.Exclude)}% · Unknown ${pct(r.hfAgg.Unknown)}%</div></div>`).join('');
    document.getElementById('hfBeliefTables').innerHTML = results.map(r => `${ruleTable(r, r.hfModules, OUTCOMES_HF, 'HF')}<div class="table-card"><div class="label">HF second-level decision BRB</div><div class="section-sub">Module-level beliefs activate higher-level decision rules; final decision is the dominant ER output, not a fixed threshold.</div>${beliefBar(r.hfDecisionBelief, HF_DECISION_BASE.output)}${decisionTrace(r.hfDecisionTrace, HF_DECISION_BASE.output)}</div>`).join('');
    document.getElementById('hfSummaryTableBody').innerHTML = results.map(r => {
      const warn = strongest(r.hfModules, 'Warning');
      const excl = strongest(r.hfModules, 'Exclude');
      const unk = strongest(r.hfModules, 'Unknown');
      return `<tr><td>${esc(r.c.ticker)} · ${esc(r.c.name)}</td><td><span class="decision-pill ${band(r.hfDecision)}">${esc(r.hfDecision)}</span></td><td>${esc(warn.name)} (${pct(warn.discounted.Warning)}%)</td><td>${esc(excl.name)} (${pct(excl.discounted.Exclude)}%)</td><td>${esc(unk.name)} (${pct(unk.discounted.Unknown)}%)</td></tr>`;
    }).join('');
    document.getElementById('hfQuestionCards').innerHTML = enterDd.map(r => `<div class="chip"><strong>${esc(r.c.ticker)} · ${esc(r.c.name)}</strong><br>Confirm control-transfer willingness.<br>Quantify unresolved debt / litigation perimeter.<br>Verify post-transaction public float.<br>Review connected transactions and consent constraints.<br>Confirm business-substance transferability.</div>`).join('') || '<div class="chip">No companies entered DD under current settings.</div>';
  }

  function ruleTable(r, modules, labels, phase) {
    return `<div class="table-card"><div class="label">${phase} module BRB / ER trace</div><div class="section-sub" style="margin-bottom:12px">${esc(r.c.ticker)} · ${esc(r.c.name)}. Each module shows referential-state matching, simultaneous rule activation, reliability discounting and module-level ER output.</div><table class="belief-table"><thead><tr><th>Module</th><th>Referential states</th><th>Activated BRB rules</th><th>Reliability</th><th>Module ER result</th><th>Evidence trace</th></tr></thead><tbody>${modules.map(m => `<tr><td><strong>${esc(m.id)}</strong><br>${esc(m.name)}<br><span style="color:var(--muted)">${esc(m.signal)}</span></td><td>${referentialTrace(m)}</td><td>${activatedRulesTrace(m, labels)}</td><td>${Math.round(m.reliability * 100)}%<br><span style="color:var(--muted)">${esc(m.module.source)}</span></td><td>${beliefBar(m.discounted, labels)}<span class="decision-pill ${band(m.result)}">${esc(m.result)}</span></td><td>${evidenceTrace(m)}</td></tr>`).join('')}</tbody></table></div>`;
  }

  function renderDd(enterDd) {
    document.getElementById('ddMethodBox').innerHTML = `<div class="label">DD method</div><div class="headline-title">HF-passed names receive DD module BRB rules + second-level BRB decision</div><div class="headline-copy">DD modules use explicit multi-rule BRBs. Their ER outputs feed a decision BRB with Proceed / Proceed with Conditions / Hold / Reject / Insufficient Evidence outcomes.</div>`;
    document.getElementById('ddOverviewGrid').innerHTML = enterDd.map(r => `<div class="overview-card"><div class="result-code">${esc(r.c.ticker)} · ${esc(r.c.board)}</div><div class="result-name">${esc(r.c.name)}</div><span class="decision-pill ${band(r.ddDecision)}">${esc(r.ddDecision)}</span><div class="overview-copy">Final DD decision BRB:<br>${beliefBar(r.ddDecisionTrace.aggregate, DD_DECISION_BASE.output)}<br>Module ER aggregate:<br>Clean ${pct(r.ddAgg.Clean)}% · Manageable ${pct(r.ddAgg.Manageable)}% · High ${pct(r.ddAgg.High)}% · Critical ${pct(r.ddAgg.Critical)}% · Unknown ${pct(r.ddAgg.Unknown)}%</div></div>`).join('') || '<div class="overall-box">No DD dossiers because no company entered DD.</div>';
    document.getElementById('ddDossiers').innerHTML = enterDd.map(r => `<section class="card"><div class="dd-header"><div><div class="label">DD dossier</div><div class="dd-company-name">${esc(r.c.ticker)} · ${esc(r.c.name)}</div><div class="section-sub">Inherited HF decision: ${esc(r.hfDecision)}. Market cap and P/B are Unknown in current evidence snapshot and are not used as verified inputs.</div></div><span class="decision-pill ${band(r.ddDecision)}">${esc(r.ddDecision)}</span></div><div class="memo-strip"><div class="headline-box"><div class="label">DD top-line readout</div><div class="headline-title">${esc(r.ddDecision)}</div><div class="headline-copy">${ddNarrative(r)}</div></div><div class="number-strip"><div class="number-card"><div class="kicker">Net assets</div><div class="number-value">${fmtMoney(r.c.netAssets)}</div></div><div class="number-card"><div class="kicker">60d turnover</div><div class="number-value">${fmtMoney(r.c.avgTurnover60d)}</div></div><div class="number-card"><div class="kicker">Market cap</div><div class="number-value">Unknown</div></div><div class="number-card"><div class="kicker">P/B</div><div class="number-value">Unknown</div></div></div></div>${ruleTable(r, r.ddModules, OUTCOMES_DD, 'DD')}<div class="table-card"><div class="label">DD second-level decision BRB</div>${beliefBar(r.ddDecisionTrace.aggregate, DD_DECISION_BASE.output)}${decisionTrace(r.ddDecisionTrace, DD_DECISION_BASE.output)}</div></section>`).join('');
  }

  function ddNarrative(r) {
    if (r.ddDecision === 'Proceed') return 'The second-level DD BRB is dominated by Proceed after aggregating DD module beliefs.';
    if (r.ddDecision === 'Proceed with Conditions') return 'The second-level DD BRB supports continuing, but activated rules preserve conditions around control, cleanup, consent and transferability.';
    if (r.ddDecision === 'Hold') return 'The second-level DD BRB is dominated by Hold because high-risk DD module beliefs activate hold-oriented rules.';
    if (r.ddDecision === 'Reject') return 'The second-level DD BRB is dominated by Reject / critical evidence.';
    return 'The second-level DD BRB is dominated by Insufficient Evidence because Unknown module beliefs remain high.';
  }

  function reset() {
    document.getElementById('caseInput').value = '吨吨健康科技集团拟在港股市场筛选适合资产注入、业务整合、控股权交易或上市公司重组的上市平台。目标不是直接做最终排序，而是先识别哪些公司能够进入 Deep Due Diligence，并在 DD 层进一步判断：1. 是否干净到足以交易；2. 风险是否可量化、可清理、可谈判；3. 业务是否真实存续；4. 困境是否可逆；5. 是否值得进入 Commercial Thesis 与 Transaction Structure 阶段。';
    ['relOfficial','relAudit','relCourt','relShareholder','relFinancing','relStructured','relIR','relMedia'].forEach((id, idx) => { document.getElementById(id).value = ['1.0','0.9','0.9','0.9','0.9','0.8','0.7','0.6'][idx]; });
    document.getElementById('gemMode').value = 'warning';
    document.getElementById('decisionCaution').value = '40';
    render();
  }

  document.getElementById('runBtn').addEventListener('click', render);
  document.getElementById('resetBtn').addEventListener('click', reset);
  ['gemMode','decisionCaution','relOfficial','relAudit','relCourt','relShareholder','relFinancing','relStructured','relIR','relMedia'].forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener(el.type === 'range' ? 'input' : 'change', render);
  });
  render();
})();

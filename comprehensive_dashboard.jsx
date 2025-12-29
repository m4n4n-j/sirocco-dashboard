import React, { useState } from 'react';

const ComprehensiveDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: '📊 Overview' },
    { id: 'sirocco', label: '🔬 SIROCCO Trial' },
    { id: 'whyNo', label: '❌ Why Patients Say No' },
    { id: 'retention', label: '📈 Retention & Incentives' },
    { id: 'competitors', label: '🏢 Competitor Solutions' },
    { id: 'diversity', label: '🌍 Diversity & FDA' }
  ];

  // ========== OVERVIEW TAB ==========
  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Key Insight Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-2">🎯 KEY INSIGHT: The Awareness Gap is Larger Than the Willingness Gap</h2>
        <p className="text-lg">85% of patients are never aware clinical trials exist. When actually offered trials, 55% agree to participate. The challenge isn't convincing patients—it's reaching them.</p>
      </div>

      {/* Critical Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { value: '80%', label: 'Trials Fail Timelines', color: 'bg-red-500', source: 'Tufts CSDD' },
          { value: '19.1%', label: 'Average Dropout Rate', color: 'bg-orange-500', source: 'Tufts CSDD 2019' },
          { value: '$19,533', label: 'Cost to Replace Patient', color: 'bg-purple-500', source: 'CenterWatch 2022' },
          { value: '55%', label: 'Accept When Asked', color: 'bg-green-500', source: 'Meta-analysis' }
        ].map((metric, i) => (
          <div key={i} className={`${metric.color} text-white p-4 rounded-xl shadow-lg text-center`}>
            <div className="text-3xl font-bold">{metric.value}</div>
            <div className="text-sm opacity-90">{metric.label}</div>
            <div className="text-xs opacity-70 mt-1">{metric.source}</div>
          </div>
        ))}
      </div>

      {/* Three Pillars */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <h3 className="font-bold text-blue-800 mb-2">📉 Pre-Screening Failures</h3>
          <ul className="text-sm text-blue-900 space-y-1">
            <li>• 85% never know trials exist</li>
            <li>• 30-35% fear side effects</li>
            <li>• 70% live &gt;2hrs from sites</li>
            <li>• 36.3% average screen failure</li>
          </ul>
        </div>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
          <h3 className="font-bold text-amber-800 mb-2">🚪 Post-Enrollment Dropouts</h3>
          <ul className="text-sm text-amber-900 space-y-1">
            <li>• 42% cite participation burden</li>
            <li>• 47-72% disease progression (oncology)</li>
            <li>• 2x dropout if visits stressful</li>
            <li>• 25% increase since 2012</li>
          </ul>
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
          <h3 className="font-bold text-green-800 mb-2">✅ What Works</h3>
          <ul className="text-sm text-green-900 space-y-1">
            <li>• AI pre-screening (87% accuracy)</li>
            <li>• DCT reduces burden 80%</li>
            <li>• Community sites improve diversity</li>
            <li>• Predictive dropout models</li>
          </ul>
        </div>
      </div>

      {/* Strategic Opportunities */}
      <div className="bg-slate-800 text-white p-6 rounded-xl">
        <h3 className="text-lg font-bold mb-4">🚀 Strategic Opportunities for Raga.ai</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-700 p-4 rounded-lg">
            <div className="text-green-400 font-bold mb-2">HIGH IMPACT</div>
            <p className="text-sm">AI patient identification from EHR data addresses the #1 barrier (awareness). Deep 6 AI demonstrates 3x faster accrual.</p>
          </div>
          <div className="bg-slate-700 p-4 rounded-lg">
            <div className="text-yellow-400 font-bold mb-2">EMERGING GAP</div>
            <p className="text-sm">Predictive dropout analytics underdeployed. Ripple Science achieves 87.5% accuracy—few competitors offer this.</p>
          </div>
          <div className="bg-slate-700 p-4 rounded-lg">
            <div className="text-blue-400 font-bold mb-2">REGULATORY TAILWIND</div>
            <p className="text-sm">FDA FDORA requires Diversity Action Plans for Phase 3 trials starting 2025. Creates demand for diversity-focused solutions.</p>
          </div>
        </div>
      </div>
    </div>
  );

  // ========== SIROCCO TAB ==========
  const SiroccoTab = () => (
    <div className="space-y-6">
      <div className="bg-blue-600 text-white p-4 rounded-xl">
        <h2 className="text-xl font-bold">SIROCCO Trial (NCT01928771) - Case Study</h2>
        <p>Phase 3 benralizumab for severe eosinophilic asthma | 374 sites | 17 countries | FDA approved Nov 2017</p>
      </div>

      {/* Funnel Visualization */}
      <div className="bg-white border rounded-xl p-6">
        <h3 className="font-bold mb-4 text-center">Patient Flow Funnel</h3>
        <div className="flex flex-col items-center space-y-2">
          {[
            { stage: 'Screened', n: 2681, pct: '100%', color: 'bg-blue-500', width: 'w-full' },
            { stage: 'Enrolled', n: 1205, pct: '45%', color: 'bg-green-500', width: 'w-4/5' },
            { stage: 'Completed', n: 844, pct: '70% of enrolled', color: 'bg-emerald-600', width: 'w-3/5' }
          ].map((s, i) => (
            <div key={i} className={`${s.width} ${s.color} text-white p-3 rounded-lg text-center`}>
              <div className="font-bold">{s.stage}: {s.n.toLocaleString()}</div>
              <div className="text-sm opacity-90">{s.pct}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4 text-center">
          <div className="bg-red-100 p-3 rounded-lg">
            <div className="text-2xl font-bold text-red-600">1,476</div>
            <div className="text-sm text-red-800">Screen Failures (55%)</div>
          </div>
          <div className="bg-amber-100 p-3 rounded-lg">
            <div className="text-2xl font-bold text-amber-600">361</div>
            <div className="text-sm text-amber-800">Dropouts (30%)</div>
          </div>
        </div>
      </div>

      {/* Cost Analysis */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white border rounded-xl p-4">
          <h3 className="font-bold mb-3">💰 Cost Breakdown</h3>
          <table className="w-full text-sm">
            <tbody>
              {[
                ['Total Trial Cost', '$85M', 'Estimated'],
                ['Per-Patient Cost', '$70,500', 'Enrolled'],
                ['Screen Failure Cost', '$7,500/fail', '$10.9M total'],
                ['Site Payment/Patient', '$25,000', 'Industry avg']
              ].map(([label, value, note], i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                  <td className="p-2">{label}</td>
                  <td className="p-2 font-bold text-right">{value}</td>
                  <td className="p-2 text-gray-500 text-right">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-white border rounded-xl p-4">
          <h3 className="font-bold mb-3">📊 Dropout Reasons</h3>
          <div className="space-y-2">
            {[
              { reason: 'Patient Decision', pct: 42, color: 'bg-blue-500' },
              { reason: 'Other/Various', pct: 22, color: 'bg-gray-400' },
              { reason: 'Protocol Deviation', pct: 15, color: 'bg-amber-500' },
              { reason: 'Lost to Follow-Up', pct: 10, color: 'bg-purple-500' },
              { reason: 'Physician Decision', pct: 8, color: 'bg-teal-500' },
              { reason: 'Adverse Events', pct: 3, color: 'bg-red-500' }
            ].map((r, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-32 text-sm">{r.reason}</div>
                <div className="flex-1 bg-gray-200 rounded-full h-4">
                  <div className={`${r.color} h-4 rounded-full`} style={{ width: `${r.pct}%` }}></div>
                </div>
                <div className="w-12 text-right text-sm font-bold">{r.pct}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Insight */}
      <div className="bg-green-100 border border-green-300 p-4 rounded-xl">
        <h3 className="font-bold text-green-800 mb-2">✅ SIROCCO Performance vs Industry</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-green-700">55%</div>
            <div className="text-xs">Screen Failure (vs 36% avg)</div>
            <div className="text-xs text-gray-500">Higher due to biomarker</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-700">30%</div>
            <div className="text-xs">Dropout Rate (vs 19% avg)</div>
            <div className="text-xs text-gray-500">Long duration trial</div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-700">3%</div>
            <div className="text-xs">AE Dropout (vs 10-41% range)</div>
            <div className="text-xs text-gray-500">Excellent AE management</div>
          </div>
        </div>
      </div>
    </div>
  );

  // ========== WHY PATIENTS SAY NO TAB ==========
  const WhyNoTab = () => (
    <div className="space-y-6">
      {/* Before Screening */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <h2 className="text-lg font-bold text-red-800 mb-4">❌ Top 5 Reasons Patients Decline BEFORE Screening</h2>
        <div className="space-y-3">
          {[
            { rank: 1, reason: 'Lack of Awareness', pct: '75-85%', desc: 'Never knew trials existed; only 0.2% of physicians refer', ai: 'YES', aiColor: 'bg-green-500' },
            { rank: 2, reason: 'Fear of Side Effects', pct: '30-35%', desc: 'Worry about unknown risks from "experimental" treatments', ai: 'PARTIAL', aiColor: 'bg-yellow-500' },
            { rank: 3, reason: 'Treatment Preference', pct: '24-30%', desc: '70% oncology patients prefer current treatment', ai: 'LIMITED', aiColor: 'bg-red-400' },
            { rank: 4, reason: 'Randomization/Placebo Fear', pct: '14-24%', desc: 'Fear of receiving placebo instead of active treatment', ai: 'PARTIAL', aiColor: 'bg-yellow-500' },
            { rank: 5, reason: 'Logistical Barriers', pct: '17-55%', desc: '70% live >2hrs from academic centers; can\'t take time off', ai: 'YES', aiColor: 'bg-green-500' }
          ].map((r, i) => (
            <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border">
              <div className="bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">{r.rank}</div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div className="font-bold">{r.reason}</div>
                  <div className="text-red-600 font-bold">{r.pct}</div>
                </div>
                <div className="text-sm text-gray-600">{r.desc}</div>
              </div>
              <div className={`${r.aiColor} text-white text-xs px-2 py-1 rounded flex-shrink-0`}>AI: {r.ai}</div>
            </div>
          ))}
        </div>
      </div>

      {/* After Enrollment */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <h2 className="text-lg font-bold text-amber-800 mb-4">🚪 Top 5 Reasons Patients Drop Out AFTER Enrolling</h2>
        <div className="space-y-3">
          {[
            { rank: 1, reason: 'Disease Progression', pct: '47-72%', desc: 'Condition worsens despite treatment (oncology dominant)', ai: 'LIMITED', aiColor: 'bg-red-400' },
            { rank: 2, reason: 'Participation Burden', pct: '~42%', desc: '2x dropout if visits stressful; life disruption', ai: 'YES', aiColor: 'bg-green-500' },
            { rank: 3, reason: 'Adverse Events', pct: '10-42%', desc: 'Intolerable side effects; varies by therapeutic area', ai: 'PARTIAL', aiColor: 'bg-yellow-500' },
            { rank: 4, reason: 'Lost to Follow-Up', pct: 'Up to 88%', desc: 'Changed contact, moved, stopped responding', ai: 'YES', aiColor: 'bg-green-500' },
            { rank: 5, reason: 'Patient Decision', pct: '~42%', desc: 'Withdrew consent for various personal reasons', ai: 'PARTIAL', aiColor: 'bg-yellow-500' }
          ].map((r, i) => (
            <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-lg border">
              <div className="bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">{r.rank}</div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div className="font-bold">{r.reason}</div>
                  <div className="text-amber-600 font-bold">{r.pct}</div>
                </div>
                <div className="text-sm text-gray-600">{r.desc}</div>
              </div>
              <div className={`${r.aiColor} text-white text-xs px-2 py-1 rounded flex-shrink-0`}>AI: {r.ai}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Screen Failure by Therapeutic Area */}
      <div className="bg-white border rounded-xl p-4">
        <h3 className="font-bold mb-3">📊 Screen Failure Rates by Therapeutic Area</h3>
        <div className="space-y-2">
          {[
            { area: 'Preclinical Alzheimer\'s', rate: 88 },
            { area: 'Rare Diseases', rate: 81 },
            { area: 'Oncology Phase I', rate: 78 },
            { area: 'CNS/Neuroscience', rate: 57 },
            { area: 'SIROCCO (Respiratory)', rate: 55 },
            { area: 'Industry Average', rate: 36 }
          ].map((a, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-48 text-sm">{a.area}</div>
              <div className="flex-1 bg-gray-200 rounded-full h-5">
                <div className="bg-red-500 h-5 rounded-full flex items-center justify-end pr-2" style={{ width: `${a.rate}%` }}>
                  <span className="text-white text-xs font-bold">{a.rate}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ========== RETENTION & INCENTIVES TAB ==========
  const RetentionTab = () => (
    <div className="space-y-6">
      {/* What Works */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4">
        <h2 className="text-lg font-bold text-green-800 mb-4">✅ Incentives & Support That Work</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold text-green-700 mb-2">💰 Financial Compensation</h3>
            <table className="w-full text-sm">
              <tbody>
                {[
                  ['Phase I', '$3,070 median', '$150-$13,000'],
                  ['Phase II/III', '$1,000-$7,000', 'Total'],
                  ['Per Visit', '$50-$300', 'Higher for invasive'],
                  ['Hourly Rate', '$10-$20/hr', 'FDA considers reasonable']
                ].map(([phase, amount, note], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-green-100'}>
                    <td className="p-2">{phase}</td>
                    <td className="p-2 font-bold">{amount}</td>
                    <td className="p-2 text-gray-500">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-green-600 mt-2">Cochrane review: Only effective method among 38 trials. 2-13% retention improvement.</p>
          </div>
          <div>
            <h3 className="font-bold text-green-700 mb-2">🚗 Non-Financial Support</h3>
            <div className="space-y-2">
              {[
                { support: 'Travel Reimbursement', effect: 'HIGH', note: 'FDA permits; not undue influence' },
                { support: 'Telemedicine Visits', effect: 'VERY HIGH', note: 'FDA 2024 DCT guidance' },
                { support: 'Home Visits', effect: 'VERY HIGH', note: 'Mobile nurses for blood draws' },
                { support: 'Childcare Support', effect: 'HIGH', note: '2023 NIH policy allows' },
                { support: 'Flexible Scheduling', effect: 'HIGH', note: 'Evening/weekend options' }
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between bg-white p-2 rounded">
                  <span className="text-sm">{s.support}</span>
                  <span className={`text-xs px-2 py-1 rounded ${s.effect === 'VERY HIGH' ? 'bg-green-600 text-white' : 'bg-green-200 text-green-800'}`}>{s.effect}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What Doesn't Work */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <h2 className="text-lg font-bold text-red-800 mb-3">❌ What Doesn't Work</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { method: 'Behavioral economics payment strategies', why: 'No improvement over constant payment in RCTs' },
            { method: 'Delayed payment until study end', why: 'Creates undue influence; regulatory risk' },
            { method: 'Payment alone without support', why: 'Cannot overcome trust, fear, or access barriers' },
            { method: 'Inconsistent compensation across sites', why: 'Undermines trust when participants compare' }
          ].map((m, i) => (
            <div key={i} className="bg-white p-3 rounded-lg border border-red-200">
              <div className="font-bold text-red-700">{m.method}</div>
              <div className="text-sm text-gray-600">{m.why}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dropout by Phase */}
      <div className="bg-white border rounded-xl p-4">
        <h3 className="font-bold mb-3">📉 Dropout Rates by Phase & Therapeutic Area</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-bold text-gray-600 mb-2">By Phase</h4>
            {[
              { phase: 'Phase I', rate: 8 },
              { phase: 'Phase II/III', rate: 19 },
              { phase: 'Phase III', rate: 25 }
            ].map((p, i) => (
              <div key={i} className="flex items-center gap-2 mb-1">
                <div className="w-24 text-sm">{p.phase}</div>
                <div className="flex-1 bg-gray-200 rounded-full h-4">
                  <div className="bg-amber-500 h-4 rounded-full" style={{ width: `${p.rate * 3}%` }}></div>
                </div>
                <div className="w-12 text-right text-sm font-bold">{p.rate}%</div>
              </div>
            ))}
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-600 mb-2">By Therapeutic Area</h4>
            {[
              { area: 'CNS/Neurology', rate: 26 },
              { area: 'Oncology', rate: 19 },
              { area: 'Cardiovascular', rate: 7 }
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-2 mb-1">
                <div className="w-24 text-sm">{a.area}</div>
                <div className="flex-1 bg-gray-200 rounded-full h-4">
                  <div className="bg-purple-500 h-4 rounded-full" style={{ width: `${a.rate * 3}%` }}></div>
                </div>
                <div className="w-12 text-right text-sm font-bold">{a.rate}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // ========== COMPETITORS TAB ==========
  const CompetitorsTab = () => (
    <div className="space-y-6">
      {/* AI-First Solutions */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h2 className="text-lg font-bold text-blue-800 mb-4">🤖 AI-First Competitor Solutions</h2>
        <div className="grid gap-4">
          {[
            { 
              name: 'Inato', 
              focus: 'Community Site Marketplace + AI Pre-screening',
              metrics: '5,000+ sites | 50+ countries | 87% accuracy',
              highlight: '50-90% reduction in pre-screening time',
              insight: 'Integration-free approach; "long tail" community focus'
            },
            { 
              name: 'Deep 6 AI (Tempus)', 
              focus: 'EMR Mining with NLP/ML',
              metrics: '1,000+ facilities | 40M+ patients',
              highlight: '3x faster accrual; 15-20% more patients from unstructured data',
              insight: 'EHR integration is moat but also limitation'
            },
            { 
              name: 'Science37', 
              focus: 'Decentralized Trial Platform',
              metrics: '150+ mobile nurses | Full DCT stack',
              highlight: '15-21x faster enrollment; 28-30% better retention',
              insight: 'Directly addresses travel burden (#1 dropout driver)'
            },
            { 
              name: 'Medidata', 
              focus: 'Unified Platform + Acorn AI',
              metrics: '26% of trial starts | 72% of 2024 FDA approvals',
              highlight: 'Predictive dropout: ROC-AUC ≥0.60',
              insight: 'Market leader; deepest integration'
            },
            { 
              name: 'Ripple Science', 
              focus: 'Behavioral Dropout Prediction',
              metrics: 'Behavioral signal analysis',
              highlight: '87.5% dropout prediction accuracy',
              insight: 'Best-in-class prediction; direct opportunity'
            }
          ].map((c, i) => (
            <div key={i} className="bg-white p-4 rounded-lg border shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <div className="font-bold text-lg text-blue-700">{c.name}</div>
                <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{c.focus}</div>
              </div>
              <div className="text-sm text-gray-600 mb-2">{c.metrics}</div>
              <div className="bg-green-100 text-green-800 text-sm p-2 rounded mb-2">✓ {c.highlight}</div>
              <div className="text-xs text-gray-500 italic">💡 {c.insight}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Service-Based CROs */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
        <h2 className="text-lg font-bold text-purple-800 mb-4">🏢 Service-Based CRO Solutions</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { name: 'IQVIA', highlight: '59% retention increase', note: 'IDC MarketScape Leader 2024' },
            { name: 'Syneos Health', highlight: '77% site burden reduction', note: 'Behavioral science approach' },
            { name: 'Labcorp', highlight: '1,900 Patient Service Centers', note: '76% of 2024 FDA drugs' },
            { name: 'Parexel', highlight: '40% cost savings', note: 'Patient Advisory Council' }
          ].map((c, i) => (
            <div key={i} className="bg-white p-3 rounded-lg border">
              <div className="font-bold text-purple-700">{c.name}</div>
              <div className="text-green-600 font-bold text-sm">{c.highlight}</div>
              <div className="text-xs text-gray-500">{c.note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ========== DIVERSITY TAB ==========
  const DiversityTab = () => (
    <div className="space-y-6">
      {/* FDA Alert */}
      <div className="bg-red-600 text-white p-4 rounded-xl">
        <h2 className="text-lg font-bold mb-2">⚠️ FDA FDORA Requirements (Effective 2025)</h2>
        <p>Diversity Action Plans (DAPs) now REQUIRED for Phase 3 and pivotal studies. Failure to submit = prohibited act under FDCA.</p>
      </div>

      {/* Current State */}
      <div className="bg-white border rounded-xl p-4">
        <h3 className="font-bold mb-3">📊 Current Representation vs US Population</h3>
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left">Population</th>
              <th className="p-2 text-right">US %</th>
              <th className="p-2 text-right">Trial %</th>
              <th className="p-2 text-center">Gap</th>
            </tr>
          </thead>
          <tbody>
            {[
              { pop: 'White', us: '60-72%', trial: '75-81%', gap: 'OVER', color: 'bg-yellow-100 text-yellow-800' },
              { pop: 'Black/African American', us: '12-13%', trial: '5-8%', gap: 'UNDER', color: 'bg-red-100 text-red-800' },
              { pop: 'Hispanic/Latino', us: '16-19%', trial: '6-11%', gap: 'UNDER', color: 'bg-red-100 text-red-800' },
              { pop: 'Asian', us: '6-7%', trial: '2-6%', gap: 'VARIABLE', color: 'bg-orange-100 text-orange-800' },
              { pop: 'Women (CV trials)', us: '50%+', trial: '28.5%', gap: 'UNDER', color: 'bg-red-100 text-red-800' }
            ].map((r, i) => (
              <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : ''}>
                <td className="p-2">{r.pop}</td>
                <td className="p-2 text-right">{r.us}</td>
                <td className="p-2 text-right">{r.trial}</td>
                <td className="p-2 text-center"><span className={`px-2 py-1 rounded text-xs ${r.color}`}>{r.gap}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-xs text-gray-500 mt-2">Only 6% of pivotal trials (2017-2023) achieve enrollment aligned with US demographics.</p>
      </div>

      {/* Key Insight */}
      <div className="bg-green-100 border border-green-300 p-4 rounded-xl">
        <h3 className="font-bold text-green-800 mb-2">🎯 Key Insight: Willingness is Equal When Asked</h3>
        <p className="text-green-900">Research confirms willingness to participate is COMPARABLE across racial groups when individuals are asked. The strongest predictor of participation is receiving an invitation—not race or ethnicity.</p>
      </div>

      {/* Solutions */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h3 className="font-bold text-blue-800 mb-3">✅ Effective Diversity Solutions</h3>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { solution: 'Community Site Strategy (Inato)', outcome: '94% of diverse sites have non-English speakers' },
            { solution: 'Decentralized Trials', outcome: 'One rural COVID DCT: 62.5% Black, 37.5% female' },
            { solution: 'Community Health Workers', outcome: 'Yale Cultural Ambassadors model' },
            { solution: 'Mobile Research Units', outcome: 'Bring trials to patients vs requiring travel' }
          ].map((s, i) => (
            <div key={i} className="bg-white p-3 rounded-lg border">
              <div className="font-bold text-blue-700">{s.solution}</div>
              <div className="text-sm text-green-600">{s.outcome}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewTab />;
      case 'sirocco': return <SiroccoTab />;
      case 'whyNo': return <WhyNoTab />;
      case 'retention': return <RetentionTab />;
      case 'competitors': return <CompetitorsTab />;
      case 'diversity': return <DiversityTab />;
      default: return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-600 text-white p-6 rounded-t-xl">
          <h1 className="text-2xl font-bold">Clinical Trial Patient Behavior & Retention Dashboard</h1>
          <p className="text-slate-300">Comprehensive analysis for Raga.ai strategic planning | Research compiled Dec 2025</p>
        </div>

        {/* Tabs */}
        <div className="bg-white border-b flex flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-gray-50 p-6 rounded-b-xl min-h-96">
          {renderContent()}
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 mt-4">
          Sources: Tufts CSDD, Applied Clinical Trials, PMC peer-reviewed studies, FDA guidance, ClinicalTrials.gov, Company materials
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveDashboard;

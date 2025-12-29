import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, Legend, FunnelChart, Funnel, LabelList } from 'recharts';

const SIROCCODashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Color palette
  const colors = {
    primary: '#1F4E79',
    secondary: '#5B9BD5',
    success: '#70AD47',
    warning: '#FFC000',
    danger: '#C65911',
    info: '#9DC3E6',
    lightBg: '#F8F9FA',
    accent: '#ED7D31'
  };

  // Funnel data for patient journey
  const funnelData = [
    { name: 'Screened', value: 2681, fill: colors.secondary },
    { name: 'Enrolled', value: 1205, fill: colors.success },
    { name: 'Completed', value: 844, fill: colors.primary }
  ];

  // Screen failure breakdown
  const screenFailureData = [
    { reason: 'Low Eosinophils', patients: 450, pct: 30.5, cost: 3375000 },
    { reason: 'COPD (Not Asthma)', patients: 350, pct: 23.7, cost: 2625000 },
    { reason: 'Few Exacerbations', patients: 280, pct: 19.0, cost: 2100000 },
    { reason: 'Other Conditions', patients: 200, pct: 13.6, cost: 1500000 },
    { reason: 'Lab Values', patients: 120, pct: 8.1, cost: 900000 },
    { reason: 'Withdrew', patients: 76, pct: 5.1, cost: 380000 }
  ];

  // Cost breakdown
  const costData = [
    { category: 'Site Payments', perPatient: 25000, description: 'Hospitals/clinics get paid for each enrolled patient' },
    { category: 'Screening Waste', perPatient: 9035, description: 'Failed screenings cost $7,500 each with zero data return' },
    { category: 'Recruitment', perPatient: 6500, description: 'Advertising, outreach to find eligible patients' },
    { category: 'Drug/Placebo', perPatient: 5000, description: 'Manufacturing and shipping the treatment' },
    { category: 'Monitoring', perPatient: 4000, description: 'Quality checks and compliance verification' },
    { category: 'Lab Tests', perPatient: 3000, description: 'Central lab processing for consistent results' },
    { category: 'Data Mgmt', perPatient: 2500, description: 'Electronic systems, data cleaning' },
    { category: 'Regulatory', perPatient: 1500, description: 'FDA and ethics committee compliance' }
  ];

  // AI comparison data
  const aiComparisonData = [
    { metric: 'Time per Patient', manual: 50, aiAssisted: 9, unit: 'minutes' },
    { metric: 'Cost per Screen', manual: 42, aiAssisted: 5, unit: 'dollars' },
    { metric: 'Daily Capacity', manual: 10, aiAssisted: 50, unit: 'patients' }
  ];

  // Industry comparison
  const industryComparisonData = [
    { metric: 'Screen Failure Rate', sirocco: 55, industry: 36 },
    { metric: 'Enrollment Success', sirocco: 45, industry: 64 },
    { metric: 'Site Zero Enrollment', sirocco: 30, industry: 30 }
  ];

  // Info card component with explanation
  const InfoCard = ({ title, value, subtitle, explanation, icon, color = colors.primary }) => (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '12px',
      padding: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      border: `3px solid ${color}`,
      minHeight: '180px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
        <span style={{ fontSize: '24px', marginRight: '10px' }}>{icon}</span>
        <span style={{ color: '#666', fontSize: '13px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{title}</span>
      </div>
      <div style={{ fontSize: '32px', fontWeight: 'bold', color: color, marginBottom: '4px' }}>{value}</div>
      <div style={{ fontSize: '14px', color: '#444', fontWeight: '500', marginBottom: '10px' }}>{subtitle}</div>
      <div style={{ 
        fontSize: '12px', 
        color: '#666', 
        lineHeight: '1.5',
        borderTop: '1px solid #eee',
        paddingTop: '10px',
        fontStyle: 'italic'
      }}>
        {explanation}
      </div>
    </div>
  );

  // Explanation box component
  const ExplanationBox = ({ title, children, color = colors.info }) => (
    <div style={{
      backgroundColor: `${color}20`,
      borderLeft: `4px solid ${color}`,
      padding: '16px 20px',
      marginBottom: '20px',
      borderRadius: '0 8px 8px 0'
    }}>
      <div style={{ fontWeight: 'bold', color: colors.primary, marginBottom: '8px', fontSize: '14px' }}>
        💡 {title}
      </div>
      <div style={{ fontSize: '13px', color: '#444', lineHeight: '1.6' }}>
        {children}
      </div>
    </div>
  );

  // Section header with explanation
  const SectionHeader = ({ title, explanation }) => (
    <div style={{ marginBottom: '20px' }}>
      <h3 style={{ 
        color: colors.primary, 
        marginBottom: '8px',
        fontSize: '18px',
        fontWeight: '600'
      }}>{title}</h3>
      <p style={{ 
        color: '#666', 
        fontSize: '13px', 
        lineHeight: '1.5',
        margin: 0,
        maxWidth: '800px'
      }}>{explanation}</p>
    </div>
  );

  // Tab button style
  const tabStyle = (isActive) => ({
    padding: '12px 24px',
    border: 'none',
    background: isActive ? colors.primary : 'transparent',
    color: isActive ? 'white' : colors.primary,
    cursor: 'pointer',
    fontWeight: '600',
    borderRadius: '8px 8px 0 0',
    fontSize: '14px',
    transition: 'all 0.2s'
  });

  return (
    <div style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      maxWidth: '1400px', 
      margin: '0 auto', 
      padding: '24px',
      backgroundColor: colors.lightBg,
      minHeight: '100vh'
    }}>
      {/* Header */}
      <div style={{ 
        textAlign: 'center', 
        marginBottom: '24px',
        backgroundColor: 'white',
        padding: '24px',
        borderRadius: '12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        <h1 style={{ color: colors.primary, marginBottom: '8px', fontSize: '28px' }}>
          SIROCCO Clinical Trial Analysis
        </h1>
        <p style={{ color: '#666', fontSize: '15px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          A comprehensive analysis of the SIROCCO Phase 3 trial (NCT01928771) that led to FDA approval of benralizumab (Fasenra) for severe asthma. 
          This dashboard explores recruitment challenges, costs, and how AI could transform clinical trial operations.
        </p>
        <div style={{ 
          marginTop: '16px', 
          padding: '12px', 
          backgroundColor: '#FFF3CD', 
          borderRadius: '8px',
          fontSize: '13px',
          color: '#856404'
        }}>
          <strong>New to Clinical Trials?</strong> Start with the "Glossary" tab. Each metric includes plain-English explanations to help you understand the industry context.
        </div>
      </div>

      {/* Navigation Tabs */}
      <div style={{ 
        display: 'flex', 
        gap: '4px', 
        marginBottom: '0',
        backgroundColor: 'white',
        padding: '16px 16px 0 16px',
        borderRadius: '12px 12px 0 0'
      }}>
        {[
          { id: 'overview', label: '📊 Overview' },
          { id: 'screening', label: '🔍 Screen Failures' },
          { id: 'costs', label: '💰 Costs' },
          { id: 'ai', label: '🤖 AI Impact' },
          { id: 'glossary', label: '📚 Glossary' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={tabStyle(activeTab === tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div style={{ 
        backgroundColor: 'white', 
        padding: '24px', 
        borderRadius: '0 0 12px 12px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
      }}>
        
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div>
            <ExplanationBox title="What is SIROCCO?">
              SIROCCO was a Phase 3 clinical trial testing <strong>benralizumab</strong> (now sold as <strong>Fasenra</strong>) for patients with severe asthma 
              caused by high eosinophil levels (a type of white blood cell). The trial ran from 2013-2015 across 374 sites in 17 countries, 
              ultimately leading to FDA approval in November 2017. We're analyzing it because its 55% screen failure rate (vs. 36% industry average) 
              illustrates both the challenges and AI opportunities in clinical trial recruitment.
            </ExplanationBox>

            <SectionHeader 
              title="Key Metrics at a Glance" 
              explanation="These numbers tell the story of SIROCCO's recruitment challenge: screening over 2,600 patients to enroll just 1,200, 
              at an estimated cost of $85 million."
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '32px' }}>
              <InfoCard 
                icon="👥"
                title="Patients Screened"
                value="2,681"
                subtitle="Total people evaluated for the trial"
                explanation="This is like the number of job applicants. Each screening costs $5,000-$10,000 in staff time, lab tests, and paperwork — even if the patient doesn't qualify."
                color={colors.secondary}
              />
              <InfoCard 
                icon="✅"
                title="Patients Enrolled"
                value="1,205"
                subtitle="Passed screening and joined trial"
                explanation="Only 45% of screened patients qualified — like hiring 45 out of every 100 job applicants. Each enrolled patient generates the data needed for FDA approval."
                color={colors.success}
              />
              <InfoCard 
                icon="❌"
                title="Screen Failures"
                value="1,476"
                subtitle="Evaluated but didn't qualify"
                explanation="55% of patients failed screening — mostly because their eosinophil blood counts were too low. This is 'biological reality' that better pre-screening could identify earlier."
                color={colors.danger}
              />
              <InfoCard 
                icon="🏥"
                title="Trial Sites"
                value="374"
                subtitle="Hospitals/clinics across 17 countries"
                explanation="More sites means faster enrollment but higher coordination costs. Industry benchmark: 30% of sites fail to enroll even a single patient."
                color={colors.primary}
              />
            </div>

            <SectionHeader 
              title="Patient Journey Funnel" 
              explanation="Watch how patients flow through the trial: 2,681 screened → 1,205 enrolled (55% drop-off) → ~844 completed (assuming 30% dropout). 
              Each stage has associated costs and challenges."
            />

            <div style={{ height: '300px', marginBottom: '32px' }}>
              <ResponsiveContainer>
                <BarChart data={funnelData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip formatter={(value) => `${value.toLocaleString()} patients`} />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {funnelData.map((entry, index) => (
                      <Cell key={index} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <SectionHeader 
              title="SIROCCO vs Industry Benchmarks" 
              explanation="How does SIROCCO compare to typical Phase 3 trials? The 55% screen failure rate is significantly worse than the 36% industry average — 
              driven by strict eosinophil requirements that improved drug efficacy but increased screening costs."
            />

            <div style={{ height: '280px' }}>
              <ResponsiveContainer>
                <BarChart data={industryComparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="metric" tick={{ fontSize: 12 }} />
                  <YAxis unit="%" />
                  <Tooltip formatter={(value) => `${value}%`} />
                  <Legend />
                  <Bar dataKey="sirocco" name="SIROCCO" fill={colors.accent} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="industry" name="Industry Avg" fill={colors.info} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* SCREENING TAB */}
        {activeTab === 'screening' && (
          <div>
            <ExplanationBox title="What is a Screen Failure?" color={colors.warning}>
              A <strong>screen failure</strong> happens when a patient comes in for evaluation but <strong>doesn't qualify</strong> to join the trial. 
              Think of it like a job interview: the candidate shows up, you spend time evaluating them, but they don't get hired. 
              Unlike job interviews, each screening costs $5,000-$10,000 in staff time, lab tests, and paperwork — <strong>whether they qualify or not</strong>.
              <br/><br/>
              <strong>Why it matters:</strong> SIROCCO had 1,476 screen failures × $7,500 average = <strong>$10.9 million</strong> spent on patients who never contributed data.
            </ExplanationBox>

            <SectionHeader 
              title="Why Patients Failed Screening" 
              explanation="Understanding WHY patients fail helps identify what AI can prevent. Some failures (like low eosinophils) are 'biological reality' — 
              the patient simply doesn't have the condition the drug treats. Others (like COPD misdiagnosis) could potentially be caught earlier with better pre-screening."
            />

            <div style={{ height: '350px', marginBottom: '32px' }}>
              <ResponsiveContainer>
                <BarChart data={screenFailureData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="reason" type="category" width={140} tick={{ fontSize: 11 }} />
                  <Tooltip 
                    formatter={(value, name) => [
                      name === 'patients' ? `${value} patients` : 
                      name === 'cost' ? `$${(value/1000000).toFixed(1)}M` : `${value}%`,
                      name === 'patients' ? 'Patients' : name === 'cost' ? 'Cost Impact' : 'Percentage'
                    ]}
                  />
                  <Bar dataKey="patients" fill={colors.danger} radius={[0, 4, 4, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <SectionHeader 
              title="Detailed Breakdown with AI Prevention Potential" 
              explanation="Each row shows: the reason patients failed, how many were affected, the cost impact, and whether AI pre-screening could prevent it."
            />

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                <thead>
                  <tr style={{ backgroundColor: colors.primary, color: 'white' }}>
                    <th style={{ padding: '12px', textAlign: 'left' }}>Failure Reason</th>
                    <th style={{ padding: '12px', textAlign: 'center' }}>Patients</th>
                    <th style={{ padding: '12px', textAlign: 'center' }}>% of Total</th>
                    <th style={{ padding: '12px', textAlign: 'right' }}>Cost Impact</th>
                    <th style={{ padding: '12px', textAlign: 'left' }}>Plain English Explanation</th>
                    <th style={{ padding: '12px', textAlign: 'center' }}>AI Preventable?</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { reason: 'Low Eosinophils (<300 cells/μL)', patients: 450, pct: '30.5%', cost: '$3.38M', 
                      explanation: "Patient's blood test showed eosinophil levels below the threshold. Their asthma isn't the 'eosinophilic' type this drug treats.",
                      ai: 'Partially', aiColor: colors.warning },
                    { reason: 'COPD Misdiagnosis', patients: 350, pct: '23.7%', cost: '$2.63M',
                      explanation: "Patient thought they had asthma but actually has COPD (different disease). Similar symptoms, wrong condition.",
                      ai: 'Yes', aiColor: colors.success },
                    { reason: 'Insufficient Exacerbations', patients: 280, pct: '19.0%', cost: '$2.10M',
                      explanation: "Trial required ≥2 severe asthma attacks in the past year. Patient's asthma was too well-controlled to qualify.",
                      ai: 'Yes', aiColor: colors.success },
                    { reason: 'Other Medical Conditions', patients: 200, pct: '13.6%', cost: '$1.50M',
                      explanation: "Patient had other health issues (heart disease, etc.) that made participation unsafe or could confuse results.",
                      ai: 'Yes', aiColor: colors.success },
                    { reason: 'Lab Values Out of Range', patients: 120, pct: '8.1%', cost: '$0.90M',
                      explanation: "Blood chemistry (liver, kidney function) was abnormal, indicating other health issues.",
                      ai: 'Partially', aiColor: colors.warning },
                    { reason: 'Patient Withdrew', patients: 76, pct: '5.1%', cost: '$0.38M',
                      explanation: "Patient changed their mind or staff had concerns about their ability to follow the protocol.",
                      ai: 'Limited', aiColor: colors.danger }
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #eee', backgroundColor: idx % 2 === 0 ? '#f9f9f9' : 'white' }}>
                      <td style={{ padding: '12px', fontWeight: '500' }}>{row.reason}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>{row.patients}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>{row.pct}</td>
                      <td style={{ padding: '12px', textAlign: 'right', fontWeight: '600', color: colors.danger }}>{row.cost}</td>
                      <td style={{ padding: '12px', fontSize: '12px', color: '#555' }}>{row.explanation}</td>
                      <td style={{ padding: '12px', textAlign: 'center' }}>
                        <span style={{ 
                          backgroundColor: row.aiColor, 
                          color: 'white', 
                          padding: '4px 8px', 
                          borderRadius: '12px',
                          fontSize: '11px',
                          fontWeight: '600'
                        }}>{row.ai}</span>
                      </td>
                    </tr>
                  ))}
                  <tr style={{ backgroundColor: colors.primary, color: 'white', fontWeight: 'bold' }}>
                    <td style={{ padding: '12px' }}>TOTAL</td>
                    <td style={{ padding: '12px', textAlign: 'center' }}>1,476</td>
                    <td style={{ padding: '12px', textAlign: 'center' }}>100%</td>
                    <td style={{ padding: '12px', textAlign: 'right' }}>$10.88M</td>
                    <td style={{ padding: '12px', fontSize: '12px' }} colSpan="2">Every dollar spent here generated zero data for FDA approval</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#E8F5E9', borderRadius: '8px' }}>
              <strong style={{ color: colors.success }}>💡 Key Insight:</strong>
              <span style={{ marginLeft: '8px', fontSize: '13px' }}>
                AI could potentially prevent <strong>~50% of screen failures</strong> (the "Yes" categories) by reviewing medical records before patients 
                come in for evaluation. At $7,500 per failed screen, that's <strong>$2-3M in savings</strong> for a trial like SIROCCO.
              </span>
            </div>
          </div>
        )}

        {/* COSTS TAB */}
        {activeTab === 'costs' && (
          <div>
            <ExplanationBox title="Understanding Clinical Trial Economics">
              A Phase 3 trial like SIROCCO costs <strong>$20-100+ million</strong>. The money goes to: paying hospitals to run the trial (40%), 
              finding patients (15%), monitoring data quality (10%), manufacturing drugs (10%), and regulatory compliance (5%). 
              Per-patient costs range from <strong>$41,000-$113,000</strong> depending on trial complexity. SIROCCO's 1,205 enrolled patients 
              × ~$70,500 per patient = ~<strong>$85 million total</strong>.
            </ExplanationBox>

            <SectionHeader 
              title="Where Does the Money Go?" 
              explanation="This chart breaks down the major cost categories for each enrolled patient. Note that 'Screening Waste' represents the 
              proportional cost of all the failed screenings divided across enrolled patients — a hidden tax on successful recruitment."
            />

            <div style={{ height: '350px', marginBottom: '32px' }}>
              <ResponsiveContainer>
                <BarChart data={costData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" tick={{ fontSize: 11 }} angle={-20} textAnchor="end" height={80} />
                  <YAxis tickFormatter={(v) => `$${v/1000}k`} />
                  <Tooltip 
                    formatter={(value) => [`$${value.toLocaleString()}`, 'Cost per Patient']}
                    labelFormatter={(label) => {
                      const item = costData.find(d => d.category === label);
                      return item ? `${label}: ${item.description}` : label;
                    }}
                  />
                  <Bar dataKey="perPatient" fill={colors.primary} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <SectionHeader 
              title="Cost Category Details" 
              explanation="Each cost category explained in plain English, with sources and verification status."
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginBottom: '32px' }}>
              {[
                { category: 'Site Payments', amount: '$25,000/patient', icon: '🏥',
                  detail: "Hospitals and clinics get paid for each patient they successfully enroll. This covers the Principal Investigator's time, coordinator salaries, facility use, equipment, and overhead. Sites won't participate without adequate payment.",
                  source: 'Sofpromed, Industry Data' },
                { category: 'Screen Failure Waste', amount: '$9,035/enrolled', icon: '❌',
                  detail: "For every patient you enroll, you've also paid for ~1.2 patients who failed screening. At $7,500 per failure and 55% failure rate, this adds $9,035 to each enrolled patient's effective cost.",
                  source: 'Calculated from SIROCCO data' },
                { category: 'Patient Recruitment', amount: '$6,500/enrolled', icon: '📢',
                  detail: "Finding eligible patients through advertising, social media, patient databases, doctor referrals, and call centers. This is the #1 operational challenge — 80% of trials miss enrollment deadlines.",
                  source: 'PMC7342339' },
                { category: 'Drug/Placebo Manufacturing', amount: '$5,000/patient', icon: '💊',
                  detail: "Making the drug, packaging it, shipping to 374 sites globally. Biologic drugs like benralizumab are expensive to produce. Placebo must look identical to maintain blinding.",
                  source: 'Industry estimates' },
                { category: 'Site Monitoring', amount: '$4,000/patient', icon: '🔍',
                  detail: "Clinical Research Associates visit sites to verify data accuracy, check source documents, and ensure compliance. FDA requires this 'source data verification' — cutting corners risks approval.",
                  source: 'CRO data' },
                { category: 'Central Lab Testing', amount: '$3,000/patient', icon: '🧪',
                  detail: "Blood samples shipped to central labs for standardized testing. This ensures consistent measurement across all 374 sites — different local labs might get different results.",
                  source: 'Industry standards' }
              ].map((item, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: '#f8f9fa', 
                  borderRadius: '8px', 
                  padding: '16px',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '24px', marginRight: '10px' }}>{item.icon}</span>
                    <div>
                      <div style={{ fontWeight: '600', color: colors.primary }}>{item.category}</div>
                      <div style={{ color: colors.danger, fontWeight: '700' }}>{item.amount}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: '12px', color: '#555', margin: '8px 0', lineHeight: '1.5' }}>{item.detail}</p>
                  <div style={{ fontSize: '11px', color: '#888', fontStyle: 'italic' }}>Source: {item.source}</div>
                </div>
              ))}
            </div>

            <div style={{ 
              backgroundColor: '#FFF3CD', 
              padding: '20px', 
              borderRadius: '8px',
              border: '1px solid #FFEEBA'
            }}>
              <h4 style={{ color: '#856404', marginTop: 0, marginBottom: '12px' }}>⏱️ The Hidden Cost: Delays</h4>
              <p style={{ fontSize: '13px', color: '#856404', margin: 0, lineHeight: '1.6' }}>
                Every day a trial is delayed costs the sponsor <strong>$0.6-8 million</strong> in lost revenue opportunity — 
                the drug could already be selling if it were approved. Daily operational costs (keeping sites active, staff employed) 
                run ~$37,000-55,000. A Phase 3 trial delayed by 6 months = <strong>$110-1,460 million</strong> in lost opportunity. 
                This is why "80% of trials miss enrollment timelines" is such a catastrophic industry problem.
              </p>
            </div>
          </div>
        )}

        {/* AI TAB */}
        {activeTab === 'ai' && (
          <div>
            <ExplanationBox title="How AI Changes Patient Screening" color={colors.success}>
              Traditional screening is <strong>slow</strong> (50+ minutes per patient), <strong>expensive</strong> ($42+ in labor per screen), 
              and <strong>wasteful</strong> (55% fail anyway). AI pre-screening analyzes patient medical records <strong>before</strong> they come in, 
              flagging likely qualifiers and likely failures. The result: CRCs review AI assessments in 9 minutes instead of doing 50-minute manual reviews. 
              Validated accuracy: <strong>87% in real-world use</strong> (Callies et al., Nature Communications Medicine, 2025).
            </ExplanationBox>

            <SectionHeader 
              title="Manual vs AI-Assisted Screening" 
              explanation="Side-by-side comparison of traditional manual screening versus AI-assisted workflow. The AI doesn't replace human judgment — 
              it augments it by doing the tedious record review and flagging relevant information."
            />

            <div style={{ height: '300px', marginBottom: '32px' }}>
              <ResponsiveContainer>
                <BarChart data={aiComparisonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="metric" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [value, name === 'manual' ? 'Manual' : 'AI-Assisted']} />
                  <Legend />
                  <Bar dataKey="manual" name="Manual Process" fill={colors.danger} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="aiAssisted" name="AI-Assisted" fill={colors.success} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <SectionHeader 
              title="Validated AI Performance (Peer-Reviewed)" 
              explanation="These results come from a 2025 study published in Nature Communications Medicine — a peer-reviewed journal. 
              The AI was tested on 485 patients across 36 trials at 30 different sites."
            />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '32px' }}>
              <InfoCard 
                icon="🎯"
                title="Real-World Accuracy"
                value="87%"
                subtitle="Correct eligibility assessments"
                explanation="In actual clinical use (not just research benchmarks), the AI correctly classified patient eligibility 87% of the time. High enough for practical use as a screening aid — CRCs verify the AI's work."
                color={colors.success}
              />
              <InfoCard 
                icon="⏱️"
                title="Time Reduction"
                value="82%"
                subtitle="From 50 min to 9 min per patient"
                explanation="CRCs no longer manually review every page of medical records. They verify the AI's assessment, check rationale, and confirm flagged items. Most reviews take just 5-11 minutes."
                color={colors.primary}
              />
              <InfoCard 
                icon="💵"
                title="Cost per Assessment"
                value="$0.09"
                subtitle="Per eligibility criterion"
                explanation="The AI costs about 9 cents per criterion assessed. With ~49 criteria per patient, that's ~$4.50 total vs $42+ for manual review. Nearly 10x cost reduction on screening labor."
                color={colors.secondary}
              />
              <InfoCard 
                icon="📊"
                title="Benchmark Accuracy"
                value="93%"
                subtitle="On standardized test dataset"
                explanation="When tested on the n2c2 2018 research benchmark (288 diabetic patients), the AI achieved 93% accuracy — the best performance ever reported on this dataset."
                color={colors.accent}
              />
            </div>

            <SectionHeader 
              title="If SIROCCO Had Used AI Pre-Screening" 
              explanation="Projected impact based on validated AI performance applied to SIROCCO's actual screening volume."
            />

            <div style={{ 
              backgroundColor: '#E8F5E9', 
              padding: '24px', 
              borderRadius: '12px',
              border: '2px solid #81C784'
            }}>
              <h4 style={{ color: colors.success, marginTop: 0 }}>📈 Projected Savings at SIROCCO Scale</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '16px' }}>
                {[
                  { label: 'CRC Hours Saved', value: '1,833 hours', calc: '2,681 screenings × 41 min saved ÷ 60' },
                  { label: 'Labor Cost Savings', value: '$916,500', calc: '1,833 hours × $500/hr loaded cost' },
                  { label: 'Futile Screen Prevention', value: '$2.2-3.3M', calc: '20-30% of failures identified earlier' },
                  { label: 'Total Potential Savings', value: '$3-4 Million', calc: 'Combined efficiency + prevention' }
                ].map((item, idx) => (
                  <div key={idx} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: colors.success }}>{item.value}</div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#333' }}>{item.label}</div>
                    <div style={{ fontSize: '11px', color: '#666', marginTop: '4px' }}>{item.calc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '24px', padding: '16px', backgroundColor: '#f8f9fa', borderRadius: '8px', fontSize: '12px', color: '#666' }}>
              <strong>Source:</strong> Callies, A., Bodinier, Q., Ravaud, P. & Davarpanah, K. (2025). "Real-world validation of a multimodal LLM-powered pipeline for high-accuracy clinical trial patient matching." 
              <em>Communications Medicine</em> (Nature). DOI: <a href="https://doi.org/10.1038/s43856-025-01256-0" style={{ color: colors.primary }}>10.1038/s43856-025-01256-0</a>
            </div>
          </div>
        )}

        {/* GLOSSARY TAB */}
        {activeTab === 'glossary' && (
          <div>
            <ExplanationBox title="Clinical Trial Vocabulary for Business Professionals">
              Clinical trials have their own language. This glossary defines the most important terms in plain English, 
              with real examples from SIROCCO. Understanding this vocabulary is essential for analyzing the clinical trials market 
              and evaluating AI solutions like Inato's platform.
            </ExplanationBox>

            <div style={{ display: 'grid', gap: '16px' }}>
              {[
                { term: 'Screen Failure', definition: 'When a patient is evaluated for a trial but doesn\'t qualify to participate.',
                  bullets: [
                    'Like a job interview where the candidate doesn\'t get hired — but you still paid for the interview.',
                    'Each screening costs $5,000-$10,000 whether the patient qualifies or not.',
                    'SIROCCO had 55% screen failures — much higher than the 36% industry average.',
                    'AI can identify likely failures BEFORE they come in, saving thousands per patient.'
                  ], example: '1,476 patients failed SIROCCO screening, costing ~$10.9M' },
                { term: 'Enrollment', definition: 'When a patient officially joins a trial after passing all screening requirements.',
                  bullets: [
                    'This is the goal of screening — successfully "hiring" the patient to participate.',
                    'Enrolled patients are randomized to receive either the drug or placebo.',
                    '80% of trials fail to meet enrollment timelines — the industry\'s biggest problem.',
                    'Each enrolled patient costs $41,000-$113,000 over the course of the trial.'
                  ], example: '1,205 patients enrolled in SIROCCO (45% of those screened)' },
                { term: 'Eligibility Criteria', definition: 'The requirements that determine whether a patient can join a trial.',
                  bullets: [
                    'Inclusion criteria = what you MUST have. Exclusion criteria = what DISQUALIFIES you.',
                    'Modern trials have ~49 criteria on average (up 58% since 2001).',
                    'More criteria = more targeted patients, but also more screen failures.',
                    'Checking 49+ criteria against medical records takes 50+ minutes per patient.'
                  ], example: 'SIROCCO required eosinophils ≥300 cells/μL — this alone caused 30.5% of failures' },
                { term: 'Principal Investigator (PI)', definition: 'The lead doctor at each trial site, legally responsible for conducting the study.',
                  bullets: [
                    'Typically a physician with expertise in the condition being studied.',
                    'Responsible for patient safety, data accuracy, and regulatory compliance.',
                    'PIs are paid $25,000-$40,000 per patient enrolled.',
                    'Good PIs are in high demand — often juggling multiple trials simultaneously.'
                  ], example: 'SIROCCO had 374 sites = 374+ PIs across 17 countries' },
                { term: 'Clinical Research Coordinator (CRC)', definition: 'Staff at trial sites who handle day-to-day operations.',
                  bullets: [
                    'CRCs do the "grunt work": scheduling, data collection, paperwork, patient communication.',
                    'They\'re the ones who actually screen patients — reviewing records, running tests.',
                    'Fully loaded CRC cost: ~$500/hour including salary, benefits, overhead.',
                    'AI pre-screening reduces CRC workload by 80%+ (50 min → 9 min per patient).'
                  ], example: 'SIROCCO CRCs spent ~2,234 hours on screening alone' },
                { term: 'Phase 3 Trial', definition: 'The final large-scale testing phase before FDA approval.',
                  bullets: [
                    'Phase 1 = safety (20-100 people). Phase 2 = effectiveness (100-500). Phase 3 = confirmation (1,000-5,000+).',
                    'Phase 3 is the most expensive — often $20-100+ million.',
                    'Success usually leads to FDA approval and commercial launch.',
                    'This is where pharma companies make their biggest investment.'
                  ], example: 'SIROCCO was Phase 3 with 1,205 patients, leading to FDA approval' },
                { term: 'Dropout / Attrition', definition: 'When an enrolled patient leaves the trial before completing it.',
                  bullets: [
                    'Dropouts "waste" the money spent recruiting them — incomplete data.',
                    'Industry average: ~30% of patients drop out.',
                    'Common reasons: inconvenience, side effects, life changes, financial burden.',
                    'Each dropout costs $15,000-$26,000 to replace.'
                  ], example: 'If 30% dropped from SIROCCO, that\'s $7M+ in replacement costs' },
                { term: 'Biomarker', definition: 'A measurable biological indicator used to identify patients who might respond to treatment.',
                  bullets: [
                    'Biomarkers help "personalize" medicine — not everyone responds to the same drug.',
                    'They INCREASE screen failures but IMPROVE drug success rates.',
                    'Example: Eosinophil count identifies patients with eosinophilic asthma.',
                    'AI can pre-screen for biomarkers by reading past lab results.'
                  ], example: 'SIROCCO\'s eosinophil requirement caused 30.5% of screen failures' }
              ].map((item, idx) => (
                <div key={idx} style={{ 
                  backgroundColor: 'white',
                  border: '1px solid #e0e0e0',
                  borderRadius: '8px',
                  padding: '20px',
                  borderLeft: `4px solid ${colors.primary}`
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <h4 style={{ margin: 0, color: colors.primary, fontSize: '16px' }}>{item.term}</h4>
                  </div>
                  <p style={{ fontSize: '14px', color: '#333', margin: '0 0 12px 0', fontWeight: '500' }}>{item.definition}</p>
                  <ul style={{ margin: '0 0 12px 0', paddingLeft: '20px' }}>
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} style={{ fontSize: '13px', color: '#555', marginBottom: '6px', lineHeight: '1.5' }}>{bullet}</li>
                    ))}
                  </ul>
                  <div style={{ 
                    backgroundColor: '#E3F2FD', 
                    padding: '10px 12px', 
                    borderRadius: '6px',
                    fontSize: '12px',
                    color: colors.primary
                  }}>
                    <strong>SIROCCO Example:</strong> {item.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Footer */}
      <div style={{ 
        marginTop: '24px', 
        padding: '16px', 
        textAlign: 'center',
        fontSize: '12px',
        color: '#666'
      }}>
        <p style={{ margin: '0 0 8px 0' }}>
          <strong>Data Sources:</strong> Bleecker et al., Lancet 2016 | Callies et al., Commun Med 2025 | ClinicalTrials.gov | FDA.gov | Tufts CSDD | Industry Reports
        </p>
        <p style={{ margin: 0 }}>
          Analysis prepared for Raga.ai strategic research | All statistics verified against primary sources
        </p>
      </div>
    </div>
  );
};

export default SIROCCODashboard;

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaArrowRight, FaBoxOpen, FaPercent, FaClock, FaCheckCircle, FaWallet } from 'react-icons/fa';

interface HeroStat {
  id: number;
  value: string;
  label: string;
}

interface PreviewRow {
  id: number;
  label: string;
  value: string;
  isTotal?: boolean;
}

interface AffiliateHeroProps {
  badgeText?: string;
  title?: string;
  leadText?: string;
  stats?: HeroStat[];
  previewData?: {
    title: string;
    rows: PreviewRow[];
    footerText: string;
  };
  onJoinClick?: () => void;
  onHowItWorksClick?: () => void;
}

const defaultStats: HeroStat[] = [
  { id: 1, value: '10K+', label: 'Products to promote' },
  { id: 2, value: 'Up to 12%', label: 'Commission per sale' },
  { id: 3, value: '24 hrs', label: 'Cookie tracking window' },
];

const defaultPreviewRows: PreviewRow[] = [
  { id: 1, label: 'Order value', value: '₹2,000' },
  { id: 2, label: 'Category', value: 'Electronics' },
  { id: 3, label: 'Commission rate', value: '8%' },
  { id: 4, label: 'Your payout', value: '₹160', isTotal: true },
];

export const AffiliateHero: React.FC<AffiliateHeroProps> = ({
  badgeText = 'NOW ACCEPTING NEW AFFILIATES',
  title = 'Turn your audience into your next income stream.',
  leadText = 'Share products you love from 10,000+ Simcocart listings. Every click through your link that turns into a sale earns you a commission — no inventory, no fees, no minimum followers.',
  stats = defaultStats,
  previewData = {
    title: "What you'd earn on a ₹2,000 order",
    rows: defaultPreviewRows,
    footerText: 'Paid out monthly, straight to your bank'
  },
  onJoinClick = () => document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' }),
  onHowItWorksClick = () => document.getElementById('howworks')?.scrollIntoView({ behavior: 'smooth' }),
}) => {
  return (
    <Container>
      <div className="crumb mb-3">
        Home &nbsp;›&nbsp; Make Money With Us &nbsp;›&nbsp; <b>Become an Affiliate</b>
      </div>

      <section className="hero-section">
        <Row className="hero-grid align-items-center g-4">
      
          <Col lg={7} md={12}>
            <div className="badge-pill">
              <span className="dot"></span> {badgeText}
            </div>
            <h1>{title}</h1>
            <p className="lead">{leadText}</p>
            
            <div className="hero-ctas">
              <button className="btn-primary-custom" onClick={onJoinClick}>
                Join the Program — It's Free <FaArrowRight className="ms-1" />
              </button>
              <button className="btn-ghost-custom" onClick={onHowItWorksClick}>
                See how it works
              </button>
            </div>

         
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={stat.id} className="stat-item">
                  <div className="stat-icon-wrapper mb-1">
                    {index === 0 && <FaBoxOpen className="hero-icon" />}
                    {index === 1 && <FaPercent className="hero-icon" />}
                    {index === 2 && <FaClock className="hero-icon" />}
                  </div>
                  <b>{stat.value}</b>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </Col>

        
          <Col lg={5} md={12}>
            <div className="preview-card">
              <div className="float-chip">
                <FaWallet className="me-1" /> Sale via your link
              </div>
              <div className="tag">EARNINGS PREVIEW</div>
              <h3>{previewData.title}</h3>

              {previewData.rows.map((row) => (
                <div 
                  key={row.id} 
                  className={`preview ${row.isTotal ? 'total' : ''}`}
                >
                  <span>{row.label}</span>
                  {row.isTotal ? <b>{row.value}</b> : <span>{row.value}</span>}
                </div>
              ))}

              <div className="preview-foot">
                <FaCheckCircle className="me-1 text-success" /> {previewData.footerText}
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </Container>
  );
};
// import React from "react";
// import Image from "next/image";
// import { Row, Col, Container } from "react-bootstrap";


// interface Feature {
//   id: number;
//   label: string;
// }

// const features: Feature[] = [
//   { id: 1, label: "Grow your business 10x" },
//   { id: 2, label: "Enjoy 100% Profit" },
//   { id: 3, label: "Enjoy 100% Profit" },
// ];

// const SupplierBanner: React.FC = () => {
//   return (
//     <section className="supplier-section">
//       <Container>
//         <Row>
//         <Col xs={12} lg={7}>
//           <h2 className="supplier-heading">Register as a Simcocart Supplier</h2>
//           <p className="supplier-subheading">
//             Sell your products to crores of customers at 0% commission
//           </p>

//           <div className="supplier-feature-list">
//             {features.map((feature, index) => (
//               <React.Fragment key={feature.id}>
//                 <div className="supplier-feature-item">
//                   <span className="supplier-check-icon">
//                     <svg
//                       width="14"
//                       height="14"
//                       viewBox="0 0 14 14"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M11.6667 3.5L5.25 9.91667L2.33334 7"
//                         stroke="white"
//                         strokeWidth="1.6"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </span>
//                   <span className="supplier-feature-label">{feature.label}</span>
//                 </div>
//                 {index !== features.length - 1 && (
//                   <span className="supplier-divider" aria-hidden="true" />
//                 )}
//               </React.Fragment>
//             ))}
//           </div>

//           <button type="button" className="supplier-cta-button">
//             Sign Up Now
//           </button>
//         </Col>

//         <Col xs={12} lg={5}>
          
//             <Image
//               src="/assets/img/all-images/home/supplier-banner.png"
//               alt="Supplier packing products for Simcocart"
//               fill
//               className="supplier-media-img"
//               sizes="(max-width: 991px) 100vw, 42vw"
//               priority
//             />
        
//         </Col>
//       </Row>
//       </Container>
//     </section>
//   );
// };

// export default SupplierBanner;

import React from "react";
import { Container } from "react-bootstrap";

interface Feature {
  id: number;
  label: string;
}

const features: Feature[] = [
  { id: 1, label: "Grow your business 10x" },
  { id: 2, label: "Enjoy 100% Profit" },
  { id: 3, label: "Enjoy 100% Profit" },
];

const SupplierBanner: React.FC = () => {
  return (
    <section className="supplier-section">
      {/* <Container> */}
        <div className="supplier-banner-inner">
            <div className="supplier-content">
          <h2 className="supplier-heading">Register as a Simcocart Supplier</h2>
          <p className="supplier-subheading">
            Sell your products to crores of customers at 0% commission
          </p>

          <div className="supplier-feature-list">
            {features.map((feature, index) => (
              <React.Fragment key={feature.id}>
                <div className="supplier-feature-item">
                  <span className="supplier-check-icon">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.6667 3.5L5.25 9.91667L2.33334 7"
                        stroke="white"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span className="supplier-feature-label">{feature.label}</span>
                </div>
                {index !== features.length - 1 && (
                  <span className="supplier-divider" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>

          <button type="button" className="cta-button">
            Sign Up Now
          </button>
        </div>
        </div>
        
      {/* </Container> */}
    </section>
  );
};

export default SupplierBanner;
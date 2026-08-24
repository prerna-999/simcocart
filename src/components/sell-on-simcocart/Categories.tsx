// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import {
//   GiTShirt,
//   GiConverseShoe,
//   GiFruitBowl,
//   GiCookingPot,
//   GiPresent,
// } from "react-icons/gi";
// import { FaTshirt, FaMobileAlt, FaLaptop, FaBook } from "react-icons/fa";
// import { MdOutlineToys, MdOutlineFace3, MdOutlineHome } from "react-icons/md";

// interface CategoryItem {
//   id: number;
//   icon: React.ReactNode;
//   label: string;
// }

// const categories: CategoryItem[] = [
//   { id: 1, icon: <FaTshirt />, label: "Men Clothing" },
//   { id: 2, icon: <GiTShirt />, label: "Women Clothing" },
//   { id: 3, icon: <FaMobileAlt />, label: "Electronics" },
//   { id: 4, icon: <MdOutlineToys />, label: "Toys & Stationery" },
//   { id: 5, icon: <GiConverseShoe />, label: "Footwear" },
//   { id: 6, icon: <MdOutlineFace3 />, label: "Beauty & Wellness" },
//   { id: 7, icon: <GiFruitBowl />, label: "Groceries" },
//   { id: 8, icon: <GiCookingPot />, label: "Home & Kitchen" },
//   { id: 9, icon: <GiPresent />, label: "Gift Ideas" },
//   { id: 10, icon: <FaBook />, label: "Books" },
//   { id: 11, icon: <FaLaptop />, label: "Computers" },
//   { id: 12, icon: <MdOutlineHome />, label: "Home Essentials" },
// ];

// const Categories: React.FC = () => {
//   return (
//     <section className="categories">
//       <Container>
//         <div className="sec-head">
//           <div className="sec-eyebrow">Popular With Sellers</div>
//           <h2>Sell in categories shoppers are already buying</h2>
//         </div>
//         <Row className="cat-grid-row">
//           {categories.map((cat) => (
//             <Col lg={2} md={4} sm={4} xs={6} className="cat-grid-col" key={cat.id}>
//               <div className="cat-item">
//                 <div className="cat-item-icon">{cat.icon}</div>
//                 {cat.label}
//               </div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Categories;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  GiTShirt,
  GiConverseShoe,
  GiFruitBowl,
  GiCookingPot,
  GiPresent,
} from "react-icons/gi";

import {
  FaTshirt,
  FaMobileAlt,
  FaLaptop,
  FaBook,
} from "react-icons/fa";

import {
  MdOutlineToys,
  MdOutlineFace3,
  MdOutlineHome,
} from "react-icons/md";

interface CategoryItem {
  id: number;
  icon: React.ReactNode;
  label: string;
  color: string;
}

const categories: CategoryItem[] = [
  {
    id: 1,
    icon: <FaTshirt />,
    label: "Men Clothing",
    color: "#2563EB",
  },
  {
    id: 2,
    icon: <GiTShirt />,
    label: "Women Clothing",
    color: "#EC4899",
  },
  {
    id: 3,
    icon: <FaMobileAlt />,
    label: "Electronics",
    color: "#7C3AED",
  },
  {
    id: 4,
    icon: <MdOutlineToys />,
    label: "Toys & Stationery",
    color: "#F59E0B",
  },
  {
    id: 5,
    icon: <GiConverseShoe />,
    label: "Footwear",
    color: "#EA580C",
  },
  {
    id: 6,
    icon: <MdOutlineFace3 />,
    label: "Beauty & Wellness",
    color: "#DB2777",
  },
  {
    id: 7,
    icon: <GiFruitBowl />,
    label: "Groceries",
    color: "#16A34A",
  },
  {
    id: 8,
    icon: <GiCookingPot />,
    label: "Home & Kitchen",
    color: "#0891B2",
  },
  {
    id: 9,
    icon: <GiPresent />,
    label: "Gift Ideas",
    color: "#DC2626",
  },
  {
    id: 10,
    icon: <FaBook />,
    label: "Books",
    color: "#9333EA",
  },
  {
    id: 11,
    icon: <FaLaptop />,
    label: "Computers",
    color: "#0284C7",
  },
  {
    id: 12,
    icon: <MdOutlineHome />,
    label: "Home Essentials",
    color: "#65A30D",
  },
];

const Categories: React.FC = () => {
  return (
    <section className="categories">
      <Container>
        <div className="sec-head">
          <div className="sec-eyebrow">
            Popular With Sellers
          </div>

          <h2>
            Sell in categories shoppers are already buying
          </h2>
        </div>

        <Row className="cat-grid-row">
          {categories.map((cat) => (
            <Col
              lg={2}
              md={4}
              sm={4}
              xs={6}
              className="cat-grid-col"
              key={cat.id}
            >
              <div className="cat-item">
                <div
                  className="cat-item-icon"
                  style={{ color: cat.color }}
                >
                  {cat.icon}
                </div>

                <div className="cat-item-label">
                  {cat.label}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Categories;
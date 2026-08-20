import React, { useState } from "react";
import HelpCenter from "./Help-Center";
import HelpCenter2 from "./Help-Center2";
import HelpCenter3 from "./Help-Center3";
import HelpCenter4 from "./Help-Center4";

const HelpCenterPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openFaqId, setOpenFaqId] = useState<string | null>("f1");

  const handleCategoryClick = (id: string) => {
    setActiveCategory((prev) => (prev === id ? "all" : id));
    setOpenFaqId(null);
  };

  return (
    <main className="help">
      <HelpCenter query={query} setQuery={setQuery} />
      <HelpCenter2 activeCategory={activeCategory} onCategoryClick={handleCategoryClick} />
      <HelpCenter3
        query={query}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        openFaqId={openFaqId}
        setOpenFaqId={setOpenFaqId}
      />
      <HelpCenter4 />
    </main>
  );
};

export default HelpCenterPage;
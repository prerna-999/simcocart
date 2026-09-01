import { Container, Table } from "react-bootstrap";


const rates = [
  { category: "Fashion & Apparel", window: "24 hrs", commission: "10%" },
  { category: "Beauty & Wellness", window: "24 hrs", commission: "12%" },
  { category: "Footwear", window: "24 hrs", commission: "9%" },
  { category: "Electronics & Computers", window: "24 hrs", commission: "8%" },
  { category: "Home & Kitchen", window: "24 hrs", commission: "6%" },
  { category: "Groceries & Essentials", window: "24 hrs", commission: "4%" },
];

export default function RatesSection() {
  return (
    <section className="rates-section">
      <Container>
        <div className="section-head text-center mx-auto">
          <span className="eyebrow">Rate card</span>
          <h2 className="section-title">No surprises at payout</h2>
          <p className="section-sub mx-auto">
            Commission is calculated on the order subtotal at the time of
            purchase, before taxes and shipping.
          </p>
        </div>

        <div className="rates-table-card">
          <div className="table-responsive">
            <Table className="rates-table mb-0">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Cookie window</th>
                  <th className="text-end">Commission</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((row) => (
                  <tr key={row.category}>
                    <td>{row.category}</td>
                    <td>{row.window}</td>
                    <td className="text-end commission-cell">
                      {row.commission}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>
    </section>
  );
}
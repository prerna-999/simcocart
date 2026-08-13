
'use client';
import { useState } from 'react';
import { X } from 'lucide-react';

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterConfig {
  key: string;
  label: string;
  type: 'checkbox' | 'radio' | 'range';
  options?: FilterOption[];
}

export const productFilters: FilterConfig[] = [
  { key: 'category', label: 'Category', type: 'checkbox', options: [] },
  {
    key: 'gender',
    label: 'Gender',
    type: 'checkbox',
    options: [
      { value: 'men', label: 'Men' },
      { value: 'women', label: 'Women' },
      { value: 'kids', label: 'Kids' },
    ],
  },
  { key: 'color', label: 'Color', type: 'checkbox', options: [] },
  { key: 'fabric', label: 'Fabric', type: 'checkbox', options: [] },
  { key: 'dialShape', label: 'Dial Shape', type: 'checkbox', options: [] },
  { key: 'size', label: 'Size', type: 'checkbox', options: [] },
  { key: 'price', label: 'Price', type: 'range' },
  {
    key: 'rating',
    label: 'Rating',
    type: 'checkbox',
    options: [
      { value: '4', label: '4★ & above' },
      { value: '3', label: '3★ & above' },
    ],
  },
  { key: 'kurtaFabric', label: 'Kurta Fabric', type: 'checkbox', options: [] },
  { key: 'dupattaColor', label: 'Dupatta Color', type: 'checkbox', options: [] },
  { key: 'combo', label: 'Combo', type: 'checkbox', options: [] },
  {
    key: 'discount',
    label: 'Discount',
    type: 'checkbox',
    options: [
      { value: '10', label: '10% and above' },
      { value: '20', label: '20% and above' },
      { value: '30', label: '30% and above' },
      { value: '50', label: '50% and above' },
    ],
  },
  {
    key: 'reversible',
    label: 'Reversible',
    type: 'checkbox',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
  { key: 'usedFor', label: 'Used For', type: 'checkbox', options: [] },
  {
    key: 'smartcoins',
    label: 'Smart Coins',
    type: 'checkbox',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
  { key: 'bodyMaterial', label: 'Body Material', type: 'checkbox', options: [] },
  { key: 'fitShape', label: 'Fit/ Shape', type: 'checkbox', options: [] },
  { key: 'bottomLength', label: 'Bottom Length', type: 'checkbox', options: [] },
  { key: 'brand', label: 'Brand', type: 'checkbox', options: [] },
  {
    key: 'waistRise',
    label: 'Waist Rise',
    type: 'checkbox',
    options: [
      { value: 'low', label: 'Low Rise' },
      { value: 'mid', label: 'Mid Rise' },
      { value: 'high', label: 'High Rise' },
    ],
  },
  { key: 'bottomStyle', label: 'Bottom Style', type: 'checkbox', options: [] },
  { key: 'border', label: 'Border', type: 'checkbox', options: [] },
];

interface FilterPanelProps {
  filters: FilterConfig[];
  activeFilters: Record<string, string[]>;
  onFilterChange: (key: string, value: string, checked: boolean) => void;
  onClearAll?: () => void;
  productCount?: string;
  className?: string;
  onClose?: () => void;
}

export default function FilterPanel({
  filters,
  activeFilters,
  onFilterChange,
  onClearAll,
  productCount = '1000+ Products',
  className = '',
  onClose,
}: FilterPanelProps) {
  const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());

  const toggleGroup = (key: string) => {
    setExpandedKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };

  return (
    <aside className={`filter-panel-container ${className}`}>
      <div className="filter-panel-header">
        <div>
          <h3 className="filter-panel-title">FILTERS</h3>
          <span className="filter-panel-count">{productCount}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {onClearAll && (
            <button className="filter-panel-clear-btn" onClick={onClearAll}>
              CLEAR ALL
            </button>
          )}
          {onClose && (
            <button
              className="filter-panel-close-btn"
              onClick={onClose}
              aria-label="Close filters"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </div>

      {filters.map((filter) => {
        const isOpen = expandedKeys.has(filter.key);
        return (
          <div key={filter.key} className="filter-panel-group">
            <h4
              className="filter-panel-group-title"
              onClick={() => toggleGroup(filter.key)}
            >
              {filter.label}
              <span
                className={`filter-panel-chevron ${
                  isOpen ? 'filter-panel-chevron-open' : ''
                }`}
              >
                ▾
              </span>
            </h4>

            {isOpen && (
              <div className="filter-panel-group-body">
                {filter.type === 'checkbox' &&
                  filter.options?.map((option) => {
                    const isChecked =
                      activeFilters[filter.key]?.includes(option.value) ?? false;
                    return (
                      <label key={option.value} className="filter-panel-option">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) =>
                            onFilterChange(filter.key, option.value, e.target.checked)
                          }
                          className="filter-panel-checkbox"
                        />
                        <span className="filter-panel-option-label">
                          {option.label}
                        </span>
                      </label>
                    );
                  })}

                {filter.type === 'radio' &&
                  filter.options?.map((option) => {
                    const isChecked = activeFilters[filter.key]?.[0] === option.value;
                    return (
                      <label key={option.value} className="filter-panel-option">
                        <input
                          type="radio"
                          name={filter.key}
                          checked={isChecked}
                          onChange={() => onFilterChange(filter.key, option.value, true)}
                          className="filter-panel-radio"
                        />
                        <span className="filter-panel-option-label">
                          {option.label}
                        </span>
                      </label>
                    );
                  })}

                {filter.type === 'range' && (
                  <div className="filter-panel-range">
                    <input
                      type="number"
                      placeholder="Min"
                      value={
                        activeFilters[filter.key]
                          ?.find((v) => v.startsWith('min:'))
                          ?.replace('min:', '') ?? ''
                      }
                      onChange={(e) =>
                        onFilterChange(filter.key, `min:${e.target.value}`, true)
                      }
                      className="filter-panel-range-input"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={
                        activeFilters[filter.key]
                          ?.find((v) => v.startsWith('max:'))
                          ?.replace('max:', '') ?? ''
                      }
                      onChange={(e) =>
                        onFilterChange(filter.key, `max:${e.target.value}`, true)
                      }
                      className="filter-panel-range-input"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      {onClose && (
        <div className="filter-panel-footer">
          <button className="filter-panel-apply-btn" onClick={onClose}>
            Apply Filters
          </button>
        </div>
      )}
    </aside>
  );
}
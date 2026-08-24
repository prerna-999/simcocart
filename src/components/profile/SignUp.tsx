"use client";

import { useState } from "react";

export interface SignupFormValues {
  fullName: string;
  email: string;
  password: string;
  agreeTerms: boolean;
}

export interface SignupFormProps {
  values: SignupFormValues;
  onChange: (values: SignupFormValues) => void;
  onSubmit: (values: SignupFormValues) => void;
  loading?: boolean;
  error?: string;
}

export default function SignupForm({
  values,
  onChange,
  onSubmit,
  loading,
  error,
}: SignupFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-head">
        <h2>Create your account</h2>
        <p>Join 10K+ shoppers getting fresh deals daily.</p>
      </div>

      {error && <div className="auth-error">{error}</div>}

      <div className="field-group">
        <label htmlFor="signup-name">Full name</label>
        <div className="field-box">
          <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
          </svg>
          <input
            id="signup-name"
            type="text"
            required
            placeholder="Your full name"
            value={values.fullName}
            onChange={(e) =>
              onChange({ ...values, fullName: e.target.value })
            }
          />
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="signup-email">Email address</label>
        <div className="field-box">
          <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 6l10 7 10-7" />
          </svg>
          <input
            id="signup-email"
            type="email"
            required
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => onChange({ ...values, email: e.target.value })}
          />
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="signup-password">Password</label>
        <div className="field-box">
          <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="10" width="16" height="10" rx="2" />
            <path d="M8 10V7a4 4 0 018 0v3" />
          </svg>
          <input
            id="signup-password"
            type={showPassword ? "text" : "password"}
            required
            minLength={8}
            placeholder="Create a password"
            value={values.password}
            onChange={(e) =>
              onChange({ ...values, password: e.target.value })
            }
          />
          <button
            type="button"
            className="toggle-eye"
            onClick={() => setShowPassword((p) => !p)}
            aria-label="Toggle password visibility"
          >
            {showPassword ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17.94 17.94A10.94 10.94 0 0112 19c-7 0-11-7-11-7a20.3 20.3 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 7 11 7a20.29 20.29 0 01-3.34 4.36M14.12 14.12a3 3 0 11-4.24-4.24" />
                <path d="M1 1l22 22" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="row-between" style={{ marginTop: 2 }}>
        <label className="remember">
          <input
            type="checkbox"
            required
            checked={values.agreeTerms}
            onChange={(e) =>
              onChange({ ...values, agreeTerms: e.target.checked })
            }
          />
          I agree to <a href="/terms">Terms &amp; Privacy</a>
        </label>
      </div>

      <button type="submit" className="btn-primary" disabled={loading}>
        {loading ? "Creating account..." : "Create account"}
      </button>
    </form>
  );
}
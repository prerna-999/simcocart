"use client";

import { useState } from "react";

export interface LoginFormValues {
  email: string;
  password: string;
  remember: boolean;
}

export interface LoginFormProps {
  values: LoginFormValues;
  onChange: (values: LoginFormValues) => void;
  onSubmit: (values: LoginFormValues) => void;
  loading?: boolean;
  error?: string;
}

export default function LoginForm({
  values,
  onChange,
  onSubmit,
  loading,
  error,
}: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(values);
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-head">
        <h2>Welcome back</h2>
        <p>Log in to continue shopping fresh essentials.</p>
      </div>

      {error && <div className="auth-error">{error}</div>}

      <div className="field-group">
        <label htmlFor="login-email">Email address</label>
        <div className="field-box">
          <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 6l10 7 10-7" />
          </svg>
          <input
            id="login-email"
            type="email"
            required
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => onChange({ ...values, email: e.target.value })}
          />
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="login-password">Password</label>
        <div className="field-box">
          <svg className="field-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="4" y="10" width="16" height="10" rx="2" />
            <path d="M8 10V7a4 4 0 018 0v3" />
          </svg>
          <input
            id="login-password"
            type={showPassword ? "text" : "password"}
            required
            placeholder="Enter your password"
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

      <div className="row-between">
        <label className="remember">
          <input
            type="checkbox"
            checked={values.remember}
            onChange={(e) =>
              onChange({ ...values, remember: e.target.checked })
            }
          />
          Remember me
        </label>
        <a href="/forgot-password">Forgot password?</a>
      </div>

      <button type="submit" className="btn-primary" disabled={loading}>
        {loading ? "Logging in..." : "Log in"}
      </button>
    </form>
  );
}
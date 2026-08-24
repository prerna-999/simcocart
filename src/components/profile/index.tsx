"use client";

import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm, { LoginFormValues } from "./Login";
import SignupForm, { SignupFormValues } from "./SignUp";

type AuthMode = "login" | "signup";

interface SocialProvider {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const socialProviders: SocialProvider[] = [
  {
    id: "google",
    label: "Google",
    icon: (
      <svg viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.6 6 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.4-.4-3.5z" />
        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.9 19 13 24 13c3 0 5.8 1.1 7.9 3l5.7-5.7C34.6 6 29.6 4 24 4 16 4 9.1 8.4 6.3 14.7z" />
        <path fill="#4CAF50" d="M24 44c5.4 0 10.4-2 14.2-5.4l-6.6-5.5C29.4 34.8 26.8 36 24 36c-5.3 0-9.7-3.4-11.3-8l-6.6 5.1C9 39.6 15.9 44 24 44z" />
        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4.1 5.6l6.6 5.5C41.7 35.9 44 30.4 44 24c0-1.2-.1-2.4-.4-3.5z" />
      </svg>
    ),
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="#1877F2">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.96.93-1.96 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.09 24 18.1 24 12.07z" />
      </svg>
    ),
  },
];

const tabs: { key: AuthMode; label: string }[] = [
  { key: "login", label: "Log in" },
  { key: "signup", label: "Sign up" },
];

export interface AuthPageProps {
  defaultMode?: AuthMode;
  onLogin?: (values: LoginFormValues) => Promise<void> | void;
  onSignup?: (values: SignupFormValues) => Promise<void> | void;
  onSocialLogin?: (providerId: string) => void;
}

const initialLogin: LoginFormValues = {
  email: "",
  password: "",
  remember: false,
};

const initialSignup: SignupFormValues = {
  fullName: "",
  email: "",
  password: "",
  agreeTerms: false,
};

export default function AuthPage({
  defaultMode = "login",
  onLogin,
  onSignup,
  onSocialLogin,
}: AuthPageProps) {
  const [mode, setMode] = useState<AuthMode>(defaultMode);
  const [loginValues, setLoginValues] = useState<LoginFormValues>(initialLogin);
  const [signupValues, setSignupValues] =
    useState<SignupFormValues>(initialSignup);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  const handleModeChange = (next: AuthMode) => {
    setMode(next);
    setError("");
  };

  const handleLoginSubmit = async (values: LoginFormValues) => {
    setError("");
    setLoading(true);
    try {
      await onLogin?.(values);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignupSubmit = async (values: SignupFormValues) => {
    setError("");
    if (!values.agreeTerms) {
      setError("Please accept the Terms & Privacy Policy.");
      return;
    }
    setLoading(true);
    try {
      await onSignup?.(values);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Sign up failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="auth-section">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={5} xl={4}>
            <div className="auth-card">
             
              <div className="auth-card-body">
                <div className="auth-tabs">
                  {tabs.map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      className={`auth-tab-btn ${
                        mode === tab.key ? "active" : ""
                      }`}
                      onClick={() => handleModeChange(tab.key)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {mode === "login" ? (
                  <LoginForm
                    values={loginValues}
                    onChange={setLoginValues}
                    onSubmit={handleLoginSubmit}
                    loading={loading}
                    error={error}
                  />
                ) : (
                  <SignupForm
                    values={signupValues}
                    onChange={setSignupValues}
                    onSubmit={handleSignupSubmit}
                    loading={loading}
                    error={error}
                  />
                )}

                <div className="auth-divider">or continue with</div>
                <Row className="g-2 social-row">
                  {socialProviders.map((provider) => (
                    <Col xs={6} key={provider.id}>
                      <button
                        type="button"
                        className="social-btn"
                        onClick={() => onSocialLogin?.(provider.id)}
                      >
                        {provider.icon}
                        <span>{provider.label}</span>
                      </button>
                    </Col>
                  ))}
                </Row>

                <p className="switch-text">
                  {mode === "login" ? (
                    <>
                      New to Simcocart?{" "}
                      <a onClick={() => handleModeChange("signup")}>
                        Create an account
                      </a>
                    </>
                  ) : (
                    <>
                      Already have an account?{" "}
                      <a onClick={() => handleModeChange("login")}>Log in</a>
                    </>
                  )}
                </p>
              </div>

              <div className="auth-trust-line">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z" />
                </svg>
                <span>256-bit SSL secured</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
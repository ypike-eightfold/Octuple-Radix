import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormV2 } from '../components/FormV2';
import { InputV2 } from '../components/InputV2';
import { TextAreaV2 } from '../components/TextAreaV2';
import { SelectV2 } from '../components/SelectV2';
import { CheckboxV2 } from '../components/CheckboxV2';
import { ButtonV2 } from '../components/ButtonV2';

const meta: Meta<typeof FormV2> = {
  title: 'Octuple V2.5/FormV2',
  component: FormV2,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A simplified form component built with Radix UI primitives for accessible form validation and submission.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormV2>;

// ==================== Basic Stories ====================

export const Vertical: Story = {
  render: () => {
    const [formData, setFormData] = useState<Record<string, any>>({});

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const values = Object.fromEntries(data.entries());
      setFormData(values);
      console.log('Form submitted:', values);
    };

    return (
      <div style={{ maxWidth: '500px' }}>
        <FormV2 layout="vertical" onSubmit={handleSubmit}>
          <FormV2.Item
            name="email"
            label="Email"
            required
            requiredMessage="Please enter your email"
          >
            <InputV2 type="email" placeholder="Enter your email" />
          </FormV2.Item>

          <FormV2.Item
            name="password"
            label="Password"
            required
            minLength={8}
            requiredMessage="Please enter your password"
            minLengthMessage="Password must be at least 8 characters"
          >
            <InputV2 type="password" placeholder="Enter your password" />
          </FormV2.Item>

          <ButtonV2 type="submit" variant="primary">
            Submit
          </ButtonV2>
        </FormV2>

        {Object.keys(formData).length > 0 && (
          <div style={{ marginTop: '20px', padding: '12px', background: '#f0f0f0', borderRadius: '8px' }}>
            <strong>Form Data:</strong>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
          </div>
        )}
      </div>
    );
  },
};

export const Horizontal: Story = {
  render: () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log('Form submitted:', Object.fromEntries(data.entries()));
    };

    return (
      <div style={{ maxWidth: '700px' }}>
        <FormV2 layout="horizontal" onSubmit={handleSubmit}>
          <FormV2.Item name="username" label="Username" required>
            <InputV2 placeholder="Enter username" />
          </FormV2.Item>

          <FormV2.Item name="email" label="Email" required>
            <InputV2 type="email" placeholder="Enter email" />
          </FormV2.Item>

          <FormV2.Item name="bio" label="Bio" help="Tell us about yourself">
            <TextAreaV2 placeholder="Write your bio..." rows={4} />
          </FormV2.Item>

          <div style={{ marginLeft: '196px' }}>
            <ButtonV2 type="submit" variant="primary">
              Submit
            </ButtonV2>
          </div>
        </FormV2>
      </div>
    );
  },
};

export const Inline: Story = {
  render: () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log('Search:', Object.fromEntries(data.entries()));
    };

    return (
      <FormV2 layout="inline" onSubmit={handleSubmit}>
        <FormV2.Item name="search" label="Search">
          <InputV2 placeholder="Search..." />
        </FormV2.Item>

        <FormV2.Item name="category" label="Category">
          <SelectV2 placeholder="Select category">
            <SelectV2.Option value="all">All</SelectV2.Option>
            <SelectV2.Option value="docs">Documentation</SelectV2.Option>
            <SelectV2.Option value="blogs">Blogs</SelectV2.Option>
          </SelectV2>
        </FormV2.Item>

        <ButtonV2 type="submit" variant="primary">
          Search
        </ButtonV2>
      </FormV2>
    );
  },
};

// ==================== Validation Stories ====================

export const Required_Fields: Story = {
  render: () => {
    return (
      <div style={{ maxWidth: '500px' }}>
        <FormV2 layout="vertical">
          <FormV2.Item
            name="name"
            label="Full Name"
            required
            requiredMessage="Name is required"
          >
            <InputV2 placeholder="John Doe" />
          </FormV2.Item>

          <FormV2.Item
            name="email"
            label="Email Address"
            required
            requiredMessage="Email is required"
          >
            <InputV2 type="email" placeholder="john@example.com" />
          </FormV2.Item>

          <FormV2.Item name="phone" label="Phone Number (Optional)">
            <InputV2 type="tel" placeholder="+1 (555) 123-4567" />
          </FormV2.Item>

          <ButtonV2 type="submit" variant="primary">
            Submit
          </ButtonV2>
        </FormV2>

        <p style={{ marginTop: '16px', fontSize: '14px', color: '#666' }}>
          Try submitting without filling required fields to see validation
        </p>
      </div>
    );
  },
};

export const Pattern_Validation: Story = {
  render: () => {
    return (
      <div style={{ maxWidth: '500px' }}>
        <FormV2 layout="vertical">
          <FormV2.Item
            name="username"
            label="Username"
            required
            pattern="^[a-zA-Z0-9_]{3,20}$"
            patternMessage="Username must be 3-20 characters (letters, numbers, underscores only)"
            help="3-20 characters, letters, numbers, and underscores"
          >
            <InputV2 placeholder="john_doe123" />
          </FormV2.Item>

          <FormV2.Item
            name="zipcode"
            label="ZIP Code"
            pattern="^\d{5}(-\d{4})?$"
            patternMessage="Must be a valid 5-digit ZIP code"
            help="e.g., 12345 or 12345-6789"
          >
            <InputV2 placeholder="12345" />
          </FormV2.Item>

          <ButtonV2 type="submit" variant="primary">
            Submit
          </ButtonV2>
        </FormV2>
      </div>
    );
  },
};

export const Length_Validation: Story = {
  render: () => {
    return (
      <div style={{ maxWidth: '500px' }}>
        <FormV2 layout="vertical">
          <FormV2.Item
            name="password"
            label="Password"
            required
            minLength={8}
            maxLength={20}
            minLengthMessage="Password must be at least 8 characters"
            maxLengthMessage="Password cannot exceed 20 characters"
            help="8-20 characters"
          >
            <InputV2 type="password" placeholder="Enter password" />
          </FormV2.Item>

          <FormV2.Item
            name="bio"
            label="Bio"
            maxLength={200}
            maxLengthMessage="Bio cannot exceed 200 characters"
            help="Maximum 200 characters"
          >
            <TextAreaV2 placeholder="Tell us about yourself..." rows={4} />
          </FormV2.Item>

          <ButtonV2 type="submit" variant="primary">
            Submit
          </ButtonV2>
        </FormV2>
      </div>
    );
  },
};

// ==================== Complex Form Stories ====================

export const Registration_Form: Story = {
  render: () => {
    const [agreed, setAgreed] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log('Registration:', Object.fromEntries(data.entries()));
      alert('Registration successful!');
    };

    return (
      <div style={{ maxWidth: '600px' }}>
        <h2 style={{ marginBottom: '24px' }}>Create Account</h2>
        <FormV2 layout="vertical" onSubmit={handleSubmit}>
          <FormV2.Item
            name="firstName"
            label="First Name"
            required
            requiredMessage="First name is required"
          >
            <InputV2 placeholder="John" />
          </FormV2.Item>

          <FormV2.Item
            name="lastName"
            label="Last Name"
            required
            requiredMessage="Last name is required"
          >
            <InputV2 placeholder="Doe" />
          </FormV2.Item>

          <FormV2.Item
            name="email"
            label="Email"
            required
            requiredMessage="Email is required"
          >
            <InputV2 type="email" placeholder="john.doe@example.com" />
          </FormV2.Item>

          <FormV2.Item
            name="password"
            label="Password"
            required
            minLength={8}
            requiredMessage="Password is required"
            minLengthMessage="Password must be at least 8 characters"
            help="At least 8 characters"
          >
            <InputV2 type="password" placeholder="••••••••" />
          </FormV2.Item>

          <FormV2.Item
            name="country"
            label="Country"
            required
            requiredMessage="Please select a country"
          >
            <SelectV2 placeholder="Select your country">
              <SelectV2.Option value="us">United States</SelectV2.Option>
              <SelectV2.Option value="uk">United Kingdom</SelectV2.Option>
              <SelectV2.Option value="ca">Canada</SelectV2.Option>
              <SelectV2.Option value="au">Australia</SelectV2.Option>
            </SelectV2>
          </FormV2.Item>

          <div style={{ marginTop: '16px' }}>
            <CheckboxV2 checked={agreed} onChange={setAgreed}>
              I agree to the Terms of Service and Privacy Policy
            </CheckboxV2>
          </div>

          <div style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
            <ButtonV2 type="submit" variant="primary" disabled={!agreed}>
              Create Account
            </ButtonV2>
            <ButtonV2 type="button" variant="neutral">
              Cancel
            </ButtonV2>
          </div>
        </FormV2>
      </div>
    );
  },
};

export const Contact_Form: Story = {
  render: () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log('Contact form:', Object.fromEntries(data.entries()));
      alert('Message sent successfully!');
    };

    return (
      <div style={{ maxWidth: '700px' }}>
        <h2 style={{ marginBottom: '24px' }}>Contact Us</h2>
        <FormV2 layout="horizontal" onSubmit={handleSubmit}>
          <FormV2.Item
            name="name"
            label="Your Name"
            required
            requiredMessage="Name is required"
          >
            <InputV2 placeholder="John Doe" />
          </FormV2.Item>

          <FormV2.Item
            name="email"
            label="Email"
            required
            requiredMessage="Email is required"
          >
            <InputV2 type="email" placeholder="john@example.com" />
          </FormV2.Item>

          <FormV2.Item
            name="subject"
            label="Subject"
            required
            requiredMessage="Subject is required"
          >
            <InputV2 placeholder="Inquiry about..." />
          </FormV2.Item>

          <FormV2.Item
            name="message"
            label="Message"
            required
            minLength={10}
            requiredMessage="Message is required"
            minLengthMessage="Message must be at least 10 characters"
            help="Tell us how we can help you"
          >
            <TextAreaV2 placeholder="Write your message..." rows={6} />
          </FormV2.Item>

          <div style={{ marginLeft: '196px', display: 'flex', gap: '12px' }}>
            <ButtonV2 type="submit" variant="primary">
              Send Message
            </ButtonV2>
            <ButtonV2 type="reset" variant="neutral">
              Reset
            </ButtonV2>
          </div>
        </FormV2>
      </div>
    );
  },
};

export const Login_Form: Story = {
  render: () => {
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log('Login:', Object.fromEntries(data.entries()));
    };

    return (
      <div style={{ maxWidth: '400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h2>Sign In</h2>
          <p style={{ color: '#666', fontSize: '14px' }}>Welcome back! Please sign in to continue.</p>
        </div>

        <FormV2 layout="vertical" onSubmit={handleSubmit}>
          <FormV2.Item
            name="email"
            label="Email"
            required
            requiredMessage="Email is required"
          >
            <InputV2 type="email" placeholder="your@email.com" size="large" />
          </FormV2.Item>

          <FormV2.Item
            name="password"
            label="Password"
            required
            requiredMessage="Password is required"
          >
            <InputV2 type="password" placeholder="••••••••" size="large" />
          </FormV2.Item>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
            <CheckboxV2 checked={rememberMe} onChange={setRememberMe}>
              Remember me
            </CheckboxV2>
            <a href="#" style={{ fontSize: '14px', color: '#0066cc', textDecoration: 'none' }}>
              Forgot password?
            </a>
          </div>

          <ButtonV2 type="submit" variant="primary" size="large" style={{ width: '100%', marginTop: '24px' }}>
            Sign In
          </ButtonV2>
        </FormV2>

        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#666' }}>
          Don't have an account? <a href="#" style={{ color: '#0066cc', textDecoration: 'none' }}>Sign up</a>
        </p>
      </div>
    );
  },
};

export const All_Layouts: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <div>
          <h3>Vertical Layout</h3>
          <div style={{ maxWidth: '500px', marginTop: '16px' }}>
            <FormV2 layout="vertical">
              <FormV2.Item name="name" label="Name" required>
                <InputV2 placeholder="John Doe" />
              </FormV2.Item>
              <FormV2.Item name="email" label="Email" required>
                <InputV2 type="email" placeholder="john@example.com" />
              </FormV2.Item>
              <ButtonV2 type="submit" variant="primary">Submit</ButtonV2>
            </FormV2>
          </div>
        </div>

        <div>
          <h3>Horizontal Layout</h3>
          <div style={{ maxWidth: '700px', marginTop: '16px' }}>
            <FormV2 layout="horizontal">
              <FormV2.Item name="name" label="Name" required>
                <InputV2 placeholder="John Doe" />
              </FormV2.Item>
              <FormV2.Item name="email" label="Email" required>
                <InputV2 type="email" placeholder="john@example.com" />
              </FormV2.Item>
              <div style={{ marginLeft: '196px' }}>
                <ButtonV2 type="submit" variant="primary">Submit</ButtonV2>
              </div>
            </FormV2>
          </div>
        </div>

        <div>
          <h3>Inline Layout</h3>
          <div style={{ marginTop: '16px' }}>
            <FormV2 layout="inline">
              <FormV2.Item name="search" label="Search">
                <InputV2 placeholder="Search..." />
              </FormV2.Item>
              <FormV2.Item name="filter" label="Filter">
                <SelectV2 placeholder="Filter">
                  <SelectV2.Option value="all">All</SelectV2.Option>
                  <SelectV2.Option value="active">Active</SelectV2.Option>
                </SelectV2>
              </FormV2.Item>
              <ButtonV2 type="submit" variant="primary">Go</ButtonV2>
            </FormV2>
          </div>
        </div>
      </div>
    );
  },
};


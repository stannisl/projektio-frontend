// components/Landing.tsx
import React from 'react';
import styled from 'styled-components';

const LandingContainer = styled.div`
  background-color: #1a1a1a;
  color: white;
  padding: 50px;
  text-align: center;
`;

const FeatureCard = styled.div`
  background-color: #292929;
  padding: 20px;
  border-radius: 8px;
  margin: 10px;
`;

const Landing: React.FC = () => {
  return (
    <LandingContainer>
      <h1>Projektio</h1>
      <p>make your product better</p>
      <h2>Tools for better team management</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FeatureCard>
          <h3>Lorem Ipsum</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>More details</button>
        </FeatureCard>
        <FeatureCard>
          <h3>Ipsum Lorem</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button>More details</button>
        </FeatureCard>
      </div>
      <h2>Projektio Pricing</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <FeatureCard>
          <h3>Standard Edition</h3>
          <p>$ FREE</p>
          <button>Check out for free</button>
        </FeatureCard>
        <FeatureCard>
          <h3>Small Business</h3>
          <p>$20 per month</p>
          <button>Check out for $20</button>
        </FeatureCard>
        <FeatureCard>
          <h3>Enterprise Edition</h3>
          <p>$Contact Us</p>
          <button>Contact Us</button>
        </FeatureCard>
      </div>
    </LandingContainer>
  );
};

export default Landing;
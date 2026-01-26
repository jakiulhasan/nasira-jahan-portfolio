import React from "react";
import styled, { keyframes } from "styled-components";

const ProjectCard = ({ project }) => {
  const { link, img, title, buttonText, description, tags } = project;

  return (
    <Card>
      {/* The Glow Layer */}
      <div className="glow-container" />

      <InnerContent>
        <Image src={img} alt={title} />
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>

          {tags && (
            <Tags>
              {tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </Tags>
          )}

          <Button href={link} target="_blank" rel="noopener noreferrer">
            {buttonText || "View Project"}
          </Button>
        </Content>
      </InnerContent>
    </Card>
  );
};

export default ProjectCard;

/* ================= ANIMATIONS ================= */

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

/* ================= STYLES ================= */

export const Card = styled.div`
  position: relative;
  width: 100%;
  border-radius: 16px;
  overflow: hidden; /* Clips the rotating gradient to the card shape */
  padding: 1.5px; /* This creates the thickness of the "border" */
  background: rgba(255, 255, 255, 0.1);

  transition:
    transform 0.35s ease,
    box-shadow 0.35s ease;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);

  /* The Rotating Glow Background */
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      transparent,
      rgba(255, 255, 255, 0.8),
      transparent 30%
    );
    animation: ${rotate} 4s linear infinite;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(255, 255, 255, 0.15);
  }
`;

const InnerContent = styled.div`
  position: relative;
  z-index: 1; /* Sits above the rotating glow */
  background: #121212; /* This acts as the card background, obscuring the center of the glow */
  background: rgba(
    20,
    20,
    20,
    0.9
  ); /* Slightly transparent to maintain glass feel */
  backdrop-filter: blur(14px);
  border-radius: 15px; /* Slightly smaller than Card radius to fit inside */
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 18px;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 8px;
  color: #ffffff;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 12px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
`;

const Tag = styled.span`
  font-size: 0.7rem;
  padding: 4px 8px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
`;

const Button = styled.a`
  display: inline-block;
  width: 100%;
  padding: 10px 14px;
  border-radius: 10px;
  background: linear-gradient(135deg, #6a5af9, #a855f7);
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  transition: opacity 0.25s ease;

  &:hover {
    opacity: 0.85;
  }
`;

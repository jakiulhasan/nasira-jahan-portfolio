import React from "react";
import styled from "styled-components";

const ProjectCard = ({ project }) => {
  const { link, img, title, buttonText, description, tags } = project;

  return (
    <Card>
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
    </Card>
  );
};

export default ProjectCard;

/* ================= STYLES ================= */

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  overflow: hidden;

  transition:
    transform 0.35s ease,
    filter 0.35s ease,
    opacity 0.35s ease,
    box-shadow 0.35s ease;

  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  will-change: transform, filter;
`;

const Image = styled.img`
  width: 100%;
  height: 190px;
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

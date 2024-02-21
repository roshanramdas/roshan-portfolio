"use client";
import React from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  location?: string;
  date: string;
  responsibilities: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, location, date, responsibilities }) => (
  <div className="mb-6">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-500">{company} ({location}) | {date}</p>
    <ul className="list-disc ml-6">
      {responsibilities.map((responsibility, index) => (
        <li key={index} className="mb-2">{responsibility}</li>
      ))}
    </ul>
  </div>
);

export default ExperienceItem;

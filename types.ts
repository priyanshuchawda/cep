import type React from 'react';

export interface SubTopic {
  name: string;
  url: string;
}

export interface Subject {
  name: string;
  description: string;
  icon: React.ReactNode;
  url?: string;
  subtopics?: SubTopic[];
  bgColor: string;
  hoverBgColor: string;
  textColor: string;
  shadowColor: string;
}

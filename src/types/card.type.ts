import React from 'react';

export interface CardType {
  title: string;
  description: string;
  image: string;
  status: string;
  type?: string;
  icon: React.ReactNode;
}

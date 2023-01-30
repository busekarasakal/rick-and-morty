import React from 'react';

export interface NavbarTypes {
  text: string;
  isSelected?: boolean;
  path: string;
  onClick: () => void;
}

export interface LayoutType {
  children: React.ReactNode;
}
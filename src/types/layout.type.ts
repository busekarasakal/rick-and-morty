import React from 'react';

export interface NavbarTypes {
  text: string;
  isSelected?: boolean;
  path: string;
}

export interface LayoutType {
  children: React.ReactNode;
}
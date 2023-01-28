import React from 'react';

export interface NavbarTypes {
  text: string;
  icon?: React.ReactNode;
  isSelected?: boolean;
}

export interface LayoutType {
  children: React.ReactNode;
}
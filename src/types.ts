export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tag?: string;
}

export interface WomanBiography {
  id: string;
  name: string;
  title: string;
  birth?: string;
  origin: string;
  qualification: string;
  shortBio: string;
  fullBio: string[];
  keyContributions: string[];
  imagePath: string;
  fallbackImageName: string;
  fajrConnection: string;
}

export interface CityInfo {
  id: string;
  name: string;
  tagline: string;
  description: string;
  landmarks: string[];
  imagePath: string;
  fallbackImageName: string;
}

export interface FoodItem {
  id: string;
  name: string;
  category: string;
  description: string;
  culturalSignificance: string;
  imagePath: string;
  fallbackImageName: string;
}

export interface MemoryFigure {
  id: string;
  name: string;
  role: string;
  description: string;
  imagePath: string;
  fallbackImageName: string;
}

export interface ImpactPillar {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  keyPoints: string[];
  iconName: string;
  specialBadge?: string;
}

export interface ImpactSkillOption {
  id: string;
  label: string;
  icon: string;
  impactMessage: string;
  actionGuidance: string;
}

interface CollectionData {
  img: string;
  name: string;
  icon: string;
  volumn: string;
  volumnChange: number;
  floor: string;
  floorChange: number;
  items: string;
}

export interface TopCollectionProps {
  collections: CollectionData[];
}

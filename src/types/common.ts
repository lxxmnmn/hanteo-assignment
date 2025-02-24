export interface EventType {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  image: string;
  url: string;
}

export interface BannerType extends EventType {
  button: string;
}

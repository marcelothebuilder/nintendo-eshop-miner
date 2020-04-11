export interface GlobalPrice {
  title_id: number;
  sales_status: SalesStatus;
  regular_price: RegularPrice;
  country: string;
  countryName: string;
}

export interface RegularPrice {
  amount?: string;
  currency?: string;
  raw_value?: number;
}

export enum SalesStatus {
  NotFound = "not_found",
  Onsale = "onsale",
  Unreleased = "unreleased",
  SalesTermination = "sales_termination",
}

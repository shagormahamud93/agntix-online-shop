type Status = "active" | "inactive";

export interface ProductCategory {
  img: string;
  title: string;
  status: {
    enum: Status[];
    default: Status;
  };
}

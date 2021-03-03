import { Education } from "./education";
import { Skill } from "./skill";

export interface Employer {
  empName: string;
  designation: string;
  joinDate: string | Date;
  email: string;
  phoneNumber: string;
  skillInfo: Skill[];
  educationInfo: Education[];
}

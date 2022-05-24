export interface UserProps {
  userId: string;
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  isEmailVerified: boolean;
  phoneNumber: string;
  imageUrl: string;
  inviteCount: number;
  isAdmin: boolean;
  profiles: Array<ProfileProps>;
}

export interface ProfileProps {
  profileId: number;
  userType: string;
  scanType: string;
  accessPin: string;
  isApproved: boolean;
  company: CompanyProps;
}

export interface CompanyProps {
  name: string;
  companyId: string;
  companyAccess: string;
}

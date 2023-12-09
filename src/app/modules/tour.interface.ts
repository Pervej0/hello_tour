type TTourType = 'entertainment' | 'education' | 'adventure';

export type TOrganization = {
                    name: string;
                    location: string;
                    employeeNumbers?: number;
                    type?: 'govt' | 'private' | 'semi govt';
};

export type TTour = {
                    organization: TOrganization;
                    tourPlace: string;
                    totallMembers: number;
                    activity: string[];
                    tourType?: TTourType;
                    tourFee: number;
                    currency: 'usd';
                    startDate: string;
                    startLocation: string;
                    startTime: string;
                    alcoholFree: boolean;
                    contact: string;
                    isDeleted: boolean;
};

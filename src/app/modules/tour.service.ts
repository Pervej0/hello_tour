import { TTour } from './tour.interface';
import TourModel from './tour.model';

export const CreateTourDB = async (payload: TTour) => {
 const result = await TourModel.create(payload);
 return result;
};

export const GetAllTourDB = async () => {
 const result = await TourModel.find();
 return result;
};

export const GetSingleTourDB = async (id: string) => {
 const filter = { _id: id };
 const result = await TourModel.findById(filter);
 return result;
};

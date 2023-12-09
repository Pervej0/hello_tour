import { TTour } from './tour.interface';
import TourModel from './tour.model';

export const CreateTour = async (payload: TTour) => {
  const result = await TourModel.create(payload);
  return result;
};

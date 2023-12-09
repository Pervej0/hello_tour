import mongoose, { Schema } from 'mongoose';
import { TOrganization, TTour } from './tour.interface';

const organizationSchema = new Schema<TOrganization>({
 name: {
  type: String,
  required: [true, 'Organization name is required!'],
 },
 location: {
  type: String,
  required: [true, 'Organization location is required!'],
 },
 employeeNumbers: {
  type: Number,
 },
});

const TourSchema = new Schema<TTour>({
 organization: organizationSchema,
 tourPlace: {
  type: String,
  required: [true, 'Tour Place is required!'],
 },
 totallMembers: {
  type: Number,
  required: [true, 'totall Members is required!'],
 },
 activity: {
  type: [Array],
  required: [true, 'Activity items are required!'],
 },
 tourType: {
  type: String,
  enum: ['entertainment', 'education', 'adventure'],
 },
 tourFee: {
  type: Number,
  required: [true, 'Tour Fee is required!'],
 },
 currency: {
  type: String,
  default: 'usd',
 },
 startDate: {
  type: String,
  required: [true, 'startDate Fee is required!'],
 },
 startLocation: {
  type: String,
  required: [true, 'startLocation Fee is required!'],
 },
 startTime: {
  type: String,
  required: [true, 'startTime Fee is required!'],
 },
 alcoholFree: {
  type: Boolean,
  required: [true, 'startTime Fee is required!'],
  default: true,
 },
 contact: {
  type: String,
  required: [true, 'Contact number is required!'],
 },
 isDeleted: {
  type: Boolean,
  default: false,
 },
});

// TourSchema.pre('save', (next) => {});

const TourModel = mongoose.model<TTour>('Tour', TourSchema);
export default TourModel;

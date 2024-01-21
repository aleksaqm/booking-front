import {GottenAvailabilityPrice} from "../model/gotten-availability-price-model";

const startDate: Date = new Date(2024,2,10);
const endDate: Date = new Date(2024,2,15);

const mockAvailabilityPrice ={
  accommodationId: 1,
  startDate: startDate,
  endDate: endDate,
  guests: 3

};

const mockGottenAvailabilityPrice = {
  available: true,
  pricePerNight: 300,
  totalPrice: 900
}

export {mockAvailabilityPrice, mockGottenAvailabilityPrice}

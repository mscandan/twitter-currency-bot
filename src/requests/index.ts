import axios from 'axios';
import { CurrencyResponseType } from '../types';

const Requester = axios.create();
const CURRENCY_BASE_URL = 'http://api.exchangeratesapi.io/v1/latest';

export const requests = {
  getLatestCurrencyRate: async (): Promise<number> => {
    const { data } = await Requester.get<CurrencyResponseType>(
      `${CURRENCY_BASE_URL}?access_key=${process.env.CURRENCY_ACCESS_KEY}`,
    );
    const { USD, TRY } = data.rates;
    return Number((TRY / USD).toFixed(4));
  },
};

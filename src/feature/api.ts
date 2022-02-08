import axios from 'axios';
import { RootState } from '../store';
import { API_URL, ORGANISATION_ID } from '../resources/constants';
import { ApiResponseType } from '../resources/types';

export const fetchResultsFormAPI = async (state: RootState) => {
    let url = `${API_URL}/org/${ORGANISATION_ID}/sample?limit=${state.pagination.limit}&offset=${state.pagination.current_page - 1}&`;
    const params = new URLSearchParams();

    let k: keyof typeof state.search.query;
    for (k in state.search.query) {
        if (state.search.query[k]!.length > 1) {
            params.append(k, state.search.query[k]!)
        }
    }
    
    url += params.toString();
    try {
        const res = await axios.get(url)
        const { data, meta, included } = res.data as ApiResponseType;
        return {
            status: state.result.status,
            data: data.map((result, i) => {
                return {
                    patientName: included[i].attributes.name,
                    sampleId: result.attributes.sampleId,
                    result: result.attributes.result || '',
                    resultType: result.attributes.resultType,
                    resultTime: new Date(result.attributes.resultTime).toLocaleString(),
                    activationTime: new Date(result.attributes.activateTime).toLocaleString()
                }
            }),
            meta: {
                total: meta.total
            }
        }
    } catch {
        return {
            status: 'rejected',
            data: [],
            meta: {
                total: 0
            }
        }
    }
};
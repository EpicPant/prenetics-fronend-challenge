export interface SearchState {
    value: string;
    query: SearchQuery;
}

export interface PaginationState {
    current_page: number;
    total_page: number;
    limit: number;
}

export interface ResultState {
    status: string;
    meta: {
        total: number
    };
    data: ResultType[]
}

export interface ResultType {
    result: string;
    activationTime: string;
    resultTime: string;
    resultType: string; 
    sampleId: string;
    patientName: string;
}

export interface ApiResponseType {
    meta: {
        total: number;
    };
    data: [
        {
            id: string;
            type: string;
            attributes: {
                resultType: string;
                sampleId: string;
                activateTime: string;
                resultTime: string;
                result: string;
            }
        }
    ];
    included: [
        {
            id: string;
            type: string;
            attributes: {
                name: string;
            }
        }
    ]
}

export interface SearchQuery {
    patientname?: string;
    sampleid?: string;
    activationtime?: string;
    resulttime?: string;
}
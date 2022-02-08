import { ApiResponseType, ResultType } from "./types"

export const mockData: ResultType = {
    sampleId: "213812937246234",
    patientName: "James Yip",
    activationTime: new Date().toLocaleString(),
    resultTime: new Date().toLocaleString(),
    result: 'negative',
    resultType: 'rtpcr'
}

export const mockAPIResponse: ApiResponseType = {
    meta: {
        total: 2
    },
    data: [
        {
            id: '',
            type: '',
            attributes: {
                resultType: mockData.resultType,
                sampleId: mockData.sampleId,
                activateTime: mockData.activationTime,
                resultTime: mockData.resultTime,
                result: mockData.result
            }
        },
        {
            id: '',
            type: '',
            attributes: {
                resultType: mockData.resultType,
                sampleId: mockData.sampleId,
                activateTime: mockData.activationTime,
                resultTime: mockData.resultTime,
                result: mockData.result
            }
        }
    ],
    included: [
        {
            id: '',
            type: '',
            attributes: {
                name: mockData.patientName
            }
        },
        {
            id: '',
            type: '',
            attributes: {
                name: mockData.patientName
            }
        }
    ]
}
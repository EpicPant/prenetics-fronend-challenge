import { ResultType } from "./types"

export const mockData: ResultType = {
    sampleId: "213812937246234",
    patientName: "Peter Chan",
    activationTime: new Date().toLocaleString(),
    resultTime: new Date().toLocaleString(),
    result: 'negative',
    resultType: 'rtpcr'
}
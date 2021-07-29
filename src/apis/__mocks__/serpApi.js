import results from "../../tests/fixtures/results"
export default {
    get() {
        return new Promise((res, rej) => {
            res({data: {organic_results: results}})
        })
    }
}
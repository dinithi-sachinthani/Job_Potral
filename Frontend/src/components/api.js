import axios from "axios";

export default class API {
  static JobDetails() {
    //   useEffect(() => {
    //     (async () => await Load())();
    //   }, []);
    // //With error handling
    //   async function Load() {
    try {
      const result = axios.get("http://127.0.0.1:8000/api/jobs/", {});
      console.log(result);
      // setJobs(result.data);
      console.log(result.data);
    } catch (e) {
      console.error();
    }
  }
}

import axios from "axios";

interface Pad {
  latitude: string;
  longitude: string;
}
export interface Launch {
  id: string;
  name: string;
  mission: string;
  mission_name: string;
  pad: Pad;
}
export interface LaunchResponse {
  results: Launch[];
}

export async function fetchAllLaunches(date: Date) {
  const before = new Date(date);
  before.setMonth(date.getMonth() + 3);
  const response = await axios.get<LaunchResponse>(`${process.env.REACT_APP_API_BASE_URL}/launch`, {
    params: {
      mode: "detailed",
      window_start__lt: before.toISOString(),
      window_start__gt: date.toISOString(),
    },
  });

  return response.data.results;
}

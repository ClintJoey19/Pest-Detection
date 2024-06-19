import axios from "axios";
import { detectPlants } from "./detection";

export const POST = async (req: Request) => {
  try {
    const { imageUrl } = await req.json();

    const res = await axios({
      method: "POST",
      url: "https://detect.roboflow.com/bad-forage-v2/1",
      params: {
        api_key: "oQlte7b2JXcLhVMtf196",
        image: imageUrl,
      },
    });

    const data = await res.data;
    console.log(data);

    const bufferedOutput = await detectPlants(data, imageUrl);

    return Response.json({ data, bufferedOutput });
  } catch (error) {
    console.error(error);
  }
};

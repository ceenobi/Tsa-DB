// import { tableLinks } from "@utils";
import axios from "axios";
import { create } from "zustand";

const fetchData = (tableLinks) =>
  create((set) => {
    return {
      data: [],
      fetchAndSetData: async () => {
        try {
          const res = await axios.get(tableLinks.data);
          set({
            data: res.data,
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },
    };
  });

export { fetchData };

import { tableLinks } from "@utils";
// import axios from "axios";
import { create } from "zustand";

const useFetchData = create((set) => {
    return {
      data: [],
      fetchAndSetData: () => {
        try {
          const res = tableLinks;
          set({
            data: res.data,
          });
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      },
    };
  });

export { useFetchData };

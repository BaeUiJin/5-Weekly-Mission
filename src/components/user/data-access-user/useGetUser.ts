import type { SampleUser } from "../../../types/data-access-types";
import type { asyncFunctionType } from "@/src/utils";
import { useAsync } from "@/src/utils";
import { axiosInstance } from "@/src/utils";

interface useGetUserType {
  (): {
    loading: boolean;
    error: any;
    user: SampleUser | null;
  };
}

export const useGetUser: useGetUserType = () => {
  const getUser: asyncFunctionType = () => axiosInstance.get("sample/user");
  const { loading, error, data: rawDataOfUser } = useAsync(getUser);

  const isUser = (rawDataOfUser: any): rawDataOfUser is SampleUser => {
    return rawDataOfUser !== null && typeof rawDataOfUser === "object";
  };

  const user = isUser(rawDataOfUser) ? rawDataOfUser : null;

  return { loading, error, user };
};

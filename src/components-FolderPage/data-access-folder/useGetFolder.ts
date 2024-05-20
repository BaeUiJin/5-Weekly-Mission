import { mapFolderData } from "@/components-FolderPage/util-map";
import { useAsync } from "@/common/util";
import { axiosInstance } from "@/common/util";
import type { mapFolderDataReturnType } from "@/components-FolderPage/util-map";
import type { asyncFunctionType } from "@/common/util";
import type { SampleFolder } from "@/common/types/data-access-types";

interface useGetFolderType {
  (): {
    loading: boolean;
    error: any;
    folder: null | mapFolderDataReturnType;
  };
}

export const useGetFolder: useGetFolderType = () => {
  const getFolder: asyncFunctionType = () => axiosInstance.get("sample/folder");
  const { loading, error, data: rawFolderData } = useAsync(getFolder);

  // NOTE: 타입가드
  const isSampleFolder = (
    rawFolderData: any
  ): rawFolderData is SampleFolder => {
    return (
      rawFolderData !== null &&
      typeof rawFolderData === "object" &&
      "folder" in rawFolderData
    );
  };

  const folder = isSampleFolder(rawFolderData)
    ? mapFolderData(rawFolderData.folder)
    : null;

  return { loading, error, folder };
};

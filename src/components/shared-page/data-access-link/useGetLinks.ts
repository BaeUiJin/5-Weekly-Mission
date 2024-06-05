import { useCallback, useEffect } from "react";
import { axiosInstance } from "@/src/utils";
import { mapLinksData } from "@/src/utils/mapLinksData";
import { useAsync } from "@/src/utils";
import { allLinksId } from "./constant";
import type { asyncFunctionType } from "@/src/utils";
import type {
  EditedSampleLink,
  Link,
  Links,
  SampleLink,
} from "../../../types/data-access-types";

interface useGetLinksType {
  (folderId: string | number): {
    execute: () => Promise<void>;
    loading: boolean;
    error: any;
    links: EditedSampleLink[] | null;
  };
}

interface mapRawLinksDataType {
  ({ id, created_at, url, title, description, image_source }: Link): SampleLink;
}

export const useGetLinks: useGetLinksType = (folderId = allLinksId) => {
  const queryString: string =
    folderId === allLinksId ? "" : `?folderId=${folderId}`;
  const getLinks: asyncFunctionType = useCallback(
    () => axiosInstance.get(`users/1/links${queryString}`),
    [queryString]
  );
  const { execute, loading, error, data: rawLinksData } = useAsync(getLinks);

  const isLinks = (rawLinksData: any): rawLinksData is Links => {
    return (
      rawLinksData !== null &&
      typeof rawLinksData === "object" &&
      "data" in rawLinksData
    );
  };

  const mapRawLinksData: mapRawLinksDataType = ({
    id,
    created_at,
    url,
    title,
    description,
    image_source,
  }) => {
    return {
      id,
      createdAt: created_at,
      url,
      title,
      description,
      imageSource: image_source,
    };
  };

  const links = isLinks(rawLinksData)
    ? rawLinksData.data.map(mapRawLinksData).map(mapLinksData)
    : null;

  useEffect(() => {
    execute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderId]);

  return { execute, loading, error, links };
};

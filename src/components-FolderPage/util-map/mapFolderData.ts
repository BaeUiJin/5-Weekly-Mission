import type {
  EditedSampleLink,
  SampleFolder,
} from "@/common/types/data-access-types";
import { mapLinksData } from "@/common/util/mapLinksData";

export interface mapFolderDataReturnType {
  profileImage: string;
  ownerName: string;
  folderName: string;
  links: EditedSampleLink[];
}

interface mapFolderDataType {
  (folder: SampleFolder["folder"]): mapFolderDataReturnType;
}

export const mapFolderData: mapFolderDataType = (folder) => {
  const { name, owner, links } = folder;

  return {
    profileImage: owner.profileImageSource,
    ownerName: owner.name,
    folderName: name,
    links: links.map(mapLinksData),
  };
};

import { useGetFolder } from "@/components-FolderPage/data-access-folder";
import { Layout } from "@/common/feature-layout";
import { SharedLayout } from "@/page-layout/SharedLayout";
import { CardList } from "@/components-SharedPage/feature-card-list";
import { FolderInfo } from "@/components-SharedPage/ui-folder-info";
import { ReadOnlyCard } from "@/components-SharedPage/ui-read-only-card";
import { SearchBar } from "@/components-SharedPage/ui-search-bar";
import { useState } from "react";

export const SharedPage = () => {
  const { folder } = useGetFolder();
  const { profileImage, ownerName, folderName, links } = folder || {};
  const [keyword, setKeyword] = useState<string>("");

  return (
    <Layout isSticky={true}>
      <SharedLayout
        folderInfo={
          <FolderInfo
            profileImage={profileImage}
            ownerName={ownerName}
            folderName={folderName}
          />
        }
        searchBar={<SearchBar onKeywordSubmit={setKeyword} />}
        cardList={
          <CardList links={links}>
            {links?.map((link) => (
              <ReadOnlyCard key={link?.id} {...link} />
            ))}
          </CardList>
        }
      />
    </Layout>
  );
};

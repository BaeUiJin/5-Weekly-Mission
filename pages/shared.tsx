import { useGetFolder } from "@/src/components-folder/data-access-folder";
import { Layout } from "@/src/components-common/feature-layout";
import { SharedLayout } from "@/src/page-layout/SharedLayout";
import { CardList } from "@/src/components-shared/feature-card-list";
import { FolderInfo } from "@/src/components-shared/ui-folder-info";
import { ReadOnlyCard } from "@/src/components-shared/ui-read-only-card";
import { SearchBar } from "@/src/components-shared/ui-search-bar";
import { useState } from "react";

export default function SharedPage() {
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
}

import { useGetFolders } from "@/components-FolderPage/data-access-folder";
import { useGetLinks } from "@/components-SharedPage/data-access-link";
import { Layout } from "@/common/feature-layout";
import { FolderLayout } from "@/page-layout/FolderLayout";
import { FolderToolBar } from "@/components-FolderPage/feature-folder-tool-bar";
import { SearchBar } from "@/components-SharedPage/ui-search-bar";
import { useState } from "react";
import { allLinksId } from "@/components-SharedPage/data-access-link/constant";
import { LinkForm } from "@/components-SharedPage/feature-link-form";
import { CardList } from "@/components-SharedPage/feature-card-list";

export const FolderPage = () => {
  const { folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState<string | number>(
    allLinksId
  );
  const { links, loading } = useGetLinks(selectedFolderId);
  const [keyword, setKeyword] = useState<string>("");

  const filteredLinks = links?.filter(({ id, alt, description }) => {
    return [id, alt, description].join("").includes(keyword);
  });

  return (
    <Layout isSticky={false}>
      <FolderLayout
        linkForm={<LinkForm />}
        searchBar={<SearchBar onKeywordSubmit={setKeyword} />}
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
            setSelectedFolderId={setSelectedFolderId}
            setKeyword={setKeyword}
          />
        }
        cardList={loading ? null : <CardList links={filteredLinks} />}
      />
    </Layout>
  );
};

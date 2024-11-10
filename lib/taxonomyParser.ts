import { getSinglePage } from "@lib/contentParser";
import { slugify } from "./utils/textConverter";

// get all taxonomies from frontmatter
export const getTaxonomy = (folder:any, name:any) => {
  const singlePages = getSinglePage(folder);
  const taxonomyPages = singlePages.map((page:any) => page.frontmatter[name]);
  let taxonomies:any = [];
  for (let i = 0; i < taxonomyPages.length; i++) {
    const categoryArray = taxonomyPages[i];
    for (let j = 0; j < categoryArray.length; j++) {
      taxonomies.push(slugify(categoryArray[j]));
    }
  }
  const taxonomy = [...new Set(taxonomies)];
  return taxonomy;
};

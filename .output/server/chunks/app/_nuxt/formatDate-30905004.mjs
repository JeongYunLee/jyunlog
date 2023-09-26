import { u as useAppConfig } from './config-acf75f8a.mjs';

function __unimport_formatDate(date) {
  const siteMetadata = useAppConfig().metadata;
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const now = new Date(date).toLocaleDateString(siteMetadata.locale, options);
  return now;
}

export { __unimport_formatDate as _ };
//# sourceMappingURL=formatDate-30905004.mjs.map

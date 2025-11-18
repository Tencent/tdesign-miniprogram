interface DocType {
  title: string;
  titleEn?: string;
  type?: string;
  children?: DocType[];
}

export function sortDocs(docs: DocType[]): DocType[] {
  const innerDocs: DocType[] = [];
  docs.forEach((item: DocType) => {
    let { children } = item;
    if (item.type === 'component') {
      children = item.children?.sort((a: any, b: any) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
    }
    if (children) {
      item.children = sortDocs(children);
    }
    innerDocs.push(item);
  });
  return innerDocs;
}

function compareVersion(version1, version2) {
  const v1 = version1.split('.');
  const v2 = version2.split('.');
  const len = Math.max(v1.length, v2.length);

  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }

  for (let i = 0; i < len; i++) {
    const num1 = parseInt(v1[i], 10);
    const num2 = parseInt(v2[i], 10);

    if (num1 > num2) {
      return 1;
    }
    if (num1 < num2) {
      return -1;
    }
  }

  return 0;
}

function filterStableVersions(versionList) {
  return versionList.filter(version => !version.includes('-'));
}

// 过滤小版本 + 版本号排序
export function filterVersions(versions) {
  return filterStableVersions(versions).sort(compareVersion);
}

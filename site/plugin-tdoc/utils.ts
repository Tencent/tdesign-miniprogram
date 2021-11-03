import ContributorsData from '../../common/contributors/component-contributors.json';
import ContributorsInfo from '../../common/contributors/contributors-info.json';

const getContributors = (componentName?: string) => {
  const componentInfo = ContributorsData.mobile.find((item) => item.name === componentName);
  if (!componentInfo) {
    return [];
  }

  let { tasks } = componentInfo;
  tasks = tasks.filter((item) => item.name.indexOf('wx') > -1 && item.contributors.length > 0);

  const members: Record<string, {
    role: string[],
    roleName: string[],
  }> = {};
  tasks.forEach((c) => {
    c.contributors.forEach((m) => {
      if (members[m]) {
        members[m].role.push(c.name);
        members[m].roleName.push(c.fullName);
      } else {
        members[m] = {
          role: [c.name],
          roleName: [c.fullName],
        };
      }
    });
  });

  return Object.keys(members).map((username) => {
    const userInfo = (ContributorsInfo as any)[username] || {};
    if (userInfo.bgName) {
      const match = userInfo.bgName.match(/^[a-z]+/i);
      userInfo.bgName = match ? match[0] : userInfo.bgName;
      userInfo.department = `${userInfo.bgName}/${userInfo.departmentName}`;
    }
    return {
      username,
      roleNames: members[username].roleName.join('/'),
      ...members[username],
      ...userInfo,
    };
  });
};

export {
  getContributors,
};

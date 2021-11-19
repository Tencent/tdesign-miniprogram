import ContributorsData from '../../common/contributors/github-contributors.json';

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
    return {
      username: username.split(/github_/).slice(-1)[0],
      roleNames: members[username].roleName.join('/'),
      ...members[username],
    };
  });
};

export {
  getContributors,
};

export function goBackOrGoHome(home = '/pages/home/home') {
  const pages = getCurrentPages();

  if (pages.length > 1) {
    uni.navigateBack();
  } else {
    uni.navigateTo({
      url: home,
    });
  }
}

export default goBackOrGoHome;

export const isMobile = () => {
  return /iPhone|iPad|iPod|Android|IEMobile|WPDesktop|BlackBerry|Opera Mini/i.test(navigator.userAgent)
}

export default {
  isMobile
}
